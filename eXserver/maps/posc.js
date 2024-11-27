window.loadMap((shared)=>{
    let counter = 0;
    const md = (a) => {return a;}
    const {C, colors, spawnPosition, mapDimensions, camera, generateDimensions, obstacles, difficultyImageColors, difficultyImageMap, blendColor, changeCameraScale, players, input} = shared;
    let selfId = shared.selfId;

    shared.linkDoors = {};
    shared.linkButtons = {};
    shared.morphsTriggered = {};

    shared.C(0,[],[3],{x:-1E9,y:0,r:1,sf:()=>{selfId = shared.selfId;},cr:()=>{
        // render links
        ctx.strokeStyle = '#969696';
        ctx.setLineDash([50, 70]);
        ctx.lineDashOffset = -window.frames / 60 * 100 * 2;
        ctx.lineWidth = 10;
        for(let id in shared.linkButtons){
            if(shared.linkDoors[id] === undefined) continue;
            const btnPos = {x: shared.linkButtons[id].pos.x + shared.linkButtons[id].dimensions.x/2, y: shared.linkButtons[id].pos.y + shared.linkButtons[id].dimensions.y/2};
            const doorPos = {x: shared.linkDoors[id].pos.x + shared.linkDoors[id].dimensions.x/2, y: shared.linkDoors[id].pos.y + shared.linkDoors[id].dimensions.y/2};
            
            ctx.globalAlpha = shared.morphsTriggered[id] === true ? 0.3 : 0.8;
            
            ctx.beginPath();
            ctx.lineTo(btnPos.x, btnPos.y);
            ctx.lineTo(doorPos.x, doorPos.y);
            ctx.stroke();
            ctx.closePath();
        }
        ctx.globalAlpha = 1;
        ctx.setLineDash([]);
    }});

    var xv7001 = 1.3333008202080556;
    var yv7001 = -2.2973839438223047;
    C(1,[3],[1],{w:68,h:68,y:8855.313376726379,x:14835.215400100113,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7001;
    e.pos.x += xv7001;
    if ((e.pos.x) < 14000) {
        xv7001 = xv7001 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7001 = xv7001 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7001 = yv7001 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7001 = yv7001 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7002 = -1.881866684754023;
    var yv7002 = 1.874631121931166;
    C(1,[3],[1],{w:68,h:68,y:8763.979450860159,x:15080.471262267722,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7002;
    e.pos.x += xv7002;
    if ((e.pos.x) < 14000) {
        xv7002 = xv7002 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7002 = xv7002 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7002 = yv7002 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7002 = yv7002 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7003 = -2.439165182505833;
    var yv7003 = -1.051730609496217;
    C(1,[3],[1],{w:68,h:68,y:9290.717968488505,x:14341.181066457633,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7003;
    e.pos.x += xv7003;
    if ((e.pos.x) < 14000) {
        xv7003 = xv7003 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7003 = xv7003 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7003 = yv7003 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7003 = yv7003 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7004 = -2.5805631188978913;
    var yv7004 = 0.6295697355210053;
    C(1,[3],[1],{w:68,h:68,y:8651.516513346154,x:14964.969476445474,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7004;
    e.pos.x += xv7004;
    if ((e.pos.x) < 14000) {
        xv7004 = xv7004 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7004 = xv7004 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7004 = yv7004 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7004 = yv7004 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7005 = 2.6318917044567263;
    var yv7005 = 0.3589012656871927;
    C(1,[3],[1],{w:68,h:68,y:9687.927360970183,x:14148.290140520598,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7005;
    e.pos.x += xv7005;
    if ((e.pos.x) < 14000) {
        xv7005 = xv7005 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7005 = xv7005 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7005 = yv7005 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7005 = yv7005 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7006 = 1.836133367730568;
    var yv7006 = -1.9194473992288517;
    C(1,[3],[1],{w:68,h:68,y:9633.17411942963,x:14475.45267101273,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7006;
    e.pos.x += xv7006;
    if ((e.pos.x) < 14000) {
        xv7006 = xv7006 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7006 = xv7006 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7006 = yv7006 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7006 = yv7006 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7007 = -2.4011268652718254;
    var yv7007 = -1.1358934102150153;
    C(1,[3],[1],{w:68,h:68,y:8574.375675040666,x:14075.035794202544,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7007;
    e.pos.x += xv7007;
    if ((e.pos.x) < 14000) {
        xv7007 = xv7007 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7007 = xv7007 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7007 = yv7007 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7007 = yv7007 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7008 = 0.07517100417271035;
    var yv7008 = 2.655186129564492;
    C(1,[3],[1],{w:68,h:68,y:9520.02377535316,x:14243.191845963871,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7008;
    e.pos.x += xv7008;
    if ((e.pos.x) < 14000) {
        xv7008 = xv7008 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7008 = xv7008 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7008 = yv7008 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7008 = yv7008 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7009 = 0.4557751382599489;
    var yv7009 = 2.616855572217184;
    C(1,[3],[1],{w:68,h:68,y:8723.931238421144,x:14641.528668349452,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7009;
    e.pos.x += xv7009;
    if ((e.pos.x) < 14000) {
        xv7009 = xv7009 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7009 = xv7009 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7009 = yv7009 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7009 = yv7009 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7010 = -2.0523278933004954;
    var yv7010 = 1.6863019542421076;
    C(1,[3],[1],{w:68,h:68,y:9522.933638223461,x:14622.509984750128,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7010;
    e.pos.x += xv7010;
    if ((e.pos.x) < 14000) {
        xv7010 = xv7010 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7010 = xv7010 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7010 = yv7010 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7010 = yv7010 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7011 = 2.656247167188701;
    var yv7011 = -0.0038793429854459896;
    C(1,[3],[1],{w:68,h:68,y:8955.902100965846,x:14330.2398795419,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7011;
    e.pos.x += xv7011;
    if ((e.pos.x) < 14000) {
        xv7011 = xv7011 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7011 = xv7011 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7011 = yv7011 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7011 = yv7011 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7012 = 2.645639102784845;
    var yv7012 = -0.23718726845216703;
    C(1,[3],[1],{w:68,h:68,y:8617.869950251774,x:14608.223111508167,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7012;
    e.pos.x += xv7012;
    if ((e.pos.x) < 14000) {
        xv7012 = xv7012 * -1;
        e.pos.x = 14000;
    } else if(e.pos.x + 68 > 15200){
        xv7012 = xv7012 * -1;
        e.pos.x = 15200 - 68;
    }
    if ((e.pos.y) < 8500) {
        yv7012 = yv7012 * -1;
        e.pos.y = 8500;
    } else if(e.pos.y + 68 > 9900){
        yv7012 = yv7012 * -1;
        e.pos.y = 9900 - 68;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#ff4000';
        ctx.beginPath();
        ctx.rect(o.pos.x, o.pos.y, 68, 68);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});
    

    var xv7013 = 2.2814944480129986;
    var yv7013 = -1.6800478747534668;
    C(0,[3],[1],{r:32,y:9134.279015725315,x:13536.254922636388,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7013;
    e.pos.x += xv7013;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7013 = xv7013 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7013 = yv7013 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7014 = 2.6001084614369225;
    var yv7014 = 1.1257058970005878;
    C(0,[3],[1],{r:32,y:9423.112062856457,x:13797.245699024103,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7014;
    e.pos.x += xv7014;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7014 = xv7014 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7014 = yv7014 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7015 = 1.3923940285297927;
    var yv7015 = -2.4675932904537476;
    C(0,[3],[1],{r:32,y:9351.75315206441,x:13854.101230264809,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7015;
    e.pos.x += xv7015;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7015 = xv7015 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7015 = yv7015 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7016 = 2.8078919409131786;
    var yv7016 = -0.3788411618773762;
    C(0,[3],[1],{r:32,y:8955.329562639648,x:12949.929841007031,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7016;
    e.pos.x += xv7016;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7016 = xv7016 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7016 = yv7016 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7017 = 1.6442577048406124;
    var yv7017 = -2.3074215865008414;
    C(0,[3],[1],{r:32,y:9786.838949336403,x:13519.763408229008,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7017;
    e.pos.x += xv7017;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7017 = xv7017 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7017 = yv7017 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7018 = 2.6236443128165843;
    var yv7018 = 1.069704771235023;
    C(0,[3],[1],{r:32,y:9204.68219824198,x:13888.245987898868,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7018;
    e.pos.x += xv7018;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7018 = xv7018 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7018 = yv7018 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7019 = 2.686805424702138;
    var yv7019 = 0.8993633234510623;
    C(0,[3],[1],{r:32,y:8792.600283398548,x:13511.581580355072,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7019;
    e.pos.x += xv7019;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7019 = xv7019 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7019 = yv7019 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7020 = -2.150507998985246;
    var yv7020 = -1.8447474418137169;
    C(0,[3],[1],{r:32,y:8962.283795537038,x:13085.303757453587,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7020;
    e.pos.x += xv7020;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7020 = xv7020 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7020 = yv7020 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7021 = -0.19819360355202062;
    var yv7021 = -2.8263929438931243;
    C(0,[3],[1],{r:32,y:9673.641228038688,x:13764.385933798254,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7021;
    e.pos.x += xv7021;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7021 = xv7021 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7021 = yv7021 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7022 = -0.9786938924301942;
    var yv7022 = 2.6589351332248805;
    C(0,[3],[1],{r:32,y:9790.988372080867,x:13572.045782551588,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7022;
    e.pos.x += xv7022;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7022 = xv7022 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7022 = yv7022 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7023 = 2.140498398321528;
    var yv7023 = 1.856352440826027;
    C(0,[3],[1],{r:32,y:9086.68407926374,x:13641.069541482335,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7023;
    e.pos.x += xv7023;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7023 = xv7023 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7023 = yv7023 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7024 = 1.3663859972225187;
    var yv7024 = -2.4820892579381586;
    C(0,[3],[1],{r:32,y:9659.644830489477,x:13830.462346474571,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7024;
    e.pos.x += xv7024;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7024 = xv7024 * -1;
    }
    if ((e.pos.y - e.sat.r) < 8500 || e.pos.y + e.sat.r > 9900) {
        yv7024 = yv7024 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7025 = 0;
    var yv7025 = 0;
    var shootDirectionIndex7025 = 0;
    var timer7025 = 148.7777777779617;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:6900,x:7400,sf:(e)=>{
    e.pos.y += yv7025;
    e.pos.x += xv7025;
    if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000) {
        xv7025 = xv7025 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 7000) {
        yv7025 = yv7025 * -1;
    }

    timer7025--;
    if(timer7025 < 0){
        timer7025 = 238.66666666666666;

        shootDirectionIndex7025++;
        const shootDirections = [0];
        if(shootDirectionIndex7025 >= shootDirections.length){
            shootDirectionIndex7025 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7025];

        counter++;
        /*scoped using let*/
        let xv7025 = Math.cos(dir) * 3.6363636363636362;
        let yv7025 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7025;
        e.pos.x += xv7025;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000 || (e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 7000) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7026 = 0;
    var yv7026 = 0;
    var shootDirectionIndex7026 = 0;
    var timer7026 = 148.7777777779617;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:6900,x:8900,sf:(e)=>{
    e.pos.y += yv7026;
    e.pos.x += xv7026;
    if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000) {
        xv7026 = xv7026 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 7000) {
        yv7026 = yv7026 * -1;
    }

    timer7026--;
    if(timer7026 < 0){
        timer7026 = 238.66666666666666;

        shootDirectionIndex7026++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex7026 >= shootDirections.length){
            shootDirectionIndex7026 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7026];

        counter++;
        /*scoped using let*/
        let xv7026 = Math.cos(dir) * 3.6363636363636362;
        let yv7026 = Math.sin(dir) * 3.6363636363636362;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7026;
        e.pos.x += xv7026;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000 || (e.pos.y - e.sat.r) < 6800 || e.pos.y + e.sat.r > 7000) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7027 = 0;
    var yv7027 = 0;
    var shootDirectionIndex7027 = 0;
    var timer7027 = 6.111111111263651;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:5100,x:8900,sf:(e)=>{
    e.pos.y += yv7027;
    e.pos.x += xv7027;
    if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000) {
        xv7027 = xv7027 * -1;
    }
    if ((e.pos.y - e.sat.r) < 5000 || e.pos.y + e.sat.r > 5200) {
        yv7027 = yv7027 * -1;
    }

    timer7027--;
    if(timer7027 < 0){
        timer7027 = 141.33333333333334;

        shootDirectionIndex7027++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex7027 >= shootDirections.length){
            shootDirectionIndex7027 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7027];

        counter++;
        /*scoped using let*/
        let xv7027 = Math.cos(dir) * 3.3333333333333335;
        let yv7027 = Math.sin(dir) * 3.3333333333333335;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7027;
        e.pos.x += xv7027;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000 || (e.pos.y - e.sat.r) < 5000 || e.pos.y + e.sat.r > 5200) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7028 = 0;
    var yv7028 = 0;
    var shootDirectionIndex7028 = 0;
    var timer7028 = 48.777777777927305;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:64,y:4700,x:7400,sf:(e)=>{
    e.pos.y += yv7028;
    e.pos.x += xv7028;
    if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000) {
        xv7028 = xv7028 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4600 || e.pos.y + e.sat.r > 4800) {
        yv7028 = yv7028 * -1;
    }

    timer7028--;
    if(timer7028 < 0){
        timer7028 = 152;

        shootDirectionIndex7028++;
        const shootDirections = [0];
        if(shootDirectionIndex7028 >= shootDirections.length){
            shootDirectionIndex7028 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7028];

        counter++;
        /*scoped using let*/
        let xv7028 = Math.cos(dir) * 3.0303030303030303;
        let yv7028 = Math.sin(dir) * 3.0303030303030303;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:64,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7028;
        e.pos.x += xv7028;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 9000 || (e.pos.y - e.sat.r) < 4600 || e.pos.y + e.sat.r > 4800) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7029 = 1.9304100914588511;
    var yv7029 = -0.5229884117204033;
    C(0,[3],[1],{r:36,y:803.7784896836987,x:3997.538015937181,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7029;
    e.pos.x += xv7029;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7029 = xv7029 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7029 = yv7029 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7030 = 0.5510249021816567;
    var yv7030 = -1.9225950060206896;
    C(0,[3],[1],{r:36,y:1509.6952802473309,x:3450.5384394911007,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7030;
    e.pos.x += xv7030;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7030 = xv7030 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7030 = yv7030 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7031 = 1.4330441600731048;
    var yv7031 = 1.3951288239013522;
    C(0,[3],[1],{r:36,y:756.1045355848769,x:3366.3981513167732,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7031;
    e.pos.x += xv7031;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7031 = xv7031 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7031 = yv7031 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7032 = -1.0009308640813617;
    var yv7032 = 1.7315130393183122;
    C(0,[3],[1],{r:36,y:1528.76763487158,x:3161.038400634375,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7032;
    e.pos.x += xv7032;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7032 = xv7032 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7032 = yv7032 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7033 = 1.6395263672065998;
    var yv7033 = -1.1454052956199958;
    C(0,[3],[1],{r:36,y:588.3450718043423,x:3394.9494029801785,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7033;
    e.pos.x += xv7033;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7033 = xv7033 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7033 = yv7033 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7034 = 0.9621538051989086;
    var yv7034 = -1.753356796302812;
    C(0,[3],[1],{r:36,y:861.2305971104493,x:4230.251603870438,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7034;
    e.pos.x += xv7034;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7034 = xv7034 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7034 = yv7034 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7035 = -0.49711856295304585;
    var yv7035 = 1.4152290042136286;
    C(0,[3],[1],{r:64,y:336.0957350201404,x:4201.3327965966355,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7035;
    e.pos.x += xv7035;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7035 = xv7035 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7035 = yv7035 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7036 = -0.15945106317164487;
    var yv7036 = -1.4915010420557648;
    C(0,[3],[1],{r:64,y:1185.494282962168,x:3879.0763725731185,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7036;
    e.pos.x += xv7036;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7036 = xv7036 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7036 = yv7036 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7037 = 0.4819079437877955;
    var yv7037 = 1.42048045875831;
    C(0,[3],[1],{r:64,y:911.3399603444137,x:3098.747113204474,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7037;
    e.pos.x += xv7037;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7037 = xv7037 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7037 = yv7037 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7038 = -1.0129265032579673;
    var yv7038 = 2.4667977237926704;
    C(0,[3],[1],{r:22,y:489.701027079262,x:3245.2155371253184,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7038;
    e.pos.x += xv7038;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7038 = xv7038 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7038 = yv7038 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7039 = -0.46389819817961636;
    var yv7039 = 2.626006392383083;
    C(0,[3],[1],{r:22,y:884.4429959633993,x:3962.9400682027235,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7039;
    e.pos.x += xv7039;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7039 = xv7039 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7039 = yv7039 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7040 = 1.3953168762157664;
    var yv7040 = -2.2724880475062097;
    C(0,[3],[1],{r:22,y:1124.6780485808672,x:3525.1068183082457,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7040;
    e.pos.x += xv7040;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7040 = xv7040 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7040 = yv7040 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7041 = 2.5989080527099584;
    var yv7041 = -0.5973173734878661;
    C(0,[3],[1],{r:22,y:679.051088033684,x:3947.013985867857,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7041;
    e.pos.x += xv7041;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7041 = xv7041 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7041 = yv7041 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7042 = -2.095241816457671;
    var yv7042 = 1.6495674710900041;
    C(0,[3],[1],{r:22,y:226.41924732678058,x:3682.7346654042058,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7042;
    e.pos.x += xv7042;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7042 = xv7042 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7042 = yv7042 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7043 = 2.6659876993046034;
    var yv7043 = 0.06017223834674442;
    C(0,[3],[1],{r:22,y:416.46706283103606,x:3527.6093293619406,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7043;
    e.pos.x += xv7043;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7043 = xv7043 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7043 = yv7043 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7044 = 2.604651768066397;
    var yv7044 = 0.5717519376615194;
    C(0,[3],[1],{r:22,y:469.20474079643765,x:3503.0586683595975,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7044;
    e.pos.x += xv7044;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7044 = xv7044 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7044 = yv7044 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7045 = 2.636050202145555;
    var yv7045 = -0.402927341935852;
    C(0,[3],[1],{r:22,y:454.1314690282078,x:4146.071151812257,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7045;
    e.pos.x += xv7045;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7045 = xv7045 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7045 = yv7045 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7046 = -0.04672194166785456;
    var yv7046 = 2.666257334031713;
    C(0,[3],[1],{r:22,y:1515.3847135300186,x:3750.4627198138223,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7046;
    e.pos.x += xv7046;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7046 = xv7046 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7046 = yv7046 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7047 = 2.6588860240747207;
    var yv7047 = -0.20355889096581548;
    C(0,[3],[1],{r:22,y:410.4817457125424,x:3224.1151675219016,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7047;
    e.pos.x += xv7047;
    if ((e.pos.x - e.sat.r) < 3000 || e.pos.x + e.sat.r > 4300) {
        xv7047 = xv7047 * -1;
    }
    if ((e.pos.y - e.sat.r) < 200 || e.pos.y + e.sat.r > 1600) {
        yv7047 = yv7047 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7048 = 0;
    var yv7048 = 0;
    var shootDirectionIndex7048 = 0;
    var timer7048 = 6.111111111297846;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:128,y:5600,x:9100,sf:(e)=>{
    e.pos.y += yv7048;
    e.pos.x += xv7048;
    if ((e.pos.x - e.sat.r) < 7050 || e.pos.x + e.sat.r > 9300) {
        xv7048 = xv7048 * -1;
    }
    if ((e.pos.y - e.sat.r) < 5450 || e.pos.y + e.sat.r > 5750) {
        yv7048 = yv7048 * -1;
    }

    timer7048--;
    if(timer7048 < 0){
        timer7048 = 245.33333333333334;

        shootDirectionIndex7048++;
        const shootDirections = [3.141592653589793];
        if(shootDirectionIndex7048 >= shootDirections.length){
            shootDirectionIndex7048 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7048];

        counter++;
        /*scoped using let*/
        let xv7048 = Math.cos(dir) * 2.6666666666666665;
        let yv7048 = Math.sin(dir) * 2.6666666666666665;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:128,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7048;
        e.pos.x += xv7048;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7050 || e.pos.x + e.sat.r > 9300 || (e.pos.y - e.sat.r) < 5450 || e.pos.y + e.sat.r > 5750) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7049 = 0;
    var yv7049 = 0;
    var shootDirectionIndex7049 = 0;
    var timer7049 = 3.177777777722655;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:28,y:6350,x:8900,sf:(e)=>{
    e.pos.y += yv7049;
    e.pos.x += xv7049;
    if ((e.pos.x - e.sat.r) < 7700 || e.pos.x + e.sat.r > 9000) {
        xv7049 = xv7049 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6250 || e.pos.y + e.sat.r > 6450) {
        yv7049 = yv7049 * -1;
    }

    timer7049--;
    if(timer7049 < 0){
        timer7049 = 24.266666666666666;

        shootDirectionIndex7049++;
        const shootDirections = [3.141592653589793,3.211405823669566,3.07177948351002];
        if(shootDirectionIndex7049 >= shootDirections.length){
            shootDirectionIndex7049 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7049];

        counter++;
        /*scoped using let*/
        let xv7049 = Math.cos(dir) * 4.696969696969697;
        let yv7049 = Math.sin(dir) * 4.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:28,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7049;
        e.pos.x += xv7049;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7700 || e.pos.x + e.sat.r > 9000 || (e.pos.y - e.sat.r) < 6250 || e.pos.y + e.sat.r > 6450) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7050 = 0;
    var yv7050 = 0;
    var shootDirectionIndex7050 = 0;
    var timer7050 = 24.51111111116501;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:28,y:5950,x:7400,sf:(e)=>{
    e.pos.y += yv7050;
    e.pos.x += xv7050;
    if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 8600) {
        xv7050 = xv7050 * -1;
    }
    if ((e.pos.y - e.sat.r) < 5850 || e.pos.y + e.sat.r > 6050) {
        yv7050 = yv7050 * -1;
    }

    timer7050--;
    if(timer7050 < 0){
        timer7050 = 61.46666666666667;

        shootDirectionIndex7050++;
        const shootDirections = [0];
        if(shootDirectionIndex7050 >= shootDirections.length){
            shootDirectionIndex7050 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7050];

        counter++;
        /*scoped using let*/
        let xv7050 = Math.cos(dir) * 4.696969696969697;
        let yv7050 = Math.sin(dir) * 4.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:28,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7050;
        e.pos.x += xv7050;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 7300 || e.pos.x + e.sat.r > 8600 || (e.pos.y - e.sat.r) < 5850 || e.pos.y + e.sat.r > 6050) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7051 = 0;
    var yv7051 = 0;
    var shootDirectionIndex7051 = 0;
    var timer7051 = 0.3777777776996688;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:28,y:6700,x:7400,sf:(e)=>{
    e.pos.y += yv7051;
    e.pos.x += xv7051;
    if ((e.pos.x - e.sat.r) < 6900 || e.pos.x + e.sat.r > 7800) {
        xv7051 = xv7051 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 6800) {
        yv7051 = yv7051 * -1;
    }

    timer7051--;
    if(timer7051 < 0){
        timer7051 = 29.066666666666666;

        shootDirectionIndex7051++;
        const shootDirections = [0.08726646259971647];
        if(shootDirectionIndex7051 >= shootDirections.length){
            shootDirectionIndex7051 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7051];

        counter++;
        /*scoped using let*/
        let xv7051 = Math.cos(dir) * 4.696969696969697;
        let yv7051 = Math.sin(dir) * 4.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:28,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7051;
        e.pos.x += xv7051;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 6900 || e.pos.x + e.sat.r > 7800 || (e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 6800) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7052 = 0;
    var yv7052 = 0;
    var shootDirectionIndex7052 = 0;
    var timer7052 = 14.91111111103296;{
    let reusableIndexes = [];
    C(0,[3],[1],{r:28,y:6700,x:8900,sf:(e)=>{
    e.pos.y += yv7052;
    e.pos.x += xv7052;
    if ((e.pos.x - e.sat.r) < 8500 || e.pos.x + e.sat.r > 9100) {
        xv7052 = xv7052 * -1;
    }
    if ((e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 6800) {
        yv7052 = yv7052 * -1;
    }

    timer7052--;
    if(timer7052 < 0){
        timer7052 = 29.066666666666666;

        shootDirectionIndex7052++;
        const shootDirections = [3.0543261909900763];
        if(shootDirectionIndex7052 >= shootDirections.length){
            shootDirectionIndex7052 = 0;
        }
        let dir = shootDirections[shootDirectionIndex7052];

        counter++;
        /*scoped using let*/
        let xv7052 = Math.cos(dir) * 4.696969696969697;
        let yv7052 = Math.sin(dir) * 4.696969696969697;

        let dyingTimer = 30;

        let index;

        C(0,[3],[1],{r:28,y:e.pos.y,x:e.pos.x,sf:(e)=>{
        e.pos.y += yv7052;
        e.pos.x += xv7052;
        /*delete obstacle*/
        if ((e.pos.x - e.sat.r) < 8500 || e.pos.x + e.sat.r > 9100 || (e.pos.y - e.sat.r) < 6600 || e.pos.y + e.sat.r > 6800) {
            // shared.tickFns.push(()=>{
            //     for(let i = 0; i < obstacles.length; i++){
            //         if(obstacles[i] === e) {obstacles.splice(i,1); break;}
            //     }
            //     /*for(let key in shared.idToObs){
            //         if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
            //     }*/
            // });
            dyingTimer--;

            if(dyingTimer <= 0 && dyingTimer !== -Infinity){
                e.pos.x = -1E9;
                reusableIndexes.push(index);
                dyingTimer = -Infinity;
            }
        }
        },cr:(o)=>{
            if(dyingTimer < 0) return;

            if(false){
                shared.renderBelowFunctions.push(() => {
                    ctx.globalAlpha = dyingTimer / 30;
                    ctx.lineWidth = 4;
                    ctx.strokeStyle = 'black';
                    ctx.fillStyle = '#107691';

                    ctx.beginPath();
                    ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();
                    ctx.globalAlpha = 1;
                });
                return;
            }

            
            ctx.save();
            ctx.beginPath();
            ctx.rect(7500,4400,1300,3800);
            ctx.clip();
            ctx.closePath();
            

            ctx.globalAlpha = dyingTimer / 30;
            ctx.lineWidth = 4;
            ctx.strokeStyle = 'black';
            ctx.fillStyle = '#107691';

            ctx.beginPath();
            ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;

            ctx.restore();
        }});

        if(reusableIndexes.length === 0){
            index = obstacles.length-1;
        } else {
            index = reusableIndexes.pop();
            obstacles[index] = obstacles.pop(); 
        }
    }

    },cr:(o)=>{
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'black';
        ctx.fillStyle = '#053564';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }})};
    

    var xv7053 = -1.65690351016576;
    var yv7053 = 1.2824560162973793;
    var switchTime7053 = 57.177434010599825;
    var switchState7053 = true;
    var pos7053 = {
        x: 5115.131173846121, y: 9257.204521200969 
    }
    C(0,[3],[1],{r:50,y:9257.204521200969,x:5115.131173846121,sf:(e)=>{
        pos7053.y += yv7053;
        pos7053.x += xv7053;
        if ((pos7053.x - e.sat.r) < 4800 || pos7053.x + e.sat.r > 5500) {
            xv7053 = xv7053 * -1;
        }
        if ((pos7053.y - e.sat.r) < 8300 || pos7053.y + e.sat.r > 9600) {
            yv7053 = yv7053 * -1;
        }

        if(switchState7053 === true){
            e.pos.x = pos7053.x;
            e.pos.y = pos7053.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime7053--;
        if(switchTime7053 <= 0){
            switchTime7053 = 192;
            switchState7053 = !switchState7053;
            if(switchState7053 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos7053.x;
                e.pos.y = pos7053.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState7053 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos7053.x, pos7053.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv7054 = 0.04547387768792593;
    var yv7054 = -2.094744567288571;
    var switchTime7054 = 376.2012721638722;
    var switchState7054 = true;
    var pos7054 = {
        x: 5153.181098770423, y: 9181.339440771437 
    }
    C(0,[3],[1],{r:50,y:9181.339440771437,x:5153.181098770423,sf:(e)=>{
        pos7054.y += yv7054;
        pos7054.x += xv7054;
        if ((pos7054.x - e.sat.r) < 4800 || pos7054.x + e.sat.r > 5500) {
            xv7054 = xv7054 * -1;
        }
        if ((pos7054.y - e.sat.r) < 8300 || pos7054.y + e.sat.r > 9600) {
            yv7054 = yv7054 * -1;
        }

        if(switchState7054 === true){
            e.pos.x = pos7054.x;
            e.pos.y = pos7054.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime7054--;
        if(switchTime7054 <= 0){
            switchTime7054 = 192;
            switchState7054 = !switchState7054;
            if(switchState7054 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos7054.x;
                e.pos.y = pos7054.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState7054 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos7054.x, pos7054.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv7055 = 2.0896478871537805;
    var yv7055 = -0.15295222604036335;
    var switchTime7055 = 61.48306063066204;
    var switchState7055 = true;
    var pos7055 = {
        x: 5056.294438465016, y: 8635.955205454027 
    }
    C(0,[3],[1],{r:50,y:8635.955205454027,x:5056.294438465016,sf:(e)=>{
        pos7055.y += yv7055;
        pos7055.x += xv7055;
        if ((pos7055.x - e.sat.r) < 4800 || pos7055.x + e.sat.r > 5500) {
            xv7055 = xv7055 * -1;
        }
        if ((pos7055.y - e.sat.r) < 8300 || pos7055.y + e.sat.r > 9600) {
            yv7055 = yv7055 * -1;
        }

        if(switchState7055 === true){
            e.pos.x = pos7055.x;
            e.pos.y = pos7055.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime7055--;
        if(switchTime7055 <= 0){
            switchTime7055 = 192;
            switchState7055 = !switchState7055;
            if(switchState7055 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos7055.x;
                e.pos.y = pos7055.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState7055 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos7055.x, pos7055.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv7056 = 2.075942229671918;
    var yv7056 = -0.2837014888958956;
    var switchTime7056 = 233.9483316741026;
    var switchState7056 = true;
    var pos7056 = {
        x: 5399.639921082235, y: 8558.566593886308 
    }
    C(0,[3],[1],{r:50,y:8558.566593886308,x:5399.639921082235,sf:(e)=>{
        pos7056.y += yv7056;
        pos7056.x += xv7056;
        if ((pos7056.x - e.sat.r) < 4800 || pos7056.x + e.sat.r > 5500) {
            xv7056 = xv7056 * -1;
        }
        if ((pos7056.y - e.sat.r) < 8300 || pos7056.y + e.sat.r > 9600) {
            yv7056 = yv7056 * -1;
        }

        if(switchState7056 === true){
            e.pos.x = pos7056.x;
            e.pos.y = pos7056.y;
        } else {
            e.pos.x = -100000;
        }

        switchTime7056--;
        if(switchTime7056 <= 0){
            switchTime7056 = 192;
            switchState7056 = !switchState7056;
            if(switchState7056 === true){
                /*if we're switching on, reset to pos we were on. This wasn't how the enemy worked before but it's ok*/
                e.pos.x = pos7056.x;
                e.pos.y = pos7056.y;
            }
        }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#8304cc';
        ctx.globalAlpha = 1;
        if (switchState7056 === false) {
            ctx.globalAlpha = 0.4;
        }
        ctx.beginPath();
        ctx.arc(pos7056.x, pos7056.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
        ctx.globalAlpha = 1;
    }});
    

    var xv7057 = -0.6949747252208379;
    var yv7057 = 2.227432283089357;
    C(0,[3],[1],{r:16,y:883.2668705713791,x:14537.461238800097,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7057;
    e.pos.x += xv7057;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7057 = xv7057 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7057 = yv7057 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7058 = 0.8942266665058333;
    var yv7058 = 2.1551805291794723;
    C(0,[3],[1],{r:16,y:792.0696304433905,x:14482.072464001487,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7058;
    e.pos.x += xv7058;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7058 = xv7058 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7058 = yv7058 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7059 = -2.3280452614267997;
    var yv7059 = 0.15700224582046304;
    C(0,[3],[1],{r:16,y:781.651895092952,x:14454.219912310808,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7059;
    e.pos.x += xv7059;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7059 = xv7059 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7059 = yv7059 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7060 = 2.0519530417312044;
    var yv7060 = 1.1108254403705848;
    C(0,[3],[1],{r:16,y:558.5086270431823,x:14520.590635951408,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7060;
    e.pos.x += xv7060;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7060 = xv7060 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7060 = yv7060 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7061 = -1.9203872180165;
    var yv7061 = 1.325351793797893;
    C(0,[3],[1],{r:16,y:105.69472383460464,x:14474.865229199913,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7061;
    e.pos.x += xv7061;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7061 = xv7061 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7061 = yv7061 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7062 = 1.7839460441492527;
    var yv7062 = -1.5039883496918038;
    C(0,[3],[1],{r:16,y:604.9056187523977,x:14424.4392320661,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7062;
    e.pos.x += xv7062;
    if ((e.pos.x - e.sat.r) < 14400 || e.pos.x + e.sat.r > 14600) {
        xv7062 = xv7062 * -1;
    }
    if ((e.pos.y - e.sat.r) < 0 || e.pos.y + e.sat.r > 1700) {
        yv7062 = yv7062 * -1;
    }
    },cr:(o)=>{
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.fillStyle = '#7d7d7d';
        ctx.beginPath();
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }});

    

    var xv7063 = 3.6032909029114006;
    var yv7063 = -5.608987351870245;
    C(0,[3],[1],{r:64,y:5255.781497795463,x:12985.939211262119,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7063;
    e.pos.x += xv7063;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7063 = xv7063 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7063 = yv7063 * -1;
    }
    }});

    

    var xv7064 = -6.556783148058823;
    var yv7064 = 1.2054207538350563;
    C(0,[3],[1],{r:64,y:5100.949334242434,x:13899.566748117868,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7064;
    e.pos.x += xv7064;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7064 = xv7064 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7064 = yv7064 * -1;
    }
    }});

    

    var xv7065 = -4.582241887920984;
    var yv7065 = -4.842262252813945;
    C(0,[3],[1],{r:64,y:5166.183505727172,x:13675.064984317558,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7065;
    e.pos.x += xv7065;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7065 = xv7065 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7065 = yv7065 * -1;
    }
    }});

    

    var xv7066 = -5.607859113325753;
    var yv7066 = -3.6050465474850326;
    C(0,[3],[1],{r:64,y:4803.344169541243,x:13131.79078616824,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7066;
    e.pos.x += xv7066;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7066 = xv7066 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7066 = yv7066 * -1;
    }
    }});

    

    var xv7067 = 3.3366393746306238;
    var yv7067 = -5.771592685568603;
    C(0,[3],[1],{r:64,y:5212.312541758713,x:13745.091571740822,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7067;
    e.pos.x += xv7067;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7067 = xv7067 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7067 = yv7067 * -1;
    }
    }});

    

    var xv7068 = -0.0698012992429277;
    var yv7068 = -6.666301240048221;
    C(0,[3],[1],{r:64,y:4726.046499149982,x:13052.170285815508,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7068;
    e.pos.x += xv7068;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7068 = xv7068 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7068 = yv7068 * -1;
    }
    }});

    

    var xv7069 = -4.376270589219197;
    var yv7069 = 5.029184841938057;
    C(0,[3],[1],{r:64,y:4718.0029548649845,x:13399.724771880783,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7069;
    e.pos.x += xv7069;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7069 = xv7069 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7069 = yv7069 * -1;
    }
    }});

    

    var xv7070 = -2.1981898923646463;
    var yv7070 = 6.2938387047612165;
    C(0,[3],[1],{r:64,y:5288.474180133577,x:13823.603062293458,boundPlayer:false,sf:(e)=>{
    e.pos.y += yv7070;
    e.pos.x += xv7070;
    if ((e.pos.x - e.sat.r) < 12800 || e.pos.x + e.sat.r > 14000) {
        xv7070 = xv7070 * -1;
    }
    if ((e.pos.y - e.sat.r) < 4300 || e.pos.y + e.sat.r > 5500) {
        yv7070 = yv7070 * -1;
    }
    }});

    C(1,[],[18],{type:[1,[],[18]],x:4900,y:5100,w:200,h:600,size:18.75,inView:true,sizeChangePermanent:false,sizeMult:0.7653061224489796,})
C(1,[],[18],{type:[1,[],[18]],x:14400,y:0,w:200,h:1700,size:8,inView:false,sizeChangePermanent:false,sizeMult:0.32653061224489793,})
C(1,[],[18],{type:[1,[],[18]],x:12800,y:600,w:200,h:1100,size:22.5,inView:false,sizeChangePermanent:false,sizeMult:0.9183673469387755,})
C(1,[],[18],{type:[1,[],[18]],x:14200,y:0,w:200,h:200,size:8,inView:false,sizeChangePermanent:false,sizeMult:0.32653061224489793,})
C(1,[],[11],{type:[1,[],[11]],x:3600,y:0,w:100,h:100,renderAbove:false,})
C(1,[],[11],{type:[1,[],[11]],x:13200,y:8300,w:1600,h:200,renderAbove:false,})
C(1,[],[12],{type:[1,[],[12]],x:14650,y:0,w:150,h:150,tpx:17050,tpy:3450,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:14600,y:0,w:50,h:150,maxStrength:14,currentStrength:10,time:0.2,timer:0.2,regenTime:200,inView:false,healSpeed:1,})
C(1,[],[27],{type:[1,[],[27]],x:0,y:9500,w:100,h:500,state:false,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:false,initialShipAngle:1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
var minX7070, minY7070, maxX7070, maxY7070;
    minX7070 = -100;minY7070 = 9400;maxX7070 = 200;maxY7070 = 10100;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX7070) && (player.pos.x) < md(maxX7070) && (player.pos.y) > md(minY7070) && (player.pos.y) < md(maxY7070)) {
            colors.background="#720b98"; colors.tile="#431c6b";
        }
    },});
C(1,[],[13],{type:[1,[],[13]],x:0,y:9500,w:2700,h:500,force:2000,dir:{"x":2000,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.4165666266506605,})
var typingVinette7071;
    C(1,[],[24],{x:0,y:4500,w: 500,h:500,innerR: 0, innerG: 0, innerB: 0, innerSize: 0, innerOpacity: 0, outerR: 0, outerG: 0, outerB: 0, outerSize: 0.42, outerOpacity: 0.9});typingVinette7071=shared.obstacles[shared.obstacles.length-1];
{let completed = false;let active = false;let curChar = 0;let text="Relax. This planet will only get a little bit harder.";let freezeX, freezeY;
    C(1,[],[3],{"x":0,"y":4500,w:500,h:500,ef:(p)=>{
        if(completed === true) return;
        if(active === true) {
            p.pos.x = freezeX;
            p.pos.y = freezeY;
            return;
        }
        active = true;

        freezeX = p.pos.x;
        freezeY = p.pos.y;

        let oldKeyDown = window.onkeydown;
        let oldKeyUp = window.onkeyup;

        for(let key in shared.input){shared.input[key] = false;}

        window.onkeyup = () => {};
        window.onkeydown = (e) => {
            if(e.type !== 'keydown') return;
            if(text[curChar] === e.key) curChar++;
            if(curChar >= text.length) {window.onkeydown = oldKeyDown; window.onkeyup = oldKeyUp; completed = true; active = false;typingVinette7071.pos.x = -1E9;}
        }
    },cr:(o)=>{
        if (completed === true) ctx.globalAlpha = 0.2;
        ctx.fillStyle = 'white';
        ctx.font = (o.dimensions.x / 10) + "px Inter";
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';

        const aheadChar = Math.min(
            text.length,
            curChar + 15
        );
        const textToDisplay = text.slice(curChar, aheadChar);
        ctx.fillText(
            textToDisplay,
            250, 4750,
        );
        ctx.fillStyle = 'black';
        ctx.globalAlpha = 0.17;
        if (completed === true) ctx.globalAlpha = 0.05;

        // ctx.beginPath();
        // for(let i = 0; i < o.sat.points.length; i++){
        //     ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
        // }
        // ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
        // ctx.fill();
        // ctx.closePath();
        ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);

        ctx.globalAlpha = 1;
    }})};
C(1,[],[26],{type:[1,[],[26]],x:12800,y:0,w:200,h:200,musicPath:"https://www.youtube.com/watch?v=5e-EvVDXNU0",volume:1,startTime:0,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:12800,y:4100,w:200,h:200,force:5000,dir:{"x":0,"y":5000},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:3.54141656662665,})
C(1,[],[9],{type:[1,[],[9]],x:12800,y:4100,w:200,h:100,spawn:{"x":6450,"y":2075},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[19],{type:[1,[],[19]],x:17100,y:0,w:2900,h:700,speedInc:1.5,inView:false,speedChangePermanent:false,speedMult:1.5,})
C(4,[],[0],{type:[4,[],[0]],x:19100,y:100,radius:100,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[9500,49.99999999999999],[9450,49.999999999999986]],"type":"poly","props":{}},endPolygon:{"points":[[9550,0],[9550,-50]],"type":"poly","props":{}},innerRadius:100,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:200,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(4,[],[0],{type:[4,[],[0]],x:19650,y:350,radius:300,startAngle:-1.5707963267948966,endAngle:1.5707963267948966,startPolygon:{"points":[[9825,0],[9825,-125]],"type":"poly","props":{}},endPolygon:{"points":[[9825,350],[9825,475]],"type":"poly","props":{}},innerRadius:350,toRotate:false,rotateSpeed:0,renderType:"circle",inView:false,r:600,startSliceAngle:-1.5707963267948966,endSliceAngle:1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[13],{type:[1,[],[13]],x:12900,y:1500,w:1500,h:200,force:1750,dir:{"x":-1750,"y":0},direction:"left",inView:false,conveyorAngle:180,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:1.2394957983193275,})
C(0,[],[0],{type:[0,[],[0]],x:13000,y:1500,r:100,renderType:"circle",inView:false,})
C(1,[],[17],{type:[1,[],[17]],x:12800,y:400,w:1400,h:200,time:0,maxTime:3,cdmult:3,trapType:"death",inView:false,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:180,})
C(1,[],[14],{type:[1,[],[14]],x:13200,y:600,w:1000,h:700,force:1500,dir:{"x":0,"y":1500},direction:"down",jumpHeight:115,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.32412965186074433,jumpForce:33.35,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(0,[],[1],{type:[0,[],[1]],x:13650,y:1350,r:136,renderType:"circleR",inView:false,boundPlayer:true,})
C(0,[],[1],{type:[0,[],[1]],x:13650,y:750,r:136,renderType:"circleR",inView:false,boundPlayer:true,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:6900,w:2000,h:3100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10000,y:-100,w:100,h:2500,canJump:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:4800,y:9600,w:700,h:100,maxStrength:33,currentStrength:33,time:0,timer:0,regenTime:266.6666666666667,inView:false,healSpeed:1,})
C(1,[0],[1],{type:[1,[0],[1]],x:4800,y:9800,w:200,h:100,points:[[2400,4900],[2650,4900]],speed:60,currentPoint:1.41,collidable:true,pointOn:{"x":2650,"y":4900},pointTo:{"x":2400,"y":4900},xv:-60,yv:7.34788079488412e-15,inView:false,path:[[4800,9800,2],[5300,9800,2]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:5300,y:9700,w:200,h:100,points:[[2650,4850],[2400,4850]],speed:60,currentPoint:1.41,collidable:true,pointOn:{"x":2400,"y":4850},pointTo:{"x":2650,"y":4850},xv:60,yv:7.34788079488412e-15,inView:false,path:[[5300,9700,2],[4800,9700,2]],boundPlayer:true,})
C(1,[],[27],{type:[1,[],[27]],x:4800,y:7000,w:700,h:100,state:true,shipAngle:1.5707963267948966,inView:false,changeShipStateTo:true,initialShipAngle:1.5707963267948966,shipTurnSpeed:0.0032724923474893677,})
C(1,[],[9],{type:[1,[],[9]],x:4800,y:7000,w:700,h:100,spawn:{"x":2575,"y":3525},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:5900,w:4700,h:1100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5900,y:3700,w:1600,h:2500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:4200,w:1200,h:3000,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:8000,y:4300,w:300,h:100,spawn:{"x":4075,"y":2175},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[20],{x:8700,y:2300,w:100,h:100,hex:'#000000',alpha:0,cr:()=>{},ef:()=>{
        for(let i = 0; i < obstacles.length; i++){
            if(obstacles[i].collected !== undefined){
                obstacles[i].collected = false;
            } else if(obstacles[i].isCoindoor === true){
                obstacles[i].coins = obstacles[i].maxCoins; 
            }
        }    
    }});C(1,[],[14],{type:[1,[],[14]],x:7500,y:0,w:2500,h:2400,force:1500,dir:{"x":0,"y":1500},direction:"down",jumpHeight:145,maxForce:1000,variableJumpHeight:false,platformerFriction:0.972,inView:false,platformerAngle:90,platformerAngleRotateSpeed:0,platformerForce:0.32412965186074433,jumpForce:42.05,jumpDecay:0.96,maxJumpCooldown:20,canJumpMidair:false,})
C(1,[],[9],{type:[1,[],[9]],x:250,y:100,w:850,h:100,spawn:{"x":337.5,"y":75},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[12],{type:[1,[],[12]],x:5550,y:4900,w:200,h:200,tpx:650,tpy:150,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:true,})
C(1,[],[17],{type:[1,[],[17]],x:4300,y:4900,w:600,h:200,time:0,maxTime:5,cdmult:3,trapType:"death",inView:true,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:300,})
C(1,[0],[12],{type:[1,[0],[12]],x:5200,y:4800,w:100,h:100,points:[[2600,2400],[2600,2550]],speed:40,currentPoint:1.7888888888906118,tpx:5000,tpy:5000,pointOn:{"x":2600,"y":2550},pointTo:{"x":2600,"y":2400},xv:2.4492935982947065e-15,yv:-40,inView:true,path:[[5200,4800,1.3333333333333333],[5200,5100,1.3333333333333333]],})
C(2,[],[0],{type:[2,[],[0]],points:[[4900,4100],[4900,4900],[4100,4900]],most:{"left":2050,"right":2450,"top":2050,"bottom":2450},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5100,4100],[5900,4900],[5100,4900]],most:{"left":2550,"right":2950,"top":2050,"bottom":2450},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5100,5100],[5900,5100],[5100,5900]],most:{"left":2550,"right":2950,"top":2550,"bottom":2950},renderType:"poly",inView:true,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[4100,5100],[4900,5100],[4900,5900]],most:{"left":2050,"right":2450,"top":2550,"bottom":2950},renderType:"poly",inView:true,x:null,y:null,})
C(1,[],[7],{type:[1,[],[7]],x:4350,y:4950,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[0],{type:[1,[],[0]],x:4100,y:4900,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:5700,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:5700,y:4900,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:4900,y:4100,w:200,h:200,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:3500,w:1300,h:2500,canJump:true,inView:true,})
C(1,[],[0],{type:[1,[],[0]],x:2500,y:2800,w:5000,h:1300,canJump:true,inView:false,})
C(1,[],[7],{type:[1,[],[7]],x:4950,y:4350,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:5350,y:4950,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[],[7],{type:[1,[],[7]],x:4950,y:5550,w:100,h:100,collected:false,inView:true,color:"#d5d612",coinAmount:1,})
C(1,[0],[0],{type:[1,[0],[0]],x:4900,y:4500,w:100,h:100,points:[[2450,2250],[2450,2400]],speed:50,currentPoint:0.7361111111093881,alongWith:false,pointOn:{"x":2450,"y":2250},pointTo:{"x":2450,"y":2400},xv:3.061616997868383e-15,yv:50,inView:true,path:[[4900,4500,1.6666666666666667],[4900,4800,1.6666666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:5000,y:4500,w:100,h:100,points:[[2500,2250],[2500,2400]],speed:50,currentPoint:1.736111111109388,alongWith:false,pointOn:{"x":2500,"y":2400},pointTo:{"x":2500,"y":2250},xv:3.061616997868383e-15,yv:-50,inView:true,path:[[5000,4500,1.6666666666666667],[5000,4800,1.6666666666666667]],})
C(1,[1],[0],{type:[1,[1],[0]],x:4900,y:5375,w:200,h:50,angle:-710.4166666666579,rotateSpeed:-0.01430976430976431,pivotX:5000,pivotY:5400,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:0,inView:true,initialRotation:-12.399109894376227,})
C(1,[1],[0],{type:[1,[1],[0]],x:4900,y:5175,w:200,h:50,angle:-620.4166666666663,rotateSpeed:-0.01430976430976431,pivotX:5000,pivotY:5200,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:51.53882032022076,unSim:0,inView:true,initialRotation:-10.82831356758148,})
C(1,[],[2],{type:[1,[],[2]],x:4500,y:5050,w:100,h:50,effect:30,inView:true,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:4700,y:4900,w:100,h:50,effect:30,inView:true,bounciness:20,decay:0.5,})
C(1,[],[26],{type:[1,[],[26]],x:4900,y:4900,w:200,h:200,musicPath:"https://www.youtube.com/watch?v=n3EIyZ8my8o",volume:1,startTime:0,inView:true,})
C(1,[],[8],{type:[1,[],[8]],x:5500,y:4900,w:200,h:200,coins:4,currentCoins:4,inView:true,coinDoorColor:"#d5d612",coindoorCoinAmount:4,})
C(1,[],[0],{type:[1,[],[0]],x:-100,y:2800,w:3000,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-150,y:1700,w:2500,h:1650,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1300,y:-350,w:1700,h:3250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:100,y:-100,w:1300,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:-400,y:-50,w:400,h:1800,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:2800,y:1700,w:4700,h:1400,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:4300,y:-100,w:3200,h:1800,canJump:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3000,y:0,w:600,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:3700,y:0,w:600,h:200,canJump:true,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:3600,y:0,w:100,h:100,spawn:{"x":1825,"y":25},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[12],{type:[1,[],[12]],x:3000,y:1600,w:1300,h:100,tpx:8750,tpy:2350,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:2400,w:2700,h:1900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1200,y:100,w:600,h:1650,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:100,y:150,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:650,y:400,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1200,y:150,r:200,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:850,y:1350,r:70,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:200,y:550,r:70,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1050,y:700,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:600,y:1100,r:112,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:400,y:800,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:100,y:1300,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:150,y:1050,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:400,y:1400,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:750,y:800,r:70,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1000,y:1000,r:158,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1100,y:1400,r:50,renderType:"circle",inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:0,y:1600,w:1200,h:100,tpx:3650,tpy:50,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:3600,y:100,w:100,h:100,maxStrength:23,currentStrength:23,time:0.016,timer:0.016,regenTime:533.3333333333334,inView:false,healSpeed:1,})
C(1,[],[0],{type:[1,[],[0]],x:7500,y:2300,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8900,y:2300,w:1100,h:100,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8600,y:2400,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:8900,y:2400,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8400,y:2000,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:1800,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9300,y:1200,w:200,h:600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8700,y:1000,w:200,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[7950,1200],[8050,1200],[8100,1400],[7900,1400]],most:{"left":3950,"right":4050,"top":600,"bottom":700},renderType:"poly",inView:false,x:null,y:null,})
C(1,[1],[0],{type:[1,[1],[0]],x:7700,y:900,w:100,h:100,angle:0.5833333333333334,rotateSpeed:0.010016835016835018,pivotX:7750,pivotY:950,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:35.35533905932738,unSim:14.191666666666501,inView:false,initialRotation:0.010181087303300257,})
C(1,[1],[0],{type:[1,[1],[0]],x:8000,y:650,w:100,h:100,angle:-22.583333333333336,rotateSpeed:-0.010016835016835018,pivotX:8050,pivotY:700,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:35.35533905932738,unSim:14.191666666666501,inView:false,initialRotation:-0.3941535227420528,})
C(1,[0],[0],{type:[1,[0],[0]],x:8400,y:500,w:300,h:100,points:[[4200,250],[4300,250]],speed:43,currentPoint:0.1095833333374685,alongWith:false,pointOn:{"x":4200,"y":250},pointTo:{"x":4300,"y":250},xv:43,yv:0,inView:false,path:[[8400,500,1.4333333333333333],[8600,500,1.4333333333333333]],})
C(1,[],[0],{type:[1,[],[0]],x:9200,y:500,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:9500,y:300,w:100,h:100,canJump:true,inView:false,})
C(0,[],[7],{type:[0,[],[7]],x:9650,y:150,r:50,collected:false,renderType:"circle",inView:false,color:"#d5d612",coinAmount:1,})
C(1,[],[12],{type:[1,[],[12]],x:7500,y:-98,w:2500,h:150,tpx:8150,tpy:4350,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
var minX7072, minY7072, maxX7072, maxY7072;
    minX7072 = 8500;minY7072 = 2100;maxX7072 = 9000;maxY7072 = 2500;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX7072) && (player.pos.x) < md(maxX7072) && (player.pos.y) > md(minY7072) && (player.pos.y) < md(maxY7072)) {
            colors.background="#9ec0ed"; colors.tile="#6376c1";
        }
    },});
C(1,[],[0],{type:[1,[],[0]],x:7500,y:4200,w:500,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:8300,y:4200,w:500,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[8000,4300],[8100,4300],[8000,4400]],most:{"left":4000,"right":4050,"top":2150,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[8200,4300],[8300,4300],[8300,4400]],most:{"left":4100,"right":4150,"top":2150,"bottom":2200},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:8800,y:7050,w:150,h:250,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:7200,w:4600,h:2900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5850,y:6800,w:1650,h:500,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:7500,y:7100,w:1300,h:100,tpx:5150,tpy:7050,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:5500,y:6950,w:400,h:350,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[5000,7300],[5100,7400],[5000,7500],[4900,7400]],most:{"left":2450,"right":2550,"top":3650,"bottom":3750},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5300,7600],[5400,7700],[5300,7800],[5200,7700]],most:{"left":2600,"right":2700,"top":3800,"bottom":3900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5000,7900],[5100,8000],[5000,8100],[4900,8000]],most:{"left":2450,"right":2550,"top":3950,"bottom":4050},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:4800,y:9900,w:700,h:100,tpx:50,tpy:9750,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[10],{type:[1,[],[10]],x:4800,y:8200,w:700,h:100,maxStrength:33,currentStrength:33,time:0,timer:0,regenTime:266.6666666666667,inView:false,healSpeed:1,})
C(2,[],[0],{type:[2,[],[0]],points:[[4800,7650],[4850,7700],[4800,7750]],most:{"left":2400,"right":2425,"top":3825,"bottom":3875},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,7950],[5500,8050],[5450,8000]],most:{"left":2725,"right":2750,"top":3975,"bottom":4025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[5500,7350],[5500,7450],[5450,7400]],most:{"left":2725,"right":2750,"top":3675,"bottom":3725},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:-50,y:5900,w:2850,h:3600,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:0,y:5000,w:2900,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:500,y:4350,w:2450,h:700,canJump:true,inView:false,})
C(1,[],[12],{type:[1,[],[12]],x:2700,y:9500,w:100,h:500,tpx:250,tpy:4550,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[-50,9450],[150,9450],[-50,9650]],most:{"left":-25,"right":75,"top":4725,"bottom":4825},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[-50,9850],[150,10050],[-50,10050]],most:{"left":-25,"right":75,"top":4925,"bottom":5025},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[12],{type:[1,[],[12]],x:184,y:4950,w:132,h:50,tpx:12900,tpy:100,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:10000,y:-150,w:2800,h:10200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:200,w:1450,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14200,y:200,w:200,h:1300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14600,y:150,w:200,h:1750,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:1700,w:1800,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:600,w:200,h:900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:1300,w:1000,h:200,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13200,y:600,w:800,h:200,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[12800,400],[13000,400],[12800,600]],most:{"left":6400,"right":6500,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13100,500],[13100,600],[13000,600]],most:{"left":6500,"right":6550,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13250,400],[13350,400],[13350,500]],most:{"left":6625,"right":6675,"top":200,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13550,500],[13550,600],[13450,600]],most:{"left":6725,"right":6775,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13700,400],[13800,400],[13800,500]],most:{"left":6850,"right":6900,"top":200,"bottom":250},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[13900,500],[14000,600],[13900,600]],most:{"left":6950,"right":7000,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14000,400],[14200,400],[14200,600]],most:{"left":7000,"right":7100,"top":200,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[9],{type:[1,[],[9]],x:12800,y:0,w:200,h:200,spawn:{"x":6450,"y":50},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[1],{type:[1,[],[1]],x:12900,y:1400,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[],[1],{type:[1,[],[1]],x:12800,y:1100,w:100,h:100,canCollide:true,inView:false,boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12800,y:600,w:100,h:100,points:[[6400,300],[6400,450]],speed:56,currentPoint:1.304444444444143,collidable:true,pointOn:{"x":6400,"y":450},pointTo:{"x":6400,"y":300},xv:3.429011037612589e-15,yv:-56,inView:false,path:[[12800,600,1.8666666666666667],[12800,900,1.8666666666666667]],boundPlayer:true,})
C(1,[0],[1],{type:[1,[0],[1]],x:12900,y:600,w:100,h:100,points:[[6450,300],[6450,450]],speed:56,currentPoint:0.3044444444441429,collidable:true,pointOn:{"x":6450,"y":300},pointTo:{"x":6450,"y":450},xv:3.429011037612589e-15,yv:56,inView:false,path:[[12900,600,1.8666666666666667],[12900,900,1.8666666666666667]],boundPlayer:true,})
C(1,[],[2],{type:[1,[],[2]],x:14200,y:1500,w:100,h:100,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:13900,y:1600,w:100,h:100,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:13600,y:1500,w:100,h:100,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[],[2],{type:[1,[],[2]],x:13300,y:1600,w:100,h:100,effect:30,inView:false,bounciness:20,decay:0.5,})
C(1,[0],[0],{type:[1,[0],[0]],x:13000,y:0,w:100,h:100,points:[[6500,0],[6700,0]],speed:92,currentPoint:0.5358333333312657,alongWith:false,pointOn:{"x":6500,"y":0},pointTo:{"x":6700,"y":0},xv:92,yv:0,inView:false,path:[[13000,0,3.066666666666667],[13400,0,3.066666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13000,y:100,w:100,h:100,points:[[6500,50],[6700,50]],speed:92,currentPoint:1.5358333333312657,alongWith:false,pointOn:{"x":6700,"y":50},pointTo:{"x":6500,"y":50},xv:-92,yv:1.126675055215565e-14,inView:false,path:[[13000,100,3.066666666666667],[13400,100,3.066666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13600,y:0,w:100,h:100,points:[[6800,0],[7000,0],[7000,50],[6800,50]],speed:92,currentPoint:0.2858333333316614,alongWith:false,pointOn:{"x":6800,"y":0},pointTo:{"x":7000,"y":0},xv:92,yv:0,inView:false,path:[[13600,0,3.066666666666667],[14000,0,3.066666666666667],[14000,100,3.066666666666667],[13600,100,3.066666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:13600,y:0,w:100,h:100,points:[[6800,0],[7000,0],[7000,50],[6800,50]],speed:92,currentPoint:2.285833333331661,alongWith:false,pointOn:{"x":7000,"y":50},pointTo:{"x":6800,"y":50},xv:-92,yv:1.126675055215565e-14,inView:false,path:[[13600,0,3.066666666666667],[14000,0,3.066666666666667],[14000,100,3.066666666666667],[13600,100,3.066666666666667]],})
C(1,[0],[0],{type:[1,[0],[0]],x:14200,y:0,w:100,h:100,points:[[7100,0],[7100,50]],speed:92,currentPoint:0.14333333333330678,alongWith:false,pointOn:{"x":7100,"y":0},pointTo:{"x":7100,"y":50},xv:5.633375276077825e-15,yv:92,inView:false,path:[[14200,0,3.066666666666667],[14200,100,3.066666666666667]],})
C(1,[],[13],{type:[1,[],[13]],x:14300,y:0,w:100,h:200,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[12],{type:[1,[],[12]],x:13200,y:800,w:100,h:500,tpx:17050,tpy:650,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14800,y:0,w:2200,h:4300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12750,y:1900,w:2050,h:2200,canJump:true,inView:false,})
C(1,[],[29],{type:[1,[],[29]],x:17500,y:600,w:100,h:100,time:5.2,inView:false,changeDeathTimerStateTo:true,deathTime:312,drainAmountWhileStandingOn:0,})
C(1,[],[0],{type:[1,[],[0]],x:17000,y:700,w:3000,h:2700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17000,y:0,w:600,h:600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[17600,0],[18200,0],[17600,600]],most:{"left":8800,"right":9100,"top":0,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18300,100],[18900,700],[17700,700]],most:{"left":8850,"right":9450,"top":50,"bottom":350},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[18400,0],[19000,0],[19000,600]],most:{"left":9200,"right":9500,"top":0,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(1,[],[0],{type:[1,[],[0]],x:19200,y:100,w:200,h:600,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[19000,500],[19100,600],[19000,600]],most:{"left":9500,"right":9550,"top":250,"bottom":300},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19200,350],[19200,550],[19100,450]],most:{"left":9550,"right":9600,"top":175,"bottom":275},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[19000,200],[19100,300],[19000,400]],most:{"left":9500,"right":9550,"top":100,"bottom":200},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:19650,y:350,r:250,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19400,y:100,w:250,h:500,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:19150,y:100,w:50,h:100,canJump:true,inView:false,})
C(2,[],[0],{type:[2,[],[0]],points:[[19100,150],[19200,150],[19200,250]],most:{"left":9550,"right":9600,"top":75,"bottom":125},renderType:"poly",inView:false,x:null,y:null,})
C(4,[],[0],{type:[4,[],[0]],x:19150,y:150,radius:25,startAngle:-3.141592653589793,endAngle:-1.5707963267948966,startPolygon:{"points":[[9575,75],[9550,75]],"type":"poly","props":{}},endPolygon:{"points":[[9575,75],[9575,50]],"type":"poly","props":{}},renderType:"circle",inView:false,r:50,innerRadius:0,startSliceAngle:-3.141592653589793,endSliceAngle:-1.5707963267948966,startSliceAngleRotateSpeed:0,endSliceAngleRotateSpeed:0,})
C(1,[],[29],{type:[1,[],[29]],x:19500,y:600,w:100,h:100,inView:false,changeDeathTimerStateTo:false,deathTime:null,drainAmountWhileStandingOn:0,})
C(1,[],[13],{type:[1,[],[13]],x:17100,y:600,w:400,h:100,force:500,dir:{"x":500,"y":0},direction:"right",inView:false,conveyorAngle:0,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[],[12],{type:[1,[],[12]],x:19400,y:600,w:100,h:100,tpx:12900,tpy:4150,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
C(1,[],[9],{type:[1,[],[9]],x:17000,y:600,w:100,h:100,spawn:{"x":8525,"y":325},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:14000,y:4300,w:3000,h:2900,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:5500,w:1200,h:1700,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:13000,y:4100,w:1800,h:200,canJump:true,inView:false,})
C(1,[],[17],{x:12800,y:4300,w:1200,h:1200,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:600,
        sf:(e)=>{
            if(e.timeTrapTime <= 0){
                players[selfId].pos.x = 14000;
                players[selfId].pos.y = 7250;
            }
        },
        cr:(o)=>{
            let middleX = o.topLeft.x + o.dimensions.x/2;
            let middleY = o.topLeft.y + o.dimensions.y/2;

            let grd = ctx.createRadialGradient(middleX, middleY, 0, middleX, middleY, Math.min(100, (o.dimensions.x + o.dimensions.y)/3));

            grd.addColorStop(0, "rgba(56, 171, 48,0)");
            grd.addColorStop(1, "rgba(56, 171, 48,1)");

            ctx.fillStyle = grd;
            ctx.globalAlpha = Math.max(0.24, 1 - o.timeTrapTime / o.timeTrapMaxTime);

            ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
            
            ctx.globalAlpha = Math.max(0.3, o.timeTrapTime / o.timeTrapMaxTime / 3);
            ctx.fillStyle = 'white';
            ctx.font = Math.min(o.dimensions.x, o.dimensions.y)/2 + "px Inter";
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';

            ctx.fillText(o.timeTrapToShowTenth === true ? Math.round(o.timeTrapTime/60 * 10) / 10 : Math.round(o.timeTrapTime/60), middleX, middleY);
            ctx.globalAlpha = 1;

            
                if(o.timeTrapTime === o.timeTrapMaxTime){ return; }
                const v = shared.colors.vignette;

                const interpolate = (s,e,t) => {return (1-t)*s + e*t};
                let t = Math.sqrt(Math.max(0,o.timeTrapTime) / o.timeTrapMaxTime);
                let r = interpolate(56,0,t);
                let g = interpolate(171,0,t);
                let b = interpolate(48,0,t);
                v.inner.r = r;
                v.inner.g = g;
                v.inner.b = b;
                v.inner.size = 0;
                v.inner.opacity = 0;

                v.outer.r = r;
                v.outer.g = g;
                v.outer.b = b;
                v.outer.size = interpolate(0.4,0.6,t);
                v.outer.opacity = 1;
            
        }
    });C(1,[],[0],{type:[1,[],[0]],x:15200,y:4000,w:5250,h:6000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:7200,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:7200,w:1100,h:100,canJump:true,inView:false,})
C(1,[],[6],{type:[1,[],[6]],x:12800,y:9900,w:2400,h:100,inView:false,})
var minX7074, minY7074, maxX7074, maxY7074;
    minX7074 = 16900;minY7074 = 500;maxX7074 = 17200;maxY7074 = 800;
    C(1,[3],[0],{h:1,w:1,y:0,x:-10000,sf:(e)=>{
        const player = shared.players[shared.selfId];
        if ((player.pos.x) > md(minX7074) && (player.pos.x) < md(maxX7074) && (player.pos.y) > md(minY7074) && (player.pos.y) < md(maxY7074)) {
            colors.background="#707070"; colors.tile="#000000";
        }
    },});
C(1,[],[10],{type:[1,[],[10]],x:12800,y:4200,w:200,h:100,maxStrength:55,currentStrength:55,time:0.016,timer:0.016,regenTime:666.6666666666666,inView:false,healSpeed:1,})
C(1,[],[20],{h:200,w:300,y:4100,x:12750,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[9],{type:[1,[],[9]],x:13900,y:7200,w:200,h:100,spawn:{"x":7000,"y":3625},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[0],{type:[1,[],[0]],x:12800,y:7300,w:1100,h:1000,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:14100,y:7300,w:1100,h:1000,canJump:true,inView:false,})
C(1,[],[13],{type:[1,[],[13]],x:13900,y:7300,w:200,h:1000,force:500,dir:{"x":0,"y":500},direction:"down",inView:false,conveyorAngle:90,conveyorFriction:0.8,conveyorAngleRotateSpeed:0,conveyorForce:0.3541416566626651,})
C(1,[5],[1],{h:50,w:400,y:7425,x:13600,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 13800,
        pivotY: 7450
    });
    C(0,[],[0],{x:13800,y:7450,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:7625,x:13600,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 13800,
        pivotY: 7650
    });
    C(0,[],[0],{x:13800,y:7650,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:7825,x:13600,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 13800,
        pivotY: 7850
    });
    C(0,[],[0],{x:13800,y:7850,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:8025,x:13600,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 13800,
        pivotY: 8050
    });
    C(0,[],[0],{x:13800,y:8050,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:7425,x:14000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 14200,
        pivotY: 7450
    });
    C(0,[],[0],{x:14200,y:7450,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:7625,x:14000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 14200,
        pivotY: 7650
    });
    C(0,[],[0],{x:14200,y:7650,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:7825,x:14000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 14200,
        pivotY: 7850
    });
    C(0,[],[0],{x:14200,y:7850,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(1,[5],[1],{h:50,w:400,y:8025,x:14000,
        boundPlayer: true,
        restAngles: [1.5707963267948966, 4.71238898038469],
        toRest: true,
        homingRotateSpeed: 0.020930232558139535,
        detectionRadius: 201.55644370746373,
        spokeAngles: [0, Math.PI],
        pivotX: 14200,
        pivotY: 8050
    });
    C(0,[],[0],{x:14200,y:8050,r:72,cr:(e)=>{
        ctx.fillStyle = shared.colors.tile;
        ctx.beginPath();
        ctx.arc(e.pos.x, e.pos.y, e.sat.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.closePath();

        ctx.strokeStyle = 'red';
        ctx.lineWidth = 15;
        ctx.beginPath();
        ctx.arc(
            e.pos.x,
            e.pos.y,
            Math.max(e.sat.r - 30, 0),
            0,
            Math.PI * 2
        );
        ctx.stroke();
        ctx.closePath();
    }});C(2,[],[0],{type:[2,[],[0]],points:[[14000,8500],[14700,10050],[13300,10050]],most:{"left":6650,"right":7350,"top":4250,"bottom":5025},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[12800,8300],[13400,8300],[12800,9700]],most:{"left":6400,"right":6700,"top":4150,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[14600,8300],[15200,8300],[15200,9700]],most:{"left":7300,"right":7600,"top":4150,"bottom":4850},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[500,9500],[1100,9500],[800,9800]],most:{"left":250,"right":550,"top":4750,"bottom":4900},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[500,9800],[700,10000],[300,10000]],most:{"left":150,"right":350,"top":4900,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(2,[],[0],{type:[2,[],[0]],points:[[1100,9800],[1300,10000],[900,10000]],most:{"left":450,"right":650,"top":4900,"bottom":5000},renderType:"poly",inView:false,x:null,y:null,})
C(0,[],[0],{type:[0,[],[0]],x:1550,y:9750,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:9550,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:1900,y:9950,r:100,renderType:"circle",inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:9950,w:200,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:1800,y:9450,w:200,h:100,canJump:true,inView:false,})
C(1,[1],[0],{type:[1,[1],[0]],x:2100,y:9700,w:500,h:100,angle:0.75,rotateSpeed:0.012878787878787878,pivotX:2350,pivotY:9750,distToPivot:0,canCollide:true,renderType:"rotating",cullingRadius:127.47548783981962,unSim:14.191666666666501,inView:false,initialRotation:0.01308996938995747,})
C(0,[],[0],{type:[0,[],[0]],x:2350,y:9750,r:150,renderType:"circle",inView:false,})
C(1,[],[20],{h:250,w:200,y:-50,x:14600,hex:'#FFFFFF',alpha:1,
        cr:(e)=>{
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.strokeStyle = ctx.fillStyle = colors.tile;
            ctx.globalAlpha = 1;
            ctx.rect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            ctx.globalAlpha = 1;
        }
    });
C(1,[],[0],{type:[1,[],[0]],x:17600,y:3300,w:2500,h:950,canJump:true,inView:false,})
shared.morphsTriggered[1]=false;C(1,[],[3],{h:100,w:100,y:3400,x:17500,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[1] === true) {
                    ctx.globalAlpha = 0.3;
                }

                ctx.strokeStyle = ctx.fillStyle = 'white';

                ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                ctx.globalAlpha *= 1 / 0.8;
                ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);

                ctx.fillStyle = colors.tile;
                ctx.fillRect(
                    e.topLeft.x + 15,
                    e.topLeft.y + 15,
                    e.dimensions.x - 30,
                    e.dimensions.y - 30
                );

                ctx.globalAlpha = 1;
            },
            ef:(e) => {
                shared.morphsTriggered[1] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[1] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[],[0],{type:[1,[],[0]],x:17000,y:3500,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17200,y:3500,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17000,y:3700,w:400,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17500,y:3700,w:100,h:300,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17300,y:3800,w:100,h:100,canJump:true,inView:false,})
C(1,[],[0],{type:[1,[],[0]],x:17000,y:3900,w:200,h:100,canJump:true,inView:false,})
shared.morphsTriggered[2]=false;C(1,[],[3],{h:100,w:100,y:3600,x:17000,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[2] === true) {
                    ctx.globalAlpha = 0.3;
                }

                ctx.strokeStyle = ctx.fillStyle = 'white';

                ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                ctx.globalAlpha *= 1 / 0.8;
                ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);

                ctx.fillStyle = colors.tile;
                ctx.fillRect(
                    e.topLeft.x + 15,
                    e.topLeft.y + 15,
                    e.dimensions.x - 30,
                    e.dimensions.y - 30
                );

                ctx.globalAlpha = 1;
            },
            ef:(e) => {
                shared.morphsTriggered[2] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[3]=false;C(1,[],[3],{h:100,w:100,y:3900,x:17300,
            cr:(e)=>{
                ctx.globalAlpha = 0.8;
                if (shared.morphsTriggered[3] === true) {
                    ctx.globalAlpha = 0.3;
                }

                ctx.strokeStyle = ctx.fillStyle = 'white';

                ctx.fillRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);
                ctx.globalAlpha *= 1 / 0.8;
                ctx.strokeRect(e.topLeft.x, e.topLeft.y, e.dimensions.x, e.dimensions.y);

                ctx.fillStyle = colors.tile;
                ctx.fillRect(
                    e.topLeft.x + 15,
                    e.topLeft.y + 15,
                    e.dimensions.x - 30,
                    e.dimensions.y - 30
                );

                ctx.globalAlpha = 1;
            },
            ef:(e) => {
                shared.morphsTriggered[3] = true;
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkButtons[3] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[1]=false;var x1=17100;C(1,[],[0],{y:3500,x:17100,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x1, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[1] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[1] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[1] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[2]=false;var x2=17400;C(1,[],[0],{y:3700,x:17400,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x2, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[2] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[2] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[2] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
shared.morphsTriggered[3]=false;var x3=17100;C(1,[],[0],{y:3800,x:17100,w:100,h:100,
            cr:(o)=>{
                ctx.beginPath();
                ctx.rect(x3, o.pos.y, o.dimensions.x, o.dimensions.y);// 5 and -10

                ctx.globalAlpha = 1;
                if(shared.morphsTriggered[3] === true){
                    o.pos.x = -1E9;
                    ctx.globalAlpha = 0.3;
                }
                ctx.fillStyle = '#787878';

                ctx.fill();

                ctx.strokeStyle = 'rgb(0, 0, 0)';
                ctx.lineWidth = 8;
                ctx.globalAlpha = shared.morphsTriggered[3] === true ? 0.5 : 1;

                ctx.stroke();
                ctx.closePath();
                ctx.globalAlpha = 1;// maybe a light effect like mirror?
            }
        }); var c = shared.obstacles[shared.obstacles.length-1]; shared.linkDoors[3] = {pos: {x: c.pos.x, y: c.pos.y}, dimensions: {x: c.dimensions.x, y: c.dimensions.y}};
C(1,[],[9],{type:[1,[],[9]],x:17000,y:3400,w:100,h:100,spawn:{"x":8525,"y":1725},collected:false,inView:false,checkpointOffsetX:0,checkpointOffsetY:0,})
C(1,[],[3],{w:100,h:100,"x":17200,"y":3600,ef:(p, res, o)=>{
        p.pos.x += res.overlapV.x * 0.6;
        p.pos.y += res.overlapV.y * 0.6;
        o.pos.x -= res.overlapV.x * 0.4;
        o.pos.y -= res.overlapV.y * 0.4;

        o.pos.x = Math.min(o.pos.x, 17500);
    },cr:(e)=>{
        ctx.lineJoin = 'miter';
        ctx.fillStyle = shared.colors.tile;
        ctx.fillRect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);

        ctx.globalAlpha = 0.3;
        ctx.lineWidth = 10;
        ctx.strokeStyle = 'white';
        ctx.strokeRect(e.pos.x+8, e.pos.y+8, e.dimensions.x-8*2, e.dimensions.y-8*2);
        ctx.globalAlpha = 1;
        ctx.lineJoin = 'round';
    }});
C(1,[],[12],{type:[1,[],[12]],x:17000,y:3800,w:100,h:100,tpx:17050,tpy:650,bgColor:"#27811b",tileColor:"#6ab95a",changeColor:false,inView:false,})
// C(1,[],[0],{type:[1,[],[0]],x:14600,y:-40,w:400,h:440,canJump:true,inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19150,y:150,r:50,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:19000,y:0,r:100,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20000,y:0,r:170,renderType:"circle",inView:false,})
C(0,[],[0],{type:[0,[],[0]],x:20000,y:700,r:170,renderType:"circle",inView:false,})
C(3,[1],[20],{type:[3,[1],[20]],x:4650,y:4650,angle:-45,text:"Planet",size:45,story:false,fontSize:90,hex:"#FFFFFF",pivotX:4650,pivotY:4650,rotateSpeed:0,initialRotation:-0.7853981633974483,})
C(3,[1],[20],{type:[3,[1],[20]],x:5350,y:4650,angle:45,text:"of",size:45,story:false,fontSize:90,hex:"#FFFFFF",pivotX:5350,pivotY:4650,rotateSpeed:0,initialRotation:0.7853981633974483,})
C(3,[1],[20],{type:[3,[1],[20]],x:4650,y:5350,angle:45,text:"Simple",size:45,story:false,fontSize:90,hex:"#FFFFFF",pivotX:4650,pivotY:5350,rotateSpeed:0,initialRotation:0.7853981633974483,})
C(3,[1],[20],{type:[3,[1],[20]],x:5350,y:5350,angle:-45,text:"Challenges",size:45,story:false,fontSize:90,hex:"#FFFFFF",pivotX:5350,pivotY:5350,rotateSpeed:0,initialRotation:-0.7853981633974483,})
C(3,[],[20],{type:[3,[],[20]],x:5000,y:5000,angle:0,text:"Welcome!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:3650,y:-100,angle:0,text:"Challenge 2: Dodge!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:650,y:-100,angle:0,text:"Challenge 1: Navigate!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8750,y:2500,angle:0,text:"Challenge 3: platform!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:9400,y:1500,angle:0,text:"Walljump!",size:18,story:false,fontSize:36,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:8800,y:1050,angle:0,text:"<-",size:24,story:false,fontSize:48,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:8500,y:2050,angle:90,text:"<-",size:24,story:false,fontSize:48,hex:"#FFFFFF",pivotX:8500,pivotY:2050,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[1],[20],{type:[3,[1],[20]],x:8900,y:1850,angle:135,text:"<-",size:24,story:false,fontSize:48,hex:"#FFFFFF",pivotX:8900,pivotY:1850,rotateSpeed:0,initialRotation:2.356194490192345,})
C(3,[],[20],{type:[3,[],[20]],x:8150,y:4200,angle:0,text:"Challenge 4: Cross!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:5150,y:6900,angle:180,text:"Challenge 5: Drive!",size:30,story:false,fontSize:60,hex:"#FFFFFF",pivotX:5150,pivotY:6900,rotateSpeed:0,initialRotation:3.141592653589793,})
C(3,[],[20],{type:[3,[],[20]],x:500,y:9450,angle:0,text:"Challenge 6: Fall!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:250,y:4450,angle:0,text:"Challenge 6: Typing!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:13050,y:-50,angle:0,text:"Challenge 7: Spiral!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:17250,y:550,angle:0,text:"Challenge 8: Speedrun!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:13350,y:4200,angle:0,text:"Challenge 9: Survive!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[],[20],{type:[3,[],[20]],x:14000,y:7100,angle:0,text:"FINAL CHALLENGE: Escape!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})
C(3,[1],[20],{type:[3,[1],[20]],x:12900,y:4200,angle:90,text:"->",size:30,story:false,fontSize:60,hex:"#FFFFFF",pivotX:12900,pivotY:4200,rotateSpeed:0,initialRotation:1.5707963267948966,})
C(3,[],[20],{type:[3,[],[20]],x:17300,y:3350,angle:0,text:"Secret Challenge -1: Push!",size:30,story:false,fontSize:60,hex:"#FFFFFF",})

    obstacles.splice(319,4);
    
    mapDimensions.x=20000;
    mapDimensions.y=10000;

    spawnPosition.x=5000;
    spawnPosition.y=5000;
    shared.respawnPlayer();
    colors.background='#6ab95a'; colors.tile='#27811b';
});