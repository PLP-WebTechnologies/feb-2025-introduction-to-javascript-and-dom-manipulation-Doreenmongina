
  // 3. Styling Elements
  formTitle.style.color = '#2c3e50';
  formTitle.style.border = '2px solid #eee';
  formTitle.style.paddingLeft = "100px";

// update HTML content
const info = document.getElementById("info");
info.innerHTML = "<h2>Intro to HTML and DOM</h2>";
// create terms and conditions
const termsLabel = document.createElement('label');
    termsLabel.innerHTML = '<input type="checkbox" id="terms"> I agree to the <a href="#">Terms and Conditions</a>';

// Append the Terms and Conditions label to the form
const form = document.querySelector("form");
if (form) {
    form.appendChild(termsLabel);
}
// Style the label with the class "username"
const usernameLabel = document.querySelector(".username");
if (usernameLabel) {
    usernameLabel.style.color = "red";
    usernameLabel.style.fontFamily = "Arial, sans-serif";
}

// Style the input field for username
const usernameInput = document.getElementById("username");
if (usernameInput) {
    usernameInput.style.border = "2px solid blue";
    usernameInput.style.padding = "5px";
    usernameInput.style.color = "red";
}
//style the input field for password


const passwordInput = document.getElementById("password");
if (passwordInput) {
    passwordInput.style.border = "2px solid blue";
    passworInput.style.padding = "5px";
}

//event listener to toggle the terms label
toggleButton.addEventListener("click", () => {
    if (termsLabel.style.display === "none") {
        termsLabel.style.display = "block";
    } else {
        termsLabel.style.display = "none";
    }
});
