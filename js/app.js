const navBarContainer = document.getElementById("head");

function injectNavBar() {
  const navBarUrl = 'Components/header.html'; 

  fetch(navBarUrl)
    .then(response => response.text())
    .then(data => {
      navBarContainer.innerHTML = data;
    })
}

injectNavBar();