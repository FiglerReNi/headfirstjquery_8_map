$(document).ready(function(){

    var map;
    initialize();
    addItem();

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
                    debugger;
                    liItem.click(function () {
                        getPiece(this['id']);
                    });
                    liItem.appendTo('#item')
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
});