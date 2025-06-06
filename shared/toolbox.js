/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

/*
This toolbox contains nearly every single built-in block that Blockly offers,
in addition to the custom block 'add_text' this sample app adds.
You probably don't need every single block, and should consider either rewriting
your toolbox from scratch, or carefully choosing whether you need each block
listed here.
*/

export default /*const toolbox =*/ {
  'kind': 'categoryToolbox',
  'contents': [
    {
      'kind': 'category',
      'name': 'Obstacle',
      'categorystyle': 'obstacle_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'create_obstacle'
        },
        {
          'kind': 'block',
          "type": "create_obstacle",
          "extraState": {
            "shapeParamToId": {
              "r": "SHAPE0",
              "y": "SHAPE1",
              "x": "SHAPE2"
            },
            "numSimulateFields": 1,
            "numEffectFields": 1,
            "sditk": ["3"],
            "editk": ["3"],
            "lastShape": "0"
          },
          "fields": {
            "SHAPE_DROPDOWN": "0",
            "NUM_SIMULATES_DROPDOWN": 1,
            "SIMULATE_DROPDOWN0": "3",
            "NUM_EFFECTS_DROPDOWN": 1,
            "EFFECT_DROPDOWN0": "3"
          },
        },
        {
          'kind': 'block',
          'type': 'get_parameter'
        },
        {
          'kind': 'block',
          'type': 'set_parameter'
        },
        // {
        //   'kind': 'block',
        //   'type': 'delete_obstacle'
        // },
      ],
    },
    {
      'kind': 'category',
      'name': 'Game',
      'categorystyle': 'game_category',
      'contents': [
        // {
        //   "kind": "button",
        //   "text": "Click to return to the main game!",
        //   "callbackKey": "returnToMainGame"
        // },
        {
          'kind': 'block',
          'type': 'debug_log',
          'inputs': {
            'MSG': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': "your message here...",
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'client_pos'
        },
        // {
        //   'kind': 'block',
        //   'type': 'is_dragging'
        // },
        {
          'kind': 'block',
          'type': 'player_spawn'
        },
        {
          'kind': 'block',
          'type': 'set_revives'
        },
        {
          'kind': 'block',
          'type': 'map_dimensions'
        },
        {
          'kind': 'block',
          'type': 'set_music',
          'inputs': {
            'URL': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': "https://www.youtube.com/watch?v=BUbZVWZQkyw"//"https://www.youtube.com/watch?v=-WYJ1Jh2kuI"//"https://www.youtube.com/watch?v=bMY4HPLLqDQ"//"https://www.youtube.com/watch?v=jVTsD4UPT-k"//"https://www.youtube.com/watch?v=i_7ekMgvRIk",
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'stop_music'
        },
        {
          'kind': 'block',
          'type': 'bg_color'
        },
        // {
        //   'kind': 'block',
        //   'type': 'collide_obstacles'
        // }
      ],
    },
    // {
    //   'kind': 'category',
    //   'name': 'Motion',
    //   'categorystyle': 'motion_category',
    //   'contents': [
    //     {
    //       'kind': 'block',
    //       'type': 'set_x',
    //       'inputs': {
    //         'X': {
    //           'shadow': {
    //             'type': 'math_number',
    //             'fields': {
    //               'NUM': 100,
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'set_y',
    //       'inputs': {
    //         'Y': {
    //           'shadow': {
    //             'type': 'math_number',
    //             'fields': {
    //               'NUM': 100,
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'x_variable',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'y_variable',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'forever',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'mouse_down',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'mouse_up',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'set_size',
    //       'inputs': {
    //         'S': {
    //           'shadow': {
    //             'type': 'math_number',
    //             'fields': {
    //               'NUM': 100,
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'sprite_url',
    //       'inputs': {
    //         'URL': {
    //           'shadow': {
    //             'type': 'text',
    //             'fields': {
    //               'TEXT': "http://tinyurl.com/dwayne-t-rj",
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'set_sprite',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'bg_color',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'bg_image',
    //       'inputs': {
    //         'URL': {
    //           'shadow': {
    //             'type': 'text',
    //             'fields': {
    //               'TEXT': "http://tinyurl.com/gd-bcg",
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'set_music',
    //       'inputs': {
    //         'URL': {
    //           'shadow': {
    //             'type': 'text',
    //             'fields': {
    //               'TEXT': "https://www.youtube.com/watch?v=i_7ekMgvRIk",
    //             },
    //           },
    //         },
    //       },
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'stop_music'
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'mouse_x',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'mouse_y',
    //     },
    //     {
    //       'kind': 'block',
    //       'type': 'this_touching',
    //     },
    //   ],
    // },
    {
      'kind': 'category',
      'name': 'Logic',
      'categorystyle': 'logic_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'controls_if',
        },
        {
          'kind': 'block',
          'type': 'logic_compare',
        },
        {
          'kind': 'block',
          'type': 'logic_operation',
        },
        {
          'kind': 'block',
          'type': 'logic_negate',
        },
        {
          'kind': 'block',
          'type': 'logic_boolean',
        },
        // {
        //   'kind': 'block',
        //   'type': 'logic_null',
        // },
        {
          'kind': 'block',
          'type': 'logic_ternary',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Loops',
      'categorystyle': 'loop_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'controls_repeat_ext',
          'inputs': {
            'TIMES': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'controls_whileUntil',
        },
        {
          'kind': 'block',
          'type': 'controls_for',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'TO': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
            'BY': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'controls_forEach',
        },
        {
          'kind': 'block',
          'type': 'break_continue',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Math',
      'categorystyle': 'math_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'math_number',
          'fields': {
            'NUM': 123,
          },
        },
        {
          'kind': 'block',
          'type': 'math_arithmetic',
          'inputs': {
            'A': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'B': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_single',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 9,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_trig',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 45,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_constant',
        },
        {
          'kind': 'block',
          'type': 'math_number_property',
          'inputs': {
            'NUMBER_TO_CHECK': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_round',
          'fields': {
            'OP': 'ROUND',
          },
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 3.1,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_on_list',
          'fields': {
            'OP': 'SUM',
          },
        },
        {
          'kind': 'block',
          'type': 'math_modulo',
          'inputs': {
            'DIVIDEND': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 64,
                },
              },
            },
            'DIVISOR': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 10,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_constrain',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 50,
                },
              },
            },
            'LOW': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'HIGH': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 100,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_random_int',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'TO': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 100,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'math_random_float',
        },
        {
          'kind': 'block',
          'type': 'math_atan2',
          'inputs': {
            'X': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
            'Y': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 1,
                },
              },
            },
          },
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Text',
      'categorystyle': 'text_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'text',
        },
        {
          'kind': 'block',
          'type': 'text_multiline',
        },
        {
          'kind': 'block',
          'type': 'text_join',
        },
        {
          'kind': 'block',
          'type': 'text_append',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': '',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_length',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_isEmpty',
          'inputs': {
            'VALUE': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': '',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_indexOf',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
            'FIND': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_charAt',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_getSubstring',
          'inputs': {
            'STRING': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_changeCase',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_trim',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': 'abc',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_count',
          'inputs': {
            'SUB': {
              'shadow': {
                'type': 'text',
              },
            },
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_replace',
          'inputs': {
            'FROM': {
              'shadow': {
                'type': 'text',
              },
            },
            'TO': {
              'shadow': {
                'type': 'text',
              },
            },
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'text_reverse',
          'inputs': {
            'TEXT': {
              'shadow': {
                'type': 'text',
              },
            },
          },
        },
        // {
        //   'kind': 'block',
        //   'type': 'add_text',
        //   'inputs': {
        //     'TEXT': {
        //       'shadow': {
        //         'type': 'text',
        //         'fields': {
        //           'TEXT': 'abc',
        //         },
        //       },
        //     },
        //     'COLOR': {
        //       'shadow': {
        //         'type': 'colour_picker',
        //         'fields': {
        //           'COLOUR': '#aa00cc',
        //         },
        //       },
        //     },
        //   },
        // },
      ],
    },
    {
      'kind': 'category',
      'name': 'Lists',
      'categorystyle': 'list_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'create_list',
        },
        {
          'kind': 'block',
          'type': 'lists_repeat',
          'inputs': {
            'NUM': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 5,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_length',
        },
        {
          'kind': 'block',
          'type': 'lists_isEmpty',
        },
        {
          'kind': 'block',
          'type': 'lists_indexOf',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_getIndex',
          'inputs': {
            'VALUE': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_setIndex',
          'inputs': {
            'LIST': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_getSublist',
          'inputs': {
            'LIST': {
              'block': {
                'type': 'variables_get',
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_split',
          'inputs': {
            'DELIM': {
              'shadow': {
                'type': 'text',
                'fields': {
                  'TEXT': ',',
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'lists_sort',
        },
        {
          'kind': 'block',
          'type': 'lists_reverse',
        },
      ],
    },
    {
      'kind': 'category',
      'name': 'Color',
      'categorystyle': 'colour_category',
      'contents': [
        {
          'kind': 'block',
          'type': 'colour_picker',
        },
        {
          'kind': 'block',
          'type': 'colour_random',
        },
        {
          'kind': 'block',
          'type': 'colour_rgb',
          'inputs': {
            'RED': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 100,
                },
              },
            },
            'GREEN': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 50,
                },
              },
            },
            'BLUE': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0,
                },
              },
            },
          },
        },
        {
          'kind': 'block',
          'type': 'colour_blend',
          'inputs': {
            'COLOUR1': {
              'shadow': {
                'type': 'colour_picker',
                'fields': {
                  'COLOUR': '#ff0000',
                },
              },
            },
            'COLOUR2': {
              'shadow': {
                'type': 'colour_picker',
                'fields': {
                  'COLOUR': '#3333ff',
                },
              },
            },
            'RATIO': {
              'shadow': {
                'type': 'math_number',
                'fields': {
                  'NUM': 0.5,
                },
              },
            },
          },
        },
      ],
    },
    {
      'kind': 'sep',
    },
    {
      'kind': 'category',
      'name': 'Variables',
      'categorystyle': 'variable_category',
      'custom': 'VARIABLE',
    },
    {
      'kind': 'category',
      'name': 'Functions',
      'categorystyle': 'procedure_category',
      'custom': 'PROCEDURE',
    },
  ],
};
