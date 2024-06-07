(self.webpackChunkangular3=self.webpackChunkangular3||[]).push([["src_bootstrap_ts"],{8817:(e,t,n)=>{"use strict";n.r(t);var r=n(7511),o=n(9095);class s extends r["\u0275DomAdapter"]{constructor(){super(...arguments),this.supportsDOMEvents=!0}}class i extends s{static makeCurrent(){(0,r["\u0275setRootDomAdapter"])(new i)}onAndCancel(e,t,n){return e.addEventListener(t,n,!1),()=>{e.removeEventListener(t,n,!1)}}dispatchEvent(e,t){e.dispatchEvent(t)}remove(e){e.parentNode&&e.parentNode.removeChild(e)}createElement(e,t){return(t=t||this.getDefaultDocument()).createElement(e)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(e){return e.nodeType===Node.ELEMENT_NODE}isShadowRoot(e){return e instanceof DocumentFragment}getGlobalEventTarget(e,t){return"window"===t?window:"document"===t?e:"body"===t?e.body:null}getBaseHref(e){const t=(l=l||document.querySelector("base"),l?l.getAttribute("href"):null);return null==t?null:function(e){a=a||document.createElement("a"),a.setAttribute("href",e);const t=a.pathname;return"/"===t.charAt(0)?t:`/${t}`}(t)}resetBaseElement(){l=null}getUserAgent(){return window.navigator.userAgent}getCookie(e){return(0,r["\u0275parseCookieValue"])(document.cookie,e)}}let a,l=null;const c=new o.InjectionToken("TRANSITION_ID"),u=[{provide:o.APP_INITIALIZER,useFactory:function(e,t,n){return()=>{n.get(o.ApplicationInitStatus).donePromise.then(()=>{const n=(0,r["\u0275getDOM"])();Array.prototype.slice.apply(t.querySelectorAll("style[ng-transition]")).filter(t=>t.getAttribute("ng-transition")===e).forEach(e=>n.remove(e))})}},deps:[c,r.DOCUMENT,o.Injector],multi:!0}];class h{static init(){(0,o.setTestabilityGetter)(new h)}addToWindow(e){o["\u0275global"].getAngularTestability=(t,n=!0)=>{const r=e.findTestabilityInTree(t,n);if(null==r)throw new Error("Could not find testability for element.");return r},o["\u0275global"].getAllAngularTestabilities=()=>e.getAllTestabilities(),o["\u0275global"].getAllAngularRootElements=()=>e.getAllRootElements(),o["\u0275global"].frameworkStabilizers||(o["\u0275global"].frameworkStabilizers=[]),o["\u0275global"].frameworkStabilizers.push(e=>{const t=o["\u0275global"].getAllAngularTestabilities();let n=t.length,r=!1;const s=function(t){r=r||t,n--,0==n&&e(r)};t.forEach(function(e){e.whenStable(s)})})}findTestabilityInTree(e,t,n){if(null==t)return null;const o=e.getTestability(t);return null!=o?o:n?(0,r["\u0275getDOM"])().isShadowRoot(t)?this.findTestabilityInTree(e,t.host,!0):this.findTestabilityInTree(e,t.parentElement,!0):null}}let d=(()=>{class e{build(){return new XMLHttpRequest}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const p=new o.InjectionToken("EventManagerPlugins");let m=(()=>{class e{constructor(e,t){this._zone=t,this._eventNameToPlugin=new Map,e.forEach(e=>e.manager=this),this._plugins=e.slice().reverse()}addEventListener(e,t,n){return this._findPluginFor(t).addEventListener(e,t,n)}addGlobalEventListener(e,t,n){return this._findPluginFor(t).addGlobalEventListener(e,t,n)}getZone(){return this._zone}_findPluginFor(e){const t=this._eventNameToPlugin.get(e);if(t)return t;const n=this._plugins;for(let r=0;r<n.length;r++){const t=n[r];if(t.supports(e))return this._eventNameToPlugin.set(e,t),t}throw new Error(`No event manager plugin found for event ${e}`)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](p),o["\u0275\u0275inject"](o.NgZone))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class g{constructor(e){this._doc=e}addGlobalEventListener(e,t,n){const o=(0,r["\u0275getDOM"])().getGlobalEventTarget(this._doc,e);if(!o)throw new Error(`Unsupported event target ${o} for event ${t}`);return this.addEventListener(o,t,n)}}let f=(()=>{class e{constructor(){this._stylesSet=new Set}addStyles(e){const t=new Set;e.forEach(e=>{this._stylesSet.has(e)||(this._stylesSet.add(e),t.add(e))}),this.onStylesAdded(t)}onStylesAdded(e){}getAllStyles(){return Array.from(this._stylesSet)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})(),y=(()=>{class e extends f{constructor(e){super(),this._doc=e,this._hostNodes=new Map,this._hostNodes.set(e.head,[])}_addStylesToHost(e,t,n){e.forEach(e=>{const r=this._doc.createElement("style");r.textContent=e,n.push(t.appendChild(r))})}addHost(e){const t=[];this._addStylesToHost(this._stylesSet,e,t),this._hostNodes.set(e,t)}removeHost(e){const t=this._hostNodes.get(e);t&&t.forEach(v),this._hostNodes.delete(e)}onStylesAdded(e){this._hostNodes.forEach((t,n)=>{this._addStylesToHost(e,n,t)})}ngOnDestroy(){this._hostNodes.forEach(e=>e.forEach(v))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();function v(e){(0,r["\u0275getDOM"])().remove(e)}const E={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},w=/%COMP%/g;function C(e,t,n){for(let r=0;r<t.length;r++){let o=t[r];Array.isArray(o)?C(e,o,n):(o=o.replace(w,e),n.push(o))}return n}function b(e){return t=>{if("__ngUnwrap__"===t)return e;!1===e(t)&&(t.preventDefault(),t.returnValue=!1)}}let S=(()=>{class e{constructor(e,t,n){this.eventManager=e,this.sharedStylesHost=t,this.appId=n,this.rendererByCompId=new Map,this.defaultRenderer=new I(e)}createRenderer(e,t){if(!e||!t)return this.defaultRenderer;switch(t.encapsulation){case o.ViewEncapsulation.Emulated:{let n=this.rendererByCompId.get(t.id);return n||(n=new R(this.eventManager,this.sharedStylesHost,t,this.appId),this.rendererByCompId.set(t.id,n)),n.applyToHost(e),n}case 1:case o.ViewEncapsulation.ShadowDom:return new N(this.eventManager,this.sharedStylesHost,e,t);default:if(!this.rendererByCompId.has(t.id)){const e=C(t.id,t.styles,[]);this.sharedStylesHost.addStyles(e),this.rendererByCompId.set(t.id,this.defaultRenderer)}return this.defaultRenderer}}begin(){}end(){}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](m),o["\u0275\u0275inject"](y),o["\u0275\u0275inject"](o.APP_ID))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();class I{constructor(e){this.eventManager=e,this.data=Object.create(null)}destroy(){}createElement(e,t){return t?document.createElementNS(E[t]||t,e):document.createElement(e)}createComment(e){return document.createComment(e)}createText(e){return document.createTextNode(e)}appendChild(e,t){e.appendChild(t)}insertBefore(e,t,n){e&&e.insertBefore(t,n)}removeChild(e,t){e&&e.removeChild(t)}selectRootElement(e,t){let n="string"==typeof e?document.querySelector(e):e;if(!n)throw new Error(`The selector "${e}" did not match any elements`);return t||(n.textContent=""),n}parentNode(e){return e.parentNode}nextSibling(e){return e.nextSibling}setAttribute(e,t,n,r){if(r){t=r+":"+t;const o=E[r];o?e.setAttributeNS(o,t,n):e.setAttribute(t,n)}else e.setAttribute(t,n)}removeAttribute(e,t,n){if(n){const r=E[n];r?e.removeAttributeNS(r,t):e.removeAttribute(`${n}:${t}`)}else e.removeAttribute(t)}addClass(e,t){e.classList.add(t)}removeClass(e,t){e.classList.remove(t)}setStyle(e,t,n,r){r&(o.RendererStyleFlags2.DashCase|o.RendererStyleFlags2.Important)?e.style.setProperty(t,n,r&o.RendererStyleFlags2.Important?"important":""):e.style[t]=n}removeStyle(e,t,n){n&o.RendererStyleFlags2.DashCase?e.style.removeProperty(t):e.style[t]=""}setProperty(e,t,n){e[t]=n}setValue(e,t){e.nodeValue=t}listen(e,t,n){return"string"==typeof e?this.eventManager.addGlobalEventListener(e,t,b(n)):this.eventManager.addEventListener(e,t,b(n))}}class R extends I{constructor(e,t,n,r){super(e),this.component=n;const o=C(r+"-"+n.id,n.styles,[]);t.addStyles(o),this.contentAttr="_ngcontent-%COMP%".replace(w,r+"-"+n.id),this.hostAttr="_nghost-%COMP%".replace(w,r+"-"+n.id)}applyToHost(e){super.setAttribute(e,this.hostAttr,"")}createElement(e,t){const n=super.createElement(e,t);return super.setAttribute(n,this.contentAttr,""),n}}class N extends I{constructor(e,t,n,r){super(e),this.sharedStylesHost=t,this.hostEl=n,this.shadowRoot=n.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);const o=C(r.id,r.styles,[]);for(let s=0;s<o.length;s++){const e=document.createElement("style");e.textContent=o[s],this.shadowRoot.appendChild(e)}}nodeOrShadowRoot(e){return e===this.hostEl?this.shadowRoot:e}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}appendChild(e,t){return super.appendChild(this.nodeOrShadowRoot(e),t)}insertBefore(e,t,n){return super.insertBefore(this.nodeOrShadowRoot(e),t,n)}removeChild(e,t){return super.removeChild(this.nodeOrShadowRoot(e),t)}parentNode(e){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(e)))}}let O=(()=>{class e extends g{constructor(e){super(e)}supports(e){return!0}addEventListener(e,t,n){return e.addEventListener(t,n,!1),()=>this.removeEventListener(e,t,n)}removeEventListener(e,t,n){return e.removeEventListener(t,n)}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const A=["alt","control","meta","shift"],T={"\b":"Backspace","\t":"Tab","\x7f":"Delete","\x1b":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},D={A:"1",B:"2",C:"3",D:"4",E:"5",F:"6",G:"7",H:"8",I:"9",J:"*",K:"+",M:"-",N:".",O:"/","`":"0","\x90":"NumLock"},M={alt:e=>e.altKey,control:e=>e.ctrlKey,meta:e=>e.metaKey,shift:e=>e.shiftKey};let _=(()=>{class e extends g{constructor(e){super(e)}supports(t){return null!=e.parseEventName(t)}addEventListener(t,n,o){const s=e.parseEventName(n),i=e.eventCallback(s.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>(0,r["\u0275getDOM"])().onAndCancel(t,s.domEventName,i))}static parseEventName(t){const n=t.toLowerCase().split("."),r=n.shift();if(0===n.length||"keydown"!==r&&"keyup"!==r)return null;const o=e._normalizeKey(n.pop());let s="";if(A.forEach(e=>{const t=n.indexOf(e);t>-1&&(n.splice(t,1),s+=e+".")}),s+=o,0!=n.length||0===o.length)return null;const i={};return i.domEventName=r,i.fullKey=s,i}static getEventFullKey(e){let t="",n=function(e){let t=e.key;if(null==t){if(t=e.keyIdentifier,null==t)return"Unidentified";t.startsWith("U+")&&(t=String.fromCharCode(parseInt(t.substring(2),16)),3===e.location&&D.hasOwnProperty(t)&&(t=D[t]))}return T[t]||t}(e);return n=n.toLowerCase()," "===n?n="space":"."===n&&(n="dot"),A.forEach(r=>{r!=n&&(0,M[r])(e)&&(t+=r+".")}),t+=n,t}static eventCallback(t,n,r){return o=>{e.getEventFullKey(o)===t&&r.runGuarded(()=>n(o))}}static _normalizeKey(e){switch(e){case"esc":return"escape";default:return e}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](r.DOCUMENT))},e.\u0275prov=o["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const F=(0,o.createPlatformFactory)(o.platformCore,"browser",[{provide:o.PLATFORM_ID,useValue:r["\u0275PLATFORM_BROWSER_ID"]},{provide:o.PLATFORM_INITIALIZER,useValue:function(){i.makeCurrent(),h.init()},multi:!0},{provide:r.DOCUMENT,useFactory:function(){return(0,o["\u0275setDocument"])(document),document},deps:[]}]),j=[[],{provide:o["\u0275INJECTOR_SCOPE"],useValue:"root"},{provide:o.ErrorHandler,useFactory:function(){return new o.ErrorHandler},deps:[]},{provide:p,useClass:O,multi:!0,deps:[r.DOCUMENT,o.NgZone,o.PLATFORM_ID]},{provide:p,useClass:_,multi:!0,deps:[r.DOCUMENT]},[],{provide:S,useClass:S,deps:[m,y,o.APP_ID]},{provide:o.RendererFactory2,useExisting:S},{provide:f,useExisting:y},{provide:y,useClass:y,deps:[r.DOCUMENT]},{provide:o.Testability,useClass:o.Testability,deps:[o.NgZone]},{provide:m,useClass:m,deps:[p,o.NgZone]},{provide:r.XhrFactory,useClass:d,deps:[]},[]];let k=(()=>{class e{constructor(e){if(e)throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")}static withServerTransition(t){return{ngModule:e,providers:[{provide:o.APP_ID,useValue:t.appId},{provide:c,useExisting:o.APP_ID},u]}}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](e,12))},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:j,imports:[r.CommonModule,o.ApplicationModule]}),e})();"undefined"!=typeof window&&window;var L=n(8760),x=n(3427);const V={schedule(e,t){const n=setTimeout(e,t);return()=>clearTimeout(n)},scheduleBeforeRender(e){if("undefined"==typeof window)return V.schedule(e,0);if(void 0===window.requestAnimationFrame)return V.schedule(e,16);const t=window.requestAnimationFrame(e);return()=>window.cancelAnimationFrame(t)}};let P;function Z(e,t,n){let r=n;return function(e){return!!e&&e.nodeType===Node.ELEMENT_NODE}(e)&&t.some((t,n)=>!("*"===t||!function(e,t){if(!P){const e=Element.prototype;P=e.matches||e.matchesSelector||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector}return e.nodeType===Node.ELEMENT_NODE&&P.call(e,t)}(e,t)||(r=n,0))),r}class H{constructor(e,t){this.componentFactory=t.get(o.ComponentFactoryResolver).resolveComponentFactory(e)}create(e){return new B(this.componentFactory,e)}}class B{constructor(e,t){this.componentFactory=e,this.injector=t,this.eventEmitters=new L.ReplaySubject(1),this.events=this.eventEmitters.pipe((0,x.switchMap)(e=>(0,L.merge)(...e))),this.componentRef=null,this.viewChangeDetectorRef=null,this.inputChanges=null,this.hasInputChanges=!1,this.implementsOnChanges=!1,this.scheduledChangeDetectionFn=null,this.scheduledDestroyFn=null,this.initialInputValues=new Map,this.unchangedInputs=new Set(this.componentFactory.inputs.map(({propName:e})=>e)),this.ngZone=this.injector.get(o.NgZone),this.elementZone="undefined"==typeof Zone?null:this.ngZone.run(()=>Zone.current)}connect(e){this.runInZone(()=>{if(null!==this.scheduledDestroyFn)return this.scheduledDestroyFn(),void(this.scheduledDestroyFn=null);null===this.componentRef&&this.initializeComponent(e)})}disconnect(){this.runInZone(()=>{null!==this.componentRef&&null===this.scheduledDestroyFn&&(this.scheduledDestroyFn=V.schedule(()=>{null!==this.componentRef&&(this.componentRef.destroy(),this.componentRef=null,this.viewChangeDetectorRef=null)},10))})}getInputValue(e){return this.runInZone(()=>null===this.componentRef?this.initialInputValues.get(e):this.componentRef.instance[e])}setInputValue(e,t){this.runInZone(()=>{var n,r;null!==this.componentRef?((n=t)!==(r=this.getInputValue(e))&&(n==n||r==r)||void 0===t&&this.unchangedInputs.has(e))&&(this.recordInputChange(e,t),this.unchangedInputs.delete(e),this.hasInputChanges=!0,this.componentRef.instance[e]=t,this.scheduleDetectChanges()):this.initialInputValues.set(e,t)})}initializeComponent(e){const t=o.Injector.create({providers:[],parent:this.injector}),n=function(e,t){const n=e.childNodes,r=t.map(()=>[]);let o=-1;t.some((e,t)=>"*"===e&&(o=t,!0));for(let s=0,i=n.length;s<i;++s){const e=n[s],i=Z(e,t,o);-1!==i&&r[i].push(e)}return r}(e,this.componentFactory.ngContentSelectors);this.componentRef=this.componentFactory.create(t,n,e),this.viewChangeDetectorRef=this.componentRef.injector.get(o.ChangeDetectorRef),this.implementsOnChanges="function"==typeof this.componentRef.instance.ngOnChanges,this.initializeInputs(),this.initializeOutputs(this.componentRef),this.detectChanges(),this.injector.get(o.ApplicationRef).attachView(this.componentRef.hostView)}initializeInputs(){this.componentFactory.inputs.forEach(({propName:e})=>{this.initialInputValues.has(e)&&this.setInputValue(e,this.initialInputValues.get(e))}),this.initialInputValues.clear()}initializeOutputs(e){const t=this.componentFactory.outputs.map(({propName:t,templateName:n})=>e.instance[t].pipe((0,x.map)(e=>({name:n,value:e}))));this.eventEmitters.next(t)}callNgOnChanges(e){if(!this.implementsOnChanges||null===this.inputChanges)return;const t=this.inputChanges;this.inputChanges=null,e.instance.ngOnChanges(t)}markViewForCheck(e){this.hasInputChanges&&(this.hasInputChanges=!1,e.markForCheck())}scheduleDetectChanges(){this.scheduledChangeDetectionFn||(this.scheduledChangeDetectionFn=V.scheduleBeforeRender(()=>{this.scheduledChangeDetectionFn=null,this.detectChanges()}))}recordInputChange(e,t){if(!this.implementsOnChanges)return;null===this.inputChanges&&(this.inputChanges={});const n=this.inputChanges[e];if(n)return void(n.currentValue=t);const r=this.unchangedInputs.has(e),s=r?void 0:this.getInputValue(e);this.inputChanges[e]=new o.SimpleChange(s,t,r)}detectChanges(){null!==this.componentRef&&(this.callNgOnChanges(this.componentRef),this.markViewForCheck(this.viewChangeDetectorRef),this.componentRef.changeDetectorRef.detectChanges())}runInZone(e){return this.elementZone&&Zone.current!==this.elementZone?this.ngZone.run(e):e()}}class U extends HTMLElement{constructor(){super(...arguments),this.ngElementEventsSubscription=null}}function z(e,t){const n=function(e,t){return t.get(o.ComponentFactoryResolver).resolveComponentFactory(e).inputs}(e,t.injector),r=t.strategyFactory||new H(e,t.injector),s=function(e){const t={};return e.forEach(({propName:e,templateName:n})=>{var r;t[(r=n,r.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`))]=e}),t}(n);class i extends U{constructor(e){super(),this.injector=e}get ngElementStrategy(){if(!this._ngElementStrategy){const e=this._ngElementStrategy=r.create(this.injector||t.injector);n.forEach(({propName:t})=>{if(!this.hasOwnProperty(t))return;const n=this[t];delete this[t],e.setInputValue(t,n)})}return this._ngElementStrategy}attributeChangedCallback(e,t,n,r){this.ngElementStrategy.setInputValue(s[e],n)}connectedCallback(){let e=!1;this.ngElementStrategy.events&&(this.subscribeToEvents(),e=!0),this.ngElementStrategy.connect(this),e||this.subscribeToEvents()}disconnectedCallback(){this._ngElementStrategy&&this._ngElementStrategy.disconnect(),this.ngElementEventsSubscription&&(this.ngElementEventsSubscription.unsubscribe(),this.ngElementEventsSubscription=null)}subscribeToEvents(){this.ngElementEventsSubscription=this.ngElementStrategy.events.subscribe(e=>{const t=function(e,t,n){if("function"!=typeof CustomEvent){const r=e.createEvent("CustomEvent");return r.initCustomEvent(t,!1,!1,n),r}return new CustomEvent(t,{bubbles:!1,cancelable:!1,detail:n})}(this.ownerDocument,e.name,e.value);this.dispatchEvent(t)})}}return i.observedAttributes=Object.keys(s),n.forEach(({propName:e})=>{Object.defineProperty(i.prototype,e,{get(){return this.ngElementStrategy.getInputValue(e)},set(t){this.ngElementStrategy.setInputValue(e,t)},configurable:!0,enumerable:!0})}),i}new o.Version("12.0.3");var $=n(7135);let K=(()=>{class e{constructor(e){this.router=e,this.ngVersion=n(306).HO.Sk}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275directiveInject"]($.Router))},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-root"]],decls:12,vars:1,consts:[["src","https://angular.io/assets/images/logos/angular/angular.svg","width","30"],["routerLink","angular3/a"],["routerLink","angular3/b"]],template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"h1"),o["\u0275\u0275text"](1," Angular C (with Routing) "),o["\u0275\u0275element"](2,"img",0),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](3,"p"),o["\u0275\u0275text"](4),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementStart"](5,"div"),o["\u0275\u0275elementStart"](6,"a",1),o["\u0275\u0275text"](7,"Route A"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275text"](8," | "),o["\u0275\u0275elementStart"](9,"a",2),o["\u0275\u0275text"](10,"Route B"),o["\u0275\u0275elementEnd"](),o["\u0275\u0275elementEnd"](),o["\u0275\u0275element"](11,"router-outlet")),2&e&&(o["\u0275\u0275advance"](4),o["\u0275\u0275textInterpolate1"](" Angular Version: ",t.ngVersion,"\n"))},directives:[$.RouterLinkWithHref,$.RouterOutlet],styles:[""]}),e})(),G=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-a"]],decls:2,vars:0,template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p"),o["\u0275\u0275text"](1,"a works!"),o["\u0275\u0275elementEnd"]())},styles:[""]}),e})(),q=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-b"]],decls:2,vars:0,template:function(e,t){1&e&&(o["\u0275\u0275elementStart"](0,"p"),o["\u0275\u0275text"](1,"b works!"),o["\u0275\u0275elementEnd"]())},styles:[""]}),e})(),W=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o["\u0275\u0275defineComponent"]({type:e,selectors:[["app-empty"]],decls:0,vars:0,template:function(e,t){},styles:[""]}),e})();const J="@angular-architects/module-federation-tools";function X(){const e=window;return e[J]=e[J]||{},e[J]}function Q(e){const t=X();return e?e(t):t}function Y(e){return Object.assign(X(),e)}let ee=!0,te=!0,ne=!0;function re(){const e=window;return e.platform=e.platform||{},e}function oe(){return Q(e=>e.platformCache)||Y({platformCache:new Map}).platformCache}var se,ie,ae;se=(()=>{class e{constructor(e){this.injector=e}ngDoBootstrap(){const e=z(K,{injector:this.injector});customElements.define("angular3-element",e),customElements.define("angular3-a-element",z(G,{injector:this.injector})),customElements.define("angular3-b-element",z(q,{injector:this.injector}))}}return e.\u0275fac=function(t){return new(t||e)(o["\u0275\u0275inject"](o.Injector))},e.\u0275mod=o["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=o["\u0275\u0275defineInjector"]({providers:[],imports:[[k,$.RouterModule.forRoot([{path:"angular3/a",component:G},{path:"angular3/b",component:q},{path:"**",component:W}])]]}),e})(),ee=!1!==(ie={production:!0,appType:"microfrontend"}).ngZoneSharing,te=!1!==ie.platformSharing,ne=!1!==ie.activeLegacyMode,ie.platformFactory=ie.platformFactory||(()=>F()),ie.version=ie.version||(()=>o.VERSION),ee&&!(null===(ae=ie.compilerOptions)||void 0===ae?void 0:ae.ngZone)&&(ie.compilerOptions=ie.compilerOptions||{},ie.compilerOptions.ngZone=Q(e=>e.ngZone)||window.ngZone),function(e){if(!te)return e.platformFactory();const t=e.version(),n=t===o.VERSION.full?o.VERSION:t,r="string"==typeof n?n:n.full;let s=oe().get(n)||ne&&function(e){const t=re().platform[e];return t instanceof o.PlatformRef?t:null}(r);return s||(s=e.platformFactory(),function(e,t){te&&(ne&&function(e,t){re().platform[e]=t}(e.full,t),oe().set(e,t))}(o.VERSION,s),e.production&&(0,o.enableProdMode)()),s}(ie).bootstrapModule(se,ie.compilerOptions).then(e=>("shell"===ie.appType?function(e){const t=e.get(o.NgZone,null);var n;t?(n=t,ee&&(ne&&function(e){window.ngZone=e}(n),Y({ngZone:n}))):console.warn("No NgZone to share found")}(e.injector):"microfrontend"===ie.appType&&function(e){const t=e.get($.Router);t?function(e,t=!1){let n;t?(n=`${location.hash.substr(1)}${location.search}`,e.navigateByUrl(n),window.addEventListener("hashchange",()=>{e.navigateByUrl(n)})):(n=`${location.pathname.substr(1)}${location.search}`,e.navigateByUrl(n),window.addEventListener("popstate",()=>{e.navigateByUrl(n)}))}(t):console.warn("No router to connect found")}(e.injector),e))},306:e=>{"use strict";e.exports=JSON.parse('{"HO":{"Sk":"12.0.3"}}')}}]);