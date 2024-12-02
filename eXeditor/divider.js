const divider = document.getElementById('divider');
const left = document.getElementById('left');
const right = document.getElementById('right');

import shared from '../shared/shared.js';
import * as Blockly from 'blockly';

let isDragging = false;

divider.onmousedown = () => {
    isDragging = true;
    document.body.style.cursor = 'col-resize';
}

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;

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

// left.style.width = `100%`;
// right.style.width = `0%`;