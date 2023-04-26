// Script to redirect to home page after inactivity

function redirect() {
  setTimeout(myURL, 30000);
  var result = document.getElementById("result");
  result.innerHTML = "<b> The page will redirect after delay of 5 seconds";
}

function myURL() {
  document.location.href = "/";
}
redirect();

// <!-- End of redirect script  -->
