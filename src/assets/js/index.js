$(function() {

	$('.subtitle__item').hover(function(){
		$(this).css("background-color", "lightgrey");
		}, function(){
		$(this).css("background-color", "white");
	});

	$('.form__button').hover(function(){
		$(this).css("background-color", "#444");
		}, function(){
		$(this).css("background-color", "black");
	});

});