(this["webpackJsonpnew-heim"]=this["webpackJsonpnew-heim"]||[]).push([[0],{10:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){},33:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(17),n=c.n(s),i=(c(25),c(6)),l=c(2),r=(c(10),c(26),c(0));function o(){var e=Object(l.f)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var j=function(){var e=function(){document.getElementById("navbarNav").classList.remove("show"),document.getElementById("navbarBtn").classList.add("collapsed"),document.body.classList.toggle("lock-scroll")};return Object(r.jsxs)("nav",{className:"navbar sticky-top",children:[Object(r.jsx)(o,{}),Object(r.jsxs)("div",{className:"navbar__container container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:"NEW HEIM"}),Object(r.jsx)("button",{className:"navbar-toggler",id:"navbarBtn",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",onClick:function(){document.body.classList.toggle("lock-scroll")},children:Object(r.jsx)("i",{className:"toggler-icon fas fa-bars"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:[Object(r.jsxs)("div",{className:"navbar-collapse__top",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",onClick:e,children:"NEW HEIM"}),Object(r.jsx)("button",{className:"navbar-collapse__toggler",onClick:e,children:Object(r.jsx)("i",{className:"toggler-icon far fa-times-circle"})})]}),Object(r.jsxs)("ul",{className:"navbar-nav",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/",onClick:e,children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/about",onClick:e,children:"About"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/team",onClick:e,children:"Team"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link",to:"/contact",onClick:e,children:"Reservation"})})]})]})]})]})},b=(c(33),["btn--primary","btn--outline","btn--disabled"]),m=["btn--small","btn--medium","btn--large"],d=function(e){var t=e.children,c=e.onClick,a=e.buttonStyle,s=e.buttonSize,n=e.linkTo,l=b.includes(a)?a:b[0],o=m.includes(s)?s:m[1];return Object(r.jsx)(i.b,{to:n,className:"btn-mobile",children:Object(r.jsx)("button",{className:"btn ".concat(l," ").concat(o),onClick:c,type:"button",children:t})})};var u=function(){return Object(r.jsx)("div",{className:"home__container container-fluid",children:Object(r.jsxs)("div",{className:"home__contents",children:[Object(r.jsx)("h1",{children:"New Heim"}),Object(r.jsx)("p",{children:"We bring "}),Object(r.jsxs)("div",{className:"home__btns",children:[Object(r.jsx)(d,{linkTo:"/about",buttonStyle:"btn--primary",buttonSize:"btn--medium",children:"EXPLORE"}),Object(r.jsx)(d,{linkTo:"/contact",buttonStyle:"btn--outline",buttonSize:"btn--medium",children:"RESERVE"})]})]})})};var h=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"about__container container-fluid",children:Object(r.jsxs)("div",{className:"about__contents",children:[Object(r.jsx)("h1",{children:Object(r.jsxs)("q",{children:["Food is our common ground, ",Object(r.jsx)("br",{}),"a universial experience"]})}),Object(r.jsx)("p",{id:"demo"})]})})})},O=c.p+"static/media/jongwoo.23c15e73.png",x=c.p+"static/media/hyunsub.6e68bcd9.jpeg",v=c.p+"static/media/seokha.50fcdcfa.jpeg";var N=function(){return Object(r.jsxs)("div",{className:"team__container container",children:[Object(r.jsx)("h1",{children:"MEET THE TEAM"}),Object(r.jsxs)("div",{className:"members row",children:[Object(r.jsxs)("div",{className:"member__card col-md-3",children:[Object(r.jsx)("div",{className:"member__picture",children:Object(r.jsx)("img",{src:O,alt:"jongwoo-ha",style:{objectFit:"cover"}})}),Object(r.jsxs)("div",{className:"member__info",children:[Object(r.jsx)("h2",{className:"name",children:"JONGWOO HA"}),Object(r.jsx)("p",{className:"title",children:"CEO"})]})]}),Object(r.jsxs)("div",{className:"member__card col-md-3",children:[Object(r.jsx)("div",{className:"member__picture",children:Object(r.jsx)("img",{src:x,alt:"hyunsub-lim",style:{marginTop:"1.5rem"}})}),Object(r.jsxs)("div",{className:"member__info",children:[Object(r.jsx)("h2",{className:"name",children:"HYUNSUB LIM"}),Object(r.jsx)("p",{className:"title",children:"CEO"})]})]}),Object(r.jsxs)("div",{className:"member__card col-md-3",children:[Object(r.jsx)("div",{className:"member__picture",children:Object(r.jsx)("img",{src:v,alt:"seokha-ryu",style:{marginTop:"1.2rem"}})}),Object(r.jsxs)("div",{className:"member__info",children:[Object(r.jsx)("h2",{className:"name",children:"SEOKHA RYU"}),Object(r.jsx)("p",{className:"title",children:"CEO"})]})]})]})]})},p=c(15),f=c.n(p),g=c(19),_=c(20);var y=function(){var e=Object(a.useState)("Submit"),t=Object(_.a)(e,2),c=t[0],s=t[1],n=function(){var e=Object(g.a)(f.a.mark((function e(t){var c,a,n,i,l,r,o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),s("Sending..."),c=t.target.elements,a=c.name,n=c.email,i=c.message,l={name:a.value,email:n.value,message:i.value},e.next=6,fetch("http://localhost:3000/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(l)});case 6:return r=e.sent,s("Submit"),e.next=10,r.json();case 10:o=e.sent,alert(o.status);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.jsx)("div",{className:"contact-section container",children:Object(r.jsx)("div",{className:"contact__email",children:Object(r.jsxs)("form",{className:"contact-form",id:"contact-form",method:"POST",action:"send",onSubmit:n,children:[Object(r.jsx)("div",{className:"contact-image",children:Object(r.jsx)("i",{className:"fas fa-utensils"})}),Object(r.jsx)("h3",{children:"Reserve your spot!"}),Object(r.jsxs)("h4",{children:[Object(r.jsx)("br",{}),"Fill out the form below, then we will get back to you soon!"]}),Object(r.jsxs)("p",{children:["Contact form is currently not working. ",Object(r.jsx)("br",{}),"Please contact us through social media ",Object(r.jsx)("br",{}),"or send us an email at jongwooha1@gmail.com"]}),Object(r.jsxs)("div",{className:"form-inputs",children:[Object(r.jsx)("div",{className:"form-input",children:Object(r.jsxs)("label",{htmlFor:"name",children:["Name",Object(r.jsx)("input",{className:"form-control",id:"name",name:"name",type:"text",required:!0})]})}),Object(r.jsx)("div",{className:"form-input",children:Object(r.jsxs)("label",{htmlFor:"email",children:["Email",Object(r.jsx)("input",{className:"form-control",id:"email",name:"email",type:"email",required:!0})]})}),Object(r.jsx)("div",{className:"form-input",children:Object(r.jsxs)("label",{htmlFor:"subject",children:["Subject",Object(r.jsx)("input",{className:"form-control",id:"subject",name:"subject",required:!0})]})}),Object(r.jsx)("div",{className:"form-input",children:Object(r.jsxs)("label",{htmlFor:"message",children:["Message",Object(r.jsx)("textarea",{className:"form-control",id:"message",name:"message",required:!0})]})}),Object(r.jsx)("div",{className:"form-input",children:Object(r.jsx)("button",{className:"submit-button",type:"submit",value:"submit",children:c})})]})]})})})};var k=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"app container-fluid",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(j,{}),Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/",component:u}),Object(r.jsx)(l.a,{exact:!0,path:"/about",component:h}),Object(r.jsx)(l.a,{exact:!0,path:"/team",component:N}),Object(r.jsx)(l.a,{exact:!0,path:"/contact",component:y})]})]})})})};n.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0d9ec68a.chunk.js.map