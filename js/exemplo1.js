
$(document).ready(function(){
  $('#btn-seletor').click(function(){
    var seletor = $('#input-seletor').val();
    $('.selected').removeClass('selected');
    $(seletor).addClass('selected');
    $('.funcao-utilizada').show();
    $('.seletor-acionado').html(seletor);
  })
});
