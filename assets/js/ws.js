// Youtube Video iFrame API
// -------------------------------------------------
var vs;
if( !Modernizr.touchevents ) {

    if( document.getElementById('player') ) {

        // Set the relevant YouTube video and controls depending on which page is being viewed
        window.videoId  = 'cOmMeZSL4ng';
        window.controls = 0;
        window.loop     = 1;
        window.loopCue  = 159;
        window.homepage = 1;
        if( !document.getElementById('icon-estimate') ) { // icon-estimate is an element on the homepage only, so used for Features page
            videoId     = 'mYCUnw4T0bc';
            controls    = 1;
            loop        = 0;
            loopCue     = 217;
            homepage    = 0;
        }

        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 1. This function creates an <iframe> (and YouTube player)
        // -------------------------------------------------
        // This happens after the API code downloads.

        window.player;

        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
                height: '900',
                width: '1600',
                videoId: videoId,
                playerVars: {
                    'autoplay': 0,
                    'controls': controls,
                    'rel': 0,
                    'enablejsapi': 1,
                    'showinfo': 0,
                    'modestbranding': 1,
                    'playlist': videoId,
                    'loop': loop
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                }
            });
        }

        // 2. The API will call this function when the video player is ready.
        // -------------------------------------------------
        function onPlayerReady(event) {
            if($('#player').hasClass('autoplay')){
                event.target.playVideo();
            }
            player.setPlaybackQuality('hd1080');
            playbackMonitor();
        }

        // 3. The API calls this function when the player's state changes.
        // -------------------------------------------------
        function onPlayerStateChange(event) {
            if (event.data == 0) {
                clearInterval(vs);
            }
        }

        function playVideo() {
            player.playVideo();
            //revealScreen();
        }

        function stopVideo() {
            player.stopVideo();
            clearInterval(vs);
        }

        function pauseVideo() {
            player.pauseVideo();
        }

        function jumpToCue(c) {
            player.seekTo(c);
        }

    }

}

// Function used to check state of Browser Tab
// -------------------------------------------------
// An inactive browser tab reduces the rate at which setInterval
// fires which can cause the video not to loop and run through to
// the end - so this function pauses the video.


