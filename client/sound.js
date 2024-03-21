import Utils from './utils.js';
const { until, isEditor } = Utils;

window.hasLoadedNewMusic = false;
let lastLoadedLink;
let audioIframe;
let lastPlayTime = 0;
const outputPane = document.getElementById('outputPane') ?? document.body;

// TODO: optimize? "sub" time takes about 1ms, so we could optimize by statically creating an element
window.stopMusic = async (toAwait=false) => {
    if(toAwait === true){
        let returnBig = false;
        let callTime = Date.now();
        await until(() => {
            if(audioIframe === undefined) return false;
            // we only want to stop music if we played it before this fn is called
            if(lastPlayTime > callTime){
                returnBig = true;
            }
            return true;
        });
        if(returnBig === true) return; 
    } else if(audioIframe === undefined) {
        return;
    }

    audioIframe.remove();
    audioIframe = undefined;
    lastLoadedLink = undefined;
}

window.playMusic = async (link) => {
    window.hasLoadedNewMusic = true;

    await until(() => {return navigator.userActivation.hasBeenActive === true;});
    if(link === lastLoadedLink) return;

    stopMusic();
    lastLoadedLink = link;

    
    audioIframe = document.createElement('iframe');
    audioIframe.frameborder = "0";
    audioIframe.setAttribute("frameBorder", "0");
    audioIframe.width = 1;
    audioIframe.height = 1;
    
    const videoId = link.split('?v=')[1];
    audioIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&enablejsapi=1`;
    
    audioIframe.allow = "autoplay";
    audioIframe.security = "restricted";

    // this is about 1ms...
    // console.time("sub");
    outputPane.appendChild(audioIframe);
    // console.timeEnd("sub");

    lastPlayTime = Date.now();
}

// function extractVideoID(url) {  
//     var regExp =    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;  
//     var match = url.match(regExp);  
//     if (match && match[7].length == 11) {    
//         return match[7];
//     } else {    
//         alert("Could not extract video ID.");
//     }
// }

// Credit: https://github.com/davidgrcias/ConvertYouTubeVideoURLToAudio
// window.playMusic = (youtubelink) => {
//     window.stopMusic();
//     if(loadingMusic === true) return;
//     loadingMusic = true;
//     try {
//     fetch("https://images" + ~~(Math.random() * 33) + "-focus-opensocial.googleusercontent.com/gadgets/proxy?container=none&url=" + encodeURIComponent(youtubelink)).then(response => {
//       if (response.ok){
//         let audio_streams = {};
//         response.text().then(async data => {
  
//           let regex = /(?:ytplayer\.config\s*=\s*|ytInitialPlayerResponse\s?=\s?)(.+?)(?:;let|;\(function|\)?;\s*if|;\s*if|;\s*ytplayer\.|;\s*<\/script)/gmsu;
  
//           data = data.split('window.getPageData')[0].replace('ytInitialPlayerResponse = null', '').replace('ytInitialPlayerResponse=window.ytInitialPlayerResponse', '').replace('ytplayer.config={args:{raw_player_response:ytInitialPlayerResponse}};', '');
  
//           let matches = regex.exec(data);

//           data = matches && matches.length > 1 ? JSON.parse(matches[1]) : false;
  
//           console.log(data);
  
//           let streams = [], result = {};
  
//           if (data.streamingData) {
  
//             if (data.streamingData.adaptiveFormats) {
//               streams = streams.concat(data.streamingData.adaptiveFormats);
//             }
  
//             if (data.streamingData.formats) {
//               streams = streams.concat(data.streamingData.formats);
//             }
  
//           } else {
//             return false;
//           }
  
//           streams.forEach(function(stream, n) {
//             let itag = stream.itag * 1,
//               quality = false;
//             console.log(stream);
//             switch (itag) {
//               case 139:
//                 quality = "48kbps";
//                 break;
//               case 140:
//                 quality = "128kbps";
//                 break;
//               case 141:
//                 quality = "256kbps";
//                 break;
//               case 249:
//                 quality = "webm_l";
//                 break;
//               case 250:
//                 quality = "webm_m";
//                 break;
//               case 251:
//                 quality = "webm_h";
//                 break;
//             }
//             if (quality) audio_streams[quality] = stream.url;
//           });
  
//           console.log(audio_streams);
  
//           await until(() => {return navigator.userActivation.hasBeenActive === true;});
//           audioElement = document.createElement('audio');
//           audioElement.src = audio_streams['256kbps'] || audio_streams['128kbps'] || audio_streams['48kbps'];
//           audioElement.loop = true;
//           document.body.appendChild(audioElement);
//           audioElement.play();
//           loadingMusic = false;
//         })
//       }
//     }).catch(e => {});
//     } catch(e) {console.log('Audio loading err', e);}
// }

// export default { playMusic, stopMusic, loadMusic };