
var googleMap;
let infoWindowOpen = false;

const html = `
	<div>
		<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/5cd32426921205.5635e1e12783f.jpg">
	</div>
`;
const mapDiv = document.getElementById("map");

class Maps {
  constructor(center = { lat: 29.7604, lng: -95.3698 }, zoom = 12) {
    this.center = center;
    this.zoom = zoom;
  }

  attachMapToDOM() {
    googleMap = new google.maps.Map(mapDiv, {
      zoom: this.zoom,
      center: this.center
    });
  }

  addMarker(position, title) {
    const newMarker = new google.maps.Marker({
      position: position,
      map: googleMap,
      title: title
    });
    const infowindow = new google.maps.InfoWindow({
      content: `${html}`
    });
    newMarker.addListener("click", () => {
      if (infoWindowOpen) infowindow.close();
      else infowindow.open(myMap, newMarker);

      infoWindowOpen = !infoWindowOpen;
    });
  }
}

// Create new Map Instance
var myMap = new Maps();

// Attach my new map to the DOM
myMap.attachMapToDOM();