$(document).ready(function () {
    $('#datepicker').datepicker({
        //hány hónapot ugorjon
        stepMonths: 3,
        //hónap, év választás
        changeMonth: true,
        changeYear: true
    });

    //egy esetén
    // $('#radio1').button();
    //ha több választási lehetőséget akarunk
    $('#type_select').buttonset();

    //csúszka
    $('#myslider1').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 500, //max érték
        step: 10, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value1').val( ui.value);
        }
    });
    $('#myslider2').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 5000, //max érték
        step: 5, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value2').val( ui.value);
        }
    });
    $('#myslider3').slider({
        value: 0, //kezdő érték
        min: 0, //min érték
        max: 20, //max érték
        step: 1, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value3').val( ui.value);
        }
    });
    $('#myslider4').slider({
        value: 0, //kezdő érték
        min: -90, //min érték
        max: 90, //max érték
        step: 0.00001, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value4').val( ui.value);
        }
    });
    $('#myslider5').slider({
        value: 0, //kezdő érték
        min: -180, //min érték
        max: 180, //max érték
        step: 0.00001, //lépésköz
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: function( event, ui ) {
            $('#value5').val( ui.value);
        }
    });
    $('#red, #green, #blue').slider({
        value: 127, //kezdő érték
        range: 'min', //szines csík mozgása milyen legyen
        max: 255, //max érték
        orientation: 'horizontal', //csúszka vízszintes vagy függőleges
        slide: refreshSwatch,
        change: refreshSwatch
    });

    //A change-hez kell, hogy amikor betöltődik az oldal elinduljon a refreshSwatch function és színes legyen a kocka ne üres induláskor
    $( "#red" ).slider( "value", 127 );
    $( "#green" ).slider( "value", 127 );
    $( "#blue" ).slider( "value", 127 );

    $("button:submit").button();

    function refreshSwatch() {
        var red = $('#red').slider('value');
        var green = $('#green').slider('value');
        var blue =$('#blue').slider('value');
        var color = 'rgb(' + red + ',' + green + ',' + blue + ')';
        $('#red_val').val(red);
        $('#green_val').val(green);
        $('#blue_val').val(blue);
        $('#color_val').val(color);
        $('#swatch').css({"background-color" : color})
    }

    $('#ui').submit(function(){
        return false;
    });

    $("#btnSave").click(function () {
        var data = $("#ui").serializeArray();
        $.post('ui.php', data, function(json){
            if(json.status === 'fail'){
                alert(json.message);
            }
            if(json.status === 'success'){
                alert(json.message);
            }
        }, "json")
    });
});


/* UI
-effects plug-ins
-interaction plug-ins
-widget plug-ins
 */