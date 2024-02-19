/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// we only need Order here, so don't import from blockly
const Order = {
  ATOMIC: 0,
  NEW: 1.1,
  MEMBER: 1.2,
  FUNCTION_CALL: 2,
  INCREMENT: 3,
  DECREMENT: 3,
  BITWISE_NOT: 4.1,
  UNARY_PLUS: 4.2,
  UNARY_NEGATION: 4.3,
  LOGICAL_NOT: 4.4,
  TYPEOF: 4.5,
  VOID: 4.6,
  DELETE: 4.7,
  AWAIT: 4.8,
  EXPONENTIATION: 5.0,
  MULTIPLICATION: 5.1,
  DIVISION: 5.2,
  MODULUS: 5.3,
  SUBTRACTION: 6.1,
  ADDITION: 6.2,
  BITWISE_SHIFT: 7,
  RELATIONAL: 8,
  IN: 8,
  INSTANCEOF: 8,
  EQUALITY: 9,
  BITWISE_AND: 10,
  BITWISE_XOR: 11,
  BITWISE_OR: 12,
  LOGICAL_AND: 13,
  LOGICAL_OR: 14,
  CONDITIONAL: 15,
  ASSIGNMENT: 16,
  YIELD: 17,
  COMMA: 18,
  NONE: 99,
};

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!

const forBlock = Object.create(null);
// export default /*const forBlock =*/ Object.create(null);

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
    return ['((e.x-mouseX)**2+(e.y-mouseY)**2<e.r**2 && mouseX !== 0 && mouseX !== 900 && mouseY !== 0 && mouseY !== 1600)', Order.NONE];
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

forBlock['set_music'] = function (block, generator) {
  const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://www.youtube.com/watch?v=i_7ekMgvRIk'";
  return `playMusic(${url});\n`;
};

forBlock['stop_music'] = function (block, generator) {
  return `stopMusic();\n`;
};

export default forBlock;