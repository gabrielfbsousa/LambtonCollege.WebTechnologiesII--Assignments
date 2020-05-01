/**
 * @author Gabriel
 */
"use strict";
var $ = function(id) {
	return document.getElementById(id);
};

//esse metodo nao eh meu. Eu usei o do exemplo
var calculateFV = function(investment, rate, years) {
	var futureValue = investment;
	for (var i = 1; i <= years; i++) {
		futureValue += futureValue * rate / 100;
	}
	futureValue = futureValue.toFixed(2);
	return futureValue;
};

var execution = function() {
	var investmentField = ($("total_investment").value);
	var totalInvestment = parseFloat($("total_investment").value);
	var annualInterestRate = parseFloat($("annual_interest_rate").value);
	var numberOfYears = parseFloat($("number_of_years").value);
	var isValid = true;

	if (investmentField.toString().length == 0) {
		$("total_investment_error").firstChild.nodeValue = "This field is required";
		isValid = false;
	} 
	
	if(isNaN(investmentField)){
		$("total_investment_error").firstChild.nodeValue = "This field must be a Number";
		isValid = false;
	}

	if (annualInterestRate <= 0 || annualInterestRate > 15) {
		$("annual_interest_rate_error").firstChild.nodeValue = "Must be > 0 and <=15";
		isValid = false;
	} 

	if (numberOfYears <= 0 || numberOfYears > 50) {
		$("number_of_years_error").firstChild.nodeValue = "Must be > 0 and <= 15";
		isValid = false;
	} 

	if (isValid) {
		$("future_value").value = calculateFV(totalInvestment, annualInterestRate, numberOfYears);
	}
};

var clean = function() {
	$("total_investment").value = "";
	$("annual_interest_rate").value = "";
	$("number_of_years").value = "";
	$("future_value").value = "";
	$("total_investment_error").firstChild.nodeValue = "*";
	$("annual_interest_rate_error").firstChild.nodeValue = "*";
	$("number_of_years_error").firstChild.nodeValue = "*";
};

var clearRateField = function(){
	$("annual_interest_rate").value = "";
};

window.onload = function() {
	$("calculate").onclick = execution;
	$("clear").onclick = clean;
};
