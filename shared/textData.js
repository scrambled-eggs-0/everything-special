// // time: 0.1 - 0.05ms. Performance is fine.
// const emojis = [["\u{1F680}", "\u{1F680}"]];// double list of emojis because that's what blockly accepts
// const emojiRange = [
//   [0x1F600, 0x1F64F],  // Emoticons
//   [0x1F7E0, 0x1F7EB],  // Geometric Shapes Extended
//   [0x1F90B, 0x1F9FF],  // Supplemental Symbols and Pictographs
// ];
// for(let i = 0; i < emojiRange.length; i++){
//   for(let j = emojiRange[i][0]; j < emojiRange[i][1]; j++){
//     const emoji = String.fromCodePoint(j);
//     emojis.push([emoji, emoji]);
//   }
// }
// emojis.push(["\u2705", "\u2705"], ["\u26C5", "\u26C5"], ["\u{1F300}", "\u{1F300}"]);

const decoPaths = [window.jewelBoxUrl, 'arrow.png', 'https://static.wikia.nocookie.net/geometry-dash/images/0/01/RegularBlock01.png'];
const decoOptions = []; 
if(typeof location !== 'undefined'){
  for(let i = 0; i < decoPaths.length; i++){
    if(decoPaths[i].slice(0,4) === 'http'){
      decoOptions.push([{src: decoPaths[i], width: 50, height: 50, alt: 'jewelBox'}, decoPaths[i]]);
    } else {
      // insert a placeholder so that there's no "invalid dropdown options" setting
      decoOptions.push(['[unloaded image]', decoPaths[i]]);
      import(`../client/gfx/decorations/${decoPaths[i]}`).then(data => {
        const o = data.default;
        decoOptions[i] = [{src: o, width: 50, height: 50, alt: decoPaths[i].split('.')[0]}, decoPaths[i]];
      });
    }
  }
} else {
  for(let i = 0; i < decoPaths.length; i++){
    decoOptions.push(['[unloaded image]', decoPaths[i]]);
  }
}
const getDecoOptions = ()=>{if(decoOptions.length === 0){return [[{src: window.jewelBoxUrl, width: 50, height: 50, alt: 'jewelBox'}, window.jewelBoxUrl]]}return decoOptions};

