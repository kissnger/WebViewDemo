define(function(){var a,b,c={};return c.toFixed=function(c,d){return"number"!=typeof c?"":(c=c.toFixed(d),c=c.split("."),b=Number(c[0]),a=c[1],b.toLocaleString()+"."+a)},c});