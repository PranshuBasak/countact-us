/**
 * Created by Kirby on 05/23/2018.
 */
jQuery(function ($) {

    if($('.counter').length > 0){
        $('.counter').counterUp();
    }

    //Lazy Loading
    $('.lazy, .img-holder, img').lazy({
            delay: 0
    });

    equalheight = function(container){
    
        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;

        $(container).each(function() {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
             }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }


    //Accordion
    $(document).on('click', ".accordion .spoiler .spoiler-title",function(){

        var acc_grp_id = $(this).closest('.accordions').attr('id');

        if($(this).parent('.spoiler').hasClass('spoiler-closed')==false){
            $(this).parent('.spoiler').addClass('spoiler-closed');
        }else{
            $('#'+acc_grp_id+' .spoiler').addClass('spoiler-closed');
            $(this).parent('.spoiler').toggleClass('spoiler-closed');
        }
        return false;
    });

    //Tabs
    $('.tab-link').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('.tab-link').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });

    /*var hash = location.hash;
    if($(hash).length){
        $('html,body').animate({
              scrollTop: $(window.location.hash).offset().top - 300
          }, 900, 'swing');
    }*/

    if($('a[href^="#"]').length){
        $(document).on('click', 'a[href^="#"]', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 900, 'swing');
        });
    }

    //Load More
    $(".loadmore").on('click', function (e) {
        e.preventDefault();
        $(".listing .list-item:hidden").slice(0, 3).slideDown();
        if ($(".listing .list-item:hidden").length == 0) {
            $(".listing .more-button-wrap").fadeOut('slow',function(){
                equalheight('.listing .list-item');
            });
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top - 80
        }, 1500,function() {
            equalheight('.listing .list-item');
        });
    });

    equalsections = function(){
        equalheight('.listing .list-item');
        equalheight('.listing .list-item');
        equalheight('.service-item > *');
        equalheight('.service-item');
        equalheight('#resources .resource-item');
        //equalheight('#three-boxes .item');        
    }

    equalsections();

    $(window).load(function() {
        equalsections();        
    });

    $(window).load(function() {
        setTimeout(function(){
           equalsections();  
        }, 500);
        
    });


    $(window).resize(function(){
        equalsections(); 
    });
	
	/*$('.modal-toggle').on('click', function(e) {
	  e.preventDefault();
	  var target = $(this).attr('data-rel');
	  $('#'+target).toggleClass('is-visible');
	});*/

});