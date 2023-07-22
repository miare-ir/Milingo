/*! For license information please see collection-index-stories.fc0f39f9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[684],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/collection/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{All:function(){return All},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/collection/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Collection",decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"story-container",children:story()})]};const All=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"600px",height:"400px",maxWidth:"100%",backgroundColor:"#f2f3f5",padding:"30px",direction:"rtl"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(___WEBPACK_IMPORTED_MODULE_1__.FE,{title:"پیتزا",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zt,{footer:"۳۴۰۰ ریال",children:"پیتزا پپرونی"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zt,{footer:"۱۵۰۰ ریال",hasSubset:!0,children:"پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط پیتزا مخلوط"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.zt,{footer:"۱۵۰۰ ریال",disabled:!0,children:"پیتزا مارگاریتا"})]})}),__namedExportsOrder=["All"]},"./src/components/collection/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{FE:function(){return collection},zt:function(){return collection_card}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Collection extends react.Component{render(){const{className:className,children:children,title:title,...props}=this.props,componentClassName=classnames("collection-container",className);return(0,jsx_runtime.jsxs)("div",{className:componentClassName,...props,children:[(0,jsx_runtime.jsx)("div",{className:"header",children:title}),(0,jsx_runtime.jsx)("div",{className:"collection",children:children})]})}}var collection=Collection;class CollectionCard extends react.Component{render(){const{className:className,children:children,hasSubset:hasSubset,footer:footer,disabled:disabled,selected:selected,disabledMessage:disabledMessage,...props}=this.props,componentClassName=classnames("card-container",className,{disabled:disabled,selected:selected});return(0,jsx_runtime.jsxs)("div",{className:componentClassName,...props,children:[(0,jsx_runtime.jsx)("p",{className:"card-title",children:children}),disabled?(0,jsx_runtime.jsx)("span",{className:"disabled-message",children:disabledMessage||"تمام شده"}):(0,jsx_runtime.jsx)("div",{className:"price",children:footer}),hasSubset&&(0,jsx_runtime.jsx)("label",{className:"subset-dot"})]})}}var collection_card=CollectionCard},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);