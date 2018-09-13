var googleMap;
let infoWindowOpen = false;

function convertTime24to12(time24) {
  var tmpArr = time24.split(":"),
    time12;
  if (+tmpArr[0] == 12) {
    time12 = tmpArr[0] + ":" + tmpArr[1] + " pm";
  } else {
    if (+tmpArr[0] == 00) {
      time12 = "12:" + tmpArr[1] + " am";
    } else {
      if (+tmpArr[0] > 12) {
        time12 = +tmpArr[0] - 12 + ":" + tmpArr[1] + " pm";
      } else {
        time12 = +tmpArr[0] + ":" + tmpArr[1] + " am";
      }
    }
  }
  return time12;
}

function htmlForInfoWindow({address, topic, description, dateInput, startTimeInput, endTimeInput}) {
  return `
  <div class="bold">
  	<ul>
  		<li>Topic: ${topic}</li>
  		<br>
  		<li>Address: ${address}</li>
  		<br>
  		<li>Description: ${description}</li>
  		<br>
  		<li>Date: ${dateInput}</li>
  		<br>
  		<li>Start Time: ${startTimeInput}</li>
  		<br>
  		<li>End Time: ${endTimeInput}</li>
  	</ul>
  </div>
  `;
}

// Map DIV UI element
const mapDiv = document.getElementById("map");

class Maps {
  constructor(center = { lat: 29.7604, lng: -95.3698 }, zoom = 10) {
    this.center = center;
    this.zoom = zoom;
  }

  attachMapToDOM() {
    googleMap = new google.maps.Map(mapDiv, {
      zoom: this.zoom,
      center: this.center
    });
  }

  addMarker(locationObj, title) {
    const address = locationObj.address;
    const topic = topicInput.value;
    const description = descriptionInput.value;
    const dateInp = dateInput.value;
    const startTimeInp = convertTime24to12(startTimeInput.value);
    const endTimeInp = convertTime24to12(endTimeInput.value);

    const newMarker = new google.maps.Marker({
      position: locationObj.coords,
      map: googleMap,
      title: title
    });
    const infowindow = new google.maps.InfoWindow({
      content: `${htmlForInfoWindow({address, topic, description, dateInput: dateInp, startTimeInput: startTimeInp, endTimeInput: endTimeInp})}`
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
