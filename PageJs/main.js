/**
 * Created by wanda on 2017/3/30.
 */

$(".menu a").click(function () {
    $(".menu>a:not(this)").removeClass("menu-active");
    $(this).toggleClass("menu-active");
});