export default {
  blockData: [
    // {
    //   "type": "create_obstacle",
    //   "message0": "create obstacle",

    //   "validate": function(newValue) {
    //     this.getSourceBlock().updateConnections(newValue);
    //     return newValue;
    //   },
      
    //   "init": function() {
    //     var options = [
    //      ['has neither', 'NEITHER'],
    //      ['has statement', 'STATEMENT'],
    //      ['has value', 'VALUE'],
    //     ];
      
    //     this.appendDummyInput()
    //     // Pass the field constructor the options list, the validator, and the name.
    //         .appendField(new Blockly.FieldDropdown(options, this.validate), 'MODE');
    //   },

    //   "updateConnections": function(newValue) {
    //     this.removeInput('STATEMENT', /* no error */ true);
    //     this.removeInput('VALUE', /* no error */ true);
    //     if (newValue == 'STATEMENT') {
    //       this.appendStatementInput('STATEMENT');
    //     } else if (newValue == 'VALUE') {
    //       this.appendValueInput('VALUE');
    //     }
    //   },
    //   // "args0": [
        
    //   // ],
    //   // "message1": "%1",
    //   // "args1": [
    //   //   {
    //   //     "type": "input_statement",
    //   //     "name": "CODE_INSIDE"
    //   //   }
    //   // ],
    //   // "message2": "with parameters %1",
    //   // "args2": [],
    //   "colour": '#07ced9',
    //   // "message0": "touching ",

    //   // "extensions": ["add_params_extension"],
    //   // "args0": [
    //   //   {
    //   //     "type": "input_dummy",
    //   //     "name": "INPUT",
    //   //   }
    //   // ],
    // //   "colour": '#07ced9',
    // //   "output": 'Boolean'
    // },
    // {
    //   'type': 'add_text',
    //   'message0': 'Add text %1 with color %2',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'TEXT',
    //       'check': 'String',
    //     },
    //     {
    //       'type': 'input_value',
    //       'name': 'COLOR',
    //       'check': 'Colour',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   'colour': 160,
    //   'tooltip': '',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'set_x',
    //   'message0': 'set x to %1',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'X',
    //       'check': 'Number',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   'colour': '#07ced9',
    //   'tooltip': "sets the current sprite's horizontal position, 0 being at the left of the screen and 900 being at the right",
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'set_y',
    //   'message0': 'set y to %1',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'Y',
    //       'check': 'Number',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   'colour': '#07ced9',
    //   'tooltip': "sets the current sprite's vertical position, 0 being at the top of the screen and 1600 being at the bottom",
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'set_size',
    //   'message0': 'set scale to %1 percent',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'S',
    //       'check': 'Number',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   'colour': '#07ced9',
    //   'tooltip': '',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'x_variable',
    //   'message0': 'x position',
    //   'args0': [],
    //   'output': 'Number',
    //   'colour': '#07ced9',
    //   'tooltip': 'gets the current horizonatl position',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'y_variable',
    //   'message0': 'y position',
    //   'args0': [],
    //   'output': 'Number',
    //   'colour': '#07ced9',
    //   'tooltip': 'gets the current vertical position',
    //   'helpUrl': '',
    // },
    // {
    //   "type": "forever",
    //   "message0": "forever",
    //   "args0": [
        
    //   ],
    //   "message1": "%1",
    //   "args1": [
    //     {
    //       "type": "input_statement",
    //       "name": "CODE_INSIDE"
    //     }
    //   ],
    //   "colour": '#07ced9'
    // },
    // {
    //   "type": "mouse_down",
    //   "message0": "when mouse clicked",
    //   "args0": [
        
    //   ],
    //   "message1": "%1",
    //   "args1": [
    //     {
    //       "type": "input_statement",
    //       "name": "CODE_INSIDE"
    //     }
    //   ],
    //   "colour": '#07ced9'
    // },
    // {
    //   "type": "mouse_up",
    //   "message0": "when mouse released",
    //   "args0": [
        
    //   ],
    //   "message1": "%1",
    //   "args1": [
    //     {
    //       "type": "input_statement",
    //       "name": "CODE_INSIDE"
    //     }
    //   ],
    //   "colour": '#07ced9'
    // },
    // {
    //   "type": "set_sprite",
    //   "message0": "Set sprite %1",
    //   "args0": [
    //     {
    //       "type": "field_dropdown",
    //       "name": "SPRITENAME",
    //       "options": [
    //         // ...emojis.map(e => [e, e])
    //         ...emojis
    //       ]
    //     }
    //   ],
    //   "colour": '#07ced9',
    //   "previousStatement": null,
    //   "nextStatement" : null
    // },
    // {
    //   "type": "bg_color",
    //   "message0": "Set background color to %1\nand tile color to %2",
    //   "args0": [
    //     {
    //       "type": "field_input",
    //       "name": "BG_COLOR",
    //       "text": '#310f99',
    //       "spellcheck": false
    //     },
    //     {
    //       "type": "field_input",
    //       "name": "TILE_COLOR",
    //       "text": '#1d0a57',
    //       "spellcheck": false
    //     }
    //   ],
    //   "colour": '121',
    //   "previousStatement": null,
    //   "nextStatement" : null,
    // },
    // {
    //   'type': 'bg_image',
    //   'message0': 'Set background image to %1',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'URL',
    //       'check': 'String',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   "colour": '#07ced9',
    //   'tooltip': 'sets the background image to a url on the internet. A url should look something like: https://example.com',
    //   'helpUrl': '',
    // },
    {
      'type': 'set_music',
      'message0': 'Set music to youtube url %1',
      'args0': [
        {
          'type': 'input_value',
          'name': 'URL',
          'check': 'String',
        },
      ],
      'previousStatement': null,
      'nextStatement': null,
      "colour": '121',
      'tooltip': 'sets the music to a url on the internet. A music url should look something like: https://youtube.com/watch?v=SOMEDIGITS. You must interact with the webpage before the audio can play.',
      'helpUrl': '',
    },
    {
      'type': 'stop_music',
      'message0': 'stop music',
      'args0': [],
      'previousStatement': null,
      'nextStatement': null,
      "colour": '121',
      'tooltip': 'stops music if it is playing',
      'helpUrl': '',
    },
    // {
    //   "type": "get_parameter",
    //   "message0": "get obstacle data %1",
    //   "args0": [
    //     {
    //       "type": "field_dropdown",
    //       "name": "INPUT",
    //       "options": generateParameterDropdownOptions
    //     },
    //   ],
    //   "colour": '#07ced9',
    //   "output": null//'Boolean'
    // },
    // {
    //   "type": "set_parameter",
    //   "message0": "set %1 to %2",
    //   "args0": [
    //     {
    //       "type": "field_dropdown",
    //       "name": "INPUT",
    //       "options": generateParameterDropdownOptions
    //     },
    //     {
    //       "type": "input_value",
    //       "name": "VALUE"
    //     }
    //   ],
    //   "colour": '#07ced9',
    //   'previousStatement': null,
    //   'nextStatement': null,
    // },
    {
      'type': 'is_dragging',
      'message0': 'is draggging',
      'args0': [],
      'output': 'Boolean',
      'colour': '121',
      'tooltip': 'true or false depending on if the user is currently dragging',
      'helpUrl': '',
    },
    {
      'type': 'client_pos',
      'message0': '%1 %2 position',
      'args0': [
        {
          "type": "field_dropdown",
          "name": "TYPE_DROPDOWN",
          "options": [
            [ "player", "player" ],
            [ "mouse", "mouse" ]
          ]
        },
        {
          "type": "field_dropdown",
          "name": "POS_DROPDOWN",
          "options": [
            [ "x", "x" ],
            [ "y", "y" ]
          ]
        },
      ],
      'output': 'Number',
      'colour': '121',
      'tooltip': 'the horizontal/vertical position of the mouse. The horizontal position (x) ranges from 0 to 900 and the vertical position (y) ranges from 0 to 1600.',
      'helpUrl': '',
    },
    {
      'type': 'player_pos',
      'message0': 'player %1 position',
      'args0': [
        {
          "type": "field_dropdown",
          "name": "POS_DROPDOWN",
          "options": [
            [ "x", "x" ],
            [ "y", "y" ]
          ]
        }
      ],
      'output': 'Number',
      'colour': '121',
      'tooltip': 'the horizontal/vertical position of the player. The horizontal position (x) ranges from 0 to 900 and the vertical position (y) ranges from 0 to 1600.',
      'helpUrl': '',
    },
    {
      "type": "player_spawn",
      "message0": "Set player spawn to x: %1 y: %2 and respawn player? %3",
      "args0": [
        {
          "type": "field_number",
          "name": "SPAWN_X",
          "value": 800,
          "min": 0,
          "max": 900,
        },
        {
          "type": "field_number",
          "name": "SPAWN_Y",
          "value": 100,
          "min": 0,
          "max": 1600,
        },
        {
          "type": "field_checkbox",
          "name": "TO_RESPAWN",
          "checked": true
        }
      ],
      "colour": '121',
      "previousStatement": null,
      "nextStatement" : null,
    },
    // {
    //   "type": "this_touching",
    //   "message0": "touching %1",
    //   "args0": [
    //     {
    //       "type": "input_dummy",
    //       "name": "INPUT",
    //     }
    //   ],
    //   "extensions": ["dynamic_menu_extension"],
    //   "colour": '#07ced9',
    //   "output": 'Boolean'
    // },
    // {
    //   'type': 'sprite_url',
    //   'message0': 'Set sprite image to %1',
    //   'args0': [
    //     {
    //       'type': 'input_value',
    //       'name': 'URL',
    //       'check': 'String',
    //     },
    //   ],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   "colour": '#07ced9',
    //   'tooltip': 'sets the sprite image to a url on the internet. A url should look something like: https://example.com',
    //   'helpUrl': '',
    // },
  ],
  // if this gets much bigger then make an addExtension method
  extensionNames: [
    // 'dynamic_menu_extension',
    // 'create_params_extension'
  ],
  extensionFns: [
    // function() { // this refers to the block that the extension is being run on
    //   const block = this;
    //   // this.setTooltip(function() {
    //   //   var parent = thisBlock.getParent();
    //   //   return (parent && parent.getInputsInline() && parent.tooltip) ||
    //   //       Blockly.Msg.MATH_NUMBER_TOOLTIP;
    //   // });
    // }
    // function(Blockly) {
    //   return function() {
    //     this.getInput('INPUT')
    //     .appendField(
    //     new Blockly.FieldDropdown(
    //       function() {
    //         const arr = [['mouse-pointer', 'mouse']];

    //         // if we haven't loaded all the entities yet, then just keep the status quo
    //         if(window.codeLoaded !== true){
    //           const entityLength = window.initialLocalStorageLen;
    //           for(let i = 0; i < entityLength; i++){
    //             arr.push(['[entity]', i.toString()]);
    //           }
    //           // TODO: get option loading instead of [entity].
    //           return arr;
    //         }

    //         for(let i = 0; i < entities.length; i++){
    //           // exclude self
    //           if(window.workspaceId === i) continue;

    //           // will be undefined on the server which is fine
    //           const wsName = window.workspaceNames[i];

    //           // TODO: "clones of" x instead of just listing out all the current clones bc that can break. 
    //           arr.push([
    //             entities[i].drawImg === true ?
    //               {"src": entities[i].img.src, "width": 25, "height": 25, "alt": wsName } :
    //               entities[i].emoji + " " + wsName,
    //             entities[i].id.toString()
    //           ]);
    //         }
    //         return arr;
    //       }
    //     ), 'SPRITE_ID');
    //   };
    // },
  ],
  JSBlockNames: [
    'create_obstacle',
    'get_parameter',
    'set_parameter',
    'create_list',
    'bg_color'
  ],
  JSBlockData: [
    // create_obstacle
    function(Blockly) {
      return {
        init: function() {
          this.setColour(194);

          this.setNextStatement(true, null);
          this.setPreviousStatement(true, null);

          this.shapeOptions = [];
          for(let i = 0; i < window.satMapI2N.length; i++){
            this.shapeOptions.push([window.satMapI2N[i], i.toString()]);
          }

          this.simulateOptions = [];
          for(let i = 0; i < window.simulateMapI2N.length; i++){
            this.simulateOptions.push([window.simulateMapI2N[i], i.toString()]);
          }

          this.effectOptions = [];
          for(let i = 0; i < window.effectMapI2N.length; i++){
            this.effectOptions.push([window.effectMapI2N[i], i.toString()]);
          }

          this.numSimulateFields = this.numEffectFields = this.shapeIdGenerator = this.simulateIdGenerator = this.effectIdGenerator = 0;
          this.shapeParamToId = {}; // parameter name to field id
          this.simulateParamToId = {};
          this.effectParamToId = {};

          // this.appendDummyInput("LABEL")
          //     .appendField('Create Obstacle')

          this.appendDummyInput("SHAPE_CONTAINER")
            .appendField('shape:')
            .appendField(new Blockly.FieldDropdown(this.shapeOptions, this.validateShapeDropdown), 'SHAPE_DROPDOWN');

          this.appendDummyInput("NUM_SIMULATES_CONTAINER")
            .appendField("number of simulates")
            .appendField(new Blockly.FieldNumber(0, 0, window.simulateMapI2N.length, 1, this.validateNumberOfSimulatesDropdown), 'NUM_SIMULATES_DROPDOWN');

          this.appendDummyInput("NUM_EFFECTS_CONTAINER")
            .appendField("number of effects")
            .appendField(new Blockly.FieldNumber(1, 1, window.effectMapI2N.length, 1, this.validateNumberOfEffectsDropdown), 'NUM_EFFECTS_DROPDOWN');

          // this.appendDummyInput()
          //   .appendField("tick function:");

          // this.appendStatementInput('TICK_FN');
        },

        validateNumberOfSimulatesDropdown: function(newValue) {
          this.getSourceBlock().updateNumberOfSimulatesDropdown(newValue);
          return newValue;
        },

        validateNumberOfEffectsDropdown: function(newValue) {
          this.getSourceBlock().updateNumberOfEffectsDropdown(newValue);
          return newValue;
        },

        validateShapeDropdown: function(newValue) {
          this.getSourceBlock().updateShapeDropdown(newValue);
          return newValue;
        },

        validateSimulateDropdown: function(newValue) {
          this.getSourceBlock().updateSimulateDropdown(newValue, this.id);
          return newValue;
        },

        validateEffectDropdown: function(newValue) {
          this.getSourceBlock().updateEffectDropdown(newValue, this.id);
          return newValue;
        },

        updateNumberOfSimulatesDropdown: function(newValue) {
          if(window.workspaceLoaded === false) return;

          // remove existing
          for(let i = 0; i < this.numSimulateFields; i++){
            this.removeInput(`SIMULATE_CONTAINER${i}`, true);
          }

          for(let key in this.simulateParamToId){
            this.removeInput(this.simulateParamToId[key]);
          }

          this.removeInput('SIMULATE_CUSTOM_FN', true);

          this.simulateParamToId = {};

          this.simulateOptions = [];
          for(let i = 0; i < window.simulateMapI2N.length; i++){
            this.simulateOptions.push([window.simulateMapI2N[i], i.toString()]);
          }

          let insertionIndex = this.getIndexOfInput(`NUM_SIMULATES_CONTAINER`) + 1;

          // add new
          const isInsertionMarker = this.isInsertionMarker();
          for(let i = 0; i < newValue; i++){
            const sourceBlock = this;
            const dropdown = new Blockly.FieldDropdown(isInsertionMarker === true ? ()=>{return[['',this.sditk[i]]]} : function() { return sourceBlock.generateSimulateDropdownOptions(this, sourceBlock) }, this.validateSimulateDropdown);
            dropdown.id = i;
            this.appendDummyInput(`SIMULATE_CONTAINER${i}`)
              .appendField('simulate:')
              .appendField(dropdown, `SIMULATE_DROPDOWN${i}`);

            this.inputList.splice(insertionIndex, 0, this.inputList.pop());
            
            insertionIndex = this.updateSimulateDropdown(this.getFieldValue(`SIMULATE_DROPDOWN${i}`), i);
          } 

          // update amount
          this.numSimulateFields = newValue;
        },

        generateSimulateDropdownOptions: function(dropdown, sourceBlock) {
          let options = sourceBlock.simulateOptions.filter(i => i !== null);
          if(dropdown.selectedOption !== undefined) options.unshift(dropdown.selectedOption);
          return options;
        },

        updateNumberOfEffectsDropdown: function(newValue) {
          if(window.workspaceLoaded === false) return;
          // remove existing
          for(let i = 0; i < this.numEffectFields; i++){
            this.removeInput(`EFFECT_CONTAINER${i}`, true);
          }

          for(let key in this.effectParamToId){
            this.removeInput(this.effectParamToId[key]);
          }

          this.removeInput('EFFECT_CUSTOM_FN', true);
          this.removeInput('DECO_DROPDOWN_CONTAINER', true);

          this.effectParamToId = {};

          this.effectOptions = [];
          for(let i = 0; i < window.effectMapI2N.length; i++){
            this.effectOptions.push([window.effectMapI2N[i], i.toString()]);
          }

          let insertionIndex = this.getIndexOfInput(`NUM_EFFECTS_CONTAINER`) + 1;

          // add new
          const isInsertionMarker = this.isInsertionMarker();
          for(let i = 0; i < newValue; i++){
            const sourceBlock = this;
            const dropdown = new Blockly.FieldDropdown(isInsertionMarker === true ? ()=>{return[['',this.editk[i]]]} : function() { return sourceBlock.generateEffectDropdownOptions(this, sourceBlock) }, this.validateEffectDropdown);
            dropdown.id = i;
            this.appendDummyInput(`EFFECT_CONTAINER${i}`)
              .appendField('effect:')
              .appendField(dropdown, `EFFECT_DROPDOWN${i}`);

            this.inputList.splice(insertionIndex, 0, this.inputList.pop());

            insertionIndex = this.updateEffectDropdown(this.getFieldValue(`EFFECT_DROPDOWN${i}`), i);
          }

          // update amount
          this.numEffectFields = newValue;
        },

        generateEffectDropdownOptions: function(dropdown, sourceBlock) {
          let options = sourceBlock.effectOptions.filter(i => i !== null);
          if(dropdown.selectedOption !== undefined) options.unshift(dropdown.selectedOption);
          return options;
        },

        updateShapeDropdown: function(newValue) {
          if(window.workspaceLoaded === false) return;
          // if(window.blocklyLoaded !== true) return;
          // return; // TODO: get this working with serialization. possibly set the value of num_simulates so that fields can be pre-appended?
          let oldValue = this.getFieldValue("SHAPE_DROPDOWN");

          const oldValueMap = window.satDefaultMap[oldValue];
          const newValueMap = window.satDefaultMap[newValue];

          if(oldValueMap !== undefined) {
            for(let key in oldValueMap){
              this.removeInput(this.shapeParamToId[key], true);
              delete this.shapeParamToId[key];
            }
          }

          const newValueArr = Object.keys(newValueMap);
          for(let i = newValueArr.length-1; i >= 0; i--){
            const key = newValueArr[i];
            const id = 'SHAPE' + this.shapeIdGenerator++;
            this.shapeParamToId[key] = id;
            this.appendValueInput(id)
              .appendField(key + ':')
              .setCheck(generateConnectionType(newValueMap[key]))
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(newValueMap[key])));

            this.inputList.splice(1, 0, this.inputList.pop())
          }
        },

        getIndexOfInput(name){
          for(let i = 0; i < this.inputList.length; i++){
            if(this.inputList[i].name === name) return i;
          }
          return -1;
        },

        updateSimulateDropdown: function(newValue, dropdownId) {
          if(window.workspaceLoaded === false) return this.getIndexOfInput(`SIMULATE_CONTAINER${dropdownId}`) + 1;
          let oldValue = this.getFieldValue(`SIMULATE_DROPDOWN${dropdownId}`);

          if(oldValue !== undefined && oldValue !== null) this.simulateOptions[oldValue] = [window.simulateMapI2N[oldValue], oldValue.toString()];
          this.simulateOptions[newValue] = null;

          const oldValueMap = window.simulateDefaultMap[oldValue];
          const newValueMap = window.simulateDefaultMap[newValue];

          if(oldValueMap !== undefined) {
            for(let key in oldValueMap){
              this.removeInput(this.simulateParamToId[key], true);
              delete this.simulateParamToId[key];
            }
          }

          // Custom
          if(oldValue === "3"){
            this.removeInput('SIMULATE_CUSTOM_FN', true);
          }

          let insertionIndex = this.getIndexOfInput(`SIMULATE_CONTAINER${dropdownId}`) + 1;

          // Custom
          if(newValue === "3"){
            // this.appendDummyInput('TICK_FN_LABEL')
            //   .appendField("simulate function:");
            // this.inputList.splice(insertionIndex++, 0, this.inputList.pop())

            this.appendStatementInput('SIMULATE_CUSTOM_FN');
            this.inputList.splice(insertionIndex++, 0, this.inputList.pop())
            return insertionIndex;
          }

          const newValueArr = Object.keys(newValueMap);
          for(let i = newValueArr.length-1; i >= 0; i--){
            const key = newValueArr[i];
            const id = 'SIMULATE' + this.simulateIdGenerator++;
            this.simulateParamToId[key] = id;
            this.appendValueInput(id)
              .appendField(key + ':')
              .setCheck(generateConnectionType(newValueMap[key]))
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(newValueMap[key])));
            
            this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
          }
          
          return insertionIndex;
        },

        updateEffectDropdown: function(newValue, dropdownId) {
          if(window.workspaceLoaded === false) return this.getIndexOfInput(`EFFECT_CONTAINER${dropdownId}`) + 1;
          let oldValue = this.getFieldValue(`EFFECT_DROPDOWN${dropdownId}`);

          if(oldValue !== undefined && oldValue !== null) this.effectOptions[oldValue] = [window.effectMapI2N[oldValue], oldValue.toString()];
          this.effectOptions[newValue] = null;

          const oldValueMap = window.effectDefaultMap[oldValue];
          const newValueMap = window.effectDefaultMap[newValue];

          if(oldValueMap !== undefined) {
            for(let key in oldValueMap){
              this.removeInput(this.effectParamToId[key], true);
              delete this.effectParamToId[key];
            }
          }

          // Custom
          if(oldValue === '3'){
            this.removeInput('EFFECT_CUSTOM_FN', true);
          } else if(oldValue === '21'){
            this.removeInput('DECO_DROPDOWN_CONTAINER', true);
          }

          let insertionIndex = this.getIndexOfInput(`EFFECT_CONTAINER${dropdownId}`) + 1;

          // Custom
          if(newValue === '3'){
            // this.appendDummyInput('TICK_FN_LABEL')
            //   .appendField("simulate function:");
            // this.inputList.splice(insertionIndex++, 0, this.inputList.pop())

            this.appendStatementInput('EFFECT_CUSTOM_FN');
            this.inputList.splice(insertionIndex++, 0, this.inputList.pop())
            return insertionIndex;
          } else if(newValue === '21'){
            this.appendDummyInput("DECO_DROPDOWN_CONTAINER")
              .appendField('decoration: ')
              .appendField(new Blockly.FieldDropdown(getDecoOptions), "DECO_DROPDOWN");
            
            this.inputList.splice(insertionIndex++, 0, this.inputList.pop())
            return insertionIndex;
          }

          const newValueArr = Object.keys(newValueMap);
          for(let i = newValueArr.length-1; i >= 0; i--){
            const key = newValueArr[i];
            const id = 'EFFECT' + this.effectIdGenerator++;
            this.effectParamToId[key] = id;
            this.appendValueInput(id)
              .appendField(key + ':')
              .setCheck(generateConnectionType(newValueMap[key]))
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(newValueMap[key])));

            this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
          }
          return insertionIndex;
        },

        saveExtraState: function() {
          const simulateDropdownIndexToKey = [];
          const effectDropdownIndexToKey = [];

          for(let i = 0; i < this.inputList.length; i++){
            const name = this.inputList[i].name;
            if(name.slice(0,18) === "SIMULATE_CONTAINER"){
              const num = parseInt(name.slice(18));
              const value = this.getFieldValue(`SIMULATE_DROPDOWN${num}`);
              simulateDropdownIndexToKey[num] = value;
            } else if(name.slice(0,16) == "EFFECT_CONTAINER"){
              const num = parseInt(name.slice(16));
              const value = this.getFieldValue(`EFFECT_DROPDOWN${num}`);
              effectDropdownIndexToKey[num] = value;
            }
          }

          return {
            shapeParamToId: this.shapeParamToId,
            lastShapeIdGen: this.shapeIdGenerator,

            numSimulateFields: this.numSimulateFields,
            simulateParamToId: this.simulateParamToId,
            lastSimulateIdGen: this.simulateIdGenerator,

            numEffectFields: this.numEffectFields,
            effectParamToId: this.effectParamToId,
            lastEffectIdGen: this.effectIdGenerator,

            sditk: simulateDropdownIndexToKey,
            editk: effectDropdownIndexToKey,

            lastShape: this.getFieldValue('SHAPE_DROPDOWN')
          };
        },
        
        loadExtraState: function(state) {
          if(this.isInsertionMarker() === true) { this.sditk = state.sditk; this.editk = state.editk; };
          if(window.workspaceLoaded === true) return;

          if(window.importNeedsStructuredClone !== undefined){
            state.shapeParamToId = structuredClone(state.shapeParamToId);
            state.simulateParamToId = structuredClone(state.simulateParamToId);
            state.effectParamToId = structuredClone(state.effectParamToId);
          }
          // basic idea is to append param inputs like they're new like is done in the validators

          // shape
          {
            this.shapeParamToId = state.shapeParamToId;

            const newValueMap = this.shapeParamToId;

            this.shapeIdGenerator = state.lastShapeIdGen - Object.keys(this.shapeParamToId).length;

            const params = window.satDefaultMap[state.lastShape];
            
            for(let key in newValueMap){
              const id = newValueMap[key];
              this.appendValueInput(id)
                .appendField(key + ':')
                .setCheck(generateConnectionType(params[key]))
                .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(params[key])));

              this.inputList.splice(1, 0, this.inputList.pop())
            }
          }

          // simulate
          const simulateOptionsToNull = [];
          {
            this.simulateParamToId = state.simulateParamToId;
            this.simulateIdGenerator = state.lastSimulateIdGen;
            this.numSimulateFields = state.numSimulateFields;

            const simulateDropdownIndexToKey = state.sditk;

            // inserting dropdowns
            let insertionIndex = this.getIndexOfInput(`NUM_SIMULATES_CONTAINER`) + 1;
            
            for(let i = 0; i < this.numSimulateFields; i++){
              const sourceBlock = this;
              const dropdown = new Blockly.FieldDropdown(function() { return sourceBlock.generateSimulateDropdownOptions(this, sourceBlock) }, this.validateSimulateDropdown);
              dropdown.id = i;
              this.appendDummyInput(`SIMULATE_CONTAINER${i}`)
                .appendField('simulate:')
                .appendField(dropdown, `SIMULATE_DROPDOWN${i}`);

              this.inputList.splice(insertionIndex, 0, this.inputList.pop());

              // no need to call the function when we're doing this all manually
              insertionIndex++; //= this.updateSimulateDropdown(this.getFieldValue(`SIMULATE_DROPDOWN${i}`), i);

              // append all of the params in order
              const dropdownValue = simulateDropdownIndexToKey[i];
              const paramMap = simulateDefaultMap[dropdownValue];

              simulateOptionsToNull.push(dropdownValue);

              // Custom
              if(dropdownValue === '3'){
                this.appendStatementInput('SIMULATE_CUSTOM_FN');
                this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
                continue;
              }

              for(let key in paramMap){
                const id = this.simulateParamToId[key];
                this.appendValueInput(id)
                  .appendField(key + ':')
                  .setCheck(generateConnectionType(paramMap[key]))
                  .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(paramMap[key])));

                this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
              }
            }
          }

          // effect
          const effectOptionsToNull = [];
          {
            this.effectParamToId = state.effectParamToId;
            this.simulateIdGenerator = state.lastEffectIdGen;
            this.numEffectFields = state.numEffectFields;

            const effectDropdownIndexToKey = state.editk;

            // inserting dropdowns
            let insertionIndex = this.getIndexOfInput(`NUM_EFFECTS_CONTAINER`) + 1;
            
            for(let i = 0; i < this.numEffectFields; i++){
              const sourceBlock = this;
              const dropdown = new Blockly.FieldDropdown(function() { return sourceBlock.generateEffectDropdownOptions(this, sourceBlock) }, this.validateEffectDropdown);
              dropdown.id = i;
              this.appendDummyInput(`EFFECT_CONTAINER${i}`)
                .appendField('effect:')
                .appendField(dropdown, `EFFECT_DROPDOWN${i}`);

              this.inputList.splice(insertionIndex, 0, this.inputList.pop());

              // no need to call the function when we're doing this all manually
              insertionIndex++; //= this.updateEffectDropdown(this.getFieldValue(`EFFECT_DROPDOWN${i}`), i);

              // append all of the params in order
              const dropdownValue = effectDropdownIndexToKey[i];
              const paramMap = effectDefaultMap[dropdownValue];

              effectOptionsToNull.push(dropdownValue);

              // Custom
              if(dropdownValue === '3'){
                this.appendStatementInput('EFFECT_CUSTOM_FN');
                this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
                continue;
              } else if(dropdownValue === '21'){
                this.appendDummyInput("DECO_DROPDOWN_CONTAINER")
                  .appendField('decoration: ')
                  .appendField(new Blockly.FieldDropdown(getDecoOptions), "DECO_DROPDOWN");
                this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
                continue;
              }

              for(let key in paramMap){
                const id = this.effectParamToId[key];
                this.appendValueInput(id)
                  .appendField(key + ':')
                  .setCheck(generateConnectionType(paramMap[key]))
                  .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(paramMap[key])));

                this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
              }
            }
          }

          const block = this;

          window.onWorkspaceLoadFunctions.push(() => {
            for(let i = 0; i < simulateOptionsToNull.length; i++){
              block.simulateOptions[simulateOptionsToNull[i]] = null;
            }
            for(let i = 0; i < effectOptionsToNull.length; i++){
              block.effectOptions[effectOptionsToNull[i]] = null;
            }
          })
        },
      };
    },

    // get_parameter
    function(Blockly) {
      return {
        init: function() {
          const block = this;

          this.setColour(194);
          this.setOutput(true);

          this.appendDummyInput()
            .appendField('get obstacle ')
            .appendField(new Blockly.FieldDropdown(()=>{return generateParameterDropdownOptions(block, true)}, this.validateParamDropdown), 'INPUT');
        },

        validateParamDropdown: function(newValue) {
          const childBlock = this.getSourceBlock();
          if(childBlock.defaults !== undefined){
            childBlock.setOutput(true, generateConnectionType(childBlock.defaults[newValue]));
          } 
          return newValue;
        },
      }
    },

    // set_parameter
    function(Blockly) {
      return {
        init: function() {
          const block = this;

          this.setColour(194);

          this.setNextStatement(true, null);
          this.setPreviousStatement(true, null);

          this.defaults = {'x': 100, 'y': 100, 'sat.r': 200};

          this.appendValueInput("VALUE")
            .appendField('set ', 'PREFIX1')
            .appendField(new Blockly.FieldDropdown([["this obstacle", "this"],["obstacle with id", "id"]], this.validateIdDropdown), 'ID_DROPDOWN')
            .appendField(new Blockly.FieldDropdown(()=>{return generateParameterDropdownOptions(block, false, block.obstacleId)}, this.validateParamDropdown), 'INPUT')
            .appendField(' to')
            .setCheck(generateConnectionType(this.defaults['y']))
            .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(this.defaults['y'])));
        },

        validateParamDropdown: function(newValue) {
          const childBlock = this.getSourceBlock();
          const field = childBlock.getInput("VALUE");

          field
            .setCheck(null)
            .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(childBlock.defaults[newValue])))
            .setCheck(generateConnectionType(childBlock.defaults[newValue]));

          return newValue;
        },

        validateIdDropdown: function(newValue) {
          if(this.selectedOption[1] === newValue) return newValue;
          const block = this.getSourceBlock();
          if(newValue === 'this' && window.workspaceLoaded === true){
            block.setInputsInline(false);
            block.removeInput("ID", true);

            const valueInput = block.getInput("VALUE");
            valueInput.appendField('set ', 'PREFIX1');
            valueInput.appendField(new Blockly.FieldDropdown([["this obstacle", "this"],["obstacle with id", "id"]], block.validateIdDropdown), 'ID_DROPDOWN');
            valueInput.fieldRow.unshift(valueInput.fieldRow.pop());
            valueInput.fieldRow.unshift(valueInput.fieldRow.pop());
          } else /*if(newValue === 'id')*/{
            // remove the prefixes
            const valueInput = block.getInput("VALUE");
            valueInput.removeField("PREFIX1");
            valueInput.removeField("ID_DROPDOWN");

            // append the input w/ the prefixes
            block.appendValueInput("ID")
              .appendField('set ', 'PREFIX1')
              .appendField(new Blockly.FieldDropdown([["obstacle with id", "id"],["this obstacle", "this"]], block.validateIdDropdown), 'ID_DROPDOWN')
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(Object.keys(window.idToObs)[0] ?? "No obstacles with [id] simulate type found")));
            block.setInputsInline(true);
            block.inputList.unshift(block.inputList.pop());
          }
          return newValue;
        },
      }
    },

    // create_list
    function(Blockly) {
      return {
        init: function() {
          this.setColour('#4a148c');//#b094e3 <- default
          this.setOutput(true, 'Array');

          this.lastItemsAmt = 3;

          this.appendDummyInput("ITEMS_AMT_CONTAINER")
            .appendField("Create list with")
            .appendField(new Blockly.FieldNumber(3, 0, 100, null, this.validate), 'ITEMS_AMT')
            .appendField("items");

          for(let i = 0; i < this.lastItemsAmt; i++){
            this.appendValueInput(`ITEM${this.inputList.length-1}`)
            .appendField(`item ${this.inputList.length-1}:`)
            .setCheck(null);
          }
        },

        validate: function(newValue) {
          const block = this.getSourceBlock();
          let itemDif = newValue - block.lastItemsAmt;

          if(isNaN(itemDif) === true || itemDif === 0) return;

          // if the block is a non-empty shadow list with numbers
          if(block.isShadow() === true && block.childBlocks_.length !== 0 && block.childBlocks_[0].type !== 'create_list'){
            return null;
          }

          block.lastItemsAmt = newValue;

          if(itemDif < 0){
            // remove last
            for(let i = 0; i < -itemDif; i++){
              block.removeInput(`ITEM${block.inputList.length-2}`);
            }
          } else {
            // add new
            const childBlockToClone = block.childBlocks_[block.childBlocks_.length-1];
            for(let i = 0; i < itemDif; i++){
              const valueInput = block.appendValueInput(`ITEM${block.inputList.length-1}`)
                .appendField(`item ${block.inputList.length-1}:`)
                .setCheck(null);
              if(childBlockToClone !== undefined){
                const newBlock = Blockly.Xml.domToBlock(Blockly.Xml.blockToDom(childBlockToClone), block.workspace);
                newBlock.outputConnection.connect(valueInput.connection);
              }
            }
          }
        },

        saveExtraState: function() {
          return {
            'itemCount': this.lastItemsAmt
          }
        },

        loadExtraState: function(state) {
          const newValue = state['itemCount'];
          this.validate.bind({getSourceBlock: () => {return this;}})(newValue);
        }
      }
    },

    // bg_color
    // {
    //   "type": "bg_color",
    //   "message0": "Set background color to %1\nand tile color to %2",
    //   "args0": [
    //     {
    //       "type": "field_input",
    //       "name": "BG_COLOR",
    //       "text": '#310f99',
    //       "spellcheck": false
    //     },
    //     {
    //       "type": "field_input",
    //       "name": "TILE_COLOR",
    //       "text": '#1d0a57',
    //       "spellcheck": false
    //     }
    //   ],
    //   "colour": '121',
    //   "previousStatement": null,
    //   "nextStatement" : null,
    // },
    function(Blockly) {
      return {
        init: function() {
          this.setColour('121');

          this.setNextStatement(true, null);
          this.setPreviousStatement(true, null);

          this.appendValueInput("BG_COLOR")
            .appendField("Set background color to:")
            .setCheck("Colour").setShadowDom(Blockly.utils.xml.textToDom(
              `<shadow type="colour_rgb">
              <value name="RED">
                <shadow type="math_number">
                  <field name="NUM">19</field>
                </shadow>
              </value>
              <value name="GREEN">
                <shadow type="math_number">
                  <field name="NUM">6</field>
                </shadow>
              </value>
              <value name="BLUE">
                <shadow type="math_number">
                  <field name="NUM">60</field>
                </shadow>
              </value>
            </shadow>`));

          this.appendValueInput("TILE_COLOR")
            .appendField("Set grid lines color to:")
            .setCheck("Colour")
            .setShadowDom(Blockly.utils.xml.textToDom(
              `<shadow type="colour_rgb">
              <value name="RED">
                <shadow type="math_number">
                  <field name="NUM">11</field>
                </shadow>
              </value>
              <value name="GREEN">
                <shadow type="math_number">
                  <field name="NUM">4</field>
                </shadow>
              </value>
              <value name="BLUE">
                <shadow type="math_number">
                  <field name="NUM">34</field>
                </shadow>
              </value>
            </shadow>`));
        },
      }
    },
  ]
}

