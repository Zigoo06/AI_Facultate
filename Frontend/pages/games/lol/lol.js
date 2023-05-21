window.onload = function () {
  var isLoggedIn = sessionStorage.getItem("loggedin");
  if (isLoggedIn !== "true") {
    window.location.href = "../../login-page/login.html";
  }
};

var gifContainer = document.querySelector(".gif-container");
var gif = gifContainer.querySelector("img");

document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    audio.play();
    gifContainer.style.display = "block";
    gif.classList.add("animate");

    setTimeout(function () {
      audio.pause();
      audio.currentTime = 0;
      gif.classList.remove("animate");
      gifContainer.style.display = "none";
    }, 5000);
  }
});

document.addEventListener("gif", function myFunction() {
  var x = document.getElementById("morgana");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
});

function mamamia() {
  const sound = document.getElementById("ping");
  sound.play();
}
//button de  deschis form si inchis , la apasare deschid un formular care contune campuri si buton subbmit