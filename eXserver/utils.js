import SAT from 'sat';
global.window = {SAT};
global.env = 'dev';

const encoder = new TextEncoder();
global.encodeAtPosition = (string, u8array, position) => {
	return encoder.encodeInto(
		string,
		position ? u8array.subarray(position | 0) : u8array,
	);
}