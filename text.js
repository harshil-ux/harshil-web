function calculate() {
	var input = prompt("Enter your age")
	var age = input * 365
	var b = ("     you are " + age + " days old!")
	document.write(b)
}

function reset() {
	location.reload()
}