/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';

/**
 * Saves the state of the workspace to browser's local storage.
 * @param {Blockly.Workspace} workspace Blockly workspace to save.
 * @param {String} spriteId Sprite name to save workspace of.
 */
export const save = function(workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  window.localStorage?.setItem("ws", JSON.stringify(data));
};

/**
 * Loads saved state from local storage into the given workspace.
 * @param {Blockly.Workspace} workspace Blockly workspace to load into.
 * @param {String} spriteId Sprite name to save workspace of.
 */
window.onWorkspaceLoadFunctions = [];
export const load = function(workspace) {
  const data = window.localStorage?.getItem("ws");
  if (!data) {window.workspaceLoaded = true; return;}

  // Don't emit events during loading.
  Blockly.Events.disable();
  Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
  Blockly.Events.enable();

  window.workspaceLoaded = true;
  for(let i = 0; i < window.onWorkspaceLoadFunctions.length; i++) { window.onWorkspaceLoadFunctions[i](); }
};