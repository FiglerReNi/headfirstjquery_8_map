function myMap() {
    //var center = {lat: 51.508742, lng: -0.120850};
    //térkép közepe
    var center = {lat: 0, lng: -180};
    var mapProp = {
        center: new google.maps.LatLng(center),
        zoom: 3,
    };
    //térkép betöltése
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    //középpont jelzése
    var marker = new google.maps.Marker({
        position:center,
        animation:google.maps.Animation.BOUNCE,
        //icon:'images/home.png',
        map:map});
    //vonallal koordinátá összeötése
    var flightPlanCoordinates1 = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
    ];
    var flightPath1 = new google.maps.Polyline({
        path:flightPlanCoordinates1,
        strokeColor:"#0000FF",
        strokeOpacity:0.8,
        strokeWeight:2,
        map:map
    });
    //alakzatok
    var flightPlanCoordinates2 = [
        {lat: 37.772, lng: -122.214},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027},
        {lat: 37.772, lng: -122.214}
    ];
    var flightPath2 = new google.maps.Polygon({
        path:flightPlanCoordinates2,
        strokeColor:"#00FFFF",
        strokeOpacity:0.8,
        strokeWeight:2,
        fillColor:"#0000FF",
        fillOpacity:0.4,
        map:map
    });
    //kör
    var myCity = new google.maps.Circle({
        center:center,
        radius:20000,
        strokeColor:'#FF0000',
        strokeOpacity:0.8,
        strokeWeight:2,
        fillColor:"#0000FF",
        fillOpacity:0.4,
        map:map
    });
    //info ablak
    var infowindow = new google.maps.InfoWindow({
        content:"Hello World!"
    });
    //infowindow.open(map,marker);
    //info ablak kattintásra
    google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
    });
    //event listener - zoomolás kattintásra
    // google.maps.event.addListener(marker,'click',function() {
    //     map.setZoom(9);
    //     map.setCenter(marker.getPosition());
    // });
    //magtól visszaáll alapállapotba
    google.maps.event.addListener(marker,'click',function() {
        var pos = map.getZoom();
        map.setZoom(9);
        map.setCenter(marker.getPosition());
        window.setTimeout(function() {map.setZoom(pos);},3000);
    });
    //kattintás kordinátái
    google.maps.event.addListener(map, 'click', function(event) {
        placeMarker(map, event.latLng);
    });
    function placeMarker(map, location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'Latitude: ' + location.lat() +
                '<br>Longitude: ' + location.lng()
        });
        infowindow.open(map,marker);
    }
}
