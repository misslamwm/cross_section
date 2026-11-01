/* 幾何廚神大挑戰：iPad Safari / 桌面瀏覽器音效。
 * 所有音效均為本專案自行合成，存放 assets/，不連外，不使用商用歌曲。
 * iOS Safari 必須在使用者觸控事件中解除音效鎖定。
 */
(function(global){
'use strict';
const names=['cut','cut-success','success','error'];
const clips={};
let muted=false;
let audioContext=null;
let lastError='';
for(const name of names){
  try{
    const clip=new Audio('assets/'+name+'.wav');
    clip.preload='auto';
    clip.volume=1;
    clips[name]=clip;
  }catch(err){lastError=String(err);}
}
function context(){
  if(audioContext&&audioContext.state!=='closed')return audioContext;
  const Ctor=global.AudioContext||global.webkitAudioContext;
  if(!Ctor)return null;
  try{audioContext=new Ctor();return audioContext;}catch(err){lastError=String(err);return null;}
}
function unlock(){
  if(muted)return false;
  const ctx=context();
  if(!ctx)return false;
  try{
    if(ctx.state!=='running'){
      const result=ctx.resume();
      if(result&&typeof result.catch==='function')result.catch(err=>{lastError=String(err);});
    }
    // 在觸控事件內播放完全靜音的短音源，兼容舊版 iPad WebKit。
    // 設為 0 音量，不會突然發聲，也不算遊戲音效。
    if(!ctx._chefPrimed){
      const oscillator=ctx.createOscillator();
      const gain=ctx.createGain();
      gain.gain.value=0;
      oscillator.connect(gain).connect(ctx.destination);
      oscillator.start(ctx.currentTime);
      oscillator.stop(ctx.currentTime+0.012);
      ctx._chefPrimed=true;
    }
    return true;
  }catch(err){lastError=String(err);return false;}
}
function fallback(name){
  const ctx=context();
  if(!ctx||muted)return;
  const play=()=>{
    if(muted||ctx.state!=='running')return;
    try{
      const t=ctx.currentTime+.01;
      const notes=name==='cut'||name==='cut-success'?[420,720]:name==='error'?[340,250]:[523,659,784];
      notes.forEach((freq,i)=>{
        const osc=ctx.createOscillator(),vol=ctx.createGain();
        const start=t+i*(name==='cut'?.035:.10),end=start+.13;
        osc.type=name==='cut'||name==='error'?'triangle':'sine';
        osc.frequency.setValueAtTime(freq,start);
        osc.frequency.exponentialRampToValueAtTime(Math.max(100,freq*(name==='cut'?1.6:.98)),end);
        vol.gain.setValueAtTime(.0001,start);
        vol.gain.exponentialRampToValueAtTime(.12,start+.012);
        vol.gain.exponentialRampToValueAtTime(.0001,end);
        osc.connect(vol).connect(ctx.destination);
        osc.start(start);osc.stop(end+.01);
      });
    }catch(err){lastError=String(err);}
  };
  if(ctx.state==='running')play();
  else{
    try{const promise=ctx.resume();if(promise&&typeof promise.then==='function')promise.then(play).catch(err=>{lastError=String(err);});}catch(err){lastError=String(err);}
  }
}
function play(name){
  if(muted||!names.includes(name))return;
  // 先在真實觸控／點擊時呼叫 resume；避免舊版只排程但從未播放的情況。
  unlock();
  const clip=clips[name];
  if(!clip){fallback(name);return;}
  try{
    clip.pause();
    clip.currentTime=0;
    const result=clip.play();
    if(result&&typeof result.catch==='function')result.catch(err=>{lastError=String(err);fallback(name);});
  }catch(err){lastError=String(err);fallback(name);}
}
function setMuted(value){
  muted=!!value;
  if(muted){
    Object.values(clips).forEach(clip=>{try{clip.pause();clip.currentTime=0;}catch{}});
  }
}
// Safari 的音效許可通常需要在 pointerdown/touchstart/click 的直接事件中啟動。
// 把事件綁在 document 上，即使畫面換頁（首頁→關卡）亦可正常解鎖。
const opts={capture:true,passive:true};
global.document.addEventListener('pointerdown',unlock,opts);
global.document.addEventListener('touchstart',unlock,opts);
global.document.addEventListener('mousedown',unlock,opts);
global.document.addEventListener('keydown',unlock,opts);
global.document.addEventListener('click',unlock,opts);
global.CHEF_AUDIO={unlock,play,setMuted,isMuted:()=>muted,status:()=>({context:audioContext?.state||'not-created',lastError})};
})(window);
