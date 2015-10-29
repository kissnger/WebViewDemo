define(function(){var xmlHttpType=null,XHR=function(){var a=null;if("XMLHttpRequest"in window)a=XMLHttpRequest;else if("ActiveXObject"in window)for(var b=["MSXML3.XMLHTTP","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0,d=b.length;d>c;c+=1)try{a=ActiveXObject,xmlHttpType=b[c];break}catch(e){throw new Error("your browser don't support XHR!")}return a}();XHR.prototype.sendRequest=function(conf){var _xhr=this;myXhr=_xhr,void 0==conf.isAsync&&(conf.isAsync=!0);var type=conf.type||"get",url=conf.url,data=conf.data,dataType=conf.dataType||"json",isAsync=conf.isAsync,reponseData=null;data&&"object"==typeof data&&(data=function(a){var b="";for(var c in a)b+=c+"="+a[c]+"&";return b}(data)),_xhr.open(type,url,isAsync),"post"==type&&_xhr.setRequestHeader("content-type","application/x-www-form-urlencoded"),isAsync&&(_xhr.onreadystatechange=function(){4==_xhr.readyState&&200==_xhr.status?(_xhr.isSuccess=!0,"text"==dataType||"TEXT"==dataType?reponseData=_xhr.responseText:"xml"==dataType||"XML"==dataType?reponseData=_xhr.responseXML:("json"==dataType||"JSON"==dataType)&&(reponseData=eval("("+_xhr.responseText+")")),_xhr.data=reponseData):4==_xhr.readyState&&(_xhr.isSuccess=!1,_xhr.error="errorCode:"+_xhr.status+",erroMsg:"+_xhr.statusText)}),_xhr.send(data),isAsync||(200==_xhr.status?(_xhr.isSuccess=!0,"text"==dataType||"TEXT"==dataType?reponseData=_xhr.responseText:"xml"==dataType||"XML"==dataType?reponseData=_xhr.responseXML:("json"==dataType||"JSON"==dataType)&&(reponseData=eval("("+_xhr.responseText+")")),_xhr.data=reponseData):200!=_xhr.status&&(_xhr.isSuccess=!1,_xhr.error="errorCode:"+_xhr.status+",erroMsg:"+_xhr.statusText))},XHR.prototype.then=function(a){var b=this;b.isSuccess?a(b.data):"undefined"==typeof b.isSuccess?setTimeout(function(){b.then(a)},0):a(null,b.error)};var DOM=function(a){function b(a){var b=!1;if("object"==typeof a&&a&&(s.call(a)==t||r.test(s.call(a)))){var c=0,d=a.length;if(d){for(c;d>c;c+=1)if(!r.test(s.call(a[c]))){console.log("系統日志:第"+c+"个元素不是Dom元素!");break}c==d&&(b=!0)}else void 0===d&&(b=!0)}return b}function c(a,c){var d=[];if(b(a)){var e=a.length,f=null;e||(f=c(a),b(f)&&(d=d.concat(f)));for(var g=0;e>g;g++)f=c(a[g]),b(f)&&(d=d.concat(f)),a[g]=null}return d}function d(a){return c(a,function(a){for(var b=a.nextSibling;b&&1!==b.nodeType;)b=b.nextSibling;return b})}function e(a){return c(a,function(a){for(var b=a.previousSibling;b&&1!==b.nodeType;)b=b.previousSibling;return b})}function f(a){return c(a,function(a){for(var b=a.nextSibling,c=[];b&&1===b.nodeType;)c.push(b),b=b.nextSibling;return c})}function g(a){return c(a,function(a){for(var b=a.previousSibling,c=[];b&&1===b.nodeType;)c.push(b),b=b.previousSibling;return c})}function h(a,b){c(a,function(a){var c=a.parentNode;c.lastChild==a?c.appendChild(b):c.insertBefore(b,a.nextSibling)})}function i(a,b){c(a,function(a){var c=a.parentNode;c.insertBefore(b,a)})}function j(a,b){if(!b)return[];for(var c=a&&"object"==typeof a?a:c,d=c.getElementsByTagName("*"),e=[],f=b.split(",").join("|"),g=new RegExp(f),h=0,i=d.length;i>h;h+=1)1===d[h].nodeType&&g.test(d[h].className)&&e.push(d[h]);return e}function k(a,c){return b(a)&&a.style?"getComputedStyle"in window?window.getComputedStyle(a,!1)[c]:a.currentStyle[c]:""}function l(a){return b(a)?"string"==typeof a.textContent?a.textContent:a.innerText:""}function m(a){c(a,function(a){a.style.display="block"})}function n(a){c(a,function(a){a.style.display="none"})}function o(b){return a.getElementById(b)}function p(c,d){if(1==arguments.length&&(d=arguments[0],c=null),c&&!b(c))throw new Error(c+" is not a legal element!");return a=c||a,a.getElementsByTagName(d)}function q(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=window.location.search.substr(1).match(b);return null!=c?c[2]:null}var r=/^\[object HTML[A-Za-z]+\]$/,s=Object.prototype.toString,t="[object Array]";return{nextEle:d,prevEle:e,nextAllEle:f,prevAllEle:g,after:h,before:i,getElesByClass:j,getStyle:k,show:m,hide:n,getById:o,getByTagName:p,getText:l,getPathArgument:q}}(window.document||window.document.documentElement);return{XHR:XHR,DOM:DOM,xmlHttpType:xmlHttpType}});