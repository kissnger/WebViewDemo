require(["config"],function(){require(["zepto","libs/chart","libs/utily","libs/pjs"],function(a,b,c,d){function e(){var a,b="",c=o.hotel;if(c){for(var d=0,e=c.length;e>d;d+=1)m==c[d].hotelId&&(a=c[d].hotelName),b+='<li class="hide-restItem" hotelid="'+c[d].hotelId+'"><a class="link-name" href="/index.html?hotelId='+c[d].hotelId+'">'+c[d].hotelName+"</a></li>";if(h.html(b),i.text(a||c[0].hotelName),i.attr("hotelId",m||c[0].hotelId),n){var g=m||c[0].hotelId;if(n!==g){var j=new Date,k=Date.parse(j.getFullYear()+"/"+(j.getMonth()+1)+"/"+j.getDate()+" 23:59:00");sessionStorage.setItem("cur_time",k),sessionStorage.setItem("cur_unit","1"),sessionStorage.setItem("cur_hotelId",g)}}else sessionStorage.setItem("cur_hotelId",m||c[0].hotelId);f()}}function f(){var b=o.hotelStatic;b?(a(".main-menuwrap").show(),a(".no-index-data").hide(),a(".daily-money").text("￥"+g(b.todayBusiness,2)),a("#js_percost").text("￥"+g(b.avgConsumByCustomer,2)),a("#js_perorder").text("￥"+g(b.avgConsumByOrder,2)),a("#js_freeorder").text(b.freeOrderNum||"0"),a("#js_starDish").text(b.starDish||"暂无"),a("#js_starWaiter").text(b.starWaiter||"暂无"),a("#js_realTable").text(b.openedTableNum+"/"+b.tableSum),a(".menu-except").show(),a(".menu-table").show()):(a(".main-menuwrap").hide(),a(".no-index-data").show(),a(".daily-money").text("￥0"),a("#js_percost").text("￥0"),a("#js_perorder").text("￥0"))}var g=c.toFixed,h=a(".hide-restList"),i=a(".rest-name"),j=(a(".main-restaurant"),a(".mask")),k=a(".main-menuwrap"),l={except:"abnormalsum.html",report:"dailyBusiness.html",realTab:"realTableStatus.html",morningNews:"morningNews.html",payConstitue:"payConstitue.html",personFlow:"getCustomerNum.html",starDishes:"starDishes.html",starWaiter:"starWaiters.html"},m=d.getPathArgument("hotelId"),n=sessionStorage.getItem("cur_hotelId"),o={hotel:[{hotelId:1012942,hotelName:"屏芯智能餐厅"}],hotelStatic:{todayBusiness:258.4,todayBusinessText:"258.40",avgConsumByCustomer:21.53,avgConsumByCustomerText:"21.53",avgConsumByOrder:23.49,avgConsumByOrderText:"23.49",freeOrderNum:9,cashMoney:108.4,cashMoneyText:"108.40",openedTableNum:0,tableSum:14,customerNum:12,starDish:"水晶猪冻蹄",starWaiter:"1002",targetBusiness:0,targetBusinessText:"0.00"}};i.on("click",function(a){j.show(),h.show()},!1),a(".icon-downarrow-icon").on("click",function(a){j.show(),h.show()},!1),a(".yesterday-btn").on("click",function(){var a,b=m||i.attr("hotelId"),c=new Date;c.setFullYear(c.getFullYear(),c.getMonth(),c.getDate()-1),a=c.setHours(23,59,0,0),window.location.href="/dailyBusiness.html?hotelId="+b+"&startTime="+a}),j.on("click",function(){j.hide(),h.hide()},!1),k.on("click",".menu-item",function(b){var c=a(this);c.css("background-color","#31343c");var d=c.attr("att_type");l[d]&&(window.location.href=l[d]+"?hotelId="+i.attr("hotelId"))});d.cookie.getCookie("wuid");e()})});