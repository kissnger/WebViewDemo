define(["zepto","mobiscroll_002","mobiscroll","libs/dateChange"],function(a,b,c,d){function e(a){return isNaN(parseInt(a))?void 0:a%4==0&&a%100!=0||a%100==0&&a%400==0?!0:!1}function f(a){return a.getDate()<=9?"0"+a.getDate():a.getDate()}function g(a){return a.getMonth()+1<=9?"0"+(a.getMonth()+1):String(a.getMonth()+1)}var h={};return h.loadDatePlug=function(b){var c=(b.date||new Date).getFullYear(),d={};d.year={preset:"year"},d.date={preset:"date"},d.month={preset:"month"},d.datetime={preset:"datetime"},d.time={preset:"time"};var e="year"==b.dateType?"year":"month"==b.dateType?"month":("date"==b.dateType,"date"),f="year"==b.dateType?"今年":"month"==b.dateType?"本月":("date"==b.dateType,"今天");d["default"]=b.conf||{theme:"android-ics light",display:"modal",mode:"scroller",dateFormat:"yyyy-mm-dd",lang:"zh",showNow:!0,nowText:f,startYear:c-10,endYear:c+10},d["default"].dateFormat="year"==b.dateType?"yyyy":"month"==b.dateType?"yyyy-mm":("date"==b.dateType,"yyyy-mm-dd"),a(b.selector).mobiscroll(a.extend(d[e],d["default"]))},h.loadDateValue=function(){var b,c,d,e=a(".px_date_labels"),i=a(".px_date_item"),j=document.querySelector(".px_date_input"),k=parseInt(sessionStorage.getItem("cur_time"),10),l=sessionStorage.getItem("cur_unit"),m=new Date;k&&(m=new Date(k));var n=m.getFullYear(),o=g(m),p=f(m);l&&(i.removeClass("date_select_item"),a('.px_date_item[unit="'+l+'"]').addClass("date_select_item")),b=a(".date_select_item").attr("type"),j.value=n+"-"+o+"-"+p,2==l?(c=0===m.getDay()?new Date(m.getTime()-5184e5):new Date(m.getTime()-864e5*(m.getDay()-1)),d=new Date(c.getTime()+5184e5),j.value=c.getFullYear()+"-"+g(c)+"-"+f(c)+"~"+d.getFullYear()+"-"+g(d)+"-"+f(d)):3==l?j.value=n+"-"+o:4==l&&(j.value=n),e.on("tap",".px_date_item",function(e){c=m=new Date,i.removeClass("date_select_item"),a(this).addClass("date_select_item"),b=a(this).attr("type");var k=m.getFullYear(),l=g(m),n=f(m);"week"==b?(c=0===m.getDay()?new Date(m.getTime()-5184e5):new Date(m.getTime()-864e5*(m.getDay()-1)),d=new Date(c.getTime()+5184e5),j.value=c.getFullYear()+"-"+g(c)+"-"+f(c)+"~"+d.getFullYear()+"-"+g(d)+"-"+f(d),c.setFullYear(c.getFullYear(),c.getMonth(),c.getDate()),c=c.setHours(23,59,0,0),h.loadDatePlug({selector:".px_date_input",dateType:"date"})):("date"==b?(j.value=k+"-"+l+"-"+n,c.setFullYear(m.getFullYear(),m.getMonth(),m.getDate()),c=c.setHours(23,59,0,0)):"month"==b?(j.value=k+"-"+l,c.setFullYear(m.getFullYear(),m.getMonth(),1),c=c.setHours(23,59,0,0)):"year"==b&&(j.value=k,c.setFullYear(m.getFullYear(),0,1),c=c.setHours(23,59,0,0)),h.loadDatePlug({selector:".px_date_input",dateType:b})),console.log(new Date(c)),a(document).trigger("date",[c,a(this).attr("unit")])}),a(document).trigger("date",[c,l]),h.loadDatePlug({selector:".px_date_input",dateType:2===l?"date":b})},a(document).on("date",function(b,c,d){2==d?a(".px_date_input").prop("disabled",!0):a(".px_date_input").prop("disabled",!1)}),a(document).on("swipeLeft",".px_date_input_p",function(b){a(".px_date_right").click()}),a(document).on("swipeRight",".px_date_input_p",function(b){a(".px_date_left").click()}),h.subscribeDate=function(b){a("body").on("touchend",".dwb-s .dwb",function(){var c=a(".px_date_input").val(),d=new Date;c=c.split("-"),d.setFullYear(Number(c[0])),c[1]?d.setMonth(Number(c[1])-1):d.setMonth(0),c[2]?d.setDate(Number(c[2])):d.setDate(1),d.setHours(23,59,0,0),b(d.getTime())})},h.getDaysByMonth=function(a,b){var c;return c=1==b||3==b||5==b||7==b||8==b||10==b||12==b?31:2==b?e(a)?29:28:30},h});