
$(document).ready(function(){
  $('#get-valor').click(function(){
    window.alert($("#texto").val());
  });
  $('#set-valor').click(function(){
    $("#texto").val('Texto alterado por meio de função do jQuery');
  });
  $( "#texto" ).on( "blur", function() {
  $( this ).val(function( i, val ) {
    $("#texto2").val(val.toUpperCase());
    return val;
  });
});
});
