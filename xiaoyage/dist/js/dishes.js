/**
 * Created by zhagnjinpei on 16-1-18.
 */

//分类菜单切换
$(document).ready(function () {
    $('.classfity-tabs .tabs-item').on('click',function () {
       var $this = $(this);
        $this.siblings('li').removeClass('active');
        $this.addClass('active');
    });
});