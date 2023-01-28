$(window).on('load', function(){
    setTimeout(() => {
        $('.popup').show()
    },3000);
})

$('#close').click(()=>{
    $('.popup').hide()
})