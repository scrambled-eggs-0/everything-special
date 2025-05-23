/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import shared from './shared.js';

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

// Scrapped because building strings isn't expensive and we still have to get all the data to compare it to the hash.
// const cachedCreate = {};
forBlock['create_obstacle'] = function(block, generator) {
  const shape = block.getFieldValue('SHAPE_DROPDOWN', Order.NONE);

  let simulatesLen = block.getFieldValue('NUM_SIMULATES_DROPDOWN', Order.NONE);
  let effectsLen = block.getFieldValue('NUM_EFFECTS_DROPDOWN', Order.NONE);

  if(Number.isFinite(simulatesLen) === false) simulatesLen = 0;
  if(Number.isFinite(effectsLen) === false) effectsLen = block.lastEffectsLen ?? 1;
  else block.lastEffectsLen = effectsLen;

  let simulates = '[';
  if(simulatesLen === 0){
    simulates = '[]';
  } else {
    for(let i = 0; i < simulatesLen-1; i++){
      simulates += block.getFieldValue(`SIMULATE_DROPDOWN${i}`, Order.NONE) + ',';
    }
    simulates += block.getFieldValue(`SIMULATE_DROPDOWN${simulatesLen-1}`, Order.NONE) + ']';
  }

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
  
  if(shape === '2'){
    const originalPoints = generator.valueToCode(block, this.shapeParamToId['points'], Order.NONE);
    let parsedPoints;
    try {parsedPoints = JSON.parse(originalPoints);}catch(e){}
    if(parsedPoints !== undefined) params += `points:${JSON.stringify(shared.fixPolygon(parsedPoints))},`;
    else params += `points:${originalPoints},fixPoly:true,`;
  } else {
    for(let key in block.shapeParamToId){
      params += `${key}:${generator.valueToCode(block, this.shapeParamToId[key], Order.NONE)},`;
    }
  }

  for(let key in block.simulateParamToId){
    params += `${key}:${generator.valueToCode(block, this.simulateParamToId[key], Order.NONE)},`;
  }

  if(block.simulateParamToId.id !== undefined){
    try {
      block.obstacleId = eval(generator.valueToCode(block, this.simulateParamToId["id"], Order.NONE));
    } catch(e){delete block.obstacleId;}
  } else {
    delete block.obstacleId;
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

  const dd = block.getFieldValue('DECO_DROPDOWN', Order.NONE);
  if(dd !== null){
    params += `decoFilePath:"${dd}",`;
  }

  params += '}';

  // console.log({shape, simulates, effects, params});
  
  return `C(${shape},${simulates},${effects},${params});\n`
   + (shared.environment === 'editor' ? `shared.CB2O("${block.id}");\n` : '');
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

forBlock['debug_log'] = function (block, generator) {
  return `if(shared.environment === 'editor'){alert(${generator.valueToCode(block, 'MSG', Order.NONE)});}\n`;
};

forBlock['break_continue'] = function(block, generator) {
  return block.getFieldValue('FLOW') === 'BREAK' ? 'break;\n' : 'continue;\n';
}

forBlock['modify_existing'] = function(generator, Blockly) {
  delete forBlock['modify_existing'];
  const oldMath = generator.forBlock['math_single'];
  forBlock['math_single'] = forBlock['math_trig'] = function(block, generator){
    const oldCode = oldMath.bind(this)(block, generator)[0];
    return [`makeNumber(${oldCode})`, Order.NONE];
  }

  const oldMathOnList = generator.forBlock['math_on_list'];
  forBlock['math_on_list'] = function(block, generator){
    const oldCode = oldMathOnList.bind(this)(block, generator)[0];
    return [`makeNotNaN(${oldCode})`, Order.NONE];
  }

  const oldMathModulo = generator.forBlock['math_modulo'];
  forBlock['math_modulo'] = function(block, generator){
    const oldCode = oldMathModulo.bind(this)(block, generator)[0];
    return [`makeNotNaN(${oldCode})`, Order.NONE];
  }

  const oldTest = generator.forBlock['logic_ternary'];
  forBlock['logic_ternary'] = function(block, generator){
    const oldCode = oldTest.bind(this)(block, generator)[0];
    return [`makeNotNull(${oldCode})`, Order.NONE];
  }

  // only blocks with variables in them cause an error -- they exist for both lists and text

  const stringVariableTypes = ['text_indexOf', 'text_charAt', 'text_getSubstring'];
  const defaultValues = ["0", "''", "''"];
  const variableNames = ['VALUE', 'VALUE', 'STRING'];
  for(let i = 0; i < stringVariableTypes.length; i++){
    const type = stringVariableTypes[i];
    const oldGenerator = generator.forBlock[type];
    forBlock[type] = function(block, generator){
      const oldCode = oldGenerator.bind(this)(block, generator)[0];
      const variable = generator.valueToCode(block, variableNames[i], Order.NONE);
      return [`(typeof (${variable}) === "string" ? (${oldCode}) : ${defaultValues[i]})`, Order.NONE];
    }
  }

  const listVariableTypes = ['lists_indexOf','lists_getIndex','lists_setIndex','lists_getSublist'];
  const listVariableNames = ['VALUE','VALUE','LIST','LIST'];
  const listDefaultValues = ["0","0","",[]];
  for(let i = 0; i < listVariableTypes.length; i++){
    const type = listVariableTypes[i];
    const oldGenerator = generator.forBlock[type];
    forBlock[type] = function(block, generator){
      let oldCode = oldGenerator.bind(this)(block, generator);
      const variable = generator.valueToCode(block, listVariableNames[i], Order.NONE);
      if(type === 'lists_setIndex') {
        const setTo = generator.valueToCode(block, "TO", Order.NONE);
        if(setTo === '') return `if(Array.isArray(${variable})){\n\t${oldCode.slice(0,oldCode.length - 6)+'0\n'}}\n`;
        return `if(Array.isArray(${variable}) && (${setTo}) !== null){\n\t${oldCode}}\n`;
      }
      oldCode = oldCode[0];
      const extraInsert = block.getParent() === null ? ';' : '';
      return [`(Array.isArray(${variable}) ? (${oldCode}) : ${listDefaultValues[i]})` + extraInsert, Order.NONE];
    }
  }

  forBlock["variables_get"] = function(block, generator) {
    const code = generator.getVariableName(block.getFieldValue('VAR'));
    return [`md(${code})`, Order.ATOMIC];
  }

  const oldPCR = generator.forBlock["procedures_callreturn"];
  forBlock["procedures_callreturn"] = function(block, generator) {
    let oldCode = oldPCR.bind(this)(block, generator)[0].trimEnd();
    if(oldCode[oldCode.length-1] === ';') oldCode = oldCode.slice(0, oldCode.length-1);
    let sliceIndex = 0;
    for(let i = 0; i < oldCode.length; i++){
      if(oldCode[i] === '('){
        sliceIndex = i;
        break;
      }
    }
    let outputCon = block?.outputConnection?.targetConnection;
    let innerCode = `rlt(makeNotUndefined(${oldCode}))`;
    if(outputCon !== null && outputCon !== undefined){
      let check = outputCon.check;
      if(!Array.isArray(check)) check = [check];
      // Stringified array of strings is the same as normal js code
      innerCode = `makeType(${innerCode},${JSON.stringify(check)})`;
    }
    return [`(typeof (${oldCode.slice(0,sliceIndex)})==='function'?${innerCode}:0)`, Order.ATOMIC];
  }
  
  // const oldPCNR = generator.forBlock["procedures_callnoreturn"];
  // forBlock["procedures_callnoreturn"] = function(block, generator) {
  //   let oldCode = oldPCNR.bind(this)(block, generator).trimEnd();
  //   if(oldCode[oldCode.length-1] === ';') oldCode = oldCode.slice(0, oldCode.length-1);
  //   return `${oldCode};\n`;
  // }

  Blockly.Blocks["procedures_ifreturn"].getSurroundFunction = function () {
    let block = this;
    do {
      if (block.type === 'procedures_defreturn') {
        return block;
      }
      block = block.getSurroundParent();
    } while (block);
    return null;
  };

  Blockly.Blocks["procedures_ifreturn"].onchange = function (e) {
    const enabled = !!this.getSurroundFunction();
    this.setWarningText(
      enabled ? null : "Warning: This block may only be used within a function with a return value.",
    );

    if (!this.isInFlyout) {
      const initialGroup = Blockly.Events.getGroup();
      
      // Make it so the move and the disable event get undone together.
      Blockly.Events.setGroup(e.group);
      this.setEnabled(enabled);
      Blockly.Events.setGroup(initialGroup);
    }
  }

  const loopTypes = ['controls_repeat','controls_repeat_ext','controls_forEach','controls_for','controls_whileUntil'];
  for(let i = 0; i < loopTypes.length; i++){
    const oldGenerator = generator.forBlock[loopTypes[i]];
    forBlock[loopTypes[i]] = function(block, generator) {
      const oldCode = oldGenerator.bind(this)(block, generator);
      return `rlt();\n${oldCode}`;
    }
  }
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

forBlock['client_pos'] = function (block, generator) {
  if(block.getFieldValue('TYPE_DROPDOWN', Order.NONE) === 'player'){
    if(block.getFieldValue('POS_DROPDOWN', Order.NONE) === 'x') return [`shared.players[shared.selfId].pos.x`, Order.NONE];
    return [`shared.players[shared.selfId].pos.y`, Order.NONE];
  } //else {
    //if(block.getFieldValue('POS_DROPDOWN', Order.NONE) === 'x') return [`mouseX`, Order.NONE];
    //return [`mouseY`, Order.NONE];
  //}
  // TODO: KB and mouse inputs
};

// forBlock['is_dragging'] = function (block, generator) {
//   return [`dragging`, Order.NONE];
// };

forBlock['player_spawn'] = function (block, generator) {
  const sx = block.getFieldValue('SPAWN_X', Order.NONE);
  const sy = block.getFieldValue('SPAWN_Y', Order.NONE);
  let str = `shared.spawnPosition.x=${sx};shared.spawnPosition.y=${sy};`;
  if(block.getFieldValue('TO_RESPAWN', Order.NONE) === "TRUE"){
    str += "shared.respawnPlayer();"
  }
  return str + '\n';
};

forBlock['set_revives'] = function (block, generator) {
  const state = block.getFieldValue('REVIVES_ENABLED', Order.NONE) === "TRUE";
  if(state === false){
    return "shared.customToRevive = false;";
  } else {
    return `shared.customToRevive = true;\nC(0,[],[3],{x:-1E9,y:0,r:1,sf:(o,p)=>{
      if(p.dead === true && shared.customToRevive !== false){
        for(let i = 0; i < shared.players.length; i++){
          const p2 = shared.players[i];
          if(p2 === undefined) continue;
          if(p2.dead === false && (p2.pos.x-p.pos.x) ** 2 + (p2.pos.y-p.pos.y) ** 2 < (p2.sat.r + p.sat.r) ** 2){
            p.dead = false;
            p.renderRadius = 0;
          }
        }
      }
    }});\n`;
  }
};



// forBlock['this_touching'] = function (block, generator) {
//   const objectId = block.getFieldValue('SPRITE_ID', Order.NONE);
//   if(objectId === 'mouse'){
//     return ['((e.x-mouseX)**2+(e.y-mouseY)**2<e.r**2 && !shared.mouseOut)', Order.NONE];
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
  const tile = generator.valueToCode(block, 'TILE_COLOR', Order.NONE);
  const bg = generator.valueToCode(block, 'BG_COLOR', Order.NONE);
  return `shared.colors.background=${bg}; shared.colors.tile=${tile};\n`;
};

forBlock['map_dimensions'] = function (block, generator) {
  const dx = generator.valueToCode(block, 'DIMENSIONS_X', Order.NONE);
  const dy = generator.valueToCode(block, 'DIMENSIONS_Y', Order.NONE);
  return `shared.mapDimensions.x=${dx}; shared.mapDimensions.y=${dy};\n`;
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
  const url = generator.valueToCode(block, 'URL', Order.NONE) || "https://www.youtube.com/watch?v=jVTsD4UPT-k";//"'https://www.youtube.com/watch?v=i_7ekMgvRIk'";
  return `shared.playMusic(${url});\n`;
};

forBlock['stop_music'] = function (block, generator) {
  return `shared.stopMusic(true);\n`;
};

forBlock['delete_obstacle'] = function (block, generator) {
  const id = generator.valueToCode(block, 'ID', Order.NONE)?.trim();
  if(id !== ''){
    
    return `shared.tickFns.push(() => {
  const o = idToObs[${id}];
  delete idToObs[${id}];
  for(let i = 0; i < obstacles.length; i++){
    if(obstacles[i] === o) {obstacles.splice(i,1); break;}
  }
})\n`;
  } else {
    if(shared.getParentBlockOfType(block) === null) return '';
    return `shared.tickFns.push(()=>{
  for(let i = 0; i < obstacles.length; i++){
    if(obstacles[i] === e) {obstacles.splice(i,1); break;}
  }
  for(let key in shared.idToObs){
    if(shared.idToObs[key] === e){delete shared.idToObs[key]; break;}
  }
});\n`;
  }
};

forBlock['collide_obstacles'] = function (block, generator) {// TODO!!!! Weight ratio! 0 should mean block a gets all the push and weight 1 means block b.
  const firstIsId = block.getFieldValue('ID_DROPDOWN', Order.NONE) === "id";
  const isPlug = block.getFieldValue('COL_TYPE_DROPDOWN', Order.NONE) === "check";
  const id2 = generator.valueToCode(block, 'ID2', Order.NONE)?.trim();
  if(isPlug === true){
    if(firstIsId === true){
      const id = generator.valueToCode(block, 'ID', Order.NONE)?.trim();
      return [`isABColliding(idToObs[${id}],idToObs[${id2}])\n`, Order.NONE];
    } else {
      let parentBlock = block.getParent();
      if(parentBlock === null) return ['', Order.NONE];
      if(shared.getParentBlockOfType(parentBlock) === null) return ['false', Order.NONE];
      return [`isABColliding(e,idToObs[${id2}])\n`, Order.NONE];
    }
  } else {
    if(firstIsId === true){
      const id = generator.valueToCode(block, 'ID', Order.NONE)?.trim();
      return `if(idToObs[${id}]!==undefined&&idToObs[${id2}]!==undefined){boundAB(idToObs[${id}],idToObs[${id2}])}\n`;
    } else {
      if(shared.getParentBlockOfType(block) === null) return '';
      return `if(idToObs[${id2}]!==undefined){boundAB(e,idToObs[${id2}])}\n`;
    }
  }
};

function getParameterDefaultValue(outputType, isId=false){
  if(outputType === 'Number') return (isId === true ? '-1' : '0');
  else if(Array.isArray(outputType) === true) return `""`;
  else if(outputType === 'Boolean') return 'false';
  else if(outputType === 'Array') return '[]';
  return '';
}

forBlock['get_parameter'] = function (block, generator) {
  const id = generator.valueToCode(block, 'ID', Order.NONE)?.trim();
  let wrapFunction = (a) => { return a; };
  if(id !== ''){
    wrapFunction = (a) => {
      return [`(()=>{const e=idToObs[${id}];return e!==undefined?(${a}):${getParameterDefaultValue(block.outputType, true)};})()`, Order.NONE];
    }
  } else {
    // get parent once because it's a plug --
    // getSurroundParent doesn't account for it 
    // so just use the thing that it's attached to
    let parentBlock = block.getParent();
    if(parentBlock === null) return [getParameterDefaultValue(block.outputType), Order.NONE];
    if(shared.getParentBlockOfType(parentBlock) === null) return [getParameterDefaultValue(block.outputType), Order.NONE];
  }
  
  const parameter = block.getFieldValue('INPUT', Order.NONE);
  // if(parameter === 'INVALID') return '';
  if(parameter === 'x'){
    return [wrapFunction(`(generateTopLeftCoordinates(e)[0]+e.dimensions.x/2)`), Order.NONE];
  } else if(parameter === 'y'){
    return [wrapFunction(`(generateTopLeftCoordinates(e)[1]+e.dimensions.y/2)`), Order.NONE];
  }
  return [wrapFunction(`e.${parameter}`), Order.NONE];
};

forBlock['set_parameter'] = function (block, generator) {
  const id = generator.valueToCode(block, 'ID', Order.NONE)?.trim();
  let parentBlock = null;
  let wrapFunction = (a) => { return a; };
  if(id !== ''){
    // NOTE: obstacle ids are static. This means that an id is
    // defined iff the map contains it at the very beginning.
    // We still don't know the id, though, since it could be a
    // variable.
    const parameter = block.getFieldValue('INPUT', Order.NONE);

    // get the constraints the slow way: by looping over all the names
    let constraints;
    for(let i = 0; i < shared.satMapI2N.length; i++){
      if(shared.satMapI2N[i] === parameter){
        constraints = shared.satConstraintsMap[i];
        break;
      }
    }

    if(constraints === undefined){
      for(let i = 0; i < shared.simulateMapI2N.length; i++){
        if(shared.simulateMapI2N[i] === parameter){
          constraints = shared.simulateConstraintsMap[i];
          break;
        }
      }
    }

    if(constraints === undefined){
      for(let i = 0; i < shared.effectMapI2N.length; i++){
        if(shared.effectMapI2N[i] === parameter){
          constraints = shared.effectConstraintsMap[i];
          break;
        }
      }
    }

    if(constraints === undefined || constraints[parameter] === undefined){
      wrapFunction = (a) => {
        return `{const e=shared.idToObs[${id}];if(e!==undefined){${a};\n}}`;
      }
    } else {
      constraints = constraints[parameter];// TODO: fix this (not tested)
      wrapFunction = (a) => {
        return `{const e=shared.idToObs[${id}];if(e!==undefined){${a};\ncset(e,"${parameter}",${constraints.toString()});}}`;
      }
    }

    try {
      block.obstacleId = eval(id);
    } catch(e){delete block.obstacleId;}
  } else {
    delete block.obstacleId;

    parentBlock = shared.getParentBlockOfType(block);
    if(parentBlock === null) return '';
  }
  
  const parameter = block.getFieldValue('INPUT', Order.NONE);
  if(parameter === 'INVALID') return '';
  const value = generator.valueToCode(block, 'VALUE', Order.NONE);
  if(value === '') return '';
  // what?? addition?? i thought this was a setter??
  // all part of the plan :brain:
  if(parameter === 'x'){
    return wrapFunction(`e.pos.x += ${value} - e.topLeft.x - e.dimensions.x/2;\n`);
  } else if(parameter === 'y'){
    return wrapFunction(`e.pos.y += ${value} - e.topLeft.y - e.dimensions.y/2;\n`);
  } else if(parameter === 'sat.r'){
    return wrapFunction(`e.sat.r = Math.max(${value},0.001);\ne.dimensions = shared.generateDimensions(e);\n`);
  }
  
  if(id === ''){
    // we can't directly know what parameter corresponds to what. So, let's just look up all the shape, simulates, and effects in their corresponding maps and find out which one holds the constraints
    let constraints;

    const shape = parentBlock.getFieldValue('SHAPE_DROPDOWN', Order.NONE);
    let simulatesLen = parentBlock.getFieldValue('NUM_SIMULATES_DROPDOWN', Order.NONE);
    let effectsLen = parentBlock.getFieldValue('NUM_EFFECTS_DROPDOWN', Order.NONE);

    let constraintsMap = shared.satConstraintsMap[shape];
    if(constraintsMap !== undefined)constraints = constraintsMap[parameter];

    if(constraints === undefined){
      for(let i = 0; i < simulatesLen; i++){
        const simulate = parentBlock.getFieldValue(`SIMULATE_DROPDOWN${i}`, Order.NONE);
        constraintsMap = shared.simulateConstraintsMap[simulate];
        if(constraintsMap !== undefined && constraintsMap[parameter] !== undefined){
          constraints = constraintsMap[parameter];
          break;
        }
      }
    }
    
    if(constraints === undefined){
      for(let i = 0; i < effectsLen; i++){
        const effect = parentBlock.getFieldValue(`EFFECT_DROPDOWN${i}`, Order.NONE);
        constraintsMap = shared.effectConstraintsMap[effect];
        if(constraintsMap !== undefined && constraintsMap[parameter] !== undefined){
          constraints = constraintsMap[parameter];
          break;
        }
      }
    }

    if(constraints !== undefined){
      return wrapFunction(`e.${parameter} = ${value};\ncset(e,"${parameter}",[${constraints.toString()}])\n`);
    }
  }

  return wrapFunction(`e.${parameter} = ${value};\n`);
};

// constrain-set
shared.cset = (e, key, c) => {
  if(c[2] === true) e[key] = Math.round(e[key]);
  if(e[key] < c[0]) e[key] = c[0];
  else if(e[key] > c[1]) e[key] = c[1];
}

forBlock['colour_rgb'] = function (block, generator) {
  return [`colourRgb(${generator.valueToCode(block, 'RED', Order.NONE)},${generator.valueToCode(block, 'GREEN', Order.NONE)},${generator.valueToCode(block, 'BLUE', Order.NONE)})`, Order.NONE];
}

export default forBlock;