/*function signature/sample */
function monthlySavings(arr, livingCost) {
	if (!(Array.isArray(arr) && typeof livingCost === "number")) {
		return "invalid input";
	}
	let income = 0;
	for (let i = 0; i < array.length; i++) {
		arr[i] < 3000 ? (income += arr[i]) : (income += arr[i] * 0.8);
	}
	if (income < livingCost) {
		return "earn more";
	}
	return income - livingCost;
}

const array = 100;
const cost = [ 900 , 2700 , 3400];
const result = monthlySavings(array, cost);
console.log(result);
