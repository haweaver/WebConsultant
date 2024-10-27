window.signedIn = false;

window.onload = function() {
  if (localStorage.getItem('signedIn') === 'true') {
    window.signedIn = true;
  }
};

document.getElementById("signInForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  submitFunctions();
});

submitFunctions = async function(){
  await(validateCredentials());
}

function validateCredentials() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "WEB Consultant" && password === "password1") {
    alert("Welcome " + username + "!");
    window.signedIn = true;
    localStorage.setItem('signedIn', true);
  } else {
    alert("Invalid username or password");
  }
}

function navigateToSignInOut() {
  if (window.signedIn) {
    window.location.href = "signOut.html";
    localStorage.setItem('signedIn', false);
    window.signedIn = false; // Reset the signedIn variable
  } else {
    window.location.href = "signIn.html";
  }
}