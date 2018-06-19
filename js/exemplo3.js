
$(document).ready(function(){
  $('.mouse-over-box').mouseover(function(){
    $(this).toggleClass('active');
  });
  $('.click-box').click(function(){
    $(this).toggleClass('active');
  });
  $('#change-exemple').change(function(){
    $('#opcao-selecionada').val($(this).val());

  })
});
