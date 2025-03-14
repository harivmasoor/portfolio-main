$(document).ready(function() {
  'use strict';
  
  // Once the page is fully loaded, hide the preloader
  $(window).on('load', function() {
    setTimeout(function() {
      $('#preloader').fadeOut(500, function() {
        $(this).hide();
      });
    }, 500);
  });
  
  // If the page takes too long to load, hide the preloader after 3 seconds regardless
  setTimeout(function() {
    $('#preloader').fadeOut(500, function() {
      $(this).hide();
    });
  }, 3000);
  
  // Initialize scrollspy for navigation
  $('body').scrollspy({
    target: '.scrollspy',
    offset: 50
  });
  
  // Smooth scrolling for navigation links
  $('.scrollspy a').on('click', function(e) {
    e.preventDefault();
    var target = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1000);
    
    $('.menu-icon button').removeClass('open');
    $('.vertical-menu').removeClass('show');
  });
  
  // Mobile menu toggle
  $('.menu-icon button').on('click', function() {
    $(this).toggleClass('open');
    $('.vertical-menu').toggleClass('show');
  });
  
  // Handle clicks outside menu to close it on mobile
  $(document).on('click', function(e) {
    if(!$(e.target).closest('.vertical-menu, .menu-icon').length) {
      $('.menu-icon button').removeClass('open');
      $('.vertical-menu').removeClass('show');
    }
  });
  
  // Initialize WOW.js for animations (if available)
  if (typeof WOW === 'function') {
    new WOW().init();
  }
}); 