/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

// Create a custom block called 'add_text' that adds
// text to the output div on the sample app.
// This is just an example and you should replace this with your
// own custom blocks.

// time: 0.1 - 0.05ms. Performance is fine.
const emojis = [["\u{1F680}", "\u{1F680}"]];// double list of emojis because that's what blockly accepts
const emojiRange = [
  [0x1F600, 0x1F64F],  // Emoticons
  [0x1F7E0, 0x1F7EB],  // Geometric Shapes Extended
  [0x1F90B, 0x1F9FF],  // Supplemental Symbols and Pictographs
];
for(let i = 0; i < emojiRange.length; i++){
  for(let j = emojiRange[i][0]; j < emojiRange[i][1]; j++){
    const emoji = String.fromCodePoint(j);
    emojis.push([emoji, emoji]);
  }
}
emojis.push(["\u2705", "\u2705"], ["\u26C5", "\u26C5"], ["\u{1F300}", "\u{1F300}"]);

// swapping emojis to get a nicer default
// let temp = emojis[0];
// emojis[0] = emojis[1];
// emojis[1] = temp;
// emojis[1] = emojis[2];
// emojis[2] = temp;

const blockData = [
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
  {
    'type': 'set_x',
    'message0': 'set x to %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'X',
        'check': 'Number',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': '#07ced9',
    'tooltip': "sets the current sprite's horizontal position, 0 being at the left of the screen and 900 being at the right",
    'helpUrl': '',
  },
  {
    'type': 'set_y',
    'message0': 'set y to %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'Y',
        'check': 'Number',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': '#07ced9',
    'tooltip': "sets the current sprite's vertical position, 0 being at the top of the screen and 1600 being at the bottom",
    'helpUrl': '',
  },
  {
    'type': 'set_size',
    'message0': 'set scale to %1 percent',
    'args0': [
      {
        'type': 'input_value',
        'name': 'S',
        'check': 'Number',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    'colour': '#07ced9',
    'tooltip': '',
    'helpUrl': '',
  },
  {
    'type': 'x_variable',
    'message0': 'x position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': 'gets the current horizonatl position',
    'helpUrl': '',
  },
  {
    'type': 'y_variable',
    'message0': 'y position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': 'gets the current vertical position',
    'helpUrl': '',
  },
  {
    "type": "forever",
    "message0": "forever",
    "args0": [
      
    ],
    "message1": "%1",
    "args1": [
      {
        "type": "input_statement",
        "name": "CODE_INSIDE"
      }
    ],
    "colour": '#07ced9'
  },
  {
    "type": "set_sprite",
    "message0": "Set sprite %1",
    "args0": [
      {
        "type": "field_dropdown",
        "name": "SPRITENAME",
        "options": [
          // ...emojis.map(e => [e, e])
          ...emojis
        ]
      }
    ],
    "colour": '#07ced9',
    "previousStatement": null,
    "nextStatement" : null
  },
  {
    "type": "bg_color",
    "message0": "Set background color to %1",
    "args0": [
      {
        "type": "field_colour",
        "name": "COLOR",
      }
    ],
    "colour": '#07ced9',
    "previousStatement": null,
    "nextStatement" : null,
  },
  {
    'type': 'bg_image',
    'message0': 'Set background image to %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'URL',
        'check': 'String',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    "colour": '#07ced9',
    'tooltip': 'sets the background image to a url on the internet. A url should look something like: https://example.com',
    'helpUrl': '',
  },
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
    "colour": '#07ced9',
    'tooltip': 'sets the music to a url on the internet. A music url should look something like: https://youtube.com/watch?v=SOMEDIGITS. You MUST interact with the webpage before the audio can play.',
    'helpUrl': '',
  },
  {
    'type': 'stop_music',
    'message0': 'stop music',
    'args0': [],
    'previousStatement': null,
    'nextStatement': null,
    "colour": '#07ced9',
    'tooltip': 'stops music if it is playing',
    'helpUrl': '',
  },
  {
    'type': 'mouse_x',
    'message0': 'mouse x position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': 'the horizontal position of the mouse, ranging from 0 to 900',
    'helpUrl': '',
  },
  {
    'type': 'mouse_y',
    'message0': 'mouse y position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': 'the vertical position of the mouse, ranging from 0 to 1600',
    'helpUrl': '',
  },
  {
    "type": "this_touching",
    "message0": "touching %1",
    "args0": [
      {
        "type": "input_dummy",
        "name": "INPUT",
      }
    ],
    "extensions": ["dynamic_menu_extension"],
    "colour": '#07ced9',
    "output": 'Boolean'
  },
  {
    'type': 'sprite_url',
    'message0': 'Set sprite image to %1',
    'args0': [
      {
        'type': 'input_value',
        'name': 'URL',
        'check': 'String',
      },
    ],
    'previousStatement': null,
    'nextStatement': null,
    "colour": '#07ced9',
    'tooltip': 'sets the sprite image to a url on the internet. A url should look something like: https://example.com',
    'helpUrl': '',
  },
]

Blockly.Extensions.register('dynamic_menu_extension',
  function() {
    this.getInput('INPUT')
      .appendField(
      new Blockly.FieldDropdown(
        function() {
          const arr = [['mouse-pointer', 'mouse']];
          const seenEmoji = {};
          for(let i = 0; i < entities.length; i++){
            if(window.workspaceToId[window.workspaceName] === i && window.codeLoaded === true) continue;
            // TODO: "clones of" x instead of just listing out all the current clones bc that can break. 
            arr.push([entities[i].emoji + (seenEmoji[entities[i].emoji] > 0 ? ` (${seenEmoji[entities[i].emoji]})` : ''), entities[i].id.toString()]);
            if(seenEmoji[entities[i].emoji] === undefined) seenEmoji[entities[i].emoji] = 1;
            else seenEmoji[entities[i].emoji]++;
          }
          return arr;
        }
      ), 'SPRITE_ID');
  }
);

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);