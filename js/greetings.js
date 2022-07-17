const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
	event.preventDefault();
	loginForm.classList.add(HIDEN_CLASSNAME);
	const username = loginInput.value;
	localStorage.setItem("USERNAME_KEY", username);
	paintGreetings(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreetings(username){
	greeting.innerText = `Hello  ${username}`;
	greeting.classList.remove(HIDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null){
	loginForm.classList.remove(HIDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
}else {
	paintGreetings(savedUsername);
}
