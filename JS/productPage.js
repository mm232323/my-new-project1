let show = document.getElementById("show");
let produc1 = document.getElementById("produc1");
let produc2 = document.getElementById("produc2");
let produc3 = document.getElementById("produc3");
let produc4 = document.getElementById("produc4");
let produc5 = document.getElementById("produc5");
let produc6 = document.getElementById("produc6");
let mproduc1 = document.getElementById("mproduc1");
let mproduc2 = document.getElementById("mproduc2");
let mproduc3 = document.getElementById("mproduc3");
let mproduc4 = document.getElementById("mproduc4");
let mproduc5 = document.getElementById("mproduc5");
let mproduc6 = document.getElementById("mproduc6");
let mproduc7 = document.getElementById("mproduc7");
let icon = document.getElementById("icon");
produc1.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc1.style.cssText = "transform: scale(1)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc2.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc2.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc3.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc3.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc4.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc4.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc5.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc5.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc6.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc6.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc7.style.cssText = "transform: scale(0)";
};
produc7.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
  mproduc7.style.cssText = "transform: scale(1)";
  mproduc1.style.cssText = "transform: scale(0)";
  mproduc2.style.cssText = "transform: scale(0)";
  mproduc3.style.cssText = "transform: scale(0)";
  mproduc4.style.cssText = "transform: scale(0)";
  mproduc5.style.cssText = "transform: scale(0)";
  mproduc6.style.cssText = "transform: scale(0)";
};
icon.onclick = () => {
  show.classList.toggle("showP");
  show.classList.toggle("showAct");
};
