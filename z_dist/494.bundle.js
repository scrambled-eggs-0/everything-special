"use strict";(self.webpackChunkomniserver=self.webpackChunkomniserver||[]).push([[494],{494:(e,t,a)=>{a.r(t),window.playYoutubeVideo=(e,{width:t,height:a,visible:o=!0,loop:i=!0,startTime:l=0,endTime:n=-1,volume:r=-1,autoplay:s=!0,showPlayerUI:d=!1,interactable:u=!1,onReadyFn:m=()=>{},onPlayFn:y=()=>{},onPauseFn:h=()=>{},onEndFn:p=()=>{}})=>{let c=e.split("?v=")[1],b=document.createElement("div");b.id="yt"+Math.random(),document.body.appendChild(b);let v={enablejsapi:1,fs:!0===d?1:0,controls:!0===d?1:0,autoplay:!0===s?1:0};!0===i&&(v.playlist=c,v.loop=1),0!==l&&(v.start=l),n>0&&(v.end=n);let w=new YT.Player(b.id,{height:!0===o?a.toString():"0",width:!0===o?t.toString():"0",videoId:c,playerVars:v,fs:!0===d?1:0,events:{onReady:e=>{if(-1!==r){if(0===r)return void w.mute();w.isMuted()&&w.unMute(),r=Math.max(0,Math.min(1,Math.round(100*r))),e.target.setVolume(r)}m(),!0===s&&w.playVideo()},onStateChange:e=>{e.data===YT.PlayerState.PLAYING?y():e.data===YT.PlayerState.PAUSED?h():e.data===YT.PlayerState.ENDED&&p()}}});const M=document.getElementById(b.id);return!1===o&&(M.frameborder="0",M.setAttribute("frameBorder","0"),M.width=0,M.height=0,M.allow="autoplay",M.security="restricted"),M.style.position="fixed",M.style.zIndex=!0===u?999:-1,{player:w,iframe:M,play:w.playVideo,pause:w.pauseVideo,setVolume:e=>{0!==(e=Math.min(1,Math.max(0,Math.round(100*e))))?(w.isMuted()&&w.unMute(),w.setVolume(e)):w.mute()},getVolume:e=>e/100,setDimensions:w.setSize,setPlaybackRate:e=>{const t=w.getAvailablePlaybackRates();let a,o=-1,i=1/0;for(let l=0;l<t.length;l++)a=Math.abs(t[l]-e),a<i&&(i=a,o=t[l]);w.setPlaybackRate(o)}}},window.removeYoutubeVideo=e=>{e.remove()}}}]);