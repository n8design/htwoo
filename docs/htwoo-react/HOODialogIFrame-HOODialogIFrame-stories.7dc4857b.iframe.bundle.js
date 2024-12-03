/*! For license information please see HOODialogIFrame-HOODialogIFrame-stories.7dc4857b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[270,418,3342,3694,3746,5142,5386,5518,7470,8878,8910],{"./src/HOODialogIFrame/HOODialogIFrame.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{$169Ratio:()=>$169Ratio,$34Ratio:()=>$34Ratio,Basic:()=>Basic,Extending:()=>Extending,SquareRatio:()=>SquareRatio,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOODialogIFrame/HOODialogIFrame.tsx");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__.Ay,{...args}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Dialogs/HOODialogIFrame",component:_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__.Ay},Basic={render:Template.bind({}),name:"Basic",args:{src:"https://lab.n8d.studio/htwoo/"}},$34Ratio={render:Template.bind({}),name:"3:4 Ratio",args:{src:"https://lab.n8d.studio/htwoo/",ratio:_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__.eg["3by4"]}},SquareRatio={render:Template.bind({}),name:"Square Ratio",args:{src:"https://lab.n8d.studio/htwoo/",ratio:_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__.eg.squared}},$169Ratio={render:Template.bind({}),name:"16:9 Ratio",args:{src:"https://lab.n8d.studio/htwoo/",ratio:_HOODialogIFrame__WEBPACK_IMPORTED_MODULE_1__.eg["16by9"]}},Extending={render:Template.bind({}),name:"Extending",args:{src:"https://lab.n8d.studio/htwoo/",rootElementAttributes:{style:{backgroundColor:"pink"}}}},__namedExportsOrder=["Basic","$34Ratio","SquareRatio","$169Ratio","Extending"];Basic.parameters={...Basic.parameters,docs:{...Basic.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Basic",\n  args: {\n    src: "https://lab.n8d.studio/htwoo/"\n  }\n}',...Basic.parameters?.docs?.source}}},$34Ratio.parameters={...$34Ratio.parameters,docs:{...$34Ratio.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "3:4 Ratio",\n  args: {\n    src: "https://lab.n8d.studio/htwoo/",\n    ratio: HOOIFrameRatio["3by4"]\n  }\n}',...$34Ratio.parameters?.docs?.source}}},SquareRatio.parameters={...SquareRatio.parameters,docs:{...SquareRatio.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Square Ratio",\n  args: {\n    src: "https://lab.n8d.studio/htwoo/",\n    ratio: HOOIFrameRatio.squared\n  }\n}',...SquareRatio.parameters?.docs?.source}}},$169Ratio.parameters={...$169Ratio.parameters,docs:{...$169Ratio.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "16:9 Ratio",\n  args: {\n    src: "https://lab.n8d.studio/htwoo/",\n    ratio: HOOIFrameRatio["16by9"]\n  }\n}',...$169Ratio.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: {\n    src: "https://lab.n8d.studio/htwoo/",\n    rootElementAttributes: {\n      style: {\n        backgroundColor: "pink"\n      }\n    }\n  }\n}',...Extending.parameters?.docs?.source}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/HOODialogIFrame/HOODialogIFrame.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>HOODialogIFrame,eg:()=>HOOIFrameRatio});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),HOOIFrameRatio=function(HOOIFrameRatio){return HOOIFrameRatio["3by4"]="3by4",HOOIFrameRatio.squared="squared",HOOIFrameRatio["16by9"]="16by9",HOOIFrameRatio}({});class HOODialogIFrameState{constructor(){}}class HOODialogIFrame extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOODialogIFrame";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-dlg-iframe";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOODialogIFrame",this.state=new HOODialogIFrameState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const ratio=this.props.ratio?`ratio-${this.props.ratio}`:"",className=this.props.rootElementAttributes?.className?`${this._componentClass} ${ratio} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${ratio}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("iframe",{...this._rootProps,title:this.props.src,...this.props.rootElementAttributes,className,ref:this.props.iFrameRef,src:this.props.src})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}try{HOODialogIFrame.displayName="HOODialogIFrame",HOODialogIFrame.__docgenInfo={description:"",displayName:"HOODialogIFrame",props:{src:{defaultValue:null,description:"Source for iFrame",name:"src",required:!0,type:{name:"string"}},ratio:{defaultValue:null,description:"Ratio of iFrame",name:"ratio",required:!1,type:{name:"enum",value:[{value:'"3by4"'},{value:'"squared"'},{value:'"16by9"'}]}},iFrameRef:{defaultValue:null,description:"(Optional) React Ref element",name:"iFrameRef",required:!1,type:{name:"RefObject<HTMLIFrameElement>"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLIFrameElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-dlg-iframe {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLIFrameElement> & IframeHTMLAttributes<HTMLIFrameElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOODialogIFrame/HOODialogIFrame.tsx#HOODialogIFrame"]={docgenInfo:HOODialogIFrame.__docgenInfo,name:"HOODialogIFrame",path:"src/HOODialogIFrame/HOODialogIFrame.tsx#HOODialogIFrame"})}catch(__react_docgen_typescript_loader_error){}}}]);