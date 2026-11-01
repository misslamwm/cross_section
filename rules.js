/*
  幾何廚神大挑戰：嚴格直向／橫向揮刀操作。
  水平刀 = 螢幕水平（0° ± 15°），鉛垂刀 = 螢幕垂直（90° ± 15°）。
  介乎兩者之間的斜線不再自動當作鉛垂刀；會要求重切並扣 10 秒。
  這是 2D 手勢到預先定義 3D 平面的教學映射，非任意 3D 切面模擬。
*/
(function(global,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  global.CHEF_RULES=api;
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
const STRAIGHT_TOLERANCE=15;
function isHorizontal(angle){return angleDistance(angle,0)<=STRAIGHT_TOLERANCE;}
function isVertical(angle){return angleDistance(angle,90)<=STRAIGHT_TOLERANCE;}
function cutType(angle){return isHorizontal(angle)?'H':isVertical(angle)?'V':null;}

function judge(item,a,b){
 if(!item||!item.polygon)return {ok:false,reason:'模型未載入',kind:'missing'};
 let length=hypot(b.x-a.x,b.y-a.y);if(length<.13)return {ok:false,reason:'刀光要劃得長一點。',kind:'short'};
 let overlap=foodOverlap(a,b,item.polygon);
 if(overlap<.105)return {ok:false,reason:'請從食物上劃過一刀。',kind:'miss',overlap};
 let angle=angleOf(a,b),cut=cutType(angle);
 if(!cut)return {ok:false,kind:'geometry',reason:'請畫接近正水平 ↔️ 或正直向 ↕️ 的刀線；斜線不算水平或鉛垂。',angle,overlap,cut:null,shape:'其他截面'};
 const horizontal=cut==='H',vertical=cut==='V';
 let shape='其他截面',ok=false;

 if(item.model==='box' || item.model==='uprightBox'){
   shape='長方形';
   ok = item.model==='uprightBox' ? vertical : true;
 }
 else if(item.model==='cylinder'){
   // 舊插圖的柱軸以透視角度呈現，螢幕的鉛垂揮刀代表
   // 經過模型的正交端面；絕不接受螢幕斜線作鉛垂刀。
   ok=vertical;
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='horizontalCylinderUniform'||item.model==='horizontalHollowCylinderUniform'){
   // 橫放圓柱：柱軸沿畫面橫向。單獨的鉛垂手勢還須垂直柱軸。
   ok=vertical;
   shape=ok?(item.model==='horizontalHollowCylinderUniform'?'圓環':'圓形'):'其他截面';
 }
 else if(item.model==='verticalTriPrismUniform'){
   ok=horizontal;
   shape=ok?'三角形':'其他截面';
 }
 else if(item.model==='horizontalHexPrismAlong'||item.model==='horizontalCylinderAlong'){
   // The game treats a horizontal plane parallel to the prism/cylinder axis as a longitudinal section.
   ok=horizontal;
   shape=ok?'長方形':'其他截面';
 }
 else if(item.model==='horizontalSquareBarUniform'){
   // Square ended long prism: perpendicular vertical plane, cross section square.
   ok=vertical;
   shape=ok?'正方形':'其他截面';
 }
 else if(item.model==='horizontalBoxUniform'){
   // 水平切，或方位與長方體邊對齊的鉛垂切，均可產生相同大小矩形截面。
   // 長方體可選任一組平行、全等的相對面作底面；
   // 水平或與端面平行的鉛垂切法均可沿相應方向產生全等長方形。
   ok=horizontal||vertical;
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
   ok=cut===(item.canonicalCut||'H'); // Stage-2 chef specifies H or V. A sphere supports both geometrically, but obey the stated order.
   shape=ok?'圓形':'其他截面';
 }
 else if(item.model==='triPyramid'){
   if(horizontal){ok=true;shape='三角形';}
   else if(vertical){
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
   if(vertical){
     let center={x:item.center?.[0]??.5,y:item.center?.[1]??.55};
     ok=pointLineDistance(center,a,b)<=(item.centerTolerance??.1);
   }
   shape=ok?'等腰三角形':'其他截面';
 }
 else {
   return {ok:false,reason:'暫不支援這款食物。',kind:'unsupported'};
 }

 const reason=ok?'成功！':item.stage===3?'再試一次！均勻截面必須與所選底面平行，且形狀和大小均相同；注意食物是直立還是橫放。':(item.model==='sphere'?'請用一刀穿過球體內部。':'這一刀未能得到訂單要求的截面，請再試一次。');
 return {ok,kind:ok?'success':'geometry',reason,plane:cut==='H'?'水平切割':cut==='V'?'鉛垂切割':'任意平面切割',cut,angle,overlap,shape};
}
return {evaluate:judge,angleOf,angleDistance,pointLineDistance,foodOverlap,pointInPolygon,isHorizontal,isVertical,cutType,STRAIGHT_TOLERANCE};
});
