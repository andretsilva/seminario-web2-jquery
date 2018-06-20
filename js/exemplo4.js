
$(document).ready(function(){
	$(".animate1").click(function(){
	    $(this).animate({left: '250px'});
	});
	$(".animate2").click(function(){
    	$(this).animate({fontSize: '100px'}, "slow");
	});
	$('#fim').click(function(e) {
		$('html, body').animate({scrollTop: $('#topo').offset().top}, 300);
		return false;
	});
	$('#topo').click(function(e) {
		$('html, body').animate({scrollTop: 0}, 300);
		return false;
	});
});
