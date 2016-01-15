/**
 * Created by shaozhenxing on 16-1-14.
 */
$(document).ready(function () {
    $('.classify-title.actionable').on('click',function () {
        if(!$(this).hasClass('on')){
            $(this).addClass('on');
            $('.classify-list-wrap').slideDown(300);
        }else {
            $(this).removeClass('on');
            $('.classify-list-wrap').slideUp(300);
        }

    });
});
