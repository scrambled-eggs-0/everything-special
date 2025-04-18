import shared from '../shared/shared.js';
const until = (condition, checkInterval=400) => {
    if(!!condition()) return true;
    return new Promise(resolve => {
        let interval = setInterval(() => {
            if (!condition()) return;
            clearInterval(interval);
            resolve();
        }, checkInterval)
    })
}

const SCROLL_PARAMS = Object.freeze({
    sensitivity: 10 * 1300,
    minAvgSpeed: 0.5 * 1300,
    maxScrollTime: 150,
    edgeMargin: 117 // out of 900
});

const environment = shared.environment = typeof location === 'undefined' ? 'server' : ((location.origin.endsWith('8080') || location.href.endsWith('editor')) ? 'editor' : 'client');
const isProd = shared.isProd = typeof location === 'undefined' ? true : location.origin.startsWith('http://localhost') ? false : true; 

if(isProd === false){
    window.s = {};
    setInterval(() => {
        for(let key in shared){ window.s[key] = shared[key]; }
    }, 1000)
}

const memoizedColors = {};

shared.blendColor = blendColor;
function blendColor(color1, color2, t) {
	const memoizedIndex = color1 + '_' + color2 + '_' + t;
	if (memoizedColors[memoizedIndex] !== undefined) {
		return memoizedColors[memoizedIndex];
	}
	const rgb1 = {
		r: parseInt(color1.slice(1, 3), 16),
		g: parseInt(color1.slice(3, 5), 16),
		b: parseInt(color1.slice(5, 7), 16)
	}
	const rgb2 = {
		r: parseInt(color2.slice(1, 3), 16),
		g: parseInt(color2.slice(3, 5), 16),
		b: parseInt(color2.slice(5, 7), 16)
	}

	const result = rgbToHex(Math.floor(rgb1.r * (1 - t) + rgb2.r * t), Math.floor(rgb1.g * (1 - t) + rgb2.g * t), Math.floor(rgb1.b * (1 - t) + rgb2.b * t))
	memoizedColors[memoizedIndex] = result;
	return result;
}

function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

// function shortAngleDist(a0,a1) {
// 	const max = Math.PI*2;
// 	const da = (a1 - a0) % max;
// 	return 2*da % max - da;
// }

const mapsBeatenStr = environment === 'server' ? null : localStorage.getItem('mapsBeaten');
shared.mapsBeaten = {};
if(mapsBeatenStr !== null){
    const split = mapsBeatenStr.split('|');
    for(let i = 0; i < split.length; i++){
        shared.mapsBeaten[split[i]] = true;
    }
}

shared.decorationImgs = {};
if(typeof Image !== 'undefined'){
	shared.arrowImg = new Image();
	shared.starImg = new Image();
	shared.starImg.crossOrigin = "Anonymous";
	if(environment === 'editor'){
		// editor
		(async() => {
			const exps = await import('./assets.js');
			shared.arrowImg = exps.default.arrowImg;
			shared.starImg = exps.default.starImg;
		})();
	} else {
		// client
		shared.arrowImg.src = './gfx/arrow.png';
		shared.starImg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg';
	}
} else {
	// server
	shared.arrowImg = shared.starImg = {};
}

window.colourRgb = (r,g,b) => {
	r = Math.max(Math.min(Number(r), 100), 0) * 2.55;
	g = Math.max(Math.min(Number(g), 100), 0) * 2.55;
	b = Math.max(Math.min(Number(b), 100), 0) * 2.55;
	r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);
	g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);
	b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);
	return '#' + r + g + b;
}

if(environment === 'server') global.colourRgb = window.colourRgb;

window.md = (a) => {return (a !== a || a === undefined || a === null) ? 0 : a;}; // make defined
window.makeNumber = (a) => {return Number.isFinite(a) === true ? a : 0;};
window.makeNotNaN = (a) => {return (a === a) ? a : 0;};
window.makeNotNull = (a) => {return a === null ? 0 : a};
window.makeNotUndefined = (a) => {return a === undefined ? 0 : a};
window.rlt = (a) => {shared.loopTrap = 1000; return a;};// reset loop trap
window.makeType = (a,typeArr) => {
	if(typeArr.includes(shared.generateConnectionType(a)) === true)return a;
	return defaultTypeMap[typeof a];
}
shared.generateConnectionType = (val) => {
	const type = typeof val;
	if(type === 'number') return 'Number';
	if(type === 'string') {
	  // if(val[0] === '#') return 'Colour';
	  return ['String', 'Colour'];
	}
	if(type === 'boolean') return 'Boolean';
	if(Array.isArray(val) === true) return 'Array';
	return null;
}
const defaultTypeMap = {undefined: 0, string: '', boolean: true/*glass is half full*/, number: 0, object: []/*exclusively used for blockly, where arrays are the only object*/};

const encoder = new TextEncoder();
function encodeAtPosition(string, u8array, position) {
	return encoder.encodeInto(
		string,
		position ? u8array.subarray(position | 0) : u8array,
	);
}
const decoder = new TextDecoder();
function decodeText(u8array, startPos=0, endPos=Infinity){
	return decoder.decode(u8array).slice(startPos, endPos);
}


function genBannedWordsRegex(...args) {
  let parsed = [];
  args.forEach(e => {
    parsed.push("(\\S*" +
      e.replace(/[aа]/gmi, "[aа4]")
      .replace(/[cс]/gmi, "[cс]")
      .replace(/[eеё]/gmi, "[eеё3]")
      .replace(/[oо]/gmi, "[oо0]")
      .replace(/[pр]/gmi, "[pр]")
      .replace(/[tт]/gmi, "[tт]")
      .replace(/[yу]/gmi, "[yу]")
      .replace(/[hн]/gmi, "[hн]")
      .replace(/[kк]/gmi, "[kк]")
      .replace(/[xх]/gmi, "[xх]")
      .replace(/[bв]/gmi, "[bв]")
      .replace(/[nп]/gmi, "[nп]")
      .replace(/[mм]/gmi, "[mм]")
      .replace(/[i1]/gmi, "[i1]")
      .replace(/[ _\-]/gmi, "[ _\\-]") +
      "\\S*)");
  });
  return new RegExp(parsed.join("|"), "gmi"); 
}
let bannedWordsRegex = genBannedWordsRegex("nigger", "nigga", "chink", "ching chong", "onrender", "trash version", "evades.", "zerotix", "zero tix", "zero", "0tix", "cunt", "asshole", "porn", "hentai", "slut", "whore", "faggot", "on render", "fake evades", "real evades")

function filterText(text){
	return text.replace(bannedWordsRegex, "[https://evadesx.io/]");
}

function stringHTMLSafe(str) {
	return str.replace(/&/g, '&amp;')
		.replace(/ /g, '&nbsp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;');
}

export default { until, SCROLL_PARAMS, blendColor, environment, encodeAtPosition, decodeText, stringHTMLSafe, filterText };