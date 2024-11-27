const starImg = new Image();
starImg.src = shared.jewelBoxUrl;

import Arrow from './gfx/arrow.png';
const arrowImg = new Image();
arrowImg.src = Arrow;

// img.onload = () => {
// 	const c = document.createElement('canvas');
// 	const x = c.getContext('2d');
// 	c.width = img.width;
// 	c.height = img.height;
// 	x.drawImage(img, 0, 0);
// 	console.log(c.toDataURL());
// }

export default {arrowImg, starImg};