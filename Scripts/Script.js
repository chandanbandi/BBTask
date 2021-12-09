$(function () {
    // Carousel start
    var $first = $('.item').first();
    var $last = $('.item').last();
    var slideWidth = $(".carousel-wrapper").width();
    var $carousel = $('.carousel');

    $carousel.prepend($last.clone()).append($first.clone());
    $carousel.width(slideWidth * $('.item').length);

    $carousel.css({
        left: -slideWidth
    });

    $(".item").width(slideWidth);
    var slideInterval = setInterval(animateSlider, 5000);

    function animateSlider(){
        let slideWidth = $(".carousel-wrapper").width();
        $carousel.animate({
            left: '+=' + slideWidth
        }, 500, function () {
            if (Math.abs($carousel.position().left) === 0) {
                $carousel.css({
                    left: -slideWidth * ($carousel.children().length - 2)
                });
            }
        });
    }

    $('.prev').on('click', function (e) {
        e.preventDefault(); 
        $carousel.animate({
            left: '+=' + slideWidth
        }, 500, function () {
            if (Math.abs($carousel.position().left) === 0) {
                $carousel.css({
                    left: -slideWidth * ($carousel.children().length - 2)
                });
            }
        });
        return false;
    });

    $('.next').on('click', function (e) {
        e.preventDefault();
        $carousel.animate({
            left: '-=' + slideWidth
        }, 500, function () {
            if (Math.abs(Math.trunc($carousel.position().left + slideWidth * ($carousel.children().length - 1))) === 0) {
                $carousel.css({
                    left: -slideWidth
                });
            }
        });
        return false;
    });

    var flagInterval = false;

    $('.pause').on('click', function (e) {
        e.preventDefault();
        flagInterval = !flagInterval; 
        if(flagInterval){
            window.clearInterval(slideInterval);
        }else{
            slideInterval = window.setInterval(animateSlider, 5000);
        }
        return false;
    });

    //carousel end

    // on windw resize
    $(window).resize(function(){
        let win =  $(window);
        let slideWidth = $(".carousel-wrapper").width();

        if(win.width() >= 1024){
            $(".main-nav").css("display", "flex");
        }
        else{
            $(".main-nav").css("display", "none");
        }

        $(".item").width(slideWidth);
        $carousel.css({
            left: -slideWidth
        });
    });

    // Ham menu on click function
    $( "li.ham-menu a" ).on("click", function(e) {
        e.preventDefault();
        $(".main-nav").css("display", "flex");
        $(".close-menu").show();
        $(".ham-menu").css("margin", "0px");
    });

    // Close menu on click function
    $(".close-menu").on("click", function() {
        $(".main-nav").css("display", "none");
        $(".close-menu").hide();
        $(".ham-menu").css("margin-left", "6%");
    });


})