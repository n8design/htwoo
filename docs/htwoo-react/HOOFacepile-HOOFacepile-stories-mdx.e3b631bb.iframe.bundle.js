"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[5216],{"./src/HOOFacepile/HOOFacepile.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template32:()=>Template32,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOFacepile_stories,extending:()=>extending});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),Common=__webpack_require__("./src/common/Common.ts"),OverflowObserver=__webpack_require__("./src/common/OverflowObserver.ts"),HOOIconOverflow=__webpack_require__("./src/HOOIconOverflow/index.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOFacepile extends react.PureComponent{LOG_SOURCE="💦HOOFacepile";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-facepile";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOFacepile",this.state={showOverflow:!1},this._overflowResizer=new OverflowObserver.T(`HOOCommandBarOR_${(0,Common.$)(10)}`),this._overflowResizer.OverflowChangedEvent=this._toggleOverflow,this._overflowContainer=react.createRef()}componentDidMount(){try{this.props.hasOverflow&&null!=this._overflowResizer&&null!=this._overflowContainer.current&&(this._overflowResizer.ObserveElement=this._overflowContainer.current)}catch(err){console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`)}}_toggleOverflow=overflow=>{this.setState({showOverflow:overflow})};render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,jsx_runtime.jsxs)("div",{"data-component":this.LOG_SOURCE,ref:this._overflowContainer,...this.props.rootElementAttributes,className,children:[this.props.children,this.props.hasOverflow&&(0,jsx_runtime.jsx)(HOOIconOverflow.A,{overflow:this.state.showOverflow,children:(0,jsx_runtime.jsx)("menu",{className:"hoo-buttonflyout"})})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOFacepile.displayName="HOOFacepile";try{HOOFacepile.displayName="HOOFacepile",HOOFacepile.__docgenInfo={description:"",displayName:"HOOFacepile",props:{hasOverflow:{defaultValue:null,description:"CURRENTLY NOT IMPLEMENTED IN HTWOO-CORE\n(Optional) Overflow enabled - default false",name:"hasOverflow",required:!1,type:{name:"boolean"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-facepile {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOFacepile/HOOFacepile.tsx#HOOFacepile"]={docgenInfo:HOOFacepile.__docgenInfo,name:"HOOFacepile",path:"src/HOOFacepile/HOOFacepile.tsx#HOOFacepile"})}catch(__react_docgen_typescript_loader_error){}var HOOAvatarPres=__webpack_require__("./src/HOOAvatarPres/index.ts"),HOOAvatar=__webpack_require__("./src/HOOAvatar/index.ts"),HOOPresence=__webpack_require__("./src/HOOPresence/index.ts");const Template32=args=>(0,jsx_runtime.jsxs)(HOOFacepile,{...args,children:[(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{size:HOOAvatar.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:HOOPresence.C.Online}),(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{size:HOOAvatar.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:HOOPresence.C.Online}),(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{size:HOOAvatar.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:HOOPresence.C.Online}),(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{size:HOOAvatar.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:HOOPresence.C.Online}),(0,jsx_runtime.jsx)(HOOAvatarPres.Ay,{size:HOOAvatar.D.Px32,imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg",imageAlt:"Placeholder Image",onClick:()=>{},status:HOOPresence.C.Online})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",img:"img",code:"code",ul:"ul",li:"li",h2:"h2",h3:"h3"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/Personas/HOOFacepile",component:HOOFacepile}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hoofacepile",children:"HOOFacepile"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/n8design/htwoo/blob/main/REACT-CHANGELOG.md",target:"_blank",rel:"nofollow noopener noreferrer",children:(0,jsx_runtime.jsx)(_components.img,{src:"https://img.shields.io/badge/%F0%9F%92%A6%20Added%20Version-1.7-blue.svg?style=for-the-badge",alt:"Available in v1.7"})})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["Pass in instances of ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOAvatarPres"})," or ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOAvatar"})," as children elements."]}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"See more information about the properties for the child components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-persona-hooavatarpres--basic",children:"HOOAvatarPres"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:HOOFacepile}),"\n","\n",(0,jsx_runtime.jsx)(_components.h3,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Basic",children:Template32.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h3,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Extending",args:{rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template32.bind({})})})]})}const basic=Template32.bind({});basic.storyName="Basic",basic.parameters={storySource:{source:'args => <HOOFacepile {...args}>\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n</HOOFacepile>'}};const extending=Template32.bind({});extending.storyName="Extending",extending.args={rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:'args => <HOOFacepile {...args}>\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n  <HOOAvatarPres size={HOOAvatarSize.Px32} imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/mug-shots/astronaut-mugshot-001.jpg" imageAlt={"Placeholder Image"} onClick={() => {}} status={HOOPresenceStatus.Online} />\n</HOOFacepile>'}};const componentMeta={title:"Components/Personas/HOOFacepile",component:HOOFacepile,tags:["stories-mdx"],includeStories:["basic","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOFacepile_stories=componentMeta,__namedExportsOrder=["Template32","basic","extending"]},"./src/HOOAvatarPres/HOOAvatarPres.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOAvatarPres});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_HOOAvatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOAvatar/index.ts"),_HOOPresence__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOPresence/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOAvatarPresState{constructor(){}}class HOOAvatarPres extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAvatarPres";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar-pres";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatarPres",this.state=new HOOAvatarPresState,null!=props.size&&(this._componentClass+=`-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOAvatar__WEBPACK_IMPORTED_MODULE_1__.A,{size:this.props.size,imageSource:this.props.imageSource,imageAlt:this.props.imageAlt,rootElementAttributes:this.props.avatarAttributes}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOPresence__WEBPACK_IMPORTED_MODULE_2__.A,{status:this.props.status,rootElementAttributes:this.props.presenceAttributes})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAvatarPres.displayName="HOOAvatarPres";try{HOOAvatarPres.displayName="HOOAvatarPres",HOOAvatarPres.__docgenInfo={description:"",displayName:"HOOAvatarPres",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},status:{defaultValue:null,description:"Presence status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar-pres {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},avatarAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOAvatar element of the component.",name:"avatarAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},presenceAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the HOOPresence element of the component.",name:"presenceAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"]={docgenInfo:HOOAvatarPres.__docgenInfo,name:"HOOAvatarPres",path:"src/HOOAvatarPres/HOOAvatarPres.tsx#HOOAvatarPres"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOAvatarPres/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _HOOAvatarPres__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOAvatarPres/HOOAvatarPres.tsx");__webpack_require__("./src/HOOAvatar/index.ts"),__webpack_require__("./src/HOOPresence/index.ts");const __WEBPACK_DEFAULT_EXPORT__=_HOOAvatarPres__WEBPACK_IMPORTED_MODULE_0__.A},"./src/HOOAvatar/HOOAvatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOAvatar,Dh:()=>HOOAvatarSize});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOAvatarSize=function(HOOAvatarSize){return HOOAvatarSize.Px16="16",HOOAvatarSize.Px24="24",HOOAvatarSize.Px32="32",HOOAvatarSize.Px40="40",HOOAvatarSize.Px48="48",HOOAvatarSize.Px64="64",HOOAvatarSize.Px72="72",HOOAvatarSize.Px96="96",HOOAvatarSize}({});class HOOAvatarState{constructor(){}}class HOOAvatar extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOAvatar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-avatar";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOAvatar",this.state=new HOOAvatarState,null!=props.size&&(this._componentClass+=` ${this._componentClass}-${props.size}`)}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:`${this._componentClass}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:this.props.imageSource,alt:this.props.imageAlt,className:"hoo-avatar-img",height:this.props.size,width:this.props.size,loading:"lazy"}),this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOAvatar.displayName="HOOAvatar";try{HOOAvatar.displayName="HOOAvatar",HOOAvatar.__docgenInfo={description:"",displayName:"HOOAvatar",props:{imageSource:{defaultValue:null,description:"The source of the avatar image",name:"imageSource",required:!0,type:{name:"string"}},imageAlt:{defaultValue:null,description:"ACCESSIBILITY: The alt text for avatar",name:"imageAlt",required:!0,type:{name:"string"}},size:{defaultValue:null,description:"(Optional) The size of the avatar - can be controled by container",name:"size",required:!1,type:{name:"enum",value:[{value:'"16"'},{value:'"24"'},{value:'"32"'},{value:'"40"'},{value:'"48"'},{value:'"64"'},{value:'"72"'},{value:'"96"'}]}},onClick:{defaultValue:null,description:"Change event handler",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLDivElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-avatar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"]={docgenInfo:HOOAvatar.__docgenInfo,name:"HOOAvatar",path:"src/HOOAvatar/HOOAvatar.tsx#HOOAvatar"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOAvatar/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,D:()=>_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Dh});var _HOOAvatar__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOAvatar/HOOAvatar.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOAvatar__WEBPACK_IMPORTED_MODULE_0__.Ay},"./src/HOOPresence/HOOPresence.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>HOOPresence,C9:()=>HOOPresenceStatus});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOPresenceStatus=function(HOOPresenceStatus){return HOOPresenceStatus.Away="away",HOOPresenceStatus.DoNotDisturb="dnd",HOOPresenceStatus.Online="online",HOOPresenceStatus.Invisible="invisible",HOOPresenceStatus.OutOfOffice="off",HOOPresenceStatus}({});class HOOPresenceState{constructor(){}}class HOOPresence extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOPresence";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-presence";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPresence",this.state=new HOOPresenceState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} is-${this.props.status} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} is-${this.props.status}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{...this._rootProps,title:this.props.status,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOPresence.displayName="HOOPresence";try{HOOPresence.displayName="HOOPresence",HOOPresence.__docgenInfo={description:"",displayName:"HOOPresence",props:{status:{defaultValue:null,description:"Presence Status",name:"status",required:!0,type:{name:"enum",value:[{value:'"away"'},{value:'"dnd"'},{value:'"online"'},{value:'"invisible"'},{value:'"off"'}]}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-presence {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPresence/HOOPresence.tsx#HOOPresence"]={docgenInfo:HOOPresence.__docgenInfo,name:"HOOPresence",path:"src/HOOPresence/HOOPresence.tsx#HOOPresence"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOPresence/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,C:()=>_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.C9});var _HOOPresence__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOPresence/HOOPresence.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOPresence__WEBPACK_IMPORTED_MODULE_0__.Ay}}]);