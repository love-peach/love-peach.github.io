/**
 * Created by zhangjinpei on 16-1-19.
 */

$('document').ready(function () {
    $('.dynamic-list .dynamic-link').on('click',function () {
        $('.model-mask,.dynamic-model-content').fadeIn(300);
    });

    $('#showDetails').on('click',function () {
        $('.model-mask,.model-content').fadeIn(300);
    });
    $('.model-mask,.close-model').on('click',function () {
        $('.model-mask,.model-content,.dynamic-model-content').fadeOut(300);
    });
});