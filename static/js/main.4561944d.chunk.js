(this.webpackJsonppushforgorilla=this.webpackJsonppushforgorilla||[]).push([[0],{35:function(e,s,t){},41:function(e,s,t){},45:function(e,s,t){"use strict";t.r(s);var c=t(4),i=t.n(c),a=t(21),n=t.n(a),l=(t(35),t(22)),r=t(23),j=t(30),o=t(29),d=t(18),h=t(17);h.a.initializeApp({apiKey:"AIzaSyC8_gbsHIZayxnAuHOk1HHAVMPdDK9cMyo",authDomain:"push-dash-d630e.firebaseapp.com",databaseURL:"https://push-dash-d630e.firebaseio.com",projectId:"push-dash-d630e",storageBucket:"push-dash-d630e.appspot.com",messagingSenderId:"579555292714",appId:"1:579555292714:web:76a3173595603f635fb553"});var b=h.a.firestore();b.settings({timestampsInSnapshots:!0});var m=t(24),x=(t(41),t(2)),u=function(e){Object(j.a)(t,e);var s=Object(o.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=s.call(this,e)).state={uid:"",name:"",sort:!1,tagList:null,tagListReverse:null,feeds:[],likes:[],render:!1,profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFjUMXMCOEDg5AK5FhOpod-WCVhc0DfsJse7twfHHKp4WNG6ak&usqp=CAU",LikesLenght:[]},c}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,s){var t=this;this.state.sort==!s.sort&&setTimeout((function(){t.refs.blankdiv&&t.refs.blankdiv.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"})}),100)}},{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){b.collection("adds").get().then((function(s){var t=[];s.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{docId:e.id}))})),e(t)}))})).then((function(s){e.setState({tagList:s})}))}},{key:"render",value:function(){var e=this,s=function(e){return Object(x.jsxs)("article",{className:"thumb",children:["image"!==e.type?Object(x.jsx)("a",{href:e.file,"data-poptrox":"youtube,800x480",className:"image",children:Object(x.jsx)("img",{style:{"background-size":"cover"},src:e.thumbnail?e.thumbnail:"/push/comics/assets/css/images/3.png",alt:""})}):Object(x.jsx)("a",{href:e.file,className:"image",children:Object(x.jsx)("img",{src:e.file,alt:""})}),Object(x.jsx)("h2",{children:e.title}),Object(x.jsx)("h3",{children:e.description})]})},t=this.state.tagList;return this.state.tagList?Object(x.jsxs)("div",{children:[Object(x.jsxs)(m.a,{children:[Object(x.jsx)("script",{src:"/push/comics/assets/js/jquery.min.js"}),Object(x.jsx)("script",{src:"/push/comics/assets/js/jquery.poptrox.min.js"}),Object(x.jsx)("script",{src:"/push/comics/assets/js/util.js"}),Object(x.jsx)("script",{src:"/push/comics/assets/js/browser.min.js"}),Object(x.jsx)("script",{src:"/push/comics/assets/js/breakpoints.min.js"}),Object(x.jsx)("script",{src:"/push/comics/assets/js/main.js"})]}),Object(x.jsxs)("div",{class:"is-preload",children:[Object(x.jsx)("title",{children:"PUSHFORGORILLA"}),Object(x.jsx)("meta",{charSet:"utf-8"}),Object(x.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),Object(x.jsx)("link",{rel:"stylesheet",type:"text/css",href:"/push/comics/assets/css/fonts/MyFontsWebfontsKit/MyFontsWebfontsKit.css"}),Object(x.jsx)("link",{rel:"stylesheet",href:"/push/comics/assets/css/main.css"}),Object(x.jsxs)("div",{id:"wrapper",children:[Object(x.jsx)("h1",{className:"title",children:" PUSHFORGORILLA"}),Object(x.jsx)("h4",{className:"author",children:"By Cornelius Range"}),Object(x.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginBottom:25},children:[Object(x.jsx)("div",{style:{borderRadius:100,marginRight:10},onClick:function(){e.setState({sort:!0,tagList:t})},class:"btn btn-lg btn-white",children:Object(x.jsx)("i",{class:"fa fa-sort-amount-down"})}),Object(x.jsx)("div",{style:{borderRadius:100,marginLeft:10},onClick:function(){e.setState({sort:!1,tagList:t})},class:"btn btn-lg btn-white",children:Object(x.jsx)("i",{class:"fa fa-sort-amount-up"})})]}),Object(x.jsx)("div",{ref:"blankdiv",id:"main",className:"padding-bottom-550",children:this.state.sort?t.reverse().map((function(e){return s(e)})):t.map((function(e){return s(e)}))}),Object(x.jsxs)("header",{id:"header",className:"main-footer",children:[Object(x.jsx)("div",{className:"row justifyContent-center padding-top-40",children:Object(x.jsx)("img",{class:"",src:"/push/img/logo-white.png",alt:"logo",className:"width-90"})}),Object(x.jsx)("div",{className:"row justifyContent-center padding-y-40",children:Object(x.jsxs)("h1",{className:"font-family-montserrat",children:[Object(x.jsx)("a",{href:"index.html",children:Object(x.jsx)("strong",{children:"Rumble Capital"})})," x ",Object(x.jsx)("a",{href:"index.html",children:Object(x.jsx)("strong",{children:"Range X"})})]})}),Object(x.jsxs)("div",{className:"row",style:{flexWrap:"wrap",justifyContent:"center"},children:[Object(x.jsxs)("div",{className:"col-md-6 footer-menu text-center",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0HOME"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0MISSION"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0STORY"})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0STORE"})})]}),Object(x.jsxs)("div",{className:"col-md-6 footer-menu text-center",children:[Object(x.jsx)("i",{class:"text-color-white padding-x-10 fab fa-twitter"}),Object(x.jsx)("i",{class:"text-color-white padding-x-10 fab fa-facebook-f"}),Object(x.jsx)("i",{class:"text-color-white padding-x-10 fab fa-github"}),Object(x.jsx)("i",{class:"text-color-white padding-x-10 fas fa-basketball-ball"}),Object(x.jsx)("i",{class:"text-color-white padding-x-10 fab fa-linkedin-in"})]})]}),Object(x.jsx)("p",{style:{color:"white"},className:"text-center",children:"Copyright \xa9 2021 PUSHFORGORILLA. All Rights Reserved"})]}),Object(x.jsx)("footer",{id:"footer",className:"panel",children:Object(x.jsxs)("div",{className:"inner split",children:[Object(x.jsxs)("div",{children:[Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:"Magna feugiat sed adipiscing"}),Object(x.jsx)("p",{children:"Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum."})]}),Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:"Follow me on ..."}),Object(x.jsxs)("ul",{className:"icons",children:[Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-twitter",children:Object(x.jsx)("span",{className:"label",children:"Twitter"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-facebook-f",children:Object(x.jsx)("span",{className:"label",children:"Facebook"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-instagram",children:Object(x.jsx)("span",{className:"label",children:"Instagram"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-github",children:Object(x.jsx)("span",{className:"label",children:"GitHub"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-dribbble",children:Object(x.jsx)("span",{className:"label",children:"Dribbble"})})}),Object(x.jsx)("li",{children:Object(x.jsx)("a",{href:"#",className:"icon brands fa-linkedin-in",children:Object(x.jsx)("span",{className:"label",children:"LinkedIn"})})})]})]}),Object(x.jsxs)("p",{className:"copyright",children:["\xa9 Unttled. Design: ",Object(x.jsx)("a",{href:"http://html5up.net",children:"HTML5 UP"}),"."]})]}),Object(x.jsx)("div",{children:Object(x.jsxs)("section",{children:[Object(x.jsx)("h2",{children:"Get in touch"}),Object(x.jsxs)("form",{method:"post",action:"#",children:[Object(x.jsxs)("div",{className:"fields",children:[Object(x.jsx)("div",{className:"field half",children:Object(x.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name"})}),Object(x.jsx)("div",{className:"field half",children:Object(x.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Email"})}),Object(x.jsx)("div",{className:"field",children:Object(x.jsx)("textarea",{name:"message",id:"message",rows:4,placeholder:"Message",defaultValue:""})})]}),Object(x.jsxs)("ul",{className:"actions",children:[Object(x.jsx)("li",{children:Object(x.jsx)("input",{type:"submit",defaultValue:"Send",className:"primary"})}),Object(x.jsx)("li",{children:Object(x.jsx)("input",{type:"reset",defaultValue:"Reset"})})]})]})]})})]})})]})]})]}):Object(x.jsx)(x.Fragment,{})}}]),t}(i.a.Component),f=t(28),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,a=s.getLCP,n=s.getTTFB;t(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(f.a,{basename:"/push",children:Object(x.jsx)(u,{})})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.4561944d.chunk.js.map