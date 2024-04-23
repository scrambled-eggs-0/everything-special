// ok so we DO have to do this on the server because we are going to store both the workspace and code in the db because it's too hard to calculate on the client
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const Blockly = require('blockly');// THIS is the error
const libraryBlocks = require('blockly/blocks');
const { javascriptGenerator } = require('blockly/javascript');

import '../../client/components.js';
import textData from "../../shared/textData.js";
const { JSBlockData, JSBlockNames } = textData;

for(let i = 0; i < JSBlockNames.length; i++){
  Blockly.Blocks[JSBlockNames[i]] = JSBlockData[i](Blockly);
}

for(let key in global.window){
    global[key] = global.window[key];
}
global.isServer = true;
global.window.onWorkspaceLoadFunctions=[];
global.window.workspaceLoaded = false;
global.window.fixPolygon=(p)=>{return new GrahamScan(p).hull;}

import blocks from './text.js';
import forBlock from '../../shared/forBlock.js';

Blockly.common.defineBlocks(libraryBlocks);
Blockly.common.defineBlocks(blocks);
Object.assign(javascriptGenerator.forBlock, forBlock);

const validatorWorkspace = new Blockly.Workspace();
Blockly.Events.disable();

export default function validate(wsData) {
    let code;
    try {
        Blockly.serialization.workspaces.load(JSON.parse(wsData), validatorWorkspace);
        code = javascriptGenerator.workspaceToCode(validatorWorkspace);
    } catch(e) {
        console.log('upload failed!', e);
        return false;
    }
    
    // console.log(code.replaceAll('var ', 'let '));
    // return false;
    return code;
}
 
// fixPolygon stuff
const X = 0;
const Y = 1;
const REMOVED = -1;
class GrahamScan {
    constructor(points=[[0,1],[1,1]]){
        this.points = points;
        this.hull = this.getHull();
    }
    getHull() {
        const pivot = this.preparePivotPoint();

        let indexes = Array.from(this.points, (point, i) => i);
        const angles = Array.from(this.points, (point) => this.getAngle(pivot, point));
        const distances = Array.from(this.points, (point) => this.euclideanDistanceSquared(pivot, point));

        // sort by angle and distance
        indexes.sort((i, j) => {
            const angleA = angles[i];
            const angleB = angles[j];
            if (angleA === angleB) {
                const distanceA = distances[i];
                const distanceB = distances[j];
                return distanceA - distanceB;
            }
            return angleA - angleB;
        });

        // remove points with repeated angle (but never the pivot, so start from i=1)
        for (let i = 1; i < indexes.length - 1; i++) {
            if (angles[indexes[i]] === angles[indexes[i + 1]]) {  // next one has same angle and is farther
                indexes[i] = REMOVED;  // remove it logically to avoid O(n) operation to physically remove it
            }
        }

        const hull = [];
        for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const point = this.points[index];

            if (index !== REMOVED) {
                if (hull.length < 3) {
                    hull.push(point);
                } else {
                    while (this.checkOrientation(hull[hull.length - 2], hull[hull.length - 1], point) > 0) {
                        hull.pop();
                    }
                    hull.push(point);
                }
            }
        }

        return hull.length < 3 ? [] : hull;
    }
    checkOrientation(p1, p2, p3) {
        return (p2[Y] - p1[Y]) * (p3[X] - p2[X]) - (p3[Y] - p2[Y]) * (p2[X] - p1[X]);
    }
    getAngle(a, b) {
        return Math.atan2(b[Y] - a[Y], b[X] - a[X]);
    }
    euclideanDistanceSquared(p1, p2) {
        const a = p2[X] - p1[X];
        const b = p2[Y] - p1[Y];
        return a * a + b * b;
    }
    preparePivotPoint() {
        let pivot = this.points[0];
        for (let i = 1; i < this.points.length; i++) {
            const point = this.points[i];
            if (point[Y] < pivot[Y] || point[Y] === pivot[Y] && point[X] < pivot[X]) {
                pivot = point;
            }
        }
        return pivot;
    }
}