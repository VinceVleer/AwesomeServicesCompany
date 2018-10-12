$(function() {

	$('.subtitle__item, .subtitle__item--2, .subtitle__item--3, .subtitle__item--4').hover(function(){
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