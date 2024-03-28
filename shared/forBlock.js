/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

// we only need Order here, so don't import from blockly
const Order = Object.freeze({
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
});

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!

const forBlock = Object.create(null);

const cachedCreate = {};

// IMPORTANT: this function runs like 15 times! Please optimize this!! PLEASE!!!!!!!!!!
// TODO: cache result for fast lookup
forBlock['create_obstacle'] = function(block, generator) {
  // const innerCode = generator.statementToCode(block, 'CODE_INSIDE', Order.ATOMIC);

  // if(cachedCreate[innerCode] === undefined){
  //   const innerStatements = innerCode.split('\n');
  //   let shape = '0';
  //   let simulates = '';
  //   let effects = ',0';
  //   let params = 'x:450,y:800,r:30';
    
  //   for(let i = 0; i < innerStatements.length; i++){
  //     if(innerStatements[i][0] === 's'){
  //       shape = innerStatements[i].slice(1);
  //     } else if(innerStatements[i][0] === 'i'){
  //       innerStatements[i][0] = ',';
  //       simulates += innerStatements[i];
  //     } else if(innerStatements[i][0] === 'e'){
  //       innerStatements[i][0] = ',';
  //       effects += innerStatements[i];
  //     } else {
  //       params += innerStatements[i];
  //     }
  //   }

  //   cachedCreate[innerCode] = `${shape},[${simulates.slice(1)}],[${effects.slice(1)}],{${params}}`;
  // }
  
  // return `E(${cachedCreate[innerCode]});`;

  // if(block.shapeKeys === undefined) return '';

  // TODO (NEW): cachedCreate!
  const shape = block.getFieldValue('SHAPE_DROPDOWN', Order.NONE);

  const simulatesLen = block.getFieldValue('NUM_SIMULATES_DROPDOWN', Order.NONE);

  let simulates = '[';
  if(simulatesLen === 0){
    simulates = '[]';
  } else {
    for(let i = 0; i < simulatesLen-1; i++){
      simulates += block.getFieldValue(`SIMULATE_DROPDOWN${i}`, Order.NONE) + ',';
    }
    simulates += block.getFieldValue(`SIMULATE_DROPDOWN${simulatesLen-1}`, Order.NONE) + ']';
  }

  const effectsLen = block.getFieldValue('NUM_EFFECTS_DROPDOWN', Order.NONE);

  let effects = '[';
  if(effectsLen === 0){
    effects = '[]';
  } else {
    for(let i = 0; i < effectsLen-1; i++){
      effects += block.getFieldValue(`EFFECT_DROPDOWN${i}`, Order.NONE) + ',';
    }
    effects += block.getFieldValue(`EFFECT_DROPDOWN${effectsLen-1}`, Order.NONE) + ']';
  }

  let params = '{';

  // console.log(block.shapeParamToId);

  for(let key in block.shapeParamToId){
    params += `${key}:${generator.valueToCode(block, this.shapeParamToId[key], Order.NONE)},`;
  }

  for(let key in block.simulateParamToId){
    params += `${key}:${generator.valueToCode(block, this.simulateParamToId[key], Order.NONE)},`;
  }

  for(let key in block.effectParamToId){
    params += `${key}:${generator.valueToCode(block, this.effectParamToId[key], Order.NONE)},`;
  }

  const sf = generator.statementToCode(block, 'SIMULATE_CUSTOM_FN', Order.NONE);
  if(sf.length !== 0){
    params += `sf:(e)=>{\n${sf}},`;
  }
  const ef = generator.statementToCode(block, 'EFFECT_CUSTOM_FN', Order.NONE);
  if(ef.length !== 0){
    // player, res, o. Maybe in future there could be things with res? Like specific blocks like "bound player" that only works in an effect block for ex.
    params += `ef:(_, __, e)=>{\n${ef}},`;
  }

  params += '}';

  // console.log({shape, simulates, effects, params});
  
  return `C(${shape},${simulates},${effects},${params});`;

  // console.log(shapeParams);

  // let simulates = '[';

  // for(let i = 0; i < block.numSimulateFields-1; i++){
  //   simulates += block.getFieldValue(`SIMULATE_FIELD${i}`, Order.NONE) + ',';
  // }
  // simulates += block.getFieldValue(`SIMULATE_FIELD${block.numSimulateFields-1}`, Order.NONE) + ']';

  // let effects = '[';

  // for(let i = 0; i < block.numEffectFields-1; i++){
  //   effects += block.getFieldValue(`EFFECT_FIELD${i}`, Order.NONE) + ',';
  // }
  // effects += block.getFieldValue(`EFFECT_FIELD${block.numEffectFields-1}`, Order.NONE) + ']';

  // let params = '[{';

  // for(let i = 0; i < block.shapeKeys.length; i++){
  //   params += `${block.shapeKeys[i]}:${generator.valueToCode(block, `SHAPE${i}`, Order.NONE)},`;
  // }

  // params += '}';
}

forBlock['create_list'] = function(block, generator) {
  // console.log(block);
  let arr = '[';
  for(let i = 0; i < block.lastItemsAmt; i++){
    const val = generator.valueToCode(block, `ITEM${i}`, Order.NONE);
    if(val !== '') arr += val + ',';
  }
  if(arr === '[') return ['[]', Order.NONE];
  arr = arr.substring(0, arr.length-1);
  arr += ']';

  return [arr, Order.NONE];
}

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

