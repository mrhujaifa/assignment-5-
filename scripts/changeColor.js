let themeColor = document.getElementById("themeColor");

themeColor.addEventListener("click", function () {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.getElementById("body").style.background =
    "rgb(" + red + ", " + green + ", " + blue + ")";
});
