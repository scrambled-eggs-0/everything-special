// TODO: look into window.requestIdleCallback?
// window.requestIdleCallback(() => {
    
// }, {timeout: 2000})

import Gear from './gfx/colorgear.png';
const gearImg = new Image();
gearImg.src = Gear;

const starImg = new Image();
starImg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg';

import Arrow from './gfx/arrow.png';
const arrowImg = new Image();
arrowImg.src = Arrow;

import Lock from './gfx/locked.png';
const lockImg = new Image();
lockImg.src = Lock;

import Unlock from './gfx/unlocked.png';
const unlockedImg = new Image();
unlockedImg.src = Unlock;

// img.onload = () => {
// 	const c = document.createElement('canvas');
// 	const x = c.getContext('2d');
// 	c.width = img.width;
// 	c.height = img.height;
// 	x.drawImage(img, 0, 0);
// 	console.log(c.toDataURL());
// }

export default {arrowImg, starImg, gearImg, lockImg, unlockedImg};

// const arrowImg = typeof Image === 'undefined' ? {} : new Image();
// arrowImg.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAmZJREFUaEPtmb+P0zAUx19MpdLYF7tpJcTGgIRAQkgMLOwMrCcxMbAhJBiAEY4BGPkhBiQYERviD7iJiYEF3YJuQEKMMLRJHOyESuCSDEXVqWlzia1rfOnY+j1/P/k+26+OA5Z8HEs4oAVZNydbRw6dI4wxNp1OHc55aBLeeGkhhO4BgKOUetxYEErpJuf8bA5AKf3COX9vCsaYIxjjY1LKG/PCMcavpJQ/TcCYAnEQQveVUkfmRSOEVPbdIwCY6oYxAuJ53tU4jk8uEosx/ialfLv2IIyxE1EUXVsmlFL6hnP+XSeMbkcQQmhLKbUqb15aeYkpXTCrJtzXPISQ60KI42WCXNf9kSTJ6zJjy4zRBuL7/pkgCK6UmXQ2hhDyTgixu5+YorG6QPLdaauioPyg/FMx9n+YFpBer3crTdNBFTHdbjecTCYvqsTOx9QGGQwGF8bj8eU6QjzP247j+FOdHLVBskPugVIKzURku9Zf13W/CiFOLxJGCNlNkuTUnsMy370eHigIY+xcmqaXOp3OjpTyIwD8zlsrALhdIOwpAPwCgKOU0otSyvMY4w+c888HClIw+UYm9m7Bb08AQNQRvSi2dmlZDTIcDjdGo5EVjngAcKctrQoLyNQaWebIbNeqILc4xAhIu0ZqeGTEEQBoz5GqprSOrHhybWmtVWnZtP3aUVqHxZHmtCi+73tBEBR1v80BAQA7mkabQJZdPjzL/nTFVc8L0zeNe/MvK63n2Q0LbwRIv9+nYRgWXQc1ByR/kxtF0c2CN1MvASBqhCO6RZbJZ6qNLzO31jEtiNbHqSGZNY78Ax52xjMYgmuJAAAAAElFTkSuQmCC';

// const starImg = typeof Image === 'undefined' ? {} : new Image();
// starImg.src = 'https://upload.wikimedia.org/wikipedia/commons/c/c3/A_Snapshot_of_the_Jewel_Box_cluster_with_the_ESO_VLT.jpg';