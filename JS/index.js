let products = document.getElementById("produc");
let pPage = document.getElementById("linkP");
let pP = document.getElementById("pl");
let printing = document.getElementById("printing");
let aboutP = document.getElementById("aboutP");
let featP = document.getElementById("featP");
let PreDeparP = document.getElementById("PreDeparP");
let SelfAdhesMater = document.getElementById("SelfAdhesMater");
let plpr = document.getElementById("PLPR");
let contact = document.getElementById("contact")
let oP = document.getElementById("ourPart")
products.onclick = () => {
  window.open(pPage);
};
contact.onclick = () => {
  window.scrollTo({
    top: 2310,
    left:0,
    behavior: "smooth"
  });
}
printing.onclick = () => {
  pP.classList.toggle("pl");
  pP.classList.toggle("plA");

  aboutP.classList.toggle("aboutP");
  aboutP.classList.toggle("aboutPA");

  featP.classList.toggle("featP");
  featP.classList.toggle("featPA");

  PreDeparP.classList.toggle("PreDeparP");
  PreDeparP.classList.toggle("PreDeparPA");

  SelfAdhesMater.classList.toggle("SelfAdhesMater");
  SelfAdhesMater.classList.toggle("SelfAdhesMaterA");
  plpr.classList.toggle("PLPR");
  plpr.classList.toggle("PLPRA");
};
