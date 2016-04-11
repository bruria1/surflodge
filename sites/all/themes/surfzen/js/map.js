// *
// * Função que define as opções do mapa e insere o mapa na página
// * 2013 - www.marnoto.com
// *
var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;

function initialize() {
  var surflodge = { lat: 41.044157, lng: -71.950566 };
  var map = new google.maps.Map(document.getElementById('map-canvas'), {
    zoom: 15,
    draggable: false,
    scrollwheel: false,
    zoomControl: true,
    center: surflodge,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    disableDefaultUI: true,
  });
  addMarker(surflodge, map);
}

// Adds a marker to the map.
function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    label: "S",
    map: map,
  });
  var styles = [
  {
    featureType: "all",
    stylers: [
      { saturation: -500 }
    ]
  },{
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      { hue: "#000" },
      { saturation: 50 }
    ]
  },{
    featureType: "poi.business",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

map.setOptions({styles: styles});
}



google.maps.event.addDomListener(window, 'load', initialize);