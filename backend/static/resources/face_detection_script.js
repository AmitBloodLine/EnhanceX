(()=>{let e,t,n;function r(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var a,s,i,o,l,u,c,p,d,f,h,m,g,y,b,v,w,x,k,N,S,E,T,_,I,A,M=globalThis;function O(e,t){return Object.keys(t).forEach(function(n){"default"===n||"__esModule"===n||Object.prototype.hasOwnProperty.call(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})}),e}var C={},$={},D=M.parcelRequire9a83;null==D&&((D=function(e){if(e in C)return C[e].exports;if(e in $){var t=$[e];delete $[e];var n={id:e,exports:{}};return C[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){$[e]=t},M.parcelRequire9a83=D);var R=D.register;R("9Hk4c",function(e,t){r(e.exports,"Fragment",()=>n,e=>n=e),r(e.exports,"jsx",()=>a,e=>a=e),r(e.exports,"jsxs",()=>s,e=>s=e);var n,a,s,i=D("85Hg2"),o=Symbol.for("react.element"),l=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,a={},s=null,i=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(i=t.ref),t)u.call(t,r)&&!p.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:s,ref:i,props:a,_owner:c.current}}n=l,a=d,s=d}),R("85Hg2",function(e,t){e.exports=D("6tvtz")}),R("6tvtz",function(e,t){r(e.exports,"Children",()=>n,e=>n=e),r(e.exports,"Component",()=>a,e=>a=e),r(e.exports,"Fragment",()=>s,e=>s=e),r(e.exports,"Profiler",()=>i,e=>i=e),r(e.exports,"PureComponent",()=>o,e=>o=e),r(e.exports,"StrictMode",()=>l,e=>l=e),r(e.exports,"Suspense",()=>u,e=>u=e),r(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>c,e=>c=e),r(e.exports,"act",()=>p,e=>p=e),r(e.exports,"cloneElement",()=>d,e=>d=e),r(e.exports,"createContext",()=>f,e=>f=e),r(e.exports,"createElement",()=>h,e=>h=e),r(e.exports,"createFactory",()=>m,e=>m=e),r(e.exports,"createRef",()=>g,e=>g=e),r(e.exports,"forwardRef",()=>y,e=>y=e),r(e.exports,"isValidElement",()=>b,e=>b=e),r(e.exports,"lazy",()=>v,e=>v=e),r(e.exports,"memo",()=>w,e=>w=e),r(e.exports,"startTransition",()=>x,e=>x=e),r(e.exports,"unstable_act",()=>k,e=>k=e),r(e.exports,"useCallback",()=>N,e=>N=e),r(e.exports,"useContext",()=>S,e=>S=e),r(e.exports,"useDebugValue",()=>E,e=>E=e),r(e.exports,"useDeferredValue",()=>T,e=>T=e),r(e.exports,"useEffect",()=>_,e=>_=e),r(e.exports,"useId",()=>I,e=>I=e),r(e.exports,"useImperativeHandle",()=>A,e=>A=e),r(e.exports,"useInsertionEffect",()=>M,e=>M=e),r(e.exports,"useLayoutEffect",()=>O,e=>O=e),r(e.exports,"useMemo",()=>C,e=>C=e),r(e.exports,"useReducer",()=>$,e=>$=e),r(e.exports,"useRef",()=>D,e=>D=e),r(e.exports,"useState",()=>R,e=>R=e),r(e.exports,"useSyncExternalStore",()=>L,e=>L=e),r(e.exports,"useTransition",()=>F,e=>F=e),r(e.exports,"version",()=>z,e=>z=e);var n,a,s,i,o,l,u,c,p,d,f,h,m,g,y,b,v,w,x,k,N,S,E,T,_,I,A,M,O,C,$,D,R,L,F,z,P=Symbol.for("react.element"),B=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),V=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),H=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),G=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.iterator,X={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,Z={};function ee(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||X}function et(){}function en(e,t,n){this.props=e,this.context=t,this.refs=Z,this.updater=n||X}ee.prototype.isReactComponent={},ee.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},ee.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},et.prototype=ee.prototype;var er=en.prototype=new et;er.constructor=en,J(er,ee.prototype),er.isPureReactComponent=!0;var ea=Array.isArray,es=Object.prototype.hasOwnProperty,ei={current:null},eo={key:!0,ref:!0,__self:!0,__source:!0};function el(e,t,n){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)es.call(t,r)&&!eo.hasOwnProperty(r)&&(a[r]=t[r]);var o=arguments.length-2;if(1===o)a.children=n;else if(1<o){for(var l=Array(o),u=0;u<o;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===a[r]&&(a[r]=o[r]);return{$$typeof:P,type:e,key:s,ref:i,props:a,_owner:ei.current}}function eu(e){return"object"==typeof e&&null!==e&&e.$$typeof===P}var ec=/\/+/g;function ep(e,t){var n,r;return"object"==typeof e&&null!==e&&null!=e.key?(n=""+e.key,r={"=":"=0",":":"=2"},"$"+n.replace(/[=:]/g,function(e){return r[e]})):t.toString(36)}function ed(e,t,n){if(null==e)return e;var r=[],a=0;return function e(t,n,r,a,s){var i,o,l,u=typeof t;("undefined"===u||"boolean"===u)&&(t=null);var c=!1;if(null===t)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(t.$$typeof){case P:case B:c=!0}}if(c)return s=s(c=t),t=""===a?"."+ep(c,0):a,ea(s)?(r="",null!=t&&(r=t.replace(ec,"$&/")+"/"),e(s,n,r,"",function(e){return e})):null!=s&&(eu(s)&&(i=s,o=r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(ec,"$&/")+"/")+t,s={$$typeof:P,type:i.type,key:o,ref:i.ref,props:i.props,_owner:i._owner}),n.push(s)),1;if(c=0,a=""===a?".":a+":",ea(t))for(var p=0;p<t.length;p++){var d=a+ep(u=t[p],p);c+=e(u,n,r,d,s)}else if("function"==typeof(d=null===(l=t)||"object"!=typeof l?null:"function"==typeof(l=Y&&l[Y]||l["@@iterator"])?l:null))for(t=d.call(t),p=0;!(u=t.next()).done;)d=a+ep(u=u.value,p++),c+=e(u,n,r,d,s);else if("object"===u)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(n=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}(e,r,"","",function(e){return t.call(n,e,a++)}),r}function ef(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var eh={current:null},em={transition:null};function eg(){throw Error("act(...) is not supported in production builds of React.")}n={map:ed,forEach:function(e,t,n){ed(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ed(e,function(){t++}),t},toArray:function(e){return ed(e,function(e){return e})||[]},only:function(e){if(!eu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},a=ee,s=U,i=W,o=en,l=V,u=K,c={ReactCurrentDispatcher:eh,ReactCurrentBatchConfig:em,ReactCurrentOwner:ei},p=eg,d=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=J({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=ei.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(l in t)es.call(t,l)&&!eo.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==o?o[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=n;else if(1<l){o=Array(l);for(var u=0;u<l;u++)o[u]=arguments[u+2];r.children=o}return{$$typeof:P,type:e.type,key:a,ref:s,props:r,_owner:i}},f=function(e){return(e={$$typeof:H,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:j,_context:e},e.Consumer=e},h=el,m=function(e){var t=el.bind(null,e);return t.type=e,t},g=function(){return{current:null}},y=function(e){return{$$typeof:q,render:e}},b=eu,v=function(e){return{$$typeof:Q,_payload:{_status:-1,_result:e},_init:ef}},w=function(e,t){return{$$typeof:G,type:e,compare:void 0===t?null:t}},x=function(e){var t=em.transition;em.transition={};try{e()}finally{em.transition=t}},k=eg,N=function(e,t){return eh.current.useCallback(e,t)},S=function(e){return eh.current.useContext(e)},E=function(){},T=function(e){return eh.current.useDeferredValue(e)},_=function(e,t){return eh.current.useEffect(e,t)},I=function(){return eh.current.useId()},A=function(e,t,n){return eh.current.useImperativeHandle(e,t,n)},M=function(e,t){return eh.current.useInsertionEffect(e,t)},O=function(e,t){return eh.current.useLayoutEffect(e,t)},C=function(e,t){return eh.current.useMemo(e,t)},$=function(e,t,n){return eh.current.useReducer(e,t,n)},D=function(e){return eh.current.useRef(e)},R=function(e){return eh.current.useState(e)},L=function(e,t,n){return eh.current.useSyncExternalStore(e,t,n)},F=function(){return eh.current.useTransition()},z="18.3.1"}),R("bU6y3",function(e,t){r(e.exports,"__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED",()=>W,e=>W=e),r(e.exports,"createPortal",()=>j,e=>j=e),r(e.exports,"createRoot",()=>H,e=>H=e),r(e.exports,"findDOMNode",()=>q,e=>q=e),r(e.exports,"flushSync",()=>K,e=>K=e),r(e.exports,"hydrate",()=>G,e=>G=e),r(e.exports,"hydrateRoot",()=>Q,e=>Q=e),r(e.exports,"render",()=>Y,e=>Y=e),r(e.exports,"unmountComponentAtNode",()=>X,e=>X=e),r(e.exports,"unstable_batchedUpdates",()=>J,e=>J=e),r(e.exports,"unstable_renderSubtreeIntoContainer",()=>Z,e=>Z=e),r(e.exports,"version",()=>ee,e=>ee=e);var n,a,s,i,o,l,u=D("85Hg2"),c=D("kMsGZ");function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d=new Set,f={};function h(e,t){m(e,t),m(e+"Capture",t)}function m(e,t){for(f[e]=t,e=0;e<t.length;e++)d.add(t[e])}var g=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),y=Object.prototype.hasOwnProperty,b=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},w={};function x(e,t,n,r,a,s,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=i}var k={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){k[e]=new x(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];k[t]=new x(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){k[e]=new x(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){k[e]=new x(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){k[e]=new x(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){k[e]=new x(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){k[e]=new x(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){k[e]=new x(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){k[e]=new x(e,5,!1,e.toLowerCase(),null,!1,!1)});var N=/[\-:]([a-z])/g;function S(e){return e[1].toUpperCase()}function E(e,t,n,r){var a,s=k.hasOwnProperty(t)?k[t]:null;(null!==s?0!==s.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":if(r)return!1;if(null!==n)return!n.acceptsBooleans;return"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,s,r)&&(n=null),r||null===s?(a=t,(!!y.call(w,a)||!y.call(v,a)&&(b.test(a)?w[a]=!0:(v[a]=!0,!1)))&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n))):s.mustUseProperty?e[s.propertyName]=null===n?3!==s.type&&"":n:(t=s.attributeName,r=s.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(s=s.type)||4===s&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(N,S);k[t]=new x(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(N,S);k[t]=new x(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(N,S);k[t]=new x(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!1,!1)}),k.xlinkHref=new x("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){k[e]=new x(e,1,!1,e.toLowerCase(),null,!0,!0)});var T=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,_=Symbol.for("react.element"),I=Symbol.for("react.portal"),A=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),$=Symbol.for("react.context"),R=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),F=Symbol.for("react.suspense_list"),z=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var B=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var U=Symbol.iterator;function V(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=U&&e[U]||e["@@iterator"])?e:null}var W,j,H,q,K,G,Q,Y,X,J,Z,ee,et,en=Object.assign;function er(e){if(void 0===et)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);et=t&&t[1]||""}return"\n"+et+e}var ea=!1;function es(e,t){if(!e||ea)return"";ea=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t){if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&"string"==typeof t.stack){for(var a=t.stack.split("\n"),s=r.stack.split("\n"),i=a.length-1,o=s.length-1;1<=i&&0<=o&&a[i]!==s[o];)o--;for(;1<=i&&0<=o;i--,o--)if(a[i]!==s[o]){if(1!==i||1!==o)do if(i--,0>--o||a[i]!==s[o]){var l="\n"+a[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=o)break}}}finally{ea=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?er(e):""}function ei(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function eo(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function el(e){e._valueTracker||(e._valueTracker=function(e){var t=eo(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var a=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function eu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=eo(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ec(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function ep(e,t){var n=t.checked;return en({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function ed(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=ei(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function ef(e,t){null!=(t=t.checked)&&E(e,"checked",t,!1)}function eh(e,t){ef(e,t);var n=ei(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r){e.removeAttribute("value");return}t.hasOwnProperty("value")?eg(e,t.type,n):t.hasOwnProperty("defaultValue")&&eg(e,t.type,ei(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function em(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function eg(e,t,n){("number"!==t||ec(e.ownerDocument)!==e)&&(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ey=Array.isArray;function eb(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(a=0,n=""+ei(n),t=null;a<e.length;a++){if(e[a].value===n){e[a].selected=!0,r&&(e[a].defaultSelected=!0);return}null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function ev(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(p(91));return en({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ew(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(p(92));if(ey(n)){if(1<n.length)throw Error(p(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:ei(n)}}function ex(e,t){var n=ei(t.value),r=ei(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ek(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function eN(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function eS(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?eN(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var eE,eT,e_=(eE=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((eT=eT||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=eT.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return eE(e,t,n,r)})}:eE);function eI(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType){n.nodeValue=t;return}}e.textContent=t}var eA={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},eM=["Webkit","ms","Moz","O"];function eO(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||eA.hasOwnProperty(e)&&eA[e]?(""+t).trim():t+"px"}function eC(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=eO(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(eA).forEach(function(e){eM.forEach(function(t){eA[t=t+e.charAt(0).toUpperCase()+e.substring(1)]=eA[e]})});var e$=en({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function eD(e,t){if(t){if(e$[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(p(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(p(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(p(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(p(62))}}function eR(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var eL=null;function eF(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ez=null,eP=null,eB=null;function eU(e){if(e=rQ(e)){if("function"!=typeof ez)throw Error(p(280));var t=e.stateNode;t&&(t=rX(t),ez(e.stateNode,e.type,t))}}function eV(e){eP?eB?eB.push(e):eB=[e]:eP=e}function eW(){if(eP){var e=eP,t=eB;if(eB=eP=null,eU(e),t)for(e=0;e<t.length;e++)eU(t[e])}}function ej(e,t){return e(t)}function eH(){}var eq=!1;function eK(e,t,n){if(eq)return e(t,n);eq=!0;try{return ej(e,t,n)}finally{eq=!1,(null!==eP||null!==eB)&&(eH(),eW())}}function eG(e,t){var n=e.stateNode;if(null===n)return null;var r=rX(n);if(null===r)return null;switch(n=r[t],t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(p(231,t,typeof n));return n}var eQ=!1;if(g)try{var eY={};Object.defineProperty(eY,"passive",{get:function(){eQ=!0}}),window.addEventListener("test",eY,eY),window.removeEventListener("test",eY,eY)}catch(e){eQ=!1}function eX(e,t,n,r,a,s,i,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(e){this.onError(e)}}var eJ=!1,eZ=null,e0=!1,e1=null,e2={onError:function(e){eJ=!0,eZ=e}};function e3(e,t,n,r,a,s,i,o,l){eJ=!1,eZ=null,eX.apply(e2,arguments)}function e4(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do 0!=(4098&(t=e).flags)&&(n=t.return),e=t.return;while(e)}return 3===t.tag?n:null}function e6(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&null!==(e=e.alternate)&&(t=e.memoizedState),null!==t)return t.dehydrated}return null}function e5(e){if(e4(e)!==e)throw Error(p(188))}function e8(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=e4(e)))throw Error(p(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var s=a.alternate;if(null===s){if(null!==(r=a.return)){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return e5(a),e;if(s===r)return e5(a),t;s=s.sibling}throw Error(p(188))}if(n.return!==r.return)n=a,r=s;else{for(var i=!1,o=a.child;o;){if(o===n){i=!0,n=a,r=s;break}if(o===r){i=!0,r=a,n=s;break}o=o.sibling}if(!i){for(o=s.child;o;){if(o===n){i=!0,n=s,r=a;break}if(o===r){i=!0,r=s,n=a;break}o=o.sibling}if(!i)throw Error(p(189))}}if(n.alternate!==r)throw Error(p(190))}if(3!==n.tag)throw Error(p(188));return n.stateNode.current===n?e:t}(e))?function e(t){if(5===t.tag||6===t.tag)return t;for(t=t.child;null!==t;){var n=e(t);if(null!==n)return n;t=t.sibling}return null}(e):null}var e7=c.unstable_scheduleCallback,e9=c.unstable_cancelCallback,te=c.unstable_shouldYield,tt=c.unstable_requestPaint,tn=c.unstable_now,tr=c.unstable_getCurrentPriorityLevel,ta=c.unstable_ImmediatePriority,ts=c.unstable_UserBlockingPriority,ti=c.unstable_NormalPriority,to=c.unstable_LowPriority,tl=c.unstable_IdlePriority,tu=null,tc=null,tp=Math.clz32?Math.clz32:function(e){return 0==(e>>>=0)?32:31-(td(e)/tf|0)|0},td=Math.log,tf=Math.LN2,th=64,tm=4194304;function tg(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ty(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,s=e.pingedLanes,i=268435455&n;if(0!==i){var o=i&~a;0!==o?r=tg(o):0!=(s&=i)&&(r=tg(s))}else 0!=(i=n&~a)?r=tg(i):0!==s&&(r=tg(s));if(0===r)return 0;if(0!==t&&t!==r&&0==(t&a)&&((a=r&-r)>=(s=t&-t)||16===a&&0!=(4194240&s)))return t;if(0!=(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-tp(t)),r|=e[n],t&=~a;return r}function tb(e){return 0!=(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function tv(){var e=th;return 0==(4194240&(th<<=1))&&(th=64),e}function tw(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function tx(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-tp(t)]=n}function tk(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tp(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var tN=0;function tS(e){return 1<(e&=-e)?4<e?0!=(268435455&e)?16:536870912:4:1}var tE,tT,t_,tI,tA,tM=!1,tO=[],tC=null,t$=null,tD=null,tR=new Map,tL=new Map,tF=[],tz="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tP(e,t){switch(e){case"focusin":case"focusout":tC=null;break;case"dragenter":case"dragleave":t$=null;break;case"mouseover":case"mouseout":tD=null;break;case"pointerover":case"pointerout":tR.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":tL.delete(t.pointerId)}}function tB(e,t,n,r,a,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[a]},null!==t&&null!==(t=rQ(t))&&tT(t)):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a)),e}function tU(e){var t=rG(e.target);if(null!==t){var n=e4(t);if(null!==n){if(13===(t=n.tag)){if(null!==(t=e6(n))){e.blockedOn=t,tA(e.priority,function(){t_(n)});return}}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=3===n.tag?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function tV(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=tZ(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=rQ(n))&&tT(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);eL=r,n.target.dispatchEvent(r),eL=null,t.shift()}return!0}function tW(e,t,n){tV(e)&&n.delete(t)}function tj(){tM=!1,null!==tC&&tV(tC)&&(tC=null),null!==t$&&tV(t$)&&(t$=null),null!==tD&&tV(tD)&&(tD=null),tR.forEach(tW),tL.forEach(tW)}function tH(e,t){e.blockedOn===t&&(e.blockedOn=null,tM||(tM=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,tj)))}function tq(e){function t(t){return tH(t,e)}if(0<tO.length){tH(tO[0],e);for(var n=1;n<tO.length;n++){var r=tO[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==tC&&tH(tC,e),null!==t$&&tH(t$,e),null!==tD&&tH(tD,e),tR.forEach(t),tL.forEach(t),n=0;n<tF.length;n++)(r=tF[n]).blockedOn===e&&(r.blockedOn=null);for(;0<tF.length&&null===(n=tF[0]).blockedOn;)tU(n),null===n.blockedOn&&tF.shift()}var tK=T.ReactCurrentBatchConfig,tG=!0;function tQ(e,t,n,r){var a=tN,s=tK.transition;tK.transition=null;try{tN=1,tX(e,t,n,r)}finally{tN=a,tK.transition=s}}function tY(e,t,n,r){var a=tN,s=tK.transition;tK.transition=null;try{tN=4,tX(e,t,n,r)}finally{tN=a,tK.transition=s}}function tX(e,t,n,r){if(tG){var a=tZ(e,t,n,r);if(null===a)rw(e,t,r,tJ,n),tP(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return tC=tB(tC,e,t,n,r,a),!0;case"dragenter":return t$=tB(t$,e,t,n,r,a),!0;case"mouseover":return tD=tB(tD,e,t,n,r,a),!0;case"pointerover":var s=a.pointerId;return tR.set(s,tB(tR.get(s)||null,e,t,n,r,a)),!0;case"gotpointercapture":return s=a.pointerId,tL.set(s,tB(tL.get(s)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(tP(e,r),4&t&&-1<tz.indexOf(e)){for(;null!==a;){var s=rQ(a);if(null!==s&&tE(s),null===(s=tZ(e,t,n,r))&&rw(e,t,r,tJ,n),s===a)break;a=s}null!==a&&r.stopPropagation()}else rw(e,t,r,null,n)}}var tJ=null;function tZ(e,t,n,r){if(tJ=null,null!==(e=rG(e=eF(r)))){if(null===(t=e4(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=e6(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}return tJ=e,null}function t0(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(tr()){case ta:return 1;case ts:return 4;case ti:case to:return 16;case tl:return 536870912;default:return 16}default:return 16}}var t1=null,t2=null,t3=null;function t4(){if(t3)return t3;var e,t,n=t2,r=n.length,a="value"in t1?t1.value:t1.textContent,s=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[s-t];t++);return t3=a.slice(e,1<t?1-t:void 0)}function t6(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function t5(){return!0}function t8(){return!1}function t7(e){function t(t,n,r,a,s){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?t5:t8,this.isPropagationStopped=t8,this}return en(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=t5)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=t5)},persist:function(){},isPersistent:t5}),t}var t9,ne,nt,nn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nr=t7(nn),na=en({},nn,{view:0,detail:0}),ns=t7(na),ni=en({},na,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ny,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==nt&&(nt&&"mousemove"===e.type?(t9=e.screenX-nt.screenX,ne=e.screenY-nt.screenY):ne=t9=0,nt=e),t9)},movementY:function(e){return"movementY"in e?e.movementY:ne}}),no=t7(ni),nl=t7(en({},ni,{dataTransfer:0})),nu=t7(en({},na,{relatedTarget:0})),nc=t7(en({},nn,{animationName:0,elapsedTime:0,pseudoElement:0})),np=t7(en({},nn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),nd=t7(en({},nn,{data:0})),nf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nm={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ng(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=nm[e])&&!!t[e]}function ny(){return ng}var nb=t7(en({},na,{key:function(e){if(e.key){var t=nf[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=t6(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?nh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ny,charCode:function(e){return"keypress"===e.type?t6(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?t6(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),nv=t7(en({},ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),nw=t7(en({},na,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ny})),nx=t7(en({},nn,{propertyName:0,elapsedTime:0,pseudoElement:0})),nk=t7(en({},ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),nN=[9,13,27,32],nS=g&&"CompositionEvent"in window,nE=null;g&&"documentMode"in document&&(nE=document.documentMode);var nT=g&&"TextEvent"in window&&!nE,n_=g&&(!nS||nE&&8<nE&&11>=nE),nI=!1;function nA(e,t){switch(e){case"keyup":return -1!==nN.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nM(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var nO=!1,nC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function n$(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!nC[e.type]:"textarea"===t}function nD(e,t,n,r){eV(r),0<(t=rk(t,"onChange")).length&&(n=new nr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var nR=null,nL=null;function nF(e){rh(e,0)}function nz(e){if(eu(rY(e)))return e}function nP(e,t){if("change"===e)return t}var nB=!1;if(g){if(g){var nU="oninput"in document;if(!nU){var nV=document.createElement("div");nV.setAttribute("oninput","return;"),nU="function"==typeof nV.oninput}n=nU}else n=!1;nB=n&&(!document.documentMode||9<document.documentMode)}function nW(){nR&&(nR.detachEvent("onpropertychange",nj),nL=nR=null)}function nj(e){if("value"===e.propertyName&&nz(nL)){var t=[];nD(t,nL,e,eF(e)),eK(nF,t)}}function nH(e,t,n){"focusin"===e?(nW(),nR=t,nL=n,nR.attachEvent("onpropertychange",nj)):"focusout"===e&&nW()}function nq(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return nz(nL)}function nK(e,t){if("click"===e)return nz(t)}function nG(e,t){if("input"===e||"change"===e)return nz(t)}var nQ="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function nY(e,t){if(nQ(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!y.call(t,a)||!nQ(e[a],t[a]))return!1}return!0}function nX(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function nJ(e,t){var n,r=nX(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=nX(r)}}function nZ(){for(var e=window,t=ec();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(e){n=!1}if(n)e=t.contentWindow;else break;t=ec(e.document)}return t}function n0(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var n1=g&&"documentMode"in document&&11>=document.documentMode,n2=null,n3=null,n4=null,n6=!1;function n5(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;n6||null==n2||n2!==ec(r)||(r="selectionStart"in(r=n2)&&n0(r)?{start:r.selectionStart,end:r.selectionEnd}:{anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},n4&&nY(n4,r)||(n4=r,0<(r=rk(n3,"onSelect")).length&&(t=new nr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=n2)))}function n8(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var n7={animationend:n8("Animation","AnimationEnd"),animationiteration:n8("Animation","AnimationIteration"),animationstart:n8("Animation","AnimationStart"),transitionend:n8("Transition","TransitionEnd")},n9={},re={};function rt(e){if(n9[e])return n9[e];if(!n7[e])return e;var t,n=n7[e];for(t in n)if(n.hasOwnProperty(t)&&t in re)return n9[e]=n[t];return e}g&&(re=document.createElement("div").style,"AnimationEvent"in window||(delete n7.animationend.animation,delete n7.animationiteration.animation,delete n7.animationstart.animation),"TransitionEvent"in window||delete n7.transitionend.transition);var rn=rt("animationend"),rr=rt("animationiteration"),ra=rt("animationstart"),rs=rt("transitionend"),ri=new Map,ro="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function rl(e,t){ri.set(e,t),h(t,[e])}for(var ru=0;ru<ro.length;ru++){var rc=ro[ru];rl(rc.toLowerCase(),"on"+(rc[0].toUpperCase()+rc.slice(1)))}rl(rn,"onAnimationEnd"),rl(rr,"onAnimationIteration"),rl(ra,"onAnimationStart"),rl("dblclick","onDoubleClick"),rl("focusin","onFocus"),rl("focusout","onBlur"),rl(rs,"onTransitionEnd"),m("onMouseEnter",["mouseout","mouseover"]),m("onMouseLeave",["mouseout","mouseover"]),m("onPointerEnter",["pointerout","pointerover"]),m("onPointerLeave",["pointerout","pointerover"]),h("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),h("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),h("onBeforeInput",["compositionend","keypress","textInput","paste"]),h("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),h("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var rp="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rd=new Set("cancel close invalid load scroll toggle".split(" ").concat(rp));function rf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,s,i,o,l){if(e3.apply(this,arguments),eJ){if(eJ){var u=eZ;eJ=!1,eZ=null}else throw Error(p(198));e0||(e0=!0,e1=u)}}(r,t,void 0,e),e.currentTarget=null}function rh(e,t){t=0!=(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var i=r.length-1;0<=i;i--){var o=r[i],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&a.isPropagationStopped())break e;rf(a,o,u),s=l}else for(i=0;i<r.length;i++){if(l=(o=r[i]).instance,u=o.currentTarget,o=o.listener,l!==s&&a.isPropagationStopped())break e;rf(a,o,u),s=l}}}if(e0)throw e=e1,e0=!1,e1=null,e}function rm(e,t){var n=t[rH];void 0===n&&(n=t[rH]=new Set);var r=e+"__bubble";n.has(r)||(rv(t,e,2,!1),n.add(r))}function rg(e,t,n){var r=0;t&&(r|=4),rv(n,e,r,t)}var ry="_reactListening"+Math.random().toString(36).slice(2);function rb(e){if(!e[ry]){e[ry]=!0,d.forEach(function(t){"selectionchange"!==t&&(rd.has(t)||rg(t,!1,e),rg(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[ry]||(t[ry]=!0,rg("selectionchange",!1,t))}}function rv(e,t,n,r){switch(t0(t)){case 1:var a=tQ;break;case 4:a=tY;break;default:a=tX}n=a.bind(null,t,n,e),a=void 0,eQ&&("touchstart"===t||"touchmove"===t||"wheel"===t)&&(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function rw(e,t,n,r,a){var s=r;if(0==(1&t)&&0==(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var o=r.stateNode.containerInfo;if(o===a||8===o.nodeType&&o.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var l=i.tag;if((3===l||4===l)&&((l=i.stateNode.containerInfo)===a||8===l.nodeType&&l.parentNode===a))return;i=i.return}for(;null!==o;){if(null===(i=rG(o)))return;if(5===(l=i.tag)||6===l){r=s=i;continue e}o=o.parentNode}}r=r.return}eK(function(){var r=s,a=eF(n),i=[];e:{var o=ri.get(e);if(void 0!==o){var l=nr,u=e;switch(e){case"keypress":if(0===t6(n))break e;case"keydown":case"keyup":l=nb;break;case"focusin":u="focus",l=nu;break;case"focusout":u="blur",l=nu;break;case"beforeblur":case"afterblur":l=nu;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=no;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=nl;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=nw;break;case rn:case rr:case ra:l=nc;break;case rs:l=nx;break;case"scroll":l=ns;break;case"wheel":l=nk;break;case"copy":case"cut":case"paste":l=np;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=nv}var c=0!=(4&t),p=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,h=r;null!==h;){var m=(f=h).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&null!=(m=eG(h,d))&&c.push(rx(h,m,f))),p)break;h=h.return}0<c.length&&(o=new l(o,u,null,n,a),i.push({event:o,listeners:c}))}}if(0==(7&t)){if(o="mouseover"===e||"pointerover"===e,l="mouseout"===e||"pointerout"===e,!(o&&n!==eL&&(u=n.relatedTarget||n.fromElement)&&(rG(u)||u[rj]))&&(l||o)&&(o=a.window===a?a:(o=a.ownerDocument)?o.defaultView||o.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,null!==(u=u?rG(u):null)&&(p=e4(u),u!==p||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=no,m="onMouseLeave",d="onMouseEnter",h="mouse",("pointerout"===e||"pointerover"===e)&&(c=nv,m="onPointerLeave",d="onPointerEnter",h="pointer"),p=null==l?o:rY(l),f=null==u?o:rY(u),(o=new c(m,h+"leave",l,n,a)).target=p,o.relatedTarget=f,m=null,rG(a)===r&&((c=new c(d,h+"enter",u,n,a)).target=f,c.relatedTarget=p,m=c),p=m,l&&u)t:{for(c=l,d=u,h=0,f=c;f;f=rN(f))h++;for(f=0,m=d;m;m=rN(m))f++;for(;0<h-f;)c=rN(c),h--;for(;0<f-h;)d=rN(d),f--;for(;h--;){if(c===d||null!==d&&c===d.alternate)break t;c=rN(c),d=rN(d)}c=null}else c=null;null!==l&&rS(i,o,l,c,!1),null!==u&&null!==p&&rS(i,p,u,c,!0)}e:{if("select"===(l=(o=r?rY(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g,y=nP;else if(n$(o)){if(nB)y=nG;else{y=nq;var b=nH}}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(y=nK);if(y&&(y=y(e,r))){nD(i,y,n,a);break e}b&&b(e,o,r),"focusout"===e&&(b=o._wrapperState)&&b.controlled&&"number"===o.type&&eg(o,"number",o.value)}switch(b=r?rY(r):window,e){case"focusin":(n$(b)||"true"===b.contentEditable)&&(n2=b,n3=r,n4=null);break;case"focusout":n4=n3=n2=null;break;case"mousedown":n6=!0;break;case"contextmenu":case"mouseup":case"dragend":n6=!1,n5(i,n,a);break;case"selectionchange":if(n1)break;case"keydown":case"keyup":n5(i,n,a)}if(nS)t:{switch(e){case"compositionstart":var v="onCompositionStart";break t;case"compositionend":v="onCompositionEnd";break t;case"compositionupdate":v="onCompositionUpdate";break t}v=void 0}else nO?nA(e,n)&&(v="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(v="onCompositionStart");v&&(n_&&"ko"!==n.locale&&(nO||"onCompositionStart"!==v?"onCompositionEnd"===v&&nO&&(g=t4()):(t2="value"in(t1=a)?t1.value:t1.textContent,nO=!0)),0<(b=rk(r,v)).length&&(v=new nd(v,e,null,n,a),i.push({event:v,listeners:b}),g?v.data=g:null!==(g=nM(n))&&(v.data=g))),(g=nT?function(e,t){switch(e){case"compositionend":return nM(t);case"keypress":if(32!==t.which)return null;return nI=!0," ";case"textInput":return" "===(e=t.data)&&nI?null:e;default:return null}}(e,n):function(e,t){if(nO)return"compositionend"===e||!nS&&nA(e,t)?(e=t4(),t3=t2=t1=null,nO=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return n_&&"ko"!==t.locale?null:t.data}}(e,n))&&0<(r=rk(r,"onBeforeInput")).length&&(a=new nd("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=g)}rh(i,t)})}function rx(e,t,n){return{instance:e,listener:t,currentTarget:n}}function rk(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,s=a.stateNode;5===a.tag&&null!==s&&(a=s,null!=(s=eG(e,n))&&r.unshift(rx(e,s,a)),null!=(s=eG(e,t))&&r.push(rx(e,s,a))),e=e.return}return r}function rN(e){if(null===e)return null;do e=e.return;while(e&&5!==e.tag)return e||null}function rS(e,t,n,r,a){for(var s=t._reactName,i=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,a?null!=(l=eG(n,s))&&i.unshift(rx(n,l,o)):a||null!=(l=eG(n,s))&&i.push(rx(n,l,o))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var rE=/\r\n?/g,rT=/\u0000|\uFFFD/g;function r_(e){return("string"==typeof e?e:""+e).replace(rE,"\n").replace(rT,"")}function rI(e,t,n){if(t=r_(t),r_(e)!==t&&n)throw Error(p(425))}function rA(){}var rM=null,rO=null;function rC(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var r$="function"==typeof setTimeout?setTimeout:void 0,rD="function"==typeof clearTimeout?clearTimeout:void 0,rR="function"==typeof Promise?Promise:void 0,rL="function"==typeof queueMicrotask?queueMicrotask:void 0!==rR?function(e){return rR.resolve(null).then(e).catch(rF)}:r$;function rF(e){setTimeout(function(){throw e})}function rz(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType){if("/$"===(n=a.data)){if(0===r){e.removeChild(a),tq(t);return}r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++}n=a}while(n)tq(t)}function rP(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function rB(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var rU=Math.random().toString(36).slice(2),rV="__reactFiber$"+rU,rW="__reactProps$"+rU,rj="__reactContainer$"+rU,rH="__reactEvents$"+rU,rq="__reactListeners$"+rU,rK="__reactHandles$"+rU;function rG(e){var t=e[rV];if(t)return t;for(var n=e.parentNode;n;){if(t=n[rj]||n[rV]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=rB(e);null!==e;){if(n=e[rV])return n;e=rB(e)}return t}n=(e=n).parentNode}return null}function rQ(e){return(e=e[rV]||e[rj])&&(5===e.tag||6===e.tag||13===e.tag||3===e.tag)?e:null}function rY(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(p(33))}function rX(e){return e[rW]||null}var rJ=[],rZ=-1;function r0(e){return{current:e}}function r1(e){0>rZ||(e.current=rJ[rZ],rJ[rZ]=null,rZ--)}function r2(e,t){rJ[++rZ]=e.current,e.current=t}var r3={},r4=r0(r3),r6=r0(!1),r5=r3;function r8(e,t){var n=e.type.contextTypes;if(!n)return r3;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,s={};for(a in n)s[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function r7(e){return null!=(e=e.childContextTypes)}function r9(){r1(r6),r1(r4)}function ae(e,t,n){if(r4.current!==r3)throw Error(p(168));r2(r4,t),r2(r6,n)}function at(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(p(108,function(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return function e(t){if(null==t)return null;if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t;switch(t){case A:return"Fragment";case I:return"Portal";case O:return"Profiler";case M:return"StrictMode";case L:return"Suspense";case F:return"SuspenseList"}if("object"==typeof t)switch(t.$$typeof){case $:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case R:var n=t.render;return(t=t.displayName)||(t=""!==(t=n.displayName||n.name||"")?"ForwardRef("+t+")":"ForwardRef"),t;case z:return null!==(n=t.displayName||null)?n:e(t.type)||"Memo";case P:n=t._payload,t=t._init;try{return e(t(n))}catch(e){}}return null}(t);case 8:return t===M?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}(e)||"Unknown",a));return en({},n,r)}function an(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||r3,r5=r4.current,r2(r4,e),r2(r6,r6.current),!0}function ar(e,t,n){var r=e.stateNode;if(!r)throw Error(p(169));n?(e=at(e,t,r5),r.__reactInternalMemoizedMergedChildContext=e,r1(r6),r1(r4),r2(r4,e)):r1(r6),r2(r6,n)}var aa=null,as=!1,ai=!1;function ao(e){null===aa?aa=[e]:aa.push(e)}function al(){if(!ai&&null!==aa){ai=!0;var e=0,t=tN;try{var n=aa;for(tN=1;e<n.length;e++){var r=n[e];do r=r(!0);while(null!==r)}aa=null,as=!1}catch(t){throw null!==aa&&(aa=aa.slice(e+1)),e7(ta,al),t}finally{tN=t,ai=!1}}return null}var au=[],ac=0,ap=null,ad=0,af=[],ah=0,am=null,ag=1,ay="";function ab(e,t){au[ac++]=ad,au[ac++]=ap,ap=e,ad=t}function av(e,t,n){af[ah++]=ag,af[ah++]=ay,af[ah++]=am,am=e;var r=ag;e=ay;var a=32-tp(r)-1;r&=~(1<<a),n+=1;var s=32-tp(t)+a;if(30<s){var i=a-a%5;s=(r&(1<<i)-1).toString(32),r>>=i,a-=i,ag=1<<32-tp(t)+a|n<<a|r,ay=s+e}else ag=1<<s|n<<a|r,ay=e}function aw(e){null!==e.return&&(ab(e,1),av(e,1,0))}function ax(e){for(;e===ap;)ap=au[--ac],au[ac]=null,ad=au[--ac],au[ac]=null;for(;e===am;)am=af[--ah],af[ah]=null,ay=af[--ah],af[ah]=null,ag=af[--ah],af[ah]=null}var ak=null,aN=null,aS=!1,aE=null;function aT(e,t){var n=o8(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function a_(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ak=e,aN=rP(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ak=e,aN=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==am?{id:ag,overflow:ay}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=o8(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ak=e,aN=null,!0);default:return!1}}function aI(e){return 0!=(1&e.mode)&&0==(128&e.flags)}function aA(e){if(aS){var t=aN;if(t){var n=t;if(!a_(e,t)){if(aI(e))throw Error(p(418));t=rP(n.nextSibling);var r=ak;t&&a_(e,t)?aT(r,n):(e.flags=-4097&e.flags|2,aS=!1,ak=e)}}else{if(aI(e))throw Error(p(418));e.flags=-4097&e.flags|2,aS=!1,ak=e}}}function aM(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ak=e}function aO(e){if(e!==ak)return!1;if(!aS)return aM(e),aS=!0,!1;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!rC(e.type,e.memoizedProps)),t&&(t=aN)){if(aI(e))throw aC(),Error(p(418));for(;t;)aT(e,t),t=rP(t.nextSibling)}if(aM(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(p(317));e:{for(t=0,e=e.nextSibling;e;){if(8===e.nodeType){var t,n=e.data;if("/$"===n){if(0===t){aN=rP(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}aN=null}}else aN=ak?rP(e.stateNode.nextSibling):null;return!0}function aC(){for(var e=aN;e;)e=rP(e.nextSibling)}function a$(){aN=ak=null,aS=!1}function aD(e){null===aE?aE=[e]:aE.push(e)}var aR=T.ReactCurrentBatchConfig;function aL(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(p(309));var r=n.stateNode}if(!r)throw Error(p(147,e));var a=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=a.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(p(284));if(!n._owner)throw Error(p(290,e))}return e}function aF(e,t){throw Error(p(31,"[object Object]"===(e=Object.prototype.toString.call(t))?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function az(e){return(0,e._init)(e._payload)}function aP(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=o9(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return(t.index=r,e)?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function i(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?(t=lr(n,e.mode,r)).return=e:(t=a(t,n)).return=e,t}function l(e,t,n,r){var s=n.type;return s===A?c(e,t,n.props.children,r,n.key):(null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===P&&az(s)===t.type)?(r=a(t,n.props)).ref=aL(e,t,n):(r=le(n.type,n.key,n.props,null,e.mode,r)).ref=aL(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=la(n,e.mode,r)).return=e:(t=a(t,n.children||[])).return=e,t}function c(e,t,n,r,s){return null===t||7!==t.tag?(t=lt(n,e.mode,r,s)).return=e:(t=a(t,n)).return=e,t}function d(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=lr(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case _:return(n=le(t.type,t.key,t.props,null,e.mode,n)).ref=aL(e,null,t),n.return=e,n;case I:return(t=la(t,e.mode,n)).return=e,t;case P:return d(e,(0,t._init)(t._payload),n)}if(ey(t)||V(t))return(t=lt(t,e.mode,n,null)).return=e,t;aF(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==a?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case _:return n.key===a?l(e,t,n,r):null;case I:return n.key===a?u(e,t,n,r):null;case P:return f(e,t,(a=n._init)(n._payload),r)}if(ey(n)||V(n))return null!==a?null:c(e,t,n,r,null);aF(e,n)}return null}function h(e,t,n,r,a){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,a);if("object"==typeof r&&null!==r){switch(r.$$typeof){case _:return l(t,e=e.get(null===r.key?n:r.key)||null,r,a);case I:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case P:return h(e,t,n,(0,r._init)(r._payload),a)}if(ey(r)||V(r))return c(t,e=e.get(n)||null,r,a,null);aF(t,r)}return null}return function o(l,u,c,m){if("object"==typeof c&&null!==c&&c.type===A&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case _:e:{for(var g=c.key,y=u;null!==y;){if(y.key===g){if((g=c.type)===A){if(7===y.tag){n(l,y.sibling),(u=a(y,c.props.children)).return=l,l=u;break e}}else if(y.elementType===g||"object"==typeof g&&null!==g&&g.$$typeof===P&&az(g)===y.type){n(l,y.sibling),(u=a(y,c.props)).ref=aL(l,y,c),u.return=l,l=u;break e}n(l,y);break}t(l,y),y=y.sibling}c.type===A?((u=lt(c.props.children,l.mode,m,c.key)).return=l,l=u):((m=le(c.type,c.key,c.props,null,l.mode,m)).ref=aL(l,u,c),m.return=l,l=m)}return i(l);case I:e:{for(y=c.key;null!==u;){if(u.key===y){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=a(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=la(c,l.mode,m)).return=l,l=u}return i(l);case P:return o(l,u,(y=c._init)(c._payload),m)}if(ey(c))return function(a,i,o,l){for(var u=null,c=null,p=i,m=i=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=f(a,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(a,p),i=s(y,i,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(a,p),aS&&ab(a,m),u;if(null===p){for(;m<o.length;m++)null!==(p=d(a,o[m],l))&&(i=s(p,i,m),null===c?u=p:c.sibling=p,c=p);return aS&&ab(a,m),u}for(p=r(a,p);m<o.length;m++)null!==(g=h(p,a,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),i=s(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach(function(e){return t(a,e)}),aS&&ab(a,m),u}(l,u,c,m);if(V(c))return function(a,i,o,l){var u=V(o);if("function"!=typeof u)throw Error(p(150));if(null==(o=u.call(o)))throw Error(p(151));for(var c=u=null,m=i,g=i=0,y=null,b=o.next();null!==m&&!b.done;g++,b=o.next()){m.index>g?(y=m,m=null):y=m.sibling;var v=f(a,m,b.value,l);if(null===v){null===m&&(m=y);break}e&&m&&null===v.alternate&&t(a,m),i=s(v,i,g),null===c?u=v:c.sibling=v,c=v,m=y}if(b.done)return n(a,m),aS&&ab(a,g),u;if(null===m){for(;!b.done;g++,b=o.next())null!==(b=d(a,b.value,l))&&(i=s(b,i,g),null===c?u=b:c.sibling=b,c=b);return aS&&ab(a,g),u}for(m=r(a,m);!b.done;g++,b=o.next())null!==(b=h(m,a,g,b.value,l))&&(e&&null!==b.alternate&&m.delete(null===b.key?g:b.key),i=s(b,i,g),null===c?u=b:c.sibling=b,c=b);return e&&m.forEach(function(e){return t(a,e)}),aS&&ab(a,g),u}(l,u,c,m);aF(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=a(u,c)).return=l):(n(l,u),(u=lr(c,l.mode,m)).return=l),i(l=u)):n(l,u)}}var aB=aP(!0),aU=aP(!1),aV=r0(null),aW=null,aj=null,aH=null;function aq(){aH=aj=aW=null}function aK(e){var t=aV.current;r1(aV),e._currentValue=t}function aG(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function aQ(e,t){aW=e,aH=aj=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!=(e.lanes&t)&&(iw=!0),e.firstContext=null)}function aY(e){var t=e._currentValue;if(aH!==e){if(e={context:e,memoizedValue:t,next:null},null===aj){if(null===aW)throw Error(p(308));aj=e,aW.dependencies={lanes:0,firstContext:e}}else aj=aj.next=e}return t}var aX=null;function aJ(e){null===aX?aX=[e]:aX.push(e)}function aZ(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,aJ(t)):(n.next=a.next,a.next=n),t.interleaved=n,a0(e,r)}function a0(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var a1=!1;function a2(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function a3(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function a4(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function a6(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!=(2&oo)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,a0(e,n)}return null===(a=r.interleaved)?(t.next=t,aJ(r)):(t.next=a.next,a.next=t),r.interleaved=t,a0(e,n)}function a5(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!=(4194240&n))){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}function a8(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?a=s=i:s=s.next=i,n=n.next}while(null!==n)null===s?a=s=t:s=s.next=t}else a=s=t;n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function a7(e,t,n,r){var a=e.updateQueue;a1=!1;var s=a.firstBaseUpdate,i=a.lastBaseUpdate,o=a.shared.pending;if(null!==o){a.shared.pending=null;var l=o,u=l.next;l.next=null,null===i?s=u:i.next=u,i=l;var c=e.alternate;null!==c&&(o=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l)}if(null!==s){var p=a.baseState;for(i=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var h=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(h=m.payload)){p=h.call(f,p,d);break e}p=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null==(d="function"==typeof(h=m.payload)?h.call(f,p,d):h))break e;p=en({},p,d);break e;case 2:a1=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=a.effects)?a.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=p):c=c.next=f,i|=d;if(null===(o=o.next)){if(null===(o=a.shared.pending))break;o=(d=o).next,d.next=null,a.lastBaseUpdate=d,a.shared.pending=null}}if(null===c&&(l=p),a.baseState=l,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do i|=a.lane,a=a.next;while(a!==t)}else null===s&&(a.shared.lanes=0);om|=i,e.lanes=i,e.memoizedState=p}}function a9(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!=typeof a)throw Error(p(191,a));a.call(r)}}}var se={},st=r0(se),sn=r0(se),sr=r0(se);function sa(e){if(e===se)throw Error(p(174));return e}function ss(e,t){switch(r2(sr,t),r2(sn,e),r2(st,se),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:eS(null,"");break;default:t=eS(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}r1(st),r2(st,t)}function si(){r1(st),r1(sn),r1(sr)}function so(e){sa(sr.current);var t=sa(st.current),n=eS(t,e.type);t!==n&&(r2(sn,e),r2(st,n))}function sl(e){sn.current===e&&(r1(st),r1(sn))}var su=r0(0);function sc(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!=(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var sp=[];function sd(){for(var e=0;e<sp.length;e++)sp[e]._workInProgressVersionPrimary=null;sp.length=0}var sf=T.ReactCurrentDispatcher,sh=T.ReactCurrentBatchConfig,sm=0,sg=null,sy=null,sb=null,sv=!1,sw=!1,sx=0,sk=0;function sN(){throw Error(p(321))}function sS(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!nQ(e[n],t[n]))return!1;return!0}function sE(e,t,n,r,a,s){if(sm=s,sg=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,sf.current=null===e||null===e.memoizedState?s7:s9,e=n(r,a),sw){s=0;do{if(sw=!1,sx=0,25<=s)throw Error(p(301));s+=1,sb=sy=null,t.updateQueue=null,sf.current=ie,e=n(r,a)}while(sw)}if(sf.current=s8,t=null!==sy&&null!==sy.next,sm=0,sb=sy=sg=null,sv=!1,t)throw Error(p(300));return e}function sT(){var e=0!==sx;return sx=0,e}function s_(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===sb?sg.memoizedState=sb=e:sb=sb.next=e,sb}function sI(){if(null===sy){var e=sg.alternate;e=null!==e?e.memoizedState:null}else e=sy.next;var t=null===sb?sg.memoizedState:sb.next;if(null!==t)sb=t,sy=e;else{if(null===e)throw Error(p(310));e={memoizedState:(sy=e).memoizedState,baseState:sy.baseState,baseQueue:sy.baseQueue,queue:sy.queue,next:null},null===sb?sg.memoizedState=sb=e:sb=sb.next=e}return sb}function sA(e,t){return"function"==typeof t?t(e):t}function sM(e){var t=sI(),n=t.queue;if(null===n)throw Error(p(311));n.lastRenderedReducer=e;var r=sy,a=r.baseQueue,s=n.pending;if(null!==s){if(null!==a){var i=a.next;a.next=s.next,s.next=i}r.baseQueue=a=s,n.pending=null}if(null!==a){s=a.next,r=r.baseState;var o=i=null,l=null,u=s;do{var c=u.lane;if((sm&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=d,i=r):l=l.next=d,sg.lanes|=c,om|=c}u=u.next}while(null!==u&&u!==s)null===l?i=r:l.next=o,nQ(r,t.memoizedState)||(iw=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do s=a.lane,sg.lanes|=s,om|=s,a=a.next;while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sO(e){var t=sI(),n=t.queue;if(null===n)throw Error(p(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,s=t.memoizedState;if(null!==a){n.pending=null;var i=a=a.next;do s=e(s,i.action),i=i.next;while(i!==a)nQ(s,t.memoizedState)||(iw=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function sC(){}function s$(e,t){var n=sg,r=sI(),a=t(),s=!nQ(r.memoizedState,a);if(s&&(r.memoizedState=a,iw=!0),r=r.queue,sH(sL.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==sb&&1&sb.memoizedState.tag){if(n.flags|=2048,sB(9,sR.bind(null,n,r,a,t),void 0,null),null===ol)throw Error(p(349));0!=(30&sm)||sD(n,t,a)}return a}function sD(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=sg.updateQueue)?(t={lastEffect:null,stores:null},sg.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function sR(e,t,n,r){t.value=n,t.getSnapshot=r,sF(t)&&sz(e)}function sL(e,t,n){return n(function(){sF(t)&&sz(e)})}function sF(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!nQ(e,n)}catch(e){return!0}}function sz(e){var t=a0(e,1);null!==t&&oR(t,e,1,-1)}function sP(e){var t=s_();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:sA,lastRenderedState:e},t.queue=e,e=e.dispatch=s3.bind(null,sg,e),[t.memoizedState,e]}function sB(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=sg.updateQueue)?(t={lastEffect:null,stores:null},sg.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function sU(){return sI().memoizedState}function sV(e,t,n,r){var a=s_();sg.flags|=e,a.memoizedState=sB(1|t,n,void 0,void 0===r?null:r)}function sW(e,t,n,r){var a=sI();r=void 0===r?null:r;var s=void 0;if(null!==sy){var i=sy.memoizedState;if(s=i.destroy,null!==r&&sS(r,i.deps)){a.memoizedState=sB(t,n,s,r);return}}sg.flags|=e,a.memoizedState=sB(1|t,n,s,r)}function sj(e,t){return sV(8390656,8,e,t)}function sH(e,t){return sW(2048,8,e,t)}function sq(e,t){return sW(4,2,e,t)}function sK(e,t){return sW(4,4,e,t)}function sG(e,t){return"function"==typeof t?(t(e=e()),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function sQ(e,t,n){return n=null!=n?n.concat([e]):null,sW(4,4,sG.bind(null,t,e),n)}function sY(){}function sX(e,t){var n=sI();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&sS(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function sJ(e,t){var n=sI();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&sS(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function sZ(e,t,n){return 0==(21&sm)?(e.baseState&&(e.baseState=!1,iw=!0),e.memoizedState=n):(nQ(n,t)||(n=tv(),sg.lanes|=n,om|=n,e.baseState=!0),t)}function s0(e,t){var n=tN;tN=0!==n&&4>n?n:4,e(!0);var r=sh.transition;sh.transition={};try{e(!1),t()}finally{tN=n,sh.transition=r}}function s1(){return sI().memoizedState}function s2(e,t,n){var r=oD(e);n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},s4(e)?s6(t,n):null!==(n=aZ(e,t,n,r))&&(oR(n,e,r,o$()),s5(n,t,r))}function s3(e,t,n){var r=oD(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(s4(e))s6(t,a);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var i=t.lastRenderedState,o=s(i,n);if(a.hasEagerState=!0,a.eagerState=o,nQ(o,i)){var l=t.interleaved;null===l?(a.next=a,aJ(t)):(a.next=l.next,l.next=a),t.interleaved=a;return}}catch(e){}finally{}null!==(n=aZ(e,t,a,r))&&(oR(n,e,r,a=o$()),s5(n,t,r))}}function s4(e){var t=e.alternate;return e===sg||null!==t&&t===sg}function s6(e,t){sw=sv=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function s5(e,t,n){if(0!=(4194240&n)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,tk(e,n)}}var s8={readContext:aY,useCallback:sN,useContext:sN,useEffect:sN,useImperativeHandle:sN,useInsertionEffect:sN,useLayoutEffect:sN,useMemo:sN,useReducer:sN,useRef:sN,useState:sN,useDebugValue:sN,useDeferredValue:sN,useTransition:sN,useMutableSource:sN,useSyncExternalStore:sN,useId:sN,unstable_isNewReconciler:!1},s7={readContext:aY,useCallback:function(e,t){return s_().memoizedState=[e,void 0===t?null:t],e},useContext:aY,useEffect:sj,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,sV(4194308,4,sG.bind(null,t,e),n)},useLayoutEffect:function(e,t){return sV(4194308,4,e,t)},useInsertionEffect:function(e,t){return sV(4,2,e,t)},useMemo:function(e,t){var n=s_();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=s_();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=s2.bind(null,sg,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},s_().memoizedState=e},useState:sP,useDebugValue:sY,useDeferredValue:function(e){return s_().memoizedState=e},useTransition:function(){var e=sP(!1),t=e[0];return e=s0.bind(null,e[1]),s_().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=sg,a=s_();if(aS){if(void 0===n)throw Error(p(407));n=n()}else{if(n=t(),null===ol)throw Error(p(349));0!=(30&sm)||sD(r,t,n)}a.memoizedState=n;var s={value:n,getSnapshot:t};return a.queue=s,sj(sL.bind(null,r,s,e),[e]),r.flags|=2048,sB(9,sR.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=s_(),t=ol.identifierPrefix;if(aS){var n=ay,r=ag;t=":"+t+"R"+(n=(r&~(1<<32-tp(r)-1)).toString(32)+n),0<(n=sx++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=sk++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},s9={readContext:aY,useCallback:sX,useContext:aY,useEffect:sH,useImperativeHandle:sQ,useInsertionEffect:sq,useLayoutEffect:sK,useMemo:sJ,useReducer:sM,useRef:sU,useState:function(){return sM(sA)},useDebugValue:sY,useDeferredValue:function(e){return sZ(sI(),sy.memoizedState,e)},useTransition:function(){return[sM(sA)[0],sI().memoizedState]},useMutableSource:sC,useSyncExternalStore:s$,useId:s1,unstable_isNewReconciler:!1},ie={readContext:aY,useCallback:sX,useContext:aY,useEffect:sH,useImperativeHandle:sQ,useInsertionEffect:sq,useLayoutEffect:sK,useMemo:sJ,useReducer:sO,useRef:sU,useState:function(){return sO(sA)},useDebugValue:sY,useDeferredValue:function(e){var t=sI();return null===sy?t.memoizedState=e:sZ(t,sy.memoizedState,e)},useTransition:function(){return[sO(sA)[0],sI().memoizedState]},useMutableSource:sC,useSyncExternalStore:s$,useId:s1,unstable_isNewReconciler:!1};function it(e,t){if(e&&e.defaultProps)for(var n in t=en({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}function ir(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:en({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var ia={isMounted:function(e){return!!(e=e._reactInternals)&&e4(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=o$(),a=oD(e),s=a4(r,a);s.payload=t,null!=n&&(s.callback=n),null!==(t=a6(e,s,a))&&(oR(t,e,a,r),a5(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=o$(),a=oD(e),s=a4(r,a);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=a6(e,s,a))&&(oR(t,e,a,r),a5(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=o$(),r=oD(e),a=a4(n,r);a.tag=2,null!=t&&(a.callback=t),null!==(t=a6(e,a,r))&&(oR(t,e,r,n),a5(t,e,r))}};function is(e,t,n,r,a,s,i){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,i):!t.prototype||!t.prototype.isPureReactComponent||!nY(n,r)||!nY(a,s)}function ii(e,t,n){var r=!1,a=r3,s=t.contextType;return"object"==typeof s&&null!==s?s=aY(s):(a=r7(t)?r5:r4.current,s=(r=null!=(r=t.contextTypes))?r8(e,a):r3),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=ia,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function io(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ia.enqueueReplaceState(t,t.state,null)}function il(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},a2(e);var s=t.contextType;"object"==typeof s&&null!==s?a.context=aY(s):(s=r7(t)?r5:r4.current,a.context=r8(e,s)),a.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(ir(e,t,s,n),a.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof a.getSnapshotBeforeUpdate||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||(t=a.state,"function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&ia.enqueueReplaceState(a,a.state,null),a7(e,n,a,r),a.state=e.memoizedState),"function"==typeof a.componentDidMount&&(e.flags|=4194308)}function iu(e,t){try{var n="",r=t;do n+=function(e){switch(e.tag){case 5:return er(e.type);case 16:return er("Lazy");case 13:return er("Suspense");case 19:return er("SuspenseList");case 0:case 2:case 15:return e=es(e.type,!1);case 11:return e=es(e.type.render,!1);case 1:return e=es(e.type,!0);default:return""}}(r),r=r.return;while(r)var a=n}catch(e){a="\nError generating stack: "+e.message+"\n"+e.stack}return{value:e,source:t,stack:a,digest:null}}function ic(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ip(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var id="function"==typeof WeakMap?WeakMap:Map;function ih(e,t,n){(n=a4(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){oN||(oN=!0,oS=r),ip(e,t)},n}function im(e,t,n){(n=a4(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){ip(e,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){ip(e,t),"function"!=typeof r&&(null===oE?oE=new Set([this]):oE.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:null!==n?n:""})}),n}function ig(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new id;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=o2.bind(null,e,t,n),t.then(e,e))}function iy(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e)return null}function ib(e,t,n,r,a){return 0==(1&e.mode)?e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=a4(-1,1)).tag=2,a6(n,t,1))),n.lanes|=1):(e.flags|=65536,e.lanes=a),e}var iv=T.ReactCurrentOwner,iw=!1;function ix(e,t,n,r){t.child=null===e?aU(t,null,n,r):aB(t,e.child,n,r)}function ik(e,t,n,r,a){n=n.render;var s=t.ref;return(aQ(t,a),r=sE(e,t,n,r,s,a),n=sT(),null===e||iw)?(aS&&n&&aw(t),t.flags|=1,ix(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,iU(e,t,a))}function iN(e,t,n,r,a){if(null===e){var s=n.type;return"function"!=typeof s||o7(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=le(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,iS(e,t,s,r,a))}if(s=e.child,0==(e.lanes&a)){var i=s.memoizedProps;if((n=null!==(n=n.compare)?n:nY)(i,r)&&e.ref===t.ref)return iU(e,t,a)}return t.flags|=1,(e=o9(s,r)).ref=t.ref,e.return=t,t.child=e}function iS(e,t,n,r,a){if(null!==e){var s=e.memoizedProps;if(nY(s,r)&&e.ref===t.ref){if(iw=!1,t.pendingProps=r=s,0==(e.lanes&a))return t.lanes=e.lanes,iU(e,t,a);0!=(131072&e.flags)&&(iw=!0)}}return i_(e,t,n,r,a)}function iE(e,t,n){var r=t.pendingProps,a=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0==(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r2(od,op),op|=n;else{if(0==(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,r2(od,op),op|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,r2(od,op),op|=r}}else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,r2(od,op),op|=r;return ix(e,t,a,n),t.child}function iT(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function i_(e,t,n,r,a){var s=r7(n)?r5:r4.current;return(s=r8(t,s),aQ(t,a),n=sE(e,t,n,r,s,a),r=sT(),null===e||iw)?(aS&&r&&aw(t),t.flags|=1,ix(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,iU(e,t,a))}function iI(e,t,n,r,a){if(r7(n)){var s=!0;an(t)}else s=!1;if(aQ(t,a),null===t.stateNode)iB(e,t),ii(t,n,r),il(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,o=t.memoizedProps;i.props=o;var l=i.context,u=n.contextType;u="object"==typeof u&&null!==u?aY(u):r8(t,u=r7(n)?r5:r4.current);var c=n.getDerivedStateFromProps,p="function"==typeof c||"function"==typeof i.getSnapshotBeforeUpdate;p||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(o!==r||l!==u)&&io(t,i,r,u),a1=!1;var d=t.memoizedState;i.state=d,a7(t,r,i,a),l=t.memoizedState,o!==r||d!==l||r6.current||a1?("function"==typeof c&&(ir(t,n,c,r),l=t.memoizedState),(o=a1||is(t,n,o,r,d,l,u))?(p||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||("function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"==typeof i.componentDidMount&&(t.flags|=4194308)):("function"==typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=o):("function"==typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,a3(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:it(t.type,o),i.props=u,p=t.pendingProps,d=i.context,l="object"==typeof(l=n.contextType)&&null!==l?aY(l):r8(t,l=r7(n)?r5:r4.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof i.getSnapshotBeforeUpdate)||"function"!=typeof i.UNSAFE_componentWillReceiveProps&&"function"!=typeof i.componentWillReceiveProps||(o!==p||d!==l)&&io(t,i,r,l),a1=!1,d=t.memoizedState,i.state=d,a7(t,r,i,a);var h=t.memoizedState;o!==p||d!==h||r6.current||a1?("function"==typeof f&&(ir(t,n,f,r),h=t.memoizedState),(u=a1||is(t,n,u,r,d,h,l)||!1)?(c||"function"!=typeof i.UNSAFE_componentWillUpdate&&"function"!=typeof i.componentWillUpdate||("function"==typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,l),"function"==typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,l)),"function"==typeof i.componentDidUpdate&&(t.flags|=4),"function"==typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof i.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=l,r=u):("function"!=typeof i.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof i.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return iA(e,t,n,r,s,a)}function iA(e,t,n,r,a,s){iT(e,t);var i=0!=(128&t.flags);if(!r&&!i)return a&&ar(t,n,!1),iU(e,t,s);r=t.stateNode,iv.current=t;var o=i&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=aB(t,e.child,null,s),t.child=aB(t,null,o,s)):ix(e,t,o,s),t.memoizedState=r.state,a&&ar(t,n,!0),t.child}function iM(e){var t=e.stateNode;t.pendingContext?ae(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ae(e,t.context,!1),ss(e,t.containerInfo)}function iO(e,t,n,r,a){return a$(),aD(a),t.flags|=256,ix(e,t,n,r),t.child}var iC={dehydrated:null,treeContext:null,retryLane:0};function i$(e){return{baseLanes:e,cachePool:null,transitions:null}}function iD(e,t,n){var r,a=t.pendingProps,s=su.current,i=!1,o=0!=(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&0!=(2&s)),r?(i=!0,t.flags&=-129):(null===e||null!==e.memoizedState)&&(s|=1),r2(su,1&s),null===e)return(aA(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated))?(0==(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(o=a.children,e=a.fallback,i?(a=t.mode,i=t.child,o={mode:"hidden",children:o},0==(1&a)&&null!==i?(i.childLanes=0,i.pendingProps=o):i=ln(o,a,0,null),e=lt(e,a,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=i$(n),t.memoizedState=iC,e):iR(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,a,s,i){if(n)return 256&t.flags?(t.flags&=-257,iL(e,t,i,r=ic(Error(p(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,a=t.mode,r=ln({mode:"visible",children:r.children},a,0,null),s=lt(s,a,i,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,0!=(1&t.mode)&&aB(t,e.child,null,i),t.child.memoizedState=i$(i),t.memoizedState=iC,s);if(0==(1&t.mode))return iL(e,t,i,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var o=r.dgst;return r=o,iL(e,t,i,r=ic(s=Error(p(419)),r,void 0))}if(o=0!=(i&e.childLanes),iw||o){if(null!==(r=ol)){switch(i&-i){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!=(a&(r.suspendedLanes|i))?0:a)&&a!==s.retryLane&&(s.retryLane=a,a0(e,a),oR(r,e,a,-1))}return oG(),iL(e,t,i,r=ic(Error(p(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=o4.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,aN=rP(a.nextSibling),ak=t,aS=!0,aE=null,null!==e&&(af[ah++]=ag,af[ah++]=ay,af[ah++]=am,ag=e.id,ay=e.overflow,am=t),t=iR(t,r.children),t.flags|=4096,t)}(e,t,o,a,r,s,n);if(i){i=a.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:a.children};return 0==(1&o)&&t.child!==s?((a=t.child).childLanes=0,a.pendingProps=l,t.deletions=null):(a=o9(s,l)).subtreeFlags=14680064&s.subtreeFlags,null!==r?i=o9(r,i):(i=lt(i,o,n,null),i.flags|=2),i.return=t,a.return=t,a.sibling=i,t.child=a,a=i,i=t.child,o=null===(o=e.child.memoizedState)?i$(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=iC,a}return e=(i=e.child).sibling,a=o9(i,{mode:"visible",children:a.children}),0==(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function iR(e,t){return(t=ln({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function iL(e,t,n,r){return null!==r&&aD(r),aB(t,e.child,null,n),e=iR(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function iF(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),aG(e.return,t,n)}function iz(e,t,n,r,a){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=a)}function iP(e,t,n){var r=t.pendingProps,a=r.revealOrder,s=r.tail;if(ix(e,t,r.children,n),0!=(2&(r=su.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!=(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&iF(e,n,t);else if(19===e.tag)iF(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(r2(su,r),0==(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(a=null,n=t.child;null!==n;)null!==(e=n.alternate)&&null===sc(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),iz(t,!1,a,n,s);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===sc(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}iz(t,!0,n,null,s);break;case"together":iz(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function iB(e,t){0==(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function iU(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),om|=t.lanes,0==(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(p(153));if(null!==t.child){for(n=o9(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=o9(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function iV(e,t){if(!aS)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function iW(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}a=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},s=function(){},i=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,sa(st.current);var s,i=null;switch(n){case"input":a=ep(e,a),r=ep(e,r),i=[];break;case"select":a=en({},a,{value:void 0}),r=en({},r,{value:void 0}),i=[];break;case"textarea":a=ev(e,a),r=ev(e,r),i=[];break;default:"function"!=typeof a.onClick&&"function"==typeof r.onClick&&(e.onclick=rA)}for(u in eD(n,r),n=null,a)if(!r.hasOwnProperty(u)&&a.hasOwnProperty(u)&&null!=a[u]){if("style"===u){var o=a[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(f.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null))}for(u in r){var l=r[u];if(o=null!=a?a[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o)){if("style"===u){if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(i||(i=[]),i.push(u,n)),n=l}else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(i=i||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(i=i||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(f.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&rm("scroll",e),i||o===l||(i=[])):(i=i||[]).push(u,l))}}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}},o=function(e,t,n,r){n!==r&&(t.flags|=4)};var ij=!1,iH=!1,iq="function"==typeof WeakSet?WeakSet:Set,iK=null;function iG(e,t){var n=e.ref;if(null!==n){if("function"==typeof n)try{n(null)}catch(n){o1(e,t,n)}else n.current=null}}function iQ(e,t,n){try{n()}catch(n){o1(e,t,n)}}var iY=!1;function iX(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,void 0!==s&&iQ(t,n,s)}a=a.next}while(a!==r)}}function iJ(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function iZ(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function i0(e){return 5===e.tag||3===e.tag||4===e.tag}function i1(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||i0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags||null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}var i2=null,i3=!1;function i4(e,t,n){for(n=n.child;null!==n;)i6(e,t,n),n=n.sibling}function i6(e,t,n){if(tc&&"function"==typeof tc.onCommitFiberUnmount)try{tc.onCommitFiberUnmount(tu,n)}catch(e){}switch(n.tag){case 5:iH||iG(n,t);case 6:var r=i2,a=i3;i2=null,i4(e,t,n),i2=r,i3=a,null!==i2&&(i3?(e=i2,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):i2.removeChild(n.stateNode));break;case 18:null!==i2&&(i3?(e=i2,n=n.stateNode,8===e.nodeType?rz(e.parentNode,n):1===e.nodeType&&rz(e,n),tq(e)):rz(i2,n.stateNode));break;case 4:r=i2,a=i3,i2=n.stateNode.containerInfo,i3=!0,i4(e,t,n),i2=r,i3=a;break;case 0:case 11:case 14:case 15:if(!iH&&null!==(r=n.updateQueue)&&null!==(r=r.lastEffect)){a=r=r.next;do{var s=a,i=s.destroy;s=s.tag,void 0!==i&&(0!=(2&s)?iQ(n,t,i):0!=(4&s)&&iQ(n,t,i)),a=a.next}while(a!==r)}i4(e,t,n);break;case 1:if(!iH&&(iG(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){o1(n,t,e)}i4(e,t,n);break;case 21:default:i4(e,t,n);break;case 22:1&n.mode?(iH=(r=iH)||null!==n.memoizedState,i4(e,t,n),iH=r):i4(e,t,n)}}function i5(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new iq),t.forEach(function(t){var r=o6.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function i8(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var s=t,i=s;e:for(;null!==i;){switch(i.tag){case 5:i2=i.stateNode,i3=!1;break e;case 3:case 4:i2=i.stateNode.containerInfo,i3=!0;break e}i=i.return}if(null===i2)throw Error(p(160));i6(e,s,a),i2=null,i3=!1;var o=a.alternate;null!==o&&(o.return=null),a.return=null}catch(e){o1(a,t,e)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)i7(t,e),t=t.sibling}function i7(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(i8(t,e),i9(e),4&r){try{iX(3,e,e.return),iJ(3,e)}catch(t){o1(e,e.return,t)}try{iX(5,e,e.return)}catch(t){o1(e,e.return,t)}}break;case 1:i8(t,e),i9(e),512&r&&null!==n&&iG(n,n.return);break;case 5:if(i8(t,e),i9(e),512&r&&null!==n&&iG(n,n.return),32&e.flags){var a=e.stateNode;try{eI(a,"")}catch(t){o1(e,e.return,t)}}if(4&r&&null!=(a=e.stateNode)){var s=e.memoizedProps,i=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&ef(a,s),eR(o,i);var u=eR(o,s);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];"style"===c?eC(a,d):"dangerouslySetInnerHTML"===c?e_(a,d):"children"===c?eI(a,d):E(a,c,d,u)}switch(o){case"input":eh(a,s);break;case"textarea":ex(a,s);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var h=s.value;null!=h?eb(a,!!s.multiple,h,!1):!!s.multiple!==f&&(null!=s.defaultValue?eb(a,!!s.multiple,s.defaultValue,!0):eb(a,!!s.multiple,s.multiple?[]:"",!1))}a[rW]=s}catch(t){o1(e,e.return,t)}}break;case 6:if(i8(t,e),i9(e),4&r){if(null===e.stateNode)throw Error(p(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(t){o1(e,e.return,t)}}break;case 3:if(i8(t,e),i9(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{tq(t.containerInfo)}catch(t){o1(e,e.return,t)}break;case 4:default:i8(t,e),i9(e);break;case 13:i8(t,e),i9(e),8192&(a=e.child).flags&&(s=null!==a.memoizedState,a.stateNode.isHidden=s,s&&(null===a.alternate||null===a.alternate.memoizedState)&&(ow=tn())),4&r&&i5(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(iH=(u=iH)||c,i8(t,e),iH=u):i8(t,e),i9(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&0!=(1&e.mode))for(iK=e,c=e.child;null!==c;){for(d=iK=c;null!==iK;){switch(h=(f=iK).child,f.tag){case 0:case 11:case 14:case 15:iX(4,f,f.return);break;case 1:iG(f,f.return);var m=f.stateNode;if("function"==typeof m.componentWillUnmount){r=f,n=f.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(e){o1(r,n,e)}}break;case 5:iG(f,f.return);break;case 22:if(null!==f.memoizedState){ot(d);continue}}null!==h?(h.return=f,iK=h):ot(d)}c=c.sibling}e:for(c=null,d=e;;){if(5===d.tag){if(null===c){c=d;try{a=d.stateNode,u?(s=a.style,"function"==typeof s.setProperty?s.setProperty("display","none","important"):s.display="none"):(o=d.stateNode,i=null!=(l=d.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=eO("display",i))}catch(t){o1(e,e.return,t)}}}else if(6===d.tag){if(null===c)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(t){o1(e,e.return,t)}}else if((22!==d.tag&&23!==d.tag||null===d.memoizedState||d===e)&&null!==d.child){d.child.return=d,d=d.child;continue}if(d===e)break;for(;null===d.sibling;){if(null===d.return||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:i8(t,e),i9(e),4&r&&i5(e);case 21:}}function i9(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(i0(n)){var r=n;break e}n=n.return}throw Error(p(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(eI(a,""),r.flags&=-33);var s=i1(e);!function e(t,n,r){var a=t.tag;if(5===a||6===a)t=t.stateNode,n?r.insertBefore(t,n):r.appendChild(t);else if(4!==a&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,s,a);break;case 3:case 4:var i=r.stateNode.containerInfo,o=i1(e);!function e(t,n,r){var a=t.tag;if(5===a||6===a)t=t.stateNode,n?8===r.nodeType?r.parentNode.insertBefore(t,n):r.insertBefore(t,n):(8===r.nodeType?(n=r.parentNode).insertBefore(t,r):(n=r).appendChild(t),null!=(r=r._reactRootContainer)||null!==n.onclick||(n.onclick=rA));else if(4!==a&&null!==(t=t.child))for(e(t,n,r),t=t.sibling;null!==t;)e(t,n,r),t=t.sibling}(e,o,i);break;default:throw Error(p(161))}}catch(t){o1(e,e.return,t)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function oe(e){for(;null!==iK;){var t=iK;if(0!=(8772&t.flags)){var n=t.alternate;try{if(0!=(8772&t.flags))switch(t.tag){case 0:case 11:case 15:iH||iJ(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!iH){if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:it(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}}var s=t.updateQueue;null!==s&&a9(t,s,r);break;case 3:var i=t.updateQueue;if(null!==i){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}a9(t,i,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var d=c.dehydrated;null!==d&&tq(d)}}}break;default:throw Error(p(163))}iH||512&t.flags&&iZ(t)}catch(e){o1(t,t.return,e)}}if(t===e){iK=null;break}if(null!==(n=t.sibling)){n.return=t.return,iK=n;break}iK=t.return}}function ot(e){for(;null!==iK;){var t=iK;if(t===e){iK=null;break}var n=t.sibling;if(null!==n){n.return=t.return,iK=n;break}iK=t.return}}function on(e){for(;null!==iK;){var t=iK;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{iJ(4,t)}catch(e){o1(t,n,e)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(e){o1(t,a,e)}}var s=t.return;try{iZ(t)}catch(e){o1(t,s,e)}break;case 5:var i=t.return;try{iZ(t)}catch(e){o1(t,i,e)}}}catch(e){o1(t,t.return,e)}if(t===e){iK=null;break}var o=t.sibling;if(null!==o){o.return=t.return,iK=o;break}iK=t.return}}var or=Math.ceil,oa=T.ReactCurrentDispatcher,os=T.ReactCurrentOwner,oi=T.ReactCurrentBatchConfig,oo=0,ol=null,ou=null,oc=0,op=0,od=r0(0),of=0,oh=null,om=0,og=0,oy=0,ob=null,ov=null,ow=0,ox=1/0,ok=null,oN=!1,oS=null,oE=null,oT=!1,o_=null,oI=0,oA=0,oM=null,oO=-1,oC=0;function o$(){return 0!=(6&oo)?tn():-1!==oO?oO:oO=tn()}function oD(e){return 0==(1&e.mode)?1:0!=(2&oo)&&0!==oc?oc&-oc:null!==aR.transition?(0===oC&&(oC=tv()),oC):0!==(e=tN)?e:e=void 0===(e=window.event)?16:t0(e.type)}function oR(e,t,n,r){if(50<oA)throw oA=0,oM=null,Error(p(185));tx(e,n,r),(0==(2&oo)||e!==ol)&&(e===ol&&(0==(2&oo)&&(og|=n),4===of&&oB(e,oc)),oL(e,r),1===n&&0===oo&&0==(1&t.mode)&&(ox=tn()+500,as&&al()))}function oL(e,t){var n,r=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var i=31-tp(s),o=1<<i,l=a[i];-1===l?(0==(o&n)||0!=(o&r))&&(a[i]=function(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return -1}}(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var a=ty(e,e===ol?oc:0);if(0===a)null!==r&&e9(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(null!=r&&e9(r),1===t)0===e.tag?(n=oU.bind(null,e),as=!0,ao(n)):ao(oU.bind(null,e)),rL(function(){0==(6&oo)&&al()}),r=null;else{switch(tS(a)){case 1:r=ta;break;case 4:r=ts;break;case 16:default:r=ti;break;case 536870912:r=tl}r=e7(r,oF.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function oF(e,t){if(oO=-1,oC=0,0!=(6&oo))throw Error(p(327));var n=e.callbackNode;if(oZ()&&e.callbackNode!==n)return null;var r=ty(e,e===ol?oc:0);if(0===r)return null;if(0!=(30&r)||0!=(r&e.expiredLanes)||t)t=oQ(e,r);else{t=r;var a=oo;oo|=2;var s=oK();for((ol!==e||oc!==t)&&(ok=null,ox=tn()+500,oH(e,t));;)try{(function(){for(;null!==ou&&!te();)oY(ou)})();break}catch(t){oq(e,t)}aq(),oa.current=s,oo=a,null!==ou?t=0:(ol=null,oc=0,t=of)}if(0!==t){if(2===t&&0!==(a=tb(e))&&(r=a,t=oz(e,a)),1===t)throw n=oh,oH(e,0),oB(e,r),oL(e,tn()),n;if(6===t)oB(e,r);else{if(a=e.current.alternate,0==(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],s=a.getSnapshot;a=a.value;try{if(!nQ(s(),a))return!1}catch(e){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=oQ(e,r))&&0!==(s=tb(e))&&(r=s,t=oz(e,s)),1===t))throw n=oh,oH(e,0),oB(e,r),oL(e,tn()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(p(345));case 2:case 5:oJ(e,ov,ok);break;case 3:if(oB(e,r),(130023424&r)===r&&10<(t=ow+500-tn())){if(0!==ty(e,0))break;if(((a=e.suspendedLanes)&r)!==r){o$(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=r$(oJ.bind(null,e,ov,ok),t);break}oJ(e,ov,ok);break;case 4:if(oB(e,r),(4194240&r)===r)break;for(a=-1,t=e.eventTimes;0<r;){var i=31-tp(r);s=1<<i,(i=t[i])>a&&(a=i),r&=~s}if(r=a,10<(r=(120>(r=tn()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*or(r/1960))-r)){e.timeoutHandle=r$(oJ.bind(null,e,ov,ok),r);break}oJ(e,ov,ok);break;default:throw Error(p(329))}}}return oL(e,tn()),e.callbackNode===n?oF.bind(null,e):null}function oz(e,t){var n=ob;return e.current.memoizedState.isDehydrated&&(oH(e,t).flags|=256),2!==(e=oQ(e,t))&&(t=ov,ov=n,null!==t&&oP(t)),e}function oP(e){null===ov?ov=e:ov.push.apply(ov,e)}function oB(e,t){for(t&=~oy,t&=~og,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tp(t),r=1<<n;e[n]=-1,t&=~r}}function oU(e){if(0!=(6&oo))throw Error(p(327));oZ();var t=ty(e,0);if(0==(1&t))return oL(e,tn()),null;var n=oQ(e,t);if(0!==e.tag&&2===n){var r=tb(e);0!==r&&(t=r,n=oz(e,r))}if(1===n)throw n=oh,oH(e,0),oB(e,t),oL(e,tn()),n;if(6===n)throw Error(p(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,oJ(e,ov,ok),oL(e,tn()),null}function oV(e,t){var n=oo;oo|=1;try{return e(t)}finally{0===(oo=n)&&(ox=tn()+500,as&&al())}}function oW(e){null!==o_&&0===o_.tag&&0==(6&oo)&&oZ();var t=oo;oo|=1;var n=oi.transition,r=tN;try{if(oi.transition=null,tN=1,e)return e()}finally{tN=r,oi.transition=n,0==(6&(oo=t))&&al()}}function oj(){op=od.current,r1(od)}function oH(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,rD(n)),null!==ou)for(n=ou.return;null!==n;){var r=n;switch(ax(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&r9();break;case 3:si(),r1(r6),r1(r4),sd();break;case 5:sl(r);break;case 4:si();break;case 13:case 19:r1(su);break;case 10:aK(r.type._context);break;case 22:case 23:oj()}n=n.return}if(ol=e,ou=e=o9(e.current,null),oc=op=t,of=0,oh=null,oy=og=om=0,ov=ob=null,null!==aX){for(t=0;t<aX.length;t++)if(null!==(r=(n=aX[t]).interleaved)){n.interleaved=null;var a=r.next,s=n.pending;if(null!==s){var i=s.next;s.next=a,r.next=i}n.pending=r}aX=null}return e}function oq(e,t){for(;;){var n=ou;try{if(aq(),sf.current=s8,sv){for(var r=sg.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}sv=!1}if(sm=0,sb=sy=sg=null,sw=!1,sx=0,os.current=null,null===n||null===n.return){of=1,oh=t,ou=null;break}e:{var s=e,i=n.return,o=n,l=t;if(t=oc,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,d=c.tag;if(0==(1&c.mode)&&(0===d||11===d||15===d)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var h=iy(i);if(null!==h){h.flags&=-257,ib(h,i,o,s,t),1&h.mode&&ig(s,u,t),t=h,l=u;var m=t.updateQueue;if(null===m){var g=new Set;g.add(l),t.updateQueue=g}else m.add(l);break e}if(0==(1&t)){ig(s,u,t),oG();break e}l=Error(p(426))}else if(aS&&1&o.mode){var y=iy(i);if(null!==y){0==(65536&y.flags)&&(y.flags|=256),ib(y,i,o,s,t),aD(iu(l,o));break e}}s=l=iu(l,o),4!==of&&(of=2),null===ob?ob=[s]:ob.push(s),s=i;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var b=ih(s,l,t);a8(s,b);break e;case 1:o=l;var v=s.type,w=s.stateNode;if(0==(128&s.flags)&&("function"==typeof v.getDerivedStateFromError||null!==w&&"function"==typeof w.componentDidCatch&&(null===oE||!oE.has(w)))){s.flags|=65536,t&=-t,s.lanes|=t;var x=im(s,o,t);a8(s,x);break e}}s=s.return}while(null!==s)}oX(n)}catch(e){t=e,ou===n&&null!==n&&(ou=n=n.return);continue}break}}function oK(){var e=oa.current;return oa.current=s8,null===e?s8:e}function oG(){(0===of||3===of||2===of)&&(of=4),null===ol||0==(268435455&om)&&0==(268435455&og)||oB(ol,oc)}function oQ(e,t){var n=oo;oo|=2;var r=oK();for((ol!==e||oc!==t)&&(ok=null,oH(e,t));;)try{(function(){for(;null!==ou;)oY(ou)})();break}catch(t){oq(e,t)}if(aq(),oo=n,oa.current=r,null!==ou)throw Error(p(261));return ol=null,oc=0,of}function oY(e){var t=l(e.alternate,e,op);e.memoizedProps=e.pendingProps,null===t?oX(e):ou=t,os.current=null}function oX(e){var t=e;do{var n=t.alternate;if(e=t.return,0==(32768&t.flags)){if(null!==(n=function(e,t,n){var r=t.pendingProps;switch(ax(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return iW(t),null;case 1:case 17:return r7(t.type)&&r9(),iW(t),null;case 3:return r=t.stateNode,si(),r1(r6),r1(r4),sd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(null===e||null===e.child)&&(aO(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0==(256&t.flags)||(t.flags|=1024,null!==aE&&(oP(aE),aE=null))),s(e,t),iW(t),null;case 5:sl(t);var l=sa(sr.current);if(n=t.type,null!==e&&null!=t.stateNode)i(e,t,n,r,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(p(166));return iW(t),null}if(e=sa(st.current),aO(t)){r=t.stateNode,n=t.type;var u=t.memoizedProps;switch(r[rV]=t,r[rW]=u,e=0!=(1&t.mode),n){case"dialog":rm("cancel",r),rm("close",r);break;case"iframe":case"object":case"embed":rm("load",r);break;case"video":case"audio":for(l=0;l<rp.length;l++)rm(rp[l],r);break;case"source":rm("error",r);break;case"img":case"image":case"link":rm("error",r),rm("load",r);break;case"details":rm("toggle",r);break;case"input":ed(r,u),rm("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!u.multiple},rm("invalid",r);break;case"textarea":ew(r,u),rm("invalid",r)}for(var c in eD(n,u),l=null,u)if(u.hasOwnProperty(c)){var d=u[c];"children"===c?"string"==typeof d?r.textContent!==d&&(!0!==u.suppressHydrationWarning&&rI(r.textContent,d,e),l=["children",d]):"number"==typeof d&&r.textContent!==""+d&&(!0!==u.suppressHydrationWarning&&rI(r.textContent,d,e),l=["children",""+d]):f.hasOwnProperty(c)&&null!=d&&"onScroll"===c&&rm("scroll",r)}switch(n){case"input":el(r),em(r,u,!0);break;case"textarea":el(r),ek(r);break;case"select":case"option":break;default:"function"==typeof u.onClick&&(r.onclick=rA)}r=l,t.updateQueue=r,null!==r&&(t.flags|=4)}else{c=9===l.nodeType?l:l.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=eN(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=c.createElement("div")).innerHTML="<script></script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=c.createElement(n,{is:r.is}):(e=c.createElement(n),"select"===n&&(c=e,r.multiple?c.multiple=!0:r.size&&(c.size=r.size))):e=c.createElementNS(e,n),e[rV]=t,e[rW]=r,a(e,t,!1,!1),t.stateNode=e;e:{switch(c=eR(n,r),n){case"dialog":rm("cancel",e),rm("close",e),l=r;break;case"iframe":case"object":case"embed":rm("load",e),l=r;break;case"video":case"audio":for(l=0;l<rp.length;l++)rm(rp[l],e);l=r;break;case"source":rm("error",e),l=r;break;case"img":case"image":case"link":rm("error",e),rm("load",e),l=r;break;case"details":rm("toggle",e),l=r;break;case"input":ed(e,r),l=ep(e,r),rm("invalid",e);break;case"option":default:l=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},l=en({},r,{value:void 0}),rm("invalid",e);break;case"textarea":ew(e,r),l=ev(e,r),rm("invalid",e)}for(u in eD(n,l),d=l)if(d.hasOwnProperty(u)){var h=d[u];"style"===u?eC(e,h):"dangerouslySetInnerHTML"===u?null!=(h=h?h.__html:void 0)&&e_(e,h):"children"===u?"string"==typeof h?("textarea"!==n||""!==h)&&eI(e,h):"number"==typeof h&&eI(e,""+h):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(f.hasOwnProperty(u)?null!=h&&"onScroll"===u&&rm("scroll",e):null!=h&&E(e,u,h,c))}switch(n){case"input":el(e),em(e,r,!1);break;case"textarea":el(e),ek(e);break;case"option":null!=r.value&&e.setAttribute("value",""+ei(r.value));break;case"select":e.multiple=!!r.multiple,null!=(u=r.value)?eb(e,!!r.multiple,u,!1):null!=r.defaultValue&&eb(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof l.onClick&&(e.onclick=rA)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return iW(t),null;case 6:if(e&&null!=t.stateNode)o(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(p(166));if(n=sa(sr.current),sa(st.current),aO(t)){if(r=t.stateNode,n=t.memoizedProps,r[rV]=t,(u=r.nodeValue!==n)&&null!==(e=ak))switch(e.tag){case 3:rI(r.nodeValue,n,0!=(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&rI(r.nodeValue,n,0!=(1&e.mode))}u&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[rV]=t,t.stateNode=r}return iW(t),null;case 13:if(r1(su),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(aS&&null!==aN&&0!=(1&t.mode)&&0==(128&t.flags))aC(),a$(),t.flags|=98560,u=!1;else if(u=aO(t),null!==r&&null!==r.dehydrated){if(null===e){if(!u)throw Error(p(318));if(!(u=null!==(u=t.memoizedState)?u.dehydrated:null))throw Error(p(317));u[rV]=t}else a$(),0==(128&t.flags)&&(t.memoizedState=null),t.flags|=4;iW(t),u=!1}else null!==aE&&(oP(aE),aE=null),u=!0;if(!u)return 65536&t.flags?t:null}if(0!=(128&t.flags))return t.lanes=n,t;return(r=null!==r)!=(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!=(1&t.mode)&&(null===e||0!=(1&su.current)?0===of&&(of=3):oG())),null!==t.updateQueue&&(t.flags|=4),iW(t),null;case 4:return si(),s(e,t),null===e&&rb(t.stateNode.containerInfo),iW(t),null;case 10:return aK(t.type._context),iW(t),null;case 19:if(r1(su),null===(u=t.memoizedState))return iW(t),null;if(r=0!=(128&t.flags),null===(c=u.rendering)){if(r)iV(u,!1);else{if(0!==of||null!==e&&0!=(128&e.flags))for(e=t.child;null!==e;){if(null!==(c=sc(e))){for(t.flags|=128,iV(u,!1),null!==(r=c.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)u=n,e=r,u.flags&=14680066,null===(c=u.alternate)?(u.childLanes=0,u.lanes=e,u.child=null,u.subtreeFlags=0,u.memoizedProps=null,u.memoizedState=null,u.updateQueue=null,u.dependencies=null,u.stateNode=null):(u.childLanes=c.childLanes,u.lanes=c.lanes,u.child=c.child,u.subtreeFlags=0,u.deletions=null,u.memoizedProps=c.memoizedProps,u.memoizedState=c.memoizedState,u.updateQueue=c.updateQueue,u.type=c.type,e=c.dependencies,u.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return r2(su,1&su.current|2),t.child}e=e.sibling}null!==u.tail&&tn()>ox&&(t.flags|=128,r=!0,iV(u,!1),t.lanes=4194304)}}else{if(!r){if(null!==(e=sc(c))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),iV(u,!0),null===u.tail&&"hidden"===u.tailMode&&!c.alternate&&!aS)return iW(t),null}else 2*tn()-u.renderingStartTime>ox&&1073741824!==n&&(t.flags|=128,r=!0,iV(u,!1),t.lanes=4194304)}u.isBackwards?(c.sibling=t.child,t.child=c):(null!==(n=u.last)?n.sibling=c:t.child=c,u.last=c)}if(null!==u.tail)return t=u.tail,u.rendering=t,u.tail=t.sibling,u.renderingStartTime=tn(),t.sibling=null,n=su.current,r2(su,r?1&n|2:1&n),t;return iW(t),null;case 22:case 23:return oj(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!=(1&t.mode)?0!=(1073741824&op)&&(iW(t),6&t.subtreeFlags&&(t.flags|=8192)):iW(t),null;case 24:case 25:return null}throw Error(p(156,t.tag))}(n,t,op))){ou=n;return}}else{if(null!==(n=function(e,t){switch(ax(t),t.tag){case 1:return r7(t.type)&&r9(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return si(),r1(r6),r1(r4),sd(),0!=(65536&(e=t.flags))&&0==(128&e)?(t.flags=-65537&e|128,t):null;case 5:return sl(t),null;case 13:if(r1(su),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(p(340));a$()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return r1(su),null;case 4:return si(),null;case 10:return aK(t.type._context),null;case 22:case 23:return oj(),null;default:return null}}(n,t))){n.flags&=32767,ou=n;return}if(null!==e)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{of=6,ou=null;return}}if(null!==(t=t.sibling)){ou=t;return}ou=t=e}while(null!==t)0===of&&(of=5)}function oJ(e,t,n){var r=tN,a=oi.transition;try{oi.transition=null,tN=1,function(e,t,n,r){do oZ();while(null!==o_)if(0!=(6&oo))throw Error(p(327));n=e.finishedWork;var a=e.finishedLanes;if(null!==n){if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(p(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-tp(n),s=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~s}}(e,s),e===ol&&(ou=ol=null,oc=0),0==(2064&n.subtreeFlags)&&0==(2064&n.flags)||oT||(oT=!0,i=ti,o=function(){return oZ(),null},e7(i,o)),s=0!=(15990&n.flags),0!=(15990&n.subtreeFlags)||s){s=oi.transition,oi.transition=null;var i,o,l,u,c,d=tN;tN=1;var f=oo;oo|=4,os.current=null,function(e,t){if(rM=tG,n0(e=nZ())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a,s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(e){n=null;break e}var o=0,l=-1,u=-1,c=0,d=0,f=e,h=null;t:for(;;){for(;f!==n||0!==s&&3!==f.nodeType||(l=o+s),f!==i||0!==r&&3!==f.nodeType||(u=o+r),3===f.nodeType&&(o+=f.nodeValue.length),null!==(a=f.firstChild);)h=f,f=a;for(;;){if(f===e)break t;if(h===n&&++c===s&&(l=o),h===i&&++d===r&&(u=o),null!==(a=f.nextSibling))break;h=(f=h).parentNode}f=a}n=-1===l||-1===u?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(rO={focusedElem:e,selectionRange:n},tG=!1,iK=t;null!==iK;)if(e=(t=iK).child,0!=(1028&t.subtreeFlags)&&null!==e)e.return=t,iK=e;else for(;null!==iK;){t=iK;try{var m=t.alternate;if(0!=(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,b=t.stateNode,v=b.getSnapshotBeforeUpdate(t.elementType===t.type?g:it(t.type,g),y);b.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(p(163))}}catch(e){o1(t,t.return,e)}if(null!==(e=t.sibling)){e.return=t.return,iK=e;break}iK=t.return}m=iY,iY=!1}(e,n),i7(n,e),function(e){var t=nZ(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&function e(t,n){return!!t&&!!n&&(t===n||(!t||3!==t.nodeType)&&(n&&3===n.nodeType?e(t,n.parentNode):"contains"in t?t.contains(n):!!t.compareDocumentPosition&&!!(16&t.compareDocumentPosition(n))))}(n.ownerDocument.documentElement,n)){if(null!==r&&n0(n)){if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,s=Math.min(r.start,a);r=void 0===r.end?s:Math.min(r.end,a),!e.extend&&s>r&&(a=r,r=s,s=a),a=nJ(n,s);var i=nJ(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}(rO),tG=!!rM,rO=rM=null,e.current=n,l=n,u=e,c=a,iK=l,function e(t,n,r){for(var a=0!=(1&t.mode);null!==iK;){var s=iK,i=s.child;if(22===s.tag&&a){var o=null!==s.memoizedState||ij;if(!o){var l=s.alternate,u=null!==l&&null!==l.memoizedState||iH;l=ij;var c=iH;if(ij=o,(iH=u)&&!c)for(iK=s;null!==iK;)u=(o=iK).child,22===o.tag&&null!==o.memoizedState?on(s):null!==u?(u.return=o,iK=u):on(s);for(;null!==i;)iK=i,e(i,n,r),i=i.sibling;iK=s,ij=l,iH=c}oe(t,n,r)}else 0!=(8772&s.subtreeFlags)&&null!==i?(i.return=s,iK=i):oe(t,n,r)}}(l,u,c),tt(),oo=f,tN=d,oi.transition=s}else e.current=n;if(oT&&(oT=!1,o_=e,oI=a),0===(s=e.pendingLanes)&&(oE=null),function(e){if(tc&&"function"==typeof tc.onCommitFiberRoot)try{tc.onCommitFiberRoot(tu,e,void 0,128==(128&e.current.flags))}catch(e){}}(n.stateNode,r),oL(e,tn()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)r((a=t[n]).value,{componentStack:a.stack,digest:a.digest});if(oN)throw oN=!1,e=oS,oS=null,e;0!=(1&oI)&&0!==e.tag&&oZ(),0!=(1&(s=e.pendingLanes))?e===oM?oA++:(oA=0,oM=e):oA=0,al()}}(e,t,n,r)}finally{oi.transition=a,tN=r}return null}function oZ(){if(null!==o_){var e=tS(oI),t=oi.transition,n=tN;try{if(oi.transition=null,tN=16>e?16:e,null===o_)var r=!1;else{if(e=o_,o_=null,oI=0,0!=(6&oo))throw Error(p(331));var a=oo;for(oo|=4,iK=e.current;null!==iK;){var s=iK,i=s.child;if(0!=(16&iK.flags)){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(iK=u;null!==iK;){var c=iK;switch(c.tag){case 0:case 11:case 15:iX(8,c,s)}var d=c.child;if(null!==d)d.return=c,iK=d;else for(;null!==iK;){var f=(c=iK).sibling,h=c.return;if(function e(t){var n=t.alternate;null!==n&&(t.alternate=null,e(n)),t.child=null,t.deletions=null,t.sibling=null,5===t.tag&&null!==(n=t.stateNode)&&(delete n[rV],delete n[rW],delete n[rH],delete n[rq],delete n[rK]),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}(c),c===u){iK=null;break}if(null!==f){f.return=h,iK=f;break}iK=h}}}var m=s.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}iK=s}}if(0!=(2064&s.subtreeFlags)&&null!==i)i.return=s,iK=i;else for(;null!==iK;){if(s=iK,0!=(2048&s.flags))switch(s.tag){case 0:case 11:case 15:iX(9,s,s.return)}var b=s.sibling;if(null!==b){b.return=s.return,iK=b;break}iK=s.return}}var v=e.current;for(iK=v;null!==iK;){var w=(i=iK).child;if(0!=(2064&i.subtreeFlags)&&null!==w)w.return=i,iK=w;else for(i=v;null!==iK;){if(o=iK,0!=(2048&o.flags))try{switch(o.tag){case 0:case 11:case 15:iJ(9,o)}}catch(e){o1(o,o.return,e)}if(o===i){iK=null;break}var x=o.sibling;if(null!==x){x.return=o.return,iK=x;break}iK=o.return}}if(oo=a,al(),tc&&"function"==typeof tc.onPostCommitFiberRoot)try{tc.onPostCommitFiberRoot(tu,e)}catch(e){}r=!0}return r}finally{tN=n,oi.transition=t}}return!1}function o0(e,t,n){t=ih(e,t=iu(n,t),1),e=a6(e,t,1),t=o$(),null!==e&&(tx(e,1,t),oL(e,t))}function o1(e,t,n){if(3===e.tag)o0(e,e,n);else for(;null!==t;){if(3===t.tag){o0(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===oE||!oE.has(r))){e=im(t,e=iu(n,e),1),t=a6(t,e,1),e=o$(),null!==t&&(tx(t,1,e),oL(t,e));break}}t=t.return}}function o2(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=o$(),e.pingedLanes|=e.suspendedLanes&n,ol===e&&(oc&n)===n&&(4===of||3===of&&(130023424&oc)===oc&&500>tn()-ow?oH(e,0):oy|=n),oL(e,t)}function o3(e,t){0===t&&(0==(1&e.mode)?t=1:(t=tm,0==(130023424&(tm<<=1))&&(tm=4194304)));var n=o$();null!==(e=a0(e,t))&&(tx(e,t,n),oL(e,n))}function o4(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),o3(e,n)}function o6(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(p(314))}null!==r&&r.delete(t),o3(e,n)}function o5(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function o8(e,t,n,r){return new o5(e,t,n,r)}function o7(e){return!(!(e=e.prototype)||!e.isReactComponent)}function o9(e,t){var n=e.alternate;return null===n?((n=o8(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function le(e,t,n,r,a,s){var i=2;if(r=e,"function"==typeof e)o7(e)&&(i=1);else if("string"==typeof e)i=5;else e:switch(e){case A:return lt(n.children,a,s,t);case M:i=8,a|=8;break;case O:return(e=o8(12,n,t,2|a)).elementType=O,e.lanes=s,e;case L:return(e=o8(13,n,t,a)).elementType=L,e.lanes=s,e;case F:return(e=o8(19,n,t,a)).elementType=F,e.lanes=s,e;case B:return ln(n,a,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case C:i=10;break e;case $:i=9;break e;case R:i=11;break e;case z:i=14;break e;case P:i=16,r=null;break e}throw Error(p(130,null==e?e:typeof e,""))}return(t=o8(i,n,t,a)).elementType=e,t.type=r,t.lanes=s,t}function lt(e,t,n,r){return(e=o8(7,e,r,t)).lanes=n,e}function ln(e,t,n,r){return(e=o8(22,e,r,t)).elementType=B,e.lanes=n,e.stateNode={isHidden:!1},e}function lr(e,t,n){return(e=o8(6,e,null,t)).lanes=n,e}function la(e,t,n){return(t=o8(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ls(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=tw(0),this.expirationTimes=tw(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=tw(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function li(e,t,n,r,a,s,i,o,l){return e=new ls(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=o8(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},a2(s),e}function lo(e){if(!e)return r3;e=e._reactInternals;e:{if(e4(e)!==e||1!==e.tag)throw Error(p(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(r7(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t)throw Error(p(171))}if(1===e.tag){var n=e.type;if(r7(n))return at(e,n,t)}return t}function ll(e,t,n,r,a,s,i,o,l){return(e=li(n,r,!0,e,a,s,i,o,l)).context=lo(null),n=e.current,(s=a4(r=o$(),a=oD(n))).callback=null!=t?t:null,a6(n,s,a),e.current.lanes=a,tx(e,a,r),oL(e,r),e}function lu(e,t,n,r){var a=t.current,s=o$(),i=oD(a);return n=lo(n),null===t.context?t.context=n:t.pendingContext=n,(t=a4(s,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=a6(a,t,i))&&(oR(e,a,i,s),a5(e,a,i)),i}function lc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function lp(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ld(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}l=function(e,t,n){if(null!==e){if(e.memoizedProps!==t.pendingProps||r6.current)iw=!0;else{if(0==(e.lanes&n)&&0==(128&t.flags))return iw=!1,function(e,t,n){switch(t.tag){case 3:iM(t),a$();break;case 5:so(t);break;case 1:r7(t.type)&&an(t);break;case 4:ss(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;r2(aV,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState)){if(null!==r.dehydrated)return r2(su,1&su.current),t.flags|=128,null;if(0!=(n&t.child.childLanes))return iD(e,t,n);return r2(su,1&su.current),null!==(e=iU(e,t,n))?e.sibling:null}r2(su,1&su.current);break;case 19:if(r=0!=(n&t.childLanes),0!=(128&e.flags)){if(r)return iP(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),r2(su,su.current),!r)return null;break;case 22:case 23:return t.lanes=0,iE(e,t,n)}return iU(e,t,n)}(e,t,n);iw=0!=(131072&e.flags)}}else iw=!1,aS&&0!=(1048576&t.flags)&&av(t,ad,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;iB(e,t),e=t.pendingProps;var a=r8(t,r4.current);aQ(t,n),a=sE(null,t,r,e,a,n);var s=sT();return t.flags|=1,"object"==typeof a&&null!==a&&"function"==typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,r7(r)?(s=!0,an(t)):s=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a2(t),a.updater=ia,t.stateNode=a,a._reactInternals=t,il(t,r,e,n),t=iA(null,t,r,!0,s,n)):(t.tag=0,aS&&s&&aw(t),ix(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(iB(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"==typeof e)return o7(e)?1:0;if(null!=e){if((e=e.$$typeof)===R)return 11;if(e===z)return 14}return 2}(r),e=it(r,e),a){case 0:t=i_(null,t,r,e,n);break e;case 1:t=iI(null,t,r,e,n);break e;case 11:t=ik(null,t,r,e,n);break e;case 14:t=iN(null,t,r,it(r.type,e),n);break e}throw Error(p(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),i_(e,t,r,a,n);case 1:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),iI(e,t,r,a,n);case 3:e:{if(iM(t),null===e)throw Error(p(387));r=t.pendingProps,a=(s=t.memoizedState).element,a3(e,t),a7(t,r,null,n);var i=t.memoizedState;if(r=i.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){a=iu(Error(p(423)),t),t=iO(e,t,r,n,a);break e}if(r!==a){a=iu(Error(p(424)),t),t=iO(e,t,r,n,a);break e}for(aN=rP(t.stateNode.containerInfo.firstChild),ak=t,aS=!0,aE=null,n=aU(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(a$(),r===a){t=iU(e,t,n);break e}ix(e,t,r,n)}t=t.child}return t;case 5:return so(t),null===e&&aA(t),r=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,i=a.children,rC(r,a)?i=null:null!==s&&rC(r,s)&&(t.flags|=32),iT(e,t),ix(e,t,i,n),t.child;case 6:return null===e&&aA(t),null;case 13:return iD(e,t,n);case 4:return ss(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=aB(t,null,r,n):ix(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),ik(e,t,r,a,n);case 7:return ix(e,t,t.pendingProps,n),t.child;case 8:case 12:return ix(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,s=t.memoizedProps,i=a.value,r2(aV,r._currentValue),r._currentValue=i,null!==s){if(nQ(s.value,i)){if(s.children===a.children&&!r6.current){t=iU(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){i=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=a4(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),aG(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)i=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(i=s.return))throw Error(p(341));i.lanes|=n,null!==(o=i.alternate)&&(o.lanes|=n),aG(i,n,t),i=s.sibling}else i=s.child;if(null!==i)i.return=s;else for(i=s;null!==i;){if(i===t){i=null;break}if(null!==(s=i.sibling)){s.return=i.return,i=s;break}i=i.return}s=i}}ix(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,aQ(t,n),r=r(a=aY(a)),t.flags|=1,ix(e,t,r,n),t.child;case 14:return a=it(r=t.type,t.pendingProps),a=it(r.type,a),iN(e,t,r,a,n);case 15:return iS(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:it(r,a),iB(e,t),t.tag=1,r7(r)?(e=!0,an(t)):e=!1,aQ(t,n),ii(t,r,a),il(t,r,a,n),iA(null,t,r,!0,e,n);case 19:return iP(e,t,n);case 22:return iE(e,t,n)}throw Error(p(156,t.tag))};var lf="function"==typeof reportError?reportError:function(e){console.error(e)};function lh(e){this._internalRoot=e}function lm(e){this._internalRoot=e}function lg(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function ly(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function lb(){}function lv(e,t,n,r,a){var s=n._reactRootContainer;if(s){var i=s;if("function"==typeof a){var o=a;a=function(){var e=lc(i);o.call(e)}}lu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"==typeof r){var s=r;r=function(){var e=lc(i);s.call(e)}}var i=ll(t,r,e,0,null,!1,!1,"",lb);return e._reactRootContainer=i,e[rj]=i.current,rb(8===e.nodeType?e.parentNode:e),oW(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"==typeof r){var o=r;r=function(){var e=lc(l);o.call(e)}}var l=li(e,0,!1,null,null,!1,!1,"",lb);return e._reactRootContainer=l,e[rj]=l.current,rb(8===e.nodeType?e.parentNode:e),oW(function(){lu(t,l,n,r)}),l}(n,t,e,a,r);return lc(i)}lm.prototype.render=lh.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(p(409));lu(e,t,null,null)},lm.prototype.unmount=lh.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;oW(function(){lu(null,e,null,null)}),t[rj]=null}},lm.prototype.unstable_scheduleHydration=function(e){if(e){var t=tI();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tF.length&&0!==t&&t<tF[n].priority;n++);tF.splice(n,0,e),0===n&&tU(e)}},tE=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=tg(t.pendingLanes);0!==n&&(tk(t,1|n),oL(t,tn()),0==(6&oo)&&(ox=tn()+500,al()))}break;case 13:oW(function(){var t=a0(e,1);null!==t&&oR(t,e,1,o$())}),ld(e,1)}},tT=function(e){if(13===e.tag){var t=a0(e,134217728);null!==t&&oR(t,e,134217728,o$()),ld(e,134217728)}},t_=function(e){if(13===e.tag){var t=oD(e),n=a0(e,t);null!==n&&oR(n,e,t,o$()),ld(e,t)}},tI=function(){return tN},tA=function(e,t){var n=tN;try{return tN=e,t()}finally{tN=n}},ez=function(e,t,n){switch(t){case"input":if(eh(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=rX(r);if(!a)throw Error(p(90));eu(r),eh(r,a)}}}break;case"textarea":ex(e,n);break;case"select":null!=(t=n.value)&&eb(e,!!n.multiple,t,!1)}},ej=oV,eH=oW;var lw={findFiberByHostInstance:rG,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lx={bundleType:lw.bundleType,version:lw.version,rendererPackageName:lw.rendererPackageName,rendererConfig:lw.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=e8(e))?null:e.stateNode},findFiberByHostInstance:lw.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var lk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!lk.isDisabled&&lk.supportsFiber)try{tu=lk.inject(lx),tc=lk}catch(e){}}W={usingClientEntryPoint:!1,Events:[rQ,rY,rX,eV,eW,oV]},j=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!lg(t))throw Error(p(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:I,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},H=function(e,t){if(!lg(e))throw Error(p(299));var n=!1,r="",a=lf;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=li(e,1,!1,null,null,n,!1,r,a),e[rj]=t.current,rb(8===e.nodeType?e.parentNode:e),new lh(t)},q=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(p(188));throw Error(p(268,e=Object.keys(e).join(",")))}return e=null===(e=e8(t))?null:e.stateNode},K=function(e){return oW(e)},G=function(e,t,n){if(!ly(t))throw Error(p(200));return lv(null,e,t,!0,n)},Q=function(e,t,n){if(!lg(e))throw Error(p(405));var r=null!=n&&n.hydratedSources||null,a=!1,s="",i=lf;if(null!=n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(i=n.onRecoverableError)),t=ll(t,null,e,1,null!=n?n:null,a,!1,s,i),e[rj]=t.current,rb(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new lm(t)},Y=function(e,t,n){if(!ly(t))throw Error(p(200));return lv(null,e,t,!1,n)},X=function(e){if(!ly(e))throw Error(p(40));return!!e._reactRootContainer&&(oW(function(){lv(null,null,e,!1,function(){e._reactRootContainer=null,e[rj]=null})}),!0)},J=oV,Z=function(e,t,n,r){if(!ly(n))throw Error(p(200));if(null==e||void 0===e._reactInternals)throw Error(p(38));return lv(e,t,n,!1,r)},ee="18.3.1-next-f1338f8080-20240426"}),R("kMsGZ",function(e,t){e.exports=D("ibDWe")}),R("ibDWe",function(e,t){function n(e,t){var n=e.length;for(e.push(t);0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break}}function a(e){return 0===e.length?null:e[0]}function s(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;for(var r=0,a=e.length,s=a>>>1;r<s;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<a&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else if(u<a&&0>i(c,n))e[r]=c,e[u]=n,r=u;else break}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(r(e.exports,"unstable_now",()=>o,e=>o=e),r(e.exports,"unstable_IdlePriority",()=>l,e=>l=e),r(e.exports,"unstable_ImmediatePriority",()=>u,e=>u=e),r(e.exports,"unstable_LowPriority",()=>c,e=>c=e),r(e.exports,"unstable_NormalPriority",()=>p,e=>p=e),r(e.exports,"unstable_Profiling",()=>d,e=>d=e),r(e.exports,"unstable_UserBlockingPriority",()=>f,e=>f=e),r(e.exports,"unstable_cancelCallback",()=>h,e=>h=e),r(e.exports,"unstable_continueExecution",()=>m,e=>m=e),r(e.exports,"unstable_forceFrameRate",()=>g,e=>g=e),r(e.exports,"unstable_getCurrentPriorityLevel",()=>y,e=>y=e),r(e.exports,"unstable_getFirstCallbackNode",()=>b,e=>b=e),r(e.exports,"unstable_next",()=>v,e=>v=e),r(e.exports,"unstable_pauseExecution",()=>w,e=>w=e),r(e.exports,"unstable_requestPaint",()=>x,e=>x=e),r(e.exports,"unstable_runWithPriority",()=>k,e=>k=e),r(e.exports,"unstable_scheduleCallback",()=>N,e=>N=e),r(e.exports,"unstable_shouldYield",()=>S,e=>S=e),r(e.exports,"unstable_wrapCallback",()=>E,e=>E=e),"object"==typeof performance&&"function"==typeof performance.now){var o,l,u,c,p,d,f,h,m,g,y,b,v,w,x,k,N,S,E,T,_=performance;o=function(){return _.now()}}else{var I=Date,A=I.now();o=function(){return I.now()-A}}var M=[],O=[],C=1,$=null,D=3,R=!1,L=!1,F=!1,z="function"==typeof setTimeout?setTimeout:null,P="function"==typeof clearTimeout?clearTimeout:null,B="undefined"!=typeof setImmediate?setImmediate:null;function U(e){for(var t=a(O);null!==t;){if(null===t.callback)s(O);else if(t.startTime<=e)s(O),t.sortIndex=t.expirationTime,n(M,t);else break;t=a(O)}}function V(e){if(F=!1,U(e),!L){if(null!==a(M))L=!0,Z(W);else{var t=a(O);null!==t&&ee(V,t.startTime-e)}}}function W(e,t){L=!1,F&&(F=!1,P(q),q=-1),R=!0;var n=D;try{for(U(t),$=a(M);null!==$&&(!($.expirationTime>t)||e&&!Q());){var r=$.callback;if("function"==typeof r){$.callback=null,D=$.priorityLevel;var i=r($.expirationTime<=t);t=o(),"function"==typeof i?$.callback=i:$===a(M)&&s(M),U(t)}else s(M);$=a(M)}if(null!==$)var l=!0;else{var u=a(O);null!==u&&ee(V,u.startTime-t),l=!1}return l}finally{$=null,D=n,R=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var j=!1,H=null,q=-1,K=5,G=-1;function Q(){return!(o()-G<K)}function Y(){if(null!==H){var e=o();G=e;var t=!0;try{t=H(!0,e)}finally{t?T():(j=!1,H=null)}}else j=!1}if("function"==typeof B)T=function(){B(Y)};else if("undefined"!=typeof MessageChannel){var X=new MessageChannel,J=X.port2;X.port1.onmessage=Y,T=function(){J.postMessage(null)}}else T=function(){z(Y,0)};function Z(e){H=e,j||(j=!0,T())}function ee(e,t){q=z(function(){e(o())},t)}l=5,u=1,c=4,p=3,d=null,f=2,h=function(e){e.callback=null},m=function(){L||R||(L=!0,Z(W))},g=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<e?Math.floor(1e3/e):5},y=function(){return D},b=function(){return a(M)},v=function(e){switch(D){case 1:case 2:case 3:var t=3;break;default:t=D}var n=D;D=t;try{return e()}finally{D=n}},w=function(){},x=function(){},k=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=D;D=e;try{return t()}finally{D=n}},N=function(e,t,r){var s=o();switch(r="object"==typeof r&&null!==r&&"number"==typeof(r=r.delay)&&0<r?s+r:s,e){case 1:var i=-1;break;case 2:i=250;break;case 5:i=1073741823;break;case 4:i=1e4;break;default:i=5e3}return i=r+i,e={id:C++,callback:t,priorityLevel:e,startTime:r,expirationTime:i,sortIndex:-1},r>s?(e.sortIndex=r,n(O,e),null===a(M)&&e===a(O)&&(F?(P(q),q=-1):F=!0,ee(V,r-s))):(e.sortIndex=i,n(M,e),L||R||(L=!0,Z(W))),e},S=Q,E=function(e){var t=D;return function(){var n=D;D=t;try{return e.apply(this,arguments)}finally{D=n}}}}),R("1DJXa",function(e,t){}),R("hkQHN",function(e,t){!function(e,t,n){function r(e){var t,n=this,r=(t=4022871197,function(e){e=String(e);for(var n=0;n<e.length;n++){var r=.02519603282416938*(t+=e.charCodeAt(n));t=r>>>0,r-=t,r*=t,t=r>>>0,r-=t,t+=4294967296*r}return(t>>>0)*23283064365386963e-26});n.next=function(){var e=2091639*n.s0+23283064365386963e-26*n.c;return n.s0=n.s1,n.s1=n.s2,n.s2=e-(n.c=0|e)},n.c=1,n.s0=r(" "),n.s1=r(" "),n.s2=r(" "),n.s0-=r(e),n.s0<0&&(n.s0+=1),n.s1-=r(e),n.s1<0&&(n.s1+=1),n.s2-=r(e),n.s2<0&&(n.s2+=1)}function a(e,t){return t.c=e.c,t.s0=e.s0,t.s1=e.s1,t.s2=e.s2,t}function s(e,t){var n=new r(e),s=t&&t.state,i=n.next;return i.int32=function(){return 4294967296*n.next()|0},i.double=function(){return i()+(2097152*i()|0)*11102230246251565e-32},i.quick=i,s&&("object"==typeof s&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.alea=s}(0,e,"function"==typeof define&&define)}),R("26jXS",function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.x=0,t.y=0,t.z=0,t.w=0,t.next=function(){var e=t.x^t.x<<11;return t.x=t.y,t.y=t.z,t.z=t.w,t.w^=t.w>>>19^e^e>>>8},e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t}function s(e,t){var n=new r(e),s=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/2097152;while(0===r)return r},i.int32=n.next,i.quick=i,s&&("object"==typeof s&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xor128=s}(0,e,"function"==typeof define&&define)}),R("4SoVI",function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.x^t.x>>>2;return t.x=t.y,t.y=t.z,t.z=t.w,t.w=t.v,(t.d=t.d+362437|0)+(t.v=t.v^t.v<<4^(e^e<<1))|0},t.x=0,t.y=0,t.z=0,t.w=0,t.v=0,e===(0|e)?t.x=e:n+=e;for(var r=0;r<n.length+64;r++)t.x^=0|n.charCodeAt(r),r==n.length&&(t.d=t.x<<10^t.x>>>4),t.next()}function a(e,t){return t.x=e.x,t.y=e.y,t.z=e.z,t.w=e.w,t.v=e.v,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/2097152;while(0===r)return r},i.int32=n.next,i.quick=i,s&&("object"==typeof s&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xorwow=s}(0,e,"function"==typeof define&&define)}),R("4uNIP",function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.x,a=t.i;return e=r[a],e^=e>>>7,n=e^e<<24^((e=r[a+1&7])^e>>>10)^((e=r[a+3&7])^e>>>3)^((e=r[a+4&7])^e<<7),e=r[a+7&7],e^=e<<13,n^=e^e<<9,r[a]=n,t.i=a+1&7,n},function(e,t){var n,r=[];if(t===(0|t))r[0]=t;else for(n=0,t=""+t;n<t.length;++n)r[7&n]=r[7&n]<<15^t.charCodeAt(n)+r[n+1&7]<<13;for(;r.length<8;)r.push(0);for(n=0;n<8&&0===r[n];++n);for(8==n?r[7]=-1:r[n],e.x=r,e.i=0,n=256;n>0;--n)e.next()}(t,e)}function a(e,t){return t.x=e.x.slice(),t.i=e.i,t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/2097152;while(0===r)return r},i.int32=n.next,i.quick=i,s&&(s.x&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xorshift7=s}(0,e,"function"==typeof define&&define)}),R("iVpT1",function(e,t){!function(e,t,n){function r(e){var t=this;t.next=function(){var e,n,r=t.w,a=t.X,s=t.i;return t.w=r=r+1640531527|0,n=a[s+34&127],e=a[s=s+1&127],n^=n<<13,e^=e<<17,n^=n>>>15,e^=e>>>12,n=a[s]=n^e,t.i=s,n+(r^r>>>16)|0},function(e,t){var n,r,a,s,i,o=[],l=128;for(t===(0|t)?(r=t,t=null):(t+="\0",r=0,l=Math.max(l,t.length)),a=0,s=-32;s<l;++s)t&&(r^=t.charCodeAt((s+32)%t.length)),0===s&&(i=r),r^=r<<10,r^=r>>>15,r^=r<<4,r^=r>>>13,s>=0&&(i=i+1640531527|0,a=0==(n=o[127&s]^=r+i)?a+1:0);for(a>=128&&(o[127&(t&&t.length||0)]=-1),a=127,s=512;s>0;--s)r=o[a+34&127],n=o[a=a+1&127],r^=r<<13,n^=n<<17,r^=r>>>15,n^=n>>>12,o[a]=r^n;e.w=i,e.X=o,e.i=a}(t,e)}function a(e,t){return t.i=e.i,t.w=e.w,t.X=e.X.slice(),t}function s(e,t){null==e&&(e=+new Date);var n=new r(e),s=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/2097152;while(0===r)return r},i.int32=n.next,i.quick=i,s&&(s.X&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.xor4096=s}(0,e,"function"==typeof define&&define)}),R("i1rkf",function(e,t){!function(e,t,n){function r(e){var t=this,n="";t.next=function(){var e=t.b,n=t.c,r=t.d,a=t.a;return e=e<<25^e>>>7^n,n=n-r|0,r=r<<24^r>>>8^a,a=a-e|0,t.b=e=e<<20^e>>>12^n,t.c=n=n-r|0,t.d=r<<16^n>>>16^a,t.a=a-e|0},t.a=0,t.b=0,t.c=-1640531527,t.d=1367130551,e===Math.floor(e)?(t.a=e/4294967296|0,t.b=0|e):n+=e;for(var r=0;r<n.length+20;r++)t.b^=0|n.charCodeAt(r),t.next()}function a(e,t){return t.a=e.a,t.b=e.b,t.c=e.c,t.d=e.d,t}function s(e,t){var n=new r(e),s=t&&t.state,i=function(){return(n.next()>>>0)/4294967296};return i.double=function(){do var e=n.next()>>>11,t=(n.next()>>>0)/4294967296,r=(e+t)/2097152;while(0===r)return r},i.int32=n.next,i.quick=i,s&&("object"==typeof s&&a(s,n),i.state=function(){return a(n,{})}),i}t&&t.exports?t.exports=s:n&&n.amd?n(function(){return s}):this.tychei=s}(0,e,"function"==typeof define&&define)});var L={};L=D("9Hk4c"),D("85Hg2");var F={};r(F,"createRoot",()=>f,e=>f=e),r(F,"hydrateRoot",()=>h,e=>h=e);var z={};!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),f=(z=D("bU6y3")).createRoot,h=z.hydrateRoot;var P=D("85Hg2");class B{refCount(e){return U("refCount")}incRef(e){return U("incRef")}timerAvailable(){return!0}time(e){return U("time")}read(e){return U("read")}readSync(e){return U("readSync")}readToGPU(e,t){return U("readToGPU")}numDataIds(){return U("numDataIds")}disposeData(e,t){return U("disposeData")}write(e,t,n){return U("write")}move(e,t,n,r,a){return U("move")}createTensorFromGPUData(e,t,n){return U("createTensorFromGPUData")}memory(){return U("memory")}floatPrecision(){return U("floatPrecision")}epsilon(){return 32===this.floatPrecision()?1e-7:1e-4}dispose(){return U("dispose")}}function U(e){throw Error(`'${e}' not yet implemented or not found in the registry. This kernel may not be supported by the tfjs backend you have chosen`)}/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var V={};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function W(e){let t=e.length,n=0;for(;t>0;)n=Math.random()*t|0,K(e,--t,n)}function j(e,t){if(e.length!==t.length)throw Error(`Array sizes must match to be shuffled together First array length was ${e.length}Second array length was ${t.length}`);let n=e.length,r=0;for(;n>0;)r=Math.random()*n|0,K(e,--n,r),K(t,n,r)}function H(e,t,n){return Math.max(e,Math.min(t,n))}function q(e){return e%2==0?e:e+1}function K(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function G(e){let t=0;for(let n=0;n<e.length;n++)t+=e[n];return t}function Q(e,t){let n=Math.random();return t*n+(1-n)*e}function Y(e,t){let n=0;for(let r=0;r<e.length;r++){let a=Number(e[r])-Number(t[r]);n+=a*a}return n}function X(e,t){if(!e)throw Error("string"==typeof t?t:t())}function J(e,t,n=""){X(er(e,t),()=>n+` Shapes ${e} and ${t} must match`)}function Z(e){X(null!=e,()=>"The input to the tensor constructor must be a non-null value.")}function ee(e){if(0===e.length)return 1;let t=e[0];for(let n=1;n<e.length;n++)t*=e[n];return t}function et(e){return 0===e.length}function en(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(null!==e[n]&&null!==t[n]&&e[n]!==t[n])return!1;return!0}function er(e,t){if(e===t)return!0;if(null==e||null==t||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}function ea(e){return e%1==0}function es(e){if(null!=Math.tanh)return Math.tanh(e);if(e===1/0)return 1;{if(e===-1/0)return -1;let t=Math.exp(2*e);return(t-1)/(t+1)}}function ei(e){let t=Math.ceil(Math.sqrt(e));return[t,Math.ceil(e/t)]}function eo(e){let t=new Uint32Array(e);for(let n=0;n<e;++n)t[n]=n;return W(t),t}function el(e,t){return t<=e.length?e:e+" ".repeat(t-e.length)}function eu(e,t=e=>0,n,r){return new Promise((a,s)=>{let i=0,o=()=>{if(e()){a();return}let l=t(++i);if(null!=n&&i>=n){s();return}null!=r?r(o,l):setTimeout(o,l)};o()})}function ec(e,t){let n=1,r=-1;for(let t=0;t<e.length;++t)if(e[t]>=0)n*=e[t];else if(-1===e[t]){if(-1!==r)throw Error(`Shapes can only have 1 implicit size. Found -1 at dim ${r} and dim ${t}`);r=t}else if(e[t]<0)throw Error(`Shapes can not be < 0. Found ${e[t]} at dim ${t}`);if(-1===r){if(t>0&&t!==n)throw Error(`Size(${t}) must match the product of shape ${e}`);return e}if(0===n)throw Error(`Cannot infer the missing size in [${e}] when there are 0 elements`);if(t%n!=0)throw Error(`The implicit shape can't be a fractional number. Got ${t} / ${n}`);let a=e.slice();return a[r]=t/n,a}function ep(e,t){let n=t.length;return X((e=null==e?t.map((e,t)=>t):[].concat(e)).every(e=>e>=-n&&e<n),()=>`All values in axis param must be in range [-${n}, ${n}) but got axis ${e}`),X(e.every(e=>ea(e)),()=>`All values in axis param must be integers but got axis ${e}`),e.map(e=>e<0?n+e:e)}function ed(e,t){let n=[],r=[],a=null!=t&&Array.isArray(t)&&0===t.length,s=null==t||a?null:ep(t,e).sort(),i=0;for(let t=0;t<e.length;++t){if(null!=s){if(s[i]===t&&1!==e[t])throw Error(`Can't squeeze axis ${t} since its dim '${e[t]}' is not 1`);(null==s[i]||s[i]>t)&&1===e[t]&&(n.push(e[t]),r.push(t)),s[i]<=t&&i++}1!==e[t]&&(n.push(e[t]),r.push(t))}return{newShape:n,keptDims:r}}function ef(e,t){return eh(e,t)}function eh(e,t){let n=null;if(null==e||"float32"===e)n=new Float32Array(t);else if("int32"===e)n=new Int32Array(t);else if("bool"===e)n=new Uint8Array(t);else if("string"===e)n=Array(t);else throw Error(`Unknown data type ${e}`);return n}function em(e,t){for(let n=0;n<e.length;n++){let r=e[n];if(isNaN(r)||!isFinite(r))throw Error(`A tensor of type ${t} being uploaded contains ${r}.`)}}function eg(e){return"bool"===e||"complex64"===e||"float32"===e||"int32"===e||"string"===e}function ey(e,t){return"complex64"!==t&&("float32"!==t||"complex64"===e)&&("int32"!==t||"float32"===e||"complex64"===e)&&("bool"!==t||"bool"!==e)}function eb(e){if("float32"===e||"int32"===e)return 4;if("complex64"===e)return 8;if("bool"===e)return 1;throw Error(`Unknown dtype ${e}`)}function ev(e){if(null==e)return 0;let t=0;return e.forEach(e=>t+=e.length),t}function ew(e){return"string"==typeof e||e instanceof String}function ex(e){return"boolean"==typeof e}function ek(e){return"number"==typeof e}function eN(e){if(Array.isArray(e))return eN(e[0]);if(e instanceof Float32Array);else if(e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray)return"int32";else if(ek(e));else if(ew(e))return"string";else if(ex(e))return"bool";return"float32"}function eS(e){return!!(e&&e.constructor&&e.call&&e.apply)}function eE(e,t){for(let n=t;n<e;++n)if(e%n==0)return n;return e}function eT(e){let t=e.length;if(t<2)return[];let n=Array(t-1);n[t-2]=e[t-1];for(let r=t-3;r>=0;--r)n[r]=n[r+1]*e[r+1];return n}function e_(e,t,n=!1){if(0===e.length)return t[0];let r=e.reduce((e,t)=>e*t)*(n?2:1);if(0===r)return[];if(r!==t.length)throw Error(`[${e}] does not match the input size ${t.length}${n?" for a complex tensor":""}.`);return function e(t,n,r,a=!1){let s=[];if(1===n.length){let e=n[0]*(a?2:1);for(let n=0;n<e;n++)s[n]=r[t+n]}else{let i=n[0],o=n.slice(1),l=o.reduce((e,t)=>e*t)*(a?2:1);for(let n=0;n<i;n++)s[n]=e(t+n*l,o,r,a)}return s}(0,e,t,n)}function eI(e,t){if(Array.isArray(e))return e;if("float32"===t)return e instanceof Float32Array?e:new Float32Array(e);if("int32"===t)return e instanceof Int32Array?e:new Int32Array(e);if("bool"===t||"string"===t)return Uint8Array.from(new Int32Array(e));throw Error(`Unknown dtype ${t}`)}function eA(e,t){let n=eM(e,t);for(let e=0;e<n.length;e++)n[e]=1;return n}function eM(e,t){if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t)return new Uint8Array(e);throw Error(`Unknown data type ${t}`)}function eO(e,t){let n=e.reduce((e,t)=>e*t,1);if(null==t||"float32"===t)return e_(e,new Float32Array(n));if("int32"===t)return e_(e,new Int32Array(n));if("bool"===t)return e_(e,new Uint8Array(n));throw Error(`Unknown data type ${t}`)}function eC(e){e.forEach(t=>{X(Number.isInteger(t)&&t>=0,()=>`Tensor must have a shape comprised of positive integers but got shape [${e}].`)})}function e$(e,t,n){if(0===t)return 0;if(1===t)return e[0];let r=e[e.length-1];for(let t=0;t<e.length-1;++t)r+=n[t]*e[t];return r}function eD(e,t,n){if(0===t)return[];if(1===t)return[e];let r=Array(t);for(let t=0;t<r.length-1;++t)r[t]=Math.floor(e/n[t]),e-=r[t]*n[t];return r[r.length-1]=e,r}function eR(e){return e&&e.then&&"function"==typeof e.then}r(V,"shuffle",()=>W),r(V,"swap",()=>K),r(V,"shuffleCombo",()=>j),r(V,"clamp",()=>H),r(V,"nearestLargerEven",()=>q),r(V,"sum",()=>G),r(V,"randUniform",()=>Q),r(V,"distSquared",()=>Y),r(V,"assert",()=>X),r(V,"assertShapesMatch",()=>J),r(V,"arraysEqual",()=>er),r(V,"assertNonNull",()=>Z),r(V,"sizeFromShape",()=>ee),r(V,"isScalarShape",()=>et),r(V,"arraysEqualWithNull",()=>en),r(V,"isInt",()=>ea),r(V,"tanh",()=>es),r(V,"sizeToSquarishShape",()=>ei),r(V,"createShuffledIndices",()=>eo),r(V,"rightPad",()=>el),r(V,"repeatedTry",()=>eu),r(V,"inferFromImplicitShape",()=>ec),r(V,"parseAxisParam",()=>ep),r(V,"squeezeShape",()=>ed),r(V,"getTypedArrayFromDType",()=>ef),r(V,"getArrayFromDType",()=>eh),r(V,"checkConversionForErrors",()=>em),r(V,"isValidDtype",()=>eg),r(V,"hasEncodingLoss",()=>ey),r(V,"bytesPerElement",()=>eb),r(V,"bytesFromStringArray",()=>ev),r(V,"isString",()=>ew),r(V,"isBoolean",()=>ex),r(V,"isNumber",()=>ek),r(V,"inferDtype",()=>eN),r(V,"isFunction",()=>eS),r(V,"nearestDivisor",()=>eE),r(V,"computeStrides",()=>eT),r(V,"toNestedArray",()=>e_),r(V,"convertBackendValuesAndArrayBuffer",()=>eI),r(V,"makeOnesTypedArray",()=>eA),r(V,"makeZerosTypedArray",()=>eM),r(V,"makeZerosNestedTypedArray",()=>eO),r(V,"assertNonNegativeIntegerDimensions",()=>eC),r(V,"locToIndex",()=>e$),r(V,"indexToLoc",()=>eD),r(V,"isPromise",()=>eR);let eL="tfjsflags";class eF{constructor(e){this.global=e,this.flags={},this.flagRegistry={},this.urlFlags={},this.getQueryParams=ez,this.populateURLFlags()}setPlatform(e,t){null==this.platform||eP.getBool("IS_TEST")||eP.getBool("PROD")||console.warn(`Platform ${this.platformName} has already been set. Overwriting the platform with ${e}.`),this.platformName=e,this.platform=t}registerFlag(e,t,n){if(this.flagRegistry[e]={evaluationFn:t,setHook:n},null!=this.urlFlags[e]){let t=this.urlFlags[e];eP.getBool("IS_TEST")||eP.getBool("PROD")||console.warn(`Setting feature override from URL ${e}: ${t}.`),this.set(e,t)}}async getAsync(e){return e in this.flags||(this.flags[e]=await this.evaluateFlag(e)),this.flags[e]}get(e){if(e in this.flags)return this.flags[e];let t=this.evaluateFlag(e);if(eR(t))throw Error(`Flag ${e} cannot be synchronously evaluated. Please use getAsync() instead.`);return this.flags[e]=t,this.flags[e]}getNumber(e){return this.get(e)}getBool(e){return this.get(e)}getString(e){return this.get(e)}getFlags(){return this.flags}get features(){return this.flags}set(e,t){if(null==this.flagRegistry[e])throw Error(`Cannot set flag ${e} as it has not been registered.`);this.flags[e]=t,null!=this.flagRegistry[e].setHook&&this.flagRegistry[e].setHook(t)}evaluateFlag(e){if(null==this.flagRegistry[e])throw Error(`Cannot evaluate flag '${e}': no evaluation function found.`);return this.flagRegistry[e].evaluationFn()}setFlags(e){this.flags=Object.assign({},e)}reset(){this.flags={},this.urlFlags={},this.populateURLFlags()}populateURLFlags(){if(void 0===this.global||void 0===this.global.location||void 0===this.global.location.search)return;let e=this.getQueryParams(this.global.location.search);eL in e&&e[eL].split(",").forEach(e=>{let[t,n]=e.split(":");this.urlFlags[t]=function(e,t){let n=t.toLowerCase();return"true"===n||"false"===n?"true"===n:`${+n}`===n?+n:t}(0,n)})}}function ez(e){let t={};return e.replace(/[?&]([^=?&]+)(?:=([^&]*))?/g,(e,...n)=>{var r,a;return r=n[0],a=n[1],t[decodeURIComponent(r)]=decodeURIComponent(a||""),n.join("=")}),t}let eP=null;/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var eB={},eU=eB={};function eV(){throw Error("setTimeout has not been defined")}function eW(){throw Error("clearTimeout has not been defined")}function ej(e){if(m===setTimeout)return setTimeout(e,0);if((m===eV||!m)&&setTimeout)return m=setTimeout,setTimeout(e,0);try{return m(e,0)}catch(t){try{return m.call(null,e,0)}catch(t){return m.call(this,e,0)}}}!function(){try{m="function"==typeof setTimeout?setTimeout:eV}catch(e){m=eV}try{g="function"==typeof clearTimeout?clearTimeout:eW}catch(e){g=eW}}();var eH=[],eq=!1,eK=-1;function eG(){eq&&y&&(eq=!1,y.length?eH=y.concat(eH):eK=-1,eH.length&&eQ())}function eQ(){if(!eq){var e=ej(eG);eq=!0;for(var t=eH.length;t;){for(y=eH,eH=[];++eK<t;)y&&y[eK].run();eK=-1,t=eH.length}y=null,eq=!1,function(e){if(g===clearTimeout)return clearTimeout(e);if((g===eW||!g)&&clearTimeout)return g=clearTimeout,clearTimeout(e);try{g(e)}catch(t){try{return g.call(null,e)}catch(t){return g.call(this,e)}}}(e)}}function eY(e,t){this.fun=e,this.array=t}function eX(){}function eJ(){if(null==e){let t;if("undefined"!=typeof window)t=window;else if(void 0!==M)t=M;else if(void 0!==eB)t=eB;else if("undefined"!=typeof self)t=self;else throw Error("Could not find a global object");e=t}return e}function eZ(e,t){let n=function(){let e=eJ();return null==e._tfGlobals&&(e._tfGlobals=new Map),e._tfGlobals}();if(n.has(e))return n.get(e);{let r=t();return n.set(e,r),n.get(e)}}eU.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];eH.push(new eY(e,t)),1!==eH.length||eq||ej(eQ)},eY.prototype.run=function(){this.fun.apply(null,this.array)},eU.title="browser",eU.browser=!0,eU.env={},eU.argv=[],eU.version="",eU.versions={},eU.on=eX,eU.addListener=eX,eU.once=eX,eU.off=eX,eU.removeListener=eX,eU.removeAllListeners=eX,eU.emit=eX,eU.prependListener=eX,eU.prependOnceListener=eX,eU.listeners=function(e){return[]},eU.binding=function(e){throw Error("process.binding is not supported")},eU.cwd=function(){return"/"},eU.chdir=function(e){throw Error("process.chdir is not supported")},eU.umask=function(){return 0};let e0="Cast",e1="Draw",e2="Identity",e3="Tile",e4="Transpose",e6="FromPixels",e5="_FusedMatMul",e8="FusedConv2D",e7="FusedDepthwiseConv2D";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function e9(...e){eP.getBool("IS_TEST")||eP.getBool("PROD")||console.warn(...e)}let te=eZ("kernelRegistry",()=>new Map),tt=eZ("gradRegistry",()=>new Map);function tn(e,t){let n=`${t}_${e}`;return te.get(n)}function tr(e){let t=te.entries(),n=[];for(;;){let{done:r,value:a}=t.next();if(r)break;let[s,i]=a,[o]=s.split("_");o===e&&n.push(i)}return n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ta={};/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ts(e){return e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray}r(ta,"createScalarValue",()=>tj),r(ta,"encodeString",()=>tG),r(ta,"toTypedArray",()=>tH),r(ta,"flatten",()=>tX),r(ta,"now",()=>tq),r(ta,"fetch",()=>tK),r(ta,"decodeString",()=>tQ),r(ta,"isTypedArray",()=>tY);var ti={};r(ti,"hexToLong",()=>t$),r(ti,"fingerPrint64",()=>tW);/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var to={};to=tu;var tl=null;try{tl=new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([0,97,115,109,1,0,0,0,1,13,2,96,0,1,127,96,4,127,127,127,127,1,127,3,7,6,0,1,1,1,1,1,6,6,1,127,1,65,0,11,7,50,6,3,109,117,108,0,1,5,100,105,118,95,115,0,2,5,100,105,118,95,117,0,3,5,114,101,109,95,115,0,4,5,114,101,109,95,117,0,5,8,103,101,116,95,104,105,103,104,0,0,10,191,1,6,4,0,35,0,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,126,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,127,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,128,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,129,34,4,66,32,135,167,36,0,32,4,167,11,36,1,1,126,32,0,173,32,1,173,66,32,134,132,32,2,173,32,3,173,66,32,134,132,130,34,4,66,32,135,167,36,0,32,4,167,11])),{}).exports}catch(e){}function tu(e,t,n){this.low=0|e,this.high=0|t,this.unsigned=!!n}function tc(e){return!0===(e&&e.__isLong__)}tu.prototype.__isLong__,Object.defineProperty(tu.prototype,"__isLong__",{value:!0}),tu.isLong=tc;var tp={},td={};function tf(e,t){var n,r,a;return t?(e>>>=0,(a=0<=e&&e<256)&&(r=td[e]))?r:(n=tm(e,(0|e)<0?-1:0,!0),a&&(td[e]=n),n):(e|=0,(a=-128<=e&&e<128)&&(r=tp[e]))?r:(n=tm(e,e<0?-1:0,!1),a&&(tp[e]=n),n)}function th(e,t){if(isNaN(e))return t?tS:tN;if(t){if(e<0)return tS;if(e>=tw)return tA}else{if(e<=-tx)return tM;if(e+1>=tx)return tI}return e<0?th(-e,t).neg():tm(e%tv|0,e/tv|0,t)}function tm(e,t,n){return new tu(e,t,n)}tu.fromInt=tf,tu.fromNumber=th,tu.fromBits=tm;var tg=Math.pow;function ty(e,t,n){if(0===e.length)throw Error("empty string");if("NaN"===e||"Infinity"===e||"+Infinity"===e||"-Infinity"===e)return tN;if("number"==typeof t?(n=t,t=!1):t=!!t,(n=n||10)<2||36<n)throw RangeError("radix");if((r=e.indexOf("-"))>0)throw Error("interior hyphen");if(0===r)return ty(e.substring(1),t,n).neg();for(var r,a=th(tg(n,8)),s=tN,i=0;i<e.length;i+=8){var o=Math.min(8,e.length-i),l=parseInt(e.substring(i,i+o),n);if(o<8){var u=th(tg(n,o));s=s.mul(u).add(th(l))}else s=(s=s.mul(a)).add(th(l))}return s.unsigned=t,s}function tb(e,t){return"number"==typeof e?th(e,t):"string"==typeof e?ty(e,t):tm(e.low,e.high,"boolean"==typeof t?t:e.unsigned)}tu.fromString=ty,tu.fromValue=tb;var tv=4294967296,tw=18446744073709552e3,tx=0x7fffffffffffffff,tk=tf(16777216),tN=tf(0);tu.ZERO=tN;var tS=tf(0,!0);tu.UZERO=tS;var tE=tf(1);tu.ONE=tE;var tT=tf(1,!0);tu.UONE=tT;var t_=tf(-1);tu.NEG_ONE=t_;var tI=tm(-1,2147483647,!1);tu.MAX_VALUE=tI;var tA=tm(-1,-1,!0);tu.MAX_UNSIGNED_VALUE=tA;var tM=tm(0,-2147483648,!1);tu.MIN_VALUE=tM;var tO=tu.prototype;tO.toInt=function(){return this.unsigned?this.low>>>0:this.low},tO.toNumber=function(){return this.unsigned?(this.high>>>0)*tv+(this.low>>>0):this.high*tv+(this.low>>>0)},tO.toString=function(e){if((e=e||10)<2||36<e)throw RangeError("radix");if(this.isZero())return"0";if(this.isNegative()){if(!this.eq(tM))return"-"+this.neg().toString(e);var t=th(e),n=this.div(t),r=n.mul(t).sub(this);return n.toString(e)+r.toInt().toString(e)}for(var a=th(tg(e,6),this.unsigned),s=this,i="";;){var o=s.div(a),l=(s.sub(o.mul(a)).toInt()>>>0).toString(e);if((s=o).isZero())return l+i;for(;l.length<6;)l="0"+l;i=""+l+i}},tO.getHighBits=function(){return this.high},tO.getHighBitsUnsigned=function(){return this.high>>>0},tO.getLowBits=function(){return this.low},tO.getLowBitsUnsigned=function(){return this.low>>>0},tO.getNumBitsAbs=function(){if(this.isNegative())return this.eq(tM)?64:this.neg().getNumBitsAbs();for(var e=0!=this.high?this.high:this.low,t=31;t>0&&(e&1<<t)==0;t--);return 0!=this.high?t+33:t+1},tO.isZero=function(){return 0===this.high&&0===this.low},tO.eqz=tO.isZero,tO.isNegative=function(){return!this.unsigned&&this.high<0},tO.isPositive=function(){return this.unsigned||this.high>=0},tO.isOdd=function(){return(1&this.low)==1},tO.isEven=function(){return(1&this.low)==0},tO.equals=function(e){return tc(e)||(e=tb(e)),(this.unsigned===e.unsigned||this.high>>>31!=1||e.high>>>31!=1)&&this.high===e.high&&this.low===e.low},tO.eq=tO.equals,tO.notEquals=function(e){return!this.eq(e)},tO.neq=tO.notEquals,tO.ne=tO.notEquals,tO.lessThan=function(e){return 0>this.comp(e)},tO.lt=tO.lessThan,tO.lessThanOrEqual=function(e){return 0>=this.comp(e)},tO.lte=tO.lessThanOrEqual,tO.le=tO.lessThanOrEqual,tO.greaterThan=function(e){return this.comp(e)>0},tO.gt=tO.greaterThan,tO.greaterThanOrEqual=function(e){return this.comp(e)>=0},tO.gte=tO.greaterThanOrEqual,tO.ge=tO.greaterThanOrEqual,tO.compare=function(e){if(tc(e)||(e=tb(e)),this.eq(e))return 0;var t=this.isNegative(),n=e.isNegative();return t&&!n?-1:!t&&n?1:this.unsigned?e.high>>>0>this.high>>>0||e.high===this.high&&e.low>>>0>this.low>>>0?-1:1:this.sub(e).isNegative()?-1:1},tO.comp=tO.compare,tO.negate=function(){return!this.unsigned&&this.eq(tM)?tM:this.not().add(tE)},tO.neg=tO.negate,tO.add=function(e){tc(e)||(e=tb(e));var t,n,r=this.high>>>16,a=65535&this.high,s=this.low>>>16,i=65535&this.low,o=e.high>>>16,l=65535&e.high,u=e.low>>>16,c=65535&e.low,p=0,d=0;return t=0+((n=0+(i+c))>>>16),n&=65535,t+=s+u,d+=t>>>16,t&=65535,d+=a+l,p+=d>>>16,d&=65535,p+=r+o,tm(t<<16|n,(p&=65535)<<16|d,this.unsigned)},tO.subtract=function(e){return tc(e)||(e=tb(e)),this.add(e.neg())},tO.sub=tO.subtract,tO.multiply=function(e){if(this.isZero())return tN;if(tc(e)||(e=tb(e)),tl)return tm(tl.mul(this.low,this.high,e.low,e.high),tl.get_high(),this.unsigned);if(e.isZero())return tN;if(this.eq(tM))return e.isOdd()?tM:tN;if(e.eq(tM))return this.isOdd()?tM:tN;if(this.isNegative())return e.isNegative()?this.neg().mul(e.neg()):this.neg().mul(e).neg();if(e.isNegative())return this.mul(e.neg()).neg();if(this.lt(tk)&&e.lt(tk))return th(this.toNumber()*e.toNumber(),this.unsigned);var t,n,r=this.high>>>16,a=65535&this.high,s=this.low>>>16,i=65535&this.low,o=e.high>>>16,l=65535&e.high,u=e.low>>>16,c=65535&e.low,p=0,d=0;return t=0+((n=0+i*c)>>>16),n&=65535,t+=s*c,d+=t>>>16,t&=65535,t+=i*u,d+=t>>>16,t&=65535,d+=a*c,p+=d>>>16,d&=65535,d+=s*u,p+=d>>>16,d&=65535,d+=i*l,p+=d>>>16,d&=65535,p+=r*c+a*u+s*l+i*o,tm(t<<16|n,(p&=65535)<<16|d,this.unsigned)},tO.mul=tO.multiply,tO.divide=function(e){if(tc(e)||(e=tb(e)),e.isZero())throw Error("division by zero");if(tl){var t,n,r;return this.unsigned||-2147483648!==this.high||-1!==e.low||-1!==e.high?tm((this.unsigned?tl.div_u:tl.div_s)(this.low,this.high,e.low,e.high),tl.get_high(),this.unsigned):this}if(this.isZero())return this.unsigned?tS:tN;if(this.unsigned){if(e.unsigned||(e=e.toUnsigned()),e.gt(this))return tS;if(e.gt(this.shru(1)))return tT;r=tS}else{if(this.eq(tM))return e.eq(tE)||e.eq(t_)?tM:e.eq(tM)?tE:(t=this.shr(1).div(e).shl(1)).eq(tN)?e.isNegative()?tE:t_:(n=this.sub(e.mul(t)),r=t.add(n.div(e)));if(e.eq(tM))return this.unsigned?tS:tN;if(this.isNegative())return e.isNegative()?this.neg().div(e.neg()):this.neg().div(e).neg();if(e.isNegative())return this.div(e.neg()).neg();r=tN}for(n=this;n.gte(e);){for(var a=Math.ceil(Math.log(t=Math.max(1,Math.floor(n.toNumber()/e.toNumber())))/Math.LN2),s=a<=48?1:tg(2,a-48),i=th(t),o=i.mul(e);o.isNegative()||o.gt(n);)t-=s,o=(i=th(t,this.unsigned)).mul(e);i.isZero()&&(i=tE),r=r.add(i),n=n.sub(o)}return r},tO.div=tO.divide,tO.modulo=function(e){return(tc(e)||(e=tb(e)),tl)?tm((this.unsigned?tl.rem_u:tl.rem_s)(this.low,this.high,e.low,e.high),tl.get_high(),this.unsigned):this.sub(this.div(e).mul(e))},tO.mod=tO.modulo,tO.rem=tO.modulo,tO.not=function(){return tm(~this.low,~this.high,this.unsigned)},tO.and=function(e){return tc(e)||(e=tb(e)),tm(this.low&e.low,this.high&e.high,this.unsigned)},tO.or=function(e){return tc(e)||(e=tb(e)),tm(this.low|e.low,this.high|e.high,this.unsigned)},tO.xor=function(e){return tc(e)||(e=tb(e)),tm(this.low^e.low,this.high^e.high,this.unsigned)},tO.shiftLeft=function(e){return(tc(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?tm(this.low<<e,this.high<<e|this.low>>>32-e,this.unsigned):tm(0,this.low<<e-32,this.unsigned)},tO.shl=tO.shiftLeft,tO.shiftRight=function(e){return(tc(e)&&(e=e.toInt()),0==(e&=63))?this:e<32?tm(this.low>>>e|this.high<<32-e,this.high>>e,this.unsigned):tm(this.high>>e-32,this.high>=0?0:-1,this.unsigned)},tO.shr=tO.shiftRight,tO.shiftRightUnsigned=function(e){if(tc(e)&&(e=e.toInt()),0==(e&=63))return this;var t=this.high;return e<32?tm(this.low>>>e|t<<32-e,t>>>e,this.unsigned):32===e?tm(t,0,this.unsigned):tm(t>>>e-32,0,this.unsigned)},tO.shru=tO.shiftRightUnsigned,tO.shr_u=tO.shiftRightUnsigned,tO.toSigned=function(){return this.unsigned?tm(this.low,this.high,!1):this},tO.toUnsigned=function(){return this.unsigned?this:tm(this.low,this.high,!0)},tO.toBytes=function(e){return e?this.toBytesLE():this.toBytesBE()},tO.toBytesLE=function(){var e=this.high,t=this.low;return[255&t,t>>>8&255,t>>>16&255,t>>>24,255&e,e>>>8&255,e>>>16&255,e>>>24]},tO.toBytesBE=function(){var e=this.high,t=this.low;return[e>>>24,e>>>16&255,e>>>8&255,255&e,t>>>24,t>>>16&255,t>>>8&255,255&t]},tu.fromBytes=function(e,t,n){return n?tu.fromBytesLE(e,t):tu.fromBytesBE(e,t)},tu.fromBytesLE=function(e,t){return new tu(e[0]|e[1]<<8|e[2]<<16|e[3]<<24,e[4]|e[5]<<8|e[6]<<16|e[7]<<24,t)},tu.fromBytesBE=function(e,t){return new tu(e[4]<<24|e[5]<<16|e[6]<<8|e[7],e[0]<<24|e[1]<<16|e[2]<<8|e[3],t)};let tC=to.default||to;function t$(e){return tC.fromString(e,!0,16)}let tD=t$("c3a5c85c97cb3127"),tR=t$("b492b66fbe98f273"),tL=t$("9ae16a3b2f90404f");function tF(e){return e.xor(e.shru(47))}function tz(e,t,n){let r=e.slice(t,t+n);return tC.fromBytes(Array.from(r),!0,!0)}function tP(e,t){return tz(e,t,8)}function tB(e,t){return 0===t?e:e.shru(t).or(e.shl(64-t))}function tU(e,t,n=t$("9ddfea08eb382d69")){let r=e.xor(t).mul(n);r=r.xor(r.shru(47));let a=t.xor(r).mul(n);return(a=a.xor(a.shru(47))).mul(n)}function tV(e,t,n,r){return function(e,t,n,r,a,s){a=a.add(e),s=tB(s.add(a).add(r),21);let i=a;return a=(a=a.add(t)).add(n),s=s.add(tB(a,44)),[a.add(r),s.add(i)]}(tP(e,t),tP(e,t+8),tP(e,t+16),tP(e,t+24),n,r)}function tW(e,t=e.length){let n=tC.fromNumber(81,!0);if(t<=32)return t<=16?function(e,t=e.length){if(t>=8){let n=tL.add(2*t),r=tP(e,0).add(tL),a=tP(e,t-8);return tU(tB(a,37).mul(n).add(r),tB(r,25).add(a).mul(n),n)}if(t>=4){let n=tL.add(2*t);return tU(tz(e,0,4).shl(3).add(t),tz(e,t-4,4),n)}if(t>0){let n=e[0],r=e[t>>1],a=e[t-1];return tF(tL.mul(n+(r<<8)).xor(tD.mul(t+(a<<2)))).mul(tL)}return tL}(e,t):function(e,t=e.length){let n=tL.add(2*t),r=tP(e,0).mul(tR),a=tP(e,8),s=tP(e,t-8).mul(n),i=tP(e,t-16).mul(tL);return tU(tB(r.add(a),43).add(tB(s,30)).add(i),r.add(tB(a.add(tL),18)).add(s),n)}(e,t);if(t<=64)return function(e,t=e.length){let n=tL.add(2*t),r=tP(e,0).mul(tL),a=tP(e,8),s=tP(e,t-8).mul(n),i=tP(e,t-16).mul(tL),o=tB(r.add(a),43).add(tB(s,30)).add(i),l=tU(o,r.add(tB(a.add(tL),18)).add(s),n),u=tP(e,16).mul(n),c=tP(e,24),p=o.add(tP(e,t-32)).mul(n),d=l.add(tP(e,t-24)).mul(n);return tU(tB(u.add(c),43).add(tB(p,30)).add(d),u.add(tB(c.add(r),18)).add(p),n)}(e,t);let r=n,a=n.mul(tR).add(113),s=tF(a.mul(tL).add(113)).mul(tL),i=[tC.UZERO,tC.UZERO],o=[tC.UZERO,tC.UZERO];r=r.mul(tL).add(tP(e,0));let l=0,u=(t-1>>6)*64,c=u+(t-1&63)-63;do r=tB(r.add(a).add(i[0]).add(tP(e,l+8)),37).mul(tR),a=tB(a.add(i[1]).add(tP(e,l+48)),42).mul(tR),r=r.xor(o[1]),a=a.add(i[0]).add(tP(e,l+40)),s=tB(s.add(o[0]),33).mul(tR),i=tV(e,l,i[1].mul(tR),r.add(o[0])),o=tV(e,l+32,s.add(o[1]),a.add(tP(e,l+16))),[s,r]=[r,s],l+=64;while(l!==u)let p=tR.add(s.and(255).shl(1));return l=c,o[0]=o[0].add(t-1&63),i[0]=i[0].add(o[0]),o[0]=o[0].add(i[0]),r=tB(r.add(a).add(i[0]).add(tP(e,l+8)),37).mul(p),a=tB(a.add(i[1]).add(tP(e,l+48)),42).mul(p),r=r.xor(o[1].mul(9)),a=a.add(i[0].mul(9).add(tP(e,l+40))),s=tB(s.add(o[0]),33).mul(p),i=tV(e,l,i[1].mul(p),r.add(o[0])),o=tV(e,l+32,s.add(o[1]),a.add(tP(e,l+16))),[s,r]=[r,s],tU(tU(i[0],o[0],p).add(tF(a).mul(tD)).add(s),tU(i[1],o[1],p).add(r),p)}function tj(e,t){return"string"===t?tG(e):tH([e],t)}function tH(e,t){var n;if("string"===t)throw Error("Cannot convert a string[] to a TypedArray");if(Array.isArray(e)&&(e=tX(e)),eP.getBool("DEBUG")&&em(e,t),(n=e)instanceof Float32Array&&"float32"===t||n instanceof Int32Array&&"int32"===t||n instanceof Uint8Array&&"bool"===t)return e;if(null==t||"float32"===t||"complex64"===t)return new Float32Array(e);if("int32"===t)return new Int32Array(e);if("bool"===t){let t=new Uint8Array(e.length);for(let n=0;n<t.length;++n)0!==Math.round(e[n])&&(t[n]=1);return t}throw Error(`Unknown data type ${t}`)}function tq(){return eP.platform.now()}function tK(e,t){return eP.platform.fetch(e,t)}function tG(e,t="utf-8"){return t=t||"utf-8",eP.platform.encode(e,t)}function tQ(e,t="utf-8"){return t=t||"utf-8",eP.platform.decode(e,t)}function tY(e){return null!=eP.platform.isTypedArray?eP.platform.isTypedArray(e):ts(e)}function tX(e,t=[],n=!1){if(null==t&&(t=[]),"boolean"==typeof e||"number"==typeof e||"string"==typeof e||eR(e)||null==e||tY(e)&&n)t.push(e);else if(Array.isArray(e)||tY(e))for(let r=0;r<e.length;++r)tX(e[r],t,n);else{let r=-1;for(let t of Object.keys(e))/^([1-9]+[0-9]*|0)$/.test(t)&&(r=Math.max(r,Number(t)));for(let a=0;a<=r;a++)tX(e[a],t,n)}return t}O(ta,V),O(ta,ti);class tJ{constructor(e,t){this.backendTimer=e,this.logger=t,null==t&&(this.logger=new tZ)}profileKernel(e,t,n){let r,a;let s=()=>{r=n()},i=tq();if(this.backendTimer.timerAvailable())a=this.backendTimer.time(s);else{for(let e of(s(),r))e.dataSync();a=Promise.resolve({kernelMs:tq()-i})}if(eP.getBool("CHECK_COMPUTATION_FOR_ERRORS"))for(let t=0;t<r.length;t++){let n=r[t];n.data().then(t=>{!function(e,t,n){if("float32"===t)for(let t=0;t<e.length;t++){let r=e[t];if(isNaN(r)||!isFinite(r))return console.warn(`Found ${r} in the result of '${n}'`),!0}}(t,n.dtype,e)})}return{kernelName:e,outputs:r,inputs:t,timeMs:a.then(e=>e.kernelMs),extraInfo:a.then(e=>null!=e.getExtraProfileInfo?e.getExtraProfileInfo():"")}}logKernelProfile(e){let{kernelName:t,outputs:n,timeMs:r,inputs:a,extraInfo:s}=e;n.forEach(e=>{Promise.all([e.data(),r,s]).then(n=>{this.logger.logKernelProfile(t,e,n[0],n[1],a,n[2])})})}}class tZ{logKernelProfile(e,t,n,r,a,s){let i="number"==typeof r?el(`${r}ms`,9):r.error,o=el(e,25),l=t.rank,u=t.size,c=el(t.shape.toString(),14),p="";for(let e in a){let n=a[e];if(null!=n){let r=n.shape||t.shape,a=r.length;p+=`${e}: ${a}D ${a>0?r:""} `}}console.log(`%c${o}	%c${i}	%c${l}D ${c}	%c${u}	%c${p}	%c${s}`,"font-weight:bold","color:red","color:blue","color: orange","color: green","color: steelblue")}}function t0(e,t,n){return el(Array.isArray(e)?`${parseFloat(e[0].toFixed(7))} + ${parseFloat(e[1].toFixed(7))}j`:ew(e)?`'${e}'`:"bool"===n?t1(e):parseFloat(e.toFixed(7)).toString(),t)}function t1(e){return 0===e?"false":"true"}function t2(e){let t=[];for(let n=0;n<e.length;n+=2)t.push([e[n],e[n+1]]);return t}class t3{constructor(e,t,n){if(this.dtype=t,this.shape=e.slice(),this.size=ee(e),null!=n){let e=n.length;X(e===this.size,()=>`Length of values '${e}' does not match the size inferred by the shape '${this.size}'.`)}if("complex64"===t)throw Error("complex64 dtype TensorBuffers are not supported. Please create a TensorBuffer for the real and imaginary parts separately and call tf.complex(real, imag).");this.values=n||eh(t,this.size),this.strides=eT(e)}set(e,...t){0===t.length&&(t=[0]),X(t.length===this.rank,()=>`The number of provided coordinates (${t.length}) must match the rank (${this.rank})`);let n=this.locToIndex(t);this.values[n]=e}get(...e){0===e.length&&(e=[0]);let t=0;for(let n of e){if(n<0||n>=this.shape[t])throw Error(`Requested out of range element at ${e}.   Buffer shape=${this.shape}`);t++}let n=e[e.length-1];for(let t=0;t<e.length-1;++t)n+=this.strides[t]*e[t];return this.values[n]}locToIndex(e){if(0===this.rank)return 0;if(1===this.rank)return e[0];let t=e[e.length-1];for(let n=0;n<e.length-1;++n)t+=this.strides[n]*e[n];return t}indexToLoc(e){if(0===this.rank)return[];if(1===this.rank)return[e];let t=Array(this.shape.length);for(let n=0;n<t.length-1;++n)t[n]=Math.floor(e/this.strides[n]),e-=t[n]*this.strides[n];return t[t.length-1]=e,t}get rank(){return this.shape.length}toTensor(){return t4().makeTensor(this.values,this.shape,this.dtype)}}let t4=null,t6=null;class t5{constructor(e,t,n,r){this.kept=!1,this.isDisposedInternal=!1,this.shape=e.slice(),this.dtype=t||"float32",this.size=ee(e),this.strides=eT(e),this.dataId=n,this.id=r,this.rankType=this.rank<5?this.rank.toString():"higher"}get rank(){return this.shape.length}async buffer(){let e=await this.data();return t6.buffer(this.shape,this.dtype,e)}bufferSync(){return t6.buffer(this.shape,this.dtype,this.dataSync())}async array(){let e=await this.data();return e_(this.shape,e,"complex64"===this.dtype)}arraySync(){return e_(this.shape,this.dataSync(),"complex64"===this.dtype)}async data(){this.throwIfDisposed();let e=t4().read(this.dataId);if("string"===this.dtype){let t=await e;try{return t.map(e=>tQ(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}}return e}dataToGPU(e){return this.throwIfDisposed(),t4().readToGPU(this.dataId,e)}dataSync(){this.throwIfDisposed();let e=t4().readSync(this.dataId);if("string"===this.dtype)try{return e.map(e=>tQ(e))}catch(e){throw Error("Failed to decode the string bytes into utf-8. To get the original bytes, call tensor.bytes().")}return e}async bytes(){this.throwIfDisposed();let e=await t4().read(this.dataId);return"string"===this.dtype?e:new Uint8Array(e.buffer)}dispose(){this.isDisposed||(this.kerasMask&&this.kerasMask.dispose(),t4().disposeTensor(this),this.isDisposedInternal=!0)}get isDisposed(){return this.isDisposedInternal}throwIfDisposed(){if(this.isDisposed)throw Error("Tensor is disposed.")}print(e=!1){return t6.print(this,e)}clone(){return this.throwIfDisposed(),t6.clone(this)}toString(e=!1){return function(e,t,n,r){let a=eT(t),s=function(e,t,n,r){let a=ee(t),s=r[r.length-1],i=Array(s).fill(0),o=t.length,l="complex64"===n?t2(e):e;if(o>1)for(let e=0;e<a/s;e++){let t=e*s;for(let e=0;e<s;e++)i[e]=Math.max(i[e],t0(l[t+e],0,n).length)}return i}(e,t,n,a),i=t.length,o=function e(t,n,r,a,s,i=!0){let o="complex64"===r?2:1,l=n[0],u=n.length;if(0===u)return"complex64"===r?[t0(t2(t)[0],0,r)]:"bool"===r?[t1(t[0])]:[t[0].toString()];if(1===u){if(l>20){let e=Array.from(t.slice(0,3*o)),n=Array.from(t.slice((l-3)*o,l*o));return"complex64"===r&&(e=t2(e),n=t2(n)),["["+e.map((e,t)=>t0(e,s[t],r)).join(", ")+", ..., "+n.map((e,t)=>t0(e,s[l-3+t],r)).join(", ")+"]"]}return["["+("complex64"===r?t2(t):Array.from(t)).map((e,t)=>t0(e,s[t],r)).join(", ")+"]"]}let c=n.slice(1),p=a.slice(1),d=a[0]*o,f=[];if(l>20){for(let n=0;n<3;n++){let a=n*d,i=a+d;f.push(...e(t.slice(a,i),c,r,p,s,!1))}f.push("...");for(let n=l-3;n<l;n++){let a=n*d,i=a+d;f.push(...e(t.slice(a,i),c,r,p,s,n===l-1))}}else for(let n=0;n<l;n++){let a=n*d,i=a+d;f.push(...e(t.slice(a,i),c,r,p,s,n===l-1))}let h=2===u?",":"";f[0]="["+(l>0?f[0]+h:"");for(let e=1;e<f.length-1;e++)f[e]=" "+f[e]+h;let m=",\n";for(let e=2;e<u;e++)m+="\n";return f[f.length-1]=" "+f[f.length-1]+"]"+(i?"":m),f}(e,t,n,a,s),l=["Tensor"];return r&&(l.push(`  dtype: ${n}`),l.push(`  rank: ${i}`),l.push(`  shape: [${t}]`),l.push("  values:")),l.push(o.map(e=>"    "+e).join("\n")),l.join("\n")}(this.dataSync(),this.shape,this.dtype,e)}cast(e){return this.throwIfDisposed(),t6.cast(this,e)}variable(e=!0,t,n){return this.throwIfDisposed(),t4().makeVariable(this,e,t,n)}}function t8(){return eZ("Tensor",()=>t5)}Object.defineProperty(t5,Symbol.hasInstance,{value:e=>!!e&&null!=e.data&&null!=e.dataSync&&null!=e.throwIfDisposed}),t8();class t7 extends t5{constructor(e,t,n,r){super(e.shape,e.dtype,e.dataId,r),this.trainable=t,this.name=n}assign(e){if(e.dtype!==this.dtype)throw Error(`dtype of the new value (${e.dtype}) and previous value (${this.dtype}) must match`);if(!er(e.shape,this.shape))throw Error(`shape of the new value (${e.shape}) and previous value (${this.shape}) must match`);t4().disposeTensor(this),this.dataId=e.dataId,t4().incRef(this,null)}dispose(){t4().disposeVariable(this),this.isDisposedInternal=!0}}Object.defineProperty(t7,Symbol.hasInstance,{value:e=>e instanceof t5&&null!=e.assign&&e.assign instanceof Function}),(a=b||(b={})).R0="R0",a.R1="R1",a.R2="R2",a.R3="R3",a.R4="R4",a.R5="R5",a.R6="R6",(s=v||(v={})).float32="float32",s.int32="int32",s.bool="int32",s.complex64="complex64",(i=w||(w={})).float32="float32",i.int32="int32",i.bool="bool",i.complex64="complex64",(o=x||(x={})).float32="float32",o.int32="float32",o.bool="float32",o.complex64="complex64",(l=k||(k={})).float32="complex64",l.int32="complex64",l.bool="complex64",l.complex64="complex64";let t9={float32:x,int32:v,bool:w,complex64:k};function ne(e){return null!=e&&"object"==typeof e&&"texture"in e&&e.texture instanceof WebGLTexture}function nt(e){return"undefined"!=typeof GPUBuffer&&null!=e&&"object"==typeof e&&"buffer"in e&&e.buffer instanceof GPUBuffer}function nn(e,t){if(e.dtype===t.dtype)return[e,t];let n=function(e,t){if("string"===e||"string"===t){if("string"===e&&"string"===t)return"string";throw Error(`Can not upcast ${e} with ${t}`)}return t9[e][t]}(e.dtype,t.dtype);return[e.cast(n),t.cast(n)]}function nr(e){let t=[];return function e(t,n,r){if(null!=t){if(t instanceof t5){n.push(t);return}if(Array.isArray(t)||"object"==typeof t)for(let a in t){let s=t[a];r.has(s)||(r.add(s),e(s,n,r))}}}(e,t,new Set),t}function na(e){return null!=e.kernelName}class ns{constructor(){this.registeredVariables={},this.nextTapeNodeId=0,this.numBytes=0,this.numTensors=0,this.numStringTensors=0,this.numDataBuffers=0,this.gradientDepth=0,this.kernelDepth=0,this.scopeStack=[],this.numDataMovesStack=[],this.nextScopeId=0,this.tensorInfo=new WeakMap,this.profiling=!1,this.activeProfile={newBytes:0,newTensors:0,peakBytes:0,kernels:[],result:null,get kernelNames(){return Array.from(new Set(this.kernels.map(e=>e.name)))}}}dispose(){for(let e in this.registeredVariables)this.registeredVariables[e].dispose()}}class ni{constructor(e){this.ENV=e,this.registry={},this.registryFactory={},this.pendingBackendInitId=0,this.state=new ns}async ready(){if(null!=this.pendingBackendInit)return this.pendingBackendInit.then(()=>{});if(null!=this.backendInstance)return;let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t];if(await this.initializeBackend(n).success){await this.setBackend(n);return}}throw Error("Could not initialize any backends, all backend initializations failed.")}get backend(){if(null!=this.pendingBackendInit)throw Error(`Backend '${this.backendName}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);if(null==this.backendInstance){let{name:e,asyncInit:t}=this.initializeBackendsAndReturnBest();if(t)throw Error(`The highest priority backend '${e}' has not yet been initialized. Make sure to await tf.ready() or await tf.setBackend() before calling other methods`);this.setBackend(e)}return this.backendInstance}backendNames(){return Object.keys(this.registryFactory)}findBackend(e){if(!(e in this.registry)){if(!(e in this.registryFactory))return null;{let{asyncInit:t}=this.initializeBackend(e);if(t)return null}}return this.registry[e]}findBackendFactory(e){return e in this.registryFactory?this.registryFactory[e].factory:null}registerBackend(e,t,n=1){return e in this.registryFactory?(e9(`${e} backend was already registered. Reusing existing backend factory.`),!1):(this.registryFactory[e]={factory:t,priority:n},!0)}async setBackend(e){if(null==this.registryFactory[e])throw Error(`Backend name '${e}' not found in registry`);if(this.backendName=e,null==this.registry[e]){this.backendInstance=null;let{success:t,asyncInit:n}=this.initializeBackend(e);if(!(n?await t:t))return!1}return this.backendInstance=this.registry[e],this.setupRegisteredKernels(),this.profiler=new tJ(this.backendInstance),!0}setupRegisteredKernels(){tr(this.backendName).forEach(e=>{null!=e.setupFunc&&e.setupFunc(this.backendInstance)})}disposeRegisteredKernels(e){tr(e).forEach(t=>{null!=t.disposeFunc&&t.disposeFunc(this.registry[e])})}initializeBackend(e){let t=this.registryFactory[e];if(null==t)throw Error(`Cannot initialize backend ${e}, no registration found.`);try{let n=t.factory();if(!n||n instanceof B||"function"!=typeof n.then)return this.registry[e]=n,{success:!0,asyncInit:!1};{let t=++this.pendingBackendInitId,r=n.then(n=>!(t<this.pendingBackendInitId)&&(this.registry[e]=n,this.pendingBackendInit=null,!0)).catch(n=>!(t<this.pendingBackendInitId)&&(this.pendingBackendInit=null,e9(`Initialization of backend ${e} failed`),e9(n.stack||n.message),!1));return this.pendingBackendInit=r,{success:r,asyncInit:!0}}}catch(t){return e9(`Initialization of backend ${e} failed`),e9(t.stack||t.message),{success:!1,asyncInit:!1}}}removeBackend(e){if(!(e in this.registryFactory))throw Error(`${e} backend not found in registry`);this.backendName===e&&null!=this.pendingBackendInit&&this.pendingBackendInitId++,e in this.registry&&(this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e]),delete this.registryFactory[e],this.backendName===e&&(this.pendingBackendInit=null,this.backendName=null,this.backendInstance=null)}getSortedBackends(){if(0===Object.keys(this.registryFactory).length)throw Error("No backend found in registry.");return Object.keys(this.registryFactory).sort((e,t)=>this.registryFactory[t].priority-this.registryFactory[e].priority)}initializeBackendsAndReturnBest(){let e=this.getSortedBackends();for(let t=0;t<e.length;t++){let n=e[t],{success:r,asyncInit:a}=this.initializeBackend(n);if(a||r)return{name:n,asyncInit:a}}throw Error("Could not initialize any backends, all backend initializations failed.")}moveData(e,t){let n=this.state.tensorInfo.get(t),r=n.backend,a=this.readSync(t),s=r.refCount(t);r.disposeData(t,!0),n.backend=e,e.move(t,a,n.shape,n.dtype,s),this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack[this.state.numDataMovesStack.length-1]++}tidy(e,t){let n,r=null;if(null==t){if("function"!=typeof e)throw Error("Please provide a function to tidy()");t=e}else{if("string"!=typeof e&&!(e instanceof String))throw Error("When calling with two arguments, the first argument to tidy() must be a string");if("function"!=typeof t)throw Error("When calling with two arguments, the 2nd argument to tidy() must be a function");r=e}return this.scopedRun(()=>this.startScope(r),()=>this.endScope(n),()=>((n=t())instanceof Promise&&console.error("Cannot return a Promise inside of tidy."),n))}scopedRun(e,t,n){e();try{let e=n();return t(),e}catch(e){throw t(),e}}nextTensorId(){return ni.nextTensorId++}nextVariableId(){return ni.nextVariableId++}clone(e){let t=nl.runKernel(e2,{x:e});return this.addTapeNode(this.state.activeScope.name,{x:e},[t],e=>({x:()=>nl.runKernel(e0,{x:e},{dtype:"float32"})}),[],{}),t}runKernel(e,t,n){if(null==this.backendName&&this.backend,!(null!=tn(e,this.backendName)))throw Error(`Kernel '${e}' not registered for backend '${this.backendName}'`);return this.runKernelFunc({kernelName:e,inputs:t,attrs:n})}shouldCheckForMemLeaks(){return this.ENV.getBool("IS_TEST")}checkKernelForMemLeak(e,t,n){let r=this.backend.numDataIds(),a=0;n.forEach(e=>{a+="complex64"===e.dtype?3:1});let s=this.state.numDataMovesStack[this.state.numDataMovesStack.length-1],i=r-t-a-s;if(i>0)throw Error(`Backend '${this.backendName}' has an internal memory leak (${i} data ids) after running '${e}'`)}runKernelFunc(e){let t,n,r,a;let s=[],i=this.isTapeOn(),o=this.state.numBytes,l=this.state.numTensors;this.shouldCheckForMemLeaks()&&this.state.numDataMovesStack.push(0),null==this.backendName&&this.backend;let u=na(e)?e.kernelName:null!=this.state.activeScope?this.state.activeScope.name:"";if(na(e)){let{kernelName:t,inputs:a,attrs:o}=e;null==this.backendName&&this.backend;let l=tn(t,this.backendName);X(null!=l,()=>`Cannot find registered kernel '${t}' for backend '${this.backendName}'`),n=()=>{let e=this.backend.numDataIds(),n=Array.isArray(r=l.kernelFunc({inputs:a,attrs:o,backend:this.backend}))?r:[r];this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(t,e,n);let u=n.map(e=>null!=e.rank?e:this.makeTensorFromTensorInfo(e));if(i){let e=this.getTensorsForGradient(t,a,u);s=this.saveTensorsForBackwardMode(e)}return u}}else{let{forwardFunc:t}=e,a=e=>{i&&(s=e.map(e=>this.keep(this.clone(e))))};n=()=>{let e=this.backend.numDataIds(),n=Array.isArray(r=this.tidy(()=>t(this.backend,a)))?r:[r];return this.shouldCheckForMemLeaks()&&this.checkKernelForMemLeak(u,e,n),n}}let{inputs:c,attrs:p}=e,d=na(e)?null:e.backwardsFunc;return this.scopedRun(()=>this.state.kernelDepth++,()=>this.state.kernelDepth--,()=>{this.ENV.getBool("DEBUG")||this.state.profiling?(a=this.profiler.profileKernel(u,c,()=>n()),this.ENV.getBool("DEBUG")&&this.profiler.logKernelProfile(a),t=a.outputs):t=n()}),i&&this.addTapeNode(u,c,t,d,s,p),this.state.profiling&&this.state.activeProfile.kernels.push({name:u,bytesAdded:this.state.numBytes-o,totalBytesSnapshot:this.state.numBytes,tensorsAdded:this.state.numTensors-l,totalTensorsSnapshot:this.state.numTensors,inputShapes:Object.keys(c).map(e=>null!=c[e]?c[e].shape:null),outputShapes:t.map(e=>e.shape),kernelTimeMs:a.timeMs,extraInfo:a.extraInfo}),Array.isArray(r)?t:t[0]}saveTensorsForBackwardMode(e){return e.map(e=>this.keep(this.clone(e)))}getTensorsForGradient(e,t,n){let r=tt.get(e);if(null!=r){let e;let a=r.inputsToSave||[],s=r.outputsToSave||[];r.saveAllInputs?(X(Array.isArray(t),()=>"saveAllInputs is true, expected inputs to be an array."),e=Object.keys(t).map(e=>t[e])):e=a.map(e=>t[e]);let i=n.filter((e,t)=>s[t]);return e.concat(i)}return[]}makeTensor(e,t,n,r){if(null==e)throw Error("Values passed to engine.makeTensor() are null");n=n||"float32",r=r||this.backend;let a=e;"string"===n&&ew(e[0])&&(a=e.map(e=>tG(e)));let s=r.write(a,t,n),i=new t5(t,n,s,this.nextTensorId());if(this.trackTensor(i,r),"string"===n){let e=this.state.tensorInfo.get(s),t=ev(a);this.state.numBytes+=t-e.bytes,e.bytes=t}return i}makeTensorFromDataId(e,t,n,r){let a={dataId:e,shape:t,dtype:n=n||"float32"};return this.makeTensorFromTensorInfo(a,r)}makeTensorFromTensorInfo(e,t){let{dataId:n,shape:r,dtype:a}=e,s=new t5(r,a,n,this.nextTensorId());return this.trackTensor(s,t),s}makeVariable(e,t=!0,n,r){n=n||this.nextVariableId().toString(),null!=r&&r!==e.dtype&&(e=e.cast(r));let a=new t7(e,t,n,this.nextTensorId());if(null!=this.state.registeredVariables[a.name])throw Error(`Variable with name ${a.name} was already registered`);return this.state.registeredVariables[a.name]=a,this.incRef(a,this.backend),a}trackTensor(e,t){this.state.numTensors++,"string"===e.dtype&&this.state.numStringTensors++;let n=0;"complex64"!==e.dtype&&"string"!==e.dtype&&(n=e.size*eb(e.dtype)),this.state.numBytes+=n,this.state.tensorInfo.has(e.dataId)||(this.state.numDataBuffers++,this.state.tensorInfo.set(e.dataId,{backend:t||this.backend,dtype:e.dtype,shape:e.shape,bytes:n})),e instanceof t7||this.track(e)}incRef(e,t){this.trackTensor(e,t),this.backend.incRef(e.dataId)}removeDataId(e,t){this.state.tensorInfo.has(e)&&this.state.tensorInfo.get(e).backend===t&&(this.state.tensorInfo.delete(e),this.state.numDataBuffers--)}disposeTensor(e){if(!this.state.tensorInfo.has(e.dataId))return;let t=this.state.tensorInfo.get(e.dataId);if(this.state.numTensors--,"string"===e.dtype&&(this.state.numStringTensors--,this.state.numBytes-=t.bytes),"complex64"!==e.dtype&&"string"!==e.dtype){let t=e.size*eb(e.dtype);this.state.numBytes-=t}t.backend.disposeData(e.dataId)&&this.removeDataId(e.dataId,t.backend)}disposeVariables(){for(let e in this.state.registeredVariables){let t=this.state.registeredVariables[e];this.disposeVariable(t)}}disposeVariable(e){this.disposeTensor(e),null!=this.state.registeredVariables[e.name]&&delete this.state.registeredVariables[e.name]}memory(){let e=this.backend.memory();return e.numTensors=this.state.numTensors,e.numDataBuffers=this.state.numDataBuffers,e.numBytes=this.state.numBytes,this.state.numStringTensors>0&&(e.unreliable=!0,null==e.reasons&&(e.reasons=[]),e.reasons.push("Memory usage by string tensors is approximate (2 bytes per character)")),e}async profile(e){this.state.profiling=!0;let t=this.state.numBytes,n=this.state.numTensors;for(let r of(this.state.activeProfile.kernels=[],this.state.activeProfile.result=await e(),this.state.profiling=!1,this.state.activeProfile.peakBytes=Math.max(...this.state.activeProfile.kernels.map(e=>e.totalBytesSnapshot)),this.state.activeProfile.newBytes=this.state.numBytes-t,this.state.activeProfile.newTensors=this.state.numTensors-n,this.state.activeProfile.kernels))r.kernelTimeMs=await r.kernelTimeMs,r.extraInfo=await r.extraInfo;return this.state.activeProfile}isTapeOn(){return this.state.gradientDepth>0&&0===this.state.kernelDepth}addTapeNode(e,t,n,r,a,s){let i={id:this.state.nextTapeNodeId++,kernelName:e,inputs:t,outputs:n,saved:a},o=tt.get(e);null!=o&&(r=o.gradFunc),null!=r&&(i.gradient=e=>(e=e.map((e,t)=>{if(null==e){let e=n[t],r=eM(e.size,e.dtype);return this.makeTensor(r,e.shape,e.dtype)}return e}),r(e.length>1?e:e[0],a,s))),this.state.activeTape.push(i)}keep(e){return e.kept=!0,e}startTape(){0===this.state.gradientDepth&&(this.state.activeTape=[]),this.state.gradientDepth++}endTape(){this.state.gradientDepth--}startScope(e){let t={track:[],name:"unnamed scope",id:this.state.nextScopeId++};e&&(t.name=e),this.state.scopeStack.push(t),this.state.activeScope=t}endScope(e){let t=nr(e),n=new Set(t.map(e=>e.id));for(let e=0;e<this.state.activeScope.track.length;e++){let t=this.state.activeScope.track[e];t.kept||n.has(t.id)||t.dispose()}let r=this.state.scopeStack.pop();this.state.activeScope=0===this.state.scopeStack.length?null:this.state.scopeStack[this.state.scopeStack.length-1],t.forEach(e=>{e.kept||e.scopeId!==r.id||this.track(e)})}gradients(e,t,n,r=!1){if(X(t.length>0,()=>"gradients() received an empty list of xs."),null!=n&&"float32"!==n.dtype)throw Error(`dy must have 'float32' dtype, but has '${n.dtype}'`);let a=this.scopedRun(()=>this.startTape(),()=>this.endTape(),()=>this.tidy("forward",e));X(a instanceof t5,()=>"The result y returned by f() must be a tensor.");let s=/**
 * @license
 * Copyright 2017 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r={},a={};for(let e=0;e<t.length;e++)r[t[e].id]=!0;for(let n=0;n<e.length;n++){let s=e[n],i=s.inputs;for(let e in i){let n=i[e],o=!1;for(let e=0;e<t.length;e++)if(r[n.id]){s.outputs.forEach(e=>r[e.id]=!0),o=!0,a[s.id]=!0;break}if(o)break}}let s={};s[n.id]=!0;let i={};for(let t=e.length-1;t>=0;t--){let n=e[t],r=n.inputs;for(let e=0;e<n.outputs.length;e++)if(s[n.outputs[e].id]){for(let e in r)s[r[e].id]=!0,i[n.id]=!0;break}}let o=[];for(let t=0;t<e.length;t++){let n=e[t];if(a[n.id]&&i[n.id]){let e={};for(let t in n.inputs){let a=n.inputs[t];r[a.id]&&(e[t]=a)}let t=Object.assign({},n);t.inputs=e,t.outputs=n.outputs,o.push(t)}}return o}(this.state.activeTape,t,a);if(!r&&0===s.length&&t.length>0)throw Error("Cannot compute gradient of y=f(x) with respect to x. Make sure that the f you passed encloses all operations that lead from x to y.");return this.tidy("backward",()=>{let e={};e[a.id]=null==n?function(e){let t=eA(ee(e),"float32");return nl.makeTensor(t,e,"float32")}(a.shape):n,function(e,t,n,r){for(let a=t.length-1;a>=0;a--){let s=t[a],i=[];if(s.outputs.forEach(t=>{let n=e[t.id];null!=n?i.push(n):i.push(null)}),null==s.gradient)throw Error(`Cannot compute gradient: gradient function not found for ${s.kernelName}.`);let o=s.gradient(i);for(let t in s.inputs){if(!(t in o))throw Error(`Cannot backprop through input ${t}. Available gradients found: ${Object.keys(o)}.`);let a=n(()=>o[t]());if("float32"!==a.dtype)throw Error(`Error in gradient for op ${s.kernelName}. The gradient of input ${t} must have 'float32' dtype, but has '${a.dtype}'`);let i=s.inputs[t];if(!er(a.shape,i.shape))throw Error(`Error in gradient for op ${s.kernelName}. The gradient of input '${t}' has shape '${a.shape}', which does not match the shape of the input '${i.shape}'`);if(null==e[i.id])e[i.id]=a;else{let t=e[i.id];e[i.id]=r(t,a),t.dispose()}}}}(e,s,e=>this.tidy(e),nu);let r=t.map(t=>e[t.id]);return 0===this.state.gradientDepth&&(this.state.activeTape.forEach(e=>{for(let t of e.saved)t.dispose()}),this.state.activeTape=null),{value:a,grads:r}})}customGrad(e){return X(eS(e),()=>"The f passed in customGrad(f) must be a function."),(...t)=>{let n;X(t.every(e=>e instanceof t5),()=>"The args passed in customGrad(f)(x1, x2,...) must all be tensors");let r={};return t.forEach((e,t)=>{r[t]=e}),this.runKernelFunc({forwardFunc:(r,a)=>(X((n=e(...t,a)).value instanceof t5,()=>"The function f passed in customGrad(f) must return an object where `obj.value` is a tensor"),X(eS(n.gradFunc),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function."),n.value),backwardsFunc:(e,r)=>{let a=n.gradFunc(e,r),s=Array.isArray(a)?a:[a];X(s.length===t.length,()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns the same number of tensors as inputs passed to f(...)."),X(s.every(e=>e instanceof t5),()=>"The function f passed in customGrad(f) must return an object where `obj.gradFunc` is a function that returns a list of only tensors.");let i={};return s.forEach((e,t)=>{i[t]=()=>e}),i},inputs:r})}}readSync(e){return this.state.tensorInfo.get(e).backend.readSync(e)}read(e){return this.state.tensorInfo.get(e).backend.read(e)}readToGPU(e,t){return this.state.tensorInfo.get(e).backend.readToGPU(e,t)}async time(e){let t=tq(),n=await this.backend.time(e);return n.wallMs=tq()-t,n}track(e){return null!=this.state.activeScope&&(e.scopeId=this.state.activeScope.id,this.state.activeScope.track.push(e)),e}get registeredVariables(){return this.state.registeredVariables}reset(){for(let e in this.pendingBackendInitId++,this.state.dispose(),this.ENV.reset(),this.state=new ns,this.registry)this.disposeRegisteredKernels(e),this.registry[e].dispose(),delete this.registry[e];this.backendName=null,this.backendInstance=null,this.pendingBackendInit=null}}function no(){let e=eJ();if(null==e._tfengine){let t=new eF(e);e._tfengine=new ni(t)}return eP=e._tfengine.ENV,t4=()=>e._tfengine,e._tfengine}ni.nextTensorId=0,ni.nextVariableId=0;let nl=no();function nu(e,t){return nl.runKernel("Add",{a:e,b:t})}let nc=eP;/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function np(e,t){let n=e;if(tY(e))return"string"===t?[]:[e.length];if(ne(e)){let t=e.channels||"RGBA";return[e.height,e.width*t.length]}if(nt(e))return[e.buffer.size/(null==t?4:eb(t))];if(!Array.isArray(e))return[];let r=[];for(;Array.isArray(n)||tY(n)&&"string"!==t;)r.push(n.length),n=n[0];return Array.isArray(e)&&eP.getBool("TENSORLIKE_CHECK_SHAPE_CONSISTENCY")&&function e(t,n,r){if(r=r||[],!Array.isArray(t)&&!tY(t)){X(0===n.length,()=>`Element arr[${r.join("][")}] is a primitive, but should be an array/TypedArray of ${n[0]} elements`);return}X(n.length>0,()=>`Element arr[${r.join("][")}] should be a primitive, but is an array of ${t.length} elements`),X(t.length===n[0],()=>`Element arr[${r.join("][")}] should have ${n[0]} elements, but has ${t.length} elements`);let a=n.slice(1);for(let n=0;n<t.length;++n)e(t[n],a,r.concat(n))}(e,r,[]),r}function nd(e,t,n,r){if("string_or_numeric"!==e){if(null==e)throw Error("Expected dtype cannot be null.");if("numeric"!==e&&e!==t||"numeric"===e&&"string"===t)throw Error(`Argument '${n}' passed to '${r}' must be ${e} tensor, but got ${t} tensor`)}}function nf(e,t,n,r="numeric"){if(e instanceof t8())return nd(r,e.dtype,t,n),e;let a=eN(e);if("string"!==a&&["bool","int32","float32"].indexOf(r)>=0&&(a=r),nd(r,a,t,n),null==e||!tY(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e){let r=null==e?"null":e.constructor.name;throw Error(`Argument '${t}' passed to '${n}' must be a Tensor or TensorLike, but got '${r}'`)}let s=np(e,a);tY(e)||Array.isArray(e)||(e=[e]);let i="string"!==a?tH(e,a):tX(e,[],!0);return nl.makeTensor(i,s,a)}function nh(e,t,n,r="numeric"){if(!Array.isArray(e))throw Error(`Argument ${t} passed to ${n} must be a \`Tensor[]\` or \`TensorLike[]\``);return e.map((e,a)=>nf(e,`${t}[${a}]`,n,r))}nc.registerFlag("DEBUG",()=>!1,e=>{e&&console.warn("Debugging mode is ON. The output of every math call will be downloaded to CPU and checked for NaNs. This significantly impacts performance.")}),nc.registerFlag("IS_BROWSER",()=>"undefined"!=typeof window&&null!=window.document||"undefined"!=typeof WorkerGlobalScope),nc.registerFlag("IS_NODE",()=>void 0!==eB&&void 0!==eB.versions&&void 0!==eB.versions.node),nc.registerFlag("IS_CHROME",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor)),nc.registerFlag("IS_SAFARI",()=>"undefined"!=typeof navigator&&null!=navigator&&null!=navigator.userAgent&&/Safari/.test(navigator.userAgent)&&/Apple/.test(navigator.vendor)),nc.registerFlag("PROD",()=>!1),nc.registerFlag("TENSORLIKE_CHECK_SHAPE_CONSISTENCY",()=>nc.getBool("DEBUG")),nc.registerFlag("DEPRECATION_WARNINGS_ENABLED",()=>!0),nc.registerFlag("IS_TEST",()=>!1),nc.registerFlag("CHECK_COMPUTATION_FOR_ERRORS",()=>nc.getBool("DEBUG")),nc.registerFlag("WRAP_TO_IMAGEBITMAP",()=>!1),nc.registerFlag("CANVAS2D_WILL_READ_FREQUENTLY_FOR_GPU",()=>!1),nc.registerFlag("USE_SETTIMEOUTCUSTOM",()=>!1);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let nm="__op";function ng(e){let t=Object.keys(e);if(1!==t.length)throw Error(`Please provide an object with a single key (operation name) mapping to a function. Got an object with ${t.length} keys.`);let n=t[0],r=e[n];n.endsWith("_")&&(n=n.substring(0,n.length-1));let a=(...e)=>{nl.startScope(n);try{let t=r(...e);return eR(t)&&console.error("Cannot return a Promise inside of tidy."),nl.endScope(t),t}catch(e){throw nl.endScope(null),e}};return Object.defineProperty(a,"name",{value:n+=nm,configurable:!0}),a}let ny=ng({complex_:function(e,t){let n=nf(e,"real","complex"),r=nf(t,"imag","complex");return J(n.shape,r.shape,`real and imag shapes, ${n.shape} and ${r.shape}, must match in call to tf.complex().`),nl.runKernel("Complex",{real:n,imag:r})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function nb(e,t,n,r){if(null==r)r=eN(e);else if("complex64"===r)throw Error("Cannot construct a complex64 tensor directly. Please use tf.complex(real, imag).");if(nt(e)||ne(e)){if("float32"!==r&&"int32"!==r)throw Error(`Creating tensor from GPU data only supports 'float32'|'int32' dtype, while the dtype is ${r}.`);return nl.backend.createTensorFromGPUData(e,t||n,r)}if(!tY(e)&&!Array.isArray(e)&&"number"!=typeof e&&"boolean"!=typeof e&&"string"!=typeof e)throw Error("values passed to tensor(values) must be a number/boolean/string or an array of numbers/booleans/strings, or a TypedArray");if(null!=t){eC(t);let e=ee(t),r=ee(n);X(e===r,()=>`Based on the provided shape, [${t}], the tensor should have ${e} values but has ${r}`);for(let e=0;e<n.length;++e){let r=n[e],a=e!==n.length-1||r!==ee(t.slice(e));X(n[e]===t[e]||!a,()=>`Error creating a new Tensor. Inferred shape (${n}) does not match the provided shape (${t}). `)}}return tY(e)||Array.isArray(e)||(e=[e]),t=t||n,e="string"!==r?tH(e,r):tX(e,[],!0),nl.makeTensor(e,t,r)}function nv(e,t,n){let r=np(e,n);return nb(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let nw={float32:4,float16:2,int32:4,uint16:2,uint8:1,bool:1,complex64:8};class nx{static join(e){return new nx(e).slice()}constructor(e){if(this.shards=[],this.previousShardIndex=0,null==e||(e instanceof Array||(e=[e]),0===(e=e.map(e=>tY(e)?e.buffer:e)).length))return;this.bufferUniformSize=e[0].byteLength;let t=0;for(let n=0;n<e.length;n++){let r=e[n];n!==e.length-1&&r.byteLength!==this.bufferUniformSize&&(this.bufferUniformSize=void 0);let a=t+r.byteLength;this.shards.push({buffer:r,start:t,end:a}),t=a}0===this.shards.length&&(this.byteLength=0),this.byteLength=this.shards[this.shards.length-1].end}slice(e=0,t=this.byteLength){if(0===this.shards.length||(e=isNaN(Number(e))?0:e,t=isNaN(Number(t))?0:t,e=Math.max(0,e),(t=Math.min(this.byteLength,t))<=e))return new ArrayBuffer(0);let n=this.findShardForByte(e);if(-1===n)throw Error(`Could not find start shard for byte ${e}`);let r=new ArrayBuffer(t-e),a=new Uint8Array(r),s=0;for(let r=n;r<this.shards.length;r++){let n=this.shards[r],i=e+s-n.start,o=s,l=Math.min(t,n.end)-n.start,u=new Uint8Array(n.buffer,i,l-i);if(a.set(u,o),s+=u.length,t<n.end)break}return r}findShardForByte(e){if(0===this.shards.length||e<0||e>=this.byteLength)return -1;if(null!=this.bufferUniformSize)return this.previousShardIndex=Math.floor(e/this.bufferUniformSize),this.previousShardIndex;function t(t){return e<t.start?-1:e>=t.end?1:0}if(0===t(this.shards[this.previousShardIndex]))return this.previousShardIndex;let n=function(e,t){let n=0,r=e.length;for(;n<=r;){let a=Math.floor((r-n)/2)+n,s=t(e[a]);if(0===s)return a;s<0?r=a:n=a+1}return -1}(this.shards,t);return -1===n?-1:(this.previousShardIndex=n,this.previousShardIndex)}}function nk(e,t){return nl.tidy(e,t)}function nN(e){nr(e).forEach(e=>e.dispose())}function nS(e){return nl.keep(e)}N=function(e){var t,n,r=function(e){var t=e.length;if(t%4>0)throw Error("Invalid string. Length must be a multiple of 4");var n=e.indexOf("=");-1===n&&(n=t);var r=n===t?0:4-n%4;return[n,r]}(e),a=r[0],s=r[1],i=new n_((a+s)*3/4-s),o=0,l=s>0?a-4:a;for(n=0;n<l;n+=4)t=nT[e.charCodeAt(n)]<<18|nT[e.charCodeAt(n+1)]<<12|nT[e.charCodeAt(n+2)]<<6|nT[e.charCodeAt(n+3)],i[o++]=t>>16&255,i[o++]=t>>8&255,i[o++]=255&t;return 2===s&&(t=nT[e.charCodeAt(n)]<<2|nT[e.charCodeAt(n+1)]>>4,i[o++]=255&t),1===s&&(t=nT[e.charCodeAt(n)]<<10|nT[e.charCodeAt(n+1)]<<4|nT[e.charCodeAt(n+2)]>>2,i[o++]=t>>8&255,i[o++]=255&t),i},S=function(e){for(var t,n=e.length,r=n%3,a=[],s=0,i=n-r;s<i;s+=16383)a.push(function(e,t,n){for(var r,a=[],s=t;s<n;s+=3)a.push(nE[(r=(e[s]<<16&16711680)+(e[s+1]<<8&65280)+(255&e[s+2]))>>18&63]+nE[r>>12&63]+nE[r>>6&63]+nE[63&r]);return a.join("")}(e,s,s+16383>i?i:s+16383));return 1===r?a.push(nE[(t=e[n-1])>>2]+nE[t<<4&63]+"=="):2===r&&a.push(nE[(t=(e[n-2]<<8)+e[n-1])>>10]+nE[t>>4&63]+nE[t<<2&63]+"="),a.join("")};for(var nE=[],nT=[],n_="undefined"!=typeof Uint8Array?Uint8Array:Array,nI="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",nA=0,nM=nI.length;nA<nM;++nA)nE[nA]=nI[nA],nT[nI.charCodeAt(nA)]=nA;nT["-".charCodeAt(0)]=62,nT["_".charCodeAt(0)]=63,E=function(e,t,n,r,a){var s,i,o=8*a-r-1,l=(1<<o)-1,u=l>>1,c=-7,p=n?a-1:0,d=n?-1:1,f=e[t+p];for(p+=d,s=f&(1<<-c)-1,f>>=-c,c+=o;c>0;s=256*s+e[t+p],p+=d,c-=8);for(i=s&(1<<-c)-1,s>>=-c,c+=r;c>0;i=256*i+e[t+p],p+=d,c-=8);if(0===s)s=1-u;else{if(s===l)return i?NaN:1/0*(f?-1:1);i+=Math.pow(2,r),s-=u}return(f?-1:1)*i*Math.pow(2,s-r)},T=function(e,t,n,r,a,s){var i,o,l,u=8*s-a-1,c=(1<<u)-1,p=c>>1,d=23===a?5960464477539062e-23:0,f=r?0:s-1,h=r?1:-1,m=t<0||0===t&&1/t<0?1:0;for(isNaN(t=Math.abs(t))||t===1/0?(o=isNaN(t)?1:0,i=c):(i=Math.floor(Math.log(t)/Math.LN2),t*(l=Math.pow(2,-i))<1&&(i--,l*=2),i+p>=1?t+=d/l:t+=d*Math.pow(2,1-p),t*l>=2&&(i++,l/=2),i+p>=c?(o=0,i=c):i+p>=1?(o=(t*l-1)*Math.pow(2,a),i+=p):(o=t*Math.pow(2,p-1)*Math.pow(2,a),i=0));a>=8;e[n+f]=255&o,f+=h,o/=256,a-=8);for(i=i<<a|o,u+=a;u>0;e[n+f]=255&i,f+=h,i/=256,u-=8);e[n+f-h]|=128*m};let nO="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;function nC(e){if(e>2147483647)throw RangeError('The value "'+e+'" is invalid for option "size"');let t=new Uint8Array(e);return Object.setPrototypeOf(t,n$.prototype),t}function n$(e,t,n){if("number"==typeof e){if("string"==typeof t)throw TypeError('The "string" argument must be of type string. Received type number');return nL(e)}return nD(e,t,n)}function nD(e,t,n){if("string"==typeof e)return function(e,t){if(("string"!=typeof t||""===t)&&(t="utf8"),!n$.isEncoding(t))throw TypeError("Unknown encoding: "+t);let n=0|nB(e,t),r=nC(n),a=r.write(e,t);return a!==n&&(r=r.slice(0,a)),r}(e,t);if(ArrayBuffer.isView(e))return function(e){if(n9(e,Uint8Array)){let t=new Uint8Array(e);return nz(t.buffer,t.byteOffset,t.byteLength)}return nF(e)}(e);if(null==e)throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e);if(n9(e,ArrayBuffer)||e&&n9(e.buffer,ArrayBuffer)||"undefined"!=typeof SharedArrayBuffer&&(n9(e,SharedArrayBuffer)||e&&n9(e.buffer,SharedArrayBuffer)))return nz(e,t,n);if("number"==typeof e)throw TypeError('The "value" argument must not be of type number. Received type number');let r=e.valueOf&&e.valueOf();if(null!=r&&r!==e)return n$.from(r,t,n);let a=function(e){var t;if(n$.isBuffer(e)){let t=0|nP(e.length),n=nC(t);return 0===n.length||e.copy(n,0,0,t),n}return void 0!==e.length?"number"!=typeof e.length||(t=e.length)!=t?nC(0):nF(e):"Buffer"===e.type&&Array.isArray(e.data)?nF(e.data):void 0}(e);if(a)return a;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof e[Symbol.toPrimitive])return n$.from(e[Symbol.toPrimitive]("string"),t,n);throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof e)}function nR(e){if("number"!=typeof e)throw TypeError('"size" argument must be of type number');if(e<0)throw RangeError('The value "'+e+'" is invalid for option "size"')}function nL(e){return nR(e),nC(e<0?0:0|nP(e))}function nF(e){let t=e.length<0?0:0|nP(e.length),n=nC(t);for(let r=0;r<t;r+=1)n[r]=255&e[r];return n}function nz(e,t,n){let r;if(t<0||e.byteLength<t)throw RangeError('"offset" is outside of buffer bounds');if(e.byteLength<t+(n||0))throw RangeError('"length" is outside of buffer bounds');return Object.setPrototypeOf(r=void 0===t&&void 0===n?new Uint8Array(e):void 0===n?new Uint8Array(e,t):new Uint8Array(e,t,n),n$.prototype),r}function nP(e){if(e>=2147483647)throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");return 0|e}function nB(e,t){if(n$.isBuffer(e))return e.length;if(ArrayBuffer.isView(e)||n9(e,ArrayBuffer))return e.byteLength;if("string"!=typeof e)throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof e);let n=e.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let a=!1;for(;;)switch(t){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return n5(e).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return n8(e).length;default:if(a)return r?-1:n5(e).length;t=(""+t).toLowerCase(),a=!0}}function nU(e,t,n){let r=!1;if((void 0===t||t<0)&&(t=0),t>this.length||((void 0===n||n>this.length)&&(n=this.length),n<=0||(n>>>=0)<=(t>>>=0)))return"";for(e||(e="utf8");;)switch(e){case"hex":return function(e,t,n){let r=e.length;(!t||t<0)&&(t=0),(!n||n<0||n>r)&&(n=r);let a="";for(let r=t;r<n;++r)a+=re[e[r]];return a}(this,t,n);case"utf8":case"utf-8":return nH(this,t,n);case"ascii":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let a=t;a<n;++a)r+=String.fromCharCode(127&e[a]);return r}(this,t,n);case"latin1":case"binary":return function(e,t,n){let r="";n=Math.min(e.length,n);for(let a=t;a<n;++a)r+=String.fromCharCode(e[a]);return r}(this,t,n);case"base64":var a,s;return a=t,s=n,0===a&&s===this.length?S(this):S(this.slice(a,s));case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return function(e,t,n){let r=e.slice(t,n),a="";for(let e=0;e<r.length-1;e+=2)a+=String.fromCharCode(r[e]+256*r[e+1]);return a}(this,t,n);default:if(r)throw TypeError("Unknown encoding: "+e);e=(e+"").toLowerCase(),r=!0}}function nV(e,t,n){let r=e[t];e[t]=e[n],e[n]=r}function nW(e,t,n,r,a){var s;if(0===e.length)return -1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),(s=n=+n)!=s&&(n=a?0:e.length-1),n<0&&(n=e.length+n),n>=e.length){if(a)return -1;n=e.length-1}else if(n<0){if(!a)return -1;n=0}if("string"==typeof t&&(t=n$.from(t,r)),n$.isBuffer(t))return 0===t.length?-1:nj(e,t,n,r,a);if("number"==typeof t)return(t&=255,"function"==typeof Uint8Array.prototype.indexOf)?a?Uint8Array.prototype.indexOf.call(e,t,n):Uint8Array.prototype.lastIndexOf.call(e,t,n):nj(e,[t],n,r,a);throw TypeError("val must be string, number or Buffer")}function nj(e,t,n,r,a){let s,i=1,o=e.length,l=t.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(e.length<2||t.length<2)return -1;i=2,o/=2,l/=2,n/=2}function u(e,t){return 1===i?e[t]:e.readUInt16BE(t*i)}if(a){let r=-1;for(s=n;s<o;s++)if(u(e,s)===u(t,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===l)return r*i}else -1!==r&&(s-=s-r),r=-1}else for(n+l>o&&(n=o-l),s=n;s>=0;s--){let n=!0;for(let r=0;r<l;r++)if(u(e,s+r)!==u(t,r)){n=!1;break}if(n)return s}return -1}function nH(e,t,n){n=Math.min(e.length,n);let r=[],a=t;for(;a<n;){let t=e[a],s=null,i=t>239?4:t>223?3:t>191?2:1;if(a+i<=n){let n,r,o,l;switch(i){case 1:t<128&&(s=t);break;case 2:(192&(n=e[a+1]))==128&&(l=(31&t)<<6|63&n)>127&&(s=l);break;case 3:n=e[a+1],r=e[a+2],(192&n)==128&&(192&r)==128&&(l=(15&t)<<12|(63&n)<<6|63&r)>2047&&(l<55296||l>57343)&&(s=l);break;case 4:n=e[a+1],r=e[a+2],o=e[a+3],(192&n)==128&&(192&r)==128&&(192&o)==128&&(l=(15&t)<<18|(63&n)<<12|(63&r)<<6|63&o)>65535&&l<1114112&&(s=l)}}null===s?(s=65533,i=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),a+=i}return function(e){let t=e.length;if(t<=4096)return String.fromCharCode.apply(String,e);let n="",r=0;for(;r<t;)n+=String.fromCharCode.apply(String,e.slice(r,r+=4096));return n}(r)}function nq(e,t,n){if(e%1!=0||e<0)throw RangeError("offset is not uint");if(e+t>n)throw RangeError("Trying to access beyond buffer length")}function nK(e,t,n,r,a,s){if(!n$.isBuffer(e))throw TypeError('"buffer" argument must be a Buffer instance');if(t>a||t<s)throw RangeError('"value" argument is out of bounds');if(n+r>e.length)throw RangeError("Index out of range")}function nG(e,t,n,r,a){n2(t,r,a,e,n,7);let s=Number(t&BigInt(4294967295));e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s,s>>=8,e[n++]=s;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,i>>=8,e[n++]=i,n}function nQ(e,t,n,r,a){n2(t,r,a,e,n,7);let s=Number(t&BigInt(4294967295));e[n+7]=s,s>>=8,e[n+6]=s,s>>=8,e[n+5]=s,s>>=8,e[n+4]=s;let i=Number(t>>BigInt(32)&BigInt(4294967295));return e[n+3]=i,i>>=8,e[n+2]=i,i>>=8,e[n+1]=i,i>>=8,e[n]=i,n+8}function nY(e,t,n,r,a,s){if(n+r>e.length||n<0)throw RangeError("Index out of range")}function nX(e,t,n,r,a){return t=+t,n>>>=0,a||nY(e,t,n,4,34028234663852886e22,-34028234663852886e22),T(e,t,n,r,23,4),n+4}function nJ(e,t,n,r,a){return t=+t,n>>>=0,a||nY(e,t,n,8,17976931348623157e292,-17976931348623157e292),T(e,t,n,r,52,8),n+8}n$.TYPED_ARRAY_SUPPORT=function(){try{let e=new Uint8Array(1),t={foo:function(){return 42}};return Object.setPrototypeOf(t,Uint8Array.prototype),Object.setPrototypeOf(e,t),42===e.foo()}catch(e){return!1}}(),n$.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(n$.prototype,"parent",{enumerable:!0,get:function(){if(n$.isBuffer(this))return this.buffer}}),Object.defineProperty(n$.prototype,"offset",{enumerable:!0,get:function(){if(n$.isBuffer(this))return this.byteOffset}}),n$.poolSize=8192,n$.from=function(e,t,n){return nD(e,t,n)},Object.setPrototypeOf(n$.prototype,Uint8Array.prototype),Object.setPrototypeOf(n$,Uint8Array),n$.alloc=function(e,t,n){return(nR(e),e<=0)?nC(e):void 0!==t?"string"==typeof n?nC(e).fill(t,n):nC(e).fill(t):nC(e)},n$.allocUnsafe=function(e){return nL(e)},n$.allocUnsafeSlow=function(e){return nL(e)},n$.isBuffer=function(e){return null!=e&&!0===e._isBuffer&&e!==n$.prototype},n$.compare=function(e,t){if(n9(e,Uint8Array)&&(e=n$.from(e,e.offset,e.byteLength)),n9(t,Uint8Array)&&(t=n$.from(t,t.offset,t.byteLength)),!n$.isBuffer(e)||!n$.isBuffer(t))throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(e===t)return 0;let n=e.length,r=t.length;for(let a=0,s=Math.min(n,r);a<s;++a)if(e[a]!==t[a]){n=e[a],r=t[a];break}return n<r?-1:r<n?1:0},n$.isEncoding=function(e){switch(String(e).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},n$.concat=function(e,t){let n;if(!Array.isArray(e))throw TypeError('"list" argument must be an Array of Buffers');if(0===e.length)return n$.alloc(0);if(void 0===t)for(n=0,t=0;n<e.length;++n)t+=e[n].length;let r=n$.allocUnsafe(t),a=0;for(n=0;n<e.length;++n){let t=e[n];if(n9(t,Uint8Array))a+t.length>r.length?(n$.isBuffer(t)||(t=n$.from(t)),t.copy(r,a)):Uint8Array.prototype.set.call(r,t,a);else if(n$.isBuffer(t))t.copy(r,a);else throw TypeError('"list" argument must be an Array of Buffers');a+=t.length}return r},n$.byteLength=nB,n$.prototype._isBuffer=!0,n$.prototype.swap16=function(){let e=this.length;if(e%2!=0)throw RangeError("Buffer size must be a multiple of 16-bits");for(let t=0;t<e;t+=2)nV(this,t,t+1);return this},n$.prototype.swap32=function(){let e=this.length;if(e%4!=0)throw RangeError("Buffer size must be a multiple of 32-bits");for(let t=0;t<e;t+=4)nV(this,t,t+3),nV(this,t+1,t+2);return this},n$.prototype.swap64=function(){let e=this.length;if(e%8!=0)throw RangeError("Buffer size must be a multiple of 64-bits");for(let t=0;t<e;t+=8)nV(this,t,t+7),nV(this,t+1,t+6),nV(this,t+2,t+5),nV(this,t+3,t+4);return this},n$.prototype.toString=function(){let e=this.length;return 0===e?"":0==arguments.length?nH(this,0,e):nU.apply(this,arguments)},n$.prototype.toLocaleString=n$.prototype.toString,n$.prototype.equals=function(e){if(!n$.isBuffer(e))throw TypeError("Argument must be a Buffer");return this===e||0===n$.compare(this,e)},n$.prototype.inspect=function(){let e="";return e=this.toString("hex",0,50).replace(/(.{2})/g,"$1 ").trim(),this.length>50&&(e+=" ... "),"<Buffer "+e+">"},nO&&(n$.prototype[nO]=n$.prototype.inspect),n$.prototype.compare=function(e,t,n,r,a){if(n9(e,Uint8Array)&&(e=n$.from(e,e.offset,e.byteLength)),!n$.isBuffer(e))throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof e);if(void 0===t&&(t=0),void 0===n&&(n=e?e.length:0),void 0===r&&(r=0),void 0===a&&(a=this.length),t<0||n>e.length||r<0||a>this.length)throw RangeError("out of range index");if(r>=a&&t>=n)return 0;if(r>=a)return -1;if(t>=n)return 1;if(t>>>=0,n>>>=0,r>>>=0,a>>>=0,this===e)return 0;let s=a-r,i=n-t,o=Math.min(s,i),l=this.slice(r,a),u=e.slice(t,n);for(let e=0;e<o;++e)if(l[e]!==u[e]){s=l[e],i=u[e];break}return s<i?-1:i<s?1:0},n$.prototype.includes=function(e,t,n){return -1!==this.indexOf(e,t,n)},n$.prototype.indexOf=function(e,t,n){return nW(this,e,t,n,!0)},n$.prototype.lastIndexOf=function(e,t,n){return nW(this,e,t,n,!1)},n$.prototype.write=function(e,t,n,r){var a,s,i,o,l,u,c,p;if(void 0===t)r="utf8",n=this.length,t=0;else if(void 0===n&&"string"==typeof t)r=t,n=this.length,t=0;else if(isFinite(t))t>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");let d=this.length-t;if((void 0===n||n>d)&&(n=d),e.length>0&&(n<0||t<0)||t>this.length)throw RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let f=!1;for(;;)switch(r){case"hex":return function(e,t,n,r){let a;n=Number(n)||0;let s=e.length-n;r?(r=Number(r))>s&&(r=s):r=s;let i=t.length;for(r>i/2&&(r=i/2),a=0;a<r;++a){let r=parseInt(t.substr(2*a,2),16);if(r!=r)break;e[n+a]=r}return a}(this,e,t,n);case"utf8":case"utf-8":return a=t,s=n,n7(n5(e,this.length-a),this,a,s);case"ascii":case"latin1":case"binary":return i=t,o=n,n7(function(e){let t=[];for(let n=0;n<e.length;++n)t.push(255&e.charCodeAt(n));return t}(e),this,i,o);case"base64":return l=t,u=n,n7(n8(e),this,l,u);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c=t,p=n,n7(function(e,t){let n,r;let a=[];for(let s=0;s<e.length&&!((t-=2)<0);++s)r=(n=e.charCodeAt(s))>>8,a.push(n%256),a.push(r);return a}(e,this.length-c),this,c,p);default:if(f)throw TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),f=!0}},n$.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}},n$.prototype.slice=function(e,t){let n=this.length;e=~~e,t=void 0===t?n:~~t,e<0?(e+=n)<0&&(e=0):e>n&&(e=n),t<0?(t+=n)<0&&(t=0):t>n&&(t=n),t<e&&(t=e);let r=this.subarray(e,t);return Object.setPrototypeOf(r,n$.prototype),r},n$.prototype.readUintLE=n$.prototype.readUIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nq(e,t,this.length);let r=this[e],a=1,s=0;for(;++s<t&&(a*=256);)r+=this[e+s]*a;return r},n$.prototype.readUintBE=n$.prototype.readUIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nq(e,t,this.length);let r=this[e+--t],a=1;for(;t>0&&(a*=256);)r+=this[e+--t]*a;return r},n$.prototype.readUint8=n$.prototype.readUInt8=function(e,t){return e>>>=0,t||nq(e,1,this.length),this[e]},n$.prototype.readUint16LE=n$.prototype.readUInt16LE=function(e,t){return e>>>=0,t||nq(e,2,this.length),this[e]|this[e+1]<<8},n$.prototype.readUint16BE=n$.prototype.readUInt16BE=function(e,t){return e>>>=0,t||nq(e,2,this.length),this[e]<<8|this[e+1]},n$.prototype.readUint32LE=n$.prototype.readUInt32LE=function(e,t){return e>>>=0,t||nq(e,4,this.length),(this[e]|this[e+1]<<8|this[e+2]<<16)+16777216*this[e+3]},n$.prototype.readUint32BE=n$.prototype.readUInt32BE=function(e,t){return e>>>=0,t||nq(e,4,this.length),16777216*this[e]+(this[e+1]<<16|this[e+2]<<8|this[e+3])},n$.prototype.readBigUInt64LE=rt(function(e){n3(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&n4(e,this.length-8);let r=t+256*this[++e]+65536*this[++e]+16777216*this[++e],a=this[++e]+256*this[++e]+65536*this[++e]+16777216*n;return BigInt(r)+(BigInt(a)<<BigInt(32))}),n$.prototype.readBigUInt64BE=rt(function(e){n3(e>>>=0,"offset");let t=this[e],n=this[e+7];(void 0===t||void 0===n)&&n4(e,this.length-8);let r=16777216*t+65536*this[++e]+256*this[++e]+this[++e],a=16777216*this[++e]+65536*this[++e]+256*this[++e]+n;return(BigInt(r)<<BigInt(32))+BigInt(a)}),n$.prototype.readIntLE=function(e,t,n){e>>>=0,t>>>=0,n||nq(e,t,this.length);let r=this[e],a=1,s=0;for(;++s<t&&(a*=256);)r+=this[e+s]*a;return r>=(a*=128)&&(r-=Math.pow(2,8*t)),r},n$.prototype.readIntBE=function(e,t,n){e>>>=0,t>>>=0,n||nq(e,t,this.length);let r=t,a=1,s=this[e+--r];for(;r>0&&(a*=256);)s+=this[e+--r]*a;return s>=(a*=128)&&(s-=Math.pow(2,8*t)),s},n$.prototype.readInt8=function(e,t){return(e>>>=0,t||nq(e,1,this.length),128&this[e])?-((255-this[e]+1)*1):this[e]},n$.prototype.readInt16LE=function(e,t){e>>>=0,t||nq(e,2,this.length);let n=this[e]|this[e+1]<<8;return 32768&n?4294901760|n:n},n$.prototype.readInt16BE=function(e,t){e>>>=0,t||nq(e,2,this.length);let n=this[e+1]|this[e]<<8;return 32768&n?4294901760|n:n},n$.prototype.readInt32LE=function(e,t){return e>>>=0,t||nq(e,4,this.length),this[e]|this[e+1]<<8|this[e+2]<<16|this[e+3]<<24},n$.prototype.readInt32BE=function(e,t){return e>>>=0,t||nq(e,4,this.length),this[e]<<24|this[e+1]<<16|this[e+2]<<8|this[e+3]},n$.prototype.readBigInt64LE=rt(function(e){n3(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&n4(e,this.length-8),(BigInt(this[e+4]+256*this[e+5]+65536*this[e+6]+(n<<24))<<BigInt(32))+BigInt(t+256*this[++e]+65536*this[++e]+16777216*this[++e])}),n$.prototype.readBigInt64BE=rt(function(e){n3(e>>>=0,"offset");let t=this[e],n=this[e+7];return(void 0===t||void 0===n)&&n4(e,this.length-8),(BigInt((t<<24)+65536*this[++e]+256*this[++e]+this[++e])<<BigInt(32))+BigInt(16777216*this[++e]+65536*this[++e]+256*this[++e]+n)}),n$.prototype.readFloatLE=function(e,t){return e>>>=0,t||nq(e,4,this.length),E(this,e,!0,23,4)},n$.prototype.readFloatBE=function(e,t){return e>>>=0,t||nq(e,4,this.length),E(this,e,!1,23,4)},n$.prototype.readDoubleLE=function(e,t){return e>>>=0,t||nq(e,8,this.length),E(this,e,!0,52,8)},n$.prototype.readDoubleBE=function(e,t){return e>>>=0,t||nq(e,8,this.length),E(this,e,!1,52,8)},n$.prototype.writeUintLE=n$.prototype.writeUIntLE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;nK(this,e,t,n,r,0)}let a=1,s=0;for(this[t]=255&e;++s<n&&(a*=256);)this[t+s]=e/a&255;return t+n},n$.prototype.writeUintBE=n$.prototype.writeUIntBE=function(e,t,n,r){if(e=+e,t>>>=0,n>>>=0,!r){let r=Math.pow(2,8*n)-1;nK(this,e,t,n,r,0)}let a=n-1,s=1;for(this[t+a]=255&e;--a>=0&&(s*=256);)this[t+a]=e/s&255;return t+n},n$.prototype.writeUint8=n$.prototype.writeUInt8=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,1,255,0),this[t]=255&e,t+1},n$.prototype.writeUint16LE=n$.prototype.writeUInt16LE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,2,65535,0),this[t]=255&e,this[t+1]=e>>>8,t+2},n$.prototype.writeUint16BE=n$.prototype.writeUInt16BE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,2,65535,0),this[t]=e>>>8,this[t+1]=255&e,t+2},n$.prototype.writeUint32LE=n$.prototype.writeUInt32LE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,4,4294967295,0),this[t+3]=e>>>24,this[t+2]=e>>>16,this[t+1]=e>>>8,this[t]=255&e,t+4},n$.prototype.writeUint32BE=n$.prototype.writeUInt32BE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,4,4294967295,0),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},n$.prototype.writeBigUInt64LE=rt(function(e,t=0){return nG(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),n$.prototype.writeBigUInt64BE=rt(function(e,t=0){return nQ(this,e,t,BigInt(0),BigInt("0xffffffffffffffff"))}),n$.prototype.writeIntLE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);nK(this,e,t,n,r-1,-r)}let a=0,s=1,i=0;for(this[t]=255&e;++a<n&&(s*=256);)e<0&&0===i&&0!==this[t+a-1]&&(i=1),this[t+a]=(e/s>>0)-i&255;return t+n},n$.prototype.writeIntBE=function(e,t,n,r){if(e=+e,t>>>=0,!r){let r=Math.pow(2,8*n-1);nK(this,e,t,n,r-1,-r)}let a=n-1,s=1,i=0;for(this[t+a]=255&e;--a>=0&&(s*=256);)e<0&&0===i&&0!==this[t+a+1]&&(i=1),this[t+a]=(e/s>>0)-i&255;return t+n},n$.prototype.writeInt8=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,1,127,-128),e<0&&(e=255+e+1),this[t]=255&e,t+1},n$.prototype.writeInt16LE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,2,32767,-32768),this[t]=255&e,this[t+1]=e>>>8,t+2},n$.prototype.writeInt16BE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,2,32767,-32768),this[t]=e>>>8,this[t+1]=255&e,t+2},n$.prototype.writeInt32LE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,4,2147483647,-2147483648),this[t]=255&e,this[t+1]=e>>>8,this[t+2]=e>>>16,this[t+3]=e>>>24,t+4},n$.prototype.writeInt32BE=function(e,t,n){return e=+e,t>>>=0,n||nK(this,e,t,4,2147483647,-2147483648),e<0&&(e=4294967295+e+1),this[t]=e>>>24,this[t+1]=e>>>16,this[t+2]=e>>>8,this[t+3]=255&e,t+4},n$.prototype.writeBigInt64LE=rt(function(e,t=0){return nG(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),n$.prototype.writeBigInt64BE=rt(function(e,t=0){return nQ(this,e,t,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),n$.prototype.writeFloatLE=function(e,t,n){return nX(this,e,t,!0,n)},n$.prototype.writeFloatBE=function(e,t,n){return nX(this,e,t,!1,n)},n$.prototype.writeDoubleLE=function(e,t,n){return nJ(this,e,t,!0,n)},n$.prototype.writeDoubleBE=function(e,t,n){return nJ(this,e,t,!1,n)},n$.prototype.copy=function(e,t,n,r){if(!n$.isBuffer(e))throw TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),t>=e.length&&(t=e.length),t||(t=0),r>0&&r<n&&(r=n),r===n||0===e.length||0===this.length)return 0;if(t<0)throw RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw RangeError("Index out of range");if(r<0)throw RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),e.length-t<r-n&&(r=e.length-t+n);let a=r-n;return this===e&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(t,n,r):Uint8Array.prototype.set.call(e,this.subarray(n,r),t),a},n$.prototype.fill=function(e,t,n,r){let a;if("string"==typeof e){if("string"==typeof t?(r=t,t=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw TypeError("encoding must be a string");if("string"==typeof r&&!n$.isEncoding(r))throw TypeError("Unknown encoding: "+r);if(1===e.length){let t=e.charCodeAt(0);("utf8"===r&&t<128||"latin1"===r)&&(e=t)}}else"number"==typeof e?e&=255:"boolean"==typeof e&&(e=Number(e));if(t<0||this.length<t||this.length<n)throw RangeError("Out of range index");if(n<=t)return this;if(t>>>=0,n=void 0===n?this.length:n>>>0,e||(e=0),"number"==typeof e)for(a=t;a<n;++a)this[a]=e;else{let s=n$.isBuffer(e)?e:n$.from(e,r),i=s.length;if(0===i)throw TypeError('The value "'+e+'" is invalid for argument "value"');for(a=0;a<n-t;++a)this[a+t]=s[a%i]}return this};let nZ={};function n0(e,t,n){nZ[e]=class extends n{constructor(){super(),Object.defineProperty(this,"message",{value:t.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${e}]`,this.stack,delete this.name}get code(){return e}set code(e){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:e,writable:!0})}toString(){return`${this.name} [${e}]: ${this.message}`}}}function n1(e){let t="",n=e.length,r="-"===e[0]?1:0;for(;n>=r+4;n-=3)t=`_${e.slice(n-3,n)}${t}`;return`${e.slice(0,n)}${t}`}function n2(e,t,n,r,a,s){if(e>n||e<t){let r;let a="bigint"==typeof t?"n":"";throw r=s>3?0===t||t===BigInt(0)?`>= 0${a} and < 2${a} ** ${(s+1)*8}${a}`:`>= -(2${a} ** ${(s+1)*8-1}${a}) and < 2 ** ${(s+1)*8-1}${a}`:`>= ${t}${a} and <= ${n}${a}`,new nZ.ERR_OUT_OF_RANGE("value",r,e)}n3(a,"offset"),(void 0===r[a]||void 0===r[a+s])&&n4(a,r.length-(s+1))}function n3(e,t){if("number"!=typeof e)throw new nZ.ERR_INVALID_ARG_TYPE(t,"number",e)}function n4(e,t,n){if(Math.floor(e)!==e)throw n3(e,n),new nZ.ERR_OUT_OF_RANGE(n||"offset","an integer",e);if(t<0)throw new nZ.ERR_BUFFER_OUT_OF_BOUNDS;throw new nZ.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${t}`,e)}n0("ERR_BUFFER_OUT_OF_BOUNDS",function(e){return e?`${e} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),n0("ERR_INVALID_ARG_TYPE",function(e,t){return`The "${e}" argument must be of type number. Received type ${typeof t}`},TypeError),n0("ERR_OUT_OF_RANGE",function(e,t,n){let r=`The value of "${e}" is out of range.`,a=n;return Number.isInteger(n)&&Math.abs(n)>4294967296?a=n1(String(n)):"bigint"==typeof n&&(a=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(a=n1(a)),a+="n"),r+=` It must be ${t}. Received ${a}`},RangeError);let n6=/[^+/0-9A-Za-z-_]/g;function n5(e,t){let n;t=t||1/0;let r=e.length,a=null,s=[];for(let i=0;i<r;++i){if((n=e.charCodeAt(i))>55295&&n<57344){if(!a){if(n>56319||i+1===r){(t-=3)>-1&&s.push(239,191,189);continue}a=n;continue}if(n<56320){(t-=3)>-1&&s.push(239,191,189),a=n;continue}n=(a-55296<<10|n-56320)+65536}else a&&(t-=3)>-1&&s.push(239,191,189);if(a=null,n<128){if((t-=1)<0)break;s.push(n)}else if(n<2048){if((t-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((t-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else if(n<1114112){if((t-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}else throw Error("Invalid code point")}return s}function n8(e){return N(function(e){if((e=(e=e.split("=")[0]).trim().replace(n6,"")).length<2)return"";for(;e.length%4!=0;)e+="=";return e}(e))}function n7(e,t,n,r){let a;for(a=0;a<r&&!(a+n>=t.length)&&!(a>=e.length);++a)t[a+n]=e[a];return a}function n9(e,t){return e instanceof t||null!=e&&null!=e.constructor&&null!=e.constructor.name&&e.constructor.name===t.name}let re=function(){let e="0123456789abcdef",t=Array(256);for(let n=0;n<16;++n){let r=16*n;for(let a=0;a<16;++a)t[r+a]=e[n]+e[a]}return t}();function rt(e){return"undefined"==typeof BigInt?rn:e}function rn(){throw Error("BigInt not supported")}async function rr(e,t){let n=[],r=[],a=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);for(let s=0;s<a.length;++s){let i=a[s],o=Array.isArray(e)?e[s].tensor:e[i];if("float32"!==o.dtype&&"int32"!==o.dtype&&"bool"!==o.dtype&&"string"!==o.dtype&&"complex64"!==o.dtype)throw Error(`Unsupported dtype in weight '${i}': ${o.dtype}`);let l={name:i,shape:o.shape,dtype:o.dtype};if("string"===o.dtype){let e=new Promise(async e=>{let t=await o.bytes(),n=new Uint8Array(t.reduce((e,t)=>e+t.length,0)+4*t.length),r=0;for(let e=0;e<t.length;e++){let a=t[e],s=new Uint8Array(new Uint32Array([a.length]).buffer);n.set(s,r),r+=4,n.set(a,r),r+=a.length}e(n)});r.push(e)}else r.push(o.data());null!=t&&(l.group=t),n.push(l)}return{data:function(e){if(null===e)throw Error(`Invalid input value: ${JSON.stringify(e)}`);let t=0,n=[];e.forEach(e=>{if(t+=e.byteLength,n.push(e.byteLength===e.buffer.byteLength?e:new e.constructor(e)),!(e instanceof Float32Array||e instanceof Int32Array||e instanceof Uint8Array))throw Error(`Unsupported TypedArray subtype: ${e.constructor.name}`)});let r=new Uint8Array(t),a=0;return n.forEach(e=>{r.set(new Uint8Array(e.buffer),a),a+=e.byteLength}),r.buffer}(await Promise.all(r)),specs:n}}function ra(e,t){let n=new nx(e),r={},a=0;for(let e of t){let t=function(e,t){let n;let r=ee(e.shape);if("quantization"in e)n=nw[e.quantization.dtype];else if("string"===e.dtype){let e=0;for(let n=0;n<r;n++)e+=4+new Uint32Array(t(e,e+4))[0];return e}else n=nw[e.dtype];return r*n}(e,(e,t)=>n.slice(a+e,a+t));r[e.name]=ri(e,n.slice(a,a+t)),a+=t}return r}async function rs(e,t){let n;let r=ee(e.shape);if("quantization"in e)n=nw[e.quantization.dtype];else if("string"===e.dtype){let e=0;for(let n=0;n<r;n++)e+=4+new Uint32Array(await t(e,e+4))[0];return e}else n=nw[e.dtype];return r*n}function ri(e,t){let n;let r=e.name,a=e.dtype,s=e.shape,i=ee(s),o=0;if("quantization"in e){let s=e.quantization;if("uint8"===s.dtype||"uint16"===s.dtype){if(!("min"in s&&"scale"in s))throw Error(`Weight ${e.name} with quantization ${s.dtype} doesn't have corresponding metadata min and scale.`)}else if("float16"===s.dtype){if("float32"!==a)throw Error(`Weight ${e.name} is quantized with ${s.dtype} which only supports weights of type float32 not ${a}.`)}else throw Error(`Weight ${e.name} has unknown quantization dtype ${s.dtype}. Supported quantization dtypes are: 'uint8', 'uint16', and 'float16'.`);let l=nw[s.dtype],u="uint8"===s.dtype?new Uint8Array(t):new Uint16Array(t);if("float32"===a){if("uint8"===s.dtype||"uint16"===s.dtype){n=new Float32Array(u.length);for(let e=0;e<u.length;e++){let t=u[e];n[e]=t*s.scale+s.min}}else if("float16"===s.dtype)n=(function(){let e=function(){let e=e=>{let t=e<<13,n=0;for(;(8388608&t)==0;)n-=8388608,t<<=1;return(t&=-8388609)|(n+=947912704)},t=new Uint32Array(2048);t[0]=0;for(let n=1;n<1024;n++)t[n]=e(n);for(let e=1024;e<2048;e++)t[e]=939524096+(e-1024<<13);return t}(),t=function(){let e=new Uint32Array(64);e[0]=0,e[31]=1199570944,e[32]=2147483648,e[63]=3347054592;for(let t=1;t<31;t++)e[t]=t<<23;for(let t=33;t<63;t++)e[t]=2147483648+(t-32<<23);return e}(),n=function(){let e=new Uint32Array(64);for(let t=0;t<64;t++)e[t]=1024;return e[0]=e[32]=0,e}();return r=>{let a=new ArrayBuffer(4*r.length),s=new Uint32Array(a);for(let a=0;a<r.length;a++){let i=r[a],o=e[n[i>>10]+(1023&i)]+t[i>>10];s[a]=o}return new Float32Array(a)}})()(u);else throw Error(`Unsupported quantization type ${s.dtype} for weight type float32.`)}else if("int32"===a){if("uint8"!==s.dtype&&"uint16"!==s.dtype)throw Error(`Unsupported quantization type ${s.dtype} for weight type int32.`);n=new Int32Array(u.length);for(let e=0;e<u.length;e++){let t=u[e];n[e]=Math.round(t*s.scale+s.min)}}else throw Error(`Unsupported dtype in weight '${r}': ${a}`);o+=i*l}else if("string"===a){let r=ee(e.shape);n=[];for(let e=0;e<r;e++){let e=new Uint32Array(t.slice(o,o+4))[0];o+=4;let r=new Uint8Array(t.slice(o,o+e));n.push(r),o+=e}}else{let e=nw[a];if("float32"===a)n=new Float32Array(t);else if("int32"===a)n=new Int32Array(t);else if("bool"===a)n=new Uint8Array(t);else if("complex64"===a){n=new Float32Array(t);let e=new Float32Array(n.length/2),r=new Float32Array(n.length/2);for(let t=0;t<e.length;t++)e[t]=n[2*t],r[t]=n[2*t+1];let a=nv(e,s,"float32"),i=nv(r,s,"float32"),o=ny(a,i);return a.dispose(),i.dispose(),o}else throw Error(`Unsupported dtype in weight '${r}': ${a}`);o+=i*e}return nv(n,s,a)}async function ro(e,t,n){let r=new Uint8Array(t);for(;r.byteLength<n;){let{done:t,value:a}=await e.read();if(t&&null==a){let e=n-r.byteLength;throw Error(`Reader is done but ${e} bytes are still expected`)}let s=new Uint8Array(r.length+a.byteLength);s.set(r,0),s.set(new Uint8Array(a),r.length),r=s}return r.buffer}async function rl(e,t){let n={},r=e.getReader(),a=new ArrayBuffer(0);for(let e of t){let t=await rs(e,async(e,t)=>(a=await ro(r,a,t)).slice(e,t)),s=(a=await ro(r,a,t)).slice(0,t);a=a.slice(t);let i=ri(e,s);if(n[e.name]=i,"webgpu"===nl.backendName){let e=nl.backend;"uploadToGPU"in e&&ee(i.shape)>=eP.get("WEBGPU_CPU_HANDOFF_SIZE_THRESHOLD")&&e.uploadToGPU(i.dataId)}}return n}let ru="undefined"==typeof Blob||"undefined"==typeof atob||"undefined"==typeof btoa;function rc(e){return ru?n$.byteLength(e,"utf8"):new Blob([e]).size}function rp(e){return nx.join(e)}function rd(e){for(e=e.trim();e.endsWith("/");)e=e.slice(0,e.length-1);let t=e.split("/");return t[t.length-1]}function rf(e,t){let n={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,weightsManifest:t};return null!=e.signature&&(n.signature=e.signature),null!=e.userDefinedMetadata&&(n.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(n.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(n.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(n.trainingConfig=e.trainingConfig),n}function rh(e,t,n){let r={modelTopology:e.modelTopology,format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy};if(null!=e.trainingConfig&&(r.trainingConfig=e.trainingConfig),null!=e.weightsManifest){if(!t)throw Error("modelJSON has weightsManifest but weightSpecs is null");if(!n)throw Error("modelJSON has weightsManifest but weightData is null");r.weightSpecs=t,r.weightData=n}return null!=e.signature&&(r.signature=e.signature),null!=e.userDefinedMetadata&&(r.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(r.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(r.initializerSignature=e.initializerSignature),r}async function rm(e,t){let n,r;return null!=e.weightsManifest&&([n,r]=await t(e.weightsManifest)),rh(e,n,r)}function rg(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("Expected JSON model topology, received ArrayBuffer.");return{dateSaved:new Date,modelTopologyType:"JSON",modelTopologyBytes:null==e.modelTopology?0:rc(JSON.stringify(e.modelTopology)),weightSpecsBytes:null==e.weightSpecs?0:rc(JSON.stringify(e.weightSpecs)),weightDataBytes:null==e.weightData?0:new nx(e.weightData).byteLength}}function ry(e){let t=[];for(let n of e)t.push(...n.weights);return t}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class rb{constructor(){this.saveRouters=[],this.loadRouters=[]}static getInstance(){return null==rb.instance&&(rb.instance=new rb),rb.instance}static registerSaveRouter(e){rb.getInstance().saveRouters.push(e)}static registerLoadRouter(e){rb.getInstance().loadRouters.push(e)}static getSaveHandlers(e){return rb.getHandlers(e,"save")}static getLoadHandlers(e,t){return rb.getHandlers(e,"load",t)}static getHandlers(e,t,n){let r=[];return("load"===t?rb.getInstance().loadRouters:rb.getInstance().saveRouters).forEach(t=>{let a=t(e,n);null!==a&&r.push(a)}),r}}let rv=e=>rb.registerSaveRouter(e),rw=e=>rb.registerLoadRouter(e),rx=e=>rb.getSaveHandlers(e),rk=(e,t)=>rb.getLoadHandlers(e,t),rN="tensorflowjs",rS="models_store",rE="model_info_store";function rT(){if(!eP.getBool("IS_BROWSER"))throw Error("Failed to obtain IndexedDB factory because the current environmentis not a web browser.");let e="undefined"==typeof window?self:window,t=e.indexedDB||e.mozIndexedDB||e.webkitIndexedDB||e.msIndexedDB||e.shimIndexedDB;if(null==t)throw Error("The current browser does not appear to support IndexedDB.");return t}function r_(e){let t=e.result;t.createObjectStore(rS,{keyPath:"modelPath"}),t.createObjectStore(rE,{keyPath:"modelPath"})}class rI{constructor(e){if(this.indexedDB=rT(),null==e||!e)throw Error("For IndexedDB, modelPath must not be null, undefined or empty.");this.modelPath=e}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");return this.databaseAction(this.modelPath,e)}async load(){return this.databaseAction(this.modelPath)}databaseAction(e,t){return new Promise((e,n)=>{let r=this.indexedDB.open(rN,1);r.onupgradeneeded=()=>r_(r),r.onsuccess=()=>{let a=r.result;if(null==t){let t=a.transaction(rS,"readonly"),r=t.objectStore(rS).get(this.modelPath);r.onsuccess=()=>{if(null==r.result)return a.close(),n(Error(`Cannot find model with path '${this.modelPath}' in IndexedDB.`));e(r.result.modelArtifacts)},r.onerror=e=>(a.close(),n(r.error)),t.oncomplete=()=>a.close()}else{let r,s;t.weightData=nx.join(t.weightData);let i=rg(t),o=a.transaction(rE,"readwrite"),l=o.objectStore(rE);try{r=l.put({modelPath:this.modelPath,modelArtifactsInfo:i})}catch(e){return n(e)}r.onsuccess=()=>{let r;let u=(s=a.transaction(rS,"readwrite")).objectStore(rS);try{r=u.put({modelPath:this.modelPath,modelArtifacts:t,modelArtifactsInfo:i})}catch(e){return n(e)}r.onsuccess=()=>e({modelArtifactsInfo:i}),r.onerror=e=>{let t=(l=o.objectStore(rE)).delete(this.modelPath);t.onsuccess=()=>(a.close(),n(r.error)),t.onerror=e=>(a.close(),n(r.error))}},r.onerror=e=>(a.close(),n(r.error)),o.oncomplete=()=>{null==s?a.close():s.oncomplete=()=>a.close()}}},r.onerror=e=>n(r.error)})}}rI.URL_SCHEME="indexeddb://";let rA=e=>{var t;return eP.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(rI.URL_SCHEME)?(t=e.slice(rI.URL_SCHEME.length),new rI(t)):null};rb.registerSaveRouter(rA),rb.registerLoadRouter(rA);let rM="tensorflowjs_models",rO="info";function rC(e){return{info:[rM,e,rO].join("/"),topology:[rM,e,"model_topology"].join("/"),weightSpecs:[rM,e,"weight_specs"].join("/"),weightData:[rM,e,"weight_data"].join("/"),modelMetadata:[rM,e,"model_metadata"].join("/")}}function r$(e){for(let t of Object.values(e))window.localStorage.removeItem(t)}class rD{constructor(e){if(!eP.getBool("IS_BROWSER")||"undefined"==typeof window||void 0===window.localStorage)throw Error("The current environment does not support local storage.");if(this.LS=window.localStorage,null==e||!e)throw Error("For local storage, modelPath must not be null, undefined or empty.");this.modelPath=e,this.keys=rC(this.modelPath)}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserLocalStorage.save() does not support saving model topology in binary formats yet.");{let t=JSON.stringify(e.modelTopology),n=JSON.stringify(e.weightSpecs),r=rg(e),a=nx.join(e.weightData);try{this.LS.setItem(this.keys.info,JSON.stringify(r)),this.LS.setItem(this.keys.topology,t),this.LS.setItem(this.keys.weightSpecs,n),this.LS.setItem(this.keys.weightData,function(e){if(ru)return n$.from(e).toString("base64");let t=new Uint8Array(e),n="";for(let e=0,r=t.length;e<r;e++)n+=String.fromCharCode(t[e]);return btoa(n)}(a));let s={format:e.format,generatedBy:e.generatedBy,convertedBy:e.convertedBy,signature:null!=e.signature?e.signature:void 0,userDefinedMetadata:null!=e.userDefinedMetadata?e.userDefinedMetadata:void 0,modelInitializer:null!=e.modelInitializer?e.modelInitializer:void 0,initializerSignature:null!=e.initializerSignature?e.initializerSignature:void 0,trainingConfig:null!=e.trainingConfig?e.trainingConfig:void 0};return this.LS.setItem(this.keys.modelMetadata,JSON.stringify(s)),{modelArtifactsInfo:r}}catch(e){throw r$(this.keys),Error(`Failed to save model '${this.modelPath}' to local storage: size quota being exceeded is a possible cause of this failure: modelTopologyBytes=${r.modelTopologyBytes}, weightSpecsBytes=${r.weightSpecsBytes}, weightDataBytes=${r.weightDataBytes}.`)}}}async load(){let e=JSON.parse(this.LS.getItem(this.keys.info));if(null==e)throw Error(`In local storage, there is no model with name '${this.modelPath}'`);if("JSON"!==e.modelTopologyType)throw Error("BrowserLocalStorage does not support loading non-JSON model topology yet.");let t={},n=JSON.parse(this.LS.getItem(this.keys.topology));if(null==n)throw Error(`In local storage, the topology of model '${this.modelPath}' is missing.`);t.modelTopology=n;let r=JSON.parse(this.LS.getItem(this.keys.weightSpecs));if(null==r)throw Error(`In local storage, the weight specs of model '${this.modelPath}' are missing.`);t.weightSpecs=r;let a=this.LS.getItem(this.keys.modelMetadata);if(null!=a){let e=JSON.parse(a);t.format=e.format,t.generatedBy=e.generatedBy,t.convertedBy=e.convertedBy,null!=e.signature&&(t.signature=e.signature),null!=e.userDefinedMetadata&&(t.userDefinedMetadata=e.userDefinedMetadata),null!=e.modelInitializer&&(t.modelInitializer=e.modelInitializer),null!=e.initializerSignature&&(t.initializerSignature=e.initializerSignature),null!=e.trainingConfig&&(t.trainingConfig=e.trainingConfig)}let s=this.LS.getItem(this.keys.weightData);if(null==s)throw Error(`In local storage, the binary weight values of model '${this.modelPath}' are missing.`);return t.weightData=function(e){if(ru){let t=n$.from(e,"base64");return t.buffer.slice(t.byteOffset,t.byteOffset+t.byteLength)}let t=atob(e),n=new Uint8Array(t.length);for(let e=0;e<t.length;++e)n.set([t.charCodeAt(e)],e);return n.buffer}(s),t}}rD.URL_SCHEME="localstorage://";let rR=e=>{var t;return eP.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(rD.URL_SCHEME)?(t=e.slice(rD.URL_SCHEME.length),new rD(t)):null};rb.registerSaveRouter(rR),rb.registerLoadRouter(rR);class rL{constructor(){this.managers={}}static getInstance(){return null==rL.instance&&(rL.instance=new rL),rL.instance}static registerManager(e,t){X(null!=e,()=>"scheme must not be undefined or null."),e.endsWith("://")&&(e=e.slice(0,e.indexOf("://"))),X(e.length>0,()=>"scheme must not be an empty string.");let n=rL.getInstance();X(null==n.managers[e],()=>`A model store manager is already registered for scheme '${e}'.`),n.managers[e]=t}static getManager(e){let t=rL.getInstance().managers[e];if(null==t)throw Error(`Cannot find model manager for scheme '${e}'`);return t}static getSchemes(){return Object.keys(rL.getInstance().managers)}}function rF(e){if(-1===e.indexOf("://"))throw Error(`The url string provided does not contain a scheme. Supported schemes are: ${rL.getSchemes().join(",")}`);return{scheme:e.split("://")[0],path:e.split("://")[1]}}async function rz(e,t,n=!1){X(e!==t,()=>`Old path and new path are the same: '${e}'`);let r=rb.getLoadHandlers(e);X(r.length>0,()=>`Copying failed because no load handler is found for source URL ${e}.`),X(r.length<2,()=>`Copying failed because more than one (${r.length}) load handlers for source URL ${e}.`);let a=r[0],s=rb.getSaveHandlers(t);X(s.length>0,()=>`Copying failed because no save handler is found for destination URL ${t}.`),X(s.length<2,()=>`Copying failed because more than one (${r.length}) save handlers for destination URL ${t}.`);let i=s[0],o=rF(e).scheme,l=rF(e).path,u=o===rF(e).scheme,c=await a.load();n&&u&&await rL.getManager(o).removeModel(l);let p=await i.save(c);return n&&!u&&await rL.getManager(o).removeModel(l),p.modelArtifactsInfo}async function rP(){let e=rL.getSchemes(),t={};for(let n of e){let e=await rL.getManager(n).listModels();for(let r in e)t[n+"://"+r]=e[r]}return t}async function rB(e){let t=rF(e);return rL.getManager(t.scheme).removeModel(t.path)}async function rU(e,t){return rz(e,t,!1)}async function rV(e,t){return rz(e,t,!0)}if(eP.get("IS_BROWSER")){eP.setPlatform("browser",new class{constructor(){this.messageName="setTimeoutCustom",this.functionRefs=[],this.handledMessageCount=0,this.hasEventListener=!1}fetch(e,t){return fetch(e,t)}now(){return performance.now()}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Browser's encoder only supports utf-8, but got ${t}`);return null==this.textEncoder&&(this.textEncoder=new TextEncoder),this.textEncoder.encode(e)}decode(e,t){return new TextDecoder(t).decode(e)}setTimeoutCustom(e,t){if("undefined"==typeof window||!eP.getBool("USE_SETTIMEOUTCUSTOM")){setTimeout(e,t);return}this.functionRefs.push(e),setTimeout(()=>{window.postMessage({name:this.messageName,index:this.functionRefs.length-1},"*")},t),this.hasEventListener||(this.hasEventListener=!0,window.addEventListener("message",e=>{e.source===window&&e.data.name===this.messageName&&(e.stopPropagation(),(0,this.functionRefs[e.data.index])(),this.handledMessageCount++,this.handledMessageCount===this.functionRefs.length&&(this.functionRefs=[],this.handledMessageCount=0))},!0))}isTypedArray(e){return ts(e)}});try{rL.registerManager(rD.URL_SCHEME,new class{constructor(){X(eP.getBool("IS_BROWSER"),()=>"Current environment is not a web browser"),X("undefined"==typeof window||void 0!==window.localStorage,()=>"Current browser does not appear to support localStorage"),this.LS=window.localStorage}async listModels(){let e={},t=rM+"/",n="/"+rO;for(let r=0;r<this.LS.length;++r){let a=this.LS.key(r);a.startsWith(t)&&a.endsWith(n)&&(e[function(e){let t=e.split("/");if(t.length<3)throw Error(`Invalid key format: ${e}`);return t.slice(1,t.length-1).join("/")}(a)]=JSON.parse(this.LS.getItem(a)))}return e}async removeModel(e){var t;let n=rC(e=(t=e).startsWith(rD.URL_SCHEME)?t.slice(rD.URL_SCHEME.length):t);if(null==this.LS.getItem(n.info))throw Error(`Cannot find model at path '${e}'`);let r=JSON.parse(this.LS.getItem(n.info));return r$(n),r}})}catch(e){}try{rL.registerManager(rI.URL_SCHEME,new class{constructor(){this.indexedDB=rT()}async listModels(){return new Promise((e,t)=>{let n=this.indexedDB.open(rN,1);n.onupgradeneeded=()=>r_(n),n.onsuccess=()=>{let r=n.result,a=r.transaction(rE,"readonly"),s=a.objectStore(rE).getAll();s.onsuccess=()=>{let t={};for(let e of s.result)t[e.modelPath]=e.modelArtifactsInfo;e(t)},s.onerror=e=>(r.close(),t(s.error)),a.oncomplete=()=>r.close()},n.onerror=e=>t(n.error)})}async removeModel(e){var t;return e=(t=e).startsWith(rI.URL_SCHEME)?t.slice(rI.URL_SCHEME.length):t,new Promise((t,n)=>{let r=this.indexedDB.open(rN,1);r.onupgradeneeded=()=>r_(r),r.onsuccess=()=>{let a;let s=r.result,i=s.transaction(rE,"readwrite"),o=i.objectStore(rE),l=o.get(e);l.onsuccess=()=>{if(null==l.result)return s.close(),n(Error(`Cannot find model with path '${e}' in IndexedDB.`));{let r=o.delete(e),i=()=>{let r=(a=s.transaction(rS,"readwrite")).objectStore(rS).delete(e);r.onsuccess=()=>t(l.result.modelArtifactsInfo),r.onerror=e=>n(l.error)};r.onsuccess=i,r.onerror=e=>(i(),s.close(),n(l.error))}},l.onerror=e=>(s.close(),n(l.error)),i.oncomplete=()=>{null==a?s.close():a.oncomplete=()=>s.close()}},r.onerror=e=>n(r.error)})}})}catch(e){}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let rW={importFetch:()=>D("1DJXa")};/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rj(e,t="float32",n){return t=t||"float32",eC(e),new t3(e,t,n)}eP.get("IS_NODE")&&!eP.get("IS_BROWSER")&&eP.setPlatform("node",new class{constructor(){this.util=D("1DJXa"),this.textEncoder=new this.util.TextEncoder}fetch(e,n){return null!=eP.global.fetch?eP.global.fetch(e,n):(null==t&&(t=rW.importFetch()),t(e,n))}now(){let e=eB.hrtime();return 1e3*e[0]+e[1]/1e6}encode(e,t){if("utf-8"!==t&&"utf8"!==t)throw Error(`Node built-in encoder only supports utf-8, but got ${t}`);return this.textEncoder.encode(e)}decode(e,t){return 0===e.length?"":new this.util.TextDecoder(t).decode(e)}isTypedArray(e){return this.util.types.isFloat32Array(e)||this.util.types.isInt32Array(e)||this.util.types.isUint8Array(e)||this.util.types.isUint8ClampedArray(e)}});let rH=ng({cast_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","cast");if(!eg(t))throw Error(`Failed to cast to unknown dtype ${t}`);if("string"===t&&"string"!==n.dtype||"string"!==t&&"string"===n.dtype)throw Error("Only strings can be casted to strings");return nl.runKernel(e0,{x:n},{dtype:t})}}),rq=ng({clone_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","clone","string_or_numeric");return nl.runKernel(e2,{x:t})}});/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function rK(e,t=!1){console.log(e.toString(t))}no(),t6={buffer:rj,cast:rH,clone:rq,print:rK};let rG=ng({add_:/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","add"),r=nf(t,"b","add");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Add",a)}}),rQ=ng({floorDiv_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","floorDiv"),r=nf(t,"b","floorDiv");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("FloorDiv",a)}}),rY=ng({div_:function(e,t){let n=nf(e,"a","div"),r=nf(t,"b","div");if([n,r]=nn(n,r),"int32"===n.dtype&&"int32"===r.dtype)return rQ(n,r);let a={a:n,b:r};return nl.runKernel("RealDiv",a,{})}}),rX=ng({mul_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","mul"),r=nf(t,"b","mul");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Multiply",a)}}),rJ=ng({sqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","sqrt","float32");return nl.runKernel("Sqrt",{x:t})}}),rZ=ng({square_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","square");return nl.runKernel("Square",{x:t},{})}}),r0=ng({zerosLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","zerosLike");return nl.runKernel("ZerosLike",{x:t})}});function r1(e){return nl.customGrad(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r2(e,t){if((tY(e)&&"string"!==t||Array.isArray(e))&&"complex64"!==t)throw Error("Error creating a new Scalar: value must be a primitive (number|boolean|string)");if("string"===t&&tY(e)&&!(e instanceof Uint8Array))throw Error("When making a scalar from encoded string, the value must be `Uint8Array`.");return nb(e,[],[],t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let r3=new Map,r4=new Map;class r6{getClassName(){return this.constructor.className}static fromConfig(e,t){return new e(t)}}class r5{constructor(){this.classNameMap={}}static getMap(){return null==r5.instance&&(r5.instance=new r5),r5.instance}static register(e){r5.getMap().classNameMap[e.className]=[e,e.fromConfig]}}class r8 extends r6{minimize(e,t=!1,n){let{value:r,grads:a}=this.computeGradients(e,n);if(null!=n){let e=n.map(e=>({name:e.name,tensor:a[e.name]}));this.applyGradients(e)}else this.applyGradients(a);return(nN(a),t)?r:(r.dispose(),null)}get iterations(){return null==this.iterations_&&(this.iterations_=0),this.iterations_}incrementIterations(){this.iterations_=this.iterations+1}computeGradients(e,t){return function(e,t){X(eS(e),()=>"The f passed in variableGrads(f) must be a function"),X(null==t||Array.isArray(t)&&t.every(e=>e instanceof t7),()=>"The varList passed in variableGrads(f, varList) must be an array of variables");let n=null!=t;if(!n)for(let e in t=[],nl.registeredVariables)t.push(nl.registeredVariables[e]);let r=n?t.filter(e=>!e.trainable):null,a=t.length;X((t=t.filter(e=>e.trainable)).length>0,()=>`variableGrads() expects at least one of the input variables to be trainable, but none of the ${a} variables is trainable.`);let{value:s,grads:i}=nl.gradients(e,t,null,!0);X(i.some(e=>null!=e),()=>"Cannot find a connection between any variable and the result of the loss function y=f(x). Please make sure the operations that use variables are inside the function f passed to minimize()."),X(0===s.rank,()=>`The f passed in variableGrads(f) must return a scalar, but it returned a rank-${s.rank} tensor`);let o={};return t.forEach((e,t)=>{null!=i[t]&&(o[e.name]=i[t])}),null!=r&&r.forEach(e=>o[e.name]=null),{value:s,grads:o}}(e,t)}dispose(){null!=this.iterations_&&nN(this.iterations_)}async saveIterations(){return null==this.iterations_&&(this.iterations_=0),{name:"iter",tensor:r2(this.iterations_,"int32")}}async getWeights(){throw Error("getWeights() is not implemented for this optimizer yet.")}async setWeights(e){throw Error(`setWeights() is not implemented for this optimizer class ${this.getClassName()}`)}async extractIterations(e){return this.iterations_=(await e[0].tensor.data())[0],e.slice(1)}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function r7(e,t,n){eC(e),n=n||eN(t);let r={shape:e,value:t,dtype:n};return nl.runKernel("Fill",{},r)}Object.defineProperty(r8,Symbol.hasInstance,{value:e=>null!=e.minimize&&null!=e.computeGradients&&null!=e.applyGradients});let r9=ng({pow_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"base","pow"),r=nf(t,"exp","pow");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Pow",a)}}),ae=ng({sub_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","sub"),r=nf(t,"b","sub");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Sub",a)}}),at=ng({abs_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","abs");return"complex64"===t.dtype?nl.runKernel("ComplexAbs",{x:t}):nl.runKernel("Abs",{x:t})}});function an(e,t){let n=Math.max(e.length,t.length),r=Array(n);for(let a=0;a<n;a++){let s=e[e.length-a-1];null==s&&(s=1);let i=t[t.length-a-1];if(null==i&&(i=1),1===s)r[n-a-1]=i;else if(1===i)r[n-a-1]=s;else if(s!==i)throw Error(`Operands could not be broadcast together with shapes ${e} and ${t}.`);else r[n-a-1]=s}return r}let ar=ng({maximum_:function(e,t){let n=nf(e,"a","maximum"),r=nf(t,"b","maximum");[n,r]=nn(n,r),"bool"===n.dtype&&(n=rH(n,"int32"),r=rH(r,"int32")),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("Maximum",a)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class aa extends r8{static get className(){return"SGD"}constructor(e){super(),this.learningRate=e,this.setLearningRate(e)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=Array.isArray(e)?e[n].tensor:e[t];if(null==r)return;let a=nl.registeredVariables[t];nk(()=>{let e=rG(rX(this.c,r),a);a.assign(e)})}),this.incrementIterations()}setLearningRate(e){this.learningRate=e,null!=this.c&&this.c.dispose(),this.c=nS(r2(-e))}dispose(){this.c.dispose()}async getWeights(){return[await this.saveIterations()]}async setWeights(e){if(0!==(e=await this.extractIterations(e)).length)throw Error("SGD optimizer does not have settable weights.")}getConfig(){return{learningRate:this.learningRate}}static fromConfig(e,t){return new e(t.learningRate)}}let as=[class extends r8{static get className(){return"Adadelta"}constructor(e,t,n=null){super(),this.learningRate=e,this.rho=t,this.epsilon=n,this.accumulatedGrads=[],this.accumulatedUpdates=[],null==n&&(this.epsilon=nl.backend.epsilon())}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=nl.registeredVariables[t];null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:`${t}/accum_grad`,variable:nk(()=>r0(r).variable(!1))}),null==this.accumulatedUpdates[n]&&(this.accumulatedUpdates[n]={originalName:`${t}/accum_var`,variable:nk(()=>r0(r).variable(!1))});let a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;let s=this.accumulatedGrads[n].variable,i=this.accumulatedUpdates[n].variable;nk(()=>{let e=rG(rX(s,this.rho),rX(rZ(a),1-this.rho)),t=rX(rY(rJ(rG(i,this.epsilon)),rJ(rG(s,this.epsilon))),a),n=rG(rX(i,this.rho),rX(rZ(t),1-this.rho));s.assign(e),i.assign(n);let o=rG(rX(t,-this.learningRate),r);r.assign(o)})}),this.incrementIterations()}dispose(){null!=this.accumulatedUpdates&&(nN(this.accumulatedGrads.map(e=>e.variable)),nN(this.accumulatedUpdates.map(e=>e.variable)))}async getWeights(){let e=[...this.accumulatedGrads,...this.accumulatedUpdates];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){let t=(e=await this.extractIterations(e)).length/2;this.accumulatedGrads=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedUpdates=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,rho:this.rho,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.rho,t.epsilon)}},class extends r8{static get className(){return"Adagrad"}constructor(e,t=.1){super(),this.learningRate=e,this.initialAccumulatorValue=t,this.accumulatedGrads=[]}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=nl.registeredVariables[t];null==this.accumulatedGrads[n]&&(this.accumulatedGrads[n]={originalName:`${t}/accumulator`,variable:nk(()=>r7(r.shape,this.initialAccumulatorValue).variable(!1))});let a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;let s=this.accumulatedGrads[n].variable;nk(()=>{let e=rG(s,rZ(a));s.assign(e);let t=rG(rX(rY(a,rJ(rG(e,nl.backend.epsilon()))),-this.learningRate),r);r.assign(t)})}),this.incrementIterations()}dispose(){null!=this.accumulatedGrads&&nN(this.accumulatedGrads.map(e=>e.variable))}async getWeights(){return[await this.saveIterations()].concat(this.accumulatedGrads.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulatedGrads=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,initialAccumulatorValue:this.initialAccumulatorValue}}static fromConfig(e,t){return new e(t.learningRate,t.initialAccumulatorValue)}},class extends r8{static get className(){return"Adam"}constructor(e,t,n,r=null){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.accumulatedFirstMoment=[],this.accumulatedSecondMoment=[],nk(()=>{this.accBeta1=r2(t).variable(),this.accBeta2=r2(n).variable()}),null==r&&(this.epsilon=nl.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);nk(()=>{let n=ae(1,this.accBeta1),r=ae(1,this.accBeta2);t.forEach((t,a)=>{let s=nl.registeredVariables[t];null==this.accumulatedFirstMoment[a]&&(this.accumulatedFirstMoment[a]={originalName:`${t}/m`,variable:nk(()=>r0(s).variable(!1))}),null==this.accumulatedSecondMoment[a]&&(this.accumulatedSecondMoment[a]={originalName:`${t}/v`,variable:nk(()=>r0(s).variable(!1))});let i=Array.isArray(e)?e[a].tensor:e[t];if(null==i)return;let o=this.accumulatedFirstMoment[a].variable,l=this.accumulatedSecondMoment[a].variable,u=rG(rX(o,this.beta1),rX(i,1-this.beta1)),c=rG(rX(l,this.beta2),rX(rZ(i),1-this.beta2)),p=rY(u,n),d=rY(c,r);o.assign(u),l.assign(c);let f=rG(rX(rY(p,rG(rJ(d),this.epsilon)),-this.learningRate),s);s.assign(f)}),this.accBeta1.assign(rX(this.accBeta1,this.beta1)),this.accBeta2.assign(rX(this.accBeta2,this.beta2))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.accBeta2.dispose(),null!=this.accumulatedFirstMoment&&nN(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedSecondMoment&&nN(this.accumulatedSecondMoment.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedFirstMoment,...this.accumulatedSecondMoment];return[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),nk(()=>{this.accBeta1.assign(r9(this.beta1,this.iterations_+1)),this.accBeta2.assign(r9(this.beta2,this.iterations_+1))});let t=e.length/2;this.accumulatedFirstMoment=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedSecondMoment=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon)}},class extends r8{static get className(){return"Adamax"}constructor(e,t,n,r=null,a=0){super(),this.learningRate=e,this.beta1=t,this.beta2=n,this.epsilon=r,this.decay=a,this.accumulatedFirstMoment=[],this.accumulatedWeightedInfNorm=[],nk(()=>{this.iteration=r2(0).variable(),this.accBeta1=r2(t).variable()}),null==r&&(this.epsilon=nl.backend.epsilon())}applyGradients(e){let t=Array.isArray(e)?e.map(e=>e.name):Object.keys(e);nk(()=>{let n=ae(1,this.accBeta1),r=rY(-this.learningRate,rG(rX(this.iteration,this.decay),1));t.forEach((t,a)=>{let s=nl.registeredVariables[t];null==this.accumulatedFirstMoment[a]&&(this.accumulatedFirstMoment[a]={originalName:`${t}/m`,variable:r0(s).variable(!1)}),null==this.accumulatedWeightedInfNorm[a]&&(this.accumulatedWeightedInfNorm[a]={originalName:`${t}/v`,variable:r0(s).variable(!1)});let i=Array.isArray(e)?e[a].tensor:e[t];if(null==i)return;let o=this.accumulatedFirstMoment[a].variable,l=this.accumulatedWeightedInfNorm[a].variable,u=rG(rX(o,this.beta1),rX(i,1-this.beta1)),c=ar(rX(l,this.beta2),at(i));o.assign(u),l.assign(c);let p=rG(rX(rY(r,n),rY(u,rG(c,this.epsilon))),s);s.assign(p)}),this.iteration.assign(rG(this.iteration,1)),this.accBeta1.assign(rX(this.accBeta1,this.beta1))}),this.incrementIterations()}dispose(){this.accBeta1.dispose(),this.iteration.dispose(),null!=this.accumulatedFirstMoment&&nN(this.accumulatedFirstMoment.map(e=>e.variable)),null!=this.accumulatedWeightedInfNorm&&nN(this.accumulatedWeightedInfNorm.map(e=>e.variable))}async getWeights(){throw Error("getWeights() is not implemented for Adamax yet.")}async setWeights(e){throw Error("setWeights() is not implemented for Adamax yet.")}getConfig(){return{learningRate:this.learningRate,beta1:this.beta1,beta2:this.beta2,epsilon:this.epsilon,decay:this.decay}}static fromConfig(e,t){return new e(t.learningRate,t.beta1,t.beta2,t.epsilon,t.decay)}},class extends aa{static get className(){return"Momentum"}constructor(e,t,n=!1){super(e),this.learningRate=e,this.momentum=t,this.useNesterov=n,this.accumulations=[],this.m=r2(this.momentum)}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=nl.registeredVariables[t];null==this.accumulations[n]&&(this.accumulations[n]={originalName:`${t}/momentum`,variable:nk(()=>r0(r).variable(!1))});let a=this.accumulations[n].variable,s=Array.isArray(e)?e[n].tensor:e[t];null!=s&&nk(()=>{let e;let t=rG(rX(this.m,a),s);e=this.useNesterov?rG(rX(this.c,rG(s,rX(t,this.m))),r):rG(rX(this.c,t),r),a.assign(t),r.assign(e)})}),this.incrementIterations()}dispose(){this.m.dispose(),null!=this.accumulations&&nN(this.accumulations.map(e=>e.variable))}setMomentum(e){this.momentum=e}async getWeights(){return[await this.saveIterations()].concat(this.accumulations.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e),this.accumulations=e.map(e=>({originalName:e.name,variable:e.tensor.variable(!1)}))}getConfig(){return{learningRate:this.learningRate,momentum:this.momentum,useNesterov:this.useNesterov}}static fromConfig(e,t){return new e(t.learningRate,t.momentum,t.useNesterov)}},/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class extends r8{static get className(){return"RMSProp"}constructor(e,t=.9,n=0,r=null,a=!1){if(super(),this.learningRate=e,this.decay=t,this.momentum=n,this.epsilon=r,this.accumulatedMeanSquares=[],this.accumulatedMoments=[],this.accumulatedMeanGrads=[],this.centered=a,null==r&&(this.epsilon=nl.backend.epsilon()),null==e)throw Error("learningRate for RMSPropOptimizer must be defined.")}applyGradients(e){(Array.isArray(e)?e.map(e=>e.name):Object.keys(e)).forEach((t,n)=>{let r=nl.registeredVariables[t];null==this.accumulatedMeanSquares[n]&&(this.accumulatedMeanSquares[n]={originalName:`${t}/rms`,variable:nk(()=>r0(r).variable(!1))}),null==this.accumulatedMoments[n]&&(this.accumulatedMoments[n]={originalName:`${t}/momentum`,variable:nk(()=>r0(r).variable(!1))}),null==this.accumulatedMeanGrads[n]&&this.centered&&(this.accumulatedMeanGrads[n]={originalName:`${t}/mg`,variable:nk(()=>r0(r).variable(!1))});let a=Array.isArray(e)?e[n].tensor:e[t];if(null==a)return;let s=this.accumulatedMeanSquares[n].variable,i=this.accumulatedMoments[n].variable;nk(()=>{let e=rG(rX(s,this.decay),rX(rZ(a),1-this.decay));if(this.centered){let t=this.accumulatedMeanGrads[n].variable,o=rG(rX(t,this.decay),rX(a,1-this.decay)),l=rY(rX(a,this.learningRate),rJ(ae(e,rG(rZ(o),this.epsilon)))),u=rG(rX(i,this.momentum),l);s.assign(e),t.assign(o),i.assign(u);let c=ae(r,u);r.assign(c)}else{let e=rG(rX(s,this.decay),rX(rZ(a),1-this.decay)),t=rG(rX(i,this.momentum),rY(rX(a,this.learningRate),rJ(rG(e,this.epsilon))));s.assign(e),i.assign(t);let n=ae(r,t);r.assign(n)}})}),this.incrementIterations()}dispose(){null!=this.accumulatedMeanSquares&&nN(this.accumulatedMeanSquares.map(e=>e.variable)),null!=this.accumulatedMeanGrads&&this.centered&&nN(this.accumulatedMeanGrads.map(e=>e.variable)),null!=this.accumulatedMoments&&nN(this.accumulatedMoments.map(e=>e.variable))}async getWeights(){let e=[...this.accumulatedMeanSquares,...this.accumulatedMoments];return this.centered&&e.push(...this.accumulatedMeanGrads),[await this.saveIterations()].concat(e.map(e=>({name:e.originalName,tensor:e.variable})))}async setWeights(e){e=await this.extractIterations(e);let t=this.centered?e.length/3:e.length/2;this.accumulatedMeanSquares=e.slice(0,t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.accumulatedMoments=e.slice(t,2*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})),this.centered&&(this.accumulatedMeanGrads=e.slice(2*t,3*t).map(e=>({originalName:e.name,variable:e.tensor.variable(!1)})))}getConfig(){return{learningRate:this.learningRate,decay:this.decay,momentum:this.momentum,epsilon:this.epsilon,centered:this.centered}}static fromConfig(e,t){return new e(t.learningRate,t.decay,t.momentum,t.epsilon,t.centered)}},aa];var ai={};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ao(e,t,n){if(Z(e),null!=t&&3!==t.length)throw Error("tensor3d() requires shape to have three numbers");let r=np(e,n);if(3!==r.length&&1!==r.length)throw Error("tensor3d() requires values to be number[][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor3d() requires shape to be provided when `values` are a flat array");return nb(e,t,r,n)}r(ai,"fromPixelsAsync",()=>ac),r(ai,"toPixels",()=>ad),r(ai,"draw",()=>af),r(ai,"fromPixels",()=>ah);let al=!1;function au(e,t=3){let r,a;if(t>4)throw Error("Cannot construct Tensor with more than 4 channels from pixels.");if(null==e)throw Error("pixels passed to tf.browser.fromPixels() can not be null");let s=!1,i=!1,o=!1,l=!1,u=!1,c=!1;if(e.data instanceof Uint8Array)s=!0;else if("undefined"!=typeof ImageData&&e instanceof ImageData)i=!0;else if("undefined"!=typeof HTMLVideoElement&&e instanceof HTMLVideoElement)o=!0;else if("undefined"!=typeof HTMLImageElement&&e instanceof HTMLImageElement)l=!0;else if(null!=e.getContext)u=!0;else if("undefined"!=typeof ImageBitmap&&e instanceof ImageBitmap)c=!0;else throw Error(`pixels passed to tf.browser.fromPixels() must be either an HTMLVideoElement, HTMLImageElement, HTMLCanvasElement, ImageData in browser, or OffscreenCanvas, ImageData in webworker or {data: Uint32Array, width: number, height: number}, but was ${e.constructor.name}`);if(null!=tn(e6,nl.backendName))return nl.runKernel(e6,{pixels:e},{numChannels:t});let[p,d]=o?[e.videoWidth,e.videoHeight]:[e.width,e.height];if(u)r=e.getContext("2d").getImageData(0,0,p,d).data;else if(i||s)r=e.data;else if(l||o||c){if(null==n){if("undefined"==typeof document){if("undefined"!=typeof OffscreenCanvas&&"undefined"!=typeof OffscreenCanvasRenderingContext2D)n=new OffscreenCanvas(1,1).getContext("2d");else throw Error("Cannot parse input in current context. Reason: OffscreenCanvas Context2D rendering is not supported.")}else n=document.createElement("canvas").getContext("2d",{willReadFrequently:!0})}n.canvas.width=p,n.canvas.height=d,n.drawImage(e,0,0,p,d),r=n.getImageData(0,0,p,d).data}if(4===t)a=new Int32Array(r);else{let e=p*d;a=new Int32Array(e*t);for(let n=0;n<e;n++)for(let e=0;e<t;++e)a[n*t+e]=r[4*n+e]}return ao(a,[d,p,t],"int32")}async function ac(e,t=3){var n;let r=null;if(eP.getBool("WRAP_TO_IMAGEBITMAP")&&"undefined"!=typeof window&&"undefined"!=typeof ImageBitmap&&window.hasOwnProperty("createImageBitmap")&&!(e instanceof ImageBitmap)&&null!=(n=e)&&0!==n.width&&0!==n.height&&!(null!=e&&e.data instanceof Uint8Array)){let t;try{t=await createImageBitmap(e,{premultiplyAlpha:"none"})}catch(e){t=null}r=null!=t&&t.width===e.width&&t.height===e.height?t:e}else r=e;return au(r,t)}function ap(e){if(2!==e.rank&&3!==e.rank)throw Error(`toPixels only supports rank 2 or 3 tensors, got rank ${e.rank}.`);let t=2===e.rank?1:e.shape[2];if(t>4||2===t)throw Error(`toPixels only supports depth of size 1, 3 or 4 but got ${t}`);if("float32"!==e.dtype&&"int32"!==e.dtype)throw Error(`Unsupported type for toPixels: ${e.dtype}. Please use float32 or int32 tensors.`)}async function ad(e,t){let n=nf(e,"img","toPixels");if(!(e instanceof t5)){let e=n;n=rH(e,"int32"),e.dispose()}ap(n);let[r,a]=n.shape.slice(0,2),s=2===n.rank?1:n.shape[2],i=await n.data(),o="float32"===n.dtype?255:1,l=new Uint8ClampedArray(a*r*4);for(let e=0;e<r*a;++e){let t=[0,0,0,255];for(let r=0;r<s;r++){let a=i[e*s+r];if("float32"===n.dtype){if(a<0||a>1)throw Error(`Tensor values for a float32 Tensor must be in the range [0 - 1] but encountered ${a}.`)}else if("int32"===n.dtype&&(a<0||a>255))throw Error(`Tensor values for a int32 Tensor must be in the range [0 - 255] but encountered ${a}.`);1===s?(t[0]=a*o,t[1]=a*o,t[2]=a*o):t[r]=a*o}let r=4*e;l[r+0]=Math.round(t[0]),l[r+1]=Math.round(t[1]),l[r+2]=Math.round(t[2]),l[r+3]=Math.round(t[3])}if(null!=t){al||null==tn(e1,nl.backendName)||(console.warn("tf.browser.toPixels is not efficient to draw tensor on canvas. Please try tf.browser.draw instead."),al=!0),t.width=a,t.height=r;let e=t.getContext("2d"),n=new ImageData(l,a,r);e.putImageData(n,0,0)}return n!==e&&n.dispose(),l}function af(e,t,n){let r=nf(e,"img","draw");if(!(e instanceof t5)){let e=r;r=rH(e,"int32"),e.dispose()}ap(r),function(e){let t=(null==e?void 0:e.alpha)||1;if(t>1||t<0)throw Error(`Alpha value ${t} is suppoed to be in range [0 - 1].`)}(null==n?void 0:n.imageOptions);let a={image:r};nl.runKernel(e1,a,{canvas:t,options:n})}let ah=ng({fromPixels_:au}),am=ng({concat_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){X(e.length>=1,()=>"Pass at least one tensor to concat");let n=nh(e,"tensors","concat","string_or_numeric");return("complex64"===n[0].dtype&&n.forEach(e=>{if("complex64"!==e.dtype)throw Error(`Cannot concatenate complex64 tensors with a tensor
          with dtype ${e.dtype}. `)}),1===n.length)?rq(n[0]):nl.runKernel("Concat",n,{axis:t})}}),ag=ng({concat2d_:function(e,t){return am(e,t)}}),ay=ng({expandDims_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","expandDims","string_or_numeric");return X(t<=n.rank,()=>"Axis must be <= rank of the tensor"),nl.runKernel("ExpandDims",{input:n},{dim:t})}});var ab={};r(ab,"spectral",()=>lz),r(ab,"signal",()=>lP),r(ab,"image",()=>lB),r(ab,"linalg",()=>lU),r(ab,"losses",()=>lV),r(ab,"sparse",()=>lW),r(ab,"string",()=>lj),r(ab,"abs",()=>at),r(ab,"acos",()=>av),r(ab,"acosh",()=>aw),r(ab,"add",()=>rG),r(ab,"addN",()=>ax),r(ab,"all",()=>ak),r(ab,"any",()=>aN),r(ab,"argMax",()=>aS),r(ab,"argMin",()=>aE),r(ab,"asin",()=>aT),r(ab,"asinh",()=>a_),r(ab,"atan",()=>aI),r(ab,"atan2",()=>aA),r(ab,"atanh",()=>aM),r(ab,"avgPool",()=>aB),r(ab,"avgPool3d",()=>aU),r(ab,"basicLSTMCell",()=>aq),r(ab,"batchToSpaceND",()=>aK),r(ab,"batchNorm",()=>aG),r(ab,"batchNorm2d",()=>aQ),r(ab,"batchNorm3d",()=>aY),r(ab,"batchNorm4d",()=>aX),r(ab,"bincount",()=>aJ),r(ab,"bitwiseAnd",()=>aZ),r(ab,"broadcastArgs",()=>a0),r(ab,"broadcastTo",()=>a1),r(ab,"buffer",()=>rj),r(ab,"cast",()=>rH),r(ab,"ceil",()=>a2),r(ab,"clipByValue",()=>a3),r(ab,"clone",()=>rq),r(ab,"complex",()=>ny),r(ab,"concat",()=>am),r(ab,"concat1d",()=>a4),r(ab,"concat2d",()=>ag),r(ab,"concat3d",()=>a6),r(ab,"concat4d",()=>a5),r(ab,"conv1d",()=>a7),r(ab,"conv2d",()=>a8),r(ab,"conv2dTranspose",()=>se),r(ab,"conv3d",()=>st),r(ab,"conv3dTranspose",()=>sr),r(ab,"cos",()=>sa),r(ab,"cosh",()=>ss),r(ab,"cumprod",()=>si),r(ab,"cumsum",()=>so),r(ab,"denseBincount",()=>sl),r(ab,"depthToSpace",()=>su),r(ab,"depthwiseConv2d",()=>sc),r(ab,"diag",()=>sp),r(ab,"dilation2d",()=>sd),r(ab,"div",()=>rY),r(ab,"divNoNan",()=>sm),r(ab,"dot",()=>sg),r(ab,"einsum",()=>sy),r(ab,"elu",()=>sb),r(ab,"ensureShape",()=>sv),r(ab,"equal",()=>sf),r(ab,"erf",()=>sw),r(ab,"euclideanNorm",()=>s_),r(ab,"exp",()=>sI),r(ab,"expandDims",()=>ay),r(ab,"expm1",()=>sA),r(ab,"eye",()=>sO),r(ab,"fill",()=>r7),r(ab,"floor",()=>sC),r(ab,"floorDiv",()=>rQ),r(ab,"gather",()=>s$),r(ab,"greater",()=>sD),r(ab,"greaterEqual",()=>sR),r(ab,"imag",()=>sL),r(ab,"isFinite",()=>sF),r(ab,"isInf",()=>sz),r(ab,"isNaN",()=>sP),r(ab,"leakyRelu",()=>sB),r(ab,"less",()=>sU),r(ab,"lessEqual",()=>sV),r(ab,"linspace",()=>sW),r(ab,"localResponseNormalization",()=>sj),r(ab,"log",()=>sH),r(ab,"log1p",()=>sq),r(ab,"logSigmoid",()=>sQ),r(ab,"logSoftmax",()=>sY),r(ab,"logSumExp",()=>sX),r(ab,"logicalAnd",()=>sJ),r(ab,"logicalNot",()=>sZ),r(ab,"logicalOr",()=>s0),r(ab,"logicalXor",()=>s1),r(ab,"lowerBound",()=>s4),r(ab,"matMul",()=>aV),r(ab,"max",()=>sN),r(ab,"maxPool",()=>s6),r(ab,"maxPool3d",()=>s5),r(ab,"maxPoolWithArgmax",()=>s8),r(ab,"maximum",()=>ar),r(ab,"mean",()=>s7),r(ab,"meshgrid",()=>it),r(ab,"min",()=>sS),r(ab,"minimum",()=>ir),r(ab,"mirrorPad",()=>ia),r(ab,"mod",()=>is),r(ab,"moments",()=>ii),r(ab,"mul",()=>rX),r(ab,"multiRNNCell",()=>io),r(ab,"multinomial",()=>il),r(ab,"neg",()=>sK),r(ab,"notEqual",()=>iu),r(ab,"oneHot",()=>ic),r(ab,"ones",()=>ie),r(ab,"onesLike",()=>ip),r(ab,"outerProduct",()=>id),r(ab,"pad",()=>ih),r(ab,"pad1d",()=>im),r(ab,"pad2d",()=>ig),r(ab,"pad3d",()=>iy),r(ab,"pad4d",()=>ib),r(ab,"pool",()=>iw),r(ab,"pow",()=>r9),r(ab,"prelu",()=>ix),r(ab,"print",()=>rK),r(ab,"prod",()=>ik),r(ab,"raggedGather",()=>iN),r(ab,"raggedRange",()=>iS),r(ab,"raggedTensorToTensor",()=>iE),r(ab,"rand",()=>iT),r(ab,"randomGamma",()=>iz),r(ab,"randomNormal",()=>iP),r(ab,"randomStandardNormal",()=>iB),r(ab,"randomUniform",()=>iU),r(ab,"randomUniformInt",()=>iV),r(ab,"range",()=>iW),r(ab,"real",()=>ij),r(ab,"reciprocal",()=>iH),r(ab,"relu",()=>iq),r(ab,"relu6",()=>iK),r(ab,"reshape",()=>aP),r(ab,"reverse",()=>iG),r(ab,"reverse1d",()=>iQ),r(ab,"reverse2d",()=>iY),r(ab,"reverse3d",()=>iX),r(ab,"reverse4d",()=>iJ),r(ab,"round",()=>iZ),r(ab,"rsqrt",()=>i0),r(ab,"scalar",()=>r2),r(ab,"selu",()=>i1),r(ab,"separableConv2d",()=>i2),r(ab,"setdiff1dAsync",()=>i3),r(ab,"sigmoid",()=>aW),r(ab,"sign",()=>i4),r(ab,"sin",()=>i6),r(ab,"sinh",()=>i5),r(ab,"slice",()=>aj),r(ab,"slice1d",()=>i8),r(ab,"slice2d",()=>i7),r(ab,"slice3d",()=>i9),r(ab,"slice4d",()=>oe),r(ab,"softmax",()=>ot),r(ab,"softplus",()=>sG),r(ab,"spaceToBatchND",()=>iv),r(ab,"fft",()=>on),r(ab,"ifft",()=>or),r(ab,"irfft",()=>oa),r(ab,"rfft",()=>oi),r(ab,"split",()=>os),r(ab,"sqrt",()=>rJ),r(ab,"square",()=>rZ),r(ab,"squaredDifference",()=>oo),r(ab,"squeeze",()=>ol),r(ab,"stack",()=>ou),r(ab,"step",()=>oc),r(ab,"stridedSlice",()=>op),r(ab,"sub",()=>ae),r(ab,"sum",()=>sE),r(ab,"tan",()=>od),r(ab,"tanh",()=>aH),r(ab,"tensor",()=>nv),r(ab,"tensor1d",()=>of),r(ab,"tensor2d",()=>oh),r(ab,"tensor3d",()=>ao),r(ab,"tensor4d",()=>om),r(ab,"tensor5d",()=>og),r(ab,"tensor6d",()=>oy),r(ab,"tensorScatterUpdate",()=>ov),r(ab,"tile",()=>sM),r(ab,"topk",()=>ow),r(ab,"truncatedNormal",()=>ox),r(ab,"unique",()=>ok),r(ab,"unsortedSegmentSum",()=>oN),r(ab,"unstack",()=>oS),r(ab,"upperBound",()=>oE),r(ab,"variable",()=>oT),r(ab,"where",()=>sh),r(ab,"whereAsync",()=>o_),r(ab,"zeros",()=>s9),r(ab,"zerosLike",()=>r0),r(ab,"op",()=>ng),r(ab,"OP_SCOPE_SUFFIX",()=>nm),r(ab,"fused",()=>oK);let av=ng({acos_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","acos");return nl.runKernel("Acos",{x:t})}}),aw=ng({acosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","acosh");return nl.runKernel("Acosh",{x:t})}}),ax=ng({addN_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){X(Array.isArray(e),()=>"The argument passed to tf.addN() must be a list of tensors"),X(e.length>=1,()=>`Must pass at least one tensor to tf.addN(), but got ${e.length}`);let t=e.map((e,t)=>nf(e,`tensors${t}`,"addN")),n=t[0];return t.forEach(e=>{if(e.dtype!==n.dtype)throw Error("All tensors passed to tf.addN() must have the same dtype")}),t.forEach(e=>{if(!er(e.shape,n.shape))throw Error("All tensors passed to tf.addN() must have the same shape")}),nl.runKernel("AddN",t)}}),ak=ng({all_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","all","bool");return nl.runKernel("All",{x:r},{axis:t,keepDims:n})}}),aN=ng({any_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","any","bool");return nl.runKernel("Any",{x:r},{axis:t,keepDims:n})}}),aS=ng({argMax_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","argMax");return nl.runKernel("ArgMax",{x:n},{axis:t})}}),aE=ng({argMin_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","argMin");return nl.runKernel("ArgMin",{x:n},{axis:t})}}),aT=ng({asin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","asin");return nl.runKernel("Asin",{x:t})}}),a_=ng({asinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","asinh");return nl.runKernel("Asinh",{x:t})}}),aI=ng({atan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","atan");return nl.runKernel("Atan",{x:t})}}),aA=ng({atan2_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","atan2"),r=nf(t,"b","atan2");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Atan2",a)}}),aM=ng({atanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","atanh");return nl.runKernel("Atanh",{x:t})}});function aO(e,t,n,r,a,s,i=!1,o="channelsLast"){let l,[u,c,p,d]=[-1,-1,-1,-1];if("channelsLast"===o)[u,c,p,d]=e;else if("channelsFirst"===o)[u,d,c,p]=e;else throw Error(`Unknown dataFormat ${o}`);let[f,h,,m]=t,[g,y]=aC(n),[b,v]=aC(r),w=a$(f,b),x=a$(h,v),{padInfo:k,outHeight:N,outWidth:S}=function(e,t,n,r,a,s,i,o,l){let u,c,p;if("number"==typeof e){let a=0===e?"VALID":"NUMBER";u={top:e,bottom:e,left:e,right:e,type:a};let i=function(e,t,n,r,a){null==r&&(r=function(e,t,n,r=1){let a=a$(t,r);return Math.floor((e[0]*(n-1)-n+a)/2)}(e,t,n));let s=e[0],i=e[1];return[aD((s-t+2*r)/n+1,a),aD((i-t+2*r)/n+1,a)]}([t,n],s,r,e,o);c=i[0],p=i[1]}else if("same"===e){let e=Math.max(0,((c=Math.ceil(t/r))-1)*r+s-t),o=Math.max(0,((p=Math.ceil(n/a))-1)*a+i-n),l=Math.floor(e/2),d=Math.floor(o/2);u={top:l,bottom:e-l,left:d,right:o-d,type:"SAME"}}else if("valid"===e)u={top:0,bottom:0,left:0,right:0,type:"VALID"},c=Math.ceil((t-s+1)/r),p=Math.ceil((n-i+1)/a);else if("object"==typeof e){let d="channelsLast"===l?e[1][0]:e[2][0],f="channelsLast"===l?e[1][1]:e[2][1],h="channelsLast"===l?e[2][0]:e[3][0],m="channelsLast"===l?e[2][1]:e[3][1];u={top:d,bottom:f,left:h,right:m,type:0===d&&0===f&&0===h&&0===m?"VALID":"EXPLICIT"},c=aD((t-s+d+f)/r+1,o),p=aD((n-i+h+m)/a+1,o)}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:u,outHeight:c,outWidth:p}}(a,c,p,g,y,w,x,s,o),E=i?m*d:m;return"channelsFirst"===o?l=[u,E,N,S]:"channelsLast"===o&&(l=[u,N,S,E]),{batchSize:u,dataFormat:o,inHeight:c,inWidth:p,inChannels:d,outHeight:N,outWidth:S,outChannels:E,padInfo:k,strideHeight:g,strideWidth:y,filterHeight:f,filterWidth:h,effectiveFilterHeight:w,effectiveFilterWidth:x,dilationHeight:b,dilationWidth:v,inShape:e,outShape:l,filterShape:t}}function aC(e){return"number"==typeof e?[e,e,e]:2===e.length?[e[0],e[1],1]:e}function a$(e,t){return t<=1?e:e+(e-1)*(t-1)}function aD(e,t){if(!t)return Math.trunc(e);switch(t){case"round":return Math.round(e);case"ceil":return Math.ceil(e);case"floor":return Math.floor(e);default:throw Error(`Unknown roundingMode ${t}`)}}function aR(e){let[t,n,r]=aC(e);return 1===t&&1===n&&1===r}function aL(e,t){return aR(e)||aR(t)}function aF(e){return aC(e).every(e=>e>0)}function az(e,t,n){if(null!=n){if("string"==typeof t)throw Error(`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);if("number"==typeof t)X(ea(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`);else if("object"==typeof t)t.forEach(t=>{t.forEach(t=>{X(ea(t),()=>`Error in ${e}: pad must be an integer when using dimRoundingMode ${n} but got pad ${t}.`)})});else throw Error(`Error in ${e}: Unknown padding parameter: ${t}`)}}let aP=ng({reshape_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","reshape","string_or_numeric");return nl.runKernel("Reshape",{x:n},{shape:t})}}),aB=ng({avgPool_:function(e,t,n,r,a){let s=nf(e,"x","avgPool","float32");X(aL(n,1),()=>`Error in avgPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`);let i=s,o=!1;3===s.rank&&(o=!0,i=aP(s,[1,s.shape[0],s.shape[1],s.shape[2]])),X(4===i.rank,()=>`Error in avgPool: x must be rank 4 but got rank ${i.rank}.`),az("avgPool",r,a);let l={x:i},u=nl.runKernel("AvgPool",l,{filterSize:t,strides:n,pad:r,dimRoundingMode:a});return(u=rH(u,s.dtype),o)?aP(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),aU=ng({avgPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s="NDHWC"){let i=nf(e,"x","avgPool3d","float32"),o=i,l=!1;4===i.rank&&(l=!0,o=aP(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),X(5===o.rank,()=>`Error in avgPool3d: x must be rank 5 but got rank ${o.rank}.`),X("NDHWC"===s,()=>`Error in avgPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),X("number"==typeof n&&n>0||Array.isArray(n)&&n[0]>0&&n[1]>0&&n[2]>0,()=>`Error in avgPool3d: Stride must be > 0, but got '${n}'`),az("avgPool3d",r,a);let u={x:o},c=nl.runKernel("AvgPool3D",u,{filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s});return(c=rH(c,o.dtype),l)?aP(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}}),aV=ng({matMul_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=!1,r=!1){let a=nf(e,"a","matMul"),s=nf(t,"b","matMul");[a,s]=nn(a,s);let i={a:a,b:s};return nl.runKernel("BatchMatMul",i,{transposeA:n,transposeB:r})}}),aW=ng({sigmoid_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","sigmoid","float32");return nl.runKernel("Sigmoid",{x:t})}}),aj=ng({slice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","slice","string_or_numeric");if(0===r.rank)throw Error("Slicing scalar is not possible");return nl.runKernel("Slice",{x:r},{begin:t,size:n})}}),aH=ng({tanh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","tanh","float32");return nl.runKernel("Tanh",{x:t})}}),aq=ng({basicLSTMCell_:function(e,t,n,r,a,s){let i=nf(e,"forgetBias","basicLSTMCell"),o=nf(t,"lstmKernel","basicLSTMCell"),l=nf(n,"lstmBias","basicLSTMCell"),u=nf(r,"data","basicLSTMCell"),c=nf(a,"c","basicLSTMCell"),p=rG(aV(am([u,nf(s,"h","basicLSTMCell")],1),o),l),d=p.shape[0],f=p.shape[1]/4,h=[d,f],m=aj(p,[0,0],h),g=aj(p,[0,f],h),y=aj(p,[0,2*f],h),b=aj(p,[0,3*f],h),v=rG(rX(aW(m),aH(g)),rX(c,aW(rG(i,y)))),w=rX(aH(v),aW(b));return[v,w]}}),aK=ng({batchToSpaceND_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","batchToSpaceND"),a=t.reduce((e,t)=>e*t);return X(r.rank>=1+t.length,()=>`input rank is ${r.rank} but should be > than blockShape.length ${t.length}`),X(n.length===t.length,()=>`crops.length is ${n.length} but should be equal to blockShape.length  ${t.length}`),X(r.shape[0]%a==0,()=>`input tensor batch is ${r.shape[0]} but is not divisible by the product of the elements of blockShape ${t.join(" * ")} === ${a}`),nl.runKernel("BatchToSpaceND",{x:r},{blockShape:t,crops:n})}}),aG=ng({batchNorm_:function(e,t,n,r,a,s){let i,o;null==s&&(s=.001);let l=nf(e,"x","batchNorm"),u=nf(t,"mean","batchNorm"),c=nf(n,"variance","batchNorm");null!=a&&(i=nf(a,"scale","batchNorm")),null!=r&&(o=nf(r,"offset","batchNorm")),X(u.rank===c.rank,()=>"Batch normalization gradient requires mean and variance to have equal ranks."),X(null==o||u.rank===o.rank,()=>"Batch normalization gradient requires mean and offset to have equal ranks."),X(null==i||u.rank===i.rank,()=>"Batch normalization gradient requires mean and scale to have equal ranks.");let p={x:0===l.rank||1===l.rank?aP(l,[1,1,1,l.size]):2===l.rank?aP(l,[1,1,l.shape[0],l.shape[1]]):3===l.rank?aP(l,[1,l.shape[0],l.shape[1],l.shape[2]]):l,scale:i,offset:o,mean:u,variance:c},d={varianceEpsilon:s};return aP(nl.runKernel("FusedBatchNorm",p,d),l.shape)}}),aQ=ng({batchNorm2d_:function(e,t,n,r,a,s){let i,o;let l=nf(e,"x","batchNorm"),u=nf(t,"mean","batchNorm"),c=nf(n,"variance","batchNorm");return null!=a&&(i=nf(a,"scale","batchNorm")),null!=r&&(o=nf(r,"offset","batchNorm")),X(2===l.rank,()=>`Error in batchNorm2D: x must be rank 2 but got rank ${l.rank}.`),X(2===u.rank||1===u.rank,()=>`Error in batchNorm2D: mean must be rank 2 or rank 1 but got rank ${u.rank}.`),X(2===c.rank||1===c.rank,()=>`Error in batchNorm2D: variance must be rank 2 or rank 1 but got rank ${c.rank}.`),null!=i&&X(2===i.rank||1===i.rank,()=>`Error in batchNorm2D: scale must be rank 2 or rank 1 but got rank ${i.rank}.`),null!=o&&X(2===o.rank||1===o.rank,()=>`Error in batchNorm2D: offset must be rank 2 or rank 1 but got rank ${o.rank}.`),aG(l,u,c,o,i,s)}}),aY=ng({batchNorm3d_:function(e,t,n,r,a,s){let i,o;let l=nf(e,"x","batchNorm"),u=nf(t,"mean","batchNorm"),c=nf(n,"variance","batchNorm");return null!=a&&(i=nf(a,"scale","batchNorm")),null!=r&&(o=nf(r,"offset","batchNorm")),X(3===l.rank,()=>`Error in batchNorm3D: x must be rank 3 but got rank ${l.rank}.`),X(3===u.rank||1===u.rank,()=>`Error in batchNorm3D: mean must be rank 3 or rank 1 but got rank ${u.rank}.`),X(3===c.rank||1===c.rank,()=>`Error in batchNorm3D: variance must be rank 3 or rank 1 but got rank ${c.rank}.`),null!=i&&X(3===i.rank||1===i.rank,()=>`Error in batchNorm3D: scale must be rank 3 or rank 1 but got rank ${i.rank}.`),null!=o&&X(3===o.rank||1===o.rank,()=>`Error in batchNorm3D: offset must be rank 3 or rank 1 but got rank ${o.rank}.`),aG(l,u,c,o,i,s)}}),aX=ng({batchNorm4d_:function(e,t,n,r,a,s){let i,o;let l=nf(e,"x","batchNorm"),u=nf(t,"mean","batchNorm"),c=nf(n,"variance","batchNorm");return null!=a&&(i=nf(a,"scale","batchNorm")),null!=r&&(o=nf(r,"offset","batchNorm")),X(4===l.rank,()=>`Error in batchNorm4D: x must be rank 4 but got rank ${l.rank}.`),X(4===u.rank||1===u.rank,()=>`Error in batchNorm4D: mean must be rank 4 or rank 1 but got rank ${u.rank}.`),X(4===c.rank||1===c.rank,()=>`Error in batchNorm4D: variance must be rank 4 or rank 1 but got rank ${c.rank}.`),null!=i&&X(4===i.rank||1===i.rank,()=>`Error in batchNorm4D: scale must be rank 4 or rank 1 but got rank ${i.rank}.`),null!=o&&X(4===o.rank||1===o.rank,()=>`Error in batchNorm4D: offset must be rank 4 or rank 1 but got rank ${o.rank}.`),aG(l,u,c,o,i,s)}}),aJ=ng({bincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","bincount"),a=nf(t,"weights","bincount");return X("int32"===r.dtype,()=>`Error in bincount: input dtype must be int32, but got ${r.dtype}`),X(n>=0,()=>`size must be non-negative, but got ${n}.`),X(a.size===r.size||0===a.size,()=>`Error in bincount: weights must have the same size as input or0-length, but got input shape: ${r.shape}, weights shape: ${a.shape}.`),nl.runKernel("Bincount",{x:r,weights:a},{size:n})}}),aZ=ng({bitwiseAnd_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","bitwiseAnd"),r=nf(t,"y","bitwiseAnd");if(!er(n.shape,r.shape))throw Error(`BitwiseAnd: Tensors must have the same shape. x: ${n.shape}, y: ${r.shape}`);if("int32"!==n.dtype||"int32"!==r.dtype)throw Error(`BitwiseAnd: Only supports 'int32' values in tensor, found type of x: ${n.dtype} and type of y: ${r.dtype}`);return nl.runKernel("BitwiseAnd",{a:n,b:r})}}),a0=ng({broadcastArgs_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"s0","broadcastArgs","int32"),r=nf(t,"s1","broadcastArgs","int32");if(1!==n.rank)throw Error(`broadcastArgs(): first input must be a vector (rank=1). Has rank ${n.rank}`);if(1!==r.rank)throw Error(`broadcastArgs(): second input must be a vector (rank=1). Has rank ${r.rank}`);return nl.runKernel("BroadcastArgs",{s0:n,s1:r})}}),a1=ng({broadcastTo_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"broadcastTo","x"),r=n.shape;if(eC(t),t.length<n.rank)throw Error(`broadcastTo(): shape.length=${t.length} < input.rank=${n.rank}.`);if(t.length>n.rank){let e=n.shape.slice();for(;e.length<t.length;)e.unshift(1);n=aP(n,e)}let a=n.shape,s=Array.from(t);for(let e=t.length-1;e>=0;e--)if(a[e]===t[e])s[e]=1;else if(1!==n.shape[e])throw Error(`broadcastTo(): [${r}] cannot be broadcast to [${t}].`);if(0===s.map((e,t)=>e>1?t:-1).filter(e=>e>=0).length)return rq(n);let i={x:n};return nl.runKernel(e3,i,{reps:s})}}),a2=ng({ceil_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","ceil","float32");return nl.runKernel("Ceil",{x:t})}}),a3=ng({clipByValue_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","clipByValue");return(X(t<=n,()=>`Error in clip: min (${t}) must be less than or equal to max (${n}).`),t===n)?r7(r.shape,t,r.dtype):nl.runKernel("ClipByValue",{x:r},{clipValueMin:t,clipValueMax:n})}}),a4=ng({concat1d_:function(e){return am(e,0)}}),a6=ng({concat3d_:function(e,t){return am(e,t)}}),a5=ng({concat4d_:function(e,t){return am(e,t)}}),a8=ng({conv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a="NHWC",s=[1,1],i){let o=nf(e,"x","conv2d","float32"),l=nf(t,"filter","conv2d","float32"),u=o,c=!1;3===o.rank&&(c=!0,u=aP(o,[1,o.shape[0],o.shape[1],o.shape[2]])),X(4===u.rank,()=>`Error in conv2d: input must be rank 4, but got rank ${u.rank}.`),X(4===l.rank,()=>`Error in conv2d: filter must be rank 4, but got rank ${l.rank}.`),az("conv2d",r,i);let p="NHWC"===a?u.shape[3]:u.shape[1];X(p===l.shape[2],()=>`Error in conv2d: depth of input (${p}) must match input depth for filter ${l.shape[2]}.`),X(aL(n,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),X(aF(s),()=>"Error in conv2D: Dilated rates should be larger than 0."),X(aF(n),()=>"Error in conv2D: Strides should be larger than 0.");let d={x:u,filter:l},f=nl.runKernel("Conv2D",d,{strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i});return c?aP(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),a7=ng({conv1d_:function(e,t,n,r,a="NWC",s=1,i){let o=nf(e,"x","conv1d"),l=nf(t,"filter","conv1d"),u=o,c=!1;2===o.rank&&(c=!0,u=aP(o,[1,o.shape[0],o.shape[1]])),X(3===u.rank,()=>`Error in conv1d: input must be rank 3, but got rank ${u.rank}.`),X(3===l.rank,()=>`Error in conv1d: filter must be rank 3, but got rank ${l.rank}.`),az("conv1d",r,i),X(u.shape[2]===l.shape[1],()=>`Error in conv1d: depth of input (${u.shape[2]}) must match input depth for filter ${l.shape[1]}.`),X(aL(n,s),()=>`Error in conv1D: Either stride or dilation must be 1. Got stride ${n} and dilation '${s}'`),X(aF(s),()=>"Error in conv1D: Dilated rates should be larger than 0."),X(aF(n),()=>"Error in conv1D: Stride should be larger than 0."),X("NWC"===a,()=>`Error in conv1d: got dataFormat of ${a} but only NWC is currently supported.`);let p=aP(l,[1,l.shape[0],l.shape[1],l.shape[2]]),d=a8(aP(u,[u.shape[0],1,u.shape[1],u.shape[2]]),p,[1,n],r,"NHWC",[1,s],i);return c?aP(d,[d.shape[2],d.shape[3]]):aP(d,[d.shape[0],d.shape[2],d.shape[3]])}}),a9=ng({conv2DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s="NHWC",i){X(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let o=e,l=t,u=!1;3===t.rank&&(u=!0,l=aP(t,[1,t.shape[0],t.shape[1],t.shape[2]]),o=[1,e[0],e[1],e[2]]),X(4===o.length,()=>`Error in conv2dDerInput: inShape must be length 4, but got length ${o.length}.`),X(4===l.rank,()=>`Error in conv2dDerInput: dy must be rank 4, but got rank ${l.rank}`),X(4===n.rank,()=>`Error in conv2dDerInput: filter must be rank 4, but got rank ${n.rank}`);let c="NHWC"===s?o[3]:o[1],p="NHWC"===s?l.shape[3]:l.shape[1];X(c===n.shape[2],()=>`Error in conv2dDerInput: depth of input (${c}) must match input depth for filter ${n.shape[2]}.`),X(p===n.shape[3],()=>`Error in conv2dDerInput: depth of output (${p}) must match output depth for filter ${n.shape[3]}.`),az("conv2dDerInput",a,i);let d={dy:l,filter:n},f={strides:r,pad:a,dataFormat:s,dimRoundingMode:i,inputShape:o},h=nl.runKernel("Conv2DBackpropInput",d,f);return u?aP(h,[h.shape[1],h.shape[2],h.shape[3]]):h}}),se=ng({conv2dTranspose_:function(e,t,n,r,a,s){return a9(n,nf(e,"x","conv2dTranspose"),nf(t,"filter","conv2dTranspose"),r,a,"NHWC",s)}}),st=ng({conv3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a="NDHWC",s=[1,1,1]){let i=nf(e,"x","conv3d"),o=nf(t,"filter","conv3d"),l=i,u=!1;4===i.rank&&(u=!0,l=aP(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),X(5===l.rank,()=>`Error in conv3d: input must be rank 5, but got rank ${l.rank}.`),X(5===o.rank,()=>`Error in conv3d: filter must be rank 5, but got rank ${o.rank}.`),X(l.shape[4]===o.shape[3],()=>`Error in conv3d: depth of input (${l.shape[4]}) must match input depth for filter ${o.shape[3]}.`),X(aL(n,s),()=>`Error in conv3D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),X("NDHWC"===a,()=>`Error in conv3d: got dataFormat of ${a} but only NDHWC is currently supported.`),X(aF(s),()=>"Error in conv3D: Dilated rates should be larger than 0."),X(aF(n),()=>"Error in conv3D: Strides should be larger than 0.");let c={x:l,filter:o},p=nl.runKernel("Conv3D",c,{strides:n,pad:r,dataFormat:a,dilations:s});return u?aP(p,[p.shape[1],p.shape[2],p.shape[3],p.shape[4]]):p}}),sn=ng({conv3DBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a){X(e.length===t.rank,()=>`Length of inShape (${e.length}) and rank of dy (${t.rank}) must match`);let s=e,i=t,o=!1;4===t.rank&&(o=!0,i=aP(t,[1,t.shape[0],t.shape[1],t.shape[2],t.shape[3]]),s=[1,e[0],e[1],e[2],e[3]]);let l=s[4],u=i.shape[4];X(5===s.length,()=>`Error in conv3dDerInput: inShape must be length 5, but got length ${s.length}.`),X(5===i.rank,()=>`Error in conv3dDerInput: dy must be rank 5, but got rank ${i.rank}`),X(5===n.rank,()=>`Error in conv3dDerInput: filter must be rank 5, but got rank ${n.rank}`),X(l===n.shape[3],()=>`Error in conv3dDerInput: depth of input (${l}) must match input depth for filter ${n.shape[3]}.`),X(u===n.shape[4],()=>`Error in conv3dDerInput: depth of output (${u}) must match output depth for filter ${n.shape[4]}.`);let c={dy:i,filter:n},p={pad:a,strides:r,inputShape:s},d=nl.runKernel("Conv3DBackpropInputV2",c,p);return o?aP(d,[d.shape[1],d.shape[2],d.shape[3],d.shape[4]]):d}}),sr=ng({conv3dTranspose_:function(e,t,n,r,a){return sn(n,nf(e,"x","conv3dTranspose"),nf(t,"filter","conv3dTranspose"),r,a)}}),sa=ng({cos_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","cos","float32");return nl.runKernel("Cos",{x:t})}}),ss=ng({cosh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","cosh","float32");return nl.runKernel("Cosh",{x:t})}}),si=ng({cumprod_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0,n=!1,r=!1){let a=nf(e,"x","cumprod");return nl.runKernel("Cumprod",{x:a},{axis:t,exclusive:n,reverse:r})}}),so=ng({cumsum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0,n=!1,r=!1){let a=nf(e,"x","cumsum");return nl.runKernel("Cumsum",{x:a},{axis:t,exclusive:n,reverse:r})}}),sl=ng({denseBincount_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=!1){let a=nf(e,"x","denseBincount"),s=nf(t,"weights","denseBincount");return X("int32"===a.dtype,()=>`Error in denseBincount: input dtype must be int32, but got ${a.dtype}`),X(a.rank<=2,()=>`Error in denseBincount: input must be at most rank 2, but got rank ${a.rank}.`),X(n>=0,()=>`size must be non-negative, but got ${n}.`),X(s.size===a.size||0===s.size,()=>`Error in denseBincount: weights must have the same shape as x or 0-length, but got x shape: ${a.shape}, weights shape: ${s.shape}.`),nl.runKernel("DenseBincount",{x:a,weights:s},{size:n,binaryOutput:r})}}),su=ng({depthToSpace_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n="NHWC"){let r=nf(e,"x","depthToSpace","float32"),a="NHWC"===n?r.shape[1]:r.shape[2],s="NHWC"===n?r.shape[2]:r.shape[3],i="NHWC"===n?r.shape[3]:r.shape[1];return X(t>1,()=>`blockSize should be > 1 for depthToSpace, but was: ${t}`),X(a*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${a} and ${t}  for depthToSpace with input shape
    ${r.shape}`),X(s*t>=0,()=>`Negative dimension size caused by overflow when multiplying
    ${s} and ${t} for depthToSpace with input shape
        ${r.shape}`),X(i%(t*t)==0,()=>`Dimension size must be evenly divisible by ${t*t} but is ${i} for depthToSpace with input shape ${r.shape}`),nl.runKernel("DepthToSpace",{x:r},{blockSize:t,dataFormat:n})}}),sc=ng({depthwiseConv2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a="NHWC",s=[1,1],i){let o=nf(e,"x","depthwiseConv2d","float32"),l=nf(t,"filter","depthwiseConv2d","float32"),u=o,c=!1;3===o.rank&&(c=!0,u=aP(o,[1,o.shape[0],o.shape[1],o.shape[2]])),X(4===u.rank,()=>`Error in depthwiseConv2d: input must be rank 4, but got rank ${u.rank}.`),X(4===l.rank,()=>`Error in depthwiseConv2d: filter must be rank 4, but got rank ${l.rank}.`);let p="NHWC"===a?u.shape[3]:u.shape[1];X(p===l.shape[2],()=>`Error in depthwiseConv2d: number of input channels (${p}) must match the inChannels dimension in filter ${l.shape[2]}.`),az("depthwiseConv2d",r,i);let d={x:u,filter:l},f=nl.runKernel("DepthwiseConv2dNative",d,{strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i});return c?aP(f,[f.shape[1],f.shape[2],f.shape[3]]):f}}),sp=ng({diag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","diag");return nl.runKernel("Diag",{x:t})}}),sd=ng({dilation2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a=[1,1],s="NHWC"){let i=nf(e,"x","dilation2d"),o=nf(t,"filter","dilation2d");X(3===i.rank||4===i.rank,()=>`Error in dilation2d: input must be rank 3 or 4, but got rank ${i.rank}.`),X(3===o.rank,()=>`Error in dilation2d: filter must be rank 3, but got rank ${o.rank}.`),X("NHWC"===s,()=>`Error in dilation2d: Only NHWC is currently supported, but got dataFormat of ${s}`);let l=i,u=!1;3===i.rank&&(l=aP(i,[1,i.shape[0],i.shape[1],i.shape[2]]),u=!0),X(l.shape[3]===o.shape[2],()=>`Error in dilation2d:  input and filter must have the same depth: ${l.shape[3]} vs ${o.shape[2]}`);let c={x:l,filter:o},p=nl.runKernel("Dilation2D",c,{strides:n,pad:r,dilations:a});return u?aP(p,[p.shape[1],p.shape[2],p.shape[3]]):p}}),sf=ng({equal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","equal","string_or_numeric"),r=nf(t,"b","equal","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("Equal",a)}}),sh=ng({where_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(t,"a","where"),a=nf(n,"b","where"),s=nf(e,"condition","where","bool"),i=an(an(s.shape,r.shape),a.shape),o=a1(s,i),l=a1(r,i),u=a1(a,i);return nl.runKernel("Select",{condition:o,t:l,e:u})}}),sm=ng({divNoNan_:function(e,t){let n=nf(e,"a","div"),r=nf(t,"b","div");[n,r]=nn(n,r);let a=rY(n,r),s=r0(a);return sh(sf(r,s),s,a)}}),sg=ng({dot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"t1","dot"),r=nf(t,"t2","dot");X((1===n.rank||2===n.rank)&&(1===r.rank||2===r.rank),()=>`Error in dot: inputs must all be rank 1 or 2, but got ranks ${n.rank} and ${r.rank}.`);let a=1===n.rank?n.size:n.shape[1],s=1===r.rank?r.size:r.shape[0];if(X(a===s,()=>`Error in dot: inner dimensions of inputs must match, but got ${a} and ${s}.`),1===n.rank&&1===r.rank){let e=aV(aP(n,[1,-1]),aP(r,[-1,1]));return aP(e,[])}if(1===n.rank&&2===r.rank){let e=aV(aP(n,[1,-1]),aP(r,[r.shape[0],r.shape[1]]));return aP(e,[e.size])}if(2!==n.rank||1!==r.rank)return aV(n,aP(r,[r.shape[0],r.shape[1]]));{let e=aV(n,aP(r,[-1,1]));return aP(e,[e.size])}}}),sy=ng({einsum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,...t){let n=t.map((e,t)=>nf(e,`tensors${t}`,"einsum"));return nl.runKernel("Einsum",n,{equation:e})}}),sb=ng({elu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","elu","float32");return nl.runKernel("Elu",{x:t})}}),sv=ng({ensureShape_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","ensureShape","string_or_numeric");if(!en(n.shape,t))throw Error(`EnsureShape: Shape of tensor ${n.shape} is not compatible with expected shape ${t}`);return e}}),sw=ng({erf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","erf");X("int32"===t.dtype||"float32"===t.dtype,()=>"Input dtype must be `int32` or `float32`."),"int32"===t.dtype&&(t=rH(t,"float32"));let n={x:t};return nl.runKernel("Erf",n)}});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var sx={};function sk(e,t){return function(e,t,n){let r=e.length+t.length,a=[],s=0,i=0;for(let o=0;o<r;o++)-1===n.indexOf(o)?a.push(e[s++]):a.push(t[i++]);return a}(e,t.map(e=>1),t)}r(sx,"norm",()=>sT);let sN=ng({max_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","max");return nl.runKernel("Max",{x:r},{reductionIndices:t,keepDims:n})}}),sS=ng({min_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","min");return nl.runKernel("Min",{x:r},{axis:t,keepDims:n})}}),sE=ng({sum_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","sum");"bool"===r.dtype&&(r=rH(r,"int32"));let a={x:r};return nl.runKernel("Sum",a,{axis:t,keepDims:n})}}),sT=ng({norm_:function(e,t="euclidean",n=null,r=!1){let a=function e(t,n,r=null){if(0===t.rank)return at(t);if(1!==t.rank&&null===r)return e(aP(t,[-1]),n,r);if(1===t.rank||"number"==typeof r||Array.isArray(r)&&1===r.length){if(1===n)return sE(at(t),r);if(n===1/0)return sN(at(t),r);if(n===-1/0)return sS(at(t),r);if("euclidean"===n||2===n)return rJ(sE(r9(at(t),r2(2,"int32")),r));throw Error(`Error in norm: invalid ord value: ${n}`)}if(Array.isArray(r)&&2===r.length){if(1===n)return sN(sE(at(t),r[0]),r[1]-1);if(n===1/0)return sN(sE(at(t),r[1]),r[0]);if(n===-1/0)return sS(sE(at(t),r[1]),r[0]);if("fro"===n||"euclidean"===n)return rJ(sE(rZ(t),r));throw Error(`Error in norm: invalid ord value: ${n}`)}throw Error(`Error in norm: invalid axis: ${r}`)}(e=nf(e,"x","norm"),t,n),s=a.shape;if(r){let t=ep(n,e.shape);s=sk(a.shape,t)}return aP(a,s)}}),s_=ng({euclideanNorm_:function(e,t=null,n=!1){return sT(e,"euclidean",t,n)}}),sI=ng({exp_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","exp");return nl.runKernel("Exp",{x:t})}}),sA=ng({expm1_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","expm1");return nl.runKernel("Expm1",{x:t})}}),sM=ng({tile_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","tile","string_or_numeric");return X(n.rank===t.length,()=>`Error in transpose: rank of input ${n.rank} must match length of reps ${t}.`),nl.runKernel(e3,{x:n},{reps:t})}}),sO=ng({eye_:function(e,t,n,r="float32"){null==t&&(t=e);let a=rj([e,t],r),s=e<=t?e:t;for(let e=0;e<s;++e)a.set(1,e,e);let i=aP(a.toTensor(),[e,t]);if(null==n)return i;if(1===n.length)return sM(ay(i,0),[n[0],1,1]);if(2===n.length)return sM(ay(ay(i,0),0),[n[0],n[1],1,1]);if(3===n.length)return sM(ay(ay(ay(i,0),0),0),[n[0],n[1],n[2],1,1]);throw Error(`eye() currently supports only 1D and 2D batchShapes, but received ${n.length}D.`)}}),sC=ng({floor_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","floor","float32");return nl.runKernel("Floor",{x:t})}}),s$=ng({gather_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=0,r=0){let a=nf(e,"x","gather"),s=nf(t,"indices","gather","int32");return nl.runKernel("GatherV2",{x:a,indices:s},{axis:n,batchDims:r})}}),sD=ng({greater_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","greater","string_or_numeric"),r=nf(t,"b","greater","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("Greater",a)}}),sR=ng({greaterEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","greaterEqual","string_or_numeric"),r=nf(t,"b","greaterEqual","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("GreaterEqual",a)}}),sL=ng({imag_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"input","imag");return nl.runKernel("Imag",{input:t})}}),sF=ng({isFinite_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","isFinite");return nl.runKernel("IsFinite",{x:t})}}),sz=ng({isInf_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","isInf");return nl.runKernel("IsInf",{x:t})}}),sP=ng({isNaN_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","isNaN");return nl.runKernel("IsNan",{x:t})}}),sB=ng({leakyRelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=.2){let n=nf(e,"x","leakyRelu");return nl.runKernel("LeakyRelu",{x:n},{alpha:t})}}),sU=ng({less_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","less","string_or_numeric"),r=nf(t,"b","less","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("Less",a)}}),sV=ng({lessEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","lessEqual","string_or_numeric"),r=nf(t,"b","lessEqual","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("LessEqual",a)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function sW(e,t,n){if(n<=0)throw Error("The number of values should be positive.");return nl.runKernel("LinSpace",{},{start:e,stop:t,num:n})}let sj=ng({localResponseNormalization_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=5,n=1,r=1,a=.5){let s=nf(e,"x","localResponseNormalization");X(4===s.rank||3===s.rank,()=>`Error in localResponseNormalization: x must be rank 3 or 4 but got
               rank ${s.rank}.`),X(ea(t),()=>`Error in localResponseNormalization: depthRadius must be an integer but got depthRadius ${t}.`);let i=s,o=!1;3===s.rank&&(o=!0,i=aP(s,[1,s.shape[0],s.shape[1],s.shape[2]]));let l={x:i},u=nl.runKernel("LRN",l,{depthRadius:t,bias:n,alpha:r,beta:a});return o?aP(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),sH=ng({log_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","log","float32");return nl.runKernel("Log",{x:t})}}),sq=ng({log1p_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","log1p");return nl.runKernel("Log1p",{x:t})}}),sK=ng({neg_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","neg");return nl.runKernel("Neg",{x:t})}}),sG=ng({softplus_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","softplus");return nl.runKernel("Softplus",{x:t})}}),sQ=ng({logSigmoid_:function(e){let t=nf(e,"x","logSigmoid");return r1(e=>({value:sK(sG(sK(e))),gradFunc:t=>rX(t,aW(sK(e)))}))(t)}}),sY=ng({logSoftmax_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=-1){let n=nf(e,"logits","logSoftmax");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Log Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and axis was ${t}`);return r1((e,n)=>{let r=sN(e,t,!0),a=ae(e,r),s=ae(rH(a,"float32"),sH(sE(sI(a),t,!0)));return n([s]),{value:s,gradFunc:(e,n)=>{let[r]=n,a=sI(r);return ae(e,rX(sE(e,t,!0),a))}}})(n)}}),sX=ng({logSumExp_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","logSumExp"),a=ep(t,r.shape),s=sN(r,a,!0),i=sH(sE(sI(ae(r,s)),a)),o=rG(aP(s,i.shape),i);if(n){let e=sk(o.shape,a);return aP(o,e)}return o}}),sJ=ng({logicalAnd_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","logicalAnd","bool"),r=nf(t,"b","logicalAnd","bool");return an(n.shape,r.shape),nl.runKernel("LogicalAnd",{a:n,b:r})}}),sZ=ng({logicalNot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","logicalNot","bool");return nl.runKernel("LogicalNot",{x:t})}}),s0=ng({logicalOr_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","logicalOr","bool"),r=nf(t,"b","logicalOr","bool");return an(n.shape,r.shape),nl.runKernel("LogicalOr",{a:n,b:r})}}),s1=ng({logicalXor_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","logicalXor","bool"),r=nf(t,"b","logicalXor","bool");return an(n.shape,r.shape),sJ(s0(e,t),sZ(sJ(e,t)))}});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var s2={};r(s2,"searchSorted",()=>s3);let s3=ng({searchSorted_:function(e,t,n="left"){let r=nf(e,"sortedSequence","searchSorted"),a=nf(t,"values","searchSorted"),s=r.shape[r.shape.length-1],i=a.shape[a.shape.length-1],o=aP(r,[-1,s]),l=aP(a,[-1,i]);if(o.rank<2)throw Error("Sorted input argument must be at least 2-dimensional");if(o.shape[0]!==l.shape[0])throw Error("Leading dimension of 'sortedSequence' and 'values' must match.");if(ee(l.shape)>=2147483648)throw Error("values tensor size must less than 2147483648");if(o.shape[1]>=2147483648)throw Error(`trailing dim_size must less than 2147483648 for int32 output type, was ${o.shape[1]}`);return nl.runKernel("SearchSorted",{sortedSequence:o,values:l},{side:n})}});function s4(e,t){return s3(e,t,"left")}let s6=ng({maxPool_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a){let s=nf(e,"x","maxPool"),i=s,o=!1;3===s.rank&&(o=!0,i=aP(s,[1,s.shape[0],s.shape[1],s.shape[2]])),X(4===i.rank,()=>`Error in maxPool: input must be rank 4 but got rank ${i.rank}.`),X(aL(n,1),()=>`Error in maxPool: Either strides or dilations must be 1. Got strides ${n} and dilations '1'`),az("maxPool",r,a);let l={x:i},u=nl.runKernel("MaxPool",l,{filterSize:t,strides:n,pad:r,dimRoundingMode:a});return o?aP(u,[u.shape[1],u.shape[2],u.shape[3]]):u}}),s5=ng({maxPool3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=[1,1,1],n,r,a,s="NDHWC"){let i=nf(e,"x","maxPool3d"),o=i,l=!1;4===i.rank&&(l=!0,o=aP(i,[1,i.shape[0],i.shape[1],i.shape[2],i.shape[3]])),X(5===o.rank,()=>`Error in maxPool3d: x must be rank 5 but got rank ${o.rank}.`),X("NDHWC"===s,()=>`Error in maxPool3d: Only NDHWC is currently supported, but got dataFormat of ${s}`),az("maxPool3d",r,a);let u={x:o},c=nl.runKernel("MaxPool3D",u,{filterSize:t,strides:n,pad:r,dimRoundingMode:a,dataFormat:s});return l?aP(c,[c.shape[1],c.shape[2],c.shape[3],c.shape[4]]):c}}),s8=ng({maxPoolWithArgmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a=!1){let s=nf(e,"x","maxPoolWithArgmax"),i=nl.runKernel("MaxPoolWithArgmax",{x:s},{filterSize:t,strides:n,pad:r,includeBatchInIndex:a});return{result:i[0],indexes:i[1]}}}),s7=ng({mean_:/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","mean");return nl.runKernel("Mean",{x:r},{axis:t,keepDims:n})}});/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function s9(e,t="float32"){if(eC(e),"complex64"===t)return ny(s9(e,"float32"),s9(e,"float32"));let n=eM(ee(e),t);return nl.makeTensor(n,e,t)}function ie(e,t="float32"){if(eC(e),"complex64"===t)return ny(ie(e,"float32"),s9(e,"float32"));let n=eA(ee(e),t);return nl.makeTensor(n,e,t)}function it(e,t,{indexing:n="xy"}={}){if("xy"!==n&&"ij"!==n)throw TypeError(`${n} is not a valid third argument to meshgrid`);if(void 0===e)return[];let r=nf(e,"x","meshgrid",e instanceof t5?e.dtype:"float32");if(void 0===t)return[r];let a=nf(t,"y","meshgrid",t instanceof t5?t.dtype:"float32"),s=ee(r.shape),i=ee(a.shape);return"xy"===n?(r=aP(r,[1,-1]),a=aP(a,[-1,1]),[aV(ie([i,1],r.dtype),r),aV(a,ie([1,s],a.dtype))]):(r=aP(r,[-1,1]),a=aP(a,[1,-1]),[aV(r,ie([1,i],r.dtype)),aV(ie([s,1],a.dtype),a)])}let ir=ng({minimum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","minimum"),r=nf(t,"b","minimum");[n,r]=nn(n,r),"bool"===n.dtype&&(n=rH(n,"int32"),r=rH(r,"int32")),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("Minimum",a)}}),ia=ng({mirrorPad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){X("reflect"===n||"symmetric"===n,()=>`Invalid mode. Mode must be either reflect or symmetric. Got ${n}.`);let r=nf(e,"x","mirrorPad");if(0===r.rank)throw Error("mirrorPad(scalar) is not defined. Pass non-scalar to mirrorPad");X(t.length===r.rank,()=>`Padding doesn't match input. Must be ${r.rank}. Got ${t.length}.`);let a="reflect"===n?1:0;for(let e=0;e<r.rank;e++)X(2===t[e].length,()=>"Invalid number of paddings. Must be length of 2 each."),X(t[e][0]>=0&&t[e][0]<=r.shape[e]-a&&t[e][1]>=0&&t[e][1]<=r.shape[e]-a,()=>`Padding in dimension ${e} cannot be greater than or equal to ${r.shape[e]-a} or less than 0 for input of shape ${r.shape}`);return nl.runKernel("MirrorPad",{x:r},{paddings:t,mode:n})}}),is=ng({mod_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","mod"),r=nf(t,"b","mod");[n,r]=nn(n,r);let a={a:n,b:r};return nl.runKernel("Mod",a)}}),ii=ng({moments_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=ep(t,(e=nf(e,"x","moments")).shape),a=s7(e,r,n),s=a.shape;n||(s=sk(a.shape,r));let i=s7(rZ(ae(rH(e,"float32"),aP(a,s))),r,n);return{mean:a,variance:i}}}),io=ng({multiRNNCell_:function(e,t,n,r){let a=nf(t,"data","multiRNNCell"),s=nh(n,"c","multiRNNCell"),i=nh(r,"h","multiRNNCell"),o=a,l=[];for(let t=0;t<e.length;t++){let n=e[t](o,s[t],i[t]);l.push(n[0]),l.push(n[1]),o=n[1]}let u=[],c=[];for(let e=0;e<l.length;e+=2)u.push(l[e]),c.push(l[e+1]);return[u,c]}}),il=ng({multinomial_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=!1){let a=nf(e,"logits","multinomial"),s=a.size,i=a.rank;if(s<2)throw Error(`Error in multinomial: you need at least 2 outcomes, but got ${s}.`);if(i>2)throw Error(`Rank of probabilities must be 1 or 2, but is ${i}`);n=n||Math.random();let o=1===i?aP(a,[1,-1]):a,l={numSamples:t,seed:n,normalized:r},u=nl.runKernel("Multinomial",{logits:o},l);return 1===i?aP(u,[u.size]):u}}),iu=ng({notEqual_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","notEqual","string_or_numeric"),r=nf(t,"b","notEqual","string_or_numeric");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("NotEqual",a)}}),ic=ng({oneHot_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=1,r=0,a="int32"){if(t<2)throw Error(`Error in oneHot: depth must be >=2, but it is ${t}`);let s=nf(e,"indices","oneHot","int32");return nl.runKernel("OneHot",{indices:s},{dtype:a,depth:t,onValue:n,offValue:r})}}),ip=ng({onesLike_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","onesLike");return nl.runKernel("OnesLike",{x:t})}}),id=ng({outerProduct_:function(e,t){let n=nf(e,"v1","outerProduct"),r=nf(t,"v2","outerProduct");return X(1===n.rank&&1===r.rank,()=>`Error in outerProduct: inputs must be rank 1, but got ranks ${n.rank} and ${r.rank}.`),aV(aP(n,[-1,1]),aP(r,[1,-1]))}}),ih=ng({pad_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=0){let r=nf(e,"x","pad");if(0===r.rank)throw Error("pad(scalar) is not defined. Pass non-scalar to pad");return nl.runKernel("PadV2",{x:r},{paddings:t,constantValue:n})}}),im=ng({pad1d_:function(e,t,n=0){return X(2===t.length,()=>"Invalid number of paddings. Must be length of 2."),ih(e,[t],n)}}),ig=ng({pad2d_:function(e,t,n=0){return X(2===t.length&&2===t[0].length&&2===t[1].length,()=>"Invalid number of paddings. Must be length of 2 each."),ih(e,t,n)}}),iy=ng({pad3d_:function(e,t,n=0){return X(3===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length,()=>"Invalid number of paddings. Must be length of 2 each."),ih(e,t,n)}}),ib=ng({pad4d_:function(e,t,n=0){return X(4===t.length&&2===t[0].length&&2===t[1].length&&2===t[2].length&&2===t[3].length,()=>"Invalid number of paddings. Must be length of 2 each."),ih(e,t,n)}}),iv=ng({spaceToBatchND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","spaceToBatchND");return X(r.rank>=1+t.length,()=>`input rank ${r.rank} should be > than [blockShape] ${t.length}`),X(n.length===t.length,()=>`paddings.shape[0] ${n.length} must be equal to [blockShape] ${t.length}`),X(r.shape.reduce((e,r,a)=>a>0&&a<=t.length?e&&(r+n[a-1][0]+n[a-1][1])%t[a-1]==0:e,!0),()=>`input spatial dimensions ${r.shape.slice(1)} with paddings ${n.toString()} must be divisible by blockShapes ${t.toString()}`),nl.runKernel("SpaceToBatchND",{x:r},{blockShape:t,paddings:n})}}),iw=ng({pool_:function(e,t,n,r,a,s,i){let o;null==a&&(a=[1,1]),null==s&&(s=1),0===r&&(r="valid");let l=nf(e,"x","maxPool"),u=l,c=!1;3===l.rank&&(c=!0,u=aP(l,[1,l.shape[0],l.shape[1],l.shape[2]])),X(aL(s,a),()=>`Error in pool: Either strides or dilations must be 1. Got strides ${s} and dilations '${a}'`);let p=function(e,t,n,r,a,s,i="channelsLast"){let o;let[l,u]=aC(t);if("channelsLast"===i)o=[l,u,e[3],e[3]];else if("channelsFirst"===i)o=[l,u,e[1],e[1]];else throw Error(`Unknown dataFormat ${i}`);return aO(e,o,n,r,a,void 0,!1,i)}(u.shape,t,s,a,r),d=[p.dilationHeight,p.dilationWidth];o="same"===r?function(e,t){let n=e.map((e,n)=>e+(e-1)*(t[n]-1)).map(e=>e-1),r=n.map(e=>Math.floor(e/2)),a=n.map((e,t)=>e-r[t]);return n.map((e,t)=>[r[t],a[t]])}([p.filterHeight,p.filterWidth],d):[[0,0],[0,0]];let f=1===d[0]&&1===d[1],[h,m]=function(e,t,n){let r=n.map(e=>e[0]),a=n.map(e=>e[1]),s=e.concat(r,a),i=t.map((e,t)=>(e-s[t]%e)%e),o=a.map((e,t)=>e+i[t]);return[t.map((e,t)=>[r[t],o[t]]),t.map((e,t)=>[0,i[t]])]}([p.inHeight,p.inWidth],d,o),g=f?r:"valid",y=f?u:iv(u,d,h),b=("avg"===n?()=>aB(y,t,s,g,i):()=>s6(y,t,s,g,i))(),v=f?b:aK(b,d,m);return c?aP(v,[v.shape[1],v.shape[2],v.shape[3]]):v}}),ix=ng({prelu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","prelu"),r=nf(t,"alpha","prelu");return nl.runKernel("Prelu",{x:n,alpha:r})}}),ik=ng({prod_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=null,n=!1){let r=nf(e,"x","prod");"bool"===r.dtype&&(r=rH(r,"int32"));let a={x:r};return nl.runKernel("Prod",a,{axis:t,keepDims:n})}}),iN=ng({raggedGather_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r){let a=e.map((e,t)=>nf(e,`tensors${t}`,"raggedGather","int32")),s=nf(t,"paramsDenseValues","raggedGather"),i=nf(n,"indices","raggedGather","int32"),o=nl.runKernel("RaggedGather",{paramsNestedSplits:a,paramsDenseValues:s,indices:i},{outputRaggedRank:r});return{outputNestedSplits:o.slice(0,o.length-1),outputDenseValues:o[o.length-1]}}}),iS=ng({raggedRange_:/**
 * @license
 * Copyright 2022 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"starts","raggedRange"),a=nf(t,"limits","raggedRange",r.dtype),s=nf(n,"deltas","raggedRange",r.dtype),i=nl.runKernel("RaggedRange",{starts:r,limits:a,deltas:s});return{rtNestedSplits:i[0],rtDenseValues:i[1]}}}),iE=ng({raggedTensorToTensor_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a){let s=nf(e,"shape","raggedTensorToTensor","int32"),i=nf(t,"values","raggedTensorToTensor"),o=nf(n,"defaultValue","raggedTensorToTensor",i.dtype),l=r.map((e,t)=>nf(e,`tensors${t}`,"raggedTensorToTensor","int32"));return nl.runKernel("RaggedTensorToTensor",{shape:s,values:i,defaultValue:o,rowPartitionTensors:l},{rowPartitionTypes:a})}}),iT=ng({rand_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){eC(e);let r=ee(e),a=null;if(null==n||"float32"===n)a=new Float32Array(r);else if("int32"===n)a=new Int32Array(r);else if("bool"===n)a=new Uint8Array(r);else throw Error(`Unknown data type ${n}`);for(let e=0;e<r;e++)a[e]=t();return nl.makeTensor(a,e,n)}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var i_={},iI=D("hkQHN"),iA=D("26jXS"),iM=D("4SoVI"),iO=D("4uNIP"),iC=D("iVpT1"),i$=D("i1rkf"),iD={};!function(e,t,n){var r,a="random",s=n.pow(256,6),i=n.pow(2,52),o=2*i;function l(l,f,h){var m=[],g=p(function e(t,n){var r,a=[],s=typeof t;if(n&&"object"==s)for(r in t)try{a.push(e(t[r],n-1))}catch(e){}return a.length?a:"string"==s?t:t+"\0"}((f=!0==f?{entropy:!0}:f||{}).entropy?[l,d(t)]:null==l?function(){try{var n;return r&&(n=r.randomBytes)?n=n(256):(n=new Uint8Array(256),(e.crypto||e.msCrypto).getRandomValues(n)),d(n)}catch(n){var a=e.navigator,s=a&&a.plugins;return[+new Date,e,s,e.screen,d(t)]}}():l,3),m),y=new u(m),b=function(){for(var e=y.g(6),t=s,n=0;e<i;)e=(e+n)*256,t*=256,n=y.g(1);for(;e>=o;)e/=2,t/=2,n>>>=1;return(e+n)/t};return b.int32=function(){return 0|y.g(4)},b.quick=function(){return y.g(4)/4294967296},b.double=b,p(d(y.S),t),(f.pass||h||function(e,t,r,s){return(s&&(s.S&&c(s,y),e.state=function(){return c(y,{})}),r)?(n[a]=e,t):e})(b,g,"global"in f?f.global:this==n,f.state)}function u(e){var t,n=e.length,r=this,a=0,s=r.i=r.j=0,i=r.S=[];for(n||(e=[n++]);a<256;)i[a]=a++;for(a=0;a<256;a++)i[a]=i[s=255&s+e[a%n]+(t=i[a])],i[s]=t;(r.g=function(e){for(var t,n=0,a=r.i,s=r.j,i=r.S;e--;)t=i[a=255&a+1],n=256*n+i[255&(i[a]=i[s=255&s+t])+(i[s]=t)];return r.i=a,r.j=s,n})(256)}function c(e,t){return t.i=e.i,t.j=e.j,t.S=e.S.slice(),t}function p(e,t){for(var n,r=e+"",a=0;a<r.length;)t[255&a]=255&(n^=19*t[255&a])+r.charCodeAt(a++);return d(t)}function d(e){return String.fromCharCode.apply(0,e)}if(p(n.random(),t),iD){iD=l;try{r=D("1DJXa")}catch(e){}}else"function"==typeof define&&define.amd?define(function(){return l}):n["seed"+a]=l}("undefined"!=typeof self?self:iD,[],Math),iD.alea=iI,iD.xor128=iA,iD.xorwow=iM,iD.xorshift7=iO,iD.xor4096=iC,iD.tychei=i$,i_=iD;class iR{constructor(e,t,n,r,a){this.mean=e,this.stdDev=t,this.dtype=n,this.nextVal=NaN,this.truncated=r,this.truncated&&(this.upper=this.mean+2*this.stdDev,this.lower=this.mean-2*this.stdDev);let s=a||Math.random();this.random=i_.alea(s.toString())}nextValue(){let e,t;if(!isNaN(this.nextVal)){let e=this.nextVal;return this.nextVal=NaN,e}let n=!1;for(;!n;){let r,a,s;do s=(r=2*this.random()-1)*r+(a=2*this.random()-1)*a;while(s>=1||0===s)let i=Math.sqrt(-2*Math.log(s)/s);e=this.mean+this.stdDev*r*i,t=this.mean+this.stdDev*a*i,(!this.truncated||this.isValidTruncated(e))&&(n=!0)}return(!this.truncated||this.isValidTruncated(t))&&(this.nextVal=this.convertValue(t)),this.convertValue(e)}convertValue(e){return null==this.dtype||"float32"===this.dtype?e:Math.round(e)}isValidTruncated(e){return e<=this.upper&&e>=this.lower}}class iL{constructor(e,t,n,r){this.alpha=e,this.beta=1/t,this.dtype=n;let a=r||Math.random();this.randu=i_.alea(a.toString()),this.randn=new iR(0,1,n,!1,this.randu()),e<1?this.d=e+2/3:this.d=e-1/3,this.c=1/Math.sqrt(9*this.d)}nextValue(){let e,t,n,r,a,s;for(;;){do r=this.randn.nextValue(),s=1+this.c*r;while(s<=0)if(s*=s*s,t=1-.331*(e=r*r)*e,n=.5*e+this.d*(1-s+Math.log(s)),(a=this.randu())<t||Math.log(a)<n)break}return s=1/this.beta*this.d*s,this.alpha<1&&(s*=Math.pow(this.randu(),1/this.alpha)),this.convertValue(s)}convertValue(e){return"float32"===this.dtype?e:Math.round(e)}}class iF{constructor(e=0,t=1,n,r){if(this.canReturnFloat=()=>null==this.dtype||"float32"===this.dtype,this.min=e,this.range=t-e,this.dtype=n,null==r&&(r=Math.random()),"number"==typeof r&&(r=r.toString()),!this.canReturnFloat()&&this.range<=1)throw Error(`The difference between ${e} - ${t} <= 1 and dtype is not float`);this.random=i_.alea(r)}convertValue(e){return this.canReturnFloat()?e:Math.round(e)}nextValue(){return this.convertValue(this.min+this.range*this.random())}}let iz=ng({randomGamma_:function(e,t,n=1,r="float32",a){if(eC(e),null==n&&(n=1),null==r&&(r="float32"),"float32"!==r&&"int32"!==r)throw Error(`Unsupported data type ${r}`);let s=new iL(t,n,r,a),i=rj(e,r);for(let e=0;e<i.values.length;e++)i.values[e]=s.nextValue();return i.toTensor()}}),iP=ng({randomNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0,n=1,r,a){if(eC(e),null!=r&&"bool"===r)throw Error(`Unsupported data type ${r}`);let s=new iR(t,n,r,!1,a),i=rj(e,r);for(let e=0;e<i.values.length;e++)i.values[e]=s.nextValue();return i.toTensor()}}),iB=ng({randomStandardNormal_:/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){if(null!=t&&"bool"===t)throw Error(`Unsupported data type ${t}`);return iP(e,0,1,t,n)}}),iU=ng({randomUniform_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0,n=1,r="float32",a){eC(e);let s=rj(e,r),i=new iF(t,n,null,a);for(let e=0;e<s.values.length;e++)s.values[e]=i.nextValue();return s.toTensor()}}),iV=ng({randomUniformInt_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r){return iU(e,t,n,"int32",r)}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function iW(e,t,n=1,r="float32"){if(0===n)throw Error("Cannot have a step of zero");return nl.runKernel("Range",{},{start:e,stop:t,step:n,dtype:r})}let ij=ng({real_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"input","real");return nl.runKernel("Real",{input:t})}}),iH=ng({reciprocal_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","reciprocal");return nl.runKernel("Reciprocal",{x:t})}}),iq=ng({relu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","relu");return nl.runKernel("Relu",{x:t})}}),iK=ng({relu6_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","relu6");return nl.runKernel("Relu6",{x:t})}}),iG=ng({reverse_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","reverse");return nl.runKernel("Reverse",{x:n},{dims:t})}}),iQ=ng({reverse1d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","reverse");return X(1===t.rank,()=>`Error in reverse1D: x must be rank 1 but got rank ${t.rank}.`),iG(t,0)}}),iY=ng({reverse2d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","reverse");return X(2===n.rank,()=>`Error in reverse2D: x must be rank 2 but got rank ${n.rank}.`),iG(n,t)}}),iX=ng({reverse3d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","reverse");return X(3===n.rank,()=>`Error in reverse3D: x must be rank 3 but got rank ${n.rank}.`),iG(n,t)}}),iJ=ng({reverse4d_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","reverse");return X(4===n.rank,()=>`Error in reverse4D: x must be rank 4 but got rank ${n.rank}.`),iG(n,t)}}),iZ=ng({round_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","round");return nl.runKernel("Round",{x:t})}}),i0=ng({rsqrt_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","rsqrt","float32");return nl.runKernel("Rsqrt",{x:t})}}),i1=ng({selu_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","selu");return nl.runKernel("Selu",{x:t})}}),i2=ng({separableConv2d_:function(e,t,n,r,a,s=[1,1],i="NHWC"){let o=nf(e,"x","separableConv2d"),l=nf(t,"depthwiseFilter","separableConv2d"),u=nf(n,"pointwiseFilter","separableConv2d"),c=o,p=!1;if(3===o.rank&&(p=!0,c=aP(o,[1,o.shape[0],o.shape[1],o.shape[2]])),"NCHW"===i)throw Error("separableConv2d currently does not support dataFormat NCHW; only NHWC is supported");X(4===c.rank,()=>`Error in separableConv2d: input must be rank 4, but got rank ${c.rank}.`),X(4===l.rank,()=>`Error in separableConv2d: depthwise filter must be rank 4, but got rank ${l.rank}.`),X(4===u.rank,()=>`Error in separableConv2d: pointwise filter must be rank 4, but got rank ${l.rank}.`),X(1===u.shape[0],()=>`Error in separableConv2d: the first dimension of pointwise filter  must be 1, but got ${u.shape[0]}.`),X(1===u.shape[1],()=>`Error in separableConv2d: the second dimension of pointwise filter must be 1, but got ${u.shape[1]}.`);let d=l.shape[2],f=l.shape[3];X(u.shape[2]===d*f,()=>`Error in separableConv2d: the third dimension of pointwise filter must be ${d*f}, but got ${u.shape[2]}.`);let h=a8(sc(c,l,r,a,i,s),u,1,"valid",i);return p?aP(h,[h.shape[1],h.shape[2],h.shape[3]]):h}}),i3=/**
 * @license
 * Copyright 2020 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function(e,t){let n=nf(e,"x","setdiff1d"),r=nf(t,"y","setdiff1d");X(n.dtype===r.dtype,()=>`x and y should have the same dtype, but got x (${n.dtype}) and y (${r.dtype}).`),X(1===n.rank,()=>`x should be 1D tensor, but got x (${n.shape}).`),X(1===r.rank,()=>`y should be 1D tensor, but got y (${r.shape}).`);let a=await n.data(),s=new Set(await r.data()),i=0;for(let e=0;e<a.length;e++)!s.has(a[e])&&i++;let o=new t3([i],n.dtype),l=new t3([i],"int32");for(let e=0,t=0;e<a.length;e++)!s.has(a[e])&&(o.values[t]=a[e],l.values[t]=e,t++);return[o.toTensor(),l.toTensor()]},i4=ng({sign_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","sign");return nl.runKernel("Sign",{x:t})}}),i6=ng({sin_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","sin","float32");return nl.runKernel("Sin",{x:t})}}),i5=ng({sinh_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","sinh");return nl.runKernel("Sinh",{x:t})}}),i8=ng({slice1d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","slice1d");return X(1===r.rank,()=>`slice1d expects a rank-1 tensor, but got a rank-${r.rank} tensor`),aj(r,[t],[n])}}),i7=ng({slice2d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","slice2d");return X(2===r.rank,()=>`slice2d expects a rank-2 tensor, but got a rank-${r.rank} tensor`),aj(r,t,n)}}),i9=ng({slice3d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","slice3d");return X(3===r.rank,()=>`slice3d expects a rank-3 tensor, but got a rank-${r.rank} tensor`),aj(r,t,n)}}),oe=ng({slice4d_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","slice4d");return X(4===r.rank,()=>`slice4d expects a rank-4 tensor, but got a rank-${r.rank} tensor`),aj(r,t,n)}}),ot=ng({softmax_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=-1){let n=nf(e,"logits","softmax","float32");if(-1===t&&(t=n.rank-1),t!==n.rank-1)throw Error(`Softmax along a non-last dimension is not yet supported. Logits was rank ${n.rank} and dim was ${t}`);let r={dim:t};return nl.runKernel("Softmax",{logits:n},r)}}),on=ng({fft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return X("complex64"===e.dtype,()=>`The dtype for tf.spectral.fft() must be complex64 but got ${e.dtype}.`),nl.runKernel("FFT",{input:e})}}),or=ng({ifft_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return X("complex64"===e.dtype,()=>`The dtype for tf.spectral.ifft() must be complex64 but got ${e.dtype}.`),nl.runKernel("IFFT",{input:e})}}),oa=ng({irfft_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t;let n=e.shape[e.shape.length-1],r=e.size/n;if(n<=2)t=or(aP(e,[r,n]));else{let a=[r,2*(n-1)],s=aP(ij(e),[r,n]),i=aP(sL(e),[r,n]),o=iG(aj(s,[0,1],[r,n-2]),1),l=rX(iG(aj(i,[0,1],[r,n-2]),1),r2(-1));t=or(aP(ny(am([s,o],1),am([i,l],1)),[a[0],a[1]]))}if(t=ij(t),3===e.rank&&0!==e.shape[0]){let n=t,r=e.shape[0];t=aP(t,[r,t.shape[0]/r,t.shape[1]]),n.dispose()}return t}}),os=ng({split_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=0){let r=nf(e,"x","split");return nl.runKernel("SplitV",{x:r},{numOrSizeSplits:t,axis:n})}}),oi=ng({rfft_:function(e,t){let n;X("float32"===e.dtype,()=>`The dtype for rfft() must be real value but got ${e.dtype}`);let r=e.shape[e.shape.length-1],a=e.size/r;if(null!=t&&t<r){let a=e.shape.map(e=>0),s=e.shape.map(e=>e);s[e.shape.length-1]=t,n=aj(e,a,s),r=t}else if(null!=t&&t>r){let a=e.shape.map(e=>e);a[e.shape.length-1]=t-r,n=am([e,s9(a)],e.shape.length-1),r=t}else n=e;let s=r0(n),i=on(aP(ny(n,s),[a,r])),o=Math.floor(r/2)+1,l=ij(i),u=sL(i),c=os(l,[o,r-o],l.shape.length-1),p=os(u,[o,r-o],u.shape.length-1),d=n.shape.slice();return d[n.shape.length-1]=o,aP(ny(c[0],p[0]),d)}}),oo=ng({squaredDifference_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"a","squaredDifference"),r=nf(t,"b","squaredDifference");[n,r]=nn(n,r),an(n.shape,r.shape);let a={a:n,b:r};return nl.runKernel("SquaredDifference",a,{})}}),ol=ng({squeeze_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"x","squeeze","string_or_numeric");return aP(n,ed(n.shape,t).newShape)}}),ou=ng({stack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nh(e,"tensors","stack","string_or_numeric");return X(n.length>=1,()=>"Pass at least one tensor to tf.stack"),n.length>0&&X(t<=n[0].rank,()=>"Axis must be <= rank of the tensor"),nl.runKernel("Pack",n,{axis:t})}}),oc=ng({step_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","step");return nl.runKernel("Step",{x:n},{alpha:t})}}),op=ng({stridedSlice_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a=0,s=0,i=0,o=0,l=0){let u=nf(e,"x","stridedSlice","string_or_numeric");return nl.runKernel("StridedSlice",{x:u},{begin:t,end:n,strides:r,beginMask:a,endMask:s,ellipsisMask:i,newAxisMask:o,shrinkAxisMask:l})}}),od=ng({tan_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"x","tan","float32");return nl.runKernel("Tan",{x:t})}});/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function of(e,t){Z(e);let n=np(e,t);if(1!==n.length)throw Error("tensor1d() requires values to be a flat/TypedArray");return nb(e,null,n,t)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oh(e,t,n){if(Z(e),null!=t&&2!==t.length)throw Error("tensor2d() requires shape to have two numbers");let r=np(e,n);if(2!==r.length&&1!==r.length)throw Error("tensor2d() requires values to be number[][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor2d() requires shape to be provided when `values` are a flat/TypedArray");return nb(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function om(e,t,n){if(Z(e),null!=t&&4!==t.length)throw Error("tensor4d() requires shape to have four numbers");let r=np(e,n);if(4!==r.length&&1!==r.length)throw Error("tensor4d() requires values to be number[][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor4d() requires shape to be provided when `values` are a flat array");return nb(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function og(e,t,n){if(Z(e),null!=t&&5!==t.length)throw Error("tensor5d() requires shape to have five numbers");let r=np(e,n);if(5!==r.length&&1!==r.length)throw Error("tensor5d() requires values to be number[][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor5d() requires shape to be provided when `values` are a flat array");return nb(e,t,r,n)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oy(e,t,n){if(Z(e),null!=t&&6!==t.length)throw Error("tensor6d() requires shape to have six numbers");let r=np(e,n);if(6!==r.length&&1!==r.length)throw Error("tensor6d() requires values to be number[][][][][][] or flat/TypedArray");if(1===r.length&&null==t)throw Error("tensor6d() requires shape to be provided when `values` are a flat array");return nb(e,t=t||r,r,n)}function ob(e,t,n){if(t.rank<1)throw Error(`tf.scatterND() expects the indices to be rank 1 or higher, but the rank was ${t.rank}.`);if(e.rank<1)throw Error(`tf.scatterND() expects the updates to be rank 1 or higher, but the rank was ${e.rank}.`);if("int32"!==t.dtype)throw Error(`The dtype of 'indices' should be int32, but got dtype: ${t.dtype}`);if(n.length<1)throw Error(`Output rank must be greater or equal to 1, but got shape: ${n}`);if(0===n.length){if(0===t.size)throw Error(`Indices specified for empty output. indices shape: ${t.shape}`);if(0===e.size)throw Error(`Updates specified for empty output. updates shape: ${e.shape}`)}!/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=t.rank>1?t.shape[t.rank-1]:1,a=t.rank>1?t.rank-1:1,s=`Must have updates.shape = indices.shape[:batchDim] + shape[sliceDim:], got updates.shape: ${n.shape}, indices.shape: ${t.shape}, shape: ${e}, sliceDim: ${r}, and batchDim: ${a}.`;if(n.rank<a)throw Error(s+` update.rank < ${a}. `);if(e.length<r+(n.rank-a))throw Error(s+` Output shape length < ${r+(n.rank-a)}`);if(n.rank!==a+e.length-r)throw Error(s+` update.rank != ${a+e.length-r}`);for(let e=0;e<a;++e)if(n.shape[e]!==t.shape[e])throw Error(s+` updates.shape[${e}] (${n.shape[e]}) != indices.shape[${e}] (${t.shape[e]}).`);for(let t=0;t<n.rank-a;++t)if(n.shape[t+a]!==e[t+r])throw Error(s+` updates.shape[${t+a}] (${n.shape[t+a]}) != shape[${t+a}] (${e[t+a]})`)}(n,t,e)}let ov=ng({tensorScatterUpdate_:function(e,t,n){let r=nf(e,"tensor","tensorScatterupdate"),a=nf(t,"indices","tensorScatterupdate","int32"),s=nf(n,"updates","tensorScatterupdate");if(ob(s,a,r.shape),r.dtype!==s.dtype)throw Error(`tensor and updates must have the same dtype, instead they are ${r.dtype} and ${s.dtype}.`);return nl.runKernel("TensorScatterUpdate",{tensor:r,indices:a,updates:s},{})}}),ow=ng({topk_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=1,n=!0){let r=nf(e,"x","topk");if(0===r.rank)throw Error("topk() expects the input to be of rank 1 or higher");let a=r.shape[r.shape.length-1];if(t<0)throw Error(`'k' passed to topk() must be >= 0 but got ${t}`);if(t>a)throw Error(`'k' passed to topk() must be <= the last dimension (${a}) but got ${t}`);let[s,i]=nl.runKernel("TopK",{x:r},{k:t,sorted:n});return{values:s,indices:i}}}),ox=ng({truncatedNormal_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0,n=1,r,a){if(eC(e),null!=r&&"bool"===r)throw Error("Unsupported data type $ { dtype }");let s=new iR(t,n,r,!0,a),i=rj(e,r);for(let e=0;e<i.values.length;e++)i.values[e]=s.nextValue();return i.toTensor()}}),ok=ng({unique_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","unique","string_or_numeric");X(n.rank>0,()=>"The input tensor must be at least 1D");let[r,a]=nl.runKernel("Unique",{x:n},{axis:t});return{values:r,indices:a}}}),oN=ng({unsortedSegmentSum_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","unsortedSegmentSum"),a=nf(t,"segmentIds","unsortedSegmentSum","int32");return X(ea(n),()=>"numSegments must be of dtype int"),nl.runKernel("UnsortedSegmentSum",{x:r,segmentIds:a},{numSegments:n})}}),oS=ng({unstack_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=0){let n=nf(e,"x","unstack","string_or_numeric");return X(t>=-n.shape.length&&t<n.shape.length,()=>`Axis = ${t} is not in [-${n.shape.length}, ${n.shape.length})`),nl.runKernel("Unpack",{value:n},{axis:t})}});/**
 * @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oE(e,t){return s3(e,t,"right")}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oT(e,t=!0,n,r){return nl.makeVariable(e,t,n,r)}let o_=async function(e){let t=nf(e,"condition","whereAsync","bool"),n=await t.data(),r=/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=[];for(let e=0;e<t.length;e++)t[e]&&n.push(e);let r=rj(e,"int32"),a=rj([n.length,e.length],"int32");for(let t=0;t<n.length;t++){let s=r.indexToLoc(n[t]),i=t*e.length;a.values.set(s,i)}return a.toTensor()}(t.shape,n);return e!==t&&t.dispose(),r};var oI={};r(oI,"booleanMaskAsync",()=>oA);let oA=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function(e,t,n){let r=nf(e,"tensor","boolMask"),a=nf(t,"mask","boolMask","bool"),s=null==n?0:n,i=a.rank,o=r.shape;X(i>0,()=>"mask cannot be scalar"),J(o.slice(s,s+i),a.shape,"mask's shape must match the first K dimensions of tensor's shape,");let l=1;for(let e=s;e<s+i;e++)l*=o[e];let u=aP(r,o.slice(0,s).concat([l],o.slice(s+i))),c=aP(a,[-1]),p=await o_(c),d=ol(p,[1]),f=s$(u,d,s);return e!==r&&r.dispose(),t!==a&&a.dispose(),d.dispose(),u.dispose(),c.dispose(),p.dispose(),f};var oM={};r(oM,"transpose",()=>oO);let oO=ng({transpose_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"x","transpose");if(null==t&&(t=r.shape.map((e,t)=>t).reverse()),X(r.rank===t.length,()=>`Error in transpose: rank of input ${r.rank} must match length of perm ${t}.`),t.forEach(e=>{X(e>=0&&e<r.rank,()=>`All entries in 'perm' must be between 0 and ${r.rank-1} but got ${t}`)}),r.rank<=1)return r.clone();let a={perm:t};return"complex64"===r.dtype?nk(()=>{let e=ij(r),t=sL(r);return e=nl.runKernel(e4,{x:e},a),t=nl.runKernel(e4,{x:t},a),n&&(t=sK(t)),ny(e,t)}):nl.runKernel(e4,{x:r},a)}});var oC={};r(oC,"movingAverage",()=>o$);let o$=ng({movingAverage_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a=!0){let s=nf(e,"v","movingAverage"),i=nf(t,"x","movingAverage"),o=nf(n,"decay","movingAverage");X(s.dtype===i.dtype,()=>`The dtypes of the first(${s.dtype}) and second(${i.dtype}) input must match`),X(er(s.shape,i.shape),()=>"Shape mismatch in v and x");let l=r2(1),u=ae(l,o),c=rX(ae(i,s),u);return a&&(X(null!=r,()=>"When using zeroDebias: true, step is required."),c=rY(c,ae(l,r9(o,nf(r,"step","movingAverage"))))),rG(s,c)}});var oD={};r(oD,"scatterND",()=>oR);let oR=ng({scatterND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){eC(n);let r=nf(e,"indices","scatterND","int32"),a=nf(t,"updates","scatterND");return ob(a,r,n),nl.runKernel("ScatterNd",{indices:r,updates:a},{shape:n})}});var oL={};r(oL,"sparseToDense",()=>oF);let oF=ng({sparseToDense_:function(e,t,n,r=0){eC(n);let a=nf(e,"sparseIndices","sparseToDense","int32"),s=nf(t,"sparseValues","sparseToDense","string_or_numeric"),i=nf(r,"defaultValue","sparseToDense",s.dtype);return!/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r){if("int32"!==e.dtype)throw Error(`tf.sparseToDense() expects the indices to be int32 type, but the dtype was ${e.dtype}.`);if(e.rank>2)throw Error(`sparseIndices should be a scalar, vector, or matrix, but got shape ${e.shape}.`);let a=e.rank>0?e.shape[0]:1,s=e.rank>1?e.shape[1]:1;if(n.length!==s)throw Error(`outputShape has incorrect number of elements:, ${n.length}, should be: ${s}.`);let i=t.size;if(!(0===t.rank||1===t.rank&&i===a))throw Error(`sparseValues has incorrect shape ${t.shape}, should be [] or [${a}]`);if(t.dtype!==r.dtype)throw Error("sparseValues.dtype must match defaultValues.dtype")}(a,s,n,i),nl.runKernel("SparseToDense",{sparseIndices:a,sparseValues:s,defaultValue:i},{outputShape:n})}});var oz={};r(oz,"gatherND",()=>oP);let oP=ng({gatherND_:/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(t,"indices","gatherND","int32"),r=nf(e,"x","gatherND","string_or_numeric");return nl.runKernel("GatherNd",{params:r,indices:n})}});var oB={};r(oB,"dropout",()=>oU);let oU=ng({dropout_:function(e,t,n,r){let a=nf(e,"x","dropout");if(X("float32"===a.dtype,()=>`x has to be a floating point tensor since it's going to be scaled, but got a ${a.dtype} tensor instead.`),X(t>=0&&t<1,()=>`rate must be a float in the range [0, 1), but got ${t}.`),0===t)return e instanceof t5?a.clone():a;let s=/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){if(null==t)return e.shape.slice();if(er(e.shape,t))return t;if(e.shape.length===t.length){let n=[];for(let r=0;r<e.shape.length;r++)null==t[r]&&null!=e.shape[r]?n.push(e.shape[r]):n.push(t[r]);return n}return t}(a,n),i=1-t;return rX(a,rY(sC(rG(iU(s,0,1,"float32",r),i)),i))}});var oV={};/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oW(e){return Math.floor(Math.pow(2,Math.ceil(Math.log(e)/Math.log(2))))}function oj(e,t,n){let r=1-e%2,a=new Float32Array(e);for(let s=0;s<e;++s){let i=2*Math.PI*s/(e+r-1);a[s]=t-n*Math.cos(i)}return of(a,"float32")}r(oV,"enclosingPowerOfTwo",()=>oW),r(oV,"cosineWindow",()=>oj);var oH={};r(oH,"inTopKAsync",()=>oq);let oq=/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function(e,t,n=1){let r=nf(e,"predictions","inTopK"),a=nf(t,"targets","inTopK");X(r.rank>1,()=>`inTopK() expects the predictions to be of rank 2 or higher, but got ${r.rank}`),X(r.rank-1===a.rank,()=>`predictions rank should be 1 larger than targets rank, but got predictions rank ${r.rank} and targets rank ${a.rank}`),J(r.shape.slice(0,r.shape.length-1),a.shape,"predictions's shape should be align with the targets' shape, except the last dimension.");let s=r.shape[r.shape.length-1];X(n>0&&n<=s,()=>`'k' passed to inTopK() must be > 0 && <= the predictions last dimension (${s}), but got ${n}`);let i=await r.data(),o=await a.data(),[l,u]=[i.length/s,s],c=eh("bool",l);for(let e=0;e<l;e++){let t=e*u,r=i.subarray(t,t+u),a=[];for(let e=0;e<r.length;e++)a.push({value:r[e],index:e});a.sort((e,t)=>t.value-e.value),c[e]=0;for(let t=0;t<n;t++)if(a[t].index===o[e]){c[e]=1;break}}return e!==r&&r.dispose(),t!==a&&a.dispose(),nv(c,a.shape,"bool")};var oK={};r(oK,"conv2d",()=>oZ),r(oK,"depthwiseConv2d",()=>o2),r(oK,"matMul",()=>o3);let oG=ng({conv2DBackpropFilter_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s="NHWC",i){let o=e;3===e.rank&&(o=aP(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l=t;3===l.rank&&(l=aP(t,[1,t.shape[0],t.shape[1],t.shape[2]])),X(4===o.rank,()=>`Error in conv2dDerFilter: input must be rank 4, but got shape ${o.shape}.`),X(4===l.rank,()=>`Error in conv2dDerFilter: dy must be rank 4, but got shape ${l.shape}.`),X(4===n.length,()=>`Error in conv2dDerFilter: filterShape must be length 4, but got ${n}.`);let u="NHWC"===s?o.shape[3]:o.shape[1],c="NHWC"===s?l.shape[3]:l.shape[1];X(u===n[2],()=>`Error in conv2dDerFilter: depth of input ${u}) must match input depth in filter (${n[2]}.`),X(c===n[3],()=>`Error in conv2dDerFilter: depth of dy (${c}) must match output depth for filter (${n[3]}).`),az("conv2dDerFilter",a,i);let p={x:o,dy:l};return nl.runKernel("Conv2DBackpropFilter",p,{strides:r,pad:a,dataFormat:s,dimRoundingMode:i,filterShape:n})}});/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function oQ(e,t,n){if(null==n||"linear"===n)return e;if("relu"===n)return rX(e,oc(t));throw Error(`Cannot compute gradient for fused activation ${n}.`)}function oY(e,t){let n=t,r=function(e,t){let n=[];for(let r=0;r<t.length;r++){let a=e[e.length-r-1],s=t.length-r-1,i=t[s];(null==a||1===a&&i>1)&&n.unshift(s)}return n}(e.shape,t.shape);return r.length>0&&(n=sE(n,r)),aP(n,e.shape)}function oX(e,t,n,r){if("linear"===t)return e;if("relu"===t)return iq(e);if("elu"===t)return sb(e);if("relu6"===t)return iK(e);if("prelu"===t)return ix(e,n);if("leakyrelu"===t)return sB(e,r);if("sigmoid"===t)return aW(e);throw Error(`Unknown fused activation ${t}.`)}let oJ=(e,t)=>!(e>0)||"linear"===t,oZ=ng({fusedConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:o,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){let p,d;if(l=l||"linear",!1===oJ(nl.state.gradientDepth,l)){X("NHWC"===a,()=>`Error in fused conv2d: got dataFormat of ${a} but only NHWC is currently supported for the case of gradient depth is 0 and the activation is not linear.`);let p=a8(e,t,n,r,a,s,i);return null!=o&&(p=rG(p,o)),oX(p,l,u,c)}let f=nf(e,"x","conv2d","float32"),h=nf(t,"filter","conv2d","float32"),m=f,g=!1;3===f.rank&&(g=!0,m=aP(f,[1,f.shape[0],f.shape[1],f.shape[2]])),X(4===m.rank,()=>`Error in fused conv2d: input must be rank 4, but got rank ${m.rank}.`),X(4===h.rank,()=>`Error in fused conv2d: filter must be rank 4, but got rank ${h.rank}.`),az("fused conv2d",r,i);let y="NHWC"===a?m.shape[3]:m.shape[1];X(h.shape[2]===y,()=>`Error in conv2d: depth of input (${y}) must match input depth for filter ${h.shape[2]}.`),X(aL(n,s),()=>`Error in conv2D: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`);let b=aO(m.shape,h.shape,n,s,r,i);if(null!=o&&(p=nf(o,"bias","fused conv2d"),[p]=nn(p,f),"NHWC"===a?an(b.outShape,p.shape):(X(p.shape.length<=1,()=>`Error in fused conv2d: only supports scalar or 1-D Tensor bias for NCHW format but got the bias of rank-${p.shape.length}.`),X(0===p.shape.length||p.shape[0]===b.outChannels||1===p.shape[0],()=>`Error in fused conv2d: bias shape (${p.shape}) is not compatible with the number of output channels (${b.outChannels})`))),null!=u){let e=u.shape;if(X(e.length<=1||3===e.length,()=>`Error in fused conv2d: only supports scalar, 1-D Tensor or 3-D Tensor PReLU activation weights but got a tensor of rank-${e.length}.`),1===e.length)X(1===e[0]||e[0]===b.outChannels,()=>`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the number of output channels (${b.outChannels}).`);else if(3===e.length)try{an(e,b.outShape)}catch(t){throw Error(`Error in fused conv2d: PReLU activation weights (${e}) is not compatible with the output shape of the conv2d (${b.outShape}).`)}d=nf(u,"prelu weights","fused conv2d")}let v=(e,t)=>{X("NHWC"===a,()=>`Error in gradient of fused conv2D: got dataFormat of ${a} but only NHWC is currently supported.`);let[i,o,u,c]=t,p=oQ(e,u,l);X(aR(s),()=>`Error in gradient of fused conv2D: dilation rates greater than 1 are not yet supported in gradients. Got dilations '${s}'`);let d=[a9(o.shape,p,i,n,r),oG(o,p,i.shape,n,r)];if(null!=c){let e=oY(c,p);d.push(e)}return d},w={x:m,filter:h,bias:p,preluActivationWeights:d},x={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return null==o?r1((e,t,n)=>{let r=nl.runKernel(e8,w,x);return n([t,e,r]),g&&(r=aP(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:v}})(m,h):r1((e,t,n,r)=>{let a=nl.runKernel(e8,w,x);return r([t,e,a,n]),g&&(a=aP(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:v}})(m,h,p)}}),o0=ng({depthwiseConv2dNativeBackpropFilter_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s=[1,1],i){let o=e;3===e.rank&&(o=aP(e,[1,e.shape[0],e.shape[1],e.shape[2]]));let l=t;3===l.rank&&(l=aP(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u={x:o,dy:l};return nl.runKernel("DepthwiseConv2dNativeBackpropFilter",u,{strides:r,pad:a,dimRoundingMode:i,dilations:s,filterShape:n})}}),o1=ng({depthwiseConv2dNativeBackpropInput_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s=[1,1],i){let o=t,l=!1;3===t.rank&&(l=!0,o=aP(t,[1,t.shape[0],t.shape[1],t.shape[2]]));let u={dy:o,filter:n},c=nl.runKernel("DepthwiseConv2dNativeBackpropInput",u,{strides:r,pad:a,dimRoundingMode:i,dilations:s,inputShape:e});return l?aP(c,[c.shape[1],c.shape[2],c.shape[3]]):c}}),o2=ng({fusedDepthwiseConv2d_:function({x:e,filter:t,strides:n,pad:r,dataFormat:a="NHWC",dilations:s=[1,1],dimRoundingMode:i,bias:o,activation:l="linear",preluActivationWeights:u,leakyreluAlpha:c}){let p,d;if(!1===oJ(nl.state.gradientDepth,l)){let p=sc(e,t,n,r,a,s,i);return null!=o&&(p=rG(p,o)),oX(p,l,u,c)}let f=nf(e,"x","depthwiseConv2d","float32"),h=nf(t,"filter","depthwiseConv2d","float32"),m=f,g=!1;3===f.rank&&(g=!0,m=aP(f,[1,f.shape[0],f.shape[1],f.shape[2]])),X(4===m.rank,()=>`Error in fused depthwiseConv2d: input must be rank 4, but got rank ${m.rank}.`),X(4===h.rank,()=>`Error in fused depthwiseConv2d: filter must be rank 4, but got rank ${h.rank}.`),X(m.shape[3]===h.shape[2],()=>`Error in fused depthwiseConv2d: number of input channels (${m.shape[3]}) must match the inChannels dimension in filter ${h.shape[2]}.`),null==s&&(s=[1,1]),X(aL(n,s),()=>`Error in fused depthwiseConv2d: Either strides or dilations must be 1. Got strides ${n} and dilations '${s}'`),az("fused depthwiseConv2d",r,i);let y=aO(m.shape,h.shape,n,s,r,i,!0);null!=o&&(p=nf(o,"bias","fused conv2d"),[p]=nn(p,f),an(y.outShape,p.shape)),null!=u&&(d=nf(u,"prelu weights","fused depthwiseConv2d"));let b=(e,t)=>{X(aR(s),()=>`Error in gradient of fused depthwiseConv2d: dilation rates greater than 1 are not yet supported. Got dilations '${s}'`);let[a,o,u,c]=t,d=oQ(e,u,l),f=o1(o.shape,d,a,n,r,s,i),h=o0(o,d,a.shape,n,r,s,i);return null!=c?[f,h,oY(p,d)]:[f,h]},v={x:m,filter:h,bias:p,preluActivationWeights:d},w={strides:n,pad:r,dataFormat:a,dilations:s,dimRoundingMode:i,activation:l,leakyreluAlpha:c};return null==o?r1((e,t,n)=>{let r=nl.runKernel(e7,v,w);return n([t,e,r]),g&&(r=aP(r,[r.shape[1],r.shape[2],r.shape[3]])),{value:r,gradFunc:b}})(m,h):r1((e,t,n,r)=>{let a=nl.runKernel(e7,v,w);return r([t,e,a,n]),g&&(a=aP(a,[a.shape[1],a.shape[2],a.shape[3]])),{value:a,gradFunc:b}})(m,h,p)}}),o3=ng({fusedMatMul_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function({a:e,b:t,transposeA:n=!1,transposeB:r=!1,bias:a,activation:s="linear",preluActivationWeights:i,leakyreluAlpha:o=.2}){let l,u;if(!1===oJ(nl.state.gradientDepth,s)){let l=aV(e,t,n,r);return null!=a&&(l=rG(l,a)),oX(l,s,i,o)}let c=nf(e,"a","fused matMul"),p=nf(t,"b","fused matMul");[c,p]=nn(c,p);let d=n?c.shape[c.rank-2]:c.shape[c.rank-1],f=r?p.shape[p.rank-1]:p.shape[p.rank-2],h=n?c.shape[c.rank-1]:c.shape[c.rank-2],m=r?p.shape[p.rank-2]:p.shape[p.rank-1],g=c.shape.slice(0,-2),y=p.shape.slice(0,-2),b=ee(g),v=ee(y);X(d===f,()=>`Error in fused matMul: inner shapes (${d}) and (${f}) of Tensors with shapes ${c.shape} and ${p.shape} and transposeA=${n} and transposeB=${r} must match.`);let w=an(c.shape.slice(0,-2),p.shape.slice(0,-2)).concat([h,m]),x=n?aP(c,[b,d,h]):aP(c,[b,h,d]),k=r?aP(p,[v,m,f]):aP(p,[v,f,m]);null!=a&&(l=nf(a,"bias","fused matMul"),[l]=nn(l,c),an(w,l.shape)),null!=i&&(u=nf(i,"prelu weights","fused matMul"));let N=(e,t)=>{let i,o;let[l,u,c,p]=t,d=oQ(aP(e,c.shape),c,s);return(n||r?!n&&r?(i=aV(d,u,!1,!1),o=aV(d,l,!0,!1)):n&&!r?(i=aV(u,d,!1,!0),o=aV(l,d,!1,!1)):(i=aV(u,d,!0,!0),o=aV(d,l,!0,!0)):(i=aV(d,u,!1,!0),o=aV(l,d,!0,!1)),null!=a)?[i,o,oY(p,d)]:[i,o]},S={a:x,b:k,bias:l,preluActivationWeights:u},E={transposeA:n,transposeB:r,activation:s,leakyreluAlpha:o};return null==a?r1((e,t,n)=>{let r=nl.runKernel(e5,S,E);return n([e,t,r]),{value:aP(r,w),gradFunc:N}})(x,k):r1((e,t,n,r)=>{let a=nl.runKernel(e5,S,E);return r([e,t,a,n]),{value:aP(a,w),gradFunc:N}})(x,k,l)}}),o4=ng({hammingWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return oj(e,.54,.46)}}),o6=ng({hannWindow_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){return oj(e,.5,.5)}}),o5=ng({frame_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=!1,a=0){let s=0,i=[];for(;s+t<=e.size;)i.push(aj(e,s,t)),s+=n;if(r)for(;s<e.size;){let r=s+t-e.size,o=am([aj(e,s,t-r),r7([r],a)]);i.push(o),s+=n}return 0===i.length?oh([],[0,t]):aP(am(i),[i.length,t])}}),o8=ng({stft_:/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a=o6){return null==r&&(r=oW(t)),oi(rX(o5(e,t,n),a(t)),r)}}),o7=ng({cropAndResize_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a="bilinear",s=0){let i=nf(e,"image","cropAndResize"),o=nf(t,"boxes","cropAndResize","float32"),l=nf(n,"boxInd","cropAndResize","int32"),u=o.shape[0];return X(4===i.rank,()=>`Error in cropAndResize: image must be rank 4,but got rank ${i.rank}.`),X(2===o.rank&&4===o.shape[1],()=>`Error in cropAndResize: boxes must be have size [${u},4] but had shape ${o.shape}.`),X(1===l.rank&&l.shape[0]===u,()=>`Error in cropAndResize: boxInd must be have size [${u}] but had shape ${o.shape}.`),X(2===r.length,()=>`Error in cropAndResize: cropSize must be of length 2, but got length ${r.length}.`),X(r[0]>=1&&r[1]>=1,()=>`cropSize must be atleast [1,1], but was ${r}`),X("bilinear"===a||"nearest"===a,()=>`method must be bilinear or nearest, but was ${a}`),nl.runKernel("CropAndResize",{image:i,boxes:o,boxInd:l},{method:a,extrapolationValue:s,cropSize:r})}}),o9=ng({flipLeftRight_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"image","flipLeftRight","float32");return X(4===t.rank,()=>`Error in flipLeftRight: image must be rank 4,but got rank ${t.rank}.`),nl.runKernel("FlipLeftRight",{image:t},{})}}),le=ng({grayscaleToRGB_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t=nf(e,"image","grayscaleToRGB"),n=t.rank-1,r=t.shape[n];X(t.rank>=2,()=>`Error in grayscaleToRGB: images must be at least rank 2, but got rank ${t.rank}.`),X(1===r,()=>`Error in grayscaleToRGB: last dimension of a grayscale image should be size 1, but got size ${r}.`);let a=Array(t.rank);return a.fill(1,0,n),a[n]=3,sM(t,a)}}),lt=ng({rgbToGrayscale_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t;let n=nf(e,"image","RGBToGrayscale"),r=n.rank-1,a=n.shape[r];X(n.rank>=2,()=>`Error in RGBToGrayscale: images must be at least rank 2, but got rank ${n.rank}.`),X(3===a,()=>`Error in RGBToGrayscale: last dimension of an RGB image should be size 3, but got size ${a}.`);let s=n.dtype,i=rH(n,"float32"),o=of([.2989,.587,.114]);switch(n.rank){case 2:t=sy("ij,j->i",i,o);break;case 3:t=sy("ijk,k->ij",i,o);break;case 4:t=sy("ijkl,l->ijk",i,o);break;case 5:t=sy("ijklm,m->ijkl",i,o);break;case 6:t=sy("ijklmn,n->ijklm",i,o);break;default:throw Error("Not a valid tensor rank.")}return rH(t=ay(t,-1),s)}}),ln=ng({rotateWithOffset_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=0,r=.5){let a=nf(e,"image","rotateWithOffset","float32");return X(4===a.rank,()=>`Error in rotateWithOffset: image must be rank 4,but got rank ${a.rank}.`),nl.runKernel("RotateWithOffset",{image:a},{radians:t,fillValue:n,center:r})}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lr(e,t,n,r,a,s){null==r&&(r=.5),null==a&&(a=Number.NEGATIVE_INFINITY),null==s&&(s=0);let i=e.shape[0];return n=Math.min(n,i),X(0<=r&&r<=1,()=>`iouThreshold must be in [0, 1], but was '${r}'`),X(2===e.rank,()=>`boxes must be a 2D tensor, but was of rank '${e.rank}'`),X(4===e.shape[1],()=>`boxes must have 4 columns, but 2nd dimension was ${e.shape[1]}`),X(1===t.rank,()=>"scores must be a 1D tensor"),X(t.shape[0]===i,()=>`scores has incompatible shape with boxes. Expected ${i}, but was ${t.shape[0]}`),X(0<=s&&s<=1,()=>`softNmsSigma must be in [0, 1], but was '${s}'`),{maxOutputSize:n,iouThreshold:r,scoreThreshold:a,softNmsSigma:s}}let la=ng({nonMaxSuppression_:function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let s=nf(e,"boxes","nonMaxSuppression","float32"),i=nf(t,"scores","nonMaxSuppression","float32"),o=lr(s,i,n,r,a),l={maxOutputSize:n=o.maxOutputSize,iouThreshold:r=o.iouThreshold,scoreThreshold:a=o.scoreThreshold};return nl.runKernel("NonMaxSuppressionV3",{boxes:s,scores:i},l)}});function ls(e,t){return e>t?1:e<t?-1:0}function li(e,t,n,r,a,s,i=!1,o=!1,l=!1){let u=[];for(let e=0;e<t.length;e++)t[e]>a&&u.push({score:t[e],boxIndex:e,suppressBeginIndex:0});u.sort(lo);let c=s>0?-.5/s:0,p=[],d=[];for(;p.length<n&&u.length>0;){let t=u.pop(),{score:n,boxIndex:s,suppressBeginIndex:i}=t;if(n<a)break;let o=!1;for(let n=p.length-1;n>=i;--n){let i=function(e,t,n){let r=e.subarray(4*t,4*t+4),a=e.subarray(4*n,4*n+4),s=Math.min(r[0],r[2]),i=Math.min(r[1],r[3]),o=Math.max(r[0],r[2]),l=Math.max(r[1],r[3]),u=Math.min(a[0],a[2]),c=Math.min(a[1],a[3]),p=Math.max(a[0],a[2]),d=Math.max(a[1],a[3]),f=(o-s)*(l-i),h=(p-u)*(d-c);if(f<=0||h<=0)return 0;let m=Math.max(Math.min(o,p)-Math.max(s,u),0)*Math.max(Math.min(l,d)-Math.max(i,c),0);return m/(f+h-m)}(e,s,p[n]);if(i>=r){o=!0;break}if(t.score=t.score*function(e,t,n){let r=Math.exp(t*n*n);return n<=e?r:0}(r,c,i),t.score<=a)break}t.suppressBeginIndex=p.length,!o&&(t.score===n?(p.push(s),d.push(t.score)):t.score>a&&/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=function(e,t,n){let r=0,a=e.length,s=0,i=!1;for(;r<a;){let o=n(t,e[s=r+(a-r>>>1)]);o>0?r=s+1:(a=s,i=!o)}return i?r:-r-1}(e,t,n||ls);e.splice(r<0?-(r+1):r,0,t)}(u,t,lo))}let f=p.length,h=n-f;o&&h>0&&(p.push(...Array(h).fill(0)),d.push(...Array(h).fill(0)));let m={selectedIndices:p};return i&&(m.selectedScores=d),l&&(m.validOutputs=f),m}function lo(e,t){return e.score-t.score||e.score===t.score&&t.boxIndex-e.boxIndex}async function ll(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY){let s=nf(e,"boxes","nonMaxSuppressionAsync"),i=nf(t,"scores","nonMaxSuppressionAsync"),o=lr(s,i,n,r,a);n=o.maxOutputSize,r=o.iouThreshold,a=o.scoreThreshold;let l=await Promise.all([s.data(),i.data()]),{selectedIndices:u}=li(l[0],l[1],n,r,a,0);return s!==e&&s.dispose(),i!==t&&i.dispose(),of(u,"int32")}let lu=ng({nonMaxSuppressionWithScore_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){let i=nf(e,"boxes","nonMaxSuppression"),o=nf(t,"scores","nonMaxSuppression"),l=lr(i,o,n,r,a,s);n=l.maxOutputSize,r=l.iouThreshold;let u={maxOutputSize:n,iouThreshold:r,scoreThreshold:a=l.scoreThreshold,softNmsSigma:s=l.softNmsSigma},c=nl.runKernel("NonMaxSuppressionV5",{boxes:i,scores:o},u);return{selectedIndices:c[0],selectedScores:c[1]}}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function lc(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=0){let i=nf(e,"boxes","nonMaxSuppressionAsync"),o=nf(t,"scores","nonMaxSuppressionAsync"),l=lr(i,o,n,r,a,s);n=l.maxOutputSize,r=l.iouThreshold,a=l.scoreThreshold,s=l.softNmsSigma;let u=await Promise.all([i.data(),o.data()]),{selectedIndices:c,selectedScores:p}=li(u[0],u[1],n,r,a,s,!0);return i!==e&&i.dispose(),o!==t&&o.dispose(),{selectedIndices:of(c,"int32"),selectedScores:of(p)}}let lp=ng({nonMaxSuppressionPadded_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){let i=nf(e,"boxes","nonMaxSuppression"),o=nf(t,"scores","nonMaxSuppression"),l=lr(i,o,n,r,a,null),u=l.maxOutputSize,c=l.iouThreshold,p=l.scoreThreshold,d=nl.runKernel("NonMaxSuppressionV4",{boxes:i,scores:o},{maxOutputSize:u,iouThreshold:c,scoreThreshold:p,padToMaxOutputSize:s});return{selectedIndices:d[0],validOutputs:d[1]}}});/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */async function ld(e,t,n,r=.5,a=Number.NEGATIVE_INFINITY,s=!1){let i=nf(e,"boxes","nonMaxSuppressionAsync"),o=nf(t,"scores","nonMaxSuppressionAsync"),l=lr(i,o,n,r,a,null),u=l.maxOutputSize,c=l.iouThreshold,p=l.scoreThreshold,[d,f]=await Promise.all([i.data(),o.data()]),{selectedIndices:h,validOutputs:m}=li(d,f,u,c,p,0,!1,s,!0);return i!==e&&i.dispose(),o!==t&&o.dispose(),{selectedIndices:of(h,"int32"),validOutputs:r2(m,"int32")}}let lf=ng({resizeBilinear_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=!1,r=!1){let a=nf(e,"images","resizeBilinear");X(3===a.rank||4===a.rank,()=>`Error in resizeBilinear: x must be rank 3 or 4, but got rank ${a.rank}.`),X(2===t.length,()=>`Error in resizeBilinear: new shape must 2D, but got shape ${t}.`),X(!1===r||!1===n,()=>"Error in resizeBilinear: If halfPixelCenters is true, alignCorners must be false.");let s=a,i=!1;3===a.rank&&(i=!0,s=aP(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let[]=t,o={images:s},l=nl.runKernel("ResizeBilinear",o,{alignCorners:n,halfPixelCenters:r,size:t});return i?aP(l,[l.shape[1],l.shape[2],l.shape[3]]):l}}),lh=ng({resizeNearestNeighbor_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=!1,r=!1){let a=nf(e,"images","resizeNearestNeighbor");X(3===a.rank||4===a.rank,()=>`Error in resizeNearestNeighbor: x must be rank 3 or 4, but got rank ${a.rank}.`),X(2===t.length,()=>`Error in resizeNearestNeighbor: new shape must 2D, but got shape ${t}.`),X("float32"===a.dtype||"int32"===a.dtype,()=>"`images` must have `int32` or `float32` as dtype"),X(!1===r||!1===n,()=>"Error in resizeNearestNeighbor: If halfPixelCenters is true, alignCorners must be false.");let s=a,i=!1;3===a.rank&&(i=!0,s=aP(a,[1,a.shape[0],a.shape[1],a.shape[2]]));let[]=t,o={images:s},l=nl.runKernel("ResizeNearestNeighbor",o,{alignCorners:n,halfPixelCenters:r,size:t});return i?aP(l,[l.shape[1],l.shape[2],l.shape[3]]):l}}),lm=ng({threshold_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t="binary",n=!1,r=.5){let a,s,i,o;let l=nf(e,"image","threshold"),u=l.shape[0]*l.shape[1],c=rX(of([r]),255);if(X(3===l.rank,()=>`Error in threshold: image must be rank 3,but got rank ${l.rank}.`),X(3===l.shape[2]||1===l.shape[2],()=>`Error in threshold: image color channel must be equal to 3 or 1but got ${l.shape[2]}.`),X("int32"===l.dtype||"float32"===l.dtype,()=>`Error in dtype: image dtype must be int32 or float32,but got dtype ${l.dtype}.`),X("otsu"===t||"binary"===t,()=>`Method must be binary or otsu, but was ${t}`),3===l.shape[2]){[a,s,i]=os(l,[1,1,1],-1);let e=rX(a,.2989),t=rX(s,.587),n=rX(i,.114);o=rG(rG(e,t),n)}else o=e;return"otsu"===t&&(c=function(e,t){let n,r,a,s,i,o,l=of([-1]),u=of([0]),c=of([0]);for(let p=0;p<e.size-1;p++){n=aj(e,0,p+1),r=aj(e,p+1),i=rY(sE(n),t),o=rY(sE(r),t),a=rY(sE(rX(n,iW(0,n.size))),sE(n));let d=r7(r.shape,n.size),f=rG(iW(0,r.size),d),h=ae(a,s=rY(sE(rX(r,f)),sE(r))),m=ae(a,s),g=rX(i,o),y=sD(c=rX(rX(g,h),m),u);u=sh(y,c,u),l=sh(y,of([p]),l)}return l}(aJ(rH(iZ(o),"int32"),nv([]),256),u)),rH(rX(n?sV(o,c):sD(o,c),255),"int32")}}),lg=ng({transform_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n="nearest",r="constant",a=0,s){let i=nf(e,"image","transform","float32"),o=nf(t,"transforms","transform","float32");return X(4===i.rank,()=>`Error in transform: image must be rank 4,but got rank ${i.rank}.`),X(2===o.rank&&(o.shape[0]===i.shape[0]||1===o.shape[0])&&8===o.shape[1],()=>"Error in transform: Input transform should be batch x 8 or 1 x 8"),X(null==s||2===s.length,()=>`Error in transform: outputShape must be [height, width] or null, but got ${s}.`),nl.runKernel("Transform",{image:i,transforms:o},{interpolation:n,fillMode:r,fillValue:a,outputShape:s})}}),ly=ng({bandPart_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r,a;let s=nf(e,"a","bandPart");X(s.rank>=2,()=>`bandPart(): Rank must be at least 2, got ${s.rank}.`);let i=s.shape,[o,l]=s.shape.slice(-2);"number"==typeof t?(X(t%1==0,()=>`bandPart(): numLower must be an integer, got ${t}.`),X(t<=o,()=>`bandPart(): numLower (${t}) must not be greater than the number of rows (${o}).`),r=nf(t<0?o:t,"numLower","bandPart")):(X("int32"===t.dtype,()=>"bandPart(): numLower's dtype must be an int32."),r=sh(sU(t,0),o,ir(t,o))),"number"==typeof n?(X(n%1==0,()=>`bandPart(): numUpper must be an integer, got ${n}.`),X(n<=l,()=>`bandPart(): numUpper (${n}) must not be greater than the number of columns (${l}).`),a=nf(n<0?l:n,"numUpper","bandPart")):(X("int32"===n.dtype,()=>"bandPart(): numUpper's dtype must be an int32."),a=sh(sU(n,0),l,ir(n,l)));let u=ae(aP(iW(0,o,1,"int32"),[-1,1]),iW(0,l,1,"int32")),c=sJ(sV(u,r),sR(u,sK(a))),p=s9([o,l],s.dtype);return aP(ou(oS(aP(s,[-1,o,l])).map(e=>sh(c,e,p))),i)}}),lb=ng({gramSchmidt_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e){let t;if(Array.isArray(e)){t=!1,X(null!=e&&e.length>0,()=>"Gram-Schmidt process: input must not be null, undefined, or empty");let n=e[0].shape[0];for(let t=1;t<e.length;++t)X(e[t].shape[0]===n,()=>`Gram-Schmidt: Non-unique lengths found in the input vectors: (${e[t].shape[0]} vs. ${n})`)}else t=!0,e=os(e,e.shape[0],0).map(e=>ol(e,[0]));X(e.length<=e[0].shape[0],()=>`Gram-Schmidt: Number of vectors (${e.length}) exceeds number of dimensions (${e[0].shape[0]}).`);let n=[],r=e;for(let t=0;t<e.length;++t)n.push(nl.tidy(()=>{let e=r[t];if(t>0)for(let r=0;r<t;++r){let t=rX(sE(rX(n[r],e)),n[r]);e=ae(e,t)}return rY(e,sT(e,"euclidean"))}));return t?ou(n,0):n}});function lv(e,t=!1){return nl.tidy(()=>{X(2===e.shape.length,()=>`qr2d() requires a 2D Tensor, but got a ${e.shape.length}D Tensor.`);let n=e.shape[0],r=e.shape[1],a=sO(n),s=rq(e),i=oh([[1]],[1,1]),o=rq(i),l=n>=r?r:n;for(let e=0;e<l;++e){let t=s,l=o,u=a;[o,s,a]=nl.tidy(()=>{let t=aj(s,[e,e],[n-e,1]),l=sT(t),u=aj(s,[e,e],[1,1]),c=sh(sD(u,0),oh([[-1]]),oh([[1]])),p=ae(u,rX(c,l)),d=rY(t,p);o=1===d.shape[0]?rq(i):am([i,aj(d,[1,0],[d.shape[0]-1,d.shape[1]])],0);let f=sK(rY(aV(c,p),l)),h=aj(s,[e,0],[n-e,r]),m=rX(f,o),g=oO(o);if(0===e)s=ae(h,aV(m,aV(g,h)));else{let t=ae(h,aV(m,aV(g,h)));s=am([aj(s,[0,0],[e,r]),t],0)}let y=oO(m),b=aj(a,[0,e],[n,a.shape[1]-e]);if(0===e)a=ae(b,aV(aV(b,o),y));else{let t=ae(b,aV(aV(b,o),y));a=am([aj(a,[0,0],[n,e]),t],1)}return[o,s,a]}),nN([t,l,u])}return!t&&n>r&&(a=aj(a,[0,0],[n,r]),s=aj(s,[0,0],[r,r])),[a,s]})}let lw=ng({qr_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t=!1){if(X(e.rank>=2,()=>`qr() requires input tensor to have a rank >= 2, but got rank ${e.rank}`),2===e.rank)return lv(e,t);{let n=e.shape.slice(0,e.shape.length-2).reduce((e,t)=>e*t),r=oS(aP(e,[n,e.shape[e.shape.length-2],e.shape[e.shape.length-1]]),0),a=[],s=[];return r.forEach(e=>{let[n,r]=lv(e,t);a.push(n),s.push(r)}),[aP(ou(a,0),e.shape),aP(ou(s,0),e.shape)]}}});(u=_||(_={}))[u.NONE=0]="NONE",u[u.MEAN=1]="MEAN",u[u.SUM=2]="SUM",u[u.SUM_BY_NONZERO_WEIGHTS=3]="SUM_BY_NONZERO_WEIGHTS";let lx=ng({computeWeightedLoss_:function(e,t,n=_.SUM_BY_NONZERO_WEIGHTS){let r=nf(e,"losses","computeWeightedLoss"),a=null;null!=t&&(a=nf(t,"weights","computeWeightedLoss"));let s=null==a?r:rX(r,a);if(n===_.NONE)return s;if(n===_.SUM)return sE(s);if(n===_.MEAN){if(null==a)return s7(s);{let e=r.size/a.size,t=rY(sE(s),sE(a));return e>1?rY(t,r2(e)):t}}if(n===_.SUM_BY_NONZERO_WEIGHTS){if(null==a)return rY(sE(s),r2(r.size));{let e=rH(sE(iu(rX(a,ie(r.shape)),r2(0))),"float32");return rY(sE(s),e)}}throw Error(`Unknown reduction: ${n}`)}}),lk=ng({absoluteDifference_:function(e,t,n,r=_.SUM_BY_NONZERO_WEIGHTS){let a=nf(e,"labels","absoluteDifference"),s=nf(t,"predictions","absoluteDifference"),i=null;return null!=n&&(i=nf(n,"weights","absoluteDifference")),J(a.shape,s.shape,"Error in absoluteDifference: "),lx(at(ae(a,s)),i,r)}}),lN=ng({cosineDistance_:function(e,t,n,r,a=_.SUM_BY_NONZERO_WEIGHTS){let s=nf(e,"labels","cosineDistance"),i=nf(t,"predictions","cosineDistance"),o=null;return null!=r&&(o=nf(r,"weights","cosineDistance")),J(s.shape,i.shape,"Error in cosineDistance: "),lx(ae(r2(1),sE(rX(s,i),n,!0)),o,a)}}),lS=ng({hingeLoss_:function(e,t,n,r=_.SUM_BY_NONZERO_WEIGHTS){let a=nf(e,"labels","hingeLoss"),s=nf(t,"predictions","hingeLoss"),i=null;null!=n&&(i=nf(n,"weights","hingeLoss")),J(a.shape,s.shape,"Error in hingeLoss: ");let o=r2(1);return a=ae(rX(r2(2),a),o),lx(iq(ae(o,rX(a,s))),i,r)}}),lE=ng({huberLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=1,a=_.SUM_BY_NONZERO_WEIGHTS){let s=nf(e,"labels","huberLoss"),i=nf(t,"predictions","huberLoss"),o=null;null!=n&&(o=nf(n,"weights","huberLoss")),J(s.shape,i.shape,"Error in huberLoss: ");let l=r2(r),u=at(ae(i,s)),c=ir(u,l),p=ae(u,c);return lx(rG(rX(r2(.5),rZ(c)),rX(l,p)),o,a)}}),lT=ng({logLoss_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=1e-7,a=_.SUM_BY_NONZERO_WEIGHTS){let s=nf(e,"labels","logLoss"),i=nf(t,"predictions","logLoss"),o=null;null!=n&&(o=nf(n,"weights","logLoss")),J(s.shape,i.shape,"Error in logLoss: ");let l=r2(1),u=r2(r),c=sK(rX(s,sH(rG(i,u)))),p=rX(ae(l,s),sH(rG(ae(l,i),u)));return lx(ae(c,p),o,a)}}),l_=ng({meanSquaredError_:/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=_.SUM_BY_NONZERO_WEIGHTS){let a=nf(e,"labels","meanSquaredError"),s=nf(t,"predictions","meanSquaredError"),i=null;return null!=n&&(i=nf(n,"weights","meanSquaredError")),J(a.shape,s.shape,"Error in meanSquaredError: "),lx(oo(a,s),i,r)}}),lI=ng({sigmoidCrossEntropy_:function(e,t,n,r=0,a=_.SUM_BY_NONZERO_WEIGHTS){let s=nf(e,"multiClassLabels","sigmoidCrossEntropy"),i=nf(t,"logits","sigmoidCrossEntropy"),o=null;if(null!=n&&(o=nf(n,"weights","sigmoidCrossEntropy")),J(s.shape,i.shape,"Error in sigmoidCrossEntropy: "),r>0){let e=r2(r),t=r2(1),n=r2(.5);s=rG(rX(s,ae(t,e)),rX(n,e))}return lx(/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"labels","sigmoidCrossEntropyWithLogits"),r=nf(t,"logits","sigmoidCrossEntropyWithLogits");J(n.shape,r.shape,"Error in sigmoidCrossEntropyWithLogits: ");let a=iq(r),s=rX(r,n),i=sq(sI(sK(at(r))));return rG(ae(a,s),i)}(s,i),o,a)}}),lA=ng({softmaxCrossEntropy_:function(e,t,n,r=0,a=_.SUM_BY_NONZERO_WEIGHTS){let s=nf(e,"onehotLabels","softmaxCrossEntropy"),i=nf(t,"logits","softmaxCrossEntropy"),o=null;if(null!=n&&(o=nf(n,"weights","softmaxCrossEntropy")),J(s.shape,i.shape,"Error in softmaxCrossEntropy: "),r>0){let e=r2(r),t=r2(1),n=r2(s.shape[1]);s=rG(rX(s,ae(t,e)),rY(e,n))}return lx(/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=-1){if(-1===n&&(n=t.rank-1),n!==t.rank-1)throw Error(`Softmax cross entropy along a non-last dimension is not yet supported. Labels / logits was rank ${t.rank} and dim was ${n}`);return r1((e,t,r)=>{let a=sX(t,[n],!0),s=ae(rH(t,"float32"),a);return r([e,s]),{value:sE(sK(rX(s,e)),[n]),gradFunc:(e,t)=>{let[r,a]=t,s=sk(e.shape,[n]);return[rX(aP(e,s),ae(rH(r,"float32"),sI(a))),rX(aP(e,s),ae(sI(a),rH(r,"float32")))]}}})(e,t)}(s,i),o,a)}}),lM=ng({sparseFillEmptyRows_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r){let a=nf(e,"indices","sparseFillEmptyRows","int32"),s=nf(t,"values","sparseFillEmptyRows"),i=nf(n,"denseShape","sparseFillEmptyRows","int32"),o=nf(r,"defaultValue","sparseFillEmptyRows",s.dtype);if(2!==a.rank)throw Error(`Indices should be Tensor2D but received shape
        ${a.shape}`);if(1!==s.rank)throw Error(`Values should be Tensor1D but received shape ${s.shape}`);if(1!==i.rank)throw Error(`Dense shape should be Tensor1D but received shape ${i.shape}`);if(0!==o.rank)throw Error(`Default value should be a scalar but received shape ${o.shape}`);let l=nl.runKernel("SparseFillEmptyRows",{indices:a,values:s,denseShape:i,defaultValue:o});return{outputIndices:l[0],outputValues:l[1],emptyRowIndicator:l[2],reverseIndexMap:l[3]}}}),lO=ng({sparseReshape_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"inputIndices","sparseReshape","int32"),a=nf(t,"inputShape","sparseReshape","int32"),s=nf(n,"newShape","sparseReshape","int32");if(2!==r.rank)throw Error(`Input indices should be Tensor2D but received shape
        ${r.shape}`);if(1!==a.rank)throw Error(`Input shape should be Tensor1D but received shape ${a.shape}`);if(1!==s.rank)throw Error(`New shape should be Tensor1D but received shape ${s.shape}`);let i=nl.runKernel("SparseReshape",{inputIndices:r,inputShape:a,newShape:s});return{outputIndices:i[0],outputShape:i[1]}}}),lC=ng({sparseSegmentMean_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"data","sparseSegmentMean"),a=nf(t,"indices","sparseSegmentMean","int32"),s=nf(n,"segmentIds","sparseSegmentMean","int32");if(r.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw Error(`Indices should be Tensor1D but received shape
          ${a.shape}`);if(1!==s.rank)throw Error(`Segment ids should be Tensor1D but received shape
          ${s.shape}`);return nl.runKernel("SparseSegmentMean",{data:r,indices:a,segmentIds:s})}}),l$=ng({sparseSegmentSum_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n){let r=nf(e,"data","sparseSegmentSum"),a=nf(t,"indices","sparseSegmentSum","int32"),s=nf(n,"segmentIds","sparseSegmentSum","int32");if(r.rank<1)throw Error("Data should be at least 1 dimensional but received scalar");if(1!==a.rank)throw Error(`Indices should be Tensor1D but received shape
         ${a.shape}`);if(1!==s.rank)throw Error(`Segment ids should be Tensor1D but received shape
         ${s.shape}`);return nl.runKernel("SparseSegmentSum",{data:r,indices:a,segmentIds:s})}}),lD=ng({stringNGrams_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r,a,s,i,o){let l=nf(e,"data","stringNGrams","string");if("string"!==l.dtype)throw Error("Data must be of datatype string");if(1!==l.shape.length)throw Error(`Data must be a vector, saw: ${l.shape}`);let u=nf(t,"dataSplits","stringNGrams");if("int32"!==u.dtype)throw Error("Data splits must be of datatype int32");let c=nl.runKernel("StringNGrams",{data:l,dataSplits:u},{separator:n,nGramWidths:r,leftPad:a,rightPad:s,padWidth:i,preserveShortSequences:o});return{nGrams:c[0],nGramsSplits:c[1]}}}),lR=ng({stringSplit_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n=!0){let r=nf(e,"input","stringSplit","string"),a=nf(t,"delimiter","stringSplit","string");if(1!==r.rank)throw Error(`Input should be Tensor1D but received shape ${r.shape}`);if(0!==a.rank)throw Error(`Delimiter should be a scalar but received shape ${a.shape}`);let s=nl.runKernel("StringSplit",{input:r,delimiter:a},{skipEmpty:n});return{indices:s[0],values:s[1],shape:s[2]}}}),lL=ng({stringToHashBucketFast_:/**
 * @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t){let n=nf(e,"input","stringToHashBucketFast","string");if(t<=0)throw Error("Number of buckets must be at least 1");return nl.runKernel("StringToHashBucketFast",{input:n},{numBuckets:t})}}),lF=ng({staticRegexReplace_:/**
 * @license
 * Copyright 2023 Google LLC.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function(e,t,n,r=!0){let a=nf(e,"input","staticRegexReplace","string");return nl.runKernel("StaticRegexReplace",{x:a},{pattern:t,rewrite:n,replaceGlobal:r})}}),lz={fft:on,ifft:or,rfft:oi,irfft:oa},lP={hammingWindow:o4,hannWindow:o6,frame:o5,stft:o8},lB={flipLeftRight:o9,grayscaleToRGB:le,resizeNearestNeighbor:lh,resizeBilinear:lf,rgbToGrayscale:lt,rotateWithOffset:ln,cropAndResize:o7,nonMaxSuppression:la,nonMaxSuppressionAsync:ll,nonMaxSuppressionWithScore:lu,nonMaxSuppressionWithScoreAsync:lc,nonMaxSuppressionPadded:lp,nonMaxSuppressionPaddedAsync:ld,threshold:lm,transform:lg},lU={bandPart:ly,gramSchmidt:lb,qr:lw},lV={absoluteDifference:lk,computeWeightedLoss:lx,cosineDistance:lN,hingeLoss:lS,huberLoss:lE,logLoss:lT,meanSquaredError:l_,sigmoidCrossEntropy:lI,softmaxCrossEntropy:lA},lW={sparseFillEmptyRows:lM,sparseReshape:lO,sparseSegmentMean:lC,sparseSegmentSum:l$},lj={stringNGrams:lD,stringSplit:lR,stringToHashBucketFast:lL,staticRegexReplace:lF};O(ab,oI),O(ab,oM),O(ab,sx),O(ab,oC),O(ab,oD),O(ab,s2),O(ab,oL),O(ab,oz),O(ab,oB),O(ab,oV),O(ab,oH);var lH={};function lq(e){return new Promise(e=>setTimeout(e)).then(e)}r(lH,"copyModel",()=>rU),r(lH,"listModels",()=>rP),r(lH,"moveModel",()=>rV),r(lH,"removeModel",()=>rB),r(lH,"browserFiles",()=>lQ),r(lH,"browserHTTPRequest",()=>l4),r(lH,"CompositeArrayBuffer",()=>nx),r(lH,"concatenateArrayBuffers",()=>rp),r(lH,"decodeWeights",()=>ra),r(lH,"decodeWeightsStream",()=>rl),r(lH,"encodeWeights",()=>rr),r(lH,"fromMemory",()=>l7),r(lH,"fromMemorySync",()=>l9),r(lH,"getLoadHandlers",()=>rk),r(lH,"getModelArtifactsForJSON",()=>rm),r(lH,"getModelArtifactsForJSONSync",()=>rh),r(lH,"getModelArtifactsInfoForJSON",()=>rg),r(lH,"getSaveHandlers",()=>rx),r(lH,"getWeightSpecs",()=>ry),r(lH,"http",()=>l3),r(lH,"isHTTPScheme",()=>l1),r(lH,"loadWeights",()=>lJ),r(lH,"registerLoadRouter",()=>rw),r(lH,"registerSaveRouter",()=>rv),r(lH,"weightsLoaderFactory",()=>lZ),r(lH,"withSaveHandler",()=>ue),r(lH,"withSaveHandlerSync",()=>ut);class lK{constructor(e){if(!eP.getBool("IS_BROWSER"))throw Error("browserDownloads() cannot proceed because the current environment is not a browser.");e.startsWith(lK.URL_SCHEME)&&(e=e.slice(lK.URL_SCHEME.length)),(null==e||0===e.length)&&(e="model"),this.modelJsonFileName=e+".json",this.weightDataFileName=e+".weights.bin"}async save(e){if("undefined"==typeof document)throw Error("Browser downloads are not supported in this environment since `document` is not present");let t=nx.join(e.weightData),n=window.URL.createObjectURL(new Blob([t],{type:"application/octet-stream"}));if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserDownloads.save() does not support saving model topology in binary formats yet.");{let t=[{paths:["./"+this.weightDataFileName],weights:e.weightSpecs}],r=rf(e,t),a=window.URL.createObjectURL(new Blob([JSON.stringify(r)],{type:"application/json"})),s=null==this.modelJsonAnchor?document.createElement("a"):this.modelJsonAnchor;if(s.download=this.modelJsonFileName,s.href=a,await lq(()=>s.dispatchEvent(new MouseEvent("click"))),null!=e.weightData){let e=null==this.weightDataAnchor?document.createElement("a"):this.weightDataAnchor;e.download=this.weightDataFileName,e.href=n,await lq(()=>e.dispatchEvent(new MouseEvent("click")))}return{modelArtifactsInfo:rg(e)}}}}lK.URL_SCHEME="downloads://";class lG{constructor(e){if(null==e||e.length<1)throw Error(`When calling browserFiles, at least 1 file is required, but received ${e}`);this.jsonFile=e[0],this.weightsFiles=e.slice(1)}async load(){return new Promise((e,t)=>{let n=new FileReader;n.onload=n=>{let r=JSON.parse(n.target.result),a=r.modelTopology;if(null==a){t(Error(`modelTopology field is missing from file ${this.jsonFile.name}`));return}if(null==r.weightsManifest){t(Error(`weightManifest field is missing from file ${this.jsonFile.name}`));return}if(0===this.weightsFiles.length){e({modelTopology:a});return}e(rm(r,e=>this.loadWeights(e)))},n.onerror=e=>t(`Failed to read model topology and weights manifest JSON from file '${this.jsonFile.name}'. BrowserFiles supports loading Keras-style tf.Model artifacts only.`),n.readAsText(this.jsonFile)})}loadWeights(e){let t=[],n=[];for(let r of e)t.push(...r.weights),n.push(...r.paths);let r=this.checkManifestAndWeightFiles(e);return Promise.all(n.map(e=>this.loadWeightsFile(e,r[e]))).then(e=>[t,e])}loadWeightsFile(e,t){return new Promise((n,r)=>{let a=new FileReader;a.onload=e=>{n(e.target.result)},a.onerror=t=>r(`Failed to weights data from file of path '${e}'.`),a.readAsArrayBuffer(t)})}checkManifestAndWeightFiles(e){let t=[],n=this.weightsFiles.map(e=>rd(e.name)),r={};for(let a of e)a.paths.forEach(e=>{let a=rd(e);if(-1!==t.indexOf(a))throw Error(`Duplicate file basename found in weights manifest: '${a}'`);if(t.push(a),-1===n.indexOf(a))throw Error(`Weight file with basename '${a}' is not provided.`);r[e]=this.weightsFiles[n.indexOf(a)]});if(t.length!==this.weightsFiles.length)throw Error(`Mismatch in the number of files in weights manifest (${t.length}) and the number of weight files provided (${this.weightsFiles.length}).`);return r}}function lQ(e){return new lG(e)}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function lY(e,t,n,r){var a,s;X(null!=e&&Array.isArray(e)&&e.length>0,()=>"promises must be a none empty array"),a=n=null==n?0:n,s=r=null==r?1:r,X(a>=0&&a<=1,()=>`Progress fraction must be in range [0, 1], but got startFraction ${a}`),X(s>=0&&s<=1,()=>`Progress fraction must be in range [0, 1], but got endFraction ${s}`),X(s>=a,()=>`startFraction must be no more than endFraction, but got startFraction ${a} and endFraction ${s}`);let i=0;return Promise.all(e.map(a=>(a.then(a=>(t(n+ ++i/e.length*(r-n)),a)),a)))}async function lX(e,t){null==t&&(t={});let n=null==t.fetchFunc?eP.platform.fetch:t.fetchFunc,r=e.map(e=>n(e,t.requestInit,{isBinary:!0})),a=(null==t.onProgress?await Promise.all(r):await lY(r,t.onProgress,0,.5)).map(e=>e.arrayBuffer());return null==t.onProgress?await Promise.all(a):await lY(a,t.onProgress,.5,1)}async function lJ(e,t="",n,r){return lZ(e=>lX(e,{requestInit:r}))(e,t,n)}function lZ(e){return async(t,n="",r)=>{let a=t.map(()=>!1),s={},i=null!=r?r.map(()=>!1):[],o=[];if(t.forEach((e,t)=>{let n=0;e.weights.forEach(e=>{let l=nw["quantization"in e?e.quantization.dtype:e.dtype]*ee(e.shape),u=()=>{a[t]=!0,null==s[t]&&(s[t]=[]),s[t].push({manifestEntry:e,groupOffset:n,sizeBytes:l})};null!=r?r.forEach((t,n)=>{t===e.name&&(u(),i[n]=!0)}):u(),o.push(e.name),n+=l})}),!i.every(e=>e)){let e=r.filter((e,t)=>!i[t]);throw Error(`Could not find weights in manifest with names: ${e.join(", ")}. 
Manifest JSON has weights with names: ${o.join(", ")}.`)}let l=a.reduce((e,t,n)=>(t&&e.push(n),e),[]),u=[];l.forEach(e=>{t[e].paths.forEach(e=>{let t=n+(n.endsWith("/")?"":"/")+e;u.push(t)})});let c=await e(u),p={},d=0;return l.forEach(e=>{let n=t[e].paths.length,r=new nx(c.slice(d,d+n));s[e].forEach(e=>{let t=ra(r.slice(e.groupOffset,e.groupOffset+e.sizeBytes),[e.manifestEntry]);for(let e in t)p[e]=t[e]}),d+=n}),p}}rb.registerSaveRouter(e=>eP.getBool("IS_BROWSER")&&!Array.isArray(e)&&e.startsWith(lK.URL_SCHEME)?function(e="model"){return new lK(e)}(e.slice(lK.URL_SCHEME.length)):null);class l0{constructor(e,t){if(this.DEFAULT_METHOD="POST",null==t&&(t={}),this.weightPathPrefix=t.weightPathPrefix,this.weightUrlConverter=t.weightUrlConverter,null!=t.fetchFunc?(X("function"==typeof t.fetchFunc,()=>"Must pass a function that matches the signature of `fetch` (see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)"),this.fetch=t.fetchFunc):this.fetch=eP.platform.fetch,X(null!=e&&e.length>0,()=>"URL path for http must not be null, undefined or empty."),Array.isArray(e)&&X(2===e.length,()=>`URL paths for http must have a length of 2, (actual length is ${e.length}).`),this.path=e,null!=t.requestInit&&null!=t.requestInit.body)throw Error("requestInit is expected to have no pre-existing body, but has one.");this.requestInit=t.requestInit||{},this.loadOptions=t}async save(e){if(e.modelTopology instanceof ArrayBuffer)throw Error("BrowserHTTPRequest.save() does not support saving model topology in binary formats yet.");let t=Object.assign({method:this.DEFAULT_METHOD},this.requestInit);t.body=new FormData;let n=[{paths:["./model.weights.bin"],weights:e.weightSpecs}],r=rf(e,n);if(t.body.append("model.json",new Blob([JSON.stringify(r)],{type:"application/json"}),"model.json"),null!=e.weightData){let n=nx.join(e.weightData);t.body.append("model.weights.bin",new Blob([n],{type:"application/octet-stream"}),"model.weights.bin")}let a=await this.fetch(this.path,t);if(a.ok)return{modelArtifactsInfo:rg(e),responses:[a]};throw Error(`BrowserHTTPRequest.save() failed due to HTTP response status ${a.status}.`)}async loadModelJSON(){let e;let t=await this.fetch(this.path,this.requestInit);if(!t.ok)throw Error(`Request to ${this.path} failed with status code ${t.status}. Please verify this URL points to the model JSON of the model to load.`);try{e=await t.json()}catch(t){let e=`Failed to parse model JSON of response from ${this.path}.`;throw this.path.endsWith(".pb")?e+=" Your path contains a .pb file extension. Support for .pb models have been removed in TensorFlow.js 1.0 in favor of .json models. You can re-convert your Python TensorFlow model using the TensorFlow.js 1.0 conversion scripts or you can convert your.pb models with the 'pb2json'NPM script in the tensorflow/tfjs-converter repository.":e+=" Please make sure the server is serving valid JSON for this request.",Error(e)}let n=e.modelTopology,r=e.weightsManifest;if(null==n&&null==r)throw Error(`The JSON from HTTP path ${this.path} contains neither model topology or manifest for weights.`);return e}async load(){return this.loadOptions.streamWeights?this.loadStream():rm(await this.loadModelJSON(),e=>this.loadWeights(e))}async loadStream(){let e=await this.loadModelJSON(),t=await this.getWeightUrls(e.weightsManifest),n=ry(e.weightsManifest);return Object.assign(Object.assign({},e),{weightSpecs:n,getWeightStream:()=>(function(e,t){var n;let r;let a=null==t.fetchFunc?eP.platform.fetch:t.fetchFunc,s=0;return null===(n=t.onProgress)||void 0===n||n.call(t,0),new ReadableStream({pull:async n=>{for(var i;s<e.length;){r||(r=(await a(e[s],t.requestInit,{isBinary:!0})).body.getReader());let{done:o,value:l}=await r.read();if(o){s++,r=void 0,null===(i=t.onProgress)||void 0===i||i.call(t,s/e.length);continue}n.enqueue(l);return}n.close()}})})(t,this.loadOptions)})}async getWeightUrls(e){let[t,n]=function(e){let t=e.lastIndexOf("/"),n=e.lastIndexOf("?");return[e.substring(0,t)+"/",n>t?e.substring(n):""]}(Array.isArray(this.path)?this.path[1]:this.path),r=this.weightPathPrefix||t,a=[],s=[];for(let t of e)for(let e of t.paths)null!=this.weightUrlConverter?s.push(this.weightUrlConverter(e)):a.push(r+e+n);return this.weightUrlConverter&&a.push(...await Promise.all(s)),a}async loadWeights(e){let t=await this.getWeightUrls(e);return[ry(e),await lX(t,this.loadOptions)]}}function l1(e){return null!=e.match(l0.URL_SCHEME_REGEX)}l0.URL_SCHEME_REGEX=/^https?:\/\//;let l2=(e,t)=>{if("undefined"==typeof fetch&&(null==t||null==t.fetchFunc));else if(Array.isArray(e)?e.every(e=>l1(e)):l1(e))return l3(e,t);return null};function l3(e,t){return new l0(e,t)}function l4(e,t){return l3(e,t)}rb.registerSaveRouter(l2),rb.registerLoadRouter(l2);/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class l6{constructor(e){this.modelArtifacts=e}load(){return this.modelArtifacts}}class l5{constructor(e){this.saveHandler=e}save(e){return this.saveHandler(e)}}class l8{constructor(e){e.load&&(this.load=()=>Promise.resolve(e.load())),e.save&&(this.save=t=>Promise.resolve(e.save(t)))}}function l7(e,t,n,r){let a=arguments;return new l8(l9(...a))}function l9(e,t,n,r){return 1!=arguments.length?(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new l6({modelTopology:e,weightSpecs:t,weightData:n,trainingConfig:r})):null!=e.modelTopology||null!=e.weightSpecs?new l6(e):(console.warn("Please call tf.io.fromMemory() with only one argument. The argument should be of type ModelArtifacts. The multi-argument signature of tf.io.fromMemory() has been deprecated and will be removed in a future release."),new l6({modelTopology:e}))}function ue(e){return new l5(e)}function ut(e){return new l5(e)}!function(){for(let e of as)!function(e,t,n){X(null!=e.className,()=>"Class being registered does not have the static className property defined."),X("string"==typeof e.className,()=>"className is required to be a string, but got type "+typeof e.className),X(e.className.length>0,()=>"Class being registered has an empty-string as its className, which is disallowed."),void 0===t&&(t="Custom"),void 0===n&&(n=e.className);let r=t+">"+n;r5.register(e),r3.set(r,e),r4.set(e,r)}(e)}(),eP.registerFlag("KEEP_INTERMEDIATE_TENSORS",()=>!1,e=>{e&&console.warn("Keep intermediate tensors is ON. This will print the values of all intermediate tensors during model inference. Not all models support this mode. For details, check e2e/benchmarks/ model_config.js. This significantly impacts performance.")}),(c=I||(I={}))[c.DT_INVALID=0]="DT_INVALID",c[c.DT_FLOAT=1]="DT_FLOAT",c[c.DT_DOUBLE=2]="DT_DOUBLE",c[c.DT_INT32=3]="DT_INT32",c[c.DT_UINT8=4]="DT_UINT8",c[c.DT_INT16=5]="DT_INT16",c[c.DT_INT8=6]="DT_INT8",c[c.DT_STRING=7]="DT_STRING",c[c.DT_COMPLEX64=8]="DT_COMPLEX64",c[c.DT_INT64=9]="DT_INT64",c[c.DT_BOOL=10]="DT_BOOL",c[c.DT_QINT8=11]="DT_QINT8",c[c.DT_QUINT8=12]="DT_QUINT8",c[c.DT_QINT32=13]="DT_QINT32",c[c.DT_BFLOAT16=14]="DT_BFLOAT16",c[c.DT_QINT16=15]="DT_QINT16",c[c.DT_QUINT16=16]="DT_QUINT16",c[c.DT_UINT16=17]="DT_UINT16",c[c.DT_COMPLEX128=18]="DT_COMPLEX128",c[c.DT_HALF=19]="DT_HALF",c[c.DT_RESOURCE=20]="DT_RESOURCE",c[c.DT_VARIANT=21]="DT_VARIANT",c[c.DT_UINT32=22]="DT_UINT32",c[c.DT_UINT64=23]="DT_UINT64",c[c.DT_FLOAT_REF=101]="DT_FLOAT_REF",c[c.DT_DOUBLE_REF=102]="DT_DOUBLE_REF",c[c.DT_INT32_REF=103]="DT_INT32_REF",c[c.DT_UINT8_REF=104]="DT_UINT8_REF",c[c.DT_INT16_REF=105]="DT_INT16_REF",c[c.DT_INT8_REF=106]="DT_INT8_REF",c[c.DT_STRING_REF=107]="DT_STRING_REF",c[c.DT_COMPLEX64_REF=108]="DT_COMPLEX64_REF",c[c.DT_INT64_REF=109]="DT_INT64_REF",c[c.DT_BOOL_REF=110]="DT_BOOL_REF",c[c.DT_QINT8_REF=111]="DT_QINT8_REF",c[c.DT_QUINT8_REF=112]="DT_QUINT8_REF",c[c.DT_QINT32_REF=113]="DT_QINT32_REF",c[c.DT_BFLOAT16_REF=114]="DT_BFLOAT16_REF",c[c.DT_QINT16_REF=115]="DT_QINT16_REF",c[c.DT_QUINT16_REF=116]="DT_QUINT16_REF",c[c.DT_UINT16_REF=117]="DT_UINT16_REF",c[c.DT_COMPLEX128_REF=118]="DT_COMPLEX128_REF",c[c.DT_HALF_REF=119]="DT_HALF_REF",c[c.DT_RESOURCE_REF=120]="DT_RESOURCE_REF",c[c.DT_VARIANT_REF=121]="DT_VARIANT_REF",c[c.DT_UINT32_REF=122]="DT_UINT32_REF",c[c.DT_UINT64_REF=123]="DT_UINT64_REF",(d=(p=A||(A={})).CheckpointFormatVersion||(p.CheckpointFormatVersion={}))[d.LEGACY=0]="LEGACY",d[d.V1=1]="V1",d[d.V2=2]="V2";/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let un={};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ur(e,t,n,r,a){let s=t.inputParams[e];if(s&&void 0!==s.inputIndexStart){let e=s.inputIndexStart,i=0===s.inputIndexEnd?void 0:void 0===s.inputIndexEnd?e+1:s.inputIndexEnd,o=e<0?t.inputNames.length+e:e;if("tensor"===s.type)return ua(t.inputNames[o],n,r,a);if("tensors"===s.type){let s=t.inputs.slice(e,i);return t.inputNames.slice(e,i).filter((e,t)=>{var n;return(null===(n=s[t])||void 0===n?void 0:n.op)!=="NoOp"}).map(e=>ua(e,n,r,a))}let l=ua(t.inputNames[o],n,r,a),u=l.dataSync();return"number"===s.type?u[0]:ta.toNestedArray(l.shape,u)}let i=t.attrParams[e];return i&&i.value}function ua(e,t,n,r){let[a,s]=ul(e,n);if(null!=r){let e=r.getHashTableHandleByName(a);if(null!=e)return e}let i=n.currentContextIds.find(e=>!!t[uo(a,e)]);return void 0!==i?t[uo(a,i)][s]:void 0}function us(e,t,n){return t[uo(e,n.currentContextId)]}function ui(e,t){let[n,r,a]=ul(e,t);return[uo(n,t&&t.currentContextId),r,a]}function uo(e,t){return t?`${e}-${t}`:e}function ul(e,t){let n;if(""===e)return["",0,void 0];let r=null!=t&&null!=t.parseNodeNameCache;if(r){let n=t.parseNodeNameCache.get(e);if(null!=n)return n}let a=e.split(":");if(1===a.length)n=[e,0,void 0];else{let e=a[0],t=3===a.length?a[1]:void 0;n=[e,Number(a[a.length-1]),t]}return r&&t.parseNodeNameCache.set(e,n),n}function uu(e,t,n){let r=ur("pad",e,t,n);if("explicit"===r){r=ur("explicitPaddings",e,t,n);let a=[[0,0],[0,0],[0,0],[0,0]];for(let e=0;e<4;e++)a[e][0]=r[2*e],a[e][1]=r[2*e+1];return a}return r}function uc(e){return e.kept?e:rq(e)}var up={};r(up,"json",()=>ud);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ud=[{tfOpName:"Add",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddV2",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AddN",category:"arithmetic",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"BiasAdd",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"Sub",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"RealDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Div",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"DivNoNan",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorDiv",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mul",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Maximum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Minimum",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Pow",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SquaredDifference",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Mod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"FloorMod",category:"arithmetic",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var uf={};r(uf,"json",()=>uh);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uh=[{tfOpName:"Abs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atan2",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Ceil",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ClipByValue",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"clipValueMin",type:"number"},{start:2,name:"clipValueMax",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Complex",category:"basic_math",inputs:[{start:0,name:"real",type:"tensor"},{start:1,name:"imag",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ComplexAbs",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cos",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Elu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Exp",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Floor",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Imag",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Neg",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Real",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"Tout",name:"outputType",type:"dtype",notSupported:!0}]},{tfOpName:"Prelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"alpha",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Relu6",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Selu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sigmoid",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sin",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Rsqrt",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Square",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Tanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Sign",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Round",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Expm1",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Log1p",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Reciprocal",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Softplus",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Asinh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Acosh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Atanh",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Erf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LeakyRelu",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"alpha",name:"alpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsNan",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsFinite",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"IsInf",category:"basic_math",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var um={};r(um,"json",()=>ug);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ug=[{tfOpName:"EmptyTensorList",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"maxNumElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"LoopCond",category:"control",inputs:[{start:0,name:"pred",type:"tensor"}]},{tfOpName:"Switch",category:"control",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"pred",type:"tensor"}]},{tfOpName:"Merge",category:"control",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}]},{tfOpName:"Enter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"frame_name",name:"frameName",type:"string"},{tfName:"is_constant",name:"isConstant",type:"bool"}]},{tfOpName:"Exit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NextIteration",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayV3",category:"control",inputs:[{start:0,name:"size",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"dynamic_size",name:"dynamicSize",type:"bool"},{tfName:"clear_after_read",name:"clearAfterRead",type:"bool"},{tfName:"identical_element_shapes",name:"identicalElementShapes",type:"bool"},{tfName:"tensor_array_name",name:"name",type:"string"}]},{tfOpName:"TensorArrayWriteV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayReadV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"TensorArrayGatherV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape",name:"elementShape",type:"shape"}]},{tfOpName:"TensorArrayScatterV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"tensor",type:"tensor"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArrayConcatV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"element_shape_except0",name:"elementShapeExcept0",type:"shape",notSupported:!0}]},{tfOpName:"TensorArraySplitV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"tensor",type:"tensor"},{start:2,name:"lengths",type:"number[]"},{start:3,name:"flowIn",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"TensorArraySizeV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"},{start:1,name:"flowIn",type:"number"}]},{tfOpName:"TensorArrayCloseV3",category:"control",inputs:[{start:0,name:"tensorArrayId",type:"tensor"}]},{tfOpName:"StatelessIf",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"If",category:"control",inputs:[{start:0,name:"cond",type:"tensor"},{start:1,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"then_branch",name:"thenBranch",type:"func"},{tfName:"else_branch",name:"elseBranch",type:"func"}]},{tfOpName:"StatelessWhile",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"While",category:"control",inputs:[{start:0,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"cond",name:"cond",type:"func"},{tfName:"body",name:"body",type:"func"}]},{tfOpName:"TensorListScatter",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListScatterV2",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"},{start:3,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGather",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"indices",type:"number[]"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListGetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListSetItem",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"index",type:"number"},{start:2,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListReserve",category:"control",inputs:[{start:0,name:"elementShape",type:"shape"},{start:1,name:"numElements",type:"number"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListFromTensor",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListStack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"},{tfName:"num_elements",name:"numElements",type:"dtype"}]},{tfOpName:"TensorListSplit",category:"control",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"elementShape",type:"shape"},{start:2,name:"lengths",type:"number[]"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcat",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListConcatV2",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}],attrs:[{tfName:"element_shape",name:"elementShape",type:"shape"},{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPopBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"elementShape",type:"shape"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListPushBack",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"tensor",type:"tensor"}],attrs:[{tfName:"element_dtype",name:"elementDType",type:"dtype"}]},{tfOpName:"TensorListLength",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"}]},{tfOpName:"TensorListResize",category:"control",inputs:[{start:0,name:"tensorListId",type:"tensor"},{start:1,name:"size",type:"number"}]}];var uy={};r(uy,"json",()=>ub);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let ub=[{tfOpName:"AvgPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[],notSupported:!0},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPoolWithArgmax",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"include_batch_in_index",name:"includeBatchInIndex",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"AvgPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MaxPool3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"ksize",name:"kernelSize",type:"number[]"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Conv1D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"stride",name:"stride",type:"number"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NWC"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"dilation",name:"dilation",type:"number",defaultValue:1}]},{tfOpName:"Conv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"useCudnnOnGpu",name:"useCudnnOnGpu",type:"bool"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"_FusedConv2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"use_cudnn_on_gpu",name:"useCudnnOnGpu",type:"bool",defaultValue:!0},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2}]},{tfOpName:"Conv2DBackpropInput",category:"convolution",inputs:[{start:2,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:0,name:"outputShape",type:"number[]"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]",notSupported:!0}]},{tfOpName:"DepthwiseConv2d",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"DepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"FusedDepthwiseConv2dNative",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]",defaultValue:[1,1,1,1]},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"explicit_paddings",name:"explicitPaddings",type:"number[]",defaultValue:[]}]},{tfOpName:"Conv3D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"padding",name:"pad",type:"string"},{tfName:"data_format",name:"dataFormat",type:"string",defaultValue:"NHWC"},{tfName:"dilations",name:"dilations",type:"number[]"}]},{tfOpName:"Dilation2D",category:"convolution",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"filter",type:"tensor"}],attrs:[{tfName:"strides",name:"strides",type:"number[]"},{tfName:"rates",name:"dilations",type:"number[]"},{tfName:"padding",name:"pad",type:"string"}]}];var uv={};r(uv,"json",()=>uw);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uw=[{tfOpName:"Fill",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"},{start:1,name:"value",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"LinSpace",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"num",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"OneHot",category:"creation",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"depth",type:"number"},{start:2,name:"onValue",type:"number",defaultValue:1},{start:3,name:"offValue",type:"number",defaultValue:0}],attrs:[{tfName:"axis",name:"axis",type:"number",notSupported:!0},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Ones",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"OnesLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"RandomStandardNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniform",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number",defaultValue:0},{tfName:"maxval",name:"maxval",type:"number",defaultValue:1},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"RandomUniformInt",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"minval",name:"minval",type:"number"},{tfName:"maxval",name:"maxval",type:"number"},{tfName:"seed",name:"seed",type:"number",defaultValue:0},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Range",category:"creation",inputs:[{start:0,name:"start",type:"number"},{start:1,name:"stop",type:"number"},{start:2,name:"step",type:"number",defaultValue:0}],attrs:[{tfName:"Tidx",name:"dtype",type:"dtype"}]},{tfOpName:"TruncatedNormal",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"means",name:"mean",type:"number",defaultValue:0},{tfName:"stddev",name:"stdDev",type:"number",defaultValue:1},{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number",defaultValue:0,notSupported:!0},{tfName:"dtype",name:"dtype",type:"dtype"},{tfName:"T",name:"T",type:"number",notSupported:!0}]},{tfOpName:"Zeros",category:"creation",inputs:[{start:0,name:"shape",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"ZerosLike",category:"creation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"Multinomial",category:"creation",inputs:[{start:0,name:"logits",type:"tensor"},{start:1,name:"numSamples",type:"number"}],attrs:[{tfName:"seed",name:"seed",type:"number"},{tfName:"seed2",name:"seed2",type:"number"},{tfName:"T",name:"dtype",type:"dtype"},{tfName:"output_dtype",name:"output_dtype",type:"dtype"}]}];var ux={};r(ux,"json",()=>uk);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uk=[{tfOpName:"NonMaxSuppressionV2",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV3",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}]},{tfOpName:"NonMaxSuppressionV4",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0},{tfName:"T_threshold",name:"threshold",type:"dtype",notSupported:!0},{tfName:"pad_to_max_output_size",name:"padToMaxOutputSize",type:"bool"}]},{tfOpName:"NonMaxSuppressionV5",category:"dynamic",inputs:[{start:0,name:"boxes",type:"tensor"},{start:1,name:"scores",type:"tensor"},{start:2,name:"maxOutputSize",type:"number"},{start:3,name:"iouThreshold",type:"number"},{start:4,name:"scoreThreshold",type:"number"},{start:5,name:"softNmsSigma",type:"number"}]},{tfOpName:"Where",category:"dynamic",inputs:[{start:0,name:"condition",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ListDiff",category:"dynamic",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]}];var uN={};r(uN,"json",()=>uS);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uS=[{tfOpName:"LowerBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"TopKV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"k",type:"number"}],attrs:[{tfName:"sorted",name:"sorted",type:"bool"}]},{tfOpName:"UpperBound",category:"evaluation",inputs:[{start:0,name:"sortedSequence",type:"tensor"},{start:1,name:"values",type:"tensor"}]},{tfOpName:"Unique",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"UniqueV2",category:"evaluation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]}];var uE={};r(uE,"json",()=>uT);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uT=[{tfOpName:"PlaceholderWithDefault",category:"graph",inputs:[{start:0,name:"default",type:"tensor"}],attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Placeholder",category:"graph",attrs:[{tfName:"shape",name:"shape",type:"shape"},{tfName:"dtype",name:"dtype",type:"dtype"}]},{tfOpName:"Const",category:"graph"},{tfOpName:"Identity",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IdentityN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Snapshot",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Rank",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Size",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"Shape",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"ShapeN",category:"graph",inputs:[{start:0,end:0,name:"x",type:"tensors"}]},{tfOpName:"Print",category:"graph",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"data",type:"tensors"}],attrs:[{tfName:"message",name:"message",type:"string"},{tfName:"first_n",name:"firstN",type:"number",notSupported:!0},{tfName:"summarize",name:"summarize",type:"number",defaultValue:3}]},{tfOpName:"NoOp",category:"graph",inputs:[]},{tfOpName:"StopGradient",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"FakeQuantWithMinMaxVars",category:"graph",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"min",name:"min",type:"number"},{tfName:"max",name:"max",type:"number"}]}];var u_={};r(u_,"json",()=>uI);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uI=[{tfOpName:"HashTable",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"HashTableV2",category:"hash_table",inputs:[],attrs:[{tfName:"shared_name",name:"sharedName",type:"string"},{tfName:"use_node_name_sharing",name:"useNodeNameSharing",type:"bool"},{tfName:"key_dtype",name:"keyDType",type:"dtype"},{tfName:"value_dtype",name:"valueDType",type:"dtype"}]},{tfOpName:"LookupTableImport",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableImportV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFind",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableFindV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"Tin",name:"tIn",type:"dtype",notSupported:!0},{tfName:"Tout",name:"tOut",type:"dtype",notSupported:!0}]},{tfOpName:"LookupTableSize",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"LookupTableSizeV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"}]},{tfOpName:"InitializeTable",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]},{tfOpName:"InitializeTableV2",category:"hash_table",inputs:[{start:0,name:"tableHandle",type:"tensor"},{start:1,name:"keys",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var uA={};r(uA,"json",()=>uM);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uM=[{tfOpName:"ResizeBilinear",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"ResizeNearestNeighbor",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"size",type:"number[]"}],attrs:[{tfName:"align_corners",name:"alignCorners",type:"bool"},{tfName:"half_pixel_centers",name:"halfPixelCenters",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"CropAndResize",category:"image",inputs:[{start:0,name:"image",type:"tensor"},{start:1,name:"boxes",type:"tensor"},{start:2,name:"boxInd",type:"tensor"},{start:3,name:"cropSize",type:"number[]"}],attrs:[{tfName:"method",name:"method",type:"string"},{tfName:"extrapolation_value",name:"extrapolationValue",type:"number"}]},{tfOpName:"ImageProjectiveTransformV3",category:"image",inputs:[{start:0,name:"images",type:"tensor"},{start:1,name:"transforms",type:"tensor"},{start:2,name:"outputShape",type:"number[]"},{start:3,name:"fillValue",type:"number"}],attrs:[{tfName:"interpolation",name:"interpolation",type:"string"},{tfName:"fill_mode",name:"fillMode",type:"string"}]}];var uO={};r(uO,"json",()=>uC);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uC=[{tfOpName:"Equal",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"NotEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Greater",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"GreaterEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Less",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LessEqual",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalAnd",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalNot",category:"logical",inputs:[{start:0,name:"a",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"LogicalOr",category:"logical",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Select",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SelectV2",category:"logical",inputs:[{start:0,name:"condition",type:"tensor"},{start:1,name:"a",type:"tensor"},{start:2,name:"b",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BitwiseAnd",category:"logical",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"y",type:"tensor"}]}];var u$={};r(u$,"json",()=>uD);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uD=[{tfOpName:"_FusedMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"},{start:2,end:0,name:"args",type:"tensors"}],attrs:[{tfName:"num_args",name:"numArgs",type:"number"},{tfName:"fused_ops",name:"fusedOps",type:"string[]",defaultValue:[]},{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:1e-4},{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"leakyrelu_alpha",name:"leakyreluAlpha",type:"number",defaultValue:.2},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"MatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"transpose_a",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"transpose_b",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMul",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"BatchMatMulV2",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"b",type:"tensor"}],attrs:[{tfName:"adj_x",name:"transposeA",type:"bool",defaultValue:!1},{tfName:"adj_y",name:"transposeB",type:"bool",defaultValue:!1},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Transpose",category:"matrices",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"perm",type:"number[]"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Einsum",category:"matrices",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"equation",name:"equation",type:"string"},{tfName:"N",name:"n",type:"number",defaultValue:2},{tfName:"T",name:"dtype",type:"dtype"}]},{tfOpName:"MatrixBandPart",category:"matrices",inputs:[{start:0,name:"a",type:"tensor"},{start:1,name:"numLower",type:"tensor"},{start:1,name:"numUpper",type:"tensor"}]}];var uR={};r(uR,"json",()=>uL);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uL=[{tfOpName:"EuclideanNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool",defaultValue:!1}]},{tfOpName:"FusedBatchNorm",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV2",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"FusedBatchNormV3",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"scale",type:"tensor"},{start:2,name:"offset",type:"tensor"},{start:3,name:"mean",type:"tensor"},{start:4,name:"variance",type:"tensor"}],attrs:[{tfName:"epsilon",name:"epsilon",type:"number",defaultValue:.001},{tfName:"data_format",name:"dataFormat",type:"string",notSupported:!0}]},{tfOpName:"LRN",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"depth_radius",name:"radius",type:"number",defaultValue:5},{tfName:"bias",name:"bias",type:"number",defaultValue:1},{tfName:"alpha",name:"alpha",type:"number",defaultValue:1},{tfName:"beta",name:"beta",type:"number",defaultValue:.5}]},{tfOpName:"Softmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"LogSoftmax",category:"normalization",inputs:[{start:0,name:"x",type:"tensor"}]}];var uF={};r(uF,"json",()=>uz);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uz=[{tfOpName:"Bincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}]},{tfOpName:"DenseBincount",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"size",type:"number"},{start:2,name:"weights",type:"tensor"}],attrs:[{tfName:"binary_output",name:"binaryOutput",type:"bool"}]},{tfOpName:"Max",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Mean",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Min",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Sum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"All",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"Any",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"}]},{tfOpName:"ArgMax",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"ArgMin",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"Prod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}],attrs:[{tfName:"keep_dims",name:"keepDims",type:"bool"},{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"Cumprod",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]},{tfOpName:"Cumsum",category:"reduction",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}],attrs:[{tfName:"exclusive",name:"exclusive",type:"bool"},{tfName:"reverse",name:"reverse",type:"bool"}]}];var uP={};r(uP,"json",()=>uB);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uB=[{tfOpName:"ConcatV2",category:"slice_join",inputs:[{start:0,end:-1,name:"tensors",type:"tensors"},{start:-1,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"Concat",category:"slice_join",inputs:[{start:1,end:0,name:"tensors",type:"tensors"},{start:0,name:"axis",type:"number"}],attrs:[{tfName:"N",name:"n",type:"number",defaultValue:2}]},{tfOpName:"GatherV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"axis",type:"number",defaultValue:0}],attrs:[{tfName:"batch_dims",name:"batchDims",type:"number",defaultValue:0}]},{tfOpName:"Gather",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",notSupported:!0}]},{tfOpName:"Reverse",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"dims",type:"bool[]"}]},{tfOpName:"ReverseV2",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number[]"}]},{tfOpName:"Slice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"size",type:"number[]"}]},{tfOpName:"StridedSlice",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"begin",type:"number[]"},{start:2,name:"end",type:"number[]"},{start:3,name:"strides",type:"number[]"}],attrs:[{tfName:"begin_mask",name:"beginMask",type:"number",defaultValue:0},{tfName:"end_mask",name:"endMask",type:"number",defaultValue:0},{tfName:"new_axis_mask",name:"newAxisMask",type:"number",defaultValue:0},{tfName:"ellipsis_mask",name:"ellipsisMask",type:"number",defaultValue:0},{tfName:"shrink_axis_mask",name:"shrinkAxisMask",type:"number",defaultValue:0}]},{tfOpName:"Pack",category:"slice_join",inputs:[{start:0,end:0,name:"tensors",type:"tensors"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0}]},{tfOpName:"Unpack",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"}],attrs:[{tfName:"axis",name:"axis",type:"number",defaultValue:0},{tfName:"num",name:"num",type:"number",defaultValue:0,notSupported:!0}]},{tfOpName:"Tile",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"reps",type:"number[]"}]},{tfOpName:"Split",category:"slice_join",inputs:[{start:0,name:"axis",type:"number",defaultValue:0},{start:1,name:"x",type:"tensor"}],attrs:[{tfName:"num_split",name:"numOrSizeSplits",type:"number",defaultValue:1}]},{tfOpName:"SplitV",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"numOrSizeSplits",type:"number[]"},{start:2,name:"axis",type:"number",defaultValue:0}]},{tfOpName:"ScatterNd",category:"slice_join",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"shape",type:"number[]"}]},{tfOpName:"GatherNd",category:"slice_join",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"indices",type:"tensor"}]},{tfOpName:"SparseToDense",category:"slice_join",inputs:[{start:0,name:"sparseIndices",type:"tensor"},{start:1,name:"outputShape",type:"number[]"},{start:2,name:"sparseValues",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}],attrs:[{tfName:"validate_indices",name:"validateIndices",type:"bool",defaultValue:!1,notSupported:!0}]},{tfOpName:"TensorScatterUpdate",category:"slice_join",inputs:[{start:0,name:"tensor",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"values",type:"tensor"}]}];var uU={};r(uU,"json",()=>uV);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uV=[{tfOpName:"SparseFillEmptyRows",category:"sparse",inputs:[{start:0,name:"indices",type:"tensor"},{start:1,name:"values",type:"tensor"},{start:2,name:"denseShape",type:"tensor"},{start:3,name:"defaultValue",type:"tensor"}]},{tfOpName:"SparseReshape",category:"sparse",inputs:[{start:0,name:"inputIndices",type:"tensor"},{start:1,name:"inputShape",type:"tensor"},{start:2,name:"newShape",type:"tensor"}],attrs:[{tfName:"T",name:"dtype",type:"dtype",notSupported:!0}]},{tfOpName:"SparseSegmentMean",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]},{tfOpName:"SparseSegmentSum",category:"sparse",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"indices",type:"tensor"},{start:2,name:"segmentIds",type:"tensor"}]}];var uW={};r(uW,"json",()=>uj);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uj=[{tfOpName:"FFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"IFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"}]},{tfOpName:"RFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]},{tfOpName:"IRFFT",category:"spectral",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"fft_length",type:"number",notSupported:!0}]}];var uH={};r(uH,"json",()=>uq);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uq=[{tfOpName:"StaticRegexReplace",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"pattern",name:"pattern",type:"string"},{tfName:"rewrite",name:"rewrite",type:"string"},{tfName:"replace_global",name:"replaceGlobal",type:"bool"}]},{tfOpName:"StringNGrams",category:"string",inputs:[{start:0,name:"data",type:"tensor"},{start:1,name:"dataSplits",type:"tensor"}],attrs:[{tfName:"separator",name:"separator",type:"string"},{tfName:"ngram_widths",name:"nGramWidths",type:"number[]"},{tfName:"left_pad",name:"leftPad",type:"string"},{tfName:"right_pad",name:"rightPad",type:"string"},{tfName:"pad_width",name:"padWidth",type:"number"},{tfName:"preserve_short_sequences",name:"preserveShortSequences",type:"bool"}],outputs:["ngrams","ngrams_splits"]},{tfOpName:"StringSplit",category:"string",inputs:[{start:0,name:"input",type:"tensor"},{start:1,name:"delimiter",type:"tensor"}],attrs:[{tfName:"skip_empty",name:"skipEmpty",type:"bool"}],outputs:["indices","values","shape"]},{tfOpName:"StringToHashBucketFast",category:"string",inputs:[{start:0,name:"input",type:"tensor"}],attrs:[{tfName:"num_buckets",name:"numBuckets",type:"number"}]}];var uK={};r(uK,"json",()=>uG);/**
 * @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */let uG=[{tfOpName:"Cast",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"SrcT",name:"sdtype",type:"dtype",notSupported:!0},{tfName:"DstT",name:"dtype",type:"dtype"}]},{tfOpName:"ExpandDims",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"axis",type:"number"}]},{tfOpName:"MirrorPad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"mode",name:"mode",type:"string"}]},{tfOpName:"Pad",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"}],attrs:[{tfName:"constant_value",name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"PadV2",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"padding",type:"number[]"},{start:2,name:"constantValue",type:"number",defaultValue:0}]},{tfOpName:"Reshape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"EnsureShape",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}]},{tfOpName:"Squeeze",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"axis",tfDeprecatedName:"squeeze_dims",name:"axis",type:"number[]"}]},{tfOpName:"SpaceToBatchND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"paddings",type:"number[]"}]},{tfOpName:"BatchToSpaceND",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"blockShape",type:"number[]"},{start:2,name:"crops",type:"number[]"}]},{tfOpName:"DepthToSpace",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"}],attrs:[{tfName:"block_size",name:"blockSize",type:"number"},{tfName:"data_format",name:"dataFormat",type:"string"}]},{tfOpName:"BroadcastTo",category:"transformation",inputs:[{start:0,name:"x",type:"tensor"},{start:1,name:"shape",type:"number[]"}],attrs:[]},{tfOpName:"BroadcastArgs",category:"transformation",inputs:[{start:0,name:"s0",type:"tensor"},{start:1,name:"s1",type:"tensor"}],attrs:[]}];class uQ{static get Instance(){return this._instance||(this._instance=new this)}constructor(){let e=[].concat(...[up,uf,um,uy,uv,ux,uN,uE,u_,uA,uO,u$,uR,uF,uP,uU,uW,uH,uK].map(e=>e.json));this.opMappers=e.reduce((e,t)=>(e[t.tfOpName]=t,e),{})}transformGraph(e,t={}){let n=e.node,r=[],a=[],s=[],i=n.reduce((e,t)=>(e[t.name]=this.mapNode(t),t.op.startsWith("Placeholder")?r.push(e[t.name]):"Const"===t.op?a.push(e[t.name]):(null==t.input||0===t.input.length)&&s.push(e[t.name]),e),{}),o=[],l=[],u={},c={};null!=t&&(u=this.mapSignatureEntries(t.inputs),c=this.mapSignatureEntries(t.outputs));let p=Object.keys(i);p.forEach(e=>{let t=i[e];t.inputNames.forEach((e,n)=>{let[r,,a]=ui(e),s=i[r];if(null!=s.outputs){let e=s.outputs.indexOf(a);if(-1!==e){let a=`${r}:${e}`;t.inputNames[n]=a}}t.inputs.push(s),s.children.push(t)})}),0===Object.keys(c).length?p.forEach(e=>{let t=i[e];0===t.children.length&&l.push(t)}):Object.keys(c).forEach(e=>{let[t]=ui(e),n=i[t];null!=n&&(n.signatureKey=c[e],l.push(n))}),Object.keys(u).length>0?Object.keys(u).forEach(e=>{let[t]=ui(e),n=i[t];n&&(n.signatureKey=u[e],o.push(n))}):o=r;let d={};null!=e.library&&null!=e.library.function&&(d=e.library.function.reduce((e,t)=>(e[t.signature.name]=this.mapFunction(t),e),{}));let f={nodes:i,inputs:o,outputs:l,weights:a,placeholders:r,signature:t,functions:d};return s.length>0&&(f.initNodes=s),f}mapSignatureEntries(e){return Object.keys(e||{}).reduce((t,n)=>(t[e[n].name]=n,t),{})}mapNode(e){let t=un[e.op]||this.opMappers[e.op]||{};null==e.attr&&(e.attr={});let n={name:e.name,op:e.op,category:t.category,inputNames:(e.input||[]).map(e=>e.startsWith("^")?e.slice(1):e),inputs:[],children:[],inputParams:{},attrParams:{},rawAttrs:e.attr,outputs:t.outputs};return null!=t.inputs&&(n.inputParams=t.inputs.reduce((e,t)=>(e[t.name]={type:t.type,inputIndexStart:t.start,inputIndexEnd:t.end},e),{})),null!=t.attrs&&(n.attrParams=t.attrs.reduce((t,n)=>{let r;let a=n.type;switch(n.type){case"string":void 0===(r=uX(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=uX(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"string[]":void 0===(r=u8(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u8(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number":void 0===(r=uZ(e.attr,n.tfName,n.defaultValue||0))&&n.tfDeprecatedName&&(r=uZ(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"number[]":void 0===(r=u5(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u5(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool":void 0===(r=uJ(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=uJ(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"bool[]":void 0===(r=u9(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u9(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape":void 0===(r=u6(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u6(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"shape[]":void 0===(r=u7(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u7(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype":void 0===(r=u2(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u2(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"dtype[]":void 0===(r=u3(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u3(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"func":void 0===(r=u1(e.attr,n.tfName,n.defaultValue))&&n.tfDeprecatedName&&(r=u1(e.attr,n.tfDeprecatedName,n.defaultValue));break;case"tensor":case"tensors":break;default:throw Error(`Unsupported param type: ${n.type} for op: ${e.op}`)}return t[n.name]={value:r,type:a},t},{})),n}mapFunction(e){let t=e.nodeDef,n=[],r={};null!=t&&(r=t.reduce((e,t)=>(e[t.name]=this.mapNode(t),"Const"===t.op&&n.push(e[t.name]),e),{}));let a=[],s=[];e.signature.inputArg.forEach(e=>{let[t]=ui(e.name),n={name:t,op:"Placeholder",inputs:[],inputNames:[],category:"graph",inputParams:{},attrParams:{dtype:{value:u0(e.type),type:"dtype"}},children:[]};n.signatureKey=e.name,a.push(n),r[t]=n}),Object.keys(r).forEach(e=>{let t=r[e];t.inputNames.forEach((e,n)=>{let[a,,s]=ui(e),i=r[a];if(null!=i.outputs){let e=i.outputs.indexOf(s);if(-1!==e){let r=`${a}:${e}`;t.inputNames[n]=r}}t.inputs.push(i),i.children.push(t)})});let i=e.ret;e.signature.outputArg.forEach(e=>{let[t,n]=ui(i[e.name]),a=r[t];null!=a&&(a.defaultOutput=n,s.push(a))});let o=this.mapArgsToSignature(e);return{nodes:r,inputs:a,outputs:s,weights:n,placeholders:[],signature:o}}mapArgsToSignature(e){return{methodName:e.signature.name,inputs:e.signature.inputArg.reduce((e,t)=>(e[t.name]=this.mapArgToTensorInfo(t),e),{}),outputs:e.signature.outputArg.reduce((t,n)=>(t[n.name]=this.mapArgToTensorInfo(n,e.ret),t),{})}}mapArgToTensorInfo(e,t){let n=e.name;return null!=t&&(n=t[n]),{name:n,dtype:e.type}}}function uY(e,t){let n=Array.isArray(e)?String.fromCharCode.apply(null,e):function(e){let t=eP.global;return void 0!==t.atob?t.atob(e):new n$(e,"base64").toString()}(e);return t?n:n.toLowerCase()}function uX(e,t,n,r=!1){let a=e[t];return null!=a?uY(a.s,r):n}function uJ(e,t,n){let r=e[t];return r?r.b:n}function uZ(e,t,n){let r=e[t]||{},a=null!=r.i?r.i:null!=r.f?r.f:n;return"number"==typeof a?a:parseInt(a,10)}function u0(e){switch("string"==typeof e&&(e=I[e]),e){case I.DT_FLOAT:case I.DT_HALF:return"float32";case I.DT_INT32:case I.DT_INT64:case I.DT_INT8:case I.DT_UINT8:return"int32";case I.DT_BOOL:return"bool";case I.DT_DOUBLE:return"float32";case I.DT_STRING:return"string";case I.DT_COMPLEX64:case I.DT_COMPLEX128:return"complex64";default:return null}}function u1(e,t,n){let r=e[t];return r&&r.func?r.func.name:n}function u2(e,t,n){let r=e[t];return r&&r.type?u0(r.type):n}function u3(e,t,n){let r=e[t];return r&&r.list&&r.list.type?r.list.type.map(e=>u0(e)):n}function u4(e){if(!e.unknownRank)return null!=e.dim?e.dim.map(e=>"number"==typeof e.size?e.size:parseInt(e.size,10)):[]}function u6(e,t,n){let r=e[t];return r&&r.shape?u4(r.shape):n}function u5(e,t,n){let r=e[t];return r?((r.list.f&&r.list.f.length?r.list.f:r.list.i)||[]).map(e=>"number"==typeof e?e:parseInt(e,10)):n}function u8(e,t,n,r=!1){let a=e[t];return a&&a.list&&a.list.s?a.list.s.map(e=>uY(e,r)):n}function u7(e,t,n){let r=e[t];return r&&r.list&&r.list.shape?r.list.shape.map(e=>u4(e)):n}function u9(e,t,n){let r=e[t];return r&&r.list&&r.list.b?r.list.b:n}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class ce{constructor(e,t,n){this.node=e,this.tensorMap=t,this.context=n,this.inputs=[],this.attrs={},this.inputs=e.inputNames.map(e=>this.getInput(e)),null!=e.rawAttrs&&(this.attrs=Object.keys(e.rawAttrs).reduce((e,t)=>(e[t]=this.getAttr(t),e),{}))}getInput(e){return ua(e,this.tensorMap,this.context)}getAttr(e,t){let n=this.node.rawAttrs[e];if(null!=n.tensor)return ua(e,this.tensorMap,this.context);if(null!=n.i||null!=n.f)return uZ(this.node.rawAttrs,e,t);if(null!=n.s)return uX(this.node.rawAttrs,e,t);if(null!=n.b)return uJ(this.node.rawAttrs,e,t);if(null!=n.shape)return u6(this.node.rawAttrs,e,t);if(null!=n.type)return u2(this.node.rawAttrs,e,t);if(null!=n.list){if(null!=n.list.i||null!=n.list.f)return u5(this.node.rawAttrs,e,t);if(null!=n.list.s)return u8(this.node.rawAttrs,e,t);if(null!=n.list.shape)return u7(this.node.rawAttrs,e,t);if(null!=n.list.b)return u9(this.node.rawAttrs,e,t);if(null!=n.list.type)return u3(this.node.rawAttrs,e,t)}return t}}/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var ct={};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */O(ct,ab);let cn=(e,t,n,r=ct)=>{switch(e.op){case"BiasAdd":case"AddV2":case"Add":return[r.add(ur("a",e,t,n),ur("b",e,t,n))];case"AddN":return[r.addN(ur("tensors",e,t,n))];case"FloorMod":case"Mod":return[r.mod(ur("a",e,t,n),ur("b",e,t,n))];case"Mul":return[r.mul(ur("a",e,t,n),ur("b",e,t,n))];case"RealDiv":case"Div":return[r.div(ur("a",e,t,n),ur("b",e,t,n))];case"DivNoNan":return[r.divNoNan(ur("a",e,t,n),ur("b",e,t,n))];case"FloorDiv":return[r.floorDiv(ur("a",e,t,n),ur("b",e,t,n))];case"Sub":return[r.sub(ur("a",e,t,n),ur("b",e,t,n))];case"Minimum":return[r.minimum(ur("a",e,t,n),ur("b",e,t,n))];case"Maximum":return[r.maximum(ur("a",e,t,n),ur("b",e,t,n))];case"Pow":return[r.pow(ur("a",e,t,n),ur("b",e,t,n))];case"SquaredDifference":return[r.squaredDifference(ur("a",e,t,n),ur("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cr=(e,t,n,r=ct)=>{switch(e.op){case"Abs":case"ComplexAbs":return[r.abs(ur("x",e,t,n))];case"Acos":return[r.acos(ur("x",e,t,n))];case"Acosh":return[r.acosh(ur("x",e,t,n))];case"Asin":return[r.asin(ur("x",e,t,n))];case"Asinh":return[r.asinh(ur("x",e,t,n))];case"Atan":return[r.atan(ur("x",e,t,n))];case"Atan2":return[r.atan2(ur("x",e,t,n),ur("y",e,t,n))];case"Atanh":return[r.atanh(ur("x",e,t,n))];case"Ceil":return[r.ceil(ur("x",e,t,n))];case"Complex":return[r.complex(ur("real",e,t,n),ur("imag",e,t,n))];case"Cos":return[r.cos(ur("x",e,t,n))];case"Cosh":return[r.cosh(ur("x",e,t,n))];case"Elu":return[r.elu(ur("x",e,t,n))];case"Erf":return[r.erf(ur("x",e,t,n))];case"Exp":return[r.exp(ur("x",e,t,n))];case"Expm1":return[r.expm1(ur("x",e,t,n))];case"Floor":return[r.floor(ur("x",e,t,n))];case"Log":return[r.log(ur("x",e,t,n))];case"Log1p":return[r.log1p(ur("x",e,t,n))];case"Imag":return[r.imag(ur("x",e,t,n))];case"Neg":return[r.neg(ur("x",e,t,n))];case"Reciprocal":return[r.reciprocal(ur("x",e,t,n))];case"Real":return[r.real(ur("x",e,t,n))];case"Relu":return[r.relu(ur("x",e,t,n))];case"Round":return[r.round(ur("x",e,t,n))];case"Selu":return[r.selu(ur("x",e,t,n))];case"Sigmoid":return[r.sigmoid(ur("x",e,t,n))];case"Sin":return[r.sin(ur("x",e,t,n))];case"Sign":return[r.sign(ur("x",e,t,n))];case"Sinh":return[r.sinh(ur("x",e,t,n))];case"Softplus":return[r.softplus(ur("x",e,t,n))];case"Sqrt":return[r.sqrt(ur("x",e,t,n))];case"Square":return[r.square(ur("x",e,t,n))];case"Tanh":return[r.tanh(ur("x",e,t,n))];case"Tan":return[r.tan(ur("x",e,t,n))];case"ClipByValue":return[r.clipByValue(ur("x",e,t,n),ur("clipValueMin",e,t,n),ur("clipValueMax",e,t,n))];case"Relu6":return[r.relu6(ur("x",e,t,n))];case"Rsqrt":return[r.rsqrt(ua(e.inputNames[0],t,n))];case"LeakyRelu":return[r.leakyRelu(ur("x",e,t,n),ur("alpha",e,t,n))];case"Prelu":return[r.prelu(ur("x",e,t,n),ur("alpha",e,t,n))];case"IsNan":return[r.isNaN(ua(e.inputNames[0],t,n))];case"IsInf":return[r.isInf(ua(e.inputNames[0],t,n))];case"IsFinite":return[r.isFinite(ua(e.inputNames[0],t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ca(e,t,n=""){if("number"!=typeof e&&"number"!=typeof t){ta.assert(e.length===t.length,()=>n+` Shapes ${e} and ${t} must match`);for(let r=0;r<e.length;r++){let a=e[r],s=t[r];ta.assert(a<0||s<0||a===s,()=>n+` Shapes ${e} and ${t} must match`)}}}function cs(e){return!("number"==typeof e||e.some(e=>e<0))}function ci(e,t,n){let r=co(e,n),a=!cs(r);if(a&&0===t.length)throw Error(`Tried to calculate elements of an empty list with non-fully-defined elementShape: ${r}`);if(a&&t.forEach(e=>{r=co(e.shape,r)}),!cs(r))throw Error(`Non-fully-defined elementShape: ${r}`);return r}function co(e,t){if("number"==typeof e)return t;if("number"==typeof t)return e;if(e.length!==t.length)throw Error(`Incompatible ranks during merge: ${e} vs. ${t}`);let n=[];for(let r=0;r<e.length;++r){let a=e[r],s=t[r];if(a>=0&&s>=0&&a!==s)throw Error(`Incompatible shape during merge: ${e} vs. ${t}`);n[r]=a>=0?a:s}return n}class cl{constructor(e,t,n,r,a,s,i){this.name=e,this.dtype=t,this.maxSize=n,this.elementShape=r,this.identicalElementShapes=a,this.dynamicSize=s,this.clearAfterRead=i,this.tensors=[],this.closed_=!1,this.idTensor=r2(0),nS(this.idTensor)}get id(){return this.idTensor.id}get closed(){return this.closed_}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.tensor.id)||t.tensor.dispose()}),this.tensors=[],this.closed_=!0,this.idTensor.dispose()}size(){return this.tensors.length}read(e){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||e>=this.size())throw Error(`Tried to read from index ${e}, but array size is: ${this.size()}`);let t=this.tensors[e];if(t.cleared)throw Error(`TensorArray ${this.name}: Could not read index ${e} twice because it was cleared after a previous read (perhaps try setting clear_after_read = false?).`);return this.clearAfterRead&&(t.cleared=!0),t.read=!0,t.tensor}readMany(e){return e.map(e=>this.read(e))}write(e,t){if(this.closed_)throw Error(`TensorArray ${this.name} has already been closed.`);if(e<0||!this.dynamicSize&&e>=this.maxSize)throw Error(`Tried to write to index ${e}, but array is not resizeable and size is: ${this.maxSize}`);let n=this.tensors[e]||{};if(t.dtype!==this.dtype)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e},
          because the value dtype is ${t.dtype}, but TensorArray dtype is ${this.dtype}.`);if(0===this.size()&&(null==this.elementShape||0===this.elementShape.length)&&(this.elementShape=t.shape),ca(this.elementShape,t.shape,`TensorArray ${this.name}: Could not write to TensorArray index ${e}.`),n.read)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been read.`);if(n.written)throw Error(`TensorArray ${this.name}: Could not write to TensorArray index ${e}, because it has already been written.`);n.tensor=t,nS(t),n.written=!0,this.tensors[e]=n}writeMany(e,t){if(e.length!==t.length)throw Error(`TensorArray ${this.name}: could not write multiple tensors,because the index size: ${e.length} is not the same as tensors size: ${t.length}.`);e.forEach((e,n)=>this.write(e,t[n]))}gather(e,t){if(t&&t!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but gather requested dtype ${t}`);if(e)e=e.slice(0,this.size());else{e=[];for(let t=0;t<this.size();t++)e.push(t)}if(0===e.length)return nv([],[0].concat(this.elementShape));let n=this.readMany(e);return ca(this.elementShape,n[0].shape,"TensorArray shape mismatch: "),ou(n,0)}concat(e){if(e&&e!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but concat requested dtype ${e}`);if(0===this.size())return nv([],[0].concat(this.elementShape));let t=[];for(let e=0;e<this.size();e++)t.push(e);let n=this.readMany(t);return ca(this.elementShape,n[0].shape,`TensorArray shape mismatch: tensor array shape (${this.elementShape}) vs first tensor shape (${n[0].shape})`),am(n,0)}scatter(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);if(e.length!==t.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${e.length} vs. ${t.shape[0]}`);let n=Math.max(...e);if(!this.dynamicSize&&n>=this.maxSize)throw Error(`Max index must be < array size (${n}  vs. ${this.maxSize})`);this.writeMany(e,oS(t,0))}split(e,t){if(t.dtype!==this.dtype)throw Error(`TensorArray dtype is ${this.dtype} but tensor has dtype ${t.dtype}`);let n=0,r=e.map(e=>n+=e);if(n!==t.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${n}, and tensor's shape is: ${t.shape}`);if(!this.dynamicSize&&e.length!==this.maxSize)throw Error(`TensorArray's size is not equal to the size of lengths (${this.maxSize} vs. ${e.length}), and the TensorArray is not marked as dynamically resizeable`);let a=0===n?0:t.size/n,s=[];nk(()=>{t=aP(t,[1,n,a]);for(let n=0;n<e.length;++n){let i=[0,0===n?0:r[n-1],0],o=[1,e[n],a];s[n]=aP(aj(t,i,o),this.elementShape)}return s});let i=[];for(let t=0;t<e.length;t++)i[t]=t;this.writeMany(i,s)}}/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cu{get id(){return this.idTensor.id}constructor(e,t,n,r=-1){this.tensors=e,this.elementShape=t,this.elementDtype=n,null!=e&&e.forEach(e=>{if(n!==e.dtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${e.dtype}`);ca(t,e.shape,"TensorList shape mismatch: "),nS(e)}),this.idTensor=r2(0),this.maxNumElements=r,nS(this.idTensor)}copy(){return new cu([...this.tensors],this.elementShape,this.elementDtype)}clearAndClose(e){this.tensors.forEach(t=>{null!=e&&e.has(t.id)||t.dispose()}),this.tensors.length=0,this.idTensor.dispose()}size(){return this.tensors.length}stack(e,t,n=-1){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(-1!==n&&this.tensors.length!==n)throw Error(`Operation expected a list with ${n} elements but got a list with ${this.tensors.length} elements.`);ca(e,this.elementShape,"TensorList shape mismatch: ");let r=ci(this.elementShape,this.tensors,e);return nk(()=>ou(this.tensors.map(e=>aP(e,r)),0))}popBack(e,t){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);if(0===this.size())throw Error("Trying to pop from an empty list.");let n=ci(this.elementShape,this.tensors,e),r=this.tensors.pop();return r.kept=!1,ca(r.shape,e,"TensorList shape mismatch: "),aP(r,n)}pushBack(e){if(e.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${this.elementDtype}`);if(ca(e.shape,this.elementShape,"TensorList shape mismatch: "),this.maxNumElements===this.size())throw Error("Trying to push element into a full list.");nS(e),this.tensors.push(e)}resize(e){if(e<0)throw Error(`TensorListResize expects size to be non-negative. Got: ${e}`);if(-1!==this.maxNumElements&&e>this.maxNumElements)throw Error(`TensorListResize input size ${e} is greater maxNumElement ${this.maxNumElements}.`);let t=new cu([],this.elementShape,this.elementDtype,this.maxNumElements);t.tensors.length=e;for(let n=0;n<Math.min(this.tensors.length,e);++n)t.tensors[n]=this.tensors[n];return t}getItem(e,t,n){if(n!==this.elementDtype)throw Error(`Invalid data types; op elements ${n}, but list elements ${this.elementDtype}`);if(e<0||e>this.tensors.length)throw Error(`Trying to access element ${e} in a list with ${this.tensors.length} elements.`);if(null==this.tensors[e])throw Error(`element at index ${e} is null.`);ca(this.tensors[e].shape,t,"TensorList shape mismatch: ");let r=ci(this.elementShape,this.tensors,t);return aP(this.tensors[e],r)}setItem(e,t){if(t.dtype!==this.elementDtype)throw Error(`Invalid data types; op elements ${t.dtype}, but list elements ${this.elementDtype}`);if(e<0||-1!==this.maxNumElements&&e>=this.maxNumElements)throw Error(`Trying to set element ${e} in a list with max ${this.maxNumElements} elements.`);ca(this.elementShape,t.shape,"TensorList shape mismatch: "),nS(t),null!=this.tensors[e]&&(this.tensors[e].kept=!1),this.tensors[e]=t}gather(e,t,n){if(t!==this.elementDtype)throw Error(`Invalid data types; op elements ${t}, but list elements ${this.elementDtype}`);ca(this.elementShape,n,"TensorList shape mismatch: "),e=e.slice(0,this.size());let r=ci(this.elementShape,this.tensors,n);return 0===e.length?nv([],[0].concat(r)):nk(()=>ou(e.map(e=>aP(this.tensors[e],r)),0))}concat(e,t){if(e&&e!==this.elementDtype)throw Error(`TensorList dtype is ${this.elementDtype} but concat requested dtype ${e}`);ca(this.elementShape,t,"TensorList shape mismatch: ");let n=ci(this.elementShape,this.tensors,t);return 0===this.size()?nv([],[0].concat(n)):nk(()=>am(this.tensors.map(e=>aP(e,n)),0))}}let cc=async(e,t,n)=>{switch(e.op){case"If":case"StatelessIf":{let r=ur("thenBranch",e,t,n),a=ur("elseBranch",e,t,n),s=ur("cond",e,t,n),i=ur("args",e,t,n);if((await s.data())[0])return n.functionMap[r].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap);return n.functionMap[a].executeFunctionAsync(i,n.tensorArrayMap,n.tensorListMap)}case"While":case"StatelessWhile":{let r=ur("body",e,t,n),a=ur("cond",e,t,n),s=ur("args",e,t,n),i=await n.functionMap[a].executeFunctionAsync(s,n.tensorArrayMap,n.tensorListMap),o=s.map(e=>e.id),l=await i[0].data();i.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||e.dispose()});let u=s;for(;l[0];){let e=u,t=(u=await n.functionMap[r].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap)).map(e=>e.id);e.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()});let s=await n.functionMap[a].executeFunctionAsync(u,n.tensorArrayMap,n.tensorListMap);l=await s[0].data(),s.forEach(e=>{e.kept||-1!==o.indexOf(e.id)||-1!==t.indexOf(e.id)||e.dispose()})}return u}case"LoopCond":return[uc(ur("pred",e,t,n))];case"Switch":{let r=ur("pred",e,t,n),a=ur("data",e,t,n);return a.kept||(a=uc(a)),(await r.data())[0]?[void 0,a]:[a,void 0]}case"Merge":{let r=e.inputNames.find(e=>void 0!==ua(e,t,n));if(r)return[uc(ua(r,t,n))];return}case"Enter":{let r=ur("frameName",e,t,n),a=ur("tensor",e,t,n);return n.enterFrame(r),[uc(a)]}case"Exit":{let r=ur("tensor",e,t,n);return n.exitFrame(),[uc(r)]}case"NextIteration":{let r=ur("tensor",e,t,n);return n.nextIteration(),[uc(r)]}case"TensorArrayV3":{let r=ur("size",e,t,n),a=ur("dtype",e,t,n),s=ur("elementShape",e,t,n),i=ur("dynamicSize",e,t,n),o=ur("clearAfterRead",e,t,n),l=ur("identicalElementShapes",e,t,n),u=new cl(ur("name",e,t,n),a,r,s,l,i,o);return n.addTensorArray(u),[u.idTensor,r2(1)]}case"TensorArrayWriteV3":{let r=ur("tensorArrayId",e,t,n),a=ur("index",e,t,n),s=ur("tensor",e,t,n),i=n.getTensorArray(r.id);return i.write(a,s),[i.idTensor]}case"TensorArrayReadV3":{let r=ur("tensorArrayId",e,t,n),a=ur("index",e,t,n);return[n.getTensorArray(r.id).read(a)]}case"TensorArrayGatherV3":{let r=ur("tensorArrayId",e,t,n),a=ur("indices",e,t,n),s=ur("dtype",e,t,n);return[n.getTensorArray(r.id).gather(a,s)]}case"TensorArrayScatterV3":{let r=ur("tensorArrayId",e,t,n),a=ur("indices",e,t,n),s=ur("tensor",e,t,n),i=n.getTensorArray(r.id);return i.scatter(a,s),[i.idTensor]}case"TensorArrayConcatV3":{let r=ur("tensorArrayId",e,t,n),a=n.getTensorArray(r.id),s=ur("dtype",e,t,n);return[a.concat(s)]}case"TensorArraySplitV3":{let r=ur("tensorArrayId",e,t,n),a=ur("tensor",e,t,n),s=ur("lengths",e,t,n),i=n.getTensorArray(r.id);return i.split(s,a),[i.idTensor]}case"TensorArraySizeV3":{let r=ur("tensorArrayId",e,t,n);return[r2(n.getTensorArray(r.id).size(),"int32")]}case"TensorArrayCloseV3":{let r=ur("tensorArrayId",e,t,n),a=n.getTensorArray(r.id);return a.clearAndClose(),[a.idTensor]}case"TensorListSetItem":{let r=ur("tensorListId",e,t,n),a=ur("index",e,t,n),s=ur("tensor",e,t,n),i=n.getTensorList(r.id);return i.setItem(a,s),[i.idTensor]}case"TensorListGetItem":{let r=ur("tensorListId",e,t,n),a=ur("index",e,t,n),s=ur("elementShape",e,t,n),i=ur("elementDType",e,t,n);return[n.getTensorList(r.id).getItem(a,s,i)]}case"TensorListScatterV2":case"TensorListScatter":{let r=ur("indices",e,t,n),a=function(e,t,n,r){if(t.length!==e.shape[0])throw Error(`Expected len(indices) == tensor.shape[0], but saw: ${t.length} vs. ${e.shape[0]}`);let a=Math.max(...t);if(null!=r&&-1!==r&&a>=r)throw Error(`Max index must be < array size (${a}  vs. ${r})`);let s=new cu([],n,e.dtype,r),i=oS(e,0);return t.forEach((e,t)=>{s.setItem(e,i[t])}),s}(ur("tensor",e,t,n),r,ur("elementShape",e,t,n),ur("numElements",e,t,n));return n.addTensorList(a),[a.idTensor]}case"TensorListReserve":case"EmptyTensorList":{let r=ur("elementShape",e,t,n),a=ur("elementDType",e,t,n),s=ur("TensorListReserve"===e.op?"numElements":"maxNumElements",e,t,n),i=new cu([],r,a,"TensorListReserve"===e.op?-1:s);return n.addTensorList(i),[i.idTensor]}case"TensorListGather":{let r=ur("tensorListId",e,t,n),a=ur("indices",e,t,n),s=ur("elementShape",e,t,n),i=ur("elementDType",e,t,n);return[n.getTensorList(r.id).gather(a,i,s)]}case"TensorListStack":{let r=ur("tensorListId",e,t,n),a=ur("elementShape",e,t,n),s=ur("elementDType",e,t,n),i=ur("numElements",e,t,n);return[n.getTensorList(r.id).stack(a,s,i)]}case"TensorListFromTensor":{let r=function(e,t,n){let r=e.dtype;if(e.shape.length<1)throw Error(`Tensor must be at least a vector, but saw shape: ${e.shape}`);if(e.dtype!==n)throw Error(`Invalid data types; op elements ${e.dtype}, but list elements ${n}`);return ca(e.shape.slice(1),t,"TensorList shape mismatch: "),new cu(oS(e),t,r)}(ur("tensor",e,t,n),ur("elementShape",e,t,n),ur("elementDType",e,t,n));return n.addTensorList(r),[r.idTensor]}case"TensorListConcat":case"TensorListConcatV2":{let r=ur("tensorListId",e,t,n),a=n.getTensorList(r.id),s=ur("dtype",e,t,n),i=ur("elementShape",e,t,n);return[a.concat(s,i)]}case"TensorListPushBack":{let r=ur("tensorListId",e,t,n),a=ur("tensor",e,t,n),s=n.getTensorList(r.id);return s.pushBack(a),[s.idTensor]}case"TensorListPopBack":{let r=ur("tensorListId",e,t,n),a=ur("elementShape",e,t,n),s=ur("elementDType",e,t,n);return[n.getTensorList(r.id).popBack(a,s)]}case"TensorListSplit":{let r=ur("tensor",e,t,n),a=ur("elementShape",e,t,n),s=function(e,t,n){let r=0,a=t.map(e=>r+=e);if(r!==e.shape[0])throw Error(`Expected sum of lengths to be equal to
          tensor.shape[0], but sum of lengths is
        ${r}, and tensor's shape is: ${e.shape}`);let s=co(e.shape.slice(1),n),i=0===r?0:e.size/r,o=nk(()=>{let n=[];e=aP(e,[1,r,i]);for(let r=0;r<t.length;++r){let o=[0,0===r?0:a[r-1],0],l=[1,t[r],i];n[r]=aP(aj(e,o,l),s)}return e.dispose(),n}),l=new cu([],n,e.dtype,t.length);for(let e=0;e<o.length;e++)l.setItem(e,o[e]);return l}(r,ur("lengths",e,t,n),a);return n.addTensorList(s),[s.idTensor]}case"TensorListLength":{let r=ur("tensorListId",e,t,n);return[r2(n.getTensorList(r.id).size(),"int32")]}case"TensorListResize":{let r=ur("tensorListId",e,t,n),a=ur("size",e,t,n),s=n.getTensorList(r.id).resize(a);return n.addTensorList(s),[s.idTensor]}default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function cp(e,t,n){let[r,a]=ur("fusedOps",e,t,n),s="biasadd"===r,i="prelu"===a,o=ur("numArgs",e,t,n);if(s){if(i&&2!==o)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&s&&1!==o)throw Error("FusedConv2d and DepthwiseConv2d with BiasAdd must have one extra argument: bias.")}if("fusedbatchnorm"===r)throw Error("FusedConv2d and DepthwiseConv2d with FusedBatchNorm is not supported");let l=ur("strides",e,t,n),u=uu(e,t,n),c=ur("dataFormat",e,t,n).toUpperCase(),p=ur("dilations",e,t,n),[d,f]=ur("args",e,t,n);return s||(f=d,d=void 0),{stride:l,pad:u,dataFormat:c,dilations:p,biasArg:d,preluArg:f,activationFunc:a,leakyreluAlpha:ur("leakyreluAlpha",e,t,n)}}let cd=(e,t,n,r=ct)=>{switch(e.op){case"Conv1D":{let a=ur("stride",e,t,n),s=ur("pad",e,t,n),i=ur("dataFormat",e,t,n).toUpperCase(),o=ur("dilation",e,t,n);return[r.conv1d(ur("x",e,t,n),ur("filter",e,t,n),a,s,i,o)]}case"Conv2D":{let a=ur("strides",e,t,n),s=uu(e,t,n),i=ur("dataFormat",e,t,n).toUpperCase(),o=ur("dilations",e,t,n);return[r.conv2d(ur("x",e,t,n),ur("filter",e,t,n),[a[1],a[2]],s,i,[o[1],o[2]])]}case"_FusedConv2D":{let{stride:a,pad:s,dataFormat:i,dilations:o,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:p}=cp(e,t,n);return[r.fused.conv2d({x:ur("x",e,t,n),filter:ur("filter",e,t,n),strides:[a[1],a[2]],pad:s,dataFormat:i,dilations:[o[1],o[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:p})]}case"FusedDepthwiseConv2dNative":{let{stride:a,pad:s,dataFormat:i,dilations:o,biasArg:l,preluArg:u,activationFunc:c,leakyreluAlpha:p}=cp(e,t,n);return[r.fused.depthwiseConv2d({x:ur("x",e,t,n),filter:ur("filter",e,t,n),strides:[a[1],a[2]],pad:s,dataFormat:i,dilations:[o[1],o[2]],bias:l,activation:c,preluActivationWeights:u,leakyreluAlpha:p})]}case"Conv2DBackpropInput":case"Conv2dTranspose":{let a=ur("outputShape",e,t,n),s=ur("strides",e,t,n),i=uu(e,t,n);return[r.conv2dTranspose(ur("x",e,t,n),ur("filter",e,t,n),a,[s[1],s[2]],i)]}case"DepthwiseConv2dNative":case"DepthwiseConv2d":{let a=ur("strides",e,t,n),s=uu(e,t,n),i=ur("dilations",e,t,n),o=ur("dataFormat",e,t,n).toUpperCase();return[r.depthwiseConv2d(ur("input",e,t,n),ur("filter",e,t,n),[a[1],a[2]],s,o,[i[1],i[2]])]}case"Conv3D":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("dataFormat",e,t,n).toUpperCase(),o=ur("dilations",e,t,n);return[r.conv3d(ur("x",e,t,n),ur("filter",e,t,n),[a[1],a[2],a[3]],s,i,[o[1],o[2],o[3]])]}case"AvgPool":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("kernelSize",e,t,n);return[r.avgPool(ur("x",e,t,n),[i[1],i[2]],[a[1],a[2]],s)]}case"MaxPool":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("kernelSize",e,t,n);return[r.maxPool(ur("x",e,t,n),[i[1],i[2]],[a[1],a[2]],s)]}case"MaxPoolWithArgmax":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("kernelSize",e,t,n),o=ur("includeBatchInIndex",e,t,n),{result:l,indexes:u}=r.maxPoolWithArgmax(ur("x",e,t,n),[i[1],i[2]],[a[1],a[2]],s,o);return[l,u]}case"AvgPool3D":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("kernelSize",e,t,n);return[r.avgPool3d(ur("x",e,t,n),[i[1],i[2],i[3]],[a[1],a[2],a[3]],s)]}case"MaxPool3D":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("kernelSize",e,t,n);return[r.maxPool3d(ur("x",e,t,n),[i[1],i[2],i[3]],[a[1],a[2],a[3]],s)]}case"Dilation2D":{let a=ur("strides",e,t,n),s=ur("pad",e,t,n),i=ur("dilations",e,t,n),o=a[1],l=a[2],u=i[1],c=i[2];return[r.dilation2d(ur("x",e,t,n),ur("filter",e,t,n),[o,l],s,[u,c],"NHWC")]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},cf=(e,t,n,r=ct)=>{switch(e.op){case"Fill":{let a=ur("shape",e,t,n),s=ur("dtype",e,t,n),i=ur("value",e,t,n);return[r.fill(a,i,s)]}case"LinSpace":{let a=ur("start",e,t,n),s=ur("stop",e,t,n),i=ur("num",e,t,n);return[r.linspace(a,s,i)]}case"Multinomial":{let a=ur("logits",e,t,n),s=ur("numSamples",e,t,n),i=ur("seed",e,t,n);return[r.multinomial(a,s,i)]}case"OneHot":{let a=ur("indices",e,t,n),s=ur("depth",e,t,n),i=ur("onValue",e,t,n),o=ur("offValue",e,t,n),l=ur("dtype",e,t,n);return[r.oneHot(a,s,i,o,l)]}case"Ones":return[r.ones(ur("shape",e,t,n),ur("dtype",e,t,n))];case"OnesLike":return[r.onesLike(ur("x",e,t,n))];case"RandomStandardNormal":return[r.randomStandardNormal(ur("shape",e,t,n),ur("dtype",e,t,n),ur("seed",e,t,n))];case"RandomUniform":return[r.randomUniform(ur("shape",e,t,n),ur("minval",e,t,n),ur("maxval",e,t,n),ur("dtype",e,t,n))];case"RandomUniformInt":return[r.randomUniformInt(ur("shape",e,t,n),ur("minval",e,t,n),ur("maxval",e,t,n),ur("seed",e,t,n))];case"Range":{let a=ur("start",e,t,n),s=ur("stop",e,t,n),i=ur("step",e,t,n);return[r.range(a,s,i,ur("dtype",e,t,n))]}case"TruncatedNormal":{let a=ur("shape",e,t,n),s=ur("mean",e,t,n),i=ur("stdDev",e,t,n),o=ur("seed",e,t,n);return[r.truncatedNormal(a,s,i,ur("dtype",e,t,n),o)]}case"Zeros":return[r.zeros(ur("shape",e,t,n),ur("dtype",e,t,n))];case"ZerosLike":return[r.zerosLike(ur("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2018 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function ch(e,t,n){let r=ur("boxes",e,t,n),a=ur("scores",e,t,n),s=ur("maxOutputSize",e,t,n);return{boxes:r,scores:a,maxOutputSize:s,iouThreshold:ur("iouThreshold",e,t,n),scoreThreshold:ur("scoreThreshold",e,t,n),softNmsSigma:ur("softNmsSigma",e,t,n)}}let cm=async(e,t,n,r,a=ct)=>{switch(e.op){case"NonMaxSuppressionV5":{let{boxes:r,scores:s,maxOutputSize:i,iouThreshold:o,scoreThreshold:l,softNmsSigma:u}=ch(e,t,n),c=await a.image.nonMaxSuppressionWithScoreAsync(r,s,i,o,l,u);return[c.selectedIndices,c.selectedScores]}case"NonMaxSuppressionV4":{let{boxes:r,scores:s,maxOutputSize:i,iouThreshold:o,scoreThreshold:l}=ch(e,t,n),u=ur("padToMaxOutputSize",e,t,n),c=await a.image.nonMaxSuppressionPaddedAsync(r,s,i,o,l,u);return[c.selectedIndices,c.validOutputs]}case"NonMaxSuppressionV3":case"NonMaxSuppressionV2":{let{boxes:r,scores:s,maxOutputSize:i,iouThreshold:o,scoreThreshold:l}=ch(e,t,n);return[await a.image.nonMaxSuppressionAsync(r,s,i,o,l)]}case"Where":{let r=a.cast(ur("condition",e,t,n),"bool"),s=[await a.whereAsync(r)];return r.dispose(),s}case"ListDiff":return a.setdiff1dAsync(ur("x",e,t,n),ur("y",e,t,n));default:throw TypeError(`Node type ${e.op} is not implemented`)}},cg=(e,t,n,r=ct)=>{switch(e.op){case"LowerBound":{let a=ur("sortedSequence",e,t,n),s=ur("values",e,t,n);return[r.lowerBound(a,s)]}case"TopKV2":{let a=ur("x",e,t,n),s=ur("k",e,t,n),i=ur("sorted",e,t,n),o=r.topk(a,s,i);return[o.values,o.indices]}case"UpperBound":{let a=ur("sortedSequence",e,t,n),s=ur("values",e,t,n);return[r.upperBound(a,s)]}case"Unique":{let a=ur("x",e,t,n),s=r.unique(a);return[s.values,s.indices]}case"UniqueV2":{let a=ur("x",e,t,n),s=ur("axis",e,t,n),i=r.unique(a,s);return[i.values,i.indices]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},cy=(e,t,n,r=ct)=>{switch(e.op){case"Const":return t[e.name];case"PlaceholderWithDefault":let a=ur("default",e,t,n);return[ua(e.name,t,n)||a];case"Placeholder":return[ua(e.name,t,n)];case"Identity":case"StopGradient":case"FakeQuantWithMinMaxVars":case"Snapshot":return[uc(ur("x",e,t,n))];case"IdentityN":return ur("x",e,t,n).map(e=>uc(e));case"Shape":return[r.tensor1d(ur("x",e,t,n).shape,"int32")];case"ShapeN":return ur("x",e,t,n).map(e=>r.tensor1d(e.shape));case"Size":return[r.scalar(ur("x",e,t,n).size,"int32")];case"Rank":return[r.scalar(ur("x",e,t,n).rank,"int32")];case"NoOp":return[r.scalar(1)];case"Print":let s=ur("x",e,t,n),i=ur("data",e,t,n),o=ur("message",e,t,n),l=ur("summarize",e,t,n);console.warn("The graph has a tf.print() operation,usually used for debugging, which slows down performance."),console.log(o);for(let e=0;e<i.length;e++)console.log(Array.prototype.slice.call(i[e].dataSync()).slice(0,l));return[s];default:throw TypeError(`Node type ${e.op} is not implemented`)}};/**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */class cb{get id(){return this.handle.id}constructor(e,t){this.keyDType=e,this.valueDType=t,this.handle=r2(0),this.tensorMap=new Map,nS(this.handle)}clearAndClose(){this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),this.handle.dispose()}size(){return this.tensorMap.size}tensorSize(){return r2(this.size(),"int32")}async import(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return this.tensorMap.forEach(e=>e.dispose()),this.tensorMap.clear(),nk(()=>{let e=oS(t),r=n.length,a=e.length;ta.assert(r===a,()=>`The number of elements doesn't match, keys has ${r} elements, the values has ${a} elements.`);for(let t=0;t<r;t++){let r=n[t],a=e[t];nS(a),this.tensorMap.set(r,a)}return this.handle})}async find(e,t){this.checkKeyAndValueTensor(e,t);let n=await e.data();return nk(()=>{let e=[];for(let r=0;r<n.length;r++){let a=n[r],s=this.findWithDefault(a,t);e.push(s)}return ou(e)})}findWithDefault(e,t){let n=this.tensorMap.get(e);return null!=n?n:t}checkKeyAndValueTensor(e,t){if(e.dtype!==this.keyDType)throw Error(`Expect key dtype ${this.keyDType}, but got ${e.dtype}`);if(t.dtype!==this.valueDType)throw Error(`Expect value dtype ${this.valueDType}, but got ${t.dtype}`)}}let cv=async(e,t,n,r)=>{switch(e.op){case"HashTable":case"HashTableV2":{let a=r.getHashTableHandleByName(e.name);if(null!=a)return[a];{let a=new cb(ur("keyDType",e,t,n),ur("valueDType",e,t,n));return r.addHashTable(e.name,a),[a.handle]}}case"InitializeTable":case"InitializeTableV2":case"LookupTableImport":case"LookupTableImportV2":{let a=ur("tableHandle",e,t,n,r),s=ur("keys",e,t,n),i=ur("values",e,t,n),o=r.getHashTableById(a.id);return[await o.import(s,i)]}case"LookupTableFind":case"LookupTableFindV2":{let a=ur("tableHandle",e,t,n,r),s=ur("keys",e,t,n),i=ur("defaultValue",e,t,n),o=r.getHashTableById(a.id);return[await o.find(s,i)]}case"LookupTableSize":case"LookupTableSizeV2":{let a=ur("tableHandle",e,t,n,r);return[r.getHashTableById(a.id).tensorSize()]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},cw=(e,t,n,r=ct)=>{switch(e.op){case"ResizeBilinear":{let a=ur("images",e,t,n),s=ur("size",e,t,n),i=ur("alignCorners",e,t,n),o=ur("halfPixelCenters",e,t,n);return[r.image.resizeBilinear(a,[s[0],s[1]],i,o)]}case"ResizeNearestNeighbor":{let a=ur("images",e,t,n),s=ur("size",e,t,n),i=ur("alignCorners",e,t,n),o=ur("halfPixelCenters",e,t,n);return[r.image.resizeNearestNeighbor(a,[s[0],s[1]],i,o)]}case"CropAndResize":{let a=ur("image",e,t,n),s=ur("boxes",e,t,n),i=ur("boxInd",e,t,n),o=ur("cropSize",e,t,n),l=ur("method",e,t,n),u=ur("extrapolationValue",e,t,n);return[r.image.cropAndResize(a,s,i,o,l,u)]}case"ImageProjectiveTransformV3":{let a=ur("images",e,t,n),s=ur("transforms",e,t,n),i=ur("outputShape",e,t,n),o=ur("fillValue",e,t,n),l=ur("interpolation",e,t,n),u=ur("fillMode",e,t,n);return[r.image.transform(a,s,l.toLowerCase(),u.toLowerCase(),o,i)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},cx=(e,t,n,r=ct)=>{switch(e.op){case"Equal":return[r.equal(ur("a",e,t,n),ur("b",e,t,n))];case"NotEqual":return[r.notEqual(ur("a",e,t,n),ur("b",e,t,n))];case"Greater":return[r.greater(ur("a",e,t,n),ur("b",e,t,n))];case"GreaterEqual":return[r.greaterEqual(ur("a",e,t,n),ur("b",e,t,n))];case"Less":return[r.less(ur("a",e,t,n),ur("b",e,t,n))];case"LessEqual":return[r.lessEqual(ur("a",e,t,n),ur("b",e,t,n))];case"LogicalAnd":return[r.logicalAnd(ur("a",e,t,n),ur("b",e,t,n))];case"LogicalNot":return[r.logicalNot(ur("a",e,t,n))];case"LogicalOr":return[r.logicalOr(ur("a",e,t,n),ur("b",e,t,n))];case"Select":case"SelectV2":return[r.where(ur("condition",e,t,n),ur("a",e,t,n),ur("b",e,t,n))];case"BitwiseAnd":return[r.bitwiseAnd(ur("a",e,t,n),ur("b",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},ck=(e,t,n,r=ct)=>{switch(e.op){case"BatchMatMul":case"BatchMatMulV2":case"MatMul":return[r.matMul(ur("a",e,t,n),ur("b",e,t,n),ur("transposeA",e,t,n),ur("transposeB",e,t,n))];case"Einsum":return[r.einsum(ur("equation",e,t,n),...ur("tensors",e,t,n))];case"Transpose":return[r.transpose(ur("x",e,t,n),ur("perm",e,t,n))];case"_FusedMatMul":let[a,s]=ur("fusedOps",e,t,n),i="prelu"===s,o=ur("numArgs",e,t,n),l=ur("leakyreluAlpha",e,t,n);if("biasadd"===a){if(i&&2!==o)throw Error("Fused MatMul with BiasAdd and Prelu must have two extra arguments: bias and alpha.");if(!i&&1!==o)throw Error("Fused MatMul with BiasAdd must have one extra argument: bias.")}let[u,c]=ur("args",e,t,n);return[r.fused.matMul({a:ur("a",e,t,n),b:ur("b",e,t,n),transposeA:ur("transposeA",e,t,n),transposeB:ur("transposeB",e,t,n),bias:u,activation:s,preluActivationWeights:c,leakyreluAlpha:l})];case"MatrixBandPart":return[r.linalg.bandPart(ur("a",e,t,n),ur("numLower",e,t,n),ur("numUpper",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cN=(e,t,n,r=ct)=>{switch(e.op){case"EuclideanNorm":return[r.euclideanNorm(ur("x",e,t,n),ur("axis",e,t,n),ur("keepDims",e,t,n))];case"FusedBatchNorm":case"FusedBatchNormV2":case"FusedBatchNormV3":return[r.batchNorm(ur("x",e,t,n),ur("mean",e,t,n),ur("variance",e,t,n),ur("offset",e,t,n),ur("scale",e,t,n),ur("epsilon",e,t,n))];case"LRN":return[r.localResponseNormalization(ur("x",e,t,n),ur("radius",e,t,n),ur("bias",e,t,n),ur("alpha",e,t,n),ur("beta",e,t,n))];case"Softmax":return[r.softmax(ur("x",e,t,n))];case"LogSoftmax":return[r.logSoftmax(ur("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cS=(e,t,n,r=ct)=>{switch(e.op){case"RaggedGather":{let{outputNestedSplits:a,outputDenseValues:s}=r.raggedGather(ur("paramsNestedSplits",e,t,n),ur("paramsDenseValues",e,t,n),ur("indices",e,t,n),ur("outputRaggedRank",e,t,n));return a.concat(s)}case"RaggedRange":{let{rtNestedSplits:a,rtDenseValues:s}=r.raggedRange(ur("starts",e,t,n),ur("limits",e,t,n),ur("splits",e,t,n));return[a,s]}case"RaggedTensorToTensor":return[r.raggedTensorToTensor(ur("shape",e,t,n),ur("values",e,t,n),ur("defaultValue",e,t,n),ur("rowPartitionTensors",e,t,n),ur("rowPartitionTypes",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cE=(e,t,n,r=ct)=>{switch(e.op){case"Max":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.max(ur("x",e,t,n),a,s)]}case"Mean":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.mean(ur("x",e,t,n),a,s)]}case"Min":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.min(ur("x",e,t,n),a,s)]}case"Sum":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.sum(ur("x",e,t,n),a,s)]}case"All":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.all(ur("x",e,t,n),a,s)]}case"Any":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.any(ur("x",e,t,n),a,s)]}case"ArgMax":{let a=ur("axis",e,t,n);return[r.argMax(ur("x",e,t,n),a)]}case"ArgMin":{let a=ur("axis",e,t,n);return[r.argMin(ur("x",e,t,n),a)]}case"Prod":{let a=ur("axis",e,t,n),s=ur("keepDims",e,t,n);return[r.prod(ur("x",e,t,n),a,s)]}case"Cumprod":{let a=ur("axis",e,t,n),s=ur("exclusive",e,t,n),i=ur("reverse",e,t,n);return[r.cumprod(ur("x",e,t,n),a,s,i)]}case"Cumsum":{let a=ur("axis",e,t,n),s=ur("exclusive",e,t,n),i=ur("reverse",e,t,n);return[r.cumsum(ur("x",e,t,n),a,s,i)]}case"Bincount":let a=ur("x",e,t,n),s=ur("weights",e,t,n),i=ur("size",e,t,n);return[r.bincount(a,s,i)];case"DenseBincount":{let a=ur("x",e,t,n),s=ur("weights",e,t,n),i=ur("size",e,t,n),o=ur("binaryOutput",e,t,n);return[r.denseBincount(a,s,i,o)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},cT=(e,t,n,r=ct)=>{switch(e.op){case"ConcatV2":case"Concat":{let a=ur("n",e,t,n),s=ur("axis",e,t,n),i=ur("tensors",e,t,n);return i=i.slice(0,a),[r.concat(i,s)]}case"Gather":{let a=ur("x",e,t,n),s=ur("indices",e,t,n);return[r.gather(a,r.cast(s,"int32"),0)]}case"GatherV2":{let a=ur("axis",e,t,n),s=ur("batchDims",e,t,n),i=ur("x",e,t,n),o=ur("indices",e,t,n);return[r.gather(i,r.cast(o,"int32"),a,s)]}case"Reverse":{let a=ur("dims",e,t,n),s=[];for(let e=0;e<a.length;e++)a[e]&&s.push(e);let i=ur("x",e,t,n);return[r.reverse(i,s)]}case"ReverseV2":{let a=ur("axis",e,t,n),s=ur("x",e,t,n);return[r.reverse(s,a)]}case"Slice":{let a=ur("begin",e,t,n),s=ur("size",e,t,n);return[r.slice(ur("x",e,t,n),a,s)]}case"StridedSlice":{let a=ur("begin",e,t,n),s=ur("end",e,t,n),i=ur("strides",e,t,n),o=ur("beginMask",e,t,n),l=ur("endMask",e,t,n),u=ur("ellipsisMask",e,t,n),c=ur("newAxisMask",e,t,n),p=ur("shrinkAxisMask",e,t,n),d=ur("x",e,t,n);return[r.stridedSlice(d,a,s,i,o,l,u,c,p)]}case"Pack":return nk(()=>{let a=ur("axis",e,t,n),s=ur("tensors",e,t,n),i=s[0].shape,o=r.squeeze(s[0]).shape,l=s.map(e=>{let t=ta.arraysEqual(e.shape,i);if(!t&&!ta.arraysEqual(r.squeeze(e).shape,o))throw Error("the input tensors shape does not match");return t?e:r.reshape(e,i)});return[r.stack(l,a)]});case"Unpack":{let a=ur("axis",e,t,n),s=ur("tensor",e,t,n);return r.unstack(s,a)}case"Tile":{let a=ur("reps",e,t,n);return[r.tile(ur("x",e,t,n),a)]}case"Split":case"SplitV":{let a=ur("axis",e,t,n),s=ur("numOrSizeSplits",e,t,n),i=ur("x",e,t,n);return r.split(i,s,a)}case"ScatterNd":{let a=ur("indices",e,t,n),s=ur("values",e,t,n),i=ur("shape",e,t,n);return[r.scatterND(a,s,i)]}case"GatherNd":{let a=ur("x",e,t,n),s=ur("indices",e,t,n);return[r.gatherND(a,s)]}case"SparseToDense":{let a=ur("sparseIndices",e,t,n),s=ur("outputShape",e,t,n),i=ur("sparseValues",e,t,n),o=ur("defaultValue",e,t,n);return[r.sparseToDense(a,i,s,i.dtype===o.dtype?o:r.cast(o,i.dtype))]}case"TensorScatterUpdate":{let a=ur("indices",e,t,n),s=ur("values",e,t,n),i=ur("tensor",e,t,n);return[r.tensorScatterUpdate(i,a,s)]}default:throw TypeError(`Node type ${e.op} is not implemented`)}},c_=(e,t,n,r=ct)=>{switch(e.op){case"SparseFillEmptyRows":{let{outputIndices:a,outputValues:s,emptyRowIndicator:i,reverseIndexMap:o}=r.sparse.sparseFillEmptyRows(ur("indices",e,t,n),ur("values",e,t,n),ur("denseShape",e,t,n),ur("defaultValue",e,t,n));return[a,s,i,o]}case"SparseReshape":{let{outputIndices:a,outputShape:s}=r.sparse.sparseReshape(ur("inputIndices",e,t,n),ur("inputShape",e,t,n),ur("newShape",e,t,n));return[a,s]}case"SparseSegmentMean":return[r.sparse.sparseSegmentMean(ur("data",e,t,n),ur("indices",e,t,n),ur("segmentIds",e,t,n))];case"SparseSegmentSum":return[r.sparse.sparseSegmentSum(ur("data",e,t,n),ur("indices",e,t,n),ur("segmentIds",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cI=(e,t,n,r=ct)=>{switch(e.op){case"FFT":return[r.fft(ur("x",e,t,n))];case"IFFT":return[r.ifft(ur("x",e,t,n))];case"RFFT":return[r.rfft(ur("x",e,t,n))];case"IRFFT":return[r.irfft(ur("x",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cA=(e,t,n,r=ct)=>{switch(e.op){case"StaticRegexReplace":return[r.string.staticRegexReplace(ur("input",e,t,n),ur("pattern",e,t,n),ur("rewrite",e,t,n),ur("replaceGlobal",e,t,n))];case"StringNGrams":{let{nGrams:a,nGramsSplits:s}=r.string.stringNGrams(ur("data",e,t,n),ur("dataSplits",e,t,n),ur("separator",e,t,n),ur("nGramWidths",e,t,n),ur("leftPad",e,t,n),ur("rightPad",e,t,n),ur("padWidth",e,t,n),ur("preserveShortSequences",e,t,n));return[a,s]}case"StringSplit":{let{indices:a,values:s,shape:i}=r.string.stringSplit(ur("input",e,t,n),ur("delimiter",e,t,n),ur("skipEmpty",e,t,n));return[a,s,i]}case"StringToHashBucketFast":return[r.string.stringToHashBucketFast(ur("input",e,t,n),ur("numBuckets",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}},cM=(e,t,n,r=ct)=>{switch(e.op){case"Cast":return[r.cast(ur("x",e,t,n),ur("dtype",e,t,n))];case"ExpandDims":{let a=ur("axis",e,t,n);return[r.expandDims(ur("x",e,t,n),a)]}case"Squeeze":{let a=ur("axis",e,t,n);return[r.squeeze(ur("x",e,t,n),a)]}case"Reshape":return[r.reshape(ur("x",e,t,n),ur("shape",e,t,n))];case"EnsureShape":return[r.ensureShape(ur("x",e,t,n),ur("shape",e,t,n))];case"MirrorPad":return[r.mirrorPad(ur("x",e,t,n),ur("padding",e,t,n),ur("mode",e,t,n))];case"PadV2":case"Pad":return[r.pad(ur("x",e,t,n),ur("padding",e,t,n),ur("constantValue",e,t,n))];case"SpaceToBatchND":{let a=ur("blockShape",e,t,n),s=ur("paddings",e,t,n);return[r.spaceToBatchND(ur("x",e,t,n),a,s)]}case"BatchToSpaceND":{let a=ur("blockShape",e,t,n),s=ur("crops",e,t,n);return[r.batchToSpaceND(ur("x",e,t,n),a,s)]}case"DepthToSpace":{let a=ur("blockSize",e,t,n),s=ur("dataFormat",e,t,n).toUpperCase();return[r.depthToSpace(ur("x",e,t,n),a,s)]}case"BroadcastTo":return[r.broadcastTo(ur("x",e,t,n),ur("shape",e,t,n))];case"BroadcastArgs":return[r.broadcastArgs(ur("s0",e,t,n),ur("s1",e,t,n))];default:throw TypeError(`Node type ${e.op} is not implemented`)}};function cO(e,t,n,r,a=nk){let s=((e,t,n)=>{switch(e.category){case"arithmetic":return a(()=>cn(e,t,n));case"basic_math":return a(()=>cr(e,t,n));case"control":return cc(e,t,n);case"convolution":return a(()=>cd(e,t,n));case"creation":return a(()=>cf(e,t,n));case"dynamic":return cm(e,t,n);case"evaluation":return a(()=>cg(e,t,n));case"image":return a(()=>cw(e,t,n));case"graph":return a(()=>cy(e,t,n));case"logical":return a(()=>cx(e,t,n));case"matrices":return a(()=>ck(e,t,n));case"normalization":return a(()=>cN(e,t,n));case"ragged":return a(()=>cS(e,t,n));case"reduction":return a(()=>cE(e,t,n));case"slice_join":return a(()=>cT(e,t,n));case"sparse":return a(()=>c_(e,t,n));case"spectral":return a(()=>cI(e,t,n));case"string":return a(()=>cA(e,t,n));case"transformation":return a(()=>cM(e,t,n));case"hash_table":return cv(e,t,n,r);case"custom":let s=un[e.op];if(s&&s.customExecutor)return s.customExecutor(new ce(e,t,n));throw TypeError(`Custom op ${e.op} is not registered.`);default:throw TypeError(`Unknown op '${e.op}'. File an issue at https://github.com/tensorflow/tfjs/issues so we can add it, or register a custom execution with tf.registerOp()`)}})(e,t,n);return ta.isPromise(s)?s.then(e=>[].concat(e)):[].concat(s)}class cC{constructor(e={},t={},n={},r={},a){this.weightMap=e,this.tensorArrayMap=t,this.tensorListMap=n,this.functionMap=r,this.parseNodeNameCache=a,this.rootContext={id:0,frameName:"",iterationId:0},this.contexts=[this.rootContext],this.lastId=0,this.generateCurrentContextIds()}newFrame(e,t){return{id:e,frameName:t,iterationId:0}}set currentContext(e){this.contexts!==e&&(this.contexts=e,this.generateCurrentContextIds())}get currentContext(){return this.contexts}get currentContextId(){return this._currentContextIds[0]}get currentContextIds(){return this._currentContextIds}generateCurrentContextIds(){let e=[];for(let t=0;t<this.contexts.length-1;t++){let n=this.contexts.slice(0,this.contexts.length-t);e.push(this.contextIdforContexts(n))}e.push(""),this._currentContextIds=e}contextIdforContexts(e){return e?e.map(e=>0===e.id&&0===e.iterationId?"":`${e.frameName}-${e.iterationId}`).join("/"):""}enterFrame(e){this.contexts&&(this.lastId++,this.contexts=this.contexts.slice(),this.contexts.push(this.newFrame(this.lastId,e)),this._currentContextIds.unshift(this.contextIdforContexts(this.contexts)))}exitFrame(){if(this.contexts&&this.contexts.length>1)this.contexts=this.contexts.slice(),this.contexts.splice(-1),this.currentContextIds.shift();else throw Error("Cannot exit frame, the context is empty")}nextIteration(){if(this.contexts&&this.contexts.length>0){this.contexts=this.contexts.slice(),this.lastId++;let e=Object.assign({},this.contexts[this.contexts.length-1]);e.iterationId+=1,e.id=this.lastId,this.contexts.splice(-1,1,e),this._currentContextIds.splice(0,1,this.contextIdforContexts(this.contexts))}else throw Error("Cannot increase frame iteration, the context is empty")}getWeight(e){return this.weightMap[e]}addTensorArray(e){this.tensorArrayMap[e.id]=e}getTensorArray(e){return this.tensorArrayMap[e]}addTensorList(e){this.tensorListMap[e.id]=e}getTensorList(e){return this.tensorListMap[e]}dispose(e){for(let t in this.tensorArrayMap)this.tensorArrayMap[t].clearAndClose(e);for(let t in this.tensorListMap)this.tensorListMap[t].clearAndClose(e)}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */function c$(e,t,n,r){let a=new Set,s=[],i=null,o=null,l=new Set,u=new Set(Object.keys(e).map(e=>ul(e)[0])),c=new Set((r=r||[]).map(e=>ul(e.name)[0])),p=[...t];for(;p.length>0;){let e=p.pop();if((cz(e)||cL.has(e.op)||cF.has(e.op))&&null==i&&(o=(i=e).children.map(e=>e.name).filter(e=>a.has(e))),a.add(e.name),!(null!=n[e.name]||u.has(e.name)||c.has(e.name))){if(0===e.inputs.length){s.push(e.name);continue}e.inputs.forEach(e=>{l.has(e.name)||(l.add(e.name),p.push(e))})}}return{inputs:e,outputs:t,usedNodes:a,missingInputs:s,dynamicNode:i,syncInputs:o}}class cD extends Error{constructor(e){super(`NodesExecutionOrderError: ${e}`)}}let cR=new Set(["Switch","Merge","Enter","Exit","NextIteration","StatelessIf","StatelessWhile","if","While"]),cL=new Set(["NonMaxSuppressionV2","NonMaxSuppressionV3","NonMaxSuppressionV5","Where"]),cF=new Set(["HashTable","HashTableV2","LookupTableImport","LookupTableImportV2","LookupTableFind","LookupTableFindV2","LookupTableSize","LookupTableSizeV2"]);function cz(e){return cR.has(e.op)}class cP{get weightIds(){return this.parent?this.parent.weightIds:this._weightIds}get functionExecutorMap(){return this.parent?this.parent.functionExecutorMap:this._functionExecutorMap}get weightMap(){return this.parent?this.parent.weightMap:this._weightMap}set weightMap(e){let t=Object.keys(e).map(t=>e[t].map(e=>e.id));this._weightIds=[].concat(...t),this._weightMap=e}set resourceManager(e){this._resourceManager=e}get inputs(){return this._inputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get outputs(){return this._outputs.map(e=>({name:e.name,shape:e.attrParams.shape?e.attrParams.shape.value:void 0,dtype:e.attrParams.dtype?e.attrParams.dtype.value:void 0}))}get inputNodes(){return this._inputs.map(e=>e.signatureKey||e.name)}get outputNodes(){return this._outputs.map(e=>{let t=e.signatureKey||e.name;return e.defaultOutput?`${t}:${e.defaultOutput}`:t})}get functions(){return Object.keys(this._functions).reduce((e,t)=>(e[t]=this._functions[t].signature,e),{})}constructor(e,t){this.graph=e,this.parent=t,this.compiledMap=new Map,this.parseNodeNameCache=new Map,this._weightMap={},this.SEPARATOR=",",this._functions={},this._functionExecutorMap={},this.keepIntermediateTensors=!1,this._outputs=e.outputs,this._inputs=e.inputs,this._initNodes=e.initNodes,this._signature=e.signature,this._functions=e.functions,null!=e.functions&&Object.keys(e.functions).forEach(t=>{this._functionExecutorMap[t]=new cP(e.functions[t],this)})}getCompilationKey(e,t){let n=e.map(e=>e.name).sort(),r=t.map(e=>e.name).sort();return n.join(this.SEPARATOR)+"--"+r.join(this.SEPARATOR)}compile(e,t){let n=c$(e,t,this.weightMap,this._initNodes),{missingInputs:r,dynamicNode:a,syncInputs:s}=n;if(null!=a)throw Error(`This execution contains the node '${a.name}', which has the dynamic op '${a.op}'. Please use model.executeAsync() instead. Alternatively, to avoid the dynamic ops, specify the inputs [${s}]`);if(r.length>0){let n=t.map(e=>e.name),a=Object.keys(e);throw Error(`Cannot compute the outputs [${n}] from the provided inputs [${a}]. Missing the following inputs: [${r}]`)}let i=function(e,t){let{usedNodes:n,inputs:r}=t,a=Object.keys(r).map(e=>ul(e)[0]).map(t=>e.nodes[t]),s=e.initNodes||[],i=e=>n.has("string"==typeof e?e:e.name);function o(e){return[...new Map(e.map(e=>[e.name,e])).values()]}let l=o([...a,...e.weights,...s]).filter(i),u=o([...l,...Object.values(e.nodes)]).filter(i),c=new Map(u.map(e=>[e.name,e])),p={};for(let e of u)for(let t of(p[e.name]=p[e.name]||0,e.children))i(t)||(p[t.name]=Number.POSITIVE_INFINITY),p[t.name]=(p[t.name]||0)+1;let d=Object.entries(p).filter(([,e])=>0===e).map(([e])=>e),f=[...d];for(;d.length>0;){let e=d.pop();for(let t of c.get(e).children.filter(i))0==--p[t.name]&&(f.push(t.name),d.push(t.name))}let h=function(e,t){let n=new Map(e.map(e=>[e.name,e])),r=t.map(e=>e.name),a=new Set(r);for(;r.length>0;){let e=r.pop();for(let t of n.get(e).children)!n.has(t.name)||a.has(t.name)||(a.add(t.name),r.push(t.name))}return e.filter(e=>a.has(e.name))}(f.map(e=>c.get(e)),l);return function(e,t){let n=new Map(e.map((e,t)=>[e.name,t])),r=new Set(t.map(e=>e.name)),a=e=>r.has("string"==typeof e?e:e.name),s=new Set(e.map(e=>e.name)),i=e=>s.has("string"==typeof e?e:e.name);for(let t of e){for(let e of t.children.filter(i)){if(!n.has(e.name))throw new cD(`Child ${e.name} of node ${t.name} is unreachable.`);if(n.get(t.name)>n.get(e.name))throw new cD(`Node ${t.name} is scheduled to run after its child ${e.name}.`)}if(!a(t))for(let e of t.inputs){if(!n.has(e.name))throw new cD(`Input ${e.name} of node ${t.name} is unreachable.`);if(n.get(e.name)>n.get(t.name))throw new cD(`Node ${t.name} is scheduled to run before its input ${e.name}.`)}}}(h,l),h}(this.graph,n),o=function(e){let t=new Map(e.map((e,t)=>[e.name,t])),n=Number.MAX_SAFE_INTEGER,r=e.map((e,t)=>cz(e)?n:t),a=e=>{let n=r[t.get(e.name)];return null==n?-1:n},s=e.map((e,t)=>e.children.map(a).reduce((e,t)=>Math.max(e,t),r[t])),i=new Map;for(let t=0;t<e.length;++t){let r=s[t];if(r===n)continue;let a=e[t],o=e[r];i.has(o.name)||i.set(o.name,[]),i.get(o.name).push(a)}return i}(i);return{orderedNodes:i,nodeLiveUntilMap:o}}cloneAndKeepTensor(e){if(null==e)return null;let t=e.clone();return nS(t),t}cloneTensorList(e){return e?e.map(e=>this.cloneAndKeepTensor(e)):null}cloneTensorMap(e){return Object.fromEntries(Object.entries(e).map(([e,t])=>[e,this.cloneTensorList(t)]))}execute(e,t){this.disposeIntermediateTensors();let n=Object.keys(e=this.mapInputs(e)).sort();this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t);let r=n.map(e=>this.graph.nodes[ul(e)[0]]),a=t.map(e=>ul(e)[0]),s=new Set(a),i=a.map(e=>this.graph.nodes[e]);0===i.length&&(i=this._outputs);let o=this.getCompilationKey(r,i),l=this.compiledMap.get(o);null==l&&(l=this.compile(e,i),this.compiledMap.set(o,l));try{this.keepIntermediateTensors=eP.getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){this.keepIntermediateTensors=!1,console.warn(e.message)}let u={},c={};return nk(()=>{let n=new cC(this.weightMap,u,c,this.functionExecutorMap,this.parseNodeNameCache),r=Object.assign({},this.weightMap);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap)),Object.keys(e).forEach(t=>{let[a,s]=ul(t,n),i=[];i[s]=e[t],r[a]=i,this.keepIntermediateTensors&&(this.clonedTensorsMap[a]=this.cloneTensorList(i))});let a=this.getFrozenTensorIds(r),{orderedNodes:i,nodeLiveUntilMap:o}=l;for(let e of i){if(r[e.name])continue;let t=cO(e,r,n,this._resourceManager);if(ta.isPromise(t))throw Error(`The execution of the op '${e.op}' returned a promise. Please use model.executeAsync() instead.`);r[e.name]=t,this.keepIntermediateTensors&&(this.clonedTensorsMap[e.name]=this.cloneTensorList(t)),this.checkTensorForDisposalWithNodeLiveUntilInfo(e,r,n,a,s,o.get(e.name))}return null==this.parent&&n.dispose(a),t.map(e=>ua(e,r,n))})}getFrozenTensorIds(e){return new Set([].concat.apply([],Object.keys(e).map(t=>e[t]).map(e=>e.map(e=>e.id))))}checkTensorForDisposal(e,t,n,r,a,s,i){if(!(cz(t)||s.has(e))){for(let r of n[e])null!=r&&(i[r.id]=(i[r.id]||0)+t.children.length);for(let e of t.inputs){if(cz(e))continue;let t=us(e.name,n,r);if(null!=t)for(let e of t){if(!e||e.kept||a.has(e.id))continue;let t=i[e.id];1===t?(e.dispose(),delete i[e.id]):null!=t&&i[e.id]--}}}}checkTensorForDisposalWithNodeLiveUntilInfo(e,t,n,r,a,s){if(!cz(e)&&null!=s){for(let e of s)if(!(cz(e)||a.has(e.name)))for(let a of us(e.name,t,n))!a||a.kept||r.has(a.id)||a.dispose()}}async executeAsync(e,t){return this._executeAsync(e,t)}disposeIntermediateTensors(){this.clonedTensorsMap&&(Object.values(this.clonedTensorsMap).forEach(e=>{for(let t of e)t&&!t.isDisposed&&t.dispose()}),this.clonedTensorsMap=null)}getIntermediateTensors(){return this.clonedTensorsMap}async _executeAsync(e,t,n=!1,r={},a={}){this.disposeIntermediateTensors(),n||(e=this.mapInputs(e),this.checkInputs(e),this.checkInputShapeAndType(e),t=this.mapOutputs(t),this.checkOutputs(t));try{this.keepIntermediateTensors=eP.getBool("KEEP_INTERMEDIATE_TENSORS")}catch(e){this.keepIntermediateTensors=!1,console.warn(e.message)}let s=new cC(this.weightMap,r,a,this.functionExecutorMap,this.parseNodeNameCache);this.keepIntermediateTensors&&(this.clonedTensorsMap=this.cloneTensorMap(this.weightMap));let i=await this.executeWithControlFlow(e,s,t,n),o=t.map(e=>ua(e,i,s)),l=new Set([...o.map(e=>e.id),...Object.keys(e).map(t=>e[t].id),...this.weightIds]);return Object.values(i).forEach(e=>{e.forEach(e=>{!e||e.isDisposed||l.has(e.id)||e.dispose()})}),null==this.parent&&s.dispose(l),o}async executeFunctionAsync(e,t,n){let r=e.reduce((e,t,n)=>(e[this.inputs[n].name]=t,e),{});return this._executeAsync(r,this.outputNodes,!0,t,n)}async executeWithControlFlow(e,t,n,r){let a=Object.keys(e),s=a.map(e=>this.graph.nodes[ul(e)[0]]),i=n.map(e=>ul(e)[0]),o=new Set(i),l=i.map(e=>this.graph.nodes[e]);0===l.length&&(l=this._outputs);let{usedNodes:u,missingInputs:c,dynamicNode:p,syncInputs:d}=c$(e,l,this.weightMap,this._initNodes),f=[...s,...this.graph.weights,...this._initNodes||[]].map(e=>({node:e,contexts:t.currentContext})),h=Object.assign({},this.weightMap);Object.keys(e).forEach(t=>{let[n,r]=ul(t),a=[];a[r]=e[t],h[n]=a});let m={},g=this.getFrozenTensorIds(h),y={};for(;f.length>0;){let e=this.processStack(s,f,t,h,y,g,o,m,u);await Promise.all(e)}null!=p||r||console.warn("This model execution did not contain any nodes with control flow or dynamic output shapes. You can use model.execute() instead.");let b=l.filter(e=>!cz(e)&&!ua(e.name,h,t)).map(e=>e.name);if(b.length>0){let e="";throw null!=p&&(e=`Alternatively, to avoid the dynamic ops, use model.execute() and specify the inputs [${d}]`),Error(`Cannot compute the outputs [${b}] from the provided inputs [${a}]. Consider providing the following inputs: [${c}]. ${e}`)}return h}processStack(e,t,n,r,a,s,i,o,l){let u=[];for(;t.length>0;){let e=t.pop();n.currentContext=e.contexts;let c="";if("Enter"===e.node.op&&ur("isConstant",e.node,r,n)&&([c]=ui(e.node.name,n)),null==r[e.node.name]){let p=cO(e.node,r,n,this._resourceManager);c||([c]=ui(e.node.name,n));let d=n.currentContext;ta.isPromise(p)?u.push(p.then(u=>(r[c]=u,this.keepIntermediateTensors&&(this.clonedTensorsMap[c]=this.cloneTensorList(u)),n.currentContext=d,this.checkTensorForDisposal(c,e.node,r,n,s,i,o),this.processChildNodes(e.node,t,n,r,a,l),u))):(r[c]=p,this.keepIntermediateTensors&&(this.clonedTensorsMap[c]=this.cloneTensorList(p)),this.checkTensorForDisposal(c,e.node,r,n,s,i,o),this.processChildNodes(e.node,t,n,r,a,l))}else this.processChildNodes(e.node,t,n,r,a,l)}return u}processChildNodes(e,t,n,r,a,s){e.children.forEach(e=>{let[i]=ui(e.name,n);!a[i]&&s.has(e.name)&&("Merge"===e.op?e.inputNames.some(e=>!!ua(e,r,n))&&(a[i]=!0,t.push({contexts:n.currentContext,node:e})):e.inputNames.every(e=>!!ua(e,r,n))&&(a[i]=!0,t.push({contexts:n.currentContext,node:e})))})}dispose(){Object.keys(this.weightMap).forEach(e=>this.weightMap[e].forEach(e=>e.dispose()))}checkInputShapeAndType(e){Object.keys(e).forEach(t=>{let n=e[t],[r]=ul(t),a=this.graph.nodes[r];if(a.attrParams.shape&&a.attrParams.shape.value){let e=a.attrParams.shape.value,t=e.length===n.shape.length&&n.shape.every((t,n)=>-1===e[n]||e[n]===t);ta.assert(t,()=>`The shape of dict['${a.name}'] provided in model.execute(dict) must be [${e}], but was [${n.shape}]`)}a.attrParams.dtype&&a.attrParams.dtype.value&&ta.assert(n.dtype===a.attrParams.dtype.value,()=>`The dtype of dict['${a.name}'] provided in model.execute(dict) must be ${a.attrParams.dtype.value}, but was ${n.dtype}`)})}mapInputs(e){var t,n;let r={};for(let a in e){let s=null===(n=null===(t=this._signature)||void 0===t?void 0:t.inputs)||void 0===n?void 0:n[a];null!=s?r[s.name]=e[a]:r[a]=e[a]}return r}checkInputs(e){let t=Object.keys(e).filter(e=>{let[t]=ul(e);return null==this.graph.nodes[t]});if(t.length>0)throw Error(`The dict provided in model.execute(dict) has keys: [${t}] that are not part of graph`)}mapOutputs(e){return e.map(e=>{var t,n;let r=null===(n=null===(t=this._signature)||void 0===t?void 0:t.outputs)||void 0===n?void 0:n[e];return null!=r?r.name:e},{})}checkOutputs(e){e.forEach(e=>{let[t]=ul(e);if(!this.graph.nodes[t])throw Error(`The output '${e}' is not found in the graph`)})}}class cB{constructor(e={},t={}){this.hashTableNameToHandle=e,this.hashTableMap=t}addHashTable(e,t){this.hashTableNameToHandle[e]=t.handle,this.hashTableMap[t.id]=t}getHashTableHandleByName(e){return this.hashTableNameToHandle[e]}getHashTableById(e){return this.hashTableMap[e]}dispose(){for(let e in this.hashTableMap)this.hashTableMap[e].clearAndClose(),delete this.hashTableMap[e];for(let e in this.hashTableNameToHandle)this.hashTableNameToHandle[e].dispose(),delete this.hashTableNameToHandle[e]}}class cU{get modelVersion(){return this.version}get inputNodes(){return this.executor.inputNodes}get outputNodes(){return this.executor.outputNodes}get inputs(){return this.executor.inputs}get outputs(){return this.executor.outputs}get weights(){return this.executor.weightMap}get metadata(){return this.artifacts.userDefinedMetadata}get modelSignature(){return this.signature}get modelStructuredOutputKeys(){return this.structuredOutputKeys}constructor(e,t={},n=lH){this.modelUrl=e,this.loadOptions=t,this.version="n/a",this.io=n,null==t&&(this.loadOptions={}),this.resourceManager=new cB}findIOHandler(){let e=this.modelUrl;if(null!=e.load)this.handler=e;else if(null!=this.loadOptions.requestInit)this.handler=this.io.browserHTTPRequest(e,this.loadOptions);else{let t=this.io.getLoadHandlers(e,this.loadOptions);if(0===t.length)t.push(this.io.browserHTTPRequest(e,this.loadOptions));else if(t.length>1)throw Error(`Found more than one (${t.length}) load handlers for URL '${[e]}'`);this.handler=t[0]}}load(){if(this.findIOHandler(),null==this.handler.load)throw Error("Cannot proceed with model loading because the IOHandler provided does not have the `load` method implemented.");let e=this.handler.load();return ta.isPromise(e)?e.then(e=>null==e.getWeightStream?this.loadSync(e):this.loadStreaming(e)):this.loadSync(e)}loadSync(e){let t=this.io.decodeWeights(e.weightData,e.weightSpecs);return this.loadWithWeightMap(e,t)}async loadStreaming(e){if(null==e.getWeightStream)throw Error("Model artifacts missing streamWeights function");let t=await rl(e.getWeightStream(),e.weightSpecs);return this.loadWithWeightMap(e,t)}loadWithWeightMap(e,t){this.artifacts=e;let n=this.artifacts.modelTopology,r=this.artifacts.signature;if(null!=this.artifacts.userDefinedMetadata){let e=this.artifacts.userDefinedMetadata;null!=e.signature&&(r=e.signature),null!=e.structuredOutputKeys&&(this.structuredOutputKeys=e.structuredOutputKeys)}if(this.signature=r,this.version=`${n.versions.producer}.${n.versions.minConsumer}`,this.executor=new cP(uQ.Instance.transformGraph(n,this.signature)),this.executor.weightMap=this.convertTensorMapToTensorsMap(t),this.executor.resourceManager=this.resourceManager,null!=e.modelInitializer&&null!=e.modelInitializer.node){let t=uQ.Instance.transformGraph(e.modelInitializer);this.initializer=new cP(t),this.initializer.weightMap=this.executor.weightMap,this.initializer.resourceManager=this.resourceManager,this.initializerSignature=e.initializerSignature}return!0}async save(e,t){if("string"==typeof e){let t=this.io.getSaveHandlers(e);if(0===t.length)throw Error(`Cannot find any save handlers for URL '${e}'`);if(t.length>1)throw Error(`Found more than one (${t.length}) save handlers for URL '${e}'`);e=t[0]}if(null==e.save)throw Error("GraphModel.save() cannot proceed because the IOHandler provided does not have the `save` attribute defined.");return e.save(this.artifacts)}addStructuredOutputNames(e){if(this.structuredOutputKeys){let t={};return(e instanceof t5?[e]:e).forEach((e,n)=>t[this.structuredOutputKeys[n]]=e),t}return e}predict(e,t){let n=this.execute(e,this.outputNodes);return this.addStructuredOutputNames(n)}async predictAsync(e,t){let n=await this.executeAsync(e,this.outputNodes);return this.addStructuredOutputNames(n)}normalizeInputs(e){var t;if(!(e instanceof t5)&&!Array.isArray(e)){let n=null===(t=this.signature)||void 0===t?void 0:t.inputs;if(null!=n)for(let t in n){let r=n[t];null!=r.resourceId&&(e[t]=this.resourceIdToCapturedInput[r.resourceId])}return e}e=Array.isArray(e)?e:[e];let n=Object.keys(this.resourceIdToCapturedInput).length;if(e.length+n!==this.inputNodes.length)throw Error(`Input tensor count mismatch, the graph model has ${this.inputNodes.length-n} non-resource placeholders, while there are ${e.length} input tensors provided.`);let r=0;return this.inputNodes.reduce((t,n)=>{var a,s,i;let o=null===(i=null===(s=null===(a=this.signature)||void 0===a?void 0:a.inputs)||void 0===s?void 0:s[n])||void 0===i?void 0:i.resourceId;return null!=o?t[n]=this.resourceIdToCapturedInput[o]:t[n]=e[r++],t},{})}normalizeOutputs(e){return Array.isArray(e=e||this.outputNodes)?e:[e]}executeInitializerGraph(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.execute({},[]):this.initializer.execute({},Object.keys(this.initializerSignature.outputs))}async executeInitializerGraphAsync(){return null==this.initializer?[]:null==this.initializerSignature?this.initializer.executeAsync({},[]):this.initializer.executeAsync({},Object.keys(this.initializerSignature.outputs))}setResourceIdToCapturedInput(e){if(this.resourceIdToCapturedInput={},this.initializerSignature){let t=this.initializerSignature.outputs,n=Object.keys(t);for(let r=0;r<n.length;r++){let a=t[n[r]];this.resourceIdToCapturedInput[a.resourceId]=e[r]}}}execute(e,t){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(this.executeInitializerGraph()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=this.executor.execute(e,t);return n.length>1?n:n[0]}async executeAsync(e,t){null==this.resourceIdToCapturedInput&&this.setResourceIdToCapturedInput(await this.executeInitializerGraphAsync()),e=this.normalizeInputs(e),t=this.normalizeOutputs(t);let n=await this.executor.executeAsync(e,t);return n.length>1?n:n[0]}getIntermediateTensors(){return this.executor.getIntermediateTensors()}disposeIntermediateTensors(){this.executor.disposeIntermediateTensors()}convertTensorMapToTensorsMap(e){return Object.keys(e).reduce((t,n)=>(t[n]=[e[n]],t),{})}dispose(){this.executor.dispose(),this.initializer&&(this.initializer.dispose(),this.resourceIdToCapturedInput&&nN(this.resourceIdToCapturedInput)),this.resourceManager.dispose()}}async function cV(e,t={},n=lH){var r;if(null==e)throw Error("modelUrl in loadGraphModel() cannot be null. Please provide a url or an IOHandler that loads the model");null==t&&(t={}),t.fromTFHub&&"string"==typeof e&&((r=e).endsWith("/")||(r+="/"),e=`${r}model.json?tfjs-format=file`);let a=new cU(e,t,n);return await a.load(),a}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function cW(e,t,n,r){return new(n||(n=Promise))(function(a,s){function i(e){try{l(r.next(e))}catch(e){s(e)}}function o(e){try{l(r.throw(e))}catch(e){s(e)}}function l(e){var t;e.done?a(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(i,o)}l((r=r.apply(e,t||[])).next())})}function cj(e,t){var n,r,a,s,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function o(s){return function(o){return function(s){if(n)throw TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&s[0]?r.return:s[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,s[1])).done)return a;switch(r=0,a&&(s=[2&s[0],a.value]),s[0]){case 0:case 1:a=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!a||s[1]>a[0]&&s[1]<a[3])){i.label=s[1];break}if(6===s[0]&&i.label<a[1]){i.label=a[1],a=s;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(s);break}a[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{n=a=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,o])}}}/**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */var cH=function(e){e.startEndTensor.dispose(),e.startPoint.dispose(),e.endPoint.dispose()},cq=function(e){return{startEndTensor:e,startPoint:aj(e,[0,0],[-1,2]),endPoint:aj(e,[0,2],[-1,2])}},cK={strides:[8,16],anchors:[2,6]};function cG(e,t){if(e.topLeft instanceof t5&&e.bottomRight instanceof t5){var n,r,a,s=nk(function(){return[am([aj(ae(t-1,e.topLeft),0,1),aj(e.topLeft,1,1)]),am([ae(t-1,aj(e.bottomRight,0,1)),aj(e.bottomRight,1,1)])]}),i=s[0],o=s[1];n=i,r=o,null!=e.landmarks&&(a=nk(function(){return rX(ae(of([t-1,0]),e.landmarks),of([1,-1]))}))}else{var l=e.topLeft,u=l[0],c=l[1],p=e.bottomRight,d=p[0],f=p[1];n=[t-1-u,c],r=[t-1-d,f],null!=e.landmarks&&(a=e.landmarks.map(function(e){return[t-1-e[0],e[1]]}))}var h={topLeft:n,bottomRight:r};return null!=a&&(h.landmarks=a),null!=e.probability&&(h.probability=e.probability instanceof t5?e.probability.clone():e.probability),h}function cQ(e,t){return nk(function(){var n;return ol(cq(ag([rX((n=e.hasOwnProperty("box")?e.box:e).startPoint,t),rX(n.endPoint,t)],1)).startEndTensor)})}var cY=function(){function e(e,t,n,r,a,s){this.blazeFaceModel=e,this.width=t,this.height=n,this.maxFaces=r,this.anchorsData=function(e,t,n){for(var r=[],a=0;a<n.strides.length;a++)for(var s=n.strides[a],i=Math.floor((t+s-1)/s),o=Math.floor((e+s-1)/s),l=n.anchors[a],u=0;u<i;u++)for(var c=s*(u+.5),p=0;p<o;p++)for(var d=s*(p+.5),f=0;f<l;f++)r.push([d,c]);return r}(t,n,cK),this.anchors=oh(this.anchorsData),this.inputSizeData=[t,n],this.inputSize=of([t,n]),this.iouThreshold=a,this.scoreThreshold=s}return e.prototype.getBoundingBoxes=function(e,t,n){return void 0===n&&(n=!0),cW(this,void 0,void 0,function(){var r,a,s,i,o,l,u,c,p,d,f,h,m,g,y=this;return cj(this,function(b){switch(b.label){case 0:return a=(r=nk(function(){var t,n,r,a,s,i,o,l,u=rX(ae(rY(lB.resizeBilinear(e,[y.width,y.height]),255),.5),2),c=ol(y.blazeFaceModel.predict(u)),p=(t=y.anchors,n=y.inputSize,r=rG(aj(c,[0,1],[-1,2]),t),a=rY(aj(c,[0,3],[-1,2]),n),o=ae(s=rY(r,n),i=rY(a,2)),l=rG(s,i),ag([rX(o,n),rX(l,n)],1)),d=ol(aW(aj(c,[0,0],[-1,1])));return[c,p,d]}))[0],s=r[1],i=r[2],o=console.warn,console.warn=function(){},l=lB.nonMaxSuppression(s,i,this.maxFaces,this.iouThreshold,this.scoreThreshold),console.warn=o,[4,l.array()];case 1:if(u=b.sent(),l.dispose(),c=u.map(function(e){return aj(s,[e,0],[1,-1])}),t)return[3,3];return[4,Promise.all(c.map(function(e){return cW(y,void 0,void 0,function(){var t;return cj(this,function(n){switch(n.label){case 0:return[4,e.array()];case 1:return t=n.sent(),e.dispose(),[2,t]}})})}))];case 2:c=b.sent(),b.label=3;case 3:for(g=0,p=e.shape[1],d=e.shape[2],f=t?rY([d,p],this.inputSize):[d/this.inputSizeData[0],p/this.inputSizeData[1]],h=[],m=function(e){var r=c[e],s=nk(function(){var s,o=r instanceof t5?cq(r):cq(oh(r));if(!n)return o;var l=u[e];return s=t?aj(y.anchors,[l,0],[1,2]):y.anchorsData[l],{box:o,landmarks:aP(ol(aj(a,[l,5],[1,-1])),[6,-1]),probability:aj(i,[l],[1]),anchor:s}});h.push(s)};g<c.length;g++)m(g);return s.dispose(),i.dispose(),a.dispose(),[2,{boxes:h,scaleFactor:f}]}})})},e.prototype.estimateFaces=function(e,t,n,r){return void 0===t&&(t=!1),void 0===n&&(n=!1),void 0===r&&(r=!0),cW(this,void 0,void 0,function(){var a,s,i,o,l,u=this;return cj(this,function(c){switch(c.label){case 0:var p;return a=((p=e)instanceof t5?[p.shape[0],p.shape[1]]:[p.height,p.width])[1],s=nk(function(){return e instanceof t5||(e=ai.fromPixels(e)),ay(rH(e,"float32"),0)}),[4,this.getBoundingBoxes(s,t,r)];case 1:if(o=(i=c.sent()).boxes,l=i.scaleFactor,s.dispose(),t)return[2,o.map(function(e){var t=cQ(e,l),s={topLeft:aj(t,[0],[2]),bottomRight:aj(t,[2],[2])};if(r){var i=e.landmarks,o=e.probability,u=rX(rG(i,e.anchor),l);s.landmarks=u,s.probability=o}return n&&(s=cG(s,a)),s})];return[2,Promise.all(o.map(function(e){return cW(u,void 0,void 0,function(){var t,s,i,o,u,c,p,d,f,h,m,g=this;return cj(this,function(y){switch(y.label){case 0:if(t=cQ(e,l),r)return[3,2];return[4,t.array()];case 1:return s={topLeft:(i=y.sent()).slice(0,2),bottomRight:i.slice(2)},[3,4];case 2:return[4,Promise.all([e.landmarks,t,e.probability].map(function(e){return cW(g,void 0,void 0,function(){return cj(this,function(t){return[2,e.array()]})})}))];case 3:u=(o=y.sent())[0],i=o[1],c=o[2],p=e.anchor,f=(d=l)[0],h=d[1],m=u.map(function(e){return[(e[0]+p[0])*f,(e[1]+p[1])*h]}),s={topLeft:i.slice(0,2),bottomRight:i.slice(2),landmarks:m,probability:c},cH(e.box),e.landmarks.dispose(),e.probability.dispose(),y.label=4;case 4:return t.dispose(),n&&(s=cG(s,a)),[2,s]}})})}))]}})})},e.prototype.dispose=function(){this.blazeFaceModel.dispose(),this.anchors.dispose(),this.inputSize.dispose()},e}();let cX=document.getElementById("face-detection-plugin");cX&&(F&&F.__esModule?F.default:F).createRoot(cX).render((0,L.jsx)(()=>{let e,t;let n=(0,P.useRef)(null),r=(0,P.useRef)(null);(0,P.useEffect)(()=>{n.current&&r.current&&(e=r.current.getContext("2d"),a(),n.current.addEventListener("loadeddata",async()=>{t=await function(e){var t={},n=t.maxFaces,r=void 0===n?10:n,a=t.inputWidth,s=void 0===a?128:a,i=t.inputHeight,o=void 0===i?128:i,l=t.iouThreshold,u=void 0===l?.3:l,c=t.scoreThreshold,p=void 0===c?.75:c,d=t.modelUrl;return cW(this,void 0,void 0,function(){var e;return cj(this,function(t){switch(t.label){case 0:if(!(null!=d))return[3,2];return[4,cV(d)];case 1:return e=t.sent(),[3,4];case 2:return[4,cV("https://tfhub.dev/tensorflow/tfjs-model/blazeface/1/default/1",{fromTFHub:!0})];case 3:e=t.sent(),t.label=4;case 4:return[2,new cY(e,s,o,r,u,p)]}})})}(),setInterval(s,100)}))},[]);let a=()=>{navigator.mediaDevices&&navigator.mediaDevices.getUserMedia?navigator.mediaDevices.getUserMedia({video:{width:600,height:400},audio:!1}).then(e=>{video.srcObject=e}):console.log("getUserMedia not supported")},s=async()=>{let n=await t.estimateFaces(video,!1);console.log(n),e.drawImage(video,0,0,600,400),n.forEach(t=>{e.beginPath(),e.lineWidth="4",e.strokeStyle="blue",e.rect(t.topLeft[0],t.topLeft[1],t.bottomRight[0]-t.topLeft[0],t.bottomRight[1]-t.topLeft[1]),e.stroke(),e.fillStyle="red",t.landmarks.forEach(t=>{e.fillRect(t[0],t[1],5,5)})})};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("video",{id:"video",ref:n,autoPlay:!0,style:{display:"none"}}),(0,L.jsx)("canvas",{id:"canvas",ref:r,width:"600px",height:"400px"})]})},{}))})();