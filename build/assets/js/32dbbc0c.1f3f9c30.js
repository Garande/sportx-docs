"use strict";(self.webpackChunksportx_documentation=self.webpackChunksportx_documentation||[]).push([[847],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,d=c["".concat(s,".").concat(u)]||c[u]||y[u]||i;return a?n.createElement(d,o(o({ref:t},m),{},{components:a})):n.createElement(d,o({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6707:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:5},o="Payment Integration",l={unversionedId:"payment-integration",id:"payment-integration",title:"Payment Integration",description:"SportX integrates with multiple payment gateways to provide users with secure and convenient payment options for deposits and withdrawals. The payment integration ensures smooth transactions and enables users to fund their wallets and cash out their winnings effortlessly. This section outlines the payment gateways used in SportX and the steps to configure and manage them.",source:"@site/docs/payment-integration.md",sourceDirName:".",slug:"/payment-integration",permalink:"/docs/payment-integration",draft:!1,editUrl:"https://github.com/Garande/docs/payment-integration.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Admin Guide",permalink:"/docs/admin-guide"},next:{title:"Rapid API (Football API) Integration",permalink:"/docs/football-api"}},s={},p=[{value:"Supported Payment Gateways",id:"supported-payment-gateways",level:2},{value:"Configuring Payment Gateways",id:"configuring-payment-gateways",level:2},{value:"PayPal Integration",id:"paypal-integration",level:3},{value:"EasyPay Integration",id:"easypay-integration",level:3},{value:"Managing Payment Transactions",id:"managing-payment-transactions",level:2},{value:"Payment Security and Compliance",id:"payment-security-and-compliance",level:2}],m={toc:p},c="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"payment-integration"},"Payment Integration"),(0,r.kt)("p",null,"SportX integrates with multiple payment gateways to provide users with secure and convenient payment options for deposits and withdrawals. The payment integration ensures smooth transactions and enables users to fund their wallets and cash out their winnings effortlessly. This section outlines the payment gateways used in SportX and the steps to configure and manage them."),(0,r.kt)("h2",{id:"supported-payment-gateways"},"Supported Payment Gateways"),(0,r.kt)("p",null,"SportX supports the following payment gateways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PayPal")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PayPal is a widely recognized and trusted online payment platform that allows users to make secure payments using their PayPal accounts or credit/debit cards."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"EasyPay")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"EasyPay is a popular payment gateway that provides mobile money payment services, specifically tailored for MTN Mobile Money and Airtel Money users.")))),(0,r.kt)("h2",{id:"configuring-payment-gateways"},"Configuring Payment Gateways"),(0,r.kt)("p",null,"To configure the supported payment gateways in SportX, follow the steps below:"),(0,r.kt)("h3",{id:"paypal-integration"},"PayPal Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain PayPal API Credentials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sign up for a PayPal developer account (if not already done)."),(0,r.kt)("li",{parentName:"ul"},"Generate PayPal REST API credentials, including the client ID and secret."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure PayPal in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file of the web app (",(0,r.kt)("inlineCode",{parentName:"li"},"sportx-web")," directory), set the following variables with your PayPal API credentials:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID\nPAYPAL_SECRET=YOUR_PAYPAL_SECRET\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Handle PayPal Payment Processing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the backend (",(0,r.kt)("inlineCode",{parentName:"li"},"sportx-web"),"), utilize the PayPal SDK to handle payment processing."),(0,r.kt)("li",{parentName:"ul"},"Verify payment status and log transactions using the Laravel backend integration.")))),(0,r.kt)("h3",{id:"easypay-integration"},"EasyPay Integration"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Register for EasyPay Service"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Contact EasyPay or the respective local telecommunication companies (MTN and Airtel) to register for their mobile money payment services."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Obtain EasyPay API Credentials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Obtain the necessary API credentials from EasyPay or the respective telecommunication companies."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure EasyPay in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file of the web app (",(0,r.kt)("inlineCode",{parentName:"li"},"sportx-web"),"), set the following variables with your EasyPay API credentials:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"EASYPAY_API_KEY=YOUR_EASYPAY_API_KEY\nEASYPAY_API_SECRET=YOUR_EASYPAY_API_SECRET\n"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Implement EasyPay Payment Processing"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Utilize the EasyPay API and SDK to handle mobile money transactions."),(0,r.kt)("li",{parentName:"ul"},"Integrate the backend (",(0,r.kt)("inlineCode",{parentName:"li"},"sportx-web"),") to verify payments and log transactions.")))),(0,r.kt)("h2",{id:"managing-payment-transactions"},"Managing Payment Transactions"),(0,r.kt)("p",null,'SportX administrators can monitor and manage payment transactions from the admin dashboard. They have access to the "Transactions" section, which displays a detailed record of all user deposits, withdrawals, and bet transactions. Administrators can view transaction history, track revenue, and analyze betting patterns.'),(0,r.kt)("h2",{id:"payment-security-and-compliance"},"Payment Security and Compliance"),(0,r.kt)("p",null,"SportX ensures that payment transactions are secure and compliant with industry standards. Personal and financial information is protected using encryption and secure payment gateways. The platform also implements fraud detection mechanisms to maintain a fair and secure betting environment."))}y.isMDXComponent=!0}}]);