(this["webpackJsonpts-app"]=this["webpackJsonpts-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/bitcoinLogo.8ee75c23.png"},31:function(e,t,a){e.exports=a(45)},36:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),i=a.n(c),o=(a(36),a(3)),s=a.n(o),l=a(19),u=a(10),m=a(20),d=a(21),p=a(26),h=a(58),f=(a(38),a(57)),v=(a(39),a(60)),g=function(e){return r.a.createElement(v.a,{width:"200px",height:"200px"},r.a.createElement(f.a,{variant:"rect",width:"100%",height:"60%",style:{marginBottom:"5%"}}),r.a.createElement(f.a,{variant:"rect",width:"80%",height:"10%",style:{marginBottom:"5%"}}),r.a.createElement(f.a,{variant:"rect",width:"80%",height:"10%"}))},w=function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.awrap(fetch("https://api.coindesk.com/v1/bpi/currentprice.json"));case 3:return e=t.sent,t.next=6,s.a.awrap(e.json());case 6:return t.abrupt("return",t.sent);case 9:t.prev=9,t.t0=t.catch(0),console.error(t.t0);case 12:case"end":return t.stop()}}),null,null,[[0,9]])},E=(a(44),function(e){return r.a.createElement(h.a,{item:!0,xs:12},r.a.createElement("div",{className:"value-card standard-shadow"},r.a.createElement("span",{className:"value-card-text"},r.a.createElement("span",{className:"primary-color-text"},e.code,": "),e.rate_float)))}),b=a(25),x=a.n(b),y=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={bitcoinInfo:{},isLoading:!0,cardmessage:""},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(w());case 2:e=t.sent,this.setState({bitcoinInfo:e,isLoading:!1,cardmessage:e.time.updated});case 4:case"end":return t.stop()}}),null,this)}},{key:"componentDidUpdate",value:function(){var e;return s.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.awrap(w());case 2:e=t.sent,this.setState({bitcoinInfo:e,isLoading:!1,cardmessage:e.time.updated});case 4:case"end":return t.stop()}}),null,this)}},{key:"render",value:function(){var e;return e=!1===this.state.isLoading?Object.values(this.state.bitcoinInfo.bpi).map((function(e){return r.a.createElement(E,{key:e.code,code:e.code,rate_float:e.rate_float})})):r.a.createElement(g,null),r.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"fill-viewport gradient-background"},r.a.createElement(h.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"card standard-shadow"},r.a.createElement(h.a,{item:!0},r.a.createElement("img",{width:"200px",src:x.a,alt:"icon"})),r.a.createElement(h.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"center"},e),r.a.createElement(h.a,{item:!0,className:"card-footer"},r.a.createElement("span",{className:"card-footer-text"},"Updated on: ",this.state.cardmessage))))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.7450c455.chunk.js.map