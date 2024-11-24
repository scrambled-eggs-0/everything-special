import SAT from 'sat';
global.window = {SAT};

import ip from "ip";
const i = {p: ip.address()};
const prodIps = ["149.28.46.65"];
global.env = prodIps.includes(i.p) ? 'prod' : 'dev';
console.log({env: global.env});
delete i.p;

const encoder = new TextEncoder();
global.encodeAtPosition = (string, u8array, position) => {
	return encoder.encodeInto(
		string,
		position ? u8array.subarray(position | 0) : u8array,
	);
}