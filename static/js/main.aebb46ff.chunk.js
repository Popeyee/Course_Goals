(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,function(t,e,n){t.exports={"form-control":"CourseInput_form-control__17vjl",invalid:"CourseInput_invalid__2Ppzt"}},,function(t,e,n){t.exports={button:"Button_button__2lgkF"}},,,,,,function(t,e,n){},function(t,e,n){},,function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(1),i=n(7),o=n.n(i),r=(n(14),n(9)),l=n(3),u=(n(15),n(0)),s=function(t){return Object(u.jsx)("li",{className:"goal-item",onClick:function(){t.onDelete(t.id)},children:t.children})},a=(n(17),function(t){return Object(u.jsx)("ul",{className:"goal-list",children:t.items.map((function(e){return Object(u.jsx)(s,{id:e.id,onDelete:t.onDeleteItem,children:e.text},e.id)}))})}),d=n(8),j=n.n(d),b=function(t){return Object(u.jsx)("button",{type:t.type,className:j.a.button,onClick:t.onClick,children:t.children})},f=n(6),h=n.n(f),x=function(t){var e=Object(c.useState)(""),n=Object(l.a)(e,2),i=n[0],o=n[1],r=Object(c.useState)(!0),s=Object(l.a)(r,2),a=s[0],d=s[1];return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),0!==i.trim().length?t.onAddGoal(i):d(!1)},children:[Object(u.jsxs)("div",{className:"".concat(h.a["form-control"]," ").concat(!a&&h.a.invalid),children:[Object(u.jsx)("label",{children:"Course Goal"}),Object(u.jsx)("input",{type:"text",onChange:function(t){t.target.value.trim().length>0&&d(!0),o(t.target.value)}})]}),Object(u.jsx)(b,{type:"submit",children:"Add Goal"})]})},m=(n(18),function(){var t=Object(c.useState)([{text:"Do all exercises!",id:"g1"},{text:"Finish the course!",id:"g2"}]),e=Object(l.a)(t,2),n=e[0],i=e[1],o=Object(u.jsx)("p",{style:{textAlign:"center"},children:"No goals found. Maybe add one?"});return n.length>0&&(o=Object(u.jsx)(a,{items:n,onDeleteItem:function(t){i((function(e){return e.filter((function(e){return e.id!==t}))}))}})),Object(u.jsxs)("div",{children:[Object(u.jsx)("section",{id:"goal-form",children:Object(u.jsx)(x,{onAddGoal:function(t){i((function(e){var n=Object(r.a)(e);return n.unshift({text:t,id:Math.random().toString()}),n}))}})}),Object(u.jsx)("section",{id:"goals",children:o})]})});o.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.aebb46ff.chunk.js.map