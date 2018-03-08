$(function(){
	for(var i = 0; i < 25; i++)
	   $('.square').append('<div class="circle"></div>');
	$('.btn_start').click(function(event){
		event.stopPropagation();
		$(this).html("");
		$('.circle').addClass("b");
		$('.circle').bind('click', function(ev){
			ev.stopPropagation();
			$(this).removeClass("b").addClass("y").unbind('click');
			if($('.y').length >= 16){
				$('body').bind('click',function(e){
					e.stopPropagation();
					$('.circle').removeClass("b").removeClass("y");
					$('.btn_start').html("开始");
					$(this).unbind();
				})
			}
		});
	})
	

})


























































































































4
