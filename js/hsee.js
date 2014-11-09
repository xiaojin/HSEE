var swiperproduct=null,
    swiperengineer=null, 
    swiperleader=null;
var hsee = {
    bind : function() {
        //绑定12页欢迎进入按钮
        $(".entranceButton").click(function() {
            $(".resourceEntrance").hide();
            $(".resourceCategory").show();
            $(".entranceButton img").removeClass("scaleo");
            $(".page12").addClass("page12background");
            $(".recruitButtons img").addClass("scaleo");
        });
        //绑定产品招聘按钮
        $(".recruitproductbtn").click(function() {
            $(".page12").removeClass("page12background");
            $(".page12").addClass("page12detailbackground");            
            $(".resourceCategory").hide();
            $(".resourceproductdetail").show();
            if(swiperproduct==null ||swiperproduct ==undefined){
                hsee.initProductsilder();
            }            
        });
        //绑定导视招聘按钮
        $(".recruitleaderbtn").click(function() {
            $(".page12").removeClass("page12background");
            $(".page12").addClass("page12detailbackground");              
            $(".resourceCategory").hide();
            $(".resourceleadertdetail").show();
            if(swiperleader==null ||swiperleader ==undefined){
                hsee.initLeadersidler(); 
            }                               
        });
        //绑定工程师招聘按钮
        $(".recruitengineerbtn").click(function() {
            $(".page12").removeClass("page12background");
            $(".page12").addClass("page12detailbackground");  
            $(".resourceCategory").hide();
            $(".resourceengineertdetail").show();
            if(swiperengineer==null ||swiperengineer ==undefined){
                 hsee.initEngineersilder(); 
            }                         
        });
        //绑定招聘详细页面推出按钮
        $(".recruitquit").click(function(e) {
            $(".page12").addClass("page12background");
            $(".page12").removeClass("page12detailbackground");            
            var $target = $(e.target);
            $target.closest(".recruitquit").parent().hide();
            $(".resourceCategory").show();
            var jobdesc = $target.closest(".recruitquit").parent().attr("class");
            if("resourceproductdetail" === jobdesc){
                swiperproduct.destroy();
                swiperproduct=null;                
            }else if("resourceleadertdetail" === jobdesc){
                swiperleader.destroy();
                swiperleader=null;             
            }else if("resourceengineertdetail" === jobdesc){
                swiperengineer.destroy();
                swiperengineer=null;                   
            }
        });
        //绑定13页关注我们按钮
        $(".contactletter").click(function() {
            $(".contactinfooverlay").show();
        });
        //绑定13页overlay退出
        $(".contactinfooverlay").click(function() {
            $(".contactinfooverlay").hide();
        });
    },
    //13页员工详细信息：初始化产品员工招聘详细页面滑动控件
    initProductsilder : function() {
        swiperproduct = new Swiper('.swiperproductmen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart : function(swiper, direction) {
               var index = swiper.activeIndex + 1, offset = 0;
               $(".producthuman"+index).addClass("producthumanactive");                  
                var offset = ["0", "20%", "0", "-20%"];
                  $(".producthuman" + index).css({
                        'left' : offset[0],
                    });
                for ( i = 1; i < 4; i++) {
                    var count = (index + i) % 4 === 0 ? 4 : (index + i) % 4;
                    $(".producthuman" + count).css({
                        'left' : offset[i],
                    });
                    $(".producthuman" + count).addClass("humanOpacity");
                    $(".producthuman" + count).removeClass("producthumanactive");
                }  
                for(i = 1; i <= 4; i++){
                    var value = ((i-index)*100)+"%";
                    $(".product"+i).css({"transform":"translateX("+value+")",
                                         "-webkit-transform":"translateX("+value+")"
                                         });
                }                    
            },
            onTouchMove: function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(distance< 0 && swiper.activeIndex==3){ 
                   var cal=-10;                              
                   $(".product4").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });
                }
                if(distance>0 && swiper.activeIndex==0){
                   var cal=10;                              
                   $(".product1").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });                    
                }
            },
            onTouchEnd :function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(swiper.activeIndex==3 && distance!=0){
                    $(".product4").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
                 if(swiper.activeIndex==0 && distance!=0){
                    $(".product1").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
            }
        });
    },
    //13页员工详细信息：初始化导视员工招聘详细页面滑动控件
    initLeadersidler : function() {
         swiperleader = new Swiper('.swiperleadermen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart : function(swiper, direction) {
                var index = swiper.activeIndex + 1, offset = 0;
                var $hideHuman = $(".leaderhumanOpacity");
               $(".leaderhuman"+index).addClass("leaderhumanactive");                  
                var offset = ["0", "20%", "-20%"];
                  $(".leaderhuman" + index).css({
                        'left' : offset[0],
                    });
                for ( i = 1; i < 3; i++) {
                    var count = (index + i) % 3 === 0 ? 3 : (index + i) % 3;
                    $(".leaderhuman" + count).css({
                        'left' : offset[i],
                    });
                    $(".leaderhuman" + count).addClass("leaderhumanOpacity");
                    $(".leaderhuman" + count).removeClass("leaderhumanactive");
                }  
                for(i = 1; i <= 4; i++){
                    var value = ((i-index)*100)+"%";
                    $(".leader"+i).css({"transform":"translateX("+value+")",
                                         "-webkit-transform":"translateX("+value+")"
                                         });
                }                  
            },
            onTouchMove: function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(distance< 0 && swiper.activeIndex==2){ 
                   var cal=-10;                              
                   $(".leader3").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });
                }
                if(distance>0 && swiper.activeIndex==0){
                   var cal=10;                              
                   $(".leader1").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });                    
                }
            },
            onTouchEnd :function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(swiper.activeIndex==2 && distance!=0){
                    $(".leader3").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
                 if(swiper.activeIndex==0 && distance!=0){
                    $(".leader1").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
            }        
            
        });
    },
    //13页员工详细信息：初始化工程师员工招聘详细页面滑动控件
    initEngineersilder : function() {
        var swiperengineer = new Swiper('.swiperengineermen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart : function(swiper, direction) {
               var index = swiper.activeIndex + 1, offset = 0;
               $(".enghuman"+index).addClass("enghumanactive");                  
                var offset = ["0", "20%", "0", "-20%"];
                  $(".enghuman" + index).css({
                        'left' : offset[0],
                    });
                for ( i = 1; i < 4; i++) {
                    var count = (index + i) % 4 === 0 ? 4 : (index + i) % 4;
                    $(".enghuman" + count).css({
                        'left' : offset[i],
                    });
                    $(".enghuman" + count).addClass("enghumanOpacity");
                    $(".enghuman" + count).removeClass("enghumanactive");
                }  
                for(i = 1; i <= 4; i++){
                    var value = ((i-index)*100)+"%";
                    $(".engineer"+i).css({"transform":"translateX("+value+")",
                                         "-webkit-transform":"translateX("+value+")"
                                         });
                }                        
            },
            onTouchMove: function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(distance< 0 && swiper.activeIndex==3){ 
                   var cal=-10;                              
                   $(".engineer4").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });
                }
                if(distance>0 && swiper.activeIndex==0){
                   var cal=10;                              
                   $(".engineer1").css({"transform":"translateX("+cal+"%)",
                     "-webkit-transform":"translateX("+cal+"%)"
                     });                    
                }
            },
            onTouchEnd :function(swiper){ //给用户 已经移动到底的视觉效果
                var distance =swiper.positions.current - swiper.positions.start;
                if(swiper.activeIndex==3 && distance!=0){
                    $(".engineer4").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
                 if(swiper.activeIndex==0&& distance!=0){
                    $(".engineer1").css({"transform":"translateX(0)",
                                 "-webkit-transform":"translateX(0)"
                                 });
                }
            }           
        });
    },
    ready : function() {
        setTimeout(function() {
            $('.loading').fadeOut(500);
        }, 1000);
        hsee.bind();
        var swiperNested1;
        //第二页动画播放一遍，定义标签确定动画是否已经播放完毕
        var humanFlipped = false; //第二页人脸动画阻止重复播放
        //项目主要的上下滑动控件
        var swiperParent = new Swiper('.swiper-parent', {
            mode : 'vertical',
            speed : 350,
            slidesPerView : 1,
            onSlideNext : function(swiper) {
                // if(swiper.activeIndex >3 && !hasallloader){
                // $('.swiper-slide-active .lazy').each(function(){
                // $(this).attr('src',$(this).attr('image-url'));
                // });
                // if(swiper.activeIndex ===12){
                // hasallloader = true;
                // }
                // }
            },
            onSlideChangeStart : function(swiper, direction) {
                if (swiper.activeIndex === 1 && direction === "next") {
                    $(".block-recruit").addClass("recruitToNext");
                    //第2页 招聘滴水图片跳动 动画
                }
                if (swiper.activeIndex === 2) {//第2页 动画加载
                    $(".intro-title img:first-child").addClass("anintro2");
                    $(".intro-title div:nth-child(2)").addClass("anintro2");
                    $(".intro-title img:nth-child(3)").addClass("anintro3");
                    $(".intro-title img:nth-child(4)").addClass("anintro0-5");
                    $(".intro-title div:nth-child(5)").addClass("anintro3-5");
                    $(".intro-title img:nth-child(6)").addClass("anintro5");
                    
                }
                if (swiper.activeIndex === 3) {//第3页 动画加载
                    $(".charac-lineUp").addClass("ancharac-lineUp");
                    $(".charac-secHead").addClass("ancharac-secHead");
                    $(".charac-position").addClass("ancharac-position");
                    $(".charac-lineShort").addClass("ancharac-lineShort");
                    $(".charac-article").addClass("ancharac-article");
                    $(".charCircle-center").addClass("anCharCircle-center");
                    $(".charCircle-right").addClass("anCharCircle-right");
                    $(".hess-charCircle").addClass("anhess-charCircle");
                }
            },
            onTouchMove : function(swiper) {
                var offsetY = -swiper.getWrapperTranslate('y'), silderHalfHeighter = $(".page1").height() * 0.3;
                if (swiper.activeIndex === 0) {//第1页 招聘滴水图片跳动 动画 ，根据用户的滑动加载，可能用户滑动间距不大，导致没有跳至下一页，但是跳动画面还是需要的
                    if (offsetY > silderHalfHeighter) {
                        $(".block-recruit").addClass("recruitToNext");
                    };
                }

            },
            onSlideChangeEnd : function(swiper, direction) {
             
                var pagenum = ".page" + (swiper.activeIndex + 2);
                $(pagenum + ".unloaded .lazy").each(function() {
                    $(this).attr('src', $(this).attr('image-url'));
                    $(pagenum).removeClass("unloaded");
                });                    

                if (swiper.activeIndex === 8) {//第8页，加载动画
                    $(".officeBottle").addClass("anOfficeBottle");
                    $(".officePen").addClass("anOfficePen");
                    $(".officeMobile").addClass("anOfficeMobile");
                    $(".officeKeyboard").addClass("anOfficeKeyboard");
                    $(".officeNotebook").addClass("anOfficeNotebook");
                    $(".officeMouse").addClass("anOfficeMouse");
                } else {//第8页，否则移除动画
                    $(".officeBottle").removeClass("anOfficeBottle");
                    $(".officePen").removeClass("anOfficePen");
                    $(".officeMobile").removeClass("anOfficeMobile");
                    $(".officeKeyboard").removeClass("anOfficeKeyboard");
                    $(".officeNotebook").removeClass("anOfficeNotebook");
                    $(".officeMouse").removeClass("anOfficeMouse");
                }
                if (swiper.activeIndex === 7) {//第7页，让地点字体显示
                    $(".location-name ").css("opacity", 1);
                } else {//第7页，让地点字体隐藏
                    $(".location-name ").css("opacity", 0);
                }
                if (swiper.activeIndex !== 3) {//非第3页，才移除动画，否则会有托影 效果
                    $(".charac-lineUp").removeClass("ancharac-lineUp");
                    $(".charac-secHead").removeClass("ancharac-secHead");
                    $(".charac-position").removeClass("ancharac-position");
                    $(".charac-lineShort").removeClass("ancharac-lineShort");
                    $(".charac-article").removeClass("ancharac-article");
                    $(".hess-charCircle").removeClass("anhess-charCircle");
                    $(".charCircle-center").removeClass("anCharCircle-center");
                    $(".charCircle-right ").removeClass("anCharCircle-right");

                }
                if (swiper.activeIndex !== 2) {//非第2页，才移除动画，否则会有托影 效果
                    $(".intro-title img:first-child").removeClass("anintro2");
                    $(".intro-title div:nth-child(2)").removeClass("anintro2");
                    $(".intro-title img:nth-child(3)").removeClass("anintro3");
                    $(".intro-title img:nth-child(4)").removeClass("anintro0-5");
                    $(".intro-title div:nth-child(5)").removeClass("anintro3-5");
                    $(".intro-title img:nth-child(6)").removeClass("anintro5");
                }
                if (swiper.activeIndex === 1) {//第2页，加载任务头像自动播放动画
                    $(".block-recruit").removeClass("recruitToNext");
                    previousX = 1;
                    if (!humanFlipped) {
                        swiperNested1.params.autoplay = 600;
                        swiperNested1.startAutoplay();
                        humanFlipped = true;
                    }
                }
            }
        });
        if ($(window).height() < '500') {//设置 屏幕的最小高度是504
            // 上下滚动翻页
            $('.swiper-parent').css("min-height", "504px");
            $('.pages').css("min-height", "504px");
            // swiperParent.params.calculateHeight =true;
        }
        //第2页，任务头像滑动控件
        swiperNested1 = new Swiper('.swiper-human', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            autoplayStopOnLast : true,
            simulateTouch : false,
            onTouchEnd : function(swiper) {
                var index = Math.abs(swiper.activeIndex);
                $(".faces").hide();
                $(".facel" + index).show();
                $(".facel" + index).css({
                    "-webkit-transform":"rotateY(0deg)",
                    "transform":"rotateY(0deg)"
                });         
                $(".facer" + index).show();
                $(".facel" + index).css({
                    "-webkit-transform":"rotateY(0deg)",
                    "transform":"rotateY(0deg)"
                });                
                if (index === 3) {
                    $(".shadowL").hide();
                } else {
                    $(".shadowL").show();
                }
            },// onSetWrapperTransition 
           onSlideChangeStart: function(swiper, direction) {
                if (swiper.positions.current - swiper.positions.start != 0) { //如果用户点击屏幕，差值不等于0，就不做任何处理
                    return false;
                }                
                var index = swiper.activeIndex;
                if (index === 3) {
                    $(".shadowL").removeClass("anshowL");
                    $(".shadowL").css('opacity', '0');
                } else {
                    $(".shadowL").addClass("anshowL");
                    $(".shadowL").css('opacity', '1');                   
                }
                var $facer = $(".facer" + (index-1)), $facel = $(".facel" + (index-1));
                if ((index + 1) <= 6 && "next" ===direction) { //向右边移动
                    var $nrface = $(".facer" + (index)), $nlface = $(".facel" + (index));
                    $nrface.show();
                     $nlface.css({
                         "-webkit-transform": "rotateY(" + 90 + "deg)",
                         "transform": "rotateY(" + 90 + "deg)"
                     });
                    $facer.css({
                         "-webkit-transform": "rotateY(" + -90 + "deg)",
                         "transform": "rotateY(" + -90 + "deg)",
                         "-webkit-transition": "-webkit-transform 0.2s",
                         "transition": "-webkit-transform 0.2s"
                     });
                    setTimeout(function() {
                        $nlface.show();
                        $facel.css("z-index", 0);
                        $nlface.css("z-index", 1);
                        $nlface.css({
                             "-webkit-transform": "rotateY(" + 0 + "deg)",
                             "transform": "rotateY(" + 0 + "deg)",
                             "-webkit-transition": "-webkit-transform 0.3s",
                             "transition": "-webkit-transform 0.3s"
                        });
                    }, 200);
                    setTimeout(function() {
                        $facer.css({
                             "-webkit-transform": "rotateY(" + 0 + "deg)",
                             "transform": "rotateY(" + 0 + "deg)"
                         }); 
                        $facel.css({
                             "-webkit-transform": "rotateY(" + 0 + "deg)",
                             "transform": "rotateY(" + 0 + "deg)"
                         });                                                 
                        $facer.hide();
                        $facel.hide();
                    }, 200);
                    if (index == 4) {                       
                        $(".page2 .pullup").show();
                    }
                } 

            },
        });
        //第6页，图标滑动控件
        var swiperNested2 = new Swiper('.swiper-mile', {
            paginationClickable : true,
            slidesPerView : 1,
            speed : 300,
            onTouchEnd : function(swiper) {
                var index = swiper.activeIndex, offset = 0;
                if (swiper.getWrapperTranslate('x') < 0) {
                    offset = "translateX(" + ((-20 * index)) + "%)";
                } else {
                    offset = "translateX(" + ((20 * index)) + "%)";
                }
                if (index == 4) {
                    $(".page6 .pullup").show();
                }
                $(".mile-icons").css({
                    '-webkit-transform' : offset,
                    'transform' : offset
                });
            }
        });
        //第六页，增加 点击左右箭头可以滑动功能
        var swipermile = function() {
            setTimeout(function() {
                var index = swiperNested2.activeIndex, offset = 0;
                if (swiperNested2.getWrapperTranslate('x') < 0) {
                    offset = "translateX(" + ((-20 * index)) + "%)";
                } else {
                    offset = "translateX(" + ((20 * index)) + "%)";
                }
                if (index == 4) {
                    $(".page6 .pullup").show();
                }
                $(".mile-icons").css({
                    '-webkit-transform' : offset,
                    'transform' : offset
                });
            }, 100);
        };
        //第六页，绑定右箭头
        $(".mileRightArrow").click(function() {
            swiperNested2.swipeNext();
            swipermile();
        });
        //第六页，绑定左箭头
        $(".mileLeftArrow").click(function() {
            swiperNested2.swipePrev();
            swipermile();
        });

        //绑定第13页，top 按钮，回到首页
        $(".contacttopbutton").click(function() {
            swiperParent.swipeTo(0, 0, true);
        });

    }
};

$(hsee.ready);