// // OLD
// forBlock['set_x'] = function (block, generator) {
//   const x = generator.valueToCode(block, 'X', Order.NONE) || 0;
//   return `e.x = ${x};\n`;
// };

// forBlock['set_y'] = function (block, generator) {
//   const y = generator.valueToCode(block, 'Y', Order.NONE) || 0;
//   return `e.y = ${y};\n`;
// };

// forBlock['set_size'] = function (block, generator) {
//   const s = generator.valueToCode(block, 'S', Order.NONE) || 100;// 100 = 30px
//   return `e.r = ${s};\n`;
// };

// forBlock['x_variable'] = function (block, generator) {
//   return [`e.x`, Order.NONE];
// };

// forBlock['y_variable'] = function (block, generator) {
//   return [`e.y`, Order.NONE];
// };

// forBlock['forever'] = function(block, generator) {
//   const innerBlockText = generator.statementToCode(block, 'CODE_INSIDE', Order.ATOMIC);
  
//   return `tickFunctions[e.id].push(() => {\n${innerBlockText}});`;
// }

// forBlock['mouse_down'] = function(block, generator) {
//   const innerBlockText = generator.statementToCode(block, 'CODE_INSIDE', Order.ATOMIC);
  
//   return `mouseDownFunctions.push(() => {\n${innerBlockText}});`;
// }

// forBlock['mouse_up'] = function(block, generator) {
//   const innerBlockText = generator.statementToCode(block, 'CODE_INSIDE', Order.ATOMIC);
  
//   return `mouseUpFunctions.push(() => {\n${innerBlockText}});`;
// }

// forBlock['set_sprite'] = function (block, generator) {
//   const sn = block.getFieldValue('SPRITENAME', Order.NONE) || "😀";
//   return `e.emoji="${sn}";e.drawImg=false;`;
// };

forBlock['mouse_x'] = function (block, generator) {
  return [`mouseX`, Order.NONE];
};

forBlock['mouse_y'] = function (block, generator) {
  return [`mouseY`, Order.NONE];
};

// forBlock['this_touching'] = function (block, generator) {
//   const objectId = block.getFieldValue('SPRITE_ID', Order.NONE);
//   if(objectId === 'mouse'){
//     return ['((e.x-mouseX)**2+(e.y-mouseY)**2<e.r**2 && !window.mouseOut)', Order.NONE];
//   }
//   return [`(entities[${objectId}]!==undefined&&((e.x-entities[${objectId}].x)**2+(e.y-entities[${objectId}].y)**2<(e.r+entities[${objectId}].r)**2))`, Order.NONE];
// };

// forBlock['sprite_url'] = function (block, generator) {
//   const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681.jpg'";
//   const setImg = generator.provideFunction_(
//     'setImg',
//     `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(e,src){e.drawImg=true;if(e.img?.src === src){return;}e.img=new Image();e.img.src=src;}`
//   );
//   return `${setImg}(e,${url});\n`;
// };

forBlock['bg_color'] = function (block, generator) {
  const tile = block.getFieldValue('TILE_COLOR', Order.NONE);
  const bg = block.getFieldValue('BG_COLOR', Order.NONE);
  return `colors.background="${bg}"; colors.tile="${tile}";\n`;
};

// forBlock['bg_image'] = function (block, generator) {
//   const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://memes.co.in/memes/update/uploads/2021/12/InShot_20211209_222013681.jpg'";
//   const setBgImg = generator.provideFunction_(
//     'setBgImg',
//     `function ${generator.FUNCTION_NAME_PLACEHOLDER_}(src){background.drawImg=true;if(background.img?.src===src){return;}background.img=new Image();background.img.src=src;}`
//   );
//   return `${setBgImg}(${url});\n`;
// };

forBlock['set_music'] = function (block, generator) {
  const url = generator.valueToCode(block, 'URL', Order.NONE) || "'https://www.youtube.com/watch?v=i_7ekMgvRIk'";
  return `playMusic(${url});\n`;
};

forBlock['stop_music'] = function (block, generator) {
  return `stopMusic(true);\n`;
};

forBlock['get_parameter'] = function (block, generator) {
  // get parent once because it's a plug --
  // getSurroundParent doesn't account for it 
  // so just use the thing that it's attached to
  const parentBlock = block.getParent();
  if(parentBlock === null) return '';
  if(window.getParentBlockOfType(parentBlock) === null) return '';
  const parameter = block.getFieldValue('INPUT', Order.NONE);
  if(parameter === 'INVALID') return '';
  if(parameter === 'x'){
    return [`generateTopLeftCoordinates(e)[0]`, Order.NONE];
  } else if(parameter === 'y'){
    return [`generateTopLeftCoordinates(e)[1]`, Order.NONE];
  }
  return [`e.${parameter}`, Order.NONE];
};

forBlock['set_parameter'] = function (block, generator) {
  if(window.getParentBlockOfType(block) === null) return '';
  const parameter = block.getFieldValue('INPUT', Order.NONE);
  if(parameter === 'INVALID') return '';
  const value = generator.valueToCode(block, 'VALUE', Order.NONE);
  if(value === '') return '';
  if(parameter === 'x'){
    return `e.pos.x = ${value} - generateTopLeftCoordinates(e)[0];\n`;
  } else if(parameter === 'y'){
    return `e.pos.y = ${value} - generateTopLeftCoordinates(e)[1];\n`;
  }
  return `e.${parameter} = ${value};\n`;
};

export default forBlock;