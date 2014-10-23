var hsee = {
    bind : function() {
    
    },
   ready : function() {
        setTimeout(function() { $('.loading').fadeOut(500); }, 1000);
        hsee.bind();
         if($(window).height() < '500') {
            // 上下滚动翻页
            $('.swiper-parent').css("min-height","504px");
            $('.pages').css("min-height","504px");
            var swiperParent = new Swiper('.swiper-parent', {
                mode : 'vertical',
                speed : 750,
                slidesPerView : 1,
                calculateHeight:true,
                onSlideChangeStart : function(swiper, direction) {
                    if (swiper.activeIndex === 1 && direction === "next") {
                        $(".block-recruit").addClass("recruitToNext");
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
                    if (swiper.activeIndex === 1) {
                        $(".block-recruit").removeClass("recruitToNext");
                    }
                }
            });            
          } else {
            var swiperParent = new Swiper('.swiper-parent', {
                mode : 'vertical',
                speed : 750,
                slidesPerView : 1,
                onSlideChangeStart : function(swiper, direction) {
                    if (swiper.activeIndex === 1 && direction === "next") {
                        $(".block-recruit").addClass("recruitToNext");
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
                    if (swiper.activeIndex === 1) {
                        $(".block-recruit").removeClass("recruitToNext");
                    }
                }
            });               
          }

        
        
        var swiperNested1 = new Swiper('.swiper-human', {
            paginationClickable : true,
             mode : 'horizontal',
            slidesPerView : 1,
            speed:1050,
            onTouchMove : function(swiper){  
            },
             onSetWrapperTransform: function(swiper,transform){
                 var index= swiper.activeIndex;
                 var $facer =$(".facer"+index),
                     per = (transform.x+(swiper.width*index))/swiper.width,
                     $facel =  $(".facel"+index);
                 console.log(swiper.positions);
                 var isLong = Math.abs(swiper.positions.current - swiper.positions.start);
                    if ((index + 1) < 6 && (swiper.positions.current - swiper.positions.start) < 0 ) {
                        var $nrface = $(".facer" + (index + 1)), $nlface = $(".facel" + (index + 1));
                            $nrface.show();                   
                        if (Math.abs(per) < 0.45) {                          
                            $facer.css("-webkit-transform","rotateY(" + (per * 2) * 90 + "deg)");
                        } else if (Math.abs(per) > 0.5) {
                            var degree = ((1 - Math.abs(per)) * 2) * 90;
                            //hide current right face
                            $facer.hide();
                            //  show up nect left face
                            $nlface.show();
                            $facel.css("z-index", 0);
                            $nlface.css("z-index", 1);
                            $nlface.css("-webkit-transform","rotateY(" + degree + "deg)");
                            if (degree < 10) {
                                $facel.hide();
                            }
                        }
                    } else if ((swiper.positions.current - swiper.positions.start) > 0 && (index - 1) >= 0) {
                        var $prface = $(".facer" + (index - 1)), $plface = $(".facel" + (index - 1));
                        $plface.show();
                        if (Math.abs(per) < 0.45) {
                            $facel.css("-webkit-transform", "rotateY(" + (per * 2) * 90 + "deg)");
                        } else if (Math.abs(per) > 0.5) {
                            var degree = ((1 - Math.abs(per)) * 2) * 90;
                            $facel.hide();
                            //  show up nect left face
                            $prface.show();
                            $facer.css("z-index", 0);
                            $prface.css("z-index", 1);
                            $prface.css("-webkit-transform","rotateY(" + degree + "deg)");
                            if (degree < 10) {
                                $facer.hide();
                            }
                        }
                    }
            },    
            onTouchEnd :function(swiper){
                console.log(swiper.getWrapperTranslate('x'));
                var index = Math.abs(swiper.activeIndex);
                $(".faces").hide();
                $(".facel"+index).show();
                $(".facel"+index).css("-webkit-transform","rotateY(0deg)");
                $(".facer"+index).show();
                $(".facer"+index).css("-webkit-transform","rotateY(0deg)");
            },
        });
        var swiperNested2 = new Swiper('.swiper-mile',{
            paginationClickable : true,
            slidesPerView : 1,
            onSetWrapperTransform: function(swiper,transform){
                var $mileIcons = $(".mile-icons"),
                    index= swiper.activeIndex;
                var per = Math.abs((transform.x+(swiper.width*index))/swiper.width);
                var moveDist = (swiper.positions.current - swiper.positions.start);
                console.log(swiper.positions);
                if ((index + 1) < 6 && (swiper.positions.current - swiper.positions.start) < 0 ) {
                        var offsetX = "translateX("+(-per*20-(20*index))+"%)";
                        console.log(offsetX);
                        $mileIcons.css('-webkit-transform',offsetX);
                }  else if ((swiper.positions.current - swiper.positions.start) > 0 && (index - 1) >= 0) {
                        var offsetX = "translateX("+(per*20-(20*index))+"%)";
                        $mileIcons.css('-webkit-transform',offsetX);
                }
            },
            onTouchEnd :function(swiper){
                console.log(swiper.getWrapperTranslate('x'));
                var index = swiper.activeIndex,
                    offset = 0;
                if(swiper.getWrapperTranslate('x') <0){
                    offset = "translateX("+((-20*index))+"%)";
                } else 
                {
                    offset = "translateX("+((20*index))+"%)";
                } 

                 $(".mile-icons").css({'-webkit-transform':offset});
            }
        });

        $("#top").click(function() {
            $(".first-class").show();
            $(".first-class").animate({
                top:0
            });
            
            setTimeout(function(){
                swiperParent.swipeTo(0, 0, true);
                 $(".first-class").hide();
            },2000);
           
        }); 

    }
};

$(hsee.ready);
