import shared from '../../shared/shared.js';
shared.playYoutubeVideo = (link, {width/*=640*/, height/*=360*/, visible=true, loop=true, startTime=0, endTime=-1/*-1 = endTime end of video*/, volume=-1,/*-1 volume = default*/ autoplay=true, showPlayerUI=false, interactable=false, onReadyFn=()=>{}, onPlayFn=()=>{}, onPauseFn=()=>{}, onEndFn=()=>{}}) => {
    let videoId = link.split('?v=')[1];

    let div = document.createElement('div');
    div.id = 'yt' + Math.random();
    document.body.appendChild(div);
    
    let params = {
        enablejsapi: 1,
        fs: showPlayerUI === true ? 1 : 0,
        controls: showPlayerUI === true ? 1 : 0,
        autoplay: autoplay === true ? 1 : 0,
    }
    if(loop === true){
        params.playlist = videoId;
        params.loop = 1;
    }
    if(startTime !== 0){
        params.start = startTime;
    }
    if(endTime > 0){
        params.end = endTime;
    }
    const onStateChange = (e) => {
        if(e.data === YT.PlayerState.PLAYING) onPlayFn();
        else if(e.data === YT.PlayerState.PAUSED) onPauseFn();
        else if(e.data === YT.PlayerState.ENDED) onEndFn();
        // CUED and BUFFERING also exist
    }
    const onReady = (e) => {
        if(volume !== -1){
            if(volume === 0){
                player.mute();
                return;
            }
            else if(player.isMuted()) {
                player.unMute()
            }
            volume = Math.max(0, Math.min(1,Math.round(volume*100)));
            e.target.setVolume(volume);
        }
        onReadyFn();
        if(autoplay === true) player.playVideo();
    }
    let player = new YT.Player(div.id, {
        height: visible === true ? height.toString() : '0',
        width: visible === true ? width.toString() : '0',
        videoId,
        playerVars: params,
        fs: showPlayerUI === true ? 1 : 0, 
        events: {
            onReady,
            onStateChange,
        }
    });
    const iframe = document.getElementById(div.id);
    if(visible === false){
        iframe.frameborder = "0";
        iframe.setAttribute("frameBorder", "0");
        iframe.width = 0;
        iframe.height = 0;
        iframe.allow = "autoplay";
        iframe.security = "restricted";
    }
    iframe.style.position = 'fixed';
    iframe.style.zIndex = interactable === true ? 999 : -1;
    return {
        player,
        iframe,
        play: player.playVideo,
        pause: player.pauseVideo,
        setVolume: (v) => {
            v = Math.min(1,Math.max(0,Math.round(v*100)));
            if(v === 0){
                player.mute();
                return;
            } else if(player.isMuted()) {
                player.unMute();
            } 
            player.setVolume(v);
        },
        getVolume: (v) => {return v / 100},
        setDimensions: player.setSize,// w,h
        setPlaybackRate: (r) => {
            const rates = player.getAvailablePlaybackRates();
            let closestRate = -1;
            let closestDist = Infinity;
            let dist;
            for(let i = 0; i < rates.length; i++){
                dist = Math.abs(rates[i] - r);
                if(dist < closestDist){
                    closestDist = dist;
                    closestRate = rates[i];
                }
            }
            // this is only a suggestion, player might not have a rate other than 1 or might not actually change
            player.setPlaybackRate(closestRate);
        }
    }
}

shared.removeYoutubeVideo = (player) => {
    player.remove();
}