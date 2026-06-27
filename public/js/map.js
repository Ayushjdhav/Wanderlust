// console.log("coordinates:", coordinates);
// console.log("type:", typeof coordinates);
// console.log("isArray:", Array.isArray(coordinates));


const map = new maplibregl.Map({
    container: "map",
    style: `https://maps.geoapify.com/v1/styles/osm-bright/style.json?apiKey=${apiKey}`,
    center: coordinates,
    zoom: 13,
});

// const popup = new maplibregl.Popup({ offset: 25 }).setHTML(`
//     <h6>${listingTitle}</h6>
//     <p>Exact location will be provided after booking.</p>
// `);

// const marker = new maplibregl.Marker({ color: "red" })
//     .setLngLat(coordinates)
//     .setPopup(popup)
//     .addTo(map);

// marker.togglePopup();


const popup = new maplibregl.Popup({
    offset: 25,
    closeButton: false,
    closeOnClick: false,
}).setHTML(`
    <h6>${listingTitle}</h6>
    <p>Exact location provided after booking.</p>
`);

const marker = new maplibregl.Marker({ color: "red" })
    .setLngLat(coordinates)
    .addTo(map);

const markerElement = marker.getElement();

markerElement.addEventListener("mouseenter", () => {
    popup.setLngLat(coordinates).addTo(map);
});

markerElement.addEventListener("mouseleave", () => {
    popup.remove();
});