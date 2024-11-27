import shared from '../shared/shared.js';
import SAT from 'sat';
shared.SAT = SAT;
global.window = {SAT};

import ip from "ip";
const i = {p: ip.address()};
const prodIps = ["207.148.14.118"];
global.env = prodIps.includes(i.p) ? 'prod' : 'dev';
delete i.p;

const encoder = new TextEncoder();
global.encodeAtPosition = (string, u8array, position) => {
	return encoder.encodeInto(
		string,
		position ? u8array.subarray(position | 0) : u8array,
	);
}