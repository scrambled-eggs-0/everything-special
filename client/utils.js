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

const isEditor = typeof location === 'undefined' ? false : (location.origin.endsWith('8080') || location.href.endsWith('editor'));

const memoizedColors = {};

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

window.jewelBoxUrl = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg';
window.decorationImgs = {};
if(typeof Image !== 'undefined'){
	window.arrowImg = new Image();
	window.starImg = new Image();
	if(isEditor === true){
		// editor
		(async() => {
			const exps = await import('./assets.js');
			window.arrowImg = exps.default.arrowImg;
			window.starImg = exps.default.starImg;
		})();
	} else {
		// client
		window.arrowImg.src = './gfx/arrow.png';
		window.starImg.src = window.jewelBoxUrl;
	}
} else {
	// server
	window.arrowImg = window.starImg = {};
}

export default { until, SCROLL_PARAMS, isEditor, blendColor };