/**
 * Created by zhangjinpei on 16-1-12.
 */
$(document).ready(function () {

    //定义鼠标滚动函数
    var scrollDirection = "down";//定义鼠标滚动方向，并初始化；
    var scrollIndex = 0;//定义鼠标滚动的位置；
    var scrollSpace = 0;//定义鼠标的灵敏度；
    var _isBottom = false;
    var scrollFunc = function (e) {
        e = e || window.event;
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件
            if (e.wheelDelta > scrollSpace) { //当滑轮向上滚动时
                scrollDirection = "up";

                if (!$('.page' + scrollIndex).is(":animated")) {
                    reduceScrollIndex();
                    changePages(scrollIndex, scrollDirection);
                } else {
                }


            }
            if (e.wheelDelta < scrollSpace) { //当滑轮向下滚动时
                scrollDirection = "down";

                if (!$('.page' + scrollIndex).is(":animated")) {
                    addScrollIndex();
                    changePages(scrollIndex, scrollDirection);
                } else {
                }


            }
        } else if (e.detail) {  //Firefox滑轮事件
            if (e.detail > scrollSpace) { //当滑轮向上滚动时

                reduceScrollIndex();
                if (!$('.page' + scrollIndex).is(":animated")) {
                    scrollDirection = "up";
                    changePages(scrollIndex, scrollDirection);
                } else {
                }


            }
            if (e.detail < scrollSpace) { //当滑轮向下滚动时
                scrollDirection = "down";

                if (!$('.page' + scrollIndex).is(":animated")) {
                    addScrollIndex();
                    changePages(scrollIndex, scrollDirection);
                } else {
                }

            }
        }

        changeIndexStyle();

    };

    //定义页面索引自增函数
    function addScrollIndex() {
        if (scrollIndex === 3) {
            scrollIndex = 3;
        } else {
            scrollIndex++;
        }
    }

    //定义页面索引自减函数
    function reduceScrollIndex() {
        if (scrollIndex === 0) {
            scrollIndex = 0;
        } else {
            scrollIndex--;
        }
    }

    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel;
    document.onmousewheel = scrollFunc;

    //定义导航点的点击事件
    $('.pagination .pagination-bullet').on('click', function () {
        var currentPageIndex = $(this).index();

        if (currentPageIndex < scrollIndex) {
            changePages(currentPageIndex, 'up');
            $('.page').not('.page' + currentPageIndex).stop(false, false).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});
        } else if (currentPageIndex > scrollIndex) {
            changePages(currentPageIndex, 'down');
            $('.page').not('.page' + currentPageIndex).stop(false, false).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});
        }


        scrollIndex = currentPageIndex;
        changeIndexStyle();
        console.log('导航点操作：'+scrollIndex);
    });

    //定义箭头指示点击事件
    $('.btn-next').click(function () {
        if (!$('.page' + scrollIndex).is(":animated")) {
            addScrollIndex();
            changePages(scrollIndex, 'down');
        }
        changeIndexStyle();
         console.log('导航箭头操作：'+scrollIndex);
    });
    $('.btn-prev').click(function () {
        if (!$('.page' + scrollIndex).is(":animated")) {
            reduceScrollIndex();
            changePages(scrollIndex, 'up');
        }
        changeIndexStyle();
        console.log('导航箭头操作：'+scrollIndex);
    });

    //监听键盘方向建事件
    $(document).on('keydown', function (e) {
        if (e.keyCode == 38 || e.keyCode == 33) {
            if (!$('.page' + scrollIndex).is(":animated")) {
                reduceScrollIndex();
                changePages(scrollIndex, 'up');
            }

            changeIndexStyle();
        } else if (e.keyCode == 40 || e.keyCode == 34) {
            if (!$('.page' + scrollIndex).is(":animated")) {
                addScrollIndex();
                changePages(scrollIndex, 'down');
            }


        }
        changeIndexStyle();
        console.log('键盘操作：' + scrollIndex)
    });

    //定义首屏屏幕切换和切到首屏的事件
    function changeIndexStyle() {
        if (scrollIndex > 0) {
            if (scrollIndex === 3) {
                $('.btn-next').hide();
                $('.btn-prev').show();
            } else {
                $('.btn-prev').show();
                $('.btn-next').show().removeClass('transparent');
                $('.menu-icon-wrap').addClass('change-menu-icon');
            }
        } else {
            $('.btn-prev').hide();
            $('.btn-next').addClass('transparent');
            $('.change-menu-icon').removeClass('change-menu-icon');
        }
    }

    //定义页面改变后的处理函数
    function changePages(scrollIndex, scrollDirection) {
        switch (scrollIndex) {
            case 0:

                $('.page0').show().stop(false, false).animate({opacity: 1,filter: 'alpha(opacity=100)'}, {duration: 1000});//显示page0
                $('.page1').stop().animate({opacity: 0,filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page1/*,removeShowClass(scrollIndex)*/
//                $('.page1').removeClass('page-transitioning');

                $('.pagination-bullet').siblings().removeClass('pagination-bullet-active')
                    .eq(scrollIndex).addClass('pagination-bullet-active');
                _isBottom = false;
                console.log(scrollIndex + scrollDirection);

                break;
            case 1:

                if (scrollDirection === "down") {
                    $('.page0').stop(false, false).css({opacity: 1, filter: 'alpha(opacity=100)'}).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000, complete: $(this).hide()});//隐藏page0
                    $('#page1-left1').css({'top': '-100%'}).animate({'top': '0%'}, {duration: 800});
                    $('#page1-left2').css({'top': -2000}).delay(300).animate({'top': 0}, {duration: 1000});
                    $('#page1-right').css({opacity: 1, filter: 'alpha(opacity=100)', 'top': '200%'}).delay(300).animate({'top': 0}, {duration: 1000 });
                } else if (scrollDirection === "up") {
                    $('.page2').stop(false, false).css({opacity: 1, filter: 'alpha(opacity=100)'}).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page2
                }
                $('.page1').stop(false, false).css({opacity: 0, filter: 'alpha(opacity=0)'}).animate({opacity: 1, filter: 'alpha(opacity=100)'}, {duration: 1000}, addShowClass(scrollIndex));//显示page1

                $('.pagination-bullet').siblings().removeClass('pagination-bullet-active')
                    .eq(scrollIndex).addClass('pagination-bullet-active');
                _isBottom = false;
                console.log(scrollIndex + scrollDirection);
                break;
            case 2:

                if (scrollDirection === "down") {
                    $('.page1').stop(false, false).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page1

                    $('#page2-left1').css({'top': '-100%'}).animate({'top': '0%'}, {duration: 800});
                    $('#page2-left2').css({'top': -2000}).delay(300).animate({'top': 0}, {duration: 1000});
                    $('#page2-right').css({opacity: 1, filter: 'alpha(opacity=100)', 'top': '200%'}).delay(300).animate({'top': 0}, {duration: 1000});
                } else if (scrollDirection === "up") {
                    $('.page3').stop(false, false).css({opacity: 1, filter: 'alpha(opacity=100)'}).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page3
                }
                $('.page2').stop(false, false).css({opacity: 0, filter: 'alpha(opacity=0)'}).animate({opacity: 1, filter: 'alpha(opacity=100)'}, {duration: 1000}, addShowClass(scrollIndex));//显示page2

                $('.pagination-bullet').siblings().removeClass('pagination-bullet-active')
                    .eq(scrollIndex).addClass('pagination-bullet-active');
                _isBottom = false;
                console.log(scrollIndex + scrollDirection);
                break;
            case 3:

                if (_isBottom) {
                    console.log('已经到底部啦！！！');
                    return;
                }

                $('.page1').stop(false, false).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page1

                $('.page2').stop(false, false).animate({opacity: 0, filter: 'alpha(opacity=0)'}, {duration: 1000});//隐藏page2

                $('#page3-left1').css({'top': '-100%'}).animate({'top': '0%'}, {duration: 800});
                $('#page3-left2').css({'top': -2000}).delay(300).animate({'top': 0}, {duration: 1000});
                $('#page3-right').css({opacity: 1, filter: 'alpha(opacity=100)', 'top': '200%'}).delay(300).animate({'top': 0}, {duration: 1000});

                $('.page3').stop(false, false).css({opacity: 0, filter: 'alpha(opacity=0)'}).animate({opacity: 1, filter: 'alpha(opacity=100)'}, {duration: 1000}, addShowClass(scrollIndex));//显示page3

                $('.pagination-bullet').siblings().removeClass('pagination-bullet-active')
                    .eq(scrollIndex).addClass('pagination-bullet-active');
                _isBottom = true;
                console.log(scrollIndex + scrollDirection);
                break;
            default:
                console.log("未知错误");
                console.log(scrollIndex + scrollDirection);
                break;
        }
    }

    //定义页面动画执行完后的回调函数
    function addShowClass(scrollIndex) {
        if (scrollIndex >= 0) {
            $('.page' + scrollIndex).addClass('page-active');
        }
    }

    function removeShowClass() {
        $('.page-active').removeClass('page-active');
    }

});