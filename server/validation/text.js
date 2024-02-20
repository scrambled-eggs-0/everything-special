// separate file because we need to import blockly/core here whereas in validateCode we need to import blockly
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Blockly = require('blockly/core');

import textData from '../../shared/textData.js';
const { blockData, extensionNames, extensionFns } = textData;

for(let i = 0; i < extensionNames.length; i++){
  Blockly.Extensions.register(extensionNames[i], extensionFns[i](Blockly));
}

export default /*const blocks =*/ Blockly.common.createBlockDefinitionsFromJsonArray(blockData);