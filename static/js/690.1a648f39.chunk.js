"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[690],{335:function(n,e,t){t.d(e,{O:function(){return m}});var r,a,o=t(689),s=t(87),i=t(168),c=t(924),u=c.ZP.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 14px;\n"]))),l=c.ZP.li(a||(a=(0,i.Z)(["\n  margin: 10px;\n  text-align: center;\n\n  a {\n    text-decoration: none;\n    color: #333;\n\n    img {\n      max-width: 300px;\n      height: auto;\n      border-radius: 8px;\n      margin-bottom: 8px;\n      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n      transition: transform 0.3s ease;\n\n      &:hover {\n        transform: scale(1.05);\n      }\n    }\n\n    p {\n      margin: 15px;\n      font-weight: bold;\n      font-size: 18px;\n      text-align: center;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      max-width: 250px;\n    }\n  }\n"]))),h=t(562),p=t(184),m=function(n){var e=n.films,t=(0,o.TH)();return(0,p.jsx)(u,{children:e.map((function(n){return(0,p.jsx)(l,{children:(0,p.jsxs)(s.rU,{to:"/movies/".concat(n.id),state:{from:t},children:[(0,p.jsx)("img",{src:n.poster_path?"https://image.tmdb.org/t/p/w500".concat(n.poster_path):h,alt:n.title,style:n.poster_path?{}:{width:"300px",height:"auto"}}),(0,p.jsx)("p",{children:n.title})]})},n.id)}))})}},690:function(n,e,t){t.r(e),t.d(e,{default:function(){return f}});var r=t(861),a=t(439),o=t(757),s=t.n(o),i=t(791),c=t(87),u=t(340),l=t(335),h=t(214),p=t(705),m={Div:"Searchbar_Div__0HDNt",SearchForm:"Searchbar_SearchForm__XuPyK",SearchFormButton:"Searchbar_SearchFormButton__dksRa",SearchFormInput:"Searchbar_SearchFormInput__FT6Bx"},d=t(184),x=function(n){var e=n.onSubmit;return(0,d.jsx)("div",{className:m.Div,children:(0,d.jsx)(p.J9,{initialValues:{query:""},onSubmit:function(n,t){e(n.query),t.resetForm()},children:(0,d.jsxs)(p.l0,{className:m.SearchForm,children:[(0,d.jsx)("button",{type:"submit",className:m.SearchFormButton,children:(0,d.jsx)("span",{className:m.SearchFormButtonLabel,children:"\ud83d\udd0e"})}),(0,d.jsx)(p.gN,{className:m.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,name:"query",placeholder:"Search movies"})]})})})};function f(){var n=(0,i.useState)([]),e=(0,a.Z)(n,2),t=e[0],o=e[1],p=(0,i.useState)(null),m=(0,a.Z)(p,2),f=m[0],g=m[1],v=(0,i.useState)(!1),S=(0,a.Z)(v,2),w=S[0],b=S[1],_=(0,c.lr)(),j=(0,a.Z)(_,2),F=j[0],y=j[1],k=F.get("query");(0,i.useEffect)((function(){if(k){var n=function(){var n=(0,r.Z)(s().mark((function n(){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,b(!0),n.next=4,(0,u.z1)(k);case 4:e=n.sent,o(e.results),0===e.results.length?g("notFound"):g(null),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),g(n.t0);case 12:return n.prev=12,b(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}}),[k]);return(0,d.jsxs)("div",{children:[(0,d.jsx)(x,{onSubmit:function(n){y({query:n})}}),w&&(0,d.jsx)(h.zW,{children:"Loading..."}),f&&"notFound"!==f&&(0,d.jsx)(h.Bc,{children:"Oops! Something went wrong. Please try again later."}),t.length>0&&(0,d.jsx)(l.O,{films:t}),"notFound"===f&&(0,d.jsxs)("p",{children:['Movie "',k,'" not found.']})]})}},562:function(n,e,t){n.exports=t.p+"static/media/mainplaceholder.369ad8f0ea82dde5923c.png"}}]);
//# sourceMappingURL=690.1a648f39.chunk.js.map