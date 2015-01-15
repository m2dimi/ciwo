$(function(){

    /*Preloader*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
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

    $('#femaleSymbol').click(function(){

        $('.subtle').fadeOut();

        $('.sideBar').delay(1500).fadeIn();
        $('.title_head').animate({
           marginTop : '-455px'
        },1000);
        setTimeout(function(){
            s.animate({
                height: 1900
            }, 1000);
            timeline.animate({
                height: 1900
            }, 1000);
            $('#femaleSymbol').delay(1000).removeClass('levitate');
        }, 1000);
        //.delay(1000).queue(function(next) { $(this).attr('height','1900px'); next(); });
    });





});