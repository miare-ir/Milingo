/*! For license information please see list-index-stories.9ae61707.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[992],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/list/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:function(){return All},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/react/index.js");var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var list=props=>(0,jsx_runtime.jsx)("ul",{className:"list",...props}),classnames=__webpack_require__("./node_modules/classnames/index.js");var section=_ref=>{let{large:large,seperator:seperator,...props}=_ref;return(0,jsx_runtime.jsx)("ul",{className:classnames("list-section",{large:large,seperator:seperator}),...props})};var title=_ref=>{let{title:title,children:children,...props}=_ref;return(0,jsx_runtime.jsx)("div",{className:"list-title",...props,children:title||children})};var footer=props=>(0,jsx_runtime.jsx)("div",{className:"list-footer",...props});const SimpleArrayOfLiElements=()=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("li",{style:{direction:"rtl"},children:[(0,jsx_runtime.jsx)("span",{children:"مبلغ غذا"}),(0,jsx_runtime.jsx)("span",{style:{color:"#258613",direction:"ltr"},children:"+ ۲۰,۰۰۰"})]}),(0,jsx_runtime.jsxs)("li",{style:{direction:"rtl"},children:[(0,jsx_runtime.jsx)("span",{children:"حمل و نقل"}),(0,jsx_runtime.jsx)("span",{style:{color:"#d73948",direction:"ltr"},children:"- ۳۰,۰۰۰"})]}),(0,jsx_runtime.jsxs)("li",{style:{direction:"rtl"},children:[(0,jsx_runtime.jsx)("span",{children:"کارمزد پرداخت"}),(0,jsx_runtime.jsx)("span",{style:{color:"#d73948",direction:"ltr"},children:"- ۱۰,۰۰۰"})]})]});var index_stories={title:"List",decorators:[story=>(0,jsx_runtime.jsx)("div",{className:"story-container list-story-container",style:{width:"400px",backgroundColor:"white",padding:"50px"},children:story()})]};const All=()=>(0,jsx_runtime.jsxs)(list,{children:[(0,jsx_runtime.jsx)(title,{title:"فیش ۲۴"}),(0,jsx_runtime.jsx)(section,{children:SimpleArrayOfLiElements()}),(0,jsx_runtime.jsx)(title,{title:"فیش ۲۵"}),(0,jsx_runtime.jsx)(section,{children:SimpleArrayOfLiElements()}),(0,jsx_runtime.jsx)(section,{large:!0,seperator:!0,children:SimpleArrayOfLiElements()}),(0,jsx_runtime.jsxs)(footer,{children:[(0,jsx_runtime.jsx)("span",{children:"مجموع پرداخت"}),(0,jsx_runtime.jsx)("span",{style:{color:"#d73948",direction:"ltr"},children:"- ۱۰,۰۰۰"})]})]}),__namedExportsOrder=["All"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);