window.generateShadowBlock = (value) => {
  // see https://blockly-demo.appspot.com/static/demos/code/index.html for xml decoding
  const type = typeof value;
  if(type === 'number'){
    return '<shadow type="math_number">' +
      `<field name="NUM">${value}</field>` +
    '</shadow>'
  } else if(type === 'string') {
    if(value[0] === '#' && (value.length === 4 || value.length === 7)){
      let r, g, b;
      if(value.length === 4){r=parseInt(value[1],16)*16;g=parseInt(value[2],16)*16;b=parseInt(value[3],16)*16;}else{r=parseInt(value[1]+value[2],16);g=parseInt(value[3]+value[4],16);b=parseInt(value[5]+value[6],16);}
      if(Number.isFinite(r+g+b) === false){
        return '<shadow type="text">' +
          `<field name="TEXT">${value}</field>` +
        '</shadow>';
      }
      r = Math.max(0,Math.min(100,Math.round(r / 2.55))); g = Math.max(0,Math.min(100,Math.round(g / 2.55))); b = Math.max(0,Math.min(100,Math.round(b / 2.55)));
      return `<shadow type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">${r}</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">${g}</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">${b}</field>
          </shadow>
        </value>
      </shadow>`;
    }
    return '<shadow type="text">' +
      `<field name="TEXT">${value}</field>` +
    '</shadow>'
  } else if(type === 'boolean'){
    return '<shadow type="logic_boolean">' +
      `<field name="BOOL">${value === true ? 'TRUE' : 'FALSE'}</field>` +
    '</shadow>'
  } else if(Array.isArray(value)){
    // TODO
    return '<shadow type="create_list">' +
    `<field name="ITEMS_AMT">${value.length}</field>` +
      value.map((v, i) => {
        if(v === null) return '';
        return `<value name="ITEM${i}">` + generateShadowBlock(v) + '</value>';
      }) +
    '</shadow>'
  }// else {
  //  // object?
  // }
}

