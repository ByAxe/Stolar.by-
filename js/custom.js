$(document).ready(function(){

  $(document).bind( 'mousewheel', function(e){
		var nt = $(document.body).scrollTop()-2.5*(e.originalEvent.wheelDeltaY);
		e.preventDefault();

		$(document.body).stop().animate({scrollTop : nt}, 500 );
	});

  setTimeout(function () {
    $('.codrops-header > h1').css({
    'transform': 'translateX(0px)',
    'opacity': '1'
    });
  }, 600);

  setTimeout(function () {
    $('.codrops-header span').css({
    'transform': 'translateX(0px)',
    'opacity': '1'
    });
  }, 1100);

  $('#st-trigger-effects')
	.mouseover(function (){
		$(this).animate({opacity: 1}, {queue:false, duration: 400});
	})
  .mouseout(function(){
    $(this).animate({opacity: 0.5}, {queue:false, duration: 400});
  })

  $('#myCarousel').carousel({
          interval: 5000
  });

  //Handles the carousel thumbnails
  $('[id^=carousel-selector-]').click(function () {
    var id_selector = $(this).attr("id");
    try {
        var id = /-(\d+)$/.exec(id_selector)[1];
        console.log(id_selector, id);
        jQuery('#myCarousel').carousel(parseInt(id));
    } catch (e) {
        console.log('Regex failed!', e);
    }
  });
  // When the carousel slides, auto update the text
  $('#myCarousel').on('slid.bs.carousel', function (e) {
           var id = $('.item.active').data('slide-number');
          $('#carousel-text').html($('#slide-content-'+id).html());
  });

});