var vis = (function(){
    var stateKey, eventKey, keys = {
        hidden: "visibilitychange",
        webkitHidden: "webkitvisibilitychange",
        mozHidden: "mozvisibilitychange",
        msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();

vis(function(){
    if( vis() ) {
        console.log('tab visible');
        if($('#player').hasClass('autoplay')) {
            playVideo();
        }
    } else {
        console.log('tab hidden')
        pauseVideo();
    }
});










$(document).ready(function(){

    // Loading
    // ---------------------------------

    show($('.cover'),0,0,'block');

    // Vivus SVG drawing
    // ---------------------------------------
    // Animates the SVG icons
    function myCallback(){

    }

    function drawIcon(obj){
        new Vivus(obj, {type: 'oneByOne', duration: 30, start: 'manual', forceRender: false, dashGap: 20}, myCallback);
    }

    // Reveal page elements
    // ---------------------------------------
    // Checks for when page items have
    // scrolled into view

    var hCount  = 0;
    var tCount  = 0;
    var fCount  = 0;
    var cCount  = 0;
    var pCount  = 0;
    var flCount = 0;
    var delay   = 150;
    var stagger = 800;

    // Hide all animated page elements
    $('.anim-block').transition({opacity:0, y:'50px'},0);
    $('.fade-block').transition({opacity:0},0);

    function showElem(obj){
        obj.transition({opacity:1, y:'0px'},500,'easeOutCirc');
    }

    // Header Panel
    // ---------------------------------
    $('header > .fade-block').one('inview', function(event, visible) {
        if (visible) {
            d = delay * hCount;
            setTimeout(showElem, d, $(this));
            hCount ++;
        }
    });

    // Features Panel
    // ---------------------------------
    $('.feature').one('inview', function(event, visible) {
        if (visible) {
            var id = $(this).find('.feature-icon').attr('id');
            $(this).transition({y:'80px'},0);
            d = delay * fCount;
            setTimeout(showFeature, d, $(this), id, true);
            fCount ++;
        }
    });

    function showFeature(obj,id){
        obj.transition({opacity:0.8, y:'0px'},400,'out');
        new Vivus(id, {type: 'oneByOne', duration: 100, start: 'autostart', forceRender: false, dashGap: 20}, myCallback);
    }

    // Price Plans
    // ---------------------------------
    $('.plans-container .anim-block').one('inview', function(event, visible) {
        if (visible) {
            d = delay * pCount + stagger;
            setTimeout(showElem, d, $(this));
            pCount ++;
        }
    });

    // Clients Panel
    // ---------------------------------
    $('.clients-inner > .anim-block').one('inview', function(event, visible) {
        if (visible) {
            d = delay * cCount;
            setTimeout(showElem, d, $(this));
            cCount ++;
        }
    });

    // Navigation
    // ---------------------------------

    $( window ).resize(function() {
        resize();
    });

    function resize(){
        var ww = $(window).width();
        if(ww <= 950){
            hide($('.nav-container'),0,0,'none');
        }else{
            show($('.nav-container'),0,0,'block');
            hide($('.mobile-nav-bg'),200,0,'none');
            show($('.page-container'),200,0,'block');
            show($('.bg-hero'),200,0,'block');
            mobileNavActive = false;
            switchIcon('icon',0);
        }
    }

    var mobileNavActive = false;

    $('.nav-icon').click(function(){
        if(!mobileNavActive){
            mobileNavActive = true;
            $(this).transition({rotate:90},150, 'in', function() { switchIcon('close',180) });
            show($('.nav-container'),200,0,'block');
            show($('.mobile-nav-bg'),200,0,'block');
            hide($('.page-container'),200,0,'none');
            hide($('.bg-hero'),200,0,'none');
        }else{
            mobileNavActive = false;
            hide($('.nav-container'),200,0,'none');
            hide($('.mobile-nav-bg'),200,0,'none');
            show($('.page-container'),200,0,'block');
            show($('.bg-hero'),200,0,'block');
            $(this).transition({rotate:90},150, 'in', function() { switchIcon('icon',0) });
        }
    });

    function switchIcon(icon, rot){
        $('.nav-icon').attr('src', 'img/nav-'+icon+'.svg');
        $('.nav-icon').transition({rotate:rot},150, 'out');

        if(icon == 'close'){

        }
    }

    // Contact Form
    // -----------------------------------
    // Post the contact form - pass the entered
    // details to send-mail.php

    $("#submit-btn").click(function(e) {

        e.preventDefault();

        var url = "/contact";

        var n = $('#name').val();
        var e = $('#email').val();
        var c = $('#details').val();


        if( n != '' && e != '' && c != '' ){

            if(validateEmail(e)){

                $.ajax({
                    type: "POST",
                    url: url,
                    data: $("#contactForm").serialize(), // serializes the form's elements.
                    success: function(data)
                    {
                        //clear form and show message
                        //$('#name').val('');
                        //$('#email').val('');
                        //$('textarea').val('');
                        $('#contactForm').trigger('reset');
                        $('span.response').removeClass('error');
                        $('span.response').html(data);
                        $('span.response').transition({opacity:1},500,'out');
                        setTimeout(function(){
                            $('span.response').transition({opacity:0},500,'out');
                        },3000);
                    }
                });

            }else{
                $('span.response').addClass('error');
                $('span.response').html('You must enter a valid email address');
                $('span.response').transition({opacity:1},500,'out');
            }

        }else{
            $('span.response').addClass('error');
            $('span.response').html('You must fill all the fields');
            $('span.response').transition({opacity:1},500,'out');
        }

        return false; // don't execute the standard form submit.
    });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,6})?$/;
        if( !emailReg.test( $email ) ) {
            return false;
        } else {
            return true;
        }
    }

    // Resize
    // ---------------------------------
    // Full screen background images are resized and positioned using
    // javascript as the CSS 'background-size: cover' property makes the
    // image jitter when scrolling.

    $(".clients-img").backstretch("img/client-logos.png");

    // Parallax
    // ---------------------------------
    // Uses Stellar.js on non-touch devices

    if (!Modernizr.touch) {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }

    // Video
    // ---------------------------------
    // Used to loop the screencast videos without causing a momentary blank screen

    var ct = 0;

    window.playbackMonitor = function() {
        // Clear any old setIntervals that might be running
        if(vs){ clearInterval( vs ); }

        vs = setInterval( function() {

            ct = Math.round( player.getCurrentTime() * 10 ) / 10;

            // Loop video before natural end is reached
            if( ct >= loopCue ) {
                if(homepage) {
                    jumpToCue( 0 );
                } else {
                    show( $('.video-features-poster'), 500, 0, 'block' );
                    show( $('.video-fade'), 500, 0, 'block' );
                    show( $('.play-video'), 500, 200, 'block' );
                    pauseVideo();
                    jumpToCue(0);
                }

            }

        }, 200  );
    }

    // Features Video
    // ---------------------------------
    // Controls the playback og the "Getting Started" features video

    $('.play-video').click(function(){
        hide( $(this), 500, 0, 'none' );
        hide( $('.video-fade'), 500, 0, 'none' );
        hide( $('.video-features-poster'), 500, 1500, 'none' );

        jumpToCue(1);
        playVideo();
    });


    // Popup Video
    // ---------------------------------
    // Used for touch devices

    $('.play-link').click(function(e) {
        e.preventDefault();
        var $iframeElement = $('<iframe>').attr(
            {
                'id': 'videoPlayer',
                'name': 'videoPlayer',
                'frameborder': '0',
                'webkitAllowFullScreen': '',
                'mozallowfullscreen': '',
                'allowFullScreen': '',
                'src': $(this).attr('href')
            }
        );
        $('.popup-embed-container').append($iframeElement);
        show( $('.popup-bg-container'), 500, 0, 'table' );
        show( $('.popup-video-container'), 500, 0, 'table-cell' );

        var $frame = $('iframe#videoPlayer');
        $frame.attr('src',src);
    });

    $(".popup-close").click(function(e){
        e.preventDefault();
        closeVideo();
    });
    $(".popup-bg-container").click(function(e){
        e.preventDefault();
        closeVideo();
    });

    function closeVideo() {
        $("iframe#videoPlayer").remove();
        hide( $('.popup-bg-container'), 500, 0, 'none' );
        hide( $('.popup-video-container'), 500, 0, 'none' );

    }



    // Sideshows
    // ---------------------------------------
    // Uses Swipe.js to power the slideshows
    // that appear on the features page

    $('.section-nav').each(function(index, item){

        var linkList = $(this);
        var slideshow = $(this).data('target-slider');
        var s = $('#'+slideshow);


        if( s.find('.slide').length > 1 ) {

            var id = s.attr('id');
            console.log(id);

            slideshow = new Swipe(document.getElementById(id), {
                startSlide: 0,
                speed: 600,
                auto: 0,
                continuous: true,
                disableScroll: false,
                stopPropagation: false,
                callback: function(index, elem) { },
                transitionEnd: function(index, elem) { }
            });

        }

        $(this).find('li a').each(function(i) {

           $(this).click(function(e){
               e.preventDefault();
               slideshow.slide(i, 1000);
               setActiveLink(i, linkList);
           });

        });

    });

    function setActiveLink(link, list) {
        list.find('li').each(function(i){
            if(i == link) {
                $(this).find('a').addClass('link-active');
            } else {
                $(this).find('a').removeClass('link-active');
            }
        });
    }



    //  Initialise
    // ---------------------------------
    $('.loader').loadie(0.75);
    resize();

    hide($('.old-workstack .content'),0,0,'none');


});

