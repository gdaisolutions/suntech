var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,ee=Object.prototype.hasOwnProperty,S={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function w(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)ee.call(n,i)&&!C.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:S.current}}function te(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ne(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function re(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var ie=/\/+/g;function ae(e,t){return typeof e==`object`&&e&&e.key!=null?re(``+e.key):t.toString(36)}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ae(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(ie,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(ne(o)&&(o=te(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(ie,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ae(s,l);c+=oe(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ae(s,l++),c+=oe(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var T={current:null},le={transition:null},ue={ReactCurrentDispatcher:T,ReactCurrentBatchConfig:le,ReactCurrentOwner:S};e.Children={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!ne(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=S.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)ee.call(n,l)&&!C.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=w,e.createFactory=function(e){var t=w.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ne,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=le.transition;le.transition={};try{e()}finally{le.transition=t}},e.unstable_act=function(){throw Error(`act(...) is not supported in production builds of React.`)},e.useCallback=function(e,t){return T.current.useCallback(e,t)},e.useContext=function(e){return T.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return T.current.useDeferredValue(e)},e.useEffect=function(e,t){return T.current.useEffect(e,t)},e.useId=function(){return T.current.useId()},e.useImperativeHandle=function(e,t,n){return T.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return T.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return T.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return T.current.useMemo(e,t)},e.useReducer=function(e,t,n){return T.current.useReducer(e,t,n)},e.useRef=function(e){return T.current.useRef(e)},e.useState=function(e){return T.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return T.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return T.current.useTransition()},e.version=`18.2.0`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,se(x);else{var t=n(l);t!==null&&ce(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(C),C=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ne());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ce(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var ee=!1,S=null,C=-1,w=5,te=-1;function ne(){return!(e.unstable_now()-te<w)}function re(){if(S!==null){var t=e.unstable_now();te=t;var n=!0;try{n=S(!0,t)}finally{n?ie():(ee=!1,S=null)}}else ee=!1}var ie;if(typeof v==`function`)ie=function(){v(re)};else if(typeof MessageChannel<`u`){var ae=new MessageChannel,oe=ae.port2;ae.port1.onmessage=re,ie=function(){oe.postMessage(null)}}else ie=function(){g(re,0)};function se(e){S=e,ee||(ee=!0,ie())}function ce(t,n){C=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,se(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(C),C=-1):h=!0,ce(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,se(x))),r},e.unstable_shouldYield=ne,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u(),n=f();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,d=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},m={};function h(e){return l.call(m,e)?!0:l.call(p,e)?!1:d.test(e)?m[e]=!0:(p[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function ee(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var S=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for(`react.element`),w=Symbol.for(`react.portal`),te=Symbol.for(`react.fragment`),ne=Symbol.for(`react.strict_mode`),re=Symbol.for(`react.profiler`),ie=Symbol.for(`react.provider`),ae=Symbol.for(`react.context`),oe=Symbol.for(`react.forward_ref`),se=Symbol.for(`react.suspense`),ce=Symbol.for(`react.suspense_list`),T=Symbol.for(`react.memo`),le=Symbol.for(`react.lazy`),ue=Symbol.for(`react.offscreen`),de=Symbol.iterator;function fe(e){return typeof e!=`object`||!e?null:(e=de&&e[de]||e[`@@iterator`],typeof e==`function`?e:null)}var E=Object.assign,pe;function me(e){if(pe===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);pe=t&&t[1]||``}return`
`+pe+e}var he=!1;function ge(e,t){if(!e||he)return``;he=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{he=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?me(e):``}function _e(e){switch(e.tag){case 5:return me(e.type);case 16:return me(`Lazy`);case 13:return me(`Suspense`);case 19:return me(`SuspenseList`);case 0:case 2:case 15:return e=ge(e.type,!1),e;case 11:return e=ge(e.type.render,!1),e;case 1:return e=ge(e.type,!0),e;default:return``}}function ve(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case te:return`Fragment`;case w:return`Portal`;case re:return`Profiler`;case ne:return`StrictMode`;case se:return`Suspense`;case ce:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ae:return(e.displayName||`Context`)+`.Consumer`;case ie:return(e._context.displayName||`Context`)+`.Provider`;case oe:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case T:return t=e.displayName||null,t===null?ve(e.type)||`Memo`:t;case le:t=e._payload,e=e._init;try{return ve(e(t))}catch{}}return null}function ye(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return ve(t);case 8:return t===ne?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function be(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Se(e){var t=xe(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ce(e){e._valueTracker||=Se(e)}function we(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=xe(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Te(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ee(e,t){var n=t.checked;return E({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function De(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=be(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Oe(e,t){t=t.checked,t!=null&&ee(e,`checked`,t,!1)}function ke(e,t){Oe(e,t);var n=be(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?je(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&je(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ae(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function je(e,t,n){(t!==`number`||Te(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var Me=Array.isArray;function Ne(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Pe(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return E({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Fe(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(Me(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:be(n)}}function Ie(e,t){var n=be(t.value),r=be(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Le(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Re(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function ze(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Re(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Be,Ve=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Be||=document.createElement(`div`),Be.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Be.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function He(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ue={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},We=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Ue).forEach(function(e){We.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ue[t]=Ue[e]})});function Ge(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Ue.hasOwnProperty(e)&&Ue[e]?(``+t).trim():t+`px`}function Ke(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=Ge(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var qe=E({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(e,t){if(t){if(qe[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ye(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var Xe=null;function Ze(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Qe=null,D=null,$e=null;function et(e){if(e=Gi(e)){if(typeof Qe!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=qi(t),Qe(e.stateNode,e.type,t))}}function tt(e){D?$e?$e.push(e):$e=[e]:D=e}function nt(){if(D){var e=D,t=$e;if($e=D=null,et(e),t)for(e=0;e<t.length;e++)et(t[e])}}function rt(e,t){return e(t)}function it(){}var at=!1;function ot(e,t,n){if(at)return e(t,n);at=!0;try{return rt(e,t,n)}finally{at=!1,(D!==null||$e!==null)&&(it(),nt())}}function st(e,t){var n=e.stateNode;if(n===null)return null;var i=qi(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ct=!1;if(c)try{var O={};Object.defineProperty(O,`passive`,{get:function(){ct=!0}}),window.addEventListener(`test`,O,O),window.removeEventListener(`test`,O,O)}catch{ct=!1}function lt(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var ut=!1,dt=null,ft=!1,pt=null,mt={onError:function(e){ut=!0,dt=e}};function ht(e,t,n,r,i,a,o,s,c){ut=!1,dt=null,lt.apply(mt,arguments)}function gt(e,t,n,i,a,o,s,c,l){if(ht.apply(this,arguments),ut){if(ut){var u=dt;ut=!1,dt=null}else throw Error(r(198));ft||(ft=!0,pt=u)}}function _t(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function vt(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function yt(e){if(_t(e)!==e)throw Error(r(188))}function bt(e){var t=e.alternate;if(!t){if(t=_t(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return yt(a),e;if(o===i)return yt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function xt(e){return e=bt(e),e===null?null:St(e)}function St(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=St(e);if(t!==null)return t;e=e.sibling}return null}var Ct=n.unstable_scheduleCallback,wt=n.unstable_cancelCallback,Tt=n.unstable_shouldYield,Et=n.unstable_requestPaint,k=n.unstable_now,Dt=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,kt=n.unstable_UserBlockingPriority,At=n.unstable_NormalPriority,jt=n.unstable_LowPriority,Mt=n.unstable_IdlePriority,Nt=null,Pt=null;function Ft(e){if(Pt&&typeof Pt.onCommitFiberRoot==`function`)try{Pt.onCommitFiberRoot(Nt,e,void 0,(e.current.flags&128)==128)}catch{}}var A=Math.clz32?Math.clz32:Rt,It=Math.log,Lt=Math.LN2;function Rt(e){return e>>>=0,e===0?32:31-(It(e)/Lt|0)|0}var zt=64,Bt=4194304;function Vt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ht(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Vt(a))):r=Vt(s)}else o=n&~i,o===0?a!==0&&(r=Vt(a)):r=Vt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-A(t),i=1<<n,r|=e[n],t&=~i;return r}function Ut(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-A(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ut(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Gt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Kt(){var e=zt;return zt<<=1,!(zt&4194240)&&(zt=64),e}function qt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Jt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-A(t),e[t]=n}function Yt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-A(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Xt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-A(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var j=0;function Zt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Qt,$t,en,tn,nn,rn=!1,an=[],on=null,sn=null,cn=null,ln=new Map,un=new Map,dn=[],fn=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function pn(e,t){switch(e){case`focusin`:case`focusout`:on=null;break;case`dragenter`:case`dragleave`:sn=null;break;case`mouseover`:case`mouseout`:cn=null;break;case`pointerover`:case`pointerout`:ln.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:un.delete(t.pointerId)}}function mn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Gi(t),t!==null&&$t(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hn(e,t,n,r,i){switch(t){case`focusin`:return on=mn(on,e,t,n,r,i),!0;case`dragenter`:return sn=mn(sn,e,t,n,r,i),!0;case`mouseover`:return cn=mn(cn,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return ln.set(a,mn(ln.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,un.set(a,mn(un.get(a)||null,e,t,n,r,i)),!0}return!1}function gn(e){var t=Wi(e.target);if(t!==null){var n=_t(t);if(n!==null){if(t=n.tag,t===13){if(t=vt(n),t!==null){e.blockedOn=t,nn(e.priority,function(){en(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _n(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=On(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Xe=r,n.target.dispatchEvent(r),Xe=null}else return t=Gi(n),t!==null&&$t(t),e.blockedOn=n,!1;t.shift()}return!0}function vn(e,t,n){_n(e)&&n.delete(t)}function yn(){rn=!1,on!==null&&_n(on)&&(on=null),sn!==null&&_n(sn)&&(sn=null),cn!==null&&_n(cn)&&(cn=null),ln.forEach(vn),un.forEach(vn)}function bn(e,t){e.blockedOn===t&&(e.blockedOn=null,rn||(rn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,yn)))}function xn(e){function t(t){return bn(t,e)}if(0<an.length){bn(an[0],e);for(var n=1;n<an.length;n++){var r=an[n];r.blockedOn===e&&(r.blockedOn=null)}}for(on!==null&&bn(on,e),sn!==null&&bn(sn,e),cn!==null&&bn(cn,e),ln.forEach(t),un.forEach(t),n=0;n<dn.length;n++)r=dn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<dn.length&&(n=dn[0],n.blockedOn===null);)gn(n),n.blockedOn===null&&dn.shift()}var Sn=S.ReactCurrentBatchConfig,Cn=!0;function wn(e,t,n,r){var i=j,a=Sn.transition;Sn.transition=null;try{j=1,En(e,t,n,r)}finally{j=i,Sn.transition=a}}function Tn(e,t,n,r){var i=j,a=Sn.transition;Sn.transition=null;try{j=4,En(e,t,n,r)}finally{j=i,Sn.transition=a}}function En(e,t,n,r){if(Cn){var i=On(e,t,n,r);if(i===null)vi(e,t,r,Dn,n),pn(e,r);else if(hn(i,e,t,n,r))r.stopPropagation();else if(pn(e,r),t&4&&-1<fn.indexOf(e)){for(;i!==null;){var a=Gi(i);if(a!==null&&Qt(a),a=On(e,t,n,r),a===null&&vi(e,t,r,Dn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else vi(e,t,r,null,n)}}var Dn=null;function On(e,t,n,r){if(Dn=null,e=Ze(r),e=Wi(e),e!==null)if(t=_t(e),t===null)e=null;else if(n=t.tag,n===13){if(e=vt(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Dn=e,null}function M(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Dt()){case Ot:return 1;case kt:return 4;case At:case jt:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var kn=null,An=null,jn=null;function Mn(){if(jn)return jn;var e,t=An,n=t.length,r,i=`value`in kn?kn.value:kn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return jn=i.slice(e,1<r?1-r:void 0)}function Nn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Pn(){return!0}function Fn(){return!1}function In(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Pn:Fn,this.isPropagationStopped=Fn,this}return E(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Pn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Pn)},persist:function(){},isPersistent:Pn}),t}var Ln={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Rn=In(Ln),zn=E({},Ln,{view:0,detail:0}),Bn=In(zn),Vn,Hn,Un,Wn=E({},zn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Un&&(Un&&e.type===`mousemove`?(Vn=e.screenX-Un.screenX,Hn=e.screenY-Un.screenY):Hn=Vn=0,Un=e),Vn)},movementY:function(e){return`movementY`in e?e.movementY:Hn}}),Gn=In(Wn),Kn=In(E({},Wn,{dataTransfer:0})),qn=In(E({},zn,{relatedTarget:0})),Jn=In(E({},Ln,{animationName:0,elapsedTime:0,pseudoElement:0})),Yn=In(E({},Ln,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),N=In(E({},Ln,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=In(E({},zn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Nn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Nn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Nn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=In(E({},Wn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=In(E({},zn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=In(E({},Ln,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=In(E({},Wn,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=Mn(),jn=An=kn=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){tt(r),t=bi(t,`onChange`),0<t.length&&(n=new Rn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var P=null,xr=null;function Sr(e){pi(e,0)}function Cr(e){if(we(Ki(e)))return e}function wr(e,t){if(e===`change`)return t}var Tr=!1;if(c){var Er;if(c){var Dr=`oninput`in document;if(!Dr){var Or=document.createElement(`div`);Or.setAttribute(`oninput`,`return;`),Dr=typeof Or.oninput==`function`}Er=Dr}else Er=!1;Tr=Er&&(!document.documentMode||9<document.documentMode)}function kr(){P&&(P.detachEvent(`onpropertychange`,Ar),xr=P=null)}function Ar(e){if(e.propertyName===`value`&&Cr(xr)){var t=[];br(t,xr,e,Ze(e)),ot(Sr,t)}}function jr(e,t,n){e===`focusin`?(kr(),P=t,xr=n,P.attachEvent(`onpropertychange`,Ar)):e===`focusout`&&kr()}function Mr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return Cr(xr)}function Nr(e,t){if(e===`click`)return Cr(t)}function Pr(e,t){if(e===`input`||e===`change`)return Cr(t)}function Fr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Ir=typeof Object.is==`function`?Object.is:Fr;function Lr(e,t){if(Ir(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Ir(e[i],t[i]))return!1}return!0}function Rr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zr(e,t){var n=Rr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Rr(n)}}function Br(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Br(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Vr(){for(var e=window,t=Te();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Te(e.document)}return t}function Hr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Ur(e){var t=Vr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Br(n.ownerDocument.documentElement,n)){if(r!==null&&Hr(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=zr(n,a);var o=zr(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Wr=c&&`documentMode`in document&&11>=document.documentMode,Gr=null,Kr=null,qr=null,Jr=!1;function Yr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jr||Gr==null||Gr!==Te(r)||(r=Gr,`selectionStart`in r&&Hr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),qr&&Lr(qr,r)||(qr=r,r=bi(Kr,`onSelect`),0<r.length&&(t=new Rn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Gr)))}function Xr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Zr={animationend:Xr(`Animation`,`AnimationEnd`),animationiteration:Xr(`Animation`,`AnimationIteration`),animationstart:Xr(`Animation`,`AnimationStart`),transitionend:Xr(`Transition`,`TransitionEnd`)},Qr={},$r={};c&&($r=document.createElement(`div`).style,`AnimationEvent`in window||(delete Zr.animationend.animation,delete Zr.animationiteration.animation,delete Zr.animationstart.animation),`TransitionEvent`in window||delete Zr.transitionend.transition);function ei(e){if(Qr[e])return Qr[e];if(!Zr[e])return e;var t=Zr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in $r)return Qr[e]=t[n];return e}var ti=ei(`animationend`),ni=ei(`animationiteration`),ri=ei(`animationstart`),ii=ei(`transitionend`),ai=new Map,oi=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function si(e,t){ai.set(e,t),o(t,[e])}for(var ci=0;ci<oi.length;ci++){var li=oi[ci];si(li.toLowerCase(),`on`+(li[0].toUpperCase()+li.slice(1)))}si(ti,`onAnimationEnd`),si(ni,`onAnimationIteration`),si(ri,`onAnimationStart`),si(`dblclick`,`onDoubleClick`),si(`focusin`,`onFocus`),si(`focusout`,`onBlur`),si(ii,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var ui=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),di=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(ui));function fi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,gt(r,t,void 0,e),e.currentTarget=null}function pi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;fi(i,s,l),a=c}}}if(ft)throw e=pt,ft=!1,pt=null,e}function F(e,t){var n=t[Vi];n===void 0&&(n=t[Vi]=new Set);var r=e+`__bubble`;n.has(r)||(_i(t,e,2,!1),n.add(r))}function mi(e,t,n){var r=0;t&&(r|=4),_i(n,e,r,t)}var hi=`_reactListening`+Math.random().toString(36).slice(2);function gi(e){if(!e[hi]){e[hi]=!0,i.forEach(function(t){t!==`selectionchange`&&(di.has(t)||mi(t,!1,e),mi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[hi]||(t[hi]=!0,mi(`selectionchange`,!1,t))}}function _i(e,t,n,r){switch(M(t)){case 1:var i=wn;break;case 4:i=Tn;break;default:i=En}n=i.bind(null,t,n,e),i=void 0,!ct||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function vi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Wi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}ot(function(){var r=a,i=Ze(n),o=[];a:{var s=ai.get(e);if(s!==void 0){var c=Rn,l=e;switch(e){case`keypress`:if(Nn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=qn;break;case`focusout`:l=`blur`,c=qn;break;case`beforeblur`:case`afterblur`:c=qn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Gn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Kn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case ti:case ni:case ri:c=Jn;break;case ii:c=ir;break;case`scroll`:c=Bn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Yn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=st(p,f),h!=null&&u.push(yi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==Xe&&(l=n.relatedTarget||n.fromElement)&&(Wi(l)||l[Bi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Wi(l):null,l!==null&&(d=_t(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Gn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:Ki(c),m=l==null?s:Ki(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Wi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=xi(m))p++;for(m=0,h=f;h;h=xi(h))m++;for(;0<p-m;)u=xi(u),p--;for(;0<m-p;)f=xi(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=xi(u),f=xi(f)}u=null}else u=null;c!==null&&Si(o,s,c,u,!1),l!==null&&d!==null&&Si(o,d,l,u,!0)}}a:{if(s=r?Ki(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=wr;else if(yr(s))if(Tr)g=Pr;else{g=Mr;var _=jr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Nr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&je(s,`number`,s.value)}switch(_=r?Ki(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Gr=_,Kr=r,qr=null);break;case`focusout`:qr=Kr=Gr=null;break;case`mousedown`:Jr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Jr=!1,Yr(o,n,i);break;case`selectionchange`:if(Wr)break;case`keydown`:case`keyup`:Yr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=Mn()):(kn=i,An=`value`in kn?kn.value:kn.textContent,hr=!0)),_=bi(r,y),0<_.length&&(y=new N(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=bi(r,`onBeforeInput`),0<r.length&&(i=new N(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}pi(o,t)})}function yi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function bi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=st(e,n),a!=null&&r.unshift(yi(e,a,i)),a=st(e,t),a!=null&&r.push(yi(e,a,i))),e=e.return}return r}function xi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Si(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=st(n,a),c!=null&&o.unshift(yi(n,c,s))):i||(c=st(n,a),c!=null&&o.push(yi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ci=/\r\n?/g,wi=/\u0000|\uFFFD/g;function Ti(e){return(typeof e==`string`?e:``+e).replace(Ci,`
`).replace(wi,``)}function Ei(e,t,n){if(t=Ti(t),Ti(e)!==t&&n)throw Error(r(425))}function Di(){}var Oi=null,ki=null;function I(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var L=typeof setTimeout==`function`?setTimeout:void 0,Ai=typeof clearTimeout==`function`?clearTimeout:void 0,ji=typeof Promise==`function`?Promise:void 0,Mi=typeof queueMicrotask==`function`?queueMicrotask:ji===void 0?L:function(e){return ji.resolve(null).then(e).catch(Ni)};function Ni(e){setTimeout(function(){throw e})}function Pi(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),xn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);xn(t)}function Fi(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ii(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var Li=Math.random().toString(36).slice(2),Ri=`__reactFiber$`+Li,zi=`__reactProps$`+Li,Bi=`__reactContainer$`+Li,Vi=`__reactEvents$`+Li,Hi=`__reactListeners$`+Li,Ui=`__reactHandles$`+Li;function Wi(e){var t=e[Ri];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Bi]||n[Ri]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ii(e);e!==null;){if(n=e[Ri])return n;e=Ii(e)}return t}e=n,n=e.parentNode}return null}function Gi(e){return e=e[Ri]||e[Bi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ki(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function qi(e){return e[zi]||null}var Ji=[],Yi=-1;function Xi(e){return{current:e}}function R(e){0>Yi||(e.current=Ji[Yi],Ji[Yi]=null,Yi--)}function z(e,t){Yi++,Ji[Yi]=e.current,e.current=t}var Zi={},B=Xi(Zi),Qi=Xi(!1),$i=Zi;function ea(e,t){var n=e.type.contextTypes;if(!n)return Zi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ta(e){return e=e.childContextTypes,e!=null}function na(){R(Qi),R(B)}function ra(e,t,n){if(B.current!==Zi)throw Error(r(168));z(B,t),z(Qi,n)}function ia(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ye(e)||`Unknown`,a));return E({},n,i)}function aa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Zi,$i=B.current,z(B,e),z(Qi,Qi.current),!0}function oa(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=ia(e,t,$i),i.__reactInternalMemoizedMergedChildContext=e,R(Qi),R(B),z(B,e)):R(Qi),z(Qi,n)}var sa=null,ca=!1,la=!1;function ua(e){sa===null?sa=[e]:sa.push(e)}function da(e){ca=!0,ua(e)}function fa(){if(!la&&sa!==null){la=!0;var e=0,t=j;try{var n=sa;for(j=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}sa=null,ca=!1}catch(t){throw sa!==null&&(sa=sa.slice(e+1)),Ct(Ot,fa),t}finally{j=t,la=!1}}return null}var pa=[],ma=0,ha=null,ga=0,_a=[],va=0,ya=null,ba=1,xa=``;function Sa(e,t){pa[ma++]=ga,pa[ma++]=ha,ha=e,ga=t}function Ca(e,t,n){_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ya=e;var r=ba;e=xa;var i=32-A(r)-1;r&=~(1<<i),n+=1;var a=32-A(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,ba=1<<32-A(t)+i|n<<i|r,xa=a+e}else ba=1<<a|n<<i|r,xa=e}function wa(e){e.return!==null&&(Sa(e,1),Ca(e,1,0))}function Ta(e){for(;e===ha;)ha=pa[--ma],pa[ma]=null,ga=pa[--ma],pa[ma]=null;for(;e===ya;)ya=_a[--va],_a[va]=null,xa=_a[--va],_a[va]=null,ba=_a[--va],_a[va]=null}var Ea=null,Da=null,V=!1,Oa=null;function ka(e,t){var n=ql(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Aa(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=Fi(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Ea=e,Da=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=ya===null?null:{id:ba,overflow:xa},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ql(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ea=e,Da=null,!0);default:return!1}}function ja(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Ma(e){if(V){var t=Da;if(t){var n=t;if(!Aa(e,t)){if(ja(e))throw Error(r(418));t=Fi(n.nextSibling);var i=Ea;t&&Aa(e,t)?ka(i,n):(e.flags=e.flags&-4097|2,V=!1,Ea=e)}}else{if(ja(e))throw Error(r(418));e.flags=e.flags&-4097|2,V=!1,Ea=e}}}function Na(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ea=e}function Pa(e){if(e!==Ea)return!1;if(!V)return Na(e),V=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!I(e.type,e.memoizedProps)),t&&=Da){if(ja(e))throw Fa(),Error(r(418));for(;t;)ka(e,t),t=Fi(t.nextSibling)}if(Na(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){Da=Fi(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}Da=null}}else Da=Ea?Fi(e.stateNode.nextSibling):null;return!0}function Fa(){for(var e=Da;e;)e=Fi(e.nextSibling)}function Ia(){Da=Ea=null,V=!1}function La(e){Oa===null?Oa=[e]:Oa.push(e)}var Ra=S.ReactCurrentBatchConfig;function za(e,t){if(e&&e.defaultProps){for(var n in t=E({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ba=Xi(null),Va=null,Ha=null,Ua=null;function Wa(){Ua=Ha=Va=null}function Ga(e){var t=Ba.current;R(Ba),e._currentValue=t}function Ka(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function qa(e,t){Va=e,Ua=Ha=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(zs=!0),e.firstContext=null)}function Ja(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},Ha===null){if(Va===null)throw Error(r(308));Ha=e,Va.dependencies={lanes:0,firstContext:e}}else Ha=Ha.next=e;return t}var Ya=null;function Xa(e){Ya===null?Ya=[e]:Ya.push(e)}function Za(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Xa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Qa(e,r)}function Qa(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var $a=!1;function eo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function to(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function no(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ro(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,J&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Qa(e,n)}return i=r.interleaved,i===null?(t.next=t,Xa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Qa(e,n)}function io(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}function ao(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function oo(e,t,n,r){var i=e.updateQueue;$a=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=E({},d,f);break a;case 2:$a=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Xc|=o,e.lanes=o,e.memoizedState=d}}function so(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var co=new t.Component().refs;function lo(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:E({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uo={isMounted:function(e){return(e=e._reactInternals)?_t(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=no(r,i);a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(gl(t,e,i,r),io(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ml(),i=hl(e),a=no(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ro(e,a,i),t!==null&&(gl(t,e,i,r),io(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ml(),r=hl(e),i=no(n,r);i.tag=2,t!=null&&(i.callback=t),t=ro(e,i,r),t!==null&&(gl(t,e,r,n),io(t,e,r))}};function fo(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Lr(n,r)||!Lr(i,a):!0}function po(e,t,n){var r=!1,i=Zi,a=t.contextType;return typeof a==`object`&&a?a=Ja(a):(i=ta(t)?$i:B.current,r=t.contextTypes,a=(r=r!=null)?ea(e,i):Zi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=uo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function mo(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&uo.enqueueReplaceState(t,t.state,null)}function ho(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=co,eo(e);var a=t.contextType;typeof a==`object`&&a?i.context=Ja(a):(a=ta(t)?$i:B.current,i.context=ea(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(lo(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&uo.enqueueReplaceState(i,i.state,null),oo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function go(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;t===co&&(t=a.refs={}),e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function _o(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function vo(e){var t=e._init;return t(e._payload)}function yo(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Xl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===te?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===le&&vo(i)===t.type)?(r=a(t,n.props),r.ref=go(e,t,n),r.return=e,r):(r=Zl(n.type,n.key,n.props,null,e.mode,r),r.ref=go(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=tu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Ql(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=eu(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case C:return n=Zl(t.type,t.key,t.props,null,e.mode,n),n.ref=go(e,null,t),n.return=e,n;case w:return t=tu(t,e.mode,n),t.return=e,t;case le:var r=t._init;return f(e,r(t._payload),n)}if(Me(t)||fe(t))return t=Ql(t,e.mode,n,null),t.return=e,t;_o(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case C:return n.key===i?l(e,t,n,r):null;case w:return n.key===i?u(e,t,n,r):null;case le:return i=n._init,p(e,t,i(n._payload),r)}if(Me(n)||fe(n))return i===null?d(e,t,n,r,null):null;_o(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case C:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case w:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case le:var a=r._init;return m(e,t,n,a(r._payload),i)}if(Me(r)||fe(r))return e=e.get(n)||null,d(t,e,r,i,null);_o(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),V&&Sa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return V&&Sa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),V&&Sa(r,h),l}function g(a,s,c,l){var u=fe(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),V&&Sa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return V&&Sa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),V&&Sa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===te&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case C:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===te){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===le&&vo(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=go(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===te?(r=Ql(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Zl(i.type,i.key,i.props,null,e.mode,o),o.ref=go(e,r,i),o.return=e,e=o)}return s(e);case w:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=tu(i,e.mode,o),r.return=e,e=r}return s(e);case le:return l=i._init,_(e,r,l(i._payload),o)}if(Me(i))return h(e,r,i,o);if(fe(i))return g(e,r,i,o);_o(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=eu(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var bo=yo(!0),xo=yo(!1),So={},Co=Xi(So),wo=Xi(So),To=Xi(So);function Eo(e){if(e===So)throw Error(r(174));return e}function Do(e,t){switch(z(To,t),z(wo,e),z(Co,So),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ze(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ze(t,e)}R(Co),z(Co,t)}function Oo(){R(Co),R(wo),R(To)}function ko(e){Eo(To.current);var t=Eo(Co.current),n=ze(t,e.type);t!==n&&(z(wo,e),z(Co,n))}function Ao(e){wo.current===e&&(R(Co),R(wo))}var H=Xi(0);function jo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Mo=[];function No(){for(var e=0;e<Mo.length;e++)Mo[e]._workInProgressVersionPrimary=null;Mo.length=0}var Po=S.ReactCurrentDispatcher,Fo=S.ReactCurrentBatchConfig,Io=0,U=null,W=null,G=null,Lo=!1,Ro=!1,zo=0,Bo=0;function Vo(){throw Error(r(321))}function Ho(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ir(e[n],t[n]))return!1;return!0}function Uo(e,t,n,i,a,o){if(Io=o,U=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Po.current=e===null||e.memoizedState===null?Es:Ds,e=n(i,a),Ro){o=0;do{if(Ro=!1,zo=0,25<=o)throw Error(r(301));o+=1,G=W=null,t.updateQueue=null,Po.current=Os,e=n(i,a)}while(Ro)}if(Po.current=Ts,t=W!==null&&W.next!==null,Io=0,G=W=U=null,Lo=!1,t)throw Error(r(300));return e}function Wo(){var e=zo!==0;return zo=0,e}function Go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return G===null?U.memoizedState=G=e:G=G.next=e,G}function Ko(){if(W===null){var e=U.alternate;e=e===null?null:e.memoizedState}else e=W.next;var t=G===null?U.memoizedState:G.next;if(t!==null)G=t,W=e;else{if(e===null)throw Error(r(310));W=e,e={memoizedState:W.memoizedState,baseState:W.baseState,baseQueue:W.baseQueue,queue:W.queue,next:null},G===null?U.memoizedState=G=e:G=G.next=e}return G}function qo(e,t){return typeof t==`function`?t(e):t}function Jo(e){var t=Ko(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=W,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((Io&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,U.lanes|=d,Xc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Ir(i,t.memoizedState)||(zs=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,U.lanes|=o,Xc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Yo(e){var t=Ko(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Ir(o,t.memoizedState)||(zs=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Xo(){}function Zo(e,t){var n=U,i=Ko(),a=t(),o=!Ir(i.memoizedState,a);if(o&&(i.memoizedState=a,zs=!0),i=i.queue,ls(es.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||G!==null&&G.memoizedState.tag&1){if(n.flags|=2048,is(9,$o.bind(null,n,i,a,t),void 0,null),Y===null)throw Error(r(349));Io&30||Qo(n,t,a)}return a}function Qo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function $o(e,t,n,r){t.value=n,t.getSnapshot=r,ts(t)&&ns(e)}function es(e,t,n){return n(function(){ts(t)&&ns(e)})}function ts(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ir(e,n)}catch{return!0}}function ns(e){var t=Qa(e,1);t!==null&&gl(t,e,1,-1)}function rs(e){var t=Go();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qo,lastRenderedState:e},t.queue=e,e=e.dispatch=xs.bind(null,U,e),[t.memoizedState,e]}function is(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=U.updateQueue,t===null?(t={lastEffect:null,stores:null},U.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function as(){return Ko().memoizedState}function os(e,t,n,r){var i=Go();U.flags|=e,i.memoizedState=is(1|t,n,void 0,r===void 0?null:r)}function ss(e,t,n,r){var i=Ko();r=r===void 0?null:r;var a=void 0;if(W!==null){var o=W.memoizedState;if(a=o.destroy,r!==null&&Ho(r,o.deps)){i.memoizedState=is(t,n,a,r);return}}U.flags|=e,i.memoizedState=is(1|t,n,a,r)}function cs(e,t){return os(8390656,8,e,t)}function ls(e,t){return ss(2048,8,e,t)}function us(e,t){return ss(4,2,e,t)}function ds(e,t){return ss(4,4,e,t)}function fs(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ps(e,t,n){return n=n==null?null:n.concat([e]),ss(4,4,fs.bind(null,t,e),n)}function ms(){}function hs(e,t){var n=Ko();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gs(e,t){var n=Ko();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ho(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function _s(e,t,n){return Io&21?(Ir(n,t)||(n=Kt(),U.lanes|=n,Xc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,zs=!0),e.memoizedState=n)}function vs(e,t){var n=j;j=n!==0&&4>n?n:4,e(!0);var r=Fo.transition;Fo.transition={};try{e(!1),t()}finally{j=n,Fo.transition=r}}function ys(){return Ko().memoizedState}function bs(e,t,n){var r=hl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ss(e))Cs(t,n);else if(n=Za(e,t,n,r),n!==null){var i=ml();gl(n,e,r,i),ws(n,t,r)}}function xs(e,t,n){var r=hl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ss(e))Cs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Ir(s,o)){var c=t.interleaved;c===null?(i.next=i,Xa(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=Za(e,t,i,r),n!==null&&(i=ml(),gl(n,e,r,i),ws(n,t,r))}}function Ss(e){var t=e.alternate;return e===U||t!==null&&t===U}function Cs(e,t){Ro=Lo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function ws(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xt(e,n)}}var Ts={readContext:Ja,useCallback:Vo,useContext:Vo,useEffect:Vo,useImperativeHandle:Vo,useInsertionEffect:Vo,useLayoutEffect:Vo,useMemo:Vo,useReducer:Vo,useRef:Vo,useState:Vo,useDebugValue:Vo,useDeferredValue:Vo,useTransition:Vo,useMutableSource:Vo,useSyncExternalStore:Vo,useId:Vo,unstable_isNewReconciler:!1},Es={readContext:Ja,useCallback:function(e,t){return Go().memoizedState=[e,t===void 0?null:t],e},useContext:Ja,useEffect:cs,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),os(4194308,4,fs.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){return os(4,2,e,t)},useMemo:function(e,t){var n=Go();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Go();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=bs.bind(null,U,e),[r.memoizedState,e]},useRef:function(e){var t=Go();return e={current:e},t.memoizedState=e},useState:rs,useDebugValue:ms,useDeferredValue:function(e){return Go().memoizedState=e},useTransition:function(){var e=rs(!1),t=e[0];return e=vs.bind(null,e[1]),Go().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=U,a=Go();if(V){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Y===null)throw Error(r(349));Io&30||Qo(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(es.bind(null,i,o,e),[e]),i.flags|=2048,is(9,$o.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=Go(),t=Y.identifierPrefix;if(V){var n=xa,r=ba;n=(r&~(1<<32-A(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=zo++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Bo++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},Ds={readContext:Ja,useCallback:hs,useContext:Ja,useEffect:ls,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Jo,useRef:as,useState:function(){return Jo(qo)},useDebugValue:ms,useDeferredValue:function(e){return _s(Ko(),W.memoizedState,e)},useTransition:function(){return[Jo(qo)[0],Ko().memoizedState]},useMutableSource:Xo,useSyncExternalStore:Zo,useId:ys,unstable_isNewReconciler:!1},Os={readContext:Ja,useCallback:hs,useContext:Ja,useEffect:ls,useImperativeHandle:ps,useInsertionEffect:us,useLayoutEffect:ds,useMemo:gs,useReducer:Yo,useRef:as,useState:function(){return Yo(qo)},useDebugValue:ms,useDeferredValue:function(e){var t=Ko();return W===null?t.memoizedState=e:_s(t,W.memoizedState,e)},useTransition:function(){return[Yo(qo)[0],Ko().memoizedState]},useMutableSource:Xo,useSyncExternalStore:Zo,useId:ys,unstable_isNewReconciler:!1};function ks(e,t){try{var n=``,r=t;do n+=_e(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function As(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function js(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var Ms=typeof WeakMap==`function`?WeakMap:Map;function Ns(e,t,n){n=no(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){il||(il=!0,al=r),js(e,t)},n}function Ps(e,t,n){n=no(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){js(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){js(e,t),typeof r!=`function`&&(ol===null?ol=new Set([this]):ol.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Fs(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ms;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Bl.bind(null,e,t,n),t.then(e,e))}function Is(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Ls(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=no(-1,1),t.tag=2,ro(n,t,1))),n.lanes|=1),e)}var Rs=S.ReactCurrentOwner,zs=!1;function Bs(e,t,n,r){t.child=e===null?xo(t,null,n,r):bo(t,e.child,n,r)}function Vs(e,t,n,r,i){n=n.render;var a=t.ref;return qa(t,i),r=Uo(e,t,n,r,a,i),n=Wo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(V&&n&&wa(t),t.flags|=1,Bs(e,t,r,i),t.child)}function Hs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!Jl(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Us(e,t,a,r,i)):(e=Zl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Lr:n,n(o,r)&&e.ref===t.ref)return sc(e,t,i)}return t.flags|=1,e=Xl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Us(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Lr(a,r)&&e.ref===t.ref)if(zs=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(zs=!0);else return t.lanes=e.lanes,sc(e,t,i)}return Ks(e,t,n,r,i)}function Ws(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},z(Jc,qc),qc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,z(Jc,qc),qc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,z(Jc,qc),qc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),z(Jc,qc),qc|=r;return Bs(e,t,i,n),t.child}function Gs(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ks(e,t,n,r,i){var a=ta(n)?$i:B.current;return a=ea(t,a),qa(t,i),n=Uo(e,t,n,r,a,i),r=Wo(),e!==null&&!zs?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,sc(e,t,i)):(V&&r&&wa(t),t.flags|=1,Bs(e,t,n,i),t.child)}function qs(e,t,n,r,i){if(ta(n)){var a=!0;aa(t)}else a=!1;if(qa(t,i),t.stateNode===null)oc(e,t),po(t,n,r),ho(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=Ja(l):(l=ta(n)?$i:B.current,l=ea(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&mo(t,o,r,l),$a=!1;var f=t.memoizedState;o.state=f,oo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||Qi.current||$a?(typeof u==`function`&&(lo(t,n,u,r),c=t.memoizedState),(s=$a||fo(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,to(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:za(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=Ja(c):(c=ta(n)?$i:B.current,c=ea(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&mo(t,o,r,c),$a=!1,f=t.memoizedState,o.state=f,oo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||Qi.current||$a?(typeof p==`function`&&(lo(t,n,p,r),m=t.memoizedState),(l=$a||fo(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Js(e,t,n,r,a,i)}function Js(e,t,n,r,i,a){Gs(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&oa(t,n,!1),sc(e,t,a);r=t.stateNode,Rs.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=bo(t,e.child,null,a),t.child=bo(t,null,s,a)):Bs(e,t,s,a),t.memoizedState=r.state,i&&oa(t,n,!0),t.child}function Ys(e){var t=e.stateNode;t.pendingContext?ra(e,t.pendingContext,t.pendingContext!==t.context):t.context&&ra(e,t.context,!1),Do(e,t.containerInfo)}function Xs(e,t,n,r,i){return Ia(),La(i),t.flags|=256,Bs(e,t,n,r),t.child}var Zs={dehydrated:null,treeContext:null,retryLane:0};function Qs(e){return{baseLanes:e,cachePool:null,transitions:null}}function $s(e,t,n){var r=t.pendingProps,i=H.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),z(H,i&1),e===null)return Ma(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=$l(o,r,0,null),e=Ql(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Qs(n),t.memoizedState=Zs,e):ec(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return nc(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Xl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Ql(a,o,n,null),a.flags|=2):a=Xl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Qs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Zs,r}return a=e.child,e=a.sibling,r=Xl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ec(e,t){return t=$l({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function tc(e,t,n,r){return r!==null&&La(r),bo(t,e.child,null,n),e=ec(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function nc(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=As(Error(r(422))),tc(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=$l({mode:`visible`,children:i.children},a,0,null),o=Ql(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&bo(t,e.child,null,s),t.child.memoizedState=Qs(s),t.memoizedState=Zs,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return tc(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=As(o,i,void 0),tc(e,t,s,i)}if(c=(s&e.childLanes)!==0,zs||c){if(i=Y,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,Qa(e,a),gl(i,e,a,-1))}return Al(),i=As(Error(r(421))),tc(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Hl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,Da=Fi(a.nextSibling),Ea=t,V=!0,Oa=null,e!==null&&(_a[va++]=ba,_a[va++]=xa,_a[va++]=ya,ba=e.id,xa=e.overflow,ya=t),t=ec(t,i.children),t.flags|=4096,t)}function rc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ka(e.return,t,n)}function ic(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function ac(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Bs(e,t,r.children,n),r=H.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&rc(e,n,t);else if(e.tag===19)rc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(z(H,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&jo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ic(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&jo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ic(t,!0,n,null,a);break;case`together`:ic(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function sc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Xc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Xl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Xl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function cc(e,t,n){switch(t.tag){case 3:Ys(t),Ia();break;case 5:ko(t);break;case 1:ta(t.type)&&aa(t);break;case 4:Do(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;z(Ba,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(z(H,H.current&1),e=sc(e,t,n),e===null?null:e.sibling):$s(e,t,n):(z(H,H.current&1),t.flags|=128,null);z(H,H.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return ac(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),z(H,H.current),r)break;return null;case 22:case 23:return t.lanes=0,Ws(e,t,n)}return sc(e,t,n)}var lc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},uc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Eo(Co.current);var o=null;switch(n){case`input`:i=Ee(e,i),r=Ee(e,r),o=[];break;case`select`:i=E({},i,{value:void 0}),r=E({},r,{value:void 0}),o=[];break;case`textarea`:i=Pe(e,i),r=Pe(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Di)}Je(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&F(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},dc=function(e,t,n,r){n!==r&&(t.flags|=4)};function fc(e,t){if(!V)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function pc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function mc(e,t,n){var i=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pc(t),null;case 1:return ta(t.type)&&na(),pc(t),null;case 3:return i=t.stateNode,Oo(),R(Qi),R(B),No(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Pa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Oa!==null&&(bl(Oa),Oa=null))),pc(t),null;case 5:Ao(t);var o=Eo(To.current);if(n=t.type,e!==null&&t.stateNode!=null)uc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return pc(t),null}if(e=Eo(Co.current),Pa(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Ri]=t,i[zi]=s,e=(t.mode&1)!=0,n){case`dialog`:F(`cancel`,i),F(`close`,i);break;case`iframe`:case`object`:case`embed`:F(`load`,i);break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],i);break;case`source`:F(`error`,i);break;case`img`:case`image`:case`link`:F(`error`,i),F(`load`,i);break;case`details`:F(`toggle`,i);break;case`input`:De(i,s),F(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},F(`invalid`,i);break;case`textarea`:Fe(i,s),F(`invalid`,i)}for(var c in Je(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Ei(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&F(`scroll`,i)}switch(n){case`input`:Ce(i),Ae(i,s,!0);break;case`textarea`:Ce(i),Le(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Di)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Re(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Ri]=t,e[zi]=i,lc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ye(n,i),n){case`dialog`:F(`cancel`,e),F(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:F(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<ui.length;o++)F(ui[o],e);o=i;break;case`source`:F(`error`,e),o=i;break;case`img`:case`image`:case`link`:F(`error`,e),F(`load`,e),o=i;break;case`details`:F(`toggle`,e),o=i;break;case`input`:De(e,i),o=Ee(e,i),F(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=E({},i,{value:void 0}),F(`invalid`,e);break;case`textarea`:Fe(e,i),o=Pe(e,i),F(`invalid`,e);break;default:o=i}for(s in Je(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ke(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Ve(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&He(e,u):typeof u==`number`&&He(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&F(`scroll`,e):u!=null&&ee(e,s,u,c))}switch(n){case`input`:Ce(e),Ae(e,i,!1);break;case`textarea`:Ce(e),Le(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+be(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ne(e,!!i.multiple,i.defaultValue,!0):Ne(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Di)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return pc(t),null;case 6:if(e&&t.stateNode!=null)dc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=Eo(To.current),Eo(Co.current),Pa(t)){if(i=t.stateNode,n=t.memoizedProps,i[Ri]=t,(s=i.nodeValue!==n)&&(e=Ea,e!==null))switch(e.tag){case 3:Ei(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Ei(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ri]=t,t.stateNode=i}return pc(t),null;case 13:if(R(H),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(V&&Da!==null&&t.mode&1&&!(t.flags&128))Fa(),Ia(),t.flags|=98560,s=!1;else if(s=Pa(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Ri]=t}else Ia(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;pc(t),s=!1}else Oa!==null&&(bl(Oa),Oa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||H.current&1?Q===0&&(Q=3):Al())),t.updateQueue!==null&&(t.flags|=4),pc(t),null);case 4:return Oo(),e===null&&gi(t.stateNode.containerInfo),pc(t),null;case 10:return Ga(t.type._context),pc(t),null;case 17:return ta(t.type)&&na(),pc(t),null;case 19:if(R(H),s=t.memoizedState,s===null)return pc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)fc(s,!1);else{if(Q!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=jo(e),c!==null){for(t.flags|=128,fc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return z(H,H.current&1|2),t.child}e=e.sibling}s.tail!==null&&k()>nl&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304)}else{if(!i)if(e=jo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),fc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!V)return pc(t),null}else 2*k()-s.renderingStartTime>nl&&n!==1073741824&&(t.flags|=128,i=!0,fc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(pc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=k(),t.sibling=null,n=H.current,z(H,i?n&1|2:n&1),t);case 22:case 23:return El(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?qc&1073741824&&(pc(t),t.subtreeFlags&6&&(t.flags|=8192)):pc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function hc(e,t){switch(Ta(t),t.tag){case 1:return ta(t.type)&&na(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Oo(),R(Qi),R(B),No(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ao(t),null;case 13:if(R(H),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ia()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return R(H),null;case 4:return Oo(),null;case 10:return Ga(t.type._context),null;case 22:case 23:return El(),null;case 24:return null;default:return null}}var gc=!1,_c=!1,vc=typeof WeakSet==`function`?WeakSet:Set,K=null;function yc(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){$(e,t,n)}else n.current=null}function bc(e,t,n){try{n()}catch(n){$(e,t,n)}}var xc=!1;function Sc(e,t){if(Oi=Cn,e=Vr(),Hr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(ki={focusedElem:e,selectionRange:n},Cn=!1,K=t;K!==null;)if(t=K,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,K=e;else for(;K!==null;){t=K;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:za(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){$(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,K=e;break}K=t.return}return h=xc,xc=!1,h}function Cc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&bc(t,n,a)}i=i.next}while(i!==r)}}function wc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Tc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function Ec(e){var t=e.alternate;t!==null&&(e.alternate=null,Ec(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ri],delete t[zi],delete t[Vi],delete t[Hi],delete t[Ui])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Dc(e){return e.tag===5||e.tag===3||e.tag===4}function Oc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Dc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Di));else if(r!==4&&(e=e.child,e!==null))for(kc(e,t,n),e=e.sibling;e!==null;)kc(e,t,n),e=e.sibling}function Ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ac(e,t,n),e=e.sibling;e!==null;)Ac(e,t,n),e=e.sibling}var q=null,jc=!1;function Mc(e,t,n){for(n=n.child;n!==null;)Nc(e,t,n),n=n.sibling}function Nc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount==`function`)try{Pt.onCommitFiberUnmount(Nt,n)}catch{}switch(n.tag){case 5:_c||yc(n,t);case 6:var r=q,i=jc;q=null,Mc(e,t,n),q=r,jc=i,q!==null&&(jc?(e=q,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):q.removeChild(n.stateNode));break;case 18:q!==null&&(jc?(e=q,n=n.stateNode,e.nodeType===8?Pi(e.parentNode,n):e.nodeType===1&&Pi(e,n),xn(e)):Pi(q,n.stateNode));break;case 4:r=q,i=jc,q=n.stateNode.containerInfo,jc=!0,Mc(e,t,n),q=r,jc=i;break;case 0:case 11:case 14:case 15:if(!_c&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&bc(n,t,o),i=i.next}while(i!==r)}Mc(e,t,n);break;case 1:if(!_c&&(yc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){$(n,t,e)}Mc(e,t,n);break;case 21:Mc(e,t,n);break;case 22:n.mode&1?(_c=(r=_c)||n.memoizedState!==null,Mc(e,t,n),_c=r):Mc(e,t,n);break;default:Mc(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new vc),t.forEach(function(t){var r=Ul.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function Fc(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:q=c.stateNode,jc=!1;break a;case 3:q=c.stateNode.containerInfo,jc=!0;break a;case 4:q=c.stateNode.containerInfo,jc=!0;break a}c=c.return}if(q===null)throw Error(r(160));Nc(o,s,a),q=null,jc=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){$(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Ic(t,e),t=t.sibling}function Ic(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fc(t,e),Lc(e),i&4){try{Cc(3,e,e.return),wc(3,e)}catch(t){$(e,e.return,t)}try{Cc(5,e,e.return)}catch(t){$(e,e.return,t)}}break;case 1:Fc(t,e),Lc(e),i&512&&n!==null&&yc(n,n.return);break;case 5:if(Fc(t,e),Lc(e),i&512&&n!==null&&yc(n,n.return),e.flags&32){var a=e.stateNode;try{He(a,``)}catch(t){$(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Oe(a,o),Ye(c,s);var u=Ye(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ke(a,f):d===`dangerouslySetInnerHTML`?Ve(a,f):d===`children`?He(a,f):ee(a,d,f,u)}switch(c){case`input`:ke(a,o);break;case`textarea`:Ie(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ne(a,!!o.multiple,o.multiple?[]:``,!1):Ne(a,!!o.multiple,o.defaultValue,!0)):Ne(a,!!o.multiple,m,!1)}a[zi]=o}catch(t){$(e,e.return,t)}}break;case 6:if(Fc(t,e),Lc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){$(e,e.return,t)}}break;case 3:if(Fc(t,e),Lc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{xn(t.containerInfo)}catch(t){$(e,e.return,t)}break;case 4:Fc(t,e),Lc(e);break;case 13:Fc(t,e),Lc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||(tl=k())),i&4&&Pc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(_c=(u=_c)||d,Fc(t,e),_c=u):Fc(t,e),Lc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(K=e,d=e.child;d!==null;){for(f=K=d;K!==null;){switch(p=K,m=p.child,p.tag){case 0:case 11:case 14:case 15:Cc(4,p,p.return);break;case 1:yc(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){$(i,n,e)}}break;case 5:yc(p,p.return);break;case 22:if(p.memoizedState!==null){Vc(f);continue}}m===null?Vc(f):(m.return=p,K=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=Ge(`display`,s))}catch(t){$(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){$(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Fc(t,e),Lc(e),i&4&&Pc(e);break;case 21:break;default:Fc(t,e),Lc(e)}}function Lc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Dc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(He(a,``),i.flags&=-33),Ac(e,Oc(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;kc(e,Oc(e),o);break;default:throw Error(r(161))}}catch(t){$(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Rc(e,t,n){K=e,zc(e,t,n)}function zc(e,t,n){for(var r=(e.mode&1)!=0;K!==null;){var i=K,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||gc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||_c;s=gc;var l=_c;if(gc=o,(_c=c)&&!l)for(K=i;K!==null;)o=K,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Hc(i):(c.return=o,K=c);for(;a!==null;)K=a,zc(a,t,n),a=a.sibling;K=i,gc=s,_c=l}Bc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,K=a):Bc(e,t,n)}}function Bc(e){for(;K!==null;){var t=K;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:_c||wc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!_c)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:za(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&so(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}so(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&xn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}_c||t.flags&512&&Tc(t)}catch(e){$(t,t.return,e)}}if(t===e){K=null;break}if(n=t.sibling,n!==null){n.return=t.return,K=n;break}K=t.return}}function Vc(e){for(;K!==null;){var t=K;if(t===e){K=null;break}var n=t.sibling;if(n!==null){n.return=t.return,K=n;break}K=t.return}}function Hc(e){for(;K!==null;){var t=K;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{wc(4,t)}catch(e){$(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){$(t,i,e)}}var a=t.return;try{Tc(t)}catch(e){$(t,a,e)}break;case 5:var o=t.return;try{Tc(t)}catch(e){$(t,o,e)}}}catch(e){$(t,t.return,e)}if(t===e){K=null;break}var s=t.sibling;if(s!==null){s.return=t.return,K=s;break}K=t.return}}var Uc=Math.ceil,Wc=S.ReactCurrentDispatcher,Gc=S.ReactCurrentOwner,Kc=S.ReactCurrentBatchConfig,J=0,Y=null,X=null,Z=0,qc=0,Jc=Xi(0),Q=0,Yc=null,Xc=0,Zc=0,Qc=0,$c=null,el=null,tl=0,nl=1/0,rl=null,il=!1,al=null,ol=null,sl=!1,cl=null,ll=0,ul=0,dl=null,fl=-1,pl=0;function ml(){return J&6?k():fl===-1?fl=k():fl}function hl(e){return e.mode&1?J&2&&Z!==0?Z&-Z:Ra.transition===null?(e=j,e===0?(e=window.event,e=e===void 0?16:M(e.type),e):e):(pl===0&&(pl=Kt()),pl):1}function gl(e,t,n,i){if(50<ul)throw ul=0,dl=null,Error(r(185));Jt(e,n,i),(!(J&2)||e!==Y)&&(e===Y&&(!(J&2)&&(Zc|=n),Q===4&&Sl(e,Z)),_l(e,i),n===1&&J===0&&!(t.mode&1)&&(nl=k()+500,ca&&fa()))}function _l(e,t){var n=e.callbackNode;Wt(e,t);var r=Ht(e,e===Y?Z:0);if(r===0)n!==null&&wt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&wt(n),t===1)e.tag===0?da(Cl.bind(null,e)):ua(Cl.bind(null,e)),Mi(function(){!(J&6)&&fa()}),n=null;else{switch(Zt(r)){case 1:n=Ot;break;case 4:n=kt;break;case 16:n=At;break;case 536870912:n=Mt;break;default:n=At}n=Gl(n,vl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vl(e,t){if(fl=-1,pl=0,J&6)throw Error(r(327));var n=e.callbackNode;if(Rl()&&e.callbackNode!==n)return null;var i=Ht(e,e===Y?Z:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=jl(e,i);else{t=i;var a=J;J|=2;var o=kl();(Y!==e||Z!==t)&&(rl=null,nl=k()+500,Dl(e,t));do try{Nl();break}catch(t){Ol(e,t)}while(1);Wa(),Wc.current=o,J=a,X===null?(Y=null,Z=0,t=Q):t=0}if(t!==0){if(t===2&&(a=Gt(e),a!==0&&(i=a,t=yl(e,a))),t===1)throw n=Yc,Dl(e,0),Sl(e,i),_l(e,k()),n;if(t===6)Sl(e,i);else{if(a=e.current.alternate,!(i&30)&&!xl(a)&&(t=jl(e,i),t===2&&(o=Gt(e),o!==0&&(i=o,t=yl(e,o))),t===1))throw n=Yc,Dl(e,0),Sl(e,i),_l(e,k()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Il(e,el,rl);break;case 3:if(Sl(e,i),(i&130023424)===i&&(t=tl+500-k(),10<t)){if(Ht(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){ml(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=L(Il.bind(null,e,el,rl),t);break}Il(e,el,rl);break;case 4:if(Sl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-A(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=k()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Uc(i/1960))-i,10<i){e.timeoutHandle=L(Il.bind(null,e,el,rl),i);break}Il(e,el,rl);break;case 5:Il(e,el,rl);break;default:throw Error(r(329))}}}return _l(e,k()),e.callbackNode===n?vl.bind(null,e):null}function yl(e,t){var n=$c;return e.current.memoizedState.isDehydrated&&(Dl(e,t).flags|=256),e=jl(e,t),e!==2&&(t=el,el=n,t!==null&&bl(t)),e}function bl(e){el===null?el=e:el.push.apply(el,e)}function xl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Ir(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Sl(e,t){for(t&=~Qc,t&=~Zc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-A(t),r=1<<n;e[n]=-1,t&=~r}}function Cl(e){if(J&6)throw Error(r(327));Rl();var t=Ht(e,0);if(!(t&1))return _l(e,k()),null;var n=jl(e,t);if(e.tag!==0&&n===2){var i=Gt(e);i!==0&&(t=i,n=yl(e,i))}if(n===1)throw n=Yc,Dl(e,0),Sl(e,t),_l(e,k()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Il(e,el,rl),_l(e,k()),null}function wl(e,t){var n=J;J|=1;try{return e(t)}finally{J=n,J===0&&(nl=k()+500,ca&&fa())}}function Tl(e){cl!==null&&cl.tag===0&&!(J&6)&&Rl();var t=J;J|=1;var n=Kc.transition,r=j;try{if(Kc.transition=null,j=1,e)return e()}finally{j=r,Kc.transition=n,J=t,!(J&6)&&fa()}}function El(){qc=Jc.current,R(Jc)}function Dl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ai(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&na();break;case 3:Oo(),R(Qi),R(B),No();break;case 5:Ao(r);break;case 4:Oo();break;case 13:R(H);break;case 19:R(H);break;case 10:Ga(r.type._context);break;case 22:case 23:El()}n=n.return}if(Y=e,X=e=Xl(e.current,null),Z=qc=t,Q=0,Yc=null,Qc=Zc=Xc=0,el=$c=null,Ya!==null){for(t=0;t<Ya.length;t++)if(n=Ya[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}Ya=null}return e}function Ol(e,t){do{var n=X;try{if(Wa(),Po.current=Ts,Lo){for(var i=U.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Lo=!1}if(Io=0,G=W=U=null,Ro=!1,zo=0,Gc.current=null,n===null||n.return===null){Q=1,Yc=t,X=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Z,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Is(s);if(m!==null){m.flags&=-257,Ls(m,s,c,o,t),m.mode&1&&Fs(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Fs(o,u,t),Al();break a}l=Error(r(426))}}else if(V&&c.mode&1){var _=Is(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Ls(_,s,c,o,t),La(ks(l,c));break a}}o=l=ks(l,c),Q!==4&&(Q=2),$c===null?$c=[o]:$c.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=Ns(o,l,t);ao(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(ol===null||!ol.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ps(o,c,t);ao(o,x);break a}}o=o.return}while(o!==null)}Fl(n)}catch(e){t=e,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function kl(){var e=Wc.current;return Wc.current=Ts,e===null?Ts:e}function Al(){(Q===0||Q===3||Q===2)&&(Q=4),Y===null||!(Xc&268435455)&&!(Zc&268435455)||Sl(Y,Z)}function jl(e,t){var n=J;J|=2;var i=kl();(Y!==e||Z!==t)&&(rl=null,Dl(e,t));do try{Ml();break}catch(t){Ol(e,t)}while(1);if(Wa(),J=n,Wc.current=i,X!==null)throw Error(r(261));return Y=null,Z=0,Q}function Ml(){for(;X!==null;)Pl(X)}function Nl(){for(;X!==null&&!Tt();)Pl(X)}function Pl(e){var t=Wl(e.alternate,e,qc);e.memoizedProps=e.pendingProps,t===null?Fl(e):X=t,Gc.current=null}function Fl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=hc(n,t),n!==null){n.flags&=32767,X=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Q=6,X=null;return}}else if(n=mc(n,t,qc),n!==null){X=n;return}if(t=t.sibling,t!==null){X=t;return}X=t=e}while(t!==null);Q===0&&(Q=5)}function Il(e,t,n){var r=j,i=Kc.transition;try{Kc.transition=null,j=1,Ll(e,t,n,r)}finally{Kc.transition=i,j=r}return null}function Ll(e,t,n,i){do Rl();while(cl!==null);if(J&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Yt(e,o),e===Y&&(X=Y=null,Z=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||sl||(sl=!0,Gl(At,function(){return Rl(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Kc.transition,Kc.transition=null;var s=j;j=1;var c=J;J|=4,Gc.current=null,Sc(e,n),Ic(n,e),Ur(ki),Cn=!!Oi,ki=Oi=null,e.current=n,Rc(n,e,a),Et(),J=c,j=s,Kc.transition=o}else e.current=n;if(sl&&(sl=!1,cl=e,ll=a),o=e.pendingLanes,o===0&&(ol=null),Ft(n.stateNode,i),_l(e,k()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(il)throw il=!1,e=al,al=null,e;return ll&1&&e.tag!==0&&Rl(),o=e.pendingLanes,o&1?e===dl?ul++:(ul=0,dl=e):ul=0,fa(),null}function Rl(){if(cl!==null){var e=Zt(ll),t=Kc.transition,n=j;try{if(Kc.transition=null,j=16>e?16:e,cl===null)var i=!1;else{if(e=cl,cl=null,ll=0,J&6)throw Error(r(331));var a=J;for(J|=4,K=e.current;K!==null;){var o=K,s=o.child;if(K.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(K=u;K!==null;){var d=K;switch(d.tag){case 0:case 11:case 15:Cc(8,d,o)}var f=d.child;if(f!==null)f.return=d,K=f;else for(;K!==null;){d=K;var p=d.sibling,m=d.return;if(Ec(d),d===u){K=null;break}if(p!==null){p.return=m,K=p;break}K=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}K=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,K=s;else b:for(;K!==null;){if(o=K,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Cc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,K=v;break b}K=o.return}}var y=e.current;for(K=y;K!==null;){s=K;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,K=b;else b:for(s=y;K!==null;){if(c=K,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:wc(9,c)}}catch(e){$(c,c.return,e)}if(c===s){K=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,K=x;break b}K=c.return}}if(J=a,fa(),Pt&&typeof Pt.onPostCommitFiberRoot==`function`)try{Pt.onPostCommitFiberRoot(Nt,e)}catch{}i=!0}return i}finally{j=n,Kc.transition=t}}return!1}function zl(e,t,n){t=ks(n,t),t=Ns(e,t,1),e=ro(e,t,1),t=ml(),e!==null&&(Jt(e,1,t),_l(e,t))}function $(e,t,n){if(e.tag===3)zl(e,e,n);else for(;t!==null;){if(t.tag===3){zl(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(ol===null||!ol.has(r))){e=ks(n,e),e=Ps(t,e,1),t=ro(t,e,1),e=ml(),t!==null&&(Jt(t,1,e),_l(t,e));break}}t=t.return}}function Bl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ml(),e.pingedLanes|=e.suspendedLanes&n,Y===e&&(Z&n)===n&&(Q===4||Q===3&&(Z&130023424)===Z&&500>k()-tl?Dl(e,0):Qc|=n),_l(e,t)}function Vl(e,t){t===0&&(e.mode&1?(t=Bt,Bt<<=1,!(Bt&130023424)&&(Bt=4194304)):t=1);var n=ml();e=Qa(e,t),e!==null&&(Jt(e,t,n),_l(e,n))}function Hl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vl(e,n)}function Ul(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Vl(e,n)}var Wl=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Qi.current)zs=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return zs=!1,cc(e,t,n);zs=!!(e.flags&131072)}else zs=!1,V&&t.flags&1048576&&Ca(t,ga,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;oc(e,t),e=t.pendingProps;var a=ea(t,B.current);qa(t,n),a=Uo(null,t,i,e,a,n);var o=Wo();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ta(i)?(o=!0,aa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,eo(t),a.updater=uo,t.stateNode=a,a._reactInternals=t,ho(t,i,e,n),t=Js(null,t,i,!0,o,n)):(t.tag=0,V&&o&&wa(t),Bs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(oc(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Yl(i),e=za(i,e),a){case 0:t=Ks(null,t,i,e,n);break a;case 1:t=qs(null,t,i,e,n);break a;case 11:t=Vs(null,t,i,e,n);break a;case 14:t=Hs(null,t,i,za(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:za(i,a),Ks(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:za(i,a),qs(e,t,i,a,n);case 3:a:{if(Ys(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,to(e,t),oo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=ks(Error(r(423)),t),t=Xs(e,t,i,n,a);break a}else if(i!==a){a=ks(Error(r(424)),t),t=Xs(e,t,i,n,a);break a}else for(Da=Fi(t.stateNode.containerInfo.firstChild),Ea=t,V=!0,Oa=null,n=xo(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ia(),i===a){t=sc(e,t,n);break a}Bs(e,t,i,n)}t=t.child}return t;case 5:return ko(t),e===null&&Ma(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,I(i,a)?s=null:o!==null&&I(i,o)&&(t.flags|=32),Gs(e,t),Bs(e,t,s,n),t.child;case 6:return e===null&&Ma(t),null;case 13:return $s(e,t,n);case 4:return Do(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=bo(t,null,i,n):Bs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:za(i,a),Vs(e,t,i,a,n);case 7:return Bs(e,t,t.pendingProps,n),t.child;case 8:return Bs(e,t,t.pendingProps.children,n),t.child;case 12:return Bs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,z(Ba,i._currentValue),i._currentValue=s,o!==null)if(Ir(o.value,s)){if(o.children===a.children&&!Qi.current){t=sc(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=no(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ka(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),Ka(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Bs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,qa(t,n),a=Ja(a),i=i(a),t.flags|=1,Bs(e,t,i,n),t.child;case 14:return i=t.type,a=za(i,t.pendingProps),a=za(i.type,a),Hs(e,t,i,a,n);case 15:return Us(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:za(i,a),oc(e,t),t.tag=1,ta(i)?(e=!0,aa(t)):e=!1,qa(t,n),po(t,i,a),ho(t,i,a,n),Js(null,t,i,!0,e,n);case 19:return ac(e,t,n);case 22:return Ws(e,t,n)}throw Error(r(156,t.tag))};function Gl(e,t){return Ct(e,t)}function Kl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ql(e,t,n,r){return new Kl(e,t,n,r)}function Jl(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Yl(e){if(typeof e==`function`)return+!!Jl(e);if(e!=null){if(e=e.$$typeof,e===oe)return 11;if(e===T)return 14}return 2}function Xl(e,t){var n=e.alternate;return n===null?(n=ql(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Zl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)Jl(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case te:return Ql(n.children,a,o,t);case ne:s=8,a|=8;break;case re:return e=ql(12,n,t,a|2),e.elementType=re,e.lanes=o,e;case se:return e=ql(13,n,t,a),e.elementType=se,e.lanes=o,e;case ce:return e=ql(19,n,t,a),e.elementType=ce,e.lanes=o,e;case ue:return $l(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case ie:s=10;break a;case ae:s=9;break a;case oe:s=11;break a;case T:s=14;break a;case le:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=ql(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Ql(e,t,n,r){return e=ql(7,e,r,t),e.lanes=n,e}function $l(e,t,n,r){return e=ql(22,e,r,t),e.elementType=ue,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=ql(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=ql(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qt(0),this.expirationTimes=qt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ru(e,t,n,r,i,a,o,s,c){return e=new nu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=ql(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},eo(a),e}function iu(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:w,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function au(e){if(!e)return Zi;e=e._reactInternals;a:{if(_t(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ta(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ta(n))return ia(e,n,t)}return t}function ou(e,t,n,r,i,a,o,s,c){return e=ru(n,r,!0,e,i,a,o,s,c),e.context=au(null),n=e.current,r=ml(),i=hl(n),a=no(r,i),a.callback=t??null,ro(n,a,i),e.current.lanes=i,Jt(e,i,r),_l(e,r),e}function su(e,t,n,r){var i=t.current,a=ml(),o=hl(i);return n=au(n),t.context===null?t.context=n:t.pendingContext=n,t=no(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ro(i,t,o),e!==null&&(gl(e,i,o,a),io(e,i,o)),o}function cu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function lu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){lu(e,t),(e=e.alternate)&&lu(e,t)}function du(){return null}var fu=typeof reportError==`function`?reportError:function(e){console.error(e)};function pu(e){this._internalRoot=e}mu.prototype.render=pu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));su(e,t,null,null)},mu.prototype.unmount=pu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Tl(function(){su(null,e,null,null)}),t[Bi]=null}};function mu(e){this._internalRoot=e}mu.prototype.unstable_scheduleHydration=function(e){if(e){var t=tn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<dn.length&&t!==0&&t<dn[n].priority;n++);dn.splice(n,0,e),n===0&&gn(e)}};function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function _u(){}function vu(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=cu(o);a.call(e)}}var o=ou(t,r,e,0,null,!1,!1,``,_u);return e._reactRootContainer=o,e[Bi]=o.current,gi(e.nodeType===8?e.parentNode:e),Tl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=cu(c);s.call(e)}}var c=ru(e,0,!1,null,null,!1,!1,``,_u);return e._reactRootContainer=c,e[Bi]=c.current,gi(e.nodeType===8?e.parentNode:e),Tl(function(){su(t,c,n,r)}),c}function yu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=cu(o);s.call(e)}}su(t,o,e,i)}else o=vu(n,t,e,i,r);return cu(o)}Qt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Vt(t.pendingLanes);n!==0&&(Xt(t,n|1),_l(t,k()),!(J&6)&&(nl=k()+500,fa()))}break;case 13:Tl(function(){var t=Qa(e,1);t!==null&&gl(t,e,1,ml())}),uu(e,1)}},$t=function(e){if(e.tag===13){var t=Qa(e,134217728);t!==null&&gl(t,e,134217728,ml()),uu(e,134217728)}},en=function(e){if(e.tag===13){var t=hl(e),n=Qa(e,t);n!==null&&gl(n,e,t,ml()),uu(e,t)}},tn=function(){return j},nn=function(e,t){var n=j;try{return j=e,t()}finally{j=n}},Qe=function(e,t,n){switch(t){case`input`:if(ke(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=qi(i);if(!a)throw Error(r(90));we(i),ke(i,a)}}}break;case`textarea`:Ie(e,n);break;case`select`:t=n.value,t!=null&&Ne(e,!!n.multiple,t,!1)}},rt=wl,it=Tl;var bu={usingClientEntryPoint:!1,Events:[Gi,Ki,qi,tt,nt,wl]},xu={findFiberByHostInstance:Wi,bundleType:0,version:`18.2.0`,rendererPackageName:`react-dom`},Su={bundleType:xu.bundleType,version:xu.version,rendererPackageName:xu.rendererPackageName,rendererConfig:xu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:S.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=xt(e),e===null?null:e.stateNode},findFiberByHostInstance:xu.findFiberByHostInstance||du,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.2.0-next-9e3b772b8-20220608`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Cu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cu.isDisabled&&Cu.supportsFiber)try{Nt=Cu.inject(Su),Pt=Cu}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hu(t))throw Error(r(200));return iu(e,t,null,n)},e.createRoot=function(e,t){if(!hu(e))throw Error(r(299));var n=!1,i=``,a=fu;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ru(e,1,!1,null,null,n,!1,i,a),e[Bi]=t.current,gi(e.nodeType===8?e.parentNode:e),new pu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=xt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Tl(e)},e.hydrate=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!hu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=fu;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=ou(t,null,e,1,n??null,a,!1,o,s),e[Bi]=t.current,gi(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new mu(t)},e.render=function(e,t,n){if(!gu(t))throw Error(r(200));return yu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!gu(e))throw Error(r(40));return e._reactRootContainer?(Tl(function(){yu(null,null,e,!1,function(){e._reactRootContainer=null,e[Bi]=null})}),!0):!1},e.unstable_batchedUpdates=wl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!gu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return yu(e,t,n,!1,i)},e.version=`18.2.0-next-9e3b772b8-20220608`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=m();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),g=`modulepreload`,_=function(e){return`/`+e},v={},y=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=_(t,n),t in v)return;v[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:g,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},b=c(u(),1),x=`popstate`;function ee(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function S(e={}){function t(e,t){let n=t.state?.masked,{pathname:r,search:i,hash:a}=n||e.location;return re(``,{pathname:r,search:i,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||`default`,n?{pathname:e.location.pathname,search:e.location.search,hash:e.location.hash}:void 0)}function n(e,t){return typeof t==`string`?t:ie(t)}return oe(t,n,null,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function te(){return Math.random().toString(36).substring(2,10)}function ne(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function re(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?ae(t):t,state:n,key:t&&t.key||r||te(),unstable_mask:i}}function ie({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function ae(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function oe(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u()+1;let d=ne(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=ee(e)?e:re(h.location,e,t);n&&n(r,e),l=u();let i=ne(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return se(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function se(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),C(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:ie(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function ce(e,t,n=`/`){return T(e,t,n,!1)}function T(e,t,n,r){let i=Te((typeof t==`string`?ae(t):t).pathname||`/`,n);if(i==null)return null;let a=ue(e);fe(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=we(i);o=xe(a[e],t,r)}return o}function le(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function ue(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;C(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=Pe([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),ue(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:ye(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of de(e.path))a(e,t,!0,n)}),t}function de(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=de(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function fe(e){e.sort((e,t)=>e.score===t.score?be(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var E=/^:[\w-]+$/,pe=3,me=2,he=1,ge=10,_e=-2,ve=e=>e===`*`;function ye(e,t){let n=e.split(`/`),r=n.length;return n.some(ve)&&(r+=_e),t&&(r+=me),n.filter(e=>!ve(e)).reduce((e,t)=>e+(E.test(t)?pe:t===``?he:ge),r)}function be(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function xe(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=Se({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:Pe([a,u.pathname]),pathnameBase:Ie(Pe([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=Pe([a,u.pathnameBase]))}return o}function Se(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Ce(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Ce(e,t=!1,n=!0){w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function we(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Te(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Ee=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function De(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?ae(e):e,a;return n?(n=Ne(n),a=n.startsWith(`/`)?Oe(n.substring(1),`/`):Oe(n,t)):a=t,{pathname:a,search:Le(r),hash:Re(i)}}function Oe(e,t){let n=Fe(t).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function ke(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Ae(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function je(e){let t=Ae(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function Me(e,t,n,r=!1){let i;typeof e==`string`?i=ae(e):(i={...e},C(!i.pathname||!i.pathname.includes(`?`),ke(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),ke(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),ke(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=De(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var Ne=e=>e.replace(/\/\/+/g,`/`),Pe=e=>Ne(e.join(`/`)),Fe=e=>e.replace(/\/+$/,``),Ie=e=>Fe(e).replace(/^\/*/,`/`),Le=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Re=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,ze=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function Be(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function Ve(e){return Pe(e.map(e=>e.route.path).filter(Boolean))||`/`}var He=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function Ue(e,t){let n=e;if(typeof n!=`string`||!Ee.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(He)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Te(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{w(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var We=[`POST`,`PUT`,`PATCH`,`DELETE`];new Set(We);var Ge=[`GET`,...We];new Set(Ge);var Ke=b.createContext(null);Ke.displayName=`DataRouter`;var qe=b.createContext(null);qe.displayName=`DataRouterState`;var Je=b.createContext(!1);function Ye(){return b.useContext(Je)}var Xe=b.createContext({isTransitioning:!1});Xe.displayName=`ViewTransition`;var Ze=b.createContext(new Map);Ze.displayName=`Fetchers`;var Qe=b.createContext(null);Qe.displayName=`Await`;var D=b.createContext(null);D.displayName=`Navigation`;var $e=b.createContext(null);$e.displayName=`Location`;var et=b.createContext({outlet:null,matches:[],isDataRoute:!1});et.displayName=`Route`;var tt=b.createContext(null);tt.displayName=`RouteError`;var nt=`REACT_ROUTER_ERROR`,rt=`REDIRECT`,it=`ROUTE_ERROR_RESPONSE`;function at(e){if(e.startsWith(`${nt}:${rt}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function ot(e){if(e.startsWith(`${nt}:${it}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new ze(t.status,t.statusText,t.data)}catch{}}function st(e,{relative:t}={}){C(ct(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=b.useContext(D),{hash:i,pathname:a,search:o}=mt(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:Pe([n,a])),r.createHref({pathname:s,search:o,hash:i})}function ct(){return b.useContext($e)!=null}function O(){return C(ct(),`useLocation() may be used only in the context of a <Router> component.`),b.useContext($e).location}var lt=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function ut(e){b.useContext(D).static||b.useLayoutEffect(e)}function dt(){let{isDataRoute:e}=b.useContext(et);return e?Mt():ft()}function ft(){C(ct(),`useNavigate() may be used only in the context of a <Router> component.`);let e=b.useContext(Ke),{basename:t,navigator:n}=b.useContext(D),{matches:r}=b.useContext(et),{pathname:i}=O(),a=JSON.stringify(je(r)),o=b.useRef(!1);return ut(()=>{o.current=!0}),b.useCallback((r,s={})=>{if(w(o.current,lt),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=Me(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:Pe([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}b.createContext(null);function pt(){let{matches:e}=b.useContext(et);return e[e.length-1]?.params??{}}function mt(e,{relative:t}={}){let{matches:n}=b.useContext(et),{pathname:r}=O(),i=JSON.stringify(je(n));return b.useMemo(()=>Me(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function ht(e,t){return gt(e,t)}function gt(e,t,n){C(ct(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=b.useContext(D),{matches:i}=b.useContext(et),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;Pt(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=O(),d;if(t){let e=typeof t==`string`?ae(t):t;C(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=ce(e,{pathname:p});w(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),w(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Ct(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:Pe([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:Pe([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/%/g,`%25`).replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?b.createElement($e.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function _t(){let e=jt(),t=Be(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=b.createElement(b.Fragment,null,b.createElement(`p`,null,`💿 Hey developer 👋`),b.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,b.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,b.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),b.createElement(b.Fragment,null,b.createElement(`h2`,null,`Unexpected Application Error!`),b.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?b.createElement(`pre`,{style:i},n):null,o)}var vt=b.createElement(_t,null),yt=class extends b.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=ot(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:b.createElement(et.Provider,{value:this.props.routeContext},b.createElement(tt.Provider,{value:e,children:this.props.component}));return this.context?b.createElement(xt,{error:e},t):t}};yt.contextType=Je;var bt=new WeakMap;function xt({children:e,error:t}){let{basename:n}=b.useContext(D);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=at(t.digest);if(e){let r=bt.get(t);if(r)throw r;let i=Ue(e.location,n);if(He&&!bt.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw bt.set(t,n),n}return b.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function St({routeContext:e,match:t,children:n}){let r=b.useContext(Ke);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),b.createElement(et.Provider,{value:e},n)}function Ct(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);C(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Ve(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||vt,o&&(s<0&&c===0?(Pt(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?b.createElement(n.route.Component,null):n.route.element?n.route.element:e,b.createElement(St,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?b.createElement(yt,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function wt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Tt(e){let t=b.useContext(Ke);return C(t,wt(e)),t}function Et(e){let t=b.useContext(qe);return C(t,wt(e)),t}function k(e){let t=b.useContext(et);return C(t,wt(e)),t}function Dt(e){let t=k(e),n=t.matches[t.matches.length-1];return C(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Ot(){return Dt(`useRouteId`)}function kt(){return Et(`useNavigation`).navigation}function At(){let{matches:e,loaderData:t}=Et(`useMatches`);return b.useMemo(()=>e.map(e=>le(e,t)),[e,t])}function jt(){let e=b.useContext(tt),t=Et(`useRouteError`),n=Dt(`useRouteError`);return e===void 0?t.errors?.[n]:e}function Mt(){let{router:e}=Tt(`useNavigate`),t=Dt(`useNavigate`),n=b.useRef(!1);return ut(()=>{n.current=!0}),b.useCallback(async(r,i={})=>{w(n.current,lt),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var Nt={};function Pt(e,t,n){!t&&!Nt[e]&&(Nt[e]=!0,w(!1,n))}b.memo(Ft);function Ft({routes:e,future:t,state:n,isStatic:r,onError:i}){return gt(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function A(e){C(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function It({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){C(!ct(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=b.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=ae(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=b.useMemo(()=>{let e=Te(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return w(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:b.createElement(D.Provider,{value:c},b.createElement($e.Provider,{children:t,value:h}))}function Lt({children:e,location:t}){return ht(Rt(e),t)}b.Component;function Rt(e,t=[]){let n=[];return b.Children.forEach(e,(e,r)=>{if(!b.isValidElement(e))return;let i=[...t,r];if(e.type===b.Fragment){n.push.apply(n,Rt(e.props.children,i));return}C(e.type===A,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),C(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Rt(e.props.children,i)),n.push(a)}),n}var zt=`get`,Bt=`application/x-www-form-urlencoded`;function Vt(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function Ht(e){return Vt(e)&&e.tagName.toLowerCase()===`button`}function Ut(e){return Vt(e)&&e.tagName.toLowerCase()===`form`}function Wt(e){return Vt(e)&&e.tagName.toLowerCase()===`input`}function Gt(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Kt(e,t){return e.button===0&&(!t||t===`_self`)&&!Gt(e)}function qt(e=``){return new URLSearchParams(typeof e==`string`||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,n)=>{let r=e[n];return t.concat(Array.isArray(r)?r.map(e=>[n,e]):[[n,r]])},[]))}function Jt(e,t){let n=qt(e);return t&&t.forEach((e,r)=>{n.has(r)||t.getAll(r).forEach(e=>{n.append(r,e)})}),n}var Yt=null;function Xt(){if(Yt===null)try{new FormData(document.createElement(`form`),0),Yt=!1}catch{Yt=!0}return Yt}var j=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function Zt(e){return e!=null&&!j.has(e)?(w(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Bt}"`),null):e}function Qt(e,t){let n,r,i,a,o;if(Ut(e)){let o=e.getAttribute(`action`);r=o?Te(o,t):null,n=e.getAttribute(`method`)||zt,i=Zt(e.getAttribute(`enctype`))||Bt,a=new FormData(e)}else if(Ht(e)||Wt(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Te(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||zt,i=Zt(e.getAttribute(`formenctype`))||Zt(o.getAttribute(`enctype`))||Bt,a=new FormData(o,e),!Xt()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(Vt(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=zt,r=null,i=Bt,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var $t={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},en=/[&><\u2028\u2029]/g;function tn(e){return e.replace(en,e=>$t[e])}function nn(e,t){if(e===!1||e==null)throw Error(t)}function rn(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Te(i.pathname,t)===`/`?i.pathname=`${Fe(t)}/_root.${r}`:i.pathname=`${Fe(i.pathname)}.${r}`,i}async function an(e,t){if(e.id in t)return t[e.id];try{let n=await y(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function on(e){return e!=null&&typeof e.page==`string`}function sn(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function cn(e,t,n){return pn((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await an(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(sn).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function ln(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function un(e,t,{includeHydrateFallback:n}={}){return dn(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function dn(e){return[...new Set(e)]}function fn(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function pn(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!on(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(fn(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function mn(){let e=b.useContext(Ke);return nn(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function hn(){let e=b.useContext(qe);return nn(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var gn=b.createContext(void 0);gn.displayName=`FrameworkContext`;function _n(){let e=b.useContext(gn);return nn(e,`You must render this element inside a <HydratedRouter> element`),e}function vn(e,t){let n=b.useContext(gn),[r,i]=b.useState(!1),[a,o]=b.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=b.useRef(null);b.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),b.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:yn(s,p),onBlur:yn(c,m),onMouseEnter:yn(l,p),onMouseLeave:yn(u,m),onTouchStart:yn(d,p)}]:[a,f,{}]:[!1,f,{}]}function yn(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function bn({page:e,...t}){let n=Ye(),{router:r}=mn(),i=b.useMemo(()=>ce(r.routes,e,r.basename),[r.routes,e,r.basename]);return i?n?b.createElement(Sn,{page:e,matches:i,...t}):b.createElement(Cn,{page:e,matches:i,...t}):null}function xn(e){let{manifest:t,routeModules:n}=_n(),[r,i]=b.useState([]);return b.useEffect(()=>{let r=!1;return cn(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function Sn({page:e,matches:t,...n}){let r=O(),{future:i}=_n(),{basename:a}=mn(),o=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=rn(e,a,i.unstable_trailingSlashAwareDataRequests,`rsc`),o=!1,s=[];for(let e of t)typeof e.route.shouldRevalidate==`function`?o=!0:s.push(e.route.id);return o&&s.length>0&&n.searchParams.set(`_routes`,s.join(`,`)),[n.pathname+n.search]},[a,i.unstable_trailingSlashAwareDataRequests,e,r,t]);return b.createElement(b.Fragment,null,o.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})))}function Cn({page:e,matches:t,...n}){let r=O(),{future:i,manifest:a,routeModules:o}=_n(),{basename:s}=mn(),{loaderData:c,matches:l}=hn(),u=b.useMemo(()=>ln(e,t,l,a,r,`data`),[e,t,l,a,r]),d=b.useMemo(()=>ln(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=b.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=rn(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=b.useMemo(()=>un(d,a),[d,a]),m=xn(d);return b.createElement(b.Fragment,null,f.map(e=>b.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>b.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>b.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function wn(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}b.Component;var Tn=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{Tn&&(window.__reactRouterVersion=`7.14.2`)}catch{}function En({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=b.useRef();i.current??=S({window:r,v5Compat:!0});let a=i.current,[o,s]=b.useState({action:a.action,location:a.location}),c=b.useCallback(e=>{n===!1?s(e):b.startTransition(()=>s(e))},[n]);return b.useLayoutEffect(()=>a.listen(c),[a,c]),b.createElement(It,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function Dn({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=b.useState({action:n.action,location:n.location}),o=b.useCallback(e=>{r===!1?a(e):b.startTransition(()=>a(e))},[r]);return b.useLayoutEffect(()=>n.listen(o),[n,o]),b.createElement(It,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}Dn.displayName=`unstable_HistoryRouter`;var On=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,M=b.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:_}=b.useContext(D),v=typeof l==`string`&&On.test(l),y=Ue(l,h);l=y.to;let x=st(l,{relative:r}),ee=O(),S=null;if(o){let e=Me(o,[],ee.unstable_mask?ee.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:Pe([h,e.pathname])),S=g.createHref(e)}let[C,w,te]=vn(n,p),ne=Fn(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:_});function re(t){e&&e(t),t.defaultPrevented||ne(t)}let ie=!(y.isExternal||i),ae=b.createElement(`a`,{...p,...te,href:(ie?S:void 0)||y.absoluteURL||x,onClick:ie?re:e,ref:wn(m,w),target:c,"data-discover":!v&&t===`render`?`true`:void 0});return C&&!v?b.createElement(b.Fragment,null,ae,b.createElement(bn,{page:x})):ae});M.displayName=`Link`;var kn=b.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=mt(a,{relative:c.relative}),d=O(),f=b.useContext(qe),{navigator:p,basename:m}=b.useContext(D),h=f!=null&&Kn(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,_=d.pathname,v=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(_=_.toLowerCase(),v=v?v.toLowerCase():null,g=g.toLowerCase()),v&&m&&(v=Te(v,m)||v);let y=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=_===g||!r&&_.startsWith(g)&&_.charAt(y)===`/`,ee=v!=null&&(v===g||!r&&v.startsWith(g)&&v.charAt(g.length)===`/`),S={isActive:x,isPending:ee,isTransitioning:h},C=x?e:void 0,w;w=typeof n==`function`?n(S):[n,x?`active`:null,ee?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let te=typeof i==`function`?i(S):i;return b.createElement(M,{...c,"aria-current":C,className:w,ref:l,style:te,to:a,viewTransition:o},typeof s==`function`?s(S):s)});kn.displayName=`NavLink`;var An=b.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=zt,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=b.useContext(D),g=zn(),_=Bn(s,{relative:l}),v=o.toLowerCase()===`get`?`get`:`post`,y=typeof s==`string`&&On.test(s);return b.createElement(`form`,{ref:m,method:v,action:_,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?b.startTransition(()=>p()):p()},...p,"data-discover":!y&&e===`render`?`true`:void 0})});An.displayName=`Form`;function jn({getKey:e,storageKey:t,...n}){let r=b.useContext(gn),{basename:i}=b.useContext(D),a=O(),o=At();Wn({getKey:e,storageKey:t});let s=b.useMemo(()=>{if(!r||!e)return null;let t=Un(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return b.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${tn(JSON.stringify(t||Vn))}, ${tn(JSON.stringify(s))})`}})}jn.displayName=`ScrollRestoration`;function Mn(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Nn(e){let t=b.useContext(Ke);return C(t,Mn(e)),t}function Pn(e){let t=b.useContext(qe);return C(t,Mn(e)),t}function Fn(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=dt(),d=O(),f=mt(e,{relative:o});return b.useCallback(p=>{if(Kt(p,t)){p.preventDefault();let t=n===void 0?ie(d)===ie(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?b.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}function In(e){w(typeof URLSearchParams<`u`,"You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let t=b.useRef(qt(e)),n=b.useRef(!1),r=O(),i=b.useMemo(()=>Jt(r.search,n.current?null:t.current),[r.search]),a=dt();return[i,b.useCallback((e,t)=>{let r=qt(typeof e==`function`?e(new URLSearchParams(i)):e);n.current=!0,a(`?`+r,t)},[a,i])]}var Ln=0,Rn=()=>`__${String(++Ln)}__`;function zn(){let{router:e}=Nn(`useSubmit`),{basename:t}=b.useContext(D),n=Ot(),r=e.fetch,i=e.navigate;return b.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=Qt(e,t);a.navigate===!1?await r(a.fetcherKey||Rn(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function Bn(e,{relative:t}={}){let{basename:n}=b.useContext(D),r=b.useContext(et);C(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...mt(e||`.`,{relative:t})},o=O();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:Pe([n,a.pathname])),ie(a)}var Vn=`react-router-scroll-positions`,Hn={};function Un(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Te(e.pathname,n)||e.pathname},t)),i??=e.key,i}function Wn({getKey:e,storageKey:t}={}){let{router:n}=Nn(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=Pn(`useScrollRestoration`),{basename:a}=b.useContext(D),o=O(),s=At(),c=kt();b.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),Gn(b.useCallback(()=>{if(c.state===`idle`){let t=Un(o,s,a,e);Hn[t]=window.scrollY}try{sessionStorage.setItem(t||Vn,JSON.stringify(Hn))}catch(e){w(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(b.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||Vn);e&&(Hn=JSON.parse(e))}catch{}},[t]),b.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(Hn,()=>window.scrollY,e?(t,n)=>Un(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),b.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{w(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function Gn(e,t){let{capture:n}=t||{};b.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function Kn(e,{relative:t}={}){let n=b.useContext(Xe);C(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Nn(`useViewTransitionState`),i=mt(e,{relative:t});if(!n.isTransitioning)return!1;let a=Te(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Te(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Se(i.pathname,o)!=null||Se(i.pathname,a)!=null}var qn=o((e=>{var t=u(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),Jn=o(((e,t)=>{t.exports=qn()})),Yn=c(h(),1),N=Jn(),Xn=[`Namkeen`,`Spices`,`Powder`,`Grains`,`Snacks`],Zn=[{label:`Weighing & Filling`,to:`/machines/weighing`},{label:`Packaging Machines`,to:`/machines/packaging`},{label:`Sealing Machines`,to:`/machines/sealing`},{label:`Labelling Machines`,to:`/machines/labelling`}],Qn=[{label:`Media Home`,to:`/media`},{label:`Videos`,to:`/media/videos`}],$n=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Barlow:wght@500;600;700;800&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  /* ── NAV BASE (mobile-first: compact by default) ── */
  .nb {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    transition: box-shadow 0.3s ease;
  }
  .nb.scrolled {
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08);
  }

  .nb-inner {
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 60px;
    padding: 0 12px;
    gap: 0;
  }
  @media (min-width: 480px) {
    .nb-inner { height: 68px; padding: 0 16px; }
  }
  @media (min-width: 1024px) {
    .nb-inner {
      height: 82px;
      padding: 0 40px;
    }
  }

  /* ── LOGO ── */
  .nb-logo {
    display: flex;
    align-items: center;
    text-decoration: none;
    flex-shrink: 0;
    margin-right: 10px;
    min-width: 0;
  }
  @media (min-width: 480px) {
    .nb-logo { margin-right: 16px; }
  }
  @media (min-width: 1024px) {
    .nb-logo { margin-right: 40px; }
  }

  .nb-logo-box {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 36px;
    overflow: hidden;
    border-radius: 7px;
    transition: transform 0.2s ease;
  }
  .nb-logo-box:hover { transform: scale(1.02); }

  .nb-logo-video {
    display: block;
    height: 36px;
    width: auto;
    max-width: 110px;
    object-fit: contain;
    border-radius: inherit;
  }

  @media (min-width: 480px) {
    .nb-logo-box { height: 44px; border-radius: 8px; }
    .nb-logo-video { height: 44px; max-width: 140px; }
  }

  @media (min-width: 1024px) {
    .nb-logo-box { height: 56px; border-radius: 10px; }
    .nb-logo-video { height: 56px; max-width: 220px; }
  }

  /* ── DESKTOP NAV ── */
  .nb-links {
    display: none;
    align-items: center;
    flex: 1;
    justify-content: center;
    gap: 10px;
    list-style: none;
  }
  @media (min-width: 1024px) {
    .nb-links { display: flex; }
  }

  /* Each link as separate button */
  .nb-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 20px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-2);
    text-decoration: none;
    border: 1.5px solid var(--border);
    border-radius: 8px;
    white-space: nowrap;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
    position: relative;
    background: var(--surface);
  }
  .nb-link:hover {
    color: var(--on-accent);
    background: var(--accent);
    border-color: var(--accent);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
  .nb-link.active {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  }

  /* ── DROPDOWN WRAPPER ── */
  .nb-dd-wrap {
    position: relative;
    display: flex;
    align-items: center;
  }
  .nb-dd-wrap::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0; right: 0;
    height: 20px;
    background: transparent;
    pointer-events: auto;
    display: none;
  }
  .nb-dd-wrap:hover::after { display: block; }

  /* Dropdown button as separate button */
  .nb-dd-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 10px 20px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 700;
    color: var(--text-2);
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: 8px;
    white-space: nowrap;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .nb-dd-btn:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(245, 158, 11, 0.3);
  }
  .nb-dd-btn.open {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    box-shadow: 0 2px 8px rgba(245, 158, 11, 0.25);
  }
  .nb-chevron {
    transition: transform 0.2s ease;
    flex-shrink: 0;
    opacity: 0.7;
  }
  .nb-dd-btn.open .nb-chevron,
  .nb-dd-btn:hover .nb-chevron {
    transform: rotate(180deg);
    opacity: 1;
  }

  /* ── DROPDOWN PANEL ── */
  .nb-dropdown {
    position: absolute;
    top: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%) translateY(6px);
    min-width: 240px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s ease, transform 0.2s ease;
    z-index: 200;
  }
  .nb-dropdown.open {
    opacity: 1;
    pointer-events: auto;
    transform: translateX(-50%) translateY(0);
  }

  /* Each dropdown item as separate button */
  .nb-dd-item {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px 18px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    color: var(--text-2);
    text-decoration: none;
    background: var(--surface);
    border: 1.5px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    transition: all 0.15s ease;
    margin-bottom: 8px;
  }
  .nb-dd-item:last-child { margin-bottom: 0; }
  .nb-dd-item:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(245, 158, 11, 0.25);
  }

  /* ── CTA BUTTON ── */
  .nb-cta {
    display: none;
    align-items: center;
    background: #f59e0b;
    color: #ffffff;
    padding: 12px 28px;
    border-radius: 8px;
    border: 2px solid #f59e0b;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: 16px;
    transition: all 0.2s ease;
  }
  .nb-cta:hover {
    background: #ffffff;
    color: #f59e0b;
    border-color: #f59e0b;
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(245, 158, 11, 0.3);
  }
  @media (min-width: 1024px) {
    .nb-cta { display: flex; }
  }

  /* ── HAMBURGER (mobile-first: compact) ── */
  .nb-ham {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    width: 38px;
    height: 38px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    cursor: pointer;
    padding: 9px;
    border-radius: 8px;
    flex-shrink: 0;
    margin-left: auto;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-ham {
      gap: 5px;
      width: 44px;
      height: 44px;
      border-width: 2px;
      padding: 10px;
      border-radius: 9px;
    }
  }
  .nb-ham:hover {
    border-color: #f59e0b;
    background: #f59e0b;
  }
  .nb-ham span {
    display: block;
    width: 100%;
    height: 2px;
    background: #374151;
    border-radius: 2px;
    transition: all 0.3s ease;
  }
  @media (min-width: 480px) {
    .nb-ham span { height: 2.5px; }
  }
  .nb-ham:hover span { background: #ffffff; }
  .nb-ham.open {
    border-color: #f59e0b;
    background: #f59e0b;
  }
  .nb-ham.open span { background: #ffffff; }
  .nb-ham.open span:nth-child(1) {
    transform: translateY(6px) rotate(45deg);
  }
  @media (min-width: 480px) {
    .nb-ham.open span:nth-child(1) { transform: translateY(8.5px) rotate(45deg); }
  }
  .nb-ham.open span:nth-child(2) {
    opacity: 0;
    transform: scaleX(0);
  }
  .nb-ham.open span:nth-child(3) {
    transform: translateY(-6px) rotate(-45deg);
  }
  @media (min-width: 480px) {
    .nb-ham.open span:nth-child(3) { transform: translateY(-8.5px) rotate(-45deg); }
  }
  @media (min-width: 1024px) {
    .nb-ham { display: none; }
  }

  /* ── MOBILE OVERLAY ── */
  .nb-overlay {
    position: fixed;
    inset: 0;
    z-index: 98;
    background: rgba(0, 0, 0, 0.4);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
  }
  .nb-overlay.open {
    opacity: 1;
    pointer-events: auto;
  }

  /* ── MOBILE DRAWER (mobile-first: compact, offsets match header height) ── */
  .nb-drawer {
    position: fixed;
    top: 60px;
    left: 0; right: 0;
    z-index: 99;
    background: #ffffff;
    border-bottom: 1px solid #e5e7eb;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    transform: translateY(-4px);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.2s ease;
    max-height: calc(100svh - 60px);
    overflow-y: auto;
  }
  @media (min-width: 480px) {
    .nb-drawer {
      top: 68px;
      max-height: calc(100svh - 68px);
    }
  }
  @media (min-width: 1024px) {
    .nb-drawer {
      top: 82px;
      max-height: calc(100svh - 82px);
    }
  }
  .nb-drawer.open {
    transform: translateY(0);
    opacity: 1;
    pointer-events: auto;
  }

  .nb-mob-nav {
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  @media (min-width: 480px) {
    .nb-mob-nav { padding: 16px; gap: 10px; }
  }

  /* Mobile link as separate button */
  .nb-mob-link {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 12px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #374151;
    text-decoration: none;
    border: 1.5px solid #e5e7eb;
    border-radius: 9px;
    background: #ffffff;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-link {
      padding: 16px 20px;
      font-size: 16px;
      border-width: 2px;
      border-radius: 10px;
      letter-spacing: 0.04em;
    }
  }
  .nb-mob-link:hover,
  .nb-mob-link.active {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  /* Mobile dropdown button */
  .nb-mob-dd-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: 100%;
    padding: 12px 16px;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 9px;
    cursor: pointer;
    font-family: 'Barlow', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: #374151;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-dd-btn {
      gap: 10px;
      padding: 16px 20px;
      border-width: 2px;
      border-radius: 10px;
      font-size: 16px;
      letter-spacing: 0.04em;
    }
  }
  .nb-mob-dd-btn:hover,
  .nb-mob-dd-btn.open {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  .nb-mob-sub {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    padding: 0 4px;
  }
  .nb-mob-sub.open {
    max-height: 500px;
    padding-top: 8px;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
  @media (min-width: 480px) {
    .nb-mob-sub.open { padding-top: 10px; gap: 8px; }
  }

  /* Mobile sub-item as separate button */
  .nb-mob-sub-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 12px 16px;
    font-family: 'Barlow', sans-serif;
    font-size: 13.5px;
    font-weight: 600;
    color: #4b5563;
    text-decoration: none;
    background: #ffffff;
    border: 1.5px solid #e5e7eb;
    border-radius: 8px;
    cursor: pointer;
    text-align: center;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    transition: all 0.15s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-sub-item {
      padding: 14px 18px;
      font-size: 15px;
    }
  }
  .nb-mob-sub-item:hover {
    color: #ffffff;
    background: #f59e0b;
    border-color: #f59e0b;
  }

  .nb-mob-cta-wrap {
    padding: 6px 12px 16px;
  }
  @media (min-width: 480px) {
    .nb-mob-cta-wrap { padding: 8px 16px 20px; }
  }
  .nb-mob-cta {
    width: 100%;
    padding: 15px;
    background: #f59e0b;
    color: #ffffff;
    border: 2px solid #f59e0b;
    border-radius: 9px;
    cursor: pointer;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: all 0.2s ease;
  }
  @media (min-width: 480px) {
    .nb-mob-cta {
      padding: 18px;
      border-radius: 10px;
      font-size: 17px;
      letter-spacing: 0.12em;
    }
  }
  .nb-mob-cta:hover {
    background: #ffffff;
    color: #f59e0b;
  }
`,er=()=>(0,N.jsx)(`svg`,{className:`nb-chevron`,width:`12`,height:`12`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`polyline`,{points:`6 9 12 15 18 9`})});function tr(e=150){let[t,n]=(0,b.useState)(!1),r=(0,b.useRef)(null);return(0,b.useEffect)(()=>()=>clearTimeout(r.current),[]),{open:t,setOpen:n,handleMouseEnter:()=>{clearTimeout(r.current),n(!0)},handleMouseLeave:()=>{r.current=setTimeout(()=>n(!1),e)}}}function nr(){let[e,t]=(0,b.useState)(!1),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(!1),u=tr(),d=tr(),f=tr(),p=(0,b.useRef)(null),{pathname:m}=O(),h=dt();(0,b.useEffect)(()=>{let e=()=>r(window.scrollY>10);return window.addEventListener(`scroll`,e,{passive:!0}),()=>window.removeEventListener(`scroll`,e)},[]),(0,b.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,b.useEffect)(()=>{let e=p.current;e&&(e.muted=!0,e.play().catch(()=>{}))},[]);let g=()=>{t(!1),a(!1),s(!1),l(!1),u.setOpen(!1),d.setOpen(!1),f.setOpen(!1)},_=e=>{h(`/applications?type=${encodeURIComponent(e)}`),g()};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:$n}),(0,N.jsx)(`div`,{className:`nb-overlay${e?` open`:``}`,onClick:g}),(0,N.jsx)(`header`,{className:`nb${n?` scrolled`:``}`,children:(0,N.jsxs)(`div`,{className:`nb-inner`,children:[(0,N.jsx)(M,{to:`/`,className:`nb-logo`,onClick:g,children:(0,N.jsx)(`div`,{className:`nb-logo-box`,children:(0,N.jsx)(`video`,{ref:p,className:`nb-logo-video`,src:`/videos/SUNTECH_logo3d.mp4`,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`auto`,disablePictureInPicture:!0,disableRemotePlayback:!0,"aria-label":`SunTech Packaging Machines`})})}),(0,N.jsxs)(`nav`,{className:`nb-links`,children:[(0,N.jsx)(M,{to:`/`,className:`nb-link${m===`/`?` active`:``}`,onClick:g,children:`Home`}),(0,N.jsx)(M,{to:`/about`,className:`nb-link${m===`/about`?` active`:``}`,onClick:g,children:`About`}),(0,N.jsxs)(`div`,{className:`nb-dd-wrap`,onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave,children:[(0,N.jsxs)(`button`,{className:`nb-dd-btn${f.open||m.startsWith(`/media`)?` open`:``}`,children:[`Media `,(0,N.jsx)(er,{})]}),(0,N.jsx)(`div`,{className:`nb-dropdown${f.open?` open`:``}`,onMouseEnter:f.handleMouseEnter,onMouseLeave:f.handleMouseLeave,children:Qn.map(e=>(0,N.jsx)(M,{to:e.to,className:`nb-dd-item`,onClick:g,children:e.label},e.to))})]}),(0,N.jsxs)(`div`,{className:`nb-dd-wrap`,onMouseEnter:u.handleMouseEnter,onMouseLeave:u.handleMouseLeave,children:[(0,N.jsxs)(`button`,{className:`nb-dd-btn${u.open?` open`:``}`,onClick:()=>{h(`/machines`),g()},children:[`Machines `,(0,N.jsx)(er,{})]}),(0,N.jsx)(`div`,{className:`nb-dropdown${u.open?` open`:``}`,onMouseEnter:u.handleMouseEnter,onMouseLeave:u.handleMouseLeave,children:Zn.map(e=>(0,N.jsx)(M,{to:e.to,className:`nb-dd-item`,onClick:g,children:e.label},e.to))})]}),(0,N.jsx)(M,{to:`/projects`,className:`nb-link${m===`/projects`?` active`:``}`,onClick:g,children:`Projects`}),(0,N.jsx)(M,{to:`/brochure`,className:`nb-link${m===`/brochure`?` active`:``}`,onClick:g,children:`Brochure`}),(0,N.jsx)(M,{to:`/faq`,className:`nb-link${m===`/faq`?` active`:``}`,onClick:g,children:`FAQ`}),(0,N.jsx)(M,{to:`/solutions`,className:`nb-link${m===`/solutions`?` active`:``}`,onClick:g,children:`Solutions`}),(0,N.jsx)(M,{to:`/contact`,className:`nb-link${m===`/contact`?` active`:``}`,onClick:g,children:`Contact`})]}),(0,N.jsx)(`button`,{className:`nb-cta`,onClick:()=>h(`/contact`),children:`Get a Quote`}),(0,N.jsxs)(`button`,{className:`nb-ham${e?` open`:``}`,onClick:()=>t(e=>!e),"aria-label":`Toggle menu`,children:[(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{}),(0,N.jsx)(`span`,{})]})]})}),(0,N.jsxs)(`div`,{className:`nb-drawer${e?` open`:``}`,children:[(0,N.jsxs)(`nav`,{className:`nb-mob-nav`,children:[(0,N.jsx)(M,{to:`/`,className:`nb-mob-link${m===`/`?` active`:``}`,onClick:g,children:`Home`}),(0,N.jsx)(M,{to:`/about`,className:`nb-mob-link${m===`/about`?` active`:``}`,onClick:g,children:`About`}),(0,N.jsx)(`div`,{className:`nb-mob-sub${o?` open`:``}`,children:Xn.map(e=>(0,N.jsx)(`button`,{className:`nb-mob-sub-item`,onClick:()=>_(e),children:e},e))}),(0,N.jsxs)(`button`,{className:`nb-mob-dd-btn${c?` open`:``}`,onClick:()=>l(e=>!e),children:[`Media `,(0,N.jsx)(er,{})]}),(0,N.jsx)(`div`,{className:`nb-mob-sub${c?` open`:``}`,children:Qn.map(e=>(0,N.jsx)(M,{to:e.to,className:`nb-mob-sub-item`,onClick:g,children:e.label},e.to))}),(0,N.jsxs)(`button`,{className:`nb-mob-dd-btn${i?` open`:``}`,onClick:()=>a(e=>!e),children:[`Machines `,(0,N.jsx)(er,{})]}),(0,N.jsxs)(`div`,{className:`nb-mob-sub${i?` open`:``}`,children:[(0,N.jsx)(M,{to:`/machines`,className:`nb-mob-sub-item`,onClick:g,children:`All Machines`}),Zn.map(e=>(0,N.jsx)(M,{to:e.to,className:`nb-mob-sub-item`,onClick:g,children:e.label},e.to))]}),(0,N.jsx)(M,{to:`/projects`,className:`nb-mob-link${m===`/projects`?` active`:``}`,onClick:g,children:`Projects`}),(0,N.jsx)(M,{to:`/brochure`,className:`nb-mob-link${m===`/brochure`?` active`:``}`,onClick:g,children:`Brochure`}),(0,N.jsx)(M,{to:`/faq`,className:`nb-mob-link${m===`/faq`?` active`:``}`,onClick:g,children:`FAQ`}),(0,N.jsx)(M,{to:`/solutions`,className:`nb-mob-link${m===`/solutions`?` active`:``}`,onClick:g,children:`Solutions`}),(0,N.jsx)(M,{to:`/contact`,className:`nb-mob-link${m===`/contact`?` active`:``}`,onClick:g,children:`Contact`})]}),(0,N.jsx)(`div`,{className:`nb-mob-cta-wrap`,children:(0,N.jsx)(`button`,{className:`nb-mob-cta`,onClick:()=>{h(`/contact`),g()},children:`Get a Quote`})})]})]})}var rr=[`ISO 9001 Certified`,`Made in India`,`50+ Installations`,`12+ Cities`,`Custom Engineering`,`After-Sales Support`,`PLC Controlled`,`Stainless Steel Build`,`1-Year Warranty`],ir=[{label:`Home`,to:`/`},{label:`About Us`,to:`/about`},{label:`Machines`,to:`/machines`},{label:`Projects`,to:`/projects`},{label:`Contact`,to:`/contact`}],ar=[{label:`All Machines`,to:`/machines`},{label:`Weighing & Filling`,to:`/machines/weighing`},{label:`Packaging Machines`,to:`/machines/packaging`},{label:`Sealing Machines`,to:`/machines/sealing`},{label:`Labelling Machines`,to:`/machines/labelling`}],or=[{label:`Media`,to:`/media`},{label:`FAQ`,to:`/faq`},{label:`Solutions`,to:`/solutions`},{label:`Brochure`,to:`/brochure`}];function sr(){let e=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let t=e.current;t&&(t.muted=!0,t.play().catch(()=>{}))},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* ── TOKENS — premium warm-dark peach/orange, only a hint of black ── */
        .ft {
          --ft-bg: #241811;
          --ft-bg-light: #2c1d14;
          --ft-text: #f7ece0;
          --ft-muted: #cdad93;
          --ft-border: rgba(244, 169, 100, 0.16);
          --ft-orange: #f0974a;
          --ft-orange-bg: rgba(240, 151, 74, 0.14);
        }

        /* ── BASE ── */
        .ft {
          font-family: var(--font-body, 'Inter', sans-serif);
          background:
            linear-gradient(165deg, #2a1c13 0%, #201510 55%, #1c130e 100%);
          color: var(--ft-text);
          position: relative;
          overflow: hidden;
          padding-top: 0;
        }

        /* subtle grid pattern overlay */
        .ft::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(to right, rgba(240, 151, 74, 0.07) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(240, 151, 74, 0.07) 1px, transparent 1px);
          background-size: 34px 34px;
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%);
          mask-image: radial-gradient(ellipse 90% 80% at 50% 0%, #000 40%, transparent 100%);
          pointer-events: none;
        }

        /* soft orange glow accents */
        .ft::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 40% at 8% 0%, rgba(240, 151, 74, 0.10) 0%, transparent 70%),
            radial-gradient(ellipse 50% 35% at 100% 100%, rgba(240, 151, 74, 0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .ft-z { position: relative; z-index: 1; }

        /* ── TICKER ── */
        .ft-ticker-wrap {
          overflow: hidden;
          border-bottom: 1px solid var(--ft-border);
          background: var(--ft-bg-light);
          position: relative;
          z-index: 1;
        }

        .ft-ticker-track {
          display: flex; 
          width: max-content;
          animation: ft-tick 35s linear infinite;
        }

        @keyframes ft-tick {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .ft-ticker-item {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          padding: 12px 28px;
          font-size: 11px; 
          font-weight: 600;
          letter-spacing: 0.05em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          white-space: nowrap;
        }

        .ft-ticker-dot {
          width: 4px; 
          height: 4px; 
          border-radius: 50%;
          background: var(--ft-orange); 
          flex-shrink: 0;
        }

        /* ── INNER WRAP ── */
        .ft-inner {
          max-width: 1220px; 
          margin: 0 auto;
          padding: 0 16px;
        }

        /* ── TOP ORANGE BAR ── */
        .ft-top-bar {
          height: 4px;
          background: linear-gradient(90deg, #f0974a 0%, #d9772c 100%);
          position: relative;
          z-index: 1;
        }

        /* ── BRAND SECTION ── */
        .ft-brand {
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
          display: flex; 
          flex-direction: column; 
          gap: 28px;
        }

        @media (min-width: 768px) {
          .ft-brand {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 48px;
            padding: 48px 0 40px;
          }
        }

        /* ── LOGO ── */
        .ft-logo {
          display: inline-flex; 
          align-items: center;
          text-decoration: none; 
          width: fit-content;
        }

        .ft-logo-box {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 60px;
          padding: 0;
          overflow: hidden;
          border-radius: 10px;
          background: var(--ft-bg-light);
          border: 2px solid var(--ft-orange);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
          transition: all 0.3s ease;
        }

        .ft-logo-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(240, 151, 74, 0.25);
          border-color: var(--ft-orange);
        }

        .ft-logo-video {
          display: block;
          height: 60px;
          width: auto;
          max-width: 200px;
          object-fit: contain;
          border-radius: inherit;
        }

        @media (min-width: 768px) {
          .ft-logo-box {
            height: 70px;
          }
          .ft-logo-video {
            height: 70px;
            max-width: 240px;
          }
        }

        .ft-desc {
          font-size: 14px; 
          font-weight: 500;
          color: var(--ft-muted); 
          line-height: 1.7;
          margin: 14px 0 0; 
          max-width: 340px;
        }

        /* ── CERTS ── */
        .ft-certs { 
          display: flex; 
          gap: 10px; 
          flex-wrap: wrap; 
          margin-top: 14px; 
        }

        .ft-cert {
          font-size: 10px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-orange);
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          padding: 6px 12px; 
          border-radius: 4px;
        }

        /* ── STATS ── */
        .ft-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px 24px;
        }

        @media (min-width: 480px) {
          .ft-stats { 
            grid-template-columns: repeat(4, auto); 
            gap: 0 36px; 
          }
        }

        .ft-stat-num {
          font-size: 32px; 
          font-weight: 800;
          color: var(--ft-text); 
          line-height: 1; 
          display: block;
        }

        .ft-stat-num span { 
          color: var(--ft-orange); 
        }

        .ft-stat-lbl {
          font-size: 11px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          margin-top: 6px; 
          display: block;
        }

        /* ── LINKS GRID ── */
        .ft-links-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 20px;
          padding: 32px 0 28px;
          border-bottom: 1px solid var(--ft-border);
        }

        @media (min-width: 640px) {
          .ft-links-grid { 
            grid-template-columns: repeat(4, 1fr); 
            gap: 40px 32px; 
            padding: 40px 0 36px;
          }
        }

        .ft-col-head {
          font-size: 12px; 
          font-weight: 800;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-orange);
          margin-bottom: 18px;
          display: flex; 
          align-items: center; 
          gap: 8px;
        }

        .ft-col-head::after {
          content: ''; 
          flex: 0 0 24px; 
          height: 2px;
          background: var(--ft-orange);
        }

        .ft-col-links {
          list-style: none; 
          margin: 0; 
          padding: 0;
          display: flex; 
          flex-direction: column; 
          gap: 12px;
        }

        .ft-col-links a {
          font-size: 14px; 
          font-weight: 500;
          color: var(--ft-muted); 
          text-decoration: none;
          display: inline-flex; 
          align-items: center;
          transition: all 0.3s ease;
          letter-spacing: 0;
          position: relative; 
          padding-left: 0;
        }

        .ft-col-links a::before {
          content: '';
          display: inline-block; 
          width: 0; 
          height: 2px;
          background: var(--ft-orange);
          transition: all 0.3s ease;
          margin-right: 0; 
          vertical-align: middle;
        }

        .ft-col-links a:hover { 
          color: var(--ft-orange);
        }

        .ft-col-links a:hover::before { 
          width: 12px; 
          margin-right: 8px; 
        }

        /* ── CONTACT SECTION ── */
        .ft-contact-col { 
          grid-column: 1 / -1; 
        }

        @media (min-width: 640px) { 
          .ft-contact-col { 
            grid-column: auto; 
          } 
        }

        .ft-contact-list {
          list-style: none; 
          margin: 0; 
          padding: 0;
          display: flex; 
          flex-direction: column; 
          gap: 14px;
        }

        .ft-contact-item {
          display: flex; 
          align-items: flex-start; 
          gap: 12px;
          font-size: 13px; 
          font-weight: 500;
          color: var(--ft-muted); 
          line-height: 1.6;
          transition: color 0.3s ease;
        }

        .ft-contact-item:hover { 
          color: var(--ft-orange); 
        }

        .ft-contact-ico {
          width: 36px; 
          height: 36px; 
          flex-shrink: 0;
          border-radius: 6px;
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          display: flex; 
          align-items: center; 
          justify-content: center;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .ft-contact-item:hover .ft-contact-ico {
          background: var(--ft-orange);
          border-color: var(--ft-orange);
        }

        .ft-contact-ico svg {
          width: 14px; 
          height: 14px;
          stroke: var(--ft-orange); 
          fill: none;
          stroke-width: 2; 
          stroke-linecap: round; 
          stroke-linejoin: round;
        }

        .ft-contact-item:hover .ft-contact-ico svg {
          stroke: #201510;
        }

        /* ── BOTTOM BAR ── */
        .ft-bottom {
          display: flex; 
          flex-direction: column;
          align-items: flex-start; 
          gap: 16px;
          padding: 20px 0 28px; 
          text-align: left;
        }

        @media (min-width: 640px) {
          .ft-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }

        .ft-copy {
          font-size: 11px; 
          font-weight: 600;
          letter-spacing: 0.05em; 
          text-transform: uppercase;
          color: var(--ft-muted);
        }

        .ft-bottom-right {
          display: flex; 
          align-items: center; 
          gap: 20px; 
          flex-wrap: wrap;
          justify-content: flex-start;
        }

        @media (min-width: 640px) { 
          .ft-bottom-right { 
            justify-content: flex-end; 
          } 
        }

        .ft-designed-by {
          color: var(--ft-muted);
          font-size: 11px;
          display: flex;
          align-items: center;
          gap: 6px;
          margin: 0;
        }

        /* ── TROVIRA BADGE ── */
        .ft-trovira-badge {
          display: inline-flex; 
          align-items: center; 
          gap: 8px;
          padding: 6px 14px 6px 10px; 
          border-radius: 999px;
          background: var(--ft-orange-bg);
          border: 1.5px solid var(--ft-orange);
          text-decoration: none; 
          color: var(--ft-orange);
          font-size: 10px; 
          font-weight: 700;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          transition: all 0.3s ease;
          will-change: transform;
        }

        .ft-trovira-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(240, 151, 74, 0.25);
          background: var(--ft-orange);
          color: #201510;
        }

        .ft-trovira-dot { 
          width: 6px; 
          height: 6px; 
          border-radius: 50%; 
          background: currentColor; 
          box-shadow: 0 0 6px currentColor; 
          flex-shrink: 0; 
        }

        .ft-legal { 
          display: flex; 
          gap: 20px; 
        }

        .ft-legal a, .ft-legal-link {
          font-size: 10px; 
          font-weight: 600;
          letter-spacing: 0.08em; 
          text-transform: uppercase;
          color: var(--ft-muted); 
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .ft-legal a:hover, .ft-legal-link:hover { 
          color: var(--ft-orange); 
        }
      `}),(0,N.jsxs)(`footer`,{className:`ft`,children:[(0,N.jsx)(`div`,{className:`ft-top-bar`}),(0,N.jsx)(`div`,{className:`ft-ticker-wrap`,children:(0,N.jsx)(`div`,{className:`ft-ticker-track`,children:[...rr,...rr].map((e,t)=>(0,N.jsxs)(`span`,{className:`ft-ticker-item`,children:[(0,N.jsx)(`span`,{className:`ft-ticker-dot`}),e]},t))})}),(0,N.jsx)(`div`,{className:`ft-z`,children:(0,N.jsxs)(`div`,{className:`ft-inner`,children:[(0,N.jsxs)(`div`,{className:`ft-brand`,children:[(0,N.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,maxWidth:360},children:[(0,N.jsx)(M,{to:`/`,className:`ft-logo`,children:(0,N.jsx)(`div`,{className:`ft-logo-box`,children:(0,N.jsx)(`video`,{ref:e,className:`ft-logo-video`,src:`/videos/SUNTECH_logo3d.mp4`,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:`auto`,disablePictureInPicture:!0,disableRemotePlayback:!0,"aria-label":`SunTech Packaging Machines`})})}),(0,N.jsx)(`p`,{className:`ft-desc`,children:`High-performance industrial packaging machines engineered for precision, speed, and long-term reliability across food, pharma & agro sectors.`}),(0,N.jsxs)(`div`,{className:`ft-certs`,children:[(0,N.jsx)(`span`,{className:`ft-cert`,children:`ISO 9001`}),(0,N.jsx)(`span`,{className:`ft-cert`,children:`CE Marked`})]})]}),(0,N.jsx)(`div`,{className:`ft-stats`,children:[{num:`500`,sup:`+`,lbl:`Installations`},{num:`40`,sup:`+`,lbl:`Cities`},{num:`15`,sup:`+`,lbl:`Years Exp.`},{num:`99`,sup:`%`,lbl:`Uptime`}].map((e,t)=>(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`span`,{className:`ft-stat-num`,children:[e.num,(0,N.jsx)(`span`,{children:e.sup})]}),(0,N.jsx)(`span`,{className:`ft-stat-lbl`,children:e.lbl})]},t))})]}),(0,N.jsxs)(`div`,{className:`ft-links-grid`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`ft-col-head`,children:`Navigate`}),(0,N.jsx)(`ul`,{className:`ft-col-links`,children:ir.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsx)(M,{to:e.to,children:e.label})},e.to))})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`ft-col-head`,children:`Machines`}),(0,N.jsx)(`ul`,{className:`ft-col-links`,children:ar.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsx)(M,{to:e.to,children:e.label})},e.to))})]}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{className:`ft-col-head`,children:`Resources`}),(0,N.jsx)(`ul`,{className:`ft-col-links`,children:or.map(e=>(0,N.jsx)(`li`,{children:(0,N.jsx)(M,{to:e.to,children:e.label})},e.to))})]}),(0,N.jsxs)(`div`,{className:`ft-contact-col`,children:[(0,N.jsx)(`p`,{className:`ft-col-head`,children:`Contact`}),(0,N.jsxs)(`ul`,{className:`ft-contact-list`,children:[(0,N.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,N.jsx)(`span`,{className:`ft-contact-ico`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,N.jsx)(`path`,{d:`M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}),(0,N.jsxs)(`span`,{children:[`SUNTECH AND ALLIED INDUSTRIES,Gate no. 170,Near Huma Bakery,Ganesh Ngr , Talawade, Pimpri Chinchwad area,`,(0,N.jsx)(`br`,{}),` Pune -411062`]})]}),(0,N.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,N.jsx)(`span`,{className:`ft-contact-ico`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,children:(0,N.jsx)(`path`,{d:`M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z`})})}),(0,N.jsx)(`span`,{children:`+91 8975073111`})]}),(0,N.jsxs)(`li`,{className:`ft-contact-item`,children:[(0,N.jsx)(`span`,{className:`ft-contact-ico`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,children:[(0,N.jsx)(`path`,{d:`M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z`}),(0,N.jsx)(`polyline`,{points:`22,6 12,13 2,6`})]})}),(0,N.jsxs)(`span`,{children:[`sales@suntechpac.com`,(0,N.jsx)(`br`,{}),`ceo@suntechpac.com`]})]})]})]})]}),(0,N.jsxs)(`div`,{className:`ft-bottom`,children:[(0,N.jsxs)(`span`,{className:`ft-copy`,children:[`© `,new Date().getFullYear(),` SunTech Packaging Machines. All rights reserved.`]}),(0,N.jsxs)(`div`,{className:`ft-bottom-right`,children:[(0,N.jsxs)(`p`,{className:`ft-designed-by`,children:[`Designed by`,` `,(0,N.jsxs)(`a`,{href:`https://www.gdaisolutions.com/`,target:`_blank`,rel:`noopener noreferrer`,className:`ft-trovira-badge`,children:[(0,N.jsx)(`span`,{className:`ft-trovira-dot`}),`GD AI Solutions`]})]}),(0,N.jsx)(`div`,{className:`ft-legal`,children:(0,N.jsx)(M,{to:`/privacy-policy`,className:`ft-legal-link`,style:{cursor:`pointer`},children:`Privacy Policy`})})]})]})]})})]})]})}function cr(){let{pathname:e}=O();return(0,b.useEffect)(()=>{window.scrollTo({top:0,left:0,behavior:`auto`}),document.documentElement&&(document.documentElement.scrollTop=0),document.body&&(document.body.scrollTop=0)},[e]),null}var lr=[`Initializing systems`,`Loading components`,`Calibrating precision`,`Syncing modules`,`Systems ready`],ur=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@300;400;500;600;700;800;900&family=Barlow:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  /* ══ ROOT ══ */
  .ld {
    position: fixed; inset: 0; z-index: 9999;
    background: #080C14;
    display: flex; align-items: center; justify-content: center;
    font-family: 'Barlow', sans-serif;
    overflow: hidden;
  }

  /* ── Exit: vertical split wipe ── */
  .ld.ld-out {
    animation: ldExit 1s cubic-bezier(0.76,0,0.24,1) forwards;
    pointer-events: none;
  }
  @keyframes ldExit {
    0%   { opacity:1; transform: scaleY(1); }
    100% { opacity:0; transform: scaleY(0); transform-origin: top; }
  }

  /* ══ BG LAYERS ══ */

  /* Steel plate texture via repeating lines */
  .ld-steel {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 3px,
        rgba(255,255,255,0.012) 3px,
        rgba(255,255,255,0.012) 4px
      );
  }

  /* Fine grid */
  .ld-grid {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background-image:
      linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
    background-size: 40px 40px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black 0%, transparent 100%);
  }

  /* Central radial glow — deep orange */
  .ld-glow {
    position: absolute; inset: 0; z-index: 0; pointer-events: none;
    background:
      radial-gradient(ellipse 48% 42% at 50% 50%,
        rgba(245,140,20,0.07) 0%,
        rgba(245,140,20,0.02) 50%,
        transparent 70%),
      radial-gradient(ellipse 70% 60% at 50% 50%,
        rgba(15,40,80,0.40) 0%,
        transparent 100%);
    animation: ldGlow 6s ease-in-out infinite;
  }
  @keyframes ldGlow {
    0%,100% { opacity:0.8; }
    50%     { opacity:1; }
  }

  /* Horizontal accent lines */
  .ld-hline {
    position: absolute; left:0; right:0; height:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.15) 25%,
      rgba(245,140,20,0.22) 50%,
      rgba(245,140,20,0.15) 75%,
      transparent 100%
    );
  }
  .ld-hline-t { top: clamp(60px,10vh,100px); }
  .ld-hline-b { bottom: clamp(60px,10vh,100px); }

  /* Vertical accent lines */
  .ld-vline {
    position: absolute; top:0; bottom:0; width:1px;
    z-index:1; pointer-events:none;
    background: linear-gradient(to bottom,
      transparent 0%,
      rgba(255,255,255,0.04) 25%,
      rgba(255,255,255,0.06) 50%,
      rgba(255,255,255,0.04) 75%,
      transparent 100%
    );
  }
  .ld-vline-l { left: clamp(40px,8vw,80px); }
  .ld-vline-r { right: clamp(40px,8vw,80px); }

  /* Corner brackets — engineering style */
  .ld-bracket {
    position: absolute; z-index:2; pointer-events:none;
    width: clamp(28px,5vw,44px);
    height: clamp(28px,5vw,44px);
  }
  .ld-bracket svg { width:100%; height:100%; }
  .ld-bracket-tl { top:clamp(18px,3vw,30px);  left:clamp(18px,3vw,30px);  }
  .ld-bracket-tr { top:clamp(18px,3vw,30px);  right:clamp(18px,3vw,30px); transform:scaleX(-1); }
  .ld-bracket-bl { bottom:clamp(18px,3vw,30px); left:clamp(18px,3vw,30px);  transform:scaleY(-1); }
  .ld-bracket-br { bottom:clamp(18px,3vw,30px); right:clamp(18px,3vw,30px); transform:scale(-1); }

  /* Scanning line across full screen */
  .ld-scanner {
    position: absolute; left:0; right:0; height:1px;
    z-index:3; pointer-events:none;
    background: linear-gradient(90deg,
      transparent 0%,
      rgba(245,140,20,0.0) 10%,
      rgba(245,140,20,0.30) 50%,
      rgba(245,140,20,0.0) 90%,
      transparent 100%
    );
    animation: ldScanner 4s ease-in-out infinite;
  }
  @keyframes ldScanner {
    0%   { top:10%;  opacity:0; }
    5%   { opacity:1; }
    95%  { opacity:0.6; }
    100% { top:90%;  opacity:0; }
  }

  /* ══ BODY ══ */
  .ld-body {
    position:relative; z-index:10;
    display:flex; flex-direction:column; align-items:center;
    width: min(92vw, 360px);
    animation: ldBodyIn 0.7s cubic-bezier(0.22,1,0.36,1) 0.05s both;
  }
  @keyframes ldBodyIn {
    from { opacity:0; transform:translateY(24px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ LOGO UNIT ══ */
  .ld-unit {
    position:relative;
    width: clamp(140px,38vw,172px);
    height: clamp(140px,38vw,172px);
    margin-bottom: clamp(28px,5vw,38px);
    display:flex; align-items:center; justify-content:center;
  }

  /* Outer dashed engineering ring */
  .ld-ro {
    position:absolute; inset:0; border-radius:50%;
    border: 1px dashed rgba(255,255,255,0.10);
    animation: ldSpin 22s linear infinite;
  }
  /* 4 tick marks */
  .ld-ro::before,.ld-ro::after {
    content:'';
    position:absolute;
    background: rgba(245,140,20,0.55);
    border-radius:1px;
  }
  .ld-ro::before { top:50%; left:-4px; width:8px; height:1.5px; }
  .ld-ro::after  { top:-4px; left:50%; width:1.5px; height:8px; transform:translateX(-50%); }

  /* Mid orange ring */
  .ld-rm {
    position:absolute; inset:14px; border-radius:50%;
    border: 1px solid rgba(245,140,20,0.20);
    animation: ldSpin 14s linear infinite reverse;
  }
  .ld-rm::before,.ld-rm::after {
    content:'';
    position:absolute;
    width:5px; height:5px; border-radius:50%;
    background:#F58C14; opacity:0.9;
    box-shadow: 0 0 8px #F58C14;
    top:50%; left:-2.5px;
  }
  .ld-rm::after { top:-2.5px; left:50%; transform:translateX(-50%); }

  @keyframes ldSpin { to { transform:rotate(360deg); } }

  /* Inner logo box — dark steel */
  .ld-box {
    position:absolute; inset:26px; border-radius:50%;
    background: linear-gradient(145deg, #111827 0%, #0D1420 100%);
    border: 1px solid rgba(255,255,255,0.10);
    display:flex; align-items:center; justify-content:center;
    overflow:hidden;
    box-shadow:
      0 0 0 1px rgba(245,140,20,0.08),
      0 12px 40px rgba(0,0,0,0.70),
      inset 0 1px 0 rgba(255,255,255,0.07),
      inset 0 -1px 0 rgba(0,0,0,0.40);
  }
  .ld-box::before {
    content:'';
    position:absolute; inset:0; border-radius:50%;
    background: radial-gradient(circle at 50% 25%, rgba(255,255,255,0.06) 0%, transparent 55%);
    pointer-events:none;
  }

  .ld-logo {
    width:70%; height:70%;
    object-fit:contain;
    position:relative; z-index:1;
    opacity:0;
    animation: ldLogoIn 0.8s cubic-bezier(0.34,1.4,0.64,1) 0.55s forwards;
    filter: brightness(1.05) drop-shadow(0 2px 10px rgba(0,0,0,0.40));
  }
  @keyframes ldLogoIn {
    from { opacity:0; transform:scale(0.70); }
    to   { opacity:1; transform:scale(1); }
  }

  /* Scan line inside logo box */
  .ld-scan {
    position:absolute; inset:26px; border-radius:50%;
    overflow:hidden; pointer-events:none; z-index:5;
  }
  .ld-scan::after {
    content:'';
    position:absolute; left:0; right:0; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.55),transparent);
    opacity:0;
    animation: ldScanBox 2.4s ease 0.9s infinite;
  }
  @keyframes ldScanBox {
    0%  { top:0%;   opacity:0; }
    8%  { opacity:0.9; }
    92% { opacity:0.5; }
    100%{ top:100%; opacity:0; }
  }

  /* Live status dot */
  .ld-dot {
    position:absolute; bottom:24px; right:24px;
    width:10px; height:10px; border-radius:50%;
    background:#22C55E;
    box-shadow: 0 0 0 2px #0D1420, 0 0 12px rgba(34,197,94,0.50);
    z-index:6;
    animation: ldDotPulse 2s ease-in-out infinite;
  }
  @keyframes ldDotPulse {
    0%,100%{ box-shadow: 0 0 0 2px #0D1420, 0 0 8px rgba(34,197,94,0.40); }
    50%    { box-shadow: 0 0 0 2px #0D1420, 0 0 22px rgba(34,197,94,0.65), 0 0 40px rgba(34,197,94,0.20); }
  }

  /* ══ WORDMARK ══ */
  .ld-name {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(28px,8vw,38px);
    font-weight:900; letter-spacing:0.22em;
    text-transform:uppercase;
    color:#F0EDE8;
    line-height:1;
    margin-bottom:8px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.1s forwards;
    display:flex; align-items:center; gap:2px;
  }
  .ld-name-plain { color:#F0EDE8; }
  .ld-name-accent { color:#F58C14; }

  /* ── Divider ── */
  .ld-div {
    width:48px; height:2px;
    background:linear-gradient(90deg,transparent,rgba(245,140,20,0.60),transparent);
    margin: 0 auto 10px;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.25s forwards;
  }

  /* Tagline */
  .ld-tag {
    font-family:'Barlow Condensed',sans-serif;
    font-size: clamp(9px,2.2vw,10.5px);
    font-weight:600; letter-spacing:0.32em;
    text-transform:uppercase;
    color:rgba(240,237,232,0.28);
    margin-bottom:34px;
    opacity:0;
    animation: ldFadeUp 0.55s ease 1.4s forwards;
  }

  @keyframes ldFadeUp {
    from { opacity:0; transform:translateY(9px); }
    to   { opacity:1; transform:translateY(0); }
  }

  /* ══ PROGRESS ══ */
  .ld-prog {
    width:100%;
    opacity:0;
    animation: ldFadeUp 0.5s ease 1.6s forwards;
  }

  /* Segment indicators */
  .ld-segs {
    display:flex; gap:3px; margin-bottom:10px;
  }
  .ld-seg {
    flex:1; height:2px; border-radius:1px;
    background:rgba(255,255,255,0.06);
    transition:background 0.3s ease, box-shadow 0.3s ease;
  }
  .ld-seg.on {
    background:#F58C14;
    box-shadow:0 0 6px rgba(245,140,20,0.45);
  }

  /* Track */
  .ld-track {
    position:relative; height:2px;
    background:rgba(255,255,255,0.06);
    border-radius:2px; overflow:visible;
    margin-bottom:13px;
  }
  /* tick marks */
  .ld-track::before {
    content:'';
    position:absolute; inset:0;
    background-image:repeating-linear-gradient(
      90deg,
      transparent 0px, transparent 19px,
      rgba(255,255,255,0.05) 19px, rgba(255,255,255,0.05) 20px
    );
  }
  .ld-fill {
    position:absolute; top:0; left:0; height:100%;
    background:linear-gradient(90deg,rgba(245,140,20,0.6),#F58C14);
    border-radius:2px;
    transition:width 0.055s linear;
    box-shadow:0 0 10px rgba(245,140,20,0.45);
  }
  .ld-cursor {
    position:absolute; top:50%;
    transform:translate(-50%,-50%);
    width:8px; height:8px; border-radius:50%;
    background:#F5A623;
    box-shadow:0 0 0 2px rgba(245,140,20,0.18), 0 0 14px rgba(245,140,20,0.55);
    transition:left 0.055s linear;
    z-index:2;
  }

  /* Footer */
  .ld-foot {
    display:flex; justify-content:space-between;
    align-items:center; gap:8px;
  }
  .ld-msg {
    font-family:'Barlow Condensed',sans-serif;
    font-size:clamp(8.5px,2vw,10px); font-weight:600;
    letter-spacing:0.24em; text-transform:uppercase;
    color:rgba(240,237,232,0.20);
    flex:1; min-width:0; overflow:hidden;
    text-overflow:ellipsis; white-space:nowrap;
  }
  .ld-pct {
    font-family:'Barlow Condensed',sans-serif;
    font-weight:700; font-size:clamp(13px,3.5vw,16px);
    letter-spacing:0.08em;
    color:rgba(245,140,20,0.75);
    flex-shrink:0;
  }

  /* ══ ARC PROGRESS SVG ══ */
  .ld-arc {
    position:absolute; inset:14px;
    border-radius:50%; pointer-events:none;
  }
`;function dr({pct:e}){let t=2*Math.PI*80,n=t*(1-e/100);return(0,N.jsxs)(`svg`,{className:`ld-arc`,viewBox:`0 0 200 200`,children:[(0,N.jsx)(`circle`,{cx:100,cy:100,r:80,fill:`none`,stroke:`rgba(245,140,20,0.08)`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:100,cy:100,r:80,fill:`none`,stroke:`#F58C14`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeDasharray:t,strokeDashoffset:n,transform:`rotate(-90 100 100)`,style:{transition:`stroke-dashoffset 0.055s linear`,opacity:.6}}),(0,N.jsx)(`circle`,{cx:100,cy:100,r:71,fill:`none`,stroke:`rgba(255,255,255,0.04)`,strokeWidth:`0.8`})]})}var fr=()=>(0,N.jsxs)(`svg`,{viewBox:`0 0 44 44`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M4 26 L4 4 L26 4`,stroke:`rgba(245,140,20,0.28)`,strokeWidth:`1.2`,strokeLinecap:`round`}),(0,N.jsx)(`circle`,{cx:`4`,cy:`4`,r:`2`,fill:`rgba(245,140,20,0.40)`}),(0,N.jsx)(`line`,{x1:`4`,y1:`14`,x2:`8`,y2:`14`,stroke:`rgba(245,140,20,0.18)`,strokeWidth:`0.8`}),(0,N.jsx)(`line`,{x1:`14`,y1:`4`,x2:`14`,y2:`8`,stroke:`rgba(245,140,20,0.18)`,strokeWidth:`0.8`})]});function pr({onFinish:e}){let[t,n]=(0,b.useState)(0),[r,i]=(0,b.useState)(0),[a,o]=(0,b.useState)(!1),s=(0,b.useRef)(null);return(0,b.useEffect)(()=>{let t=performance.now(),r=a=>{let c=a-t,l=Math.min(c/3200,1),u=1-(1-l)**3;n(Math.round(u*100)),i(Math.min(lr.length-1,Math.floor(u*lr.length))),l<1?s.current=requestAnimationFrame(r):setTimeout(()=>{o(!0),setTimeout(()=>e?.(),1e3)},600)};return s.current=requestAnimationFrame(r),()=>cancelAnimationFrame(s.current)},[e]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:ur}),(0,N.jsxs)(`div`,{className:`ld${a?` ld-out`:``}`,children:[(0,N.jsx)(`div`,{className:`ld-steel`}),(0,N.jsx)(`div`,{className:`ld-grid`}),(0,N.jsx)(`div`,{className:`ld-glow`}),(0,N.jsx)(`div`,{className:`ld-hline ld-hline-t`}),(0,N.jsx)(`div`,{className:`ld-hline ld-hline-b`}),(0,N.jsx)(`div`,{className:`ld-vline ld-vline-l`}),(0,N.jsx)(`div`,{className:`ld-vline ld-vline-r`}),(0,N.jsx)(`div`,{className:`ld-bracket ld-bracket-tl`,children:(0,N.jsx)(fr,{})}),(0,N.jsx)(`div`,{className:`ld-bracket ld-bracket-tr`,children:(0,N.jsx)(fr,{})}),(0,N.jsx)(`div`,{className:`ld-bracket ld-bracket-bl`,children:(0,N.jsx)(fr,{})}),(0,N.jsx)(`div`,{className:`ld-bracket ld-bracket-br`,children:(0,N.jsx)(fr,{})}),(0,N.jsx)(`div`,{className:`ld-scanner`}),(0,N.jsxs)(`div`,{className:`ld-body`,children:[(0,N.jsxs)(`div`,{className:`ld-unit`,children:[(0,N.jsx)(`div`,{className:`ld-ro`}),(0,N.jsx)(`div`,{className:`ld-rm`}),(0,N.jsx)(dr,{pct:t}),(0,N.jsx)(`div`,{className:`ld-box`,children:(0,N.jsx)(`img`,{className:`ld-logo`,src:`/logo.png`,alt:`SunTech`,draggable:!1})}),(0,N.jsx)(`div`,{className:`ld-scan`}),(0,N.jsx)(`div`,{className:`ld-dot`})]}),(0,N.jsxs)(`p`,{className:`ld-name`,children:[(0,N.jsx)(`span`,{className:`ld-name-plain`,children:`Sun`}),(0,N.jsx)(`span`,{className:`ld-name-accent`,children:`Tech`})]}),(0,N.jsx)(`div`,{className:`ld-div`}),(0,N.jsx)(`p`,{className:`ld-tag`,children:`Precision Packaging Systems`}),(0,N.jsxs)(`div`,{className:`ld-prog`,children:[(0,N.jsx)(`div`,{className:`ld-segs`,children:[0,20,40,60,80].map((e,n)=>(0,N.jsx)(`div`,{className:`ld-seg${t>=e?` on`:``}`},n))}),(0,N.jsxs)(`div`,{className:`ld-track`,children:[(0,N.jsx)(`div`,{className:`ld-fill`,style:{width:`${t}%`}}),(0,N.jsx)(`div`,{className:`ld-cursor`,style:{left:`${t}%`}})]}),(0,N.jsxs)(`div`,{className:`ld-foot`,children:[(0,N.jsx)(`span`,{className:`ld-msg`,children:lr[r]}),(0,N.jsxs)(`span`,{className:`ld-pct`,children:[String(t).padStart(3,`0`),`%`]})]})]})]})]})]})}var mr=[{keyword:`namkeen`,tag:`Namkeen`},{keyword:`snacks`,tag:`Snacks`},{keyword:`spices`,tag:`Spices`},{keyword:`powder`,tag:`Powder`},{keyword:`grain`,tag:`Grains`},{keyword:`seeds`,tag:`Grains`},{keyword:`rice`,tag:`Grains`},{keyword:`masala`,tag:`Spices`},{keyword:`flour`,tag:`Powder`},{keyword:`chips`,tag:`Snacks`},{keyword:`nut`,tag:`Snacks`}],hr=(e=``)=>{let t=String(e).toLowerCase(),n=new Set;return mr.forEach(({keyword:e,tag:r})=>{t.includes(e)&&n.add(r)}),Array.from(n)},gr=e=>{let t=e?.specs?.[`Machine Type`]?.toLowerCase()||``;return/weigh|fill|vffs|pouch|auger/.test(t)?`Filling & Packaging`:/seal|vacuum|shrink|band/.test(t)?`Sealing`:/label|print|coder|inkjet|tablet/.test(t)?`Labelling & Coding`:/processor|slicer|cleaner|grinder|destoner|slicing/.test(t)?`Processing`:`Industrial Equipment`},_r=[{name:`Collar Type VFFS Machine`,image:`/Machines/Collar Type VFFS Machine.png`,shortDesc:`Vertical Form-Fill-Seal with collar former for free-flow powders, granules & seeds.`,specs:{"Machine Type":`Collar Type Vertical Form Fill Seal (VFFS)`,Material:`SS 304 contact parts, MS frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`2.5 HP`,"Pouch Size":`50 g â€“ 5 kg`,Speed:`20â€“40 pouches/min`,"Sealing Type":`Horizontal + Vertical fin seal (heat seal)`,"Filling System":`Auger / Cup / Weigh filler (optional)`,Application:`Spices, flour, grains, seeds, coffee, tea`,Warranty:`1 Year`}},{name:`Food Processing Machine`,image:`/Machines/Weight Filter With Conveying System.png`,shortDesc:`Multi-function food processing unit for cutting, mixing and pre-processing applications.`,specs:{"Machine Type":`Multi-function Food Processor`,Material:`Stainless Steel SS 304 (all food-contact parts)`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220Vâ€“440V / 50 Hz`,"Motor Power":`1â€“5 HP (model dependent)`,Capacity:`100â€“500 kg/hr`,Functions:`Slicing, dicing, grinding, mixing`,Application:`Vegetables, fruits, snacks, bakery, namkeen, food factories`,Compliance:`Food-grade, ISO-compliant`,Frame:`Heavy-duty SS tubular frame`,Warranty:`1 Year`}},{name:`Labelling Machine`,image:`/Machines/Labelling Machine.png`,shortDesc:`High-speed self-adhesive labeller for accurate front/back and wraparound label placement.`,specs:{"Machine Type":`Self-Adhesive Pressure Sensitive Labelling Machine`,Material:`SS 304 & powder-coated MS`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`0.5 HP (AC servo)`,"Labelling Speed":`40â€“120 bottles/min`,"Label Size":`W: 10â€“150 mm, L: 20â€“350 mm`,"Container Diameter":`20â€“120 mm`,Accuracy:`Â± 0.5 mm`,Application:`Bottles, jars, spices, masala, food, cosmetics â€” pharma, namkeen pouches`,Warranty:`1 Year`}},{name:`Liquid Filling Machine`,image:`/Machines/Liquid Filling Machine .png`,shortDesc:`High-precision volumetric piston filling for liquids, edible oils, syrups and chemicals.`,specs:{"Machine Type":`Volumetric Piston Liquid Filling Machine`,Material:`SS 316 contact parts, SS 304 frame`,"Automation Grade":`Semi-Automatic / Automatic`,"Power Source":`Electric + Pneumatic`,Voltage:`220V / 50 Hz, Single Phase`,"Air Pressure":`0.4â€“0.6 MPa`,"Filling Range":`50 ml â€“ 5,000 ml`,"Filling Accuracy":`Â± 0.5%`,"No. of Filling Heads":`1 â€“ 6 (configurable)`,Speed:`20â€“60 fills/min`,Application:`Edible oil, water, syrup, shampoo, disinfectant, pharma liquids`,Warranty:`1 Year`}},{name:`Nitrogen Flushing Machine`,image:`/Machines/DZ-600-External-Vaccum-SS.png`,shortDesc:`MAP sealing unit with nitrogen/gas flushing to extend shelf life and maintain freshness.`,specs:{"Machine Type":`Nitrogen Flushing & Sealing Machine`,Material:`SS 304`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric + Gas supply (Nâ‚‚ / COâ‚‚)`,Voltage:`220V / 50 Hz, Single Phase`,"Sealing Width":`Up to 12 mm`,"Gas Pressure":`0.1â€“0.3 MPa`,"Gas Residual Oâ‚‚":`< 1% (after flush)`,Speed:`10â€“25 packs/min`,Application:`Chips, nuts, snacks, biscuits, namkeen, cheese, coffee, pharma â€” MAP packaging`,"Bag Type":`Flat/pillow/gusset pouches`,Warranty:`1 Year`}},{name:`Packaging Machine`,image:`/Machines/Multi-Head VFFS Packaging Machine.png`,shortDesc:`Multi-purpose automatic packaging machine for powders, granules and free-flow materials.`,specs:{"Machine Type":`Automatic Packaging Machine (Auger Filler + VFFS)`,Material:`SS 304 food-grade contact parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`3 HP`,"Pouch Weight Range":`50 g â€“ 2 kg`,Speed:`25â€“50 pouches/min`,"Sealing Type":`Heat seal, back/fin seal`,Application:`Atta flour, masala spices, salt, sugar, coffee, rice grains, namkeen`,"HMI Control":`PLC + Touchscreen`,Warranty:`1 Year`}},{name:`Packing Machine`,image:`/Machines/Smart PAC Bagger.png`,shortDesc:`Compact semi-auto packing solution suited for small to mid-scale production facilities.`,specs:{"Machine Type":`Semi-Automatic Granule / Powder Packing Machine`,Material:`MS powder-coated body, SS 304 contact parts`,"Automation Grade":`Semi-Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1.5 HP`,"Pack Weight":`100 g â€“ 5 kg`,Speed:`8â€“20 pouches/min`,Sealing:`Impulse heat sealing`,Application:`Spices, pulses, seeds grain, detergent, namkeen, chemical powders`,Frame:`Mild steel, heavy-duty`,Warranty:`1 Year`}},{name:`Pouch Packaging Machine`,image:`/Machines/Pick Fill seal Machine.png`,shortDesc:`Pre-made pouch fill-seal machine for snacks, namkeen, seeds and small granules.`,specs:{"Machine Type":`Pre-made Pouch Fill & Seal Machine`,Material:`SS 304 & anodised aluminium`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric + Pneumatic`,Voltage:`220V / 50 Hz, Single Phase`,"Air Pressure":`0.5â€“0.7 MPa`,"Pouch Size":`60Ã—80 mm â€“ 250Ã—350 mm`,Speed:`15â€“40 pouches/min`,"Weighing System":`Multi-head combination weigher (optional)`,Application:`Namkeen, chips, popcorn, snacks, seeds grain, candy, frozen foods`,"Pouch Types":`Pillow, gusset, stand-up zipper`,Warranty:`1 Year`}},{name:`Powder Packaging Machine`,image:`/Machines/VFFS Auger Filter Machine.png`,shortDesc:`Dedicated auger-fill system for fine, free-flowing and non-free-flowing powders.`,specs:{"Machine Type":`Auger Filler Powder Packaging Machine`,Material:`SS 316 auger & hopper, SS 304 frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`2.5 HP`,"Filling Range":`10 g â€“ 3 kg`,"Filling Accuracy":`Â± 1â€“2%`,Speed:`20â€“60 pouches/min`,Application:`Masala spices, chilli powder, turmeric, flour powder, protein powder, cement additives`,"Sealing Type":`Back / fin seal (heat seal)`,Warranty:`1 Year`}},{name:`Rice Destoner Cleaning Machine`,image:`/Machines/Weight Filter With Conveying System.png`,shortDesc:`Gravity separator that effectively removes stones, pebbles and heavy impurities from grain.`,specs:{"Machine Type":`Gravity Rice Destoner / Grain Cleaner`,Material:`Mild Steel with SS mesh screens`,"Automation Grade":`Automatic`,"Power Source":`Electric`,Voltage:`220Vâ€“440V / 50 Hz`,"Motor Power":`0.75â€“1.5 HP`,Capacity:`500 kg â€“ 3,000 kg/hr`,"Cleaning Efficiency":`> 98% stone removal`,"Screen Size":`Adjustable mesh sizes`,Application:`Rice grain, wheat grain, maize, dal, sesame seeds, sunflower seeds`,Frame:`Heavy-duty welded MS`,Warranty:`1 Year`}},{name:`Sealing Machine`,image:`/Machines/Pick Fill seal Machine.png`,shortDesc:`Continuous band sealer for fast, consistent and airtight closure of all pouch types.`,specs:{"Machine Type":`Continuous Band Sealing Machine`,Material:`MS body, SS 304 seal area`,"Automation Grade":`Automatic (continuous)`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`180 W`,"Sealing Width":`6 mm / 10 mm`,"Sealing Speed":`0â€“12 m/min (variable)`,"Temperature Range":`0â€“300Â°C (digital control)`,"Bag Type":`All laminated films, PE, PP, foil, BOPP`,Application:`Namkeen, spices, food, pharma, chemical, FMCG pouches, snacks`,Warranty:`1 Year`}},{name:`Seeds Packaging Machine`,image:`/Machines/Collar Type VFFS Machine.png`,shortDesc:`Precision weigher-filler engineered for vegetable seeds, spice seeds and agricultural inputs.`,specs:{"Machine Type":`Automatic Seeds Weighing & Packaging Machine`,Material:`SS 304 hopper & contact parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`1.5 HP`,"Pack Weight":`5 g â€“ 500 g`,"Weighing Accuracy":`Â± 0.5 g`,Speed:`25â€“50 packs/min`,Application:`Vegetable seeds, spice seeds grain, agricultural seed sachets`,Sealing:`Heat seal (fin / back seal)`,Warranty:`1 Year`}},{name:`Shrink Tunnel Packaging Machine`,image:`/Machines/Multi-Head VFFS Packaging Machine.png`,shortDesc:`Conveyor-fed heat-shrink tunnel providing tamper-evident, tightly-wrapped bundle packaging.`,specs:{"Machine Type":`Hot Air Shrink Tunnel`,Material:`SS 304 inner chamber, MS outer body`,"Automation Grade":`Automatic (inline conveyor)`,"Power Source":`Electric`,Voltage:`380V / 50 Hz, Three Phase`,"Motor Power":`1.5 HP`,"Tunnel Dimensions":`W: 400â€“600 mm, H: 150â€“250 mm`,"Temperature Range":`90Â°C â€“ 200Â°C`,"Belt Speed":`0â€“10 m/min (variable)`,"Film Type":`PVC, POF, PE shrink film`,Application:`Bottles, cans, multipacks, snacks, biscuits, electronics`,Warranty:`1 Year`}},{name:`Strapping Machine`,image:`/Machines/Multi-Head VFFS Packaging Machine.png`,shortDesc:`Automatic PET/PP strapping machine for secure carton and bundle unitising at high throughput.`,specs:{"Machine Type":`Automatic Table-top / Arch Strapping Machine`,Material:`MS powder-coated frame, SS wear parts`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`750 W`,"Strap Width":`9 mm / 12 mm / 15 mm`,"Strap Material":`PP / PET`,"Strapping Speed":`1.5â€“2.5 sec/strap`,"Table Height":`750 mm (standard)`,Application:`Cartons, newspapers, corrugated boxes, bundled products, namkeen cartons, snacks boxes`,Warranty:`1 Year`}},{name:`Vacuum Packaging Machine`,image:`/Machines/DZ-600-External-Vaccum-SS.png`,shortDesc:`Chamber-type vacuum sealer for extended shelf life across food and pharmaceutical products.`,specs:{"Machine Type":`Double-Chamber Vacuum Packaging Machine`,Material:`SS 304 full body`,"Automation Grade":`Automatic (cycle-based)`,"Power Source":`Electric`,Voltage:`220Vâ€“380V / 50 Hz`,"Vacuum Pump Power":`0.37â€“0.75 kW`,"Vacuum Degree":`â€“0.098 MPa`,"Chamber Size":`400Ã—500 mm (standard)`,"Sealing Bar":`2 Ã— 400 mm`,"Cycle Time":`20â€“40 sec`,Application:`Meat, cheese, seafood, pickles, nuts snacks, namkeen, pharma items`,Warranty:`1 Year`}},{name:`Wrapping Machine`,image:`/Machines/VFFS 1014 Head Machine.png`,shortDesc:`Horizontal flow-wrap machine for biscuits, soaps, bars and flat rectangular products.`,specs:{"Machine Type":`Horizontal Flow Wrapping Machine (HFFS)`,Material:`SS 304 contact parts, painted MS frame`,"Automation Grade":`Fully Automatic`,"Power Source":`Electric`,Voltage:`220V / 50 Hz, Single Phase`,"Motor Power":`2 HP (servo-driven)`,"Wrap Speed":`60â€“200 packs/min`,"Pack Size":`L: 60â€“380 mm, W: 30â€“180 mm, H: 10â€“80 mm`,"Film Type":`BOPP, CPP, PVC, laminated film`,"Sealing Type":`Fin seal + end seal (heat)`,Application:`Biscuits snacks, bread, soap bars, energy bars, namkeen, sanitary pads`,Warranty:`1 Year`}}].map(e=>({...e,description:e.shortDesc||``,category:gr(e),application:hr(e.specs?.Application)})),vr=[`Namkeen`,`Spices`,`Powder`,`Grains`,`Snacks`],yr={Namkeen:{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z`}),(0,N.jsx)(`path`,{d:`M8 12s1.5 2 4 2 4-2 4-2`}),(0,N.jsx)(`path`,{d:`M9 9h.01M15 9h.01`})]}),label:`Namkeen`,desc:`Savoury snack production lines`,count_label:`Namkeen Machines`},Spices:{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`})]}),label:`Spices`,desc:`Masala & spice blending units`,count_label:`Spice Machines`},Powder:{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z`}),(0,N.jsx)(`polyline`,{points:`9 22 9 12 15 12 15 22`})]}),label:`Powder`,desc:`Fine powder filling & sealing`,count_label:`Powder Machines`},Grains:{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`ellipse`,{cx:`12`,cy:`12`,rx:`4`,ry:`7`}),(0,N.jsx)(`path`,{d:`M12 5C8 3 4 5 4 9M12 19c-4 2-8 0-8-4M12 5c4-2 8 0 8 4M12 19c4 2 8 0 8-4`})]}),label:`Grains`,desc:`Grain & seed handling`,count_label:`Grain Machines`},Snacks:{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,N.jsx)(`path`,{d:`M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2`}),(0,N.jsx)(`line`,{x1:`12`,y1:`12`,x2:`12`,y2:`16`}),(0,N.jsx)(`line`,{x1:`10`,y1:`14`,x2:`14`,y2:`14`})]}),label:`Snacks`,desc:`Snack food processing`,count_label:`Snack Machines`}};function br(){let[e]=In(),t=dt(),n=e.get(`type`)||`Namkeen`,[r,i]=(0,b.useState)(n),a=(0,b.useRef)(n);(0,b.useEffect)(()=>{n===a.current||(a.current=n),i(n)},[n]);let o=e=>{i(e),t(`/applications?type=${encodeURIComponent(e)}`,{replace:!0})},s=_r.filter(e=>Array.isArray(e.application)&&e.application.includes(r)),c=yr[r]||{};return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        :root {
          --orange:       #c2410c;
          --orange-dark:  #9a3412;
          --orange-soft:  #f5813a;
          --orange-tint:  #fdf0e4;
          --orange-tint2: #fbe4cf;
          --cream:        #fffaf3;
          --white:        #ffffff;
          --text:         #3d2b1f;
          --text-muted:   #8a7563;
          --border:       #ecd9c4;
        }

        * , *::before, *::after { box-sizing: border-box; }

        .app-page {
          font-family: 'Montserrat', sans-serif;
          background: var(--cream);
        }

        /* ── TICKER ── */
        .app-topband {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 10px 0;
          overflow: hidden;
        }

        .app-ticker {
          display: flex;
          gap: 40px;
          animation: appTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes appTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .app-ticker-item {
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--text-muted);
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .app-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--orange);
          flex-shrink: 0;
        }

        /* ── HERO (mobile-first) ── */
        .app-hero {
          position: relative;
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 36px 18px 0;
          overflow: hidden;
        }

        .app-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.04) 1px, transparent 1px);
          background-size: 26px 26px;
          pointer-events: none;
        }

        .app-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
        }

        .app-hero-top {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .app-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--orange);
        }

        .app-eyebrow::before {
          content: '';
          display: block;
          width: 22px; height: 2px;
          background: var(--orange);
        }

        .app-hero-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(26px, 8vw, 52px);
          font-weight: 600;
          color: var(--orange-dark);
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .app-hero-title span { color: var(--orange); }

        .app-hero-sub {
          font-size: 13px;
          color: var(--text-muted);
          margin: 4px 0 0;
          max-width: 520px;
          line-height: 1.75;
          font-weight: 400;
        }

        /* ── FILTER TABS (mobile-first: horizontal scroll) ── */
        .app-filter-band {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 0;
          border-top: 1px solid var(--border);
          margin-top: 24px;
          overflow-x: auto;
          scrollbar-width: none;
        }

        .app-filter-band::-webkit-scrollbar { display: none; }

        .app-filter-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 14px 16px;
          font-family: 'Oswald', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
          text-transform: uppercase;
          cursor: pointer;
          border: none;
          border-bottom: 3px solid transparent;
          background: transparent;
          color: var(--text-muted);
          white-space: nowrap;
          transition: color 0.2s, border-color 0.2s, background 0.2s;
          flex-shrink: 0;
        }

        .app-filter-btn svg { opacity: 0.6; transition: opacity 0.2s; }

        .app-filter-btn:hover {
          color: var(--orange-dark);
          background: var(--orange-tint);
        }

        .app-filter-btn:hover svg { opacity: 0.9; }

        .app-filter-btn.active {
          color: var(--orange-dark);
          border-bottom-color: var(--orange);
          background: var(--orange-tint);
        }

        .app-filter-btn.active svg { opacity: 1; color: var(--orange); }

        @media (min-width: 640px) {
          .app-hero { padding: 56px 24px 0; }
          .app-filter-btn { padding: 16px 24px; font-size: 13px; letter-spacing: 1.5px; }
        }

        @media (min-width: 900px) {
          .app-hero { padding: 72px 28px 0; }
        }

        /* ── CONTENT AREA (mobile-first) ── */
        .app-content {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 18px 64px;
        }

        @media (min-width: 640px) {
          .app-content { padding: 0 24px 80px; }
        }
        @media (min-width: 900px) {
          .app-content { padding: 0 28px 96px; }
        }

        /* ── META BAR ── */
        .app-meta-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 18px 0 20px;
          border-bottom: 1px solid var(--border);
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .app-meta-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--orange-dark);
          background: var(--orange-tint);
          border: 1px solid var(--border);
          padding: 6px 12px;
        }

        .app-meta-pill svg { color: var(--orange); }

        .app-meta-sep {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--border);
          flex-shrink: 0;
        }

        .app-meta-count {
          font-family: 'Oswald', sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: var(--text-muted);
          text-transform: uppercase;
        }

        .app-meta-count strong {
          color: var(--orange-dark);
        }

        .app-meta-desc {
          font-size: 12.5px;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .app-meta-bar { padding: 24px 0 28px; margin-bottom: 36px; gap: 16px; }
        }

        /* ── GRID (mobile-first: single column) ── */
        .app-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          border: 1px solid var(--border);
          overflow: hidden;
        }

        @media (min-width: 600px) { .app-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 1000px) { .app-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CARD ── */
        .app-card {
          position: relative;
          background: var(--white);
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s;
          animation: appCardIn 0.45s cubic-bezier(0.22,1,0.36,1) both;
          overflow: hidden;
        }

        .app-card { border-right: none; }
        @media (min-width: 600px) {
          .app-card:nth-child(2n) { border-right: none; }
          .app-card:nth-child(odd) { border-right: 1px solid var(--border); }
        }
        @media (min-width: 1000px) {
          .app-card { border-right: 1px solid var(--border); }
          .app-card:nth-child(3n) { border-right: none; }
        }

        @keyframes appCardIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .app-card:hover {
          background: var(--orange-tint);
          z-index: 2;
          box-shadow: 0 0 0 1px var(--orange) inset, 0 10px 30px rgba(194,65,12,0.08);
        }

        .app-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: var(--orange);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
          z-index: 3;
        }

        .app-card:hover::before { transform: scaleX(1); }

        /* ── CARD IMAGE ── */
        .app-card-img {
          height: 170px;
          background: var(--orange-tint);
          position: relative;
          padding: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid var(--border);
          overflow: hidden;
          transition: background 0.2s;
        }

        .app-card-img::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.05) 1px, transparent 1px);
          background-size: 18px 18px;
          pointer-events: none;
        }

        .app-card:hover .app-card-img {
          background: var(--orange-tint2);
        }

        .app-card-img img {
          max-height: 100%; max-width: 100%;
          object-fit: contain;
          position: relative;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.22,1,0.36,1);
          filter: drop-shadow(0 6px 16px rgba(154,52,18,0.12));
        }

        .app-card:hover .app-card-img img {
          transform: translateY(-4px) scale(1.05);
        }

        .app-card-cat {
          position: absolute;
          top: 10px; right: 10px;
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 8px;
          background: var(--white);
          color: var(--text-muted);
          border: 1px solid var(--border);
          z-index: 2;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }

        .app-card:hover .app-card-cat {
          background: var(--orange);
          color: var(--white);
          border-color: var(--orange);
        }

        @media (min-width: 640px) {
          .app-card-img { height: 200px; padding: 24px; }
        }

        /* ── CARD BODY ── */
        .app-card-body {
          padding: 16px 18px 18px;
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        @media (min-width: 640px) {
          .app-card-body { padding: 20px 22px 22px; gap: 10px; }
        }

        .app-card-name {
          font-family: 'Oswald', sans-serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--orange-dark);
          margin: 0;
          line-height: 1.2;
          letter-spacing: 0.2px;
          text-transform: uppercase;
        }

        .app-card-tags {
          display: flex;
          gap: 5px;
          flex-wrap: wrap;
        }

        .app-tag {
          font-family: 'Oswald', sans-serif;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 3px 8px;
          background: var(--orange-tint);
          color: var(--orange-dark);
          border: 1px solid var(--border);
        }

        .app-card-desc {
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.65;
          margin: 0;
          flex: 1;
          font-weight: 400;
        }

        .app-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--orange-tint2);
          margin-top: auto;
        }

        .app-card-link {
          font-family: 'Oswald', sans-serif;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--orange);
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: gap 0.2s;
        }

        .app-card:hover .app-card-link { gap: 9px; }

        .app-card-arrow {
          width: 26px; height: 26px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--orange-tint);
          border: 1px solid var(--border);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          flex-shrink: 0;
        }

        .app-card:hover .app-card-arrow {
          background: var(--orange);
          border-color: var(--orange);
          transform: translateX(2px);
        }

        .app-card:hover .app-card-arrow svg { stroke: var(--white); }

        /* ── EMPTY STATE ── */
        .app-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 56px 20px;
          color: var(--text-muted);
        }

        .app-empty-icon {
          width: 56px; height: 56px;
          margin: 0 auto 16px;
          background: var(--orange-tint);
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .app-empty-title {
          font-family: 'Oswald', sans-serif;
          font-size: 19px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
          color: var(--orange-dark);
        }

        .app-empty-sub {
          font-size: 12.5px;
          font-weight: 400;
          color: var(--text-muted);
        }

        @media (min-width: 640px) {
          .app-empty { padding: 80px 24px; }
          .app-empty-icon { width: 64px; height: 64px; margin-bottom: 20px; }
          .app-empty-title { font-size: 22px; }
        }
      `}),(0,N.jsxs)(`main`,{className:`app-page`,children:[(0,N.jsx)(`div`,{className:`app-topband`,children:(0,N.jsx)(`div`,{className:`app-ticker`,children:[...[,,]].map((e,t)=>[`Food Industry`,`Pharma Packaging`,`Agro Products`,`FMCG Lines`,`Custom Solutions`,`ISO 9001 Certified`,`50+ Installations`,`12+ Cities`].map((e,n)=>(0,N.jsxs)(`span`,{className:`app-ticker-item`,children:[(0,N.jsx)(`span`,{className:`app-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,N.jsx)(`section`,{className:`app-hero`,children:(0,N.jsxs)(`div`,{className:`app-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`app-hero-top`,children:[(0,N.jsx)(`span`,{className:`app-eyebrow`,children:`Industry Applications`}),(0,N.jsxs)(`h1`,{className:`app-hero-title`,children:[`Machines for `,(0,N.jsx)(`span`,{children:`Every`}),` Industry`]}),(0,N.jsx)(`p`,{className:`app-hero-sub`,children:`Select your industry below to discover packaging machines engineered for your specific production requirements.`})]}),(0,N.jsx)(`div`,{className:`app-filter-band`,children:vr.map(e=>(0,N.jsxs)(`button`,{onClick:()=>o(e),className:`app-filter-btn${r===e?` active`:``}`,children:[yr[e]?.icon,e]},e))})]})}),(0,N.jsxs)(`div`,{className:`app-content`,children:[(0,N.jsxs)(`div`,{className:`app-meta-bar`,children:[(0,N.jsxs)(`span`,{className:`app-meta-pill`,children:[c.icon,c.label]}),(0,N.jsx)(`span`,{className:`app-meta-sep`}),(0,N.jsxs)(`span`,{className:`app-meta-count`,children:[(0,N.jsx)(`strong`,{children:s.length}),` Machine`,s.length===1?``:`s`,` Found`]}),c.desc&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`span`,{className:`app-meta-sep`}),(0,N.jsx)(`span`,{className:`app-meta-desc`,children:c.desc})]})]}),(0,N.jsx)(`div`,{className:`app-grid`,children:s.length===0?(0,N.jsxs)(`div`,{className:`app-empty`,children:[(0,N.jsx)(`div`,{className:`app-empty-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,width:`26`,height:`26`,style:{color:`#c2410c`},children:[(0,N.jsx)(`circle`,{cx:`11`,cy:`11`,r:`8`}),(0,N.jsx)(`path`,{d:`M21 21l-4.35-4.35`})]})}),(0,N.jsx)(`div`,{className:`app-empty-title`,children:`No Machines Found`}),(0,N.jsxs)(`div`,{className:`app-empty-sub`,children:[`No products matched for "`,r,`" — try another category.`]})]}):s.map((e,t)=>(0,N.jsxs)(M,{to:`/product/${encodeURIComponent(e.name)}`,className:`app-card`,style:{animationDelay:`${t*55}ms`},children:[(0,N.jsxs)(`div`,{className:`app-card-img`,children:[(0,N.jsx)(`span`,{className:`app-card-cat`,children:e.category}),(0,N.jsx)(`img`,{src:e.image,alt:e.name})]}),(0,N.jsxs)(`div`,{className:`app-card-body`,children:[(0,N.jsx)(`h3`,{className:`app-card-name`,children:e.name}),e.application?.length>0&&(0,N.jsx)(`div`,{className:`app-card-tags`,children:e.application.map(e=>(0,N.jsx)(`span`,{className:`app-tag`,children:e},e))}),(0,N.jsx)(`p`,{className:`app-card-desc`,children:e.description||e.shortDesc}),(0,N.jsxs)(`div`,{className:`app-card-footer`,children:[(0,N.jsxs)(`span`,{className:`app-card-link`,children:[`View Details`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]}),(0,N.jsx)(`span`,{className:`app-card-arrow`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`#c2410c`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})})]})]})]},t))})]})]})]})}var P=`#e8590c`,xr=[{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`polygon`,{points:`23 7 16 12 23 17 23 7`}),(0,N.jsx)(`rect`,{x:`1`,y:`5`,width:`15`,height:`14`,rx:`2`})]}),title:`Product Videos`,desc:`Watch live demonstrations of our packaging machines in real production environments.`,tag:`Video Library`,link:`/media/videos`},{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`path`,{d:`M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2`}),(0,N.jsx)(`circle`,{cx:`9`,cy:`7`,r:`4`}),(0,N.jsx)(`path`,{d:`M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75`})]}),title:`Customer Stories`,desc:`Real testimonials and case studies from 50+ clients across India.`,tag:`Testimonials`,link:`/media/stories`},{icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`14`,rx:`2`}),(0,N.jsx)(`line`,{x1:`8`,y1:`21`,x2:`16`,y2:`21`}),(0,N.jsx)(`line`,{x1:`12`,y1:`17`,x2:`12`,y2:`21`})]}),title:`Factory Tours`,desc:`Go inside our MIDC manufacturing facility and see our quality-first process firsthand.`,tag:`Behind the Scenes`,link:`/media/factory`}],Sr=[{num:`50+`,label:`Installations`},{num:`12+`,label:`Cities`},{num:`15+`,label:`Years`},{num:`99%`,label:`Uptime`}];function Cr(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .media-page * { box-sizing: border-box; }

        .media-page {
          font-family: var(--font-body, 'Inter', sans-serif);
          background: var(--champagne, #fdf6ee);
          min-height: 100vh;
        }

        /* ── TICKER ── */
        .media-topband {
          background: #ffffff;
          border-bottom: 1px solid #f0e2cf;
          padding: 10px 0;
          overflow: hidden;
        }

        .media-ticker {
          display: flex;
          gap: 40px;
          animation: mediaTicker 30s linear infinite;
          white-space: nowrap;
          width: max-content;
        }

        @keyframes mediaTicker {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }

        .media-ticker-item {
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a8896a;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .media-ticker-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${P};
          flex-shrink: 0;
        }

        /* ── HERO ── */
        .media-hero {
          position: relative;
          background: var(--champagne, #fdf6ee);
          overflow: hidden;
        }

        .media-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(28,25,23,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(28,25,23,0.03) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }

        .media-hero::after {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 380px; height: 380px;
          background: radial-gradient(circle, rgba(232,89,12,0.14) 0%, transparent 65%);
          pointer-events: none;
        }

        .media-hero-inner {
          position: relative;
          z-index: 1;
          max-width: 1220px;
          margin: 0 auto;
          padding: 40px 16px 32px;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        @media (min-width: 768px) {
          .media-hero-inner {
            padding: 72px 28px 64px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: end;
            gap: 48px;
          }
        }

        .media-hero-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .media-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${P};
        }

        .media-eyebrow::before {
          content: '';
          display: block;
          width: 14px; height: 2px;
          background: ${P};
        }

        .media-title {
          font-size: clamp(28px, 7vw, 52px);
          font-weight: 900;
          color: var(--text-1, #1c1917);
          margin: 0;
          line-height: 1.05;
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }

        .media-title span { color: ${P}; }

        .media-subtitle {
          font-size: 13.5px;
          color: var(--text-2, #57534e);
          margin: 4px 0 0;
          max-width: 500px;
          line-height: 1.7;
          font-weight: 500;
        }

        @media (min-width: 768px) {
          .media-subtitle { font-size: 15px; }
        }

        .media-cta-group {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .media-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: ${P};
          color: #ffffff;
          box-shadow: 0 10px 24px -8px rgba(232, 89, 12, 0.5);
          border: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .media-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -8px rgba(232, 89, 12, 0.55);
        }

        .media-btn-primary svg { flex-shrink: 0; }

        .media-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: #ffffff;
          color: #1c1917;
          border: 1px solid #e7ddc9;
          transition: border-color 0.2s ease, background 0.2s ease;
        }

        .media-btn-secondary:hover {
          background: #fdf6ee;
          border-color: ${P};
        }

        @media (min-width: 768px) {
          .media-btn-primary, .media-btn-secondary { padding: 14px 24px; font-size: 13.5px; }
        }

        /* stats on right — same card language as Hero's stats card */
        .media-hero-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          box-shadow: 0 16px 32px -18px rgba(28,25,23,0.18);
          overflow: hidden;
        }

        .media-stat {
          padding: 14px 16px;
          border-right: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .media-stat:nth-child(2n) { border-right: none; }
        .media-stat:nth-last-child(-n+2) { border-bottom: none; }

        .media-stat-num {
          font-size: 20px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1;
        }

        .media-stat-num span { color: ${P}; }

        .media-stat-label {
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #a8896a;
        }

        @media (min-width: 768px) {
          .media-stat { padding: 18px 22px; }
          .media-stat-num { font-size: 24px; }
        }

        /* ── DIVIDER ── */
        .media-section-divider {
          display: flex;
          align-items: center;
          gap: 14px;
          max-width: 1220px;
          margin: 0 auto;
          padding: 32px 16px 28px;
        }

        @media (min-width: 768px) {
          .media-section-divider { padding: 40px 28px 36px; gap: 16px; }
        }

        .media-divider-line {
          flex: 1;
          height: 1.5px;
          background: #e7ddc9;
        }

        .media-divider-label {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a8896a;
          display: flex;
          align-items: center;
          gap: 8px;
          white-space: nowrap;
        }

        .media-divider-label::before,
        .media-divider-label::after {
          content: '';
          width: 4px; height: 4px;
          border-radius: 50%;
          background: ${P};
        }

        /* ── FEATURES ── */
        .media-features-wrap {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 16px 56px;
        }

        @media (min-width: 768px) {
          .media-features-wrap { padding: 0 28px 96px; }
        }

        .media-features {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0;
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          overflow: hidden;
        }

        @media (min-width: 700px) {
          .media-features { grid-template-columns: repeat(3, 1fr); }
        }

        .media-feat-card {
          background: #ffffff;
          border-bottom: 1px solid #f0e2cf;
          padding: 26px 22px;
          position: relative;
          overflow: hidden;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: pointer;
        }

        .media-feat-card:last-child { border-bottom: none; }

        @media (min-width: 700px) {
          .media-feat-card {
            border-bottom: none;
            border-right: 1px solid #f0e2cf;
            padding: 32px 28px;
          }
          .media-feat-card:last-child { border-right: none; }
        }

        .media-feat-card:hover {
          background: #fdf6ee;
          z-index: 2;
          box-shadow: 0 0 0 1.5px ${P} inset;
        }

        .media-feat-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: ${P};
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.25,1,0.5,1);
        }

        .media-feat-card:hover::before { transform: scaleX(1); }

        .media-feat-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }

        .media-feat-icon {
          width: 44px; height: 44px;
          border-radius: 8px;
          background: #fdf1e4;
          border: 1px solid #f3d9bd;
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${P};
          flex-shrink: 0;
          transition: background 0.2s, border-color 0.2s, color 0.2s;
        }

        .media-feat-card:hover .media-feat-icon {
          background: ${P};
          border-color: ${P};
          color: #ffffff;
        }

        .media-feat-tag {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: ${P};
          background: #fdf1e4;
          border: 1px solid #f3d9bd;
          padding: 4px 9px;
          border-radius: 5px;
          white-space: nowrap;
        }

        .media-feat-title {
          font-size: 18px;
          font-weight: 800;
          color: #1c1917;
          text-transform: uppercase;
          letter-spacing: 0.01em;
          line-height: 1.15;
        }

        .media-feat-desc {
          font-size: 12.5px;
          font-weight: 500;
          color: var(--text-2, #57534e);
          line-height: 1.65;
          flex: 1;
        }

        .media-feat-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: ${P};
          margin-top: 2px;
          transition: gap 0.2s;
        }

        .media-feat-card:hover .media-feat-link { gap: 10px; }

        /* ── BOTTOM CTA ── */
        .media-bottom-cta {
          max-width: 1220px;
          margin: 0 auto;
          padding: 0 16px 56px;
        }

        @media (min-width: 768px) {
          .media-bottom-cta { padding: 0 28px 96px; }
        }

        .media-cta-block {
          background: ${P};
          border-radius: 12px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          position: relative;
          overflow: hidden;
        }

        @media (min-width: 640px) {
          .media-cta-block {
            padding: 40px;
            display: grid;
            grid-template-columns: 1fr auto;
            align-items: center;
            gap: 24px;
          }
          .media-cta-block-btn { width: auto; }
        }

        .media-cta-block::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px);
          background-size: 24px 24px;
        }

        .media-cta-block::after {
          content: '';
          position: absolute;
          right: -50px; top: -50px;
          width: 180px; height: 180px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.16) 0%, transparent 70%);
        }

        .media-cta-text {
          position: relative; z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .media-cta-eyebrow {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.85);
        }

        .media-cta-title {
          font-size: 22px;
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          text-transform: uppercase;
          line-height: 1.15;
        }

        @media (min-width: 768px) {
          .media-cta-title { font-size: 27px; }
        }

        .media-cta-sub {
          font-size: 12.5px;
          color: rgba(255,255,255,0.85);
          margin: 0;
          font-weight: 500;
        }

        .media-cta-block-btn {
          position: relative; z-index: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          background: #ffffff;
          color: ${P};
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 13px 24px;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .media-cta-block-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px -8px rgba(0,0,0,0.25);
        }
      `}),(0,N.jsxs)(`main`,{className:`media-page`,children:[(0,N.jsx)(`div`,{className:`media-topband`,children:(0,N.jsx)(`div`,{className:`media-ticker`,children:[...[,,]].map((e,t)=>[`Product Demos`,`Factory Tours`,`Customer Stories`,`Installation Videos`,`Machine Walkthroughs`,`Live Demos Available`,`ISO 9001 Certified`].map((e,n)=>(0,N.jsxs)(`span`,{className:`media-ticker-item`,children:[(0,N.jsx)(`span`,{className:`media-ticker-dot`}),e]},`${t}-${n}`)))})}),(0,N.jsx)(`section`,{className:`media-hero`,children:(0,N.jsxs)(`div`,{className:`media-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`media-hero-left`,children:[(0,N.jsx)(`span`,{className:`media-eyebrow`,children:`Media Center`}),(0,N.jsxs)(`h1`,{className:`media-title`,children:[`See Our `,(0,N.jsx)(`span`,{children:`Machines`}),(0,N.jsx)(`br`,{}),`In Action`]}),(0,N.jsx)(`p`,{className:`media-subtitle`,children:`Browse product videos, factory tours, and real customer stories that demonstrate our industrial packaging solutions in real environments.`}),(0,N.jsxs)(`div`,{className:`media-cta-group`,children:[(0,N.jsxs)(M,{to:`/media/videos`,className:`media-btn-primary`,children:[(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,width:`14`,height:`14`,children:(0,N.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),`Watch Videos`]}),(0,N.jsxs)(M,{to:`/applications`,className:`media-btn-secondary`,children:[`Browse Applications`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]})]}),(0,N.jsx)(`div`,{className:`media-hero-stats`,children:Sr.map((e,t)=>(0,N.jsxs)(`div`,{className:`media-stat`,children:[(0,N.jsxs)(`span`,{className:`media-stat-num`,children:[e.num.replace(/[+%]/g,``),(0,N.jsx)(`span`,{children:e.num.match(/[+%]/)?.[0]})]}),(0,N.jsx)(`span`,{className:`media-stat-label`,children:e.label})]},t))})]})}),(0,N.jsxs)(`div`,{className:`media-section-divider`,children:[(0,N.jsx)(`div`,{className:`media-divider-line`}),(0,N.jsx)(`span`,{className:`media-divider-label`,children:`What You'll Find`}),(0,N.jsx)(`div`,{className:`media-divider-line`})]}),(0,N.jsx)(`div`,{className:`media-features-wrap`,children:(0,N.jsx)(`div`,{className:`media-features`,children:xr.map((e,t)=>(0,N.jsxs)(M,{to:e.link,className:`media-feat-card`,children:[(0,N.jsxs)(`div`,{className:`media-feat-top`,children:[(0,N.jsx)(`div`,{className:`media-feat-icon`,children:e.icon}),(0,N.jsx)(`span`,{className:`media-feat-tag`,children:e.tag})]}),(0,N.jsx)(`div`,{className:`media-feat-title`,children:e.title}),(0,N.jsx)(`div`,{className:`media-feat-desc`,children:e.desc}),(0,N.jsxs)(`span`,{className:`media-feat-link`,children:[`Explore`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]},t))})}),(0,N.jsx)(`div`,{className:`media-bottom-cta`,children:(0,N.jsxs)(`div`,{className:`media-cta-block`,children:[(0,N.jsxs)(`div`,{className:`media-cta-text`,children:[(0,N.jsx)(`span`,{className:`media-cta-eyebrow`,children:`Book a Demo`}),(0,N.jsx)(`p`,{className:`media-cta-title`,children:`Want a Live Machine Demo?`}),(0,N.jsx)(`p`,{className:`media-cta-sub`,children:`Visit our factory or schedule a video walkthrough with our engineers.`})]}),(0,N.jsxs)(M,{to:`/contact`,className:`media-cta-block-btn`,children:[`Schedule Demo`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`13`,height:`13`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`})})]})]})})]})]})}var wr=[{title:`Namkeen Packing Machine`,youtubeId:`dQw4w9WgXcQ`},{title:`Automatic Pouch Packing`,youtubeId:`jNQXAC9IVRw`},{title:`High-Speed Sealing System`,youtubeId:`9bZkp7q19f0`},{title:`Industrial Coding Solution`,youtubeId:`OPf0YbXqDm0`},{title:`Food Processing Workflow`,youtubeId:`kffacxfA7g4`},{title:`Customer Testimonial Showcase`,youtubeId:`FxHBI6NZTNU`}],Tr={youtubeId:`z72m41Uln2Q`,title:`Automatic Kurkure / Namkeen Packing Machine`,desc:`Watch our fully automatic namkeen packing machine in action — precision filling, sealing, and packaging for high-speed production lines.`},Er=`
  @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');

  :root {
    --vid-accent:      #b8531f;
    --vid-accent-2:    #f59e0b;
    --vid-cream:       #fdf6ee;
    --vid-cream-soft:  #fcfbf8;
    --vid-white:       #ffffff;
    --vid-text:        #1c1917;
    --vid-text-muted:  #6b6560;
    --vid-border:      #ece5da;
    --vid-border-2:    #ead9c8;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .vid-page {
    font-family: 'Barlow', sans-serif;
    background: var(--vid-cream-soft);
    min-height: 100vh;
  }

  /* ── HERO HEADER — light, warm, matches rest of site ── */
  .vid-hero {
    background: linear-gradient(180deg, #ffffff 0%, var(--vid-cream) 100%);
    border-bottom: 1px solid var(--vid-border);
    padding: 40px 18px 32px;
    text-align: left;
    position: relative; overflow: hidden;
  }
  .vid-hero::before {
    content: '';
    position: absolute; top: -100px; right: -100px;
    width: 240px; height: 240px; border-radius: 50%;
    background: radial-gradient(circle, #fdeadb 0%, transparent 70%);
    pointer-events: none;
  }

  .vid-hero-inner {
    max-width: 1160px; margin: 0 auto; position: relative; z-index: 1;
  }

  .vid-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 8px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10.5px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--vid-accent);
    margin-bottom: 14px;
  }
  .vid-hero-eyebrow::before {
    content: ''; width: 20px; height: 2px;
    background: var(--vid-accent-2); border-radius: 1px; flex-shrink: 0;
  }

  .vid-hero-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: clamp(28px, 8vw, 44px);
    font-weight: 900; color: var(--vid-text);
    text-transform: uppercase; letter-spacing: -.01em;
    line-height: 1.02; margin-bottom: 14px;
  }
  .vid-hero-title span { color: var(--vid-accent-2); }

  .vid-hero-sub {
    font-size: 13.5px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.7;
    max-width: 480px;
  }

  /* ── WRAP ── */
  .vid-wrap {
    max-width: 1160px; margin: 0 auto; padding: 32px 18px 56px;
  }

  /* ── SECTION LABEL ── */
  .vid-section-label {
    display: flex; align-items: center; gap: 12px; margin-bottom: 18px;
  }
  .vid-label-text {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10.5px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
    color: var(--vid-text); white-space: nowrap;
    display: flex; align-items: center; gap: 8px;
  }
  .vid-label-text::before {
    content: ''; width: 20px; height: 2px;
    background: var(--vid-accent-2); border-radius: 2px;
  }
  .vid-label-badge {
    display: inline-flex; align-items: center; gap: 6px;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 10px; font-weight: 700; letter-spacing: .16em; text-transform: uppercase;
    color: var(--vid-accent);
    background: #fdf0e2;
    border: 1px solid var(--vid-border-2);
    border-radius: 5px; padding: 5px 11px;
  }
  .vid-label-badge::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--vid-accent-2); animation: vid-blink 2s infinite;
  }
  @keyframes vid-blink { 0%,100%{opacity:1} 50%{opacity:.25} }
  .vid-label-line { flex: 1; height: 1px; background: var(--vid-border); }

  /* ── FEATURED CARD ── */
  .vid-featured {
    background: var(--vid-white);
    border: 1px solid var(--vid-border-2);
    border-radius: 14px; overflow: hidden;
    box-shadow: 0 4px 20px -8px rgba(184,83,31,0.12);
    margin-bottom: 36px;
    transition: box-shadow .3s, transform .3s;
  }
  .vid-featured:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 34px -12px rgba(184,83,31,0.22);
  }
  .vid-featured-frame {
    width: 100%; aspect-ratio: 16/9;
    background: #1c1917; display: block; border: none;
  }
  .vid-featured-body {
    padding: 18px 18px 20px;
    display: flex; flex-direction: column; align-items: flex-start;
    gap: 14px; border-top: 1px solid var(--vid-border);
  }
  .vid-featured-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 17px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    letter-spacing: .01em; margin-bottom: 6px; line-height: 1.25;
  }
  .vid-featured-desc {
    font-size: 13px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.7;
  }
  .vid-yt-link {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 18px; border-radius: 6px;
    background: var(--vid-accent-2); color: #fff;
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 11.5px; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
    text-decoration: none; white-space: nowrap;
    transition: background .2s, transform .15s;
    box-shadow: 0 6px 16px -6px rgba(245,158,11,0.5);
  }
  .vid-yt-link:hover { background: var(--vid-accent); transform: translateY(-2px); }
  .vid-yt-link svg { width: 12px; height: 12px; }

  /* ── MORE VIDEOS ── */
  .vid-grid {
    display: grid; grid-template-columns: 1fr; gap: 16px;
  }

  .vid-card {
    background: var(--vid-white);
    border: 1px solid var(--vid-border);
    border-radius: 12px; overflow: hidden;
    box-shadow: 0 2px 10px rgba(28,25,23,0.04);
    transition: border-color .25s, box-shadow .3s, transform .3s;
    animation: vidIn .4s ease both;
  }
  .vid-card:hover {
    border-color: #d98a4e;
    transform: translateY(-3px);
    box-shadow: 0 12px 30px -12px rgba(184,83,31,0.22);
  }
  .vid-card-bar {
    height: 3px; background: var(--vid-border); transition: background .25s;
  }
  .vid-card:hover .vid-card-bar { background: var(--vid-accent-2); }
  .vid-card-frame {
    width: 100%; aspect-ratio: 16/9;
    background: #1c1917; display: block; border: none;
  }
  .vid-card-body {
    padding: 14px 16px 16px; border-top: 1px solid var(--vid-border);
  }
  .vid-card-name {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 14.5px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    letter-spacing: .01em; margin-bottom: 7px; line-height: 1.25;
  }
  .vid-card-desc {
    font-size: 12px; color: var(--vid-text-muted);
    font-weight: 400; line-height: 1.65;
  }

  /* ── EMPTY ── */
  .vid-empty {
    text-align: center; padding: 48px 20px;
    background: var(--vid-white); border: 1px solid var(--vid-border-2);
    border-radius: 14px;
  }
  .vid-empty-title {
    font-family: 'Barlow Condensed', sans-serif;
    font-size: 19px; font-weight: 800;
    color: var(--vid-text); text-transform: uppercase;
    margin-bottom: 8px;
  }
  .vid-empty-sub { font-size: 13px; color: var(--vid-text-muted); }

  @keyframes vidIn {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ============================================================
     ≥480px — larger phones
     ============================================================ */
  @media (min-width: 480px) {
    .vid-hero { padding: 48px 24px 36px; }
    .vid-wrap { padding: 36px 24px 64px; }
    .vid-hero-sub { font-size: 14px; }
    .vid-featured-body { padding: 20px 22px 22px; }
  }

  /* ============================================================
     ≥640px — small tablets: featured body goes row-layout,
     more-videos grid becomes 2 columns
     ============================================================ */
  @media (min-width: 640px) {
    .vid-hero { padding: 56px 32px 44px; }
    .vid-hero-title { font-size: clamp(36px, 6vw, 52px); }
    .vid-wrap { padding: 44px 32px 72px; }

    .vid-featured-body {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }
    .vid-featured-desc { max-width: 480px; }
    .vid-yt-link { flex-shrink: 0; margin-top: 4px; }

    .vid-grid { grid-template-columns: repeat(2, 1fr); gap: 18px; }
  }

  /* ============================================================
     ≥768px — tablets
     ============================================================ */
  @media (min-width: 768px) {
    .vid-hero { padding: 64px 40px 52px; }
    .vid-wrap { padding: 48px 40px 80px; }
    .vid-featured-name { font-size: 19px; }
    .vid-featured-desc { font-size: 13.5px; }
  }

  /* ============================================================
     ≥1024px — desktop: 3-column grid, larger hero
     ============================================================ */
  @media (min-width: 1024px) {
    .vid-hero { padding: 72px 40px 60px; }
    .vid-hero-title { font-size: clamp(48px, 5vw, 64px); }
    .vid-hero-sub { font-size: 15px; }
    .vid-wrap { padding: 56px 40px 88px; }

    .vid-featured { margin-bottom: 48px; }
    .vid-featured-body { padding: 24px 28px; }
    .vid-featured-name { font-size: 20px; }

    .vid-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .vid-card-body { padding: 18px 20px 20px; }
    .vid-card-name { font-size: 16px; }
    .vid-card-desc { font-size: 12.5px; }
  }
`;function Dr(){let e=[Tr,...(wr||[]).filter(e=>e.youtubeId!==Tr.youtubeId)],[t,...n]=e;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:Er}),(0,N.jsxs)(`div`,{className:`vid-page`,children:[(0,N.jsx)(`div`,{className:`vid-hero`,children:(0,N.jsxs)(`div`,{className:`vid-hero-inner`,children:[(0,N.jsx)(`div`,{className:`vid-hero-eyebrow`,children:`Video Library`}),(0,N.jsxs)(`h1`,{className:`vid-hero-title`,children:[`Machine `,(0,N.jsx)(`span`,{children:`Demos`}),(0,N.jsx)(`br`,{}),`& Videos`]}),(0,N.jsx)(`p`,{className:`vid-hero-sub`,children:`Explore our latest demonstrations, case studies, and product walkthroughs.`})]})}),(0,N.jsxs)(`div`,{className:`vid-wrap`,children:[(0,N.jsxs)(`div`,{className:`vid-section-label`,children:[(0,N.jsx)(`span`,{className:`vid-label-badge`,children:`Featured`}),(0,N.jsx)(`div`,{className:`vid-label-line`})]}),(0,N.jsxs)(`div`,{className:`vid-featured`,children:[(0,N.jsx)(`iframe`,{className:`vid-featured-frame`,src:`https://www.youtube.com/embed/${t.youtubeId}`,title:t.title,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,loading:`lazy`}),(0,N.jsxs)(`div`,{className:`vid-featured-body`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`vid-featured-name`,children:t.title}),(0,N.jsx)(`div`,{className:`vid-featured-desc`,children:t.desc})]}),(0,N.jsxs)(`a`,{href:`https://www.youtube.com/watch?v=${t.youtubeId}`,target:`_blank`,rel:`noreferrer`,className:`vid-yt-link`,children:[(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`currentColor`,children:(0,N.jsx)(`polygon`,{points:`5 3 19 12 5 21 5 3`})}),`Watch on YouTube`]})]})]}),n.length>0&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`vid-section-label`,style:{marginBottom:18},children:[(0,N.jsx)(`span`,{className:`vid-label-text`,children:`More Videos`}),(0,N.jsx)(`div`,{className:`vid-label-line`})]}),(0,N.jsx)(`div`,{className:`vid-grid`,children:n.map((e,t)=>(0,N.jsxs)(`article`,{className:`vid-card`,style:{animationDelay:`${t*70}ms`},children:[(0,N.jsx)(`div`,{className:`vid-card-bar`}),(0,N.jsx)(`iframe`,{className:`vid-card-frame`,src:`https://www.youtube.com/embed/${e.youtubeId}`,title:e.title,allow:`accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture`,allowFullScreen:!0,loading:`lazy`}),(0,N.jsxs)(`div`,{className:`vid-card-body`,children:[(0,N.jsx)(`h2`,{className:`vid-card-name`,children:e.title}),(0,N.jsx)(`p`,{className:`vid-card-desc`,children:e.desc||`Watch this overview to learn more about our industrial packaging equipment.`})]})]},e.youtubeId))})]}),e.length===0&&(0,N.jsxs)(`div`,{className:`vid-empty`,children:[(0,N.jsx)(`div`,{className:`vid-empty-title`,children:`No Videos Yet`}),(0,N.jsx)(`div`,{className:`vid-empty-sub`,children:`Check back soon for product demonstrations.`})]})]})]})]})}var Or={name:``,email:``,phone:``,message:``},kr=`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&display=swap');

  .ct {
    --bg:            #FCFAF7;
    --champagne:     #F7F2EB;
    --sand:          #F3EEE6;
    --stone:         #EEE7DE;
    --surface:       #FEFDFB;
    --surface-sunk:  #F6F0E6;
    --border:        #E7DFD0;
    --border-strong: #D9CDB6;
    --text-1:        #201C16;
    --text-2:        #5B564C;
    --text-3:        #948C7C;
    --accent:        #E87817;
    --accent-dark:   #BE600F;
    --accent-tint:   #FBEBDD;
    --accent-tint-2: #F5D6B4;
    --on-accent:     #ffffff;
    --steel:         #5B7C99;
    --steel-tint:    #E8EEF2;
    --steel-tint-2:  #D9E4EB;
    --radius-lg: 20px;
    --radius-md: 12px;
    --radius-sm: 8px;
    --font-display: 'Fraunces', serif;
    --font-body: 'Montserrat', sans-serif;
  }

  .ct * { box-sizing: border-box; margin: 0; padding: 0; }
  .ct {
    font-family: var(--font-body);
    background: var(--bg);
    color: var(--text-2);
    -webkit-font-smoothing: antialiased;
  }

  /* ============ PAGE / PANEL — mobile-first base ============ */

  .ct-page {
    min-height: 100vh;
    padding: 20px 14px 40px;
    position: relative;
    background:
      radial-gradient(1200px 520px at 84% -8%, rgba(232,120,23,0.08) 0%, transparent 58%),
      radial-gradient(1000px 620px at -6% 60%, rgba(91,124,153,0.07) 0%, transparent 55%),
      var(--bg);
  }

  .ct-panel {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    border-radius: var(--radius-lg);
    overflow: hidden;
    border: 1px solid var(--border);
    background: linear-gradient(180deg, var(--surface) 0%, var(--champagne) 46%, var(--sand) 100%);
    box-shadow: 0 1px 2px rgba(32,28,22,0.04), 0 30px 60px -32px rgba(32,28,22,0.22);
  }

  .ct-panel::before {
    content: '';
    position: absolute; inset: 0;
    background-image: repeating-linear-gradient(
      118deg,
      rgba(32,28,22,0.022) 0px,
      rgba(32,28,22,0.022) 1px,
      transparent 1px,
      transparent 70px
    );
    pointer-events: none;
    z-index: 0;
  }
  .ct-panel::after {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(32,28,22,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32,28,22,0.03) 1px, transparent 1px);
    background-size: 34px 34px;
    mask-image: radial-gradient(ellipse 60% 90% at 80% 10%, rgba(0,0,0,0.55) 0%, transparent 70%);
    pointer-events: none;
    z-index: 0;
  }

  .ct-machine-bg {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    background-image: url('/Machines/Multi-Head VFFS Packaging Machine.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.10;
    filter: blur(3px) saturate(0.8);
    mix-blend-mode: multiply;
    pointer-events: none;
    z-index: 0;
    mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 15%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.4) 70%, transparent 100%);
  }

  .ct-watermark { display: none; }
  @media (min-width: 940px) {
    .ct-watermark {
      display: block;
      position: absolute;
      top: 12%; right: -8%;
      width: 680px; height: 680px;
      background-image: url('/Machines/Multi-Head VFFS Packaging Machine.png');
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      opacity: 0.06;
      filter: blur(4px) grayscale(0.3);
      mix-blend-mode: multiply;
      pointer-events: none;
      z-index: 0;
      mask-image: radial-gradient(ellipse 60% 60% at 55% 45%, black 0%, transparent 70%);
    }
  }

  .ct-corner {
    position: absolute;
    width: 16px; height: 16px;
    pointer-events: none;
    z-index: 3;
  }
  .ct-corner.tl { top: -1px; left: -1px; border-top: 2px solid var(--accent); border-left: 2px solid var(--accent); border-radius: 4px 0 0 0; }
  .ct-corner.br { bottom: -1px; right: -1px; border-bottom: 2px solid var(--accent); border-right: 2px solid var(--accent); border-radius: 0 0 4px 0; }
  @media (min-width: 640px) {
    .ct-corner { width: 20px; height: 20px; }
  }

  /* ============ HERO — mobile-first ============ */

  .ct-hero {
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: 1fr;
    background:
      linear-gradient(160deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%),
      linear-gradient(135deg, #FFF3E4 0%, #FDE7CE 55%, #FBDCB8 100%);
    overflow: hidden;
  }
  .ct-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(190,96,15,0.07) 1px, transparent 1px),
      linear-gradient(90deg, rgba(190,96,15,0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    mask-image: linear-gradient(180deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.55) 65%, transparent 100%);
    pointer-events: none;
    z-index: 0;
  }
  .ct-hero::after {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 260px; height: 260px;
    background-image:
      linear-gradient(rgba(190,96,15,0.14) 1px, transparent 1px),
      linear-gradient(90deg, rgba(190,96,15,0.14) 1px, transparent 1px);
    background-size: 13px 13px;
    border-radius: 50%;
    mask-image: radial-gradient(circle, rgba(0,0,0,0.8) 0%, transparent 72%);
    pointer-events: none;
    z-index: 0;
  }
  @media (min-width: 940px) {
    .ct-hero { grid-template-columns: 58% 42%; min-height: 340px; }
  }

  .ct-hero-inner {
    position: relative; z-index: 2;
    display: flex; flex-direction: column; gap: 14px;
    padding: 28px 20px 24px;
    justify-content: center;
  }
  @media (min-width: 640px) {
    .ct-hero-inner { padding: 40px 36px 30px; gap: 16px; }
  }
  @media (min-width: 940px) {
    .ct-hero-inner { padding: 44px 40px 36px; gap: 18px; }
  }

  .ct-hero-eyebrow {
    display: inline-flex; align-items: center; gap: 7px; align-self: flex-start;
    font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--accent-dark);
    padding: 6px 13px; border-radius: 100px;
    border: 1px solid var(--accent-tint-2);
    background: var(--accent-tint);
    font-family: var(--font-body);
  }
  .ct-hero-eyebrow::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
  }

  .ct-hero-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 8vw, 50px);
    font-weight: 600;
    line-height: 1.1; letter-spacing: -0.4px;
    color: var(--text-1);
    max-width: 560px;
  }
  .ct-hero-title span {
    color: var(--accent);
    font-style: italic;
    font-weight: 500;
  }

  .ct-hero-sub {
    font-size: 14px; font-weight: 500;
    color: var(--text-2); line-height: 1.6;
    max-width: 460px;
  }
  @media (min-width: 640px) {
    .ct-hero-sub { font-size: 15px; line-height: 1.65; }
  }

  .ct-hero-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: 4px;
  }
  @media (min-width: 480px) {
    .ct-hero-stats { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 6px; }
  }

  .ct-stat {
    display: flex; flex-direction: column; align-items: flex-start; gap: 1px;
    padding: 10px 12px; border-radius: var(--radius-sm);
    background: rgba(255,255,255,0.72);
    border: 1px solid rgba(190,96,15,0.16);
    box-shadow: 0 1px 2px rgba(190,96,15,0.05);
    font-size: 11px; color: var(--text-2); font-weight: 500;
    position: relative; z-index: 1;
  }
  @media (min-width: 480px) {
    .ct-stat { flex-direction: row; align-items: baseline; gap: 6px; padding: 11px 18px; font-size: 12.5px; }
  }
  .ct-stat strong {
    color: var(--text-1); font-weight: 700; font-family: var(--font-display);
    font-size: 15px; line-height: 1.3;
  }
  @media (min-width: 480px) {
    .ct-stat strong { font-size: 16px; margin-right: 3px; }
  }

  .ct-hero-visual { display: none; }
  @media (min-width: 940px) {
    .ct-hero-visual {
      display: block;
      position: relative;
      overflow: hidden;
      min-height: 220px;
      z-index: 1;
    }
    .ct-hero-visual::before {
      content: '';
      position: absolute; inset: 0;
      background-image:
        linear-gradient(rgba(190,96,15,0.11) 1px, transparent 1px),
        linear-gradient(90deg, rgba(190,96,15,0.11) 1px, transparent 1px);
      background-size: 22px 22px;
      mask-image: radial-gradient(ellipse 75% 75% at 60% 45%, rgba(0,0,0,0.9) 0%, transparent 75%);
    }
    .ct-hero-visual::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      width: 130px; height: 130px;
      transform: translate(-50%, -50%) rotate(45deg);
      border: 1.5px solid rgba(190,96,15,0.18);
      border-radius: 18px;
    }

    .ct-hero-visual-fade {
      position: absolute; inset: 0;
      background: linear-gradient(90deg, #FFF3E4 0%, rgba(255,243,228,0) 30%, rgba(255,243,228,0) 100%);
    }
  }

  .ct-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent 0%, var(--border-strong) 15%, var(--border-strong) 85%, transparent 100%);
    position: relative;
    z-index: 2;
    margin: 0 20px;
  }
  @media (min-width: 640px) {
    .ct-divider { margin: 0 40px; }
  }

  /* ============ BODY / INFO / FORM — mobile-first ============ */

  .ct-body {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 900px) {
    .ct-body { grid-template-columns: 340px 1fr; }
  }

  .ct-info {
    display: flex; flex-direction: column;
    position: relative;
    padding: 24px 20px 26px;
    background: linear-gradient(180deg, rgba(247,242,235,0.4) 0%, rgba(243,238,230,0.3) 100%);
    border-bottom: 1px solid var(--border-strong);
  }
  @media (min-width: 640px) {
    .ct-info { padding: 30px 32px 32px; }
  }
  @media (min-width: 900px) {
    .ct-info { border-right: 1px solid var(--border-strong); border-bottom: none; padding: 36px 32px 40px 40px; }
  }

  .ct-info-tag {
    display: flex; align-items: center; gap: 8px;
    margin-bottom: 16px;
  }
  @media (min-width: 640px) {
    .ct-info-tag { margin-bottom: 20px; }
  }
  .ct-info-tag-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
  .ct-info-tag span {
    font-size: 10.5px; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }

  .ct-info-row {
    padding: 13px 0;
    border-bottom: 1px solid rgba(231,223,208,0.6);
    display: flex; align-items: flex-start; gap: 12px;
  }
  @media (min-width: 640px) {
    .ct-info-row { padding: 15px 0; }
  }
  .ct-info-row:last-child { border-bottom: none; padding-bottom: 4px; }
  .ct-info-row:first-child { padding-top: 0; }

  .ct-info-icon {
    width: 34px; height: 34px; border-radius: 10px;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(32,28,22,0.05);
  }
  @media (min-width: 640px) {
    .ct-info-icon { width: 36px; height: 36px; }
  }

  .ct-info-text { display: flex; flex-direction: column; gap: 3px; padding-top: 3px; min-width: 0; }
  .ct-info-label {
    font-size: 10.5px; letter-spacing: 1.3px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }
  .ct-info-value {
    font-size: 14px; font-weight: 600;
    color: var(--text-1); line-height: 1.4;
    text-decoration: none; transition: color 0.2s;
    word-break: break-word;
  }
  @media (min-width: 640px) {
    .ct-info-value { font-size: 14.5px; }
  }
  .ct-info-value:hover { color: var(--accent); }

  .ct-cta-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 18px; margin-top: 18px;
    background: var(--accent);
    color: var(--on-accent);
    border: none; border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 13px; font-weight: 700;
    letter-spacing: 0.2px;
    text-decoration: none;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 8px 20px -8px rgba(232,120,23,0.5);
  }
  @media (min-width: 640px) {
    .ct-cta-btn { padding: 15px 20px; margin-top: 22px; font-size: 13.5px; }
  }
  .ct-cta-btn:hover { background: var(--accent-dark); transform: translateY(-1px); }
  .ct-cta-btn:active { transform: translateY(0); }

  .ct-cta-icon {
    width: 20px; height: 20px; border-radius: 50%;
    background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }

  .ct-form-card {
    position: relative;
    padding: 26px 20px 30px;
    background: linear-gradient(180deg, rgba(254,253,251,0.3) 0%, rgba(247,242,235,0.2) 100%);
  }
  @media (min-width: 640px) {
    .ct-form-card { padding: 32px 32px 36px; }
  }
  @media (min-width: 900px) {
    .ct-form-card { padding: 36px 40px 40px 32px; }
  }

  .ct-form-header {
    padding-bottom: 18px;
    margin-bottom: 18px;
    border-bottom: 1px solid var(--border);
    display: flex; align-items: center; gap: 12px;
  }
  @media (min-width: 640px) {
    .ct-form-header { padding-bottom: 20px; margin-bottom: 20px; gap: 14px; }
  }
  .ct-form-header-icon {
    width: 40px; height: 40px; border-radius: 10px;
    background: var(--steel-tint);
    border: 1px solid var(--steel-tint-2);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
  }
  @media (min-width: 640px) {
    .ct-form-header-icon { width: 42px; height: 42px; }
  }
  .ct-form-header-text h2 {
    font-family: var(--font-display);
    font-size: 18px; font-weight: 600;
    color: var(--text-1); letter-spacing: -0.2px;
  }
  @media (min-width: 640px) {
    .ct-form-header-text h2 { font-size: 20px; }
  }
  .ct-form-header-text p {
    font-size: 12.5px; color: var(--text-3); font-weight: 500;
    margin-top: 2px;
  }
  @media (min-width: 640px) {
    .ct-form-header-text p { font-size: 13px; }
  }

  .ct-field-row { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
  @media (min-width: 560px) {
    .ct-field-row { grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px; }
  }

  .ct-field { display: flex; flex-direction: column; gap: 6px; }
  @media (min-width: 640px) {
    .ct-field { gap: 7px; }
  }
  .ct-label {
    font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
    color: var(--text-2);
  }
  @media (min-width: 640px) {
    .ct-label { font-size: 11.5px; }
  }
  .ct-required { color: var(--accent); margin-left: 2px; }

  .ct-input, .ct-textarea {
    width: 100%;
    background: rgba(254,253,251,0.85);
    border: 1.5px solid var(--border);
    border-radius: var(--radius-sm);
    padding: 12px 14px;
    font-family: var(--font-body); font-size: 16px; font-weight: 500;
    color: var(--text-1);
    outline: none;
    transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
    -webkit-appearance: none;
    box-shadow: 0 1px 3px rgba(32,28,22,0.04);
  }
  @media (min-width: 640px) {
    .ct-input, .ct-textarea { padding: 13px 15px; font-size: 15px; }
  }
  .ct-input::placeholder, .ct-textarea::placeholder {
    color: var(--text-3);
    font-weight: 400;
  }
  .ct-input:focus, .ct-textarea:focus {
    background: var(--surface);
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-tint);
  }
  .ct-input:hover:not(:focus), .ct-textarea:hover:not(:focus) {
    border-color: var(--border-strong);
    background: rgba(254,253,251,0.95);
  }

  .ct-textarea { resize: none; min-height: 110px; line-height: 1.6; }
  @media (min-width: 640px) {
    .ct-textarea { min-height: 120px; }
  }

  .ct-char-count { font-size: 11px; color: var(--text-3); text-align: right; margin-top: -3px; font-weight: 500; }
  @media (min-width: 640px) {
    .ct-char-count { font-size: 11.5px; margin-top: -4px; }
  }

  .ct-brochure-hint {
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px; margin-top: 14px;
    background: var(--steel-tint);
    border: 1px solid var(--steel-tint-2);
    border-radius: var(--radius-sm);
  }
  @media (min-width: 640px) {
    .ct-brochure-hint { padding: 13px 16px; margin-top: 16px; }
  }
  .ct-brochure-hint-icon { flex-shrink: 0; }
  .ct-brochure-hint-text {
    font-size: 12px; color: var(--text-2);
    line-height: 1.5; font-weight: 500;
  }
  @media (min-width: 640px) {
    .ct-brochure-hint-text { font-size: 12.5px; }
  }
  .ct-brochure-hint-text strong { color: var(--steel); font-weight: 700; }

  .ct-submit {
    width: 100%; padding: 15px 22px; margin-top: 14px;
    background: var(--accent);
    border: none; border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 14px; font-weight: 700;
    letter-spacing: 0.2px;
    color: var(--on-accent);
    display: flex; align-items: center; justify-content: center; gap: 10px;
    transition: background 0.2s, transform 0.15s;
    box-shadow: 0 10px 24px -10px rgba(232,120,23,0.55);
  }
  @media (min-width: 640px) {
    .ct-submit { padding: 16px 24px; margin-top: 16px; font-size: 14.5px; }
  }
  .ct-submit:hover:not(:disabled) { background: var(--accent-dark); transform: translateY(-1px); }
  .ct-submit:active:not(:disabled) { transform: translateY(0); }
  .ct-submit:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }

  .ct-submit-arrow {
    width: 24px; height: 24px; border-radius: 50%;
    background: rgba(255,255,255,0.18);
    display: flex; align-items: center; justify-content: center;
    transition: transform 0.2s;
    flex-shrink: 0;
  }
  @media (min-width: 640px) {
    .ct-submit-arrow { width: 26px; height: 26px; }
  }
  .ct-submit:hover .ct-submit-arrow { transform: translateX(3px); }

  .ct-trust {
    display: flex; align-items: center; gap: 6px; margin-top: 12px; justify-content: center;
    font-size: 11.5px; color: var(--text-3); font-weight: 500;
    text-align: center;
  }
  @media (min-width: 640px) {
    .ct-trust { margin-top: 14px; font-size: 12px; }
  }
  .ct-trust svg { flex-shrink: 0; }

  .ct-toast {
    position: fixed; bottom: 16px; right: 16px; left: 16px; z-index: 9999;
    background: var(--surface);
    color: var(--text-1);
    padding: 14px 16px; border-radius: var(--radius-md);
    display: flex; align-items: center; gap: 12px;
    font-size: 13px; font-weight: 600;
    box-shadow: 0 10px 32px rgba(32,28,22,0.16);
    border: 1px solid var(--border);
    border-left: 3px solid var(--accent);
    animation: toast-in 0.3s cubic-bezier(0.4,0,0.2,1);
  }
  @media (min-width: 480px) {
    .ct-toast { left: auto; max-width: 320px; bottom: 20px; right: 20px; font-size: 13.5px; padding: 14px 18px; }
  }
  @keyframes toast-in {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ============ MAP / LOCATION — mobile-first ============ */

  .ct-map {
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 900px) {
    .ct-map { grid-template-columns: 340px 1fr; }
  }

  .ct-map-info {
    display: flex; flex-direction: column;
    position: relative;
    padding: 24px 20px 26px;
    background: linear-gradient(180deg, rgba(247,242,235,0.4) 0%, rgba(243,238,230,0.3) 100%);
    border-bottom: 1px solid var(--border-strong);
  }
  @media (min-width: 640px) {
    .ct-map-info { padding: 30px 32px 32px; }
  }
  @media (min-width: 900px) {
    .ct-map-info { border-right: 1px solid var(--border-strong); border-bottom: none; padding: 36px 32px 40px 40px; }
  }

  .ct-map-eyebrow {
    display: inline-flex; align-items: center; gap: 8px; align-self: flex-start;
    font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
    color: var(--steel);
    margin-bottom: 14px;
  }
  .ct-map-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--steel); flex-shrink: 0; }

  .ct-map-title {
    font-family: var(--font-display);
    font-size: 21px; font-weight: 600;
    color: var(--text-1); letter-spacing: -0.2px;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  @media (min-width: 640px) {
    .ct-map-title { font-size: 23px; margin-bottom: 14px; }
  }

  .ct-map-company {
    font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
    color: var(--accent-dark);
    margin-bottom: 8px;
  }

  .ct-map-address {
    font-size: 13.5px; font-weight: 500; line-height: 1.7;
    color: var(--text-2);
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(231,223,208,0.7);
  }
  @media (min-width: 640px) {
    .ct-map-address { font-size: 14px; margin-bottom: 24px; padding-bottom: 24px; }
  }

  .ct-map-meta-row {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 11px 0;
  }
  .ct-map-meta-icon {
    width: 34px; height: 34px; border-radius: 10px;
    background: var(--surface);
    border: 1px solid var(--border-strong);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 1px 2px rgba(32,28,22,0.05);
  }
  .ct-map-meta-text { display: flex; flex-direction: column; gap: 2px; padding-top: 3px; }
  .ct-map-meta-label {
    font-size: 10.5px; letter-spacing: 1.3px; text-transform: uppercase;
    color: var(--text-3); font-weight: 700;
  }
  .ct-map-meta-value { font-size: 13.5px; font-weight: 600; color: var(--text-1); line-height: 1.4; }

  .ct-map-directions-btn {
    display: flex; align-items: center; justify-content: center; gap: 10px;
    width: 100%; padding: 14px 18px; margin-top: 18px;
    background: var(--surface);
    color: var(--text-1);
    border: 1.5px solid var(--border-strong); border-radius: var(--radius-md); cursor: pointer;
    font-family: var(--font-body);
    font-size: 13px; font-weight: 700;
    letter-spacing: 0.2px;
    text-decoration: none;
    transition: border-color 0.2s, background 0.2s, transform 0.15s;
  }
  @media (min-width: 640px) {
    .ct-map-directions-btn { padding: 15px 20px; margin-top: 22px; font-size: 13.5px; }
  }
  .ct-map-directions-btn:hover { border-color: var(--steel); background: var(--steel-tint); transform: translateY(-1px); }
  .ct-map-directions-btn:active { transform: translateY(0); }

  .ct-map-frame-wrap {
    position: relative;
    min-height: 280px;
    background: var(--surface-sunk);
  }
  @media (min-width: 640px) {
    .ct-map-frame-wrap { min-height: 340px; }
  }
  @media (min-width: 900px) {
    .ct-map-frame-wrap { min-height: 100%; }
  }

  .ct-map-frame-wrap::after {
    content: '';
    position: absolute; inset: 0;
    box-shadow: inset 0 0 0 1px rgba(32,28,22,0.06);
    pointer-events: none;
    z-index: 2;
  }

  .ct-map-iframe {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    border: 0;
    filter: grayscale(0.28) sepia(0.12) saturate(1.05) contrast(1.02);
  }

  .ct-map-pin-card {
    position: absolute;
    left: 14px; bottom: 14px;
    right: 14px;
    z-index: 3;
    display: flex; align-items: center; gap: 10px;
    padding: 12px 14px;
    background: rgba(254,253,251,0.92);
    backdrop-filter: blur(6px);
    border: 1px solid var(--border-strong);
    border-radius: var(--radius-sm);
    box-shadow: 0 10px 28px -12px rgba(32,28,22,0.28);
  }
  @media (min-width: 480px) {
    .ct-map-pin-card { right: auto; max-width: 280px; left: 16px; bottom: 16px; }
  }

  .ct-map-pin-icon {
    width: 30px; height: 30px; border-radius: 8px;
    background: var(--accent);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 10px -4px rgba(232,120,23,0.5);
  }
  .ct-map-pin-text { display: flex; flex-direction: column; gap: 1px; min-width: 0; }
  .ct-map-pin-title { font-size: 12px; font-weight: 700; color: var(--text-1); }
  .ct-map-pin-sub { font-size: 10.5px; font-weight: 500; color: var(--text-3); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

  .ct-footer-strip {
    max-width: 1200px; margin: 24px auto 0;
    padding: 18px 4px 0;
    border-top: 1px solid var(--border);
    display: flex; flex-direction: column; align-items: flex-start;
    gap: 12px;
    position: relative;
    z-index: 2;
  }
  @media (min-width: 640px) {
    .ct-footer-strip { margin: 32px auto 0; padding: 20px 4px 0; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; }
  }
  .ct-footer-copy {
    font-size: 11.5px; color: var(--text-3); font-weight: 500;
  }
  @media (min-width: 640px) {
    .ct-footer-copy { font-size: 12px; }
  }
  .ct-footer-links { display: flex; gap: 16px; flex-wrap: wrap; }
  @media (min-width: 640px) {
    .ct-footer-links { gap: 20px; }
  }
  .ct-footer-link {
    font-size: 11.5px; color: var(--text-3); text-decoration: none;
    font-weight: 600;
    transition: color 0.2s;
  }
  @media (min-width: 640px) {
    .ct-footer-link { font-size: 12px; }
  }
  .ct-footer-link:hover { color: var(--accent); }

  @keyframes spin { to { transform: rotate(360deg); } }
`,Ar=`SUNTECH AND ALLIED INDUSTRIES, Gate no. 170, Near Huma Bakery, Ganesh Nagar, Talawade, Pimpri Chinchwad, Pune - 411062`,jr=`https://www.google.com/maps?q=${encodeURIComponent(Ar)}&output=embed`,Mr=`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(Ar)}`;function Nr(){let[e,t]=(0,b.useState)(Or),[n,r]=(0,b.useState)(``),[i,a]=(0,b.useState)(!1),o=e=>n=>t(t=>({...t,[e]:n.target.value})),s=()=>{let e=document.createElement(`a`);e.href=`/suntech_brochure.pdf`,e.download=`suntech_brochure.pdf`,e.target=`_blank`,document.body.appendChild(e),e.click(),document.body.removeChild(e)},c=async n=>{if(n.preventDefault(),!i){a(!0),r(``);try{let n=await fetch(`/api/brochure-lead`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:e.name.trim(),email:e.email.trim(),phone:e.phone.trim(),message:e.message.trim(),source:`Contact page`})});if(!n.ok){let e=await n.json().catch(()=>({}));throw Error(e.error||`Unable to send message. Please try again.`)}r(`Message sent. Your brochure download will begin shortly.`),s(),t(Or)}catch(e){r(e.message||`Failed to send message. Please try again.`)}finally{a(!1),window.setTimeout(()=>r(``),4e3)}}},l=e.message.length;return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:kr}),(0,N.jsx)(`div`,{className:`ct`,children:(0,N.jsxs)(`main`,{className:`ct-page`,children:[(0,N.jsxs)(`div`,{className:`ct-panel`,children:[(0,N.jsx)(`div`,{className:`ct-machine-bg`}),(0,N.jsx)(`div`,{className:`ct-watermark`}),(0,N.jsx)(`span`,{className:`ct-corner tl`}),(0,N.jsx)(`span`,{className:`ct-corner br`}),(0,N.jsxs)(`section`,{className:`ct-hero`,children:[(0,N.jsxs)(`div`,{className:`ct-hero-inner`,children:[(0,N.jsx)(`span`,{className:`ct-hero-eyebrow`,children:`GET IN TOUCH`}),(0,N.jsxs)(`h1`,{className:`ct-hero-title`,children:[`Let's build your`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{children:`perfect solution`})]}),(0,N.jsx)(`p`,{className:`ct-hero-sub`,children:`Tell us your packaging requirements — we engineer machines to match every production demand.`}),(0,N.jsxs)(`div`,{className:`ct-hero-stats`,children:[(0,N.jsxs)(`div`,{className:`ct-stat`,children:[(0,N.jsx)(`strong`,{children:`500+`}),`machines delivered`]}),(0,N.jsxs)(`div`,{className:`ct-stat`,children:[(0,N.jsx)(`strong`,{children:`24hr`}),`response time`]}),(0,N.jsxs)(`div`,{className:`ct-stat`,children:[(0,N.jsx)(`strong`,{children:`Pan India`}),`service`]})]})]}),(0,N.jsx)(`div`,{className:`ct-hero-visual`,children:(0,N.jsx)(`div`,{className:`ct-hero-visual-fade`})})]}),(0,N.jsx)(`div`,{className:`ct-divider`}),(0,N.jsxs)(`div`,{className:`ct-body`,children:[(0,N.jsxs)(`aside`,{className:`ct-info`,children:[(0,N.jsxs)(`div`,{className:`ct-info-tag`,children:[(0,N.jsx)(`span`,{className:`ct-info-tag-dot`}),(0,N.jsx)(`span`,{children:`MAHARASHTRA, INDIA`})]}),(0,N.jsxs)(`div`,{className:`ct-info-row`,children:[(0,N.jsx)(`span`,{className:`ct-info-icon`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#E87817`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:(0,N.jsx)(`path`,{d:`M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.72 11.72 0 003.7.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.23 1.11l-2.24 2.24z`})})}),(0,N.jsxs)(`div`,{className:`ct-info-text`,children:[(0,N.jsx)(`span`,{className:`ct-info-label`,children:`Phone`}),(0,N.jsx)(`a`,{href:`tel:+918975091999`,className:`ct-info-value`,children:`+91 89750 91999`})]})]}),(0,N.jsxs)(`div`,{className:`ct-info-row`,children:[(0,N.jsx)(`span`,{className:`ct-info-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#E87817`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M22 6l-10 7L2 6`}),(0,N.jsx)(`path`,{d:`M2 6h20v12H2z`})]})}),(0,N.jsxs)(`div`,{className:`ct-info-text`,children:[(0,N.jsx)(`span`,{className:`ct-info-label`,children:`Email`}),(0,N.jsx)(`a`,{href:`mailto:info@suntech.com`,className:`ct-info-value`,children:`info@suntech.com`})]})]}),(0,N.jsxs)(`div`,{className:`ct-info-row`,children:[(0,N.jsx)(`span`,{className:`ct-info-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#E87817`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9.5`,r:`2.2`})]})}),(0,N.jsxs)(`div`,{className:`ct-info-text`,children:[(0,N.jsx)(`span`,{className:`ct-info-label`,children:`Address`}),(0,N.jsx)(`span`,{className:`ct-info-value`,children:`Talawade, Pimpri Chinchwad, Pune`})]})]}),(0,N.jsxs)(`div`,{className:`ct-info-row`,children:[(0,N.jsx)(`span`,{className:`ct-info-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#E87817`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,N.jsx)(`path`,{d:`M12 7v5l3.5 2`})]})}),(0,N.jsxs)(`div`,{className:`ct-info-text`,children:[(0,N.jsx)(`span`,{className:`ct-info-label`,children:`Working Hours`}),(0,N.jsx)(`span`,{className:`ct-info-value`,children:`Mon – Sat · 9 AM – 7 PM`})]})]}),(0,N.jsxs)(`a`,{href:`tel:+918975091999`,className:`ct-cta-btn`,children:[(0,N.jsx)(`span`,{className:`ct-cta-icon`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#ffffff`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M6.62 10.79a15.464 15.464 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.23 11.72 11.72 0 003.7.59 1 1 0 011 1v3.5a1 1 0 01-1 1A17 17 0 013 6a1 1 0 011-1h3.5a1 1 0 011 1 11.72 11.72 0 00.59 3.7 1 1 0 01-.23 1.11l-2.24 2.24z`})})}),`Call Sales`,(0,N.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`rgba(255,255,255,0.7)`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`14`,height:`14`,style:{marginLeft:`auto`},children:(0,N.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`})})]})]}),(0,N.jsxs)(`section`,{className:`ct-form-card`,children:[(0,N.jsxs)(`div`,{className:`ct-form-header`,children:[(0,N.jsx)(`div`,{className:`ct-form-header-icon`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#5B7C99`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:(0,N.jsx)(`path`,{d:`M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z`})})}),(0,N.jsxs)(`div`,{className:`ct-form-header-text`,children:[(0,N.jsx)(`h2`,{children:`Send us a message`}),(0,N.jsx)(`p`,{children:`We'll get back to you within 24 hours`})]})]}),(0,N.jsxs)(`form`,{onSubmit:c,children:[(0,N.jsxs)(`div`,{className:`ct-field-row`,children:[(0,N.jsxs)(`div`,{className:`ct-field`,children:[(0,N.jsxs)(`label`,{className:`ct-label`,children:[`Name `,(0,N.jsx)(`span`,{className:`ct-required`,children:`*`})]}),(0,N.jsx)(`input`,{type:`text`,value:e.name,onChange:o(`name`),required:!0,className:`ct-input`,placeholder:`Your full name`})]}),(0,N.jsxs)(`div`,{className:`ct-field`,children:[(0,N.jsxs)(`label`,{className:`ct-label`,children:[`Email `,(0,N.jsx)(`span`,{className:`ct-required`,children:`*`})]}),(0,N.jsx)(`input`,{type:`email`,value:e.email,onChange:o(`email`),required:!0,className:`ct-input`,placeholder:`you@company.com`})]})]}),(0,N.jsxs)(`div`,{className:`ct-field`,style:{marginBottom:`14px`},children:[(0,N.jsx)(`label`,{className:`ct-label`,children:`Phone`}),(0,N.jsx)(`input`,{type:`tel`,value:e.phone,onChange:o(`phone`),className:`ct-input`,placeholder:`+91 89750 91999`})]}),(0,N.jsxs)(`div`,{className:`ct-field`,style:{marginBottom:`4px`},children:[(0,N.jsx)(`label`,{className:`ct-label`,children:`Message`}),(0,N.jsx)(`textarea`,{value:e.message,onChange:o(`message`),className:`ct-textarea`,placeholder:`Tell us about your machine requirements, production capacity, or any questions…`,maxLength:500}),(0,N.jsxs)(`span`,{className:`ct-char-count`,children:[l,` / 500`]})]}),(0,N.jsxs)(`div`,{className:`ct-brochure-hint`,children:[(0,N.jsx)(`span`,{className:`ct-brochure-hint-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#5B7C99`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`18`,height:`18`,children:[(0,N.jsx)(`path`,{d:`M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`}),(0,N.jsx)(`polyline`,{points:`14 2 14 8 20 8`}),(0,N.jsx)(`line`,{x1:`12`,y1:`18`,x2:`12`,y2:`12`}),(0,N.jsx)(`line`,{x1:`9`,y1:`15`,x2:`15`,y2:`15`})]})}),(0,N.jsxs)(`p`,{className:`ct-brochure-hint-text`,children:[(0,N.jsx)(`strong`,{children:`Free Brochure —`}),` Submit the form and our product brochure will download automatically.`]})]}),(0,N.jsx)(`button`,{type:`submit`,className:`ct-submit`,disabled:i,children:i?(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,width:`18`,height:`18`,style:{animation:`spin 1s linear infinite`},children:(0,N.jsx)(`path`,{d:`M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83`})}),`Sending message...`]}):(0,N.jsxs)(N.Fragment,{children:[`Send Message & Download Brochure`,(0,N.jsx)(`span`,{className:`ct-submit-arrow`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`})})})]})}),(0,N.jsxs)(`div`,{className:`ct-trust`,children:[(0,N.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M8 1l1.85 3.75L14 5.5l-3 2.92.71 4.12L8 10.5l-3.71 1.95.71-4.12L2 5.5l4.15-.75z`})}),`Your information is private and will only be used to contact you`]})]})]})]}),(0,N.jsx)(`div`,{className:`ct-divider`}),(0,N.jsxs)(`div`,{className:`ct-map`,children:[(0,N.jsxs)(`aside`,{className:`ct-map-info`,children:[(0,N.jsxs)(`span`,{className:`ct-map-eyebrow`,children:[(0,N.jsx)(`span`,{className:`ct-map-eyebrow-dot`}),`FIND US`]}),(0,N.jsx)(`h2`,{className:`ct-map-title`,children:`Visit our facility`}),(0,N.jsxs)(`div`,{className:`ct-map-address`,children:[(0,N.jsx)(`div`,{className:`ct-map-company`,children:`Suntech and Allied Industries`}),`Gate no. 170, Near Huma Bakery, Ganesh Nagar,`,(0,N.jsx)(`br`,{}),`Talawade, Pimpri Chinchwad, Pune – 411062`]}),(0,N.jsxs)(`div`,{className:`ct-map-meta-row`,children:[(0,N.jsx)(`span`,{className:`ct-map-meta-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#5B7C99`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9.5`,r:`2.2`})]})}),(0,N.jsxs)(`div`,{className:`ct-map-meta-text`,children:[(0,N.jsx)(`span`,{className:`ct-map-meta-label`,children:`Landmark`}),(0,N.jsx)(`span`,{className:`ct-map-meta-value`,children:`Near Huma Bakery, Talawade`})]})]}),(0,N.jsxs)(`div`,{className:`ct-map-meta-row`,children:[(0,N.jsx)(`span`,{className:`ct-map-meta-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#5B7C99`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`16`,height:`16`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`11`,width:`18`,height:`7`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M5 11l1.5-5h11L19 11`}),(0,N.jsx)(`circle`,{cx:`7.5`,cy:`18`,r:`1.5`}),(0,N.jsx)(`circle`,{cx:`16.5`,cy:`18`,r:`1.5`})]})}),(0,N.jsxs)(`div`,{className:`ct-map-meta-text`,children:[(0,N.jsx)(`span`,{className:`ct-map-meta-label`,children:`Area`}),(0,N.jsx)(`span`,{className:`ct-map-meta-value`,children:`Pimpri Chinchwad, Pune`})]})]}),(0,N.jsxs)(`a`,{href:Mr,target:`_blank`,rel:`noopener noreferrer`,className:`ct-map-directions-btn`,children:[`Get Directions`,(0,N.jsx)(`svg`,{viewBox:`0 0 16 16`,fill:`none`,stroke:`#5B7C99`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`14`,height:`14`,style:{marginLeft:`auto`},children:(0,N.jsx)(`path`,{d:`M3 8h10M9 4l4 4-4 4`})})]})]}),(0,N.jsxs)(`div`,{className:`ct-map-frame-wrap`,children:[(0,N.jsx)(`iframe`,{className:`ct-map-iframe`,src:jr,title:`Suntech and Allied Industries location map`,loading:`lazy`,referrerPolicy:`no-referrer-when-downgrade`,allowFullScreen:!0}),(0,N.jsxs)(`div`,{className:`ct-map-pin-card`,children:[(0,N.jsx)(`span`,{className:`ct-map-pin-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#ffffff`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`15`,height:`15`,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-11.5A7 7 0 005 9.5C5 14.5 12 21 12 21z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9.5`,r:`2.2`})]})}),(0,N.jsxs)(`div`,{className:`ct-map-pin-text`,children:[(0,N.jsx)(`span`,{className:`ct-map-pin-title`,children:`Suntech and Allied Industries`}),(0,N.jsx)(`span`,{className:`ct-map-pin-sub`,children:`Talawade, Pune – 411062`})]})]})]})]})]}),(0,N.jsxs)(`div`,{className:`ct-footer-strip`,children:[(0,N.jsx)(`span`,{className:`ct-footer-copy`,children:`© 2025 SunTech Machines. All rights reserved.`}),(0,N.jsxs)(`div`,{className:`ct-footer-links`,children:[(0,N.jsx)(`a`,{href:`/about`,className:`ct-footer-link`,children:`About`}),(0,N.jsx)(`a`,{href:`/solutions`,className:`ct-footer-link`,children:`Solutions`}),(0,N.jsx)(`a`,{href:`/applications`,className:`ct-footer-link`,children:`Applications`})]})]})]})}),n&&(0,N.jsxs)(`div`,{className:`ct-toast`,children:[(0,N.jsx)(`div`,{style:{width:8,height:8,borderRadius:`50%`,background:`#E87817`,flexShrink:0}}),n]})]})}var Pr=`#e8590c`,Fr=[{value:`740+`,label:`Installs`,icon:`box`},{value:`15+`,label:`Cities`,icon:`pin`},{value:`99%`,label:`Uptime`,icon:`clock`},{value:`24/7`,label:`Support`,icon:`headset`}],Ir=[{label:`Food & Beverage`,icon:`food`},{label:`Pharmaceuticals`,icon:`pharma`},{label:`Chemicals`,icon:`chem`},{label:`FMCG`,icon:`fmcg`},{label:`Cosmetics`,icon:`cosmetics`},{label:`Agro Products`,icon:`agro`},{label:`Electronics`,icon:`electronics`}];function Lr({type:e}){let t={width:20,height:20,viewBox:`0 0 24 24`,fill:`none`,stroke:Pr,strokeWidth:1.6,strokeLinecap:`round`,strokeLinejoin:`round`};switch(e){case`box`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M3 8l9-5 9 5-9 5-9-5z`}),(0,N.jsx)(`path`,{d:`M3 8v8l9 5 9-5V8`}),(0,N.jsx)(`path`,{d:`M12 13v8`})]});case`pin`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9.5`,r:`2.3`})]});case`clock`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,N.jsx)(`path`,{d:`M12 7v5l3.5 2`})]});case`headset`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M4 13v-1a8 8 0 0116 0v1`}),(0,N.jsx)(`rect`,{x:`2.5`,y:`13`,width:`4`,height:`6`,rx:`1.5`}),(0,N.jsx)(`rect`,{x:`17.5`,y:`13`,width:`4`,height:`6`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M20 19a4 4 0 01-4 4h-2`})]});default:return null}}function Rr({type:e}){let t={width:26,height:26,viewBox:`0 0 24 24`,fill:`none`,stroke:`#78716c`,strokeWidth:1.4,strokeLinecap:`round`,strokeLinejoin:`round`};switch(e){case`food`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M6 3v6a2 2 0 002 2h0a2 2 0 002-2V3`}),(0,N.jsx)(`path`,{d:`M8 11v10`}),(0,N.jsx)(`path`,{d:`M16 3c-1.5 0-2.5 1.5-2.5 4s1 4 2.5 4V21`})]});case`pharma`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`rect`,{x:`5`,y:`9`,width:`14`,height:`10`,rx:`5`,transform:`rotate(-45 12 12)`}),(0,N.jsx)(`path`,{d:`M8.5 15.5l7-7`})]});case`chem`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M9 3h6`}),(0,N.jsx)(`path`,{d:`M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3`}),(0,N.jsx)(`path`,{d:`M7.5 15h9`})]});case`fmcg`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M6 8h12l-1 12H7z`}),(0,N.jsx)(`path`,{d:`M9 8V6a3 3 0 016 0v2`})]});case`cosmetics`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`rect`,{x:`7`,y:`8`,width:`4`,height:`12`,rx:`1`}),(0,N.jsx)(`path`,{d:`M8 8V5a1 1 0 011-1h0a1 1 0 011 1v3`}),(0,N.jsx)(`rect`,{x:`13`,y:`4`,width:`4`,height:`16`,rx:`1`})]});case`agro`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`path`,{d:`M12 21V9`}),(0,N.jsx)(`path`,{d:`M12 9c0-4 3-7 7-7 0 4-3 7-7 7z`}),(0,N.jsx)(`path`,{d:`M12 13c0-3-2.5-5-6-5 0 3 2.5 5 6 5z`})]});case`electronics`:return(0,N.jsxs)(`svg`,{...t,children:[(0,N.jsx)(`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`2`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,N.jsx)(`path`,{d:`M12 4v2M12 18v2M4 12h2M18 12h2`})]});default:return null}}function zr(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .hero-root * { box-sizing: border-box; }

        .hero-root {
          position: relative;
          width: 100%;
          background: var(--champagne);
          font-family: var(--font-body);
          overflow: hidden;
          margin-bottom: 28px;
        }

        @media (min-width: 768px) {
          .hero-root { margin-bottom: 56px; }
        }

        @media (min-width: 1024px) {
          .hero-root { margin-bottom: 72px; }
        }

        .hero-flex {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: 1500px;
          margin: 0 auto;
        }

        /* ===================================================== */
        /* MOBILE / DEFAULT: map is the first thing, full-width,  */
        /* with the title overlaid directly on it. Everything     */
        /* else (description, buttons, stats) sits below it in    */
        /* normal flow, outside the image.                        */
        /* ===================================================== */

        .hero-map-col {
          position: relative;
          width: 100%;
          order: 1;
        }

        .hero-map-frame {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: var(--champagne);
          isolation: isolate; /* contain the blend mode below to just this box */
        }

        /* wrapper contains the image; its own background matches the
           page so the blend mode below has the right color to mix into */
        .hero-map-img-wrap {
          position: relative;
          overflow: hidden;
          line-height: 0;
          background: var(--champagne);
        }

        .hero-map-img {
          display: block;
          width: 100%;
          height: auto; /* natural aspect ratio — never cropped */
          /* the PNG's own flat white/grey canvas "multiplies away" into
             the champagne backdrop behind it, so there's no visible
             rectangle — only the map/machine artwork stays visible,
             sitting directly on the page color. This removes the boxed
             look everywhere, not just at the edges.                    */
          mix-blend-mode: multiply;
        }

        /* extra soft fade right at the physical edges as a safety net,
           in case the source PNG's canvas isn't perfectly pure white   */
        .hero-map-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          pointer-events: none;
          box-shadow:
            inset 0 14px 14px -10px var(--champagne),
            inset 0 -14px 14px -10px var(--champagne);
        }

        /* darken gradient so the overlaid title stays readable on mobile */
        .hero-map-scrim {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(20,16,10,0.12) 0%, rgba(20,16,10,0.08) 40%, rgba(20,16,10,0.4) 72%, rgba(20,16,10,0.62) 100%);
          pointer-events: none;
        }

        /* title + eyebrow, overlaid on top of the map — anchored toward
           the bottom of the image on mobile so the map artwork itself
           stays visible up top, with the title sitting just above the
           description copy that follows underneath the image */
        .hero-map-overlay-text {
          position: absolute;
          left: 0; right: 0; bottom: 0;
          padding: 16px 16px 18px;
          z-index: 3;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #ffb37a;
          margin-bottom: 8px;
        }
        .hero-eyebrow::before { content: ''; width: 14px; height: 2px; background: #ffb37a; display: inline-block; }

        .hero-title {
          font-size: clamp(19px, 6.2vw, 26px);
          font-weight: 900;
          line-height: 1.14;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          color: #ffffff;
          text-shadow: 0 2px 10px rgba(0,0,0,0.4);
        }
        .hero-title .accent { color: #ff9d54; }

        /* top-right "serving" tag over the image */
        .hero-serving-tag {
          position: absolute;
          top: 4%;
          right: 4%;
          z-index: 3;
          text-align: right;
          font-size: 10.5px;
          font-weight: 800;
          line-height: 1.3;
          color: #1c1917;
          text-transform: uppercase;
          background: rgba(255,255,255,0.88);
          padding: 6px 9px;
          border-radius: 6px;
          max-width: 44%;
        }
        .hero-serving-tag .accent { color: ${Pr}; }
        .hero-serving-rule {
          width: 18px; height: 2px; background: ${Pr};
          margin: 6px 0 0 auto;
        }

        /* city markers, positioned relative to hero-map-frame */
        .hero-city-marker {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          transform: translate(0, -50%);
          z-index: 2;
        }
        .hero-city-dot {
          width: 8px; height: 8px; border-radius: 50%;
          background: ${Pr};
          border: 2px solid #ffffff;
          box-shadow: 0 0 0 3px rgba(232,89,12,0.18);
          flex-shrink: 0;
        }
        .hero-city-pill {
          background: rgba(255,255,255,0.92);
          border-radius: 5px;
          padding: 3px 8px;
          font-size: 11px;
          font-weight: 700;
          color: #3a3733;
          white-space: nowrap;
        }

        /* ── TEXT COLUMN (below the map on mobile) ── */
        .hero-text-col {
          order: 2;
          max-width: 560px;
          width: 100%;
          padding: 16px 16px 24px;
        }

        /* the eyebrow/title duplicated here for desktop only — hidden on mobile */
        .hero-text-col .hero-eyebrow,
        .hero-text-col .hero-title {
          display: none;
        }

        .hero-desc {
          font-size: 13.5px;
          line-height: 1.65;
          color: var(--text-2);
          font-weight: 500;
          margin-bottom: 16px;
          max-width: 34em;
        }

        .hero-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 18px;
        }

        .hero-btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 15px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: ${Pr};
          color: #ffffff;
          box-shadow: 0 8px 18px -8px rgba(232, 89, 12, 0.5);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 22px -8px rgba(232, 89, 12, 0.55); }

        .hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 9px 15px;
          border-radius: 7px;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          text-decoration: none;
          background: #ffffff;
          color: #1c1917;
          border: 1px solid #e7ddc9;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .hero-btn-secondary:hover { background: #fdf6ee; border-color: ${Pr}; }

        /* floating stats card */
        .hero-stats-card {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 12px;
          box-shadow: 0 16px 32px -18px rgba(28,25,23,0.18);
          max-width: 620px;
          overflow: hidden;
        }
        .hero-stat {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 12px;
          border-right: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          min-width: 0;
        }
        .hero-stat svg { flex-shrink: 0; width: 17px; height: 17px; }
        .hero-stat-value { font-size: 16px; font-weight: 800; color: #1c1917; line-height: 1; }
        .hero-stat-label { font-size: 9.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: #a8896a; margin-top: 2px; white-space: nowrap; }

        /* ── SMALL MOBILE (very small phones) ── */
        @media (max-width: 380px) {
          .hero-serving-tag { font-size: 9px; padding: 5px 7px; top: 3%; right: 3%; }
          .hero-serving-rule { width: 14px; }
          .hero-stat-label { font-size: 8.5px; }
          .hero-stat-value { font-size: 14px; }
          .hero-title { font-size: clamp(17px, 5.8vw, 22px); }
          .hero-btn-primary, .hero-btn-secondary { padding: 8px 13px; font-size: 10px; }
        }

        /* ── TABLET ── */
        @media (min-width: 640px) {
          .hero-serving-tag { font-size: 13px; padding: 8px 12px; }
          .hero-serving-rule { width: 22px; }
          .hero-map-overlay-text { padding: 24px 24px 26px; }
        }

        /* ===================================================== */
        /* DESKTOP: revert to side-by-side. Map on the right,     */
        /* full text block (eyebrow + title + desc + ctas +       */
        /* stats) on the left, nothing overlaid on the image.     */
        /* Image edges fade on ALL sides into the page background */
        /* so it reads as one continuous surface, not a card.     */
        /* ===================================================== */
        @media (min-width: 960px) {
          .hero-flex {
            flex-direction: row;
            align-items: center;
            padding: 56px 32px 64px;
            gap: 16px;
          }

          .hero-map-col { order: 2; flex: 1; }
          .hero-text-col {
            order: 1;
            flex: 0 0 38%;
            max-width: 460px;
            padding: 0;
          }

          /* on desktop the title lives in the text column, not on the image —
             hide the mobile-only dark scrim too, it has no reason to exist
             once the title isn't overlaid on the photo anymore */
          .hero-map-overlay-text { display: none; }
          .hero-map-scrim { display: none; }

          .hero-text-col .hero-eyebrow,
          .hero-text-col .hero-title {
            display: block;
          }
          .hero-text-col .hero-eyebrow { font-size: 12px; margin-bottom: 18px; color: ${Pr}; }
          .hero-text-col .hero-eyebrow::before { background: ${Pr}; }
          .hero-text-col .hero-title {
            font-size: clamp(32px, 4.4vw, 50px);
            margin-bottom: 18px;
            color: var(--text-1);
            text-shadow: none;
          }
          .hero-text-col .hero-title .accent { color: var(--accent); }

          .hero-desc { font-size: 15px; margin-bottom: 26px; }
          .hero-ctas { gap: 12px; margin-bottom: 24px; }
          .hero-btn-primary, .hero-btn-secondary { padding: 14px 24px; font-size: 13.5px; }
          .hero-stat { padding: 16px 18px; gap: 10px; }
          .hero-stat-value { font-size: 19px; }
          .hero-stat-label { font-size: 10.5px; }
          .hero-serving-tag { background: transparent; padding: 0; max-width: none; font-size: 15px; }

          /* no rounded card corners + all-round vignette so the image
             dissolves into the surrounding page instead of sitting in
             a visibly separate box */
          .hero-map-frame { border-radius: 0; }
          .hero-map-img-wrap::after {
            box-shadow: inset 0 0 60px 36px var(--champagne);
          }
        }

        /* ===================================================== */
        /* TRUSTED-BY-INDUSTRIES BAR — professional, centered,    */
        /* fully mobile responsive.                                */
        /* ===================================================== */
        .hero-trust-bar {
          position: relative;
          z-index: 2;
          background: linear-gradient(180deg, #ffffff 0%, #fefbf7 100%);
          border-top: 1px solid #f0e2cf;
          border-bottom: 1px solid #f0e2cf;
          padding: 26px 16px;
          margin-bottom: 28px;
          box-shadow: 0 1px 0 rgba(28, 25, 23, 0.02);
        }
        @media (min-width: 768px) {
          .hero-trust-bar { padding: 32px 24px; margin-bottom: 54px; }
        }
        @media (min-width: 1024px) {
          .hero-trust-bar { padding: 36px 24px; margin-bottom: 72px; }
        }

        .hero-trust-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          text-align: center;
        }

        .hero-trust-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .hero-trust-icon {
          width: 40px; height: 40px; border-radius: 50%;
          background: linear-gradient(135deg, ${Pr} 0%, #d14e08 100%);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 8px 16px -6px rgba(232, 89, 12, 0.45);
        }
        .hero-trust-icon svg { width: 18px; height: 18px; }
        .hero-trust-label-text {
          font-size: 12.5px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1.35;
          letter-spacing: 0.01em;
        }

        .hero-trust-divider {
          width: 42px;
          height: 1px;
          background: linear-gradient(90deg, transparent, #e7ddc9, transparent);
        }

        .hero-industries {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px 6px;
        }
        .hero-industry {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          font-size: 10px;
          font-weight: 600;
          color: #57534e;
          text-align: center;
          min-width: 66px;
          padding: 10px 8px 9px;
          border-radius: 10px;
          border: 1px solid transparent;
          transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
        }
        .hero-industry:hover {
          background: #fdf6ee;
          border-color: #f0e2cf;
          transform: translateY(-3px);
        }
        .hero-industry svg { width: 21px; height: 21px; }

        @media (min-width: 640px) {
          .hero-trust-inner { flex-direction: row; gap: 26px; }
          .hero-trust-label {
            flex-direction: row;
            gap: 12px;
            padding-right: 24px;
            border-right: 1px solid #ece5da;
          }
          .hero-trust-divider { display: none; }
          .hero-trust-icon { width: 44px; height: 44px; }
          .hero-trust-icon svg { width: 20px; height: 20px; }
          .hero-trust-label-text { font-size: 13.5px; text-align: left; }
          .hero-industries { gap: 6px 10px; }
          .hero-industry { font-size: 11.5px; min-width: 80px; gap: 7px; padding: 12px 10px 10px; }
          .hero-industry svg { width: 25px; height: 25px; }
        }

        @media (min-width: 1024px) {
          .hero-trust-inner { gap: 32px; }
          .hero-trust-label { padding-right: 30px; }
          .hero-industries { gap: 8px 14px; }
        }
      `}),(0,N.jsx)(`div`,{className:`hero-root`,children:(0,N.jsxs)(`div`,{className:`hero-flex`,children:[(0,N.jsx)(`div`,{className:`hero-map-col`,children:(0,N.jsxs)(`div`,{className:`hero-map-frame`,children:[(0,N.jsx)(`div`,{className:`hero-map-img-wrap`,children:(0,N.jsx)(`img`,{className:`hero-map-img`,src:`/Map_bg.png`,alt:`Map of India showing Suntech installation cities`})}),(0,N.jsx)(`div`,{className:`hero-map-scrim`}),(0,N.jsx)(`div`,{className:`hero-map-overlay-text`,children:(0,N.jsxs)(`h1`,{className:`hero-title`,children:[`Engineering `,(0,N.jsx)(`span`,{className:`accent`,children:`Precision.`}),(0,N.jsx)(`br`,{}),`Delivering `,(0,N.jsx)(`span`,{className:`accent`,children:`Performance.`})]})})]})}),(0,N.jsxs)(`div`,{className:`hero-text-col`,children:[(0,N.jsxs)(`h1`,{className:`hero-title`,children:[`Engineering`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`accent`,children:`Precision.`}),(0,N.jsx)(`br`,{}),`Delivering`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`accent`,children:`Performance.`})]}),(0,N.jsx)(`p`,{className:`hero-desc`,children:`High-performance packaging machines built for speed, accuracy, and long-term reliability. Trusted by manufacturers across 15+ major cities in India.`}),(0,N.jsxs)(`div`,{className:`hero-ctas`,children:[(0,N.jsx)(`a`,{href:`/machines`,className:`hero-btn-primary`,children:`Explore machines →`}),(0,N.jsx)(`a`,{href:`/contact`,className:`hero-btn-secondary`,children:`Request a quote`})]}),(0,N.jsx)(`div`,{className:`hero-stats-card`,children:Fr.map(e=>(0,N.jsxs)(`div`,{className:`hero-stat`,children:[(0,N.jsx)(Lr,{type:e.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`hero-stat-value`,children:e.value}),(0,N.jsx)(`div`,{className:`hero-stat-label`,children:e.label})]})]},e.label))})]})]})}),(0,N.jsx)(`div`,{className:`hero-trust-bar`,children:(0,N.jsxs)(`div`,{className:`hero-trust-inner`,children:[(0,N.jsxs)(`div`,{className:`hero-trust-label`,children:[(0,N.jsx)(`div`,{className:`hero-trust-icon`,children:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M12 3l7 3v6c0 4.8-3 8.4-7 9-4-0.6-7-4.2-7-9V6z`,stroke:`#fff`,strokeWidth:`1.8`}),(0,N.jsx)(`path`,{d:`M9 12l2 2 4-4`,stroke:`#fff`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,N.jsxs)(`div`,{className:`hero-trust-label-text`,children:[`Trusted by`,(0,N.jsx)(`br`,{}),`Leading Industries`]})]}),(0,N.jsx)(`div`,{className:`hero-trust-divider`}),(0,N.jsx)(`div`,{className:`hero-industries`,children:Ir.map(e=>(0,N.jsxs)(`div`,{className:`hero-industry`,children:[(0,N.jsx)(Rr,{type:e.icon}),e.label]},e.label))})]})})]})}var Br=[{id:1,badge:`High Performance. Maximum Reliability.`,titleLine1:`VFFS PACKAGING`,titleHighlight:`MACHINE`,description:`Engineered for high-speed vertical form-fill-seal operations, delivering precision packaging at up to 200 packs per minute with minimal waste and maximum uptime.`,image:`/Machines/Multi-Head VFFS Packaging Machine.png`,thumbnail:`/Machines/Multi-Head VFFS Packaging Machine.png`},{id:2,badge:`Durable Seals. Extended Shelf Life.`,titleLine1:`SEALING`,titleHighlight:`MACHINE`,description:`Advanced heat sealing technology ensuring consistent airtight seals across diverse packaging materials, built for continuous industrial operation.`,image:`/Machines/Pick Fill seal Machine.png`,thumbnail:`/Machines/Pick Fill seal Machine.png`},{id:3,badge:`Precision Filling. Zero Spillage.`,titleLine1:`AUGER FILLER`,titleHighlight:`MACHINE`,description:`High-precision volumetric auger filling system designed for powder and granule products, ensuring accurate weight control in every cycle.`,image:`/Machines/VFFS 1014 Head Machine.png`,thumbnail:`/Machines/VFFS 1014 Head Machine.png`},{id:4,badge:`Consistent Weight. Every Batch.`,titleLine1:`MULTI-HEAD`,titleHighlight:`WEIGHER`,description:`Automatic multi-head weighing system offering rapid, accurate portioning for a wide range of free-flowing and irregular products.`,image:`/Machines/Automatic Multi-Head Weighing.png`,thumbnail:`/Machines/Automatic Multi-Head Weighing.png`},{id:5,badge:`Smooth Flow. Reliable Fill.`,titleLine1:`LIQUID FILLING`,titleHighlight:`MACHINE`,description:`Precision liquid filling system built for consistent volume control and contamination-free operation across a variety of container types.`,image:`/Machines/Liquid Filling Machine .png`,thumbnail:`/Machines/Liquid Filling Machine .png`}],Vr=4500,Hr=450;function Ur(){let[e,t]=(0,b.useState)(0),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(0),c=(0,b.useRef)(null),l=Br.length,u=(0,b.useCallback)(i=>{n||i===e||(r(!0),s(e=>e+1),t(i),setTimeout(()=>r(!1),Hr))},[e,n]),d=(0,b.useCallback)(()=>{u((e+1)%l)},[e,u,l]),f=(0,b.useCallback)(()=>{u((e-1+l)%l)},[e,u,l]);(0,b.useEffect)(()=>{if(!i)return c.current=setInterval(()=>{d()},Vr),()=>clearInterval(c.current)},[i,d]);let p=Br[e],m=Br.map(e=>e.titleLine1.split(` `).slice(0,2).join(` `));return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=Barlow:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .ps-section {
          width: 100%;
          font-family: var(--font-body, 'Barlow', sans-serif);
          overflow: hidden;
          background: #ffffff;
          margin-bottom: 36px;
        }

        @media (min-width: 768px) {
          .ps-section { margin-bottom: 54px; }
        }

        @media (min-width: 1024px) {
          .ps-section { margin-bottom: 72px; }
        }

        /* Stacked mobile-first: text on top, big image below. Side-by-side from 900px up. */
        .ps-main {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          background: linear-gradient(180deg, #fff6ea 0%, #ffffff 55%);
        }

        @media (min-width: 900px) {
          .ps-main {
            flex-direction: row;
            align-items: stretch;
            min-height: 640px;
          }
        }

        /* ── FLEX ORDER — content, image, controls, in that exact
           order on mobile. (Previously .ps-controls had no order set,
           so it defaulted to 0 and rendered ABOVE the title/image on
           mobile — that was the broken layout. Fixed below.) ── */
        .ps-content { order: 1; }
        .ps-stage    { order: 2; }
        .ps-controls { order: 3; }

        @media (min-width: 900px) {
          .ps-content { order: 1; }
          .ps-stage    { order: 2; }
          /* controls become position:absolute at 900px+, so order no
             longer matters for them there */
        }

        /* Image stage: light orange/white background, fluid width, never cropped */
        .ps-stage {
          position: relative;
          width: 100%;
          background: radial-gradient(ellipse at center, #fff9f0 0%, #ffedd3 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px 14px 12px;
        }

        @media (min-width: 480px) {
          .ps-stage { padding: 30px 20px 14px; }
        }

        @media (min-width: 900px) {
          .ps-stage {
            flex: 1.2;
            padding: 40px 32px 64px;
          }
        }

        @media (min-width: 1280px) {
          .ps-stage { flex: 1.3; padding: 48px 40px 72px; }
        }

        /* Fluid stage sizing using clamp() instead of hard breakpoint
           jumps, so the product image scales smoothly on every
           screen size — and is noticeably larger on desktop. */
        .ps-stage-inner {
          position: relative;
          width: 100%;
          max-width: clamp(320px, 92vw, 1040px);
          height: clamp(200px, 46vw, 640px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        @media (min-width: 900px) {
          .ps-stage-inner {
            max-width: clamp(600px, 46vw, 900px);
            height: clamp(420px, 34vw, 620px);
          }
        }

        @media (min-width: 1280px) {
          .ps-stage-inner {
            max-width: clamp(700px, 42vw, 980px);
            height: clamp(480px, 32vw, 660px);
          }
        }

        @media (min-width: 1600px) {
          .ps-stage-inner {
            max-width: 1040px;
            height: 700px;
          }
        }

        .ps-stage-inner img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 18px 30px rgba(194, 86, 15, 0.16));
          transition: opacity ${Hr}ms ease, transform ${Hr}ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes psImgIn {
          0% { opacity: 0; transform: scale(0.96); }
          100% { opacity: 1; transform: scale(1); }
        }
        .ps-img-anim {
          animation: psImgIn ${Hr}ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .ps-stage-glow {
          position: absolute;
          width: 70%;
          height: 70%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(245,158,11,0.14) 0%, rgba(245,158,11,0) 70%);
          z-index: 0;
        }

        .ps-content {
          position: relative;
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 28px 18px 4px;
          z-index: 4;
        }
        @media (min-width: 480px) {
          .ps-content { padding: 34px 26px 4px; }
        }
        @media (min-width: 900px) {
          .ps-content {
            flex: 1;
            padding: 50px 40px;
            max-width: 500px;
          }
        }
        @media (min-width: 1024px) {
          .ps-content { padding: 60px 50px; max-width: 540px; }
        }
        @media (min-width: 1440px) {
          .ps-content { padding: 70px 70px; max-width: 580px; }
        }

        .ps-badge {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          width: fit-content;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #c2560f;
          margin-bottom: 16px;
        }
        .ps-badge::before {
          content: '';
          width: 22px;
          height: 2px;
          background: #f59e0b;
          border-radius: 1px;
        }

        .ps-divider {
          width: 44px;
          height: 3px;
          background: #f59e0b;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        .ps-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-weight: 900;
          line-height: 0.94;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin: 0 0 16px;
        }
        .ps-title-line1 {
          display: block;
          font-size: clamp(26px, 8vw, 44px);
          color: #1c1917;
        }
        @media (min-width: 480px) {
          .ps-title-line1 { font-size: clamp(30px, 7vw, 52px); }
        }
        @media (min-width: 768px) {
          .ps-title-line1 { font-size: clamp(36px, 4.8vw, 68px); }
        }
        @media (min-width: 1024px) {
          .ps-title-line1 { font-size: clamp(40px, 4.2vw, 78px); }
        }
        @media (min-width: 1440px) {
          .ps-title-line1 { font-size: 84px; }
        }

        .ps-title-highlight {
          display: block;
          font-size: clamp(32px, 9vw, 52px);
          color: #f59e0b;
        }
        @media (min-width: 480px) {
          .ps-title-highlight { font-size: clamp(36px, 8vw, 60px); }
        }
        @media (min-width: 768px) {
          .ps-title-highlight { font-size: clamp(44px, 5.5vw, 82px); }
        }
        @media (min-width: 1024px) {
          .ps-title-highlight { font-size: clamp(48px, 4.8vw, 94px); }
        }
        @media (min-width: 1440px) {
          .ps-title-highlight { font-size: 100px; }
        }

        .ps-desc {
          font-size: 12.5px;
          line-height: 1.7;
          color: #57534e;
          margin: 0 0 24px;
          max-width: 420px;
          font-weight: 400;
        }
        @media (min-width: 480px) {
          .ps-desc { font-size: 13px; margin-bottom: 28px; }
        }
        @media (min-width: 768px) {
          .ps-desc { font-size: 14px; max-width: 440px; margin-bottom: 30px; }
        }
        @media (min-width: 1024px) {
          .ps-desc { font-size: 15px; max-width: 460px; }
        }

        .ps-btns {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }
        @media (min-width: 480px) {
          .ps-btns { gap: 12px; }
        }
        @media (max-width: 400px) {
          .ps-btns { flex-direction: column; }
          .ps-btns a { text-align: center; justify-content: center; }
        }

        .ps-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #ffffff;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 4px;
          border: 2px solid #f59e0b;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 16px rgba(245,158,11,0.28);
        }
        @media (min-width: 480px) {
          .ps-btn-primary { font-size: 12px; letter-spacing: 0.16em; padding: 13px 28px; }
        }
        .ps-btn-primary:hover {
          background: #d97706;
          border-color: #d97706;
          box-shadow: 0 6px 24px rgba(245,158,11,0.38);
          transform: translateY(-1px);
        }
        .ps-btn-primary svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .ps-btn-glass {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          color: #1c1917;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          padding: 12px 22px;
          border-radius: 4px;
          border: 1.5px solid #f0e2cf;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        @media (min-width: 480px) {
          .ps-btn-glass { font-size: 12px; letter-spacing: 0.16em; padding: 13px 28px; }
        }
        .ps-btn-glass:hover {
          background: #fff3e2;
          border-color: #f59e0b;
          transform: translateY(-1px);
        }
        .ps-btn-glass svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        /* ── Controls: centered row on mobile (in normal flex flow,
           after image), pinned bottom-right floating pill on desktop ── */
        .ps-controls {
          position: relative;
          margin: 4px auto 20px;
          z-index: 5;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #f0e2cf;
          border-radius: 10px;
          padding: 6px 8px;
          width: fit-content;
          box-shadow: 0 6px 18px -10px rgba(28,25,23,0.15);
        }
        @media (min-width: 900px) {
          .ps-controls {
            position: absolute;
            bottom: 24px;
            right: 24px;
            margin: 0;
          }
        }

        .ps-ctrl-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: 1px solid #f0e2cf;
          border-radius: 7px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        @media (min-width: 480px) {
          .ps-ctrl-btn { width: 38px; height: 38px; }
        }
        @media (min-width: 768px) {
          .ps-ctrl-btn { width: 42px; height: 42px; }
        }
        .ps-ctrl-btn:hover {
          background: #fff3e2;
          border-color: #f59e0b;
        }
        .ps-ctrl-btn:hover svg {
          stroke: #f59e0b;
        }
        .ps-ctrl-btn svg {
          width: 16px;
          height: 16px;
          stroke: #78716c;
          transition: stroke 0.25s ease;
        }

        .ps-counter {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #a8896a;
          letter-spacing: 0.1em;
          padding: 0 6px;
          user-select: none;
        }
        @media (min-width: 480px) {
          .ps-counter { font-size: 14px; }
        }
        .ps-counter .ps-curr {
          color: #f59e0b;
          font-size: 16px;
        }
        @media (min-width: 480px) {
          .ps-counter .ps-curr { font-size: 17px; }
        }

        @keyframes psFadeUp {
          0% { opacity: 0; transform: translateY(18px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .ps-anim {
          animation: psFadeUp ${Hr}ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .ps-d0 { animation-delay: 0s; opacity: 0; }
        .ps-d1 { animation-delay: 0.04s; opacity: 0; }
        .ps-d2 { animation-delay: 0.08s; opacity: 0; }
        .ps-d3 { animation-delay: 0.12s; opacity: 0; }
        .ps-d4 { animation-delay: 0.16s; opacity: 0; }

        /* ── Thumbnail strip ── */
        .ps-thumbs {
          position: relative;
          z-index: 5;
          background: linear-gradient(180deg, #fff8ef 0%, #fdf1e0 100%);
          border-top: 1px solid #f0e2cf;
          padding: 14px 14px;
          display: flex;
          align-items: center;
          gap: 10px;
          overflow-x: auto;
          scroll-behavior: smooth;
          scroll-snap-type: x proximity;
          -ms-overflow-style: none;
          scrollbar-width: none;
          -webkit-overflow-scrolling: touch;
        }
        .ps-thumbs::-webkit-scrollbar { display: none; }
        @media (min-width: 480px) {
          .ps-thumbs { padding: 18px 20px; gap: 14px; justify-content: flex-start; }
        }
        @media (min-width: 640px) {
          .ps-thumbs { justify-content: center; }
        }
        @media (min-width: 768px) {
          .ps-thumbs { padding: 20px 50px; gap: 20px; }
        }
        @media (min-width: 1024px) {
          .ps-thumbs { padding: 22px 70px; gap: 24px; }
        }
        @media (min-width: 1440px) {
          .ps-thumbs { padding: 24px 100px; gap: 28px; }
        }

        .ps-thumb {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          background: #ffffff;
          border: 2px solid #f0e2cf;
          border-radius: 8px;
          padding: 9px 12px 10px;
          min-width: 96px;
          flex-shrink: 0;
          scroll-snap-align: center;
          transition: all 0.3s cubic-bezier(0.22, 1, 0.36, 1);
          position: relative;
        }
        @media (min-width: 480px) {
          .ps-thumb { min-width: 130px; padding: 10px 18px 12px; gap: 10px; }
        }
        @media (min-width: 768px) {
          .ps-thumb { min-width: 155px; padding: 12px 20px 14px; }
        }
        @media (min-width: 1024px) {
          .ps-thumb { min-width: 175px; padding: 14px 24px 16px; }
        }

        .ps-thumb:hover {
          transform: translateY(-5px) scale(1.03);
          border-color: #e8c9a0;
          background: #fffaf3;
        }

        .ps-thumb-active {
          border-color: #f59e0b !important;
          background: #fff3e2 !important;
          transform: translateY(-3px) scale(1.02);
          box-shadow:
            0 4px 20px rgba(245,158,11,0.16),
            0 0 0 1px rgba(245,158,11,0.10),
            inset 0 1px 0 rgba(245,158,11,0.08);
        }

        .ps-thumb-dot {
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 28px;
          height: 3px;
          background: #f59e0b;
          border-radius: 0 0 3px 3px;
          transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
        }
        .ps-thumb-active .ps-thumb-dot {
          transform: translateX(-50%) scaleX(1);
        }

        .ps-thumb-img-wrap {
          width: 68px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        @media (min-width: 480px) {
          .ps-thumb-img-wrap { width: 100px; height: 60px; }
        }
        @media (min-width: 768px) {
          .ps-thumb-img-wrap { width: 115px; height: 68px; }
        }
        @media (min-width: 1024px) {
          .ps-thumb-img-wrap { width: 125px; height: 74px; }
        }

        .ps-thumb-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          opacity: 0.55;
          transition: opacity 0.3s ease;
        }
        .ps-thumb-active .ps-thumb-img { opacity: 1; }
        .ps-thumb:hover .ps-thumb-img { opacity: 0.85; }

        .ps-thumb-label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #a8896a;
          transition: color 0.3s ease;
          white-space: nowrap;
        }
        @media (min-width: 480px) {
          .ps-thumb-label { font-size: 10px; letter-spacing: 0.16em; }
        }
        .ps-thumb-active .ps-thumb-label { color: #c2560f; }
        .ps-thumb:hover .ps-thumb-label { color: #57534e; }
      `}),(0,N.jsxs)(`section`,{className:`ps-section`,id:`products`,children:[(0,N.jsxs)(`div`,{className:`ps-main`,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1),children:[(0,N.jsxs)(`div`,{className:`ps-content`,children:[(0,N.jsx)(`div`,{className:`ps-anim ps-d0`,children:(0,N.jsx)(`span`,{className:`ps-badge`,children:p.badge})}),(0,N.jsx)(`div`,{className:`ps-anim ps-d0`,children:(0,N.jsx)(`div`,{className:`ps-divider`})}),(0,N.jsxs)(`h2`,{className:`ps-title ps-anim ps-d1`,children:[(0,N.jsx)(`span`,{className:`ps-title-line1`,children:p.titleLine1}),(0,N.jsx)(`span`,{className:`ps-title-highlight`,children:p.titleHighlight})]}),(0,N.jsx)(`p`,{className:`ps-desc ps-anim ps-d2`,children:p.description}),(0,N.jsxs)(`div`,{className:`ps-btns ps-anim ps-d3`,children:[(0,N.jsxs)(`a`,{href:`/machines`,className:`ps-btn-primary`,children:[`VIEW DETAILS`,(0,N.jsx)(`svg`,{viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M2 7h10M8 3l4 4-4 4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,N.jsxs)(`a`,{href:`/contact`,className:`ps-btn-glass`,children:[`GET A QUOTE`,(0,N.jsx)(`svg`,{viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M7 2v10M3 8l4 4 4-4`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]},`content-${o}`),(0,N.jsx)(`div`,{className:`ps-stage`,children:(0,N.jsxs)(`div`,{className:`ps-stage-inner`,children:[(0,N.jsx)(`div`,{className:`ps-stage-glow`}),(0,N.jsx)(`img`,{src:p.image,alt:p.titleLine1+` `+p.titleHighlight,className:`ps-img-anim`,loading:`eager`,decoding:`async`})]},`img-${o}`)}),(0,N.jsxs)(`div`,{className:`ps-controls`,children:[(0,N.jsx)(`button`,{className:`ps-ctrl-btn`,onClick:f,"aria-label":`Previous product`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 18 18`,fill:`none`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M12 3L6 9l6 6`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,N.jsxs)(`span`,{className:`ps-counter`,children:[(0,N.jsx)(`span`,{className:`ps-curr`,children:String(e+1).padStart(2,`0`)}),` / `,String(l).padStart(2,`0`)]}),(0,N.jsx)(`button`,{className:`ps-ctrl-btn`,onClick:d,"aria-label":`Next product`,children:(0,N.jsx)(`svg`,{viewBox:`0 0 18 18`,fill:`none`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M6 3l6 6-6 6`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]})]}),(0,N.jsx)(`div`,{className:`ps-thumbs`,children:Br.map((t,n)=>(0,N.jsxs)(`div`,{className:`ps-thumb ${n===e?`ps-thumb-active`:``}`,onClick:()=>u(n),role:`button`,tabIndex:0,"aria-label":`View ${t.titleLine1} ${t.titleHighlight}`,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),u(n))},children:[(0,N.jsx)(`div`,{className:`ps-thumb-dot`}),(0,N.jsx)(`div`,{className:`ps-thumb-img-wrap`,children:(0,N.jsx)(`img`,{src:t.thumbnail,alt:t.titleLine1,className:`ps-thumb-img`,loading:`lazy`,decoding:`async`})}),(0,N.jsx)(`span`,{className:`ps-thumb-label`,children:m[n]})]},t.id))})]})]})}var Wr=[{title:`Customized Engineering`,desc:`Every machine is designed to match specific product, capacity, and packaging requirements.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`path`,{d:`M12 3v2M12 19v2M4 12H2M22 12h-2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`4`})]})},{title:`Precision & Reliability`,desc:`Advanced engineering ensures high filling accuracy, consistent performance, and minimal product wastage.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`path`,{d:`M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z`}),(0,N.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})},{title:`Robust Manufacturing Quality`,desc:`Machines are built using premium components and durable construction for long-lasting industrial performance.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`}),(0,N.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.14.36.4.66.72.86.31.2.68.3 1.05.3H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z`})]})},{title:`End-to-End Packaging Solutions`,desc:`From machine design to installation, training, and support, we provide complete packaging automation services.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`rect`,{x:`3`,y:`7`,width:`6`,height:`6`,rx:`1`}),(0,N.jsx)(`rect`,{x:`15`,y:`7`,width:`6`,height:`6`,rx:`1`}),(0,N.jsx)(`rect`,{x:`9`,y:`14`,width:`6`,height:`6`,rx:`1`}),(0,N.jsx)(`path`,{d:`M6 7V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2M12 13v1`})]})},{title:`Responsive After-Sales Support`,desc:`Dedicated technical assistance and timely maintenance ensure maximum uptime and uninterrupted production.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`8`,r:`4`}),(0,N.jsx)(`path`,{d:`M4 21c0-4 3.6-7 8-7s8 3 8 7`}),(0,N.jsx)(`path`,{d:`m14.5 6.5 1.8-1.8M15.5 8.5h2.3`})]})},{title:`Cost-Effective Automation`,desc:`Our solutions improve productivity while reducing labor dependency, operational costs, and packaging errors.`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`path`,{d:`M4 20V10M12 20V4M20 20v-7`}),(0,N.jsx)(`path`,{d:`m15 7 5-3M4 14l6-4`})]})}],Gr=[{value:`740+`,label:`Installations`},{value:`15+`,label:`Cities`},{value:`99%`,label:`Uptime`},{value:`24/7`,label:`Support`}],Kr=[`Food & Beverage`,`Pharmaceuticals`,`Chemicals`,`FMCG`,`Cosmetics`,`Agro Products`,`Electronics`];function qr(){let[e,t]=(0,b.useState)({}),n=(0,b.useRef)([]);return(0,b.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(t=>({...t,[e.target.dataset.id]:!0}))})},{threshold:.15});return n.current.forEach(t=>t&&e.observe(t)),()=>e.disconnect()},[]),(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; }

        /* ============================================================
           MOBILE-FIRST BASE (≈320px and up)
           Everything below is the smallest-screen layout. Larger
           breakpoints (480 / 640 / 768 / 1024 / 1280) only ADD to or
           override these rules — nothing is assumed to exist above
           this base until a media query says so.
           ============================================================ */

        .wcu-section {
          width: 100%;
          background: var(--champagne);
          font-family: var(--font-body);
          color: var(--text-1);
          padding: 40px 16px;
          position: relative;
          overflow: hidden;
        }

        .wcu-section::before {
          content: "";
          position: absolute;
          top: -90px;
          right: -90px;
          width: 220px;
          height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, #fdeadb 0%, transparent 70%);
          pointer-events: none;
        }

        .wcu-container {
          max-width: 1360px;
          margin: 0 auto;
          position: relative;
        }

        /* ── TOP: heading + stats ── */
        .wcu-top {
          display: flex;
          flex-direction: column;
          gap: 22px;
          margin-bottom: 28px;
        }

        .wcu-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #b8531f;
          margin-bottom: 12px;
        }

        .wcu-eyebrow::before {
          content: "";
          width: 18px;
          height: 2px;
          background: #b8531f;
          display: inline-block;
          flex-shrink: 0;
        }

        .wcu-title {
          font-family: var(--font-display);
          font-size: clamp(22px, 7.5vw, 30px);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 10px;
          letter-spacing: -0.01em;
        }

        .wcu-title span { color: var(--accent); }

        .wcu-subtitle {
          font-size: 13px;
          color: var(--text-2);
          line-height: 1.7;
          max-width: 460px;
        }

        .wcu-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0;
          background: #fff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          overflow: hidden;
        }

        .wcu-stat {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 14px;
          border-bottom: 1px solid #f1ebe0;
          border-right: 1px solid #f1ebe0;
          min-width: 0;
        }

        .wcu-stat:nth-child(2n) { border-right: none; }
        .wcu-stat:nth-last-child(-n+2) { border-bottom: none; }

        .wcu-stat-icon {
          flex-shrink: 0;
          width: 30px;
          height: 30px;
          border-radius: 8px;
          background: #fdeadb;
          color: #b8531f;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wcu-stat-icon svg { width: 15px; height: 15px; }

        .wcu-stat-value {
          font-family: 'Source Serif 4', serif;
          font-size: 16px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1.1;
          white-space: nowrap;
        }

        .wcu-stat-label {
          font-size: 10.5px;
          color: #78716c;
          font-weight: 500;
          white-space: nowrap;
        }

        /* ── ORBIT (mobile: stacked list) ── */
        .wcu-orbit-wrap {
          position: relative;
        }

        .wcu-card {
          display: flex;
          gap: 14px;
          background: #ffffff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          padding: 16px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          margin-bottom: 12px;
        }

        .wcu-card.in-view { opacity: 1; transform: translateY(0); }

        .wcu-card:hover {
          border-color: #e3b585;
          box-shadow: 0 16px 30px -16px rgba(184, 83, 31, 0.28);
        }

        .wcu-num {
          flex-shrink: 0;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: linear-gradient(145deg, #e8935a, #b8531f);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 14px -6px rgba(184, 83, 31, 0.55);
        }
        .wcu-num svg { width: 17px; height: 17px; }

        .wcu-card-title {
          font-size: 14px;
          font-weight: 700;
          margin-bottom: 4px;
          line-height: 1.35;
        }

        .wcu-card-desc {
          font-size: 12.5px;
          line-height: 1.6;
          color: #57534e;
        }

        /* ── CENTER LOGO BADGE (mobile) — logo only, no text ── */
        .wcu-center-mobile {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 18px;
          margin: 0 auto 16px;
          background: radial-gradient(circle, #fff 55%, #fdf6ee 100%);
          border: 1px solid #ece5da;
          border-radius: 50%;
          width: clamp(120px, 34vw, 170px);
          height: clamp(120px, 34vw, 170px);
        }

        .wcu-center-logo-img {
          width: 60%;
          height: 60%;
          object-fit: contain;
        }

        /* ── industries strip ── */
        .wcu-industries {
          margin-top: 26px;
          background: #ffffff;
          border: 1px solid #ece5da;
          border-radius: 14px;
          padding: 18px;
        }

        .wcu-industries-title {
          font-size: 14px;
          font-weight: 800;
          margin-bottom: 14px;
        }
        .wcu-industries-title::after {
          content: "";
          display: block;
          width: 22px;
          height: 2px;
          background: #d9711f;
          margin-top: 8px;
        }

        .wcu-industries-list {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .wcu-industry {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          text-align: center;
          min-width: 0;
        }

        .wcu-industry-icon {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          border: 1px solid #ece5da;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #b8531f;
          flex-shrink: 0;
        }
        .wcu-industry-icon svg { width: 18px; height: 18px; }

        .wcu-industry-label {
          font-size: 11.5px;
          font-weight: 600;
          color: #44403c;
          line-height: 1.3;
        }

        .wcu-mobile-only-flex { display: flex; }
        .wcu-desktop-only-flex { display: none; }

        /* connector dashed-lines + dots are part of the desktop orbit
           visual only — hide them on mobile/tablet so no stray lines
           or dots show above the stacked cards */
        .wcu-connector-svg { display: none; }

        /* ============================================================
           ≥380px — a little breathing room on very small phones
           ============================================================ */
        @media (min-width: 380px) {
          .wcu-section { padding: 44px 18px; }
          .wcu-stat { padding: 15px 16px; }
        }

        /* ============================================================
           ≥480px — larger phones
           ============================================================ */
        @media (min-width: 480px) {
          .wcu-section { padding: 48px 24px; }
          .wcu-top { gap: 26px; margin-bottom: 32px; }
          .wcu-subtitle { font-size: 13.5px; }
          .wcu-stat { padding: 16px 18px; gap: 12px; }
          .wcu-stat-icon { width: 32px; height: 32px; }
          .wcu-stat-value { font-size: 17px; }
          .wcu-card { padding: 18px; gap: 16px; }
          .wcu-card-title { font-size: 14.5px; }
          .wcu-card-desc { font-size: 13px; }
          .wcu-industries { padding: 20px; }
          .wcu-industries-list { gap: 16px; }
        }

        /* ============================================================
           ≥640px — small tablets / large phones landscape:
           stats row becomes horizontal-friendly and industries
           move to 3 columns for readability
           ============================================================ */
        @media (min-width: 640px) {
          .wcu-section { padding: 56px 32px; }
          .wcu-title { font-size: clamp(28px, 5vw, 34px); }
          .wcu-subtitle { max-width: 520px; }

          .wcu-stats { grid-template-columns: repeat(4, 1fr); }
          .wcu-stat:nth-child(2n) { border-right: 1px solid #f1ebe0; }
          .wcu-stat:nth-child(4n) { border-right: none; }
          .wcu-stat:nth-last-child(-n+4) { border-bottom: none; }
          .wcu-stat { border-bottom: none; flex-direction: column; align-items: flex-start; gap: 8px; }

          .wcu-industries-list { grid-template-columns: repeat(3, 1fr); }
        }

        /* ============================================================
           ≥768px — tablets: two-column card grid instead of single
           stacked list, industries move to 4 columns
           ============================================================ */
        @media (min-width: 768px) {
          .wcu-section { padding: 64px 40px; }

          .wcu-top { flex-direction: row; align-items: flex-end; justify-content: space-between; gap: 32px; }
          .wcu-top > div:first-child { flex: 1; min-width: 0; }
          .wcu-stats { flex-shrink: 0; min-width: 380px; }

          .wcu-center-mobile { width: 150px; height: 150px; margin-bottom: 22px; }

          .wcu-orbit-wrap {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .wcu-card { margin-bottom: 0; }

          .wcu-industries-list { grid-template-columns: repeat(4, 1fr); gap: 20px; }
          .wcu-industries { padding: 24px 28px; }
        }

        /* ============================================================
           ≥1024px — DESKTOP: full orbit layout with center hub
           ============================================================ */
        @media (min-width: 1024px) {
          .wcu-section { padding: 88px 40px; }

          .wcu-top {
            margin-bottom: 64px;
          }

          .wcu-title { font-size: 40px; }
          .wcu-subtitle { font-size: 15px; }

          .wcu-stats {
            min-width: 480px;
          }

          .wcu-mobile-only-flex { display: none; }
          .wcu-desktop-only-flex { display: flex; }

          /* orbit grid: 3 left cards | center | 3 right cards */
          .wcu-orbit-wrap {
            grid-template-columns: 1fr 300px 1fr;
            align-items: center;
            gap: 0;
            min-height: 640px;
          }

          .wcu-orbit-col {
            display: flex;
            flex-direction: column;
            gap: 22px;
            position: relative;
            z-index: 2;
          }

          .wcu-orbit-col.left { align-items: flex-end; }
          .wcu-orbit-col.right { align-items: flex-start; }

          .wcu-card {
            width: 100%;
            max-width: 340px;
            flex-direction: column;
            gap: 14px;
            padding: 24px 22px;
          }

          .wcu-num { width: 46px; height: 46px; }
          .wcu-num svg { width: 20px; height: 20px; }
          .wcu-card-title { font-size: 16px; }
          .wcu-card-desc { font-size: 13.5px; }

          .wcu-orbit-center {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1;
          }

          .wcu-ring {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 2px solid #e7e2d8;
          }

          .wcu-ring-accent {
            position: absolute;
            width: 300px;
            height: 300px;
            border-radius: 50%;
            border: 3px solid transparent;
            border-top-color: #d9711f;
            border-right-color: #d9711f;
            transform: rotate(-35deg);
            animation: wcu-spin 22s linear infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .wcu-ring-accent { animation: none; }
          }

          @keyframes wcu-spin {
            to { transform: rotate(325deg); }
          }

          /* ── CENTER LOGO BADGE (desktop) — logo only, no text ── */
          .wcu-center-hub {
            width: 220px;
            height: 220px;
            border-radius: 50%;
            background: #ffffff;
            box-shadow: 0 20px 45px -20px rgba(28, 25, 23, 0.18);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 3;
          }

          .wcu-center-hub .wcu-center-logo-img {
            width: 150px;
            height: 150px;
          }

          .wcu-connector-svg {
            display: block;
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            overflow: visible;
            z-index: 0;
            pointer-events: none;
          }

          .wcu-industries {
            padding: 30px 36px;
          }

          .wcu-industries-title { font-size: 16px; }

          .wcu-industries-list {
            grid-template-columns: auto repeat(7, 1fr);
            align-items: center;
            gap: 28px;
          }

          .wcu-industries-title-wrap {
            padding-right: 24px;
            border-right: 1px solid #ece5da;
          }
        }

        @media (min-width: 1024px) and (max-width: 1279px) {
          .wcu-orbit-wrap { grid-template-columns: 1fr 260px 1fr; min-height: 560px; }
          .wcu-card { max-width: 290px; padding: 20px; }
          .wcu-ring, .wcu-ring-accent { width: 260px; height: 260px; }
          .wcu-center-hub { width: 190px; height: 190px; }
          .wcu-center-hub .wcu-center-logo-img { width: 125px; height: 125px; }
        }

        /* ============================================================
           ≥1440px — extra breathing room on large monitors
           ============================================================ */
        @media (min-width: 1440px) {
          .wcu-container { max-width: 1440px; }
          .wcu-orbit-wrap { grid-template-columns: 1fr 320px 1fr; }
          .wcu-ring, .wcu-ring-accent { width: 320px; height: 320px; }
          .wcu-center-hub { width: 236px; height: 236px; }
          .wcu-center-hub .wcu-center-logo-img { width: 160px; height: 160px; }
        }
      `}),(0,N.jsx)(`section`,{className:`wcu-section`,children:(0,N.jsxs)(`div`,{className:`wcu-container`,children:[(0,N.jsxs)(`div`,{className:`wcu-top`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`wcu-eyebrow`,children:`Unique Selling Proposition`}),(0,N.jsxs)(`h2`,{className:`wcu-title`,children:[`Why `,(0,N.jsx)(`span`,{children:`Choose`}),` Us`]}),(0,N.jsx)(`p`,{className:`wcu-subtitle`,children:`Precision engineering, durable builds, and dependable support come together to make our packaging machines a trusted choice across industries.`})]}),(0,N.jsx)(`div`,{className:`wcu-stats`,children:Gr.map((e,t)=>(0,N.jsxs)(`div`,{className:`wcu-stat`,children:[(0,N.jsx)(`div`,{className:`wcu-stat-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,N.jsx)(`path`,{d:`m9 12 2 2 4-4`})]})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`wcu-stat-value`,children:e.value}),(0,N.jsx)(`div`,{className:`wcu-stat-label`,children:e.label})]})]},t))})]}),(0,N.jsx)(`div`,{className:`wcu-center-mobile wcu-mobile-only-flex`,children:(0,N.jsx)(`img`,{src:`/favicon.png`,alt:`Sun Tech Packaging Machines logo`,className:`wcu-center-logo-img`})}),(0,N.jsxs)(`div`,{className:`wcu-orbit-wrap`,children:[(0,N.jsxs)(`svg`,{className:`wcu-connector-svg`,viewBox:`0 0 1000 640`,preserveAspectRatio:`none`,children:[(0,N.jsx)(`line`,{x1:`300`,y1:`130`,x2:`410`,y2:`220`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),(0,N.jsx)(`line`,{x1:`300`,y1:`320`,x2:`410`,y2:`320`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),(0,N.jsx)(`line`,{x1:`300`,y1:`510`,x2:`410`,y2:`420`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),(0,N.jsx)(`line`,{x1:`700`,y1:`130`,x2:`590`,y2:`220`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),(0,N.jsx)(`line`,{x1:`700`,y1:`320`,x2:`590`,y2:`320`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),(0,N.jsx)(`line`,{x1:`700`,y1:`510`,x2:`590`,y2:`420`,stroke:`#d9c7b0`,strokeWidth:`1.5`,strokeDasharray:`4 5`}),[[300,130],[300,320],[300,510],[700,130],[700,320],[700,510]].map(([e,t],n)=>(0,N.jsx)(`circle`,{cx:e,cy:t,r:`4`,fill:`#d9711f`},n))]}),(0,N.jsx)(`div`,{className:`wcu-orbit-col left`,children:Wr.slice(0,3).map((t,r)=>(0,N.jsxs)(`div`,{className:`wcu-card ${e[`wcu-${r}`]?`in-view`:``}`,ref:e=>n.current[r]=e,"data-id":`wcu-${r}`,style:{transitionDelay:`${r*.08}s`},children:[(0,N.jsx)(`div`,{className:`wcu-num`,children:t.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`wcu-card-title`,children:t.title}),(0,N.jsx)(`p`,{className:`wcu-card-desc`,children:t.desc})]})]},r))}),(0,N.jsxs)(`div`,{className:`wcu-orbit-center wcu-desktop-only-flex`,children:[(0,N.jsx)(`div`,{className:`wcu-ring`}),(0,N.jsx)(`div`,{className:`wcu-ring-accent`}),(0,N.jsx)(`div`,{className:`wcu-center-hub`,children:(0,N.jsx)(`img`,{src:`/favicon.png`,alt:`Sun Tech Packaging Machines logo`,className:`wcu-center-logo-img`})})]}),(0,N.jsx)(`div`,{className:`wcu-orbit-col right`,children:Wr.slice(3,6).map((t,r)=>{let i=r+3;return(0,N.jsxs)(`div`,{className:`wcu-card ${e[`wcu-${i}`]?`in-view`:``}`,ref:e=>n.current[i]=e,"data-id":`wcu-${i}`,style:{transitionDelay:`${i*.08}s`},children:[(0,N.jsx)(`div`,{className:`wcu-num`,children:t.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`wcu-card-title`,children:t.title}),(0,N.jsx)(`p`,{className:`wcu-card-desc`,children:t.desc})]})]},i)})})]}),(0,N.jsxs)(`div`,{className:`wcu-industries`,children:[(0,N.jsx)(`div`,{className:`wcu-industries-title-wrap`,children:(0,N.jsx)(`div`,{className:`wcu-industries-title`,children:`Serving Industries`})}),(0,N.jsx)(`div`,{className:`wcu-industries-list`,children:Kr.map((e,t)=>(0,N.jsxs)(`div`,{className:`wcu-industry`,children:[(0,N.jsx)(`div`,{className:`wcu-industry-icon`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,children:[(0,N.jsx)(`rect`,{x:`4`,y:`4`,width:`16`,height:`16`,rx:`3`}),(0,N.jsx)(`path`,{d:`M8 12h8M8 16h5`})]})}),(0,N.jsx)(`div`,{className:`wcu-industry-label`,children:e})]},t))})]})]})})]})}var Jr=[{name:`Atta Packaging Machine`,img:`/Machines/Multi-Head VFFS Packaging Machine.png`,tag:`Powder & Flour`,spec:`5–50 kg/bag`},{name:`Granules Packaging Machine`,img:`/Machines/Smart PAC Bagger.png`,tag:`Granules`,spec:`100g–25 kg`},{name:`Flow Wrapping Machine`,img:`/Machines/VFFS 1014 Head Machine.png`,tag:`Wrapping`,spec:`Up to 120 ppm`},{name:`Masala Packaging Machine`,img:`/Machines/VFFS Auger Filter Machine.png`,tag:`Spices & Powder`,spec:`10g–1 kg`},{name:`Sealing Machine`,img:`/Machines/Pick Fill seal Machine.png`,tag:`Sealing`,spec:`Continuous / Impulse`},{name:`Vacuum Packaging Machine`,img:`/Machines/DZ-600-External-Vaccum-SS.png`,tag:`Vacuum`,spec:`99.9% Vacuum`}];function Yr(){let e=dt();return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        .pg-section {
          width: 100%;
          background: var(--surface);
          font-family: var(--font-body);
          padding: 48px 16px;
        }

        .pg-container {
          width: min(100%, 1500px);
          max-width: 1500px;
          margin: 0 auto;
        }

        /* ── HEADER ── */
        .pg-header {
          margin-bottom: 32px;
        }

        .pg-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-2);
          margin-bottom: 10px;
          display: block;
        }

        .pg-title {
          font-size: 28px;
          font-weight: 800;
          color: var(--text-1);
          line-height: 1.2;
          margin-bottom: 10px;
        }

        .pg-subtitle {
          font-size: 14px;
          color: var(--text-2);
          line-height: 1.6;
          max-width: 500px;
        }

        /* ── GRID ── */
        .pg-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        /* ── CARD ── */
        .pg-card {
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          background: var(--surface);
        }

        .pg-card-img {
          width: 100%;
          height: 240px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid #e5e7eb;
          overflow: hidden;
          position: relative;
        }

        .pg-card-img img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .pg-card-body {
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .pg-card-tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #64748b;
        }

        .pg-card-name {
          font-size: 16px;
          font-weight: 700;
          color: #000000;
          line-height: 1.3;
        }

        .pg-card-spec {
          font-size: 12px;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .pg-card-spec svg {
          width: 12px;
          height: 12px;
          color: #94a3b8;
          flex-shrink: 0;
        }

        .pg-card-actions {
          display: flex;
          gap: 8px;
          margin-top: 8px;
        }

        .pg-btn-primary {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: #f59e0b;
          color: #000000;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 10px 12px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
        }

        .pg-btn-primary:hover {
          background: #d97706;
        }

        .pg-btn-primary svg {
          width: 12px;
          height: 12px;
        }

        .pg-btn-secondary {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 5px;
          background: #ffffff;
          color: #64748b;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 10px 14px;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
          cursor: pointer;
        }

        .pg-btn-secondary:hover {
          border-color: #94a3b8;
          color: #000000;
        }

        .pg-btn-secondary svg {
          width: 12px;
          height: 12px;
        }

        /* ── FOOTER CTA ── */
        .pg-footer {
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          padding: 24px 20px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: center;
          text-align: center;
        }

        .pg-footer-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #64748b;
        }

        .pg-footer-title {
          font-size: 20px;
          font-weight: 800;
          color: #000000;
        }

        .pg-footer-sub {
          font-size: 13px;
          color: #64748b;
          line-height: 1.5;
        }

        .pg-footer-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f59e0b;
          color: #000000;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          padding: 12px 24px;
          border-radius: 4px;
          border: none;
          cursor: pointer;
          text-decoration: none;
        }

        .pg-footer-btn:hover {
          background: #d97706;
        }

        .pg-footer-btn svg {
          width: 14px;
          height: 14px;
        }

        /* ── TABLET (640px) ── */
        @media (min-width: 640px) {
          .pg-section {
            padding: 64px 24px;
          }

          .pg-title {
            font-size: 32px;
          }

          .pg-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .pg-card-img {
            height: 260px;
          }

          .pg-footer {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
            padding: 28px 32px;
          }

          .pg-footer-content {
            text-align: left;
          }
        }

        /* ── DESKTOP (1024px) ── */
        @media (min-width: 1024px) {
          .pg-section {
            padding: 80px 32px;
          }

          .pg-title {
            font-size: 36px;
          }

          .pg-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
          }

          .pg-card-img {
            height: 240px;
          }

          .pg-card-body {
            padding: 20px;
          }

          .pg-footer {
            padding: 32px 40px;
          }
        }
      `}),(0,N.jsx)(`section`,{className:`pg-section`,children:(0,N.jsxs)(`div`,{className:`pg-container`,children:[(0,N.jsxs)(`div`,{className:`pg-header`,children:[(0,N.jsx)(`span`,{className:`pg-label`,children:`Machine Catalogue`}),(0,N.jsx)(`h2`,{className:`pg-title`,children:`Our Product Range`}),(0,N.jsx)(`p`,{className:`pg-subtitle`,children:`Industrial-grade packaging machines engineered for high throughput, accuracy, and long-term reliability.`})]}),(0,N.jsx)(`div`,{className:`pg-grid`,children:Jr.map((t,n)=>(0,N.jsxs)(`div`,{className:`pg-card`,children:[(0,N.jsx)(`div`,{className:`pg-card-img`,children:(0,N.jsx)(`img`,{src:t.img,alt:t.name})}),(0,N.jsxs)(`div`,{className:`pg-card-body`,children:[(0,N.jsx)(`span`,{className:`pg-card-tag`,children:t.tag}),(0,N.jsx)(`h3`,{className:`pg-card-name`,children:t.name}),(0,N.jsxs)(`div`,{className:`pg-card-spec`,children:[(0,N.jsxs)(`svg`,{viewBox:`0 0 14 14`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,children:[(0,N.jsx)(`rect`,{x:`1`,y:`1`,width:`12`,height:`12`,rx:`2`}),(0,N.jsx)(`path`,{d:`M4 7h6M7 4v6`,strokeLinecap:`round`})]}),t.spec]}),(0,N.jsxs)(`div`,{className:`pg-card-actions`,children:[(0,N.jsxs)(`button`,{className:`pg-btn-primary`,onClick:()=>e(`/contact`,{state:{product:t.name}}),children:[`Inquiry`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,N.jsxs)(`button`,{className:`pg-btn-secondary`,children:[`Details`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})]},n))}),(0,N.jsxs)(`div`,{className:`pg-footer`,children:[(0,N.jsxs)(`div`,{className:`pg-footer-content`,children:[(0,N.jsx)(`span`,{className:`pg-footer-label`,children:`Custom Engineering`}),(0,N.jsx)(`h3`,{className:`pg-footer-title`,children:`Need a Custom Solution?`}),(0,N.jsx)(`p`,{className:`pg-footer-sub`,children:`We design and build machines to your exact production specifications.`})]}),(0,N.jsxs)(`a`,{href:`/contact`,className:`pg-footer-btn`,children:[`Request a Quote`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]})})]})}function Xr(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(zr,{}),(0,N.jsx)(Ur,{}),(0,N.jsx)(qr,{}),(0,N.jsx)(Yr,{})]})}var Zr=[{title:`Rising Labor Dependency`,desc:`Manufacturers face increasing labor costs and workforce shortages, affecting packaging efficiency and consistency.`},{title:`Inconsistent Packaging Accuracy`,desc:`Manual and outdated systems often result in weight variations, product wastage, and customer complaints.`},{title:`Growing Demand for Automation`,desc:`Industries require faster, smarter, and scalable packaging solutions to meet rising production demands.`},{title:`High & Maintenance Costs`,desc:`Inefficient machines consume more power, require frequent maintenance, and increase overall operating expenses.`},{title:`Limited Customization`,desc:`Many packaging machines cannot adapt to different products, pack sizes, or industry-specific requirements.`}],Qr=[`Quality & Reliability`,`Innovation & Excellence`,`Customer Satisfaction`,`Integrity & Transparency`,`Sustainable Growth`],$r={name:`Shrinivas Reddy`,title:`Founder & Chief Executive Officer`,badge:`Founder & CEO`,photo:`/ceo.jpg`,bio:`With over 14 years of deep-rooted expertise in industrial packaging machinery, Shrinivas Reddy founded Suntech with one conviction — that Indian manufacturers deserve world-class automation without world-class price tags. Under his leadership, Suntech has grown from a single workshop to a trusted name across 9+ industries and 12+ cities. His hands-on approach to engineering and relentless focus on after-sales support have become the DNA of every machine the company builds.`,stats:[{value:`14+`,label:`Years Experience`},{value:`200+`,label:`Projects Delivered`},{value:`9+`,label:`Industries Served`}]},ei=[{value:`740+`,label:`Installations`},{value:`15+`,label:`Cities Pan India`},{value:`99%`,label:`Machine Uptime`},{value:`24/7`,label:`Support Service`}],ti=[`Food Processing`,`Pharmaceutical`,`Chemicals`,`FMCG`,`Seeds & Pulses`,`Spices`,`Detergent`,`Cosmetics`],ni=[{year:`2010`,title:`Company Founded`,desc:`Started our journey with a vision to deliver reliable packaging solutions.`},{year:`2015`,title:`Expanded Manufacturing`,desc:`Upgraded infrastructure and increased production capabilities.`},{year:`2019`,title:`Pan India Operations`,desc:`Strengthened presence across major cities in India.`},{year:`2023`,title:`Automation Solutions`,desc:`Introduced advanced automation for higher efficiency.`},{year:`2026`,title:`740+ Installations`,desc:`Proud to have 740+ successful installations across industries.`}],ri={eye:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),target:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`9`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`5`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`1`})]}),gem:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M6 3h12l3 5-9 13L3 8z`}),(0,N.jsx)(`path`,{d:`M3 8h18M9 3l3 5-3 13M15 3l-3 5 3 13`})]}),check:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`polyline`,{points:`20 6 9 17 4 12`})}),factory:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M3 21V10l5 3V10l5 3V10l5 3v8H3z`}),(0,N.jsx)(`path`,{d:`M3 21h18`})]}),pin:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9`,r:`2.3`})]}),shield:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M12 3l7 3v6c0 5-3.4 8.4-7 9-3.6-.6-7-4-7-9V6l7-3z`}),(0,N.jsx)(`polyline`,{points:`9 12 11 14 15 10`})]}),headset:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,children:[(0,N.jsx)(`path`,{d:`M3 13a9 9 0 0118 0`}),(0,N.jsx)(`rect`,{x:`3`,y:`13`,width:`4`,height:`6`,rx:`1.5`}),(0,N.jsx)(`rect`,{x:`17`,y:`13`,width:`4`,height:`6`,rx:`1.5`})]}),arrow:(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,children:(0,N.jsx)(`path`,{d:`M5 12h14M13 6l6 6-6 6`})})};function ii(){let[e,t]=(0,b.useState)(`vision`),[n,r]=(0,b.useState)(0);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Source+Serif+4:wght@600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .about-root {
          width: 100%;
          background: #fcfbf8;
          font-family: 'Inter', sans-serif;
          color: #1c1917;
          overflow-x: hidden;
        }

        .about-root h1, .about-root h2, .about-root h3 { font-family: var(--font-display); }

        .section { width: 100%; padding: 44px 18px; position: relative; }
        .section-inner { max-width: 1160px; margin: 0 auto; }

        .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: #b8531f; margin-bottom: 12px;
        }
        .eyebrow::before { content: ""; width: 18px; height: 2px; background: #b8531f; display: inline-block; flex-shrink: 0; }

        .section-title { font-size: clamp(22px, 6.5vw, 29px); font-weight: 700; line-height: 1.2; color: #1c1917; letter-spacing: -0.01em; }

        /* ============================================================
           HERO — text LEFT, machine image blended into the right side
           as a soft background element (mobile-first)
           ============================================================ */
        .about-hero {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 40px 18px 32px;
        }

        /* Background machine image — absolutely positioned, blended
           with a gradient mask so it fades into the page background
           instead of sitting as a hard-edged photo. On mobile it sits
           low-opacity behind the text as a full-width backdrop. */
        .about-hero-bgimg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(180deg, rgba(255,255,255,0.94) 0%, rgba(255,255,255,0.75) 45%, rgba(255,255,255,0.94) 100%),
            url('/Machines/Multi-Head VFFS Packaging Machine.png');
          background-repeat: no-repeat;
          background-position: center 60%;
          background-size: 140%;
          opacity: 0.16;
          z-index: 0;
          pointer-events: none;
        }

        .about-hero-grid {
          position: relative;
          z-index: 1;
          max-width: 640px;
          margin: 0 auto;
          text-align: left;
        }

        .about-hero .eyebrow { justify-content: flex-start; }

        .about-hero .section-title { font-size: clamp(24px, 7.5vw, 30px); margin-bottom: 18px; }

        .about-lead {
          font-size: 14px; line-height: 1.75; color: #44403c; margin-bottom: 14px;
        }
        .about-lead strong { color: #1c1917; font-weight: 700; }

        /* ============================================================
           FOUNDER / CEO — "The Vision Behind the Machine" (mobile-first,
           same light/cream/orange theme as rest of the page)
           ============================================================ */
        .founder-section { background: #ffffff; }

        .founder-title {
          font-size: clamp(24px, 8vw, 34px);
          font-weight: 900;
          line-height: 1.08;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: #1c1917;
          margin-bottom: 26px;
        }
        .founder-title .accent { display: block; color: #f59e0b; }

        .founder-card {
          border: 1px solid #ece5da;
          border-radius: 18px;
          background: #ffffff;
          overflow: hidden;
          box-shadow: 0 10px 34px -18px rgba(28, 25, 23, 0.18);
        }

        .founder-photo-wrap {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #f1ebe0;
        }
        .founder-photo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: top center;
          display: block;
        }

        .founder-content {
          padding: 24px 20px 26px;
        }

        .founder-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #6b6560;
          background: #fdf6ee;
          border: 1px solid #ead9c8;
          border-radius: 20px;
          padding: 6px 14px;
          margin-bottom: 16px;
        }
        .founder-badge::before {
          content: "";
          width: 7px; height: 7px; border-radius: 50%;
          background: #f59e0b; flex-shrink: 0;
        }

        .founder-name {
          font-family: 'Source Serif 4', serif;
          font-size: clamp(24px, 7vw, 30px);
          font-weight: 800;
          color: #1c1917;
          line-height: 1.1;
          margin-bottom: 8px;
        }

        .founder-role {
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b8531f;
          margin-bottom: 18px;
        }

        .founder-divider {
          width: 44px;
          height: 3px;
          background: #1c1917;
          border-radius: 2px;
          margin-bottom: 18px;
        }

        .founder-bio {
          font-size: 14px;
          line-height: 1.75;
          color: #57534e;
          margin-bottom: 24px;
        }
        .founder-bio strong { color: #1c1917; font-weight: 700; }

        .founder-stats {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }
        .founder-stat {
          background: #fdf6ee;
          border: 1px solid #ead9c8;
          border-radius: 12px;
          padding: 14px 12px;
          text-align: center;
        }
        .founder-stat-value {
          font-family: 'Source Serif 4', serif;
          font-size: 22px;
          font-weight: 800;
          color: #1c1917;
          line-height: 1;
          margin-bottom: 6px;
        }
        .founder-stat-value .plus { color: #f59e0b; }
        .founder-stat-label {
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #6b6560;
        }

        /* ============ VISION / MISSION / VALUES CARDS (separate section) ============ */
        .vmv-section { background: #fdf6ee; border-top: 1px solid #f0e8db; border-bottom: 1px solid #f0e8db; }

        .vmv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          margin-top: 28px;
        }

        .vmv-card {
          border: 1px solid #ead9c8;
          border-radius: 14px;
          padding: 22px 18px;
          background: linear-gradient(180deg, #fffdfa 0%, #ffffff 100%);
        }

        .vmv-card-icon {
          width: 40px; height: 40px;
          display: flex; align-items: center; justify-content: center;
          border-radius: 10px;
          background: #fdf0e2;
          color: #b8531f;
          margin-bottom: 12px;
        }
        .vmv-card-icon svg { width: 20px; height: 20px; }

        .vmv-card-title {
          font-family: 'Source Serif 4', serif;
          font-size: 17px; font-weight: 700; color: #1c1917; margin-bottom: 9px;
        }

        .vmv-card-text { font-size: 14px; line-height: 1.75; color: #44403c; }

        .values-list { list-style: none; display: flex; flex-direction: column; gap: 9px; margin-top: 2px; }
        .values-list li { display: flex; align-items: center; gap: 9px; font-size: 14px; color: #44403c; font-weight: 500; }
        .values-check { color: #b8531f; flex-shrink: 0; }
        .values-check svg { width: 15px; height: 15px; }

        /* ============ STATS BAR ============ */
        .stats-section { background: #ffffff; border-top: 1px solid #f0e8db; border-bottom: 1px solid #f0e8db; padding: 24px 18px; }
        .stats-grid { max-width: 1160px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .stat-item { display: flex; align-items: center; gap: 12px; min-width: 0; }
        .stat-icon { color: #b8531f; flex-shrink: 0; }
        .stat-icon svg { width: 24px; height: 24px; }
        .stat-value { font-family: 'Source Serif 4', serif; font-size: 21px; font-weight: 800; color: #1c1917; line-height: 1; }
        .stat-label { font-size: 12px; color: #6b6560; margin-top: 4px; }

        /* ============ MARKET CHALLENGES ============ */
        .challenges-section {
          background: radial-gradient(ellipse at top left, #fdf3e7 0%, #fcfbf8 55%);
          border-bottom: 1px solid #f0e8db;
        }

        .challenges-head { display: flex; align-items: flex-end; justify-content: space-between; gap: 20px; flex-wrap: wrap; margin-bottom: 6px; }
        .challenges-count { font-family: 'Source Serif 4', serif; font-size: 13px; color: #a8896a; padding-bottom: 4px; }

        .challenge-accordion { margin-top: 26px; display: flex; flex-direction: column; gap: 10px; }

        .challenge-item {
          border: 1px solid #ead9c8; border-radius: 12px; background: #ffffff; overflow: hidden;
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .challenge-item.open { border-color: #d98a4e; box-shadow: 0 6px 20px -8px rgba(184, 83, 31, 0.25); }

        .challenge-item-head {
          display: flex; align-items: center; gap: 12px; padding: 14px 14px;
          cursor: pointer; background: none; border: none; width: 100%; text-align: left; font-family: inherit;
        }

        .challenge-num { font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 700; color: #cf7132; min-width: 26px; }
        .challenge-item-title { flex: 1; font-size: 14.5px; font-weight: 700; color: #1c1917; }
        .challenge-caret { font-size: 16px; color: #b8531f; transition: transform 0.25s ease; flex-shrink: 0; }
        .challenge-item.open .challenge-caret { transform: rotate(45deg); }

        .challenge-item-body { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
        .challenge-item.open .challenge-item-body { max-height: 220px; }
        .challenge-item-desc { padding: 0 14px 16px 52px; font-size: 13.5px; line-height: 1.7; color: #57534e; }

        .challenge-grid-desktop { display: none; }

        .challenges-summary {
          margin-top: 26px; padding: 18px 20px; background: #1c1917; border-radius: 12px;
          font-size: 14px; line-height: 1.75; color: #e7e2d9; position: relative;
        }
        .challenges-summary::before {
          content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px;
          background: #d98a4e; border-radius: 4px 0 0 4px;
        }

        /* ============ INDUSTRIES WE SERVE ============ */
        .industries-section { background: #fcfbf8; padding-top: 40px; padding-bottom: 40px; }
        .industries-grid {
          margin-top: 24px; display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px;
        }
        .industry-chip {
          display: flex; flex-direction: column; align-items: center; gap: 9px; text-align: center;
          padding: 16px 8px; border: 1px solid #ece5da; border-radius: 12px; background: #ffffff;
          transition: border-color 0.2s ease, transform 0.2s ease;
        }
        .industry-chip:hover { border-color: #d98a4e; transform: translateY(-2px); }
        .industry-icon { color: #b8531f; }
        .industry-icon svg { width: 20px; height: 20px; }
        .industry-name { font-size: 12.5px; font-weight: 600; color: #44403c; }

        /* ============ CTA BANNER — premium, light bg, text left / machine right, COMPACT height ============ */
        .cta-banner {
          position: relative;
          padding: 28px 18px;
          background:
            radial-gradient(ellipse 70% 90% at 88% 50%, rgba(216, 138, 78, 0.16) 0%, rgba(216, 138, 78, 0) 70%),
            linear-gradient(135deg, #fdf6ee 0%, #fefaf5 45%, #fdf0e2 100%);
          border-top: 1px solid #f0e2cd;
          border-bottom: 1px solid #f0e2cd;
          overflow: hidden;
        }
        .cta-inner {
          max-width: 1160px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .cta-content {
          text-align: center;
          max-width: 480px;
        }
        .cta-title { font-size: clamp(20px, 6vw, 24px); font-weight: 700; line-height: 1.22; color: #1c1917; }
        .cta-title .accent { color: #b8531f; }
        .cta-text { margin-top: 10px; font-size: 13.5px; line-height: 1.65; color: #57534e; }
        .cta-btn {
          margin-top: 16px; display: inline-flex; align-items: center; gap: 8px;
          background: #b8531f; color: #fff; border: none; padding: 11px 20px;
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase;
          border-radius: 8px; cursor: pointer; transition: background 0.2s ease, transform 0.2s ease;
          box-shadow: 0 10px 24px -10px rgba(184, 83, 31, 0.55);
        }
        .cta-btn:hover { background: #9c4419; transform: translateY(-2px); }
        .cta-btn svg { width: 15px; height: 15px; }

        .cta-visual {
          position: relative;
          width: 100%;
          max-width: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cta-visual::before {
          content: "";
          position: absolute;
          width: 78%;
          height: 78%;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(253,240,226,0.4) 60%, rgba(253,240,226,0) 100%);
          filter: blur(2px);
        }
        .cta-visual img {
          position: relative;
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 22px 30px rgba(28, 25, 23, 0.18));
        }

        /* ============ JOURNEY ============ */
        .journey-section { background: #ffffff; }
        .journey-list { margin-top: 30px; display: flex; flex-direction: column; gap: 20px; }
        .journey-item { display: flex; gap: 16px; padding-bottom: 20px; border-bottom: 1px solid #ece5da; }
        .journey-item:last-child { border-bottom: none; padding-bottom: 0; }
        .journey-icon {
          width: 42px; height: 42px; flex-shrink: 0; border-radius: 10px;
          background: #fdf0e2; color: #b8531f; display: flex; align-items: center; justify-content: center;
        }
        .journey-icon svg { width: 19px; height: 19px; }
        .journey-year { font-family: 'Source Serif 4', serif; font-size: 18px; font-weight: 800; color: #b8531f; }
        .journey-title { font-size: 15px; font-weight: 700; color: #1c1917; margin-top: 4px; }
        .journey-desc { font-size: 13.5px; line-height: 1.65; color: #6b6560; margin-top: 6px; }

        /* ============================================================
           ≥480px — larger phones
           ============================================================ */
        @media (min-width: 480px) {
          .section { padding: 48px 24px; }
          .about-hero { padding: 48px 24px 36px; }
          .about-lead { font-size: 14.5px; }
          .stats-grid { gap: 22px; }
          .industries-grid { gap: 14px; }
        }

        /* ============================================================
           ≥640px — TABLET
           ============================================================ */
        @media (min-width: 640px) {
          .section { padding: 64px 32px; }
          .section-title { font-size: 33px; }
          .about-lead { font-size: 15.5px; }
          .stats-grid { grid-template-columns: repeat(4, 1fr); }
          .industries-grid { grid-template-columns: repeat(4, 1fr); }
          .cta-banner { padding: 40px 32px; }
          .cta-title { font-size: 28px; }
          .cta-visual { max-width: 280px; }

          .founder-content { padding: 30px 32px 34px; }
          .founder-stats { grid-template-columns: repeat(3, 1fr); }
        }

        /* ============================================================
           ≥768px — HERO becomes a real two-column layout: text left,
           machine image blended into the right side as a large,
           fading visual (no longer a faint full-bleed backdrop)
           ============================================================ */
        @media (min-width: 768px) {
          .about-hero {
            padding: 0;
            display: flex;
            align-items: center;
            min-height: 420px;
          }

          .about-hero-bgimg {
            background-image:
              linear-gradient(90deg, #ffffff 0%, #ffffff 32%, rgba(255,255,255,0.85) 45%, rgba(255,255,255,0.45) 60%, rgba(255,255,255,0.1) 78%, rgba(255,255,255,0) 92%),
              url('/Machines/Multi-Head VFFS Packaging Machine.png');
            background-position: 82% center;
            background-size: auto 92%;
            opacity: 1;
          }

          .about-hero .section-inner {
            width: 100%;
            padding: 56px 32px;
          }

          .about-hero-grid {
            max-width: 560px;
            margin: 0;
          }
        }

        /* ============================================================
           ≥1024px — DESKTOP
           ============================================================ */
        @media (min-width: 1024px) {
          .section { padding: 92px 40px; }

          .about-hero { min-height: 520px; }
          .about-hero .section-inner { padding: 80px 40px; }
          .about-hero-grid { max-width: 620px; }
          .about-hero .section-title { font-size: 36px; }
          .about-lead { font-size: 16px; }

          .about-hero-bgimg {
            background-position: 85% center;
            background-size: auto 88%;
          }

          .founder-title { font-size: 44px; }
          .founder-card { display: flex; align-items: stretch; }
          .founder-photo-wrap { width: 42%; aspect-ratio: auto; flex-shrink: 0; }
          .founder-content { flex: 1; padding: 44px 44px; display: flex; flex-direction: column; justify-content: center; }
          .founder-name { font-size: 32px; }
          .founder-bio { font-size: 14.5px; max-width: 520px; }
          .founder-stats { max-width: 480px; }

          .vmv-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; }

          .challenge-accordion { display: none; }
          .challenge-grid-desktop {
            display: grid; grid-template-columns: repeat(5, 1fr); gap: 18px; margin-top: 36px;
          }
          .challenge-card {
            background: #ffffff; border: 1px solid #ead9c8; border-radius: 14px; padding: 26px 20px;
            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
          }
          .challenge-card:hover {
            transform: translateY(-5px); border-color: #d98a4e;
            box-shadow: 0 18px 32px -16px rgba(184, 83, 31, 0.3);
          }
          .challenge-card-num { font-family: 'Source Serif 4', serif; font-size: 25px; font-weight: 800; color: #e3b585; margin-bottom: 14px; }
          .challenge-card-title { font-size: 15.5px; font-weight: 700; color: #1c1917; margin-bottom: 10px; line-height: 1.35; }
          .challenge-card-desc { font-size: 13.5px; line-height: 1.65; color: #6b6560; }

          .industries-grid { grid-template-columns: repeat(8, 1fr); }

          .cta-banner { padding: 56px 40px; }
          .cta-inner {
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: 40px;
            text-align: left;
          }
          .cta-content { text-align: left; max-width: 460px; }
          .cta-title { font-size: 36px; }
          .cta-visual { max-width: 340px; flex: 1; justify-content: flex-end; }

          .journey-list { flex-direction: row; gap: 0; }
          .journey-item {
            flex: 1; flex-direction: column; border-bottom: none;
            border-right: 1px solid #ece5da; padding: 0 20px;
          }
          .journey-item:last-child { border-right: none; }
        }

        /* ============================================================
           ≥1440px — extra breathing room
           ============================================================ */
        @media (min-width: 1440px) {
          .about-hero-grid { max-width: 660px; }
          .cta-visual { max-width: 400px; }
        }
      `}),(0,N.jsxs)(`div`,{className:`about-root`,children:[(0,N.jsxs)(`section`,{className:`about-hero`,children:[(0,N.jsx)(`div`,{className:`about-hero-bgimg`}),(0,N.jsx)(`div`,{className:`section-inner`,children:(0,N.jsxs)(`div`,{className:`about-hero-grid`,children:[(0,N.jsx)(`div`,{className:`eyebrow`,children:`About Suntech`}),(0,N.jsx)(`h1`,{className:`section-title`,children:`How We Are and What We Do`}),(0,N.jsxs)(`p`,{className:`about-lead`,style:{marginTop:18},children:[(0,N.jsx)(`strong`,{children:`Suntech and Allied Industries`}),` is a leading manufacturer of customized automatic packaging machines, delivering innovative, high-performance solutions for diverse industries. We specialize in designing precision-engineered machines that enhance packaging speed, accuracy, efficiency, and operational reliability.`]}),(0,N.jsx)(`p`,{className:`about-lead`,children:`With a strong focus on quality manufacturing, advanced automation, and customer-centric innovation, we provide end-to-end packaging solutions backed by expert technical support, installation, training, and after-sales service. Our commitment is to help businesses improve productivity, reduce operational costs, and achieve sustainable growth through reliable packaging technology.`})]})})]}),(0,N.jsx)(`section`,{className:`section founder-section`,children:(0,N.jsxs)(`div`,{className:`section-inner`,children:[(0,N.jsxs)(`h2`,{className:`founder-title`,children:[`The Vision`,(0,N.jsx)(`span`,{className:`accent`,children:`Behind the Machine.`})]}),(0,N.jsxs)(`div`,{className:`founder-card`,children:[(0,N.jsx)(`div`,{className:`founder-photo-wrap`,children:(0,N.jsx)(`img`,{src:$r.photo,alt:$r.name})}),(0,N.jsxs)(`div`,{className:`founder-content`,children:[(0,N.jsx)(`span`,{className:`founder-badge`,children:$r.badge}),(0,N.jsx)(`h3`,{className:`founder-name`,children:$r.name}),(0,N.jsx)(`div`,{className:`founder-role`,children:$r.title}),(0,N.jsx)(`div`,{className:`founder-divider`}),(0,N.jsx)(`p`,{className:`founder-bio`,children:$r.bio}),(0,N.jsx)(`div`,{className:`founder-stats`,children:$r.stats.map((e,t)=>(0,N.jsxs)(`div`,{className:`founder-stat`,children:[(0,N.jsxs)(`div`,{className:`founder-stat-value`,children:[e.value.replace(`+`,``),(0,N.jsx)(`span`,{className:`plus`,children:`+`})]}),(0,N.jsx)(`div`,{className:`founder-stat-label`,children:e.label})]},t))})]})]})]})}),(0,N.jsx)(`section`,{className:`section vmv-section`,children:(0,N.jsx)(`div`,{className:`section-inner`,children:(0,N.jsxs)(`div`,{className:`vmv-grid`,children:[(0,N.jsxs)(`div`,{className:`vmv-card`,children:[(0,N.jsx)(`div`,{className:`vmv-card-icon`,children:ri.eye}),(0,N.jsx)(`div`,{className:`vmv-card-title`,children:`Vision`}),(0,N.jsx)(`p`,{className:`vmv-card-text`,children:`To become India's most trusted and globally recognized manufacturer of intelligent packaging machines by delivering innovative, efficient, and customized automation solutions that empower industries with superior productivity and long-term value.`})]}),(0,N.jsxs)(`div`,{className:`vmv-card`,children:[(0,N.jsx)(`div`,{className:`vmv-card-icon`,children:ri.target}),(0,N.jsx)(`div`,{className:`vmv-card-title`,children:`Mission`}),(0,N.jsx)(`p`,{className:`vmv-card-text`,children:`To design and manufacture world-class packaging machines that combine precision, durability, and advanced technology while delivering exceptional customer support, continuous innovation, and customized solutions that drive business growth across multiple industries.`})]}),(0,N.jsxs)(`div`,{className:`vmv-card`,children:[(0,N.jsx)(`div`,{className:`vmv-card-icon`,children:ri.gem}),(0,N.jsx)(`div`,{className:`vmv-card-title`,children:`Core Values`}),(0,N.jsx)(`ul`,{className:`values-list`,children:Qr.map((e,t)=>(0,N.jsxs)(`li`,{children:[(0,N.jsx)(`span`,{className:`values-check`,children:ri.check}),e]},t))})]})]})})}),(0,N.jsx)(`section`,{className:`stats-section`,children:(0,N.jsxs)(`div`,{className:`stats-grid`,children:[(0,N.jsxs)(`div`,{className:`stat-item`,children:[(0,N.jsx)(`span`,{className:`stat-icon`,children:ri.factory}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-value`,children:ei[0].value}),(0,N.jsx)(`div`,{className:`stat-label`,children:ei[0].label})]})]}),(0,N.jsxs)(`div`,{className:`stat-item`,children:[(0,N.jsx)(`span`,{className:`stat-icon`,children:ri.pin}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-value`,children:ei[1].value}),(0,N.jsx)(`div`,{className:`stat-label`,children:ei[1].label})]})]}),(0,N.jsxs)(`div`,{className:`stat-item`,children:[(0,N.jsx)(`span`,{className:`stat-icon`,children:ri.shield}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-value`,children:ei[2].value}),(0,N.jsx)(`div`,{className:`stat-label`,children:ei[2].label})]})]}),(0,N.jsxs)(`div`,{className:`stat-item`,children:[(0,N.jsx)(`span`,{className:`stat-icon`,children:ri.headset}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`stat-value`,children:ei[3].value}),(0,N.jsx)(`div`,{className:`stat-label`,children:ei[3].label})]})]})]})}),(0,N.jsx)(`section`,{className:`section challenges-section`,children:(0,N.jsxs)(`div`,{className:`section-inner`,children:[(0,N.jsxs)(`div`,{className:`challenges-head`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`eyebrow`,children:`Industry Landscape`}),(0,N.jsx)(`h2`,{className:`section-title`,children:`Market Challenges`})]}),(0,N.jsx)(`div`,{className:`challenges-count`,children:`05 key pressures shaping the industry`})]}),(0,N.jsx)(`div`,{className:`challenge-accordion`,children:Zr.map((e,t)=>{let i=n===t;return(0,N.jsxs)(`div`,{className:`challenge-item ${i?`open`:``}`,children:[(0,N.jsxs)(`button`,{className:`challenge-item-head`,onClick:()=>r(i?-1:t),children:[(0,N.jsx)(`span`,{className:`challenge-num`,children:String(t+1).padStart(2,`0`)}),(0,N.jsx)(`span`,{className:`challenge-item-title`,children:e.title}),(0,N.jsx)(`span`,{className:`challenge-caret`,children:`+`})]}),(0,N.jsx)(`div`,{className:`challenge-item-body`,children:(0,N.jsx)(`p`,{className:`challenge-item-desc`,children:e.desc})})]},t)})}),(0,N.jsx)(`div`,{className:`challenge-grid-desktop`,children:Zr.map((e,t)=>(0,N.jsxs)(`div`,{className:`challenge-card`,children:[(0,N.jsx)(`div`,{className:`challenge-card-num`,children:String(t+1).padStart(2,`0`)}),(0,N.jsx)(`div`,{className:`challenge-card-title`,children:e.title}),(0,N.jsx)(`p`,{className:`challenge-card-desc`,children:e.desc})]},t))}),(0,N.jsx)(`div`,{className:`challenges-summary`,children:`The packaging industry is rapidly shifting toward intelligent automation, precision, and operational efficiency. Businesses need reliable, customized, and cost-effective packaging solutions that maximize productivity while minimizing downtime and waste.`})]})}),(0,N.jsx)(`section`,{className:`section industries-section`,children:(0,N.jsxs)(`div`,{className:`section-inner`,children:[(0,N.jsx)(`div`,{className:`eyebrow`,children:`Industries We Serve`}),(0,N.jsx)(`h2`,{className:`section-title`,children:`Trusted Across Sectors`}),(0,N.jsx)(`div`,{className:`industries-grid`,children:ti.map((e,t)=>(0,N.jsxs)(`div`,{className:`industry-chip`,children:[(0,N.jsx)(`span`,{className:`industry-icon`,children:ri.gem}),(0,N.jsx)(`span`,{className:`industry-name`,children:e})]},t))})]})}),(0,N.jsx)(`section`,{className:`cta-banner`,children:(0,N.jsxs)(`div`,{className:`cta-inner`,children:[(0,N.jsxs)(`div`,{className:`cta-content`,children:[(0,N.jsxs)(`h2`,{className:`cta-title`,children:[`Precision Engineering.`,(0,N.jsx)(`br`,{}),(0,N.jsx)(`span`,{className:`accent`,children:`Powering Progress.`})]}),(0,N.jsx)(`p`,{className:`cta-text`,children:`Advanced manufacturing. Intelligent automation. Reliable performance.`}),(0,N.jsxs)(`button`,{className:`cta-btn`,children:[`Explore Machines`,ri.arrow]})]}),(0,N.jsx)(`div`,{className:`cta-visual`,children:(0,N.jsx)(`img`,{src:`/Machines/Labelling%20Machine.png`,alt:`Suntech Labelling Machine`})})]})}),(0,N.jsx)(`section`,{className:`section journey-section`,children:(0,N.jsxs)(`div`,{className:`section-inner`,children:[(0,N.jsx)(`div`,{className:`eyebrow`,children:`Our Journey`}),(0,N.jsx)(`h2`,{className:`section-title`,children:`Milestones That Define Us`}),(0,N.jsx)(`div`,{className:`journey-list`,children:ni.map((e,t)=>(0,N.jsxs)(`div`,{className:`journey-item`,children:[(0,N.jsx)(`div`,{className:`journey-icon`,children:ri.factory}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`journey-year`,children:e.year}),(0,N.jsx)(`div`,{className:`journey-title`,children:e.title}),(0,N.jsx)(`p`,{className:`journey-desc`,children:e.desc})]})]},t))})]})})]})]})}function ai({product:e}){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{className:`mp-card`,children:[(0,N.jsx)(`div`,{className:`mp-card-bar`}),(0,N.jsx)(`div`,{className:`mp-card-img`,children:(0,N.jsx)(`img`,{src:e.image,alt:e.name,loading:`lazy`})}),(0,N.jsxs)(`div`,{className:`mp-card-body`,children:[(0,N.jsx)(`h3`,{className:`mp-card-name`,children:e.name}),(0,N.jsx)(`p`,{className:`mp-card-desc`,children:e.shortDesc}),(0,N.jsxs)(M,{className:`mp-btn-details`,to:`/product/${e.name}`,children:[`View Details`,(0,N.jsx)(`svg`,{viewBox:`0 0 12 12`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,width:`11`,height:`11`,children:(0,N.jsx)(`path`,{d:`M2 6h8M7 3l3 3-3 3`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})]}),(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600&family=Montserrat:wght@400;500;600&display=swap');

        .mp-card {
          background: #ffffff;
          border: 1px solid #ecd9c4;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }

        .mp-card:hover {
          box-shadow: 0 10px 26px rgba(194, 65, 12, 0.09);
          border-color: #f0b489;
          transform: translateY(-3px);
        }

        .mp-card-bar {
          height: 3px;
          background: #ecd9c4;
          transition: background .25s;
        }
        .mp-card:hover .mp-card-bar {
          background: #c2410c;
        }

        .mp-card-img {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #fdf0e4;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 0;
        }

        .mp-card-img img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.35s ease;
        }

        .mp-card:hover .mp-card-img img {
          transform: scale(1.04);
        }

        .mp-card-body {
          padding: 22px 22px 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          flex: 1;
        }

        .mp-card-name {
          font-family: 'Oswald', sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #9a3412;
          margin: 0;
          line-height: 1.35;
          text-transform: uppercase;
          letter-spacing: .01em;
        }

        .mp-card-desc {
          font-family: 'Montserrat', sans-serif;
          font-size: 13.5px;
          color: #8a7563;
          line-height: 1.55;
          margin: 0;
          flex: 1;
        }

        .mp-btn-details {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 6px;
          font-family: 'Oswald', sans-serif;
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #c2410c;
          text-decoration: none;
          width: fit-content;
          transition: gap 0.2s ease, color 0.2s ease;
        }

        .mp-btn-details svg {
          transition: transform 0.2s ease;
        }

        .mp-btn-details:hover {
          color: #9a3412;
          gap: 9px;
        }

        .mp-btn-details:hover svg {
          transform: translateX(2px);
        }
      `})]})}var oi={weighing:{title:`Weighing & Filling`,titleItalic:`Machines`,subtitle:`High-accuracy weighing and volumetric filling solutions for consistent, repeatable output on any production scale.`,slugs:[`Liquid Filling Machine`,`Collar Type VFFS Machine`]},packaging:{title:`Packaging`,titleItalic:`Machines`,subtitle:`Industrial-grade VFFS and pre-made pouch systems for powders, granules, solids and more.`,slugs:[`Packaging Machine`,`Packing Machine`,`Powder Packaging Machine`,`Pouch Packaging Machine`,`Vacuum Packaging Machine`,`Shrink Tunnel Packaging Machine`,`Wrapping Machine`,`Seeds Packaging Machine`,`Scrubber Packaging Machine`]},sealing:{title:`Sealing`,titleItalic:`Machines`,subtitle:`Durable continuous band and chamber-type sealing systems for airtight, tamper-evident closure.`,slugs:[`Sealing Machine`,`Nitrogen Flushing Machine`]},labelling:{title:`Labelling & Coding`,titleItalic:`Machines`,subtitle:`Precision self-adhesive labellers and high-speed inkjet coders for complete traceability.`,slugs:[`Labelling Machine`,`Coding Machine`,`Coder Printer`]}};function si(){let{type:e}=pt();dt();let t=oi[e?.toLowerCase()];if(!t)return(0,N.jsx)(`div`,{style:{minHeight:`100vh`,background:`var(--champagne)`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--font-body)`},children:(0,N.jsxs)(`div`,{style:{textAlign:`center`},children:[(0,N.jsx)(`p`,{style:{fontSize:48,margin:0},children:`⚙️`}),(0,N.jsx)(`h2`,{style:{marginTop:16,fontFamily:`var(--font-display)`,fontSize:28,color:`var(--accent-dark)`,textTransform:`uppercase`},children:`Category Not Found`}),(0,N.jsx)(M,{to:`/products`,style:{marginTop:20,display:`inline-block`,background:`#c2410c`,color:`#fff`,padding:`12px 28px`,textDecoration:`none`,fontSize:13,fontWeight:700,letterSpacing:`.08em`,textTransform:`uppercase`},children:`← All Products`})]})});let n=t.slugs.map(e=>_r.find(t=>t.name===e)).filter(Boolean),r=n[0];return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap');

        :root {
          --orange:       #c2410c;
          --orange-dark:  #9a3412;
          --orange-soft:  #f5813a;
          --orange-tint:  #fdf0e4;
          --orange-tint2: #fbe4cf;
          --cream:        #fffaf3;
          --white:        #ffffff;
          --text:         #3d2b1f;
          --text-muted:   #8a7563;
          --border:       #ecd9c4;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .mp-page {
          background: var(--cream);
          min-height: 100vh;
          font-family: 'Montserrat', sans-serif;
          color: var(--text);
          padding-bottom: 80px;
        }

        /* ── BREADCRUMB ── */
        .mp-crumb {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 14px 24px;
          display: flex; align-items: center; gap: 8px;
          font-family: 'Oswald', sans-serif;
          font-size: 12px; font-weight: 500;
          letter-spacing: .1em; text-transform: uppercase;
        }
        .mp-crumb a { color: var(--text-muted); text-decoration: none; transition: color .2s; }
        .mp-crumb a:hover { color: var(--orange); }
        .mp-crumb-sep { color: var(--border); }
        .mp-crumb-cur { color: var(--orange); }

        /* ── HERO ── */
        .mp-hero {
          background: var(--white);
          border-bottom: 1px solid var(--border);
          padding: 48px 24px;
        }
        .mp-hero-inner {
          max-width: 1160px; margin: 0 auto;
          display: grid; grid-template-columns: 1fr;
          gap: 40px; align-items: center;
        }
        @media (min-width: 780px) {
          .mp-hero-inner { grid-template-columns: 1fr 1fr; gap: 56px; }
        }

        .mp-hero-img {
          background: var(--orange-tint);
          border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          padding: 40px 32px; min-height: 240px; position: relative; overflow: hidden;
        }
        .mp-hero-img::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
        .mp-hero-img img {
          position: relative; z-index: 1;
          max-height: 220px; width: 100%; object-fit: contain;
          filter: drop-shadow(0 10px 20px rgba(194,65,12,0.15));
          transition: transform .5s cubic-bezier(.22,1,.36,1);
        }
        .mp-hero-img:hover img { transform: scale(1.04); }

        .mp-hero-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: .18em; text-transform: uppercase;
          color: var(--orange);
          background: var(--orange-tint);
          border: 1px solid var(--border);
          padding: 5px 12px;
          margin-bottom: 16px;
        }
        .mp-hero-tag::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--orange); flex-shrink: 0;
        }

        .mp-hero-h1 {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(30px, 5vw, 50px);
          font-weight: 600; color: var(--orange-dark);
          line-height: 1.05; letter-spacing: -.01em;
          text-transform: uppercase; margin-bottom: 16px;
        }
        .mp-hero-h1 span { color: var(--orange); display: block; }

        .mp-hero-sub {
          font-size: 14px; color: var(--text-muted);
          line-height: 1.8; font-weight: 400; max-width: 420px;
          margin-bottom: 28px;
        }

        .mp-hero-btns { display: flex; gap: 12px; flex-wrap: wrap; }
        .mp-btn-fill {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--orange); color: #fff;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 12px 24px; border: none; cursor: pointer; text-decoration: none;
          transition: background .2s, transform .15s;
        }
        .mp-btn-fill:hover { background: var(--orange-dark); transform: translateY(-2px); }
        .mp-btn-out {
          display: inline-flex; align-items: center;
          background: transparent; color: var(--orange-dark);
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 500; letter-spacing: .06em; text-transform: uppercase;
          padding: 12px 20px;
          border: 1px solid var(--border); cursor: pointer; text-decoration: none;
          transition: border-color .2s, color .2s;
        }
        .mp-btn-out:hover { border-color: var(--orange); color: var(--orange); }

        /* ── SECTION ── */
        .mp-section {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }

        .mp-section-header {
          display: flex; align-items: center; gap: 16px; margin-bottom: 28px;
          border-bottom: 1px solid var(--border); padding-bottom: 16px;
        }
        .mp-section-label {
          font-family: 'Oswald', sans-serif;
          font-size: 11px; font-weight: 600;
          letter-spacing: .2em; text-transform: uppercase;
          color: var(--orange);
          display: flex; align-items: center; gap: 8px;
        }
        .mp-section-label::before {
          content: ''; width: 24px; height: 2px;
          background: var(--orange);
        }
        .mp-section-title {
          font-family: 'Oswald', sans-serif;
          font-size: 24px; font-weight: 600;
          color: var(--orange-dark); text-transform: uppercase;
          letter-spacing: -.01em;
        }
        .mp-section-count {
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-left: 4px;
        }

        /* ── CARDS GRID ── */
        .mp-grid {
          display: grid; grid-template-columns: 1fr; gap: 18px;
        }
        @media (min-width: 500px) { .mp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (min-width: 800px) { .mp-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── CTA BAND ── */
        .mp-cta {
          max-width: 1160px; margin: 40px auto 0; padding: 0 24px;
        }
        .mp-cta-inner {
          background: var(--white);
          border: 1px solid var(--border);
          border-top: 3px solid var(--orange);
          padding: 36px 40px;
          display: flex; flex-direction: column; gap: 20px;
          position: relative; overflow: hidden;
        }
        .mp-cta-inner::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(194,65,12,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(194,65,12,0.025) 1px, transparent 1px);
          background-size: 36px 36px; pointer-events: none;
        }
        @media (min-width: 600px) {
          .mp-cta-inner { flex-direction: row; align-items: center; justify-content: space-between; }
        }
        .mp-cta-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(19px, 3vw, 28px); font-weight: 600;
          color: var(--orange-dark); text-transform: uppercase; line-height: 1.15;
          position: relative; z-index: 1;
        }
        .mp-cta-title span { color: var(--orange); }
        .mp-cta-sub {
          font-size: 13px; color: var(--text-muted);
          font-weight: 400; margin-top: 6px; position: relative; z-index: 1;
        }
        .mp-cta-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--orange); color: #fff;
          font-family: 'Oswald', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase;
          padding: 14px 28px; border: none; cursor: pointer;
          text-decoration: none; white-space: nowrap; flex-shrink: 0;
          position: relative; z-index: 1;
          transition: background .2s, transform .15s;
        }
        .mp-cta-btn:hover { background: var(--orange-dark); transform: translateY(-2px); }
      `}),(0,N.jsxs)(`div`,{className:`mp-page`,children:[(0,N.jsxs)(`nav`,{className:`mp-crumb`,children:[(0,N.jsx)(`a`,{href:`/`,children:`Home`}),(0,N.jsx)(`span`,{className:`mp-crumb-sep`,children:`›`}),(0,N.jsx)(`a`,{href:`/machines`,children:`Machines`}),(0,N.jsx)(`span`,{className:`mp-crumb-sep`,children:`›`}),(0,N.jsxs)(`span`,{className:`mp-crumb-cur`,children:[t.title,` `,t.titleItalic]})]}),r&&(0,N.jsx)(`div`,{className:`mp-hero`,children:(0,N.jsxs)(`div`,{className:`mp-hero-inner`,children:[(0,N.jsx)(`div`,{className:`mp-hero-img`,children:(0,N.jsx)(`img`,{src:r.image,alt:r.name})}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`mp-hero-tag`,children:[t.title,` `,t.titleItalic]}),(0,N.jsxs)(`h1`,{className:`mp-hero-h1`,children:[t.title,(0,N.jsx)(`span`,{children:t.titleItalic})]}),(0,N.jsx)(`p`,{className:`mp-hero-sub`,children:t.subtitle}),(0,N.jsxs)(`div`,{className:`mp-hero-btns`,children:[(0,N.jsxs)(M,{to:`/contact`,className:`mp-btn-fill`,children:[`Get a Quote`,(0,N.jsx)(`svg`,{viewBox:`0 0 13 13`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,width:`12`,height:`12`,children:(0,N.jsx)(`path`,{d:`M2 6.5h9M7 3l3.5 3.5L7 10`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,N.jsx)(M,{to:`/machines`,className:`mp-btn-out`,children:`All Machines`})]})]})]})}),(0,N.jsxs)(`section`,{className:`mp-section`,children:[(0,N.jsxs)(`div`,{className:`mp-section-header`,children:[(0,N.jsx)(`span`,{className:`mp-section-label`,children:`Range`}),(0,N.jsxs)(`h2`,{className:`mp-section-title`,children:[`All Machines`,(0,N.jsxs)(`span`,{className:`mp-section-count`,children:[`(`,n.length,`)`]})]})]}),(0,N.jsx)(`div`,{className:`mp-grid`,children:n.map(e=>(0,N.jsx)(ai,{product:e},e.name))})]}),(0,N.jsx)(`div`,{className:`mp-cta`,children:(0,N.jsxs)(`div`,{className:`mp-cta-inner`,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`p`,{className:`mp-cta-title`,children:[`Need a `,(0,N.jsx)(`span`,{children:`Custom`}),` Specification?`]}),(0,N.jsx)(`p`,{className:`mp-cta-sub`,children:`We engineer solutions to your exact production requirements.`})]}),(0,N.jsx)(M,{to:`/contact`,className:`mp-cta-btn`,children:`Request Custom Quote →`})]})})]})]})}function ci(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`section`,{className:`am-section`,children:(0,N.jsxs)(`div`,{className:`am-container`,children:[(0,N.jsxs)(`div`,{className:`am-header`,children:[(0,N.jsx)(`span`,{className:`am-label`,children:`Machine Catalogue`}),(0,N.jsx)(`h1`,{className:`am-title`,children:`All Machines`}),(0,N.jsx)(`p`,{className:`am-subtitle`,children:`Explore our complete machine portfolio.`})]}),(0,N.jsx)(`div`,{className:`am-grid`,children:_r.map(e=>(0,N.jsx)(ai,{product:e},e.name))})]})}),(0,N.jsx)(`style`,{children:`
        .am-section {
          padding: 72px 20px;
          background: #ffffff;
          font-family: 'Barlow', sans-serif;
        }

        .am-container {
          max-width: 1240px;
          margin: 0 auto;
        }

        .am-header {
          margin-bottom: 48px;
          max-width: 640px;
        }

        .am-label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #c2410c;
          margin-bottom: 10px;
        }

        .am-title {
          font-size: 34px;
          font-weight: 800;
          color: #111827;
          margin-top: 0;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .am-subtitle {
          color: #6b7280;
          font-size: 15px;
          line-height: 1.6;
          margin: 0;
        }

        .am-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px 32px;
        }

        @media (min-width: 640px) {
          .am-section { padding: 88px 32px; }
          .am-title { font-size: 38px; }
          .am-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .am-grid { grid-template-columns: repeat(3, 1fr); gap: 48px 36px; }
        }

        @media (min-width: 1280px) {
          .am-grid { grid-template-columns: repeat(4, 1fr); }
        }
      `})]})}var li={name:``,email:``,phone:``,message:``};function ui({open:e,onClose:t,source:n=`Brochure Download`,product:r}){let[i,a]=(0,b.useState)(li),[o,s]=(0,b.useState)(!1),[c,l]=(0,b.useState)(``),[u,d]=(0,b.useState)(!1);(0,b.useEffect)(()=>{e||(a(li),l(``),s(!1),d(!1))},[e]);let f=e=>t=>{a(n=>({...n,[e]:t.target.value}))},p=()=>{let e=document.createElement(`a`);e.href=`/suntech_brochure.pdf`,e.download=`suntech_brochure.pdf`,e.target=`_blank`,document.body.appendChild(e),e.click(),document.body.removeChild(e)};return e?(0,N.jsx)(`div`,{style:di,onClick:t,children:(0,N.jsxs)(`div`,{style:fi,onClick:e=>e.stopPropagation(),children:[(0,N.jsx)(`button`,{type:`button`,onClick:t,style:pi,"aria-label":`Close brochure form`,children:`×`}),(0,N.jsx)(`div`,{style:F,children:(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:mi,children:`Download Brochure`}),(0,N.jsx)(`h2`,{style:hi,children:`Get the Suntech product brochure`}),(0,N.jsx)(`p`,{style:gi,children:`Submit your details and the brochure download will begin immediately after the lead is received.`})]})}),u?(0,N.jsxs)(`div`,{style:Ti,children:[(0,N.jsx)(`span`,{style:Ei,children:`✓`}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{style:Di,children:`Thank you!`}),(0,N.jsx)(`p`,{style:Oi,children:`Your request has been submitted. The download should start automatically.`})]})]}):(0,N.jsxs)(`form`,{onSubmit:async e=>{if(e.preventDefault(),!o){if(l(``),!i.name.trim()||!i.email.trim()){l(`Please enter your name and email.`);return}s(!0);try{let e=await fetch(`/api/brochure-lead`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({name:i.name.trim(),email:i.email.trim(),phone:i.phone.trim(),message:i.message.trim(),source:n,product:r})});if(!e.ok){let t=await e.json().catch(()=>({}));throw Error(t.error||`Unable to submit lead.`)}d(!0),p()}catch(e){l(e.message||`Failed to submit the form. Please try again.`)}finally{s(!1)}}},style:_i,children:[(0,N.jsxs)(`label`,{style:vi,children:[`Full Name `,(0,N.jsx)(`span`,{style:yi,children:`*`})]}),(0,N.jsx)(`input`,{type:`text`,value:i.name,onChange:f(`name`),style:bi,placeholder:`Your full name`,required:!0}),(0,N.jsxs)(`label`,{style:vi,children:[`Email `,(0,N.jsx)(`span`,{style:yi,children:`*`})]}),(0,N.jsx)(`input`,{type:`email`,value:i.email,onChange:f(`email`),style:bi,placeholder:`you@company.com`,required:!0}),(0,N.jsx)(`label`,{style:vi,children:`Phone`}),(0,N.jsx)(`input`,{type:`tel`,value:i.phone,onChange:f(`phone`),style:bi,placeholder:`+91 98765 43210`}),(0,N.jsx)(`label`,{style:vi,children:`Message`}),(0,N.jsx)(`textarea`,{value:i.message,onChange:f(`message`),style:xi,placeholder:`Tell us your application, product, or machine interest.`,rows:4}),(0,N.jsxs)(`p`,{style:Ci,children:[`We will send this lead to `,(0,N.jsx)(`strong`,{children:`sales@suntechpac.com`}),` and begin the brochure download on success.`]}),c&&(0,N.jsx)(`div`,{style:wi,children:c}),(0,N.jsx)(`button`,{type:`submit`,style:Si,disabled:o,children:o?`Submitting...`:`Send & Download Brochure`})]})]})}):null}var di={position:`fixed`,inset:0,backgroundColor:`rgba(20, 28, 40, 0.65)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,zIndex:9999},fi={width:`100%`,maxWidth:`520px`,background:`#fff`,borderRadius:`20px`,boxShadow:`0 32px 80px rgba(15, 23, 42, 0.16)`,padding:`30px 30px 26px`,position:`relative`},pi={position:`absolute`,top:`18px`,right:`18px`,width:`36px`,height:`36px`,border:`none`,borderRadius:`50%`,background:`#f4f4f6`,color:`#1f2937`,cursor:`pointer`,fontSize:`22px`,lineHeight:`1`},F={marginBottom:`20px`},mi={margin:0,fontSize:`11px`,letterSpacing:`0.18em`,textTransform:`uppercase`,color:`#b45309`,fontWeight:700},hi={margin:`10px 0 10px`,fontSize:`24px`,lineHeight:`1.2`,color:`#111827`},gi={margin:0,fontSize:`14px`,lineHeight:`1.7`,color:`#4b5563`},_i={display:`grid`,gap:`14px`},vi={fontSize:`12px`,fontWeight:700,letterSpacing:`0.08em`,color:`#374151`,textTransform:`uppercase`},yi={color:`#b45309`},bi={width:`100%`,padding:`14px 16px`,borderRadius:`12px`,border:`1px solid #d1d5db`,fontSize:`15px`,color:`#111827`,background:`#f8fafc`},xi={...bi,minHeight:`104px`,resize:`vertical`},Si={display:`inline-flex`,alignItems:`center`,justifyContent:`center`,width:`100%`,padding:`14px 16px`,borderRadius:`12px`,border:`none`,background:`#e3721b`,color:`#fff`,fontSize:`14px`,fontWeight:700,cursor:`pointer`},Ci={margin:`0`,fontSize:`13px`,color:`#6b7280`,lineHeight:`1.6`},wi={padding:`12px 14px`,borderRadius:`10px`,background:`#fee2e2`,color:`#b91c1c`,fontSize:`13px`},Ti={borderRadius:`16px`,background:`#f9fafb`,padding:`24px`,display:`grid`,gap:`18px`},Ei={width:`52px`,height:`52px`,borderRadius:`50%`,background:`#d1fae5`,color:`#047857`,display:`inline-flex`,alignItems:`center`,justifyContent:`center`,fontSize:`24px`},Di={margin:0,fontSize:`20px`,color:`#111827`},Oi={margin:0,color:`#4b5563`,lineHeight:`1.7`};function ki(){let{name:e}=pt(),t=dt(),[n,r]=(0,b.useState)(!1),[i,a]=(0,b.useState)(!1),[o,s]=(0,b.useState)(`specs`),[c,l]=(0,b.useState)({name:``,contact:``,requirement:``}),[u,d]=(0,b.useState)(!1),f=_r.find(t=>t.name===e);if(!f)return(0,N.jsx)(`div`,{style:L.notFound,children:(0,N.jsxs)(`div`,{style:L.notFoundCard,children:[(0,N.jsx)(`div`,{style:L.notFoundIcon,children:`⚠`}),(0,N.jsx)(`h2`,{style:L.notFoundTitle,children:`Product Not Found`}),(0,N.jsx)(`p`,{style:L.notFoundSub,children:`We couldn't locate this product.`}),(0,N.jsx)(`button`,{onClick:()=>t(-1),style:L.btnPrimary,children:`← Go Back`})]})});let p=Object.entries(f.specs||{}),m=[{label:`Capacity`,value:`100 – 500 kg/hr`},{label:`Functions`,value:`Slicing, dicing, grinding, mixing`},{label:`Application`,value:`Vegetables, fruits, snacks, bakery, namkeen, food factories`},{label:`Compliance`,value:`Food-grade, ISO-compliant`},{label:`Frame`,value:`Heavy-duty SS tubular frame`},{label:`Warranty`,value:`1 Year`}],h=f.highlights||[`Hygienic stainless steel contact parts`,`Precision cutting and mixing performance`,`Energy efficient and low maintenance`,`Suitable for wide range of food products`,`Compact design with high output`],g=()=>{d(!0),setTimeout(()=>{d(!1),r(!1),l({name:``,contact:``,requirement:``})},2e3)};return(0,N.jsxs)(`main`,{style:L.page,children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }

        .pd-back-btn:hover { background: #f3f4f6 !important; color: #1e2a4a !important; }
        .pd-icon-btn:hover { background: #f3f4f6 !important; border-color: #d1d5db !important; }
        .pd-tab:hover { color: #1e2a4a !important; }
        .pd-spec-row:hover td { background: #fff7ed !important; }
        .pd-support-btn:hover { background: #f3f4f6 !important; border-color: #e5a53c !important; }
        .pd-quote-btn:hover { transform: translateY(-1px); box-shadow: 0 10px 24px rgba(229,143,25,0.38) !important; }
        .pd-quote-btn:active { transform: translateY(0px); }
        .pd-action-btn:hover { border-color: #e5a53c !important; color: #e5a53c !important; background: #fff7ed !important; }

        input:focus, textarea:focus {
          outline: none;
          border-color: #e5a53c !important;
          box-shadow: 0 0 0 3px rgba(229,165,60,0.12) !important;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .pd-hero { animation: slideUp 0.45s ease both; }
        .pd-content { animation: slideUp 0.45s 0.08s ease both; }

        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #d1d5db; border-radius: 3px; }

        @media (max-width: 980px) {
          .pd-layout { grid-template-columns: 1fr !important; }
          .pd-hero { position: static !important; }
          .pd-tabbar-inner { flex-wrap: wrap !important; }
          .pd-support-col { grid-column: 1 / -1 !important; }
        }
        @media (max-width: 720px) {
          .pd-feat-grid, .pd-tabs-grid { grid-template-columns: 1fr !important; }
          .pd-cta-banner { flex-direction: column !important; align-items: flex-start !important; text-align: left; }
          .pd-cta-banner-img { display: none !important; }
          .pd-cta-actions { width: 100%; flex-direction: column !important; }
          .pd-cta-actions button { width: 100% !important; }
        }
        @media (max-width: 560px) {
          .pd-header { padding: 0 16px !important; }
          .pd-breadcrumb { display: none !important; }
          .pd-layout { padding: 20px 16px 40px !important; gap: 20px !important; }
          .pd-badges-row { flex-wrap: wrap !important; }
          .pd-tabbar-inner button span.tab-label { display: none !important; }
        }
      `}),(0,N.jsxs)(`header`,{className:`pd-header`,style:L.header,children:[(0,N.jsxs)(`button`,{className:`pd-back-btn`,onClick:()=>t(-1),style:L.backBtn,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 16 16`,fill:`none`,style:{flexShrink:0},children:(0,N.jsx)(`path`,{d:`M10 3L5 8L10 13`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Back`]}),(0,N.jsxs)(`div`,{className:`pd-breadcrumb`,style:L.breadcrumb,children:[(0,N.jsx)(`span`,{style:L.breadcrumbItem,children:`Home`}),(0,N.jsx)(`span`,{style:L.breadcrumbSep,children:`›`}),(0,N.jsx)(`span`,{style:L.breadcrumbItem,children:`Machines`}),(0,N.jsx)(`span`,{style:L.breadcrumbSep,children:`›`}),(0,N.jsx)(`span`,{style:L.breadcrumbCurrent,children:f.name})]}),(0,N.jsxs)(`div`,{style:L.headerActions,children:[(0,N.jsx)(`button`,{className:`pd-icon-btn`,style:L.iconBtn,title:`Print`,children:(0,N.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-6 0h.008v.008H12V10.5Zm-3 0h.008v.008H9V10.5Z`,stroke:`#4b5563`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),(0,N.jsx)(`button`,{className:`pd-icon-btn`,style:L.iconBtn,title:`Share`,children:(0,N.jsxs)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`18`,cy:`5`,r:`2.5`,stroke:`#4b5563`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:`6`,cy:`12`,r:`2.5`,stroke:`#4b5563`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:`18`,cy:`19`,r:`2.5`,stroke:`#4b5563`,strokeWidth:`1.5`}),(0,N.jsx)(`path`,{d:`M8.5 10.5L15.5 6.5M8.5 13.5L15.5 17.5`,stroke:`#4b5563`,strokeWidth:`1.5`})]})})]})]}),(0,N.jsxs)(`div`,{className:`pd-layout`,style:L.layout,children:[(0,N.jsx)(`aside`,{className:`pd-hero`,style:L.heroPan,children:(0,N.jsx)(`div`,{style:L.imageWrap,children:(0,N.jsx)(`img`,{src:f.image,alt:f.name,style:L.productImg})})}),(0,N.jsxs)(`section`,{className:`pd-content`,style:L.contentPan,children:[f.category&&(0,N.jsx)(`div`,{style:L.categoryBadge,children:f.category}),(0,N.jsx)(`h1`,{style:L.productTitle,children:f.name}),(0,N.jsx)(`p`,{style:L.productDesc,children:f.description}),(0,N.jsxs)(`div`,{style:L.valueRow,children:[(0,N.jsxs)(`div`,{style:L.valueItem,children:[(0,N.jsx)(`span`,{style:L.valueIcon,children:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M12 2.75l7 3.11v5.14c0 4.9-3 9.35-7 10.75-4-1.4-7-5.85-7-10.75V5.86l7-3.11z`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M9 12l2 2 4-4.5`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:L.valueTitle,children:`High Performance`}),(0,N.jsx)(`p`,{style:L.valueSub,children:`Built for accuracy and consistency`})]})]}),(0,N.jsxs)(`div`,{style:L.valueItem,children:[(0,N.jsx)(`span`,{style:L.valueIcon,children:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`,stroke:`#e58f19`,strokeWidth:`1.6`}),(0,N.jsx)(`path`,{d:`M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H4a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H10a1.65 1.65 0 001-1.51V4a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V10a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z`,stroke:`#e58f19`,strokeWidth:`1.4`})]})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:L.valueTitle,children:`Durable Construction`}),(0,N.jsx)(`p`,{style:L.valueSub,children:`Heavy-duty SS frame for long life`})]})]}),(0,N.jsxs)(`div`,{style:L.valueItem,children:[(0,N.jsx)(`span`,{style:L.valueIcon,children:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M14.7 6.3a1 1 0 010 1.4l-6 6a1 1 0 01-1.4 0L4.3 10.7a1 1 0 011.4-1.4L8 11.6l5.3-5.3a1 1 0 011.4 0z`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`}),(0,N.jsx)(`path`,{d:`M20 14v3a2 2 0 01-2 2H6a2 2 0 01-2-2v-3`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinecap:`round`})]})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`p`,{style:L.valueTitle,children:`Easy Maintenance`}),(0,N.jsx)(`p`,{style:L.valueSub,children:`User-friendly design for quick service`})]})]})]}),(0,N.jsxs)(`div`,{style:L.ctaGroup,children:[(0,N.jsx)(`button`,{className:`pd-quote-btn`,onClick:()=>r(!0),style:L.btnPrimary,children:`Get a Quote →`}),(0,N.jsxs)(`button`,{className:`pd-action-btn`,style:L.btnSecondary,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Call Us`]}),(0,N.jsxs)(`button`,{className:`pd-action-btn`,style:L.btnSecondary,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M12 16.5V9.75m0 6.75l-2.25-2.25M12 16.5l2.25-2.25M4.5 9.75v9a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5v-9M3 6.75l9-4.5 9 4.5m-18 0l9 4.5m-9-4.5v0m18 0l-9 4.5m9-4.5v0`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Download Brochure`]})]}),(0,N.jsx)(`div`,{className:`pd-badges-row`,style:L.trustRow,children:[`FSSAI`,`CE`,`ISO 9001`].map(e=>(0,N.jsx)(`span`,{style:L.trustBadge,children:e},e))})]})]}),(0,N.jsxs)(`div`,{style:L.tabsSection,children:[(0,N.jsx)(`div`,{style:L.tabBar,children:(0,N.jsx)(`div`,{className:`pd-tabbar-inner`,style:L.tabBarInner,children:[{id:`specs`,label:`Specifications`},{id:`support`,label:`Support`}].map(e=>(0,N.jsxs)(`button`,{className:`pd-tab`,onClick:()=>s(e.id),style:{...L.tabBtn,...o===e.id?L.tabBtnActive:{}},children:[e.id===`specs`&&(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,N.jsx)(`path`,{d:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`})}),e.id===`features`&&(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,N.jsx)(`path`,{d:`M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.98 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinejoin:`round`})}),e.id===`support`&&(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,style:{flexShrink:0},children:(0,N.jsx)(`path`,{d:`M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,N.jsx)(`span`,{className:`tab-label`,children:e.label})]},e.id))})}),(0,N.jsxs)(`div`,{className:`pd-tabs-grid`,style:L.tabsGrid,children:[(0,N.jsxs)(`div`,{style:{...L.panelCard,display:o===`specs`||o===`features`?`block`:`none`},children:[(0,N.jsxs)(`div`,{style:L.panelHeadRow,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12`,stroke:`#e58f19`,strokeWidth:`1.8`,strokeLinecap:`round`})}),(0,N.jsx)(`h3`,{style:L.panelHeadTitle,children:`Specifications`})]}),p.length===0?(0,N.jsx)(`p`,{style:L.emptyMsg,children:`No specifications available.`}):(0,N.jsx)(`table`,{style:L.specTable,children:(0,N.jsx)(`tbody`,{children:p.map(([e,t])=>(0,N.jsxs)(`tr`,{className:`pd-spec-row`,style:L.specRow,children:[(0,N.jsx)(`td`,{style:L.specKey,children:e.replace(/_/g,` `)}),(0,N.jsx)(`td`,{style:L.specVal,children:t})]},e))})})]}),(0,N.jsxs)(`div`,{style:{...L.panelCard,display:o===`specs`||o===`features`?`block`:`none`},children:[(0,N.jsxs)(`div`,{style:L.panelHeadRow,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.98 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinejoin:`round`})}),(0,N.jsx)(`h3`,{style:L.panelHeadTitle,children:`Features`})]}),(0,N.jsx)(`table`,{style:L.specTable,children:(0,N.jsx)(`tbody`,{children:(f.features||m).map((e,t)=>(0,N.jsxs)(`tr`,{className:`pd-spec-row`,style:L.specRow,children:[(0,N.jsx)(`td`,{style:L.specKey,children:typeof e==`string`?e.split(`:`)[0]||e:e.label}),(0,N.jsx)(`td`,{style:L.specVal,children:typeof e==`string`?``:e.value})]},t))})})]}),(0,N.jsxs)(`div`,{className:`pd-support-col`,style:L.highlightCard,children:[(0,N.jsxs)(`div`,{style:L.panelHeadRow,children:[(0,N.jsx)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z`,stroke:`#e58f19`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),(0,N.jsx)(`h3`,{style:L.panelHeadTitle,children:`Key Highlights`})]}),(0,N.jsx)(`ul`,{style:L.highlightList,children:h.map((e,t)=>(0,N.jsxs)(`li`,{style:L.highlightItem,children:[(0,N.jsx)(`span`,{style:L.highlightCheck,children:`✓`}),(0,N.jsx)(`span`,{children:e})]},t))})]})]})]}),n&&(0,N.jsx)(`div`,{style:L.modalOverlay,onClick:()=>r(!1),children:(0,N.jsxs)(`div`,{style:L.modalSheet,onClick:e=>e.stopPropagation(),children:[(0,N.jsxs)(`div`,{style:L.modalHeader,children:[(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`h3`,{style:L.modalTitle,children:`Request a Quote`}),(0,N.jsx)(`p`,{style:L.modalSub,children:f.name})]}),(0,N.jsx)(`button`,{onClick:()=>r(!1),style:L.modalClose,children:`✕`})]}),u?(0,N.jsxs)(`div`,{style:L.successState,children:[(0,N.jsx)(`div`,{style:L.successIcon,children:`✓`}),(0,N.jsx)(`p`,{style:L.successText,children:`Request sent successfully!`}),(0,N.jsx)(`p`,{style:L.successSub,children:`Our team will contact you within 24 hours.`})]}):(0,N.jsxs)(N.Fragment,{children:[(0,N.jsxs)(`div`,{style:L.formGroup,children:[(0,N.jsx)(`label`,{style:L.formLabel,children:`Full Name`}),(0,N.jsx)(`input`,{type:`text`,placeholder:`e.g. Shrinivas Reddy`,value:c.name,onChange:e=>l({...c,name:e.target.value}),style:L.formInput})]}),(0,N.jsxs)(`div`,{style:L.formGroup,children:[(0,N.jsx)(`label`,{style:L.formLabel,children:`Email / Phone`}),(0,N.jsx)(`input`,{type:`text`,placeholder:`your@email.com or +91 XXXXX`,value:c.contact,onChange:e=>l({...c,contact:e.target.value}),style:L.formInput})]}),(0,N.jsxs)(`div`,{style:L.formGroup,children:[(0,N.jsx)(`label`,{style:L.formLabel,children:`Requirement`}),(0,N.jsx)(`textarea`,{placeholder:`Quantity, customization, delivery location...`,rows:3,value:c.requirement,onChange:e=>l({...c,requirement:e.target.value}),style:{...L.formInput,resize:`none`,lineHeight:`1.6`}})]}),(0,N.jsx)(`button`,{className:`pd-quote-btn`,onClick:g,style:{...L.btnPrimary,width:`100%`,marginTop:`8px`},children:`Send Request →`})]})]})}),(0,N.jsx)(ui,{open:i,onClose:()=>a(!1),source:`Product detail`,product:f.name})]})}var I={bg:`#f7f8fa`,surface:`#ffffff`,border:`#e7e9ee`,borderLight:`#f0f1f4`,navy:`#1e2a4a`,text:`#1e2433`,textMuted:`#6b7280`,textDim:`#9ca3af`,accent:`#e58f19`,accentDark:`#cc7d10`,accentLight:`#fff3e0`,accentGlow:`rgba(229,143,25,0.16)`},L={page:{minHeight:`100vh`,background:I.bg,color:I.text,fontFamily:`var(--font-body)`},header:{position:`sticky`,top:0,zIndex:30,background:`rgba(255,255,255,0.9)`,backdropFilter:`blur(10px)`,borderBottom:`1px solid ${I.border}`,height:`60px`,padding:`0 32px`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`16px`},backBtn:{display:`flex`,alignItems:`center`,gap:`6px`,color:I.textMuted,background:`transparent`,border:`none`,cursor:`pointer`,fontSize:`13px`,fontWeight:600,fontFamily:`var(--font-body)`,padding:`7px 12px`,borderRadius:`8px`,transition:`all 0.15s`},breadcrumb:{display:`flex`,alignItems:`center`,gap:`6px`,flex:1,justifyContent:`center`},breadcrumbItem:{fontSize:`12.5px`,color:I.textMuted,fontWeight:500},breadcrumbSep:{color:I.textDim,fontSize:`12px`},breadcrumbCurrent:{fontSize:`12.5px`,color:I.accent,fontWeight:700},headerActions:{display:`flex`,gap:`8px`},iconBtn:{width:`36px`,height:`36px`,display:`flex`,alignItems:`center`,justifyContent:`center`,borderRadius:`8px`,border:`1px solid ${I.border}`,background:`#fff`,cursor:`pointer`,transition:`all 0.15s`},layout:{display:`grid`,gridTemplateColumns:`480px 1fr`,gap:`40px`,maxWidth:`1300px`,margin:`0 auto`,padding:`32px 32px 8px`,alignItems:`start`},heroPan:{position:`sticky`,top:`92px`},imageWrap:{position:`relative`,background:I.surface,border:`1px solid ${I.border}`,borderRadius:`16px`,overflow:`hidden`,aspectRatio:`1 / 1`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`28px`},productImg:{maxWidth:`100%`,maxHeight:`100%`,objectFit:`contain`},contentPan:{display:`flex`,flexDirection:`column`},categoryBadge:{display:`inline-flex`,alignSelf:`flex-start`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.06em`,textTransform:`uppercase`,color:I.accentDark,background:I.accentLight,border:`1px solid #f5d9a8`,padding:`5px 12px`,borderRadius:`20px`,marginBottom:`14px`},productTitle:{fontFamily:`'Poppins', sans-serif`,fontSize:`2.1rem`,fontWeight:700,color:I.navy,lineHeight:1.15,letterSpacing:`-0.01em`,marginBottom:`12px`},productDesc:{fontSize:`0.95rem`,color:I.textMuted,lineHeight:1.65,fontWeight:400,marginBottom:`24px`,maxWidth:`560px`},valueRow:{display:`grid`,gridTemplateColumns:`repeat(3, 1fr)`,gap:`18px`,marginBottom:`26px`,paddingBottom:`26px`,borderBottom:`1px solid ${I.border}`},valueItem:{display:`flex`,flexDirection:`column`,gap:`10px`},valueIcon:{width:`38px`,height:`38px`,borderRadius:`10px`,background:I.accentLight,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},valueTitle:{fontSize:`13.5px`,fontWeight:700,color:I.navy,marginBottom:`3px`},valueSub:{fontSize:`12px`,color:I.textMuted,lineHeight:1.5},ctaGroup:{display:`flex`,flexWrap:`wrap`,gap:`10px`,marginBottom:`20px`},btnPrimary:{background:`linear-gradient(135deg, ${I.accent} 0%, ${I.accentDark} 100%)`,color:`#fff`,border:`none`,borderRadius:`10px`,padding:`13px 24px`,fontSize:`14px`,fontWeight:700,fontFamily:`'Inter', sans-serif`,cursor:`pointer`,letterSpacing:`0.01em`,transition:`all 0.2s ease`,boxShadow:`0 4px 16px rgba(229,143,25,0.3)`,whiteSpace:`nowrap`},btnSecondary:{display:`flex`,alignItems:`center`,justifyContent:`center`,gap:`8px`,background:`#fff`,border:`1.5px solid ${I.border}`,borderRadius:`10px`,padding:`12px 20px`,fontSize:`13.5px`,fontWeight:600,color:I.navy,fontFamily:`var(--font-body)`,cursor:`pointer`,transition:`all 0.15s`,whiteSpace:`nowrap`},trustRow:{display:`flex`,gap:`8px`,flexWrap:`wrap`},trustBadge:{fontSize:`11.5px`,fontWeight:700,letterSpacing:`0.03em`,color:I.textMuted,border:`1px solid ${I.border}`,borderRadius:`6px`,padding:`6px 12px`,background:`#fafafa`},tabsSection:{maxWidth:`1300px`,margin:`0 auto`,padding:`24px 32px 0`},tabBar:{background:I.surface,border:`1px solid ${I.border}`,borderRadius:`14px 14px 0 0`,borderBottom:`none`,padding:`0 8px`},tabBarInner:{display:`flex`,gap:`4px`},tabBtn:{display:`flex`,alignItems:`center`,gap:`8px`,padding:`16px 20px`,border:`none`,borderBottom:`3px solid transparent`,background:`transparent`,color:I.textMuted,fontSize:`14px`,fontWeight:600,fontFamily:`'Inter', sans-serif`,cursor:`pointer`,transition:`all 0.2s ease`,marginBottom:`-1px`},tabBtnActive:{color:I.accent,borderBottom:`3px solid ${I.accent}`},tabsGrid:{display:`grid`,gridTemplateColumns:`1fr 1fr 1fr`,gap:`0`,background:I.surface,border:`1px solid ${I.border}`,borderRadius:`0 0 14px 14px`,overflow:`hidden`},panelCard:{padding:`24px`,borderRight:`1px solid ${I.borderLight}`},panelHeadRow:{display:`flex`,alignItems:`center`,gap:`8px`,marginBottom:`18px`},panelHeadTitle:{fontFamily:`'Poppins', sans-serif`,fontSize:`15px`,fontWeight:700,color:I.navy},specTable:{width:`100%`,borderCollapse:`collapse`},specRow:{borderBottom:`1px solid ${I.borderLight}`,transition:`background 0.15s`},specKey:{padding:`12px 4px`,fontSize:`12.5px`,fontWeight:600,color:I.textMuted,textTransform:`capitalize`,width:`48%`,verticalAlign:`top`},specVal:{padding:`12px 4px`,fontSize:`13px`,fontWeight:600,color:I.navy,textAlign:`right`,verticalAlign:`top`},emptyMsg:{padding:`40px 0`,textAlign:`center`,color:I.textDim,fontSize:`13px`},highlightCard:{padding:`24px`,background:I.accentLight},highlightList:{listStyle:`none`,display:`flex`,flexDirection:`column`,gap:`14px`},highlightItem:{display:`flex`,alignItems:`flex-start`,gap:`10px`,fontSize:`13px`,color:`#57452a`,lineHeight:1.5,fontWeight:500},highlightCheck:{flexShrink:0,width:`18px`,height:`18px`,borderRadius:`5px`,background:I.accent,color:`#fff`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`10px`,fontWeight:800,marginTop:`1px`},ctaBannerWrap:{maxWidth:`1300px`,margin:`0 auto`,padding:`24px 32px 60px`},ctaBanner:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,gap:`24px`,background:`#fff`,border:`1px solid ${I.border}`,borderRadius:`16px`,padding:`28px 32px`,flexWrap:`wrap`},ctaBannerLeft:{display:`flex`,alignItems:`center`,gap:`16px`},ctaBannerIcon:{width:`48px`,height:`48px`,borderRadius:`12px`,background:`linear-gradient(135deg, ${I.accent}, ${I.accentDark})`,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},ctaBannerTitle:{fontFamily:`'Poppins', sans-serif`,fontSize:`17px`,fontWeight:700,color:I.navy,marginBottom:`4px`},ctaBannerSub:{fontSize:`13px`,color:I.textMuted,maxWidth:`420px`},ctaBannerActions:{display:`flex`,gap:`10px`,flexShrink:0},modalOverlay:{position:`fixed`,inset:0,zIndex:50,background:`rgba(15,20,30,0.5)`,backdropFilter:`blur(6px)`,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`24px`,animation:`fadeIn 0.2s ease`},modalSheet:{width:`100%`,maxWidth:`460px`,background:`#fff`,border:`1px solid ${I.border}`,borderRadius:`18px`,padding:`28px`,animation:`slideUp 0.3s ease`,boxShadow:`0 24px 60px rgba(0,0,0,0.2)`},modalHeader:{display:`flex`,alignItems:`flex-start`,justifyContent:`space-between`,marginBottom:`22px`},modalTitle:{fontFamily:`'Poppins', sans-serif`,fontSize:`1.3rem`,fontWeight:700,color:I.navy},modalSub:{fontSize:`12.5px`,color:I.textMuted,marginTop:`4px`},modalClose:{width:`32px`,height:`32px`,borderRadius:`8px`,background:`#f3f4f6`,border:`1px solid ${I.border}`,color:I.textMuted,cursor:`pointer`,display:`flex`,alignItems:`center`,justifyContent:`center`,fontSize:`12px`,transition:`all 0.15s`,fontFamily:`var(--font-body)`},formGroup:{marginBottom:`16px`},formLabel:{display:`block`,fontSize:`11px`,fontWeight:700,letterSpacing:`0.06em`,textTransform:`uppercase`,color:I.textDim,marginBottom:`7px`},formInput:{width:`100%`,background:`#f9fafb`,border:`1.5px solid ${I.border}`,borderRadius:`10px`,padding:`12px 14px`,fontSize:`13.5px`,color:I.text,fontFamily:`var(--font-body)`,transition:`all 0.15s`,display:`block`},successState:{textAlign:`center`,padding:`20px 0`,animation:`fadeIn 0.3s ease`},successIcon:{width:`56px`,height:`56px`,borderRadius:`16px`,background:`#dcfce7`,border:`1px solid #bbf7d0`,color:`#16a34a`,fontSize:`22px`,display:`flex`,alignItems:`center`,justifyContent:`center`,margin:`0 auto 16px`},successText:{fontSize:`17px`,fontWeight:700,color:I.navy,fontFamily:`'Poppins', sans-serif`,marginBottom:`6px`},successSub:{fontSize:`13px`,color:I.textMuted},notFound:{minHeight:`100vh`,background:I.bg,display:`flex`,alignItems:`center`,justifyContent:`center`,fontFamily:`var(--font-body)`},notFoundCard:{textAlign:`center`,padding:`48px 40px`,background:`#fff`,border:`1px solid ${I.border}`,borderRadius:`20px`},notFoundIcon:{fontSize:`32px`,marginBottom:`16px`},notFoundTitle:{fontFamily:`'Poppins', sans-serif`,fontSize:`1.4rem`,fontWeight:700,color:I.navy,marginBottom:`8px`},notFoundSub:{fontSize:`14px`,color:I.textMuted,marginBottom:`24px`}},Ai=[{id:`food-snacks`,name:`Food & Snacks Packaging`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`path`,{d:`M3 6h18M3 12h18M3 18h18`}),(0,N.jsx)(`rect`,{x:`2`,y:`3`,width:`20`,height:`18`,rx:`2`})]}),title:`Food & Snacks Packaging Solutions`,subtitle:`High-Speed Packaging for Namkeen, Chips & Processed Snacks`,description:`Purpose-built packaging systems for namkeen, extruded snacks, chips, biscuits, and ready-to-eat products. Our machines handle fragile products gently while maintaining output speeds of up to 120 packs/min with minimal product breakage.`,image:`https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=700&q=85`,subSolutions:[`Vertical Form Fill Seal (VFFS) Machines`,`Multi-head Combination Weigher Integration`,`Pillow Pouch & Gusseted Bag Packaging`,`Nitrogen Flushing Systems`,`Checkweigher & Metal Detector Lines`],features:[`Output: 20–120 packs/min depending on pack size`,`Servo-driven jaw system for precise seal integrity`,`Compatible with BOPP, Metalized, and Laminated films`,`PLC + HMI touchscreen with recipe storage`,`Quick changeover for multi-SKU production lines`],applications:[`Namkeen & Bhujia`,`Extruded Snacks & Puffed Rice`,`Potato Chips & Wafers`,`Biscuits & Cookies`,`Dry Fruits & Trail Mix`]},{id:`powder-spices`,name:`Powder & Spices Packaging`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`path`,{d:`M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z`}),(0,N.jsx)(`path`,{d:`M8 12h8M12 8v8`})]}),title:`Powder & Spices Packaging Solutions`,subtitle:`Accurate Filling & Dust-Proof Sealing for Free-Flowing Powders`,description:`Engineered for spices, masala blends, turmeric, chilli, flour, and other free-flowing or semi-free-flowing powders. Auger-based filling ensures precise grammage with ±0.5 g accuracy across all pack sizes.`,image:`https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=700&q=85`,subSolutions:[`Auger Filling Machines (50g–5kg)`,`Pouch Form Fill Seal for Powders`,`Sachet & Stick Pack Packaging Lines`,`Vacuum Sealing & Desiccant Insertion`,`Bulk Bag & Stand-Up Pouch Systems`],features:[`Auger filler accuracy: ±0.3–0.5 g across all pack weights`,`Dust-containment filling head — zero contamination`,`Compatible with moisture-barrier and kraft laminate films`,`Anti-bridging agitator for lumpy or sticky powders`,`Speed: 15–80 packs/min (size dependent)`],applications:[`Red Chilli & Turmeric Powder`,`Mixed Masala & Curry Blends`,`Wheat Flour & Gram Flour`,`Coffee & Tea Powder`,`Detergent & Chemical Powders`]},{id:`grains-seeds`,name:`Grains & Seeds Packaging`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`ellipse`,{cx:`12`,cy:`5`,rx:`4`,ry:`2`}),(0,N.jsx)(`path`,{d:`M6 12c0-3 2.5-5 6-5s6 2 6 5c0 4-3 7-6 7s-6-3-6-7z`})]}),title:`Grains & Seeds Packaging Solutions`,subtitle:`Volume & Weight-Based Packaging for Loose Granular Products`,description:`Robust filling systems for rice, dal, pulses, wheat, seeds, and coarse granular materials. Multi-head weighers combined with bagging systems ensure speed and weight consistency across 500g to 50kg pack formats.`,image:`https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=700&q=85`,subSolutions:[`10/14-Head Multihead Combination Weighers`,`Net-Weight Bagging Machines (500g–25kg)`,`Jaw-Sealing Pouch Packing for Pulses`,`FFS Bagging Lines with Conveyor Discharge`,`Stitching & Heat Seal for Woven PP Bags`],features:[`Weighing accuracy: ±1–2g on combination weighers`,`Handles granule sizes from 2mm to 30mm`,`Stainless steel contact parts — food-grade compliant`,`Auto bag-feed with empty-bag rejection system`,`Output: 500g–5kg packs at 40–80 bags/min`],applications:[`Basmati & Non-Basmati Rice`,`Toor, Moong & Chana Dal`,`Wheat, Jowar & Ragi`,`Sesame, Flaxseed & Sunflower Seeds`,`Fertilizer & Agricultural Granules`]},{id:`liquid-filling`,name:`Liquid Filling Solutions`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`path`,{d:`M12 2v6M8 8l4-6 4 6`}),(0,N.jsx)(`path`,{d:`M5 10h14l-1.5 10H6.5L5 10z`})]}),title:`Liquid Filling Solutions`,subtitle:`Volumetric & Gravity Filling for Edible Oils, Sauces & Beverages`,description:`Designed for thin-to-viscous liquids including edible oils, sauces, pickles, beverages, and industrial fluids. Our piston and flowmeter-based fillers deliver clean, drip-free filling with consistent volume accuracy.`,image:`https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=85`,subSolutions:[`Piston Filling Machines (50ml–5L)`,`Overflow & Gravity Fill Systems`,`Rotary Bottle Filling & Capping Lines`,`Pouch Filling & Sealing (Liquid Sachets)`,`Inline Bottle Washing, Filling & Labelling`],features:[`Volumetric accuracy: ±0.5% across all fill sizes`,`Drip-free nozzle design — no product wastage`,`Handles viscosity range: water to thick paste`,`SS 316 contact parts, CIP-compatible design`,`6–32 head configurations for high-speed lines`],applications:[`Edible Oils & Ghee`,`Tomato Ketchup & Sauces`,`Fruit Juices & Drinks`,`Pickle & Chutneys`,`Lubricants & Industrial Liquids`]},{id:`weighing-automation`,name:`Weighing & Filling Automation`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`rect`,{x:`2`,y:`7`,width:`20`,height:`14`,rx:`2`}),(0,N.jsx)(`path`,{d:`M16 7V5a4 4 0 0 0-8 0v2`}),(0,N.jsx)(`line`,{x1:`12`,y1:`12`,x2:`12`,y2:`16`})]}),title:`Weighing & Filling Automation`,subtitle:`Precision Dosing Systems & Automated Batch Weighing`,description:`Integrated weighing and dosing solutions for high-throughput production floors. From single-head electronic weighers to 14-head combination systems, Suntech delivers consistent batch accuracy that reduces give-away and rework.`,image:`https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=85`,subSolutions:[`Multi-head Combination Weighers (10/14/16 Head)`,`Linear Weighers for Sticky Products`,`Automatic Batch Weighing Hoppers`,`Loss-in-Weight Feeders for Dosing Lines`,`Checkweighers with Auto Rejection`],features:[`Weighing speed: up to 120 weighings/min (14-head)`,`Accuracy: ±0.1g–1g depending on product type`,`IP65 washdown rated — suitable for wet environments`,`Modbus/RS485 integration with upstream VFFS machines`,`Automatic tare compensation for film weight variation`],applications:[`Snacks & Fried Products`,`Frozen Vegetables & Seafood`,`Hardware & Industrial Components`,`Confectionery & Candies`,`Fresh Produce & Cut Vegetables`]},{id:`packaging-lines`,name:`End-to-End Packaging Lines`,icon:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`20`,height:`20`,children:[(0,N.jsx)(`path`,{d:`M5 12H2l3-8 3 8H5zm14 0h-3l3-8 3 8h-3z`}),(0,N.jsx)(`path`,{d:`M5 12h14`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`2`})]}),title:`End-to-End Packaging Line Solutions`,subtitle:`Turnkey Line Integration from Raw Material to Finished Carton`,description:`Complete packaging line design, supply, installation, and commissioning. Suntech integrates feeding, weighing, filling, sealing, labelling, coding, and carton packing into a single synchronized production line.`,image:`https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=85`,subSolutions:[`Fully Automatic Integrated Packaging Lines`,`Conveyor & Product Transfer Systems`,`Online Printing & Labelling (TTO / Inkjet / BOPP)`,`Carton Erecting, Packing & Sealing`,`SCADA-Ready Line Monitoring Panels`],features:[`Single-vendor turnkey supply — design to commissioning`,`Line speeds from 30 to 200+ packs/min`,`Modular design — expand capacity without full line replacement`,`CE-compliant electrical panels with safety interlocks`,`On-site installation, trial runs & operator training included`],applications:[`FMCG Snack & Namkeen Plants`,`Flour Mill Packaging Lines`,`Spice Processing & Packing Units`,`Edible Oil Bottling Plants`,`Agro-Processing & Seed Packaging`]}];function ji(){let[e,t]=(0,b.useState)(Ai[0]),[n,r]=(0,b.useState)(0),[i,a]=(0,b.useState)(!1),o=n=>{n.id!==e.id&&(t(n),r(e=>e+1))},s=Ai.findIndex(t=>t.id===e.id);return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg:            #ffffff;
          --surface:       #fbfbfc;
          --surface-alt:   #f4f5f7;
          --border:        #e4e6ea;
          --border-strong: #d7dae0;
          --text-1:        #191c20;
          --text-2:        #4b515a;
          --text-3:        #868c96;
          --accent:        #e0620f;
          --accent-dark:   #b94e0b;
          --accent-tint:   #fdf1e7;
          --accent-tint-2: #fbe4cf;
          --on-accent:     #ffffff;
          --sidebar-w:     272px;
        }

        .sol-root {
          font-family: 'Montserrat', sans-serif;
          background: var(--bg);
          min-height: 100vh; color: var(--text-2);
          -webkit-font-smoothing: antialiased;
        }

        /* ── HEADER ── */
        .sol-header {
          background: var(--surface-alt);
          padding: 36px 16px 32px;
          text-align: center; position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .sol-header::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 100% at 50% 0%, rgba(0,0,0,0.5) 0%, transparent 65%);
          opacity: 0.7;
        }

        .sol-header-badge {
          display: inline-flex; align-items: center; gap: 7px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark);
          background: var(--accent-tint); border: 1px solid var(--accent-tint-2);
          border-radius: 100px; padding: 6px 14px; margin-bottom: 16px;
          position: relative; z-index: 1;
        }
        .sol-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .sol-header-sub {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
          color: var(--text-3); margin-bottom: 10px;
          position: relative; z-index: 1;
        }
        .sol-header-title {
          font-size: clamp(26px, 6vw, 44px); font-weight: 800;
          color: var(--text-1);
          letter-spacing: -0.5px; line-height: 1.12; margin-bottom: 12px;
          position: relative; z-index: 1;
        }
        .sol-header-title span { color: var(--accent); }
        .sol-header-desc {
          font-size: 14px; color: var(--text-2);
          font-weight: 500; max-width: 520px; margin: 0 auto;
          line-height: 1.7; position: relative; z-index: 1;
        }

        /* ── LAYOUT ── */
        .sol-layout {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 1180px; margin: 0 auto;
        }
        @media (min-width: 900px) {
          .sol-layout { grid-template-columns: var(--sidebar-w) 1fr; gap: 24px; padding: 24px 24px 0; }
        }

        /* ── SIDEBAR ── */
        .sol-sidebar {
          background: var(--bg);
          border-bottom: 1px solid var(--border);
          padding: 10px 0;
          position: sticky; top: 0; z-index: 5;
        }
        @media (min-width: 900px) {
          .sol-sidebar {
            border: 1px solid var(--border); border-radius: 16px;
            padding: 16px 0;
            position: sticky; top: 24px;
            height: fit-content;
            align-self: start;
          }
        }

        .sol-sidebar-title {
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--text-3);
          padding: 0 16px 10px;
          display: none;
        }
        @media (min-width: 900px) {
          .sol-sidebar-title {
            display: block;
            border-bottom: 1px solid var(--border); margin-bottom: 6px; padding: 0 20px 14px;
          }
        }

        .sol-nav {
          display: flex; flex-direction: row; overflow-x: auto;
          padding: 0 12px; gap: 4px; scrollbar-width: none;
        }
        .sol-nav::-webkit-scrollbar { display: none; }
        @media (min-width: 900px) {
          .sol-nav { flex-direction: column; overflow-x: visible; padding: 0; gap: 0; }
        }

        .sol-nav-item {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 14px;
          border: none; background: transparent; cursor: pointer;
          text-align: left; position: relative;
          border-radius: 100px;
          flex-shrink: 0; white-space: nowrap;
          transition: background .2s, color .2s;
        }
        .sol-nav-item:hover { background: var(--accent-tint); }
        .sol-nav-item.active { background: var(--accent-tint); }
        @media (min-width: 900px) {
          .sol-nav-item {
            width: 100%; gap: 12px; padding: 12px 20px;
            border-radius: 0; border-left: 3px solid transparent;
            white-space: normal;
          }
          .sol-nav-item.active { border-left-color: var(--accent); background: var(--accent-tint); }
        }

        .sol-nav-icon {
          color: var(--text-3); flex-shrink: 0;
          transition: color .2s;
        }
        .sol-nav-item.active .sol-nav-icon, .sol-nav-item:hover .sol-nav-icon { color: var(--accent); }

        .sol-nav-label {
          font-size: 12.5px; font-weight: 700; color: var(--text-2);
          letter-spacing: 0.1px; line-height: 1.2;
          transition: color .2s;
        }
        @media (min-width: 900px) { .sol-nav-label { font-size: 13.5px; } }
        .sol-nav-item.active .sol-nav-label { color: var(--accent-dark); }

        .sol-nav-arrow {
          margin-left: auto; color: var(--accent);
          opacity: 0; transform: translateX(-4px);
          transition: all .2s; flex-shrink: 0; display: none;
        }
        @media (min-width: 900px) { .sol-nav-arrow { display: flex; } }
        .sol-nav-item.active .sol-nav-arrow { opacity: 1; transform: translateX(0); }

        /* ── CONTENT ── */
        .sol-content {
          padding: 24px 16px 56px;
          background: var(--bg); overflow-y: auto;
        }
        @media (min-width: 900px) { .sol-content { padding: 0 0 64px; } }

        @keyframes solFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .sol-panel {
          animation: solFadeUp .35s cubic-bezier(.22,1,.36,1) both;
          max-width: 760px;
        }

        /* Counter */
        .sol-counter {
          display: flex; align-items: center; gap: 12px; margin-bottom: 16px;
        }
        .sol-counter-num {
          font-size: 12.5px; font-weight: 700; letter-spacing: 0.6px;
          color: var(--accent);
        }
        .sol-counter-line { flex: 1; max-width: 32px; height: 2px; background: var(--border-strong); border-radius: 2px; }
        .sol-counter-cat {
          font-size: 10px; font-weight: 700; letter-spacing: 1.8px; text-transform: uppercase;
          color: var(--text-3);
        }

        /* Title */
        .sol-panel-title {
          font-size: clamp(22px, 4.5vw, 34px); font-weight: 800;
          color: var(--text-1);
          letter-spacing: -0.4px; line-height: 1.14; margin-bottom: 6px;
        }
        .sol-panel-subtitle {
          font-size: 13px; font-weight: 600;
          color: var(--accent-dark); margin-bottom: 18px;
          line-height: 1.4;
        }
        .sol-panel-desc {
          font-size: 14px; font-weight: 500; line-height: 1.75;
          color: var(--text-2); margin-bottom: 24px;
          border-left: 3px solid var(--accent);
          padding-left: 16px;
        }

        /* Image */
        .sol-img-wrap {
          height: 200px; border-radius: 14px; overflow: hidden;
          margin-bottom: 24px; background: var(--surface-alt);
          border: 1px solid var(--border); position: relative;
        }
        @media (min-width: 640px) { .sol-img-wrap { height: 260px; } }
        .sol-img { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .5s ease; }
        .sol-img-wrap:hover .sol-img { transform: scale(1.04); }
        .sol-img-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(25,28,32,.35) 0%, transparent 45%);
          pointer-events: none;
        }
        .sol-img-tag {
          position: absolute; bottom: 12px; left: 12px;
          background: var(--accent); color: #fff;
          font-size: 10px; font-weight: 700; letter-spacing: 1.4px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 100px;
        }

        /* Two-col grid */
        .sol-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 14px; }
        @media (min-width: 640px) { .sol-grid { grid-template-columns: 1fr 1fr; } }

        .sol-card {
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 14px; padding: 18px;
        }
        .sol-card-title {
          font-size: 10.5px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark); margin-bottom: 14px;
          display: flex; align-items: center; gap: 8px;
        }
        .sol-card-title::after { content: ''; flex: 1; height: 1px; background: var(--border); }

        .sol-list { list-style: none; display: flex; flex-direction: column; gap: 9px; }
        .sol-list-item {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 13px; font-weight: 500; color: var(--text-2); line-height: 1.5;
        }
        .sol-list-item::before {
          content: ''; width: 5px; height: 5px; border-radius: 50%;
          background: var(--accent); flex-shrink: 0; margin-top: 6px;
        }

        .sol-feat-item {
          display: flex; align-items: flex-start; gap: 9px;
          font-size: 13px; font-weight: 500; color: var(--text-2); line-height: 1.5;
        }
        .sol-feat-check {
          width: 16px; height: 16px; border-radius: 50%;
          background: var(--accent); color: #fff;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* Apps */
        .sol-apps { display: flex; flex-wrap: wrap; gap: 8px; }
        .sol-app-tag {
          padding: 6px 14px; background: var(--bg);
          border: 1px solid var(--border-strong); border-radius: 100px;
          font-size: 12px; font-weight: 600; letter-spacing: 0.2px;
          color: var(--text-2);
          transition: border-color .2s, color .2s, background .2s; cursor: default;
        }
        .sol-app-tag:hover {
          border-color: var(--accent); color: var(--accent-dark); background: var(--accent-tint);
        }

        /* CTA row */
        .sol-cta-row {
          display: flex; gap: 10px; flex-wrap: wrap;
          margin-top: 24px; padding-top: 22px;
          border-top: 1px solid var(--border);
        }
        .sol-btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 22px; background: var(--accent); color: #fff;
          border: none; border-radius: 10px; cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          transition: background .2s, transform .15s;
        }
        .sol-btn-primary:hover { background: var(--accent-dark); transform: translateY(-1px); }
        .sol-btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 18px; background: transparent; color: var(--text-2);
          border: 1.5px solid var(--border-strong); border-radius: 10px; cursor: pointer;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          transition: border-color .2s, color .2s;
        }
        .sol-btn-ghost:hover { border-color: var(--accent); color: var(--accent-dark); }

        /* Progress */
        .sol-progress { display: flex; gap: 6px; margin-top: 28px; }
        .sol-prog-item {
          flex: 1; height: 3px; border-radius: 3px;
          background: var(--border); cursor: pointer;
          transition: background .3s;
        }
        .sol-prog-item.active { background: var(--accent); }
        .sol-prog-item:hover:not(.active) { background: var(--border-strong); }
      `}),(0,N.jsxs)(`div`,{className:`sol-root`,children:[(0,N.jsxs)(`header`,{className:`sol-header`,children:[(0,N.jsxs)(`div`,{className:`sol-header-badge`,children:[(0,N.jsx)(`span`,{className:`sol-badge-dot`}),`Suntech Engineering Pvt. Ltd.`]}),(0,N.jsx)(`p`,{className:`sol-header-sub`,children:`Packaging Machinery Solutions`}),(0,N.jsxs)(`h1`,{className:`sol-header-title`,children:[`Industrial `,(0,N.jsx)(`span`,{children:`Packaging`}),(0,N.jsx)(`br`,{}),`Solutions`]}),(0,N.jsx)(`p`,{className:`sol-header-desc`,children:`Specialised packaging machinery for food, spices, grains, liquids, and automated production lines — engineered for Indian & global manufacturing standards.`})]}),(0,N.jsxs)(`div`,{className:`sol-layout`,children:[(0,N.jsxs)(`aside`,{className:`sol-sidebar`,children:[(0,N.jsx)(`p`,{className:`sol-sidebar-title`,children:`Solution Categories`}),(0,N.jsx)(`div`,{className:`sol-nav`,children:Ai.map(t=>(0,N.jsxs)(`button`,{className:`sol-nav-item${e.id===t.id?` active`:``}`,onClick:()=>o(t),onMouseEnter:()=>o(t),children:[(0,N.jsx)(`span`,{className:`sol-nav-icon`,children:t.icon}),(0,N.jsx)(`span`,{className:`sol-nav-label`,children:t.name}),(0,N.jsx)(`span`,{className:`sol-nav-arrow`,children:(0,N.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M3 7h8M7 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})})]},t.id))})]}),(0,N.jsx)(`main`,{className:`sol-content`,children:(0,N.jsxs)(`div`,{className:`sol-panel`,children:[(0,N.jsxs)(`div`,{className:`sol-counter`,children:[(0,N.jsxs)(`span`,{className:`sol-counter-num`,children:[String(s+1).padStart(2,`0`),` / `,String(Ai.length).padStart(2,`0`)]}),(0,N.jsx)(`span`,{className:`sol-counter-line`}),(0,N.jsx)(`span`,{className:`sol-counter-cat`,children:`Suntech Solutions`})]}),(0,N.jsx)(`h2`,{className:`sol-panel-title`,children:e.title}),(0,N.jsx)(`p`,{className:`sol-panel-subtitle`,children:e.subtitle}),(0,N.jsx)(`p`,{className:`sol-panel-desc`,children:e.description}),(0,N.jsxs)(`div`,{className:`sol-img-wrap`,children:[(0,N.jsx)(`img`,{src:e.image,alt:e.title,className:`sol-img`}),(0,N.jsx)(`div`,{className:`sol-img-overlay`}),(0,N.jsx)(`span`,{className:`sol-img-tag`,children:`Suntech Machinery`})]}),(0,N.jsxs)(`div`,{className:`sol-grid`,children:[(0,N.jsxs)(`div`,{className:`sol-card`,children:[(0,N.jsx)(`p`,{className:`sol-card-title`,children:`Sub-Solutions`}),(0,N.jsx)(`ul`,{className:`sol-list`,children:e.subSolutions.map((e,t)=>(0,N.jsx)(`li`,{className:`sol-list-item`,children:e},t))})]}),(0,N.jsxs)(`div`,{className:`sol-card`,children:[(0,N.jsx)(`p`,{className:`sol-card-title`,children:`Key Features`}),(0,N.jsx)(`ul`,{className:`sol-list`,children:e.features.map((e,t)=>(0,N.jsxs)(`li`,{className:`sol-feat-item`,children:[(0,N.jsx)(`span`,{className:`sol-feat-check`,children:(0,N.jsx)(`svg`,{width:`8`,height:`8`,viewBox:`0 0 8 8`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M1.5 4l2 2 3-3`,stroke:`white`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})})}),e]},t))})]})]}),(0,N.jsxs)(`div`,{className:`sol-card`,style:{marginBottom:0},children:[(0,N.jsx)(`p`,{className:`sol-card-title`,children:`Industries & Applications`}),(0,N.jsx)(`div`,{className:`sol-apps`,children:e.applications.map((e,t)=>(0,N.jsx)(`span`,{className:`sol-app-tag`,children:e},t))})]}),(0,N.jsxs)(`div`,{className:`sol-cta-row`,children:[(0,N.jsxs)(`button`,{className:`sol-btn-primary`,type:`button`,children:[`Request Quotation`,(0,N.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 14 14`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M2 7H12M8 3l4 4-4 4`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,N.jsx)(`button`,{className:`sol-btn-ghost`,type:`button`,onClick:()=>a(!0),children:`View Brochure`}),(0,N.jsx)(`button`,{className:`sol-btn-ghost`,children:`Talk to an Engineer`})]}),(0,N.jsx)(`div`,{className:`sol-progress`,children:Ai.map((t,n)=>(0,N.jsx)(`div`,{className:`sol-prog-item${e.id===t.id?` active`:``}`,onClick:()=>o(t),title:t.name},t.id))})]},n)})]})]}),(0,N.jsx)(ui,{open:i,onClose:()=>a(!1),source:`Solutions page`})]})}var Mi=[{title:`Namkeen Packaging Setup`,desc:`Complete automatic packaging line installed for a leading snack industry client — tailored for high-volume, airtight output.`,tag:`Snack Industry`,year:`2024`,stat:`1200 packs/hr`,num:`01`},{title:`Spices Packing Unit`,desc:`High-speed powder packing solution with precision filling mechanisms, ensuring zero spillage and consistent weight accuracy.`,tag:`Spice Industry`,year:`2023`,stat:`±0.5g precision`,num:`02`},{title:`Flour Packaging Line`,desc:`Multi-head weigher integration for a flour mill — fully automated from conveyor feed to sealed pouch output.`,tag:`Flour Mill`,year:`2024`,stat:`2 tonne/day`,num:`03`}];function Ni(){return(0,N.jsxs)(`main`,{style:{minHeight:`100vh`,background:`var(--surface)`,fontFamily:`var(--font-body)`,margin:0,padding:0},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        :root {
          --bg:            #ffffff;
          --surface:       #fbfbfc;
          --surface-alt:   #f4f5f7;
          --border:        #e4e6ea;
          --border-strong: #d7dae0;
          --text-1:        #191c20;
          --text-2:        #4b515a;
          --text-3:        #868c96;
          --accent:        #e0620f;
          --accent-dark:   #b94e0b;
          --accent-tint:   #fdf1e7;
          --accent-tint-2: #fbe4cf;
        }
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .proj-hero {
          background: var(--surface-alt);
          padding: 44px 16px 36px;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .proj-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border) 1px, transparent 1px),
            linear-gradient(90deg, var(--border) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 100% at 0% 0%, rgba(0,0,0,0.5) 0%, transparent 65%);
          opacity: 0.7;
        }
        .proj-hero-inner { max-width: 1080px; margin: 0 auto; position: relative; z-index: 1; }

        .proj-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark);
          background: var(--accent-tint); border: 1px solid var(--accent-tint-2);
          border-radius: 100px; padding: 6px 14px; margin-bottom: 18px;
        }
        .proj-eyebrow-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }

        .proj-title {
          font-size: clamp(30px, 8vw, 52px);
          font-weight: 800; color: var(--text-1);
          line-height: 1.08; letter-spacing: -0.6px; margin-bottom: 14px;
        }
        .proj-title span { color: var(--accent); }

        .proj-subtitle {
          font-size: 14.5px; color: var(--text-2);
          font-weight: 500; line-height: 1.7; max-width: 460px;
        }

        /* ── INDEX LIST ── */
        .proj-list {
          max-width: 1080px; margin: 0 auto;
          padding: 8px 16px 40px;
        }

        .proj-row {
          display: flex; flex-direction: column; gap: 16px;
          padding: 28px 0;
          border-bottom: 1px solid var(--border);
          position: relative;
          transition: padding-left .25s ease;
        }
        .proj-row:first-child { padding-top: 32px; }
        .proj-row:last-child { border-bottom: none; }

        @media (min-width: 760px) {
          .proj-row {
            flex-direction: row; align-items: center; gap: 28px;
          }
          .proj-row:hover { padding-left: 8px; }
        }

        .proj-row-num {
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px;
          color: var(--accent);
          flex-shrink: 0;
          width: auto;
        }
        @media (min-width: 760px) {
          .proj-row-num { width: 44px; font-size: 14px; }
        }

        .proj-row-body { flex: 1; min-width: 0; }

        .proj-row-top {
          display: flex; align-items: center; gap: 10px; margin-bottom: 8px; flex-wrap: wrap;
        }
        .proj-row-tag {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 10.5px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;
          color: var(--accent-dark);
          background: var(--accent-tint); border: 1px solid var(--accent-tint-2);
          border-radius: 100px; padding: 4px 11px;
        }
        .proj-row-tag-dot { width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        .proj-row-year {
          font-size: 12px; font-weight: 600; color: var(--text-3);
        }

        .proj-row-title {
          font-size: clamp(18px, 3.5vw, 22px); font-weight: 800;
          color: var(--text-1); letter-spacing: -0.2px;
          margin-bottom: 8px; line-height: 1.2;
        }
        .proj-row-desc {
          font-size: 13.5px; color: var(--text-2);
          line-height: 1.7; font-weight: 500;
          max-width: 520px;
        }

        .proj-row-stat {
          display: flex; align-items: center; gap: 10px;
          flex-shrink: 0;
          padding: 12px 16px;
          background: var(--surface); border: 1px solid var(--border);
          border-radius: 12px;
          align-self: flex-start;
        }
        @media (min-width: 760px) { .proj-row-stat { align-self: center; } }
        .proj-row-stat-icon {
          width: 26px; height: 26px; border-radius: 8px;
          background: var(--accent-tint); color: var(--accent);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .proj-row-stat-text {
          font-size: 12.5px; font-weight: 700; color: var(--text-1);
          letter-spacing: 0.1px; white-space: nowrap;
        }

        /* ── FOOTER NOTE ── */
        .proj-footer {
          max-width: 1080px; margin: 0 auto;
          padding: 0 16px 48px;
          display: flex; align-items: center; gap: 14px;
        }
        .proj-footer-text {
          font-size: 11.5px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase;
          color: var(--text-3); white-space: nowrap;
        }
        .proj-footer-line { flex: 1; height: 1px; background: var(--border); }
      `}),(0,N.jsx)(`div`,{className:`proj-hero`,children:(0,N.jsxs)(`div`,{className:`proj-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`proj-eyebrow`,children:[(0,N.jsx)(`span`,{className:`proj-eyebrow-dot`}),`Our Work`]}),(0,N.jsxs)(`h1`,{className:`proj-title`,children:[`Featured `,(0,N.jsx)(`span`,{children:`Projects`})]}),(0,N.jsx)(`p`,{className:`proj-subtitle`,children:`Real installations. Proven results across India's food processing sector.`})]})}),(0,N.jsx)(`div`,{className:`proj-list`,children:Mi.map((e,t)=>(0,N.jsxs)(`div`,{className:`proj-row`,children:[(0,N.jsx)(`span`,{className:`proj-row-num`,children:e.num}),(0,N.jsxs)(`div`,{className:`proj-row-body`,children:[(0,N.jsxs)(`div`,{className:`proj-row-top`,children:[(0,N.jsxs)(`span`,{className:`proj-row-tag`,children:[(0,N.jsx)(`span`,{className:`proj-row-tag-dot`}),e.tag]}),(0,N.jsx)(`span`,{className:`proj-row-year`,children:e.year})]}),(0,N.jsx)(`h3`,{className:`proj-row-title`,children:e.title}),(0,N.jsx)(`p`,{className:`proj-row-desc`,children:e.desc})]}),(0,N.jsxs)(`div`,{className:`proj-row-stat`,children:[(0,N.jsx)(`span`,{className:`proj-row-stat-icon`,children:(0,N.jsx)(`svg`,{width:`13`,height:`13`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M17 7l-10 10M7 7h10v10`})})}),(0,N.jsx)(`span`,{className:`proj-row-stat-text`,children:e.stat})]})]},t))}),(0,N.jsxs)(`div`,{className:`proj-footer`,children:[(0,N.jsx)(`div`,{className:`proj-footer-line`}),(0,N.jsxs)(`span`,{className:`proj-footer-text`,children:[Mi.length,` projects shown · More available on request`]})]})]})}function Pi(){let[e,t]=(0,b.useState)(!1);return(0,N.jsxs)(`main`,{style:{minHeight:`100vh`,background:`var(--champagne)`,fontFamily:`var(--font-body)`,margin:0,padding:0},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600&display=swap');

        :root {
          --bg:            #f4f4f2;
          --paper:         #ffffff;
          --surface-alt:   #ececea;
          --border:        #d7d8d4;
          --border-strong: #b9bab5;
          --text-1:        #16181a;
          --text-2:        #52565c;
          --text-3:        #8c8f92;
          --steel:         #2e3d4d;
          --accent:        #c2560f;
          --accent-dark:   #9c440b;
          --accent-tint:   #f7e9df;
          --on-accent:     #ffffff;
        }
        * { box-sizing: border-box; }

        .bro-wrap {
          max-width: 1120px; margin: 0 auto;
          padding: 48px 20px 60px;
          position: relative;
        }

        /* faint blueprint grid backdrop */
        .bro-grid-bg {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(to right, rgba(46,61,77,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(46,61,77,0.05) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          mask-image: linear-gradient(to bottom, black, transparent 85%);
        }

        /* ── TOP LABEL ── */
        .bro-eyebrow {
          display: inline-flex; align-items: center; gap: 9px;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
          color: var(--steel);
          border: 1px solid var(--border-strong);
          border-radius: 2px; padding: 7px 12px;
          margin-bottom: 24px;
          position: relative; z-index: 1;
        }
        .bro-eyebrow-dot { width: 7px; height: 7px; background: var(--accent); flex-shrink: 0; }

        /* ── HERO SPLIT ── */
        .bro-hero {
          display: grid; grid-template-columns: 1fr;
          gap: 36px; align-items: stretch;
          margin-bottom: 40px;
          position: relative; z-index: 1;
        }
        @media (min-width: 860px) {
          .bro-hero { grid-template-columns: 1.05fr 0.95fr; gap: 0; }
        }

        .bro-title {
          font-family: 'Oswald', sans-serif;
          font-size: clamp(34px, 7vw, 50px);
          font-weight: 700; color: var(--text-1);
          letter-spacing: -0.2px; text-transform: uppercase;
          line-height: 1.05; margin-bottom: 16px;
        }
        .bro-title span { color: var(--accent); }

        .bro-sub {
          font-size: 15px; color: var(--text-2);
          font-weight: 500; line-height: 1.75;
          max-width: 420px; margin-bottom: 26px;
        }

        .bro-download-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: var(--steel); color: #fff;
          font-size: 13.5px; font-weight: 700; letter-spacing: 0.6px; text-transform: uppercase;
          padding: 15px 26px; border-radius: 2px; border: none; cursor: pointer;
          text-decoration: none;
          transition: background .2s, transform .15s;
        }
        .bro-download-btn:hover { background: var(--accent); transform: translateY(-1px); }
        .bro-download-icon { transition: transform .3s; }
        .bro-download-btn:hover .bro-download-icon { transform: translateY(3px); }

        .bro-notice {
          display: flex; align-items: flex-start; gap: 10px;
          margin-top: 16px; padding: 12px 14px;
          background: var(--accent-tint);
          border-left: 3px solid var(--accent);
          max-width: 440px;
        }
        .bro-notice-icon { flex-shrink: 0; margin-top: 1px; }
        .bro-notice-text {
          font-size: 12px; line-height: 1.55; color: var(--text-2); font-weight: 500;
        }
        .bro-notice-text strong { color: var(--text-1); font-weight: 700; }

        /* ── DOCUMENT / SPEC SHEET VISUAL ── */
        .bro-doc-stage {
          position: relative;
          display: flex; align-items: center; justify-content: center;
          padding: 8px 0;
          border-left: 1px solid var(--border);
        }
        @media (max-width: 859px) { .bro-doc-stage { border-left: none; } }

        .bro-doc-stack { position: relative; width: 216px; height: 288px; }
        .bro-doc-sheet {
          position: absolute; inset: 0;
          background: var(--paper);
          border: 1px solid var(--border-strong);
        }
        .bro-doc-sheet.s2 { transform: translate(-10px, 10px); z-index: 1; opacity: 0.5; }
        .bro-doc-sheet.s1 { transform: translate(-5px, 5px); z-index: 2; opacity: 0.75; }
        .bro-doc-sheet.s0 {
          z-index: 3; padding: 0;
          display: flex; flex-direction: column;
          box-shadow: 0 18px 34px rgba(20,22,24,0.10);
        }

        /* corner brackets — technical drawing marks */
        .bro-corner {
          position: absolute; width: 14px; height: 14px;
          border: 2px solid var(--steel);
        }
        .bro-corner.tl { top: -6px; left: -6px; border-right: none; border-bottom: none; }
        .bro-corner.tr { top: -6px; right: -6px; border-left: none; border-bottom: none; }
        .bro-corner.bl { bottom: -6px; left: -6px; border-right: none; border-top: none; }
        .bro-corner.br { bottom: -6px; right: -6px; border-left: none; border-top: none; }

        .bro-doc-top-bar {
          display: flex; align-items: center; justify-content: space-between;
          padding: 16px 18px 14px;
          border-bottom: 1px solid var(--border);
        }
        .bro-doc-mark {
          width: 24px; height: 24px;
          background: var(--steel);
          display: flex; align-items: center; justify-content: center;
        }
        .bro-doc-pdf-tag {
          font-family: 'IBM Plex Mono', monospace;
          background: var(--accent); color: #fff;
          font-size: 9px; font-weight: 600; letter-spacing: 1.4px;
          padding: 4px 8px;
        }
        .bro-doc-body { padding: 16px 18px; flex: 1; }
        .bro-doc-line { height: 6px; background: var(--surface-alt); margin-bottom: 9px; }
        .bro-doc-line.w-70 { width: 70%; }
        .bro-doc-line.w-90 { width: 90%; }
        .bro-doc-line.w-55 { width: 55%; }
        .bro-doc-line.w-80 { width: 80%; }
        .bro-doc-line.accent { background: var(--accent-tint); height: 8px; }
        .bro-doc-spacer { height: 8px; }
        .bro-doc-footer-row {
          padding: 12px 18px; border-top: 1px solid var(--border);
          display: flex; align-items: center; justify-content: space-between;
        }
        .bro-doc-footer-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; font-weight: 600; letter-spacing: 1.2px; color: var(--text-3); text-transform: uppercase;
        }
        .bro-doc-page-count {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 9px; font-weight: 600; color: var(--accent-dark);
        }

        /* ── STAT / SPEC STRIP ── */
        .bro-stats {
          display: grid; grid-template-columns: repeat(2, 1fr);
          border: 1px solid var(--border);
          margin-bottom: 34px;
          position: relative; z-index: 1;
          background: var(--paper);
        }
        @media (min-width: 640px) { .bro-stats { grid-template-columns: repeat(4, 1fr); } }
        .bro-stat {
          padding: 18px 18px;
          border-right: 1px solid var(--border);
          border-bottom: 1px solid var(--border);
        }
        .bro-stat:nth-child(2n) { border-right: 1px solid var(--border); }
        @media (min-width: 640px) {
          .bro-stat:last-child { border-right: none; }
          .bro-stat { border-bottom: none; }
        }
        .bro-stat-value {
          font-family: 'Oswald', sans-serif;
          font-size: 20px; font-weight: 600; color: var(--text-1); letter-spacing: 0.2px;
        }
        .bro-stat-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 10px; font-weight: 600; color: var(--text-3); letter-spacing: 1px; text-transform: uppercase; margin-top: 4px;
        }

        /* ── INCLUDES SECTION ── */
        .bro-includes-card {
          background: var(--paper); border: 1px solid var(--border);
          padding: 30px 26px;
          margin-bottom: 22px;
          position: relative; z-index: 1;
        }
        .bro-includes-head {
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .bro-includes-title {
          font-family: 'Oswald', sans-serif;
          font-size: 14px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: var(--text-1);
        }
        .bro-includes-line { flex: 1; height: 1px; background: var(--border); }

        .bro-inc-grid {
          display: grid; grid-template-columns: 1fr; gap: 0;
        }
        @media (min-width: 560px) { .bro-inc-grid { grid-template-columns: 1fr 1fr; } }

        .bro-inc-item {
          display: flex; align-items: flex-start; gap: 14px;
          font-size: 13.5px; color: var(--text-2); font-weight: 500; line-height: 1.4;
          padding: 12px 0;
          border-top: 1px solid var(--border);
        }
        .bro-inc-index {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; color: var(--accent-dark);
          flex-shrink: 0; margin-top: 1px;
        }

        .bro-footnote {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
          color: var(--text-3); text-align: center;
          position: relative; z-index: 1;
        }

        @media (max-width: 480px) {
          .bro-includes-card { padding: 22px 18px; }
          .bro-doc-stack { width: 180px; height: 244px; }
        }
      `}),(0,N.jsx)(`div`,{className:`bro-grid-bg`}),(0,N.jsxs)(`div`,{className:`bro-wrap`,children:[(0,N.jsxs)(`div`,{className:`bro-eyebrow`,children:[(0,N.jsx)(`span`,{className:`bro-eyebrow-dot`}),`Technical Resources`]}),(0,N.jsxs)(`div`,{className:`bro-hero`,children:[(0,N.jsxs)(`div`,{style:{padding:`4px 32px 4px 0`},children:[(0,N.jsxs)(`h1`,{className:`bro-title`,children:[`Product `,(0,N.jsx)(`span`,{children:`Brochure`})]}),(0,N.jsx)(`p`,{className:`bro-sub`,children:`A complete overview of our packaging machines, technical specifications, and installation capabilities — everything you need before you get in touch.`}),(0,N.jsxs)(`button`,{type:`button`,onClick:()=>t(!0),className:`bro-download-btn`,children:[(0,N.jsx)(`svg`,{className:`bro-download-icon`,viewBox:`0 0 20 20`,fill:`none`,width:`18`,height:`18`,children:(0,N.jsx)(`path`,{d:`M10 3v10M10 13l-3-3M10 13l3-3M3 16h14`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})}),`Download Brochure`]}),(0,N.jsxs)(`div`,{className:`bro-notice`,children:[(0,N.jsx)(`span`,{className:`bro-notice-icon`,children:(0,N.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`10`,cy:`10`,r:`8`,stroke:`#c2560f`,strokeWidth:`1.6`}),(0,N.jsx)(`path`,{d:`M10 6.5v4.2M10 13.3h.01`,stroke:`#c2560f`,strokeWidth:`1.6`,strokeLinecap:`round`})]})}),(0,N.jsxs)(`span`,{className:`bro-notice-text`,children:[(0,N.jsx)(`strong`,{children:`Please note:`}),` the brochure download will begin only after your contact details have been submitted.`]})]})]}),(0,N.jsx)(`div`,{className:`bro-doc-stage`,children:(0,N.jsxs)(`div`,{className:`bro-doc-stack`,children:[(0,N.jsx)(`div`,{className:`bro-doc-sheet s2`}),(0,N.jsx)(`div`,{className:`bro-doc-sheet s1`}),(0,N.jsxs)(`div`,{className:`bro-doc-sheet s0`,children:[(0,N.jsx)(`span`,{className:`bro-corner tl`}),(0,N.jsx)(`span`,{className:`bro-corner tr`}),(0,N.jsx)(`span`,{className:`bro-corner bl`}),(0,N.jsx)(`span`,{className:`bro-corner br`}),(0,N.jsxs)(`div`,{className:`bro-doc-top-bar`,children:[(0,N.jsx)(`div`,{className:`bro-doc-mark`,children:(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,fill:`none`,stroke:`#ffffff`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`,width:`13`,height:`13`,children:[(0,N.jsx)(`path`,{d:`M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z`}),(0,N.jsx)(`polyline`,{points:`14 2 14 8 20 8`})]})}),(0,N.jsx)(`span`,{className:`bro-doc-pdf-tag`,children:`PDF`})]}),(0,N.jsxs)(`div`,{className:`bro-doc-body`,children:[(0,N.jsx)(`div`,{className:`bro-doc-line accent w-70`}),(0,N.jsx)(`div`,{className:`bro-doc-spacer`}),(0,N.jsx)(`div`,{className:`bro-doc-line w-90`}),(0,N.jsx)(`div`,{className:`bro-doc-line w-80`}),(0,N.jsx)(`div`,{className:`bro-doc-line w-55`}),(0,N.jsx)(`div`,{className:`bro-doc-spacer`}),(0,N.jsx)(`div`,{className:`bro-doc-line w-90`}),(0,N.jsx)(`div`,{className:`bro-doc-line w-70`})]}),(0,N.jsxs)(`div`,{className:`bro-doc-footer-row`,children:[(0,N.jsx)(`span`,{className:`bro-doc-footer-label`,children:`Suntech`}),(0,N.jsx)(`span`,{className:`bro-doc-page-count`,children:`24 PAGES`})]})]})]})})]}),(0,N.jsxs)(`div`,{className:`bro-stats`,children:[(0,N.jsxs)(`div`,{className:`bro-stat`,children:[(0,N.jsx)(`div`,{className:`bro-stat-value`,children:`24`}),(0,N.jsx)(`div`,{className:`bro-stat-label`,children:`Pages`})]}),(0,N.jsxs)(`div`,{className:`bro-stat`,children:[(0,N.jsx)(`div`,{className:`bro-stat-value`,children:`PDF`}),(0,N.jsx)(`div`,{className:`bro-stat-label`,children:`Format`})]}),(0,N.jsxs)(`div`,{className:`bro-stat`,children:[(0,N.jsx)(`div`,{className:`bro-stat-value`,children:`EN / HI`}),(0,N.jsx)(`div`,{className:`bro-stat-label`,children:`Language`})]}),(0,N.jsxs)(`div`,{className:`bro-stat`,children:[(0,N.jsx)(`div`,{className:`bro-stat-value`,children:`2026`}),(0,N.jsx)(`div`,{className:`bro-stat-label`,children:`Edition`})]})]}),(0,N.jsxs)(`div`,{className:`bro-includes-card`,children:[(0,N.jsxs)(`div`,{className:`bro-includes-head`,children:[(0,N.jsx)(`span`,{className:`bro-includes-title`,children:`What's Inside`}),(0,N.jsx)(`span`,{className:`bro-includes-line`})]}),(0,N.jsx)(`div`,{className:`bro-inc-grid`,children:[`Machine specifications & models`,`Technical drawings & dimensions`,`Delivery terms`,`After-sales support details`].map((e,t)=>(0,N.jsxs)(`div`,{className:`bro-inc-item`,children:[(0,N.jsx)(`span`,{className:`bro-inc-index`,children:String(t+1).padStart(2,`0`)}),e]},t))})]})]}),(0,N.jsx)(ui,{open:e,onClose:()=>t(!1),source:`Brochure page`})]})}var Fi=[{name:`General`,items:[`Delivery & Installation`,`Customization`,`Service & Support`]},{name:`Technical`,items:[`Machine Capacity`,`Installation & Setup`,`Operation & Maintenance`]},{name:`Support`,items:[`AMC & Warranty`,`Spare Parts`,`Training`]}],Ii=[{q:`What is delivery time?`,a:`2–4 weeks depending on machine type and customization requirements. Express delivery options are available on request.`},{q:`Do you provide customization?`,a:`Yes — every machine can be tailored to your specific production needs, from hopper size to sealing type and output speed.`},{q:`Do you provide service?`,a:`Absolutely. We offer full post-installation support, scheduled maintenance, and on-site assistance across India.`},{q:`What industries do you serve?`,a:`We cater to namkeen, spices, grains, flour, rice, and a wide range of dry food packaging industries.`}],Li=[{label:`24hr Response`,sub:`Quick support`,icon:`headset`},{label:`Pan India Service`,sub:`Wide network`,icon:`pin`},{label:`500+ Installations`,sub:`Across industries`,icon:`shield`},{label:`Installation Support`,sub:`Expert guidance`,icon:`wrench`}];function Ri({type:e}){let t={width:20,height:20,stroke:`#e0620f`,strokeWidth:1.7,fill:`none`,strokeLinecap:`round`,strokeLinejoin:`round`};return e===`headset`?(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,...t,children:[(0,N.jsx)(`path`,{d:`M4 13v-1a8 8 0 0116 0v1`}),(0,N.jsx)(`rect`,{x:`2.5`,y:`13`,width:`4`,height:`6`,rx:`1.5`}),(0,N.jsx)(`rect`,{x:`17.5`,y:`13`,width:`4`,height:`6`,rx:`1.5`}),(0,N.jsx)(`path`,{d:`M20 19a4 4 0 01-4 4h-2`})]}):e===`pin`?(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,...t,children:[(0,N.jsx)(`path`,{d:`M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`9.5`,r:`2.3`})]}):e===`shield`?(0,N.jsxs)(`svg`,{viewBox:`0 0 24 24`,...t,children:[(0,N.jsx)(`path`,{d:`M12 3l7 3v6c0 4.8-3 8.4-7 9-4-0.6-7-4.2-7-9V6z`}),(0,N.jsx)(`path`,{d:`M9 12l2 2 4-4`})]}):(0,N.jsx)(`svg`,{viewBox:`0 0 24 24`,...t,children:(0,N.jsx)(`path`,{d:`M14.7 6.3a4 4 0 01-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 015.4-5.4l-2.2 2.2-2-.7-.7-2z`})})}function zi(){let[e,t]=(0,b.useState)(0),[n,r]=(0,b.useState)(``),[i,a]=(0,b.useState)({General:!0,Technical:!1,Support:!1}),[o,s]=(0,b.useState)(`Delivery & Installation`),c=(0,b.useMemo)(()=>{if(!n.trim())return Ii;let e=n.toLowerCase();return Ii.filter(t=>t.q.toLowerCase().includes(e)||t.a.toLowerCase().includes(e))},[n]);return(0,N.jsxs)(`main`,{style:{minHeight:`100vh`,background:`var(--surface)`,fontFamily:`var(--font-body)`,margin:0,padding:0},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap');

        :root {
          --bg:            #ffffff;
          --surface:       #fbfbfc;
          --surface-alt:   #f4f5f7;
          --border:        #e4e6ea;
          --border-strong: #d7dae0;
          --text-1:        #191c20;
          --text-2:        #4b515a;
          --text-3:        #868c96;
          --accent:        #e0620f;
          --accent-dark:   #b94e0b;
          --accent-tint:   #fdf1e7;
          --accent-tint-2: #fbe4cf;
          --on-accent:     #ffffff;
        }
        * { box-sizing: border-box; }

        /* ── HERO ── */
        .faq-hero {
          background: var(--accent-tint);
          padding: 48px 20px 40px;
          position: relative; overflow: hidden;
          border-bottom: 1px solid var(--border);
        }
        .faq-hero::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--border-strong) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-strong) 1px, transparent 1px);
          background-size: 32px 32px; pointer-events: none;
          mask-image: radial-gradient(ellipse 70% 100% at 0% 0%, rgba(0,0,0,0.35) 0%, transparent 65%);
        }
        .faq-hero-illustration {
          position: absolute; right: -30px; bottom: -10px;
          width: 380px; max-width: 40%; opacity: 0.35;
          pointer-events: none;
        }
        @media (max-width: 760px) { .faq-hero-illustration { display: none; } }

        .faq-hero-inner { max-width: 1180px; margin: 0 auto; position: relative; z-index: 1; }
        .faq-hero-text { max-width: 640px; }

        .faq-eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: 11px; font-weight: 700; letter-spacing: 1.6px; text-transform: uppercase;
          color: var(--accent-dark);
          margin-bottom: 16px;
        }
        .faq-eyebrow::before { content: ''; width: 22px; height: 2px; background: var(--accent); display: inline-block; }
        .faq-title {
          font-size: clamp(28px, 6vw, 44px);
          font-weight: 800; color: var(--text-1);
          letter-spacing: -0.5px; line-height: 1.12;
          margin-bottom: 14px;
        }
        .faq-title span { color: var(--accent); display: block; }
        .faq-subtitle {
          font-size: 15px; color: var(--text-2);
          font-weight: 500; line-height: 1.7;
          margin-bottom: 30px;
        }

        .faq-stats-row {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 22px 28px;
        }
        @media (min-width: 700px) { .faq-stats-row { grid-template-columns: repeat(4, 1fr); } }
        .faq-stat {
          display: flex; align-items: center; gap: 12px;
        }
        .faq-stat-icon {
          width: 42px; height: 42px; border-radius: 12px;
          background: var(--bg); border: 1px solid var(--accent-tint-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .faq-stat-label { font-size: 13.5px; font-weight: 700; color: var(--text-1); line-height: 1.3; }
        .faq-stat-sub { font-size: 11.5px; font-weight: 500; color: var(--text-3); margin-top: 1px; }

        /* ── LAYOUT ── */
        .faq-layout {
          max-width: 1180px; margin: 0 auto;
          padding: 40px 20px 0;
          display: grid; grid-template-columns: 1fr;
          gap: 28px;
        }
        @media (min-width: 900px) {
          .faq-layout { grid-template-columns: 264px 1fr; gap: 32px; align-items: start; }
        }

        /* ── SIDEBAR ── */
        .faq-sidebar {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 22px 18px;
        }
        @media (min-width: 900px) { .faq-sidebar { position: sticky; top: 24px; } }

        .faq-sidebar-title {
          font-size: 11px; font-weight: 800; letter-spacing: 1.2px; text-transform: uppercase;
          color: var(--text-3); margin-bottom: 14px;
        }
        .faq-cat { margin-bottom: 6px; }
        .faq-cat-head {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between;
          padding: 9px 4px;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          color: var(--text-1);
        }
        .faq-cat-head.active-cat { color: var(--accent); }
        .faq-cat-chevron { transition: transform .2s; color: var(--text-3); }
        .faq-cat-chevron.open { transform: rotate(180deg); }

        .faq-cat-items {
          overflow: hidden; max-height: 0; transition: max-height .3s ease;
        }
        .faq-cat-items.open { max-height: 260px; }

        .faq-cat-item {
          display: block; width: 100%; text-align: left;
          background: none; border: none; cursor: pointer;
          font-size: 13px; font-weight: 500; color: var(--text-2);
          padding: 8px 4px 8px 14px;
          border-left: 2px solid transparent;
          margin-left: 4px;
        }
        .faq-cat-item.active {
          color: var(--accent-dark); font-weight: 700;
          border-left: 2px solid var(--accent);
          background: var(--accent-tint);
          border-radius: 0 8px 8px 0;
        }
        .faq-cat-divider { height: 1px; background: var(--border); margin: 10px 0 14px; }

        /* ── MAIN ── */
        .faq-main { min-width: 0; }

        .faq-search {
          display: flex; align-items: center; gap: 10px;
          background: var(--bg); border: 1px solid var(--border-strong);
          border-radius: 12px; padding: 13px 16px;
          margin-bottom: 22px;
        }
        .faq-search input {
          border: none; outline: none; flex: 1;
          font-family: 'Montserrat', sans-serif;
          font-size: 14px; font-weight: 500; color: var(--text-1);
          background: transparent;
        }
        .faq-search input::placeholder { color: var(--text-3); }

        .faq-list {
          display: flex; flex-direction: column; gap: 12px;
          margin-bottom: 36px;
        }

        .faq-item {
          background: var(--bg);
          border: 1px solid var(--border);
          border-radius: 14px; overflow: hidden;
          transition: border-color .25s, box-shadow .25s;
        }
        .faq-item.is-open {
          border-color: var(--accent);
          box-shadow: 0 6px 24px rgba(224,98,15,0.08);
        }

        .faq-question {
          width: 100%; background: none; border: none;
          padding: 18px 18px;
          display: flex; align-items: center; gap: 16px;
          cursor: pointer; text-align: left;
        }
        .faq-q-number {
          font-size: 18px; font-weight: 800; color: var(--accent);
          letter-spacing: -0.3px; flex-shrink: 0;
          min-width: 30px;
        }
        .faq-q-divider { width: 1px; align-self: stretch; background: var(--border-strong); flex-shrink: 0; }
        .faq-q-text {
          font-size: clamp(14px, 3.2vw, 15.5px); font-weight: 700;
          color: var(--text-1);
          letter-spacing: 0.1px; line-height: 1.35; flex: 1;
        }
        .faq-item.is-open .faq-q-text { color: var(--accent-dark); }

        .faq-icon {
          width: 30px; height: 30px; border-radius: 50%;
          border: 1px solid var(--border-strong);
          background: var(--surface);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; transition: all .25s;
          color: var(--text-3); font-size: 17px;
          font-family: 'Montserrat', sans-serif; font-weight: 400;
        }
        .faq-icon.open {
          background: var(--accent); border-color: var(--accent);
          color: #fff; transform: rotate(45deg);
        }

        .faq-answer {
          max-height: 0; overflow: hidden;
          transition: max-height .4s ease, padding .3s ease;
        }
        .faq-answer.open {
          max-height: 220px; padding-bottom: 20px;
        }
        .faq-a-text {
          font-size: 13.5px; color: var(--text-2);
          line-height: 1.8; font-weight: 500;
          border-left: 3px solid var(--accent);
          padding: 0 18px 0 16px; margin-left: 64px;
        }
        @media (max-width: 480px) { .faq-a-text { margin-left: 46px; } }

        .faq-no-results {
          text-align: center; padding: 32px 16px;
          color: var(--text-3); font-size: 13.5px; font-weight: 500;
          border: 1px dashed var(--border-strong); border-radius: 14px;
        }

        /* ── FOOTER CTA ── */
        .faq-footer {
          padding: 4px 0 40px;
        }
        .faq-footer-card {
          background: var(--accent-tint);
          border: 1px solid var(--accent-tint-2);
          border-radius: 18px; padding: 30px 26px;
          display: flex; align-items: center; justify-content: space-between;
          gap: 20px; flex-wrap: wrap;
          position: relative; overflow: hidden;
        }
        .faq-footer-card::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(var(--accent-tint-2) 1px, transparent 1px),
            linear-gradient(90deg, var(--accent-tint-2) 1px, transparent 1px);
          background-size: 26px 26px; pointer-events: none;
          mask-image: radial-gradient(ellipse 60% 100% at 100% 0%, rgba(0,0,0,0.4) 0%, transparent 70%);
        }
        .faq-footer-left { display: flex; align-items: center; gap: 18px; position: relative; z-index: 1; }
        .faq-footer-icon {
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--bg); border: 1px solid var(--accent-tint-2);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .faq-footer-text {
          font-size: 19px; font-weight: 800; color: var(--text-1);
          letter-spacing: -0.2px;
        }
        .faq-footer-text span { color: var(--accent); }
        .faq-footer-sub {
          font-size: 13px; color: var(--text-2);
          font-weight: 500; margin-top: 4px;
          max-width: 360px;
        }
        .faq-contact-btn {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--accent); color: #fff;
          font-family: 'Montserrat', sans-serif;
          font-size: 13px; font-weight: 700; letter-spacing: 0.2px;
          padding: 14px 24px; border-radius: 10px; border: none; cursor: pointer;
          transition: background .2s, transform .15s; position: relative; z-index: 1;
          white-space: nowrap;
        }
        .faq-contact-btn:hover { background: var(--accent-dark); transform: translateY(-1px); }

        /* ── TRUST LINE ── */
        .faq-trust {
          display: flex; align-items: center; justify-content: center; gap: 8px;
          padding: 0 20px 44px;
          font-size: 13px; font-weight: 600; color: var(--text-2);
        }

        @media (max-width: 480px) {
          .faq-footer-card { flex-direction: column; align-items: flex-start; }
          .faq-contact-btn { width: 100%; justify-content: center; }
        }
      `}),(0,N.jsxs)(`div`,{className:`faq-hero`,children:[(0,N.jsxs)(`svg`,{className:`faq-hero-illustration`,viewBox:`0 0 300 300`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`,children:[(0,N.jsx)(`rect`,{x:`40`,y:`40`,width:`60`,height:`60`,rx:`8`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:`70`,cy:`70`,r:`14`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`rect`,{x:`120`,y:`90`,width:`120`,height:`150`,rx:`10`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`line`,{x1:`120`,y1:`130`,x2:`240`,y2:`130`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`line`,{x1:`120`,y1:`170`,x2:`240`,y2:`170`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`line`,{x1:`120`,y1:`210`,x2:`240`,y2:`210`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`rect`,{x:`150`,y:`240`,width:`60`,height:`30`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:`160`,cy:`270`,r:`8`,stroke:`#b94e0b`,strokeWidth:`1.5`}),(0,N.jsx)(`circle`,{cx:`200`,cy:`270`,r:`8`,stroke:`#b94e0b`,strokeWidth:`1.5`})]}),(0,N.jsxs)(`div`,{className:`faq-hero-inner`,children:[(0,N.jsxs)(`div`,{className:`faq-hero-text`,children:[(0,N.jsx)(`div`,{className:`faq-eyebrow`,children:`Support & Information`}),(0,N.jsxs)(`h1`,{className:`faq-title`,children:[`Frequently`,(0,N.jsx)(`span`,{children:`Asked Questions`})]}),(0,N.jsx)(`p`,{className:`faq-subtitle`,children:`Everything you need to know about our packaging solutions.`})]}),(0,N.jsx)(`div`,{className:`faq-stats-row`,children:Li.map((e,t)=>(0,N.jsxs)(`div`,{className:`faq-stat`,children:[(0,N.jsx)(`div`,{className:`faq-stat-icon`,children:(0,N.jsx)(Ri,{type:e.icon})}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{className:`faq-stat-label`,children:e.label}),(0,N.jsx)(`div`,{className:`faq-stat-sub`,children:e.sub})]})]},t))})]})]}),(0,N.jsxs)(`div`,{className:`faq-layout`,children:[(0,N.jsxs)(`aside`,{className:`faq-sidebar`,children:[(0,N.jsx)(`div`,{className:`faq-sidebar-title`,children:`Browse Categories`}),Fi.map(e=>{let t=i[e.name];return(0,N.jsxs)(`div`,{className:`faq-cat`,children:[(0,N.jsxs)(`button`,{className:`faq-cat-head${t?` active-cat`:``}`,onClick:()=>a(t=>({...t,[e.name]:!t[e.name]})),children:[e.name.toUpperCase(),(0,N.jsx)(`svg`,{className:`faq-cat-chevron${t?` open`:``}`,width:`14`,height:`14`,viewBox:`0 0 20 20`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M5 8l5 5 5-5`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`})})]}),(0,N.jsx)(`div`,{className:`faq-cat-items${t?` open`:``}`,children:e.items.map(e=>(0,N.jsx)(`button`,{className:`faq-cat-item${o===e?` active`:``}`,onClick:()=>s(e),children:e},e))}),(0,N.jsx)(`div`,{className:`faq-cat-divider`})]},e.name)})]}),(0,N.jsxs)(`div`,{className:`faq-main`,children:[(0,N.jsxs)(`div`,{className:`faq-search`,children:[(0,N.jsxs)(`svg`,{width:`17`,height:`17`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,N.jsx)(`circle`,{cx:`9`,cy:`9`,r:`6.5`,stroke:`#868c96`,strokeWidth:`1.6`}),(0,N.jsx)(`path`,{d:`M14 14l4 4`,stroke:`#868c96`,strokeWidth:`1.6`,strokeLinecap:`round`})]}),(0,N.jsx)(`input`,{type:`text`,placeholder:`Search for questions...`,value:n,onChange:e=>r(e.target.value)})]}),(0,N.jsxs)(`div`,{className:`faq-list`,children:[c.length===0&&(0,N.jsx)(`div`,{className:`faq-no-results`,children:`No questions match your search.`}),c.map((n,r)=>(0,N.jsxs)(`div`,{className:`faq-item${e===r?` is-open`:``}`,children:[(0,N.jsxs)(`button`,{className:`faq-question`,onClick:()=>t(e===r?null:r),"aria-expanded":e===r,children:[(0,N.jsx)(`span`,{className:`faq-q-number`,children:String(r+1).padStart(2,`0`)}),(0,N.jsx)(`span`,{className:`faq-q-divider`}),(0,N.jsx)(`span`,{className:`faq-q-text`,children:n.q}),(0,N.jsx)(`span`,{className:`faq-icon${e===r?` open`:``}`,children:`+`})]}),(0,N.jsx)(`div`,{className:`faq-answer${e===r?` open`:``}`,children:(0,N.jsx)(`p`,{className:`faq-a-text`,children:n.a})})]},n.q))]}),(0,N.jsx)(`div`,{className:`faq-footer`,children:(0,N.jsxs)(`div`,{className:`faq-footer-card`,children:[(0,N.jsxs)(`div`,{className:`faq-footer-left`,children:[(0,N.jsx)(`div`,{className:`faq-footer-icon`,children:(0,N.jsx)(Ri,{type:`headset`})}),(0,N.jsxs)(`div`,{children:[(0,N.jsxs)(`div`,{className:`faq-footer-text`,children:[`Still have `,(0,N.jsx)(`span`,{children:`questions?`})]}),(0,N.jsx)(`div`,{className:`faq-footer-sub`,children:`Our team is happy to walk you through every detail before you invest.`})]})]}),(0,N.jsxs)(`button`,{className:`faq-contact-btn`,children:[`Contact Our Team`,(0,N.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 20 20`,fill:`none`,children:(0,N.jsx)(`path`,{d:`M4 10h12M11 5l5 5-5 5`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`})})]})]})})]})]}),(0,N.jsxs)(`div`,{className:`faq-trust`,children:[(0,N.jsxs)(`svg`,{width:`16`,height:`16`,viewBox:`0 0 20 20`,fill:`none`,children:[(0,N.jsx)(`path`,{d:`M10 2l7 3v5c0 4.6-3 8-7 9-4-1-7-4.4-7-9V5z`,stroke:`#191c20`,strokeWidth:`1.5`}),(0,N.jsx)(`path`,{d:`M7.2 10l2 2 3.6-3.6`,stroke:`#191c20`,strokeWidth:`1.5`,strokeLinecap:`round`,strokeLinejoin:`round`})]}),`Reliable Support. Lasting Partnerships.`]})]})}var Bi=[{id:`collect`,num:`01`,title:`Information We Collect`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{d:`M20 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z`}),(0,N.jsx)(`path`,{d:`M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16`})]}),content:`We collect information you provide directly — name, email, phone number, company name, postal address — when you inquire or request a quote. We also collect technical data such as IP address, browser type, device identifiers, and usage data through cookies and analytics.`},{id:`use`,num:`02`,title:`How We Use Information`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,N.jsx)(`path`,{d:`M12 16v-4M12 8h.01`})]}),content:`Your information is used to respond to inquiries and provide customer support, process orders and quotations, improve website experience through analytics, and send administrative updates. Where permitted, we may send marketing communications about our products and services.`},{id:`cookies`,num:`03`,title:`Cookies & Analytics`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`rect`,{width:`18`,height:`12`,x:`3`,y:`6`,rx:`2`}),(0,N.jsx)(`path`,{d:`M3 10h18M7 6V4M17 6V4`})]}),content:`We use cookies and tracking technologies to provide services, remember preferences, and analyse site usage. Third-party services such as Google Analytics may collect usage data. You can manage or disable cookies in your browser settings, though this may affect some functionality.`},{id:`protection`,num:`04`,title:`Data Protection`,icon:(0,N.jsx)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z`})}),content:`We employ reasonable administrative, technical, and physical safeguards to protect personal information from unauthorised access, loss, or misuse. Access to personal data is limited to employees and service providers who require it. No security measure is perfect or impenetrable.`},{id:`third`,num:`05`,title:`Third-Party Links`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{d:`M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71`}),(0,N.jsx)(`path`,{d:`M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71`})]}),content:`Our website may include links to third-party websites including partners and vendors. We do not control those sites and are not responsible for their privacy practices. We encourage you to read the privacy policies of any third-party sites you visit.`},{id:`transfers`,num:`06`,title:`International Transfers`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`circle`,{cx:`12`,cy:`12`,r:`10`}),(0,N.jsx)(`path`,{d:`M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z`})]}),content:`If you are located outside India, information we collect may be transferred to, stored, and processed in India and other countries where our service providers operate. By using the site, you consent to such transfers.`},{id:`rights`,num:`07`,title:`Your Rights`,icon:(0,N.jsxs)(`svg`,{width:`20`,height:`20`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{d:`M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z`}),(0,N.jsx)(`polyline`,{points:`14,2 14,8 20,8`}),(0,N.jsx)(`line`,{x1:`16`,y1:`13`,x2:`8`,y2:`13`}),(0,N.jsx)(`line`,{x1:`16`,y1:`17`,x2:`8`,y2:`17`}),(0,N.jsx)(`polyline`,{points:`10,9 9,9 8,9`})]}),content:`Depending on your jurisdiction, you may have rights to access, update, or delete your personal information. To exercise these rights, contact us using the information provided below. We will respond to your request within a reasonable timeframe.`}];function Vi(){let[e,t]=(0,b.useState)(null);return(0,b.useEffect)(()=>{window.scrollTo(0,0),document.title=`Privacy Policy — SunTech`},[]),(0,N.jsxs)(`div`,{style:{background:`var(--surface)`,minHeight:`100vh`,color:`var(--text-1)`,fontFamily:`var(--font-body)`,overflowX:`hidden`},children:[(0,N.jsx)(`style`,{children:`
        @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Barlow:wght@300;400;500;600&display=swap');

        .pp-hero-line {
          width: 36px;
          height: 2px;
          background: #f5a623;
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
          flex-shrink: 0;
        }

        .pp-section-row {
          border-top: 1px solid #e8eaee;
          transition: background 0.25s;
        }
        .pp-section-row:last-child {
          border-bottom: 1px solid #e8eaee;
        }
        .pp-section-row.open {
          background: #fffbf4;
        }

        .pp-toggle-btn {
          width: 100%;
          background: none;
          border: none;
          cursor: pointer;
          padding: 18px 0;
          display: flex;
          align-items: center;
          gap: 14px;
          text-align: left;
          color: #1a1f2e;
        }

        .pp-num {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          color: #f5a623;
          min-width: 22px;
          flex-shrink: 0;
        }

        .pp-icon {
          color: #c8ccd6;
          flex-shrink: 0;
          transition: color 0.25s;
        }
        .open .pp-icon { color: #f5a623; }

        .pp-title {
          flex: 1;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: clamp(15px, 3.5vw, 17px);
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1a1f2e;
          transition: color 0.25s;
        }
        .open .pp-title { color: #c8860f; }

        .pp-chevron {
          flex-shrink: 0;
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          color: #c8ccd6;
        }
        .open .pp-chevron { transform: rotate(180deg); color: #f5a623; }

        .pp-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1);
          max-height: 0;
        }
        .pp-body.open { max-height: 400px; }

        .pp-contact-card:hover {
          border-color: #f5a623 !important;
          background: #fffbf4 !important;
        }

        .pp-cta:hover {
          background: #e09618 !important;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.55s ease both; }
        .fade-up-1 { animation-delay: 0.05s; }
        .fade-up-2 { animation-delay: 0.12s; }
        .fade-up-3 { animation-delay: 0.18s; }
        .fade-up-4 { animation-delay: 0.24s; }
      `}),(0,N.jsx)(`div`,{style:{borderBottom:`1px solid #e8eaee`,padding:`clamp(36px,7vw,64px) clamp(20px,6vw,48px) clamp(28px,5vw,48px)`,background:`#ffffff`},children:(0,N.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`},children:[(0,N.jsxs)(`div`,{className:`fade-up fade-up-1`,style:{display:`flex`,alignItems:`center`,marginBottom:16},children:[(0,N.jsx)(`span`,{className:`pp-hero-line`}),(0,N.jsx)(`span`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:700,letterSpacing:`0.18em`,textTransform:`uppercase`,color:`#f5a623`},children:`SunTech Packaging Machines`})]}),(0,N.jsxs)(`h1`,{className:`fade-up fade-up-2`,style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:`clamp(30px, 7vw, 52px)`,fontWeight:800,lineHeight:1,textTransform:`uppercase`,letterSpacing:`0.01em`,color:`#1a1f2e`,marginBottom:16},children:[`Privacy`,` `,(0,N.jsx)(`span`,{style:{color:`#f5a623`},children:`Policy`})]}),(0,N.jsxs)(`div`,{className:`fade-up fade-up-3`,style:{display:`flex`,alignItems:`center`,gap:14,flexWrap:`wrap`},children:[(0,N.jsx)(`span`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:600,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`#9ea4b0`},children:`Last updated: May 27, 2026`}),(0,N.jsx)(`span`,{style:{display:`inline-block`,padding:`2px 9px`,border:`1px solid #f5a623`,borderRadius:2,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:10,fontWeight:700,letterSpacing:`0.14em`,textTransform:`uppercase`,color:`#c8860f`,background:`#fff8ec`},children:`v1.0`})]})]})}),(0,N.jsx)(`div`,{style:{background:`#fff8ec`,borderBottom:`1px solid #fde8b8`,padding:`clamp(18px,4vw,28px) clamp(20px,6vw,48px)`},children:(0,N.jsx)(`div`,{style:{maxWidth:760,margin:`0 auto`},children:(0,N.jsxs)(`p`,{className:`fade-up fade-up-4`,style:{fontSize:`clamp(13px,3vw,15px)`,lineHeight:1.85,color:`#4a5068`,margin:0},children:[(0,N.jsx)(`strong`,{style:{color:`#c8860f`,fontWeight:600},children:`SunTech Packaging Machines`}),` is committed to protecting the privacy of visitors and customers. This policy describes how we collect, use, and protect your personal information when you visit suntechpac.com or interact with us.`]})})}),(0,N.jsx)(`div`,{style:{maxWidth:760,margin:`0 auto`,padding:`clamp(24px,5vw,44px) clamp(20px,6vw,48px)`},children:Bi.map(n=>{let r=e===n.id;return(0,N.jsxs)(`div`,{className:`pp-section-row${r?` open`:``}`,children:[(0,N.jsxs)(`button`,{className:`pp-toggle-btn`,onClick:()=>t(r?null:n.id),"aria-expanded":r,children:[(0,N.jsx)(`span`,{className:`pp-num`,children:n.num}),(0,N.jsx)(`span`,{className:`pp-icon`,children:n.icon}),(0,N.jsx)(`span`,{className:`pp-title`,children:n.title}),(0,N.jsx)(`svg`,{className:`pp-chevron`,width:`17`,height:`17`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`m6 9 6 6 6-6`})})]}),(0,N.jsx)(`div`,{className:`pp-body${r?` open`:``}`,children:(0,N.jsx)(`p`,{style:{margin:`0 0 22px`,paddingLeft:`clamp(0px,4vw,36px)`,fontSize:`clamp(13px,3vw,14px)`,lineHeight:1.85,color:`#5a6070`},children:n.content})})]},n.id)})}),(0,N.jsx)(`div`,{style:{borderTop:`1px solid #e8eaee`,padding:`clamp(32px,7vw,56px) clamp(20px,6vw,48px)`,background:`#f7f8fa`},children:(0,N.jsxs)(`div`,{style:{maxWidth:760,margin:`0 auto`},children:[(0,N.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:10,marginBottom:8},children:[(0,N.jsx)(`span`,{className:`pp-hero-line`,style:{width:28}}),(0,N.jsx)(`span`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:700,letterSpacing:`0.16em`,textTransform:`uppercase`,color:`#f5a623`},children:`Contact`})]}),(0,N.jsxs)(`h2`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontWeight:800,fontSize:`clamp(22px,5vw,36px)`,textTransform:`uppercase`,letterSpacing:`0.02em`,color:`#1a1f2e`,marginBottom:24,lineHeight:1.1},children:[`Questions?`,` `,(0,N.jsx)(`span`,{style:{color:`#9ea4b0`},children:`We're here.`})]}),(0,N.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fit, minmax(200px, 1fr))`,gap:10,marginBottom:28},children:[{label:`Email`,value:`privacy@suntech.in`,href:`mailto:privacy@suntech.in`,icon:(0,N.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#f5a623`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`}),(0,N.jsx)(`path`,{d:`m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7`})]})},{label:`Phone`,value:`+91 89750 91999`,href:`tel:+918975091999`,icon:(0,N.jsx)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#f5a623`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.85a16 16 0 0 0 6.29 6.29l1.94-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z`})})},{label:`Address`,value:`MIDC Bhiwandi, MH – 421302`,href:null,icon:(0,N.jsxs)(`svg`,{width:`18`,height:`18`,viewBox:`0 0 24 24`,fill:`none`,stroke:`#f5a623`,strokeWidth:`1.6`,strokeLinecap:`round`,strokeLinejoin:`round`,children:[(0,N.jsx)(`path`,{d:`M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z`}),(0,N.jsx)(`circle`,{cx:`12`,cy:`10`,r:`3`})]})}].map(e=>(0,N.jsxs)(`a`,{href:e.href||void 0,className:`pp-contact-card`,style:{display:`flex`,alignItems:`center`,gap:14,padding:`15px 16px`,background:`#ffffff`,border:`1px solid #e8eaee`,borderRadius:6,textDecoration:`none`,color:`#2d3347`,cursor:e.href?`pointer`:`default`,transition:`border-color 0.2s, background 0.2s`},children:[(0,N.jsx)(`span`,{style:{width:36,height:36,background:`#fff8ec`,border:`1px solid #fde8b8`,borderRadius:6,display:`flex`,alignItems:`center`,justifyContent:`center`,flexShrink:0},children:e.icon}),(0,N.jsxs)(`div`,{children:[(0,N.jsx)(`div`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:10,fontWeight:700,letterSpacing:`0.14em`,textTransform:`uppercase`,color:`#c8860f`,marginBottom:2},children:e.label}),(0,N.jsx)(`div`,{style:{fontSize:13,color:`#4a5068`},children:e.value})]})]},e.label))}),(0,N.jsxs)(M,{to:`/contact`,className:`pp-cta`,style:{display:`inline-flex`,alignItems:`center`,gap:10,padding:`13px 26px`,background:`#f5a623`,color:`#1a1f2e`,fontFamily:`'Barlow Condensed', sans-serif`,fontSize:13,fontWeight:800,letterSpacing:`0.12em`,textTransform:`uppercase`,textDecoration:`none`,borderRadius:4,transition:`background 0.2s`},children:[`Contact Us`,(0,N.jsx)(`svg`,{width:`15`,height:`15`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2.2`,strokeLinecap:`round`,strokeLinejoin:`round`,children:(0,N.jsx)(`path`,{d:`M5 12h14M12 5l7 7-7 7`})})]})]})}),(0,N.jsxs)(`div`,{style:{borderTop:`1px solid #e8eaee`,padding:`18px clamp(20px,6vw,48px)`,display:`flex`,alignItems:`center`,justifyContent:`space-between`,flexWrap:`wrap`,gap:6,background:`#ffffff`},children:[(0,N.jsxs)(`span`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:600,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`#b8bcc8`},children:[`© `,new Date().getFullYear(),` SunTech Packaging Machines`]}),(0,N.jsx)(`span`,{style:{fontFamily:`'Barlow Condensed', sans-serif`,fontSize:11,fontWeight:600,letterSpacing:`0.1em`,textTransform:`uppercase`,color:`#b8bcc8`},children:`All rights reserved`})]})]})}var Hi={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ui=b.createContext&&b.createContext(Hi),Wi=[`attr`,`size`,`title`];function Gi(e,t){if(e==null)return{};var n,r,i=Ki(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function Ki(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function qi(){return qi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},qi.apply(null,arguments)}function Ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Yi(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?Ji(Object(n),!0).forEach(function(t){Xi(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ji(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Xi(e,t,n){return(t=R(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){var t=z(e,`string`);return typeof t==`symbol`?t:t+``}function z(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Zi(e){return e&&e.map((e,t)=>b.createElement(e.tag,Yi({key:t},e.attr),Zi(e.child)))}function B(e){return t=>b.createElement(Qi,qi({attr:Yi({},e.attr)},t),Zi(e.child))}function Qi(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Gi(e,Wi),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),b.createElement(`svg`,qi({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:Yi(Yi({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&b.createElement(`title`,null,i),e.children)};return Ui===void 0?t(Hi):b.createElement(Ui.Consumer,null,e=>t(e))}function $i(e){return B({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z`},child:[]}]})(e)}function ea(){return(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(`style`,{children:`
        .wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;        /* ✅ RIGHT side */
          z-index: 9999;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;

          width: 52px;
          height: 52px;
          border-radius: 50%;

          background: #25D366;
          color: #fff;

          box-shadow:
            0 4px 20px rgba(37,211,102,0.45),
            0 2px 8px rgba(0,0,0,0.25);

          transition:
            transform 0.25s cubic-bezier(0.34,1.56,0.64,1),
            box-shadow 0.2s ease,
            background 0.2s ease;

          /* pulse ring */
          animation: wa-pulse 2.8s ease-in-out infinite;
        }

        .wa-btn:hover {
          background: #1ebe5d;
          transform: scale(1.12);
          box-shadow:
            0 6px 28px rgba(37,211,102,0.55),
            0 3px 10px rgba(0,0,0,0.3);
          animation: none;
        }

        .wa-btn svg {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
        }

        @keyframes wa-pulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.45), 0 2px 8px rgba(0,0,0,0.25); }
          50%       { box-shadow: 0 4px 28px rgba(37,211,102,0.70), 0 0 0 8px rgba(37,211,102,0.12); }
        }

        /* Mobile: slightly smaller + tighter to corner */
        @media (max-width: 479px) {
          .wa-btn {
            width: 46px;
            height: 46px;
            bottom: 18px;
            right: 18px;
          }
          .wa-btn svg {
            width: 24px;
            height: 24px;
          }
        }
      `}),(0,N.jsx)(`a`,{href:`https://wa.me/918975091999?text=Hello%2C%20I%20want%20to%20inquire%20about%20your%20machines`,target:`_blank`,rel:`noopener noreferrer`,className:`wa-btn`,"aria-label":`Chat on WhatsApp`,children:(0,N.jsx)($i,{})})]})}var ta=()=>(0,N.jsx)(`div`,{className:`text-white text-3xl text-center mt-20`,children:`Services Page`}),na=()=>(0,N.jsx)(`div`,{className:`text-white text-3xl text-center mt-20`,children:`404 – Page Not Found`});function ra(){let[e,t]=(0,b.useState)(!1);return(0,N.jsxs)(`div`,{className:`theme premium-surface min-h-screen flex flex-col`,children:[e&&(0,N.jsx)(pr,{onFinish:()=>t(!1)}),!e&&(0,N.jsxs)(N.Fragment,{children:[(0,N.jsx)(nr,{}),(0,N.jsx)(cr,{}),(0,N.jsx)(`main`,{className:`pt-20 flex-1`,children:(0,N.jsxs)(Lt,{children:[(0,N.jsx)(A,{path:`/`,element:(0,N.jsx)(Xr,{})}),(0,N.jsx)(A,{path:`/about`,element:(0,N.jsx)(ii,{})}),(0,N.jsx)(A,{path:`/services`,element:(0,N.jsx)(ta,{})}),(0,N.jsx)(A,{path:`/solutions`,element:(0,N.jsx)(ji,{})}),(0,N.jsx)(A,{path:`/media`,element:(0,N.jsx)(Cr,{})}),(0,N.jsx)(A,{path:`/media/videos`,element:(0,N.jsx)(Dr,{})}),(0,N.jsx)(A,{path:`/contact`,element:(0,N.jsx)(Nr,{})}),(0,N.jsx)(A,{path:`/machines`,element:(0,N.jsx)(ci,{})}),(0,N.jsx)(A,{path:`/machines/:type`,element:(0,N.jsx)(si,{})}),(0,N.jsx)(A,{path:`/product/:name`,element:(0,N.jsx)(ki,{})}),(0,N.jsx)(A,{path:`/applications`,element:(0,N.jsx)(br,{})}),(0,N.jsx)(A,{path:`/projects`,element:(0,N.jsx)(Ni,{})}),(0,N.jsx)(A,{path:`/brochure`,element:(0,N.jsx)(Pi,{})}),(0,N.jsx)(A,{path:`/faq`,element:(0,N.jsx)(zi,{})}),(0,N.jsx)(A,{path:`/privacy-policy`,element:(0,N.jsx)(Vi,{})}),(0,N.jsx)(A,{path:`*`,element:(0,N.jsx)(na,{})})]})}),(0,N.jsx)(sr,{}),(0,N.jsx)(ea,{})]})]})}Yn.createRoot(document.getElementById(`root`)).render((0,N.jsx)(b.StrictMode,{children:(0,N.jsx)(En,{children:(0,N.jsx)(ra,{})})}));