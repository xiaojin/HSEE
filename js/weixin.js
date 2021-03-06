var path=window.location.protocol+"//"+window.location.host+window.location.pathname.replace(/[^\/]+$/,'');
var dataForWeixin={
 
   appId: "",
 
   MsgImg: path+"images/corplogo.jpg",
 
   TLImg:  path+"images/corplogo.jpg",
 
   url:  path+"index.html",
 
   title: "Next Jobs(工作),Next Jobs(乔布斯)",
 
   desc: "2015和视预招聘, 是时候和未来谈谈!",
 
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

                "img_width": "80", 

                "img_height": "80", 

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

                "img_width": "80", 

                "img_height": "80", 

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