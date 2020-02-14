$(document).ready(function(){

    var map;
    var bounds = new google.maps.LatLngBounds();
    //B változathoz kell csak
    var markerArray = [];
    initialize();

    if ($('#menu').length){
        addItemMenu();
        $('#menu').change(function () {
            //A változat
            // $('#map').empty();
            // initialize();
            //B véltozat
            clearMap();
            var name = $(this).val();
            $.post('map.php', {data: name}, function(json){
                if(json.length > 0){
                    $('#item').empty();
                    $.each(json, function () {
                        var info = 'Date: ' + this['date'] + ', Type: ' + this['type'];
                        var liItem = $("<li>");
                        liItem.html(info);
                        liItem.addClass('piece');
                        liItem.attr('id', this['id']);
                        liItem.click(function () {
                            getInfo(this['id']);
                        });
                        liItem.appendTo('#item');
                        var itemLocation = new google.maps.LatLng(this['latitude'], this['longitude']);
                        var marker = new google.maps.Marker({
                            position:itemLocation,
                            title: this['type'],
                            map: map});
                        markerArray.push(marker);
                        bounds.extend(itemLocation);
                    });
                    map.fitBounds(bounds);
                }
            }, "json")
        });
    }
    else{
        addItem();
    }

    function initialize(){
        var options = {
            zoom: 3,
            center : new google.maps.LatLng(45.519098,-122.672138),
            mapTypeId: 'roadmap'
        };
        map = new google.maps.Map(document.getElementById("map"), options);
    }

    function addItem() {
        $.getJSON('map.php?action=items', function(json) {
            if(json.length > 0){
                $('#item').empty();
                $.each(json, function () {
                    var info = 'Date: ' + this['date'] + ', Type: ' + this['type'];
                    var liItem = $("<li>");
                    liItem.html(info);
                    liItem.addClass('piece');
                    liItem.attr('id', this['id']);
                    liItem.click(function () {
                        getPiece(this['id']);
                    });
                    liItem.appendTo('#item')
                })
            }
        })
    }

    function addItemMenu() {
        $.getJSON('map.php?action=select', function (json) {
            if (json.length > 0) {
                var i = 1;
                $.each(json, function () {
                    var item = $("<option>");
                    var text = this;
                    item.html(text);
                    item.attr('value', text);
                    item.appendTo('#menu');
                    i++;
                })
            }
        })
    }

    function getPiece(id) {
        $.getJSON('map.php?action=item&id='+id, function(json) {
            if(json.length > 0){
                var itemLocation = new google.maps.LatLng(json[0]['latitude'], json[0]['longitude']);
                var marker = new google.maps.Marker({
                    position:itemLocation,
                    title: json[0]['type'],
                    map: map});
                map.setCenter(itemLocation, 10);
            }
        });
    }

    function clearMap() {
        if(markerArray){
            var i;
            for(i in markerArray){
                markerArray[i].setMap(null);
            }
            markerArray.length = 0;
            bounds = null;
            bounds = new google.maps.LatLngBounds();
        }
    }

    function getInfo(){

    }
});