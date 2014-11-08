var dataForWeixin={
 
   appId: "",
 
   MsgImg: "http://www.wuxiyezhu.com/HSEE/images/corplogo.jpg",
 
   TLImg: "http://www.wuxiyezhu.com/HSEE/images/corplogo.jpg",
 
   url: "http://www.wuxiyezhu.com/HSEE",
 
   title: "寻找一颗改变世界的心！",
 
   desc: "2014和视( H' see )年度最后席位等你来！",
 
   fakeid: "",
 
   callback:function(){}
 
};
 
(function(){

    var onBridgeReady = function() {
        
        WeixinJSBridge.on('menu:share:appmessage', function(argv) {
            // 发送给好友
            WeixinJSBridge.invoke('sendAppMessage', {

                "appid": dataForWeixin.appId, 

                "img_url": dataForWeixin.MsgImg, 

                "img_width": "200", 

                "img_height": "200", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
                (dataForWeixin.callback)();
            });
        });
        // 分享到朋友圈
        WeixinJSBridge.on('menu:share:timeline', function(argv) {

            (dataForWeixin.callback)();

            WeixinJSBridge.invoke('shareTimeline',{

                "img_url": dataForWeixin.TLImg, 

                "img_width": "200", 

                "img_height": "200", 

                "link": dataForWeixin.url, 

                "desc": dataForWeixin.desc, 

                "title": dataForWeixin.title

            }, function(res) {
            });
        });
        // 分享到微博
        WeixinJSBridge.on('menu:share:weibo', function(argv) {

            WeixinJSBridge.invoke('shareWeibo',{

                "content": dataForWeixin.title, 

                "url": dataForWeixin.url

            }, function(res){
                (dataForWeixin.callback)();
            });
        });
    };
 
    if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);    
    } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady'   , onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady' , onBridgeReady);
    }
})();