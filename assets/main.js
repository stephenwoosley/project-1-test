var button = document.querySelector(".btn, .btn-success, .btn-lg");
var background = document.querySelector("body");
var jumbotron = document.querySelector(".jumbotron");
var darkMode = false;

button.addEventListener("click", function() {
  if (darkMode) {
    background.style.backgroundColor = "#ffffff";
    jumbotron.style.backgroundColor = "#e9ecef";
    jumbotron.style.color = "#212529";
    button.textContent = "Dark Mode";
    button.classList.remove("btn-light");
    button.classList.add("btn-dark");
    darkMode = false;

  }
  else {
    background.style.backgroundColor = "#212529";
    jumbotron.style.backgroundColor = "#4e4e4e";
    jumbotron.style.color = "#e5e5e5";
    button.textContent = "Light Mode";
    button.classList.remove("btn-dark");
    button.classList.add("btn-light");
    darkMode = true;
  }
})