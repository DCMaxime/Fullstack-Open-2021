(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{38:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),o=t(6),r=t(3),u=t(2),i=t(4),s=t.n(i),l="/api/persons",d=function(){return s.a.get(l).then((function(e){return e.data}))},j=function(e){return s.a.post(l,e).then((function(e){return e.data}))},b=function(e,n){return s.a.put("".concat(l,"/").concat(e),n).then((function(e){return e.data}))},h=function(e){return s.a.delete("".concat(l,"/").concat(e)).then((function(e){return e}))},f=(t(38),t(0)),m=function(e){var n=e.text,t=e.value,c=e.onChangeHandler;return Object(f.jsxs)("div",{children:[n,Object(f.jsx)("input",{value:t,onChange:c})]})},O=function(e){var n=e.onSubmitHandler,t=e.newName,c=e.handleOnNameChange,a=e.newPhoneNumber,o=e.handleOnPhoneNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:c})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:a,onChange:o})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){e.persons;var n=e.personsToShow,t=e.handleOnClickDeletePerson;return n.map((function(e){return Object(f.jsxs)("p",{children:[e.name," ",e.number,Object(f.jsx)("button",{onClick:function(){return t({person:e})},children:"Delete"})]},e.name)}))},p=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"notification",children:n})},x=function(e){var n=e.message;return null===n?null:Object(f.jsx)("div",{className:"error",children:n})},w=function(){var e=Object(u.useState)([]),n=Object(r.a)(e,2),t=n[0],c=n[1],a=Object(u.useState)(""),i=Object(r.a)(a,2),s=i[0],l=i[1],w=Object(u.useState)(""),g=Object(r.a)(w,2),C=g[0],N=g[1],S=Object(u.useState)(""),k=Object(r.a)(S,2),P=k[0],D=k[1],T=Object(u.useState)(null),y=Object(r.a)(T,2),H=y[0],z=y[1],A=Object(u.useState)(null),E=Object(r.a)(A,2),I=E[0],J=E[1];Object(u.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var L=P.normalize()==="".normalize()?t:t.filter((function(e){return e.name.toLowerCase().includes(P.toLowerCase())}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(p,{message:H}),Object(f.jsx)(x,{message:I}),Object(f.jsx)(m,{text:"Filter shown with :",value:P,onChangeHandler:function(e){D(e.target.value)}}),Object(f.jsx)("h3",{children:"Add a new"}),Object(f.jsx)(O,{onSubmitHandler:function(e){if(e.preventDefault(),t.some((function(e){return e.name===s}))){var n=Object(o.a)(Object(o.a)({},t.find((function(e){return e.name===s}))),{},{number:C});window.confirm("".concat(n.name," is already added to phonebook. Replace the old number with a new one?"))&&b(n.id,n).then((function(e){c(t.map((function(n){return n.id===e.id?e:n}))),l(""),N(""),z("Modified ".concat(e.name," ")),setTimeout((function(){z(null)}),5e3)}))}else{j({name:s,number:C}).then((function(e){c(t.concat(e)),l(""),N(""),z("Added ".concat(e.name," ")),setTimeout((function(){z(null)}),5e3)}))}},newName:s,handleOnNameChange:function(e){l(e.target.value)},newPhoneNumber:C,handleOnPhoneNumberChange:function(e){N(e.target.value)}}),Object(f.jsx)("h3",{children:"Numbers"}),Object(f.jsx)(v,{persons:t,personsToShow:L,handleOnClickDeletePerson:function(e){var n=e.person;window.confirm("Delete ".concat(n.name))&&h(n.id).then((function(e){c(t.filter((function(e){return e.id!==n.id})))})).catch((function(e){J("Information of '".concat(n.name,"' was already removed from server")),setTimeout((function(){J(null)}),5e3),c(t.filter((function(e){return e.id!==n.id})))}))}})]})};a.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.ad69fcc6.chunk.js.map