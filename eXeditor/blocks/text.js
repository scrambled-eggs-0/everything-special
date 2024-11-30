import * as Blockly from 'blockly/core';

import textData from '../../shared/textData.js';
const { blockData, mixinNames, mixins } = textData;

for(let i = 0; i < mixinNames.length; i++){
  Blockly.Extensions.registerMixin(mixinNames[i], mixins[i](Blockly));
}

export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);