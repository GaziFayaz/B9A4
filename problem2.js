/*function signature/sample */
function checkName(name) {
	if (typeof name !== "string") {
		return "invalid";
	} else {
		let last_char = name[name.length - 1];
		if (['a','e','i','o','u', 'w','y'].includes(last_char.toLowerCase())) {
			return "Good Name";
		} else {
			return "Bad Name";
		}
	}
}

const arg = process.argv.slice(2);
const result = checkName(arg[0]);
// console.log(typeof arg)
// console.log(arg)
console.log(result);
