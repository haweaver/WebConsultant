// JavaScript code for the sign-in form

window.signedIn = false;


document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  submitFunctions();
});

submitFunctions = async function(){
  await(navigateToHome())
  .then(updateSignInIndicator());
}

function navigateToHome() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "WEB Consultant" && password === "password1") {
    window.location.href = "home.html"; // Redirect to home.html after successful sign-in
    window.signedIn = true;
  } else {
    alert("Invalid username or password");
  }
}

function navigateToSignIn() {
  window.location.href = "signIn.html";
}

function updateSignInIndicator() {
  let signInTxtElement = document.getElementById("signInTxt");

    if (window.signedIn) {
      signInTxtElement.innerHTML = "Signed In";
    } else {
      signInTxtElement.innerHTML = "Signed Out";
    }
}