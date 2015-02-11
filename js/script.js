$(function(){

    /*Preloader*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    });

    function reload(result){
        $(".movie-title").text(result.title);
        $(".movie-year").text(result.year);
        $(".movie-actors").text(result.stars);
    }

    var owl = $(".sliding");
    owl.owlCarousel({
        jsonPath : 'json/ciwoData.json',
        jsonSuccess : customDataSuccess,
        items : 3
    });

    function customDataSuccess(data){
        var content = "";
        for(var i in data["ciwo"]){

            var img = data["ciwo"][i].jpbox;
            if( data["ciwo"][i].year == '1950' &&  data["ciwo"][i].presenceFemme == 'non'){
                content += "<img src=" +img+ ">"
            }
        }
        owl.html(content);
    }
    $(".nexty").click(function(){
        owl.trigger('owl.next');
    });
    $(".prevy").click(function(){
        owl.trigger('owl.prev');
    });

    // Custom Navigation Events


    // Custom Navigation Events
 /*   $('.left_scroll').each(
        function(){
            $(this).bind (
                "click",
                function(event){
                    $('.customCarousel').animate({
                        'left' : '+=130px'
                    });
                }
            );
        }
    );

    $('.right_scroll').each(
        function(){
            $(this).bind (
                "click",
                function(event){
                    $('.customCarousel').animate({
                        'left' : '-=130px'
                    });
                    $('.left_scroll').fadeIn();
                }
            );
        }
    );
*/


    $.getJSON("json/ciwoData.json", function(data) {
        console.log(data);
        $.each(data, function(i, result){
            /*
             $.each(data, function(i, result){
             $.each(result.year, function(j, dataYear){
             if(result.presenceFemme == 'non'){
             $("#1950Women").append('<img width="130" src="' + result.jpbox + '"/>');
             }
             });

             });
            }*/


            if(result.year == '1950' && result.presenceFemme == 'non'){
                $("#1950Women").append('<div class="item"><img width="130" src="' + result.jpbox + '"/></div>');
            }
        });
    });

    // When we click on the LI
    $(".genderBlock").click(function(){
        // If this isn't already active
        if (!$(this).parent().hasClass("activeLi")) {
            // Remove the class from anything that is active
            $("li.activeLi").removeClass("activeLi");
            // And make this active
            $(this).parent().addClass("activeLi");
        }
    });

    $("#femaleSymbol").click(function(){
        $(".ciwo-fixed").fadeIn();
        $("#line").animate({
            height : '150vh'
        }, 2000);
        $("#contentLine").delay(1000).animate({
            opacity : 1
        }, 1000);
    });


    /*Ascensor Plugin*/
    var ascensor = $('#ascensorBuilding').ascensor({
        direction: [[0,1],[1,1],[1,0],[1,2],[1,1],[1,2],[2,0],[2,1]],
        time: 300
    });
    var ascensorInstance = $('#ascensorBuilding').data('ascensor');
    $(".links-to-floor li").click(function(event, index) {
        ascensorInstance.scrollToFloor($(this).index());
    });

    $(".links-to-floor li:eq("+ ascensor.data("current-floor") +")").addClass("selected");

    ascensor.on("scrollStart", function(event, floor){
        $(".links-to-floor li").removeClass("selected");
        $(".links-to-floor li:eq("+floor.to+")").addClass("selected");
    });

    $(".prev").click(function() {
        ascensorInstance.prev();
    });

    $(".next").click(function() {
        ascensorInstance.next();
    });

    $(".direction").click(function() {
        ascensorInstance.scrollToDirection($(this).data("direction"));
    });

    $('.floor-2').perfectScrollbar({suppressScrollX: true});


    $(".list-gender li").click(function(){
        // If this isn't already active
        if (!$(this).hasClass("active")) {
            // Remove the class from anything that is active
            $("li.active-gender").removeClass("active-gender");
            // And make this active
            $(this).addClass("active-gender");
        }
    });


    var s = Snap("#Capa_1");
    var timeline = s.rect(52, 92, 16, 60);
    var rect = s.rect(35, 120, 50, 15);
    var circle =  s.circle(60, 60, 40);

    circle.attr({
        fill: "none",
        stroke: "#fff",
        'stroke-width': 16
    });
    timeline.attr({
        fill: "#fff"
    });
    rect.attr({
        fill: "#fff"
    });



});