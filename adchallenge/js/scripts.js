jQuery(document).ready(function(){
  //Base implements for site
  jQuery('.site-slogan').html('<span style="font-weight:900">Music</span><span style="font-weight:300">Theme</span>');
  jQuery('body').prepend('<link rel="preconnect" href="https://fonts.gstatic.com">\n' +
    '<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet">');
  jQuery('#block-adchallenge-main-menu').prepend('<div id="bMenu"><div class="line"></div><div class="line"></div><div class="line"></div></div>');
  jQuery('.node-readmore a').append('<i class="cArrow"></i>');
  jQuery('#block-about-me .img-right').append('<div id="square1"></div><div id="square2"></div>');
  

  //Smooth scroll for nav links & adding active class to active link
  jQuery('.menu a').on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      jQuery('.active').removeClass('active');
      jQuery(this).addClass('active');
      switch(hash) {
        case '#challenge-home':
          hash = "#block-top-content-header";
          break;
        case '#challenge-news':
          hash = "#block-adchallenge-content";
          break;
        case '#challenge-event':
          hash = "#block-latest-event";
          break;
        case '#challenge-about-me':
          hash = "#block-about-me";
          break;
      }
      jQuery('html, body').animate({
        scrollTop: jQuery(hash).offset().top
      }, 800, function(){
        window.location.hash = hash;
      });
    } return false;
  });


  //burger menu toggle
  var status = false;
  jQuery(document).on ("click", "#bMenu", function () {
    if (!status){
      jQuery("header ul.menu").css('display', 'block');
      jQuery("#bMenu").css('opacity', '0.5');
      var addPad = 0;
      if (window.matchMedia("(max-width: 430px)").matches) {
        addPad = '-83px'
      }
      if (window.matchMedia("(max-width: 400px)").matches) {
        addPad = '-15px'
      }
      if (window.matchMedia("(max-width: 364px)").matches) {
        addPad = '-83px'
      }
      jQuery("header ul.menu").animate({
        top:addPad
      },800);
      status=true;
    }else{
      jQuery("header ul.menu").animate({
        top:'-500px'
      },800);
      status=false;
      jQuery("#bMenu").css('opacity', '1');
    }
  });
});

