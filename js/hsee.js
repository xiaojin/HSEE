var hsee = {
    bind : function() {
        $(".entranceButton").click(function(){
           $(".resourceEntrance").hide();
           $(".resourceCategory").show();
           $(".entranceButton img").removeClass("scaleo"); 
           $(".page12").addClass("page12background");
           $(".recruitButtons img").addClass("scaleo");
        });
        $(".recruitproductbtn").click(function(){
            $(".resourceCategory").hide();
            $(".resourceproductdetail").show();
            hsee.initProductsilder();
        });
         $(".recruitleaderbtn").click(function(){
            $(".resourceCategory").hide();
            $(".resourceleadertdetail").show();
            hsee.initLeadersidler();            
         });
         $(".recruitengineerbtn").click(function(){
            $(".resourceCategory").hide();
            $(".resourceengineertdetail").show();
            hsee.initEngineersilder();
         });
         $(".recruitquit").click(function(e){
            var $target = $(e.target);
            $target.closest(".recruitquit").parent().hide();
            $(".resourceCategory").show();              
         });  
         $(".contactletter").click(function(){
             $(".contactinfooverlay").show();
         });
         $(".contactinfooverlay").click(function(){
             $(".contactinfooverlay").hide();
         });
    },
    initProductsilder :function(){
        var swiperproduct = new Swiper('.swiperproductmen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart :function(swiper, direction){
               console.log(swiper.getWrapperTranslate('x'));
                var index = swiper.activeIndex+1, offset = 0;
                var $hideHuman = $(".humanOpacity"); 
                for (i=0;i<$hideHuman.length;i++){
                    var current = $($hideHuman[i]).css('left');
                    current = current.replace(/px/, "");
                    for(j=i+1;j<$hideHuman.length;j++){
                        var next = $($hideHuman[j]).css('left');
                        next = next.replace(/px/, "");
                        if(next < current){
                            var p = $hideHuman[i];
                            $hideHuman[i] = $hideHuman[j];
                            $hideHuman[j] = p;
                            current = next;
                        }
                    }
                }
                if ((swiper.positions.current - swiper.positions.start) < 0 && index <=3) {
                     $(".producthumanactive").css({
                        'left':'-20%',
                    });
                     $(".producthumanactive").addClass("humanOpacity");
                     $(".producthuman"+(index-1)).removeClass("producthumanactive");                      
                     $($hideHuman[$hideHuman.length-1]).css('left',0);
                     $($hideHuman[$hideHuman.length-1]).removeClass("humanOpacity");
                     $($hideHuman[$hideHuman.length-1]).addClass("producthumanactive");
                    for (i=0;i<$hideHuman.length-1;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft +0.4)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }               
                }else if ((swiper.positions.current - swiper.positions.start) > 0 && index >=1) {
                    $(".producthumanactive").css({
                        'left':'20%',
                    });
                    $(".producthumanactive").addClass("humanOpacity");
                    $(".producthuman"+(index+1)).removeClass("producthumanactive");                    
                    $($hideHuman[0]).css('left',0);
                    $($hideHuman[0]).removeClass("humanOpacity");
                    $($hideHuman[0]).addClass("producthumanactive");                    
                    for (i=1;i<$hideHuman.length;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft - 0.4)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }
                }                                  
            }
        });        
    },
    initLeadersidler:function(){
        var swiperleader = new Swiper('.swiperleadermen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart :function(swiper, direction){
               console.log(swiper.getWrapperTranslate('x'));
                var index = swiper.activeIndex+1, offset = 0;
                var $hideHuman = $(".leaderhumanOpacity"); 
                for (i=0;i<$hideHuman.length;i++){
                    var current = $($hideHuman[i]).css('left');
                    current = current.replace(/px/, "");
                    for(j=i+1;j<$hideHuman.length;j++){
                        var next = $($hideHuman[j]).css('left');
                        next = next.replace(/px/, "");
                        if(next < current){
                            var p = $hideHuman[i];
                            $hideHuman[i] = $hideHuman[j];
                            $hideHuman[j] = p;
                            current = next;
                        }
                    }
                }
                if ((swiper.positions.current - swiper.positions.start) < 0 && index <=3) {
                     $(".leaderhumanactive").css({
                        'left':'-20%',
                    });
                     $(".leaderhumanactive").addClass("leaderhumanOpacity");
                     $(".leaderhuman"+(index-1)).removeClass("leaderhumanactive");                      
                     $($hideHuman[$hideHuman.length-1]).css('left',0);
                     $($hideHuman[$hideHuman.length-1]).removeClass("leaderhumanOpacity");
                     $($hideHuman[$hideHuman.length-1]).addClass("leaderhumanactive");
                    for (i=0;i<$hideHuman.length-1;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft +0.4)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }               
                }else if ((swiper.positions.current - swiper.positions.start) > 0 && index >=1) {
                    $(".leaderhumanactive").css({
                        'left':'20%',
                    });
                    $(".leaderhumanactive").addClass("leaderhumanOpacity");
                    $(".leaderhuman"+(index+1)).removeClass("leaderhumanactive");                    
                    $($hideHuman[0]).css('left',0);
                    $($hideHuman[0]).removeClass("leaderhumanOpacity");
                    $($hideHuman[0]).addClass("leaderhumanactive");                    
                    for (i=1;i<$hideHuman.length;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft - 0.4)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }
                }                                  
            }
        });          
    },
    initEngineersilder:function(){
         var swiperengineer = new Swiper('.swiperengineermen', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            onSlideChangeStart :function(swiper, direction){
               console.log(swiper.getWrapperTranslate('x'));
                var index = swiper.activeIndex+1, offset = 0;
                var $hideHuman = $(".enghumanOpacity"); 
                for (i=0;i<$hideHuman.length;i++){
                    var current = $($hideHuman[i]).css('left');
                    current = current.replace(/px/, "");
                    for(j=i+1;j<$hideHuman.length;j++){
                        var next = $($hideHuman[j]).css('left');
                        next = next.replace(/px/, "");
                        if(next < current){
                            var p = $hideHuman[i];
                            $hideHuman[i] = $hideHuman[j];
                            $hideHuman[j] = p;
                            current = next;
                        }
                    }
                }
                if ((swiper.positions.current - swiper.positions.start) < 0 && index <=4) {
                     $(".enghumanactive").css({
                        'left':'-20%',
                    });                                                              
                     $(".enghumanactive").addClass("enghumanOpacity");  
                     $(".enghuman"+(index-1)).removeClass("enghumanactive");                   
                     $($hideHuman[$hideHuman.length-1]).css('left',0);
                     $($hideHuman[$hideHuman.length-1]).removeClass("enghumanOpacity");
                     $($hideHuman[$hideHuman.length-1]).addClass("enghumanactive");
                    for (i=0;i<$hideHuman.length-1;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft +0.2)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }               
                }else if ((swiper.positions.current - swiper.positions.start) > 0 && index >=1) {
                    $(".enghumanactive").css({
                        'left':'20%',
                    });
                    $(".enghumanactive").addClass("enghumanOpacity");  
                    $(".enghuman"+(index+1)).removeClass("enghumanactive");                                      
                    $($hideHuman[0]).css('left',0);
                    $($hideHuman[0]).removeClass("enghumanOpacity");
                    $($hideHuman[0]).addClass("enghumanactive");                    
                    for (i=1;i<$hideHuman.length;i++){
                        var current = $($hideHuman[i]).css('left');
                        var myleft = $($hideHuman[i]).position().left / $($hideHuman[i]).parent().width();
                         offset = ((myleft - 0.2)*100)+'%';
                        $($hideHuman[i]).css({
                            'left' : offset
                        });
                        console.log($($hideHuman[i]).css('left'));
                    }
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
        var previousX = 1;
        var humanFlipped = false;
        var swiperParent = new Swiper('.swiper-parent', {
                mode : 'vertical',
                speed : 750,
                slidesPerView : 1,
                onSlideNext: function(swiper) {
                    $('.swiper-slide-active .lazy').each(function(){
                        $(this).attr('src',$(this).attr('image-url'));
                    });
                },
                onSlideChangeStart : function(swiper, direction) {
                    if (swiper.activeIndex === 1 && direction === "next") {
                        $(".block-recruit").addClass("recruitToNext");
                    }
                    if(swiper.activeIndex === 2){
                        $(".intro-title div").addClass("anintro-title");
                        $(".intro-title img").addClass("anintro-title");
                        $(".intro-title .intro-higher").addClass("anintro-higher");
                    } 
                    if(swiper.activeIndex === 3) {
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
                    if (swiper.activeIndex === 0) {
                        if (offsetY > silderHalfHeighter) {
                            $(".block-recruit").addClass("recruitToNext");
                        };
                    }

                },
                onSlideChangeEnd : function(swiper, direction) {
                    console.log(swiper.activeIndex);                                      
                    if (swiper.activeIndex === 8) {
                        $(".officeBottle").addClass("anOfficeBottle");
                        $(".officePen").addClass("anOfficePen");
                        $(".officeMobile").addClass("anOfficeMobile");
                        $(".officeKeyboard").addClass("anOfficeKeyboard");
                        $(".officeNotebook").addClass("anOfficeNotebook");
                        $(".officeMouse").addClass("anOfficeMouse"); 
                    } else {
                        $(".officeBottle").removeClass("anOfficeBottle");
                        $(".officePen").removeClass("anOfficePen");
                        $(".officeMobile").removeClass("anOfficeMobile");
                        $(".officeKeyboard").removeClass("anOfficeKeyboard");
                        $(".officeNotebook").removeClass("anOfficeNotebook");
                        $(".officeMouse").removeClass("anOfficeMouse");
                    }
                     if (swiper.activeIndex === 7) {
                        $(".location-name ").css("opacity",1);
                     } else {
                         $(".location-name ").css("opacity",0);
                     }
                    if(swiper.activeIndex !== 3)  {
                         $(".charac-lineUp").removeClass("ancharac-lineUp");
                         $(".charac-secHead").removeClass("ancharac-secHead");
                         $(".charac-position").removeClass("ancharac-position");
                         $(".charac-lineShort").removeClass("ancharac-lineShort");
                         $(".charac-article").removeClass("ancharac-article");                           
                         $(".hess-charCircle").removeClass("anhess-charCircle");
                         $(".charCircle-center").removeClass("anCharCircle-center");
                         $(".charCircle-right ").removeClass("anCharCircle-right"); 
                                               
                    }
                    if(swiper.activeIndex !== 2) {
                        $(".intro-title div").removeClass("anintro-title");
                        $(".intro-title img").removeClass("anintro-title");
                        $(".intro-title .intro-higher").removeClass("anintro-higher");
                    }   
                    if (swiper.activeIndex === 1) {
                        $(".block-recruit").removeClass("recruitToNext");
                         previousX=1;
                        if(!humanFlipped){
                            swiperNested1.params.autoplay = 500;
                            swiperNested1.startAutoplay();      
                             humanFlipped =true;                   
                        } 
                    }
    


                }
            });        
        if ($(window).height() < '500') {
            // 上下滚动翻页
            $('.swiper-parent').css("min-height", "504px");
            $('.pages').css("min-height", "504px");
            swiperParent.params.calculateHeight =true;
        } 

        swiperNested1 = new Swiper('.swiper-human', {
            mode : 'horizontal',
            slidesPerView : 1,
            speed : 400,
            autoplayStopOnLast : true,
            simulateTouch : false,
            onTouchEnd : function(swiper) {
                console.log(swiper.getWrapperTranslate('x'));
                var index = Math.abs(swiper.activeIndex);
                $(".faces").hide();
                $(".facel" + index).show();
                $(".facel" + index).css("-webkit-transform", "rotateY(0deg)");
                $(".facer" + index).show();
                $(".facer" + index).css("-webkit-transform", "rotateY(0deg)");
                if (index === 3) {
                    $(".shadowL").hide();
                } else {
                    $(".shadowL").show();
                }

            },
            onSetWrapperTransition : function(swiper, duration) {
                if (swiper.positions.current - swiper.positions.start != 0) {
                    return false;
                }   
                var transform = swiper.getWrapperTranslate('x');
                var instance = transform - previousX;
                previousX = transform;
                console.log("instance:" +instance);
                var index = swiper.activeIndex;
               if (index === 2) {
                    $(".shadowL").css('display','none');
                } else {
                    $(".shadowL").css('display','block');
                }                   
                var $facer = $(".facer" + index), per = (transform + (swiper.width * index)) / swiper.width, $facel = $(".facel" + index);
                console.log("transform:"+transform);
              
                if ((index + 1) < 6 && instance < 0) {
                    var $nrface = $(".facer" + (index + 1)), $nlface = $(".facel" + (index + 1));
                    $nrface.show();
                    $nlface.css("-webkit-transform", "rotateY(" + 90 + "deg)");
                    $facer.css("-webkit-transform", "rotateY(" + -90 + "deg)");
                    $facer.css("-webkit-transition", "-webkit-transform 0.2s");
                    setTimeout(function() {
                        $nlface.show();
                        $facel.css("z-index", 0);
                        $nlface.css("z-index", 1);
                        $nlface.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                        $nlface.css("-webkit-transition", "-webkit-transform 0.2s");
                    }, 200);
                    setTimeout(function() {
                        $facer.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                        $facel.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                        $facer.hide();
                        $facel.hide();
                    }, 200);
                    if(index==4){
                        $(".page2 .pullup").show();
                    }
                } else if ((index - 1) >= 0 && instance > 0) {
                    var $prface = $(".facer" + (index - 1)), $plface = $(".facel" + (index - 1));
                    $plface.show();
                    $prface.css("-webkit-transform", "rotateY(" + 90 + "deg)");
                    $facer.css("-webkit-transform", "rotateY(" + -90 + "deg)");
                    $facer.css("-webkit-transition", "-webkit-transform 0.2s");
                    setTimeout(function() {
                        $prface.show();
                        $facer.css("z-index", 0);
                        $prface.css("z-index", 1);
                        $prface.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                        $prface.css("-webkit-transition", "-webkit-transform 0.2s");
                    }, 200);
                    setTimeout(function() {
                        $facer.hide();
                        $facel.hide();
                        $facer.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                        $facel.css("-webkit-transform", "rotateY(" + 0 + "deg)");
                    }, 200);
                }

            },
        });
        var swiperNested2 = new Swiper('.swiper-mile', {
            paginationClickable : true,
            slidesPerView : 1,
            onSetWrapperTransform : function(swiper, transform) {
                var $mileIcons = $(".mile-icons"), index = swiper.activeIndex;
                var per = Math.abs((transform.x + (swiper.width * index)) / swiper.width);
                var moveDist = (swiper.positions.current - swiper.positions.start);
                console.log(swiper.positions);
                if ((index + 1) < 6 && (swiper.positions.current - swiper.positions.start) < 0) {
                    var offsetX = "translateX(" + (-per * 20 - (20 * index)) + "%)";
                    console.log(offsetX);
                    $mileIcons.css('-webkit-transform', offsetX);
                    if(index ==4){
                        $(".page6 .pullup").show();
                    }
                } else if ((swiper.positions.current - swiper.positions.start) > 0 && (index - 1) >= 0) {
                    var offsetX = "translateX(" + (per * 20 - (20 * index)) + "%)";
                    $mileIcons.css('-webkit-transform', offsetX);
                }
            },
            onTouchEnd : function(swiper) {
                console.log(swiper.getWrapperTranslate('x'));
                var index = swiper.activeIndex, offset = 0;
                if (swiper.getWrapperTranslate('x') < 0) {
                    offset = "translateX(" + ((-20 * index)) + "%)";
                } else {
                    offset = "translateX(" + ((20 * index)) + "%)";
                }

                $(".mile-icons").css({
                    '-webkit-transform' : offset
                });
            }
        });
        $(".contacttopbutton").click(function(){
            swiperParent.swipeTo(0, 0, true);
        });
        // $("#top").click(function() {
            // $(".first-class").show();
            // $(".first-class").animate({
                // top : 0
            // });
// 
            // setTimeout(function() {
                // swiperParent.swipeTo(0, 0, true);
                // $(".first-class").hide();
            // }, 2000);
// 
        // });

    }
};

$(hsee.ready);
