var hsee = {
    bind : function() {

    },
    ready : function() {
        setTimeout(function() {
            $('.loading').fadeOut(500);
        }, 1000);
        hsee.bind();
        var swiperNested1;
        var previousX = 1;
        var humanFlipped = false;
        if ($(window).height() < '500') {
            // 上下滚动翻页
            $('.swiper-parent').css("min-height", "504px");
            $('.pages').css("min-height", "504px");
            var swiperParent = new Swiper('.swiper-parent', {
                mode : 'vertical',
                speed : 750,
                slidesPerView : 1,
                calculateHeight : true,
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
                    console.log(swiper.activeIndex);
                    if (swiper.activeIndex === 1) {
                        $(".block-recruit").removeClass("recruitToNext");
                         previousX=1;
                        if(!humanFlipped){
                            swiperNested1.params.autoplay = 300;
                            swiperNested1.startAutoplay();      
                             humanFlipped =true;                   
                        } 
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
                    console.log(swiper.activeIndex);
                    if (swiper.activeIndex === 1) {
                        $(".block-recruit").removeClass("recruitToNext");
                        // swiperNested1.params.autoplay = 300;
                        // swiperNested1.startAutoplay();
                         previousX=1;
                        if(!humanFlipped){
                            swiperNested1.params.autoplay = 300;
                            swiperNested1.startAutoplay(); 
                            humanFlipped =true;                       
                        } 
                    }
                }
            });
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

        $("#top").click(function() {
            $(".first-class").show();
            $(".first-class").animate({
                top : 0
            });

            setTimeout(function() {
                swiperParent.swipeTo(0, 0, true);
                $(".first-class").hide();
            }, 2000);

        });

    }
};

$(hsee.ready);
