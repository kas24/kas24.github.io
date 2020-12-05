function myFunction() {
    var x = document.getElementById("nav");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

function burgerTime() {
  var myNav = document.getElementById("nav")
   myNav.classList.toggle("hide-desktop");
}

