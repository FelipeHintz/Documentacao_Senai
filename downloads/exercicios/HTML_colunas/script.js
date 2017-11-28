var qualItem;
var itemFinal = 0;
var acertos = 0;

$('.origin-point').mousedown(function() {
  var linkLine = $('<div id="new-link-line"></div>').appendTo('body');
  linkLine.css('top', $(this).offset().top + $(this).outerWidth() / 2).css('left', $(this).offset().left + $(this).outerHeight() / 2);
  
  qualItem = $(this).attr('id').substr($(this).attr('id').length - 1, $(this).attr('id').length);
  
  $(document).mousemove(linkMouseMoveEvent);
  
  //Click
  $(document).bind('mouseup.link', function(event) {
    if (event.which == 1) {
		if (itemFinal != 0)
			endLinkMode();
		else
			removeLinha();
    }
  });

});

function linkMouseMoveEvent(event) {
  if ($('#new-link-line').length > 0) {  
		var originX = $('#pontoOrigem'+qualItem).offset().left + $('#pontoOrigem'+qualItem).outerWidth() / 2;
		var originY = $('#pontoOrigem'+qualItem).offset().top + $('#pontoOrigem'+qualItem).outerHeight() / 2;

		var length = Math.sqrt((event.pageX - originX) * (event.pageX - originX) + (event.pageY - originY) * (event.pageY - originY));

		var angle = 180 / 3.1415 * Math.acos((event.pageY - originY) / length);
		if (event.pageX > originX)
		  angle *= -1;

		$('#new-link-line')
		  .css('height', length)
		  .css('-webkit-transform', 'rotate(' + angle + 'deg)')
		  .css('-moz-transform', 'rotate(' + angle + 'deg)')
		  .css('-o-transform', 'rotate(' + angle + 'deg)')
		  .css('-ms-transform', 'rotate(' + angle + 'deg)')
		  .css('transform', 'rotate(' + angle + 'deg)');	  
  }
}

function endLinkMode() {
	if (itemFinal != 0)
		if (itemFinal == qualItem) {
			$('#new-link-line').clone().attr("id", "clone").insertAfter('#new-link-line'); acertos++;
		} else {
			swal("Resposta incorreta!","Resposta incorreta!", "error");
		}
	removeLinha();
	$(document).unbind('mousemove.link').unbind('click.link').unbind('keydown.link');
	itemFinal = 0;
	if (acertos == 4)
		swal("Resposta correta!","Resposta correta!", "success");
}

function removeLinha() {
	$('#new-link-line').remove();
}

$('.end-point').mouseover(function() {
	itemFinal = $(this).attr('id').substr($(this).attr('id').length - 1, $(this).attr('id').length);
})

$('.end-point').mouseleave(function() {
	itemFinal = 0;
})