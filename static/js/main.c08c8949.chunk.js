(this.webpackJsonppushforgorilla=this.webpackJsonppushforgorilla||[]).push([[0],{35:function(e,s,t){},41:function(e,s,t){},45:function(e,s,t){"use strict";t.r(s);var c=t(4),i=t.n(c),a=t(21),n=t.n(a),l=(t(35),t(22)),r=t(23),o=t(30),j=t(29),d=t(18),h=t(17);h.a.initializeApp({apiKey:"AIzaSyC8_gbsHIZayxnAuHOk1HHAVMPdDK9cMyo",authDomain:"push-dash-d630e.firebaseapp.com",databaseURL:"https://push-dash-d630e.firebaseio.com",projectId:"push-dash-d630e",storageBucket:"push-dash-d630e.appspot.com",messagingSenderId:"579555292714",appId:"1:579555292714:web:76a3173595603f635fb553"});var b=h.a.firestore();b.settings({timestampsInSnapshots:!0});var m=t(24),f=(t(41),t(2)),x=function(e){Object(o.a)(t,e);var s=Object(j.a)(t);function t(e){var c;return Object(l.a)(this,t),(c=s.call(this,e)).state={uid:"",name:"",sort:!1,tagList:null,tagListReverse:null,feeds:[],likes:[],render:!1,profileImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFjUMXMCOEDg5AK5FhOpod-WCVhc0DfsJse7twfHHKp4WNG6ak&usqp=CAU",LikesLenght:[]},c}return Object(r.a)(t,[{key:"componentDidUpdate",value:function(e,s){var t=this;this.state.sort==!s.sort&&setTimeout((function(){t.refs.blankdiv&&t.refs.blankdiv.scrollIntoView({behavior:"smooth",inline:"nearest",block:"nearest"})}),100)}},{key:"componentDidMount",value:function(){var e=this;new Promise((function(e){b.collection("adds").get().then((function(s){var t=[];s.forEach((function(e){t.push(Object(d.a)(Object(d.a)({},e.data()),{},{docId:e.id}))})),e(t)}))})).then((function(s){e.setState({tagList:s})}))}},{key:"render",value:function(){var e=this,s=function(e){return Object(f.jsxs)("article",{className:"thumb",children:["image"!==e.type?Object(f.jsx)("a",{href:e.file,"data-poptrox":"youtube,800x480",className:"image",children:Object(f.jsx)("img",{style:{"background-size":"cover"},src:e.thumbnail?e.thumbnail:"/www.pushforgorilla.com/comics/assets/css/images/3.png",alt:""})}):Object(f.jsx)("a",{href:e.file,className:"image",children:Object(f.jsx)("img",{src:e.file,alt:""})}),Object(f.jsx)("h2",{children:e.title}),Object(f.jsx)("h3",{children:e.description})]})},t=this.state.tagList;return this.state.tagList?Object(f.jsxs)("div",{children:[Object(f.jsxs)(m.a,{children:[Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/jquery.min.js"}),Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/jquery.poptrox.min.js"}),Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/util.js"}),Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/browser.min.js"}),Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/breakpoints.min.js"}),Object(f.jsx)("script",{src:"/www.pushforgorilla.com/comics/assets/js/main.js"})]}),Object(f.jsxs)("div",{class:"is-preload",children:[Object(f.jsx)("title",{children:"PUSHFORGORILLA"}),Object(f.jsx)("meta",{charSet:"utf-8"}),Object(f.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, user-scalable=no"}),Object(f.jsx)("link",{rel:"stylesheet",type:"text/css",href:"/www.pushforgorilla.com/comics/assets/css/fonts/MyFontsWebfontsKit/MyFontsWebfontsKit.css"}),Object(f.jsx)("link",{rel:"stylesheet",href:"/www.pushforgorilla.com/comics/assets/css/main.css"}),Object(f.jsxs)("div",{id:"wrapper",children:[Object(f.jsx)("h1",{className:"title",children:" PUSHFORGORILLA"}),Object(f.jsx)("h4",{className:"author",children:"By Cornelius Range"}),Object(f.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexWrap:"wrap",marginBottom:25},children:[Object(f.jsx)("div",{style:{borderRadius:100,marginRight:10},onClick:function(){e.setState({sort:!0,tagList:t})},class:"btn btn-lg btn-white",children:Object(f.jsx)("i",{class:"fa fa-sort-amount-down"})}),Object(f.jsx)("div",{style:{borderRadius:100,marginLeft:10},onClick:function(){e.setState({sort:!1,tagList:t})},class:"btn btn-lg btn-white",children:Object(f.jsx)("i",{class:"fa fa-sort-amount-up"})})]}),Object(f.jsx)("div",{ref:"blankdiv",id:"main",className:"padding-bottom-550",children:this.state.sort?t.reverse().map((function(e){return s(e)})):t.map((function(e){return s(e)}))}),Object(f.jsxs)("header",{id:"header",className:"main-footer",children:[Object(f.jsx)("div",{className:"row justifyContent-center padding-top-40",children:Object(f.jsx)("img",{class:"",src:"/www.pushforgorilla.com/img/logo-white.png",alt:"logo",className:"width-90"})}),Object(f.jsx)("div",{className:"row justifyContent-center padding-y-40",children:Object(f.jsxs)("h1",{className:"font-family-montserrat",children:[Object(f.jsx)("a",{href:"index.html",children:Object(f.jsx)("strong",{children:"Rumble Capital"})})," x ",Object(f.jsx)("a",{href:"index.html",children:Object(f.jsx)("strong",{children:"Range X"})})]})}),Object(f.jsxs)("div",{className:"row",style:{flexWrap:"wrap",justifyContent:"center"},children:[Object(f.jsxs)("div",{className:"col-md-6 footer-menu text-center",children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0HOME"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0MISSION"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0STORY"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"",className:"text-color-white icon solid fa-info-circle font-family-montserrat",children:"\xa0STORE"})})]}),Object(f.jsxs)("div",{className:"col-md-6 footer-menu text-center",children:[Object(f.jsx)("i",{class:"text-color-white padding-x-10 fab fa-twitter"}),Object(f.jsx)("i",{class:"text-color-white padding-x-10 fab fa-facebook-f"}),Object(f.jsx)("i",{class:"text-color-white padding-x-10 fab fa-github"}),Object(f.jsx)("i",{class:"text-color-white padding-x-10 fas fa-basketball-ball"}),Object(f.jsx)("i",{class:"text-color-white padding-x-10 fab fa-linkedin-in"})]})]}),Object(f.jsx)("p",{style:{color:"white"},className:"text-center",children:"Copyright \xa9 2021 PUSHFORGORILLA. All Rights Reserved"})]}),Object(f.jsx)("footer",{id:"footer",className:"panel",children:Object(f.jsxs)("div",{className:"inner split",children:[Object(f.jsxs)("div",{children:[Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:"Magna feugiat sed adipiscing"}),Object(f.jsx)("p",{children:"Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum eget quis orci mattis aliquet. Maecenas fringilla et ante at lorem et ipsum. Dolor nulla eu bibendum sapien. Donec non pharetra dui. Nulla consequat, ex ut suscipit rutrum, mi dolor tincidunt erat, et scelerisque turpis ipsum."})]}),Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:"Follow me on ..."}),Object(f.jsxs)("ul",{className:"icons",children:[Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-twitter",children:Object(f.jsx)("span",{className:"label",children:"Twitter"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-facebook-f",children:Object(f.jsx)("span",{className:"label",children:"Facebook"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-instagram",children:Object(f.jsx)("span",{className:"label",children:"Instagram"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-github",children:Object(f.jsx)("span",{className:"label",children:"GitHub"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-dribbble",children:Object(f.jsx)("span",{className:"label",children:"Dribbble"})})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{href:"#",className:"icon brands fa-linkedin-in",children:Object(f.jsx)("span",{className:"label",children:"LinkedIn"})})})]})]}),Object(f.jsxs)("p",{className:"copyright",children:["\xa9 Unttled. Design: ",Object(f.jsx)("a",{href:"http://html5up.net",children:"HTML5 UP"}),"."]})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("section",{children:[Object(f.jsx)("h2",{children:"Get in touch"}),Object(f.jsxs)("form",{method:"post",action:"#",children:[Object(f.jsxs)("div",{className:"fields",children:[Object(f.jsx)("div",{className:"field half",children:Object(f.jsx)("input",{type:"text",name:"name",id:"name",placeholder:"Name"})}),Object(f.jsx)("div",{className:"field half",children:Object(f.jsx)("input",{type:"text",name:"email",id:"email",placeholder:"Email"})}),Object(f.jsx)("div",{className:"field",children:Object(f.jsx)("textarea",{name:"message",id:"message",rows:4,placeholder:"Message",defaultValue:""})})]}),Object(f.jsxs)("ul",{className:"actions",children:[Object(f.jsx)("li",{children:Object(f.jsx)("input",{type:"submit",defaultValue:"Send",className:"primary"})}),Object(f.jsx)("li",{children:Object(f.jsx)("input",{type:"reset",defaultValue:"Reset"})})]})]})]})})]})})]})]})]}):Object(f.jsx)(f.Fragment,{})}}]),t}(i.a.Component),u=t(28),O=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(s){var t=s.getCLS,c=s.getFID,i=s.getFCP,a=s.getLCP,n=s.getTTFB;t(e),c(e),i(e),a(e),n(e)}))};n.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(u.a,{basename:"/www.pushforgorilla.com",children:Object(f.jsx)(x,{})})}),document.getElementById("root")),O()}},[[45,1,2]]]);
//# sourceMappingURL=main.c08c8949.chunk.js.map