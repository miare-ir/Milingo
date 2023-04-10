/*! For license information please see checkbox-index-stories.4e652a10.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[25],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/checkbox/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:function(){return Checked},Normal:function(){return Normal},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/checkbox/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"Checkbox",decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"story-container",children:story()})]};const Normal=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{children:"سلام دنیا"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{disabled:!0,children:"سلام دنیا"})]}),Checked=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{checked:!0,children:"سلام دنیا"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{checked:!0,disabled:!0,children:"سلام دنیا"})]}),__namedExportsOrder=["Normal","Checked"]},"./src/components/checkbox/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_checkbox}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),loader=__webpack_require__("./src/components/loader/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Checkbox extends react.Component{constructor(props){super(props),this.checkboxElement=void 0,this.handleChange=e=>{e.preventDefault(),e.stopPropagation(),this.props.disabled||(this.setState({checked:e.target.checked}),this.props.onChange&&this.props.onChange(e))},this.state={checked:props.checked||!1}}static getDerivedStateFromProps(nextProps,prevState){return void 0!==nextProps.checked&&nextProps.checked!==prevState.checked?{checked:nextProps.checked}:null}render(){const{children:children,disabled:disabled,className:className,onChange:onChange,checked:checked,loading:loading,...props}=this.props,checkClassName=classnames("checkbox",className,{checked:this.state.checked,disabled:this.props.disabled});return(0,jsx_runtime.jsx)("div",{className:"checkbox-container",onClick:e=>{this.checkboxElement.click()},children:(0,jsx_runtime.jsxs)("button",{className:checkClassName,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked:this.state.checked,value:!!this.state.checked+"",onChange:this.handleChange,ref:input=>this.checkboxElement=input,...props}),(0,jsx_runtime.jsx)("span",{className:"check",children:this.props.loading?(0,jsx_runtime.jsx)(loader.Z,{disabled:!0}):(0,jsx_runtime.jsx)("span",{className:"icon material-icons",children:"check"})}),children&&(0,jsx_runtime.jsx)("label",{htmlFor:props.id,children:children})]})})}}var components_checkbox=Checkbox},"./src/components/loader/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return loader}});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var loader=_ref=>{let{primary:primary,danger:danger,disabled:disabled}=_ref;const className=classnames("spinner",{"spinner-primary":primary,"spinner-danger":danger,"spinner-disabled":disabled});return(0,jsx_runtime.jsx)("span",{className:className})}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);