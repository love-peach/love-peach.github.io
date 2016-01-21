/**
 * Created by zhagnjinpei on 16-1-21.
 */

$(document).ready(function () {
    $('.scan-oder').on('click', function () {
        $('.gift-slide-down').css({top:'5px'});
    });
    $('.gift-slide-down').on('click', function () {
        $(this).css({top:'-100%'});
    });
});
