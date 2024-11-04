/*! For license information please see HOOTeamsSplashCard-HOOTeamsSplashCard-stories-mdx.4bf10783.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_n8d_htwoo_react=self.webpackChunk_n8d_htwoo_react||[]).push([[2744],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/HOOTeamsSplashCard/HOOTeamsSplashCard.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,basic:()=>basic,default:()=>HOOTeamsSplashCard_stories,extending:()=>extending});var react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),addon_docs_dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOTeamsSplashCardState{constructor(){}}class HOOTeamsSplashCard extends react.PureComponent{LOG_SOURCE="💦HOOTeamsSplashCard";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-splashcard";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOTeamsSplashCard",this.state=new HOOTeamsSplashCardState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,jsx_runtime.jsx)("article",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOTeamsSplashCard.displayName="HOOTeamsSplashCard";try{HOOTeamsSplashCard.displayName="HOOTeamsSplashCard",HOOTeamsSplashCard.__docgenInfo={description:"",displayName:"HOOTeamsSplashCard",props:{rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-splashcard {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOTeamsSplashCard/HOOTeamsSplashCard.tsx#HOOTeamsSplashCard"]={docgenInfo:HOOTeamsSplashCard.__docgenInfo,name:"HOOTeamsSplashCard",path:"src/HOOTeamsSplashCard/HOOTeamsSplashCard.tsx#HOOTeamsSplashCard"})}catch(__react_docgen_typescript_loader_error){}const src_HOOSplashCardHeader=__webpack_require__("./src/HOOSplashCardHeader/HOOSplashCardHeader.tsx").A;const src_HOOSplashCardTitle=__webpack_require__("./src/HOOSplashCardTitle/HOOSplashCardTitle.tsx").A;const src_HOOSplashCardDesc=__webpack_require__("./src/HOOSplashCardDesc/HOOSplashCardDesc.tsx").A;const src_HOOSplashCardFooter=__webpack_require__("./src/HOOSplashCardFooter/HOOSplashCardFooter.tsx").A;var HOOButton=__webpack_require__("./src/HOOButton/index.ts");const Template=args=>(0,jsx_runtime.jsxs)(HOOTeamsSplashCard,{...args,children:[(0,jsx_runtime.jsx)(src_HOOSplashCardHeader,{imageSource:"https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg",imageAlt:"Kitten"}),(0,jsx_runtime.jsx)(src_HOOSplashCardTitle,{title:"My Teams Splash Card"}),(0,jsx_runtime.jsx)(src_HOOSplashCardDesc,{description:"My Teams Splash Card Description"}),(0,jsx_runtime.jsxs)(src_HOOSplashCardFooter,{children:[(0,jsx_runtime.jsx)(HOOButton.A,{type:HOOButton.v.Primary,label:"Create Something",onClick:()=>{alert("Clicked")}}),(0,jsx_runtime.jsx)(HOOButton.A,{type:HOOButton.v.Standard,label:"Call to Action",onClick:()=>{alert("Clicked")}})]})]});function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",ul:"ul",li:"li",a:"a"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(addon_docs_dist.W8,{title:"Components/Cards/Splash Card/HOOTeamsSplashCard",component:HOOTeamsSplashCard}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"hooteamssplashcard",children:"HOOTeamsSplashCard"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["This example shows using a ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOSplashCardHeader"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOSplashCardTitle"}),", ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOSplashCardDesc"}),", and ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOSplashCardFooter"})," (",(0,jsx_runtime.jsx)(_components.code,{children:"HOOButton"}),") components as the children of the ",(0,jsx_runtime.jsx)(_components.code,{children:"HOOTeamsSplashCard"})," component."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"children",children:"Children"}),"\n",(0,jsx_runtime.jsx)(_components.p,{children:"See more information about the properties for the sub components:"}),"\n",(0,jsx_runtime.jsxs)(_components.ul,{children:["\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-card-elements-hoosplashcardheader--basic",children:"HOOSplashCardHeader"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-card-elements-hoosplashcardtitle--basic",children:"HOOSplashCardTitle"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-card-elements-hoosplashcarddesc--basic",children:"HOOSplashCardDesc"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/molecules-card-elements-hoosplashcardfooter--basic",children:"HOOSplashCardFooter"})}),"\n",(0,jsx_runtime.jsx)(_components.li,{children:(0,jsx_runtime.jsx)(_components.a,{href:"?path=/docs/atoms-buttons-hoobutton--primary",children:"HOOButton"})}),"\n"]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"arguments",children:"Arguments"}),"\n",(0,jsx_runtime.jsx)(dist.ov,{of:HOOTeamsSplashCard}),"\n","\n",(0,jsx_runtime.jsx)(_components.h2,{id:"basic",children:"Basic"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Basic",args:{},children:Template.bind({})})}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"extending",children:"Extending"}),"\n",(0,jsx_runtime.jsx)(addon_docs_dist.Hl,{children:(0,jsx_runtime.jsx)(addon_docs_dist.gG,{name:"Extending",args:{rootElementAttributes:{style:{backgroundColor:"pink"}}},children:Template.bind({})})})]})}const basic=Template.bind({});basic.storyName="Basic",basic.args={},basic.parameters={storySource:{source:'args => <HOOTeamsSplashCard {...args}>\n  <HOOSplashCardHeader imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg" imageAlt="Kitten" />\n  <HOOSplashCardTitle title="My Teams Splash Card" />\n  <HOOSplashCardDesc description="My Teams Splash Card Description" />\n  <HOOSplashCardFooter>\n    <HOOButton type={HOOButtonType.Primary} label="Create Something" onClick={() => {\n      alert("Clicked");\n    }} />\n    <HOOButton type={HOOButtonType.Standard} label="Call to Action" onClick={() => {\n      alert("Clicked");\n    }} />\n  </HOOSplashCardFooter>\n</HOOTeamsSplashCard>'}};const extending=Template.bind({});extending.storyName="Extending",extending.args={rootElementAttributes:{style:{backgroundColor:"pink"}}},extending.parameters={storySource:{source:'args => <HOOTeamsSplashCard {...args}>\n  <HOOSplashCardHeader imageSource="https://lab.n8d.studio/htwoo/htwoo-core/images/card-images/coffee-image.jpg" imageAlt="Kitten" />\n  <HOOSplashCardTitle title="My Teams Splash Card" />\n  <HOOSplashCardDesc description="My Teams Splash Card Description" />\n  <HOOSplashCardFooter>\n    <HOOButton type={HOOButtonType.Primary} label="Create Something" onClick={() => {\n      alert("Clicked");\n    }} />\n    <HOOButton type={HOOButtonType.Standard} label="Call to Action" onClick={() => {\n      alert("Clicked");\n    }} />\n  </HOOSplashCardFooter>\n</HOOTeamsSplashCard>'}};const componentMeta={title:"Components/Cards/Splash Card/HOOTeamsSplashCard",component:HOOTeamsSplashCard,tags:["stories-mdx"],includeStories:["basic","extending"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const HOOTeamsSplashCard_stories=componentMeta,__namedExportsOrder=["Template","basic","extending"]},"./src/HOOButton/HOOButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOButton,v:()=>HOOButtonType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/HOOIcon/HOOIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");let HOOButtonType=function(HOOButtonType){return HOOButtonType[HOOButtonType.Icon=0]="Icon",HOOButtonType[HOOButtonType.Primary=1]="Primary",HOOButtonType[HOOButtonType.Standard=2]="Standard",HOOButtonType[HOOButtonType.HyperlinkPrimary=3]="HyperlinkPrimary",HOOButtonType[HOOButtonType.HyperlinkStandard=4]="HyperlinkStandard",HOOButtonType[HOOButtonType.CompoundPrimary=5]="CompoundPrimary",HOOButtonType[HOOButtonType.CompoundStandard=6]="CompoundStandard",HOOButtonType}({});class HOOButton extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOButton";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-button";_hyperlinkType=!1;_compoundType=!1;constructor(props){switch(super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOButton",props.type){case HOOButtonType.Icon:this._componentClass=`${this._componentClass}icon`;break;case HOOButtonType.Primary:this._componentClass=`${this._componentClass}-primary`;break;case HOOButtonType.HyperlinkPrimary:this._componentClass=`${this._componentClass}-primary`,this._hyperlinkType=!0;break;case HOOButtonType.HyperlinkStandard:this._hyperlinkType=!0;break;case HOOButtonType.CompoundPrimary:this._componentClass=`${this._componentClass}comp-primary`,this._compoundType=!0;break;case HOOButtonType.CompoundStandard:this._componentClass=`${this._componentClass}comp`,this._compoundType=!0}this.state={}}render(){this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.iconRight?"is-reversed":""} ${this.props.rootElementAttributes?.className}`:`${this._componentClass} ${this.props.iconRight?"is-reversed":""}`,iconSVG=this.props.iconName?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconName,this.props.iconTitle||""):this.props.iconRight?_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconRight,this.props.iconRightTitle):null;this.props.iconName||this.props.iconRight;try{return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("a",{...this._rootProps,...this.props.rootElementAttributes,href:this.props.href,role:"button",className,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:"hoo-button-label",children:this.props.label}),!this.props.label&&this.props.children]}),!this._hyperlinkType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("button",{...this._rootProps,...this.props.rootElementAttributes,className,disabled:this.props.disabled||!1,"aria-disabled":this.props.disabled||!1,onClick:this.props.onClick,children:[this.props.label&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconSVG}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-label`,children:this.props.label}),this._compoundType&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span",{className:`hoo-button${this._compoundType?"comp":""}-desc`,children:this.props.description})]}),this.props.type===HOOButtonType.Icon&&iconSVG&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_HOOIcon_HOOIcon__WEBPACK_IMPORTED_MODULE_2__.A,{iconSVG}),(!this.props.label||this.props.type===HOOButtonType.Icon&&!this.props.iconName)&&this.props.children]})]})}catch(err){console.error(`${err} - ${this.LOG_SOURCE} (render)`)}}}HOOButton.displayName="HOOButton";try{HOOButton.displayName="HOOButton",HOOButton.__docgenInfo={description:"",displayName:"HOOButton",props:{type:{defaultValue:null,description:'HOOButtonType enum -- omit label for "Icon" type and provide HOOIcon child node.',name:"type",required:!0,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},disabled:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Is button disabled.",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"(Optional) For Non-Hyperlink style buttons only, Direct interface for buttons click event handler.",name:"onClick",required:!1,type:{name:"MouseEventHandler<HTMLButtonElement>"}},label:{defaultValue:null,description:"(Optional) button label, if omitted, components children will be rendered.",name:"label",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"(Optional) button iconName (alt: iconLeftName), if omitted for HOOButtonType.Icon, components children will be rendered.",name:"iconName",required:!1,type:{name:"string"}},iconTitle:{defaultValue:null,description:"(Optional) button icon title",name:"iconTitle",required:!1,type:{name:"string"}},iconRight:{defaultValue:null,description:"(Optional) button iconName for right side.",name:"iconRight",required:!1,type:{name:"string"}},iconRightTitle:{defaultValue:null,description:"(Optional) button icon title for right side.",name:"iconRightTitle",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"(Optional) For Hyperlink style buttons only, link reference.",name:"href",required:!1,type:{name:"string"}},description:{defaultValue:null,description:"(Optional) For Compound style buttons only, second line of label.",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-button-* {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> | DetailedHTMLProps<AnchorHTMLAttributes<...>, HTMLAnchorElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOButton/HOOButton.tsx#HOOButton"]={docgenInfo:HOOButton.__docgenInfo,name:"HOOButton",path:"src/HOOButton/HOOButton.tsx#HOOButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOButton/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__,v:()=>_HOOButton__WEBPACK_IMPORTED_MODULE_0__.v});var _HOOButton__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/HOOButton/HOOButton.tsx");const __WEBPACK_DEFAULT_EXPORT__=_HOOButton__WEBPACK_IMPORTED_MODULE_0__.A},"./src/HOOIcon/HOOIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_SymbolSet__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/SymbolSet.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOIconState{constructor(){}}class HOOIcon extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOIcon";_rootProps={"data-component":this.LOG_SOURCE};componentClass="hoo-icon";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOIcon",this.state=new HOOIconState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this.componentClass} ${this.props.rootElementAttributes?.className}`:this.componentClass,iconSVG=this.props.iconSVG||_SymbolSet__WEBPACK_IMPORTED_MODULE_1__.G.Icon(this.props.iconName,this.props.title||"<span/>");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{...this._rootProps,...this.props.rootElementAttributes,className,dangerouslySetInnerHTML:{__html:iconSVG}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"hidden-visually",children:this.props.iconLabel||this.props.iconName||"Icon"})]})}catch(err){return console.error(`${err} - ${this.LOG_SOURCE} (render)`),null}}}HOOIcon.displayName="HOOIcon";try{HOOIcon.displayName="HOOIcon",HOOIcon.__docgenInfo={description:"",displayName:"HOOIcon",props:{iconLabel:{defaultValue:null,description:"Accessibility label for the icon",name:"iconLabel",required:!1,type:{name:"string"}},iconName:{defaultValue:null,description:"Name of icon to be rendered, if omitted must include iconSVG",name:"iconName",required:!1,type:{name:"string"}},iconSVG:{defaultValue:null,description:"SVG string representing an icon that will be injected into containing DIV, if omitted must include iconName",name:"iconSVG",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"(Optional) Title applied to SVG tag to provide hover description for icon. Only works in conjunction with iconName",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLDivElement attributes that will be applied to the root element of the component.",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLSpanElement> & HTMLAttributes<HTMLSpanElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOIcon/HOOIcon.tsx#HOOIcon"]={docgenInfo:HOOIcon.__docgenInfo,name:"HOOIcon",path:"src/HOOIcon/HOOIcon.tsx#HOOIcon"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOSplashCardDesc/HOOSplashCardDesc.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOSplashCardDesc});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOSplashCardDescState{constructor(){}}class HOOSplashCardDesc extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOSplashCardDesc";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-splashcard-desc";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOSplashCardDesc",this.state=new HOOSplashCardDescState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p",{...this._rootProps,...this.props.rootElementAttributes,className,children:[this.props.description&&this.props.description,!this.props.description&&this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOSplashCardDesc.displayName="HOOSplashCardDesc";try{HOOSplashCardDesc.displayName="HOOSplashCardDesc",HOOSplashCardDesc.__docgenInfo={description:"",displayName:"HOOSplashCardDesc",props:{description:{defaultValue:null,description:"(Optional) Description, if omitted HTML children will be rended",name:"description",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLParagraphElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-splashcard-desc {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLParagraphElement> & HTMLAttributes<HTMLParagraphElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOSplashCardDesc/HOOSplashCardDesc.tsx#HOOSplashCardDesc"]={docgenInfo:HOOSplashCardDesc.__docgenInfo,name:"HOOSplashCardDesc",path:"src/HOOSplashCardDesc/HOOSplashCardDesc.tsx#HOOSplashCardDesc"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOSplashCardFooter/HOOSplashCardFooter.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOSplashCardFooter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOSplashCardFooterState{constructor(){}}class HOOSplashCardFooter extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOSplashCardFooter";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-splashcard-footer";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOSplashCardFooter",this.state=new HOOSplashCardFooterState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("footer",{...this._rootProps,...this.props.rootElementAttributes,className,children:this.props.children})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOSplashCardFooter.displayName="HOOSplashCardFooter";try{HOOSplashCardFooter.displayName="HOOSplashCardFooter",HOOSplashCardFooter.__docgenInfo={description:"",displayName:"HOOSplashCardFooter",props:{rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-splashcard-footer {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOSplashCardFooter/HOOSplashCardFooter.tsx#HOOSplashCardFooter"]={docgenInfo:HOOSplashCardFooter.__docgenInfo,name:"HOOSplashCardFooter",path:"src/HOOSplashCardFooter/HOOSplashCardFooter.tsx#HOOSplashCardFooter"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOSplashCardHeader/HOOSplashCardHeader.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOSplashCardHeader});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOSplashCardHeaderState{constructor(){}}class HOOSplashCardHeader extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOSplashCardHeader";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-splashcard-header";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOSplashCardHeader",this.state=new HOOSplashCardHeaderState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("header",{...this._rootProps,...this.props.rootElementAttributes,className,role:"presentation",children:[this.props.imageSource&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img",{src:this.props.imageSource,alt:this.props.imageAlt,className:"hoo-splashcard-img"}),!this.props.imageSource&&this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOSplashCardHeader.displayName="HOOSplashCardHeader";try{HOOSplashCardHeader.displayName="HOOSplashCardHeader",HOOSplashCardHeader.__docgenInfo={description:"",displayName:"HOOSplashCardHeader",props:{imageSource:{defaultValue:null,description:"(Optional) Image source, if omitted HTML children will be rended",name:"imageSource",required:!1,type:{name:"string"}},imageAlt:{defaultValue:null,description:"(Optional) ACCESSIBILITY: Image alt, include when using imageSource",name:"imageAlt",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-splashcard-header {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLElement> & HTMLAttributes<HTMLElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOSplashCardHeader/HOOSplashCardHeader.tsx#HOOSplashCardHeader"]={docgenInfo:HOOSplashCardHeader.__docgenInfo,name:"HOOSplashCardHeader",path:"src/HOOSplashCardHeader/HOOSplashCardHeader.tsx#HOOSplashCardHeader"})}catch(__react_docgen_typescript_loader_error){}},"./src/HOOSplashCardTitle/HOOSplashCardTitle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>HOOSplashCardTitle});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");class HOOSplashCardTitleState{constructor(){}}class HOOSplashCardTitle extends react__WEBPACK_IMPORTED_MODULE_0__.PureComponent{LOG_SOURCE="💦HOOSplashCardTitle";_rootProps={"data-component":this.LOG_SOURCE};_componentClass="hoo-splashcard-title";constructor(props){super(props),this.LOG_SOURCE=props.dataComponent||"💦HOOSplashCardTitle",this.state=new HOOSplashCardTitleState}render(){try{this.props.reactKey&&(this._rootProps.key=this.props.reactKey);const className=this.props.rootElementAttributes?.className?`${this._componentClass} ${this.props.rootElementAttributes?.className}`:this._componentClass;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1",{...this._rootProps,...this.props.rootElementAttributes,className,children:[this.props.title&&this.props.title,!this.props.title&&this.props.children]})}catch(err){return console.error(`${this.LOG_SOURCE} (render) - ${err}`),null}}}HOOSplashCardTitle.displayName="HOOSplashCardTitle";try{HOOSplashCardTitle.displayName="HOOSplashCardTitle",HOOSplashCardTitle.__docgenInfo={description:"",displayName:"HOOSplashCardTitle",props:{title:{defaultValue:null,description:"(Optional) Title, if omitted HTML children will be rended",name:"title",required:!1,type:{name:"string"}},rootElementAttributes:{defaultValue:null,description:"(Optional) HTMLHeadingElement attributes that will be applied to the root element of the component.\nClass names will be appended to the end of the default class string - hoo-splashcard-title {rootElementAttributes.class}",name:"rootElementAttributes",required:!1,type:{name:"ClassAttributes<HTMLHeadingElement> & HTMLAttributes<HTMLHeadingElement>"}},reactKey:{defaultValue:null,description:"(Optional) React key property, when included added to root element",name:"reactKey",required:!1,type:{name:"Key"}},dataComponent:{defaultValue:null,description:"(Optional) data-component decorator string for root HTMLElement.",name:"dataComponent",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"(Optional) explicit typing for React children.",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/HOOSplashCardTitle/HOOSplashCardTitle.tsx#HOOSplashCardTitle"]={docgenInfo:HOOSplashCardTitle.__docgenInfo,name:"HOOSplashCardTitle",path:"src/HOOSplashCardTitle/HOOSplashCardTitle.tsx#HOOSplashCardTitle"})}catch(__react_docgen_typescript_loader_error){}},"./src/SymbolSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>symset});const hoo_icons_namespaceObject=__webpack_require__.p+"static/media/hoo-icons.0b81bab1.svg";const symset=new class SymbolSet{LOG_SOURCE="💦SymbolSet";defaultLoaded=!1;_symbolSetDictionary={};constructor(){}async initSymbols(symbolSetFile){try{if(!this.defaultLoaded&&null!=hoo_icons_namespaceObject){const defaultResult=await fetch(hoo_icons_namespaceObject),defaultSymbolSet=await defaultResult.text(),loadedDefault=this.processSymbolSet(defaultSymbolSet);this.defaultLoaded=loadedDefault}if(void 0!==symbolSetFile&&symbolSetFile.length>0){const result=await fetch(symbolSetFile),symbolSet=await result.text();this.processSymbolSet(symbolSet)}}catch(err){console.error(`${this.LOG_SOURCE} (initSymbols) - ${err}`)}}processSymbolSet(symbolSet){let retVal=!1;try{const parser=new DOMParser,defs=parser.parseFromString(symbolSet,"image/svg+xml").getElementsByTagName("symbol");for(let i=0;i<defs.length;i++){const s=defs[i],viewBoxString=`${s.viewBox.baseVal.x} ${s.viewBox.baseVal.y} ${s.viewBox.baseVal.width} ${s.viewBox.baseVal.height}`;s.firstElementChild.removeAttribute("xmlns");const svgElement=`<svg xmlns="http://www.w3.org/2000/svg" data-svgid="${s.id}" title="%title%" class="hoo-icon-svg" viewBox="${viewBoxString}">${s.innerHTML}</svg>`;this._symbolSetDictionary[s.id]=svgElement}retVal=!0}catch(err){console.error(`${this.LOG_SOURCE} (processSymbolSet) - ${err}`)}return retVal}Icon(iconName,iconTitle=""){try{const iconSVG=this._symbolSetDictionary[iconName]?.replace("%title%",iconTitle);return iconSVG||"<svg />"}catch(err){return console.error(`${this.LOG_SOURCE} (Icon) - ${err}`),null}}IconBase64(iconName){try{const iconSvg=this.Icon(iconName);return`data:image/svg+xml;base64,${window.btoa(iconSvg)}`}catch(err){return console.error(`${this.LOG_SOURCE} (IconBase64) - ${err}`),null}}SearchIconDictionary(search){let retVal=[];try{const keys=Object.keys(this._symbolSetDictionary);for(let i=0;i<keys.length;i++)keys[i].toLowerCase().includes(search.toLowerCase())&&retVal.push(keys[i])}catch(err){console.error(`${this.LOG_SOURCE} (SearchIconDictionary) - ${err}`)}return retVal}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";__webpack_require__("./node_modules/object-assign/index.js");var f=__webpack_require__("./node_modules/react/index.js"),g=60103;if(exports.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element"),exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,k){var b,d={},e=null,l=null;for(b in void 0!==k&&(e=""+k),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(l=a.ref),a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);