

function convert(degree) {
	var x;
	if (degree == "C"){
		x = document.getElementById("input-celcius").value * 9/5 + 32;
		document.getElementById("input-fahrenheit").value = Math.round(x);
	} else {
		x = (document.getElementById("input-fahrenheit").value -32) * 5/9;
		document.getElementById("input-celcius").value = Math.round(x);
	}
}
