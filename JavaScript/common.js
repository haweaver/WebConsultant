document.getElementById("ContactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  submitContactForm();
});

submitContactForm = async function(){
  await(validateForm());
}

function validateForm (){

  const form = document.getElementById('ContactForm');
  form.reset();
  alert("Thank you for filling out a form. Our team will contact you soon.");
  window.location.href = "home.html"; // Redirect to home.html after successful sign-in
}