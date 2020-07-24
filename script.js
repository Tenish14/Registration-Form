/*
All input boxes should not be empty
Username should be greater than 8 characters
Lastname should not be less than 1 characters
Password should be greater than 8 characters
Password and Confirm Paswword should match
*/
document.getElementById('btn').addEventListener('click' , function(e){
let userName  = document.getElementById('username').value	
let firstName = document.getElementById('firstname').value
let lastName = document.getElementById('lastname').value
let email = document.getElementById('email').value
let pw = document.getElementById('password').value
let confirmPw =  document.getElementById('confirmPassword').value
let gender = document.getElementById('gen').value
var m0 = document.getElementById('error0')
var m1 = document.getElementById('error1')
var m2 = document.getElementById('error2')
var m3 = document.getElementById('error3')
var m4 = document.getElementById('error4')
var m5 = document.getElementById('error5')
var m6 = document.getElementById('genders')
	
	if(userName == "") {
		m0.innerHTML = "Write Something"
		return false
	}
	else if(userName.length < 8){
		m0.innerHTML = "Firstname at least have 8 characters"
		return false
	} else {
		m0.innerHTML = "Ok"
	}

	if(firstName == "") {
		m1.innerHTML = "Write Something"
		return false
	}
	else if(firstName.length < 8){
		m1.innerHTML = "Firstname at least have 8 characters"
		return false
	} else {
		m1.innerHTML = "Ok"
	}	
	if(lastName == ""){
		m2.innerHTML ="Lastname should be filled out"
		return false
	}
	else if(lastname.length < 1){
		m2.innerHTML = "Your lastname minimum need 1 characters"
		return false
	} else{
		m2.innerHTML = "Ok"
	}

	if (email == "") {
		m3.innerHTML = 'Email should be filled out'
		return false
	} else {
		m3.innerHTML = "Ok"
	}

	if (pw == ""){
		m4.innerHTML = 'Password should be filled out'
		return false
	}
	else if(pw.length < 8 ){
		m4.innerHTML = "Your password should to be 8 characters"
		return false
	} else {
		m4.innerHTML = "Ok"
	}
	if (confirmPw == ""){
		m5.innerHTML = 'Confirm Password should be filled out'
		return false
	}
	else if(confirmPw.length < 8 ){
		m5.innerHTML = "Your confirm password should to be 8 characters"
		return false
	}
	if(pw != confirmPw){
		m5.innerHTML = "Your password does match"
		return false
	} else {
		m5.innerHTML = "Password Match"
	}
	if(gender == "male"){
		document.getElementById('genDer').innerHTML = "Gender: " + gender
	}

	document.getElementById('s').innerHTML = "You are successfully registered"
	document.getElementById('UName').innerHTML = "Username: " + userName
	document.getElementById('FName').innerHTML = "Firstname: " +firstName
	document.getElementById('LName').innerHTML = "Lastname: " + lastName
	document.getElementById('E-mail').innerHTML ="Email: " + email
	document.getElementById('pWord').innerHTML ="Password: " + pw
	document.getElementById('conPw').innerHTML ="Confirm Password: " + confirmPw
	e.preventDefault()
	
})
// document.getElementById('btn').onclick = function() {

// }

document.getElementById('btn').addEventListener('click' , function(e){
let firstName = document.getElementById('firstname').value
let lastName = document.getElementById('lastname').value
let email = document.getElementById('email').value
let pw = document.getElementById('password').value
let confirmPw =  document.getElementById('confirmPassword').value
let gender = document.querySelector('#gen')
let errors = 0;

console.log(firstName)
console.log(lastName)
console.log(email)
console.log(pw)
console.log(confirmPw)

console.log(e)
e.preventDefault()
})