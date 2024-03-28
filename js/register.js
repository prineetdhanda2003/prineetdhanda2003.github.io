function validateRegistration() {
    let x = document.forms["regform"]["fname"].value;
    let y = document.forms["regform"]["email"].value;
    let z = document.forms["regform"]["contact"].value;
    let m = document.forms["regform"]["address"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    } else if (y == "") {
        alert("Email must be filled out");
        return false;
    } else if (z == "") {
        alert("Contact must be filled out");
        return false;
    }
    else if (m == "") {
        alert("Address must be filled out");
        return false;
    }
}