/*! For license information please see license-plate-index-stories.6677c6a2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[335],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/input/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return input}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const validInputTypes=["text","number","tel"];class Input extends react.Component{constructor(props){super(props),this.handleInput=e=>{e.target.value!==this.state.value&&(this.state.touched?this.setState({value:e.target.value}):this.setState({touched:!0,value:e.target.value})),this.props.onInput&&this.props.onInput(e)},this.clear=()=>{this.setState({value:"",touched:!1}),this.props.onClear&&this.props.onClear()},this.state={touched:!1,isFocused:!1,value:props.value||"",type:this.props.type||"text"}}static getDerivedStateFromProps(nextProps,prevState){return nextProps.value!==prevState.value?{value:nextProps.value}:null}handleFocus(e){this.setState({isFocused:!0}),this.props.onFocus&&this.props.onFocus(e)}handleBlur(e){this.setState({isFocused:!1}),this.props.onBlur&&this.props.onBlur(e)}render(){if(this.props.errorMessage&&!this.props.validate&&console.warn("Please provide either both errorMessage and validate or non of them."),!validInputTypes.includes(this.state.type))return"";const{errorMessage:errorMessage,forceDisplayError:forceDisplayError,validate:validate,displayClear:displayClear,title:title,pre:pre,icon:icon,ltr:ltr,onClear:onClear,className:className,extraTitle:extraTitle,small:small,onBlur:onBlur,onFocus:onFocus,disabled:disabled,inputRef:inputRef,...props}=this.props,hasError=errorMessage&&(forceDisplayError||this.state.touched&&!validate(this.state.value)),componentClassName=classnames("field-container",className,{error:hasError,small:small,ltr:ltr}),inputContainerClass=classnames("input-container",{focused:this.state.isFocused,disabled:this.props.disabled});return(0,jsx_runtime.jsxs)("div",{className:componentClassName,children:[(0,jsx_runtime.jsx)("div",{className:"title",children:extraTitle||(title?(0,jsx_runtime.jsx)("label",{htmlFor:this.props.id||"",children:title}):null)}),(0,jsx_runtime.jsxs)("div",{className:inputContainerClass,children:[(0,jsx_runtime.jsx)("input",{type:this.state.type,value:this.state.value,onInput:this.handleInput,disabled:disabled,onFocus:e=>{this.handleFocus(e)},onBlur:e=>{this.handleBlur(e)},ref:inputRef,...props}),pre&&(0,jsx_runtime.jsx)("pre",{children:pre}),!pre&&!!this.state.value&&displayClear&&!disabled&&(0,jsx_runtime.jsx)("i",{className:"material-icons clear",onClick:this.clear,children:"add_circle"}),!pre&&icon&&(0,jsx_runtime.jsx)("span",{className:"icon",children:(0,jsx_runtime.jsx)("img",{src:icon,alt:""})})]}),hasError&&(0,jsx_runtime.jsx)("span",{className:"error",children:errorMessage})]})}}var input=Input},"./src/components/license-plate/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{NewStyle:function(){return NewStyle},OldStyle:function(){return OldStyle},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/react/index.js");var license_plate=__webpack_require__("./src/components/license-plate/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),index_stories={title:"License plate",component:license_plate.Z};const Template=props=>(0,jsx_runtime.jsxs)("div",{className:"license-plates",children:[(0,jsx_runtime.jsx)("h1",{children:"Editable"}),(0,jsx_runtime.jsx)(license_plate.Z,{...props,value:void 0,editable:!0}),(0,jsx_runtime.jsx)("h1",{children:"Readonly"}),(0,jsx_runtime.jsx)(license_plate.Z,{...props,value:props.value})]}),NewStyle=Template.bind({});NewStyle.args={value:[123,45678]};const OldStyle=Template.bind({});OldStyle.args={value:[12345,678],oldStyle:!0};const __namedExportsOrder=["NewStyle","OldStyle"]},"./src/components/license-plate/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return license_plate}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),input=__webpack_require__("./src/components/input/index.tsx");var iran_flag=__webpack_require__.p+"static/media/iran-flag.54702b138b6cd9f138a758d34cc92482.svg";var iran_plate_sign=__webpack_require__.p+"static/media/iran-plate-sign.f71254a27a099f91bfd81909c65102ee.svg";var stripes=__webpack_require__.p+"static/media/stripes.539b7b2c09731bfcc27576b3f4f1c12a.svg",jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var license_plate=_ref=>{let{editable:editable,onInput:onInput,value:value,oldStyle:oldStyle,className:className,...rest}=_ref;const firstInputRef=react.useRef(null),secondInputRef=react.useRef(null),getPlateNumberPlaceholder=length=>Array.from(Array(length)).map((()=>"0")).join(""),getPlateNumberMaxValue=length=>+Array.from(Array(length)).map((()=>"9")).join(""),handlePlateNumberInput=(e,part)=>{const maxLength="one"===part?oldStyle?5:3:oldStyle?3:5,inputValue=e.currentTarget.value.substring(0,maxLength);e.currentTarget.value=inputValue;const accurateInputValue=inputValue?+inputValue:null;"one"===part?null==onInput||onInput([accurateInputValue,null==value?void 0:value[1]]):null==onInput||onInput([null==value?void 0:value[0],accurateInputValue])},ContainerClassNames=classnames("license-plate",{"old-style":oldStyle,[className]:!!className});return react.useEffect((()=>{var _value$,_value$2;const{current:firstInput}=firstInputRef,{current:secondInput}=secondInputRef,firstValue=null==value||null===(_value$=value[0])||void 0===_value$?void 0:_value$.toString(),secondValue=null==value||null===(_value$2=value[1])||void 0===_value$2?void 0:_value$2.toString();var _ref2,_ref3;firstInput&&secondInput&&(firstInput.value=null!==(_ref2=oldStyle?secondValue:firstValue)&&void 0!==_ref2?_ref2:"",secondInput.value=null!==(_ref3=oldStyle?firstValue:secondValue)&&void 0!==_ref3?_ref3:"")}),[null==value?void 0:value[0],null==value?void 0:value[1]]),(0,jsx_runtime.jsxs)("div",{...rest,className:ContainerClassNames,children:[(0,jsx_runtime.jsxs)("div",{className:"top-section",children:[oldStyle?(0,jsx_runtime.jsx)("span",{className:"plate-city",children:(0,jsx_runtime.jsx)("img",{src:stripes,alt:"Pattern"})}):(0,jsx_runtime.jsxs)("div",{className:"iran-flag",children:[(0,jsx_runtime.jsx)("img",{src:iran_flag,alt:"Iran flag",className:"flag"}),(0,jsx_runtime.jsx)("img",{src:iran_plate_sign,alt:"Iran plate sign",className:"plate-sign"})]}),(0,jsx_runtime.jsx)(input.Z,{placeholder:getPlateNumberPlaceholder(3),className:"plate-number",max:getPlateNumberMaxValue(3),onInput:e=>handlePlateNumberInput(e,oldStyle?"two":"one"),disabled:!editable,type:"number",tabIndex:oldStyle?2:1,inputRef:firstInputRef})]}),(0,jsx_runtime.jsx)("div",{className:"bottom-section",children:(0,jsx_runtime.jsx)(input.Z,{placeholder:getPlateNumberPlaceholder(5),className:"plate-number",max:getPlateNumberMaxValue(5),onInput:e=>handlePlateNumberInput(e,oldStyle?"one":"two"),disabled:!editable,type:"number",tabIndex:oldStyle?1:2,inputRef:secondInputRef})})]})}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);