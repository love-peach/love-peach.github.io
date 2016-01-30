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

    //导航栏滑动一定距离添加白底
    var scrollFunc = function (e) {
        e = e || window.event;
        if($(window).scrollTop()>0) {
            $(".nav").addClass('nav-change-color');
        }else {
            $(".nav").removeClass('nav-change-color');
        }
    };

    //导航栏滑动一定距离收起
//    var scrollSpace = 10;
//    var scrollFunc = function (e) {
//        e = e || window.event;
//        var currentScrollTop = $(window).scrollTop();
//        if (currentScrollTop > 0) {
//            $(".nav").addClass('nav-change-color');
//            if (currentScrollTop > 580) {
//                $(".nav").addClass('nav-hidden');
//                if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
//                    if (e.wheelDelta > scrollSpace) { //当滑轮向上滚动时
//                        $(".nav").removeClass('nav-hidden');
//                    }
//                    if (e.wheelDelta < scrollSpace) { //当滑轮向下滚动时
//                        $(".nav").addClass('nav-hidden');
//                    }
//                } else if (e.detail) {  //Firefox滑轮事件
//                    if (e.detail > scrollSpace) { //当滑轮向上滚动时
//                        $(".nav").removeClass('nav-hidden');
//                    }
//                    if (e.detail < scrollSpace) { //当滑轮向下滚动时
//                        $(".nav").addClass('nav-hidden');
//                    }
//                }
//
//            }
//        }
//        else if (currentScrollTop === 0) {
//            $(".nav").removeClass('nav-hidden nav-change-color');
//        }
//    };
//
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel;
    document.onmousewheel = scrollFunc;


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
