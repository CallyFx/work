function myFunction() {
  var x = document.getElementById("menu");
  if (x.className === "menu-list") {
    x.className += " burger";
  } else {
    x.className = "menu-list";
  }
}
