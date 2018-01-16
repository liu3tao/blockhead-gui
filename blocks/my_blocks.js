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
  "message0": "actor 1: action 1 %1",
  "args0": [
    {
      "type": "input_value",
      "name": "action_statment"
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 230,
  "tooltip": "Sample test action, with argument",
  "helpUrl": ""
},
{
  "type": "argument_template",
  "message0": "%1 %2 %3",
  "args0": [
    {
      "type": "input_value",
      "name": "arg1"
    },
    {
      "type": "input_value",
      "name": "arg2"
    },
    {
      "type": "input_value",
      "name": "arg3"
    }
  ],
  "inputsInline": true,
  "output": null,
  "colour": 230,
  "tooltip": "Sample test action.",
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
Blockly.JavaScript['profile_probability_block'] = function(block) {
  var number_prob_val = block.getFieldValue('prob_val');
  var statements_action_block = Blockly.JavaScript.statementToCode(block, 'action_block');
  // TODO: Assemble JavaScript into code variable.
  var code = 'profile_probability_block\n';
  return code;
};

Blockly.JavaScript['profile_root_block'] = function(block) {
  var text_block_name = block.getFieldValue('block_name');
  var statements_action_block = Blockly.JavaScript.statementToCode(block, 'action_block');
  // TODO: Assemble JavaScript into code variable.
  var code = 'profile_root_block\n';
  return code;
};

Blockly.JavaScript['action_template_with_arg'] = function(block) {
  var value_action_statment = Blockly.JavaScript.valueToCode(
      block, 'action_statment', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'action_template_with_arg\n';
  return code;
};

Blockly.JavaScript['argument_template'] = function(block) {
  var value_arg1 = Blockly.JavaScript.valueToCode(block, 'arg1', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arg2 = Blockly.JavaScript.valueToCode(block, 'arg2', Blockly.JavaScript.ORDER_ATOMIC);
  var value_arg3 = Blockly.JavaScript.valueToCode(block, 'arg3', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'argument_template';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['action_template_no_arg'] = function(block) {
  // TODO: Assemble JavaScript into code variable.
  var code = 'action_template_no_arg\n';
  return code;
};
