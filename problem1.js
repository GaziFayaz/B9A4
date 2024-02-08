/*function signature/sample */
function calculateMoney(ticketSale) {
  if(ticketSale<0){
    return "Invalid Number"
  }
  else{
		const result = (ticketSale * 120) - (500+(8*50))
		return result
	}
}

const arg = process.argv.slice(2);
const result = calculateMoney(arg);
console.log(result);