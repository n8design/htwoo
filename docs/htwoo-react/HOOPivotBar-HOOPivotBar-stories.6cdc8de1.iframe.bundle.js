/*! For license information please see HOOPivotBar-HOOPivotBar-stories.6cdc8de1.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[270,418,3342,3694,3746,5142,5338,5518,7470,8878,8910],{"./src/HOOPivotBar/HOOPivotBar.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Basic:()=>Basic,Extending:()=>Extending,Overflow:()=>Overflow,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("storybook/internal/preview-api"),_HOOPivotBar__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOPivotBar/HOOPivotBar.tsx");const options=[{key:1,text:"Menu 1"},{key:2,text:"Menu 2"},{key:3,text:"Menu 3"},{key:4,text:"Menu 4"},{key:5,text:"Menu 5"}],Template=args=>{const[_,updateArgs]=(0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_1__.useArgs)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOPivotBar__WEBPACK_IMPORTED_MODULE_2__.A,{...args,onClick:(ev,key)=>{args.selectedKey=key,updateArgs({...args})}})},__WEBPACK_DEFAULT_EXPORT__={title:"Components/Menus/HOOPivotBar",component:_HOOPivotBar__WEBPACK_IMPORTED_MODULE_2__.A},Basic={render:Template.bind({}),name:"Basic",args:{selectedKey:1,pivotItems:options,hasOverflow:!1}},Overflow={render:Template.bind({}),name:"Overflow",args:{selectedKey:1,pivotItems:options,hasOverflow:!0}},Extending={render:Template.bind({}),name:"Extending",args:{selectedKey:1,pivotItems:options,hasOverflow:!1,rootElementAttributes:{style:{backgroundColor:"mintcream"}}}},__namedExportsOrder=["Basic","Overflow","Extending"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Basic",\n  args: {\n    selectedKey: 1,\n    pivotItems: options,\n    hasOverflow: false\n  }\n}',...Basic.parameters?.docs?.source}}},Overflow.parameters={...Overflow.parameters,docs:{...Overflow.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Overflow",\n  args: {\n    selectedKey: 1,\n    pivotItems: options,\n    hasOverflow: true\n  }\n}',...Overflow.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: {\n    selectedKey: 1,\n    pivotItems: options,\n    hasOverflow: false,\n    rootElementAttributes: {\n      style: {\n        backgroundColor: "mintcream"\n      }\n    }\n  }\n}',...Extending.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/HOOPivotBar/HOOPivotBar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOPivotBar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js");const src_HOOPivotButton=__webpack_require__("./src/HOOPivotButton/HOOPivotButton.tsx").A;var HOOIconOverflow=__webpack_require__("./src/HOOIconOverflow/index.ts"),OverflowObserver=__webpack_require__("./src/common/OverflowObserver.ts"),Common=__webpack_require__("./src/common/Common.ts");class HOOPivotBar extends react.PureComponent{LOG_SOURCE="💦HOOPivotBar";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-pivotbar";_overflowResizer;_overflowContainer;constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPivotBar",this.state={showOverflow:!1},this._overflowResizer=new OverflowObserver.T(`HOOPivotBarOR_${(0,Common.$)(10)}`),this._overflowResizer.OverflowChangedEvent=this._toggleOverflow,this._overflowContainer=react.createRef()}_toggleOverflow=overflow=>{this.setState({showOverflow:overflow})};componentDidMount(){try{this.props.hasOverflow&&null!=this._overflowResizer&&null!=this._overflowContainer.current&&(this._overflowResizer.ObserveElement=this._overflowContainer.current)}catch(err){console.error(`${this.LOG_SOURCE} (componentDidMount) - ${err}`)}}_renderPivotItems(){let retVal=null;const pivotButtonAttributes={...this.props.pivotButtonAttributes,role:"menuitem"};try{this.props.pivotItems&&(retVal=this.props.pivotItems.map(((pi,index)=>{const isSelected=pi.key===this.props.selectedKey;return(0,jsx_runtime.jsx)(src_HOOPivotButton,{label:pi.text,isActive:isSelected,onClick:ev=>{this.props.onClick(ev,pi.key)},rootElementAttributes:pivotButtonAttributes},pi.key)})))}catch(err){console.error(`${this.LOG_SOURCE} (_renderPivotItems) - ${err}`)}return retVal}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.hasOverflow&&(className+=" has-overflow"),(0,jsx_runtime.jsxs)("div",{...this._rootProps,...this.props.rootElementAttributes,className,role:"menubar",children:[!this.props.hasOverflow&&this._renderPivotItems(),this.props.hasOverflow&&(0,jsx_runtime.jsxs)("div",{ref:this._overflowContainer,className:""+(this.props.hasOverflow?"hoo-overflow":""),children:[this._renderPivotItems(),(0,jsx_runtime.jsx)(HOOIconOverflow.A,{overflow:this.state.showOverflow,rootElementAttributes:{role:"menuitem"},children:(0,jsx_runtime.jsx)("menu",{className:"hoo-buttonflyout"})})]})]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOPivotBar.displayName="HOOPivotBar",HOOPivotBar.__docgenInfo={description:"",displayName:"HOOPivotBar",props:{selectedKey:{defaultValue:null,description:"Key of currently selected Pivot Item",name:"selectedKey",required:!0,type:{name:"string | number"}},pivotItems:{defaultValue:null,description:"Menu items to render in Pivot Bar",name:"pivotItems",required:!0,type:{name:"IHOOPivotItem[]"}},onClick:{defaultValue:null,description:"Pivot Item click event handler.",name:"onClick",required:!0,type:{name:"(ev: MouseEvent<HTMLButtonElement, MouseEvent>, key: string | number) => void"}},hasOverflow:{defaultValue:null,description:"(Optional) Overflow enabled - default false",name:"hasOverflow",required:!1,type:{name:"boolean"}},pivotButtonAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to all Pivot Buttons.\nClass names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}",name:"pivotButtonAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLMenuElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-pivotbar {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLDivElement> & HTMLAttributes<HTMLDivElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPivotBar/HOOPivotBar.tsx#HOOPivotBar"]={docgenInfo:HOOPivotBar.__docgenInfo,name:"HOOPivotBar",path:"src/HOOPivotBar/HOOPivotBar.tsx#HOOPivotBar"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOPivotButton/HOOPivotButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOPivotButton});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js");class HOOPivotButtonState{constructor(){}}class HOOPivotButton extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOPivotButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button-pivot";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOPivotButton",this.state=new HOOPivotButtonState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey.toString());let className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return this.props.isActive&&(className+=" is-active"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{...this._rootProps,...this.props.rootElementAttributes,className,onClick:this.props.onClick,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-pivot-inner",title:this.props.label,children:this.props.label})})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOOPivotButton.displayName="HOOPivotButton",HOOPivotButton.__docgenInfo={description:"",displayName:"HOOPivotButton",props:{label:{defaultValue:null,description:"Pivot Button label",name:"label",required:!0,type:{name:"string"}},isActive:{defaultValue:null,description:"Is Pivot Button active",name:"isActive",required:!0,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLButtonElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-pivot {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLButtonElement> & ButtonHTMLAttributes<HTMLButtonElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOPivotButton/HOOPivotButton.tsx#HOOPivotButton"]={docgenInfo:HOOPivotButton.__docgenInfo,name:"HOOPivotButton",path:"src/HOOPivotButton/HOOPivotButton.tsx#HOOPivotButton"})}catch(__react_docgen_typescript_loader_error){}}}]);