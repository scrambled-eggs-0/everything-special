const divider = document.getElementById('divider');
const leftPanel = document.getElementById('left');
const rightPanel = document.getElementById('right');

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
  const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
  const newRightWidth = 100 - newLeftWidth;

  leftPanel.style.width = `${newLeftWidth}%`;
  rightPanel.style.width = `${newRightWidth}%`;
  Blockly.svgResize(shared.ws);
  shared.resize();
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  document.body.style.cursor = 'default';
});

leftPanel.style.width = `100%`;
rightPanel.style.width = `0%`;