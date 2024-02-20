window.addEventListener("DOMContentLoaded", init);

// const urlParams = new URLSearchParams(window.location.search);
// const category = urlParams.get("category");

function init() {
  opskriftTemplate = document.querySelector(".opskrift_template");
  console.log("opskrift_template", opskriftTemplate);

  opskriftContainer = document.querySelector(".opskrift_container");
  console.log("opskrift_container", opskriftContainer);

  /*********************************** henter data fra supabase og laver data om til json **************************************/
  fetch(
    "https://hkacgwvfknbydsffczoz.supabase.co/rest/v1/vild_mad_opskrifter",
    {
      method: "GET",
      headers: {
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

  opskriftJSON.forEach((opskrift) => {
    opskriftClone = opskriftTemplate.cloneNode(true).content;

    opskriftClone.querySelector(".opskrift_overskrift").textContent =
      opskrift.name;

    opskriftClone.querySelector(".cookingtime").textContent =
      opskrift.cookingtime;

    opskriftClone.querySelector(".portion").textContent = opskrift.portionsize;

    opskriftClone.querySelector(".difficulty").textContent =
      opskrift.difficulty;

    if (opskrift.herbs == false) {
      opskriftClone.querySelector(".herbs").classList.add("none");
    }

    if (opskrift.mushroom == false) {
      opskriftClone.querySelector(".mushroom").classList.add("none");
    }

    /*********************************** produkt single view **************************************/
    //her bliver ancho sendt videre med et id
    opskriftClone.querySelector("a").href = `produkt.html?id=${opskrift.id}`;

    /*********************************** cloner **************************************/
    opskriftContainer.appendChild(opskriftClone);
  });
}
