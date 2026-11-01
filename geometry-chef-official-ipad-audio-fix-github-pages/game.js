/* 幾何廚神大挑戰：觸控揮刀、三關題庫與逐題競賽計分。 */
(()=>{'use strict';
const LEVELS=CHEF_LEVELS,RULES=CHEF_RULES,STAGE1_RULES=CHEF_STAGE1_RULES,COMP=CHEF_COMPETITION,AUDIO=CHEF_AUDIO;
const root=document.querySelector('#app'),$=s=>document.querySelector(s);
const STAGE_NAMES={1:'初級學徒',2:'資深副廚',3:'米芝蓮主廚'};
const STAGE_DESCRIPTIONS={1:'看目標截面，直接揮刀；切對即可過關。',2:'依照主廚指令揮刀，再答四選一截面題。',3:'只知道「請切出均勻截面！」，自行選刀法，再答四選一。'};
const DISTRACTORS=Object.freeze({
 '圓形':['三角形','長方形','五邊形','梯形'],
 '長方形':['圓形','三角形','梯形','六邊形'],
 '三角形':['圓形','長方形','五邊形','梯形'],
 '四邊形':['圓形','三角形','五邊形','六邊形'],
 '等腰三角形':['圓形','長方形','梯形','五邊形'],
 '正方形':['圓形','三角形','五邊形','六邊形'],
 '等腰梯形':['圓形','三角形','五邊形','六邊形'],
 '圓環':['三角形','長方形','五邊形','六邊形']
});
const safe=t=>String(t).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const reduced=window.matchMedia?.('(prefers-reduced-motion: reduce)').matches||false;
let order=[],index=0,phase='home',history=[],earned={1:0,2:0,3:0},wrongChoices={1:0,2:0,3:0};
let attempts=0,wrongCuts=0,quizState=null,startedAt=null,ticker=null,mute=false;
let images={},canvas=null,ctx=null,box={x:0,y:0,s:0,w:0,h:0},gesture=null,trail=null,frame=0,observer=null;
for(const q of LEVELS)images[q.id]=new Image();
function current(){return order[index];}
function stageScore(stage){return COMP.stagePoints(earned[stage]);}
function overallScore(){return [1,2,3].reduce((sum,s)=>sum+stageScore(s),0);}
function shuffle(a){const result=[...a];for(let i=result.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[result[i],result[j]]=[result[j],result[i]]}return result;}
function sound(type){if(!mute)AUDIO.play(type);}
function release(){clearInterval(ticker);ticker=null;cancelAnimationFrame(frame);if(observer){observer.disconnect();observer=null;}gesture=null;trail=null;canvas=null;ctx=null;quizState=null;startedAt=null;}
function freezeClock(){clearInterval(ticker);ticker=null;}
function pointsTag(){return `<div class="score-chip" role="status" aria-live="polite" aria-label="目前總得分"><span class="score-chip-label">🏆 目前總分</span><span class="score-chip-number" id="score-value">${overallScore()}</span><span class="score-chip-max">/ 3000</span></div>`}
function topFrame(content){
 const isQuestion=['loading','play','quiz','won','timeout'].includes(phase);
 root.innerHTML=`<div class="layout"><header class="top"><div class="brand">🍳 幾何廚神大挑戰 <span>三關揮刀挑戰 · 15 道菜</span></div><div class="status" id="status">${isQuestion?`第 ${current().stage} 關 · ${index%5+1}/5`:'三關 · 15 道菜'}</div>${pointsTag()}${isQuestion?`<div class="timer-pill" id="timer-pill">⏱️ <span id="timer">${COMP.LIMIT}</span> 秒</div>`:''}<button type="button" id="mute" aria-label="切換音效">${mute?'🔇':'🔊'}</button></header>${content}</div>`;
 $('#mute').onclick=()=>{mute=!mute;AUDIO.setMuted(mute);$('#mute').textContent=mute?'🔇':'🔊';if(!mute)sound('success');};
}
function refreshScore(){const el=$('#score-value');if(el)el.textContent=overallScore();}
function remaining(now=Date.now()){return COMP.remainingSeconds(startedAt,wrongCuts,now);}
function updateTime(){const value=startedAt===null?100:remaining();const el=$('#timer');if(el)el.textContent=Math.ceil(value);$('#timer-pill')?.classList.toggle('urgent',value<=20);return value;}
function tick(){if(phase!=='play'&&phase!=='quiz')return;const value=updateTime();if(value<=0)timeUp();}
function shapeSVG(q){
 const t=q.target;
 const paths={
   '圓形':'<circle cx="130" cy="70" r="50"/>',
   '三角形':'<path d="M47 120 L216 120 L112 18 Z"/>',
   '等腰三角形':'<path d="M48 120 L212 120 L130 18 Z"/>',
   '長方形':'<rect x="30" y="38" width="200" height="69" rx="1"/>',
   '正方形':'<rect x="84" y="20" width="110" height="110" rx="1"/>',
   '四邊形':'<path d="M74 26 L196 35 L223 118 L40 112 Z"/>',
   '等腰梯形':'<path d="M88 30 L172 30 L224 119 L36 119 Z"/>',
   '圓環':'<path fill-rule="evenodd" d="M130 15a55 55 0 1 0 .01 0 M130 51a19 19 0 1 1 -.01 0"/>'
 };
 const shape=paths[t]||paths['長方形'];
 return `<svg viewBox="0 0 260 145" role="img" aria-label="${safe(t)}"><g fill="#ffe3a9" stroke="#a66a58" stroke-width="5" stroke-linejoin="round">${shape}</g></svg>`;
}
function home(){
 release();phase='home';
 topFrame(`<section class="hero fade"><div class="hero-emoji">🏆 🍙 🔪</div><h1>幾何廚神大挑戰</h1><div class="home-prize" aria-label="競賽滿分 3000 分"><span>🏆 全場最高分</span><strong>3,000 <small>分</small></strong><span>每關 1,000 分 · 三關共 15 題</span></div><p>三關各有擴充題庫，每關隨機抽出 5 款食物。用手指揮刀，挑戰你的截面判斷與速度！</p><div class="note"><strong>第一關｜初級學徒：</strong>按目標截面揮刀，切對便過關。<br><strong>第二關｜資深副廚：</strong>按照文字指令揮刀，再答四選一。<br><strong>第三關｜米芝蓮主廚：</strong>自行切出均勻截面，再答四選一。</div><div class="actions"><button class="primary" id="start">🔪 開始競賽</button><button type="button" id="rules-open" aria-haspopup="dialog" aria-controls="rules-dialog">📋 競賽規則</button><button type="button" id="sound-test" aria-label="試播遊戲音效">🔊 試播音效</button></div><p class="micro">不需要建立帳戶；點選「競賽規則」才會顯示詳細玩法和計分。</p><dialog id="rules-dialog" class="rules-dialog" aria-labelledby="rules-title"><div class="rules-body"><div class="rules-heading"><span class="rules-icon" aria-hidden="true">📋</span><div><p class="rules-kicker">幾何廚神大挑戰 · 競賽規則</p><h2 id="rules-title">競賽規則</h2></div></div><div class="rules-points"><div><strong>100</strong><span>每題秒數</span></div><div><strong>200</strong><span>每題滿分</span></div><div><strong>3,000</strong><span>全場滿分</span></div></div><div class="rules-section"><h3>如何得分？</h3><p>每題須在 100 秒內完成。<strong>速度分＝四捨五入（200 × 剩餘有效秒數 ÷ 100）</strong>。答對越快，分數越高；超時得 0 分。</p><p>第 2、3 關四選一每選錯一個選項，從該題速度分<strong>扣 50 分</strong>；同一選項不會重複扣分，每題最低為 0 分。</p><p>揮刀方向錯誤一次，從剩餘時間<strong>扣 10 秒</strong>，不直接扣分；過短或完全沒有碰到食材的刀路不計作有效切錯。</p></div><div class="rules-section"><h3>三關玩法</h3><p>第一關：看截面提示，用手指切對就過關，<strong>沒有選擇題</strong>。</p><p>第二關：按主廚文字指令揮刀，然後回答截面四選一。</p><p>第三關：主廚只說「請切出均勻截面！」，要自行選刀法，再回答四選一。</p></div><div class="rules-section"><h3>切割小貼士</h3><p>第二、三關：水平 ↔️ 請打橫、鉛垂 ↕️ 請打直；第一關保留較靈活的刀法。均勻截面須與選定底面平行，而且形狀和大小相同。</p><p>每次每關會抽 5 題，盡量避免相同截面連續出現；過場、食材載入及成功動畫不計時。</p></div><button type="button" class="primary rules-close" id="rules-close">明白，返回首頁</button></div></dialog></section>`);
 $('#start').onclick=()=>{AUDIO.unlock();begin();};
 $('#sound-test').onclick=()=>{if(mute){mute=false;AUDIO.setMuted(false);const btn=$('#mute');if(btn)btn.textContent='🔊';}sound('success');};
 const dialog=$('#rules-dialog');
 $('#rules-open').onclick=()=>{if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');};
 $('#rules-close').onclick=()=>{if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');$('#rules-open')?.focus({preventScroll:true});};
 dialog.addEventListener('click',e=>{if(e.target===dialog){if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');}});
}

function begin(){
 release();order=COMP.createOrder(LEVELS);index=0;history=[];earned={1:0,2:0,3:0};wrongChoices={1:0,2:0,3:0};stageIntro(1);
}
function stageIntro(stage){
 release();phase='intro';
 topFrame(`<section class="intermission fade" aria-label="第 ${stage} 關過場"><div class="intro-sparkles" aria-hidden="true">✨　🍽️　✨</div><div class="intro-badge">NEXT LEVEL</div><div class="intro-number">${stage}</div><h1>第 ${stage} 關<br>${STAGE_NAMES[stage]}</h1><p>${STAGE_DESCRIPTIONS[stage]}</p><div class="intro-points">目前總分：<strong>${overallScore()}</strong> 分</div><button class="primary intro-start" id="stage-start">開始第 ${stage} 關 <span aria-hidden="true">🔪</span></button><p class="micro">按「開始」及食材載入完成後才會計時。</p></section>`);
 $('#stage-start').onclick=()=>{AUDIO.unlock();question();};$('#stage-start').focus({preventScroll:true});
}
function optionsFor(q){const pool=DISTRACTORS[q.target];if(!pool)throw Error('Unknown shape '+q.target);return shuffle([q.target,...shuffle(pool).slice(0,3)]);}
function question(){
 release();phase='loading';attempts=0;wrongCuts=0;
 const q=current();
 const task=q.stage===1?`<div class="eyebrow">師傅想要的截面</div><div class="shape">${shapeSVG(q)}</div><div class="shape-label">${safe(q.target)}</div>`:q.stage===3?`<div class="eyebrow">👨‍🍳 主廚任務</div><div class="uniform-prompt mission-text">請切出均勻截面！</div>`:`<div class="eyebrow">👨‍🍳 主廚指令</div><div class="uniform-prompt mission-text">${safe(q.instruction)}</div>`;
 topFrame(`<div class="game fade"><section class="stage" aria-label="卡通食物揮刀區"><canvas id="board" aria-label="用手指或滑鼠在食材上揮刀"></canvas><div class="hint" id="hint" aria-live="polite">🍽️ 食材載入中……</div><div class="popup-area" id="popup" aria-live="polite"></div></section><aside class="side"><article class="card"><span class="chip">第 ${q.stage} 關 · ${index%5+1}/5</span><h2 class="food-name">${safe(q.name)}</h2><div id="task-area">${task}</div></article><article class="card"><div class="eyebrow">🗡️ 揮刀競賽</div><p class="micro">${q.stage===1?'每題最多 100 秒。可以按食物方向選擇合適刀路；切錯一次扣 10 秒。':'每題最多 100 秒。水平要打橫 ↔，鉛垂要打直 ↕；切錯一次扣 10 秒。'}</p><div id="feedback" class="attempt-msg" aria-live="polite">${q.stage===1?'先看目標截面，再揮刀。':q.stage===3?'請切出均勻截面。':'請按主廚指令揮刀。'}</div><details class="alternatives"><summary>不方便滑動？替代揮刀</summary><div class="buttons"><button type="button" data-swipe="H">↔ 水平</button><button type="button" data-swipe="V">↕ 鉛垂</button>${q.stage===1?'<button type="button" data-swipe="D">↗ 鉛垂（另一朝向）</button>':''}</div></details><div class="round-summary" aria-label="本關競賽得分"><span class="round-summary-title">⭐ 第 ${q.stage} 關得分</span><div class="round-summary-points"><strong id="stage-score">${stageScore(q.stage)}</strong><span>/ 1000 分</span></div><div class="round-summary-extra">有效切錯：<strong id="cut-errors">0</strong> 次</div></div></article><div class="progress"><div style="width:${index/order.length*100}%"></div></div><div class="micro">第 1 關切對直接過關；第 2、3 關需完成四選一。</div></aside></div>`);
 setupCanvas();root.querySelectorAll('[data-swipe]').forEach(b=>b.onclick=()=>simulate(b.dataset.swipe));
 const img=images[q.id];if(img.complete&&img.naturalWidth)paint();else{img.addEventListener('load',()=>{paint();tryStartClock()},{once:true});img.addEventListener('error',()=>hint('食物圖片載入失敗，請確認 assets 資料夾已上載。'),{once:true});if(!img.src)img.src=q.image;}
 tryStartClock();
}
function hint(message){const el=$('#hint');if(el)el.textContent=message;}
function tryStartClock(){
 if(phase!=='loading'||!canvas?.isConnected||!ready()||box.s<=0)return;
 paint();phase='play';startedAt=Date.now();updateTime();hint('👆 在食物上揮刀！答錯刀法會扣 10 秒。');
 ticker=setInterval(tick,120);
}
function setupCanvas(){
 canvas=$('#board');ctx=canvas.getContext('2d');
 const resize=()=>{if(!canvas?.isConnected)return;const r=canvas.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.max(1,Math.round(r.width*dpr));canvas.height=Math.max(1,Math.round(r.height*dpr));ctx.setTransform(dpr,0,0,dpr,0,0);const s=Math.min(r.width,r.height)*.99;box={x:(r.width-s)/2,y:(r.height-s)/2,s,w:r.width,h:r.height};paint();tryStartClock();};
 if('ResizeObserver' in window){observer=new ResizeObserver(resize);observer.observe(canvas);}else window.addEventListener('resize',resize,{passive:true});
 canvas.addEventListener('pointerdown',e=>{if(phase!=='play'||gesture||!ready())return;e.preventDefault();canvas.setPointerCapture(e.pointerId);const p=position(e);gesture={id:e.pointerId,start:p,end:p};paint();});
 canvas.addEventListener('pointermove',e=>{if(!gesture||gesture.id!==e.pointerId)return;e.preventDefault();gesture.end=position(e);paint();});
 canvas.addEventListener('pointerup',e=>{if(!gesture||gesture.id!==e.pointerId)return;e.preventDefault();const a=gesture.start,b=position(e);gesture=null;attemptSwipe(a,b);});
 canvas.addEventListener('pointercancel',()=>{gesture=null;paint();});
 resize();
}
function position(e){const r=canvas.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};}
function norm(p){return {x:(p.x-box.x)/box.s,y:(p.y-box.y)/box.s};}
function ready(){const img=images[current()?.id];return !!(img?.complete&&img.naturalWidth>0);}
function paint(){if(!canvas?.isConnected||!ctx||!order.length)return;ctx.clearRect(0,0,box.w,box.h);const img=images[current().id];if(ready())ctx.drawImage(img,box.x,box.y,box.s,box.s);
 else {ctx.fillStyle='#fff';ctx.textAlign='center';ctx.font='bold 18px system-ui';ctx.fillText('食物載入中…',box.w/2,box.h/2);}
 if(gesture)drawSlash(gesture.start,gesture.end,.95);else if(trail){let p=(performance.now()-trail.at)/(reduced?80:240);if(p<1){drawSlash(trail.a,trail.b,.8*(1-p));frame=requestAnimationFrame(paint);}else trail=null;}
}
function drawSlash(a,b,alpha){ctx.save();ctx.strokeStyle=`rgba(255,251,227,${alpha})`;ctx.lineWidth=7;ctx.lineCap='round';ctx.shadowColor='#fff0ba';ctx.shadowBlur=17;ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();ctx.restore();}
function simulate(kind){if(phase!=='play'||!ready())return;const c={x:box.x+box.s*.51,y:box.y+box.s*.48},half=box.s*.40;let a,b;if(kind==='H'){a={x:c.x-half,y:c.y};b={x:c.x+half,y:c.y};}else if(kind==='V'){a={x:c.x,y:c.y-half};b={x:c.x,y:c.y+half};}else if(kind==='D'&&current().stage===1){a={x:c.x+half*.64,y:c.y-half*.9};b={x:c.x-half*.64,y:c.y+half*.9};}else{return;}attemptSwipe(a,b);}
function attemptSwipe(a,b){
 if(phase!=='play'||!ready())return;
 tick();if(phase!=='play')return;
 const q=current(),result=(q.stage===1?STAGE1_RULES:RULES).evaluate(q,norm(a),norm(b));trail={a,b,at:performance.now()};paint();
 if(result.kind==='short'||result.kind==='miss'){hint(result.reason);return;}
 attempts++;
 if(result.ok){if(q.stage===1){sound('cut-success');completeCorrect(true);}else{sound('cut');phase='quiz';quizState={id:q.id,options:optionsFor(q),wrong:new Set(),done:false};hint('✨ 刀法成功！請在倒數完結前回答截面形狀。');$('#feedback').className='attempt-msg correct';$('#feedback').textContent='✅ 揮刀成功！現在回答截面選擇題。';showQuiz();}return;}
 wrongCuts++;
 const el=$('#cut-errors');if(el)el.textContent=wrongCuts;
 sound('error');$('#feedback').className='attempt-msg retry';$('#feedback').textContent=`再切過！${result.reason}（扣 10 秒）`;
 hint(q.stage===3?'💡 均勻截面須與所選底面平行，且形狀、大小相同。切錯扣 10 秒。':q.stage===1?'💡 請觀察食材位置和切割方向，再試一次；切錯扣 10 秒。':'💡 水平要打橫、鉛垂要打直，切錯扣 10 秒。');
 tick();if(phase==='play')showRetry();
}
function showRetry(){const el=$('#popup');if(!el)return;el.innerHTML='<div class="retry-bubble" role="status">🔄 再切過！−10 秒</div>';
 const bubble=el.firstElementChild;bubble.addEventListener('animationend',()=>{if(el.firstElementChild===bubble)el.innerHTML='';},{once:true});
 if(reduced)setTimeout(()=>{if(el.firstElementChild===bubble)el.innerHTML='';},600);
}
function showQuiz(){
 const q=current(),el=$('#popup');if(phase!=='quiz'||!el||!quizState)return;
 const options=quizState.options.map((label,i)=>`<button type="button" class="quiz-choice ${quizState.wrong.has(label)?'tried':''}" data-choice="${safe(label)}" ${quizState.wrong.has(label)?'disabled':''}><span class="choice-letter">${'ABCD'[i]}</span><span>${safe(label)}</span></button>`).join('');
 el.innerHTML=`<div class="quiz-modal" role="dialog" aria-modal="true" aria-labelledby="quiz-title"><div class="quiz-step">🧠 第二步 · 截面辨認（計時繼續）</div><h2 id="quiz-title">剛才這一刀切出了甚麼形狀？</h2><p class="micro">每選錯一次，本題扣 50 分（最低 0 分）；答對才可過關。</p><div class="quiz-answers" role="group" aria-label="四選一截面題">${options}</div><div class="quiz-feedback" id="quiz-feedback" role="status" aria-live="polite">請盡快作答，時間仍在倒數！</div></div>`;
 el.querySelectorAll('[data-choice]').forEach(btn=>btn.onclick=()=>chooseAnswer(btn.dataset.choice));
 el.querySelector('.quiz-choice:not([disabled])')?.focus({preventScroll:true});
}
function chooseAnswer(choice){
 if(phase!=='quiz'||!quizState||quizState.done)return;
 tick();if(phase!=='quiz')return;
 const q=current();if(quizState.id!==q.id)return;
 if(choice!==q.target){
   if(quizState.wrong.has(choice))return;
   quizState.wrong.add(choice);wrongChoices[q.stage]++;
   const mistakes=quizState.wrong.size;
   const currentGross=COMP.speedPoints(remaining());
   const estimatedNet=COMP.questionPoints(remaining(),mistakes);
   sound('error');const btn=[...document.querySelectorAll('[data-choice]')].find(b=>b.dataset.choice===choice);if(btn){btn.classList.add('tried');btn.disabled=true;}
   const msg=$('#quiz-feedback');if(msg){msg.className='quiz-feedback error';msg.textContent=`❌ 選錯 ${mistakes} 次，本題已扣 ${mistakes*50} 分。現時速度分 ${currentGross}，扣分後最低計 0 分；本題暫估 ${estimatedNet} 分。請再選！`;}
   return;
 }
 quizState.done=true;completeCorrect();
}
function completeCorrect(alreadyPlayedSuccess=false){
 if(phase!=='play'&&phase!=='quiz')return;
 const seconds=remaining();if(seconds<=0){timeUp();return;}
 freezeClock();const q=current(),gross=COMP.speedPoints(seconds),wrong=quizState?.wrong.size||0;
 const deduction=wrong*COMP.WRONG_CHOICE_COST,net=COMP.questionPoints(seconds,wrong);
 earned[q.stage]+=net;
 recordRound(false,net,wrong,seconds,gross);phase='won';if(!alreadyPlayedSuccess)sound('success');refreshScore();updateTime();
 const el=$('#stage-score');if(el)el.textContent=stageScore(q.stage);
 $('#feedback').className='attempt-msg correct';$('#feedback').textContent=`✅ 成功！速度 ${gross} 分、選錯扣 ${deduction} 分，本題淨得 +${net} 分（最低 0）。`;
 hint('🌟 出菜成功！請按下一題。');showSuccess(q,net,seconds,gross,deduction);
}
function recordRound(timedOut,net,wrong,seconds,gross=0){const q=current();history.push({id:q.id,name:q.name,target:q.target,stage:q.stage,tries:attempts,wrongCuts,wrongChoices:wrong,gross,penalty:wrong*COMP.WRONG_CHOICE_COST,net,timeLeft:seconds,timedOut});}
function timeUp(){
 if(phase!=='play'&&phase!=='quiz')return;
 const q=current(),wrong=quizState?.wrong.size||0;freezeClock();phase='timeout';recordRound(true,0,wrong,0,0);updateTime();hint('⏰ 時間到，這題結束！');
 $('#feedback').className='attempt-msg retry';$('#feedback').textContent='⏰ 時間到！這題速度得分 0 分。';
 const el=$('#popup');if(el){el.innerHTML=`<div class="celebrate timeout-modal" role="dialog" aria-modal="true" aria-label="時間到"><div class="big-hourglass">⌛</div><h2>時間到！</h2><p>本題得分 <strong>0 分</strong>，不能再揮刀或作答。</p><p class="explanation">正確截面：${safe(q.target)}。${safe(q.why)}</p><button class="primary next" id="next">${nextText()}</button></div>`;$('#next').onclick=advance;$('#next').focus({preventScroll:true});}
}
function nextText(){return index===14?'🏆 查看比賽成績':index===4?'🍽️ 前往第二關':index===9?'🍽️ 前往第三關':'🍽️ 下一題';}
function showSuccess(q,net,seconds,gross,deduction){const el=$('#popup');if(!el||phase!=='won')return;
 el.innerHTML=`<div class="celebrate" role="dialog" aria-modal="true" aria-label="出菜成功"><div class="sparkles" aria-hidden="true">✦ ⭐ ✦ ✨ ✦</div><div class="big-check">✓</div><h2>完美出菜！</h2><div class="reward">本題 +${net} 分</div><p><strong>截面：${safe(q.target)}</strong> · 剩餘 ${seconds.toFixed(1)} 秒</p><p class="score-breakdown">速度分 ${gross} · 選錯罰分 ${deduction}<span class="score-net">結算後（最低 0 分）：<strong>${net} 分</strong></span></p><p class="explanation">${safe(q.why)}</p><button class="primary next" id="next">${nextText()}</button></div>`;
 $('#next').onclick=advance;$('#next').focus({preventScroll:true});
}
function advance(){if(phase!=='won'&&phase!=='timeout')return;
 const previousStage=current().stage;index++;if(index>=order.length){finish();return;}
 if(current().stage!==previousStage)stageIntro(current().stage);else question();
}
function finish(){
 release();phase='end';const score=overallScore();
 const rows=[1,2,3].map(stage=>`<div class="stage-score-result"><span>第 ${stage} 關 · ${STAGE_NAMES[stage]}</span><strong>${stageScore(stage)} / 1000 分</strong></div>`).join('');
 topFrame(`<section class="hero fade"><div class="hero-emoji">🏆 🍱 ✨</div><h1>三關挑戰完成！</h1><div class="final-total" aria-label="全場總得分">總分 <strong>${score} / 3000</strong></div><div class="stage-scores" aria-label="各關得分">${rows}</div><div class="note">課堂總結：先看立體如何擺放，再看切割方向；均勻截面與選定底面平行、形狀及大小相同；一刀是一個平面。</div><div class="actions"><button class="primary" id="again">🎲 再挑戰（重新抽選 15 題）</button><button id="home">🏠 返回首頁</button></div></section>`);
 $('#again').onclick=begin;$('#home').onclick=home;
}
document.addEventListener('visibilitychange',()=>{if(!document.hidden)tick();});
home();
})();
