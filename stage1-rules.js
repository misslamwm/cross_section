/*
  第一關使用較靈活的手勢判定：螢幕水平揮刀 -> 桌面水平平面 H；其餘角度 -> 桌面鉛垂平面 V。
  球體這一題按主廚水平刀法要求判定；球體的幾何截面仍然是圓形。
*/
(function(global,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  global.CHEF_STAGE1_RULES=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const hypot=Math.hypot;
function pointInPolygon(p,poly){let yes=false;for(let i=0,j=poly.length-1;i<poly.length;j=i++){
 const a=poly[i],b=poly[j];if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])yes=!yes;
}return yes;}
function cross(a,b){return a.x*b.y-a.y*b.x}
function segmentIntersection(a,b,c,d){let u={x:b.x-a.x,y:b.y-a.y},v={x:d.x-c.x,y:d.y-c.y},den=cross(u,v);if(Math.abs(den)<1e-10)return null;
 let t=cross({x:c.x-a.x,y:c.y-a.y},v)/den,s=cross({x:c.x-a.x,y:c.y-a.y},u)/den;return t>=0&&t<=1&&s>=0&&s<=1?t:null;}
function foodOverlap(a,b,poly){let dx=b.x-a.x,dy=b.y-a.y,length=hypot(dx,dy);if(length<1e-6)return 0;let ts=[0,1];for(let i=0;i<poly.length;i++){
 let p={x:poly[i][0],y:poly[i][1]},q={x:poly[(i+1)%poly.length][0],y:poly[(i+1)%poly.length][1]};let t=segmentIntersection(a,b,p,q);if(t!==null)ts.push(t);
}ts.sort((x,y)=>x-y);let inside=0;for(let i=1;i<ts.length;i++){let a0=ts[i-1],a1=ts[i];if(a1-a0<1e-8)continue;let mid=(a0+a1)/2;
 if(pointInPolygon({x:a.x+dx*mid,y:a.y+dy*mid},poly))inside+=(a1-a0)*length;
}return inside;}
function angleOf(a,b){let value=Math.atan2(b.y-a.y,b.x-a.x)*180/Math.PI;return (value%180+180)%180;}
function angleDistance(a,b){let d=Math.abs(a-b)%180;return Math.min(d,180-d)}
function pointLineDistance(p,a,b){let dx=b.x-a.x,dy=b.y-a.y;return Math.abs(dx*(a.y-p.y)-dy*(a.x-p.x))/(hypot(dx,dy)||1);}
function isHorizontal(angle){return angleDistance(angle,0)<=22;}

function judge(item,a,b){
 if(!item||!item.polygon)return {ok:false,reason:'模型未載入',kind:'missing'};
 let length=hypot(b.x-a.x,b.y-a.y);if(length<.13)return {ok:false,reason:'刀光要劃得長一點。',kind:'short'};
 let overlap=foodOverlap(a,b,item.polygon);
 if(overlap<.105)return {ok:false,reason:'請從食物上劃過一刀。',kind:'miss',overlap};
 let angle=angleOf(a,b),horizontal=isHorizontal(angle),cut=horizontal?'H':'V';
 let shape='其他截面',ok=false;

 if(item.model==='box' || item.model==='uprightBox'){
   shape='長方形';
   ok = item.model==='uprightBox' ? (item.allowOrthogonalBoth?true:!horizontal) : true;
 }
 else if(item.model==='cylinder'){
   let perp=((item.axisAngle||35)+90)%180;
   ok=!horizontal&&angleDistance(angle,perp)<=(item.angleTolerance||35);
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='horizontalTriPrism'){
   // Triangular prism lies flat, only a cut normal to its long axis gives triangle.
   ok=!horizontal&&angleDistance(angle,90)<=36;
   shape=ok?'三角形':'其他截面';
 }
 else if(item.model==='uprightFrustum'){
   const center={x:item.center?.[0]??.5,y:item.center?.[1]??.55};
   ok=!horizontal&&angleDistance(angle,90)<=24&&pointLineDistance(center,a,b)<=(item.centerTolerance??.11);
   shape=ok?'等腰梯形':'其他截面';
 }
 else if(item.model==='horizontalCylinderUniform'){
   // 橫放圓柱：柱軸沿畫面橫向。單獨的鉛垂手勢還須垂直柱軸。
   const normal=((item.axisAngle??0)+90)%180;
   ok=!horizontal&&angleDistance(angle,normal)<=(item.angleTolerance??22);
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='verticalTriPrismUniform'){
   ok=horizontal;
   shape=ok?'三角形':'其他截面';
 }
 else if(item.model==='horizontalBoxUniform'){
   // 水平切，或方位與長方體邊對齊的鉛垂切，均可產生相同大小矩形截面。
   const axis=item.axisAngle??0;
   const aligned=angleDistance(angle,axis)<=(item.angleTolerance??23)||angleDistance(angle,(axis+90)%180)<=(item.angleTolerance??23);
   ok=horizontal||(!horizontal&&aligned);
   shape=ok?'長方形':'其他截面';
 }
 else if(item.model==='uprightCylinderUniform'){
   ok=horizontal;
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='uprightCylinder'){
   ok=horizontal;
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='sphere'){
   ok=item.anyDirection?true:horizontal; // Optional stage-1 sphere may be cut in any direction through the interior.
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='triPyramid'){
   if(horizontal){ok=true;shape='三角形';}
   else {
     let apex={x:item.apex[0],y:item.apex[1]},dist=pointLineDistance(apex,a,b),t=((apex.x-a.x)*(b.x-a.x)+(apex.y-a.y)*(b.y-a.y))/(length*length);
     ok=(dist<=item.apexTolerance&&t>=-.4&&t<=1.4);
     shape=ok?'三角形':'其他截面';
   }
 }
 else if(item.model==='squarePyramid'){
   ok=horizontal;
   shape=ok?(item.target==='正方形'?'正方形':'四邊形'):'其他截面';
 }
 else if(item.model==='uprightCone'){
   if(!horizontal){
     let center={x:item.center?.[0]??.5,y:item.center?.[1]??.55};
     ok=pointLineDistance(center,a,b)<=(item.centerTolerance??.1);
   }
   shape=ok?'等腰三角形':'其他截面';
 }
 else {
   return {ok:false,reason:'暫不支援這款食物。',kind:'unsupported'};
 }

 const reason=ok?'成功！':item.stage===3?'再試一次！提示：均勻截面的形狀和大小都要與立體的底面（柱體兩端的底面）相同。':(item.model==='sphere'?'請用一刀穿過球體內部。':'這一刀未能得到訂單要求的截面，請再試一次。');
 return {ok,kind:ok?'success':'geometry',reason,plane:cut==='H'?'水平切割':cut==='V'?'鉛垂切割':'任意平面切割',cut,angle,overlap,shape};
}
return {evaluate:judge,angleOf,angleDistance,pointLineDistance,foodOverlap,pointInPolygon,isHorizontal};
});
