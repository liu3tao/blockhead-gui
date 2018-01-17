'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');


// Block definitions

Blockly.defineBlocksWithJsonArray([{
  "type": "profile_probability_block",
  "message0": "Probability: %1 %2 %3",
  "args0": [
    {
      "type": "field_number",
      "name": "prob_val",
      "value": 0.5,
      "min": 0,
      "max": 1,
      "precision": 0.1
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "action_block"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 120,
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "profile_root_block",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "field_input",
      "name": "block_name",
      "text": "New Block"
    },
    {
      "type": "input_dummy"
    },
    {
      "type": "input_statement",
      "name": "action_block"
    }
  ],
  "colour": 120,
  "tooltip": "Define a new action block",
  "helpUrl": ""
},
{
  "type": "action_template_with_arg",
  "message0": "actor 1: action 1 %1 %2 %3 %4",
  "args0": [
    {
      "type": "input_dummy"
    },
    {
      "type": "input_value",
      "name": "action_arg1"
    },
    {
      "type": "input_value",
      "name": "action_arg2"
    },
    {
      "type": "input_value",
      "name": "action_arg3"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sample test action, with argument",
  "helpUrl": ""
},
{
  "type": "action_template_no_arg",
  "message0": "actor 1: action 1",
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sample test action, no argument.",
  "helpUrl": ""
}]);

// Code generator of the block.
Blockly.Python['profile_probability_block'] = function(block) {
  var number_prob_val = block.getFieldValue('prob_val');
  var statements_action_block = Blockly.Python.statementToCode(block, 'action_block');
  var code = '- <Probability=' + number_prob_val + '>:\n';
  code += statements_action_block;
  return code;
};

Blockly.Python['profile_root_block'] = function(block) {
  var text_block_name = block.getFieldValue('block_name');
  var statements_action_block = Blockly.Python.statementToCode(block, 'action_block');
  var code = text_block_name + ':\n';
  code += statements_action_block;
  return code;
};

Blockly.Python['action_template_with_arg'] = function(block) {
  var value_action_arg1 = Blockly.Python.valueToCode(block, 'action_arg1', Blockly.Python.ORDER_ATOMIC);
  var value_action_arg2 = Blockly.Python.valueToCode(block, 'action_arg2', Blockly.Python.ORDER_ATOMIC);
  var value_action_arg3 = Blockly.Python.valueToCode(block, 'action_arg3', Blockly.Python.ORDER_ATOMIC);
  var code = '- Sample actor: sample action ' + '[' +
              value_action_arg1 + ', ' + value_action_arg2 + ', ' + value_action_arg3 + ']' +
              '\n';
  return code;
};

Blockly.Python['action_template_no_arg'] = function(block) {
  var code = '- Sample actor: sample action\n';
  return code;
};
