var counter = 11000; // add 1000 for every new map so color changers dont conflict
var flashLava = false;
var lavaType = flashLava === true ? [0, 1] : [1];
var dt = 1000/60;


mapDimensions.x = 700000;
mapDimensions.y = 20000;

spawnPosition.x = 0;
spawnPosition.y = 375;
window.respawnPlayer();
colors.background = '#ffffff';
colors.tile = '#d4d4d4';

var safeColor = "#c3c3c3";
var safeTileColor = "#9e9e9e"

// Musics!
// first music is created after animation
C(1, [], [26], {
	x: 180200,
	y: 0,
	w: 354800 - 180200,
	h: 1500,
	musicPath: 'https://www.youtube.com/watch?v=ZGxAlvDkD1w'
});

C(1, [], [26], {
	x: 360200,
	y: 0,
	w: 2000,
	h: 1500,
	musicPath: 'https://www.youtube.com/watch?v=vE5uEesakTU'
});

var areaColors = [
	{ // 1.1
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 1.2
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 1.3
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 1.4
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 2.1
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 2.2
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 2.3
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 2.4
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 3.1
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 3.2
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 3.3
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 3.4
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 4.1, e2
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
	{ // 4.2, e2 accelerating aisle
		background: "#ffe0fe",
		tile: "#d0b8d1",
		safeColor: "#bfa6be",
		safeTileColor: "#917e91"
	},
	{ // 4.3, e2 tired tavern
		background: "#ebd2ae",
		tile: "#a69377",
		safeColor: "#998870",
		safeTileColor: "#7d6f5b"
	},
	{ // 4.4, e2 methodical
		background: "#e8cfe4",
		tile: "#d1bacd",
		safeColor: "#baa6b7",
		safeTileColor: "#a896a6"
	},
	{ //5.1, e2 monochrome
		background: "#b3b3b3",
		tile: "#919191",
		safeColor: "#919191",
		safeTileColor: "#6e6e6e"
	},
	{ //5.2, e2 insid invas
		background: "#9de09d",
		tile: "#89c489",
		safeColor: "#7db57d",
		safeTileColor: "#6d9e6d"
	},
	{ //5.3, e2 roving road
		background: "#a9d6ba",
		tile: "#8fb89e",
		safeColor: "#81a68f",
		safeTileColor: "#6b8a77"
	},
	{ //5.4, e2 absolute mess lmfao
		background: "#d0cfff",
		tile: "#b2b1de",
		safeColor: "#9c9bc4",
		safeTileColor: "#8a89ab"
	},
	{ //6.1 e2 scorching shaft hard
		background: "#ffffff",
		tile: "#2181c2",
		safeColor: "#91a5b3",
		safeTileColor: "#2777b0"
	},
	{ //6.2 e2 immoral inferno
		background: "#faa4a2",
		tile: "#e39391",
		safeColor: "#c9817f",
		safeTileColor: "#ad6d6c"
	},
	{ //6.3 e2 pentaognis
		background: "#8abaff",
		tile: "#78a4e3",
		safeColor: "#6b94cf",
		safeTileColor: "#5e83b8"
	},
	{ //6.4 e2 coliseum
		background: "#ffffff",
		tile: "#d7d9db",
		safeColor: "#b6b7b8",
		safeTileColor: "#9fa0a1"
	},
	{// 7.1 soft eX colors (omni level 2)
		"tile": "#1f2129",
		"background": "#303645",
		safeColor: blendColor("#303645","#FFFFFF",0.1),
		safeTileColor: blendColor("#1f2129","#FFFFFF",0.1)
	},
	{// 7.2 dark eX colors (omni level 1)
		"tile": "#0d0d0d",
		"background": "#383838",
		safeColor: blendColor("#383838","#FFFFFF",0.1),
		safeTileColor: blendColor("#0d0d0d","#FFFFFF",0.1)
	},
	{// 7.3 omni platformer level (i think it fix cuz conveyor is kinda like a platformer)
		"tile": "#9c381a",
		"background": "#cc6142",
		safeColor: blendColor("#cc6142","#FFFFFF",0.1),
		safeTileColor: blendColor("#9c381a","#FFFFFF",0.1)
	},
	// tp level - im just doing whatever omni tutorial color scheme i feel like at this point
	{
		"tile": "#24304a",
		"background": "#3b5e8a",
		safeColor: blendColor("#3b5e8a","#FFFFFF",0.1),
		safeTileColor: blendColor("#24304a","#FFFFFF",0.1)
	},
	// calam cavern
	{
		"background": "#3d362a",
		"tile": blendColor("#3d362a","#000000",0.1),
		safeColor: blendColor("#3d362a","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#3d362a","#000000",0.1),"#FFFFFF",0.1),
	},
	{
		"background": "#3d362a",
		"tile": blendColor("#3d362a","#000000",0.1),
		safeColor: blendColor("#3d362a","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#3d362a","#000000",0.1),"#FFFFFF",0.1),
	},
	// green jungle biome 11-20
	{
		"background": "#1d691d",
		"tile": blendColor("#1d691d","#000000",0.1),
		safeColor: blendColor("#1d691d","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#1d691d","#000000",0.1),"#FFFFFF",0.1),
	},
	// ocean biome 21-30
	{
		"background": "#7bc2e0",
		"tile": blendColor("#7bc2e0","#000000",0.1),
		safeColor: blendColor("#7bc2e0","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#7bc2e0","#000000",0.1),"#FFFFFF",0.1),
	},
	// z9 start
	// purple final boss biome idk
	{
		"background": "#720aa6",
		"tile": blendColor("#720aa6","#000000",0.1),
		safeColor: blendColor("#720aa6","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#720aa6","#000000",0.1),"#FFFFFF",0.1),
	},
	// platformer and turnings, a little darker
	{
		"background": "#640892",
		"tile": blendColor("#640892","#000000",0.1),
		safeColor: blendColor("#640892","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#640892","#000000",0.1),"#FFFFFF",0.1),
	},
	// all enemies, bring it halfway back to normal
	{
		"background": "#b183c8",
		"tile": blendColor("#b183c8","#000000",0.1),
		safeColor: blendColor("#b183c8","#FFFFFF",0.1),
		safeTileColor: blendColor(blendColor("#b183c8","#000000",0.1),"#FFFFFF",0.1),
	},
	// final boss prep, back to white.
	{
		background: "#ffffff",
		tile: "#d4d4d4",
		safeColor: "#c3c3c3",
		safeTileColor: "#9e9e9e"
	},
]

