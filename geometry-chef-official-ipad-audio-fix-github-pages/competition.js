/* 三關抽題及逐題競賽計分。 */
(function(global,factory){
  const api=factory();
  if(typeof module==='object'&&module.exports)module.exports=api;
  global.CHEF_COMPETITION=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(){
'use strict';
const LIMIT=100, POINTS_PER_QUESTION=200, WRONG_CHOICE_COST=50, WRONG_CUT_SECONDS=10;
function shapeFamily(t){
  if(t==='三角形'||t==='等腰三角形')return 'triangle';
  if(t==='四邊形'||t==='長方形'||t==='正方形')return 'quadrilateral';
  if(t==='圓形'||t==='圓環')return 'circle';
  if(t==='等腰梯形'||t==='梯形')return 'trapezoid';
  return t;
}
function shuffle(items,rng=Math.random){
  const out=[...items];
  for(let i=out.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[out[i],out[j]]=[out[j],out[i]];}
  return out;
}
function createOrder(levels,rng=Math.random){
  // 33-item bank -> five foods per stage. Preserve diversity in shape, source and
  // canonical direction without changing the competition scoring rules.
  const stages=[1,2,3].map(stage=>levels.filter(q=>q.stage===stage));
  if(stages.some(s=>s.length<5))throw Error('Each stage requires at least five foods.');
  const sameShape=(a,b)=>a&&b&&shapeFamily(a.target)===shapeFamily(b.target);
  const dirOK=sample=>{const n=sample.filter(q=>q.canonicalCut==='H').length;return n===2||n===3;};
  function arrange(sample,last){
    function dfs(chosen,remain){
      if(!remain.length)return chosen;
      for(const item of shuffle(remain,rng)){
        if(sameShape(chosen.at(-1)||last,item))continue;
        const r=dfs([...chosen,item],remain.filter(q=>q.id!==item.id));
        if(r)return r;
      }
      return null;
    }
    return dfs([],sample);
  }
  function buildOne(){
    let all=[],last=null;
    for(let i=0;i<3;i++){
      const pool=stages[i];const both=pool.some(q=>q.source==='new')&&pool.some(q=>q.source!=='new');
      let chosen=null;
      for(let attempt=0;attempt<500;attempt++){
        const sample=shuffle(pool,rng).slice(0,5);
        if(!dirOK(sample))continue;
        if(both&&(sample.every(q=>q.source==='new')||sample.every(q=>q.source!=='new')))continue;
        chosen=arrange(sample,last);
        if(chosen)break;
      }
      if(!chosen){
        function search(prefix,remaining){
          if(prefix.length===5){
            if(!dirOK(prefix))return null;
            if(both&&(prefix.every(q=>q.source==='new')||prefix.every(q=>q.source!=='new')))return null;
            return prefix;
          }
          for(const item of shuffle(remaining,rng)){
            if(sameShape(prefix.at(-1)||last,item))continue;
            const r=search([...prefix,item],remaining.filter(q=>q.id!==item.id));
            if(r)return r;
          }
          return null;
        }
        chosen=search([],pool);
      }
      if(!chosen)return null;
      all.push(...chosen);last=chosen.at(-1);
    }
    return all;
  }
  for(let i=0;i<80;i++){
    const result=buildOne();if(!result)continue;
    const h=result.filter(q=>q.canonicalCut==='H').length;
    if(h===7||h===8)return result;
  }
  throw Error('Cannot select a balanced 15-question contest from this library.');
}
function remainingSeconds(startedAt,wrongCuts=0,now=Date.now()){
  if(!Number.isFinite(startedAt))return LIMIT;
  return Math.max(0,Math.min(LIMIT,LIMIT-Math.max(0,now-startedAt)/1000-wrongCuts*WRONG_CUT_SECONDS));
}
function speedPoints(remaining){return Math.round(POINTS_PER_QUESTION*Math.max(0,Math.min(LIMIT,remaining))/LIMIT);}
function questionPoints(remaining,wrongChoices){
  const gross=speedPoints(remaining);
  const penalty=Math.max(0,Math.floor(wrongChoices))*WRONG_CHOICE_COST;
  return Math.max(0,gross-penalty);
}
function stagePoints(netEarned){return Math.max(0,Math.min(1000,netEarned));}
return {LIMIT,POINTS_PER_QUESTION,WRONG_CHOICE_COST,WRONG_CUT_SECONDS,shapeFamily,createOrder,remainingSeconds,speedPoints,questionPoints,stagePoints};
});
