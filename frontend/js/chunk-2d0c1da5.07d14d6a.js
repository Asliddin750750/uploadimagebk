(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c1da5"],{"488c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),r={class:"login"},l={class:"p-grid p-px-6 p-pt-3 p-nogutter"},c={class:"p-col-12 p-lg-6 p-lg-offset-3"},o=Object(a["i"])("h3",{class:"p-m-0"},"Profilni tahrirlash",-1),i={class:"p-fluid"},s={class:"p-field"},u=Object(a["i"])("label",{class:"p-text-bold"},"First name",-1),d={class:"p-field"},p=Object(a["i"])("label",{class:"p-text-bold"},"Last name",-1),f={class:"p-d-flex"};function b(e,t,n,b,m,O){var j=Object(a["B"])("InputText"),v=Object(a["B"])("Button"),h=Object(a["B"])("Panel");return Object(a["v"])(),Object(a["h"])("div",r,[Object(a["i"])("div",l,[Object(a["i"])("div",c,[Object(a["l"])(h,null,{header:Object(a["L"])((function(){return[o]})),default:Object(a["L"])((function(){return[Object(a["i"])("form",{onSubmit:t[2]||(t[2]=Object(a["O"])((function(){return e.onUpdate&&e.onUpdate.apply(e,arguments)}),["stop","prevent"]))},[Object(a["i"])("div",i,[Object(a["i"])("div",s,[u,Object(a["l"])(j,{modelValue:e.form.first_name,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.first_name=t})},null,8,["modelValue"])]),Object(a["i"])("div",d,[p,Object(a["l"])(j,{modelValue:e.form.last_name,"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.form.last_name=t})},null,8,["modelValue"])])]),Object(a["i"])("div",f,[Object(a["l"])(v,{label:"Update",type:"submit",class:"p-ml-auto p-text-bold"})])],32)]})),_:1})])])])}var m=n("1da1"),O=(n("96cf"),n("be3b")),j=Object(a["m"])({mounted:function(){this.getProfile()},data:function(){return{form:{username:null,first_name:null,last_name:null},answer:""}},methods:{getProfile:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O["a"].get("profile/");case 2:n=t.sent,e.form=n.data.data.user;case 4:case"end":return t.stop()}}),t)})))()},onUpdate:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,O["a"].put("profile/",e.form);case 2:n=t.sent,console.log(n.data);case 4:case"end":return t.stop()}}),t)})))()}}}),v=n("d959"),h=n.n(v);const g=h()(j,[["render",b]]);t["default"]=g}}]);
//# sourceMappingURL=chunk-2d0c1da5.07d14d6a.js.map