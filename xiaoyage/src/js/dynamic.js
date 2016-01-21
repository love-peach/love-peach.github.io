/**
 * Created by zhangjinpei on 16-1-19.
 */

$('document').ready(function () {
    //点击动态链接，弹出动态详情，点击关闭，收起弹窗;
    $('.dynamic-list .dynamic-link').on('click',function () {
        $('.dynamic-model').css({top: '0'});
        $('.dynamic-top').css({overflow: 'initial'})
        $('.footer').hide();
    });
    $('.dynamic-model .model-close').on('click',function () {
        $('.dynamic-model').css({top: '100%'});
         $('.dynamic-top').css({overflow: 'hidden'});
        $('.footer').show();
    })


});
