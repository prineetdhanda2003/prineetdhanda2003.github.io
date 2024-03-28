const navBarContainer = document.getElementById("head");

function injectNavBar() {
  const navBarUrl = 'Components/header.html'; // Replace with the filename of your navbar HTML

  fetch(navBarUrl)
    .then(response => response.text())
    .then(data => {
      navBarContainer.innerHTML = data;
    })
    .catch(error => console.error(error));
}

injectNavBar();