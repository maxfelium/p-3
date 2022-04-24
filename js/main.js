const apiKey = `pk.eyJ1IjoibWF4ZmVsaXUiLCJhIjoiY2wyYmphMHcxMDR4aTNpc2Y5ODVobWNhayJ9.rWHYsp9d_JCrxZGTaEXPew`;

var map = L.map("map").setView([40.5937, -3.0492], 5.7);

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

// Adding Marker on the map

const markerStJean = L.marker([43.1631, -1.2381]).addTo(map);

// Add popup card

let template = `

<h4>Saint Jean Pied de Port</h4>

`;

markerStJean.bindPopup(template);
