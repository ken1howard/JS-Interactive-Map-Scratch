// Create map to 
                                          
const myMap = L.map('map', {
    center: [48.868672, 2.342130],
    zoom: 12,
});




// Add openstreetmap tiles

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);

