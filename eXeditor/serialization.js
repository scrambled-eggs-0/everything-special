/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import * as Blockly from 'blockly/core';
import shared from '../shared/shared.js';

/**
 * Saves the state of the workspace to browser's local storage.
 * @param {Blockly.Workspace} workspace Blockly workspace to save.
 * @param {String} spriteId Sprite name to save workspace of.
 */
export const save = function(workspace) {
  const data = Blockly.serialization.workspaces.save(workspace);
  window.localStorage?.setItem("ws", JSON.stringify(data));
};

shared.getWS = (toStringify=false) => {
  console.log((toStringify ? JSON.stringify : (w)=>{return w;})(Blockly.serialization.workspaces.save(shared.ws)));
}

/**
 * Loads saved state from local storage into the given workspace.
 * @param {Blockly.Workspace} workspace Blockly workspace to load into.
 * @param {String} spriteId Sprite name to save workspace of.
 */
shared.onWorkspaceLoadFunctions = [];
export const load = function(workspace) {
  let data = window.localStorage?.getItem("ws");
  if (!data||data==='{}') data = '{"blocks":{"languageVersion":0,"blocks":[{"type":"bg_color","id":"*7Tb(!g#(SRGLCS,=NsO","x":30,"y":24,"inputs":{"BG_COLOR":{"shadow":{"type":"colour_rgb","id":"^MSK;j{H3~[i5T:/Vo]|","inputs":{"RED":{"shadow":{"type":"math_number","id":"ggK0()I($U;7v+vzN``d","fields":{"NUM":22}}},"GREEN":{"shadow":{"type":"math_number","id":"qGE{6X[M~L$btyv-Gfd+","fields":{"NUM":22}}},"BLUE":{"shadow":{"type":"math_number","id":"pk}T6Eb;e3(m_BWkk27{","fields":{"NUM":22}}}}}},"TILE_COLOR":{"shadow":{"type":"colour_rgb","id":"^(m^6C3y*Ia[e|0(@.))","inputs":{"RED":{"shadow":{"type":"math_number","id":"V}[HO#~`./)$B/wJXQ1M","fields":{"NUM":5}}},"GREEN":{"shadow":{"type":"math_number","id":"-7Z)et(p#yO71=S]#hTL","fields":{"NUM":5}}},"BLUE":{"shadow":{"type":"math_number","id":"I$$H:1K9:^-jzRheecoJ","fields":{"NUM":5}}}}}}}}]}}';

  // Don't emit events during loading.
  Blockly.Events.disable();
  Blockly.serialization.workspaces.load(JSON.parse(data), workspace, false);
  Blockly.Events.enable();

  shared.workspaceLoaded = true;
  for(let i = 0; i < shared.onWorkspaceLoadFunctions.length; i++) { shared.onWorkspaceLoadFunctions[i](); }
  shared.onWorkspaceLoadFunctions.length = 0;
};