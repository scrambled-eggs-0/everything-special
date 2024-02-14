/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {Order} from 'blockly/javascript';

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

// forBlock['add_text'] = function (block, generator) {
//   const text = generator.valueToCode(block, 'TEXT', Order.NONE) || "''";
//   const color =
//     generator.valueToCode(block, 'COLOR', Order.ATOMIC) || "'#ffffff'";

//   const addText = generator.provideFunction_(
//       'addText',
//       `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(text, color) {

//   // Add text to the output area.
//   const outputDiv = document.getElementById('output');
//   const textEl = document.createElement('p');
//   textEl.innerText = text;
//   textEl.style.color = color;
//   outputDiv.appendChild(textEl);
// }`
//   );
//   // Generate the function call for this block.
//   const code = `${addText}(${text}, ${color});\n`;
//   return code;
// };

forBlock['set_x'] = function (block, generator) {
  const x = generator.valueToCode(block, 'X', Order.NONE) || 0;
  return `e.x = ${x};\n`;
};

forBlock['set_y'] = function (block, generator) {
  const y = generator.valueToCode(block, 'Y', Order.NONE) || 0;
  return `e.y = ${y};\n`;
};

forBlock['set_size'] = function (block, generator) {
  const s = generator.valueToCode(block, 'S', Order.NONE) || 100;// 100 = 30px
  return `e.r = ${s};\n`;
};

forBlock['x_variable'] = function (block, generator) {
  return [`e.x`, Order.NONE];
};

forBlock['y_variable'] = function (block, generator) {
  return [`e.y`, Order.NONE];
};

forBlock['forever'] = function(block, generator) {
  const innerBlockText = generator.statementToCode(block, 'CODE_INSIDE', Order.ATOMIC);
  
  return `tickFunctions[e.id].push(() => {\n${innerBlockText}});`;
}

forBlock['set_sprite'] = function (block, generator) {
  const sn = block.getFieldValue('SPRITENAME', Order.NONE) || "😀";
  return `e.emoji="${sn}";e.drawImg=false;`;
};

forBlock['mouse_x'] = function (block, generator) {
  return [`mouseX`, Order.NONE];
};

forBlock['mouse_y'] = function (block, generator) {
  return [`mouseY`, Order.NONE];
};

forBlock['this_touching'] = function (block, generator) {
  const objectId = block.getFieldValue('SPRITE_ID', Order.NONE);
  if(objectId === 'mouse'){
    return ['(e.x-mouseX)**2+(e.y-mouseY)**2<e.r**2', Order.NONE];
  }
  return [`(e.x-entities[${objectId}].x)**2+(e.y-entities[${objectId}].y)**2<(e.r+entities[${objectId}].r)**2`, Order.NONE];
};

forBlock['sprite_url'] = function (block, generator) {
  const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681.jpg'";
  const setImg = generator.provideFunction_(
    'setImg',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(e,src){e.drawImg=true;if(e.img?.src === src){return;}e.img=new Image();e.img.src=src;}`
  );
  return `${setImg}(e,${url});\n`;
};

forBlock['bg_color'] = function (block, generator) {
  const sn = block.getFieldValue('COLOR', Order.NONE) || "white";
  return `background.color="${sn}";background.drawImg=false;\n`;
};

forBlock['bg_image'] = function (block, generator) {
  const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681.jpg'";
  const setBgImg = generator.provideFunction_(
    'setBgImg',
    `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(src){background.drawImg=true;if(background.img?.src===src){return;}background.img=new Image();background.img.src=src;}`
  );
  return `${setBgImg}(${url});\n`;
};