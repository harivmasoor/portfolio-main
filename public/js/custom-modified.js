/*=========================================================================
    * Template Name: Bolby - Portfolio/CV/Resume HTML Template
    * Author: beingeorge
    * Version: 1.0
    * Created: March 2020
=========================================================================*/

$(function() {
    "use strict";

    // Init Scroll Spy
    // $('body').scrollspy({ target: '.navbar-nav' });
    
    // $('.navbar-nav ul li a').on('click', function(){
    //     $('.navbar-collapse').collapse('hide');
    // });
    
    // Navbar link on mobile
    $('.vertical-menu li a').on('click', function(){
        $('body').removeClass('mobile-menu-visible');
    });

    /*=========================================================================
     Progressbar animation (on scroll)
     =========================================================================*/
    function animateProgress() {
        var progress = $('.progress');
        if(progress.length !== 0) {
            progress.each(function() {
                var p = $(this).find('.progress-bar');
                $(p).width(p.attr('data-percent'));
            });
        }
    }
    
    // Custom progress animation
    $(".progress .progress-bar").each(function(index) {
        $(this).appear(function() {
            $(this).css('width', $(this).attr('data-percent') + '%');
        });
    });

    /*=========================================================================
     Typed.js (Text typing animation)
     =========================================================================*/
    $('.text-rotating').each(function() {
        var animate = $(this).attr("data-animate");
        $(this).Morphext({
            animation: animate,
            separator: ",",
            speed: 4000
        });
    });

    /*=========================================================================
     Spacer with Data Attribute
     =========================================================================*/
    var list = document.getElementsByClassName('data-spacer');

    for (var i = 0; i < list.length; i++) {
      var size = list[i].getAttribute('data-height');
      list[i].style.height = '' + size + 'px';
    }

    /*=========================================================================
     Background Color with Data Attribute
     =========================================================================*/
     var list = document.getElementsByClassName('data-background');

     for (var i = 0; i < list.length; i++) {
       var color = list[i].getAttribute('data-color');
       list[i].style.backgroundColor = '' + color + '';
     }

    /*=========================================================================
     Mobile Menu Toggle
     =========================================================================*/
    $('.menu-icon button').on('click', function() {
        $('body').toggleClass('mobile-menu-visible');
    });

    $('body').on('click', function(e) {
        if (!$(e.target).closest('.desktop-header-1, .mobile-header-1 .menu-icon').length) {
            $('body').removeClass('mobile-menu-visible');
        }
    });

    /*=========================================================================
     One Page Scroll - REPLACED WITH NATIVE JS IMPLEMENTATION
     =========================================================================*/
    // This code has been removed and replaced with a better implementation in jquery-shim.ts

    /*=========================================================================
     Parallax layers
     =========================================================================*/
     if ($('.parallax').length > 0) { 
      var scene = $('.parallax').get(0);
      var parallax = new Parallax(scene, { 
        relativeInput: true,
      });
    }

    /*=========================================================================
     Add (nav-link) class to main menu.
     =========================================================================*/
    $('.vertical-menu li a').addClass('nav-link');

    /*=========================================================================
     Bootstrap Scrollspy
     =========================================================================*/
    $("body").scrollspy({ target: ".scrollspy" });

    /*=========================================================================
     Counterup JS for facts
     =========================================================================*/
    $('.count').counterUp({
        delay: 10,
        time: 2000
    });

    /*=========================================================================
     Progress bar animation with Waypoint JS
     =========================================================================*/
    if ($('.skill-item').length > 0) { 
      var waypoint = new Waypoint({
          element: document.getElementsByClassName('skill-item'),
          handler: function(direction) {
            
            $('.progress-bar').each(function() {
              var bar_value = $(this).attr('aria-valuenow') + '%';                
              $(this).animate({ width: bar_value }, { easing: 'linear' });
            });

            this.destroy()
          },
          offset: '50%'
      });
    }

    /*=========================================================================
     Isotope
     =========================================================================*/
    $('.portfolio-filter').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.portfolio-wrapper').isotope({ filter: filterValue });
        $('.portfolio-filter li').removeClass('active');
        $(this).addClass('active');
    });

    $('.blog-filter').on('click', 'li', function() {
        var filterValue = $(this).attr('data-filter');
        $('.blog-wrapper').isotope({ filter: filterValue });
        $('.blog-filter li').removeClass('active');
        $(this).addClass('active');
    });

    // Portfolio Item
    $('.portfolio-wrapper').each(function(){
        $(this).magnificPopup({
            delegate: '.portfolio-overlay a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    // Blog Item
    $('.blog-wrapper').each(function(){
        $(this).magnificPopup({
            delegate: '.blog-overlay a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });

    /*=========================================================================
     Infinite Scroll
     =========================================================================*/
    var curPage = 1;
    var pagesNum = $(".portfolio-pagination").find("li a:last").text();   // Number of pages

    $(".portfolio-pagination li a").on('click', function(event) {
        event.preventDefault();
        curPage++;
        if(curPage > pagesNum) {
            curPage = 1;
        }
        
        if(curPage <= pagesNum) {
            var nextPage = $(this).attr('href') + '#portfolio';
            $('#portfolio').load(nextPage);
        }
    });
    
    /*=========================================================================
     Magnific Popup
     =========================================================================*/
    if ($('.portfolio').length > 0) {
    	$('.portfolio').each(function() {
    		$(this).magnificPopup({
    			delegate: '.portfolio-icon a',
    			type: 'image',
    			gallery: {
    				enabled:true
    			}
    		});
    	});
    }

    $('.gallery').each(function() {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled:true
            }
        });
    });
    
    /*=========================================================================
            Validate Contact Form
    =========================================================================*/
    if ($('.contact-form').length > 0) {
        $( ".contact-form" ).validate({
            rules: {
                name: {
                  required: true,
                  minlength: 2
                },
                email: {
                  required: true,
                  email: true
                },
                message: {
                  required: true,
                  minlength: 10
                }
            }
        });
    }

}); 