function generateConnectionType(val){
  const type = typeof val;
  if(type === 'number') return 'Number';
  if(type === 'string') {
    // if(val[0] === '#') return 'Colour';
    return ['String', 'Colour'];
  }
  if(type === 'boolean') return 'Boolean';
  if(Array.isArray(val) === true) return 'Array';
  return null;
}

function generateParameterDropdownOptions(childBlock, isPlug=false, id="NO_ID"){
  // const parent = this.getSourceBlock();
  // if(parent === null) return [['x', 'INVALID'], ['y', 'INVALID']]
  let block = null;
  if(id !== "NO_ID"){
    // yes, id is dynamic meaning evaluating it at compile time won't always be accurate.
    // However, blockly and post evades-x has always been about optimizing for the 95%,
    // even if it makes the 5% harder.
    const allBlocks = window.ws.getAllBlocks();
    for(let i = 0; i < allBlocks.length; i++){
      if(allBlocks[i].obstacleId === id){
        block = allBlocks[i];
        break;
      }
    }
  } else {
    if(isPlug === false) block = window.getParentBlockOfType(childBlock);///*.getSourceBlock()*/.getSurroundParent();
    else {
      let firstParent = childBlock.getParent();
      if(firstParent === null) return [['x', 'x'], ['y', 'y']];
      block = window.getParentBlockOfType(firstParent);
    }
  }
  

  if(block === null) return [['x', 'x'], ['y', 'y']];
  let shape = block.getFieldValue('SHAPE_DROPDOWN');
  if(shape === null) return [['x', 'x'], ['y', 'y']];
  shape = parseInt(shape);

  const params = {};

  const simulates = [];
  const effects = [];

  for(let key in satDefaultMap[shape]){
    params[key] = satDefaultMap[shape][key];
  }

  const simulatesLen = block.getFieldValue('NUM_SIMULATES_DROPDOWN');
  for(let i = 0; i < simulatesLen; i++){
    const simulate = block.getFieldValue(`SIMULATE_DROPDOWN${i}`);
    simulates.push(simulate);
    for(let key in simulateDefaultMap[simulate]){
      params[key] = simulateDefaultMap[simulate][key];
    }
  }

  const effectsLen = block.getFieldValue('NUM_EFFECTS_DROPDOWN');
  for(let i = 0; i < effectsLen; i++){
    const effect = block.getFieldValue(`EFFECT_DROPDOWN${i}`);
    effects.push(effect);
    for(let key in effectDefaultMap[effect]){
      params[key] = effectDefaultMap[effect][key];
    }
  }

  window.C(shape, simulates, effects, params);
  const o = window.obstacles.pop();

  const arr = [['x', 'x'], ['y', 'y']];
  if(shape === 0) arr.push(['radius', 'sat.r']);

  childBlock.defaults = {'x': 100, 'y': 100, 'sat.r': 200};

  for(let key in o){
    if(excludedKeys[key] === undefined && (!(typeof o[key] === 'object') || Array.isArray(o[key]))){
      childBlock.defaults[key] = o[key];
      arr.push([key, key]);
    }
  }

  return arr;
}

window.getParentBlockOfType = (block, type='create_obstacle') => {
  let parent = block.getSurroundParent();
  while(parent !== null){
    if(parent.type === type) return parent;
    parent = parent.getSurroundParent();
  }
  return null;
}

const excludedKeys = {
  simulate: true,
  effect: true,
  renderShape: true,
  renderEffect: true,
  renderEffectTimer: true,
  rotation: true,
  lastBrokeTime: true,
  timeTrapIntersecting: true,
  isText: true,
  isWinpad: true,
  isCoindoor: true,
  id: true
};

// TODO: constraints. SnapDistance shouldn't be negative (could be abs'ed which could be a type of constraint) but some stuff just needs to stay between 0,1, e.g. decay