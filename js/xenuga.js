function validateform() {
var name = document.myform.name.value;
var password = document.myform.password.value;
if(name == "" || name == "null"){
	alert("Fill Out Your Name Please");
	return false;
}
else if(password.length < 6){
	alert("Fill Out Your Name Please");
	return false;
}
}