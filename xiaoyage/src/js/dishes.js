/**
 * Created by zhagnjinpei on 16-1-18.
 */

//分类菜单切换
$(document).ready(function () {
    var tabsBox = $('.classfity-tabs');
    var tabsItem = tabsBox.find('.tabs-item');
    $(tabsItem).on('click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    }).hover(function () {
        if (!$(this).hasClass('active')) {
            $(this).find('a').addClass('bounce');
        }
    }, function () {
        $(this).find('a').removeClass('bounce');
    });

});