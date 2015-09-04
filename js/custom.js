$(document).ready(function(){

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
});
