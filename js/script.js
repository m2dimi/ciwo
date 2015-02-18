$(function(){

    /*Preloader*/
    $(window).load(function() {
        $('#status').fadeOut();
        $('#preloader').delay(500).fadeOut('slow');
        $('body').delay(350).css({'overflow':'visible'});
    });


    $('#myModal').modal('hide');



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
                        men_count : 0,
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
                data_groups[k].men_count = data_groups[k].d.filter(function(d){
                    return d.presenceFemme == "non"
                }).length;
                /*data_groups[k].action_count = data_groups[k].d.filter(function(d){
                    return d.genre == "action-aventure"
                }).length;
                data_groups[k].scifi_count = data_groups[k].d.filter(function(d){
                    return d.genre == "science-fiction"
                }).length;
                data_groups[k].thriller_count = data_groups[k].d.filter(function(d){
                    return d.genre == "thriller"
                }).length;
                data_groups[k].drame_count = data_groups[k].d.filter(function(d){
                    return d.genre == "drame"
                }).length;
                data_groups[k].comedie_count = data_groups[k].d.filter(function(d){
                    return d.genre == "comedie"
                }).length;*/
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
                var menPercent = data.men_count*100/data.count;
                var womenPercent = data.women_count*100/data.count;

                var valMen = Math.round(menPercent);
                var valWomen = Math.round(womenPercent);

                /*var returnAction = $('.aa').html();
                console.log(returnAction);

                 returnComedie = $('.com').html();
                console.log(returnComedie);

                var returnDrame = $('.dra').html();
                console.log(returnDrame);

                var returnSci = $('.sci').html();
                console.log(returnSci);

                var returnThriller = $('.thri').html();
                console.log(returnThriller);*/

                var div_data =
                    '<li class="year col-md-12">' +
                        '<div class="men col-md-4">'+
                            '<a href="#0" class="leftArrow"><span class="icon-arrow-left3"></span></a>' +
                            '<div class="slider">' +
                                '<div class="largeWrap"></div>' +
                            '</div>' +
                            '<a href="#0" class="rightArrow"><span class="icon-arrow-right3"></span></a>' +
                        '</div>'+
                        '<div class="contentDate col-md-4">' +
                            '<div class="percent">' +
                                '<div class="percentMen" style="width: '+ valMen +'px; height: '+ valMen +'px;">' +
                                    '<span class="spanPercent-men">'+valMen+'%</span>' +
                                '</div>' +
                                '<a class="date">'+ data.y +'</a>' +
                                '<div class="percentWomen" style="width: '+ valWomen +'px; height: '+ valWomen +'px;">' +
                                    '<span class="spanPercent-women">'+valWomen+'%</span>' +
                                '</div>' +
                            '</div>' +
                        '</div>' +
                        '<div class="women col-md-4">'+
                            '<a href="#0" class="leftArrow"><span class="icon-arrow-left3"></span></a>' +
                            '<div class="slider">' +
                                '<div class="largeWrap"></div>' +
                            '</div>' +
                            '<a href="#0" class="rightArrow"><span class="icon-arrow-right3"></span></a>' +
                        '</div>'+
                    '</li>';
                $(div_data).appendTo("#years");




                /*for(var j in data.d) {
                    console.log('YEAR: ', data.y, ', film ', data.d[j].title, ' avec femme: ',data.d[j].presenceFemme)
                }*/

                $("li.year").first().addClass("activeYear");
                $(".year").click(function(){
                    if (!$('this').hasClass("activeYear")) {
                        // Remove the class from anything that is active
                        $("li.activeYear").removeClass("activeYear");
                        // And make this active
                        $(this).addClass("activeYear");
                    }
                });


            });



            $(".men .leftArrow").click(function(e) {
                e.preventDefault();
                $(".men .largeWrap").animate({
                    'margin-left': '+=95'
                });
            });


            $(".men .rightArrow").click(function(e) {
                e.preventDefault();
                $(".men .largeWrap").animate({
                    'margin-left': '-=95'
                });
            });



            $(".women .leftArrow").click(function(e) {
                e.preventDefault();
                $(".women .largeWrap").animate({
                    'margin-left': '+=95'
                });
            });


            $(".women .rightArrow").click(function(e) {
                e.preventDefault();
                $(".women .largeWrap").animate({
                    'margin-left': '-=95'
                });
            });

            var action_count = 0,
                thriller_count = 0,
                comedie_count = 0,
                scifi_count = 0,
                drame_counte = 0;


            for(var m=0; m<data.ciwo.length; m++) {

                if(data.ciwo[m].genre == "thriller" && data.ciwo[m].presenceFemme == "oui" ){
                console.log(data.ciwo[m].genre.length);}
            }

            $(".date").click(function(){
                var currentYear = $(this).html();
                var nbFilm = 0;
                var iYear = -1;


                console.log(currentYear);

                for(var p=0; p < years.length; p++){
                    if(currentYear == years[p].y){
                        //console.log(years[p].y);
                        nbFilm = years[p].count;
                        //console.log(nbFilm);
                        console.log(years[p].women_count);
                        iYear = p;
                        break;
                    }



                }

                $(".affiche").remove();
                /*$(".contentDate svg").remove();*/


                for( var f=0; f< years[iYear].count; f++){
                    if(years[iYear].d[f].presenceFemme == "oui"){
                        var afficheWo = '<div class="affiche"><a class="direction" data-direction="left" href="#0"><img width="80" height="106" src="' + years[iYear].d[f].jpbox + '"/></a></div>';
                        $(afficheWo).appendTo(".women .largeWrap");

                    }else{
                        var afficheMen = '<div class="affiche"><a class="direction" data-direction="right" href="#0"><img width="80" height="106" src="' + years[iYear].d[f].jpbox + '"/></a></div>';
                        $(afficheMen).appendTo(".men .largeWrap");
                    }
                }

            });


            for(var j in data.d) {
                console.log('YEAR: ', data.y, ', film ', data.d[j].title, ' avec femme: ',data.d[j].presenceFemme);
            }


        }
    );

    $("#femaleSymbol").click(function(){
        $(".ciwo-fixed").fadeIn();
        $("#legend").fadeIn();
        $("#buttonMenu").fadeIn();
        $("#line").animate({
            height : '8500px'
        }, 5000);
        $("#years").delay(1000).animate({
            opacity : 1
        });
    });
    $('#buttonMenu').click(function(){
        $('#menu').toggleClass('menu-open');
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

    var g = Snap("#Capa_2");
    var timeline2 = g.rect(24, 75, 10, 36);
    var rect2 = g.rect(12, 92, 35, 10);
    var circle2 =  g.circle(30, 60, 20);

    circle2.attr({
        fill: "none",
        stroke: "#fff",
        'stroke-width': 10
    });
    timeline2.attr({
        fill: "#fff"
    });
    rect2.attr({
        fill: "#fff"
    });
});