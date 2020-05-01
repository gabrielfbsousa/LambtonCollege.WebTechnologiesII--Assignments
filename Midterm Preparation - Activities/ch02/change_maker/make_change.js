var $ = function (id) {
    return document.getElementById(id);
};

var make_change = function() {
	var amount = parseFloat($("cents").value);
	var quarters = 0;
	var dimes = 0;
	var nickels = 0;
	var pennies = 0;
	
	while (amount !=0){
		while(amount - 25 >= 0){
			amount = amount - 25;
			quarters++;
		}
		while(amount - 10 >= 0){
			amount = amount - 10;
			dimes++;
		}
		while(amount - 5 >= 0){
			amount = amount - 5;
			nickels++;
		}
		while(amount - 1 >= 0){
			amount = amount - 1;
			pennies++;
		}
	}
	
	$("quarters").value = quarters;
	$("quarters").setAttribute("disabled", "true");
	$("dimes").value = dimes;
	$("dimes").setAttribute("disabled", "true");
	$("nickels").value = nickels;
	$("nickels").setAttribute("disabled", "true");
	$("pennies").value = pennies;
	$("pennies").setAttribute("disabled", "true");
	
};

window.onload = function () {
   $("change").onclick = make_change;
};