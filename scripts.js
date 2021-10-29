//script.js

//custom funcction
function calculateTip() {

	//store the data of inputs
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	//validation (kur nuk shtohet asgje, as llogari, as njerez)
	if(billAmount === "" || serviceQuality==0 ) {
		window.alert("Please enter some values!");
		return;
	}

	//check to see if this input is empty or less than or equal to 1
	if(numPeople === "" || numPeople <= 1) {
		numPeople = 1;

		//fsheh id-n each
		document.getElementById("each").style.display= "none";
	}else{
		document.getElementById("each").style.display = "block";
	}

	//llogaritja
	var total = (billAmount * serviceQuality) / numPeople;
	total = Math.round(total * 100)/100;
	total = total.toFixed(2);

	//display tip
	document.getElementById("totalTip").style.display="block";
	document.getElementById("tip").innerHTML = total;

}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//clicking the button calls our custom funsction
document.getElementById('calculate').onclick = function() { 
	calculateTip(); 
};