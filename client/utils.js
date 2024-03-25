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
	const memoizedIndex = color1 + '_' + color2 + '_' + t
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

// import ArrowAsset from './arrow.png';
// const arrowImg = new Image();
// // window.requestIdleCallback(() => {
//     arrowImg.src = ArrowAsset;
// // }, {timeout: 2000})

// arrowImg.onload = () => {
// 	const c = document.createElement('canvas');
// 	const x = c.getContext('2d');
// 	c.width = arrowImg.width;
// 	c.height = arrowImg.height;
// 	x.drawImage(arrowImg, 0, 0);
// 	console.log(c.toDataURL());
// }
const arrowImg = typeof Image === 'undefined' ? {} : new Image();
arrowImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAmZJREFUaEPtmb+P0zAUx19MpdLYF7tpJcTGgIRAQkgMLOwMrCcxMbAhJBiAEY4BGPkhBiQYERviD7iJiYEF3YJuQEKMMLRJHOyESuCSDEXVqWlzia1rfOnY+j1/P/k+26+OA5Z8HEs4oAVZNydbRw6dI4wxNp1OHc55aBLeeGkhhO4BgKOUetxYEErpJuf8bA5AKf3COX9vCsaYIxjjY1LKG/PCMcavpJQ/TcCYAnEQQveVUkfmRSOEVPbdIwCY6oYxAuJ53tU4jk8uEosx/ialfLv2IIyxE1EUXVsmlFL6hnP+XSeMbkcQQmhLKbUqb15aeYkpXTCrJtzXPISQ60KI42WCXNf9kSTJ6zJjy4zRBuL7/pkgCK6UmXQ2hhDyTgixu5+YorG6QPLdaauioPyg/FMx9n+YFpBer3crTdNBFTHdbjecTCYvqsTOx9QGGQwGF8bj8eU6QjzP247j+FOdHLVBskPugVIKzURku9Zf13W/CiFOLxJGCNlNkuTUnsMy370eHigIY+xcmqaXOp3OjpTyIwD8zlsrALhdIOwpAPwCgKOU0otSyvMY4w+c888HClIw+UYm9m7Bb08AQNQRvSi2dmlZDTIcDjdGo5EVjngAcKctrQoLyNQaWebIbNeqILc4xAhIu0ZqeGTEEQBoz5GqprSOrHhybWmtVWnZtP3aUVqHxZHmtCi+73tBEBR1v80BAQA7mkabQJZdPjzL/nTFVc8L0zeNe/MvK63n2Q0LbwRIv9+nYRgWXQc1ByR/kxtF0c2CN1MvASBqhCO6RZbJZ6qNLzO31jEtiNbHqSGZNY78Ax52xjMYgmuJAAAAAElFTkSuQmCC';

const starImg = typeof Image === 'undefined' ? {} : new Image();
starImg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg';

export default { until, SCROLL_PARAMS, isEditor, blendColor, arrowImg, starImg };