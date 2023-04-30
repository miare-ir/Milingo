/*! For license information please see select-index-stories.b2268ecf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[249],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/select/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Normal:function(){return Normal},With5Rows:function(){return With5Rows},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/select/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const options=[{value:"1",label:"گزینه ۱"},{value:"2",label:"گزینه ۲"},{value:"3",label:"گزینه ۳"},{value:"4",label:"گزینه ۴"},{value:"5",label:"گزینه ۵"}];__webpack_exports__.default={title:"Select",decorators:[story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"story-container",children:story()})]};const Normal=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{style:{width:"350px",maxWidth:"100%",backgroundColor:"#ffffff",padding:"40px"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{name:"test1",options:options,errorMessage:".انتخاب این مورد اجباری است",errorMessagePosition:"bottom"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("br",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{name:"test2",value:{value:"2",label:"گزینه ۲"},options:options})]}),With5Rows=()=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{width:"350px",maxWidth:"100%",backgroundColor:"#ffffff",padding:"40px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.Z,{name:"test1",options:options,showedItem:5})});With5Rows.story={name:"With 5 rows"};const __namedExportsOrder=["Normal","With5Rows"]},"./src/components/select/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_select}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js");var arrow_white=__webpack_require__.p+"static/media/arrow-white.cfbaea7155056117498e6352ad7e0099.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class SelectComponent extends react.Component{constructor(props){super(props),this.selectElement=void 0,this.node=void 0,this.state={selected:props.value||{label:void 0===props.placeholder?"انتخاب ...":props.placeholder,value:""},isOpen:!1,mounted:!0},this.handleDocumentClick=this.handleDocumentClick.bind(this),this.handleChange=this.handleChange.bind(this)}UNSAFE_componentWillReceiveProps(newProps){newProps.value&&newProps.value.value!==this.state.selected.value?(this.setState({selected:{value:newProps.value.value,label:newProps.value.label}}),this.selectElement.value=newProps.value.value):newProps.value||this.setState({selected:{label:void 0===newProps.placeholder?"انتخاب ...":newProps.placeholder,value:""}})}componentDidMount(){document.addEventListener("click",this.handleDocumentClick.bind(this),!1),document.addEventListener("touchend",this.handleDocumentClick.bind(this),!1),this.selectElement.value=this.props.value&&this.props.value.value}componentWillUnmount(){this.setState({mounted:!1}),document.removeEventListener("click",this.handleDocumentClick.bind(this),!1),document.removeEventListener("touchend",this.handleDocumentClick.bind(this),!1)}handleMouseDown(event){var _window$document$acti;null===(_window$document$acti=window.document.activeElement)||void 0===_window$document$acti||_window$document$acti.blur(),this.props.onFocus&&"function"==typeof this.props.onFocus&&this.props.onFocus(this.state.isOpen),"mousedown"===event.type&&0!==event.button||(event.stopPropagation(),event.preventDefault(),this.props.disabled||this.setState({isOpen:!this.state.isOpen}))}setValue(value,label){const newState={selected:{value:value,label:label},isOpen:!1};this.setState(newState),this.handleChange(newState),this.selectElement.value=value}handleChange(newState){newState.selected!==this.state.selected&&this.props.onChange&&this.props.onChange(newState.selected)}renderOption(option){const optionClass=classnames("select-option",{[option.className]:!!option.className,"is-selected":option.value===this.state.selected.value});let value=option.value;void 0===value&&(value=option.label||option);const label=option.label||option.value||option;return(0,jsx_runtime.jsx)("div",{className:optionClass,onMouseDown:this.setValue.bind(this,value,label),onClick:this.setValue.bind(this,value,label),children:label},value)}renderSelectsOption(){return this.props.options?this.props.options.map((option=>(0,jsx_runtime.jsx)("option",{value:option.value,children:option.label},option.value))):null}buildMenu(){const{options:options}=this.props,ops=options&&options.map((option=>this.renderOption(option)));return ops&&ops.length?ops:(0,jsx_runtime.jsx)("div",{className:"select-noresults",children:"گزینه پیدا نشد!"})}handleDocumentClick(event){var _this$node;this.state.mounted&&(null!==(_this$node=this.node)&&void 0!==_this$node&&_this$node.contains(event.target)||this.state.isOpen&&this.setState({isOpen:!1}))}render(){const{className:className,showedItem:showedItem,errorMessage:errorMessage,errorMessagePosition:errorMessagePosition}=this.props,placeHolderValue="string"==typeof this.state.selected?this.state.selected:this.state.selected.label,selectClass=classnames("select-root",className,{"is-open":this.state.isOpen}),controlClass=classnames("select-control",{"select-disabled":this.props.disabled}),menu=this.state.isOpen?(0,jsx_runtime.jsx)("div",{className:"select-menu",style:showedItem&&{maxHeight:40*showedItem+16},children:this.buildMenu()}):null;return(0,jsx_runtime.jsxs)("div",{className:selectClass,ref:node=>this.node=node,children:[errorMessage&&(!errorMessagePosition||"top"===errorMessagePosition)&&(0,jsx_runtime.jsx)("span",{className:"error top",children:errorMessage}),(0,jsx_runtime.jsxs)("div",{tabIndex:0,className:controlClass,onMouseDown:this.handleMouseDown.bind(this),onTouchEnd:this.handleMouseDown.bind(this),children:[(0,jsx_runtime.jsx)("div",{className:"select-placeholder",children:placeHolderValue}),(0,jsx_runtime.jsx)("div",{className:"select-arrow",children:(0,jsx_runtime.jsx)("img",{src:arrow_white,className:"arrow-icon"})})]}),menu,(0,jsx_runtime.jsxs)("select",{name:this.props.name,ref:select=>this.selectElement=select,hidden:!0,children:[(0,jsx_runtime.jsx)("option",{value:"null",children:"default"}),this.renderSelectsOption()]}),errorMessage&&"bottom"===errorMessagePosition&&(0,jsx_runtime.jsx)("span",{className:"error bottom",children:errorMessage})]})}}var components_select=SelectComponent},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);