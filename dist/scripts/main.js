'use strict';

$(document).ready(function () {

      $('#fullpage').fullpage({

            //Navigation
            navigation: true, //是否显示导航栏(false)
            navigationTooltips: ['第一页', '第二页', '第三页', '第四页', '第五页', '键盘'], //导航栏的提示文字
            showActiveTooltip: true, //是否一直显示导航文字(false)
            // anchors: ['section0', 'section1', 'section2'],               //添加锚点
            // lockAnchors: true,                                           //锁定锚点
            // slidesNavigation: true,                                      //横向的左右滑动导航(false)
            // slidesNavPosition: 'bottom',                                 //slideNavigation的位置(top, bottom)

            //Scrolling
            css3: false, //是否使用css3滑动效果(true)
            scrollingSpeed: 1200, //滑动速度(700)
            autoScrolling: true, //自动滚动(false)
            scrollBar: false, //滚动条(false)
            afterLoad: function afterLoad(anchorLink, index) {//页面加载完成后的回调函数

            },
            onLeave: function onLeave(index, nextIndex, direction) {//离开时的回调函数

            },
            sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
      });
});
//# sourceMappingURL=main.js.map
