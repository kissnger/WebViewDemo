define(["zepto"],function(a){var b={cookie:{getCookie:function(a){var b,c=new RegExp("(^| )"+a+"=([^;]*)(;|$)");return(b=document.cookie.match(c))?"undefined"==b[2]||"null"==b[2]?null:b[2]:null},setCookie:function(a,b,c){if(c){var d=new Date;d.setSeconds(d.getSeconds()+c),document.cookie=a+"="+b+";expire="+d.toGMTString()}else document.cookie=a+"="+b},deleteCookie:function(a){var b=new Date;b.setTime(b.getTime()-1);var c=this.getCookie(a);null!=c&&(document.cookie=a+"="+c+";expires="+b.toGMTString())}},alert:function(a,b,c){"[object Function]"==Object.prototype.toString.call(b)&&(b={ok:b,other:function(){}}),b=b||{},b.ok=b.ok||function(){},b.other=b.other||function(){},c=c||{},c.type="alert",this._show(a,b,c)},confirm:function(a,b,c){"[object Function]"==Object.prototype.toString.call(b)&&(b={ok:b,other:function(){}}),c=c||{},c.type="confirm",b.ok=b.ok||function(){},b.cancel=b.cancel||function(){},this._show(a,b,c)},_show:function(b,c,d){function e(){j.hide(),k.hide()}function f(){k.show(),j.show()}d.title=d.title||"提示",d.okText=d.okText||"确定",d.cancelText=d.cancelText||"取消";var g='<div class="p_dialog"><div class="p_dialog-bd"></div><div class="p_dialog-ft"></div></div>',h='<div class="p_dialog-shadow"></div>',i=a("body"),j=a(".p_dialog"),k=a(".p_dialog-shadow");k.length||(i.append(h),k=a(".p_dialog-shadow")),j.length||(i.append(g),j=a(".p_dialog")),d.title?j.find(".p_dialog-hd").html(d.title):j.find(".p_dialog-hd").remove(),j.find(".p_dialog-bd").html(b),j.find(".p_dialog-ft").html('<span class="dialog-btn dialog-btn-ok">'+d.okText+"</span>"),"confirm"==d.type&&j.find(".p_dialog-ft").append('<span class="dialog-btn dialog-btn-cancel">'+d.cancelText+"</span>"),j.on("click",".dialog-btn-ok",function(a){var b=c.ok();return 0==b?!1:void e()}),j.on("click",".dialog-btn-cancel",function(a){var b=c.cancel();return 0==b?!1:void e()}),c.other(),f()},getPathArgument:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=window.location.search.substr(1).match(b);return null!=c?c[2]:null},shake:function(c){function d(a){var c=window.location.href,d=c.replace(/hotelId=[^&]*\b/,"hotelId=auth").replace(/[\?|&]code=[^&]*/,"").replace("html&","html?"),e="/index.html"==location.pathname;b.cookie.setCookie("VALIDATE-TOKEN",a.authToken),b.cookie.setCookie("wuid",a.wcUnionId),e||history.replaceState(null,"",d.replace("hotelId=auth","hotelId="+a.data[0].hotelId)),history.replaceState(null,"",c.replace(/[\?|&]code=[^&]*/,"").replace("html&","html?"))}var e=b.getPathArgument("hotelId")||b.getPathArgument("state"),f=b.getPathArgument("code");if(!f)return window.location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx729257c90cad2bfa&redirect_uri="+encodeURIComponent(location.origin+location.pathname)+"&response_type=code&scope=snsapi_base&state="+e+"&connect_redirect=1#wechat_redirect",!1;var g="/dxs-web/api/v1/access/handshake?code="+f+"&getHotelList=true";return a.ajax({async:!1,url:g,method:"post",dataType:"json",success:function(a){a.status?(d(a.data),c&&b.sendRequest(c)):b.error()},error:function(a){b.error()}}),!0},error:function(){b.alert("Oh！糟糕，生意太好了，服务器累晕了",function(){location.reload()},{okText:"刷新试试"})},sendRequest:function(c){"undefined"==typeof c.async&&(c.async=!0),a.ajax({async:c.async,type:c.type||"post",dataType:c.dataType||"json",url:c.url,data:c.data,success:function(a){if(a.status)c.success(a.data);else if(a.data.error)switch(a.data.error){case 1:case 2:b.shake(c);break;case 4:b.error();break;default:window.location.href=indexPath}else c.fail?c.fail():b.error()},error:function(){c.fail?c.fail():b.error()}})}};return b});