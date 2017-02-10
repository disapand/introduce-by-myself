$(document).ready( function () {

    $('#fullpage').fullpage({

        //Navigation
        navigation: true,                                               //是否显示导航栏(false)
        navigationTooltips: ['第一页', '第二页', '第三页', '第四页', '第五页', '键盘'],             //导航栏的提示文字
        // showActiveTooltip: true,                                        //是否一直显示导航文字(false)
        // anchors: ['section0', 'section1', 'section2'],               //添加锚点
        // lockAnchors: true,                                           //锁定锚点
        // slidesNavigation: true,                                      //横向的左右滑动导航(false)
        // slidesNavPosition: 'bottom',                                 //slideNavigation的位置(top, bottom)
        controlArrowColor: '#333',                                      //箭头的颜色
        //Scrolling
        css3: false,                                                     //是否使用css3滑动效果(true)
        scrollingSpeed: 1200,                                            //滑动速度(700)
        autoScrolling: true,                                             //自动滚动(false)
        scrollBar: false,                                                //滚动条(false)
        afterLoad: function ( anchorLink, index ) {                      //页面加载完成后的回调函数
            if ( index == 1 ) {
                $('.intro-item').addClass('animated zoomIn').css('opacity', '1');
            }
        },
        onLeave: function ( index, nextIndex, direction ) {               //离开时的回调函数
            if ( index == 1 ) {
                $('.intro-item').removeClass('animated zoomIn');
            }else {
                $('.intro-item').css('opacity', '0');
            }
        }
    });

    $('#photo').mouseover(function(event) {
        $(this).removeClass('animated pulse-only-min').addClass('animated pulse-only-max');
    });

    $('#photo').mouseleave(function(event) {
        $(this).addClass('animated pulse-only-min').removeClass('pulse-only-max')
    });

    var linkList = $('.item-link'),
        hoverList = $('.item-hover');


    for (var i = 0; i < hoverList.length; i++) {
        linkList.eq(i).on('mouseenter', {key: i}, function(event) {
            $(this).attr('style', 'opacity: 0;').removeClass('animated flipInY');
            hoverList.eq(event.data.key).addClass('animated flipInY').removeAttr('style');
        }).on('mouseleave', {key: i}, function(event) {
            $(this).removeAttr('style').addClass('animated flipInY');
            hoverList.eq(event.data.key).removeClass('animated flipInY').attr('style', 'opacity: 0;');
        });
    }

    linkList.eq(8).click(function(event) {
        $('#intro-group2').animate({'left': '20%'}, 1000);
        $('#intro-group1').animate({'margin-left': '-100%'}, 1000);
    });

    linkList.eq(14).click(function(event) {
        $('#intro-group2').animate({'left': '100%'}, 1000);
        $('#intro-group1').animate({'margin-left': '20%'}, 1000);
    });

    $('#preview').click(function(event) {
        $.fn.fullpage.moveTo(3);
    });

    $('#shop').click(function(event) {
        window.open('https://shop117316021.taobao.com/', '_blank');
    });

});