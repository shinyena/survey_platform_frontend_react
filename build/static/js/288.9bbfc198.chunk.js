"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[288],{288:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var r=t(70885),s=t(78983),a=t(72791),l=t(25847),i=t(42982),o=t(74165),c=t(15861),u=t(59434),d=t(82388),m=t(38876),x=t(66369),p=t(80184),h=function(e){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),l=t[0],x=t[1],h=(0,a.useState)([]),j=(0,r.Z)(h,2),f=j[0],y=j[1],b=(0,u.v9)((function(e){return{user:e.user.user}})).user,I=(b.token.access_token,b.info.userId);(0,a.useState)((0,c.Z)((0,o.Z)().mark((function n(){return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:d.Z.post(m.Z.answerList,{regId:I,surId:e.surId},{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){x(e.data)}));case 1:case"end":return n.stop()}}),n)}))));var v=function(e,n){var t={ansId:n.ansId,queId:n.queId,type:n.ansType,content:e.target.value,regId:n.regId};console.log(t),y(f.filter((function(e){return e.queId!==n.queId}))),y((function(e){return[].concat((0,i.Z)(e),[t])}))};return(0,p.jsxs)("div",{className:"mt-3",children:[(0,p.jsx)(s.uz,{alwaysOpen:!0,children:l.map((function(e,n){return(0,p.jsxs)(s.Ob,{itemKey:n+1,children:[(0,p.jsxs)(s.Lv,{children:[n+1,". ",e.queContent," "]}),(0,p.jsxs)(s.qI,{children:["YN"===e.queType&&(0,p.jsx)(p.Fragment,{children:e.optionList.map((function(n){return(0,p.jsx)(s.EC,{type:"radio",name:e.ansId,label:n.optionName,value:n.optionName,defaultChecked:e.ansContent===n.optionName,onChange:function(n){v(n,e)}},n.queOptId)}))}),"NumOnly"===e.queType&&(0,p.jsx)(p.Fragment,{children:e.optionList.map((function(n){return(0,p.jsx)(s.EC,{type:"radio",name:e.ansId,label:n.optionName,value:n.optionName,defaultChecked:e.ansContent===n.optionName,onChange:function(n){v(n,e)}},n.queOptId)}))}),"NumMul"===e.queType&&(0,p.jsx)(p.Fragment,{children:e.optionList.map((function(n){return(0,p.jsx)(s.EC,{type:"checkbox",name:e.ansId,label:n.optionName,value:n.optionName,defaultChecked:e.ansContent===n.optionName,onChange:function(n){v(n,e)}},n.queOptId)}))}),"Sub"===e.queType&&(0,p.jsx)(s.PB,{name:e.ansId,defaultValue:e.ansContent,onChange:function(n){v(n,e)}}),"Grd"==e.queType&&(0,p.jsx)(s.ZB,{name:e.ansId,min:"0",max:"100",step:"10",defaultValue:e.ansContent,onChange:function(n){v(n,e)}})]})]},e.queId)}))}),(0,p.jsx)(s.b7,{lg:12,className:"text-start d-flex mt-1",children:(0,p.jsx)(s.u5,{color:"primary",href:"#",className:"ms-auto",variant:"outline",onClick:function(){d.Z.post(m.Z.answerEdit,{surId:e.surId,answerDTOList:f}).then((function(n){window.location.reload("/#/survey/detail/".concat(e.surId))}))},children:"send"})})]})},j=t(57689),f=function(){var e=(0,j.UO)().sur_id,n=null,t=(0,x.Z)((function(){return d.Z.post(m.Z.surveyDetail,{sur_id:e},{headers:{"Content-Type":"multipart/form-data"}})}),[]),a=(0,r.Z)(t,3),i=(a[0],a[1]);a[2];return null!=i&&(n=i.data.info,i.data.question_list),(0,p.jsx)(s.rb,{children:(0,p.jsx)(s.b7,{xs:12,children:(0,p.jsxs)(s.xH,{className:"mb-4",children:[(0,p.jsxs)(s.bn,{children:[(0,p.jsx)("strong",{children:"\ub2f5\ubcc0 \uc218\uc815 "}),(0,p.jsx)("small",{children:" \ucc38\uc5ec\ud55c \uc124\ubb38\uc758 \ub2f5\ubcc0\uc744 \uc218\uc815 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})]}),(0,p.jsx)(s.sl,{children:(0,p.jsxs)("div",{children:[(0,p.jsx)(l.Z,{surInfo:n}),(0,p.jsx)(h,{surId:e})]})})]})})})}},25847:function(e,n,t){t(72791);var r=t(78983),s=t(72426),a=t.n(s),l=t(80184);n.Z=function(e){var n=e.surInfo;return console.log(n),(0,l.jsxs)("div",{children:[(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"surveyName",className:"col-sm-2 col-form-label",children:"\uc124\ubb38\uba85"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"surveyName",value:n?n.title:null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"category",className:"col-sm-2 col-form-label",children:"\uce74\ud14c\uace0\ub9ac"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"category",value:n?n.categoryContent:null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"description",className:"col-sm-2 col-form-label",children:"\uc124\ubb38\uc124\uba85"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"description",value:n?n.description:null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"publicYn",className:"col-sm-2 col-form-label",children:"\uacf5\uac1c\uc5ec\ubd80"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"publicYn",value:n?"Y"==n.isPrivateYn?"\ub300\uc0c1\uc790 \uacf5\uac1c":"\uc804\uccb4 \uacf5\uac1c":null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"regDt",className:"col-sm-2 col-form-label",children:"\ub4f1\ub85d\uc77c"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"regDt",value:n?a()(new Date(n.regDt)).format("YYYY-MM-DD"):null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"regDt",className:"col-sm-2 col-form-label",children:"\ub9c8\uac10\uc77c"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"regDt",value:n?a()(new Date(n.dueDt)).format("YYYY-MM-DD"):null,readOnly:!0,plainText:!0})})]}),(0,l.jsxs)(r.rb,{children:[(0,l.jsx)(r.L8,{htmlFor:"regId",className:"col-sm-2 col-form-label",children:"\uc124\ubb38 \ub4f1\ub85d\uc790"}),(0,l.jsx)(r.b7,{sm:10,children:(0,l.jsx)(r.jO,{type:"text",id:"regId",value:n?n.regId:null,readOnly:!0,plainText:!0})})]})]})}}}]);
//# sourceMappingURL=288.9bbfc198.chunk.js.map