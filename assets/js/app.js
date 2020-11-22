$(function(){
    if($(window).width() < 768){
        $('#navigation .nav-item ul').parent().append('<button type="button" class="toggler"><i class="feather-chevron-down"></i></button>');
        $(document).on('click','#navigation li .toggler',function(){
            if($(this).parent().children('ul').hasClass('show')){
                $(this).parent().children('ul').removeClass('show');
            } else {
                $(this).parent().children('ul').addClass('show');
            }
        });
    }
    
});