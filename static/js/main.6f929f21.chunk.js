(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(2),i=n.n(c),o=(n(13),n(3)),l=n(4),s=n(6),u=n(5),d=n(7),m=function(e){var t=e.number,n=e.operator;return r.a.createElement("div",{id:"display"},r.a.createElement("div",{id:"number"},t),r.a.createElement("div",{id:"operator"},n))},b=function(e){var t=e.pressedButton;return document.documentElement.onkeydown=function(e){var t;switch(e.key){case"Delete":case"c":case"C":t=document.getElementById("clear");break;case"/":t=document.getElementById("divide");break;case"*":t=document.getElementById("multiply");break;case"-":t=document.getElementById("subtract");break;case"7":t=document.getElementById("seven");break;case"8":t=document.getElementById("eight");break;case"9":t=document.getElementById("nine");break;case"+":t=document.getElementById("add");break;case"4":t=document.getElementById("four");break;case"5":t=document.getElementById("five");break;case"6":t=document.getElementById("six");break;case"1":t=document.getElementById("one");break;case"2":t=document.getElementById("two");break;case"3":t=document.getElementById("three");break;case"Enter":case"=":t=document.getElementById("equals");break;case"0":t=document.getElementById("zero");break;case",":case".":t=document.getElementById("decimal")}void 0!==t&&(t.classList.add("button-pressed"),t.click(),setTimeout((function(){t.classList.remove("button-pressed")}),100))},r.a.createElement("div",{id:"buttons"},r.a.createElement("button",{id:"clear",onClick:function(){t("clear")}},"C"),r.a.createElement("button",{id:"divide",onClick:function(){t("divide")}},"/"),r.a.createElement("button",{id:"multiply",onClick:function(){t("multiply")}},"\xd7"),r.a.createElement("button",{id:"subtract",onClick:function(){t("subtract")}},"-"),r.a.createElement("button",{id:"seven",onClick:function(){t("seven")}},"7"),r.a.createElement("button",{id:"eight",onClick:function(){t("eight")}},"8"),r.a.createElement("button",{id:"nine",onClick:function(){t("nine")}},"9"),r.a.createElement("button",{id:"add",onClick:function(){t("add")}},"+"),r.a.createElement("button",{id:"four",onClick:function(){t("four")}},"4"),r.a.createElement("button",{id:"five",onClick:function(){t("five")}},"5"),r.a.createElement("button",{id:"six",onClick:function(){t("six")}},"6"),r.a.createElement("button",{id:"one",onClick:function(){t("one")}},"1"),r.a.createElement("button",{id:"two",onClick:function(){t("two")}},"2"),r.a.createElement("button",{id:"three",onClick:function(){t("three")}},"3"),r.a.createElement("button",{id:"equals",onClick:function(){t("equals")}},"="),r.a.createElement("button",{id:"zero",onClick:function(){t("zero")}},"0"),r.a.createElement("button",{id:"decimal",onClick:function(){t("decimal")}},","))},f=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={numberOnScreen:"0",newNumber:!0,decimal:!1,previousNumber:0,operator:"",showOperator:""},n.pressedButton=function(e){switch(e){case"clear":n.clear();break;case"divide":n.calculate("/");break;case"multiply":n.calculate("\xd7");break;case"subtract":n.calculate("-");break;case"seven":n.addDigit("7");break;case"eight":n.addDigit("8");break;case"nine":n.addDigit("9");break;case"add":n.calculate("+");break;case"four":n.addDigit("4");break;case"five":n.addDigit("5");break;case"six":n.addDigit("6");break;case"one":n.addDigit("1");break;case"two":n.addDigit("2");break;case"three":n.addDigit("3");break;case"equals":n.calculate("");break;case"zero":n.addDigit("0");break;case"decimal":n.decimal()}},n.clear=function(){n.state.newNumber?n.setState({numberOnScreen:"0",newNumber:!0,decimal:!1,previousNumber:0,operator:"",showOperator:""}):n.setState({numberOnScreen:"0",newNumber:!0,decimal:!1})},n.addDigit=function(e){var t=n.state,a=t.numberOnScreen;t.newNumber?n.setState({numberOnScreen:e,newNumber:"0"===e,showOperator:""}):a.length<14&&n.setState({numberOnScreen:n.formatForScreen(a+e)})},n.decimal=function(){var e=n.state,t=e.numberOnScreen,a=e.newNumber;e.decimal||n.setState({numberOnScreen:a?"0,":t+",",newNumber:!1,decimal:!0,showOperator:""})},n.calculate=function(e){var t=n.state,a=t.numberOnScreen,r=t.previousNumber,c=t.operator;if(""===t.showOperator){if("Infinity"!==a&&"NaN"!==a){var i=n.parse(a);if(""!==c){var o;switch(c){case"+":o=r+i;break;case"-":o=r-i;break;case"\xd7":o=r*i;break;case"/":o=r/i}var l=o.toString();o===1/0||isNaN(o)?o=0:l.indexOf("e")>=0&&l.length>14?l=(l=n.trimExponential(o)).replace(".",","):l.length>14&&l.indexOf("e")<0?l.indexOf(".")<0||l.indexOf(".")>13?(o=o.toExponential(),l=(l=n.trimExponential(o)).replace(".",",")):l=l.slice(0,14):l=n.formatForScreen(l.replace(".",",")),n.setState({numberOnScreen:l,newNumber:!0,decimal:!1,previousNumber:o,operator:e,showOperator:e})}else n.setState({numberOnScreen:n.formatForScreen(i.toString().replace(".",",")),newNumber:!0,decimal:!1,previousNumber:i,operator:e,showOperator:e})}}else n.setState({operator:e,showOperator:e})},n.trimExponential=function(e){var t=e.toString();if(t.length>14){var n=t.slice(0,t.indexOf("e")),a=t.slice(t.indexOf("e"),t.length);n=n.slice(0,14-a.length-2),t=(n=parseFloat(n)).toString()+a}return t},n.parse=function(e){return e=e.replace(/\./g,"").replace(",","."),parseFloat(e)},n.formatForScreen=function(e){var t,n,a;t="-"===e.slice(0,1)?"-":"",e.indexOf(",")>=0?(n=e.slice(t.length,e.indexOf(",")),a=e.slice(e.indexOf(","),e.length)):(n=e.slice(t.length,e.length),a=""),n=n.replace(/\./g,"");for(var r="";n.length>3;)r="."+n.slice(n.length-3)+r,n=n.slice(0,n.length-3);return r=t+n+r+a},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,{number:this.state.numberOnScreen,operator:this.state.showOperator}),r.a.createElement(b,{pressedButton:this.pressedButton}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6f929f21.chunk.js.map