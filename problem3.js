/*function signature/sample */
function deleteInvalids(array) {
	if (!Array.isArray(array)) {
		return "Invalid Array";
	}
	let result = [];
	for (let i = 0; i < array.length; i++) {
		if (typeof array[i] === "number" && !isNaN(array[i])) {
			result.push(array[i]);
		}
	}
	return result;
}

let array = {num: [ 1 , 2 , 3 ]};
// console.log(NaN=== "NaN"?true:false)
let result = deleteInvalids(array);
console.log(result)
