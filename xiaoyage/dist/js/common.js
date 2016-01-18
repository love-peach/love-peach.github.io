/**
 * Created by zhangjinpei on 16-1-14.
 */
$(document).ready(function () {
    //选择分类，下拉列表
    $('.classify-title.actionable').on('click', function () {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            $('.classify-list-wrap').slideDown(300);
        } else {
            $(this).removeClass('on');
            $('.classify-list-wrap').slideUp(300);
        }

    });

    //回到顶部
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").slideDown(300);
        } else {
            $("#back-to-top").slideUp(300);
        }
    });

    //导航条对应菜单高亮
    autoActive('whichPages', 'navbar');
    function autoActive(flagName, navbarId) {
        var pagesValueArray = creadNavArray(navbarId);
        console.log(pagesValueArray);
        autoAddClass(flagName, pagesValueArray);
    }

    //根据当前页面唯一值，判断是哪个页面，添加高亮样式
    function autoAddClass(flagName, pagesValueArray) {
        var pageValue = $('input[name=' + flagName + ']').val();
        for (var i = 0, j = pagesValueArray.length; i < j; i++) {
            if (pageValue == pagesValueArray[i]) {
                $('#' + pagesValueArray[i]).addClass('active');

            }
        }
    }

    //将导航栏的id存入到一个数组中
    function creadNavArray(navbarId) {
        var navArray = [];
        var navbar = $('#' + navbarId + ' li');
        for (var i = 0, j = navbar.length; i < j; i++) {
            var navbarChildrenId = navbar.eq(i).attr('id');
            navArray.push(navbarChildrenId);
        }
        return navArray;
    }
});
