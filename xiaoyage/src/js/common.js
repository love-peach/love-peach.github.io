/**
 * Created by zhangjinpei on 16-1-14.
 */
$(document).ready(function () {


    //导航条对应菜单高亮
    autoActive('whichPages', 'navbar');
    function autoActive(flagName, navbarId) {
        var pagesValueArray = creadNavArray(navbarId);
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

    //导航栏鼠标悬停显示二维码
    $('.slide-erweima-wrap').hover(function () {
        $('.slide-erweima').stop(false, true).slideDown(300);
    }, function () {
        $('.slide-erweima').stop(true, false).slideUp(300);
    });


    //回到顶部
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 500) {
            $("#back-to-top").slideDown(300);
        } else {
            $("#back-to-top").slideUp(300);
        }
    });

    //子页面top-banner了解详情等点击后交互效果
    $('.show-slide-box').on('click', function () {
        $('.banner-slide-down').css({top: '5px'});
    });
    $('.banner-slide-down').on('click', function () {
        $(this).css({top: '-100%'});
    });
});
