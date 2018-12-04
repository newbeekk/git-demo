$(function(){
    $('#head').load('header.html')
    $('#foot').load('footer.html')

})

/*$('body').scroll(function () {
    let offsetTopHeight = $('body').scrollTop();
    let css1 = {'position':'fixed','top':'0','backgroundColor':'#fff'}
    let css2 = {'position':'relative'}
    console.log(offsetTopHeight)
    if(offsetTopHeight>60){
        $('header').css(css1)
    }else{
        $('header').css(css2)
    }
})*/
//菜单
function menuToggle(){
    $('.nav').slideToggle()
}

//二级菜单的切换active
$('.sup_nav').on('click','li',function () {
    let $index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $($('.sup_body_wrapper>div')[$index]).show().siblings().hide();
})


//获取地址栏参数  whichIndex的值

function GetQueryString(whichIndex) {
    var reg = new RegExp("(^|&)" + whichIndex + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
var whichIndex = GetQueryString('whichIndex');
$($('.sup_nav>li')[whichIndex]).addClass('active').siblings().removeClass('active');
$($('.sup_body_wrapper>div')[whichIndex]).show().siblings().hide();