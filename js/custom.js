$('#pin').click(function(e){ $(this).focus(); });
$('#authorizePayment').click(function() {
    console.log('payment auth clicked!');
    $('#pinInput').removeClass('hide');
    $('#pin').trigger('click');
    $('#pinInput').attr("onclick", "submitPayment()");
});

function submitPayment () {
    console.log('payment submitted!');
    window.location.replace("/paid.html");
}
