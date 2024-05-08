document.querySelector("#btn").addEventListener("click",(e)=>{
	e.preventDefault()
	let fname=document.querySelector("#fname").value
	let lname=document.querySelector("#lname").value
	let phone=document.querySelector("#phone").value
	let email=document.querySelector("#email").value
	let gender=document.getElementsByName("gender")
	//console.log(gender[0].checked || gender[1].checked || gender[2].checked)
	let qul=document.querySelector("#qul").value
	let password=document.querySelector("#password").value
	let cpassword=document.querySelector("#cpassword").value
	let check=document.querySelector("#check").checked
	// console.log(fname)
	if(fname.length===0 || fname=="" || fname==null){
		document.querySelector("#err").innerHTML="Enter fname"
		document.querySelector("#err").style.color="red"
	}
	else if(fname.length<4){
		document.querySelector("#err").innerHTML="Enter mini 4 characters"
		document.querySelector("#err").style.color="red"

	}
	else if(lname.length===0 || lname=="" || lname==null){
		document.querySelector("#err").innerHTML="Enter lname"
		document.querySelector("#err").style.color="red"
	}
	else if(phone.length===0 || phone=="" || phone==null){
		document.querySelector("#err").innerHTML="Enter phone number"
		document.querySelector("#err").style.color="red"
	}
	else if(email.length===0 || email=="" || email==null){
		document.querySelector("#err").innerHTML="Enter email"
		document.querySelector("#err").style.color="red"
	}
	else if (!(gender[0].checked || gender[1].checked || gender[2].checked)) {
		document.querySelector("#err").innerHTML="select the Gender"
		document.querySelector("#err").style.color="red"
	}
	else if (password.length===0) {
		document.querySelector("#err").innerHTML="Enter the password"
		document.querySelector("#err").style.color="red"
	}
	else if (cpassword.length===0) {
		document.querySelector("#err").innerHTML="Enter the confirm-password "
		document.querySelector("#err").style.color="red"
	}
	else if (cpassword != password) {
		document.querySelector("#err").innerHTML="check the password"
		document.querySelector("#err").style.color="red"
	}
	else if (check==false) {
		document.querySelector("#err").innerHTML="Accept the conditions"
		document.querySelector("#err").style.color="red"
	}

	else{
		document.querySelector("#err").innerHTML="register successfully"
		document.querySelector("#err").style.color="green"
	}
})