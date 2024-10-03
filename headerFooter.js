// JavaScript code for fetching header and footer HTML content

fetch('header_nav.html')
.then(response => response.text())
.then(data => {
  const headerElement = document.getElementById('header');
  headerElement.innerHTML = data;
});

fetch('footer.html')
.then(response => response.text())
.then(data => {
  const footerElement = document.getElementById('footer');
  footerElement.innerHTML = data;
});