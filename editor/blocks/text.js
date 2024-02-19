import * as Blockly from 'blockly/core';

import textData from '../../shared/textData.js';
const { blockData, extensionNames, extensionFns } = textData;

for(let i = 0; i < extensionNames.length; i++){
  Blockly.Extensions.register(extensionNames[i], extensionFns[i](Blockly));
}

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);