//https://hkacgwvfknbydsffczoz.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYWNnd3Zma25ieWRzZmZjem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4Mjc3MzMsImV4cCI6MjAyMzQwMzczM30.jv7QvuNAplwpeSdsg2PFEwkguugb0vnWAl7AASiXX4E

fetch("https://hkacgwvfknbydsffczoz.supabase.co/rest/v1/vild_mad_opskrifter", {
  method: "GET",
  headers: {
    apikey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhrYWNnd3Zma25ieWRzZmZjem96Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc4Mjc3MzMsImV4cCI6MjAyMzQwMzczM30.jv7QvuNAplwpeSdsg2PFEwkguugb0vnWAl7AASiXX4E",
  },
})
  .then((res) => res.json())
  .then(showData);
function showData(opskrifter) {
  console.log(opskrifter);

  // document.querySelector(".opskrift_overskrift").textContent = opskrifter.name;
}
