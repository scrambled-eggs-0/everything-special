"use strict";(self.webpackChunkOmniblockly=self.webpackChunkOmniblockly||[]).push([[885],{885:(o,e,t)=>{t.r(e),t.d(e,{default:()=>b});var n=t(937);const{until:i}=n.default;let w,a=0,d=0,l=new Image,s=!1,r=window.defaultColors.tile,c=0,g=0,u=!1,m=!1,h=0,f=!1;async function p(o){s=!1,l.src=await async function(o){await i((()=>void 0!==window.gearImg));const e=document.createElement("canvas"),t=e.getContext("2d");return e.width=window.gearImg.width,e.height=window.gearImg.height,t.drawImage(window.gearImg,0,0),t.globalCompositeOperation="source-atop",t.fillStyle=o,r=o,t.fillRect(0,0,e.width,e.height),e.toDataURL()}(o),l.onload=()=>{s=!0}}function b(o,e,t=!1){const n=window.obstacles[!0===t?g:c];if(void 0===n)return;let[i,r]=window.generateTopLeftCoordinates(n);i+=n.dimensions.x/2,r+=n.dimensions.y/2;const p=Math.max(50,.72*Math.min(n.dimensions.x,n.dimensions.y));var b,k,I,C;if((window.mouseX-i)**2+(window.mouseY-r)**2<p**2/4?(a+=.012,u=!0):u=!1,.1,d=(b=d)+.1*(2*(I=(a-b)%(k=2*Math.PI))%k-I),!0===s&&(e.globalAlpha=.3,e.translate(i,r),0!==d&&e.rotate(d),e.drawImage(l,-p/2,-p/2,p,p),0!==d&&e.rotate(-d),e.translate(-i,-r),e.globalAlpha=1),!0===m&&1!==h?(h+=.03,h>1&&(h=1)):0!==h&&(h-=.03,h<0&&(h=0)),0!==h){const t=(C=h)*C*(1-C)+(1-(1-C)*(1-C))*C;e.translate((1-t)*o.width,0),e.fillStyle=w,e.fillRect(0,0,o.width,o.height),e.drawImage(!0===window.scrollLocked?window.lockImg:window.unlockedImg,100,100,700,700),f=window.mouseX>100&&window.mouseX<800&&window.mouseY>100&&window.mouseY<800,e.translate((t-1)*o.width,0)}}l.src=p(window.defaultColors.tile),window.updateSettingsCog=()=>{window.colors.tile!==r&&p(window.colors.tile),g=c;for(let o=0;o<window.obstacles.length;o++)if(!0===window.obstacles[o].isWinpad){c=o;break}};let k=!1;window.addSideMenuEvtListeners=()=>{window.mouseDownFunctions.push((()=>{!0!==f?!0===u?(k=!0,dragging=!1):k=!1:window.scrollLocked=!window.scrollLocked})),window.mouseUpFunctions.push((()=>{!0===k&&!0===u&&(m=!m,void 0===w&&(w=window.ctx.createLinearGradient(0,0,1600,0),w.addColorStop(0,"rgba(0, 0, 0, 0)"),w.addColorStop(1,"rgba(0, 0, 0, 0.6)"))),k=!1}))}}}]);