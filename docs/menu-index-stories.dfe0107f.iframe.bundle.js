/*! For license information please see menu-index-stories.dfe0107f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkmilingo=self.webpackChunkmilingo||[]).push([[169],{"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./src/components/menu/styles.scss":function(){},"./src/components/button/index.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return components_button}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class Button extends react.Component{render(){const{primary:primary,ghost:ghost,link:link,text:text,tiny:tiny,small:small,regular:regular,large:large,danger:danger,shouldRender:shouldRender,...props}=this.props;if(!1===shouldRender)return null;const className=classnames("milingo-btn-wrapper",props.className,{primary:primary,danger:danger,ghost:(ghost||!primary&&!link)&&!danger,link:link,text:text,tiny:tiny,small:small,regular:regular,large:large});return(0,jsx_runtime.jsx)("button",{...props,className:className})}}var components_button=Button},"./src/components/menu/avatar.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return avatar}});var react=__webpack_require__("./node_modules/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,b){d.__proto__=b}||function(d,b){for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])},extendStatics(d,b)};var VIEWBOX_CENTER_X=50,VIEWBOX_CENTER_Y=50;function Path(_a){var className=_a.className,counterClockwise=_a.counterClockwise,dashRatio=_a.dashRatio,pathRadius=_a.pathRadius,strokeWidth=_a.strokeWidth,style=_a.style;return(0,react.createElement)("path",{className:className,style:Object.assign({},style,getDashStyle({pathRadius:pathRadius,dashRatio:dashRatio,counterClockwise:counterClockwise})),d:getPathDescription({pathRadius:pathRadius,counterClockwise:counterClockwise}),strokeWidth:strokeWidth,fillOpacity:0})}function getPathDescription(_a){var pathRadius=_a.pathRadius,rotation=_a.counterClockwise?1:0;return"\n      M "+VIEWBOX_CENTER_X+","+VIEWBOX_CENTER_Y+"\n      m 0,-"+pathRadius+"\n      a "+pathRadius+","+pathRadius+" "+rotation+" 1 1 0,"+2*pathRadius+"\n      a "+pathRadius+","+pathRadius+" "+rotation+" 1 1 0,-"+2*pathRadius+"\n    "}function getDashStyle(_a){var counterClockwise=_a.counterClockwise,dashRatio=_a.dashRatio,pathRadius=_a.pathRadius,diameter=2*Math.PI*pathRadius,gapLength=(1-dashRatio)*diameter;return{strokeDasharray:diameter+"px "+diameter+"px",strokeDashoffset:(counterClockwise?-gapLength:gapLength)+"px"}}var CircularProgressbar=function(_super){function CircularProgressbar(){return null!==_super&&_super.apply(this,arguments)||this}return function __extends(d,b){function __(){this.constructor=d}extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,new __)}(CircularProgressbar,_super),CircularProgressbar.prototype.getBackgroundPadding=function(){return this.props.background?this.props.backgroundPadding:0},CircularProgressbar.prototype.getPathRadius=function(){return 50-this.props.strokeWidth/2-this.getBackgroundPadding()},CircularProgressbar.prototype.getPathRatio=function(){var _a=this.props,value=_a.value,minValue=_a.minValue,maxValue=_a.maxValue;return(Math.min(Math.max(value,minValue),maxValue)-minValue)/(maxValue-minValue)},CircularProgressbar.prototype.render=function(){var _a=this.props,circleRatio=_a.circleRatio,className=_a.className,classes=_a.classes,counterClockwise=_a.counterClockwise,styles=_a.styles,strokeWidth=_a.strokeWidth,text=_a.text,pathRadius=this.getPathRadius(),pathRatio=this.getPathRatio();return(0,react.createElement)("svg",{className:classes.root+" "+className,style:styles.root,viewBox:"0 0 100 100","data-test-id":"CircularProgressbar"},this.props.background?(0,react.createElement)("circle",{className:classes.background,style:styles.background,cx:VIEWBOX_CENTER_X,cy:VIEWBOX_CENTER_Y,r:50}):null,(0,react.createElement)(Path,{className:classes.trail,counterClockwise:counterClockwise,dashRatio:circleRatio,pathRadius:pathRadius,strokeWidth:strokeWidth,style:styles.trail}),(0,react.createElement)(Path,{className:classes.path,counterClockwise:counterClockwise,dashRatio:pathRatio*circleRatio,pathRadius:pathRadius,strokeWidth:strokeWidth,style:styles.path}),text?(0,react.createElement)("text",{className:classes.text,style:styles.text,x:VIEWBOX_CENTER_X,y:VIEWBOX_CENTER_Y},text):null)},CircularProgressbar.defaultProps={background:!1,backgroundPadding:0,circleRatio:1,classes:{root:"CircularProgressbar",trail:"CircularProgressbar-trail",path:"CircularProgressbar-path",text:"CircularProgressbar-text",background:"CircularProgressbar-background"},counterClockwise:!1,className:"",maxValue:100,minValue:0,strokeWidth:8,styles:{root:{},trail:{},path:{},text:{},background:{}},text:""},CircularProgressbar}(react.Component);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");var avatar=_ref=>{let{avatar:avatar,percentage:percentage,selected:selected,label:label,largeText:largeText,type:type,...props}=_ref;return(0,jsx_runtime.jsxs)("div",{className:classnames("menu-avatar",{"not-started":0===percentage,selected:selected,large:largeText,warning:"warning"===type}),...props,children:[(0,jsx_runtime.jsx)(CircularProgressbar,{value:percentage||0,strokeWidth:5}),(0,jsx_runtime.jsxs)("div",{className:"inner",children:[(0,jsx_runtime.jsx)("div",{className:"hover"}),avatar&&(0,jsx_runtime.jsx)("div",{className:"image",children:avatar}),label&&(0,jsx_runtime.jsx)("div",{className:"label",children:label})]})]})}},"./src/components/menu/header.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./src/components/menu/styles.scss");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"menu-header",children:[!!props.image&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-header-image",children:props.image}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-header-title",children:props.title}),!!props.action&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-header-action",children:props.action})]})},"./src/components/menu/index.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarWithLabel:function(){return AvatarWithLabel},AvatarWithLargeText:function(){return AvatarWithLargeText},AvatarWithNoImage:function(){return AvatarWithNoImage},AvatarWithTextAsAvatar:function(){return AvatarWithTextAsAvatar},HeaderWithTitle:function(){return HeaderWithTitle},HeaderWithTitleAndButton:function(){return HeaderWithTitleAndButton},HeaderWithTitleAndImage:function(){return HeaderWithTitleAndImage},Item:function(){return Item},LinkWithNotifications:function(){return LinkWithNotifications},LinkWithoutNotifications:function(){return LinkWithoutNotifications},Status:function(){return Status},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return index_stories}});__webpack_require__("./node_modules/react/index.js");var header=__webpack_require__("./src/components/menu/header.tsx"),menu_link=__webpack_require__("./src/components/menu/link.tsx"),avatar=__webpack_require__("./src/components/menu/avatar.tsx"),menu_status=__webpack_require__("./src/components/menu/status.tsx"),item=__webpack_require__("./src/components/menu/item.tsx"),components_button=__webpack_require__("./src/components/button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),index_stories={title:"Menu",decorators:[story=>(0,jsx_runtime.jsx)("div",{className:"story-container menu-story",style:{width:"400px"},children:story()})]};const HeaderWithTitle=()=>(0,jsx_runtime.jsx)(header.Z,{title:"عنوان"});HeaderWithTitle.story={name:"Header with title"};const HeaderWithTitleAndButton=()=>(0,jsx_runtime.jsx)(header.Z,{title:"عنوان",action:(0,jsx_runtime.jsx)(components_button.Z,{primary:!0,children:"عنوان دکمه"})});HeaderWithTitleAndButton.story={name:"Header with title and button"};const HeaderWithTitleAndImage=()=>(0,jsx_runtime.jsx)(header.Z,{title:"عنوان",image:(0,jsx_runtime.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+PPvPwAF+QL7zC2IewAAAABJRU5ErkJggg=="})});HeaderWithTitleAndImage.story={name:"Header with title and image"};const LinkWithoutNotifications=()=>(0,jsx_runtime.jsx)(menu_link.Z,{title:"عنوان"});LinkWithoutNotifications.story={name:"Link Without notifications"};const LinkWithNotifications=()=>(0,jsx_runtime.jsx)(menu_link.Z,{title:"عنوان",notificationCount:7});LinkWithNotifications.story={name:"Link with notifications"};const AvatarWithNoImage=()=>(0,jsx_runtime.jsxs)("div",{className:"menu-avatar-container",children:[(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:0}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:25}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:50}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:75}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:100})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0,type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25,type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50,type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75,type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100,type:"warning"})]})]});AvatarWithNoImage.story={name:"Avatar with no image"};const AvatarWithTextAsAvatar=()=>(0,jsx_runtime.jsxs)("div",{className:"menu-avatar-container",children:[(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100,avatar:"M10"})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:0,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:25,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:50,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:75,avatar:"M10"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:100,avatar:"M10"})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0,avatar:"M10",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25,avatar:"M10",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50,avatar:"M10",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75,avatar:"M10",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100,avatar:"M10",type:"warning"})]})]});AvatarWithTextAsAvatar.story={name:"Avatar with text as avatar"};const AvatarWithLabel=()=>(0,jsx_runtime.jsxs)("div",{className:"menu-avatar-container",children:[(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100,avatar:"M10",label:"رایگان"})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:0,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:25,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:50,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:75,avatar:"M10",label:"رایگان"}),(0,jsx_runtime.jsx)(avatar.Z,{selected:!0,percentage:100,avatar:"M10",label:"رایگان"})]}),(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{percentage:0,avatar:"M10",label:"رایگان",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:25,avatar:"M10",label:"رایگان",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:50,avatar:"M10",label:"رایگان",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:75,avatar:"M10",label:"رایگان",type:"warning"}),(0,jsx_runtime.jsx)(avatar.Z,{percentage:100,avatar:"M10",label:"رایگان",type:"warning"})]})]});AvatarWithLabel.story={name:"Avatar with label"};const AvatarWithLargeText=()=>(0,jsx_runtime.jsx)("div",{className:"menu-avatar-container",children:(0,jsx_runtime.jsxs)("div",{className:"column",children:[(0,jsx_runtime.jsx)(avatar.Z,{largeText:!0,percentage:0,avatar:"۳"}),(0,jsx_runtime.jsx)(avatar.Z,{largeText:!0,percentage:25,avatar:"۳"}),(0,jsx_runtime.jsx)(avatar.Z,{largeText:!0,percentage:50,avatar:"۳"}),(0,jsx_runtime.jsx)(avatar.Z,{largeText:!0,percentage:75,avatar:"۳"}),(0,jsx_runtime.jsx)(avatar.Z,{largeText:!0,percentage:100,avatar:"۳"})]})});AvatarWithLargeText.story={name:"Avatar with large text"};const Status=()=>(0,jsx_runtime.jsx)("div",{className:"menu-status-container",children:(0,jsx_runtime.jsx)(menu_status.Z,{title:"عنوان"})}),Item=()=>(0,jsx_runtime.jsxs)("div",{className:"menu-item-container",children:[(0,jsx_runtime.jsx)(item.Z,{avatar:(0,jsx_runtime.jsx)(avatar.Z,{avatar:"M10"}),title:"M10",description:"کدر صفوی"}),(0,jsx_runtime.jsx)(item.Z,{avatar:(0,jsx_runtime.jsx)(avatar.Z,{avatar:"M10"}),title:"M10",description:"کدر صفوی",time:"۱۵:۳۰"}),(0,jsx_runtime.jsx)(item.Z,{title:"M10",description:"کدر صفوی",time:"۱۵:۳۰"})]}),__namedExportsOrder=["HeaderWithTitle","HeaderWithTitleAndButton","HeaderWithTitleAndImage","LinkWithoutNotifications","LinkWithNotifications","AvatarWithNoImage","AvatarWithTextAsAvatar","AvatarWithLabel","AvatarWithLargeText","Status","Item"]},"./src/components/menu/item.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=_ref=>{let{avatar:avatar,description:description,selected:selected,title:title,time:time,...props}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1__("menu-item",{selected:selected,"has-avatar":!!avatar}),...props,children:[avatar&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"column avatar-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-item-avatar",children:avatar})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"column data-container",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-item-title",children:title}),description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-item-description",children:description})]}),time&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"column time-container",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"menu-item-time",children:time})})]})}},"./src/components/menu/link.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./src/components/menu/styles.scss"),__webpack_require__("./node_modules/react/jsx-runtime.js"));__webpack_exports__.Z=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1__("menu-link",{selected:props.selected}),children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"menu-link-title",children:props.title}),props.notificationCount&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{className:"menu-link-notification-count",children:props.notificationCount})]})},"./src/components/menu/status.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.Z=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"menu-status",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{className:"menu-status-title",children:props.title})})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":function(__unused_webpack_module,exports,__webpack_require__){"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":function(module,__unused_webpack_exports,__webpack_require__){"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);