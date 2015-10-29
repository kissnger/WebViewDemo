require(["config"],function(){require(["libs/pjs","libs/chart","libs/utily","libs/dateChange","zepto","services/dateService","libs/sidebar"],function(a,b,c,d,e,f){function g(a){a&&sessionStorage.setItem("cur_time",a),t=e(".date_select_item").attr("unit"),j(y.customBrief)}function h(a){a&&sessionStorage.setItem("cur_time",a),t=e(".date_select_item").attr("unit");var b=y.customNum;b?(e(".customer-num-container").show(),e(".no-data").hide(),k(b)):(e(".customer-num-container").hide(),e(".no-data").show())}function i(a){a&&sessionStorage.setItem("cur_time",a),t=e(".date_select_item").attr("unit");var b=y.customComposition;l(b),b||e("#j-all-customer-num").text(0)}function j(a){a&&a.max&&a.avg?(e("#max-sum").text(a.max+"人"),e("#reg-sum").text(a.avg+"人")):(e("#max-sum").text("0人"),e("#reg-sum").text("0人"))}function k(a){x.labels=[],x.datasets[0].data=[],x.datasets[1].data=[];for(var c=0;c<a.length;c++)a[c].timestamp=n(t,a[c].timestamp),"object"!=typeof a[c].timestamp?x.labels.push(a[c].timestamp):x.labels=a[c].timestamp,x.datasets[1].data.push(a[c].stranger),x.datasets[0].data.push(a[c].member);o&&o.destroy(),o=new b(w).Line(x,{bezierCurve:!1,scaleShowLabels:!0,scaleLabel:"<%=value%>",scaleShowVerticalLines:!1,scaleFontSize:24,scaleFontFamily:"'微软雅黑','Helvetica'",scaleFontColor:"#4b4b4b"})}function l(a){if(v[0].value=0,v[1].value=0,p&&p.destroy(),a){var c,d,f,g,h,i=0,j=0;for(c=0;c<a.length;c++)i+=a[c].customerConsumption,j+=a[c].consumerNum;if(e("#j-all-customer-num").text(j+"人"),a[1]&&(f=a[1].customerNum),a[2]&&a[1]?g=a[1].customerConsumption+a[2].customerConsumption:a[2]||(g=a[1].customerConsumption),h=a[0].customerConsumption,e(".customer-all-money").text("￥"+s(i,2)),e(".new-customer-num").text("+"+f),d=(g/i*100).toFixed(2),e("#memberCost-rate").text("会员 "+d+"%"),e("#nomemberCost-rate").text("散客 "+(100-d).toFixed(2)+"%"),!i)return e("#memberCost-rate").text("会员 0%"),void e("#nomemberCost-rate").text("散客 0%");0===g&&0!==h&&(g=.001),v[0].value=g,v[1].value=h,setTimeout(function(){p=new b(u).Doughnut(v,{animateScale:!1,percentageInnerCutout:70,segmentShowStroke:!1,animationSteps:5})},50)}else e("#memberCost-rate").text("会员 0"),e("#nomemberCost-rate").text("散客 0"),e(".customer-all-money").text(0),e(".new-customer-num").text("+0")}function m(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)"),c=window.location.search.substr(1).match(b);return null!=c?c[2]:null}function n(a,b){return 1==a?new Date(b).getHours()+":00":2==a?["周一","周二","周三","周四","周五","周六","周日"]:3==a?new Date(b).getDate():4==a?new Date(b).getMonth()+1:void 0}var o,p,q=new Date,r=(parseInt(sessionStorage.getItem("cur_time"),10)||Date.parse(q.getFullYear()+"/"+(q.getMonth()+1)+"/"+q.getDate()+" 23:59:00"),m("hotelId")),s=c.toFixed,t=parseInt(sessionStorage.getItem("cur_unit"))||1,u=e("#customer-rate-pie").get(0).getContext("2d"),v=[{value:0,color:"#45c8dc",label:"会员"},{value:0,color:"#b3cb4f",label:"散客"}],w=e("#customer-line").get(0).getContext("2d"),x={labels:[],datasets:[{label:"My First dataset",fillColor:"rgba(78,178,221,0.1)",strokeColor:"rgba(78,178,221,1)",pointColor:"rgba(78,178,221,1)",pointStrokeColor:"4eb2dd",pointHighlightFill:"4eb2dd",data:[]},{label:"My Second dataset",fillColor:"rgba(179,203,79,0.1)",strokeColor:"#b3cb4f",pointColor:"#b3cb4f",pointStrokeColor:"#b3cb4f",pointHighlightFill:"#b3cb4f",data:[]}]},y={customNum:[{total:0,member:0,stranger:0,timestamp:14459616e5},{total:0,member:0,stranger:0,timestamp:14459652e5},{total:0,member:0,stranger:0,timestamp:14459688e5},{total:0,member:0,stranger:0,timestamp:14459724e5},{total:0,member:0,stranger:0,timestamp:1445976e6},{total:0,member:0,stranger:0,timestamp:14459796e5},{total:0,member:0,stranger:0,timestamp:14459832e5},{total:0,member:0,stranger:0,timestamp:14459868e5},{total:0,member:0,stranger:0,timestamp:14459904e5},{total:2,member:0,stranger:2,timestamp:1445994e6},{total:1,member:0,stranger:1,timestamp:14459976e5},{total:0,member:0,stranger:0,timestamp:14460012e5},{total:0,member:0,stranger:0,timestamp:14460048e5},{total:0,member:0,stranger:0,timestamp:14460084e5},{total:0,member:0,stranger:0,timestamp:1446012e6},{total:0,member:0,stranger:0,timestamp:14460156e5},{total:0,member:0,stranger:0,timestamp:14460192e5},{total:0,member:0,stranger:0,timestamp:14460228e5},{total:0,member:0,stranger:0,timestamp:14460264e5},{total:0,member:0,stranger:0,timestamp:144603e7},{total:0,member:0,stranger:0,timestamp:14460336e5},{total:0,member:0,stranger:0,timestamp:14460372e5},{total:0,member:0,stranger:0,timestamp:14460408e5},{total:0,member:0,stranger:0,timestamp:14460444e5}],customComposition:[{customerType:"散客",customerNum:3,customerConsumption:368,customerConsumptionText:"368.00",consumerNum:5},{customerType:"新增会员",customerNum:1,customerConsumption:0,customerConsumptionText:"0.00",consumerNum:0},{customerType:"会员",customerNum:0,customerConsumption:0,customerConsumptionText:"0.00",consumerNum:0}],customBrief:{max:88,avg:18}};f.loadDateValue(),h(),i(),g();var z=document.querySelector(".px_date_right"),A=document.querySelector(".px_date_left");z.addEventListener("click",function(){var a=d.date(1);sessionStorage.setItem("cur_time",a),h(a),i(a),g(a)},!1),A.addEventListener("click",function(){var a=d.date(-1);sessionStorage.setItem("cur_time",a),h(a),i(a),g(a)},!1),e(document).on("date",function(a,b,c){sessionStorage.setItem("cur_unit",c),sessionStorage.setItem("cur_time",b),h(b),i(b),g(b)}),f.subscribeDate(h),f.subscribeDate(i),f.subscribeDate(g);var B=document.querySelector(".top-nav").querySelector(".go-directory");B.href=B.href+"?hotelId="+r;var C=e(".go-back");C.on("tap",function(){window.location.href="index.html?hotelId="+r},!1)})});