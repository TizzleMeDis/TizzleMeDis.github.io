init();
function init() {
	let calculate = document.getElementById('calculate');
	let tipAmount = document.getElementById('tip-amount');
	let totalBill = document.getElementById('total-bill');

	calculate.addEventListener('click', () => {
		let billAmount = document.getElementById('bill-amount').value;
		let percentageAmount = document.getElementById('percentage').value;
		tipAmount.innerText =String(roundFloat(billAmount*percentageAmount*.01));
		totalBill.innerText =String(roundFloat(parseFloat(billAmount)+parseFloat(tipAmount.value)));
	});

}

function roundFloat(x) {
	return Number.parseFloat(x).toFixed(2);
}