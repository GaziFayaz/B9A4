function calculateMoney(ticketSale) {
  if(ticketSale<0){
    return "Invalid Number"
  }
  else{
		const result = (ticketSale * 120) - (500+(8*50))
		return result
	}
}

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