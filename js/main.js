const apiKey = `pk.eyJ1IjoibWF4ZmVsaXUiLCJhIjoiY2wyYmphMHcxMDR4aTNpc2Y5ODVobWNhayJ9.rWHYsp9d_JCrxZGTaEXPew`;

var map = L.map("map").setView([43.2937, -5.0492], 6.5);

L.tileLayer(
  `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`,
  {
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey,
  }
).addTo(map);

// Adding Marker on the map (SJPDP)

const markerStJean = L.marker([43.1631, -1.2381]).addTo(map);

// Add popup card (SJPDP)

let template = `

<h4>Saint Jean Pied de Port</h4>
<div style="padding-top:1rem">
<img width="150" height="200"src="./images/stjean2.jpg"/>
</div?
`;

markerStJean.bindPopup(template);

// Adding Marker on the map (Santiago)

const markerSantiago = L.marker([42.8806, -8.5446]).addTo(map);

// Add popup card (Santiago)

let cardSantiago = `

<h4>Santiago de Compostela</h4>
<div style="padding-top:1rem">
<img width="150" height="1500"src="./images/santiago.png"/>
</div?
`;

markerSantiago.bindPopup(cardSantiago);

// Adding Marker on the map (Pamplona)

const markerPamplona = L.marker([42.8196, -1.6446]).addTo(map);

// Add popup card (Pamplona)

let cardPamplona = `

<h4>Pamplona</h4>
<div style="padding-top:1rem">
<img width="150" height="1500"src="./images/santiago.png"/>
</div?
`;

markerPamplona.bindPopup(cardPamplona);

// Add circle

const circle = L.circle([42.8806, -8.5446], {
  radius: 100000,
  color: `green`,
  fillColor: "red",
  fillOpacity: 0.2,
})
  .addTo(map)
  .bindPopup(
    "<p> To become a certified Camino Pilgrim, you must start outside the red to walk at least 100 kilometers</p>"
  );

// Add line for the trail
