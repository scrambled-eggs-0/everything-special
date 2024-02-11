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
    'tooltip': '',// TODO: tooltips
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
    'tooltip': '',
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
    'tooltip': '',// TODO: tooltips
    'helpUrl': '',
  },
  {
    'type': 'x_variable',
    'message0': 'x position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': '',
    'helpUrl': '',
  },
  {
    'type': 'y_variable',
    'message0': 'y position',
    'args0': [],
    'output': 'Number',
    'colour': '#07ced9',
    'tooltip': '',
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
  // {
  //   "type": "set_sprite",
  //   "message0": "drop down: %1",
  //   "args0": [
  //     {
  //       "type": "field_dropdown",
  //       "name": "SPRITENAME",
  //       "options": [
  //         [ "🤔", "ITEM1" ],
  //         [ "💪", "ITEM2" ],
  //         [ "✅", "ITEM2" ],
  //       ]
  //     }
  //   ],
  //   "colour": '#07ced9'
  // }
  {
    'type': 'sprite_url',
    'message0': 'Set sprite image to (https://) %1',
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
    'tooltip': '',
    'helpUrl': '',
  },
]

// Create the block definitions for the JSON-only blocks.
// This does not register their definitions with Blockly.
// This file has no side effects!
export const blocks = Blockly.common.createBlockDefinitionsFromJsonArray(blockData);
