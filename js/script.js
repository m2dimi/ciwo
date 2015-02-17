$(function(){

    /*Preloader*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    });




    $.getJSON("json/ciwoData.json",function(data)
        {
            var data_groups = {},
                years = [];

            for(var j=0; j < data.ciwo.length; j++) {
                if(!data_groups[data.ciwo[j].year]) {
                    data_groups[data.ciwo[j].year] = {
                        d: [],
                        y: data.ciwo[j].year,
                        // img: data.ciwo[j].jpbox,
                        women_count : 0, //data.ciwo[j].presenceFemme,
                        count: 0
                    };
                }
                data_groups[data.ciwo[j].year].count++;
                data_groups[data.ciwo[j].year].d.push(data.ciwo[j]);
            }

            // rebuilding the year list and calculating women %
            for(var k in data_groups) {
                data_groups[k].women_count = data_groups[k].d.filter(function(d){
                    return d.presenceFemme == "oui"
                }).length;
                years.push(data_groups[k])
            }
            console.log('unsorted', years);
            // sort years
            years.sort(function(a,b) {
                return a.y > b.y?-1:1
            });
            console.log('sorted', years);

            $.each(years, function(i,data)
            {
                //Affichage des années
                var div_data = '<li class="year col-md-12"><div class="men slider col-md-5"><div class="largeWrap"></div></div><div class="col-md-2"><a class="date">'+ data.y +'</a></div><div class="women slider col-md-5"><div class="largeWrap"></div></div></li>';
                $(div_data).appendTo("#years");

                for(var j in data.d) {
                    console.log('YEAR: ', data.y, ', film ', data.d[j].title, ' avec femme: ',data.d[j].presenceFemme)
                }

                $("li.year").first().addClass("activeYear");
                $(".year").click(function(){
                    if (!$('this').hasClass("activeYear")) {
                        // Remove the class from anything that is active
                        $("li.activeYear").removeClass("activeYear");
                        // And make this active
                        $(this).addClass("activeYear");
                    }
                });

                $(".date").click(function(){
                    var currentYear = $(this).html();

                    if(currentYear == data.y && data.woman == 'oui'){
                        var afficheWo = '<div class="affiche"><a class="direction" data-direction="left" href="#0"><img src="'+ data.img +'"/></a></div>';
                        $(afficheWo).appendTo(".women .largeWrap");
                    }else{
                        var afficheMen = '<div class="affiche"><a class="direction" data-direction="right" href="#0"><img src="'+ data.img +'"/></a></div>';
                        $(afficheMen).appendTo(".men .largeWrap");
                    }
                });


            });




        }
    );

    $("#femaleSymbol").click(function(){
        $(".ciwo-fixed").fadeIn();
        $("#line").animate({
            height : '13000px'
        }, 5000);
        $("#years").delay(1000).animate({
            opacity : 1
        });
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


    $(".date").click(function(){
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