(this["webpackJsonpmobius-test-app"]=this["webpackJsonpmobius-test-app"]||[]).push([[0],{22:function(e,t,c){},23:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(2),n=c.n(s),i=c(16),o=c.n(i),r=(c(22),c(23),c(3)),l=function(e){var t=e.item;return Object(a.jsx)(s.Fragment,{children:Object(a.jsxs)("div",{className:"bomcardContainer",children:[Object(a.jsx)("div",{className:"container",children:Object(a.jsx)("img",{className:"bomcardImage",src:"https://media.digikey.com/Renders/Yageo%20Renders/CFR-12JR-10K.jpg",alt:"logo"})}),Object(a.jsx)("h3",{className:"bomcardHeader",children:"Details:"}),Object(a.jsxs)("div",{className:"bomcardTitles",children:[Object(a.jsxs)("p",{className:"bomcardTitle",children:["BOM: ",t.bom]}),Object(a.jsxs)("p",{className:"bomcardTitle",children:["Cost: ",t.item_unit_cost]}),Object(a.jsxs)("p",{className:"bomcardTitle",children:["Quantity: ",t.quantity]}),Object(a.jsxs)("p",{className:"bomcardTitle",children:["Specific Part: ",t.specific_part]})]})]})})},d=c(4),m=c(7),b=c(5),u=c.n(b),j=function(e){var t=e.addItem,c=Object(s.useState)({bom:"",item_unit_cost:"",quantity:"",specific_part:""}),n=Object(r.a)(c,2),i=n[0],o=n[1],l=Object(s.useState)(!1),b=Object(r.a)(l,2),j=b[0],p=b[1],f=function(e){o(Object(m.a)(Object(m.a)({},i),{},Object(d.a)({},e.target.name,e.target.value))),p(!0)};return Object(a.jsx)("div",{className:"bomcardContainer2",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault();var c={fields:{uuid:"0b1ee8c4-03bd-4fd8-a016-226dba25f0f6",created_at:"2020-08-27T00:38:01.689Z",updated_at:(new Date).toISOString(),is_active:!0,bom:parseInt(i.bom),item_unit_cost:i.item_unit_cost,quantity:parseInt(i.quantity),specific_part:parseInt(i.specific_part)}};u.a.put("https://run.mocky.io/v3/cc19c73b-076c-473d-b695-38f1316ac7aa",c).then((function(e){console.log("PUT res: ",e),t(i),p(!1),o({bom:"",item_unit_cost:"",quantity:"",specific_part:""}),console.log("form data state: ",i)})).catch((function(e){return console.log(e)}))},children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{value:i.bom,onChange:f,name:"bom",type:"text",className:"form-control",id:"name",placeholder:"BOM"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{value:i.item_unit_cost,onChange:f,name:"item_unit_cost",type:"text",className:"form-control",id:"cost",placeholder:"Cost"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{value:i.quantity,onChange:f,name:"quantity",type:"text",className:"form-control",id:"quantity",placeholder:"Quantity"})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{value:i.specific_part,onChange:f,name:"specific_part",type:"text",className:"form-control",id:"specific_part",placeholder:"Specific Part"})}),Object(a.jsx)("button",{disabled:!j,onChange:f,type:"submit",className:"btn btnEdit",children:"Update"})]})})},p=function(){var e=Object(s.useState)({bom:"",item_unit_cost:"",quantity:"",specific_part:""}),t=Object(r.a)(e,2),c=t[0],n=t[1];return Object(s.useEffect)((function(){u.a.get("https://run.mocky.io/v3/cc19c73b-076c-473d-b695-38f1316ac7aa").then((function(e){console.log("response data: ",e.data),n(e.data.fields)})).catch((function(e){return console.log(e)}))}),[]),Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12",children:Object(a.jsx)(l,{item:c})}),Object(a.jsx)("div",{className:"col-lg-6 col-md-12 col-sm-12",children:Object(a.jsx)(j,{addItem:function(e){n(e)}})})]})};var f=function(){return Object(a.jsxs)("div",{className:"App container",children:[Object(a.jsx)("div",{className:"logoContainer",children:Object(a.jsx)("img",{className:"logo",src:"https://global-uploads.webflow.com/5eb0c63d6ca125e389d2f53e/5f1712798e427625eaa02c74_Screen%20Shot%202020-07-21%20at%2012.04.28%20PM.png"})}),Object(a.jsx)("h3",{className:"text-center mb-4",children:"Mobius Test App"}),Object(a.jsx)(p,{})]})},h=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};o.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(f,{})}),document.getElementById("root")),h()}},[[41,1,2]]]);
//# sourceMappingURL=main.c9d61047.chunk.js.map