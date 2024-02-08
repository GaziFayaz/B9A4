/*function signature/sample */
function password(obj) {
	if (
		!(
			obj.name &&
			obj.birthYear &&
			obj.siteName &&
			obj.birthYear.toString().length === 4
		)
	) {
		return "invalid";
	}
	let result = `${obj.siteName[0].toUpperCase()}${obj.siteName.slice(1)}#${obj.name}@${obj.birthYear}`;
	return result;
}

const obj ={ name: "maisha" , birthYear: 2002 };
const result = password(obj);
console.log(result);
