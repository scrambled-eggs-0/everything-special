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
    //   "message0": "Set background color to %1",
    //   "args0": [
    //     {
    //       "type": "field_colour",
    //       "name": "COLOR",
    //     }
    //   ],
    //   "colour": '#07ced9',
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
    // {
    //   'type': 'set_music',
    //   'message0': 'Set music to youtube url %1',
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
    //   'tooltip': 'sets the music to a url on the internet. A music url should look something like: https://youtube.com/watch?v=SOMEDIGITS. You MUST interact with the webpage before the audio can play.',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'stop_music',
    //   'message0': 'stop music',
    //   'args0': [],
    //   'previousStatement': null,
    //   'nextStatement': null,
    //   "colour": '#07ced9',
    //   'tooltip': 'stops music if it is playing',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'mouse_x',
    //   'message0': 'mouse x position',
    //   'args0': [],
    //   'output': 'Number',
    //   'colour': '#07ced9',
    //   'tooltip': 'the horizontal position of the mouse, ranging from 0 to 900',
    //   'helpUrl': '',
    // },
    // {
    //   'type': 'mouse_y',
    //   'message0': 'mouse y position',
    //   'args0': [],
    //   'output': 'Number',
    //   'colour': '#07ced9',
    //   'tooltip': 'the vertical position of the mouse, ranging from 0 to 1600',
    //   'helpUrl': '',
    // },
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
    'create_obstacle'
  ],
  JSBlockData: [
    function(Blockly) {
      return {
        // TODO: use insertFieldAt method and some getter to insert fields in the right place. https://developers.google.com/blockly/reference/js/blockly.input_class.insertfieldat_1_method
        init: function() {
          this.setColour(194);

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
          // remove existing
          for(let i = 0; i < this.numSimulateFields; i++){
            this.removeInput(`SIMULATE_CONTAINER${i}`, true);
          }

          for(let key in this.simulateParamToId){
            this.removeInput(this.simulateParamToId[key]);
          }
          this.simulateParamToId = {};

          this.simulateOptions = [];
          for(let i = 0; i < window.simulateMapI2N.length; i++){
            this.simulateOptions.push([window.simulateMapI2N[i], i.toString()]);
          }

          let insertionIndex = this.getIndexOfInput(`NUM_SIMULATES_CONTAINER`) + 1;

          // add new
          for(let i = 0; i < newValue; i++){
            const sourceBlock = this;
            const dropdown = new Blockly.FieldDropdown(function() { return sourceBlock.generateSimulateDropdownOptions(this, sourceBlock) }, this.validateSimulateDropdown);
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
          // remove existing
          for(let i = 0; i < this.numEffectFields; i++){
            this.removeInput(`EFFECT_CONTAINER${i}`, true);
          }

          for(let key in this.effectParamToId){
            this.removeInput(this.effectParamToId[key]);
          }
          this.effectParamToId = {};

          this.effectOptions = [];
          for(let i = 0; i < window.effectMapI2N.length; i++){
            this.effectOptions.push([window.effectMapI2N[i], i.toString()]);
          }

          // lol we already are at the end so we don't need to do this 

          // let insertionIndex = this.getIndexOfInput(`NUM_EFFECTS_CONTAINER`) + 1;

          // add new
          for(let i = 0; i < newValue; i++){
            const sourceBlock = this;
            const dropdown = new Blockly.FieldDropdown(function() { return sourceBlock.generateEffectDropdownOptions(this, sourceBlock) }, this.validateEffectDropdown);
            dropdown.id = i;
            this.appendDummyInput(`EFFECT_CONTAINER${i}`)
              .appendField('effect:')
              .appendField(dropdown, `EFFECT_DROPDOWN${i}`);

            /*insertionIndex = */this.updateEffectDropdown(this.getFieldValue(`EFFECT_DROPDOWN${i}`), i);

            // this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
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
              .setCheck(null)
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

          let insertionIndex = this.getIndexOfInput(`SIMULATE_CONTAINER${dropdownId}`) + 1;

          const newValueArr = Object.keys(newValueMap);
          for(let i = newValueArr.length-1; i >= 0; i--){
            const key = newValueArr[i];
            const id = 'SIMULATE' + this.simulateIdGenerator++;
            this.simulateParamToId[key] = id;
            this.appendValueInput(id)
              .appendField(key + ':')
              .setCheck(null)
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(newValueMap[key])));
            
            this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
          }
          
          return insertionIndex;
        },

        updateEffectDropdown: function(newValue, dropdownId) {
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

          let insertionIndex = this.getIndexOfInput(`EFFECT_CONTAINER${dropdownId}`) + 1;

          const newValueArr = Object.keys(newValueMap);
          for(let i = newValueArr.length-1; i >= 0; i--){
            const key = newValueArr[i];
            const id = 'EFFECT' + this.effectIdGenerator++;
            this.effectParamToId[key] = id;
            this.appendValueInput(id)
              .appendField(key + ':')
              .setCheck(null)
              .setShadowDom(Blockly.utils.xml.textToDom(generateShadowBlock(newValueMap[key])));

            this.inputList.splice(insertionIndex++, 0, this.inputList.pop());
          }
          return insertionIndex;
        },

        // TODO: make this not crash lol
        saveExtraState: function() {
          return {
            'itemCount': this.itemCount_,
          };
        },
        
        loadExtraState: function(state) {
          this.itemCount_ = state['itemCount'];
        },
      };
    }
  ]
}

function generateShadowBlock(value){
  // see https://blockly-demo.appspot.com/static/demos/code/index.html for xml decoding
  const type = typeof value;
  if(type === 'number'){
    return '<shadow type="math_number">' +
      `<field name="NUM">${value}</field>` +
    '</shadow>'
  } else if(type === 'string') {
    return '<shadow type="text">' +
      `<field name="TEXT">${value}</field>` +
    '</shadow>'
  } else if(type === 'boolean'){
    return '<shadow type="logic_boolean">' +
      `<field name="BOOL">${value === true ? 'TRUE' : 'FALSE'}</field>` +
    '</shadow>'
  } else if(Array.isArray(value)){
    console.log(this);
    return '<shadow type="lists_create_with">' +
      `<mutation items="${value.length}"></mutation>` +
      value.map((v, i) => {
        if(v === null) return '';
        return `<value name="ADD${i}">` + generateShadowBlock(v) + '</value>';
      }) +
    '</shadow>'
  }// else {
  //  // object?
  // }
}