var $ = function (id) {
    return document.getElementById(id);
};

var calculate_tax = function() {
	var income = parseFloat( $("income").value );
	var taxOwed = 0;
	
	if(income > 0 && !isNaN(income)){
		if(income > 0 && income <= 9225){
			taxOwed = income * .1;
		}
		else if (income > 9225 && income <= 37450){
			taxOwed = 922.5 + ((income-9225) * .15);
		}
		else if (income > 37450 && income <= 90750){
			taxOwed = 5156.25 + ((income-37450) * .25);
		}
		else if (income > 90750 && income <= 189300){
			taxOwed = 18481.25 + ((income-90750) * .28);
		}
		else if (income > 189300 && income <= 411500){
			taxOwed = 46075.25 + ((income-189300) * .33);
		}
		else if (income > 411500 && income <= 413200){
			taxOwed = 119401.25 + ((income-411500) * .35);
		}
		else if (income > 413200){
			taxOwed = 119996.25 + ((income-413200) * .396);
		}
		$("tax").value = taxOwed;
	}
	else {
		alert("Please, enter a number bigger than zero");
	}
	
};

window.onload = function () {
    $("calculate").onclick = calculate_tax;
};