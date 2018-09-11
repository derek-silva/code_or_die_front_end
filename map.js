var googleMap;

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
    newMarker.addListener("click", function() {
      console.log("clicked!");
    });
  }
}

// Create new Map Instance
var myMap = new Maps();

// Attach my new map to the DOM
myMap.attachMapToDOM();