var areas = [
	[{ //1.1
		type: "normal",
		count: 18,
		radius: 18,
		speed: 6
	}, {
		type: "wall",
		count: 6,
		radius: 30,
		speed: 6
	}],
	[{ //1.2
		type: "normal",
		count: 18,
		radius: 24,
		speed: 2
	}, {
		type: "normal",
		count: 12,
		radius: 18,
		speed: 4
	}, {
		type: "normal",
		count: 12,
		radius: 12,
		speed: 6
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{ //1.3
		type: "normal",
		count: 12,
		radius: 30,
		speed: 6
	}, {
		type: "normal",
		count: 16,
		radius: 24,
		speed: 6
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{ //1.4
		type: "normal",
		count: 70,
		radius: 18,
		speed: 2
	}, {
		type: "normal",
		count: 10,
		radius: 12,
		speed: 4
	}, {
		type: "normal",
		count: 3,
		radius: 125,
		speed: 2
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //2.1
		type: "dasher",
		count: 25,
		radius: 18,
		speed: 9
	}, {
		type: "dasher",
		count: 15,
		radius: 12,
		speed: 9
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //2.2
		type: "dasher",
		count: 25,
		radius: 18,
		speed: 9
	}, {
		type: "normal",
		count: 10,
		radius: 24,
		speed: 6
	}, {
		type: "normal",
		count: 10,
		radius: 12,
		speed: 6
	}, {
		type: "dasher",
		count: 3,
		radius: 125,
		speed: 9
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //2.3
		type: "homing",
		count: 20,
		radius: 18,
		speed: 8
	}, {
		type: "normal",
		count: 7,
		radius: 12,
		speed: 8
	}, {
		type: "normal",
		count: 7,
		radius: 18,
		speed: 8
	}, {
		type: "normal",
		count: 7,
		radius: 24,
		speed: 8
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //2.4
		type: "homing",
		count: 20,
		radius: 24,
		speed: 4
	}, {
		type: "homing",
		count: 3,
		radius: 125,
		speed: 4
	}, {
		type: "homing",
		count: 6,
		radius: 30,
		speed: 8
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //3.1
		type: "normal",
		count: 110,
		radius: 12,
		speed: 6
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //3.2
		type: "normal",
		count: 36,
		radius: 12,
		speed: 12
	}, {
		type: "normal",
		count: 15,
		radius: 15,
		speed: 2
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //3.3
		type: "normal",
		count: 20,
		radius: 18,
		speed: 12
	}, {
		type: "homing",
		count: 25,
		radius: 15,
		speed: 6
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //3.4
		type: "normal",
		count: 15,
		radius: 18,
		speed: 15
	}, {
		type: "normal",
		count: 15,
		radius: 12,
		speed: 15
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],

	//Welcome to Evades 2!
	[{ //4.1
		type: "warp",
		count: 25,
		radius: 18,
		speed: 7
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //4.2
		type: "rain",
		count: 30,
		radius: 12,
		speed: 10
	}, {
		type: "warp",
		count: 12,
		radius: 18,
		speed: 8
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //4.3
		type: "tired",
		count: 25,
		radius: 18,
		speed: 25
	}, {
		type: "stop",
		count: 12,
		radius: 30,
		speed: 7
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 4
	}],
	[{ //4.4
		type: "blackhole",
		count: 25,
		radius: 9,
		speed: 10
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}, {
		type: "wall",
		count: 16,
		radius: 18,
		speed: 3
	}, ],
	[{ //5.1
		type: "push",
		count: 10,
		radius: 18,
		speed: 8
	}, {
		type: "normal",
		count: 18,
		radius: 18,
		speed: 6
	}, {
		type: "normal",
		count: 12,
		radius: 24,
		speed: 6
	}, {
		type: "tornado",
		count: 1,
		radius: 18,
		speed: 2
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{ //5.2
		type: "push",
		count: 10,
		radius: 18,
		speed: 7
	}, {
		type: "blackhole",
		count: 10,
		radius: 9,
		speed: 7
	}, {
		type: "outofbounds",
		count: 30,
		radius: 18,
		speed: 9
	}, {
		type: "outofbounds",
		count: 40,
		radius: 12,
		speed: 10
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{ //5.3
		type: "killmoving",
		count: 70,
		radius: 18,
		speed: 12
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{ //5.4
		type: "killmoving",
		count: 4,
		radius: 24,
		speed: 7
	}, {
		extraobs: true,
		forceCreate: `C(3,[],[20],{x:270700,y:-200,text:"These only kill if you're trying to move",fontSize: 80, hex: "#ffffff"});`
	}, /*{
		extraobs: true,
		forceCreate: `C(0,[],[3],{x:270000,y:0,r:49.5*1.1,sf:(o,p)=>{
			if(p.pos.x > 270000 && p.pos.y < 280000){
				o.pos.x = p.pos.x; 
				o.pos.y = p.pos.y;
			}
		},cr:(o)=>{
			const p = window.players[window.selfId];
			if(!(p.pos.x > 270000 && p.pos.y < 280000)) return;
			if(input.left || input.right || input.up || input.down){
				ctx.fillStyle = 'white';
				ctx.font = "56px Inter";
				ctx.textAlign = 'center';
				ctx.textBaseline = 'middle';
				ctx.fillText("!", p.pos.x, p.pos.y - p.sat.r - 50);

				ctx.fillStyle = 'red';
			} else {
				ctx.fillStyle = 'green';
			} 
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
			ctx.fill();
			ctx.closePath();
		}});`
	},*/ {
		type: "normal",
		count: 4,
		radius: 18,
		speed: 7
	}, {
		type: "dasher",
		count: 5,
		radius: 15,
		speed: 7
	}, {
		type: "homing",
		count: 6,
		radius: 21,
		speed: 7
	}, {
		type: "push",
		count: 3,
		radius: 18,
		speed: 5
	}, {
		type: "blackhole",
		count: 1,
		radius: 9,
		speed: 3
	}, {
		type: "warp",
		count: 6,
		radius: 24,
		speed: 8
	}, {
		type: "rain",
		count: 7,
		radius: 16,
		speed: 8
	}, {
		type: "outofbounds",
		count: 15,
		radius: 18,
		speed: 9
	}, {
		type: "wall",
		count: 6,
		radius: 30,
		speed: 3
	}, {
		type: "wall",
		count: 7,
		radius: 24,
		speed: 4
	}, {
		type: "wall",
		count: 8,
		radius: 16,
		speed: 5
	}],
	[{ //6.1
		extraobs: true,
		x: 1000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 2000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 3000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 4000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 5000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 6000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		x: 7000,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		type: "tpotherside",
		count: 12,
		radius: 48,
		speed: 6
	}],
	[{ //6.2
		extraobs: true,
		x: 200,
		y: 200,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[200, 200, 0.5 * 18.18], [1200, 200, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 200,
		y: 600,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[200, 600, 0.5 * 18.18], [1200, 600, 0.5 * 18.18]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 200,
		y: 1000,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 200,
		y: 1200,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 200,
		y: 1400,
		r: 100,
		type: 1,
	}, {
		extraobs: true,
		x: 600,
		y: 1000,
		r: 200,
		type: 1,
	},{
		extraobs: true,
		x: 1000,
		y: 1000,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 1400,
		y: 200,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[1400, 200, 0.55 * 18.18], [1400, 1300, 0.55 * 18.18]],
			currentPoint: 1
		}
	},  {
		extraobs: true,
		x: 1800,
		y: 200,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[1800, 200, 0.55 * 18.18], [1800, 1300, 0.55 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 2200,
		y: 200,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[2200, 200, 0.55 * 18.18], [2200, 1300, 0.55 * 18.18]],
			currentPoint: 1
		}
	},  {
		extraobs: true,
		x: 2600,
		y: 200,
		r: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[2600, 200, 0.55 * 18.18], [2600, 1300, 0.55 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 3000,
		y: 200,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 3000,
		y: 600,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 3000,
		y: 1000,
		r: 200,
		type: 1,
	}, {
		extraobs: true,
		x: 4000,
		y: 1100,
		r: 380,
		type: 1,
	}, {
		extraobs: true,
		x: 4000,
		y: 300,
		r: 290,
		type: 1,
	}, {
		extraobs: true,
		x: 5000,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 150, 0.5 * 18.18], [6200, 150, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 5000,
		y: 450,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 450, 0.5 * 18.18], [6200, 450, 0.5 * 18.18]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 5000,
		y: 750,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 750, 0.5 * 18.18], [6200, 750, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 5000,
		y: 1050,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 1050, 0.5 * 18.18], [6200, 1050, 0.5 * 18.18]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 5000,
		y: 1350,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 1350, 0.5 * 18.18], [6200, 1350, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 5000,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5000, 150, 0.5 * 18.18], [5000, 1350, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 5300,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5300, 150, 0.5 * 18.18], [5300, 1350, 0.5 * 18.18]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 5600,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5600, 150, 0.5 * 18.18], [5600, 1350, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 5900,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5900, 150, 0.5 * 18.18], [5900, 1350, 0.5 * 18.18]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 6200,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[6200, 150, 0.5 * 18.18], [6200, 1350, 0.5 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 7000,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[7000, 150, 3 * 18.18], [7000, 1350, 3 * 18.18]],
			currentPoint: 0
		}
	}, {
		extraobs: true,
		x: 7300,
		y: 150,
		r: 150,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[7300, 150, 3 * 18.18], [7300, 1350, 3 * 18.18]],
			currentPoint: 1
		}
	}, ],
	[{ //6.3
		type: "pentagon",
		count: 12,
		radius: 60,
		speed: 8
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 6
	}],
	[{
		extraobs: true,
		x: 7900,
		y: 0,
		w: 100,
		h: 1500,
		type: 0,
	}, {
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:349900,y:200,w:3800,h:1100,timeTrapToShowTenth:false,timeTrapToKill:false,timeTrapRecoverySpeed:3,timeTrapMaxTime:12*60,sf:(e)=>{
            if(e.timeTrapTime <= 0){
                players[selfId].pos.x = 354260;
                players[selfId].pos.y = 800;
            }
        },});`
	}, {
		type: "normal",
		count: 18,
		radius: 24,
		speed: 6
	}, {
		type: "dasher",
		count: 18,
		radius: 18,
		speed: 6
	}, {
		type: "warp",
		count: 12,
		radius: 30,
		speed: 8
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 3
	}],







	[/*{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:361500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:362500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:363500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:364500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:365500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:366500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:367500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},{
		extraobs: true,
		forceCreate: `C(1,[],[17],{x:368500,y:0,w:200,h:1500,timeTrapToShowTenth:true,timeTrapToKill:true,timeTrapRecoverySpeed:3,timeTrapMaxTime:2*60});`
	},*/{ //7.1
		extraobs: true,
		x: 500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[500, 0, 0.25*1000/60], [500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 1500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[1500, 0, 0.25*1000/60], [1500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 2500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[2500, 0, 0.25*1000/60], [2500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 3500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[3500, 0, 0.25*1000/60], [3500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 4500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[4500, 0, 0.25*1000/60], [4500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 5500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[5500, 0, 0.25*1000/60], [5500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 6500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[6500, 0, 0.25*1000/60], [6500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 7500,
		y: 0,
		w: 200,
		h: 200,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[7500, 0, 0.25*1000/60], [7500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		type: "normal",
		count: 40,
		radius: 12,
		speed: 3
	}, {
		type: "normal",
		count: 40,
		radius: 18,
		speed: 2
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 3
	}],
	[{  //7.2
		extraobs: true,
		x: 550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 1550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 2550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 3550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 4550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 5550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 6550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, { 
		extraobs: true,
		x: 7550,
		y: 0,
		w: 100,
		h: 1500,
		type: 1,
	}, {
		extraobs: true,
		x: 500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[500, 0, 0.25*1000/60], [500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 1500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[1500, 0, 0.25*1000/60], [1500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 2500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[2500, 0, 0.25*1000/60], [2500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 3500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[3500, 0, 0.25*1000/60], [3500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 4500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[4500, 0, 0.25*1000/60], [4500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 5500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[5500, 0, 0.25*1000/60], [5500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		extraobs: true,
		x: 6500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[6500, 0, 0.25*1000/60], [6500, 1300, 0.25*1000/60]],
			currentPoint: 0
		}
	}, { 
		extraobs: true,
		x: 7500,
		y: 0,
		w: 200,
		h: 200,
		type: 11,
		simulateType: [0],
		extraParams: {
			path: [[7500, 0, 0.25*1000/60], [7500, 1300, 0.25*1000/60]],
			currentPoint: 1
		}
	}, {
		type: "dasher",
		count: 40,
		radius: 12,
		speed: 3
	}, {
		type: "normal",
		count: 10,
		radius: 18,
		speed: 6
	}, {
		type: "wall",
		count: 8,
		radius: 30,
		speed: 3
	}],
	[{  //7.3
		extraobs: true,
		x: 0,
		y: 0,
		w: 8000,
		h: 100,
		type: 1,
	}, { 
		extraobs: true,
		x: 0,
		y: 1400,
		w: 8000,
		h: 100,
		type: 1,
	}, { 
		extraobs: true,
		x: 0,
		y: 100,
		w: 8000,
		h: 1300,
		type: 13,
		extraParams: {
			conveyorAngle: 90,
			conveyorForce: 0.3 * 5/3,
			conveyorAngleRotateSpeed: 0,
			conveyorFriction: 0.8
		}
	}, {
		type: "dasher",
		count: 20,
		radius: 18,
		speed: 6
	}, {
		type: "normal",
		count: 10,
		radius: 18,
		speed: 6
	}, {
		type: "homing",
		count: 15,
		radius: 6,
		speed: 2
	},{
		type: "wall",
		count: 8,
		radius: 30,
		speed: 3
	}],
	[{  //7.4
		extraobs: true,
		forceCreate: `C(1,[],[3],{x:406000,y:0,w:8000,h:100,ef:(e)=>{
                players[selfId].pos.y = 1350;
        },cr:(o)=>{
			ctx.fillStyle = '#38ab30';
			ctx.beginPath();
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
			ctx.fill();
			ctx.closePath();
		}});`
	}, {  //7.4
		extraobs: true,
		forceCreate: `C(1,[],[3],{x:406000,y:1400,w:8000,h:100,ef:(e)=>{
                players[selfId].pos.y = 150;
        },cr:(o)=>{
			ctx.fillStyle = '#38ab30';
			ctx.beginPath();
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
			ctx.fill();
			ctx.closePath();
		}});`
	}, { 
		extraobs: true,
		x: 0,
		y: 0,
		w: 8000,
		h: 100,
		type: 1,
		simulateType: [0],
		extraParams: {
			path: [[0, 0, 0.5*1000/60], [0, 1400, 0.5*1000/60]],
			currentPoint: 0
		}
	}, {
		type: "dasher",
		count: 8,
		radius: 36,
		speed: 6
	}, {
		type: "homing",
		count: 6,
		radius: 36,
		speed: 6
	}],
	[// 8.1 - checkpoint and calamatous cavern intro. Colors change and there are poly-lavas on the sides that close in. Vinette also progressively gets darker
		// {
		// 	type: "normal",
		// 	count: 26,
		// 	radius: 38,
		// 	speed: 3
		// }, {
		// 	type: "homing",
		// 	count: 24,
		// 	radius: 14,
		// 	speed: 4
		// 	}, {
		// 	type: "slower",
		// 	count: 8,
		// 	radius: 12,
		// 	speed: 2
		// },
		{
			type: "slower",
			count: 16,
			radius: 12,
			speed: 4
		}, {
			type: "homing",
			count: 32,
			radius: 24,
			speed: 3
		}, {
			type: "wall",
			count: 12,
			radius: 24,
			speed: 4
		},
		{
			extraobs: true,
			forceCreate: `C(2,[],[1],{x:0,y:0,boundPlayer:false,points:[[421000,0],[429000,0],[429000,600]]});`
		},
		{
			extraobs: true,
			forceCreate: `C(2,[],[1],{x:0,y:0,boundPlayer:false,points:[[429000,1500],[421000,1500],[429000,900]]});`
		},
		// {
		// 	type: "slower",
		// 	count: 18,
		// 	radius: 12,
		// 	speed: 4
		// }, {
		// 	type: "homing",
		// 	count: 67,
		// 	radius: 24,
		// 	speed: 3
		// }, {
		// 	type: "wall",
		// 	count: 12,
		// 	radius: 24,
		// 	speed: 4
		// }, {
		// 	type: "creeper",
		// 	count: 2,
		// 	radius: 62,
		// 	speed: 12
		// },
	],
	[// 8.2 - cc z10 w/ homing and soldier enemies
		{
			type: "wall",
			count: 42,
			radius: 24,
			speed: 8
		},
		{
			type: "immune",
			count: 19,
			radius: 26,
			speed: 6
		}, 
		{
			type: "homing",
			count: 19,
			radius: 26,
			speed: 6
		}, {
			type: "creeper",
			count: 2,
			radius: 62,
			speed: 12
		}
	],
	[// 8.3 - cc z20 w/ pulsing enemies
		{
			type: "snake",
			count: 22,
			radius: 18,
			speed: 4
		}, {
			type: "oscillating",
			count: 22,
			radius: 18,
			speed: 3.2
		}, {
			type: "slower",
			count: 22,
			radius: 24,
			speed: 6
		}
	],
	[// 8.4 - cc z30 w/ fading enemies 
		{
			type: "liquid",
			count: 9,
			radius: 18,
			speed: 2
		}, {
			type: "warp",
			count: 20,
			radius: 20,
			speed: 6
		}, {
			type: "icicle",
			count: 16,
			radius: 16,
			speed: 6
		}, {
			type: "dasher",
			count: 18,
			radius: 18,
			speed: 6
		}, {
			type: "freezing",
			count: 2,
			radius: 24,
			speed: 9
		}
	],
	// 9.1 - internal vinette effect
	[
		{
			type: "normal",
			count: 128,
			radius: 12,
			speed: 2.8 * 2
		}
	],
	// 9.2 - platformers on both sides, turning enemies
	[
		// {
		// 	extraobs: true,
		// 	forceCreate: `C(0,[],[3],{cr:()=>{ctx.shadowBlur = 10; ctx.shadowColor = "red";},x:-1E9,y:0,r:1})`
		// },
		{ 
			extraobs: true,
			x: 0,
			y: 0,
			w: 8000,
			h: 750,
			type: 14,
			extraParams: {
				platformerAngle: -90,
				platformerForce: 6,
				platformerAngleRotateSpeed: 0,
				platformerFriction: 0.9,
				jumpForce: 70,
				jumpDecay: 0.98,
				maxJumpCooldown: 25
			}
		},
		{ 
			extraobs: true,
			x: 0,
			y: 750,
			w: 8000,
			h: 750,
			type: 14,
			extraParams: {
				platformerAngle: 90,
				platformerForce: 6,
				platformerAngleRotateSpeed: 0,
				platformerFriction: 0.9,
				jumpForce: 70,
				jumpDecay: 0.98,
				maxJumpCooldown: 25
			}
		},
		{
			type: "turning",
			count: 34,
			radius: 26,
			speed: 2.8
		},
		// {
		// 	extraobs: true,
		// 	forceCreate: `C(0,[],[3],{cr:()=>{ctx.shadowBlur = 0;},x:-1E9,y:0,r:1})`
		// },
	],
	// 9.3 - all enemies
	[
		{
			type: "turning",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "liquid",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "warp",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "icicle",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "dasher",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "freezing",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "wall",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "immune",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "homing",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "creeper",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "snake",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "oscillating",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "slower",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "normal",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "pentagon",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "killmoving",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "tpotherside",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "outofbounds",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "tired",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "stop",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "rain",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "blackhole",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "push",
			count: 3,
			radius: 22,
			speed: 3
		},
		{
			type: "tornado",
			count: 3,
			radius: 22,
			speed: 3
		}
	],
	
	// 9.4 - room with boss effects like lasers, get ready..., tp at the end -> make sure to give players 1s of inv btw
	[
		{// idea: spawn lasers that dissapear after some time. Do this by generating a random angle + pos within the arena
			extraobs: true,
			forceCreate: `
			const reusableIndexes = [];
			let maxTimer = 10;
			let timer = maxTimer;
			C(0,[],[3],{x:-1E9,y:0,sf:(o,p)=>{
				if(p.pos.x < 525000) return;
				timer--;
				if(timer <= 0){
					timer += maxTimer;

					let index;
					const angle = Math.random() * Math.PI * 2;
					const middleX = 526_000 + Math.random() * 8_000;
					const middleY = Math.random() * 1500;
					const w = (canvas.w + canvas.h + 10_000) * 5;
					const h = 50;
					const maxPreviewTime = 60;
					let previewTime = maxPreviewTime;
					let previewDead = false;
					// first spawn preview
					C(1,[1],[3],{x:middleX-w/2,y:middleY-h/2,w,h,initialRotation:angle,rotateSpeed:0,pivotX:middleX,pivotY:middleY,cr:(o)=>{
						ctx.fillStyle = 'orange';
						ctx.globalAlpha = Math.min(1,1 - previewTime / maxPreviewTime);
						ctx.beginPath();
						for(let i = 0; i < o.sat.points.length; i++){
							ctx.lineTo(o.pos.x + o.sat.points[i].x, o.pos.y + o.sat.points[i].y);
						}
						ctx.lineTo(o.pos.x + o.sat.points[0].x, o.pos.y + o.sat.points[0].y);
						ctx.fill();
						ctx.closePath();
						ctx.globalAlpha = 1;
					},sf:()=>{
						previewTime--;

						if(previewTime < 0 && previewDead === false){
							previewDead = true;
							let aliveTime = 50;
							C(1,[1],[1],{boundPlayer:true,x:middleX-w/2,y:middleY-h/2,w,h,initialRotation:angle,rotateSpeed:0,pivotX:middleX,pivotY:middleY,sf:(o)=>{
								aliveTime--;
								if(aliveTime < 0){
									reusableIndexes.push(index);
									o.pos.x = -1E9;
								}
							}});
							obstacles[index] = obstacles.pop();
						}
					}})

					if(reusableIndexes.length === 0){
						index = obstacles.length-1;	
					} else {
						index = reusableIndexes.pop(); 
						obstacles[index] = obstacles.pop();
					}
				}	
			}});`
		},
		// invisible safes that prevent deaths on the safeszones
		{
			extraobs: true,
			forceCreate: `C(1,[],[11],{x:525200,y:0,w:800,h:1500,cr:()=>{}})`
		},
		{
			extraobs: true,
			forceCreate: `C(1,[],[11],{x:534000,y:0,w:800,h:1500,cr:()=>{}})`
		},
	]

	// z 8 and 9 are 8 zones
	// 8.4 - cc z30 w/ fade effect
	// 9.1 - cc z33 w/ light vinette
	// 9.2 - cc z40 w/ dark vinette and red fade when enemies get near
	// 9.3 - all enemies and effects from cc combined into one

	// area effects:

	// area 0-9: 
	// vinette, vinetteholes around all enemies

	// area 10-20:
	// 
	// ctx.globalAlpha = (area-10)/10*0.4;
	// arc o.sat.r * (1 + (window.frames/6)%3);

	// area 21-30: ctx.globalAlpha = 1-Math.sqrt((enemies[i].renderX + playerOffset.x-640)/1280);
	// ctx.globalAlpha = 1 - Math.sqrt((e.pos.x - p.pos.x) / canvas.w)

	// area 31-40:
	// const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, o.sat.r, o.pos.x, o.pos.y , o.sat.r*1.5+20);
	// // TODO: interpolate this
	// if(Math.sqrt((enemies[i].renderX + playerOffset.x - 640)**2+(enemies[i].renderY + playerOffset.y - 360)**2) < enemies[i].radius + 100){
	// 	grd.addColorStop(0, "rgb(255,0,0)");
	// } else {
	// 	grd.addColorStop(0, "rgba(" +(area-30)/10*255+ "," +(area-30)/10*255+ "," +(area-30)/10*255+ ",1)");
	// }
	
	// grd.addColorStop(1, "rgba(" +(area-30)/10*255+ "," +(area-30)/10*255+ "," +(area-30)/10*255+ ",0)");
	// ctx.fillStyle = grd;
	// ctx.fillRect(0,0,1280, 720);
	// ctx.fillStyle = "rgba(0,0,0,0.3)"

	/*
		if(world == "Calamatous Cavern"){
          if(area <= 10){
            ctx.fillStyle = "rgba(255,255,255,"+area/10*0.5+")";
            ctx.arc(enemies[i].renderX + playerOffset.x, enemies[i].renderY + playerOffset.y, enemies[i].radius*1.5, 0, 6.28318531);
            ctx.fill();
          } else if(area <= 20){
            ctx.globalAlpha = (area-10)/10*0.4;
            ctx.arc(enemies[i].renderX + playerOffset.x, enemies[i].renderY + playerOffset.y, enemies[i].radius * (1 + (Date.now()/100)%3), 0, 6.28318531);
            ctx.fill();
            ctx.globalAlpha = 1;
          } else if(area <= 30){
            ctx.globalAlpha = 1;
          } else if(area <= 41){
            var grd = ctx.createRadialGradient(enemies[i].renderX + playerOffset.x,enemies[i].renderY + playerOffset.y, enemies[i].radius, enemies[i].renderX + playerOffset.x, enemies[i].renderY + playerOffset.y,enemies[i].radius*1.5+20);
            if(Math.sqrt((enemies[i].renderX + playerOffset.x - 640)**2+(enemies[i].renderY + playerOffset.y - 360)**2) < enemies[i].radius + 100){
              grd.addColorStop(0, "rgb(255,0,0)");
            } else {
              grd.addColorStop(0, "rgba(" +(area-30)/10*255+ "," +(area-30)/10*255+ "," +(area-30)/10*255+ ",1)");
            }
            
            grd.addColorStop(1, "rgba(" +(area-30)/10*255+ "," +(area-30)/10*255+ "," +(area-30)/10*255+ ",0)");
            ctx.fillStyle = grd;
            ctx.fillRect(0,0,1280, 720);
            ctx.fillStyle = "rgba(0,0,0,0.3)"
            //fill a reverse vinette around all enemies (so it will b like avoid darkness & evil idk)
          } 
        }
	*/
];

function shortAngleDist(a0, a1) {
	const max = Math.PI * 2;
	const da = (a1 - a0) % max;
	return 2 * da % max - da;
}


var collided = false;
var lastCollided = false;
C(1, [], [3], {
	cr: (o) => {}, // render as invisible
	ef: (p, res, o) => {
		window.changeCameraScale(1 / 1.5)
		collided = true;
	},
	sf: (o, p) => {
		if (lastCollided === true && collided === false) {
			window.changeCameraScale(1 / 1.5)
		}
		lastCollided = collided;
		collided = false;
	}
})



//COLOR MANAGER

C(0, [], [3], {
	x: -1e9,
	y: 0,
	r: 1,
	cr: (o) => {
	},
	sf: (o) => {
		let area = Math.floor(((players[selfId].pos.x +  1000)) / 15000);
		if (area >= 0 && areaColors[area]){ //godmode fix
			colors.background = areaColors[area].background;
			colors.tile = areaColors[area].tile;
			safeColor = areaColors[area].safeColor;
			safeTileColor = areaColors[area].safeTileColor;
		}
	}
})


//WOrld border
C(1, [], [3], {
	x: -4000,
	y: -4000,
	w: 4000,
	h: 9000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})

C(1, [], [3], {
	x: -4000,
	y: -4000,
	w: 800000,
	h: 4000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})
C(1, [], [0], {
	x: -4000,
	y: 1500,
	w: 800000,
	h: 4000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})



function warpAround(rect, lengthT) {
	var result = {};
	var length = lengthT % (rect.w * 2 + rect.h * 2);
	var xpos;
	var ypos;
	var dir;
	if (length < rect.w) {
		dir = 0;
		ypos = rect.y;
		xpos = rect.x + length;
	} else if (length < rect.w + rect.h) {
		dir = 1;
		xpos = rect.x + rect.w;
		ypos = rect.y + (length - rect.w)
	} else if (length < rect.w * 2 + rect.h) {
		dir = 2;
		ypos = rect.y + rect.h
		xpos = (rect.x + rect.w) - (length - (rect.w + rect.h));
	} else if (length < rect.w * 2 + rect.h * 2) {
		dir = 3;
		xpos = rect.x;
		ypos = (rect.y + rect.h) - (length - (rect.w * 2 + rect.h))
	}
	result.x = xpos;
	result.y = ypos;
	result.dir = dir;
	return result;
}

for (let i = 0; i < areas.length; i++) {
	let bound = [1000 + i * 15000, 0, 8000, 1500];

	C(1, [], [0], {
		x: i * 15000 + 10000,
		y: -100,
		w: 5000,
		h: 2000,
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
		}
	})


	C(1, [], [3], {
		x: i * 15000,
		y: 0,
		w: 1000,
		h: 1500,
		cr: (o) => {
			ctx.fillStyle = safeColor;
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y)

			ctx.globalAlpha = 0.75;
			ctx.lineWidth = 4.8;
			ctx.strokeStyle = safeTileColor;

			for (let x = (o.pos.x); x < (o.pos.x + o.dimensions.x); x += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(x, o.pos.y);
				ctx.lineTo(x, o.pos.y + o.dimensions.y);
				ctx.stroke();
				ctx.closePath();
			}
			for (let y = (o.pos.y); y < (o.pos.y + o.dimensions.y); y += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(o.pos.x, y);
				ctx.lineTo(o.pos.x + o.dimensions.x, y);
				ctx.stroke();
				ctx.closePath();
			}

			ctx.globalAlpha = 1;

		}
	})
	C(1, [], [3], {
		x: i * 15000 + 9000,
		y: 0,
		w: 1000,
		h: 1500,
		cr: (o) => {
			ctx.fillStyle = safeColor;
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y)

			ctx.globalAlpha = 0.75;
			ctx.lineWidth = 4.8;
			ctx.strokeStyle = safeTileColor;

			for (let x = (o.pos.x); x < (o.pos.x + o.dimensions.x); x += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(x, o.pos.y);
				ctx.lineTo(x, o.pos.y + o.dimensions.y);
				ctx.stroke();
				ctx.closePath();
			}
			for (let y = (o.pos.y); y < (o.pos.y + o.dimensions.y); y += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(o.pos.x, y);
				ctx.lineTo(o.pos.x + o.dimensions.x, y);
				ctx.stroke();
				ctx.closePath();
			}

			ctx.globalAlpha = 1;

		}
	})




	for (let data of areas[i]) {
		if (data.extraobs) {
			if (data.forceCreate){
				eval(data.forceCreate);
			}
				else{
				let firstNumber = 0;
				let obj = {};

				if (data.r){
					firstNumber = 0;
					obj = {
						r: data.r,
						x: data.x + bound[0],
						y: data.y + bound[1],
					}
				}
				else if (data.w){
					firstNumber = 1;
					obj = {
						w: data.w,
						h: data.h,
						x: data.x + bound[0],
						y: data.y + bound[1],
					};
				}
				else if (data.points){
					firstNumber = 2;
					obj.points = data.points;
				}

				if (data.extraParams){
					for(let i of Object.keys(data.extraParams)){
						obj[i] = data.extraParams[i];
						if (i == "path"){
							for(let j of obj[i]){
								j[0] += bound[0];
								j[1] += bound[1];
							}
						}
					}
				}
				let simulateType = [];
				if (data.simulateType){
					simulateType = data.simulateType;
				}

				C(firstNumber, simulateType, [data.type], obj)


			}
		} else {
			let numWalls;
			let wallIndex;
			if (data.type == "wall") {
				numWalls = data.count;
				wallIndex = 0;
			}
			for (let j = 0; j < data.count; j++) {
				let angle;
				let mag;
				let x;
				let y;
				let vx;
				let vy;
				let r;

				if (data.type == "wall") {
					let radius = data.radius * 50 / 18;
					r = radius;
					let newBound = {
						x: bound[0] + radius,
						y: bound[1] + radius,
						w: bound[2] - radius * 2,
						h: bound[3] - radius * 2
					}

					let peri = (newBound.w * 2 + newBound.h * 2) / numWalls * wallIndex + (bound[2]) / 2;
					++wallIndex;

					let posAround = warpAround(newBound, peri);
					x = posAround.x;
					y = posAround.y;
					let dirAct = data.speed / 10;

					if (posAround.dir == 0) {
						vy = 0;
						vx = dirAct;
					}
					if (posAround.dir == 1) {
						vx = 0;
						vy = dirAct;
					}
					if (posAround.dir == 2) {
						vy = 0;
						vx = -dirAct;
					}
					if (posAround.dir == 3) {
						vx = 0;
						vy = -dirAct;
					}
				} else {
					angle = Math.random() * Math.PI * 2;
					if (data.type == "rain") {
						if (Math.random() < 0.5) {
							angle = Math.PI / 2;
						} else {
							angle = -Math.PI / 2
						}
					}
					mag = data.speed / 10;
					x = bound[0] + Math.random() * bound[2];
					y = bound[1] + Math.random() * bound[3];
					vx = Math.cos(angle) * mag;
					vy = Math.sin(angle) * mag;
					r = data.radius * 50 / 18;
				}

				if (data.type == "wall") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#000000";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if (vx != 0 && ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2])) {
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
									vy = vx;
									vx = 0;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
									vy = vx;
									vx = 0;
								}
							}
							if (vy != 0 && ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3])) {
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
									vx = -vy;
									vy = 0;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
									vx = -vy;
									vy = 0;
								}
							}
						}
					})
				} else if (data.type == "normal") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#939393";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					})
				} else if (data.type == "immune") {
					// same thing as normal lol but with different render
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "black";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					})
				} else if (data.type == "pentagon") {
					let points = [];
					for(let i = 5; i--; i>0){
						points[i] = [bound[0] + Math.cos(i * Math.PI * 2/5) * r, bound[1] + Math.sin(i * Math.PI * 2/5) * r];
					}

					let rotateSpeed = (Math.random()*2-1) * 0.03;
					C(2, [1], [1], {
						points: points,
						x: x - bound[0],
						y: y - bound[1],
						initialRotation: 0,
						pivotX: 0,
						pivotY: 0,
						rotateSpeed: 0,
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - r) < 0 || e.pos.x + r > bound[2]) {
								vx *= -1;
								if ((e.pos.x - r) < 0) {
									e.pos.x = 0 + r;
								}
								if (e.pos.x + r > bound[2]) {
									e.pos.x = bound[2] - r;
								}
							}
							if ((e.pos.y - r) < 0 || e.pos.y + r > bound[3]) {
								vy *= -1
								if ((e.pos.y - r) < 0) {
									e.pos.y = r;
								}
								if (e.pos.y + r > bound[3]) {
									e.pos.y = bound[3] - r;
								}
							}

							e.rotateSpeed = rotateSpeed;
							e.topLeft = generateTopLeftCoordinates(e);
							e.dimensions = generateDimensions(e);
							e.pivotX = e.topLeft.x + e.dimensions.x/2;
							e.pivotY = e.topLeft.y + e.dimensions.y/2;
						}
					})
				} else if (data.type == "killmoving") {
					C(0, [3], [3], {
						r: r,
						x,
						y,
						cr: (o) => {
							// if(input.up || input.down || input.left || input.right){
							// 	ctx.fillStyle = "#939393";
							// } else {
							// 	ctx.fillStyle = "#67adc9";
							// 	// ctx.globalAlpha = 0.5;
							// }
							ctx.fillStyle = "#67adc9";
							
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
							ctx.globalAlpha = 1;
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						},
						ef: (e, res, o) => {
							if (input.up || input.right || input.left || input.down) {
								players[selfId].dead = true
							}
						}
					})
				} else if (data.type == "tpotherside") {
					C(0, [3], [3], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.lineWidth = 3;
							ctx.strokeStyle = "#1910c4";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.stroke();
							ctx.closePath();

							ctx.globalAlpha = 0.3;
							ctx.strokeStyle = "#5795c2";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.closePath();
							ctx.globalAlpha = 1;
							
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						},
						ef: (e, res, o) => {
							let angle = Math.atan2(o.pos.y - e.pos.y, o.pos.x - e.pos.x);
							e.pos.x = o.pos.x + Math.cos(angle) * (o.dimensions.x/2 + e.dimensions.x/2 * 1.1);
							e.pos.y = o.pos.y + Math.sin(angle) * (o.dimensions.y/2 + e.dimensions.y/2 * 1.1);
							
						}
					})
				} else if (data.type == "outofbounds") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#731633";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] - 1500 || e.pos.y + e.sat.r > bound[1] + bound[3] + 1500) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1] - 1500) {
									e.pos.y = bound[1] + e.sat.r - 1500;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3] + 1500) {
									e.pos.y = bound[1] + bound[3] - e.sat.r + 1500;
								}
							}
						}
					})
				} else if (data.type == "tired") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#30488a";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							let closestDist = 200 * 50 / 18;
							let closestId = undefined;
							for (let ii of Object.keys(players)) {
								if (players[ii] == undefined) {
									continue;
								}
								let dist = Math.hypot(players[ii].pos.x - e.pos.x, players[ii].pos.y - e.pos.y);
								if (dist <= closestDist) {
									closestDist = dist;
									closestId = ii;
								}
							}
							if (closestId !== undefined) {
								vx = Math.cos(angle) * mag * 1 / 5;
								vy = Math.sin(angle) * mag * 1 / 5;
							} else {
								vx = Math.cos(angle) * mag;
								vy = Math.sin(angle) * mag;
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type == "stop") {
					let cycle = Math.random() * 1000
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#998459";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							if ((Date.now() + cycle) % 1000 < 300) {
								vx = 0;
								vy = 0;
							} else {
								vx = Math.cos(angle) * mag;
								vy = Math.sin(angle) * mag;
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type == "warp") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "rgb(139,129,161)";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								if ((e.pos.y + e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + bound[3] + e.sat.r;
								}
								if (e.pos.y - e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] - e.sat.r;
								}
							}
						}
					})
				} else if (data.type == "rain") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#93c1f5";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								if ((e.pos.y + e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + bound[3] + e.sat.r;
								}
								if (e.pos.y - e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] - e.sat.r;
								}
							}
						}
					})
				} else if (data.type == "homing") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#a67732";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							let closestDist = 200 * 50 / 18;
							let closestId = undefined;
							for (let ii of Object.keys(players)) {
								if (players[ii] == undefined) {
									continue;
								}
								if (!(players[ii].pos.x % 15000 > 1000 && players[ii].pos.x % 15000 < 9000)){
									//Not in active zone!
									continue;
								}
								let dist = Math.hypot(players[ii].pos.x - e.pos.x, players[ii].pos.y - e.pos.y);
								if (dist <= closestDist) {
									closestDist = dist;
									closestId = ii;
								}
							}
							if (closestId !== undefined) {
								let targetAngle = (Math.atan2(e.pos.y - players[closestId].pos.y, e.pos.x - players[closestId].pos.x) + Math.PI) % (Math.PI * 2);
								let angleDiff = shortAngleDist(angle, targetAngle);

								if (angleDiff > 0.01) {
									angle += 0.001515 * dt;
									vx = Math.cos(angle) * mag;
									vy = Math.sin(angle) * mag;
								} else if (angleDiff < -0.01) {
									angle -= 0.001515 * dt;
									vx = Math.cos(angle) * mag;
									vy = Math.sin(angle) * mag;
								}
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type == "blackhole") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#212121";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();

							ctx.globalAlpha = 0.2;
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, 240, 0, Math.PI * 2)
							ctx.fill();
							ctx.globalAlpha = 1;

						},
						sf: (e) => {
							for (let ii of Object.keys(players)) {
								if (players[ii] == undefined) {
									continue;
								}
								let dist = Math.hypot(players[ii].pos.x - e.pos.x, players[ii].pos.y - e.pos.y);
								if (dist <= 240 + players[ii].dimensions.x / 2) {
									let targetAngle = Math.atan2(e.pos.y - players[ii].pos.y, e.pos.x - players[ii].pos.x)
									players[ii].pos.x += Math.cos(targetAngle) * 0.6 * dt;
									players[ii].pos.y += Math.sin(targetAngle) * 0.6 * dt;
								}
							}
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type == "push") {
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#aaaaaa";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();

							ctx.globalAlpha = 0.2;
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, 480, 0, Math.PI * 2)
							ctx.fill();
							ctx.globalAlpha = 1;

						},
						sf: (e) => {
							for (let ii of Object.keys(players)) {
								if (players[ii] == undefined) {
									continue;
								}
								let dist = Math.hypot(players[ii].pos.x - e.pos.x, players[ii].pos.y - e.pos.y);
								if (dist <= 480 + players[ii].dimensions.x / 2) {
									let targetAngle = Math.atan2(e.pos.y - players[ii].pos.y, e.pos.x - players[ii].pos.x)
									players[ii].pos.x -= Math.cos(targetAngle) * 0.247 * dt;
									players[ii].pos.y -= Math.sin(targetAngle) * 0.247 * dt;
								}
							}
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type == "dasher") {
					let normalSpeed = 0;
					let dashSpeed = data.speed / 10;
					let prepareSpeed = data.speed / 50;
					let timeToPrepare = 750;
					let timeToDash = 3000;
					let timeBetweenDashes = 750;
					let timePreparing = 0;
					let timeDashing = 0;
					let timeSinceLastDash = timeBetweenDashes;
					let baseSpeed = prepareSpeed;

					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "navy";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							if (timePreparing == 0) {
								if (timeDashing == 0) {
									if (timeSinceLastDash < timeBetweenDashes) {
										timeSinceLastDash += dt;
									} else {
										timeSinceLastDash = 0;
										timePreparing += dt;
										baseSpeed = prepareSpeed;
										vx = angle * baseSpeed;
										vy = angle * baseSpeed;
									}
								} else {
									timeDashing += dt;
									if (timeDashing > timeToDash) {
										timeDashing = 0;
										baseSpeed = normalSpeed;
									} else {
										baseSpeed = dashSpeed * (1 - (timeDashing / timeToDash))
									}
									vx = Math.cos(angle) * baseSpeed;
									vy = Math.sin(angle) * baseSpeed;
								}
							} else {
								timePreparing += dt;
								if (timePreparing > timeToPrepare) {
									timePreparing = 0;
									timeDashing += dt;
									baseSpeed = dashSpeed;
								} else {
									baseSpeed = prepareSpeed * (1 - (timePreparing / timeToPrepare));
								}
								vx = Math.cos(angle) * baseSpeed;
								vy = Math.sin(angle) * baseSpeed;
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								angle = Math.atan2(vy, vx);
							}
						}
					})
				} else if (data.type === 'slower'){
					let aura = 160 * 3;
					let mainObs;
					// aura and render
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "rgb(200,0,0)";
							ctx.strokeStyle = "#000000";
							ctx.globalAlpha = 0.18;

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, aura, 0, Math.PI * 2)
							ctx.fill();
							ctx.closePath();

							ctx.globalAlpha = 1;

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					});
					mainObs = obstacles[obstacles.length-1];
					// aura collision effect
					C(0, [], [3], {
						r: aura,
						x,
						y,
						cr: (o) => {},
						sf: (e) => {
							e.pos.x = mainObs.pos.x;
							e.pos.y = mainObs.pos.y;
						},
						ef: (p,res,o) => {
							p.axisSpeedMultX *= .7;
							p.axisSpeedMultY *= .7;
						}
					});
				} else if (data.type === 'freezing'){
					let aura = 160 * 1.5;
					let mainObs;
					// aura and render
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#64c1b9";
							ctx.strokeStyle = "#000000";
							ctx.globalAlpha *= 0.42;// *= for 30 effect. Don't use this enemy elswhere without making modifications!

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, aura, 0, Math.PI * 2)
							ctx.fill();
							ctx.closePath();

							ctx.globalAlpha = 1;

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					});
					mainObs = obstacles[obstacles.length-1];
					// aura collision effect
					C(0, [], [3], {
						r: aura,
						x,
						y,
						cr: (o) => {},
						sf: (e) => {
							e.pos.x = mainObs.pos.x;
							e.pos.y = mainObs.pos.y;
						},
						ef: (p,res,o) => {
							p.axisSpeedMultX *= .3;
							p.axisSpeedMultY *= .3;
						}
					});
				} else if(data.type === 'creeper'){
					let stop=0, onWall=false;
					let mag = Math.sqrt(vx ** 2 + vy ** 2);
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#874617";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e,p) => {
							const o = e;
							if(onWall === true){
								stop--;
								if (stop < 0 && p.dead === false && Math.sqrt((o.pos.x - p.pos.x) ** 2 + (o.pos.y - p.pos.y) ** 2) < 1000) {
									angle = Math.atan2(p.pos.y - o.pos.y,p.pos.x - o.pos.x);
									vx = Math.cos(angle) * mag;
									vy = Math.sin(angle) * mag;
									onWall = false;
								}
							}
							
							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								vx = vy = 0;
								stop = 120;
								onWall = true;
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								stop = 120;
								onWall = true;
								vx = vy = 0;
							}
						}
					});
				} else if(data.type === "snake"){
					let dir = 1; let timer = 400;

					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#3ab077";
							ctx.strokeStyle = "#000000";

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							timer -= 1000/60;
							if (timer < 0) {
								timer = 400;
								dir *= -1;
							}

							angle = Math.atan2(vy, vx);
							angle += (data.speed + 6) / 100 * dir * 1000/60 / 30;
							vx = Math.cos(angle);
							vy = Math.sin(angle);

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1;
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					});
				} else if(data.type === 'oscillating'){
					let timer = 0;
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#869e0f";
							ctx.strokeStyle = "#000000";

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							timer++;
							if (timer % 50 == 0) {
								vx *= -1;
								vy *= -1;
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1;
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					});
				} else if(data.type === "icicle"){
					const mag = Math.sqrt(vy**2+vx**2);
					vy = mag * (Math.random() < 0.5 ? -1 : 1);
					vx = 0;
					let timer = 0;
					let onWall = false;
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#adf8ff";
							ctx.strokeStyle = "#000000";

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							if(onWall === true){
								timer--;
								if(timer <= 0){
									onWall = false;
								}
								return;
							}

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								onWall = true;
								timer = 120;
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1;
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								onWall = true;
								timer = 120;
							}
						}
					});
				} else if(data.type === "liquid"){
					let min = 600 ** 2;
					C(0, [], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#6789ef";
							ctx.strokeStyle = "#000000";

							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e,p) => {
							const o = e;
							if((p.pos.x - o.pos.x) ** 2 + (p.pos.y - o.pos.y) ** 2 < min){
								e.pos.y += vy * dt * 5;
								e.pos.x += vx * dt * 5;
							} else {
								e.pos.y += vy * dt;
								e.pos.x += vx * dt;
							}

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1;
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
							}
						}
					});
				} else if(data.type === "turning"){
					let turnDir = data.speed / 150 / 30 * 1000 / 60;
					C(0, [3], [1], {
						r: r,
						x,
						y,
						cr: (o) => {
							ctx.fillStyle = "#364359";
							ctx.strokeStyle = "#000000";
							ctx.beginPath();
							ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
							ctx.fill();
							ctx.stroke();
							ctx.closePath();
						},
						sf: (e) => {
							angle = Math.atan2(vy, vx) + turnDir;
							vx = Math.cos(angle);
							vy = Math.sin(angle);

							e.pos.y += vy * dt;
							e.pos.x += vx * dt;

							if ((e.pos.x - e.sat.r) < bound[0] || e.pos.x + e.sat.r > bound[0] + bound[2]) {
								vx *= -1;
								if ((e.pos.x - e.sat.r) < bound[0]) {
									e.pos.x = bound[0] + e.sat.r;
								}
								if (e.pos.x + e.sat.r > bound[0] + bound[2]) {
									e.pos.x = bound[0] + bound[2] - e.sat.r;
								}
								turnDir *= -1;
							}
							if ((e.pos.y - e.sat.r) < bound[1] || e.pos.y + e.sat.r > bound[1] + bound[3]) {
								vy *= -1;
								if ((e.pos.y - e.sat.r) < bound[1]) {
									e.pos.y = bound[1] + e.sat.r;
								}
								if (e.pos.y + e.sat.r > bound[1] + bound[3]) {
									e.pos.y = bound[1] + bound[3] - e.sat.r;
								}
								turnDir *= -1;
							}
						}
					})
				}
			}
		}
	}

	if (i != 0) {
		C(1, [], [12], {
			x: i * 15000,
			y: 0,
			w: 200,
			h: 1500,
			tpx: i * 15000 - 5250,
			tpy: 750,
			cr: (o) => {
				ctx.fillStyle = "#fff46c";
				ctx.strokeStyle = "#e0cb03";

				ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y)

				ctx.globalAlpha = 0.75;
				ctx.lineWidth = 4.8;

				for (let x = (o.pos.x); x < (o.pos.x + o.dimensions.x); x += window.tileSize) {
					ctx.beginPath();
					ctx.moveTo(x, o.pos.y);
					ctx.lineTo(x, o.pos.y + o.dimensions.y);
					ctx.stroke();
					ctx.closePath();
				}
				for (let y = (o.pos.y); y < (o.pos.y + o.dimensions.y); y += window.tileSize) {
					ctx.beginPath();
					ctx.moveTo(o.pos.x, y);
					ctx.lineTo(o.pos.x + o.dimensions.x, y);
					ctx.stroke();
					ctx.closePath();
				}

				ctx.globalAlpha = 1;

			},
		})
	}
	C(1, [], [12], {
		x: i * 15000 + 9800,
		y: 0,
		w: 200,
		h: 1500,
		tpx: i * 15000 + 15250,
		tpy: 750,
		cr: (o) => {
			if(i === areas.length-1){
				ctx.fillStyle = `hsl(${window.frames*1000/60/12},50%,50%)`;
				ctx.strokeStyle = `hsl(${window.frames*1000/60/12},50%,42%)`;
			} else {
				ctx.fillStyle = "#fff46c";
				ctx.strokeStyle = "#e0cb03";
			}

			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y)

			ctx.globalAlpha = 0.75;
			ctx.lineWidth = 4.8;

			for (let x = (o.pos.x); x < (o.pos.x + o.dimensions.x); x += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(x, o.pos.y);
				ctx.lineTo(x, o.pos.y + o.dimensions.y);
				ctx.stroke();
				ctx.closePath();
			}
			for (let y = (o.pos.y); y < (o.pos.y + o.dimensions.y); y += window.tileSize) {
				ctx.beginPath();
				ctx.moveTo(o.pos.x, y);
				ctx.lineTo(o.pos.x + o.dimensions.x, y);
				ctx.stroke();
				ctx.closePath();
			}

			ctx.globalAlpha = 1;

		},
	})
}


// regular vignette
C(1, [], [24], {
	x: 0,
	y: 0,
	w: 420000,
	h: 1800,
	innerR: 0,
	innerG: 0,
	innerB: 0,
	innerSize: 0.1,
	outerR: 0,
	outerG: 0,
	outerB: 0,
	outerSize: 0.6,
	innerOpacity: 0,
	outerOpacity: 0
})

// calam cavern vignette
C(1, [], [24], {
	x: 420200,
	y: 0,
	w: 24600,
	h: 1800,
	innerR: 0,
	innerG: 0,
	innerB: 0,
	innerSize: 0.1,
	outerR: 0,
	outerG: 0,
	outerB: 0,
	outerSize: 0.6,
	innerOpacity: 0,
	outerOpacity: 0,
	sf:(o,p)=>{
		const t = Math.max(0,Math.min(1,(p.pos.x - 420200) / (429000 - 420200)));
		o.outerSize = 0.6 * (1-t) + 0.1 * t;
		o.outerOpacity = 0 * (1-t) + 1 * t;
	}
});

// also lets put holes in the vignette
for(let i = 0; i < obstacles.length; i++){
	if(obstacles[i].pos.x < 420200 || obstacles[i].pos.x > 444800 || obstacles[i].sat.r === undefined || obstacles[i].cr === undefined) continue;

	const oldCR = obstacles[i].cr;
	obstacles[i].cr = (o) => {
		oldCR(o);

		const p = window.players[window.selfId];

		if(p.pos.x < 420200 || p.pos.x > 444800) return;
		window.colors.vignette.holeFunctions.push(() => {
			ctx.moveTo(o.pos.x,o.pos.y);
			ctx.arc(o.pos.x,o.pos.y,o.sat.r * 1.5,0,Math.PI*2);
		})
	}
}

// pulse effect
for(let i = 0; i < obstacles.length; i++){
	if(obstacles[i].pos.x < 450200 || obstacles[i].pos.x > 459800 || obstacles[i].sat.r === undefined || obstacles[i].cr === undefined) continue;

	const oldCR = obstacles[i].cr;
	obstacles[i].cr = (o) => {
		oldCR(o);

		const p = window.players[window.selfId];

		if(p.pos.x < 450200 || p.pos.x > 459800 || o.sat.r > 400) return;
		ctx.globalAlpha = 5/10*0.4;
		ctx.beginPath();
		ctx.arc(o.pos.x, o.pos.y, o.sat.r * (1 + (window.frames/12)%3), 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
		ctx.globalAlpha = 1;
	}
}

// alpha at edges effeect
for(let i = 0; i < obstacles.length; i++){
	if(obstacles[i].pos.x < 465150 || obstacles[i].pos.x > 474850 || obstacles[i].sat.r === undefined || obstacles[i].cr === undefined) continue;

	const oldCR = obstacles[i].cr;
	obstacles[i].cr = (o) => {
		const p = window.players[window.selfId];
		const d = (o.pos.x - p.pos.x) / (canvas.w/2);
		if(d > 0) ctx.globalAlpha = 1 - Math.min(1,d);
		else ctx.globalAlpha = 1 - Math.min(1,-d);
		oldCR(o);
		ctx.globalAlpha = 1;
	}
}

// inner vinette effect w/ distance check
for(let i = 0; i < obstacles.length; i++){
	if(obstacles[i].pos.x < 480200 || obstacles[i].pos.x > 490000 || obstacles[i].sat.r === undefined || obstacles[i].cr === undefined) continue;

	obstacles[i].cr = (o) => {
		const p = window.players[window.selfId];
		if(p.pos.x < 480200 || p.pos.x > 490000) return;
		const d = Math.sqrt((p.pos.x - o.pos.x) ** 2 + (p.pos.y - o.pos.y) ** 2);
		
		const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, o.sat.r, o.pos.x, o.pos.y , o.sat.r*1.5+20);
		const t = Math.min(1,d / 400);

		const interpolate = (s,e,t) => { return (1-t) * s + t*e; };
		const r = interpolate(255, 0, t);
		const g = 0;
		const b = 0;

		grd.addColorStop(1,`rgba(${r},${g},${b},0)`);
		grd.addColorStop(0,`rgba(${r},${g},${b},1)`);

		ctx.fillStyle = grd;

		ctx.beginPath();
		ctx.arc(o.pos.x, o.pos.y, o.sat.r * 1.5 + 21, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
}

// inner vinette effect but its all red
for(let i = 0; i < obstacles.length; i++){
	if(obstacles[i].pos.x < 495200 || obstacles[i].pos.x > 504800 || obstacles[i].sat.r === undefined || obstacles[i].cr === undefined) continue;

	obstacles[i].cr = (o) => {
		const p = window.players[window.selfId];
		if(p.pos.x < 495200 || p.pos.x > 504800) return;

		const grd = ctx.createRadialGradient(o.pos.x,o.pos.y, o.sat.r, o.pos.x, o.pos.y , o.sat.r*1.5+20);
		const t = (Math.sin(window.frames * 0.05)+1)/2;

		const interpolate = (s,e,t) => { return (1-t) * s + t*e; };
		const r = interpolate(255, 0, t);
		const g = 0;
		const b = 0;

		grd.addColorStop(1,`rgba(${r},${g},${b},0)`);
		grd.addColorStop(0,`rgba(${r},${g},${b},1)`);

		ctx.fillStyle = grd;

		ctx.beginPath();
		ctx.arc(o.pos.x, o.pos.y, o.sat.r * 1.5 + 21, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
}

// back to regular
C(1, [], [24], {
	x: 450200,
	y: 0,
	w: 420000,
	h: 1800,
	innerR: 0,
	innerG: 0,
	innerB: 0,
	innerSize: 0.1,
	outerR: 0,
	outerG: 0,
	outerB: 0,
	outerSize: 0.6,
	innerOpacity: 0,
	outerOpacity: 0
})


C(1, [], [19], {
	speedChangePermanent: true,
	speedMult: 2,
	x: 0,
	y: 0,
	w: 1000,
	h: 1500
})



/* BOSSFIGHT STUFF */


var firstTime = false;

try{
	var audio = new Audio("https://f-2f7z.onrender.com/Music.mp3");
}
catch(err){
	var audio = {};
}
var audioLoaded = false;

try{
	audio.addEventListener('canplaythrough', function() { 
		audioLoaded = true;
	}, false);
}
catch(err){
	console.log("OK")
}

//TP TO BOSSFIGHT
var giveInv = false;
C(1, [], [3,11], {
	x: 540000,
	y: 0,
	w: 10000,
	h: 1600,
	cr: (o) => {
		ctx.fillStyle = "green";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y)
	},
	ef: (e, res, o) => {
		if (!firstTime){
			firstTime = Date.now();

			window.stopMusic();
		}
		giveInv = true;
		if (audioLoaded){
			audio.play();
			e.pos.x = 1000;
			e.pos.y = 6500;
		}
	},
})

// INCINVIBILITY OBS
{
	const maxInv = 60;// one second
	let inv = 0;
	C(0,[],[11],{x:-1E9,y:0,r:100,sf:(o,p)=>{
		if(giveInv === true){
			inv = maxInv;
			giveInv = false;
		}

		if(inv <= 0 || bossTime > 118){
			o.pos.x = -1E9;
			return;
		} else {
			o.pos.x = p.pos.x;
			o.pos.y = p.pos.y;
		}

		window.tickFns.push(() => {
			if(p.dead === true){
				inv--;
			}
			p.dead = false;
		})

		o.sat.r = p.sat.r + inv/2;
	},cr:(o)=>{
		ctx.beginPath();
		ctx.fillStyle = 'rgba(140,140,140,.25)';
        ctx.strokeStyle = 'black';
        ctx.lineWidth = 4;
        ctx.arc(o.pos.x, o.pos.y, o.sat.r, 0, Math.PI * 2);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();
	},ef:(p)=>{
		p.timeTrapOverrideSafe = true;
	}})
} 


//BOSSFIGHT MANAGER!!!!


var bossFightPos = {
	x: 0,
	y: 5500
};


var bossSpawns = [{"time":3.2384011346651507,"lifeTime":7,"x":748.825705775138,"y":-300,"w":236.4429482142196,"h":50,"type":1,"vy":0.5353145639029153,"vx":0.020636748763295854,"simulate":[1,3],"initialRotation":0.6324878957882356,"rotateSpeed":0.002085268127243168,"boundPlayer":true},{"time":3.6316554215978636,"lifeTime":7,"x":2100,"y":408.4458359454675,"w":170.80541024648295,"h":50,"type":1,"vx":-0.5540898107856294,"vy":-0.005095804595753706,"simulate":[1,3],"initialRotation":2.328575980532795,"rotateSpeed":0.0020179544704163658,"boundPlayer":true},{"time":5.010264347706765,"lifeTime":7,"x":2100,"y":1423.0616838703506,"w":234.9746134219635,"h":50,"type":1,"vx":-0.6622000763891029,"vy":-0.06555372837545502,"simulate":[1,3],"initialRotation":2.3327038198910475,"rotateSpeed":0.0025995341946220244,"boundPlayer":true},{"time":6.600934433481664,"lifeTime":7,"x":2100,"y":626.4414203679478,"w":217.6370455060168,"h":50,"type":1,"vx":-0.6260486490063787,"vy":0.054624950529699845,"simulate":[1,3],"initialRotation":0.4116315036058159,"rotateSpeed":0.0038675105571306235,"boundPlayer":true},{"time":1.1504889453207485,"lifeTime":7,"x":2100,"y":1754.8882025611792,"w":231.30326653857745,"h":50,"type":1,"vx":-0.42749871698922715,"vy":0.026793084554020602,"simulate":[1,3],"initialRotation":1.5280827005726365,"rotateSpeed":0.0009523142966526992,"boundPlayer":true},{"time":3.040978840071701,"lifeTime":7,"x":1581.4018719991898,"y":-300,"w":188.3399868706071,"h":50,"type":1,"vy":0.5354420821273803,"vx":-0.14140745338221108,"simulate":[1,3],"initialRotation":1.4652926313504289,"rotateSpeed":0.0031407473926849255,"boundPlayer":true},{"time":3.4981198415415267,"lifeTime":7,"x":838.973513377256,"y":2100,"w":192.91608246339877,"h":50,"type":1,"vy":-0.36267169568246826,"vx":0.04210578821174682,"simulate":[1,3],"initialRotation":2.951980588942067,"rotateSpeed":0.002886644319190585,"boundPlayer":true},{"time":6.419034968497345,"lifeTime":7,"x":-300,"y":729.4305784054407,"w":211.11879212947804,"h":50,"type":1,"vx":0.41857399548805874,"vy":0.1528210142375819,"simulate":[1,3],"initialRotation":0.11523377009384106,"rotateSpeed":0.002117376081148241,"boundPlayer":true},{"time":6.5982290767901794,"lifeTime":7,"x":2100,"y":38.35169095624469,"w":165.46561052728686,"h":50,"type":1,"vx":-0.5279337847673167,"vy":-0.019973684988255164,"simulate":[1,3],"initialRotation":1.6571366896160176,"rotateSpeed":0.0030172201221135655,"boundPlayer":true},{"time":4.982648642066969,"lifeTime":7,"x":2100,"y":1143.5471181751532,"w":197.58272810071696,"h":50,"type":1,"vx":-0.5276930926416097,"vy":0.015855168403678233,"simulate":[1,3],"initialRotation":2.655574350166979,"rotateSpeed":0.0024007505421317524,"boundPlayer":true},{"time":1.9557073185628386,"lifeTime":7,"x":-300,"y":437.13283895666734,"w":197.8318363869992,"h":50,"type":1,"vx":0.595627805364826,"vy":-0.10116444011253799,"simulate":[1,3],"initialRotation":0.7673153000894143,"rotateSpeed":0.0017972772117224763,"boundPlayer":true},{"time":3.3865658673518464,"lifeTime":7,"x":1363.9007174406959,"y":2100,"w":151.12926137267792,"h":50,"type":1,"vy":-0.536410976127761,"vx":0.09184199068731139,"simulate":[1,3],"initialRotation":1.2592277495858453,"rotateSpeed":0.0032675301753805606,"boundPlayer":true},{"time":1.9630763065349757,"lifeTime":7,"x":544.6238408917008,"y":-300,"w":214.4982982810355,"h":50,"type":1,"vy":0.5614763621885,"vx":-0.11245051468209702,"simulate":[1,3],"initialRotation":1.3098944567703492,"rotateSpeed":0.0009179847122288933,"boundPlayer":true},{"time":4.983284736008789,"lifeTime":7,"x":1019.3021137903147,"y":2100,"w":193.38003626350974,"h":50,"type":1,"vy":-0.4626575929042881,"vx":-0.026222133463819575,"simulate":[1,3],"initialRotation":1.918544152527755,"rotateSpeed":0.0015722587465536782,"boundPlayer":true},{"time":5.13223880454217,"lifeTime":7,"x":466.22849005091547,"y":-300,"w":179.353057970379,"h":50,"type":1,"vy":0.6600771165261125,"vx":0.015158662330369665,"simulate":[1,3],"initialRotation":2.7820556794912084,"rotateSpeed":0.0016292738936853032,"boundPlayer":true},{"time":5.550910585150382,"lifeTime":7,"x":1530.5676118398376,"y":2100,"w":164.90015068623603,"h":50,"type":1,"vy":-0.6480552784596441,"vx":-0.14171229827813883,"simulate":[1,3],"initialRotation":2.1072704230544126,"rotateSpeed":0.003923723347438788,"boundPlayer":true},{"time":6.238959019265064,"lifeTime":7,"x":763.0727871042144,"y":-300,"w":242.73152580267194,"h":50,"type":1,"vy":0.4614731046421279,"vx":-0.14369703850055018,"simulate":[1,3],"initialRotation":2.667386268865734,"rotateSpeed":0.0008159260692458981,"boundPlayer":true},{"time":6.6770661786178165,"lifeTime":7,"x":849.071536360709,"y":-300,"w":174.53235283852337,"h":50,"type":1,"vy":0.6287477687796177,"vx":0.14311771370749912,"simulate":[1,3],"initialRotation":0.6943423344566935,"rotateSpeed":0.0018078625924364343,"boundPlayer":true},{"time":6.549136363413583,"lifeTime":7,"x":-300,"y":1174.4576145986089,"w":154.07428299645508,"h":50,"type":1,"vx":0.458467085555171,"vy":0.01693963623625505,"simulate":[1,3],"initialRotation":2.6593435191718995,"rotateSpeed":0.00025038875234934996,"boundPlayer":true},{"time":0.5600879362559049,"lifeTime":7,"x":2100,"y":597.7659420176598,"w":213.93608698143439,"h":50,"type":1,"vx":-0.5425924981008127,"vy":-0.1121656430960011,"simulate":[1,3],"initialRotation":0.5589055590199618,"rotateSpeed":0.0038111328922957126,"boundPlayer":true},{"time":4.678486898042745,"lifeTime":7,"x":1929.039136657979,"y":2100,"w":192.45604691516456,"h":50,"type":1,"vy":-0.546566614496851,"vx":-0.10396341493760837,"simulate":[1,3],"initialRotation":2.2109564478740933,"rotateSpeed":0.000042770160089919076,"boundPlayer":true},{"time":4.018067781318725,"lifeTime":7,"x":-300,"y":1070.6970742395656,"w":213.91262022680633,"h":50,"type":1,"vx":0.4946731455432398,"vy":0.10940178428449285,"simulate":[1,3],"initialRotation":2.377144764771813,"rotateSpeed":0.002191906261281904,"boundPlayer":true},{"time":3.417217804120713,"lifeTime":7,"x":735.0237068751139,"y":2100,"w":226.54499330749456,"h":50,"type":1,"vy":-0.3673228633870656,"vx":-0.06624934745639631,"simulate":[1,3],"initialRotation":1.9784137059220965,"rotateSpeed":0.0003236608372851375,"boundPlayer":true},{"time":3.2366192511100618,"lifeTime":7,"x":1127.7418185067095,"y":2100,"w":166.7646797419542,"h":50,"type":1,"vy":-0.45934573226526343,"vx":0.16020164047408483,"simulate":[1,3],"initialRotation":2.566343548821638,"rotateSpeed":0.0036658533824278257,"boundPlayer":true},{"time":6.57109992523791,"lifeTime":7,"x":1747.1803835649346,"y":-300,"w":201.21693349825568,"h":50,"type":1,"vy":0.5731294509944467,"vx":0.0517292265711044,"simulate":[1,3],"initialRotation":1.0610953278829283,"rotateSpeed":0.0008813656741997615,"boundPlayer":true},{"time":0.506766415864313,"lifeTime":7,"x":-300,"y":1184.1670861169464,"w":188.10638036790948,"h":50,"type":1,"vx":0.5303476802566418,"vy":-0.089876500854469,"simulate":[1,3],"initialRotation":0.611021351623574,"rotateSpeed":0.0010523582854114481,"boundPlayer":true},{"time":3.110561253633941,"lifeTime":7,"x":-300,"y":1327.591637237504,"w":175.1638865396373,"h":50,"type":1,"vx":0.3931261605940626,"vy":-0.1247479000294375,"simulate":[1,3],"initialRotation":1.5791245620561867,"rotateSpeed":0.0034905321596548074,"boundPlayer":true},{"time":2.280506808082984,"lifeTime":7,"x":2100,"y":1866.1295841803121,"w":185.00758223397264,"h":50,"type":1,"vx":-0.5365692444358621,"vy":-0.0509975904337565,"simulate":[1,3],"initialRotation":1.6082298662016046,"rotateSpeed":0.0021453501331095827,"boundPlayer":true},{"time":3.870980932721952,"lifeTime":7,"x":1456.9122052072344,"y":-300,"w":201.35337966888545,"h":50,"type":1,"vy":0.5258949465604748,"vx":0.008869512371682875,"simulate":[1,3],"initialRotation":3.0275689311331515,"rotateSpeed":0.0032498635051834875,"boundPlayer":true},
{ //STAGE 2
	"time": 9.2,
	"lifeTime": 1,
	"x": 2100,
	"y": 0,
	"w": 100,
	"h": 2000,
	"type": 11,
	"vx": -4,
	"vy": 0,
	"simulate": [3],
}, {
	"time": 9.2,
	"lifeTime": 1,
	"x": -200,
	"y": 0,
	"w": 100,
	"h": 2000,
	"type": 11,
	"vx": 4,
	"vy": 0,
	"simulate": [3],
}, {
	"time": 10.5,
	"lifeTime": 1,
	"x": 0,
	"y": 2100,
	"w": 2000,
	"h": 100,
	"type": 11,
	"vx": 0,
	"vy": -4,
	"simulate": [3],
}, {
	"time": 10.5,
	"lifeTime": 1,
	"x": 0,
	"y": -200,
	"w": 2000,
	"h": 100,
	"type": 11,
	"vx": 0,
	"vy": 4,
	"simulate": [3],
}, {
	"time": 12,
	"lifeTime": 10,
	"enemy": true,
	"type": "normal",
	"count": 12,
	"radius": 12,
	"speed": 9.5,
}, {
	"time": 17.5,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 5.5,
	"spreadAngles": true
}, { //Phase 3
	"time": 23,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 8,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": 0
}, {
	"time": 23.5,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 8,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, { //Phase 3
	"time": 24,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 8,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": 0
}, {
	"time": 24.5,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 8,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, {
	"time": 26.5,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 3,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, {
	"time": 26.5,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 2,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, {
	"time": 27,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
},{
	"time": 27,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": 0
}, {
	"time": 29,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, {
	"time": 29,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": 0
}, {
	"time": 30,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 3,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": Math.PI * 2/6
}, { //Phase 4
	"time": 33,
	"lifeTime": 23,
	"enemy": true,
	"type": "normal",
	"count": 30,
	"radius": 3,
	"speed": 3,
}, { 
	"time": 35.85,
	"lifeTime": 7,
	"enemy": true,
	"type": "normal",
	"count": 10,
	"radius": 4,
	"speed": 4,
}, { 
	"time": 38.7,
	"lifeTime": 6,
	"enemy": true,
	"type": "normal",
	"count": 10,
	"radius": 5,
	"speed": 5,
}, { 
	"time": 41.65,
	"lifeTime": 5,
	"enemy": true,
	"type": "normal",
	"count": 10,
	"radius": 6,
	"speed": 6,
}, //Phase 5
{"time":55.71509268339636,"lifeTime":7,"x":-300,"y":1389.1592967722431,"w":247.79609926415344,"h":50,"type":1,"vx":0.5773017780219666,"vy":-0.1263516197675445,"simulate":[1,3],"initialRotation":1.2354086456370272,"rotateSpeed":0.004346116383110752,"boundPlayer":true},{"time":52.88004746809499,"lifeTime":7,"x":72.30741038677513,"y":2100,"w":203.13356410382366,"h":50,"type":1,"vy":-0.42814893672585497,"vx":-0.03208070379768335,"simulate":[1,3],"initialRotation":1.741682304441268,"rotateSpeed":0.005863767235639239,"boundPlayer":true},{"time":52.06884918845695,"lifeTime":7,"x":1237.3585282390945,"y":2100,"w":181.85840896790577,"h":50,"type":1,"vy":-0.4806948004233674,"vx":-0.012854483209936207,"simulate":[1,3],"initialRotation":1.0749555551571397,"rotateSpeed":0.007012909615584632,"boundPlayer":true},{"time":49.155989334523404,"lifeTime":7,"x":-300,"y":1783.1459000038662,"w":226.45421071327632,"h":50,"type":1,"vx":0.5002930424710933,"vy":-0.07262750284739482,"simulate":[1,3],"initialRotation":1.268922733319016,"rotateSpeed":0.0008820525848997932,"boundPlayer":true},{"time":51.9405430310671,"lifeTime":7,"x":2100,"y":1017.8221370106972,"w":190.3382848540361,"h":50,"type":1,"vx":-0.6384951297458326,"vy":-0.09669734155031776,"simulate":[1,3],"initialRotation":1.4005483689153038,"rotateSpeed":0.006445821629191367,"boundPlayer":true},{"time":52.485960856566145,"lifeTime":7,"x":1507.8084259514646,"y":-300,"w":156.46020691594998,"h":50,"type":1,"vy":0.6156727883694778,"vx":-0.05223585669252413,"simulate":[1,3],"initialRotation":2.238179438455684,"rotateSpeed":0.00706927003606854,"boundPlayer":true},{"time":53.6201692985177,"lifeTime":7,"x":-300,"y":59.9347907576373,"w":211.02526932490193,"h":50,"type":1,"vx":0.4861361953714115,"vy":0.0447700537440332,"simulate":[1,3],"initialRotation":1.393339384055109,"rotateSpeed":0.004248333293447868,"boundPlayer":true},{"time":47.54490644259063,"lifeTime":7,"x":1504.9613576363115,"y":-300,"w":221.90061549048966,"h":50,"type":1,"vy":0.538051243490246,"vx":-0.16204162469275088,"simulate":[1,3],"initialRotation":1.7625353881380128,"rotateSpeed":0.006430388776392099,"boundPlayer":true},{"time":55.372490173485815,"lifeTime":7,"x":425.11587847529245,"y":2100,"w":187.80485052221067,"h":50,"type":1,"vy":-0.5214782467150196,"vx":-0.09013693368425627,"simulate":[1,3],"initialRotation":2.1201874802565133,"rotateSpeed":0.0020466801119033745,"boundPlayer":true},{"time":47.811097521566694,"lifeTime":7,"x":1445.5955589777818,"y":-300,"w":184.27234155263037,"h":50,"type":1,"vy":0.3916606012875321,"vx":-0.1380239950907145,"simulate":[1,3],"initialRotation":0.47269787422409154,"rotateSpeed":0.00006129661955476633,"boundPlayer":true},{"time":53.11166915041404,"lifeTime":7,"x":202.4211917466818,"y":-300,"w":164.19740389080778,"h":50,"type":1,"vy":0.3681941093657682,"vx":-0.11976793988942291,"simulate":[1,3],"initialRotation":1.7649008456075863,"rotateSpeed":0.002669691022377511,"boundPlayer":true},{"time":48.19540908051486,"lifeTime":7,"x":1397.4782005338832,"y":2100,"w":167.4866117652337,"h":50,"type":1,"vy":-0.48516070512816306,"vx":-0.08151991770448926,"simulate":[1,3],"initialRotation":2.5861550396918846,"rotateSpeed":0.0054787816943439776,"boundPlayer":true},{"time":48.05971849316792,"lifeTime":7,"x":888.9314550186689,"y":-300,"w":154.4475895508615,"h":50,"type":1,"vy":0.47593280039430225,"vx":0.006160930166243833,"simulate":[1,3],"initialRotation":1.31009606102929,"rotateSpeed":0.004317749954503894,"boundPlayer":true},{"time":50.05739008504125,"lifeTime":7,"x":2100,"y":1330.3121838690868,"w":187.81284815717828,"h":50,"type":1,"vx":-0.36169997342938776,"vy":-0.09109531606022243,"simulate":[1,3],"initialRotation":1.4738616297603584,"rotateSpeed":0.0019848848337989575,"boundPlayer":true},{"time":50.778685125851,"lifeTime":7,"x":553.6818359727511,"y":2100,"w":206.57155523453775,"h":50,"type":1,"vy":-0.5356043299869676,"vx":-0.016806226128277674,"simulate":[1,3],"initialRotation":0.2839012304367097,"rotateSpeed":0.006731902229743522,"boundPlayer":true},{"time":54.41931221688271,"lifeTime":7,"x":839.1068001947391,"y":-300,"w":216.67857733456407,"h":50,"type":1,"vy":0.4216973586061413,"vx":-0.15466583310846463,"simulate":[1,3],"initialRotation":2.010901810384054,"rotateSpeed":0.0015747960449160158,"boundPlayer":true},{"time":55.238922604115764,"lifeTime":7,"x":288.5254231240637,"y":-300,"w":238.13778602887305,"h":50,"type":1,"vy":0.5770619509088051,"vx":0.017385357344021912,"simulate":[1,3],"initialRotation":2.295162612750762,"rotateSpeed":0.008014966797742095,"boundPlayer":true},{"time":50.435007179481296,"lifeTime":7,"x":1497.5915628886494,"y":-300,"w":175.8084335428407,"h":50,"type":1,"vy":0.577530514164902,"vx":-0.08717617321310141,"simulate":[1,3],"initialRotation":1.4004178358365351,"rotateSpeed":0.0011889889046614865,"boundPlayer":true},{"time":47.58953163531153,"lifeTime":7,"x":-300,"y":1473.4985066368545,"w":188.99700414812258,"h":50,"type":1,"vx":0.6531542208696548,"vy":0.12998996017211137,"simulate":[1,3],"initialRotation":0.49248844214376497,"rotateSpeed":0.002380229544078956,"boundPlayer":true},{"time":52.7462578981219,"lifeTime":7,"x":-300,"y":1269.5217586253204,"w":211.35173084784267,"h":50,"type":1,"vx":0.5286203092801921,"vy":0.07191343105858547,"simulate":[1,3],"initialRotation":0.044115573051683815,"rotateSpeed":0.00005540321996294987,"boundPlayer":true},{"time":51.32348701401205,"lifeTime":7,"x":-300,"y":288.64704712969535,"w":209.34764827418599,"h":50,"type":1,"vx":0.6368027270537927,"vy":-0.08715688127817998,"simulate":[1,3],"initialRotation":0.7217516028323516,"rotateSpeed":0.0070989726647779266,"boundPlayer":true},{"time":54.55195870964101,"lifeTime":7,"x":1045.7606287866747,"y":-300,"w":222.61299567866433,"h":50,"type":1,"vy":0.6128434704255199,"vx":0.020271415645142177,"simulate":[1,3],"initialRotation":3.022016981933968,"rotateSpeed":0.0018769117706532539,"boundPlayer":true},{"time":55.58885723394239,"lifeTime":7,"x":-300,"y":1234.933695804325,"w":170.2279995828434,"h":50,"type":1,"vx":0.35502083063899686,"vy":0.11412751500574822,"simulate":[1,3],"initialRotation":1.7482469489559125,"rotateSpeed":0.005669289792529623,"boundPlayer":true},{"time":48.08638168907595,"lifeTime":7,"x":-300,"y":1167.4000180278906,"w":174.16603252163983,"h":50,"type":1,"vx":0.5837794307783091,"vy":0.11020959746488526,"simulate":[1,3],"initialRotation":2.681450454827088,"rotateSpeed":0.00248544639282098,"boundPlayer":true},{"time":48.77169214032233,"lifeTime":7,"x":2100,"y":417.85918604272564,"w":195.25393401523687,"h":50,"type":1,"vx":-0.5431959988451547,"vy":-0.03830565257910307,"simulate":[1,3],"initialRotation":0.04913091775698453,"rotateSpeed":0.002564007200298113,"boundPlayer":true},{"time":52.101693676205116,"lifeTime":7,"x":597.5600362919268,"y":-300,"w":165.93072195809052,"h":50,"type":1,"vy":0.49336811378009116,"vx":0.08758948516615725,"simulate":[1,3],"initialRotation":2.0368435535494167,"rotateSpeed":0.006271556663505893,"boundPlayer":true},{"time":50.794380687059075,"lifeTime":7,"x":1998.3675613496046,"y":-300,"w":166.819849910053,"h":50,"type":1,"vy":0.4076241226550392,"vx":-0.08363878016652392,"simulate":[1,3],"initialRotation":2.831026583626761,"rotateSpeed":0.005528129578520913,"boundPlayer":true},{"time":51.39754938390906,"lifeTime":7,"x":-300,"y":1420.2029502676155,"w":205.03764244545664,"h":50,"type":1,"vx":0.5978935537877765,"vy":-0.1185947502765079,"simulate":[1,3],"initialRotation":2.0718250480865903,"rotateSpeed":0.005952084292885121,"boundPlayer":true},{"time":52.299089341030864,"lifeTime":7,"x":2100,"y":1694.733406889389,"w":239.32140393332566,"h":50,"type":1,"vx":-0.34306841021394635,"vy":-0.12481781778966963,"simulate":[1,3],"initialRotation":2.026591150677552,"rotateSpeed":0.00010066084429124304,"boundPlayer":true},
{ //Phase 6
	"time": 59,
	"lifeTime": 12.4,
	"x": 100,
	"y": 100,
	"r": 90,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 59,
	"lifeTime": 12.4,
	"x": 100,
	"y": 1900,
	"r": 90,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 59,
	"lifeTime": 12.4,
	"x": 1900,
	"y": 100,
	"r": 90,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 59,
	"lifeTime": 12.4,
	"x": 1900,
	"y": 1900,
	"r": 90,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},

{ //Phase 7
	"time": 71.4,
	"lifeTime": 12.4,
	"x": 100,
	"y": 100,
	"r": 110,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 71.4,
	"lifeTime": 12.4,
	"x": 100,
	"y": 1900,
	"r": 110,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
}, 
{
	"time": 71.4,
	"lifeTime": 12.4,
	"x": 1900,
	"y": 100,
	"r": 110,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 71.4,
	"lifeTime": 12.4,
	"x": 1900,
	"y": 1900,
	"r": 110,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},

//Bulk of Phase 6: 
{time:66.67312819895685,type:1,lifeTime:1,x:100,y:100,vx:.005859196786545828,vy:.2601315129644961,r:82.08244229557624,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:67.67312819895685,spawn:[105.85919678654582,360.1315129644961],radius:8.208244229557625,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.276326290156667,spreadAngles:!0,baseAngle:5.712634289968505},{time:64.9724236154279,type:1,lifeTime:1,x:100,y:1900,vx:.16796011202216887,vy:-.023385351532928644,r:65.82425775539105,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:65.9724236154279,spawn:[267.9601120221689,1876.6146484670714],radius:6.582425775539105,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.322943218529492,spreadAngles:!0,baseAngle:1.3708053069371788},{time:59.84706391329572,type:1,lifeTime:1,x:100,y:100,vx:.19078265498373476,vy:.06993866751341173,r:70.1297930080911,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:60.84706391329572,spawn:[290.78265498373474,169.93866751341173],radius:7.01297930080911,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.776068169054872,spreadAngles:!0,baseAngle:6.129687748785788},{time:60.22666703101764,type:1,lifeTime:1,x:1900,y:1900,vx:-.21674690229154728,vy:-.12903716014536476,r:82.65425466917092,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:61.22666703101764,spawn:[1683.2530977084527,1770.9628398546351],radius:8.265425466917092,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.066146372654886,spreadAngles:!0,baseAngle:1.5540921397897924},{time:63.84066995980454,type:1,lifeTime:1,x:1900,y:1900,vx:-.1305124745028857,vy:-.11385698469677259,r:82.78029845008919,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:64.84066995980454,spawn:[1769.4875254971143,1786.1430153032275],radius:8.27802984500892,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.348700063890313,spreadAngles:!0,baseAngle:6.198451910136904},{time:65.29420460297786,type:1,lifeTime:1,x:100,y:1900,vx:.11043406632775916,vy:-.11079185011784068,r:76.72923538278779,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.29420460297786,spawn:[210.43406632775918,1789.2081498821594],radius:7.672923538278779,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.296542538987422,spreadAngles:!0,baseAngle:5.852830841919457},{time:62.93134460199961,type:1,lifeTime:1,x:100,y:1900,vx:.06057019529113785,vy:-.27124326254428366,r:72.03065306308255,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:63.93134460199961,spawn:[160.57019529113785,1628.7567374557163],radius:7.203065306308256,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.180564964750454,spreadAngles:!0,baseAngle:2.4427306084759177},{time:67.08207412965344,type:1,lifeTime:1,x:1900,y:1900,vx:-.006383432860542511,vy:-.21926446817823816,r:78.34019459661813,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:68.08207412965344,spawn:[1893.6165671394574,1680.735531821762],radius:7.834019459661813,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.675744615325062,spreadAngles:!0,baseAngle:4.4867763195169745},{time:69.25453432096494,type:1,lifeTime:1,x:100,y:100,vx:.20725980402892763,vy:.1795830776404455,r:81.04358536246801,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:70.25453432096494,spawn:[307.25980402892765,279.5830776404455],radius:8.104358536246801,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.901733041226242,spreadAngles:!0,baseAngle:.24578487722774855},{time:68.64506277499183,type:1,lifeTime:1,x:100,y:1900,vx:.14845962100819912,vy:-.1859509635330949,r:69.78428310624916,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:69.64506277499183,spawn:[248.45962100819912,1714.0490364669051],radius:6.978428310624916,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.454489282821545,spreadAngles:!0,baseAngle:.6753088023943215},{time:68.3515820000842,type:1,lifeTime:1,x:100,y:1900,vx:.0011754109093924242,vy:-.15010159285953784,r:82.31695142345399,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:69.3515820000842,spawn:[101.17541090939243,1749.898407140462],radius:8.231695142345398,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.8775152891015345,spreadAngles:!0,baseAngle:3.0380990773125065},{time:63.97041185267686,type:1,lifeTime:1,x:1900,y:1900,vx:-.27230322900300175,vy:-.044584932767379015,r:72.9272977437393,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:64.97041185267686,spawn:[1627.6967709969983,1855.415067232621],radius:7.29272977437393,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.418754753600427,spreadAngles:!0,baseAngle:2.37978079042774},{time:65.8991678378308,type:1,lifeTime:1,x:1900,y:1900,vx:-.08458496156009465,vy:-.13808794030990817,r:66.95936600810215,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.8991678378308,spawn:[1815.4150384399054,1761.9120596900918],radius:6.6959366008102155,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.621218283125862,spreadAngles:!0,baseAngle:2.54562111539554},{time:66.38407645819328,type:1,lifeTime:1,x:100,y:1900,vx:.04197841622197737,vy:-.14925904511718172,r:65.64711135319772,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:67.38407645819328,spawn:[141.97841622197737,1750.7409548828182],radius:6.564711135319771,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.7192325252856815,spreadAngles:!0,baseAngle:5.989789335737255},{time:59.81083629138907,type:1,lifeTime:1,x:100,y:1900,vx:.047881149974541654,vy:-.20843393007418284,r:80.40849044286631,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:60.81083629138907,spawn:[147.88114997454164,1691.5660699258171],radius:8.040849044286631,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.605439878673553,spreadAngles:!0,baseAngle:2.8186541320909972},{time:65.30407003828478,type:1,lifeTime:1,x:1900,y:100,vx:-.2187966941339565,vy:.014362690543595406,r:65.93570836456614,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.30407003828478,spawn:[1681.2033058660436,114.3626905435954],radius:6.593570836456614,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.703115436149217,spreadAngles:!0,baseAngle:3.2008869258230517},{time:65.34110680369402,type:1,lifeTime:1,x:1900,y:100,vx:-.13501498430451866,vy:.08966033207848652,r:68.91936666126334,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.34110680369402,spawn:[1764.9850156954813,189.66033207848653],radius:6.891936666126334,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.042868209376328,spreadAngles:!0,baseAngle:3.460571573148044},{time:68.99445702897718,type:1,lifeTime:1,x:1900,y:1900,vx:-.1758954464120114,vy:-.08576256693880288,r:72.02071515639571,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:69.99445702897718,spawn:[1724.1045535879887,1814.2374330611972],radius:7.202071515639571,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.402608772167413,spreadAngles:!0,baseAngle:2.644090980428531},{time:68.36561512479756,type:1,lifeTime:1,x:1900,y:100,vx:-.2260208053142504,vy:.16390617322468576,r:69.14637193851267,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:69.36561512479756,spawn:[1673.9791946857497,263.90617322468574],radius:6.914637193851267,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.129411179205177,spreadAngles:!0,baseAngle:5.628151435034727},{time:66.81074372953115,type:1,lifeTime:1,x:1900,y:1900,vx:-.14303032211975802,vy:-.23280475067891213,r:72.88405910644413,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:67.81074372953115,spawn:[1756.969677880242,1667.1952493210879],radius:7.288405910644412,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.52670182448337,spreadAngles:!0,baseAngle:3.2601505063100156},{time:68.83818308765015,type:1,lifeTime:1,x:100,y:1900,vx:.19329073688549886,vy:-.06834624552715877,r:76.1267521519602,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:69.83818308765015,spawn:[293.29073688549886,1831.6537544728412],radius:7.61267521519602,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.552738788125006,spreadAngles:!0,baseAngle:4.048819211703825},{time:61.8159278707878,type:1,lifeTime:1,x:1900,y:1900,vx:-.2882409852760053,vy:-.04265422102397547,r:72.22871238595552,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.8159278707878,spawn:[1611.7590147239948,1857.3457789760246],radius:7.222871238595552,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.407170832884219,spreadAngles:!0,baseAngle:.963135464730654},{time:65.07252147005781,type:1,lifeTime:1,x:100,y:100,vx:.23291080365763853,vy:.17151841445995045,r:84.08197759572991,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.07252147005781,spawn:[332.91080365763855,271.51841445995046],radius:8.40819775957299,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.746680551466172,spreadAngles:!0,baseAngle:5.925063882652068},{time:65.06803375637358,type:1,lifeTime:1,x:100,y:1900,vx:.07686558466562064,vy:-.1468904191334297,r:81.27781013167485,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.06803375637358,spawn:[176.86558466562064,1753.1095808665702],radius:8.127781013167485,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.648897712145535,spreadAngles:!0,baseAngle:1.3898862446980345},{time:63.05793059683805,type:1,lifeTime:1,x:1900,y:1900,vx:-.11006756318676983,vy:-.24847803319074988,r:72.73048893745408,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:64.05793059683805,spawn:[1789.9324368132302,1651.5219668092502],radius:7.2730488937454085,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.436057996054837,spreadAngles:!0,baseAngle:1.154875119898323},{time:60.30063118728709,type:1,lifeTime:1,x:1900,y:1900,vx:-.02411721492669079,vy:-.14912208632183388,r:73.05495622606331,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:61.30063118728709,spawn:[1875.8827850733092,1750.8779136781661],radius:7.3054956226063315,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.2423559606637165,spreadAngles:!0,baseAngle:5.472072613218463},{time:65.90712388306439,type:1,lifeTime:1,x:100,y:1900,vx:.15352191532609363,vy:-.05296884047539995,r:80.3707411168931,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:66.90712388306439,spawn:[253.52191532609362,1847.0311595246],radius:8.03707411168931,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.774673322528636,spreadAngles:!0,baseAngle:6.119937443661084},{time:62.08492847914956,type:1,lifeTime:1,x:100,y:100,vx:.0881042948188889,vy:.1710224081875653,r:79.90680043481001,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:63.08492847914956,spawn:[188.1042948188889,271.0224081875653],radius:7.990680043481001,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.084538578185595,spreadAngles:!0,baseAngle:.731972487492845},{time:67.9344608648565,type:1,lifeTime:1,x:1900,y:100,vx:-.06137690949715022,vy:.2592109637163158,r:76.57178036301832,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:68.9344608648565,spawn:[1838.62309050285,359.2109637163158],radius:7.657178036301832,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.041012897622592,spreadAngles:!0,baseAngle:1.407384648691396},{time:67.60138426211327,type:1,lifeTime:1,x:1900,y:1900,vx:-.17634533103359123,vy:-.13854779794397742,r:72.77998791715852,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:68.60138426211327,spawn:[1723.6546689664087,1761.4522020560225],radius:7.277998791715852,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.0789553312333195,spreadAngles:!0,baseAngle:2.9711942851296977},{time:69.21658769552951,type:1,lifeTime:1,x:100,y:100,vx:.1698544826722976,vy:.187263729022522,r:69.06023289498292,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:70.21658769552951,spawn:[269.85448267229765,287.263729022522],radius:6.906023289498291,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.152253926502854,spreadAngles:!0,baseAngle:1.3344484582621816},{time:66.92383033027933,type:1,lifeTime:1,x:100,y:1900,vx:.19961344777213372,vy:-.03552965744415549,r:82.93999043222041,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:67.92383033027933,spawn:[299.6134477721337,1864.4703425558446],radius:8.29399904322204,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.727375032992442,spreadAngles:!0,baseAngle:4.895553470033352},{time:61.3232321804448,type:1,lifeTime:1,x:1900,y:100,vx:-.20752558079140304,vy:.10355578801312201,r:83.01482641913616,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.3232321804448,spawn:[1692.474419208597,203.55578801312203],radius:8.301482641913616,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.774730701716448,spreadAngles:!0,baseAngle:.6317306008704482},{time:67.60637385251631,type:1,lifeTime:1,x:1900,y:1900,vx:-.16505498268922722,vy:-.17272102352129926,r:84.85846260772678,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:68.60637385251631,spawn:[1734.9450173107728,1727.2789764787008],radius:8.485846260772679,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.042833249803701,spreadAngles:!0,baseAngle:5.624150090554703},{time:64.03090217215056,type:1,lifeTime:1,x:1900,y:100,vx:-.06901403680540306,vy:.14248060493704312,r:82.95131357813608,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:65.03090217215056,spawn:[1830.985963194597,242.48060493704313],radius:8.295131357813608,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.070928343533717,spreadAngles:!0,baseAngle:1.1649583975603257},{time:61.82697682623829,type:1,lifeTime:1,x:1900,y:100,vx:-.12119179034683046,vy:.21184078063979953,r:65.26482097184937,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.82697682623829,spawn:[1778.8082096531696,311.8407806397995],radius:6.526482097184937,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.4356971477835,spreadAngles:!0,baseAngle:1.0732001143811405},{time:61.925248848777116,type:1,lifeTime:1,x:100,y:100,vx:.06371188339994827,vy:.2272462406571542,r:68.43494275866979,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.925248848777116,spawn:[163.71188339994825,327.2462406571542],radius:6.843494275866979,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.121469991577682,spreadAngles:!0,baseAngle:5.888355611362923},{time:61.60547022069899,type:1,lifeTime:1,x:100,y:100,vx:.26361534352316945,vy:.052732151272978194,r:83.45211273824798,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.60547022069899,spawn:[363.61534352316943,152.7321512729782],radius:8.345211273824798,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.964230479743287,spreadAngles:!0,baseAngle:.7401639569562874},{time:63.39225703695749,type:1,lifeTime:1,x:1900,y:100,vx:-.0011914277880222448,vy:.18265251646622174,r:67.1374515999906,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:64.39225703695749,spawn:[1898.8085722119777,282.65251646622175],radius:6.71374515999906,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.256373974157594,spreadAngles:!0,baseAngle:2.8078279923907505},{time:61.438856259506345,type:1,lifeTime:1,x:100,y:1900,vx:.21871015174297115,vy:-.10525940523459722,r:80.86459848834221,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:62.438856259506345,spawn:[318.7101517429711,1794.7405947654029],radius:8.08645984883422,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.086621536296136,spreadAngles:!0,baseAngle:3.8864354799712766},{time:60.95568955524159,type:1,lifeTime:1,x:1900,y:1900,vx:-.052027640267198104,vy:-.18549875460574783,r:72.31995051785114,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:61.95568955524159,spawn:[1847.9723597328018,1714.5012453942522],radius:7.231995051785114,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:5.114462415778944,spreadAngles:!0,baseAngle:3.0994629835515317},{time:63.20857973343603,type:1,lifeTime:1,x:1900,y:100,vx:-.16646827233069186,vy:.06470782142609016,r:71.29011068288551,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:64.20857973343604,spawn:[1733.531727669308,164.70782142609016],radius:7.129011068288551,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:7.753848150387614,spreadAngles:!0,baseAngle:2.191385190724291},{time:66.3464001920051,type:1,lifeTime:1,x:100,y:1900,vx:.25839551168508135,vy:-.14288948242435773,r:74.89664827408659,simulate:[3],extraParams:{cr(_){ctx.fillStyle="#3b1e16",ctx.beginPath(),ctx.arc(_.pos.x,_.pos.y,_.dimensions.x/2,0,2*Math.PI),ctx.fill(),ctx.closePath()}}},{time:67.3464001920051,spawn:[358.3955116850814,1757.1105175756422],radius:7.489664827408658,lifeTime:-1,enemy:!0,type:"normal",count:6,speed:6.554829020889309,spreadAngles:!0,baseAngle:.9075585143437617},
//Bulk of Phase 7:
{"time":82.80000000000001,"lifeTime":-7,"enemy":true,"type":"homing","count":1,"radius":6.631133497335341,"speed":7.21216966364199,"spawn":[1900,1900]},{"time":82.2,"lifeTime":-6,"enemy":true,"type":"homing","count":1,"radius":7.88325581996134,"speed":7.1392792411402315,"spawn":[100,100]},{"time":81.60000000000001,"lifeTime":-5,"enemy":true,"type":"homing","count":1,"radius":8.394241352286395,"speed":8.73902545044075,"spawn":[1900,100]},{"time":81,"lifeTime":-4,"enemy":true,"type":"homing","count":1,"radius":6.0945146724986765,"speed":7.8926754894057005,"spawn":[100,1900]},{"time":80.4,"lifeTime":-3,"enemy":true,"type":"homing","count":1,"radius":7.989110470069311,"speed":6.562161024345861,"spawn":[1900,1900]},{"time":79.80000000000001,"lifeTime":-2,"enemy":true,"type":"homing","count":1,"radius":6.251090016906593,"speed":8.766714991782113,"spawn":[100,100]},{"time":79.2,"lifeTime":-1,"enemy":true,"type":"homing","count":1,"radius":6.793771766278797,"speed":8.177221329483753,"spawn":[1900,100]},{"time":78.60000000000001,"lifeTime":0,"enemy":true,"type":"homing","count":1,"radius":7.445220174005356,"speed":6.867179111672643,"spawn":[100,1900]},{"time":78,"lifeTime":1,"enemy":true,"type":"homing","count":1,"radius":7.677374746961522,"speed":6.246401963557812,"spawn":[1900,1900]},{"time":77.4,"lifeTime":2,"enemy":true,"type":"homing","count":1,"radius":8.779783653656292,"speed":6.580686731839271,"spawn":[100,100]},{"time":76.80000000000001,"lifeTime":3,"enemy":true,"type":"homing","count":1,"radius":8.2121198333121,"speed":6.071942762589603,"spawn":[1900,100]},{"time":76.2,"lifeTime":4,"enemy":true,"type":"homing","count":1,"radius":7.0418462345572514,"speed":8.832587733542058,"spawn":[100,1900]},{"time":75.60000000000001,"lifeTime":5,"enemy":true,"type":"homing","count":1,"radius":7.117347822574608,"speed":6.965558762487343,"spawn":[1900,1900]},{"time":75,"lifeTime":6,"enemy":true,"type":"homing","count":1,"radius":8.088836340718185,"speed":6.937284595743815,"spawn":[100,100]},{"time":74.4,"lifeTime":7,"enemy":true,"type":"homing","count":1,"radius":6.532050781839873,"speed":7.876050624825543,"spawn":[1900,100]},{"time":73.80000000000001,"lifeTime":8,"enemy":true,"type":"homing","count":1,"radius":8.298201544337335,"speed":6.497711172021277,"spawn":[100,1900]},{"time":73.2,"lifeTime":9,"enemy":true,"type":"homing","count":1,"radius":8.32040160577435,"speed":8.654246111442948,"spawn":[1900,1900]},{"time":72.60000000000001,"lifeTime":10,"enemy":true,"type":"homing","count":1,"radius":8.704162631291108,"speed":8.367152739202844,"spawn":[100,100]},{"time":72,"lifeTime":11,"enemy":true,"type":"homing","count":1,"radius":8.037731234256611,"speed":8.133307035207475,"spawn":[1900,100]},{"time":71.4,"lifeTime":12,"enemy":true,"type":"homing","count":1,"radius":7.985244046666468,"speed":7.151452477748413,"spawn":[100,1900]},


//Transition 7 to 8

{
	"time": 83.8,
	"lifeTime": 2,
	"x": 100,
	"y": 100,
	"r": 110,
	"type": 0,
	"vx": 0.45,
	"vy": 0.45,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 83.8,
	"lifeTime": 2,
	"x": 100,
	"y": 1900,
	"r": 110,
	"type": 0,
	"vx": 0.45,
	"vy": -0.45,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
}, 
{
	"time": 83.8,
	"lifeTime": 2,
	"x": 1900,
	"y": 100,
	"r": 110,
	"type": 0,
	"vx": -0.45,
	"vy": 0.45,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},  
{
	"time": 83.8,
	"lifeTime": 2,
	"x": 1900,
	"y": 1900,
	"r": 110,
	"type": 0,
	"vx": -0.45,
	"vy": -0.45,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},
{
	"time": 85.8,
	"lifeTime": 0.1,
	"x": 1000,
	"y": 1000,
	"r": 130,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},
{
	"time": 85.9,
	"lifeTime": 0.1,
	"x": 1000,
	"y": 1000,
	"r": 140,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();
		},
	}
},
{
	"time": 86,
	"lifeTime": 32,
	"x": 1000,
	"y": 1000,
	"r": 150,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		cr: (o) => {
			ctx.fillStyle = "#333333";
			ctx.beginPath();
			ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
			ctx.fill();
			ctx.closePath();

			ctx.fillStyle = `hsl(0, ${50 + Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2 + 1.5) * 50}%, ${30 + Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2 + 1.5) * 15}%)`;
			ctx.translate(o.pos.x, o.pos.y);
			ctx.rotate(Math.PI/4);
			ctx.fillRect(-95, -15, 190, 30, Math.PI * 2)
			ctx.rotate(-Math.PI/2);
			ctx.fillRect(-95, -15, 190, 30, Math.PI * 2)
			ctx.rotate(Math.PI/4);
			
			ctx.translate(-o.pos.x, -o.pos.y);


		},
	}
},

//Phase 8

{"time":95.84421400080039,"lifeTime":0.8,"x":3822.8120985961586,"y":1820.1228440602179,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":143.6727295670844,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.64421400080039,"lifeTime":1,"x":3822.8120985961586,"y":1820.1228440602179,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":143.6727295670844,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":89.78679586420365,"lifeTime":0.8,"x":1350.9590966588896,"y":440.39651255959376,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":265.29665075431876,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.58679586420365,"lifeTime":1,"x":1350.9590966588896,"y":440.39651255959376,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":265.29665075431876,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.10846201061955,"lifeTime":0.8,"x":818.8781167740302,"y":1173.6754103215753,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":270.9966332312137,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.90846201061954,"lifeTime":1,"x":818.8781167740302,"y":1173.6754103215753,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":270.9966332312137,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.88381199774457,"lifeTime":0.8,"x":1654.4588315483784,"y":793.8219788817956,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":115.83800212760212,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":89.68381199774457,"lifeTime":1,"x":1654.4588315483784,"y":793.8219788817956,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":115.83800212760212,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.56415640309805,"lifeTime":0.8,"x":-368.3126633246552,"y":1221.8948938126518,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":300.8352692615807,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.36415640309805,"lifeTime":1,"x":-368.3126633246552,"y":1221.8948938126518,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":300.8352692615807,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.31580706068034,"lifeTime":0.8,"x":2.1313052471127776,"y":1785.6978278287618,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":296.5124815672105,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.11580706068034,"lifeTime":1,"x":2.1313052471127776,"y":1785.6978278287618,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":296.5124815672105,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":93.41047299170097,"lifeTime":0.8,"x":-915.3309960316542,"y":1949.5938723822494,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":295.65089109665155,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":94.21047299170097,"lifeTime":1,"x":-915.3309960316542,"y":1949.5938723822494,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":295.65089109665155,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.94963442419552,"lifeTime":0.8,"x":-2128.6592342233116,"y":1809.6129884850711,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":354.9238210762395,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.74963442419552,"lifeTime":1,"x":-2128.6592342233116,"y":1809.6129884850711,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":354.9238210762395,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.5333792613267,"lifeTime":0.8,"x":-28.989809472769153,"y":820.7658320136325,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":88.85408798788612,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.3333792613267,"lifeTime":1,"x":-28.989809472769153,"y":820.7658320136325,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":88.85408798788612,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.56615591313322,"lifeTime":0.8,"x":3142.375609647147,"y":353.34638771053125,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":148.72853499371053,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.36615591313321,"lifeTime":1,"x":3142.375609647147,"y":353.34638771053125,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":148.72853499371053,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.00941374201525,"lifeTime":0.8,"x":686.9826810865206,"y":379.4249116724003,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":292.2863693946128,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.80941374201525,"lifeTime":1,"x":686.9826810865206,"y":379.4249116724003,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":292.2863693946128,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.96986281671568,"lifeTime":0.8,"x":2223.058137216054,"y":1746.0237335204695,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":106.07755173262603,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.76986281671567,"lifeTime":1,"x":2223.058137216054,"y":1746.0237335204695,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":106.07755173262603,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.57215672306464,"lifeTime":0.8,"x":-780.2753445179976,"y":1911.5321334924329,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":46.361122364085226,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.37215672306463,"lifeTime":1,"x":-780.2753445179976,"y":1911.5321334924329,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":46.361122364085226,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.3246717618334,"lifeTime":0.8,"x":4676.591586367266,"y":840.0223681971227,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":195.5860384777679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":93.1246717618334,"lifeTime":1,"x":4676.591586367266,"y":840.0223681971227,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":195.5860384777679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":89.42601754275655,"lifeTime":0.8,"x":-2124.907244727446,"y":392.5163675531999,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":12.264791890944027,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.22601754275655,"lifeTime":1,"x":-2124.907244727446,"y":392.5163675531999,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":12.264791890944027,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.85696115002814,"lifeTime":0.8,"x":3956.595366294667,"y":1228.065897691794,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":208.00868587064645,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.65696115002814,"lifeTime":1,"x":3956.595366294667,"y":1228.065897691794,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":208.00868587064645,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.45787484729837,"lifeTime":0.8,"x":1005.9338653968795,"y":1412.9920357156282,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":89.998627910631,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":97.25787484729837,"lifeTime":1,"x":1005.9338653968795,"y":1412.9920357156282,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":89.998627910631,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.20984601813,"lifeTime":0.8,"x":-119.06615053384257,"y":654.493726852061,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":65.18982025977782,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":89.00984601812999,"lifeTime":1,"x":-119.06615053384257,"y":654.493726852061,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":65.18982025977782,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.52243161650959,"lifeTime":0.8,"x":84.47420093398046,"y":543.4212691841313,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":299.7542110636728,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.32243161650959,"lifeTime":1,"x":84.47420093398046,"y":543.4212691841313,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":299.7542110636728,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.99027158324014,"lifeTime":0.8,"x":2814.144138684478,"y":863.6919102565638,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":149.42861213891192,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.79027158324014,"lifeTime":1,"x":2814.144138684478,"y":863.6919102565638,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":149.42861213891192,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.26450439546187,"lifeTime":0.8,"x":3095.2661017696237,"y":234.24349945631516,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":194.7180130396609,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.06450439546187,"lifeTime":1,"x":3095.2661017696237,"y":234.24349945631516,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":194.7180130396609,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.56871605134877,"lifeTime":0.8,"x":-1072.7278631845998,"y":1285.7599008316442,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":359.4825987806138,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.36871605134877,"lifeTime":1,"x":-1072.7278631845998,"y":1285.7599008316442,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":359.4825987806138,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.15576388697885,"lifeTime":0.8,"x":-1320.437481029938,"y":1814.0149079143023,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":312.45067328807767,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.95576388697884,"lifeTime":1,"x":-1320.437481029938,"y":1814.0149079143023,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":312.45067328807767,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.49663479175396,"lifeTime":0.8,"x":-664.9378724258443,"y":296.0218464134599,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":60.44593682510971,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.29663479175396,"lifeTime":1,"x":-664.9378724258443,"y":296.0218464134599,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":60.44593682510971,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":94.72695039991874,"lifeTime":0.8,"x":2903.747343533999,"y":1295.4435384093558,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":242.49108410755423,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.52695039991873,"lifeTime":1,"x":2903.747343533999,"y":1295.4435384093558,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":242.49108410755423,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.06841814091017,"lifeTime":0.8,"x":-2547.6408286964283,"y":475.92769029758296,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":345.9745313047626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.86841814091017,"lifeTime":1,"x":-2547.6408286964283,"y":475.92769029758296,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":345.9745313047626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":94.01051557530607,"lifeTime":0.8,"x":2241.5509080105403,"y":1458.033829307639,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":248.81095971839238,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":94.81051557530607,"lifeTime":1,"x":2241.5509080105403,"y":1458.033829307639,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":248.81095971839238,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.16684881088644,"lifeTime":0.8,"x":-2331.6292438991045,"y":1545.117269845729,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":17.695693143782627,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.96684881088643,"lifeTime":1,"x":-2331.6292438991045,"y":1545.117269845729,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":17.695693143782627,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.55112460287768,"lifeTime":0.8,"x":-1877.1700032193621,"y":420.9372446739487,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":328.2559723378497,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.35112460287768,"lifeTime":1,"x":-1877.1700032193621,"y":420.9372446739487,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":328.2559723378497,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":89.63136724803263,"lifeTime":0.8,"x":-1231.656193491538,"y":1360.485706333685,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":53.891150443262944,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":90.43136724803263,"lifeTime":1,"x":-1231.656193491538,"y":1360.485706333685,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":53.891150443262944,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.36798591811736,"lifeTime":0.8,"x":-1341.1619976232028,"y":671.6058727017797,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":56.04311947328039,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":93.16798591811735,"lifeTime":1,"x":-1341.1619976232028,"y":671.6058727017797,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":56.04311947328039,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.44908638090405,"lifeTime":0.8,"x":-110.85372871670893,"y":710.9934839145826,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":50.572798049645144,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":93.24908638090405,"lifeTime":1,"x":-110.85372871670893,"y":710.9934839145826,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":50.572798049645144,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.82662596955258,"lifeTime":0.8,"x":-1791.5931891186594,"y":1598.9396317540118,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":319.7541226491276,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.62662596955258,"lifeTime":1,"x":-1791.5931891186594,"y":1598.9396317540118,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":319.7541226491276,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.19678853051145,"lifeTime":0.8,"x":852.694127851785,"y":105.54843622793085,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":82.28959498013309,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.99678853051145,"lifeTime":1,"x":852.694127851785,"y":105.54843622793085,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":82.28959498013309,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.63876872599586,"lifeTime":0.8,"x":-904.0522845222208,"y":591.6054430615899,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":322.25312619003716,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.43876872599586,"lifeTime":1,"x":-904.0522845222208,"y":591.6054430615899,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":322.25312619003716,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":91.43674318928839,"lifeTime":0.8,"x":1449.3184583430677,"y":404.964941077556,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":249.87148920649196,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.23674318928839,"lifeTime":1,"x":1449.3184583430677,"y":404.964941077556,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":249.87148920649196,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":87.44136597582909,"lifeTime":0.8,"x":-1567.5008034825792,"y":1088.1158112798587,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":38.77542777705984,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":88.24136597582908,"lifeTime":1,"x":-1567.5008034825792,"y":1088.1158112798587,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":38.77542777705984,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":96.37664243268878,"lifeTime":0.8,"x":-2024.276124613309,"y":376.5210722745919,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":7.251375606120227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":97.17664243268878,"lifeTime":1,"x":-2024.276124613309,"y":376.5210722745919,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":7.251375606120227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.00407169350282,"lifeTime":0.8,"x":-1970.3975759620748,"y":1729.5679227115604,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":333.2671492411519,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":95.80407169350282,"lifeTime":1,"x":-1970.3975759620748,"y":1729.5679227115604,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":333.2671492411519,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":92.24542785739239,"lifeTime":0.8,"x":-1958.1666483092306,"y":1427.1552834574727,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":359.9054058849847,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":93.04542785739238,"lifeTime":1,"x":-1958.1666483092306,"y":1427.1552834574727,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":359.9054058849847,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},
{
	"time": 86,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6
}, 
{
	"time": 86.7407407407,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/12
}, 
{
	"time": 87.4814814815,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 4,
	"speed": 6,
	"spreadAngles": true,
	"baseAngle": 0
}, 
{
	"time": 88.2222222222,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 6,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": 3 * Math.PI * 1/12,
	"spawn": [1000, 1000]
}, 
{
	"time": 88.962962963,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 6,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/6,
	"spawn": [1000, 1000]
}, 
{
	"time": 89.7037037037,
	"lifeTime": -1,
	"enemy": true,
	"type": "normal",
	"count": 6,
	"radius": 6,
	"speed": 4,
	"spreadAngles": true,
	"baseAngle": Math.PI * 1/12,
	"spawn": [1000, 1000]
}, 
{
	"time": 92,
	"lifeTime": 5.9,
	"enemy": true,
	"type": "normal",
	"count": 7,
	"radius": 10,
	"speed": 7,
	"spawn": [1000, 1000]
}, 
{
	"time": 95,
	"lifeTime": 3,
	"enemy": true,
	"type": "homing",
	"count": 1,
	"radius": 8,
	"speed": 8,
	"spawn": [1000, 1000]
}, 
//Spin around
{"time":100.88000001152,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":6.031857894892402,"spawn":[1000,1000]},{"time":100.76000001104,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":5.7805304826052195,"spawn":[1000,1000]},{"time":100.64000001056,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":5.529203070318036,"spawn":[1000,1000]},{"time":100.52000001008,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":5.277875658030852,"spawn":[1000,1000]},{"time":100.4000000096,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":5.026548245743669,"spawn":[1000,1000]},{"time":100.28000000912,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":4.775220833456485,"spawn":[1000,1000]},{"time":100.16000000864,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":4.523893421169302,"spawn":[1000,1000]},{"time":100.04000000816,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":4.272566008882119,"spawn":[1000,1000]},{"time":99.92000000768,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":4.0212385965949355,"spawn":[1000,1000]},{"time":99.8000000072,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":3.7699111843077517,"spawn":[1000,1000]},{"time":99.68000000672,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":3.518583772020569,"spawn":[1000,1000]},{"time":99.56000000624,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":3.267256359733385,"spawn":[1000,1000]},{"time":99.44000000576,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":3.015928947446201,"spawn":[1000,1000]},{"time":99.32000000528,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":2.764601535159018,"spawn":[1000,1000]},{"time":99.2000000048,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":2.5132741228718345,"spawn":[1000,1000]},{"time":99.08000000432,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":2.261946710584651,"spawn":[1000,1000]},{"time":98.96000000384,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":2.0106192982974678,"spawn":[1000,1000]},{"time":98.84000000336,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":1.7592918860102844,"spawn":[1000,1000]},{"time":98.72000000288,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":1.5079644737231006,"spawn":[1000,1000]},{"time":98.6000000024,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":1.2566370614359172,"spawn":[1000,1000]},{"time":98.48000000192,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":1.0053096491487339,"spawn":[1000,1000]},{"time":98.36000000144,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0.7539822368615503,"spawn":[1000,1000]},{"time":98.24000000096,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0.5026548245743669,"spawn":[1000,1000]},{"time":98.12000000048,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0.25132741228718347,"spawn":[1000,1000]},{"time":98,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0,"spawn":[1000,1000]},


{"time":100.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-18.2212373908208,"spawn":[1000,1000]},{"time":100.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-17.59291886010284,"spawn":[1000,1000]},{"time":100.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-16.964600329384883,"spawn":[1000,1000]},{"time":100.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-16.336281798666924,"spawn":[1000,1000]},{"time":100.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-15.707963267948966,"spawn":[1000,1000]},{"time":100.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-15.079644737231007,"spawn":[1000,1000]},{"time":100.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-14.451326206513047,"spawn":[1000,1000]},{"time":100.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-13.823007675795091,"spawn":[1000,1000]},{"time":100.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-13.194689145077131,"spawn":[1000,1000]},{"time":100,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-12.566370614359172,"spawn":[1000,1000]},{"time":99.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-11.938052083641214,"spawn":[1000,1000]},{"time":99.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-11.309733552923255,"spawn":[1000,1000]},{"time":99.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-10.681415022205297,"spawn":[1000,1000]},{"time":99.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-10.053096491487338,"spawn":[1000,1000]},{"time":99.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-9.42477796076938,"spawn":[1000,1000]},{"time":99.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-8.79645943005142,"spawn":[1000,1000]},{"time":99.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-8.168140899333462,"spawn":[1000,1000]},{"time":99.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-7.5398223686155035,"spawn":[1000,1000]},{"time":99.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-6.911503837897546,"spawn":[1000,1000]},{"time":99,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-6.283185307179586,"spawn":[1000,1000]},{"time":98.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-5.654866776461628,"spawn":[1000,1000]},{"time":98.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-5.026548245743669,"spawn":[1000,1000]},{"time":98.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-4.39822971502571,"spawn":[1000,1000]},{"time":98.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-3.7699111843077517,"spawn":[1000,1000]},{"time":98.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-3.141592653589793,"spawn":[1000,1000]},{"time":98.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-2.5132741228718345,"spawn":[1000,1000]},{"time":98.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-1.8849555921538759,"spawn":[1000,1000]},{"time":98.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-1.2566370614359172,"spawn":[1000,1000]},{"time":98.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":-0.6283185307179586,"spawn":[1000,1000]},{"time":98,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0,"spawn":[1000,1000]},
{
	"time": 101,
	"lifeTime": 7,
	"enemy": true,
	"type": "homing",
	"count": 4,
	"radius": 6,
	"speed": 5.5,
	"spawn": [1000, 1000]
}, 
{
	"time": 104,
	"lifeTime": 0.8,
	"x": 1000,
	"y": 1000,
	"w": 1000,
	"h": 1000,
	"type": 3,
	"vx": 0,
	"vy": 0,
	"warning": true,
	"simulate": [3],
},
{
	"time": 105.111111111,
	"lifeTime": 0.8,
	"x": 0,
	"y": 1000,
	"w": 1000,
	"h": 1000,
	"type": 3,
	"vx": 0,
	"vy": 0,
	"warning": true,
	"simulate": [3],
},
{
	"time": 106.222222222222,
	"lifeTime": 0.8,
	"x": 0,
	"y": 0,
	"w": 1000,
	"h": 1000,
	"type": 3,
	"vx": 0,
	"vy": 0,
	"warning": true,
	"simulate": [3],
},
{
	"time": 107.33333333333333,
	"lifeTime": 0.8,
	"x": 1000,
	"y": 0,
	"w": 1000,
	"h": 1000,
	"type": 3,
	"vx": 0,
	"vy": 0,
	"warning": true,
	"simulate": [3],
},
{
	"time": 104.8,
	"lifeTime": 0.8,
	"x": 1000,
	"y": 1000,
	"w": 1000,
	"h": 1000,
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 105.91111111111111,
	"lifeTime": 0.8,
	"x": 0,
	"y": 1000,
	"w": 1000,
	"h": 1000,
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 107.02222222222,
	"lifeTime": 0.8,
	"x": 0,
	"y": 0,
	"w": 1000,
	"h": 1000,
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 108.13333333333333,
	"lifeTime": 0.8,
	"x": 1000,
	"y": 0,
	"w": 1000,
	"h": 1000,
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{"time":113.33333333333333,"lifeTime":0.8,"x":3181.6202447165683,"y":1989.9005040694587,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":160.37994687950518,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":3181.6202447165683,"y":1989.9005040694587,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":160.37994687950518,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":3233.4233446791295,"y":398.52507708910946,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":236.31395739424644,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":3233.4233446791295,"y":398.52507708910946,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":236.31395739424644,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3652.846818984977,"y":885.5976429732489,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":189.04508184544005,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3652.846818984977,"y":885.5976429732489,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":189.04508184544005,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":258.74229025447926,"y":104.79714252170609,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":61.707541103277876,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":258.74229025447926,"y":104.79714252170609,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":61.707541103277876,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":4747.747167292201,"y":855.4726323664923,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":197.08084090744936,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":4747.747167292201,"y":855.4726323664923,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":197.08084090744936,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":4298.194119232505,"y":1408.502488768688,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":144.0904246884536,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":4298.194119232505,"y":1408.502488768688,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":144.0904246884536,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":-675.0904892872411,"y":389.2694807380616,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":34.120264978222835,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":-675.0904892872411,"y":389.2694807380616,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":34.120264978222835,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":-981.742670093556,"y":1580.0578975733122,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":22.326799220044766,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":-981.742670093556,"y":1580.0578975733122,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":22.326799220044766,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.81481481481481,"lifeTime":0.8,"x":-136.8295373653139,"y":341.57590223709553,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":274.14205496615966,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.6148148148148,"lifeTime":1,"x":-136.8295373653139,"y":341.57590223709553,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":274.14205496615966,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":3687.3199451508362,"y":1150.8705765437628,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":145.14469096700108,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":3687.3199451508362,"y":1150.8705765437628,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":145.14469096700108,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":1726.9898330684105,"y":962.8294257236859,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":247.62413305325182,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":1726.9898330684105,"y":962.8294257236859,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":247.62413305325182,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":-309.7682794358782,"y":960.0512702464059,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":315.8317188105308,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":-309.7682794358782,"y":960.0512702464059,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":315.8317188105308,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":3266.048728091397,"y":1957.6362882872322,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":177.72482803110924,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":3266.048728091397,"y":1957.6362882872322,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":177.72482803110924,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-297.54880663491326,"y":1033.4328981739823,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":311.88213694228267,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-297.54880663491326,"y":1033.4328981739823,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":311.88213694228267,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":3010.9323628619004,"y":950.5109770966341,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":145.53508816415786,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":3010.9323628619004,"y":950.5109770966341,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":145.53508816415786,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":3188.236365035756,"y":1152.377178613847,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":242.04498108230698,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":3188.236365035756,"y":1152.377178613847,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":242.04498108230698,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":-2443.6922621545837,"y":1019.5502498235526,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":354.55722851187227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":-2443.6922621545837,"y":1019.5502498235526,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":354.55722851187227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":3682.25169337794,"y":893.6095430798141,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":174.26695263734854,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":3682.25169337794,"y":893.6095430798141,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":174.26695263734854,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":-1837.8101311159892,"y":1266.576644984991,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":51.29656147379377,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":-1837.8101311159892,"y":1266.576644984991,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":51.29656147379377,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":-2474.033632939756,"y":976.241312291498,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":335.39125621117455,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":-2474.033632939756,"y":976.241312291498,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":335.39125621117455,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":-1744.9194725605607,"y":1218.2095679442475,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":309.434218467392,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":-1744.9194725605607,"y":1218.2095679442475,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":309.434218467392,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3183.4412676983484,"y":952.3472302773291,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":118.29476402797223,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3183.4412676983484,"y":952.3472302773291,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":118.29476402797223,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":3822.101181197986,"y":340.617753252876,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":164.87187710787745,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":3822.101181197986,"y":340.617753252876,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":164.87187710787745,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":3130.7475542365974,"y":1841.9583067536028,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":214.4317594511964,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":3130.7475542365974,"y":1841.9583067536028,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":214.4317594511964,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-429.90993729176125,"y":1847.1776222836577,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":318.4791845623273,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-429.90993729176125,"y":1847.1776222836577,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":318.4791845623273,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":1396.902320743612,"y":193.1764929384821,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":256.5660801199024,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":1396.902320743612,"y":193.1764929384821,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":256.5660801199024,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":4010.003772224864,"y":1213.6867813413055,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":201.2274551835106,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":4010.003772224864,"y":1213.6867813413055,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":201.2274551835106,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":3778.878806099748,"y":968.3804542779104,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":231.6899080715143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":3778.878806099748,"y":968.3804542779104,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":231.6899080715143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":4709.960312925503,"y":910.1854862443658,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":177.19281378889403,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":4709.960312925503,"y":910.1854862443658,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":177.19281378889403,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":-1336.2639003958793,"y":439.25587013005304,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":51.19553188916445,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":-1336.2639003958793,"y":439.25587013005304,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":51.19553188916445,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":2428.966158895866,"y":1472.8185465399742,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":142.96332295150447,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":2428.966158895866,"y":1472.8185465399742,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":142.96332295150447,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":1645.034909995791,"y":1268.3819846711572,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":92.45158833646306,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":1645.034909995791,"y":1268.3819846711572,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":92.45158833646306,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":3826.465702383217,"y":58.55332981096318,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":214.35584414498774,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":3826.465702383217,"y":58.55332981096318,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":214.35584414498774,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":1574.3838626061997,"y":329.4586868641399,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":83.32429829450173,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":1574.3838626061997,"y":329.4586868641399,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":83.32429829450173,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":2954.3297708245423,"y":1726.0828129894533,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":243.15777086127787,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":2954.3297708245423,"y":1726.0828129894533,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":243.15777086127787,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":741.8950540812859,"y":1392.4797858257318,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":283.8018691449115,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":741.8950540812859,"y":1392.4797858257318,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":283.8018691449115,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":3503.695505502682,"y":1395.033720049361,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":217.66301348219935,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":3503.695505502682,"y":1395.033720049361,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":217.66301348219935,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":381.0453455563427,"y":773.5513918641334,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":58.80611228708535,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":381.0453455563427,"y":773.5513918641334,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":58.80611228708535,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":-351.139770298194,"y":1773.2946409915744,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":81.11582935553143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":-351.139770298194,"y":1773.2946409915744,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":81.11582935553143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":1660.906878023056,"y":1628.1884469255403,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":90.24703166477602,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":1660.906878023056,"y":1628.1884469255403,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":90.24703166477602,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.81481481481481,"lifeTime":0.8,"x":1346.6174764157086,"y":1056.8699234259154,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":98.98285687602758,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.6148148148148,"lifeTime":1,"x":1346.6174764157086,"y":1056.8699234259154,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":98.98285687602758,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-1317.120797582605,"y":237.08599110484988,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":343.64157986801257,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-1317.120797582605,"y":237.08599110484988,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":343.64157986801257,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":3744.6050959960826,"y":1713.2295036993153,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":133.42150191226239,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":3744.6050959960826,"y":1713.2295036993153,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":133.42150191226239,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-166.68800408392462,"y":162.6899541608076,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":51.99283619663482,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-166.68800408392462,"y":162.6899541608076,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":51.99283619663482,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":278.7479796481342,"y":1696.6253465646444,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":286.23073650670227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":278.7479796481342,"y":1696.6253465646444,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":286.23073650670227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":677.3638210999773,"y":1279.1511895862097,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":290.49742838509354,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":677.3638210999773,"y":1279.1511895862097,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":290.49742838509354,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":262.50248154625723,"y":266.22558152375694,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":276.0820298078082,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":262.50248154625723,"y":266.22558152375694,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":276.0820298078082,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":-1634.4482274971426,"y":1873.378068511762,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":344.56102169923855,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":-1634.4482274971426,"y":1873.378068511762,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":344.56102169923855,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":1432.0577773985917,"y":718.5808729842341,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":110.69130060040997,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":1432.0577773985917,"y":718.5808729842341,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":110.69130060040997,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":1791.2353957845366,"y":1576.7201891576349,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":273.61703290211074,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":1791.2353957845366,"y":1576.7201891576349,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":273.61703290211074,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-2363.765974002539,"y":80.68681295440007,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":324.9967815278417,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-2363.765974002539,"y":80.68681295440007,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":324.9967815278417,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-590.9263024997867,"y":761.6522340920732,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":309.24720408084994,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-590.9263024997867,"y":761.6522340920732,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":309.24720408084994,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":-1566.3319789957911,"y":1306.7484134820133,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":342.92583959902277,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":-1566.3319789957911,"y":1306.7484134820133,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":342.92583959902277,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":3063.765173661116,"y":372.84344664654236,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":137.7963738201251,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":3063.765173661116,"y":372.84344664654236,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":137.7963738201251,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":3181.963323267074,"y":80.86022320703863,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":154.40637676117143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":3181.963323267074,"y":80.86022320703863,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":154.40637676117143,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":3484.305910659181,"y":1682.076257701666,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":144.22629372003726,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":3484.305910659181,"y":1682.076257701666,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":144.22629372003726,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":2728.4269019695485,"y":1605.4514494424511,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":152.15784086590418,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":2728.4269019695485,"y":1605.4514494424511,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":152.15784086590418,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":4251.283870460119,"y":1980.6740944956125,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":194.63665810370333,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":4251.283870460119,"y":1980.6740944956125,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":194.63665810370333,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":-1764.9238118370672,"y":1567.4522968588717,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":309.72364583653774,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":-1764.9238118370672,"y":1567.4522968588717,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":309.72364583653774,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-81.53974830400466,"y":756.9266619456675,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":76.47626371664016,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-81.53974830400466,"y":756.9266619456675,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":76.47626371664016,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":1721.5604772308227,"y":830.2372681580227,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":249.17766904623466,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":1721.5604772308227,"y":830.2372681580227,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":249.17766904623466,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3605.005762549182,"y":1237.6712184344242,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":209.20459823875905,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3605.005762549182,"y":1237.6712184344242,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":209.20459823875905,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":-1447.6391926390859,"y":1187.4843457821187,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":334.8310884604634,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":-1447.6391926390859,"y":1187.4843457821187,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":334.8310884604634,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":-1773.3843708078218,"y":544.3091573881595,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":328.29246079984404,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":-1773.3843708078218,"y":544.3091573881595,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":328.29246079984404,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.81481481481481,"lifeTime":0.8,"x":2237.7597359831025,"y":139.71224008021943,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":114.27664244682626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.6148148148148,"lifeTime":1,"x":2237.7597359831025,"y":139.71224008021943,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":114.27664244682626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":1390.0752743509347,"y":1217.1688141494333,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":250.98125491613183,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":1390.0752743509347,"y":1217.1688141494333,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":250.98125491613183,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":1850.6042012071352,"y":1083.420025379105,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":253.8576804302821,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":1850.6042012071352,"y":1083.420025379105,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":253.8576804302821,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3029.2914641195016,"y":257.1568950896122,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":197.14032529230897,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3029.2914641195016,"y":257.1568950896122,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":197.14032529230897,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":600.0750703105714,"y":1527.256298325725,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":63.367166796890956,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":600.0750703105714,"y":1527.256298325725,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":63.367166796890956,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":1919.2152069658819,"y":1573.2650645865006,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":255.51216172921153,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":1919.2152069658819,"y":1573.2650645865006,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":255.51216172921153,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":3252.78143960348,"y":1000.8805641353918,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":137.79200261321395,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":3252.78143960348,"y":1000.8805641353918,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":137.79200261321395,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":-742.1529308435832,"y":1516.8200417033217,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":59.94958413836121,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":-742.1529308435832,"y":1516.8200417033217,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":59.94958413836121,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":4125.188706718667,"y":583.2477260333901,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":141.38918479374692,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":4125.188706718667,"y":583.2477260333901,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":141.38918479374692,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":2465.6839045961997,"y":1450.3001116181952,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":230.44773077448232,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":2465.6839045961997,"y":1450.3001116181952,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":230.44773077448232,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":4199.359080057424,"y":275.4385041215829,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":141.02942078615385,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":4199.359080057424,"y":275.4385041215829,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":141.02942078615385,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":2861.7825477574593,"y":877.2713507599428,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":251.58580541212137,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":2861.7825477574593,"y":877.2713507599428,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":251.58580541212137,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":-1328.2405487955893,"y":803.552359928639,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":352.8791990243247,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":-1328.2405487955893,"y":803.552359928639,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":352.8791990243247,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":-1908.3600634737854,"y":883.0464217608815,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":313.1166014713073,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":-1908.3600634737854,"y":883.0464217608815,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":313.1166014713073,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":4318.287819675032,"y":849.6172004651044,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":163.359258992693,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":4318.287819675032,"y":849.6172004651044,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":163.359258992693,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":639.0878605816363,"y":47.61981595106309,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":64.69551763849503,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":639.0878605816363,"y":47.61981595106309,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":64.69551763849503,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":3123.8643520777196,"y":795.6580705582044,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":232.51324835642222,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":3123.8643520777196,"y":795.6580705582044,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":232.51324835642222,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":3180.030925762936,"y":181.03171188226997,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":120.71857254162686,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":3180.030925762936,"y":181.03171188226997,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":120.71857254162686,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":1908.1047244238216,"y":1613.0758361900785,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":271.45989221760095,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":1908.1047244238216,"y":1613.0758361900785,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":271.45989221760095,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":2794.4267028181903,"y":154.2100469198831,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":201.96804763132306,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":2794.4267028181903,"y":154.2100469198831,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":201.96804763132306,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":-2138.3472069376985,"y":461.8245484418682,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":5.688832570198237,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":-2138.3472069376985,"y":461.8245484418682,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":5.688832570198237,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":4711.008606225043,"y":1566.3133424636383,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":155.59011064823773,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":4711.008606225043,"y":1566.3133424636383,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":155.59011064823773,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":277.9697842035073,"y":1742.2999397390313,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":265.7180091785679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":277.9697842035073,"y":1742.2999397390313,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":265.7180091785679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":1769.5276690896774,"y":1664.08473337731,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":123.99764370821987,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":1769.5276690896774,"y":1664.08473337731,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":123.99764370821987,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":3518.8882961432428,"y":805.1200974715844,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":215.10455671157945,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":3518.8882961432428,"y":805.1200974715844,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":215.10455671157945,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":2112.830855564186,"y":1043.306338163727,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":239.0493846284778,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":2112.830855564186,"y":1043.306338163727,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":239.0493846284778,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":381.49184644442437,"y":1272.3497300610247,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":289.8654220981075,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":381.49184644442437,"y":1272.3497300610247,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":289.8654220981075,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":-1888.2549450407778,"y":1170.3209255879356,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":350.7526830051983,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":-1888.2549450407778,"y":1170.3209255879356,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":350.7526830051983,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":1670.781258698149,"y":1444.744777680664,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":86.65519647075622,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":1670.781258698149,"y":1444.744777680664,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":86.65519647075622,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":2632.44328510606,"y":1557.0565754477923,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":212.07700310265238,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":2632.44328510606,"y":1557.0565754477923,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":212.07700310265238,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":2104.026097301201,"y":1112.957682464994,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":234.51819477618608,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":2104.026097301201,"y":1112.957682464994,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":234.51819477618608,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":-898.0382600157377,"y":1524.2231749022665,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":288.78142932699626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":-898.0382600157377,"y":1524.2231749022665,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":288.78142932699626,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":-1963.6229508982562,"y":827.3424826737804,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":356.81890280426114,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":-1963.6229508982562,"y":827.3424826737804,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":356.81890280426114,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":-1189.7081402409685,"y":73.39695200389534,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":355.8185036398248,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":-1189.7081402409685,"y":73.39695200389534,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":355.8185036398248,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":-254.3430916744619,"y":39.433006012379934,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":300.7179216369149,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":-254.3430916744619,"y":39.433006012379934,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":300.7179216369149,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":1037.5822725524067,"y":231.6001795796793,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":103.41886689459488,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":1037.5822725524067,"y":231.6001795796793,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":103.41886689459488,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":1828.3057236540067,"y":1900.8675268800282,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":89.85496007572227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":1828.3057236540067,"y":1900.8675268800282,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":89.85496007572227,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":-218.19694864259282,"y":841.4571515008073,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":304.7767520742044,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":-218.19694864259282,"y":841.4571515008073,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":304.7767520742044,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.18518518518518,"lifeTime":0.8,"x":1451.8999346761266,"y":1819.8282933746223,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":253.64410873307762,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.98518518518517,"lifeTime":1,"x":1451.8999346761266,"y":1819.8282933746223,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":253.64410873307762,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-467.7463019245495,"y":1547.7646215275022,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":72.80106681108622,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-467.7463019245495,"y":1547.7646215275022,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":72.80106681108622,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":3189.629313856047,"y":717.2047144760132,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":148.06658076221703,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":3189.629313856047,"y":717.2047144760132,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":148.06658076221703,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-2462.6022989973235,"y":260.5282937843944,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":17.853174248776302,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-2462.6022989973235,"y":260.5282937843944,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":17.853174248776302,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":1036.2903118720392,"y":495.94972975849805,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":257.8656315834646,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":1036.2903118720392,"y":495.94972975849805,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":257.8656315834646,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":3769.4597178638724,"y":533.3321701265892,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":218.8269037528474,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":3769.4597178638724,"y":533.3321701265892,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":218.8269037528474,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":464.4838377725218,"y":1224.9691638851164,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":269.0885242900809,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":464.4838377725218,"y":1224.9691638851164,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":269.0885242900809,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-273.7840419683164,"y":1617.4405459457387,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":288.6881878294189,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-273.7840419683164,"y":1617.4405459457387,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":288.6881878294189,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-850.4628411300862,"y":1785.7738611175341,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":32.18029225136697,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-850.4628411300862,"y":1785.7738611175341,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":32.18029225136697,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":-2081.5569137171256,"y":789.613297851646,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":35.04966201595937,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":-2081.5569137171256,"y":789.613297851646,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":35.04966201595937,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.85185185185185,"lifeTime":0.8,"x":-1262.5489457873903,"y":-6.162466304151595,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":23.128052577119732,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.65185185185184,"lifeTime":1,"x":-1262.5489457873903,"y":-6.162466304151595,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":23.128052577119732,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":2312.1898549786747,"y":478.3842414133057,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":103.28186026225154,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":2312.1898549786747,"y":478.3842414133057,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":103.28186026225154,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":4738.81013523262,"y":890.5362321302562,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":158.58232413865565,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":4738.81013523262,"y":890.5362321302562,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":158.58232413865565,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.81481481481481,"lifeTime":0.8,"x":1369.8951571551704,"y":1589.0216106230869,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":275.4590396927614,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.6148148148148,"lifeTime":1,"x":1369.8951571551704,"y":1589.0216106230869,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":275.4590396927614,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":-2165.726111993033,"y":903.2990537313934,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":18.24923621298474,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":-2165.726111993033,"y":903.2990537313934,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":18.24923621298474,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":-1711.8723428744297,"y":604.386828101948,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":340.90804461304145,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":-1711.8723428744297,"y":604.386828101948,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":340.90804461304145,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":972.2318274415054,"y":1871.52451323049,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":256.5825808778267,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":972.2318274415054,"y":1871.52451323049,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":256.5825808778267,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":139.4969621286267,"y":156.7446594088069,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":89.0592179114097,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":139.4969621286267,"y":156.7446594088069,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":89.0592179114097,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-2666.6287196763096,"y":1847.853052229501,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":342.97471074050804,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-2666.6287196763096,"y":1847.853052229501,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":342.97471074050804,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":3593.677596955148,"y":1816.4688194355613,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":169.20738159683063,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":3593.677596955148,"y":1816.4688194355613,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":169.20738159683063,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":-1836.5878449505585,"y":1952.1697048114345,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":47.48169873076479,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":-1836.5878449505585,"y":1952.1697048114345,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":47.48169873076479,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110,"lifeTime":0.8,"x":2820.485712550081,"y":286.9310982831269,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":132.2420936495904,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.8,"lifeTime":1,"x":2820.485712550081,"y":286.9310982831269,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":132.2420936495904,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.92592592592592,"lifeTime":0.8,"x":-2006.7020510472767,"y":1426.7808139739202,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":340.2386931503418,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.72592592592592,"lifeTime":1,"x":-2006.7020510472767,"y":1426.7808139739202,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":340.2386931503418,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":1716.2383007217359,"y":969.3202136547958,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":268.297938272885,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":1716.2383007217359,"y":969.3202136547958,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":268.297938272885,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110,"lifeTime":0.8,"x":2873.332562933362,"y":1240.392952935276,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":140.98181995972652,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.8,"lifeTime":1,"x":2873.332562933362,"y":1240.392952935276,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":140.98181995972652,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.44444444444444,"lifeTime":0.8,"x":4.670735477801827,"y":901.6183321634461,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":67.4810652875072,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.24444444444444,"lifeTime":1,"x":4.670735477801827,"y":901.6183321634461,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":67.4810652875072,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":-1248.1361314071378,"y":1721.4985215009444,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":298.420390884909,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":-1248.1361314071378,"y":1721.4985215009444,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":298.420390884909,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3341.7952041296294,"y":1192.4711828997429,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":129.75928301206432,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3341.7952041296294,"y":1192.4711828997429,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":129.75928301206432,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-1589.710416919352,"y":726.1283945645223,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":339.3681132163503,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-1589.710416919352,"y":726.1283945645223,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":339.3681132163503,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":3569.045368315456,"y":1972.6314602640257,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":207.35437380735166,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":3569.045368315456,"y":1972.6314602640257,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":207.35437380735166,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":-1051.6214179479123,"y":479.3031143832943,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":41.21413311435679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":-1051.6214179479123,"y":479.3031143832943,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":41.21413311435679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.5925925925926,"lifeTime":0.8,"x":4109.965590189363,"y":1299.0938749332463,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":167.399723450732,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.39259259259259,"lifeTime":1,"x":4109.965590189363,"y":1299.0938749332463,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":167.399723450732,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.74074074074073,"lifeTime":0.8,"x":-1132.8946677045064,"y":941.8233653180578,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":0.10572570239974155,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.54074074074073,"lifeTime":1,"x":-1132.8946677045064,"y":941.8233653180578,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":0.10572570239974155,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":-1788.8240348018962,"y":1648.4998080480934,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":52.01558424802268,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":-1788.8240348018962,"y":1648.4998080480934,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":52.01558424802268,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.7037037037037,"lifeTime":0.8,"x":3291.256634013454,"y":1463.1108696125743,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":163.50617366841,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.50370370370369,"lifeTime":1,"x":3291.256634013454,"y":1463.1108696125743,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":163.50617366841,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.07407407407408,"lifeTime":0.8,"x":1079.312038659215,"y":1165.4756354140604,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":82.28163768407646,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.87407407407407,"lifeTime":1,"x":1079.312038659215,"y":1165.4756354140604,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":82.28163768407646,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.22222222222221,"lifeTime":0.8,"x":-1901.4838214329175,"y":177.3437083470945,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":358.80804324755775,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.02222222222221,"lifeTime":1,"x":-1901.4838214329175,"y":177.3437083470945,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":358.80804324755775,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110,"lifeTime":0.8,"x":2363.769451189322,"y":790.1598778512104,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":242.16303525685734,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.8,"lifeTime":1,"x":2363.769451189322,"y":790.1598778512104,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":242.16303525685734,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.96296296296296,"lifeTime":0.8,"x":1572.0657666205807,"y":972.9335906123122,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":242.2736733920978,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.76296296296296,"lifeTime":1,"x":1572.0657666205807,"y":972.9335906123122,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":242.2736733920978,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":1872.5780443110466,"y":1552.5701379928948,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":128.61855575033113,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":1872.5780443110466,"y":1552.5701379928948,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":128.61855575033113,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.81481481481481,"lifeTime":0.8,"x":-1596.238767784969,"y":1231.9803962825983,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":322.7500865603672,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.6148148148148,"lifeTime":1,"x":-1596.238767784969,"y":1231.9803962825983,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":322.7500865603672,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":115.55555555555554,"lifeTime":0.8,"x":2619.1927081977333,"y":580.4019214532557,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":136.28308662804938,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":116.35555555555554,"lifeTime":1,"x":2619.1927081977333,"y":580.4019214532557,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":136.28308662804938,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":3359.529869132508,"y":1741.5926621663693,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":166.0688881701679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":3359.529869132508,"y":1741.5926621663693,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":166.0688881701679,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":4303.036518371238,"y":1392.9396430570637,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":196.8388461531939,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":4303.036518371238,"y":1392.9396430570637,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":196.8388461531939,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.48148148148148,"lifeTime":0.8,"x":4289.821137094211,"y":260.431538762449,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":174.0604729843468,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":112.28148148148148,"lifeTime":1,"x":4289.821137094211,"y":260.431538762449,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":174.0604729843468,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":110.37037037037037,"lifeTime":0.8,"x":-2591.9439255324833,"y":40.68376979494235,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":346.93651968018645,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.17037037037036,"lifeTime":1,"x":-2591.9439255324833,"y":40.68376979494235,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":346.93651968018645,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":113.33333333333333,"lifeTime":0.8,"x":3900.664705163913,"y":1084.543168006433,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":193.70438524040847,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":114.13333333333333,"lifeTime":1,"x":3900.664705163913,"y":1084.543168006433,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":193.70438524040847,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.11111111111111,"lifeTime":0.8,"x":3413.321997777713,"y":1775.1292274638345,"w":6000,"h":50,"type":3,"vx":0,"vy":0,"warning":true,"initialRotation":231.69309899124005,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},{"time":111.91111111111111,"lifeTime":1,"x":3413.321997777713,"y":1775.1292274638345,"w":6000,"h":50,"type":1,"vx":0,"vy":0,"initialRotation":231.69309899124005,"rotateSpeed":0,"boundPlayer":true,"simulate":[1,3]},
{"time":106.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":18.2212373908208,"spawn":[1000,1000]},{"time":106.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":17.59291886010284,"spawn":[1000,1000]},{"time":106.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":16.964600329384883,"spawn":[1000,1000]},{"time":106.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":16.336281798666924,"spawn":[1000,1000]},{"time":106.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":15.707963267948966,"spawn":[1000,1000]},{"time":106.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":15.079644737231007,"spawn":[1000,1000]},{"time":106.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":14.451326206513047,"spawn":[1000,1000]},{"time":106.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":13.823007675795091,"spawn":[1000,1000]},{"time":106.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":13.194689145077131,"spawn":[1000,1000]},{"time":106,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":12.566370614359172,"spawn":[1000,1000]},{"time":105.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":11.938052083641214,"spawn":[1000,1000]},{"time":105.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":11.309733552923255,"spawn":[1000,1000]},{"time":105.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":10.681415022205297,"spawn":[1000,1000]},{"time":105.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":10.053096491487338,"spawn":[1000,1000]},{"time":105.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":9.42477796076938,"spawn":[1000,1000]},{"time":105.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":8.79645943005142,"spawn":[1000,1000]},{"time":105.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":8.168140899333462,"spawn":[1000,1000]},{"time":105.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":7.5398223686155035,"spawn":[1000,1000]},{"time":105.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":6.911503837897546,"spawn":[1000,1000]},{"time":105,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":6.283185307179586,"spawn":[1000,1000]},{"time":104.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":5.654866776461628,"spawn":[1000,1000]},{"time":104.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":5.026548245743669,"spawn":[1000,1000]},{"time":104.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":4.39822971502571,"spawn":[1000,1000]},{"time":104.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":3.7699111843077517,"spawn":[1000,1000]},{"time":104.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":3.141592653589793,"spawn":[1000,1000]},{"time":104.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":2.5132741228718345,"spawn":[1000,1000]},{"time":104.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":1.8849555921538759,"spawn":[1000,1000]},{"time":104.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":1.2566370614359172,"spawn":[1000,1000]},{"time":104.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":0.6283185307179586,"spawn":[1000,1000]},{"time":104,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":4,"speed":8,"spreadAngles":true,"baseAngle":0,"spawn":[1000,1000]},
{"time":102.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":17.05436011948745,"spawn":[1000,1000]},{"time":102.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":16.156762218461793,"spawn":[1000,1000]},{"time":102.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":15.259164317436136,"spawn":[1000,1000]},{"time":102.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":14.361566416410483,"spawn":[1000,1000]},{"time":102.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":13.463968515384828,"spawn":[1000,1000]},{"time":102.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":12.566370614359172,"spawn":[1000,1000]},{"time":102.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":11.668772713333517,"spawn":[1000,1000]},{"time":102.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":10.771174812307862,"spawn":[1000,1000]},{"time":102.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":9.873576911282207,"spawn":[1000,1000]},{"time":102,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":8.975979010256552,"spawn":[1000,1000]},{"time":101.9,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":8.078381109230897,"spawn":[1000,1000]},{"time":101.8,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":7.180783208205241,"spawn":[1000,1000]},{"time":101.7,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":6.283185307179586,"spawn":[1000,1000]},{"time":101.6,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":5.385587406153931,"spawn":[1000,1000]},{"time":101.5,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":4.487989505128276,"spawn":[1000,1000]},{"time":101.4,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":3.5903916041026207,"spawn":[1000,1000]},{"time":101.3,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":2.6927937030769655,"spawn":[1000,1000]},{"time":101.2,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":1.7951958020513104,"spawn":[1000,1000]},{"time":101.1,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0.8975979010256552,"spawn":[1000,1000]},{"time":101,"lifeTime":-1,"enemy":true,"type":"normal","count":1,"radius":6,"speed":6,"spreadAngles":true,"baseAngle":0,"spawn":[1000,1000]},

{
	"time": 118,
	"lifeTime": 0.5,
	"x": 1000,
	"y": 1000,
	"r": 2000,
	"type": 12,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		"tpx": 50,
		"tpy": 7050,
		cr: (e) => {},
	}
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 0,
	"y": 0,
	"w": 2000,
	"h": 2000,
	"type": 15,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		"axisSpeedMultX": 0,
		"axisSpeedMultY": 1,
	}
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 0,
	"y": 0,
	"w": 2000,
	"h": 2000,
	"type": 14,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		platformerForce: 3.6,
		platformerAngle: 90,
		platformerAngleRotateSpeed: 0,
		platformerFriction: 0.875,
		maxJumpCooldown: 30,
		jumpForce: 55,
		jumpDecay: 0.95,
		cr: (o)=>{},
	}
},

{
	"time": 120,
	"lifeTime": 4,
	"x": 0,
	"y": 0,
	"w": 2000,
	"h": 2000,
	"type": 13,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
	"extraParams": {
		conveyorAngle: 0,
		conveyorForce: 3,
		conveyorAngleRotateSpeed: 0,
		conveyorFriction: 0.8,
		cr: (o)=>{}
	}
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 0,
	"y": 1600,
	"w": 1500,
	"h": 400,
	"type": 0,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 1950,
	"y": 0,
	"w": 50,
	"h": 2000,
	"type": 6,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 1250,
	"y": 1550,
	"points": [[-50, 50], [0, -40], [50, 50]],
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 1350,
	"y": 1550,
	"points": [[-50, 50], [0, -40], [50, 50]],
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},
{
	"time": 118,
	"lifeTime": 4,
	"x": 1450,
	"y": 1550,
	"points": [[-50, 50], [0, -40], [50, 50]],
	"type": 1,
	"vx": 0,
	"vy": 0,
	"simulate": [3],
},

//VIGNETTES
	{
		"time": 0.1,
		"lifeTime": 9,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 0,
			innerB: 0,
			innerSize: 0,
			outerR: 0,
			outerG: 0,
			outerB: 0,
			outerSize: 0.4,
			innerOpacity: 0.3,
			outerOpacity: 1
		}
	},
	{
		"time": 9,
		"lifeTime": 3,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 10,
			innerG: 0,
			innerB: 0,
			innerSize: 0,
			outerR: 0,
			outerG: 0,
			outerB: 0,
			outerSize: 0.2,
			innerOpacity: 0.7,
			outerOpacity: 1
		}
	},
	{
		"time": 12,
		"lifeTime": 11,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 0,
			innerB: 0,
			innerSize: 0.6,
			outerR: 0,
			outerG: 0,
			outerB: 0,
			outerSize: 0.8,
			innerOpacity: 0,
			outerOpacity: 0.5
		}
	},
	{
		"time": 23,
		"lifeTime": 0.1,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 255,
			innerG: 0,
			innerB: 0,
			innerSize: 0,
			outerR: 255,
			outerG: 0,
			outerB: 0,
			outerSize: 0.4,
			innerOpacity: 0.7,
			outerOpacity: 1
		}
	},
	{
		"time": 23.1,
		"lifeTime": 9.9,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 0,
			innerB: 0,
			innerSize: 0.6,
			outerR: 0,
			outerG: 0,
			outerB: 0,
			outerSize: 0.8,
			innerOpacity: 0,
			outerOpacity: 0.5
		}
	},
	{
		"time": 33,
		"lifeTime": 2.85,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 50,
			innerB: 50,
			innerSize: 0.4,
			outerR: 0,
			outerG: 50,
			outerB: 50,
			outerSize: 0.6,
			innerOpacity: 0.2,
			outerOpacity: 0.4
		}
	},
	{
		"time": 35.85,
		"lifeTime": 2.85,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 50,
			innerB: 50,
			innerSize: 0.4,
			outerR: 0,
			outerG: 50,
			outerB: 50,
			outerSize: 0.6,
			innerOpacity: 0.3,
			outerOpacity: 0.6
		}
	},
	{
		"time": 38.7,
		"lifeTime": 2.95,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 50,
			innerB: 50,
			innerSize: 0.4,
			outerR: 0,
			outerG: 50,
			outerB: 50,
			outerSize: 0.6,
			innerOpacity: 0.4,
			outerOpacity: 0.8
		}
	},
	{
		"time": 41.65,
		"lifeTime": 5.35,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 0,
			innerG: 50,
			innerB: 50,
			innerSize: 0.4,
			outerR: 0,
			outerG: 50,
			outerB: 50,
			outerSize: 0.6,
			innerOpacity: 0.5,
			outerOpacity: 1
		}
	},
	
	{
		"time": 47,
		"lifeTime": 12,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 50,
			innerG: 0,
			innerB: 50,
			innerSize: 0.4,
			outerR: 50,
			outerG: 0,
			outerB: 50,
			outerSize: 0.6,
			innerOpacity: 0.6,
			outerOpacity: 1
		}
	},
	{
		"time": 59,
		"lifeTime": 12.4,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 30,
			innerG: 30,
			innerB: 0,
			innerSize: 0.4,
			outerR: 30,
			outerG: 30,
			outerB: 60,
			outerSize: 0.6,
			innerOpacity: 0.3,
			outerOpacity: 0.6
		}
	},
	{
		"time": 83.8,
		"lifeTime": 2.2,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 24,
		"vx": 0,
		"vy": 0,
		"simulate": [3],
		"extraParams": {
			innerR: 240,
			innerG: 0,
			innerB: 0,
			innerSize: 0.2,
			outerR: 240,
			outerG: 0,
			outerB: 0,
			outerSize: 0.5,
			innerOpacity: 0.3,
			outerOpacity: 0.9
		}
	},
	{
		"time": 86,
		"lifeTime": 32,
		"x": 1000,
		"y": 1000,
		"r": 2000,
		"type": 3,
		"vx": 0,
		"vy": 0,
		"customVignette": true,
		"simulate": [3],
	},
	

	//VIGNETETE

	/*
	C(1, [], [24], {
	x: 0,
	y: 1800,
	w: 1111111,
	h: 18000,
	innerR: 0,
	innerG: 0,
	innerB: 0,
	innerSize: 0.1,
	outerR: 0,
	outerG: 0,
	outerB: 0,
	outerSize: 0.6,
	innerOpacity: 0.2,
	outerOpacity: 1
})
	*/


];


var bossTime = 0;

function spawnObs(data){
	if (data.customVignette){
		//Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2)

		let obj = {};
		let goalObj = {};

		goalObj.x = data.x + bossFightPos.x;
		goalObj.y = data.y + bossFightPos.y;

		//Storage
		obj.x = 10000;
		obj.y = 10000;

		let shape = 1;
		obj.w = data.w;
		obj.h = data.h;

		let spawned = false;

		obj.cr = (e) => {};

		obj.sf = (e) => {
			if (!spawned && bossTime > data.time && bossTime <= data.time + data.lifeTime){
				e.pos.x += (goalObj.x - obj.x);
				e.pos.y += (goalObj.y - obj.y);
				if (goalObj.pivotX){
					e.pivotX = goalObj.pivotX;
				}
				if (goalObj.pivotY){
					e.pivotY = goalObj.pivotY;
				}
				spawned = true;
			}
			if (spawned){
				if (bossTime > data.time + data.lifeTime || bossTime == 0){
					//Reset obs
					e.pos.x = obj.x;
					e.pos.y = obj.y;
					if (obj.pivotX){
						e.pivotX = obj.pivotX;
						e.pivotY = obj.pivotY;
					}
					spawned = false;
				}

				window.colors.vignette.inner.r = 250;
				window.colors.vignette.inner.g = 0;
				window.colors.vignette.inner.b = 0;
				window.colors.vignette.outer.r = 250;
				window.colors.vignette.outer.g = 0;
				window.colors.vignette.outer.b = 0;
				window.colors.vignette.inner.size = 0;
				window.colors.vignette.outer.size = 1;
				
				window.colors.vignette.outer.opacity = Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2 + 1.6) * 0.12 + 0.6;
				window.colors.vignette.inner.size = Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2 + 1.6) * 0.15 + 0.3;
				window.colors.vignette.inner.opacity = Math.cos(bossTime * 1/0.37037037037 * Math.PI * 2 + 1.6) * 0.12 + 0.2;
				
			}

		}

		C(shape, data.simulate, [data.type], obj)
	}
	else if (data.enemy){

		let baseAngle = 0;
		if (data.spreadAngles){
			if (!data.baseAngle){
				baseAngle = Math.random() * Math.PI * 2;
			}
		}
		for(let i = 0; i<data.count; i++){
			let shape = 0;
			let simulate = [3];

			let obj = {
				x: 10000,
				y: 10000,
				r: data.radius * 100/16,
			}

			let spawned = false;

			obj.cr = (o) => {
				if (data.type == "normal"){
					ctx.fillStyle = "#939393";
				}
				else if (data.type == "homing"){
					ctx.fillStyle = "#a67732";
				}
				ctx.strokeStyle = "#000000";
				ctx.beginPath();
				ctx.arc(o.pos.x, o.pos.y, o.dimensions.x / 2, 0, Math.PI * 2)
				ctx.fill();
				ctx.stroke();
				ctx.closePath();
			}
			obj.sf = (e) => {
				if (!spawned && bossTime > data.time && bossTime <= data.time + data.lifeTime + 10){

					
					let angle = Math.random() * Math.PI * 2;
					let spawnAngle = Math.random() * Math.PI * 2;

					if (data.spreadAngles){
						if (data.baseAngle){
							angle = data.baseAngle + i/data.count * Math.PI * 2;
							spawnAngle = angle
						}
						else{
							angle = baseAngle + i/data.count * Math.PI * 2;
							spawnAngle = angle
						}
					}
				

					if (data.spawn){
						e.pos.x = data.spawn[0] + bossFightPos.x;
						e.pos.y = data.spawn[1] + bossFightPos.y;
					}
					else{
						e.pos.x = -Math.cos(spawnAngle) * (1200 + obj.r) + bossFightPos.x + 1000;
						e.pos.y = -Math.sin(spawnAngle) * (1200 + obj.r) + bossFightPos.y + 1000;
					}
					e.vx = Math.cos(angle) * data.speed / 10;
					e.vy = Math.sin(angle) * data.speed / 10;
					
					spawned = true;
				}
				if (spawned){
					if (data.type == "normal"){
						e.pos.x += dt * e.vx;
						e.pos.y += dt * e.vy;
					}
					else if (data.type == "homing"){
						
						let dist = Math.hypot(e.pos.y - players[selfId].pos.y, e.pos.x - players[selfId].pos.x);

						if (dist < 200 * 100/18 && bossTime < data.time + data.lifeTime){
							let targetAngle = (Math.atan2(e.pos.y - players[selfId].pos.y, e.pos.x - players[selfId].pos.x) + Math.PI) % (Math.PI * 2);
							let angleDiff = shortAngleDist(e.angle, targetAngle);

							if (angleDiff > 0.01) {
								e.angle += 0.001515 * dt;
								e.vx = Math.cos(e.angle) * data.speed / 10;
								e.vy = Math.sin(e.angle) * data.speed / 10;
							} else if (angleDiff < -0.01) {
								e.angle -= 0.001515 * dt;
								e.vx = Math.cos(e.angle) * data.speed / 10;
								e.vy = Math.sin(e.angle) * data.speed / 10;
							}
						}

							e.pos.x += dt * e.vx;
							e.pos.y += dt * e.vy;
					}

					if (bossTime <= data.time + data.lifeTime){
						if (e.pos.x > bossFightPos.x + 2000 + e.sat.r/2){
							e.pos.x = bossFightPos.x + 2000 + e.sat.r/2;
							e.vx *= -1;
							e.angle = Math.atan2(e.vy, e.vx);
						}
						if (e.pos.x < bossFightPos.x - e.sat.r/2){
							e.pos.x = bossFightPos.x - e.sat.r/2;
							e.vx *= -1;
							e.angle = Math.atan2(e.vy, e.vx);
						}
						if (e.pos.y > bossFightPos.y + 2000 + e.sat.r/2){
							e.pos.y = bossFightPos.y + 2000 + e.sat.r/2;
							e.vy *= -1;
							e.angle = Math.atan2(e.vy, e.vx);
						}
						if (e.pos.y < bossFightPos.y - e.sat.r/2){
							e.pos.y = bossFightPos.y - e.sat.r/2;
							e.vy *= -1;
							e.angle = Math.atan2(e.vy, e.vx);
						}
					}
				}

				if (bossTime == 0){
					spawned = false;
					e.pos.x = 10000;
					e.pos.y = 10000;
				}
			}
			C(shape, simulate, [1], obj)
		}
	}
	else{
		let obj = {};
		let goalObj = {};

		goalObj.x = data.x + bossFightPos.x;
		goalObj.y = data.y + bossFightPos.y;

		//Storage
		obj.x = 10000;
		obj.y = 10000;

		let shape;
		if (data.r){
			shape = 0; //circle
			obj.r = data.r;
		}
		else if (data.w){
			shape = 1;
			obj.w = data.w;
			obj.h = data.h;
		}
		else if (data.points){
			shape = 2;
			obj.points = data.points;
		}


		if (data.extraParams){
			for(let i of Object.keys(data.extraParams)){
				obj[i] = data.extraParams[i];
				if (i == "path"){
					for(let j of obj[i]){
						j[0] += bossFightPos.x;
						j[1] += bossFightPos.y;
					}
				}
			}
		}

		if (data.simulate[0] == 1){
			/*
					initialRotation: 0,
			rotateSpeed: 0.1,
			pivotX: 11000 + 200/2,
			pivotY: 400 + 50/2,
			boundPlayer: true
			*/
			obj.initialRotation = data.initialRotation * (Math.PI/180);
			obj.rotateSpeed = data.rotateSpeed * 18.18;
			obj.boundPlayer = data.boundPlayer;
			if (data.pivotX){
				goalObj.pivotX = data.pivotX + bossFightPos.x;
			}
			else{
				if (obj.w){
					goalObj.pivotX = goalObj.x + obj.w/2;
				}
				else{
					goalObj.pivotX = goalObj.x;
				}
			}
			if (data.pivotY){
				goalObj.pivotY = data.pivotY + bossFightPos.y;
			}
			else{
				if (obj.h){
					goalObj.pivotY = goalObj.y + obj.h/2;
				}
				else{
					goalObj.pivotY = goalObj.y;
				}
			}
			
			obj.pivotX = goalObj.pivotX + (10000 - goalObj.x);
			obj.pivotY = goalObj.pivotY + (10000 - goalObj.y);
		}

		obj.vx = data.vx;
		obj.vy = data.vy;

		let spawned = false;

		obj.warning = data.warning;
		if (obj.warning){
			if (obj.pivotX){
				obj.cr = (e) => {
					ctx.globalAlpha = (bossTime - data.time)/data.lifeTime;
					ctx.fillStyle = "orange";
					ctx.translate(e.pos.x, e.pos.y);
					ctx.beginPath();
					for(let i of e.sat.points){
						ctx.lineTo(i.x, i.y);
					}
					ctx.fill()
					ctx.translate(-e.pos.x, -e.pos.y);
					ctx.globalAlpha = 1;
				}
			}
			else{
				obj.cr = (e) => {
					ctx.globalAlpha = (bossTime - data.time)/data.lifeTime;
					ctx.fillStyle = "orange";
					ctx.fillRect(e.pos.x, e.pos.y, e.dimensions.x, e.dimensions.y);
					ctx.globalAlpha = 1;
				}
			}
		}
		obj.sf = (e) => {
			if (shape == 2 && !spawned && bossTime < data.time){
				e.pos.x = 10000;
				e.pos.y = 10000;
				obj.x = 10000;
				obj.y = 10000;
			}
			if (!spawned && bossTime > data.time && bossTime <= data.time + data.lifeTime){
				e.pos.x += (goalObj.x - obj.x);
				e.pos.y += (goalObj.y - obj.y);
				if (goalObj.pivotX){
					e.pivotX = goalObj.pivotX;
				}
				if (goalObj.pivotY){
					e.pivotY = goalObj.pivotY;
				}
				spawned = true;
			}
			if (spawned){
				e.pos.x += dt * obj.vx;
				e.pos.y += dt * obj.vy;

				if (obj.pivotX){
					e.pivotX += dt * obj.vx;
					e.pivotY += dt * obj.vy;
				}
				
				if (bossTime > data.time + data.lifeTime || bossTime == 0){
					//Reset obs
					e.pos.x = obj.x;
					e.pos.y = obj.y;
					if (obj.pivotX){
						e.pivotX = obj.pivotX;
						e.pivotY = obj.pivotY;
					}
					spawned = false;
				}
			}

		}

		C(shape, data.simulate, [data.type], obj)
	}
}

for(let i of bossSpawns){
	spawnObs(i);
}

//Manager
C(1, [3], [3], {
	x: 0,
	y: 5500,
	w: 2000,
	h: 2000,
	cr: (o) => {
		if (players[selfId].dead){
			ctx.globalAlpha = o.timeDead / 120;
			ctx.fillStyle = "#333333";
			ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
			ctx.globalAlpha = 1;
		}
	},
	sf: (e) => {
		if (e.timeDead > 120){
			players[selfId].pos.x = 540250;
			players[selfId].pos.y = 750;
			players[selfId].dead = false;
			players[selfId].renderRadius = 0;
		}
		
		if (players[selfId].dead){
			e.timeDead ++;
		}
		else{
			e.timeDead = 0;
		}

		if (players[selfId].pos.y > 2500){
			bossTime = audio.currentTime;
		}
		else{
			bossTime = 0;
			audio.pause();
			audio.currentTime = 0;
		}
	},
	ef: (e, res, o) => {
	},
})




C(1, [], [0], {
	x: bossFightPos.x - 3000,
	y: bossFightPos.y - 3000,
	w: 9000,
	h: 3000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})
C(1, [], [0], {
	x: bossFightPos.x - 3000,
	y: bossFightPos.y + 2000,
	w: 9000,
	h: 3000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})
C(1, [], [0], {
	x: bossFightPos.x - 3000,
	y: bossFightPos.y - 3000,
	w: 3000,
	h: 9000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})
C(1, [], [0], {
	x: bossFightPos.x + 2000,
	y: bossFightPos.y - 3000,
	w: 3000,
	h: 9000,
	cr: (o) => {
		ctx.fillStyle = "#333333";
		ctx.fillRect(o.pos.x, o.pos.y, o.dimensions.x, o.dimensions.y);
	}
})



//Zone obstacles and checkpoints
C(1, [], [9], {
	x: 180250,
	y: 50,
	w: 700,
	h: 1400
});
C(1, [], [9], {
	x: 360250,
	y: 50,
	w: 700,
	h: 1400
});


// Evades 1 - Evades X that plays at the beginning
{
	function smootherStep(t){
		return t * t * t * (t * (t * 6. - 15.) + 10.);
	}

	function interpolateBetween(startPos, endPos, startT, endT){
		if(t < startT) return startPos;
		else if(t > endT) return endPos;
	
		const ratio = (t - startT) / (endT - startT);
	
		return interpolate(startPos, endPos, smootherStep(ratio));
	}

	const interpolate = (s,e,t) => {return (1-t) * s + t * e;}

	let textYOff = 0;
	const ts = {
		"wait3": 1070 - 1170,
		"e2in": 1370 - 1170,
		"wait4": 1380 - 1170,
		"e3e4in": 1480 - 1170,
		"wait5": 1490 - 1170,
		"eXin": 1590 - 1170,
		"end": 1640 - 1170
	}

	C(1, [], [26], {
		x: 0,
		y: 0,
		w: 174800,
		h: 1500,
		musicPath: 'https://www.youtube.com/watch?v=SsYCPtOaTKw'
	});
	const unveilObs = obstacles[obstacles.length-1];

	let t = -60;
	let w = canvas.width;
	let h = canvas.height;
	let ended = false;
	C(0,[],[3],{x:-1E9,y:0,r:1,cr:()=>{
		if(t > ts.end) {
			if(ended === false){
				unveilObs.pos.x = -1E9;
				ended = true;
				C(1, [], [26], {
					x: 0,
					y: 0,
					w: 174800,
					h: 1500,
					musicPath: 'https://www.youtube.com/watch?v=lgq0OdRIEao'
				});
			}
			return;
		}
		w = canvas.width;
		h = canvas.height;
		const transform = ctx.getTransform();
		ctx.setTransform(1,0,0,1,0,0);
		// ctx.translate(camera.x-canvas.w/2, camera.y-canvas.h/2);
		ctx.fillStyle = 'black';
		ctx.fillRect(0,0,w,h);
		if(t > ts.wait5){
			textYOff = interpolateBetween(5/2*h, 8*h+h/2, ts.wait5, ts.eXin);
		}
		else if(t > ts.wait4){
			textYOff = interpolateBetween(h/2, 5/2*h, ts.wait4, ts.e3e4in);
		}
		else if(t > ts.wait3){
			textYOff = interpolateBetween(-h/2, h/2, ts.wait3, ts.e2in);
		}

		for(let i = 1; i <= 10; i++){
			let localOffset = -(i-2)*h;
			ctx.fillStyle = 'white';
			ctx.font = `${180}px Inter`;
			ctx.textAlign = 'center';
			ctx.textBaseline = 'middle';

			const y = textYOff + localOffset;

			ctx.globalAlpha = smootherStep(1 - Math.min(1,Math.abs(y - h / 2) / (h/2)));
			if(i === 10) {ctx.shadowColor = 'white'; ctx.shadowBlur = 22;}
			ctx.fillText(`Evades ${i===10?'X':i}`, w/2, y);
			ctx.globalAlpha = 1;
		}
		ctx.shadowBlur = 0;

		// ctx.translate(-camera.x+canvas.w/2, -camera.y+canvas.h/2);
		t++;
		ctx.setTransform(transform);

		for(let i = 0; i < window.players.length; i++){
			if(window.players[i] === undefined) continue;
			window.players[i].renderRadius = 0;
		}
	}})
}
