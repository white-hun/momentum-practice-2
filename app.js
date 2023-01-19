const loginForm = document.querySelector("#loign-form");
const loginInput = document.querySelector("#login-form input");

function onLoginBtnClick(username) {
  const username = loginInput.value;
}

loginForm.addEventListener("submit", onLoginBtnClick);