$(window).load(function(){

    $('.loader').loadie(1);
    setTimeout( hide, 300, $('.cover'), 500, 0, 'none' );

    if($('.cover-reveal').length) {
        $('.cover-reveal').addClass('swipe-right');
    }

    //  Comparison Slider
    // ---------------------------------
    /*
    if( $('.slider-container').length ) {

    }

    function setupSlider() {
        var s = $('#ex1').slider({
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });

        s.on('slideStart', function(ev){
            $('.slider-handle').removeClass('animate');
        });

        s.on('slideStop', function(ev){
            var newVal = Math.round($('#ex1').data('slider').getValue());

            $('.slider-handle').addClass('animate');
            $('#ex1').data('slider').setValue(newVal);

        });

        s.on('change', function(ev){
            setTasks();
        });

        function setTasks() {
            var newVal = Math.round($('#ex1').data('slider').getValue());

            //set the Old Calendar
            for(i=0; i<=10; i++) {
                var task    = $('.task'+i);
                var c1      = $('.counter1');
                var c2      = $('.counter2');
                var c3      = $('.counter3');
                if(newVal < i) {
                    task.hide();
                } else {
                    task.show();
                }
                if(newVal > 5) {
                    c1.html("+ "+ parseInt(newVal-5) +" more...");
                } else {
                    c1.html("");
                }
                if(newVal > 6) {
                    c3.html("+ "+ parseInt(newVal-6) +" more...");
                } else {
                    c3.html("");
                }
                if(newVal > 8) {
                    c2.html("+ "+ parseInt(newVal-8) +" more...");
                } else {
                    c2.html("");
                }
            }

            //set the Workstack Calendar
            for(i=0; i<=10; i++) {
                var wstask = $('.wstask'+i);
                if(newVal < i) {
                    wstask.hide();
                } else {
                    wstask.show();
                }

                if(newVal > 2) {
                    $('#ws10').addClass('pos-left');
                    $('#ws12').addClass('pos-right');
                } else {
                    $('#ws10').removeClass('pos-left');
                    $('#ws12').removeClass('pos-right');
                }
                if(newVal > 5) {
                    $('#ws1').addClass('two-days pos-left');
                    $('#ws2').addClass('pos-right');
                    $('#ws3').addClass('pos-left');
                    $('#ws7').addClass('pos-right');
                } else {
                    $('#ws1').removeClass('two-days pos-left');
                    $('#ws2').removeClass('pos-right');
                    $('#ws3').removeClass('pos-left');
                    $('#ws7').removeClass('pos-right');
                }
                if(newVal > 6) {
                    $('#ws7').addClass('two-days pos-xright');
                    $('#ws4').addClass('pos-xcenter');
                    $('#ws3').addClass('pos-xleft');
                } else {
                    $('#ws7').removeClass('two-days pos-xright');
                    $('#ws4').removeClass('pos-xcenter');
                    $('#ws3').removeClass('pos-xleft');
                }
                if(newVal > 7) {
                    $('#ws2').addClass('two-days');
                } else {
                    $('#ws2').removeClass('two-days');
                }
                if(newVal > 9) {
                    $('#ws1').addClass('three-days');
                } else {
                    $('#ws1').removeClass('three-days');
                }
            }

        }

        setTasks();
    }
    */

});


// Helpers
// -----------------------------------

window.hide = function(obj,speed,d,state){
    obj.transition({opacity:0, delay:d},speed,'out',function(){
        obj.css( { display: state } );
    });
}

window.show = function(obj,speed,d,state){
    //obj.removeClass('state-hidden');
    obj.css( { display: state } );
    obj.transition({opacity:1, delay:d},speed,'out');
}




