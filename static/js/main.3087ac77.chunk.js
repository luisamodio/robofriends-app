(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{115:function(e,t,n){e.exports=n(379)},119:function(e,t,n){},377:function(e,t,n){},379:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(14),c=n.n(o),l=(n(119),n(41)),s=n(42),i=n(44),u=n(43),h=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e,n){return r.a.createElement(h,{key:"c#".concat(n),id:t[n].id,name:t[n].name,email:t[n].email})})))},d=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},f=(n(72),n(377),function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"500px"}},e.children)}),b=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooooooops!!!! ",r.a.createElement("br",null)," Somethin went wrong..."):this.props.children}}]),n}(a.Component),v=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,a=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f2"},"RoboFriends"),r.a.createElement(d,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(b,null,r.a.createElement(m,{robots:a})))):r.a.createElement("div",{className:"tc f2"},r.a.createElement("h1",null,"LOADING..."))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(378);c.a.render(r.a.createElement("div",null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.3087ac77.chunk.js.map