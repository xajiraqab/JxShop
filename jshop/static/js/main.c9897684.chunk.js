(this.webpackJsonpjshop=this.webpackJsonpjshop||[]).push([[0],{25:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(1),i=n.n(c),r=n(19),a=n.n(r),o=(n(25),n(2)),s=n(3),u=n(5),d=n.n(u),l=n(20),j=n(0),b=Object(c.createContext)({}),f=function(t){var e=Object(c.useState)({Payment:0,PaymentNoDiscount:0,RealPayment:0,OrderDate:"",Description:"",OrderN:""}),n=Object(s.a)(e,2),i=n[0],r=n[1],a=Object(c.useState)([]),u=Object(s.a)(a,2),f=u[0],O=u[1],h=Object(c.useState)([]),m=Object(s.a)(h,2),g=m[0],x=m[1],p=Object(c.useState)([]),v=Object(s.a)(p,2),U=v[0],C=v[1];Object(c.useEffect)((function(){d.a.get("".concat("","/api/products")).then((function(t){return O(t.data)})),d.a.get("".concat("","/api/categories")).then((function(t){return C(t.data.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{CategoryName:t.CategoryName.replace("(...)","\u10e7\u10d5\u10d4\u10da\u10d0")})})))}))}),[]),Object(c.useEffect)((function(){var t=0;g.forEach((function(e){return t+=e.LinePrice})),r((function(e){return Object(o.a)(Object(o.a)({},e),{},{Payment:t,PaymentNoDiscount:t})}))}),[g]);var P=function(t,e){x((function(n){return[].concat(Object(l.a)(n),[{OrderQty:e,LinePrice:e*t.Price,LinePriceNoDiscount:e*t.Price,ProductUid:t.Uid,ProductName:t.ProductName,ProductCode:t.ProductCode,UnitPrice:t.Price,availableQty:t.Stock}])}))},y=function(t){return g.find((function(e){return e.ProductUid===t.Uid}))};return Object(j.jsx)(b.Provider,{value:{_orderHeader:i,_listProducts:f,_listDetails:g,_listCategories:U,_addProductInCart:P,_setProductQtyInCart:function(t,e){isNaN(e)||(e||x((function(e){return e.filter((function(e){return e.ProductUid!==t.ProductUid}))})),e=Math.max(Math.min(t.availableQty,e),Math.min(t.availableQty,1)),x((function(n){return n.map((function(n){return n.ProductUid===t.ProductUid?Object(o.a)(Object(o.a)({},n),{},{OrderQty:e,LinePrice:e*n.UnitPrice,LinePriceNoDiscount:e*n.UnitPrice}):n}))})))},_toggleProductInCart:function(t){O((function(e){return e.map((function(e){return e.Uid===t.Uid?Object(o.a)(Object(o.a)({},e),{},{isLoading:!0}):e}))})),d.a.get("https://jsonplaceholder.typicode.com/users").then((function(){y(t)?x((function(e){return e.filter((function(e){return e.ProductUid!==t.Uid}))})):P(t,1),O((function(e){return e.map((function(e){return e.Uid===t.Uid?Object(o.a)(Object(o.a)({},e),{},{isLoading:!1}):e}))}))})).catch((function(t){return console.log(t)}))},_isProductInCart:y,_clearCart:function(){return x([])}},children:t.children})},O=function(){var t=Object(c.useContext)(b),e=t._orderHeader,n=t._clearCart,i=t._listDetails,r=t._setProductQtyInCart,a=Object(c.useState)(!1),u=Object(s.a)(a,2),l=u[0],f=u[1],O=Object(c.useState)(0),h=Object(s.a)(O,2),m=h[0],g=h[1],x=Object(c.useState)({isLoading:!1,number:localStorage.getItem("number")||"",address:localStorage.getItem("address")||"",isSoldSuccessfully:!1}),p=Object(s.a)(x,2),v=p[0],U=p[1];Object(c.useEffect)((function(){l||g(0)}),[l]);var C=function(){n(),f(!1),g(0),U(Object(o.a)(Object(o.a)({},v),{},{isSoldSuccessfully:!1}))},P=function(t){t.preventDefault(),v.isSoldSuccessfully?C():g(1-m)};return i.length?Object(j.jsxs)("div",{className:"cartInfo anFadeIn",children:[l&&Object(j.jsx)("div",{onClick:function(){v.isSoldSuccessfully?C():f(!1)},className:"cartInfoCover"}),l&&Object(j.jsxs)("div",{className:"cartInfoContainer",children:[Object(j.jsxs)("div",{className:"cartInfoHeader",children:[Object(j.jsx)("h2",{children:"\u10d9\u10d0\u10da\u10d0\u10d7\u10d0"}),Object(j.jsx)("button",{className:"".concat(1===m?"flat":""),onClick:P,children:0===m?"\u10e8\u10d4\u10eb\u10d4\u10dc\u10d0":"\u2716"})]}),0===m?i.map((function(t){return Object(j.jsxs)("div",{className:"detail",children:[Object(j.jsx)("button",{className:"flat",onClick:function(){r(t,0),1===i.length&&f(!1)},children:"\u2716"}),Object(j.jsx)("img",{alt:"product",src:"https://images.unsplash.com/photo-1562952546-12992a813a51?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"}),Object(j.jsx)("p",{children:t.ProductName}),Object(j.jsx)("button",{className:"flat",onClick:function(){return r(t,Math.max(1,t.OrderQty-1))},children:"-"}),Object(j.jsx)("input",{type:"text",value:t.OrderQty,onChange:function(e){return r(t,Math.max(1,parseFloat(e.target.value)))}}),Object(j.jsx)("button",{className:"flat",onClick:function(){return r(t,t.OrderQty+1)},children:"+"})]},t.ProductUid)})):v.isSoldSuccessfully?Object(j.jsxs)("div",{style:{marginTop:"7em",textAlign:"center"},children:[Object(j.jsxs)("h1",{children:["\u10d7\u10e5\u10d5\u10d4\u10dc\u10d8 \u10e8\u10d4\u10d9\u10d5\u10d4\u10d7\u10d0 \u10db\u10d8\u10e6\u10d4\u10d1\u10e3\u10da\u10d8\u10d0 \ud83e\udd70 ",Object(j.jsx)("span",{style:{color:"#17AB23"},children:"\u10d3\u10d0\u10d4\u10da\u10dd\u10d3\u10d4\u10d7 \u10d6\u10d0\u10e0\u10e1"})]}),Object(j.jsx)("button",{onClick:P,children:"\u10d2\u10d0\u10e1\u10d0\u10d2\u10d4\u10d1\u10d8\u10d0 \ud83e\udd17"})]}):Object(j.jsx)("div",{children:Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),v.isLoading||(U(Object(o.a)(Object(o.a)({},v),{},{isLoading:!0})),d.a.post("".concat("","/api/createSellInvoice"),{header:e,detail_list:i,payment:{Value:0,Description:""},customer:{Id:"999",Name:"jax",ShippingAdress:v.address,Email:"",Phone:v.number}}).then((function(t){"ERROR"===t.data.status&&alert(t.data.error_message);var e="OK"===t.data.status;U(Object(o.a)(Object(o.a)({},v),{},{isLoading:!1,isSoldSuccessfully:e})),e&&(localStorage.setItem("number",v.number),localStorage.setItem("address",v.address))})).catch((function(t){return console.log(t)})))},children:[Object(j.jsxs)("label",{className:"input",children:["\u10e2\u10d4\u10da\u10d4\u10e4\u10dd\u10dc\u10d8\u10e1 \u10dc\u10dd\u10db\u10d4\u10e0\u10d8",Object(j.jsx)("input",{name:"phone",type:"tel",value:v.number,onChange:function(t){return U(Object(o.a)(Object(o.a)({},v),{},{number:t.target.value}))}})]}),Object(j.jsxs)("label",{className:"input",children:["\u10db\u10d8\u10e1\u10d0\u10db\u10d0\u10e0\u10d7\u10d8",Object(j.jsx)("input",{name:"address",type:"text",value:v.address,onChange:function(t){return U(Object(o.a)(Object(o.a)({},v),{},{address:t.target.value}))}})]}),Object(j.jsx)("button",{className:"".concat(v.isLoading?"loading":""),children:"\u10e8\u10d4\u10d9\u10d5\u10d4\u10d7\u10d0"})]})})]}),Object(j.jsxs)("button",{style:{background:l?"#FCCEE5":void 0,color:l?"#FF6D99":void 0},onClick:function(){v.isSoldSuccessfully?C():f(!l)},children:[e.Payment.toFixed(2),"\u20be"]})]}):Object(j.jsx)(j.Fragment,{})},h=function(t){var e=t.product,n=t.isLoading,i=Object(c.useContext)(b),r=i._toggleProductInCart,a=i._isProductInCart;return n?Object(j.jsxs)("div",{className:"card cardLoading",children:[Object(j.jsx)("div",{}),Object(j.jsx)("p",{}),Object(j.jsx)("p",{}),Object(j.jsx)("button",{className:"flat"})]}):Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{alt:"product",src:"https://cdn.mego.ge/4860009810194.jpg"}),Object(j.jsx)("p",{children:e.ProductName}),Object(j.jsxs)("p",{style:{color:!e.isLoading&&a(e)?"#17ab23":void 0},children:[e.Price.toFixed(2),"\u20be"]}),Object(j.jsx)("button",{className:"flat ".concat(e.isLoading?"loading":""," ").concat(!e.isLoading&&a(e)?"green":""),onClick:function(){return function(t){r(t)}(e)},children:a(e)?"\u10d3\u10d0\u10d1\u10e0\u10e3\u10dc\u10d4\u10d1\u10d0":"\u10d0\u10e6\u10d4\u10d1\u10d0"})]},e.Uid)},m=function(){var t=Object(c.useContext)(b),e=t._listProducts,n=t._listCategories,i=Object(c.useRef)(null),r=Object(c.useState)([{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}]),a=Object(s.a)(r,2),o=a[0],u=a[1],d=Object(c.useState)([]),l=Object(s.a)(d,2),f=l[0],O=l[1],m=Object(c.useState)([]),g=Object(s.a)(m,2),x=g[0],p=g[1],v=Object(c.useState)({Uid:1}),U=Object(s.a)(v,2),C=U[0],P=U[1],y=Object(c.useState)(!0),N=Object(s.a)(y,2),S=N[0],L=N[1],I=Object(c.useState)([{Uid:-1},{Uid:-2},{Uid:-3},{Uid:-4},{Uid:-5},{Uid:-6},{Uid:-7},{Uid:-8},{Uid:-9},{Uid:-10},{Uid:-11},{Uid:-12},{Uid:-13},{Uid:-14},{Uid:-15},{Uid:-16},{Uid:-17},{Uid:-18},{Uid:-19},{Uid:-20}]),w=Object(s.a)(I,1)[0],k=function t(e,c){return c&&c.ParentUid?(e.unshift(c),t(e,n.find((function(t){return t.Uid===c.ParentUid}))),e):e},_=function(){var t=[];return t=k(t,C)},D=function t(e,c){return c&&c.ParentUid?(e.unshift(c.Uid),n.filter((function(t){return t.ParentUid===c.Uid})).forEach((function(n){return t(e,n)})),e):e},E=function(){var t=[];return t=D(t,C)};Object(c.useEffect)((function(){u(n.filter((function(t){return t.ParentUid===C.Uid}))),p(_()),O(E())}),[C,n]),Object(c.useEffect)((function(){e.length&&n.length&&S&&(L(!1),P(n.find((function(t){return 1===t.Uid}))))}),[e,n]);var F=Object(c.useState)(!1),Q=Object(s.a)(F,2),M=Q[0],H=Q[1],R=Object(c.useState)(""),B=Object(s.a)(R,2),A=B[0],G=B[1];return Object(c.useEffect)((function(){M?i.current.focus():(i.current.blur(),G(""))}),[M]),Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:".5em"},children:[Object(j.jsx)("h2",{className:"logo",style:{pointerEvents:S?"none":void 0},onClick:function(){return P(n.find((function(t){return 1===t.Uid})))},children:"JxShop"}),Object(j.jsx)("label",{className:"input search ".concat(M&&"opened"),children:Object(j.jsx)("input",{value:A,onChange:function(t){G(t.target.value),P(n.find((function(t){return 1===t.Uid})))},ref:i,name:"phone",type:"tel",placeholder:""})}),Object(j.jsx)("button",{onClick:function(){return H((function(t){return!t}))},className:"flat",style:{pointerEvents:S?"none":void 0,marginRight:26,minWidth:56,minHeight:56,width:56,height:56,padding:0},children:S?"":M?"\u2716":"\ud83d\udd0e"})]}),Object(j.jsxs)("div",{style:{margin:"auto",padding:"1em",width:"100%",maxWidth:"100%",display:"flex",gap:"1em"},children:[Object(j.jsxs)("div",{className:"categories",children:[x.length>1&&Object(j.jsx)("button",{className:"flat outlined",onClick:function(){P(x[x.length-2]),window.scroll(0,0)},children:"\u2190 \u10e3\u10d9\u10d0\u10dc"}),(S?[{},{},{},{},{},{},{},{},{},{},{},{}]:o).map((function(t,e){return Object(j.jsx)("button",{style:{pointerEvents:S?"none":void 0,background:C&&C.Uid===t.Uid?"#FEC2DD":void 0},className:"flat",onClick:function(){P(C===t?null:t),window.scroll(0,0)},children:t.CategoryName},e)}))]}),Object(j.jsxs)("div",{style:{flexGrow:1},children:[Object(j.jsxs)("div",{className:"breadcrumb",children:[(S||!f.length)&&Object(j.jsx)("div",{style:{background:"#ff3a8f10",borderRadius:"18px 8px",width:60},children:"\u200e"}),x.map((function(t,e){return Object(j.jsxs)("span",{children:[Object(j.jsx)("button",{onClick:function(){return P(t)},children:t.CategoryName})," ",e!==x.length-1&&" \\ "]},t.Uid)}))]}),Object(j.jsxs)("div",{className:"grid gridLoading",children:[!S&&f.length>0&&!e.filter((function(t){return!C||f.includes(t.CategoryUid)&&t.ProductName.toLowerCase().includes(A.toLocaleLowerCase())})).length&&Object(j.jsx)("h2",{style:{whiteSpace:"nowrap"},children:"404: \u10de\u10e0\u10dd\u10d3\u10e3\u10e5\u10e2\u10d4\u10d1\u10d8 \u10d0\u10e0\u10db\u10dd\u10d8\u10eb\u10d4\u10d1\u10dc\u10d0"}),(S||!f.length?w:e.filter((function(t){return!C||f.includes(t.CategoryUid)&&t.ProductName.toLowerCase().includes(A.toLocaleLowerCase())}))).map((function(t,e){return Object(j.jsx)(h,{isLoading:t.Uid<0,product:t},t.Uid)}))]})]})]})]})};var g=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(m,{}),Object(j.jsx)(O,{})]})},x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,46)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))};a.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(f,{children:Object(j.jsx)(g,{})})}),document.getElementById("root")),x()}},[[45,1,2]]]);