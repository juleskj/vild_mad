window.addEventListener("DOMContentLoaded", init);

const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("season");

function init() {
  opskriftTemplate = document.querySelector(".opskrift_template");

  opskriftContainer = document.querySelector(".opskrift_container");

  /*********************************** henter data fra supabase og laver data om til json **************************************/
  fetch(
    "https://hkacgwvfknbydsffczoz.supabase.co/rest/v1/vild_mad_opskrifter",
    {
      method: "GET",
      headers: {
        // her sætte vi nøglen bag på linket så vi kan se daten
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYWNnd3Zma25ieWRzZmZjem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4Mjc3MzMsImV4cCI6MjAyMzQwMzczM30.jv7QvuNAplwpeSdsg2PFEwkguugb0vnWAl7AASiXX4E",
      },
    }
  )
    .then((res) => res.json())
    .then(showOpskrifter);
}

function showOpskrifter(opskriftJSON) {
  let opskriftClone;

  console.log(opskriftJSON);

  // her definere vi de forskkelige ting som vi vil tage fra vores json, og gør det "FOR EACH" for alle arrays

  opskriftJSON.forEach((opskrift) => {
    opskriftClone = opskriftTemplate.cloneNode(true).content;

    opskriftClone.querySelector(".opskrift_overskrift").textContent =
      opskrift.name;

    opskriftClone.querySelector(".cookingtime").textContent =
      opskrift.cookingtime;

    opskriftClone.querySelector(".portion").textContent = opskrift.portionsize;

    opskriftClone.querySelector(".difficulty").textContent =
      opskrift.difficulty;

    opskriftClone.querySelector(".month").textContent = opskrift.month;
    opskriftClone.querySelector(".recepie_image").src = opskrift.img;

    // her tjekker jeg i daten og det ekelte opskrift om "herbs" er falske, for hvis den er skal den fjenre urte iconet
    if (opskrift.herbs == false) {
      opskriftClone.querySelector(".herbs").classList.add("none");
    }
    // det samme sker her bare med boolean "mushroom"
    if (opskrift.mushroom == false) {
      opskriftClone.querySelector(".mushroom").classList.add("none");
    }

    /*********************************** produkt single view **************************************/
    //her bliver ancho sendt videre med et id til singleviewet
    opskriftClone.querySelector("a").href = `singleview.html?id=${opskrift.id}`;

    /*********************************** cloner **************************************/
    opskriftContainer.appendChild(opskriftClone);
  });
}
