"use strict";(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[8659],{"./src/HOOButton/HOOButton.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Extending:()=>Extending,Icon:()=>Icon,Primary:()=>Primary,PrimaryCompound:()=>PrimaryCompound,PrimaryDisabled:()=>PrimaryDisabled,PrimaryHyperlink:()=>PrimaryHyperlink,PrimaryLeftIcon:()=>PrimaryLeftIcon,PrimaryRightIcon:()=>PrimaryRightIcon,Standard:()=>Standard,StandardCompound:()=>StandardCompound,StandardHyperlink:()=>StandardHyperlink,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_HOOButton__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/HOOButton/HOOButton.tsx"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOButton__WEBPACK_IMPORTED_MODULE_1__.A,{...args}),__WEBPACK_DEFAULT_EXPORT__={title:"Components/Buttons/HOOButton",component:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.A,argTypes:{type:{options:[0,1,2,3,4,5,6],control:{type:"select",labels:["Icon","Primary","Standard","HyperlinkPrimary","HyperlinkStandard","CompoundPrimary","CompoundStandard"]}}}},Primary={render:Template.bind({}),name:"Primary",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Primary,label:"Button",onClick:()=>{alert("Clicked")}})},PrimaryLeftIcon={render:Template.bind({}),name:"Primary: Left Icon",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Primary,label:"Button",iconName:"hoo-icon-arrow-left",onClick:()=>{alert("Clicked")}})},PrimaryRightIcon={render:Template.bind({}),name:"Primary: Right Icon",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Primary,label:"Button",iconRight:"hoo-icon-arrow-right",onClick:()=>{alert("Clicked")}})},PrimaryDisabled={render:Template.bind({}),name:"Primary: Disabled",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Primary,disabled:!0,label:"Button",onClick:()=>{alert("Clicked")}})},Standard={render:Template.bind({}),name:"Standard",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Standard,label:"Button",onClick:()=>{alert("Clicked")}})},Icon={render:Template.bind({}),name:"Icon",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Icon,iconName:"hoo-icon-close",onClick:()=>{alert("Clicked")}})},PrimaryHyperlink={render:Template.bind({}),name:"Primary: Hyperlink",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.HyperlinkPrimary,label:"Button",href:"https://google.com"})},StandardHyperlink={render:Template.bind({}),name:"Standard: Hyperlink",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.HyperlinkStandard,label:"Button",href:"https://google.com"})},PrimaryCompound={render:Template.bind({}),name:"Primary: Compound",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.CompoundPrimary,label:"Button",description:"Compound button description",onClick:()=>{alert("Clicked")}})},StandardCompound={render:Template.bind({}),name:"Standard: Compound",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.CompoundStandard,label:"Button",description:"Compound button description",onClick:()=>{alert("Clicked")}})},Extending={render:Template.bind({}),name:"Extending",args:(_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.initSymbols(),{type:_HOOButton__WEBPACK_IMPORTED_MODULE_1__.v.Standard,label:"Button",onClick:()=>{alert("Clicked")},rootElementAttributes:{style:{backgroundColor:"pink"}}})},__namedExportsOrder=["Primary","PrimaryLeftIcon","PrimaryRightIcon","PrimaryDisabled","Standard","Icon","PrimaryHyperlink","StandardHyperlink","PrimaryCompound","StandardCompound","Extending"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Primary,\n      label: "Button",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...Primary.parameters?.docs?.source}}},PrimaryLeftIcon.parameters={...PrimaryLeftIcon.parameters,docs:{...PrimaryLeftIcon.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Left Icon",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Primary,\n      label: "Button",\n      iconName: "hoo-icon-arrow-left",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...PrimaryLeftIcon.parameters?.docs?.source}}},PrimaryRightIcon.parameters={...PrimaryRightIcon.parameters,docs:{...PrimaryRightIcon.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Right Icon",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Primary,\n      label: "Button",\n      iconRight: "hoo-icon-arrow-right",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...PrimaryRightIcon.parameters?.docs?.source}}},PrimaryDisabled.parameters={...PrimaryDisabled.parameters,docs:{...PrimaryDisabled.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Disabled",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Primary,\n      disabled: true,\n      label: "Button",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...PrimaryDisabled.parameters?.docs?.source}}},Standard.parameters={...Standard.parameters,docs:{...Standard.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Standard",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Standard,\n      label: "Button",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...Standard.parameters?.docs?.source}}},Icon.parameters={...Icon.parameters,docs:{...Icon.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Icon",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Icon,\n      iconName: "hoo-icon-close",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...Icon.parameters?.docs?.source}}},PrimaryHyperlink.parameters={...PrimaryHyperlink.parameters,docs:{...PrimaryHyperlink.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Hyperlink",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.HyperlinkPrimary,\n      label: "Button",\n      href: "https://google.com"\n    };\n  }()\n}',...PrimaryHyperlink.parameters?.docs?.source}}},StandardHyperlink.parameters={...StandardHyperlink.parameters,docs:{...StandardHyperlink.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Standard: Hyperlink",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.HyperlinkStandard,\n      label: "Button",\n      href: "https://google.com"\n    };\n  }()\n}',...StandardHyperlink.parameters?.docs?.source}}},PrimaryCompound.parameters={...PrimaryCompound.parameters,docs:{...PrimaryCompound.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Primary: Compound",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.CompoundPrimary,\n      label: "Button",\n      description: "Compound button description",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...PrimaryCompound.parameters?.docs?.source}}},StandardCompound.parameters={...StandardCompound.parameters,docs:{...StandardCompound.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Standard: Compound",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.CompoundStandard,\n      label: "Button",\n      description: "Compound button description",\n      onClick: () => {\n        alert("Clicked");\n      }\n    };\n  }()\n}',...StandardCompound.parameters?.docs?.source}}},Extending.parameters={...Extending.parameters,docs:{...Extending.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: "Extending",\n  args: function () {\n    symset.initSymbols();\n    return {\n      type: HOOButtonType.Standard,\n      label: "Button",\n      onClick: () => {\n        alert("Clicked");\n      },\n      rootElementAttributes: {\n        style: {\n          backgroundColor: "pink"\n        }\n      }\n    };\n  }()\n}',...Extending.parameters?.docs?.source}}}},"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOButton,v:()=>HOOButtonType});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButton extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case 0:this._componentClass=`${this._componentClass}icon`;break;case 1:this._componentClass=`${this._componentClass}-primary`;break;case 3:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case 4:this._hyperlinkType=!0;break;case 5:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case 6:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state={}}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey),this.props.iconTitle&&(this._rootProps.title=this.props.iconTitle);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconName,this.props.iconTitle||""):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconRight,this.props.iconRightTitle):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__.A,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),0===this.props.type&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_3__.A,{iconSVG}),(!this.props.label||0===this.props.type&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconTitle:{defaultValue:null,description:"(Optional) button icon title",name:"iconTitle",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},iconRightTitle:{defaultValue:null,description:"(Optional) button icon title for right side.",name:"iconRightTitle",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/SymbolSet.ts");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_2__.G.Icon(this.props.iconName,this.props.title||"<span/>");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.113b9996.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){try{const iconSVG=this._symbolSetDictionary[iconName]?.replace("%title%",iconTitle);return iconSVG||"<svg />"}catch(err){return console.error(`${this.LOG_SOURCE} (Icon) - ${err}`),null}}IconBase64(iconName){try{const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}catch(err){return console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`),null}}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}}}]);