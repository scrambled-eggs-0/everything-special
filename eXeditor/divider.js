const divider = document.getElementById('divider');
const left = document.getElementById('left');
const right = document.getElementById('right');

import shared from '../shared/shared.js';
import * as Blockly from 'blockly';

let isDragging = false;

divider.onmousedown = () => {
  isDragging = true;
  document.body.style.cursor = 'col-resize';

  lastLeftStyle = left.style.width;
  lastRightStyle = right.style.width;
}

document.addEventListener('mousemove', (e) => {
  if (!isDragging || shared.inClearCheckMode === true) return;
  const containerRect = divider.parentElement.getBoundingClientRect();
  const leftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
  const rightWidth = 100 - leftWidth;

  left.style.width = `${leftWidth}%`;
  right.style.width = `${rightWidth}%`;
  Blockly.svgResize(shared.ws);
  shared.resize();
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

let lastLeftStyle, lastRightStyle;
function _setDividerPercent(leftStyle, rightStyle) {
  left.style.width = leftStyle;
  right.style.width = rightStyle;
  Blockly.svgResize(shared.ws);
  shared.resize();
}

shared.setDividerPercent = (percent) => {
  lastLeftStyle = left.style.width;
  lastRightStyle = right.style.width;

  _setDividerPercent(
    `${percent*100}%`,
    `${(1-percent)*100}%`
  )
}

shared.resetDividerPercent = () => {
  if(lastLeftStyle === undefined) return;
  _setDividerPercent(lastLeftStyle, lastRightStyle);
}