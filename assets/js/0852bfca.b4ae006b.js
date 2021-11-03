"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?a.createElement(f,i(i({ref:t},u),{},{components:n})):a.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1118:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:1},s="What is Katalog?",p={unversionedId:"main/introduction",id:"main/introduction",isDocsHomePage:!1,title:"What is Katalog?",description:"Katalog is a UI Catalog Library made with Jetpack Compose.",source:"@site/docs/main/introduction.md",sourceDirName:"main",slug:"/main/introduction",permalink:"/docs/main/introduction",editUrl:"https://github.com/cyberagent-zemi/katalog/edit/main/docs/docs/main/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"Register and Start",permalink:"/docs/main/register-and-start"}},u=[{value:"Why using the UI Catalog?",id:"why-using-the-ui-catalog",children:[],level:2},{value:"Features of Katalog",id:"features-of-katalog",children:[{value:"Extensions",id:"extensions",children:[],level:3}],level:2},{value:"Sample App",id:"sample-app",children:[],level:2},{value:"Ideas",id:"ideas",children:[],level:2},{value:"References",id:"references",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"what-is-katalog"},"What is Katalog?"),(0,o.kt)("p",null,"Katalog is a UI Catalog Library made with Jetpack Compose."),(0,o.kt)("h2",{id:"why-using-the-ui-catalog"},"Why using the UI Catalog?"),(0,o.kt)("p",null,"When implementing complex UIs, you need to be aware of various things such as omissions and degradation."),(0,o.kt)("p",null,"The UI Catalog can be build UIs separately from the logic, so it is easy to reproduce hard-to-reach states and edge cases.\nIt will be useful for reuse UIs by organizing and managing UI components."),(0,o.kt)("p",null,"The UI Catalog will powerfully help for your development."),(0,o.kt)("h2",{id:"features-of-katalog"},"Features of Katalog"),(0,o.kt)("p",null,"It is made with ",(0,o.kt)("inlineCode",{parentName:"p"},"Jetpack Compose")," and you can preview ",(0,o.kt)("inlineCode",{parentName:"p"},"Composable"),".\nYou can easily register and group UI components using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DSL")," , as shown below."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'registerKatalog(\n    title = "My App Catalog"\n) {\n    compose("UI Component") {\n        Text(text = "Hello, World")\n    }\n\n    group("Group 1") {\n        compose("UI Component 1") {\n            /* ... */\n        }\n\n        compose("UI Component 2") {\n            /* ... */\n        }\n    }\n}\n')),(0,o.kt)("p",null,"In addition to ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/jetpack-compose"},"Composable"),", the following UI components are supported"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/android-view"},"Android View")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/binding"},"DataBinding / ViewBinding")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/fragment"},"Fragment"))),(0,o.kt)("h3",{id:"extensions"},"Extensions"),(0,o.kt)("p",null,"Katalog provides additional features as Extensions.\nCurrently, the following extensions are available."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/extensions/compose-theme"},"Compose Theme")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/main/extensions/android-theme"},"Android Theme"))),(0,o.kt)("p",null,"You can create an Extension.\nPlease refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/main/extensions/create"},"this document")," for more information."),(0,o.kt)("h2",{id:"sample-app"},"Sample App"),(0,o.kt)("p",null,"Check out the sample app ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cyberagent-zemi/katalog/tree/main/samples/android-sample"},"here"),"."),(0,o.kt)("h2",{id:"ideas"},"Ideas"),(0,o.kt)("p",null,"We consider adding the following features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Search function."),(0,o.kt)("li",{parentName:"ul"},"Combine with Screenshot Test."),(0,o.kt)("li",{parentName:"ul"},"Provide some Addons."),(0,o.kt)("li",{parentName:"ul"},"Support ",(0,o.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/lp/compose/"},"Compose for Desktop"),"."),(0,o.kt)("li",{parentName:"ul"},"Support ",(0,o.kt)("a",{parentName:"li",href:"https://compose-web.ui.pages.jetbrains.team/"},"Compose for Web"),".")),(0,o.kt)("p",null,"If you have any other ideas or problems, please let us know in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/cyberagent-zemi/katalog/issues"},"Issue"),"."),(0,o.kt)("h2",{id:"references"},"References"),(0,o.kt)("p",null,"This library is inspired by the following libraries:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://storybook.js.org/"},"Storybook")," - for web-frontend"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/playbook-ui/playbook-ios"},"Playbook")," - for iOS"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbnb/Showkase"},"Showkase")," - for Jetpack Compose (Android)")))}m.isMDXComponent=!0}}]);