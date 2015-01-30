$(function(){

    /*Preloader*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
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

    /*var rect1 =  s.rect(35, 200, 50, 15);
        rect2 =  s.rect(35, 250, 50, 15);
        rect3 =  s.rect(35, 300, 50, 15);
        rect4 =  s.rect(35, 350, 50, 15);
        rect5 =  s.rect(35, 400, 50, 15);
        rect6 =  s.rect(35, 450, 50, 15);
        rect7 =  s.rect(35, 500, 50, 15);*/


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


    /*slidr*/
    $('.responsiveSlider').slick({
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});