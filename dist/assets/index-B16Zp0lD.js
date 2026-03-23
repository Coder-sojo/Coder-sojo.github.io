(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();var Ux=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ug(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Og={exports:{}},ec={},Fg={exports:{}},ct={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var za=Symbol.for("react.element"),Ox=Symbol.for("react.portal"),Fx=Symbol.for("react.fragment"),zx=Symbol.for("react.strict_mode"),kx=Symbol.for("react.profiler"),Bx=Symbol.for("react.provider"),Hx=Symbol.for("react.context"),Vx=Symbol.for("react.forward_ref"),Gx=Symbol.for("react.suspense"),Wx=Symbol.for("react.memo"),Xx=Symbol.for("react.lazy"),Am=Symbol.iterator;function Zx(t){return t===null||typeof t!="object"?null:(t=Am&&t[Am]||t["@@iterator"],typeof t=="function"?t:null)}var zg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},kg=Object.assign,Bg={};function To(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||zg}To.prototype.isReactComponent={};To.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};To.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hg(){}Hg.prototype=To.prototype;function Id(t,e,n){this.props=t,this.context=e,this.refs=Bg,this.updater=n||zg}var Dd=Id.prototype=new Hg;Dd.constructor=Id;kg(Dd,To.prototype);Dd.isPureReactComponent=!0;var Cm=Array.isArray,Vg=Object.prototype.hasOwnProperty,Nd={current:null},Gg={key:!0,ref:!0,__self:!0,__source:!0};function Wg(t,e,n){var i,s={},o=null,l=null;if(e!=null)for(i in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(o=""+e.key),e)Vg.call(e,i)&&!Gg.hasOwnProperty(i)&&(s[i]=e[i]);var c=arguments.length-2;if(c===1)s.children=n;else if(1<c){for(var h=Array(c),d=0;d<c;d++)h[d]=arguments[d+2];s.children=h}if(t&&t.defaultProps)for(i in c=t.defaultProps,c)s[i]===void 0&&(s[i]=c[i]);return{$$typeof:za,type:t,key:o,ref:l,props:s,_owner:Nd.current}}function jx(t,e){return{$$typeof:za,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ud(t){return typeof t=="object"&&t!==null&&t.$$typeof===za}function qx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Gc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qx(""+t.key):e.toString(36)}function tu(t,e,n,i,s){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case za:case Ox:l=!0}}if(l)return l=t,s=s(l),t=i===""?"."+Gc(l,0):i,Cm(s)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),tu(s,e,n,"",function(d){return d})):s!=null&&(Ud(s)&&(s=jx(s,n+(!s.key||l&&l.key===s.key?"":(""+s.key).replace(Pm,"$&/")+"/")+t)),e.push(s)),1;if(l=0,i=i===""?".":i+":",Cm(t))for(var c=0;c<t.length;c++){o=t[c];var h=i+Gc(o,c);l+=tu(o,e,n,h,s)}else if(h=Zx(t),typeof h=="function")for(t=h.call(t),c=0;!(o=t.next()).done;)o=o.value,h=i+Gc(o,c++),l+=tu(o,e,n,h,s);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function dl(t,e,n){if(t==null)return t;var i=[],s=0;return tu(t,i,"","",function(o){return e.call(n,o,s++)}),i}function Yx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Sn={current:null},nu={transition:null},Kx={ReactCurrentDispatcher:Sn,ReactCurrentBatchConfig:nu,ReactCurrentOwner:Nd};function Xg(){throw Error("act(...) is not supported in production builds of React.")}ct.Children={map:dl,forEach:function(t,e,n){dl(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return dl(t,function(){e++}),e},toArray:function(t){return dl(t,function(e){return e})||[]},only:function(t){if(!Ud(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ct.Component=To;ct.Fragment=Fx;ct.Profiler=kx;ct.PureComponent=Id;ct.StrictMode=zx;ct.Suspense=Gx;ct.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx;ct.act=Xg;ct.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=kg({},t.props),s=t.key,o=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,l=Nd.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(h in e)Vg.call(e,h)&&!Gg.hasOwnProperty(h)&&(i[h]=e[h]===void 0&&c!==void 0?c[h]:e[h])}var h=arguments.length-2;if(h===1)i.children=n;else if(1<h){c=Array(h);for(var d=0;d<h;d++)c[d]=arguments[d+2];i.children=c}return{$$typeof:za,type:t.type,key:s,ref:o,props:i,_owner:l}};ct.createContext=function(t){return t={$$typeof:Hx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Bx,_context:t},t.Consumer=t};ct.createElement=Wg;ct.createFactory=function(t){var e=Wg.bind(null,t);return e.type=t,e};ct.createRef=function(){return{current:null}};ct.forwardRef=function(t){return{$$typeof:Vx,render:t}};ct.isValidElement=Ud;ct.lazy=function(t){return{$$typeof:Xx,_payload:{_status:-1,_result:t},_init:Yx}};ct.memo=function(t,e){return{$$typeof:Wx,type:t,compare:e===void 0?null:e}};ct.startTransition=function(t){var e=nu.transition;nu.transition={};try{t()}finally{nu.transition=e}};ct.unstable_act=Xg;ct.useCallback=function(t,e){return Sn.current.useCallback(t,e)};ct.useContext=function(t){return Sn.current.useContext(t)};ct.useDebugValue=function(){};ct.useDeferredValue=function(t){return Sn.current.useDeferredValue(t)};ct.useEffect=function(t,e){return Sn.current.useEffect(t,e)};ct.useId=function(){return Sn.current.useId()};ct.useImperativeHandle=function(t,e,n){return Sn.current.useImperativeHandle(t,e,n)};ct.useInsertionEffect=function(t,e){return Sn.current.useInsertionEffect(t,e)};ct.useLayoutEffect=function(t,e){return Sn.current.useLayoutEffect(t,e)};ct.useMemo=function(t,e){return Sn.current.useMemo(t,e)};ct.useReducer=function(t,e,n){return Sn.current.useReducer(t,e,n)};ct.useRef=function(t){return Sn.current.useRef(t)};ct.useState=function(t){return Sn.current.useState(t)};ct.useSyncExternalStore=function(t,e,n){return Sn.current.useSyncExternalStore(t,e,n)};ct.useTransition=function(){return Sn.current.useTransition()};ct.version="18.3.1";Fg.exports=ct;var Ne=Fg.exports;const Su=Ug(Ne);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $x=Ne,Qx=Symbol.for("react.element"),Jx=Symbol.for("react.fragment"),eS=Object.prototype.hasOwnProperty,tS=$x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nS={key:!0,ref:!0,__self:!0,__source:!0};function Zg(t,e,n){var i,s={},o=null,l=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(l=e.ref);for(i in e)eS.call(e,i)&&!nS.hasOwnProperty(i)&&(s[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)s[i]===void 0&&(s[i]=e[i]);return{$$typeof:Qx,type:t,key:o,ref:l,props:s,_owner:tS.current}}ec.Fragment=Jx;ec.jsx=Zg;ec.jsxs=Zg;Og.exports=ec;var $=Og.exports,qh={},jg={exports:{}},Gn={},qg={exports:{}},Yg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(O,le){var q=O.length;O.push(le);e:for(;0<q;){var he=q-1>>>1,Le=O[he];if(0<s(Le,le))O[he]=le,O[q]=Le,q=he;else break e}}function n(O){return O.length===0?null:O[0]}function i(O){if(O.length===0)return null;var le=O[0],q=O.pop();if(q!==le){O[0]=q;e:for(var he=0,Le=O.length,ke=Le>>>1;he<ke;){var Q=2*(he+1)-1,oe=O[Q],de=Q+1,Me=O[de];if(0>s(oe,q))de<Le&&0>s(Me,oe)?(O[he]=Me,O[de]=q,he=de):(O[he]=oe,O[Q]=q,he=Q);else if(de<Le&&0>s(Me,q))O[he]=Me,O[de]=q,he=de;else break e}}return le}function s(O,le){var q=O.sortIndex-le.sortIndex;return q!==0?q:O.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,c=l.now();t.unstable_now=function(){return l.now()-c}}var h=[],d=[],m=1,g=null,_=3,x=!1,w=!1,T=!1,y=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,M=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(O){for(var le=n(d);le!==null;){if(le.callback===null)i(d);else if(le.startTime<=O)i(d),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(d)}}function P(O){if(T=!1,S(O),!w)if(n(h)!==null)w=!0,j(z);else{var le=n(d);le!==null&&ce(P,le.startTime-O)}}function z(O,le){w=!1,T&&(T=!1,p(k),k=-1),x=!0;var q=_;try{for(S(le),g=n(h);g!==null&&(!(g.expirationTime>le)||O&&!R());){var he=g.callback;if(typeof he=="function"){g.callback=null,_=g.priorityLevel;var Le=he(g.expirationTime<=le);le=t.unstable_now(),typeof Le=="function"?g.callback=Le:g===n(h)&&i(h),S(le)}else i(h);g=n(h)}if(g!==null)var ke=!0;else{var Q=n(d);Q!==null&&ce(P,Q.startTime-le),ke=!1}return ke}finally{g=null,_=q,x=!1}}var D=!1,I=null,k=-1,ae=5,E=-1;function R(){return!(t.unstable_now()-E<ae)}function te(){if(I!==null){var O=t.unstable_now();E=O;var le=!0;try{le=I(!0,O)}finally{le?ie():(D=!1,I=null)}}else D=!1}var ie;if(typeof M=="function")ie=function(){M(te)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,_e=re.port2;re.port1.onmessage=te,ie=function(){_e.postMessage(null)}}else ie=function(){y(te,0)};function j(O){I=O,D||(D=!0,ie())}function ce(O,le){k=y(function(){O(t.unstable_now())},le)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(O){O.callback=null},t.unstable_continueExecution=function(){w||x||(w=!0,j(z))},t.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ae=0<O?Math.floor(1e3/O):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(h)},t.unstable_next=function(O){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var q=_;_=le;try{return O()}finally{_=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(O,le){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=_;_=O;try{return le()}finally{_=q}},t.unstable_scheduleCallback=function(O,le,q){var he=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?he+q:he):q=he,O){case 1:var Le=-1;break;case 2:Le=250;break;case 5:Le=1073741823;break;case 4:Le=1e4;break;default:Le=5e3}return Le=q+Le,O={id:m++,callback:le,priorityLevel:O,startTime:q,expirationTime:Le,sortIndex:-1},q>he?(O.sortIndex=q,e(d,O),n(h)===null&&O===n(d)&&(T?(p(k),k=-1):T=!0,ce(P,q-he))):(O.sortIndex=Le,e(h,O),w||x||(w=!0,j(z))),O},t.unstable_shouldYield=R,t.unstable_wrapCallback=function(O){var le=_;return function(){var q=_;_=le;try{return O.apply(this,arguments)}finally{_=q}}}})(Yg);qg.exports=Yg;var iS=qg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rS=Ne,Vn=iS;function ge(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Kg=new Set,xa={};function vs(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(xa[t]=e,t=0;t<e.length;t++)Kg.add(e[t])}var Ki=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yh=Object.prototype.hasOwnProperty,sS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Rm={},Lm={};function oS(t){return Yh.call(Lm,t)?!0:Yh.call(Rm,t)?!1:sS.test(t)?Lm[t]=!0:(Rm[t]=!0,!1)}function aS(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function lS(t,e,n,i){if(e===null||typeof e>"u"||aS(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Mn(t,e,n,i,s,o,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=l}var sn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){sn[t]=new Mn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];sn[e]=new Mn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){sn[t]=new Mn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){sn[t]=new Mn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){sn[t]=new Mn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){sn[t]=new Mn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){sn[t]=new Mn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){sn[t]=new Mn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){sn[t]=new Mn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Od=/[\-:]([a-z])/g;function Fd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Od,Fd);sn[e]=new Mn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Od,Fd);sn[e]=new Mn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Od,Fd);sn[e]=new Mn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){sn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!1,!1)});sn.xlinkHref=new Mn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){sn[t]=new Mn(t,1,!1,t.toLowerCase(),null,!0,!0)});function zd(t,e,n,i){var s=sn.hasOwnProperty(e)?sn[e]:null;(s!==null?s.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(lS(e,n,s,i)&&(n=null),i||s===null?oS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,i=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var ir=rS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,pl=Symbol.for("react.element"),Gs=Symbol.for("react.portal"),Ws=Symbol.for("react.fragment"),kd=Symbol.for("react.strict_mode"),Kh=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Qg=Symbol.for("react.context"),Bd=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),Qh=Symbol.for("react.suspense_list"),Hd=Symbol.for("react.memo"),_r=Symbol.for("react.lazy"),Jg=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Xo(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Nt=Object.assign,Wc;function oa(t){if(Wc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Wc=e&&e[1]||""}return`
`+Wc+t}var Xc=!1;function Zc(t,e){if(!t||Xc)return"";Xc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var i=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){i=d}t.call(e.prototype)}else{try{throw Error()}catch(d){i=d}t()}}catch(d){if(d&&i&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),o=i.stack.split(`
`),l=s.length-1,c=o.length-1;1<=l&&0<=c&&s[l]!==o[c];)c--;for(;1<=l&&0<=c;l--,c--)if(s[l]!==o[c]){if(l!==1||c!==1)do if(l--,c--,0>c||s[l]!==o[c]){var h=`
`+s[l].replace(" at new "," at ");return t.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",t.displayName)),h}while(1<=l&&0<=c);break}}}finally{Xc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oa(t):""}function uS(t){switch(t.tag){case 5:return oa(t.type);case 16:return oa("Lazy");case 13:return oa("Suspense");case 19:return oa("SuspenseList");case 0:case 2:case 15:return t=Zc(t.type,!1),t;case 11:return t=Zc(t.type.render,!1),t;case 1:return t=Zc(t.type,!0),t;default:return""}}function Jh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ws:return"Fragment";case Gs:return"Portal";case Kh:return"Profiler";case kd:return"StrictMode";case $h:return"Suspense";case Qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Qg:return(t.displayName||"Context")+".Consumer";case $g:return(t._context.displayName||"Context")+".Provider";case Bd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Hd:return e=t.displayName||null,e!==null?e:Jh(t.type)||"Memo";case _r:e=t._payload,t=t._init;try{return Jh(t(e))}catch{}}return null}function cS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Jh(e);case 8:return e===kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Dr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ev(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hS(t){var e=ev(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(l){i=""+l,o.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(l){i=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ml(t){t._valueTracker||(t._valueTracker=hS(t))}function tv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ev(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Mu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ef(t,e){var n=e.checked;return Nt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Im(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Dr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function nv(t,e){e=e.checked,e!=null&&zd(t,"checked",e,!1)}function tf(t,e){nv(t,e);var n=Dr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nf(t,e.type,n):e.hasOwnProperty("defaultValue")&&nf(t,e.type,Dr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Dm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nf(t,e,n){(e!=="number"||Mu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var aa=Array.isArray;function no(t,e,n,i){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Dr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,i&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function rf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ge(91));return Nt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Nm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ge(92));if(aa(n)){if(1<n.length)throw Error(ge(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Dr(n)}}function iv(t,e){var n=Dr(e.value),i=Dr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Um(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function rv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?rv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _l,sv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_l=_l||document.createElement("div"),_l.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_l.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fS=["Webkit","ms","Moz","O"];Object.keys(ha).forEach(function(t){fS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ha[e]=ha[t]})});function ov(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ha.hasOwnProperty(t)&&ha[t]?(""+e).trim():e+"px"}function av(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,s=ov(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,s):t[n]=s}}var dS=Nt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function of(t,e){if(e){if(dS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ge(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ge(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ge(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ge(62))}}function af(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lf=null;function Vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var uf=null,io=null,ro=null;function Om(t){if(t=Ha(t)){if(typeof uf!="function")throw Error(ge(280));var e=t.stateNode;e&&(e=sc(e),uf(t.stateNode,t.type,e))}}function lv(t){io?ro?ro.push(t):ro=[t]:io=t}function uv(){if(io){var t=io,e=ro;if(ro=io=null,Om(t),e)for(t=0;t<e.length;t++)Om(e[t])}}function cv(t,e){return t(e)}function hv(){}var jc=!1;function fv(t,e,n){if(jc)return t(e,n);jc=!0;try{return cv(t,e,n)}finally{jc=!1,(io!==null||ro!==null)&&(hv(),uv())}}function Ma(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ge(231,e,typeof n));return n}var cf=!1;if(Ki)try{var Zo={};Object.defineProperty(Zo,"passive",{get:function(){cf=!0}}),window.addEventListener("test",Zo,Zo),window.removeEventListener("test",Zo,Zo)}catch{cf=!1}function pS(t,e,n,i,s,o,l,c,h){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(m){this.onError(m)}}var fa=!1,Eu=null,wu=!1,hf=null,mS={onError:function(t){fa=!0,Eu=t}};function _S(t,e,n,i,s,o,l,c,h){fa=!1,Eu=null,pS.apply(mS,arguments)}function gS(t,e,n,i,s,o,l,c,h){if(_S.apply(this,arguments),fa){if(fa){var d=Eu;fa=!1,Eu=null}else throw Error(ge(198));wu||(wu=!0,hf=d)}}function ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function dv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Fm(t){if(ys(t)!==t)throw Error(ge(188))}function vS(t){var e=t.alternate;if(!e){if(e=ys(t),e===null)throw Error(ge(188));return e!==t?null:t}for(var n=t,i=e;;){var s=n.return;if(s===null)break;var o=s.alternate;if(o===null){if(i=s.return,i!==null){n=i;continue}break}if(s.child===o.child){for(o=s.child;o;){if(o===n)return Fm(s),t;if(o===i)return Fm(s),e;o=o.sibling}throw Error(ge(188))}if(n.return!==i.return)n=s,i=o;else{for(var l=!1,c=s.child;c;){if(c===n){l=!0,n=s,i=o;break}if(c===i){l=!0,i=s,n=o;break}c=c.sibling}if(!l){for(c=o.child;c;){if(c===n){l=!0,n=o,i=s;break}if(c===i){l=!0,i=o,n=s;break}c=c.sibling}if(!l)throw Error(ge(189))}}if(n.alternate!==i)throw Error(ge(190))}if(n.tag!==3)throw Error(ge(188));return n.stateNode.current===n?t:e}function pv(t){return t=vS(t),t!==null?mv(t):null}function mv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=mv(t);if(e!==null)return e;t=t.sibling}return null}var _v=Vn.unstable_scheduleCallback,zm=Vn.unstable_cancelCallback,yS=Vn.unstable_shouldYield,xS=Vn.unstable_requestPaint,zt=Vn.unstable_now,SS=Vn.unstable_getCurrentPriorityLevel,Gd=Vn.unstable_ImmediatePriority,gv=Vn.unstable_UserBlockingPriority,Tu=Vn.unstable_NormalPriority,MS=Vn.unstable_LowPriority,vv=Vn.unstable_IdlePriority,tc=null,Ri=null;function ES(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var mi=Math.clz32?Math.clz32:AS,wS=Math.log,TS=Math.LN2;function AS(t){return t>>>=0,t===0?32:31-(wS(t)/TS|0)|0}var gl=64,vl=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Au(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,s=t.suspendedLanes,o=t.pingedLanes,l=n&268435455;if(l!==0){var c=l&~s;c!==0?i=la(c):(o&=l,o!==0&&(i=la(o)))}else l=n&~s,l!==0?i=la(l):o!==0&&(i=la(o));if(i===0)return 0;if(e!==0&&e!==i&&!(e&s)&&(s=i&-i,o=e&-e,s>=o||s===16&&(o&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-mi(e),s=1<<n,i|=t[n],e&=~s;return i}function CS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function PS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-mi(o),c=1<<l,h=s[l];h===-1?(!(c&n)||c&i)&&(s[l]=CS(c,e)):h<=e&&(t.expiredLanes|=c),o&=~c}}function ff(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function yv(){var t=gl;return gl<<=1,!(gl&4194240)&&(gl=64),t}function qc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ka(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mi(e),t[e]=n}function RS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-mi(n),o=1<<s;e[s]=0,i[s]=-1,t[s]=-1,n&=~o}}function Wd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-mi(n),s=1<<i;s&e|t[i]&e&&(t[i]|=e),n&=~s}}var Et=0;function xv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Sv,Xd,Mv,Ev,wv,df=!1,yl=[],Er=null,wr=null,Tr=null,Ea=new Map,wa=new Map,vr=[],LS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function km(t,e){switch(t){case"focusin":case"focusout":Er=null;break;case"dragenter":case"dragleave":wr=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Ea.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function jo(t,e,n,i,s,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:o,targetContainers:[s]},e!==null&&(e=Ha(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function bS(t,e,n,i,s){switch(e){case"focusin":return Er=jo(Er,t,e,n,i,s),!0;case"dragenter":return wr=jo(wr,t,e,n,i,s),!0;case"mouseover":return Tr=jo(Tr,t,e,n,i,s),!0;case"pointerover":var o=s.pointerId;return Ea.set(o,jo(Ea.get(o)||null,t,e,n,i,s)),!0;case"gotpointercapture":return o=s.pointerId,wa.set(o,jo(wa.get(o)||null,t,e,n,i,s)),!0}return!1}function Tv(t){var e=ss(t.target);if(e!==null){var n=ys(e);if(n!==null){if(e=n.tag,e===13){if(e=dv(n),e!==null){t.blockedOn=e,wv(t.priority,function(){Mv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function iu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=pf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);lf=i,n.target.dispatchEvent(i),lf=null}else return e=Ha(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Bm(t,e,n){iu(t)&&n.delete(e)}function IS(){df=!1,Er!==null&&iu(Er)&&(Er=null),wr!==null&&iu(wr)&&(wr=null),Tr!==null&&iu(Tr)&&(Tr=null),Ea.forEach(Bm),wa.forEach(Bm)}function qo(t,e){t.blockedOn===e&&(t.blockedOn=null,df||(df=!0,Vn.unstable_scheduleCallback(Vn.unstable_NormalPriority,IS)))}function Ta(t){function e(s){return qo(s,t)}if(0<yl.length){qo(yl[0],t);for(var n=1;n<yl.length;n++){var i=yl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Er!==null&&qo(Er,t),wr!==null&&qo(wr,t),Tr!==null&&qo(Tr,t),Ea.forEach(e),wa.forEach(e),n=0;n<vr.length;n++)i=vr[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<vr.length&&(n=vr[0],n.blockedOn===null);)Tv(n),n.blockedOn===null&&vr.shift()}var so=ir.ReactCurrentBatchConfig,Cu=!0;function DS(t,e,n,i){var s=Et,o=so.transition;so.transition=null;try{Et=1,Zd(t,e,n,i)}finally{Et=s,so.transition=o}}function NS(t,e,n,i){var s=Et,o=so.transition;so.transition=null;try{Et=4,Zd(t,e,n,i)}finally{Et=s,so.transition=o}}function Zd(t,e,n,i){if(Cu){var s=pf(t,e,n,i);if(s===null)rh(t,e,i,Pu,n),km(t,i);else if(bS(s,t,e,n,i))i.stopPropagation();else if(km(t,i),e&4&&-1<LS.indexOf(t)){for(;s!==null;){var o=Ha(s);if(o!==null&&Sv(o),o=pf(t,e,n,i),o===null&&rh(t,e,i,Pu,n),o===s)break;s=o}s!==null&&i.stopPropagation()}else rh(t,e,i,null,n)}}var Pu=null;function pf(t,e,n,i){if(Pu=null,t=Vd(i),t=ss(t),t!==null)if(e=ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=dv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Pu=t,null}function Av(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(SS()){case Gd:return 1;case gv:return 4;case Tu:case MS:return 16;case vv:return 536870912;default:return 16}default:return 16}}var Sr=null,jd=null,ru=null;function Cv(){if(ru)return ru;var t,e=jd,n=e.length,i,s="value"in Sr?Sr.value:Sr.textContent,o=s.length;for(t=0;t<n&&e[t]===s[t];t++);var l=n-t;for(i=1;i<=l&&e[n-i]===s[o-i];i++);return ru=s.slice(t,1<i?1-i:void 0)}function su(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xl(){return!0}function Hm(){return!1}function Wn(t){function e(n,i,s,o,l){this._reactName=n,this._targetInst=s,this.type=i,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(o):o[c]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?xl:Hm,this.isPropagationStopped=Hm,this}return Nt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xl)},persist:function(){},isPersistent:xl}),e}var Ao={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qd=Wn(Ao),Ba=Nt({},Ao,{view:0,detail:0}),US=Wn(Ba),Yc,Kc,Yo,nc=Nt({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Yd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Yo&&(Yo&&t.type==="mousemove"?(Yc=t.screenX-Yo.screenX,Kc=t.screenY-Yo.screenY):Kc=Yc=0,Yo=t),Yc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),Vm=Wn(nc),OS=Nt({},nc,{dataTransfer:0}),FS=Wn(OS),zS=Nt({},Ba,{relatedTarget:0}),$c=Wn(zS),kS=Nt({},Ao,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=Wn(kS),HS=Nt({},Ao,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),VS=Wn(HS),GS=Nt({},Ao,{data:0}),Gm=Wn(GS),WS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},XS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ZS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ZS[t])?!!e[t]:!1}function Yd(){return jS}var qS=Nt({},Ba,{key:function(t){if(t.key){var e=WS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=su(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?XS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Yd,charCode:function(t){return t.type==="keypress"?su(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?su(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),YS=Wn(qS),KS=Nt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Wm=Wn(KS),$S=Nt({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Yd}),QS=Wn($S),JS=Nt({},Ao,{propertyName:0,elapsedTime:0,pseudoElement:0}),eM=Wn(JS),tM=Nt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nM=Wn(tM),iM=[9,13,27,32],Kd=Ki&&"CompositionEvent"in window,da=null;Ki&&"documentMode"in document&&(da=document.documentMode);var rM=Ki&&"TextEvent"in window&&!da,Pv=Ki&&(!Kd||da&&8<da&&11>=da),Xm=" ",Zm=!1;function Rv(t,e){switch(t){case"keyup":return iM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Lv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Xs=!1;function sM(t,e){switch(t){case"compositionend":return Lv(e);case"keypress":return e.which!==32?null:(Zm=!0,Xm);case"textInput":return t=e.data,t===Xm&&Zm?null:t;default:return null}}function oM(t,e){if(Xs)return t==="compositionend"||!Kd&&Rv(t,e)?(t=Cv(),ru=jd=Sr=null,Xs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pv&&e.locale!=="ko"?null:e.data;default:return null}}var aM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aM[t.type]:e==="textarea"}function bv(t,e,n,i){lv(i),e=Ru(e,"onChange"),0<e.length&&(n=new qd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var pa=null,Aa=null;function lM(t){Vv(t,0)}function ic(t){var e=qs(t);if(tv(e))return t}function uM(t,e){if(t==="change")return e}var Iv=!1;if(Ki){var Qc;if(Ki){var Jc="oninput"in document;if(!Jc){var qm=document.createElement("div");qm.setAttribute("oninput","return;"),Jc=typeof qm.oninput=="function"}Qc=Jc}else Qc=!1;Iv=Qc&&(!document.documentMode||9<document.documentMode)}function Ym(){pa&&(pa.detachEvent("onpropertychange",Dv),Aa=pa=null)}function Dv(t){if(t.propertyName==="value"&&ic(Aa)){var e=[];bv(e,Aa,t,Vd(t)),fv(lM,e)}}function cM(t,e,n){t==="focusin"?(Ym(),pa=e,Aa=n,pa.attachEvent("onpropertychange",Dv)):t==="focusout"&&Ym()}function hM(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Aa)}function fM(t,e){if(t==="click")return ic(e)}function dM(t,e){if(t==="input"||t==="change")return ic(e)}function pM(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vi=typeof Object.is=="function"?Object.is:pM;function Ca(t,e){if(vi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var s=n[i];if(!Yh.call(e,s)||!vi(t[s],e[s]))return!1}return!0}function Km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $m(t,e){var n=Km(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Km(n)}}function Nv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Nv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Uv(){for(var t=window,e=Mu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Mu(t.document)}return e}function $d(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mM(t){var e=Uv(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nv(n.ownerDocument.documentElement,n)){if(i!==null&&$d(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,o=Math.min(i.start,s);i=i.end===void 0?o:Math.min(i.end,s),!t.extend&&o>i&&(s=i,i=o,o=s),s=$m(n,o);var l=$m(n,i);s&&l&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),o>i?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var _M=Ki&&"documentMode"in document&&11>=document.documentMode,Zs=null,mf=null,ma=null,_f=!1;function Qm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||Zs==null||Zs!==Mu(i)||(i=Zs,"selectionStart"in i&&$d(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&Ca(ma,i)||(ma=i,i=Ru(mf,"onSelect"),0<i.length&&(e=new qd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Zs)))}function Sl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var js={animationend:Sl("Animation","AnimationEnd"),animationiteration:Sl("Animation","AnimationIteration"),animationstart:Sl("Animation","AnimationStart"),transitionend:Sl("Transition","TransitionEnd")},eh={},Ov={};Ki&&(Ov=document.createElement("div").style,"AnimationEvent"in window||(delete js.animationend.animation,delete js.animationiteration.animation,delete js.animationstart.animation),"TransitionEvent"in window||delete js.transitionend.transition);function rc(t){if(eh[t])return eh[t];if(!js[t])return t;var e=js[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Ov)return eh[t]=e[n];return t}var Fv=rc("animationend"),zv=rc("animationiteration"),kv=rc("animationstart"),Bv=rc("transitionend"),Hv=new Map,Jm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fr(t,e){Hv.set(t,e),vs(e,[t])}for(var th=0;th<Jm.length;th++){var nh=Jm[th],gM=nh.toLowerCase(),vM=nh[0].toUpperCase()+nh.slice(1);Fr(gM,"on"+vM)}Fr(Fv,"onAnimationEnd");Fr(zv,"onAnimationIteration");Fr(kv,"onAnimationStart");Fr("dblclick","onDoubleClick");Fr("focusin","onFocus");Fr("focusout","onBlur");Fr(Bv,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);vs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));vs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));vs("onBeforeInput",["compositionend","keypress","textInput","paste"]);vs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));vs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ua="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yM=new Set("cancel close invalid load scroll toggle".split(" ").concat(ua));function e_(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,gS(i,e,void 0,t),t.currentTarget=null}function Vv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],s=i.event;i=i.listeners;e:{var o=void 0;if(e)for(var l=i.length-1;0<=l;l--){var c=i[l],h=c.instance,d=c.currentTarget;if(c=c.listener,h!==o&&s.isPropagationStopped())break e;e_(s,c,d),o=h}else for(l=0;l<i.length;l++){if(c=i[l],h=c.instance,d=c.currentTarget,c=c.listener,h!==o&&s.isPropagationStopped())break e;e_(s,c,d),o=h}}}if(wu)throw t=hf,wu=!1,hf=null,t}function Pt(t,e){var n=e[Sf];n===void 0&&(n=e[Sf]=new Set);var i=t+"__bubble";n.has(i)||(Gv(e,t,2,!1),n.add(i))}function ih(t,e,n){var i=0;e&&(i|=4),Gv(n,t,i,e)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Pa(t){if(!t[Ml]){t[Ml]=!0,Kg.forEach(function(n){n!=="selectionchange"&&(yM.has(n)||ih(n,!1,t),ih(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ml]||(e[Ml]=!0,ih("selectionchange",!1,e))}}function Gv(t,e,n,i){switch(Av(e)){case 1:var s=DS;break;case 4:s=NS;break;default:s=Zd}n=s.bind(null,e,n,t),s=void 0,!cf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),i?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function rh(t,e,n,i,s){var o=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var l=i.tag;if(l===3||l===4){var c=i.stateNode.containerInfo;if(c===s||c.nodeType===8&&c.parentNode===s)break;if(l===4)for(l=i.return;l!==null;){var h=l.tag;if((h===3||h===4)&&(h=l.stateNode.containerInfo,h===s||h.nodeType===8&&h.parentNode===s))return;l=l.return}for(;c!==null;){if(l=ss(c),l===null)return;if(h=l.tag,h===5||h===6){i=o=l;continue e}c=c.parentNode}}i=i.return}fv(function(){var d=o,m=Vd(n),g=[];e:{var _=Hv.get(t);if(_!==void 0){var x=qd,w=t;switch(t){case"keypress":if(su(n)===0)break e;case"keydown":case"keyup":x=YS;break;case"focusin":w="focus",x=$c;break;case"focusout":w="blur",x=$c;break;case"beforeblur":case"afterblur":x=$c;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Vm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=FS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=QS;break;case Fv:case zv:case kv:x=BS;break;case Bv:x=eM;break;case"scroll":x=US;break;case"wheel":x=nM;break;case"copy":case"cut":case"paste":x=VS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Wm}var T=(e&4)!==0,y=!T&&t==="scroll",p=T?_!==null?_+"Capture":null:_;T=[];for(var M=d,S;M!==null;){S=M;var P=S.stateNode;if(S.tag===5&&P!==null&&(S=P,p!==null&&(P=Ma(M,p),P!=null&&T.push(Ra(M,P,S)))),y)break;M=M.return}0<T.length&&(_=new x(_,w,null,n,m),g.push({event:_,listeners:T}))}}if(!(e&7)){e:{if(_=t==="mouseover"||t==="pointerover",x=t==="mouseout"||t==="pointerout",_&&n!==lf&&(w=n.relatedTarget||n.fromElement)&&(ss(w)||w[$i]))break e;if((x||_)&&(_=m.window===m?m:(_=m.ownerDocument)?_.defaultView||_.parentWindow:window,x?(w=n.relatedTarget||n.toElement,x=d,w=w?ss(w):null,w!==null&&(y=ys(w),w!==y||w.tag!==5&&w.tag!==6)&&(w=null)):(x=null,w=d),x!==w)){if(T=Vm,P="onMouseLeave",p="onMouseEnter",M="mouse",(t==="pointerout"||t==="pointerover")&&(T=Wm,P="onPointerLeave",p="onPointerEnter",M="pointer"),y=x==null?_:qs(x),S=w==null?_:qs(w),_=new T(P,M+"leave",x,n,m),_.target=y,_.relatedTarget=S,P=null,ss(m)===d&&(T=new T(p,M+"enter",w,n,m),T.target=S,T.relatedTarget=y,P=T),y=P,x&&w)t:{for(T=x,p=w,M=0,S=T;S;S=Ps(S))M++;for(S=0,P=p;P;P=Ps(P))S++;for(;0<M-S;)T=Ps(T),M--;for(;0<S-M;)p=Ps(p),S--;for(;M--;){if(T===p||p!==null&&T===p.alternate)break t;T=Ps(T),p=Ps(p)}T=null}else T=null;x!==null&&t_(g,_,x,T,!1),w!==null&&y!==null&&t_(g,y,w,T,!0)}}e:{if(_=d?qs(d):window,x=_.nodeName&&_.nodeName.toLowerCase(),x==="select"||x==="input"&&_.type==="file")var z=uM;else if(jm(_))if(Iv)z=dM;else{z=hM;var D=cM}else(x=_.nodeName)&&x.toLowerCase()==="input"&&(_.type==="checkbox"||_.type==="radio")&&(z=fM);if(z&&(z=z(t,d))){bv(g,z,n,m);break e}D&&D(t,_,d),t==="focusout"&&(D=_._wrapperState)&&D.controlled&&_.type==="number"&&nf(_,"number",_.value)}switch(D=d?qs(d):window,t){case"focusin":(jm(D)||D.contentEditable==="true")&&(Zs=D,mf=d,ma=null);break;case"focusout":ma=mf=Zs=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,Qm(g,n,m);break;case"selectionchange":if(_M)break;case"keydown":case"keyup":Qm(g,n,m)}var I;if(Kd)e:{switch(t){case"compositionstart":var k="onCompositionStart";break e;case"compositionend":k="onCompositionEnd";break e;case"compositionupdate":k="onCompositionUpdate";break e}k=void 0}else Xs?Rv(t,n)&&(k="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(k="onCompositionStart");k&&(Pv&&n.locale!=="ko"&&(Xs||k!=="onCompositionStart"?k==="onCompositionEnd"&&Xs&&(I=Cv()):(Sr=m,jd="value"in Sr?Sr.value:Sr.textContent,Xs=!0)),D=Ru(d,k),0<D.length&&(k=new Gm(k,t,null,n,m),g.push({event:k,listeners:D}),I?k.data=I:(I=Lv(n),I!==null&&(k.data=I)))),(I=rM?sM(t,n):oM(t,n))&&(d=Ru(d,"onBeforeInput"),0<d.length&&(m=new Gm("onBeforeInput","beforeinput",null,n,m),g.push({event:m,listeners:d}),m.data=I))}Vv(g,e)})}function Ra(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ru(t,e){for(var n=e+"Capture",i=[];t!==null;){var s=t,o=s.stateNode;s.tag===5&&o!==null&&(s=o,o=Ma(t,n),o!=null&&i.unshift(Ra(t,o,s)),o=Ma(t,e),o!=null&&i.push(Ra(t,o,s))),t=t.return}return i}function Ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function t_(t,e,n,i,s){for(var o=e._reactName,l=[];n!==null&&n!==i;){var c=n,h=c.alternate,d=c.stateNode;if(h!==null&&h===i)break;c.tag===5&&d!==null&&(c=d,s?(h=Ma(n,o),h!=null&&l.unshift(Ra(n,h,c))):s||(h=Ma(n,o),h!=null&&l.push(Ra(n,h,c)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var xM=/\r\n?/g,SM=/\u0000|\uFFFD/g;function n_(t){return(typeof t=="string"?t:""+t).replace(xM,`
`).replace(SM,"")}function El(t,e,n){if(e=n_(e),n_(t)!==e&&n)throw Error(ge(425))}function Lu(){}var gf=null,vf=null;function yf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var xf=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,i_=typeof Promise=="function"?Promise:void 0,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof i_<"u"?function(t){return i_.resolve(null).then(t).catch(wM)}:xf;function wM(t){setTimeout(function(){throw t})}function sh(t,e){var n=e,i=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(i===0){t.removeChild(s),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=s}while(n);Ta(e)}function Ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function r_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Ci="__reactFiber$"+Co,La="__reactProps$"+Co,$i="__reactContainer$"+Co,Sf="__reactEvents$"+Co,TM="__reactListeners$"+Co,AM="__reactHandles$"+Co;function ss(t){var e=t[Ci];if(e)return e;for(var n=t.parentNode;n;){if(e=n[$i]||n[Ci]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=r_(t);t!==null;){if(n=t[Ci])return n;t=r_(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[Ci]||t[$i],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function qs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ge(33))}function sc(t){return t[La]||null}var Mf=[],Ys=-1;function zr(t){return{current:t}}function Lt(t){0>Ys||(t.current=Mf[Ys],Mf[Ys]=null,Ys--)}function Tt(t,e){Ys++,Mf[Ys]=t.current,t.current=e}var Nr={},pn=zr(Nr),Rn=zr(!1),fs=Nr;function fo(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var s={},o;for(o in n)s[o]=e[o];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Ln(t){return t=t.childContextTypes,t!=null}function bu(){Lt(Rn),Lt(pn)}function s_(t,e,n){if(pn.current!==Nr)throw Error(ge(168));Tt(pn,e),Tt(Rn,n)}function Wv(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var s in i)if(!(s in e))throw Error(ge(108,cS(t)||"Unknown",s));return Nt({},n,i)}function Iu(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,fs=pn.current,Tt(pn,t),Tt(Rn,Rn.current),!0}function o_(t,e,n){var i=t.stateNode;if(!i)throw Error(ge(169));n?(t=Wv(t,e,fs),i.__reactInternalMemoizedMergedChildContext=t,Lt(Rn),Lt(pn),Tt(pn,t)):Lt(Rn),Tt(Rn,n)}var Gi=null,oc=!1,oh=!1;function Xv(t){Gi===null?Gi=[t]:Gi.push(t)}function CM(t){oc=!0,Xv(t)}function kr(){if(!oh&&Gi!==null){oh=!0;var t=0,e=Et;try{var n=Gi;for(Et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Gi=null,oc=!1}catch(s){throw Gi!==null&&(Gi=Gi.slice(t+1)),_v(Gd,kr),s}finally{Et=e,oh=!1}}return null}var Ks=[],$s=0,Du=null,Nu=0,Yn=[],Kn=0,ds=null,Xi=1,Zi="";function Jr(t,e){Ks[$s++]=Nu,Ks[$s++]=Du,Du=t,Nu=e}function Zv(t,e,n){Yn[Kn++]=Xi,Yn[Kn++]=Zi,Yn[Kn++]=ds,ds=t;var i=Xi;t=Zi;var s=32-mi(i)-1;i&=~(1<<s),n+=1;var o=32-mi(e)+s;if(30<o){var l=s-s%5;o=(i&(1<<l)-1).toString(32),i>>=l,s-=l,Xi=1<<32-mi(e)+s|n<<s|i,Zi=o+t}else Xi=1<<o|n<<s|i,Zi=t}function Qd(t){t.return!==null&&(Jr(t,1),Zv(t,1,0))}function Jd(t){for(;t===Du;)Du=Ks[--$s],Ks[$s]=null,Nu=Ks[--$s],Ks[$s]=null;for(;t===ds;)ds=Yn[--Kn],Yn[Kn]=null,Zi=Yn[--Kn],Yn[Kn]=null,Xi=Yn[--Kn],Yn[Kn]=null}var Hn=null,Bn=null,bt=!1,hi=null;function jv(t,e){var n=$n(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function a_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=Ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Hn=t,Bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ds!==null?{id:Xi,overflow:Zi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$n(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Hn=t,Bn=null,!0):!1;default:return!1}}function Ef(t){return(t.mode&1)!==0&&(t.flags&128)===0}function wf(t){if(bt){var e=Bn;if(e){var n=e;if(!a_(t,e)){if(Ef(t))throw Error(ge(418));e=Ar(n.nextSibling);var i=Hn;e&&a_(t,e)?jv(i,n):(t.flags=t.flags&-4097|2,bt=!1,Hn=t)}}else{if(Ef(t))throw Error(ge(418));t.flags=t.flags&-4097|2,bt=!1,Hn=t}}}function l_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Hn=t}function wl(t){if(t!==Hn)return!1;if(!bt)return l_(t),bt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!yf(t.type,t.memoizedProps)),e&&(e=Bn)){if(Ef(t))throw qv(),Error(ge(418));for(;e;)jv(t,e),e=Ar(e.nextSibling)}if(l_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ge(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Bn=Ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Bn=null}}else Bn=Hn?Ar(t.stateNode.nextSibling):null;return!0}function qv(){for(var t=Bn;t;)t=Ar(t.nextSibling)}function po(){Bn=Hn=null,bt=!1}function ep(t){hi===null?hi=[t]:hi.push(t)}var PM=ir.ReactCurrentBatchConfig;function Ko(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ge(309));var i=n.stateNode}if(!i)throw Error(ge(147,t));var s=i,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(l){var c=s.refs;l===null?delete c[o]:c[o]=l},e._stringRef=o,e)}if(typeof t!="string")throw Error(ge(284));if(!n._owner)throw Error(ge(290,t))}return t}function Tl(t,e){throw t=Object.prototype.toString.call(e),Error(ge(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function u_(t){var e=t._init;return e(t._payload)}function Yv(t){function e(p,M){if(t){var S=p.deletions;S===null?(p.deletions=[M],p.flags|=16):S.push(M)}}function n(p,M){if(!t)return null;for(;M!==null;)e(p,M),M=M.sibling;return null}function i(p,M){for(p=new Map;M!==null;)M.key!==null?p.set(M.key,M):p.set(M.index,M),M=M.sibling;return p}function s(p,M){return p=Lr(p,M),p.index=0,p.sibling=null,p}function o(p,M,S){return p.index=S,t?(S=p.alternate,S!==null?(S=S.index,S<M?(p.flags|=2,M):S):(p.flags|=2,M)):(p.flags|=1048576,M)}function l(p){return t&&p.alternate===null&&(p.flags|=2),p}function c(p,M,S,P){return M===null||M.tag!==6?(M=dh(S,p.mode,P),M.return=p,M):(M=s(M,S),M.return=p,M)}function h(p,M,S,P){var z=S.type;return z===Ws?m(p,M,S.props.children,P,S.key):M!==null&&(M.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===_r&&u_(z)===M.type)?(P=s(M,S.props),P.ref=Ko(p,M,S),P.return=p,P):(P=fu(S.type,S.key,S.props,null,p.mode,P),P.ref=Ko(p,M,S),P.return=p,P)}function d(p,M,S,P){return M===null||M.tag!==4||M.stateNode.containerInfo!==S.containerInfo||M.stateNode.implementation!==S.implementation?(M=ph(S,p.mode,P),M.return=p,M):(M=s(M,S.children||[]),M.return=p,M)}function m(p,M,S,P,z){return M===null||M.tag!==7?(M=cs(S,p.mode,P,z),M.return=p,M):(M=s(M,S),M.return=p,M)}function g(p,M,S){if(typeof M=="string"&&M!==""||typeof M=="number")return M=dh(""+M,p.mode,S),M.return=p,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case pl:return S=fu(M.type,M.key,M.props,null,p.mode,S),S.ref=Ko(p,null,M),S.return=p,S;case Gs:return M=ph(M,p.mode,S),M.return=p,M;case _r:var P=M._init;return g(p,P(M._payload),S)}if(aa(M)||Xo(M))return M=cs(M,p.mode,S,null),M.return=p,M;Tl(p,M)}return null}function _(p,M,S,P){var z=M!==null?M.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return z!==null?null:c(p,M,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case pl:return S.key===z?h(p,M,S,P):null;case Gs:return S.key===z?d(p,M,S,P):null;case _r:return z=S._init,_(p,M,z(S._payload),P)}if(aa(S)||Xo(S))return z!==null?null:m(p,M,S,P,null);Tl(p,S)}return null}function x(p,M,S,P,z){if(typeof P=="string"&&P!==""||typeof P=="number")return p=p.get(S)||null,c(M,p,""+P,z);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case pl:return p=p.get(P.key===null?S:P.key)||null,h(M,p,P,z);case Gs:return p=p.get(P.key===null?S:P.key)||null,d(M,p,P,z);case _r:var D=P._init;return x(p,M,S,D(P._payload),z)}if(aa(P)||Xo(P))return p=p.get(S)||null,m(M,p,P,z,null);Tl(M,P)}return null}function w(p,M,S,P){for(var z=null,D=null,I=M,k=M=0,ae=null;I!==null&&k<S.length;k++){I.index>k?(ae=I,I=null):ae=I.sibling;var E=_(p,I,S[k],P);if(E===null){I===null&&(I=ae);break}t&&I&&E.alternate===null&&e(p,I),M=o(E,M,k),D===null?z=E:D.sibling=E,D=E,I=ae}if(k===S.length)return n(p,I),bt&&Jr(p,k),z;if(I===null){for(;k<S.length;k++)I=g(p,S[k],P),I!==null&&(M=o(I,M,k),D===null?z=I:D.sibling=I,D=I);return bt&&Jr(p,k),z}for(I=i(p,I);k<S.length;k++)ae=x(I,p,k,S[k],P),ae!==null&&(t&&ae.alternate!==null&&I.delete(ae.key===null?k:ae.key),M=o(ae,M,k),D===null?z=ae:D.sibling=ae,D=ae);return t&&I.forEach(function(R){return e(p,R)}),bt&&Jr(p,k),z}function T(p,M,S,P){var z=Xo(S);if(typeof z!="function")throw Error(ge(150));if(S=z.call(S),S==null)throw Error(ge(151));for(var D=z=null,I=M,k=M=0,ae=null,E=S.next();I!==null&&!E.done;k++,E=S.next()){I.index>k?(ae=I,I=null):ae=I.sibling;var R=_(p,I,E.value,P);if(R===null){I===null&&(I=ae);break}t&&I&&R.alternate===null&&e(p,I),M=o(R,M,k),D===null?z=R:D.sibling=R,D=R,I=ae}if(E.done)return n(p,I),bt&&Jr(p,k),z;if(I===null){for(;!E.done;k++,E=S.next())E=g(p,E.value,P),E!==null&&(M=o(E,M,k),D===null?z=E:D.sibling=E,D=E);return bt&&Jr(p,k),z}for(I=i(p,I);!E.done;k++,E=S.next())E=x(I,p,k,E.value,P),E!==null&&(t&&E.alternate!==null&&I.delete(E.key===null?k:E.key),M=o(E,M,k),D===null?z=E:D.sibling=E,D=E);return t&&I.forEach(function(te){return e(p,te)}),bt&&Jr(p,k),z}function y(p,M,S,P){if(typeof S=="object"&&S!==null&&S.type===Ws&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case pl:e:{for(var z=S.key,D=M;D!==null;){if(D.key===z){if(z=S.type,z===Ws){if(D.tag===7){n(p,D.sibling),M=s(D,S.props.children),M.return=p,p=M;break e}}else if(D.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===_r&&u_(z)===D.type){n(p,D.sibling),M=s(D,S.props),M.ref=Ko(p,D,S),M.return=p,p=M;break e}n(p,D);break}else e(p,D);D=D.sibling}S.type===Ws?(M=cs(S.props.children,p.mode,P,S.key),M.return=p,p=M):(P=fu(S.type,S.key,S.props,null,p.mode,P),P.ref=Ko(p,M,S),P.return=p,p=P)}return l(p);case Gs:e:{for(D=S.key;M!==null;){if(M.key===D)if(M.tag===4&&M.stateNode.containerInfo===S.containerInfo&&M.stateNode.implementation===S.implementation){n(p,M.sibling),M=s(M,S.children||[]),M.return=p,p=M;break e}else{n(p,M);break}else e(p,M);M=M.sibling}M=ph(S,p.mode,P),M.return=p,p=M}return l(p);case _r:return D=S._init,y(p,M,D(S._payload),P)}if(aa(S))return w(p,M,S,P);if(Xo(S))return T(p,M,S,P);Tl(p,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,M!==null&&M.tag===6?(n(p,M.sibling),M=s(M,S),M.return=p,p=M):(n(p,M),M=dh(S,p.mode,P),M.return=p,p=M),l(p)):n(p,M)}return y}var mo=Yv(!0),Kv=Yv(!1),Uu=zr(null),Ou=null,Qs=null,tp=null;function np(){tp=Qs=Ou=null}function ip(t){var e=Uu.current;Lt(Uu),t._currentValue=e}function Tf(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function oo(t,e){Ou=t,tp=Qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Cn=!0),t.firstContext=null)}function ti(t){var e=t._currentValue;if(tp!==t)if(t={context:t,memoizedValue:e,next:null},Qs===null){if(Ou===null)throw Error(ge(308));Qs=t,Ou.dependencies={lanes:0,firstContext:t}}else Qs=Qs.next=t;return e}var os=null;function rp(t){os===null?os=[t]:os.push(t)}function $v(t,e,n,i){var s=e.interleaved;return s===null?(n.next=n,rp(e)):(n.next=s.next,s.next=n),e.interleaved=n,Qi(t,i)}function Qi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var gr=!1;function sp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Qv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Cr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,vt&2){var s=i.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),i.pending=e,Qi(t,n)}return s=i.interleaved,s===null?(e.next=e,rp(i)):(e.next=s.next,s.next=e),i.interleaved=e,Qi(t,n)}function ou(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}function c_(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var s=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?s=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?s=o=e:o=o.next=e}else s=o=e;n={baseState:i.baseState,firstBaseUpdate:s,lastBaseUpdate:o,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Fu(t,e,n,i){var s=t.updateQueue;gr=!1;var o=s.firstBaseUpdate,l=s.lastBaseUpdate,c=s.shared.pending;if(c!==null){s.shared.pending=null;var h=c,d=h.next;h.next=null,l===null?o=d:l.next=d,l=h;var m=t.alternate;m!==null&&(m=m.updateQueue,c=m.lastBaseUpdate,c!==l&&(c===null?m.firstBaseUpdate=d:c.next=d,m.lastBaseUpdate=h))}if(o!==null){var g=s.baseState;l=0,m=d=h=null,c=o;do{var _=c.lane,x=c.eventTime;if((i&_)===_){m!==null&&(m=m.next={eventTime:x,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var w=t,T=c;switch(_=e,x=n,T.tag){case 1:if(w=T.payload,typeof w=="function"){g=w.call(x,g,_);break e}g=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=T.payload,_=typeof w=="function"?w.call(x,g,_):w,_==null)break e;g=Nt({},g,_);break e;case 2:gr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,_=s.effects,_===null?s.effects=[c]:_.push(c))}else x={eventTime:x,lane:_,tag:c.tag,payload:c.payload,callback:c.callback,next:null},m===null?(d=m=x,h=g):m=m.next=x,l|=_;if(c=c.next,c===null){if(c=s.shared.pending,c===null)break;_=c,c=_.next,_.next=null,s.lastBaseUpdate=_,s.shared.pending=null}}while(!0);if(m===null&&(h=g),s.baseState=h,s.firstBaseUpdate=d,s.lastBaseUpdate=m,e=s.shared.interleaved,e!==null){s=e;do l|=s.lane,s=s.next;while(s!==e)}else o===null&&(s.shared.lanes=0);ms|=l,t.lanes=l,t.memoizedState=g}}function h_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],s=i.callback;if(s!==null){if(i.callback=null,i=n,typeof s!="function")throw Error(ge(191,s));s.call(i)}}}var Va={},Li=zr(Va),ba=zr(Va),Ia=zr(Va);function as(t){if(t===Va)throw Error(ge(174));return t}function op(t,e){switch(Tt(Ia,e),Tt(ba,t),Tt(Li,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sf(e,t)}Lt(Li),Tt(Li,e)}function _o(){Lt(Li),Lt(ba),Lt(Ia)}function Jv(t){as(Ia.current);var e=as(Li.current),n=sf(e,t.type);e!==n&&(Tt(ba,t),Tt(Li,n))}function ap(t){ba.current===t&&(Lt(Li),Lt(ba))}var It=zr(0);function zu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ah=[];function lp(){for(var t=0;t<ah.length;t++)ah[t]._workInProgressVersionPrimary=null;ah.length=0}var au=ir.ReactCurrentDispatcher,lh=ir.ReactCurrentBatchConfig,ps=0,Dt=null,Wt=null,$t=null,ku=!1,_a=!1,Da=0,RM=0;function un(){throw Error(ge(321))}function up(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vi(t[n],e[n]))return!1;return!0}function cp(t,e,n,i,s,o){if(ps=o,Dt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,au.current=t===null||t.memoizedState===null?DM:NM,t=n(i,s),_a){o=0;do{if(_a=!1,Da=0,25<=o)throw Error(ge(301));o+=1,$t=Wt=null,e.updateQueue=null,au.current=UM,t=n(i,s)}while(_a)}if(au.current=Bu,e=Wt!==null&&Wt.next!==null,ps=0,$t=Wt=Dt=null,ku=!1,e)throw Error(ge(300));return t}function hp(){var t=Da!==0;return Da=0,t}function wi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $t===null?Dt.memoizedState=$t=t:$t=$t.next=t,$t}function ni(){if(Wt===null){var t=Dt.alternate;t=t!==null?t.memoizedState:null}else t=Wt.next;var e=$t===null?Dt.memoizedState:$t.next;if(e!==null)$t=e,Wt=t;else{if(t===null)throw Error(ge(310));Wt=t,t={memoizedState:Wt.memoizedState,baseState:Wt.baseState,baseQueue:Wt.baseQueue,queue:Wt.queue,next:null},$t===null?Dt.memoizedState=$t=t:$t=$t.next=t}return $t}function Na(t,e){return typeof e=="function"?e(t):e}function uh(t){var e=ni(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=Wt,s=i.baseQueue,o=n.pending;if(o!==null){if(s!==null){var l=s.next;s.next=o.next,o.next=l}i.baseQueue=s=o,n.pending=null}if(s!==null){o=s.next,i=i.baseState;var c=l=null,h=null,d=o;do{var m=d.lane;if((ps&m)===m)h!==null&&(h=h.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),i=d.hasEagerState?d.eagerState:t(i,d.action);else{var g={lane:m,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};h===null?(c=h=g,l=i):h=h.next=g,Dt.lanes|=m,ms|=m}d=d.next}while(d!==null&&d!==o);h===null?l=i:h.next=c,vi(i,e.memoizedState)||(Cn=!0),e.memoizedState=i,e.baseState=l,e.baseQueue=h,n.lastRenderedState=i}if(t=n.interleaved,t!==null){s=t;do o=s.lane,Dt.lanes|=o,ms|=o,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ch(t){var e=ni(),n=e.queue;if(n===null)throw Error(ge(311));n.lastRenderedReducer=t;var i=n.dispatch,s=n.pending,o=e.memoizedState;if(s!==null){n.pending=null;var l=s=s.next;do o=t(o,l.action),l=l.next;while(l!==s);vi(o,e.memoizedState)||(Cn=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,i]}function e0(){}function t0(t,e){var n=Dt,i=ni(),s=e(),o=!vi(i.memoizedState,s);if(o&&(i.memoizedState=s,Cn=!0),i=i.queue,fp(r0.bind(null,n,i,t),[t]),i.getSnapshot!==e||o||$t!==null&&$t.memoizedState.tag&1){if(n.flags|=2048,Ua(9,i0.bind(null,n,i,s,e),void 0,null),Qt===null)throw Error(ge(349));ps&30||n0(n,e,s)}return s}function n0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function i0(t,e,n,i){e.value=n,e.getSnapshot=i,s0(e)&&o0(t)}function r0(t,e,n){return n(function(){s0(e)&&o0(t)})}function s0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vi(t,n)}catch{return!0}}function o0(t){var e=Qi(t,1);e!==null&&_i(e,t,1,-1)}function f_(t){var e=wi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Na,lastRenderedState:t},e.queue=t,t=t.dispatch=IM.bind(null,Dt,t),[e.memoizedState,t]}function Ua(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Dt.updateQueue,e===null?(e={lastEffect:null,stores:null},Dt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function a0(){return ni().memoizedState}function lu(t,e,n,i){var s=wi();Dt.flags|=t,s.memoizedState=Ua(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var s=ni();i=i===void 0?null:i;var o=void 0;if(Wt!==null){var l=Wt.memoizedState;if(o=l.destroy,i!==null&&up(i,l.deps)){s.memoizedState=Ua(e,n,o,i);return}}Dt.flags|=t,s.memoizedState=Ua(1|e,n,o,i)}function d_(t,e){return lu(8390656,8,t,e)}function fp(t,e){return ac(2048,8,t,e)}function l0(t,e){return ac(4,2,t,e)}function u0(t,e){return ac(4,4,t,e)}function c0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h0(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,c0.bind(null,e,t),n)}function dp(){}function f0(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&up(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=ni();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&up(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function p0(t,e,n){return ps&21?(vi(n,e)||(n=yv(),Dt.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Cn=!0),t.memoizedState=n)}function LM(t,e){var n=Et;Et=n!==0&&4>n?n:4,t(!0);var i=lh.transition;lh.transition={};try{t(!1),e()}finally{Et=n,lh.transition=i}}function m0(){return ni().memoizedState}function bM(t,e,n){var i=Rr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_0(t))g0(e,n);else if(n=$v(t,e,n,i),n!==null){var s=yn();_i(n,t,i,s),v0(n,e,i)}}function IM(t,e,n){var i=Rr(t),s={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(t))g0(e,s);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,c=o(l,n);if(s.hasEagerState=!0,s.eagerState=c,vi(c,l)){var h=e.interleaved;h===null?(s.next=s,rp(e)):(s.next=h.next,h.next=s),e.interleaved=s;return}}catch{}finally{}n=$v(t,e,s,i),n!==null&&(s=yn(),_i(n,t,i,s),v0(n,e,i))}}function _0(t){var e=t.alternate;return t===Dt||e!==null&&e===Dt}function g0(t,e){_a=ku=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function v0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Wd(t,n)}}var Bu={readContext:ti,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},DM={readContext:ti,useCallback:function(t,e){return wi().memoizedState=[t,e===void 0?null:e],t},useContext:ti,useEffect:d_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lu(4194308,4,c0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lu(4194308,4,t,e)},useInsertionEffect:function(t,e){return lu(4,2,t,e)},useMemo:function(t,e){var n=wi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=wi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=bM.bind(null,Dt,t),[i.memoizedState,t]},useRef:function(t){var e=wi();return t={current:t},e.memoizedState=t},useState:f_,useDebugValue:dp,useDeferredValue:function(t){return wi().memoizedState=t},useTransition:function(){var t=f_(!1),e=t[0];return t=LM.bind(null,t[1]),wi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Dt,s=wi();if(bt){if(n===void 0)throw Error(ge(407));n=n()}else{if(n=e(),Qt===null)throw Error(ge(349));ps&30||n0(i,e,n)}s.memoizedState=n;var o={value:n,getSnapshot:e};return s.queue=o,d_(r0.bind(null,i,o,t),[t]),i.flags|=2048,Ua(9,i0.bind(null,i,o,n,e),void 0,null),n},useId:function(){var t=wi(),e=Qt.identifierPrefix;if(bt){var n=Zi,i=Xi;n=(i&~(1<<32-mi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Da++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RM++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NM={readContext:ti,useCallback:f0,useContext:ti,useEffect:fp,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:d0,useReducer:uh,useRef:a0,useState:function(){return uh(Na)},useDebugValue:dp,useDeferredValue:function(t){var e=ni();return p0(e,Wt.memoizedState,t)},useTransition:function(){var t=uh(Na)[0],e=ni().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1},UM={readContext:ti,useCallback:f0,useContext:ti,useEffect:fp,useImperativeHandle:h0,useInsertionEffect:l0,useLayoutEffect:u0,useMemo:d0,useReducer:ch,useRef:a0,useState:function(){return ch(Na)},useDebugValue:dp,useDeferredValue:function(t){var e=ni();return Wt===null?e.memoizedState=t:p0(e,Wt.memoizedState,t)},useTransition:function(){var t=ch(Na)[0],e=ni().memoizedState;return[t,e]},useMutableSource:e0,useSyncExternalStore:t0,useId:m0,unstable_isNewReconciler:!1};function ui(t,e){if(t&&t.defaultProps){e=Nt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Af(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Nt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=yn(),s=Rr(t),o=qi(i,s);o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,s),e!==null&&(_i(e,t,s,i),ou(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=yn(),s=Rr(t),o=qi(i,s);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=Cr(t,o,s),e!==null&&(_i(e,t,s,i),ou(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=yn(),i=Rr(t),s=qi(n,i);s.tag=2,e!=null&&(s.callback=e),e=Cr(t,s,i),e!==null&&(_i(e,t,i,n),ou(e,t,i))}};function p_(t,e,n,i,s,o,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,o,l):e.prototype&&e.prototype.isPureReactComponent?!Ca(n,i)||!Ca(s,o):!0}function y0(t,e,n){var i=!1,s=Nr,o=e.contextType;return typeof o=="object"&&o!==null?o=ti(o):(s=Ln(e)?fs:pn.current,i=e.contextTypes,o=(i=i!=null)?fo(t,s):Nr),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=o),e}function m_(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function Cf(t,e,n,i){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},sp(t);var o=e.contextType;typeof o=="object"&&o!==null?s.context=ti(o):(o=Ln(e)?fs:pn.current,s.context=fo(t,o)),s.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Af(t,e,o,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&lc.enqueueReplaceState(s,s.state,null),Fu(t,n,s,i),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function go(t,e){try{var n="",i=e;do n+=uS(i),i=i.return;while(i);var s=n}catch(o){s=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:s,digest:null}}function hh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Pf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var OM=typeof WeakMap=="function"?WeakMap:Map;function x0(t,e,n){n=qi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Vu||(Vu=!0,zf=i),Pf(t,e)},n}function S0(t,e,n){n=qi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var s=e.value;n.payload=function(){return i(s)},n.callback=function(){Pf(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Pf(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function __(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new OM;var s=new Set;i.set(e,s)}else s=i.get(e),s===void 0&&(s=new Set,i.set(e,s));s.has(n)||(s.add(n),t=KM.bind(null,t,e,n),e.then(t,t))}function g_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function v_(t,e,n,i,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qi(-1,1),e.tag=2,Cr(n,e,1))),n.lanes|=1),t)}var FM=ir.ReactCurrentOwner,Cn=!1;function gn(t,e,n,i){e.child=t===null?Kv(e,null,n,i):mo(e,t.child,n,i)}function y_(t,e,n,i,s){n=n.render;var o=e.ref;return oo(e,s),i=cp(t,e,n,i,o,s),n=hp(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ji(t,e,s)):(bt&&n&&Qd(e),e.flags|=1,gn(t,e,i,s),e.child)}function x_(t,e,n,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Sp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,M0(t,e,o,i,s)):(t=fu(n.type,null,i,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&s)){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Ca,n(l,i)&&t.ref===e.ref)return Ji(t,e,s)}return e.flags|=1,t=Lr(o,i),t.ref=e.ref,t.return=e,e.child=t}function M0(t,e,n,i,s){if(t!==null){var o=t.memoizedProps;if(Ca(o,i)&&t.ref===e.ref)if(Cn=!1,e.pendingProps=i=o,(t.lanes&s)!==0)t.flags&131072&&(Cn=!0);else return e.lanes=t.lanes,Ji(t,e,s)}return Rf(t,e,n,i,s)}function E0(t,e,n){var i=e.pendingProps,s=i.children,o=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Tt(eo,kn),kn|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Tt(eo,kn),kn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=o!==null?o.baseLanes:n,Tt(eo,kn),kn|=i}else o!==null?(i=o.baseLanes|n,e.memoizedState=null):i=n,Tt(eo,kn),kn|=i;return gn(t,e,s,n),e.child}function w0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Rf(t,e,n,i,s){var o=Ln(n)?fs:pn.current;return o=fo(e,o),oo(e,s),n=cp(t,e,n,i,o,s),i=hp(),t!==null&&!Cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Ji(t,e,s)):(bt&&i&&Qd(e),e.flags|=1,gn(t,e,n,s),e.child)}function S_(t,e,n,i,s){if(Ln(n)){var o=!0;Iu(e)}else o=!1;if(oo(e,s),e.stateNode===null)uu(t,e),y0(e,n,i),Cf(e,n,i,s),i=!0;else if(t===null){var l=e.stateNode,c=e.memoizedProps;l.props=c;var h=l.context,d=n.contextType;typeof d=="object"&&d!==null?d=ti(d):(d=Ln(n)?fs:pn.current,d=fo(e,d));var m=n.getDerivedStateFromProps,g=typeof m=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==i||h!==d)&&m_(e,l,i,d),gr=!1;var _=e.memoizedState;l.state=_,Fu(e,i,l,s),h=e.memoizedState,c!==i||_!==h||Rn.current||gr?(typeof m=="function"&&(Af(e,n,m,i),h=e.memoizedState),(c=gr||p_(e,n,c,i,_,h,d))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=h),l.props=i,l.state=h,l.context=d,i=c):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{l=e.stateNode,Qv(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:ui(e.type,c),l.props=d,g=e.pendingProps,_=l.context,h=n.contextType,typeof h=="object"&&h!==null?h=ti(h):(h=Ln(n)?fs:pn.current,h=fo(e,h));var x=n.getDerivedStateFromProps;(m=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c!==g||_!==h)&&m_(e,l,i,h),gr=!1,_=e.memoizedState,l.state=_,Fu(e,i,l,s);var w=e.memoizedState;c!==g||_!==w||Rn.current||gr?(typeof x=="function"&&(Af(e,n,x,i),w=e.memoizedState),(d=gr||p_(e,n,d,i,_,w,h)||!1)?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,w,h),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,w,h)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=w),l.props=i,l.state=w,l.context=h,i=d):(typeof l.componentDidUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&_===t.memoizedState||(e.flags|=1024),i=!1)}return Lf(t,e,n,i,o,s)}function Lf(t,e,n,i,s,o){w0(t,e);var l=(e.flags&128)!==0;if(!i&&!l)return s&&o_(e,n,!1),Ji(t,e,o);i=e.stateNode,FM.current=e;var c=l&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&l?(e.child=mo(e,t.child,null,o),e.child=mo(e,null,c,o)):gn(t,e,c,o),e.memoizedState=i.state,s&&o_(e,n,!0),e.child}function T0(t){var e=t.stateNode;e.pendingContext?s_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&s_(t,e.context,!1),op(t,e.containerInfo)}function M_(t,e,n,i,s){return po(),ep(s),e.flags|=256,gn(t,e,n,i),e.child}var bf={dehydrated:null,treeContext:null,retryLane:0};function If(t){return{baseLanes:t,cachePool:null,transitions:null}}function A0(t,e,n){var i=e.pendingProps,s=It.current,o=!1,l=(e.flags&128)!==0,c;if((c=l)||(c=t!==null&&t.memoizedState===null?!1:(s&2)!==0),c?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),Tt(It,s&1),t===null)return wf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=i.children,t=i.fallback,o?(i=e.mode,o=e.child,l={mode:"hidden",children:l},!(i&1)&&o!==null?(o.childLanes=0,o.pendingProps=l):o=hc(l,i,0,null),t=cs(t,i,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=If(n),e.memoizedState=bf,t):pp(e,l));if(s=t.memoizedState,s!==null&&(c=s.dehydrated,c!==null))return zM(t,e,l,i,c,s,n);if(o){o=i.fallback,l=e.mode,s=t.child,c=s.sibling;var h={mode:"hidden",children:i.children};return!(l&1)&&e.child!==s?(i=e.child,i.childLanes=0,i.pendingProps=h,e.deletions=null):(i=Lr(s,h),i.subtreeFlags=s.subtreeFlags&14680064),c!==null?o=Lr(c,o):(o=cs(o,l,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,i=o,o=e.child,l=t.child.memoizedState,l=l===null?If(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=t.childLanes&~n,e.memoizedState=bf,i}return o=t.child,t=o.sibling,i=Lr(o,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function pp(t,e){return e=hc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Al(t,e,n,i){return i!==null&&ep(i),mo(e,t.child,null,n),t=pp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function zM(t,e,n,i,s,o,l){if(n)return e.flags&256?(e.flags&=-257,i=hh(Error(ge(422))),Al(t,e,l,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=i.fallback,s=e.mode,i=hc({mode:"visible",children:i.children},s,0,null),o=cs(o,s,l,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,e.mode&1&&mo(e,t.child,null,l),e.child.memoizedState=If(l),e.memoizedState=bf,o);if(!(e.mode&1))return Al(t,e,l,null);if(s.data==="$!"){if(i=s.nextSibling&&s.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(ge(419)),i=hh(o,i,void 0),Al(t,e,l,i)}if(c=(l&t.childLanes)!==0,Cn||c){if(i=Qt,i!==null){switch(l&-l){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(i.suspendedLanes|l)?0:s,s!==0&&s!==o.retryLane&&(o.retryLane=s,Qi(t,s),_i(i,t,s,-1))}return xp(),i=hh(Error(ge(421))),Al(t,e,l,i)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=$M.bind(null,t),s._reactRetry=e,null):(t=o.treeContext,Bn=Ar(s.nextSibling),Hn=e,bt=!0,hi=null,t!==null&&(Yn[Kn++]=Xi,Yn[Kn++]=Zi,Yn[Kn++]=ds,Xi=t.id,Zi=t.overflow,ds=e),e=pp(e,i.children),e.flags|=4096,e)}function E_(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Tf(t.return,e,n)}function fh(t,e,n,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=n,o.tailMode=s)}function C0(t,e,n){var i=e.pendingProps,s=i.revealOrder,o=i.tail;if(gn(t,e,i.children,n),i=It.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&E_(t,n,e);else if(t.tag===19)E_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(Tt(It,i),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&zu(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),fh(e,!1,s,n,o);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&zu(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}fh(e,!0,n,null,o);break;case"together":fh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ji(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ge(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kM(t,e,n){switch(e.tag){case 3:T0(e),po();break;case 5:Jv(e);break;case 1:Ln(e.type)&&Iu(e);break;case 4:op(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,s=e.memoizedProps.value;Tt(Uu,i._currentValue),i._currentValue=s;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Tt(It,It.current&1),e.flags|=128,null):n&e.child.childLanes?A0(t,e,n):(Tt(It,It.current&1),t=Ji(t,e,n),t!==null?t.sibling:null);Tt(It,It.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return C0(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Tt(It,It.current),i)break;return null;case 22:case 23:return e.lanes=0,E0(t,e,n)}return Ji(t,e,n)}var P0,Df,R0,L0;P0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Df=function(){};R0=function(t,e,n,i){var s=t.memoizedProps;if(s!==i){t=e.stateNode,as(Li.current);var o=null;switch(n){case"input":s=ef(t,s),i=ef(t,i),o=[];break;case"select":s=Nt({},s,{value:void 0}),i=Nt({},i,{value:void 0}),o=[];break;case"textarea":s=rf(t,s),i=rf(t,i),o=[];break;default:typeof s.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Lu)}of(n,i);var l;n=null;for(d in s)if(!i.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var c=s[d];for(l in c)c.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(xa.hasOwnProperty(d)?o||(o=[]):(o=o||[]).push(d,null));for(d in i){var h=i[d];if(c=s!=null?s[d]:void 0,i.hasOwnProperty(d)&&h!==c&&(h!=null||c!=null))if(d==="style")if(c){for(l in c)!c.hasOwnProperty(l)||h&&h.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in h)h.hasOwnProperty(l)&&c[l]!==h[l]&&(n||(n={}),n[l]=h[l])}else n||(o||(o=[]),o.push(d,n)),n=h;else d==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,c=c?c.__html:void 0,h!=null&&c!==h&&(o=o||[]).push(d,h)):d==="children"?typeof h!="string"&&typeof h!="number"||(o=o||[]).push(d,""+h):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(xa.hasOwnProperty(d)?(h!=null&&d==="onScroll"&&Pt("scroll",t),o||c===h||(o=[])):(o=o||[]).push(d,h))}n&&(o=o||[]).push("style",n);var d=o;(e.updateQueue=d)&&(e.flags|=4)}};L0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $o(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function cn(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags&14680064,i|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,i|=s.subtreeFlags,i|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function BM(t,e,n){var i=e.pendingProps;switch(Jd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return cn(e),null;case 1:return Ln(e.type)&&bu(),cn(e),null;case 3:return i=e.stateNode,_o(),Lt(Rn),Lt(pn),lp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(wl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,hi!==null&&(Hf(hi),hi=null))),Df(t,e),cn(e),null;case 5:ap(e);var s=as(Ia.current);if(n=e.type,t!==null&&e.stateNode!=null)R0(t,e,n,i,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ge(166));return cn(e),null}if(t=as(Li.current),wl(e)){i=e.stateNode,n=e.type;var o=e.memoizedProps;switch(i[Ci]=e,i[La]=o,t=(e.mode&1)!==0,n){case"dialog":Pt("cancel",i),Pt("close",i);break;case"iframe":case"object":case"embed":Pt("load",i);break;case"video":case"audio":for(s=0;s<ua.length;s++)Pt(ua[s],i);break;case"source":Pt("error",i);break;case"img":case"image":case"link":Pt("error",i),Pt("load",i);break;case"details":Pt("toggle",i);break;case"input":Im(i,o),Pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!o.multiple},Pt("invalid",i);break;case"textarea":Nm(i,o),Pt("invalid",i)}of(n,o),s=null;for(var l in o)if(o.hasOwnProperty(l)){var c=o[l];l==="children"?typeof c=="string"?i.textContent!==c&&(o.suppressHydrationWarning!==!0&&El(i.textContent,c,t),s=["children",c]):typeof c=="number"&&i.textContent!==""+c&&(o.suppressHydrationWarning!==!0&&El(i.textContent,c,t),s=["children",""+c]):xa.hasOwnProperty(l)&&c!=null&&l==="onScroll"&&Pt("scroll",i)}switch(n){case"input":ml(i),Dm(i,o,!0);break;case"textarea":ml(i),Um(i);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(i.onclick=Lu)}i=s,e.updateQueue=i,i!==null&&(e.flags|=4)}else{l=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=rv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=l.createElement(n,{is:i.is}):(t=l.createElement(n),n==="select"&&(l=t,i.multiple?l.multiple=!0:i.size&&(l.size=i.size))):t=l.createElementNS(t,n),t[Ci]=e,t[La]=i,P0(t,e,!1,!1),e.stateNode=t;e:{switch(l=af(n,i),n){case"dialog":Pt("cancel",t),Pt("close",t),s=i;break;case"iframe":case"object":case"embed":Pt("load",t),s=i;break;case"video":case"audio":for(s=0;s<ua.length;s++)Pt(ua[s],t);s=i;break;case"source":Pt("error",t),s=i;break;case"img":case"image":case"link":Pt("error",t),Pt("load",t),s=i;break;case"details":Pt("toggle",t),s=i;break;case"input":Im(t,i),s=ef(t,i),Pt("invalid",t);break;case"option":s=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},s=Nt({},i,{value:void 0}),Pt("invalid",t);break;case"textarea":Nm(t,i),s=rf(t,i),Pt("invalid",t);break;default:s=i}of(n,s),c=s;for(o in c)if(c.hasOwnProperty(o)){var h=c[o];o==="style"?av(t,h):o==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&sv(t,h)):o==="children"?typeof h=="string"?(n!=="textarea"||h!=="")&&Sa(t,h):typeof h=="number"&&Sa(t,""+h):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(xa.hasOwnProperty(o)?h!=null&&o==="onScroll"&&Pt("scroll",t):h!=null&&zd(t,o,h,l))}switch(n){case"input":ml(t),Dm(t,i,!1);break;case"textarea":ml(t),Um(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Dr(i.value));break;case"select":t.multiple=!!i.multiple,o=i.value,o!=null?no(t,!!i.multiple,o,!1):i.defaultValue!=null&&no(t,!!i.multiple,i.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Lu)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return cn(e),null;case 6:if(t&&e.stateNode!=null)L0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ge(166));if(n=as(Ia.current),as(Li.current),wl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ci]=e,(o=i.nodeValue!==n)&&(t=Hn,t!==null))switch(t.tag){case 3:El(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&El(i.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ci]=e,e.stateNode=i}return cn(e),null;case 13:if(Lt(It),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(bt&&Bn!==null&&e.mode&1&&!(e.flags&128))qv(),po(),e.flags|=98560,o=!1;else if(o=wl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!o)throw Error(ge(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ge(317));o[Ci]=e}else po(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;cn(e),o=!1}else hi!==null&&(Hf(hi),hi=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||It.current&1?Xt===0&&(Xt=3):xp())),e.updateQueue!==null&&(e.flags|=4),cn(e),null);case 4:return _o(),Df(t,e),t===null&&Pa(e.stateNode.containerInfo),cn(e),null;case 10:return ip(e.type._context),cn(e),null;case 17:return Ln(e.type)&&bu(),cn(e),null;case 19:if(Lt(It),o=e.memoizedState,o===null)return cn(e),null;if(i=(e.flags&128)!==0,l=o.rendering,l===null)if(i)$o(o,!1);else{if(Xt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=zu(t),l!==null){for(e.flags|=128,$o(o,!1),i=l.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)o=n,t=i,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,t=l.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Tt(It,It.current&1|2),e.child}t=t.sibling}o.tail!==null&&zt()>vo&&(e.flags|=128,i=!0,$o(o,!1),e.lanes=4194304)}else{if(!i)if(t=zu(l),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$o(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!bt)return cn(e),null}else 2*zt()-o.renderingStartTime>vo&&n!==1073741824&&(e.flags|=128,i=!0,$o(o,!1),e.lanes=4194304);o.isBackwards?(l.sibling=e.child,e.child=l):(n=o.last,n!==null?n.sibling=l:e.child=l,o.last=l)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=zt(),e.sibling=null,n=It.current,Tt(It,i?n&1|2:n&1),e):(cn(e),null);case 22:case 23:return yp(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?kn&1073741824&&(cn(e),e.subtreeFlags&6&&(e.flags|=8192)):cn(e),null;case 24:return null;case 25:return null}throw Error(ge(156,e.tag))}function HM(t,e){switch(Jd(e),e.tag){case 1:return Ln(e.type)&&bu(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return _o(),Lt(Rn),Lt(pn),lp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ap(e),null;case 13:if(Lt(It),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ge(340));po()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Lt(It),null;case 4:return _o(),null;case 10:return ip(e.type._context),null;case 22:case 23:return yp(),null;case 24:return null;default:return null}}var Cl=!1,dn=!1,VM=typeof WeakSet=="function"?WeakSet:Set,Ie=null;function Js(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Ot(t,e,i)}else n.current=null}function Nf(t,e,n){try{n()}catch(i){Ot(t,e,i)}}var w_=!1;function GM(t,e){if(gf=Cu,t=Uv(),$d(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var s=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,c=-1,h=-1,d=0,m=0,g=t,_=null;t:for(;;){for(var x;g!==n||s!==0&&g.nodeType!==3||(c=l+s),g!==o||i!==0&&g.nodeType!==3||(h=l+i),g.nodeType===3&&(l+=g.nodeValue.length),(x=g.firstChild)!==null;)_=g,g=x;for(;;){if(g===t)break t;if(_===n&&++d===s&&(c=l),_===o&&++m===i&&(h=l),(x=g.nextSibling)!==null)break;g=_,_=g.parentNode}g=x}n=c===-1||h===-1?null:{start:c,end:h}}else n=null}n=n||{start:0,end:0}}else n=null;for(vf={focusedElem:t,selectionRange:n},Cu=!1,Ie=e;Ie!==null;)if(e=Ie,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ie=t;else for(;Ie!==null;){e=Ie;try{var w=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var T=w.memoizedProps,y=w.memoizedState,p=e.stateNode,M=p.getSnapshotBeforeUpdate(e.elementType===e.type?T:ui(e.type,T),y);p.__reactInternalSnapshotBeforeUpdate=M}break;case 3:var S=e.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ge(163))}}catch(P){Ot(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,Ie=t;break}Ie=e.return}return w=w_,w_=!1,w}function ga(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var s=i=i.next;do{if((s.tag&t)===t){var o=s.destroy;s.destroy=void 0,o!==void 0&&Nf(e,n,o)}s=s.next}while(s!==i)}}function uc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Uf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function b0(t){var e=t.alternate;e!==null&&(t.alternate=null,b0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ci],delete e[La],delete e[Sf],delete e[TM],delete e[AM])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I0(t){return t.tag===5||t.tag===3||t.tag===4}function T_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lu));else if(i!==4&&(t=t.child,t!==null))for(Of(t,e,n),t=t.sibling;t!==null;)Of(t,e,n),t=t.sibling}function Ff(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ff(t,e,n),t=t.sibling;t!==null;)Ff(t,e,n),t=t.sibling}var nn=null,ci=!1;function ur(t,e,n){for(n=n.child;n!==null;)D0(t,e,n),n=n.sibling}function D0(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:dn||Js(n,e);case 6:var i=nn,s=ci;nn=null,ur(t,e,n),nn=i,ci=s,nn!==null&&(ci?(t=nn,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):nn.removeChild(n.stateNode));break;case 18:nn!==null&&(ci?(t=nn,n=n.stateNode,t.nodeType===8?sh(t.parentNode,n):t.nodeType===1&&sh(t,n),Ta(t)):sh(nn,n.stateNode));break;case 4:i=nn,s=ci,nn=n.stateNode.containerInfo,ci=!0,ur(t,e,n),nn=i,ci=s;break;case 0:case 11:case 14:case 15:if(!dn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){s=i=i.next;do{var o=s,l=o.destroy;o=o.tag,l!==void 0&&(o&2||o&4)&&Nf(n,e,l),s=s.next}while(s!==i)}ur(t,e,n);break;case 1:if(!dn&&(Js(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(c){Ot(n,e,c)}ur(t,e,n);break;case 21:ur(t,e,n);break;case 22:n.mode&1?(dn=(i=dn)||n.memoizedState!==null,ur(t,e,n),dn=i):ur(t,e,n);break;default:ur(t,e,n)}}function A_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new VM),e.forEach(function(i){var s=QM.bind(null,t,i);n.has(i)||(n.add(i),i.then(s,s))})}}function si(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var s=n[i];try{var o=t,l=e,c=l;e:for(;c!==null;){switch(c.tag){case 5:nn=c.stateNode,ci=!1;break e;case 3:nn=c.stateNode.containerInfo,ci=!0;break e;case 4:nn=c.stateNode.containerInfo,ci=!0;break e}c=c.return}if(nn===null)throw Error(ge(160));D0(o,l,s),nn=null,ci=!1;var h=s.alternate;h!==null&&(h.return=null),s.return=null}catch(d){Ot(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)N0(e,t),e=e.sibling}function N0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(e,t),Ei(t),i&4){try{ga(3,t,t.return),uc(3,t)}catch(T){Ot(t,t.return,T)}try{ga(5,t,t.return)}catch(T){Ot(t,t.return,T)}}break;case 1:si(e,t),Ei(t),i&512&&n!==null&&Js(n,n.return);break;case 5:if(si(e,t),Ei(t),i&512&&n!==null&&Js(n,n.return),t.flags&32){var s=t.stateNode;try{Sa(s,"")}catch(T){Ot(t,t.return,T)}}if(i&4&&(s=t.stateNode,s!=null)){var o=t.memoizedProps,l=n!==null?n.memoizedProps:o,c=t.type,h=t.updateQueue;if(t.updateQueue=null,h!==null)try{c==="input"&&o.type==="radio"&&o.name!=null&&nv(s,o),af(c,l);var d=af(c,o);for(l=0;l<h.length;l+=2){var m=h[l],g=h[l+1];m==="style"?av(s,g):m==="dangerouslySetInnerHTML"?sv(s,g):m==="children"?Sa(s,g):zd(s,m,g,d)}switch(c){case"input":tf(s,o);break;case"textarea":iv(s,o);break;case"select":var _=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!o.multiple;var x=o.value;x!=null?no(s,!!o.multiple,x,!1):_!==!!o.multiple&&(o.defaultValue!=null?no(s,!!o.multiple,o.defaultValue,!0):no(s,!!o.multiple,o.multiple?[]:"",!1))}s[La]=o}catch(T){Ot(t,t.return,T)}}break;case 6:if(si(e,t),Ei(t),i&4){if(t.stateNode===null)throw Error(ge(162));s=t.stateNode,o=t.memoizedProps;try{s.nodeValue=o}catch(T){Ot(t,t.return,T)}}break;case 3:if(si(e,t),Ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(T){Ot(t,t.return,T)}break;case 4:si(e,t),Ei(t);break;case 13:si(e,t),Ei(t),s=t.child,s.flags&8192&&(o=s.memoizedState!==null,s.stateNode.isHidden=o,!o||s.alternate!==null&&s.alternate.memoizedState!==null||(gp=zt())),i&4&&A_(t);break;case 22:if(m=n!==null&&n.memoizedState!==null,t.mode&1?(dn=(d=dn)||m,si(e,t),dn=d):si(e,t),Ei(t),i&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!m&&t.mode&1)for(Ie=t,m=t.child;m!==null;){for(g=Ie=m;Ie!==null;){switch(_=Ie,x=_.child,_.tag){case 0:case 11:case 14:case 15:ga(4,_,_.return);break;case 1:Js(_,_.return);var w=_.stateNode;if(typeof w.componentWillUnmount=="function"){i=_,n=_.return;try{e=i,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(T){Ot(i,n,T)}}break;case 5:Js(_,_.return);break;case 22:if(_.memoizedState!==null){P_(g);continue}}x!==null?(x.return=_,Ie=x):P_(g)}m=m.sibling}e:for(m=null,g=t;;){if(g.tag===5){if(m===null){m=g;try{s=g.stateNode,d?(o=s.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(c=g.stateNode,h=g.memoizedProps.style,l=h!=null&&h.hasOwnProperty("display")?h.display:null,c.style.display=ov("display",l))}catch(T){Ot(t,t.return,T)}}}else if(g.tag===6){if(m===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(T){Ot(t,t.return,T)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;m===g&&(m=null),g=g.return}m===g&&(m=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:si(e,t),Ei(t),i&4&&A_(t);break;case 21:break;default:si(e,t),Ei(t)}}function Ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I0(n)){var i=n;break e}n=n.return}throw Error(ge(160))}switch(i.tag){case 5:var s=i.stateNode;i.flags&32&&(Sa(s,""),i.flags&=-33);var o=T_(t);Ff(t,o,s);break;case 3:case 4:var l=i.stateNode.containerInfo,c=T_(t);Of(t,c,l);break;default:throw Error(ge(161))}}catch(h){Ot(t,t.return,h)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WM(t,e,n){Ie=t,U0(t)}function U0(t,e,n){for(var i=(t.mode&1)!==0;Ie!==null;){var s=Ie,o=s.child;if(s.tag===22&&i){var l=s.memoizedState!==null||Cl;if(!l){var c=s.alternate,h=c!==null&&c.memoizedState!==null||dn;c=Cl;var d=dn;if(Cl=l,(dn=h)&&!d)for(Ie=s;Ie!==null;)l=Ie,h=l.child,l.tag===22&&l.memoizedState!==null?R_(s):h!==null?(h.return=l,Ie=h):R_(s);for(;o!==null;)Ie=o,U0(o),o=o.sibling;Ie=s,Cl=c,dn=d}C_(t)}else s.subtreeFlags&8772&&o!==null?(o.return=s,Ie=o):C_(t)}}function C_(t){for(;Ie!==null;){var e=Ie;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:dn||uc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!dn)if(n===null)i.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ui(e.type,n.memoizedProps);i.componentDidUpdate(s,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&h_(e,o,i);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}h_(e,l,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var h=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&n.focus();break;case"img":h.src&&(n.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var m=d.memoizedState;if(m!==null){var g=m.dehydrated;g!==null&&Ta(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ge(163))}dn||e.flags&512&&Uf(e)}catch(_){Ot(e,e.return,_)}}if(e===t){Ie=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function P_(t){for(;Ie!==null;){var e=Ie;if(e===t){Ie=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ie=n;break}Ie=e.return}}function R_(t){for(;Ie!==null;){var e=Ie;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{uc(4,e)}catch(h){Ot(e,n,h)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var s=e.return;try{i.componentDidMount()}catch(h){Ot(e,s,h)}}var o=e.return;try{Uf(e)}catch(h){Ot(e,o,h)}break;case 5:var l=e.return;try{Uf(e)}catch(h){Ot(e,l,h)}}}catch(h){Ot(e,e.return,h)}if(e===t){Ie=null;break}var c=e.sibling;if(c!==null){c.return=e.return,Ie=c;break}Ie=e.return}}var XM=Math.ceil,Hu=ir.ReactCurrentDispatcher,mp=ir.ReactCurrentOwner,ei=ir.ReactCurrentBatchConfig,vt=0,Qt=null,Gt=null,rn=0,kn=0,eo=zr(0),Xt=0,Oa=null,ms=0,cc=0,_p=0,va=null,Tn=null,gp=0,vo=1/0,Vi=null,Vu=!1,zf=null,Pr=null,Pl=!1,Mr=null,Gu=0,ya=0,kf=null,cu=-1,hu=0;function yn(){return vt&6?zt():cu!==-1?cu:cu=zt()}function Rr(t){return t.mode&1?vt&2&&rn!==0?rn&-rn:PM.transition!==null?(hu===0&&(hu=yv()),hu):(t=Et,t!==0||(t=window.event,t=t===void 0?16:Av(t.type)),t):1}function _i(t,e,n,i){if(50<ya)throw ya=0,kf=null,Error(ge(185));ka(t,n,i),(!(vt&2)||t!==Qt)&&(t===Qt&&(!(vt&2)&&(cc|=n),Xt===4&&yr(t,rn)),bn(t,i),n===1&&vt===0&&!(e.mode&1)&&(vo=zt()+500,oc&&kr()))}function bn(t,e){var n=t.callbackNode;PS(t,e);var i=Au(t,t===Qt?rn:0);if(i===0)n!==null&&zm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&zm(n),e===1)t.tag===0?CM(L_.bind(null,t)):Xv(L_.bind(null,t)),EM(function(){!(vt&6)&&kr()}),n=null;else{switch(xv(i)){case 1:n=Gd;break;case 4:n=gv;break;case 16:n=Tu;break;case 536870912:n=vv;break;default:n=Tu}n=G0(n,O0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function O0(t,e){if(cu=-1,hu=0,vt&6)throw Error(ge(327));var n=t.callbackNode;if(ao()&&t.callbackNode!==n)return null;var i=Au(t,t===Qt?rn:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Wu(t,i);else{e=i;var s=vt;vt|=2;var o=z0();(Qt!==t||rn!==e)&&(Vi=null,vo=zt()+500,us(t,e));do try{qM();break}catch(c){F0(t,c)}while(!0);np(),Hu.current=o,vt=s,Gt!==null?e=0:(Qt=null,rn=0,e=Xt)}if(e!==0){if(e===2&&(s=ff(t),s!==0&&(i=s,e=Bf(t,s))),e===1)throw n=Oa,us(t,0),yr(t,i),bn(t,zt()),n;if(e===6)yr(t,i);else{if(s=t.current.alternate,!(i&30)&&!ZM(s)&&(e=Wu(t,i),e===2&&(o=ff(t),o!==0&&(i=o,e=Bf(t,o))),e===1))throw n=Oa,us(t,0),yr(t,i),bn(t,zt()),n;switch(t.finishedWork=s,t.finishedLanes=i,e){case 0:case 1:throw Error(ge(345));case 2:es(t,Tn,Vi);break;case 3:if(yr(t,i),(i&130023424)===i&&(e=gp+500-zt(),10<e)){if(Au(t,0)!==0)break;if(s=t.suspendedLanes,(s&i)!==i){yn(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=xf(es.bind(null,t,Tn,Vi),e);break}es(t,Tn,Vi);break;case 4:if(yr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,s=-1;0<i;){var l=31-mi(i);o=1<<l,l=e[l],l>s&&(s=l),i&=~o}if(i=s,i=zt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*XM(i/1960))-i,10<i){t.timeoutHandle=xf(es.bind(null,t,Tn,Vi),i);break}es(t,Tn,Vi);break;case 5:es(t,Tn,Vi);break;default:throw Error(ge(329))}}}return bn(t,zt()),t.callbackNode===n?O0.bind(null,t):null}function Bf(t,e){var n=va;return t.current.memoizedState.isDehydrated&&(us(t,e).flags|=256),t=Wu(t,e),t!==2&&(e=Tn,Tn=n,e!==null&&Hf(e)),t}function Hf(t){Tn===null?Tn=t:Tn.push.apply(Tn,t)}function ZM(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var s=n[i],o=s.getSnapshot;s=s.value;try{if(!vi(o(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function yr(t,e){for(e&=~_p,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mi(e),i=1<<n;t[n]=-1,e&=~i}}function L_(t){if(vt&6)throw Error(ge(327));ao();var e=Au(t,0);if(!(e&1))return bn(t,zt()),null;var n=Wu(t,e);if(t.tag!==0&&n===2){var i=ff(t);i!==0&&(e=i,n=Bf(t,i))}if(n===1)throw n=Oa,us(t,0),yr(t,e),bn(t,zt()),n;if(n===6)throw Error(ge(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,es(t,Tn,Vi),bn(t,zt()),null}function vp(t,e){var n=vt;vt|=1;try{return t(e)}finally{vt=n,vt===0&&(vo=zt()+500,oc&&kr())}}function _s(t){Mr!==null&&Mr.tag===0&&!(vt&6)&&ao();var e=vt;vt|=1;var n=ei.transition,i=Et;try{if(ei.transition=null,Et=1,t)return t()}finally{Et=i,ei.transition=n,vt=e,!(vt&6)&&kr()}}function yp(){kn=eo.current,Lt(eo)}function us(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MM(n)),Gt!==null)for(n=Gt.return;n!==null;){var i=n;switch(Jd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bu();break;case 3:_o(),Lt(Rn),Lt(pn),lp();break;case 5:ap(i);break;case 4:_o();break;case 13:Lt(It);break;case 19:Lt(It);break;case 10:ip(i.type._context);break;case 22:case 23:yp()}n=n.return}if(Qt=t,Gt=t=Lr(t.current,null),rn=kn=e,Xt=0,Oa=null,_p=cc=ms=0,Tn=va=null,os!==null){for(e=0;e<os.length;e++)if(n=os[e],i=n.interleaved,i!==null){n.interleaved=null;var s=i.next,o=n.pending;if(o!==null){var l=o.next;o.next=s,i.next=l}n.pending=i}os=null}return t}function F0(t,e){do{var n=Gt;try{if(np(),au.current=Bu,ku){for(var i=Dt.memoizedState;i!==null;){var s=i.queue;s!==null&&(s.pending=null),i=i.next}ku=!1}if(ps=0,$t=Wt=Dt=null,_a=!1,Da=0,mp.current=null,n===null||n.return===null){Xt=1,Oa=e,Gt=null;break}e:{var o=t,l=n.return,c=n,h=e;if(e=rn,c.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var d=h,m=c,g=m.tag;if(!(m.mode&1)&&(g===0||g===11||g===15)){var _=m.alternate;_?(m.updateQueue=_.updateQueue,m.memoizedState=_.memoizedState,m.lanes=_.lanes):(m.updateQueue=null,m.memoizedState=null)}var x=g_(l);if(x!==null){x.flags&=-257,v_(x,l,c,o,e),x.mode&1&&__(o,d,e),e=x,h=d;var w=e.updateQueue;if(w===null){var T=new Set;T.add(h),e.updateQueue=T}else w.add(h);break e}else{if(!(e&1)){__(o,d,e),xp();break e}h=Error(ge(426))}}else if(bt&&c.mode&1){var y=g_(l);if(y!==null){!(y.flags&65536)&&(y.flags|=256),v_(y,l,c,o,e),ep(go(h,c));break e}}o=h=go(h,c),Xt!==4&&(Xt=2),va===null?va=[o]:va.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var p=x0(o,h,e);c_(o,p);break e;case 1:c=h;var M=o.type,S=o.stateNode;if(!(o.flags&128)&&(typeof M.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Pr===null||!Pr.has(S)))){o.flags|=65536,e&=-e,o.lanes|=e;var P=S0(o,c,e);c_(o,P);break e}}o=o.return}while(o!==null)}B0(n)}catch(z){e=z,Gt===n&&n!==null&&(Gt=n=n.return);continue}break}while(!0)}function z0(){var t=Hu.current;return Hu.current=Bu,t===null?Bu:t}function xp(){(Xt===0||Xt===3||Xt===2)&&(Xt=4),Qt===null||!(ms&268435455)&&!(cc&268435455)||yr(Qt,rn)}function Wu(t,e){var n=vt;vt|=2;var i=z0();(Qt!==t||rn!==e)&&(Vi=null,us(t,e));do try{jM();break}catch(s){F0(t,s)}while(!0);if(np(),vt=n,Hu.current=i,Gt!==null)throw Error(ge(261));return Qt=null,rn=0,Xt}function jM(){for(;Gt!==null;)k0(Gt)}function qM(){for(;Gt!==null&&!yS();)k0(Gt)}function k0(t){var e=V0(t.alternate,t,kn);t.memoizedProps=t.pendingProps,e===null?B0(t):Gt=e,mp.current=null}function B0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=HM(n,e),n!==null){n.flags&=32767,Gt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Xt=6,Gt=null;return}}else if(n=BM(n,e,kn),n!==null){Gt=n;return}if(e=e.sibling,e!==null){Gt=e;return}Gt=e=t}while(e!==null);Xt===0&&(Xt=5)}function es(t,e,n){var i=Et,s=ei.transition;try{ei.transition=null,Et=1,YM(t,e,n,i)}finally{ei.transition=s,Et=i}return null}function YM(t,e,n,i){do ao();while(Mr!==null);if(vt&6)throw Error(ge(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ge(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(RS(t,o),t===Qt&&(Gt=Qt=null,rn=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pl||(Pl=!0,G0(Tu,function(){return ao(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ei.transition,ei.transition=null;var l=Et;Et=1;var c=vt;vt|=4,mp.current=null,GM(t,n),N0(n,t),mM(vf),Cu=!!gf,vf=gf=null,t.current=n,WM(n),xS(),vt=c,Et=l,ei.transition=o}else t.current=n;if(Pl&&(Pl=!1,Mr=t,Gu=s),o=t.pendingLanes,o===0&&(Pr=null),ES(n.stateNode),bn(t,zt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],i(s.value,{componentStack:s.stack,digest:s.digest});if(Vu)throw Vu=!1,t=zf,zf=null,t;return Gu&1&&t.tag!==0&&ao(),o=t.pendingLanes,o&1?t===kf?ya++:(ya=0,kf=t):ya=0,kr(),null}function ao(){if(Mr!==null){var t=xv(Gu),e=ei.transition,n=Et;try{if(ei.transition=null,Et=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Gu=0,vt&6)throw Error(ge(331));var s=vt;for(vt|=4,Ie=t.current;Ie!==null;){var o=Ie,l=o.child;if(Ie.flags&16){var c=o.deletions;if(c!==null){for(var h=0;h<c.length;h++){var d=c[h];for(Ie=d;Ie!==null;){var m=Ie;switch(m.tag){case 0:case 11:case 15:ga(8,m,o)}var g=m.child;if(g!==null)g.return=m,Ie=g;else for(;Ie!==null;){m=Ie;var _=m.sibling,x=m.return;if(b0(m),m===d){Ie=null;break}if(_!==null){_.return=x,Ie=_;break}Ie=x}}}var w=o.alternate;if(w!==null){var T=w.child;if(T!==null){w.child=null;do{var y=T.sibling;T.sibling=null,T=y}while(T!==null)}}Ie=o}}if(o.subtreeFlags&2064&&l!==null)l.return=o,Ie=l;else e:for(;Ie!==null;){if(o=Ie,o.flags&2048)switch(o.tag){case 0:case 11:case 15:ga(9,o,o.return)}var p=o.sibling;if(p!==null){p.return=o.return,Ie=p;break e}Ie=o.return}}var M=t.current;for(Ie=M;Ie!==null;){l=Ie;var S=l.child;if(l.subtreeFlags&2064&&S!==null)S.return=l,Ie=S;else e:for(l=M;Ie!==null;){if(c=Ie,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:uc(9,c)}}catch(z){Ot(c,c.return,z)}if(c===l){Ie=null;break e}var P=c.sibling;if(P!==null){P.return=c.return,Ie=P;break e}Ie=c.return}}if(vt=s,kr(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{Et=n,ei.transition=e}}return!1}function b_(t,e,n){e=go(n,e),e=x0(t,e,1),t=Cr(t,e,1),e=yn(),t!==null&&(ka(t,1,e),bn(t,e))}function Ot(t,e,n){if(t.tag===3)b_(t,t,n);else for(;e!==null;){if(e.tag===3){b_(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=go(n,t),t=S0(e,t,1),e=Cr(e,t,1),t=yn(),e!==null&&(ka(e,1,t),bn(e,t));break}}e=e.return}}function KM(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=yn(),t.pingedLanes|=t.suspendedLanes&n,Qt===t&&(rn&n)===n&&(Xt===4||Xt===3&&(rn&130023424)===rn&&500>zt()-gp?us(t,0):_p|=n),bn(t,e)}function H0(t,e){e===0&&(t.mode&1?(e=vl,vl<<=1,!(vl&130023424)&&(vl=4194304)):e=1);var n=yn();t=Qi(t,e),t!==null&&(ka(t,e,n),bn(t,n))}function $M(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H0(t,n)}function QM(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ge(314))}i!==null&&i.delete(e),H0(t,n)}var V0;V0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Rn.current)Cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Cn=!1,kM(t,e,n);Cn=!!(t.flags&131072)}else Cn=!1,bt&&e.flags&1048576&&Zv(e,Nu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uu(t,e),t=e.pendingProps;var s=fo(e,pn.current);oo(e,n),s=cp(null,e,i,t,s,n);var o=hp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ln(i)?(o=!0,Iu(e)):o=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,sp(e),s.updater=lc,e.stateNode=s,s._reactInternals=e,Cf(e,i,t,n),e=Lf(null,e,i,!0,o,n)):(e.tag=0,bt&&o&&Qd(e),gn(null,e,s,n),e=e.child),e;case 16:i=e.elementType;e:{switch(uu(t,e),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=eE(i),t=ui(i,t),s){case 0:e=Rf(null,e,i,t,n);break e;case 1:e=S_(null,e,i,t,n);break e;case 11:e=y_(null,e,i,t,n);break e;case 14:e=x_(null,e,i,ui(i.type,t),n);break e}throw Error(ge(306,i,""))}return e;case 0:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ui(i,s),Rf(t,e,i,s,n);case 1:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ui(i,s),S_(t,e,i,s,n);case 3:e:{if(T0(e),t===null)throw Error(ge(387));i=e.pendingProps,o=e.memoizedState,s=o.element,Qv(t,e),Fu(e,i,null,n);var l=e.memoizedState;if(i=l.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){s=go(Error(ge(423)),e),e=M_(t,e,i,n,s);break e}else if(i!==s){s=go(Error(ge(424)),e),e=M_(t,e,i,n,s);break e}else for(Bn=Ar(e.stateNode.containerInfo.firstChild),Hn=e,bt=!0,hi=null,n=Kv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(po(),i===s){e=Ji(t,e,n);break e}gn(t,e,i,n)}e=e.child}return e;case 5:return Jv(e),t===null&&wf(e),i=e.type,s=e.pendingProps,o=t!==null?t.memoizedProps:null,l=s.children,yf(i,s)?l=null:o!==null&&yf(i,o)&&(e.flags|=32),w0(t,e),gn(t,e,l,n),e.child;case 6:return t===null&&wf(e),null;case 13:return A0(t,e,n);case 4:return op(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=mo(e,null,i,n):gn(t,e,i,n),e.child;case 11:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ui(i,s),y_(t,e,i,s,n);case 7:return gn(t,e,e.pendingProps,n),e.child;case 8:return gn(t,e,e.pendingProps.children,n),e.child;case 12:return gn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,s=e.pendingProps,o=e.memoizedProps,l=s.value,Tt(Uu,i._currentValue),i._currentValue=l,o!==null)if(vi(o.value,l)){if(o.children===s.children&&!Rn.current){e=Ji(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){l=o.child;for(var h=c.firstContext;h!==null;){if(h.context===i){if(o.tag===1){h=qi(-1,n&-n),h.tag=2;var d=o.updateQueue;if(d!==null){d=d.shared;var m=d.pending;m===null?h.next=h:(h.next=m.next,m.next=h),d.pending=h}}o.lanes|=n,h=o.alternate,h!==null&&(h.lanes|=n),Tf(o.return,n,e),c.lanes|=n;break}h=h.next}}else if(o.tag===10)l=o.type===e.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(ge(341));l.lanes|=n,c=l.alternate,c!==null&&(c.lanes|=n),Tf(l,n,e),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===e){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}gn(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,i=e.pendingProps.children,oo(e,n),s=ti(s),i=i(s),e.flags|=1,gn(t,e,i,n),e.child;case 14:return i=e.type,s=ui(i,e.pendingProps),s=ui(i.type,s),x_(t,e,i,s,n);case 15:return M0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,s=e.pendingProps,s=e.elementType===i?s:ui(i,s),uu(t,e),e.tag=1,Ln(i)?(t=!0,Iu(e)):t=!1,oo(e,n),y0(e,i,s),Cf(e,i,s,n),Lf(null,e,i,!0,t,n);case 19:return C0(t,e,n);case 22:return E0(t,e,n)}throw Error(ge(156,e.tag))};function G0(t,e){return _v(t,e)}function JM(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $n(t,e,n,i){return new JM(t,e,n,i)}function Sp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function eE(t){if(typeof t=="function")return Sp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Bd)return 11;if(t===Hd)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=$n(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function fu(t,e,n,i,s,o){var l=2;if(i=t,typeof t=="function")Sp(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case Ws:return cs(n.children,s,o,e);case kd:l=8,s|=8;break;case Kh:return t=$n(12,n,e,s|2),t.elementType=Kh,t.lanes=o,t;case $h:return t=$n(13,n,e,s),t.elementType=$h,t.lanes=o,t;case Qh:return t=$n(19,n,e,s),t.elementType=Qh,t.lanes=o,t;case Jg:return hc(n,s,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $g:l=10;break e;case Qg:l=9;break e;case Bd:l=11;break e;case Hd:l=14;break e;case _r:l=16,i=null;break e}throw Error(ge(130,t==null?t:typeof t,""))}return e=$n(l,n,e,s),e.elementType=t,e.type=i,e.lanes=o,e}function cs(t,e,n,i){return t=$n(7,t,i,e),t.lanes=n,t}function hc(t,e,n,i){return t=$n(22,t,i,e),t.elementType=Jg,t.lanes=n,t.stateNode={isHidden:!1},t}function dh(t,e,n){return t=$n(6,t,null,e),t.lanes=n,t}function ph(t,e,n){return e=$n(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tE(t,e,n,i,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=qc(0),this.expirationTimes=qc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qc(0),this.identifierPrefix=i,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Mp(t,e,n,i,s,o,l,c,h){return t=new tE(t,e,n,c,h),e===1?(e=1,o===!0&&(e|=8)):e=0,o=$n(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},sp(o),t}function nE(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Gs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function W0(t){if(!t)return Nr;t=t._reactInternals;e:{if(ys(t)!==t||t.tag!==1)throw Error(ge(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ln(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ge(171))}if(t.tag===1){var n=t.type;if(Ln(n))return Wv(t,n,e)}return e}function X0(t,e,n,i,s,o,l,c,h){return t=Mp(n,i,!0,t,s,o,l,c,h),t.context=W0(null),n=t.current,i=yn(),s=Rr(n),o=qi(i,s),o.callback=e??null,Cr(n,o,s),t.current.lanes=s,ka(t,s,i),bn(t,i),t}function fc(t,e,n,i){var s=e.current,o=yn(),l=Rr(s);return n=W0(n),e.context===null?e.context=n:e.pendingContext=n,e=qi(o,l),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Cr(s,e,l),t!==null&&(_i(t,s,l,o),ou(t,s,l)),l}function Xu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function I_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ep(t,e){I_(t,e),(t=t.alternate)&&I_(t,e)}function iE(){return null}var Z0=typeof reportError=="function"?reportError:function(t){console.error(t)};function wp(t){this._internalRoot=t}dc.prototype.render=wp.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ge(409));fc(t,e,null,null)};dc.prototype.unmount=wp.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;_s(function(){fc(null,t,null,null)}),e[$i]=null}};function dc(t){this._internalRoot=t}dc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Ev();t={blockedOn:null,target:t,priority:e};for(var n=0;n<vr.length&&e!==0&&e<vr[n].priority;n++);vr.splice(n,0,t),n===0&&Tv(t)}};function Tp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function D_(){}function rE(t,e,n,i,s){if(s){if(typeof i=="function"){var o=i;i=function(){var d=Xu(l);o.call(d)}}var l=X0(e,i,t,0,null,!1,!1,"",D_);return t._reactRootContainer=l,t[$i]=l.current,Pa(t.nodeType===8?t.parentNode:t),_s(),l}for(;s=t.lastChild;)t.removeChild(s);if(typeof i=="function"){var c=i;i=function(){var d=Xu(h);c.call(d)}}var h=Mp(t,0,!1,null,null,!1,!1,"",D_);return t._reactRootContainer=h,t[$i]=h.current,Pa(t.nodeType===8?t.parentNode:t),_s(function(){fc(e,h,n,i)}),h}function mc(t,e,n,i,s){var o=n._reactRootContainer;if(o){var l=o;if(typeof s=="function"){var c=s;s=function(){var h=Xu(l);c.call(h)}}fc(e,l,t,s)}else l=rE(n,e,t,s,i);return Xu(l)}Sv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(Wd(e,n|1),bn(e,zt()),!(vt&6)&&(vo=zt()+500,kr()))}break;case 13:_s(function(){var i=Qi(t,1);if(i!==null){var s=yn();_i(i,t,1,s)}}),Ep(t,1)}};Xd=function(t){if(t.tag===13){var e=Qi(t,134217728);if(e!==null){var n=yn();_i(e,t,134217728,n)}Ep(t,134217728)}};Mv=function(t){if(t.tag===13){var e=Rr(t),n=Qi(t,e);if(n!==null){var i=yn();_i(n,t,e,i)}Ep(t,e)}};Ev=function(){return Et};wv=function(t,e){var n=Et;try{return Et=t,e()}finally{Et=n}};uf=function(t,e,n){switch(e){case"input":if(tf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var s=sc(i);if(!s)throw Error(ge(90));tv(i),tf(i,s)}}}break;case"textarea":iv(t,n);break;case"select":e=n.value,e!=null&&no(t,!!n.multiple,e,!1)}};cv=vp;hv=_s;var sE={usingClientEntryPoint:!1,Events:[Ha,qs,sc,lv,uv,vp]},Qo={findFiberByHostInstance:ss,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oE={bundleType:Qo.bundleType,version:Qo.version,rendererPackageName:Qo.rendererPackageName,rendererConfig:Qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ir.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=pv(t),t===null?null:t.stateNode},findFiberByHostInstance:Qo.findFiberByHostInstance||iE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rl.isDisabled&&Rl.supportsFiber)try{tc=Rl.inject(oE),Ri=Rl}catch{}}Gn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sE;Gn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Tp(e))throw Error(ge(200));return nE(t,e,null,n)};Gn.createRoot=function(t,e){if(!Tp(t))throw Error(ge(299));var n=!1,i="",s=Z0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=Mp(t,1,!1,null,null,n,!1,i,s),t[$i]=e.current,Pa(t.nodeType===8?t.parentNode:t),new wp(e)};Gn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ge(188)):(t=Object.keys(t).join(","),Error(ge(268,t)));return t=pv(e),t=t===null?null:t.stateNode,t};Gn.flushSync=function(t){return _s(t)};Gn.hydrate=function(t,e,n){if(!pc(e))throw Error(ge(200));return mc(null,t,e,!0,n)};Gn.hydrateRoot=function(t,e,n){if(!Tp(t))throw Error(ge(405));var i=n!=null&&n.hydratedSources||null,s=!1,o="",l=Z0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=X0(e,null,t,1,n??null,s,!1,o,l),t[$i]=e.current,Pa(t),i)for(t=0;t<i.length;t++)n=i[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new dc(e)};Gn.render=function(t,e,n){if(!pc(e))throw Error(ge(200));return mc(null,t,e,!1,n)};Gn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(ge(40));return t._reactRootContainer?(_s(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[$i]=null})}),!0):!1};Gn.unstable_batchedUpdates=vp;Gn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(ge(200));if(t==null||t._reactInternals===void 0)throw Error(ge(38));return mc(t,e,n,!1,i)};Gn.version="18.3.1-next-f1338f8080-20240426";function j0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(j0)}catch(t){console.error(t)}}j0(),jg.exports=Gn;var q0=jg.exports,N_=q0;qh.createRoot=N_.createRoot,qh.hydrateRoot=N_.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="169",aE=0,U_=1,lE=2,Y0=1,uE=2,Hi=3,Ur=0,In=1,Wi=2,br=0,lo=1,Vf=2,O_=3,F_=4,cE=5,is=100,hE=101,fE=102,dE=103,pE=104,mE=200,_E=201,gE=202,vE=203,Gf=204,Wf=205,yE=206,xE=207,SE=208,ME=209,EE=210,wE=211,TE=212,AE=213,CE=214,Xf=0,Zf=1,jf=2,yo=3,qf=4,Yf=5,Kf=6,$f=7,K0=0,PE=1,RE=2,Ir=0,LE=1,bE=2,IE=3,DE=4,NE=5,UE=6,OE=7,$0=300,xo=301,So=302,Qf=303,Jf=304,_c=306,ed=1e3,pi=1001,td=1002,Pn=1003,FE=1004,Ll=1005,vn=1006,mh=1007,ls=1008,er=1009,Q0=1010,J0=1011,Fa=1012,Cp=1013,gs=1014,Pi=1015,Po=1016,Pp=1017,Rp=1018,Mo=1020,ey=35902,ty=1021,ny=1022,Qn=1023,iy=1024,ry=1025,uo=1026,Eo=1027,sy=1028,Lp=1029,oy=1030,bp=1031,Ip=1033,du=33776,pu=33777,mu=33778,_u=33779,nd=35840,id=35841,rd=35842,sd=35843,od=36196,ad=37492,ld=37496,ud=37808,cd=37809,hd=37810,fd=37811,dd=37812,pd=37813,md=37814,_d=37815,gd=37816,vd=37817,yd=37818,xd=37819,Sd=37820,Md=37821,gu=36492,Ed=36494,wd=36495,ay=36283,Td=36284,Ad=36285,Cd=36286,zE=3200,kE=3201,BE=0,HE=1,xr="",Ti="srgb",Br="srgb-linear",Dp="display-p3",gc="display-p3-linear",Zu="linear",Rt="srgb",ju="rec709",qu="p3",Rs=7680,z_=519,VE=512,GE=513,WE=514,ly=515,XE=516,ZE=517,jE=518,qE=519,k_=35044,B_="300 es",ji=2e3,Yu=2001;class Ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const o=s.indexOf(n);o!==-1&&s.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,l=s.length;o<l;o++)s[o].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_h=Math.PI/180,Pd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function An(t,e,n){return Math.max(e,Math.min(n,t))}function YE(t,e){return(t%e+e)%e}function gh(t,e,n){return(1-n)*t+n*e}function Jo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function wn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),s=Math.sin(n),o=this.x-e.x,l=this.y-e.y;return this.x=o*i-l*s+e.x,this.y=o*s+l*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class it{constructor(e,n,i,s,o,l,c,h,d){it.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,c,h,d)}set(e,n,i,s,o,l,c,h,d){const m=this.elements;return m[0]=e,m[1]=s,m[2]=c,m[3]=n,m[4]=o,m[5]=h,m[6]=i,m[7]=l,m[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],c=i[3],h=i[6],d=i[1],m=i[4],g=i[7],_=i[2],x=i[5],w=i[8],T=s[0],y=s[3],p=s[6],M=s[1],S=s[4],P=s[7],z=s[2],D=s[5],I=s[8];return o[0]=l*T+c*M+h*z,o[3]=l*y+c*S+h*D,o[6]=l*p+c*P+h*I,o[1]=d*T+m*M+g*z,o[4]=d*y+m*S+g*D,o[7]=d*p+m*P+g*I,o[2]=_*T+x*M+w*z,o[5]=_*y+x*S+w*D,o[8]=_*p+x*P+w*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8];return n*l*m-n*c*d-i*o*m+i*c*h+s*o*d-s*l*h}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],g=m*l-c*d,_=c*h-m*o,x=d*o-l*h,w=n*g+i*_+s*x;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=g*T,e[1]=(s*d-m*i)*T,e[2]=(c*i-s*l)*T,e[3]=_*T,e[4]=(m*n-s*h)*T,e[5]=(s*o-c*n)*T,e[6]=x*T,e[7]=(i*h-d*n)*T,e[8]=(l*n-i*o)*T,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,o,l,c){const h=Math.cos(o),d=Math.sin(o);return this.set(i*h,i*d,-i*(h*l+d*c)+l+e,-s*d,s*h,-s*(-d*l+h*c)+c+n,0,0,1),this}scale(e,n){return this.premultiply(vh.makeScale(e,n)),this}rotate(e){return this.premultiply(vh.makeRotation(-e)),this}translate(e,n){return this.premultiply(vh.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vh=new it;function uy(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ku(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function KE(){const t=Ku("canvas");return t.style.display="block",t}const H_={};function vu(t){t in H_||(H_[t]=!0,console.warn(t))}function $E(t,e,n){return new Promise(function(i,s){function o(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(o,n);break;default:i()}}setTimeout(o,n)})}function QE(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function JE(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const V_=new it().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),G_=new it().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ea={[Br]:{transfer:Zu,primaries:ju,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Ti]:{transfer:Rt,primaries:ju,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gc]:{transfer:Zu,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(G_),fromReference:t=>t.applyMatrix3(V_)},[Dp]:{transfer:Rt,primaries:qu,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(G_),fromReference:t=>t.applyMatrix3(V_).convertLinearToSRGB()}},ew=new Set([Br,gc]),Mt={enabled:!0,_workingColorSpace:Br,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!ew.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=ea[e].toReference,s=ea[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return ea[t].primaries},getTransfer:function(t){return t===xr?Zu:ea[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(ea[e].luminanceCoefficients)}};function co(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function yh(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ls;class tw{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Ku("canvas")),Ls.width=e.width,Ls.height=e.height;const i=Ls.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ku("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let l=0;l<o.length;l++)o[l]=co(o[l]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(co(n[i]/255)*255):n[i]=co(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let nw=0;class cy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nw++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let l=0,c=s.length;l<c;l++)s[l].isDataTexture?o.push(xh(s[l].image)):o.push(xh(s[l]))}else o=xh(s);i.url=o}return n||(e.images[this.uuid]=i),i}}function xh(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?tw.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let iw=0;class xn extends Ro{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=pi,s=pi,o=vn,l=ls,c=Qn,h=er,d=xn.DEFAULT_ANISOTROPY,m=xr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iw++}),this.uuid=Ga(),this.name="",this.source=new cy(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=l,this.anisotropy=d,this.format=c,this.internalFormat=null,this.type=h,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new it,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ed:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case td:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ed:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case td:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=$0;xn.DEFAULT_ANISOTROPY=1;class Ft{constructor(e=0,n=0,i=0,s=1){Ft.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=this.w,l=e.elements;return this.x=l[0]*n+l[4]*i+l[8]*s+l[12]*o,this.y=l[1]*n+l[5]*i+l[9]*s+l[13]*o,this.z=l[2]*n+l[6]*i+l[10]*s+l[14]*o,this.w=l[3]*n+l[7]*i+l[11]*s+l[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,o;const h=e.elements,d=h[0],m=h[4],g=h[8],_=h[1],x=h[5],w=h[9],T=h[2],y=h[6],p=h[10];if(Math.abs(m-_)<.01&&Math.abs(g-T)<.01&&Math.abs(w-y)<.01){if(Math.abs(m+_)<.1&&Math.abs(g+T)<.1&&Math.abs(w+y)<.1&&Math.abs(d+x+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const S=(d+1)/2,P=(x+1)/2,z=(p+1)/2,D=(m+_)/4,I=(g+T)/4,k=(w+y)/4;return S>P&&S>z?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=D/i,o=I/i):P>z?P<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(P),i=D/s,o=k/s):z<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(z),i=I/o,s=k/o),this.set(i,s,o,n),this}let M=Math.sqrt((y-w)*(y-w)+(g-T)*(g-T)+(_-m)*(_-m));return Math.abs(M)<.001&&(M=1),this.x=(y-w)/M,this.y=(g-T)/M,this.z=(_-m)/M,this.w=Math.acos((d+x+p-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class rw extends Ro{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Ft(0,0,e,n),this.scissorTest=!1,this.viewport=new Ft(0,0,e,n);const s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new xn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const l=i.count;for(let c=0;c<l;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new cy(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends rw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class hy extends xn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class sw extends xn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wa{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,o,l,c){let h=i[s+0],d=i[s+1],m=i[s+2],g=i[s+3];const _=o[l+0],x=o[l+1],w=o[l+2],T=o[l+3];if(c===0){e[n+0]=h,e[n+1]=d,e[n+2]=m,e[n+3]=g;return}if(c===1){e[n+0]=_,e[n+1]=x,e[n+2]=w,e[n+3]=T;return}if(g!==T||h!==_||d!==x||m!==w){let y=1-c;const p=h*_+d*x+m*w+g*T,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const z=Math.sqrt(S),D=Math.atan2(z,p*M);y=Math.sin(y*D)/z,c=Math.sin(c*D)/z}const P=c*M;if(h=h*y+_*P,d=d*y+x*P,m=m*y+w*P,g=g*y+T*P,y===1-c){const z=1/Math.sqrt(h*h+d*d+m*m+g*g);h*=z,d*=z,m*=z,g*=z}}e[n]=h,e[n+1]=d,e[n+2]=m,e[n+3]=g}static multiplyQuaternionsFlat(e,n,i,s,o,l){const c=i[s],h=i[s+1],d=i[s+2],m=i[s+3],g=o[l],_=o[l+1],x=o[l+2],w=o[l+3];return e[n]=c*w+m*g+h*x-d*_,e[n+1]=h*w+m*_+d*g-c*x,e[n+2]=d*w+m*x+c*_-h*g,e[n+3]=m*w-c*g-h*_-d*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,s=e._y,o=e._z,l=e._order,c=Math.cos,h=Math.sin,d=c(i/2),m=c(s/2),g=c(o/2),_=h(i/2),x=h(s/2),w=h(o/2);switch(l){case"XYZ":this._x=_*m*g+d*x*w,this._y=d*x*g-_*m*w,this._z=d*m*w+_*x*g,this._w=d*m*g-_*x*w;break;case"YXZ":this._x=_*m*g+d*x*w,this._y=d*x*g-_*m*w,this._z=d*m*w-_*x*g,this._w=d*m*g+_*x*w;break;case"ZXY":this._x=_*m*g-d*x*w,this._y=d*x*g+_*m*w,this._z=d*m*w+_*x*g,this._w=d*m*g-_*x*w;break;case"ZYX":this._x=_*m*g-d*x*w,this._y=d*x*g+_*m*w,this._z=d*m*w-_*x*g,this._w=d*m*g+_*x*w;break;case"YZX":this._x=_*m*g+d*x*w,this._y=d*x*g+_*m*w,this._z=d*m*w-_*x*g,this._w=d*m*g-_*x*w;break;case"XZY":this._x=_*m*g-d*x*w,this._y=d*x*g-_*m*w,this._z=d*m*w+_*x*g,this._w=d*m*g+_*x*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+l)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],m=n[6],g=n[10],_=i+c+g;if(_>0){const x=.5/Math.sqrt(_+1);this._w=.25/x,this._x=(m-h)*x,this._y=(o-d)*x,this._z=(l-s)*x}else if(i>c&&i>g){const x=2*Math.sqrt(1+i-c-g);this._w=(m-h)/x,this._x=.25*x,this._y=(s+l)/x,this._z=(o+d)/x}else if(c>g){const x=2*Math.sqrt(1+c-i-g);this._w=(o-d)/x,this._x=(s+l)/x,this._y=.25*x,this._z=(h+m)/x}else{const x=2*Math.sqrt(1+g-i-c);this._w=(l-s)/x,this._x=(o+d)/x,this._y=(h+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(An(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,s=e._y,o=e._z,l=e._w,c=n._x,h=n._y,d=n._z,m=n._w;return this._x=i*m+l*c+s*d-o*h,this._y=s*m+l*h+o*c-i*d,this._z=o*m+l*d+i*h-s*c,this._w=l*m-i*c-s*h-o*d,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,s=this._y,o=this._z,l=this._w;let c=l*e._w+i*e._x+s*e._y+o*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=l,this._x=i,this._y=s,this._z=o,this;const h=1-c*c;if(h<=Number.EPSILON){const x=1-n;return this._w=x*l+n*this._w,this._x=x*i+n*this._x,this._y=x*s+n*this._y,this._z=x*o+n*this._z,this.normalize(),this}const d=Math.sqrt(h),m=Math.atan2(d,c),g=Math.sin((1-n)*m)/d,_=Math.sin(n*m)/d;return this._w=l*g+this._w*_,this._x=i*g+this._x*_,this._y=s*g+this._y*_,this._z=o*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(n),o*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ee{constructor(e=0,n=0,i=0){ee.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(W_.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(W_.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[3]*i+o[6]*s,this.y=o[1]*n+o[4]*i+o[7]*s,this.z=o[2]*n+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,s=this.z,o=e.elements,l=1/(o[3]*n+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*n+o[4]*i+o[8]*s+o[12])*l,this.y=(o[1]*n+o[5]*i+o[9]*s+o[13])*l,this.z=(o[2]*n+o[6]*i+o[10]*s+o[14])*l,this}applyQuaternion(e){const n=this.x,i=this.y,s=this.z,o=e.x,l=e.y,c=e.z,h=e.w,d=2*(l*s-c*i),m=2*(c*n-o*s),g=2*(o*i-l*n);return this.x=n+h*d+l*g-c*m,this.y=i+h*m+c*d-o*g,this.z=s+h*g+o*m-l*d,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*s,this.y=o[1]*n+o[5]*i+o[9]*s,this.z=o[2]*n+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,s=e.y,o=e.z,l=n.x,c=n.y,h=n.z;return this.x=s*h-o*c,this.y=o*l-i*h,this.z=i*c-s*l,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(An(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sh=new ee,W_=new Wa;class Xa{constructor(e=new ee(1/0,1/0,1/0),n=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(n===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let l=0,c=o.count;l<c;l++)e.isMesh===!0?e.getVertexPosition(l,oi):oi.fromBufferAttribute(o,l),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),bl.copy(i.boundingBox)),bl.applyMatrix4(e.matrixWorld),this.union(bl)}const s=e.children;for(let o=0,l=s.length;o<l;o++)this.expandByObject(s[o],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Il.subVectors(this.max,ta),bs.subVectors(e.a,ta),Is.subVectors(e.b,ta),Ds.subVectors(e.c,ta),cr.subVectors(Is,bs),hr.subVectors(Ds,Is),jr.subVectors(bs,Ds);let n=[0,-cr.z,cr.y,0,-hr.z,hr.y,0,-jr.z,jr.y,cr.z,0,-cr.x,hr.z,0,-hr.x,jr.z,0,-jr.x,-cr.y,cr.x,0,-hr.y,hr.x,0,-jr.y,jr.x,0];return!Mh(n,bs,Is,Ds,Il)||(n=[1,0,0,0,1,0,0,0,1],!Mh(n,bs,Is,Ds,Il))?!1:(Dl.crossVectors(cr,hr),n=[Dl.x,Dl.y,Dl.z],Mh(n,bs,Is,Ds,Il))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],oi=new ee,bl=new Xa,bs=new ee,Is=new ee,Ds=new ee,cr=new ee,hr=new ee,jr=new ee,ta=new ee,Il=new ee,Dl=new ee,qr=new ee;function Mh(t,e,n,i,s){for(let o=0,l=t.length-3;o<=l;o+=3){qr.fromArray(t,o);const c=s.x*Math.abs(qr.x)+s.y*Math.abs(qr.y)+s.z*Math.abs(qr.z),h=e.dot(qr),d=n.dot(qr),m=i.dot(qr);if(Math.max(-Math.max(h,d,m),Math.min(h,d,m))>c)return!1}return!0}const ow=new Xa,na=new ee,Eh=new ee;class vc{constructor(e=new ee,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):ow.setFromPoints(e).getCenter(i);let s=0;for(let o=0,l=e.length;o<l;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);const n=na.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(na,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Eh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Eh)),this.expandByPoint(na.copy(e.center).sub(Eh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Fi=new ee,wh=new ee,Nl=new ee,fr=new ee,Th=new ee,Ul=new ee,Ah=new ee;class fy{constructor(e=new ee,n=new ee(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Fi.copy(this.origin).addScaledVector(this.direction,n),Fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){wh.copy(e).add(n).multiplyScalar(.5),Nl.copy(n).sub(e).normalize(),fr.copy(this.origin).sub(wh);const o=e.distanceTo(n)*.5,l=-this.direction.dot(Nl),c=fr.dot(this.direction),h=-fr.dot(Nl),d=fr.lengthSq(),m=Math.abs(1-l*l);let g,_,x,w;if(m>0)if(g=l*h-c,_=l*c-h,w=o*m,g>=0)if(_>=-w)if(_<=w){const T=1/m;g*=T,_*=T,x=g*(g+l*_+2*c)+_*(l*g+_+2*h)+d}else _=o,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;else _=-o,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;else _<=-w?(g=Math.max(0,-(-l*o+c)),_=g>0?-o:Math.min(Math.max(-o,-h),o),x=-g*g+_*(_+2*h)+d):_<=w?(g=0,_=Math.min(Math.max(-o,-h),o),x=_*(_+2*h)+d):(g=Math.max(0,-(l*o+c)),_=g>0?o:Math.min(Math.max(-o,-h),o),x=-g*g+_*(_+2*h)+d);else _=l>0?-o:o,g=Math.max(0,-(l*_+c)),x=-g*g+_*(_+2*h)+d;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(wh).addScaledVector(Nl,_),x}intersectSphere(e,n){Fi.subVectors(e.center,this.origin);const i=Fi.dot(this.direction),s=Fi.dot(Fi)-i*i,o=e.radius*e.radius;if(s>o)return null;const l=Math.sqrt(o-s),c=i-l,h=i+l;return h<0?null:c<0?this.at(h,n):this.at(c,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,o,l,c,h;const d=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,_=this.origin;return d>=0?(i=(e.min.x-_.x)*d,s=(e.max.x-_.x)*d):(i=(e.max.x-_.x)*d,s=(e.min.x-_.x)*d),m>=0?(o=(e.min.y-_.y)*m,l=(e.max.y-_.y)*m):(o=(e.max.y-_.y)*m,l=(e.min.y-_.y)*m),i>l||o>s||((o>i||isNaN(i))&&(i=o),(l<s||isNaN(s))&&(s=l),g>=0?(c=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),i>h||c>s)||((c>i||i!==i)&&(i=c),(h<s||s!==s)&&(s=h),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Fi)!==null}intersectTriangle(e,n,i,s,o){Th.subVectors(n,e),Ul.subVectors(i,e),Ah.crossVectors(Th,Ul);let l=this.direction.dot(Ah),c;if(l>0){if(s)return null;c=1}else if(l<0)c=-1,l=-l;else return null;fr.subVectors(this.origin,e);const h=c*this.direction.dot(Ul.crossVectors(fr,Ul));if(h<0)return null;const d=c*this.direction.dot(Th.cross(fr));if(d<0||h+d>l)return null;const m=-c*fr.dot(Ah);return m<0?null:this.at(m/l,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,n,i,s,o,l,c,h,d,m,g,_,x,w,T,y){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,o,l,c,h,d,m,g,_,x,w,T,y)}set(e,n,i,s,o,l,c,h,d,m,g,_,x,w,T,y){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=o,p[5]=l,p[9]=c,p[13]=h,p[2]=d,p[6]=m,p[10]=g,p[14]=_,p[3]=x,p[7]=w,p[11]=T,p[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,s=1/Ns.setFromMatrixColumn(e,0).length(),o=1/Ns.setFromMatrixColumn(e,1).length(),l=1/Ns.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*o,n[5]=i[5]*o,n[6]=i[6]*o,n[7]=0,n[8]=i[8]*l,n[9]=i[9]*l,n[10]=i[10]*l,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,s=e.y,o=e.z,l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=l*m,x=l*g,w=c*m,T=c*g;n[0]=h*m,n[4]=-h*g,n[8]=d,n[1]=x+w*d,n[5]=_-T*d,n[9]=-c*h,n[2]=T-_*d,n[6]=w+x*d,n[10]=l*h}else if(e.order==="YXZ"){const _=h*m,x=h*g,w=d*m,T=d*g;n[0]=_+T*c,n[4]=w*c-x,n[8]=l*d,n[1]=l*g,n[5]=l*m,n[9]=-c,n[2]=x*c-w,n[6]=T+_*c,n[10]=l*h}else if(e.order==="ZXY"){const _=h*m,x=h*g,w=d*m,T=d*g;n[0]=_-T*c,n[4]=-l*g,n[8]=w+x*c,n[1]=x+w*c,n[5]=l*m,n[9]=T-_*c,n[2]=-l*d,n[6]=c,n[10]=l*h}else if(e.order==="ZYX"){const _=l*m,x=l*g,w=c*m,T=c*g;n[0]=h*m,n[4]=w*d-x,n[8]=_*d+T,n[1]=h*g,n[5]=T*d+_,n[9]=x*d-w,n[2]=-d,n[6]=c*h,n[10]=l*h}else if(e.order==="YZX"){const _=l*h,x=l*d,w=c*h,T=c*d;n[0]=h*m,n[4]=T-_*g,n[8]=w*g+x,n[1]=g,n[5]=l*m,n[9]=-c*m,n[2]=-d*m,n[6]=x*g+w,n[10]=_-T*g}else if(e.order==="XZY"){const _=l*h,x=l*d,w=c*h,T=c*d;n[0]=h*m,n[4]=-g,n[8]=d*m,n[1]=_*g+T,n[5]=l*m,n[9]=x*g-w,n[2]=w*g-x,n[6]=c*m,n[10]=T*g+_}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(aw,e,lw)}lookAt(e,n,i){const s=this.elements;return Fn.subVectors(e,n),Fn.lengthSq()===0&&(Fn.z=1),Fn.normalize(),dr.crossVectors(i,Fn),dr.lengthSq()===0&&(Math.abs(i.z)===1?Fn.x+=1e-4:Fn.z+=1e-4,Fn.normalize(),dr.crossVectors(i,Fn)),dr.normalize(),Ol.crossVectors(Fn,dr),s[0]=dr.x,s[4]=Ol.x,s[8]=Fn.x,s[1]=dr.y,s[5]=Ol.y,s[9]=Fn.y,s[2]=dr.z,s[6]=Ol.z,s[10]=Fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,s=n.elements,o=this.elements,l=i[0],c=i[4],h=i[8],d=i[12],m=i[1],g=i[5],_=i[9],x=i[13],w=i[2],T=i[6],y=i[10],p=i[14],M=i[3],S=i[7],P=i[11],z=i[15],D=s[0],I=s[4],k=s[8],ae=s[12],E=s[1],R=s[5],te=s[9],ie=s[13],re=s[2],_e=s[6],j=s[10],ce=s[14],O=s[3],le=s[7],q=s[11],he=s[15];return o[0]=l*D+c*E+h*re+d*O,o[4]=l*I+c*R+h*_e+d*le,o[8]=l*k+c*te+h*j+d*q,o[12]=l*ae+c*ie+h*ce+d*he,o[1]=m*D+g*E+_*re+x*O,o[5]=m*I+g*R+_*_e+x*le,o[9]=m*k+g*te+_*j+x*q,o[13]=m*ae+g*ie+_*ce+x*he,o[2]=w*D+T*E+y*re+p*O,o[6]=w*I+T*R+y*_e+p*le,o[10]=w*k+T*te+y*j+p*q,o[14]=w*ae+T*ie+y*ce+p*he,o[3]=M*D+S*E+P*re+z*O,o[7]=M*I+S*R+P*_e+z*le,o[11]=M*k+S*te+P*j+z*q,o[15]=M*ae+S*ie+P*ce+z*he,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],s=e[8],o=e[12],l=e[1],c=e[5],h=e[9],d=e[13],m=e[2],g=e[6],_=e[10],x=e[14],w=e[3],T=e[7],y=e[11],p=e[15];return w*(+o*h*g-s*d*g-o*c*_+i*d*_+s*c*x-i*h*x)+T*(+n*h*x-n*d*_+o*l*_-s*l*x+s*d*m-o*h*m)+y*(+n*d*g-n*c*x-o*l*g+i*l*x+o*c*m-i*d*m)+p*(-s*c*m-n*h*g+n*c*_+s*l*g-i*l*_+i*h*m)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],s=e[2],o=e[3],l=e[4],c=e[5],h=e[6],d=e[7],m=e[8],g=e[9],_=e[10],x=e[11],w=e[12],T=e[13],y=e[14],p=e[15],M=g*y*d-T*_*d+T*h*x-c*y*x-g*h*p+c*_*p,S=w*_*d-m*y*d-w*h*x+l*y*x+m*h*p-l*_*p,P=m*T*d-w*g*d+w*c*x-l*T*x-m*c*p+l*g*p,z=w*g*h-m*T*h-w*c*_+l*T*_+m*c*y-l*g*y,D=n*M+i*S+s*P+o*z;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/D;return e[0]=M*I,e[1]=(T*_*o-g*y*o-T*s*x+i*y*x+g*s*p-i*_*p)*I,e[2]=(c*y*o-T*h*o+T*s*d-i*y*d-c*s*p+i*h*p)*I,e[3]=(g*h*o-c*_*o-g*s*d+i*_*d+c*s*x-i*h*x)*I,e[4]=S*I,e[5]=(m*y*o-w*_*o+w*s*x-n*y*x-m*s*p+n*_*p)*I,e[6]=(w*h*o-l*y*o-w*s*d+n*y*d+l*s*p-n*h*p)*I,e[7]=(l*_*o-m*h*o+m*s*d-n*_*d-l*s*x+n*h*x)*I,e[8]=P*I,e[9]=(w*g*o-m*T*o-w*i*x+n*T*x+m*i*p-n*g*p)*I,e[10]=(l*T*o-w*c*o+w*i*d-n*T*d-l*i*p+n*c*p)*I,e[11]=(m*c*o-l*g*o-m*i*d+n*g*d+l*i*x-n*c*x)*I,e[12]=z*I,e[13]=(m*T*s-w*g*s+w*i*_-n*T*_-m*i*y+n*g*y)*I,e[14]=(w*c*s-l*T*s-w*i*h+n*T*h+l*i*y-n*c*y)*I,e[15]=(l*g*s-m*c*s+m*i*h-n*g*h-l*i*_+n*c*_)*I,this}scale(e){const n=this.elements,i=e.x,s=e.y,o=e.z;return n[0]*=i,n[4]*=s,n[8]*=o,n[1]*=i,n[5]*=s,n[9]*=o,n[2]*=i,n[6]*=s,n[10]*=o,n[3]*=i,n[7]*=s,n[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),s=Math.sin(n),o=1-i,l=e.x,c=e.y,h=e.z,d=o*l,m=o*c;return this.set(d*l+i,d*c-s*h,d*h+s*c,0,d*c+s*h,m*c+i,m*h-s*l,0,d*h-s*c,m*h+s*l,o*h*h+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,o,l){return this.set(1,i,o,0,e,1,l,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){const s=this.elements,o=n._x,l=n._y,c=n._z,h=n._w,d=o+o,m=l+l,g=c+c,_=o*d,x=o*m,w=o*g,T=l*m,y=l*g,p=c*g,M=h*d,S=h*m,P=h*g,z=i.x,D=i.y,I=i.z;return s[0]=(1-(T+p))*z,s[1]=(x+P)*z,s[2]=(w-S)*z,s[3]=0,s[4]=(x-P)*D,s[5]=(1-(_+p))*D,s[6]=(y+M)*D,s[7]=0,s[8]=(w+S)*I,s[9]=(y-M)*I,s[10]=(1-(_+T))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){const s=this.elements;let o=Ns.set(s[0],s[1],s[2]).length();const l=Ns.set(s[4],s[5],s[6]).length(),c=Ns.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),e.x=s[12],e.y=s[13],e.z=s[14],ai.copy(this);const d=1/o,m=1/l,g=1/c;return ai.elements[0]*=d,ai.elements[1]*=d,ai.elements[2]*=d,ai.elements[4]*=m,ai.elements[5]*=m,ai.elements[6]*=m,ai.elements[8]*=g,ai.elements[9]*=g,ai.elements[10]*=g,n.setFromRotationMatrix(ai),i.x=o,i.y=l,i.z=c,this}makePerspective(e,n,i,s,o,l,c=ji){const h=this.elements,d=2*o/(n-e),m=2*o/(i-s),g=(n+e)/(n-e),_=(i+s)/(i-s);let x,w;if(c===ji)x=-(l+o)/(l-o),w=-2*l*o/(l-o);else if(c===Yu)x=-l/(l-o),w=-l*o/(l-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=m,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=x,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,i,s,o,l,c=ji){const h=this.elements,d=1/(n-e),m=1/(i-s),g=1/(l-o),_=(n+e)*d,x=(i+s)*m;let w,T;if(c===ji)w=(l+o)*g,T=-2*g;else if(c===Yu)w=o*g,T=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=2*d,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*m,h[9]=0,h[13]=-x,h[2]=0,h[6]=0,h[10]=T,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Ns=new ee,ai=new kt,aw=new ee(0,0,0),lw=new ee(1,1,1),dr=new ee,Ol=new ee,Fn=new ee,X_=new kt,Z_=new Wa;class tr{constructor(e=0,n=0,i=0,s=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],m=s[9],g=s[2],_=s[6],x=s[10];switch(n){case"XYZ":this._y=Math.asin(An(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-l,o)):(this._x=Math.atan2(_,d),this._z=0);break;case"YXZ":this._x=Math.asin(-An(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(c,x),this._z=Math.atan2(h,d)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(An(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-l,d)):(this._y=0,this._z=Math.atan2(h,o));break;case"ZYX":this._y=Math.asin(-An(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,x),this._z=Math.atan2(h,o)):(this._x=0,this._z=Math.atan2(-l,d));break;case"YZX":this._z=Math.asin(An(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-m,d),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,x));break;case"XZY":this._z=Math.asin(-An(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(_,d),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return X_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X_,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Z_.setFromEuler(this),this.setFromQuaternion(Z_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class dy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let uw=0;const j_=new ee,Us=new Wa,zi=new kt,Fl=new ee,ia=new ee,cw=new ee,hw=new Wa,q_=new ee(1,0,0),Y_=new ee(0,1,0),K_=new ee(0,0,1),$_={type:"added"},fw={type:"removed"},Os={type:"childadded",child:null},Ch={type:"childremoved",child:null};class Dn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uw++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dn.DEFAULT_UP.clone();const e=new ee,n=new tr,i=new Wa,s=new ee(1,1,1);function o(){i.setFromEuler(n,!1)}function l(){n.setFromQuaternion(i,void 0,!1)}n._onChange(o),i._onChange(l),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new kt},normalMatrix:{value:new it}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=Dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new dy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,n){return Us.setFromAxisAngle(e,n),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(q_,e)}rotateY(e){return this.rotateOnAxis(Y_,e)}rotateZ(e){return this.rotateOnAxis(K_,e)}translateOnAxis(e,n){return j_.copy(e).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(q_,e)}translateY(e){return this.translateOnAxis(Y_,e)}translateZ(e){return this.translateOnAxis(K_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(zi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zi.lookAt(ia,Fl,this.up):zi.lookAt(Fl,ia,this.up),this.quaternion.setFromRotationMatrix(zi),s&&(zi.extractRotation(s.matrixWorld),Us.setFromRotationMatrix(zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($_),Os.child=e,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(fw),Ch.child=e,this.dispatchEvent(Ch),Ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($_),Os.child=e,this.dispatchEvent(Os),Os.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){const l=this.children[i].getObjectByProperty(e,n);if(l!==void 0)return l}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,cw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,hw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const s=this.children;for(let o=0,l=s.length;o<l;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(c=>({boxInitialized:c.boxInitialized,boxMin:c.box.min.toArray(),boxMax:c.box.max.toArray(),sphereInitialized:c.sphereInitialized,sphereRadius:c.sphere.radius,sphereCenter:c.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(c,h){return c[h.uuid]===void 0&&(c[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const h=c.shapes;if(Array.isArray(h))for(let d=0,m=h.length;d<m;d++){const g=h[d];o(e.shapes,g)}else o(e.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let h=0,d=this.material.length;h<d;h++)c.push(o(e.materials,this.material[h]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const h=this.animations[c];s.animations.push(o(e.animations,h))}}if(n){const c=l(e.geometries),h=l(e.materials),d=l(e.textures),m=l(e.images),g=l(e.shapes),_=l(e.skeletons),x=l(e.animations),w=l(e.nodes);c.length>0&&(i.geometries=c),h.length>0&&(i.materials=h),d.length>0&&(i.textures=d),m.length>0&&(i.images=m),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),x.length>0&&(i.animations=x),w.length>0&&(i.nodes=w)}return i.object=s,i;function l(c){const h=[];for(const d in c){const m=c[d];delete m.metadata,h.push(m)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Dn.DEFAULT_UP=new ee(0,1,0);Dn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const li=new ee,ki=new ee,Ph=new ee,Bi=new ee,Fs=new ee,zs=new ee,Q_=new ee,Rh=new ee,Lh=new ee,bh=new ee,Ih=new Ft,Dh=new Ft,Nh=new Ft;class di{constructor(e=new ee,n=new ee,i=new ee){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),li.subVectors(e,n),s.cross(li);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,n,i,s,o){li.subVectors(s,n),ki.subVectors(i,n),Ph.subVectors(e,n);const l=li.dot(li),c=li.dot(ki),h=li.dot(Ph),d=ki.dot(ki),m=ki.dot(Ph),g=l*d-c*c;if(g===0)return o.set(0,0,0),null;const _=1/g,x=(d*h-c*m)*_,w=(l*m-c*h)*_;return o.set(1-x-w,w,x)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,n,i,s,o,l,c,h){return this.getBarycoord(e,n,i,s,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(o,Bi.x),h.addScaledVector(l,Bi.y),h.addScaledVector(c,Bi.z),h)}static getInterpolatedAttribute(e,n,i,s,o,l){return Ih.setScalar(0),Dh.setScalar(0),Nh.setScalar(0),Ih.fromBufferAttribute(e,n),Dh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,s),l.setScalar(0),l.addScaledVector(Ih,o.x),l.addScaledVector(Dh,o.y),l.addScaledVector(Nh,o.z),l}static isFrontFacing(e,n,i,s){return li.subVectors(i,n),ki.subVectors(e,n),li.cross(ki).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return li.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),li.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return di.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,o){return di.getInterpolation(e,this.a,this.b,this.c,n,i,s,o)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,s=this.b,o=this.c;let l,c;Fs.subVectors(s,i),zs.subVectors(o,i),Rh.subVectors(e,i);const h=Fs.dot(Rh),d=zs.dot(Rh);if(h<=0&&d<=0)return n.copy(i);Lh.subVectors(e,s);const m=Fs.dot(Lh),g=zs.dot(Lh);if(m>=0&&g<=m)return n.copy(s);const _=h*g-m*d;if(_<=0&&h>=0&&m<=0)return l=h/(h-m),n.copy(i).addScaledVector(Fs,l);bh.subVectors(e,o);const x=Fs.dot(bh),w=zs.dot(bh);if(w>=0&&x<=w)return n.copy(o);const T=x*d-h*w;if(T<=0&&d>=0&&w<=0)return c=d/(d-w),n.copy(i).addScaledVector(zs,c);const y=m*w-x*g;if(y<=0&&g-m>=0&&x-w>=0)return Q_.subVectors(o,s),c=(g-m)/(g-m+(x-w)),n.copy(s).addScaledVector(Q_,c);const p=1/(y+T+_);return l=T*p,c=_*p,n.copy(i).addScaledVector(Fs,l).addScaledVector(zs,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const py={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pr={h:0,s:0,l:0},zl={h:0,s:0,l:0};function Uh(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class St{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=i,Mt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=Mt.workingColorSpace){if(e=YE(e,1),n=An(n,0,1),i=An(i,0,1),n===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+n):i+n-i*n,l=2*i-o;this.r=Uh(l,o,e+1/3),this.g=Uh(l,o,e),this.b=Uh(l,o,e-1/3)}return Mt.toWorkingColorSpace(this,s),this}setStyle(e,n=Ti){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const l=s[1],c=s[2];switch(l){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,n);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,n);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],l=o.length;if(l===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,n);if(l===6)return this.setHex(parseInt(o,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Ti){const i=py[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=co(e.r),this.g=co(e.g),this.b=co(e.b),this}copyLinearToSRGB(e){return this.r=yh(e.r),this.g=yh(e.g),this.b=yh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ti){return Mt.fromWorkingColorSpace(fn.copy(this),e),Math.round(An(fn.r*255,0,255))*65536+Math.round(An(fn.g*255,0,255))*256+Math.round(An(fn.b*255,0,255))}getHexString(e=Ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.fromWorkingColorSpace(fn.copy(this),n);const i=fn.r,s=fn.g,o=fn.b,l=Math.max(i,s,o),c=Math.min(i,s,o);let h,d;const m=(c+l)/2;if(c===l)h=0,d=0;else{const g=l-c;switch(d=m<=.5?g/(l+c):g/(2-l-c),l){case i:h=(s-o)/g+(s<o?6:0);break;case s:h=(o-i)/g+2;break;case o:h=(i-s)/g+4;break}h/=6}return e.h=h,e.s=d,e.l=m,e}getRGB(e,n=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Ti){Mt.fromWorkingColorSpace(fn.copy(this),e);const n=fn.r,i=fn.g,s=fn.b;return e!==Ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(pr),this.setHSL(pr.h+e,pr.s+n,pr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(pr),e.getHSL(zl);const i=gh(pr.h,zl.h,n),s=gh(pr.s,zl.s,n),o=gh(pr.l,zl.l,n);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*n+o[3]*i+o[6]*s,this.g=o[1]*n+o[4]*i+o[7]*s,this.b=o[2]*n+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const fn=new St;St.NAMES=py;let dw=0;class Za extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dw++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=lo,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gf,this.blendDst=Wf,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==lo&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Gf&&(i.blendSrc=this.blendSrc),this.blendDst!==Wf&&(i.blendDst=this.blendDst),this.blendEquation!==is&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}if(n){const o=s(e.textures),l=s(e.images);o.length>0&&(i.textures=o),l.length>0&&(i.images=l)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const s=n.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=n[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class my extends Za{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=K0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Vt=new ee,kl=new Je;class gi{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=k_,this.updateRanges=[],this.gpuType=Pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)kl.fromBufferAttribute(this,n),kl.applyMatrix3(e),this.setXY(n,kl.x,kl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix3(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyMatrix4(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.applyNormalMatrix(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Vt.fromBufferAttribute(this,n),Vt.transformDirection(e),this.setXYZ(n,Vt.x,Vt.y,Vt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Jo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=wn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Jo(n,this.array)),n}setX(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Jo(n,this.array)),n}setY(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Jo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Jo(n,this.array)),n}setW(e,n){return this.normalized&&(n=wn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,o){return e*=this.itemSize,this.normalized&&(n=wn(n,this.array),i=wn(i,this.array),s=wn(s,this.array),o=wn(o,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==k_&&(e.usage=this.usage),e}}class _y extends gi{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class gy extends gi{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Yi extends gi{constructor(e,n,i){super(new Float32Array(e),n,i)}}let pw=0;const qn=new kt,Oh=new Dn,ks=new ee,zn=new Xa,ra=new Xa,Kt=new ee;class rr extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pw++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?gy:_y)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new it().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qn.makeRotationFromQuaternion(e),this.applyMatrix4(qn),this}rotateX(e){return qn.makeRotationX(e),this.applyMatrix4(qn),this}rotateY(e){return qn.makeRotationY(e),this.applyMatrix4(qn),this}rotateZ(e){return qn.makeRotationZ(e),this.applyMatrix4(qn),this}translate(e,n,i){return qn.makeTranslation(e,n,i),this.applyMatrix4(qn),this}scale(e,n,i){return qn.makeScale(e,n,i),this.applyMatrix4(qn),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Yi(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){const o=n[i];zn.setFromBufferAttribute(o),this.morphTargetsRelative?(Kt.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(Kt),Kt.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(Kt)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vc);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const i=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let o=0,l=n.length;o<l;o++){const c=n[o];ra.setFromBufferAttribute(c),this.morphTargetsRelative?(Kt.addVectors(zn.min,ra.min),zn.expandByPoint(Kt),Kt.addVectors(zn.max,ra.max),zn.expandByPoint(Kt)):(zn.expandByPoint(ra.min),zn.expandByPoint(ra.max))}zn.getCenter(i);let s=0;for(let o=0,l=e.count;o<l;o++)Kt.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(Kt));if(n)for(let o=0,l=n.length;o<l;o++){const c=n[o],h=this.morphTargetsRelative;for(let d=0,m=c.count;d<m;d++)Kt.fromBufferAttribute(c,d),h&&(ks.fromBufferAttribute(e,d),Kt.add(ks)),s=Math.max(s,i.distanceToSquared(Kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,s=n.normal,o=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gi(new Float32Array(4*i.count),4));const l=this.getAttribute("tangent"),c=[],h=[];for(let k=0;k<i.count;k++)c[k]=new ee,h[k]=new ee;const d=new ee,m=new ee,g=new ee,_=new Je,x=new Je,w=new Je,T=new ee,y=new ee;function p(k,ae,E){d.fromBufferAttribute(i,k),m.fromBufferAttribute(i,ae),g.fromBufferAttribute(i,E),_.fromBufferAttribute(o,k),x.fromBufferAttribute(o,ae),w.fromBufferAttribute(o,E),m.sub(d),g.sub(d),x.sub(_),w.sub(_);const R=1/(x.x*w.y-w.x*x.y);isFinite(R)&&(T.copy(m).multiplyScalar(w.y).addScaledVector(g,-x.y).multiplyScalar(R),y.copy(g).multiplyScalar(x.x).addScaledVector(m,-w.x).multiplyScalar(R),c[k].add(T),c[ae].add(T),c[E].add(T),h[k].add(y),h[ae].add(y),h[E].add(y))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let k=0,ae=M.length;k<ae;++k){const E=M[k],R=E.start,te=E.count;for(let ie=R,re=R+te;ie<re;ie+=3)p(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const S=new ee,P=new ee,z=new ee,D=new ee;function I(k){z.fromBufferAttribute(s,k),D.copy(z);const ae=c[k];S.copy(ae),S.sub(z.multiplyScalar(z.dot(ae))).normalize(),P.crossVectors(D,ae);const R=P.dot(h[k])<0?-1:1;l.setXYZW(k,S.x,S.y,S.z,R)}for(let k=0,ae=M.length;k<ae;++k){const E=M[k],R=E.start,te=E.count;for(let ie=R,re=R+te;ie<re;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gi(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let _=0,x=i.count;_<x;_++)i.setXYZ(_,0,0,0);const s=new ee,o=new ee,l=new ee,c=new ee,h=new ee,d=new ee,m=new ee,g=new ee;if(e)for(let _=0,x=e.count;_<x;_+=3){const w=e.getX(_+0),T=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(n,w),o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,y),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),c.fromBufferAttribute(i,w),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,y),c.add(m),h.add(m),d.add(m),i.setXYZ(w,c.x,c.y,c.z),i.setXYZ(T,h.x,h.y,h.z),i.setXYZ(y,d.x,d.y,d.z)}else for(let _=0,x=n.count;_<x;_+=3)s.fromBufferAttribute(n,_+0),o.fromBufferAttribute(n,_+1),l.fromBufferAttribute(n,_+2),m.subVectors(l,o),g.subVectors(s,o),m.cross(g),i.setXYZ(_+0,m.x,m.y,m.z),i.setXYZ(_+1,m.x,m.y,m.z),i.setXYZ(_+2,m.x,m.y,m.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Kt.fromBufferAttribute(e,n),Kt.normalize(),e.setXYZ(n,Kt.x,Kt.y,Kt.z)}toNonIndexed(){function e(c,h){const d=c.array,m=c.itemSize,g=c.normalized,_=new d.constructor(h.length*m);let x=0,w=0;for(let T=0,y=h.length;T<y;T++){c.isInterleavedBufferAttribute?x=h[T]*c.data.stride+c.offset:x=h[T]*m;for(let p=0;p<m;p++)_[w++]=d[x++]}return new gi(_,m,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,i=this.index.array,s=this.attributes;for(const c in s){const h=s[c],d=e(h,i);n.setAttribute(c,d)}const o=this.morphAttributes;for(const c in o){const h=[],d=o[c];for(let m=0,g=d.length;m<g;m++){const _=d[m],x=e(_,i);h.push(x)}n.morphAttributes[c]=h}n.morphTargetsRelative=this.morphTargetsRelative;const l=this.groups;for(let c=0,h=l.length;c<h;c++){const d=l[c];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const d in h)h[d]!==void 0&&(e[d]=h[d]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const h in i){const d=i[h];e.data.attributes[h]=d.toJSON(e.data)}const s={};let o=!1;for(const h in this.morphAttributes){const d=this.morphAttributes[h],m=[];for(let g=0,_=d.length;g<_;g++){const x=d[g];m.push(x.toJSON(e.data))}m.length>0&&(s[h]=m,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const l=this.groups;l.length>0&&(e.data.groups=JSON.parse(JSON.stringify(l)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const s=e.attributes;for(const d in s){const m=s[d];this.setAttribute(d,m.clone(n))}const o=e.morphAttributes;for(const d in o){const m=[],g=o[d];for(let _=0,x=g.length;_<x;_++)m.push(g[_].clone(n));this.morphAttributes[d]=m}this.morphTargetsRelative=e.morphTargetsRelative;const l=e.groups;for(let d=0,m=l.length;d<m;d++){const g=l[d];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const J_=new kt,Yr=new fy,Bl=new vc,eg=new ee,Hl=new ee,Vl=new ee,Gl=new ee,Fh=new ee,Wl=new ee,tg=new ee,Xl=new ee;class Jn extends Dn{constructor(e=new rr,n=new my){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,n){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,l=i.morphTargetsRelative;n.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Wl.set(0,0,0);for(let h=0,d=o.length;h<d;h++){const m=c[h],g=o[h];m!==0&&(Fh.fromBufferAttribute(g,e),l?Wl.addScaledVector(Fh,m):Wl.addScaledVector(Fh.sub(n),m))}n.add(Wl)}return n}raycast(e,n){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(o),Yr.copy(e.ray).recast(e.near),!(Bl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Bl,eg)===null||Yr.origin.distanceToSquared(eg)>(e.far-e.near)**2))&&(J_.copy(o).invert(),Yr.copy(e.ray).applyMatrix4(J_),!(i.boundingBox!==null&&Yr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,i){let s;const o=this.geometry,l=this.material,c=o.index,h=o.attributes.position,d=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,_=o.groups,x=o.drawRange;if(c!==null)if(Array.isArray(l))for(let w=0,T=_.length;w<T;w++){const y=_[w],p=l[y.materialIndex],M=Math.max(y.start,x.start),S=Math.min(c.count,Math.min(y.start+y.count,x.start+x.count));for(let P=M,z=S;P<z;P+=3){const D=c.getX(P),I=c.getX(P+1),k=c.getX(P+2);s=Zl(this,p,e,i,d,m,g,D,I,k),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const w=Math.max(0,x.start),T=Math.min(c.count,x.start+x.count);for(let y=w,p=T;y<p;y+=3){const M=c.getX(y),S=c.getX(y+1),P=c.getX(y+2);s=Zl(this,l,e,i,d,m,g,M,S,P),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}else if(h!==void 0)if(Array.isArray(l))for(let w=0,T=_.length;w<T;w++){const y=_[w],p=l[y.materialIndex],M=Math.max(y.start,x.start),S=Math.min(h.count,Math.min(y.start+y.count,x.start+x.count));for(let P=M,z=S;P<z;P+=3){const D=P,I=P+1,k=P+2;s=Zl(this,p,e,i,d,m,g,D,I,k),s&&(s.faceIndex=Math.floor(P/3),s.face.materialIndex=y.materialIndex,n.push(s))}}else{const w=Math.max(0,x.start),T=Math.min(h.count,x.start+x.count);for(let y=w,p=T;y<p;y+=3){const M=y,S=y+1,P=y+2;s=Zl(this,l,e,i,d,m,g,M,S,P),s&&(s.faceIndex=Math.floor(y/3),n.push(s))}}}}function mw(t,e,n,i,s,o,l,c){let h;if(e.side===In?h=i.intersectTriangle(l,o,s,!0,c):h=i.intersectTriangle(s,o,l,e.side===Ur,c),h===null)return null;Xl.copy(c),Xl.applyMatrix4(t.matrixWorld);const d=n.ray.origin.distanceTo(Xl);return d<n.near||d>n.far?null:{distance:d,point:Xl.clone(),object:t}}function Zl(t,e,n,i,s,o,l,c,h,d){t.getVertexPosition(c,Hl),t.getVertexPosition(h,Vl),t.getVertexPosition(d,Gl);const m=mw(t,e,n,i,Hl,Vl,Gl,tg);if(m){const g=new ee;di.getBarycoord(tg,Hl,Vl,Gl,g),s&&(m.uv=di.getInterpolatedAttribute(s,c,h,d,g,new Je)),o&&(m.uv1=di.getInterpolatedAttribute(o,c,h,d,g,new Je)),l&&(m.normal=di.getInterpolatedAttribute(l,c,h,d,g,new ee),m.normal.dot(i.direction)>0&&m.normal.multiplyScalar(-1));const _={a:c,b:h,c:d,normal:new ee,materialIndex:0};di.getNormal(Hl,Vl,Gl,_.normal),m.face=_,m.barycoord=g}return m}class ja extends rr{constructor(e=1,n=1,i=1,s=1,o=1,l=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:o,depthSegments:l};const c=this;s=Math.floor(s),o=Math.floor(o),l=Math.floor(l);const h=[],d=[],m=[],g=[];let _=0,x=0;w("z","y","x",-1,-1,i,n,e,l,o,0),w("z","y","x",1,-1,i,n,-e,l,o,1),w("x","z","y",1,1,e,i,n,s,l,2),w("x","z","y",1,-1,e,i,-n,s,l,3),w("x","y","z",1,-1,e,n,i,s,o,4),w("x","y","z",-1,-1,e,n,-i,s,o,5),this.setIndex(h),this.setAttribute("position",new Yi(d,3)),this.setAttribute("normal",new Yi(m,3)),this.setAttribute("uv",new Yi(g,2));function w(T,y,p,M,S,P,z,D,I,k,ae){const E=P/I,R=z/k,te=P/2,ie=z/2,re=D/2,_e=I+1,j=k+1;let ce=0,O=0;const le=new ee;for(let q=0;q<j;q++){const he=q*R-ie;for(let Le=0;Le<_e;Le++){const ke=Le*E-te;le[T]=ke*M,le[y]=he*S,le[p]=re,d.push(le.x,le.y,le.z),le[T]=0,le[y]=0,le[p]=D>0?1:-1,m.push(le.x,le.y,le.z),g.push(Le/I),g.push(1-q/k),ce+=1}}for(let q=0;q<k;q++)for(let he=0;he<I;he++){const Le=_+he+_e*q,ke=_+he+_e*(q+1),Q=_+(he+1)+_e*(q+1),oe=_+(he+1)+_e*q;h.push(Le,ke,oe),h.push(ke,Q,oe),O+=6}c.addGroup(x,O,ae),x+=O,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function wo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function _n(t){const e={};for(let n=0;n<t.length;n++){const i=wo(t[n]);for(const s in i)e[s]=i[s]}return e}function _w(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function vy(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const gw={clone:wo,merge:_n};var vw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends Za{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vw,this.fragmentShader=yw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=wo(e.uniforms),this.uniformsGroups=_w(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const s in this.uniforms){const l=this.uniforms[s].value;l&&l.isTexture?n.uniforms[s]={type:"t",value:l.toJSON(e).uuid}:l&&l.isColor?n.uniforms[s]={type:"c",value:l.getHex()}:l&&l.isVector2?n.uniforms[s]={type:"v2",value:l.toArray()}:l&&l.isVector3?n.uniforms[s]={type:"v3",value:l.toArray()}:l&&l.isVector4?n.uniforms[s]={type:"v4",value:l.toArray()}:l&&l.isMatrix3?n.uniforms[s]={type:"m3",value:l.toArray()}:l&&l.isMatrix4?n.uniforms[s]={type:"m4",value:l.toArray()}:n.uniforms[s]={value:l}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class $u extends Dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=ji}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const mr=new ee,ng=new Je,ig=new Je;class fi extends $u{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Pd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_h*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pd*2*Math.atan(Math.tan(_h*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mr.x,mr.y).multiplyScalar(-e/mr.z),mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(mr.x,mr.y).multiplyScalar(-e/mr.z)}getViewSize(e,n){return this.getViewBounds(e,ng,ig),n.subVectors(ig,ng)}setViewOffset(e,n,i,s,o,l){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(_h*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,o=-.5*s;const l=this.view;if(this.view!==null&&this.view.enabled){const h=l.fullWidth,d=l.fullHeight;o+=l.offsetX*s/h,n-=l.offsetY*i/d,s*=l.width/h,i*=l.height/d}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Bs=-90,Hs=1;class xw extends Dn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fi(Bs,Hs,e,n);s.layers=this.layers,this.add(s);const o=new fi(Bs,Hs,e,n);o.layers=this.layers,this.add(o);const l=new fi(Bs,Hs,e,n);l.layers=this.layers,this.add(l);const c=new fi(Bs,Hs,e,n);c.layers=this.layers,this.add(c);const h=new fi(Bs,Hs,e,n);h.layers=this.layers,this.add(h);const d=new fi(Bs,Hs,e,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,s,o,l,c,h]=n;for(const d of n)this.remove(d);if(e===ji)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),l.up.set(0,0,1),l.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Yu)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),l.up.set(0,0,-1),l.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const d of n)this.add(d),d.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,l,c,h,d,m]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,o),e.setRenderTarget(i,1,s),e.render(n,l),e.setRenderTarget(i,2,s),e.render(n,c),e.setRenderTarget(i,3,s),e.render(n,h),e.setRenderTarget(i,4,s),e.render(n,d),i.texture.generateMipmaps=T,e.setRenderTarget(i,5,s),e.render(n,m),e.setRenderTarget(g,_,x),e.xr.enabled=w,i.texture.needsPMREMUpdate=!0}}class yy extends xn{constructor(e,n,i,s,o,l,c,h,d,m){e=e!==void 0?e:[],n=n!==void 0?n:xo,super(e,n,i,s,o,l,c,h,d,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sw extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new yy(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:vn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ja(5,5,5),o=new nr({name:"CubemapFromEquirect",uniforms:wo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:In,blending:br});o.uniforms.tEquirect.value=n;const l=new Jn(s,o),c=n.minFilter;return n.minFilter===ls&&(n.minFilter=vn),new xw(1,10,this).update(e,l),n.minFilter=c,l.geometry.dispose(),l.material.dispose(),this}clear(e,n,i,s){const o=e.getRenderTarget();for(let l=0;l<6;l++)e.setRenderTarget(this,l),e.clear(n,i,s);e.setRenderTarget(o)}}const zh=new ee,Mw=new ee,Ew=new it;class ts{constructor(e=new ee(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const s=zh.subVectors(i,n).cross(Mw.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(zh),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:n.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Ew.getNormalMatrix(e),s=this.coplanarPoint(zh).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new vc,jl=new ee;class xy{constructor(e=new ts,n=new ts,i=new ts,s=new ts,o=new ts,l=new ts){this.planes=[e,n,i,s,o,l]}set(e,n,i,s,o,l){const c=this.planes;return c[0].copy(e),c[1].copy(n),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(l),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ji){const i=this.planes,s=e.elements,o=s[0],l=s[1],c=s[2],h=s[3],d=s[4],m=s[5],g=s[6],_=s[7],x=s[8],w=s[9],T=s[10],y=s[11],p=s[12],M=s[13],S=s[14],P=s[15];if(i[0].setComponents(h-o,_-d,y-x,P-p).normalize(),i[1].setComponents(h+o,_+d,y+x,P+p).normalize(),i[2].setComponents(h+l,_+m,y+w,P+M).normalize(),i[3].setComponents(h-l,_-m,y-w,P-M).normalize(),i[4].setComponents(h-c,_-g,y-T,P-S).normalize(),n===ji)i[5].setComponents(h+c,_+g,y+T,P+S).normalize();else if(n===Yu)i[5].setComponents(c,g,T,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Kr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const n=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(n[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const s=n[i];if(jl.x=s.normal.x>0?e.max.x:e.min.x,jl.y=s.normal.y>0?e.max.y:e.min.y,jl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sy(){let t=null,e=!1,n=null,i=null;function s(o,l){n(o,l),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){n=o},setContext:function(o){t=o}}}function ww(t){const e=new WeakMap;function n(c,h){const d=c.array,m=c.usage,g=d.byteLength,_=t.createBuffer();t.bindBuffer(h,_),t.bufferData(h,d,m),c.onUploadCallback();let x;if(d instanceof Float32Array)x=t.FLOAT;else if(d instanceof Uint16Array)c.isFloat16BufferAttribute?x=t.HALF_FLOAT:x=t.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=t.SHORT;else if(d instanceof Uint32Array)x=t.UNSIGNED_INT;else if(d instanceof Int32Array)x=t.INT;else if(d instanceof Int8Array)x=t.BYTE;else if(d instanceof Uint8Array)x=t.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,h,d){const m=h.array,g=h.updateRanges;if(t.bindBuffer(d,c),g.length===0)t.bufferSubData(d,0,m);else{g.sort((x,w)=>x.start-w.start);let _=0;for(let x=1;x<g.length;x++){const w=g[_],T=g[x];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++_,g[_]=T)}g.length=_+1;for(let x=0,w=g.length;x<w;x++){const T=g[x];t.bufferSubData(d,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=e.get(c);h&&(t.deleteBuffer(h.buffer),e.delete(c))}function l(c,h){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const m=e.get(c);(!m||m.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const d=e.get(c);if(d===void 0)e.set(c,n(c,h));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(d.buffer,c,h),d.version=c.version}}return{get:s,remove:o,update:l}}class hs extends rr{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};const o=e/2,l=n/2,c=Math.floor(i),h=Math.floor(s),d=c+1,m=h+1,g=e/c,_=n/h,x=[],w=[],T=[],y=[];for(let p=0;p<m;p++){const M=p*_-l;for(let S=0;S<d;S++){const P=S*g-o;w.push(P,-M,0),T.push(0,0,1),y.push(S/c),y.push(1-p/h)}}for(let p=0;p<h;p++)for(let M=0;M<c;M++){const S=M+d*p,P=M+d*(p+1),z=M+1+d*(p+1),D=M+1+d*p;x.push(S,P,D),x.push(P,z,D)}this.setIndex(x),this.setAttribute("position",new Yi(w,3)),this.setAttribute("normal",new Yi(T,3)),this.setAttribute("uv",new Yi(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Tw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Aw=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Rw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Lw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bw=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Iw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Dw=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Nw=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Uw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ow=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fw=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Hw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Gw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ww=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Xw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Yw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Kw=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$w=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tT="gl_FragColor = linearToOutputTexel( gl_FragColor );",nT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,uT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_T=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ET=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wT=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,CT=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,PT=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RT=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,LT=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,FT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,HT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,GT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ZT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,qT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,YT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,QT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,JT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,e1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,t1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,n1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,i1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,r1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,s1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,o1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,a1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,l1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,u1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,h1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,f1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,d1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,p1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,m1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,v1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,y1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,x1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,S1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,M1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,E1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const w1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,T1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,C1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,I1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,D1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,z1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,k1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,B1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,H1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,V1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,G1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Z1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Y1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,J1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Tw,alphahash_pars_fragment:Aw,alphamap_fragment:Cw,alphamap_pars_fragment:Pw,alphatest_fragment:Rw,alphatest_pars_fragment:Lw,aomap_fragment:bw,aomap_pars_fragment:Iw,batching_pars_vertex:Dw,batching_vertex:Nw,begin_vertex:Uw,beginnormal_vertex:Ow,bsdfs:Fw,iridescence_fragment:zw,bumpmap_pars_fragment:kw,clipping_planes_fragment:Bw,clipping_planes_pars_fragment:Hw,clipping_planes_pars_vertex:Vw,clipping_planes_vertex:Gw,color_fragment:Ww,color_pars_fragment:Xw,color_pars_vertex:Zw,color_vertex:jw,common:qw,cube_uv_reflection_fragment:Yw,defaultnormal_vertex:Kw,displacementmap_pars_vertex:$w,displacementmap_vertex:Qw,emissivemap_fragment:Jw,emissivemap_pars_fragment:eT,colorspace_fragment:tT,colorspace_pars_fragment:nT,envmap_fragment:iT,envmap_common_pars_fragment:rT,envmap_pars_fragment:sT,envmap_pars_vertex:oT,envmap_physical_pars_fragment:gT,envmap_vertex:aT,fog_vertex:lT,fog_pars_vertex:uT,fog_fragment:cT,fog_pars_fragment:hT,gradientmap_pars_fragment:fT,lightmap_pars_fragment:dT,lights_lambert_fragment:pT,lights_lambert_pars_fragment:mT,lights_pars_begin:_T,lights_toon_fragment:vT,lights_toon_pars_fragment:yT,lights_phong_fragment:xT,lights_phong_pars_fragment:ST,lights_physical_fragment:MT,lights_physical_pars_fragment:ET,lights_fragment_begin:wT,lights_fragment_maps:TT,lights_fragment_end:AT,logdepthbuf_fragment:CT,logdepthbuf_pars_fragment:PT,logdepthbuf_pars_vertex:RT,logdepthbuf_vertex:LT,map_fragment:bT,map_pars_fragment:IT,map_particle_fragment:DT,map_particle_pars_fragment:NT,metalnessmap_fragment:UT,metalnessmap_pars_fragment:OT,morphinstance_vertex:FT,morphcolor_vertex:zT,morphnormal_vertex:kT,morphtarget_pars_vertex:BT,morphtarget_vertex:HT,normal_fragment_begin:VT,normal_fragment_maps:GT,normal_pars_fragment:WT,normal_pars_vertex:XT,normal_vertex:ZT,normalmap_pars_fragment:jT,clearcoat_normal_fragment_begin:qT,clearcoat_normal_fragment_maps:YT,clearcoat_pars_fragment:KT,iridescence_pars_fragment:$T,opaque_fragment:QT,packing:JT,premultiplied_alpha_fragment:e1,project_vertex:t1,dithering_fragment:n1,dithering_pars_fragment:i1,roughnessmap_fragment:r1,roughnessmap_pars_fragment:s1,shadowmap_pars_fragment:o1,shadowmap_pars_vertex:a1,shadowmap_vertex:l1,shadowmask_pars_fragment:u1,skinbase_vertex:c1,skinning_pars_vertex:h1,skinning_vertex:f1,skinnormal_vertex:d1,specularmap_fragment:p1,specularmap_pars_fragment:m1,tonemapping_fragment:_1,tonemapping_pars_fragment:g1,transmission_fragment:v1,transmission_pars_fragment:y1,uv_pars_fragment:x1,uv_pars_vertex:S1,uv_vertex:M1,worldpos_vertex:E1,background_vert:w1,background_frag:T1,backgroundCube_vert:A1,backgroundCube_frag:C1,cube_vert:P1,cube_frag:R1,depth_vert:L1,depth_frag:b1,distanceRGBA_vert:I1,distanceRGBA_frag:D1,equirect_vert:N1,equirect_frag:U1,linedashed_vert:O1,linedashed_frag:F1,meshbasic_vert:z1,meshbasic_frag:k1,meshlambert_vert:B1,meshlambert_frag:H1,meshmatcap_vert:V1,meshmatcap_frag:G1,meshnormal_vert:W1,meshnormal_frag:X1,meshphong_vert:Z1,meshphong_frag:j1,meshphysical_vert:q1,meshphysical_frag:Y1,meshtoon_vert:K1,meshtoon_frag:$1,points_vert:Q1,points_frag:J1,shadow_vert:eA,shadow_frag:tA,sprite_vert:nA,sprite_frag:iA},Ee={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new it}},envmap:{envMap:{value:null},envMapRotation:{value:new it},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new it}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new it}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new it},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new it},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new it},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new it}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new it}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new it}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0},uvTransform:{value:new it}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new it},alphaMap:{value:null},alphaMapTransform:{value:new it},alphaTest:{value:0}}},Ai={basic:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new St(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:_n([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:_n([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:_n([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new St(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:_n([Ee.points,Ee.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:_n([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:_n([Ee.common,Ee.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:_n([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:_n([Ee.sprite,Ee.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new it},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new it}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:_n([Ee.common,Ee.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:_n([Ee.lights,Ee.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Ai.physical={uniforms:_n([Ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new it},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new it},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new it},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new it},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new it},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new it},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new it},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new it},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new it},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new it},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new it},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new it}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const ql={r:0,b:0,g:0},$r=new tr,rA=new kt;function sA(t,e,n,i,s,o,l){const c=new St(0);let h=o===!0?0:1,d,m,g=null,_=0,x=null;function w(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?n:e).get(S)),S}function T(M){let S=!1;const P=w(M);P===null?p(c,h):P&&P.isColor&&(p(P,1),S=!0);const z=t.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,l):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,l),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(M,S){const P=w(S);P&&(P.isCubeTexture||P.mapping===_c)?(m===void 0&&(m=new Jn(new ja(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:wo(Ai.backgroundCube.uniforms),vertexShader:Ai.backgroundCube.vertexShader,fragmentShader:Ai.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(z,D,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(m)),$r.copy(S.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.material.uniforms.envMap.value=P,m.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,m.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(rA.makeRotationFromEuler($r)),m.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Rt,(g!==P||_!==P.version||x!==t.toneMapping)&&(m.material.needsUpdate=!0,g=P,_=P.version,x=t.toneMapping),m.layers.enableAll(),M.unshift(m,m.geometry,m.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Jn(new hs(2,2),new nr({name:"BackgroundMaterial",uniforms:wo(Ai.background.uniforms),vertexShader:Ai.background.vertexShader,fragmentShader:Ai.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,d.material.toneMapped=Mt.getTransfer(P.colorSpace)!==Rt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||_!==P.version||x!==t.toneMapping)&&(d.material.needsUpdate=!0,g=P,_=P.version,x=t.toneMapping),d.layers.enableAll(),M.unshift(d,d.geometry,d.material,0,0,null))}function p(M,S){M.getRGB(ql,vy(t)),i.buffers.color.setClear(ql.r,ql.g,ql.b,S,l)}return{getClearColor:function(){return c},setClearColor:function(M,S=1){c.set(M),h=S,p(c,h)},getClearAlpha:function(){return h},setClearAlpha:function(M){h=M,p(c,h)},render:T,addToRenderList:y}}function oA(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=_(null);let o=s,l=!1;function c(E,R,te,ie,re){let _e=!1;const j=g(ie,te,R);o!==j&&(o=j,d(o.object)),_e=x(E,ie,te,re),_e&&w(E,ie,te,re),re!==null&&e.update(re,t.ELEMENT_ARRAY_BUFFER),(_e||l)&&(l=!1,P(E,R,te,ie),re!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(re).buffer))}function h(){return t.createVertexArray()}function d(E){return t.bindVertexArray(E)}function m(E){return t.deleteVertexArray(E)}function g(E,R,te){const ie=te.wireframe===!0;let re=i[E.id];re===void 0&&(re={},i[E.id]=re);let _e=re[R.id];_e===void 0&&(_e={},re[R.id]=_e);let j=_e[ie];return j===void 0&&(j=_(h()),_e[ie]=j),j}function _(E){const R=[],te=[],ie=[];for(let re=0;re<n;re++)R[re]=0,te[re]=0,ie[re]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:te,attributeDivisors:ie,object:E,attributes:{},index:null}}function x(E,R,te,ie){const re=o.attributes,_e=R.attributes;let j=0;const ce=te.getAttributes();for(const O in ce)if(ce[O].location>=0){const q=re[O];let he=_e[O];if(he===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(he=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(he=E.instanceColor)),q===void 0||q.attribute!==he||he&&q.data!==he.data)return!0;j++}return o.attributesNum!==j||o.index!==ie}function w(E,R,te,ie){const re={},_e=R.attributes;let j=0;const ce=te.getAttributes();for(const O in ce)if(ce[O].location>=0){let q=_e[O];q===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(q=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(q=E.instanceColor));const he={};he.attribute=q,q&&q.data&&(he.data=q.data),re[O]=he,j++}o.attributes=re,o.attributesNum=j,o.index=ie}function T(){const E=o.newAttributes;for(let R=0,te=E.length;R<te;R++)E[R]=0}function y(E){p(E,0)}function p(E,R){const te=o.newAttributes,ie=o.enabledAttributes,re=o.attributeDivisors;te[E]=1,ie[E]===0&&(t.enableVertexAttribArray(E),ie[E]=1),re[E]!==R&&(t.vertexAttribDivisor(E,R),re[E]=R)}function M(){const E=o.newAttributes,R=o.enabledAttributes;for(let te=0,ie=R.length;te<ie;te++)R[te]!==E[te]&&(t.disableVertexAttribArray(te),R[te]=0)}function S(E,R,te,ie,re,_e,j){j===!0?t.vertexAttribIPointer(E,R,te,re,_e):t.vertexAttribPointer(E,R,te,ie,re,_e)}function P(E,R,te,ie){T();const re=ie.attributes,_e=te.getAttributes(),j=R.defaultAttributeValues;for(const ce in _e){const O=_e[ce];if(O.location>=0){let le=re[ce];if(le===void 0&&(ce==="instanceMatrix"&&E.instanceMatrix&&(le=E.instanceMatrix),ce==="instanceColor"&&E.instanceColor&&(le=E.instanceColor)),le!==void 0){const q=le.normalized,he=le.itemSize,Le=e.get(le);if(Le===void 0)continue;const ke=Le.buffer,Q=Le.type,oe=Le.bytesPerElement,de=Q===t.INT||Q===t.UNSIGNED_INT||le.gpuType===Cp;if(le.isInterleavedBufferAttribute){const Me=le.data,Fe=Me.stride,Be=le.offset;if(Me.isInstancedInterleavedBuffer){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,Me.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let rt=0;rt<O.locationSize;rt++)y(O.location+rt);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let rt=0;rt<O.locationSize;rt++)S(O.location+rt,he/O.locationSize,Q,q,Fe*oe,(Be+he/O.locationSize*rt)*oe,de)}else{if(le.isInstancedBufferAttribute){for(let Me=0;Me<O.locationSize;Me++)p(O.location+Me,le.meshPerAttribute);E.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Me=0;Me<O.locationSize;Me++)y(O.location+Me);t.bindBuffer(t.ARRAY_BUFFER,ke);for(let Me=0;Me<O.locationSize;Me++)S(O.location+Me,he/O.locationSize,Q,q,he*oe,he/O.locationSize*Me*oe,de)}}else if(j!==void 0){const q=j[ce];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(O.location,q);break;case 3:t.vertexAttrib3fv(O.location,q);break;case 4:t.vertexAttrib4fv(O.location,q);break;default:t.vertexAttrib1fv(O.location,q)}}}}M()}function z(){k();for(const E in i){const R=i[E];for(const te in R){const ie=R[te];for(const re in ie)m(ie[re].object),delete ie[re];delete R[te]}delete i[E]}}function D(E){if(i[E.id]===void 0)return;const R=i[E.id];for(const te in R){const ie=R[te];for(const re in ie)m(ie[re].object),delete ie[re];delete R[te]}delete i[E.id]}function I(E){for(const R in i){const te=i[R];if(te[E.id]===void 0)continue;const ie=te[E.id];for(const re in ie)m(ie[re].object),delete ie[re];delete te[E.id]}}function k(){ae(),l=!0,o!==s&&(o=s,d(o.object))}function ae(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:k,resetDefaultState:ae,dispose:z,releaseStatesOfGeometry:D,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:y,disableUnusedAttributes:M}}function aA(t,e,n){let i;function s(d){i=d}function o(d,m){t.drawArrays(i,d,m),n.update(m,i,1)}function l(d,m,g){g!==0&&(t.drawArraysInstanced(i,d,m,g),n.update(m,i,g))}function c(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,m,0,g);let x=0;for(let w=0;w<g;w++)x+=m[w];n.update(x,i,1)}function h(d,m,g,_){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let w=0;w<d.length;w++)l(d[w],m[w],_[w]);else{x.multiDrawArraysInstancedWEBGL(i,d,0,m,0,_,0,g);let w=0;for(let T=0;T<g;T++)w+=m[T];for(let T=0;T<_.length;T++)n.update(w,i,_[T])}}this.setMode=s,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function lA(t,e,n,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function l(I){return!(I!==Qn&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const k=I===Po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==er&&i.convert(I)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Pi&&!k)}function h(I){if(I==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const m=h(d);m!==d&&(console.warn("THREE.WebGLRenderer:",d,"not supported, using",m,"instead."),d=m);const g=n.logarithmicDepthBuffer===!0,_=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(_===!0){const I=e.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}const x=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),w=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=t.getParameter(t.MAX_TEXTURE_SIZE),y=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),S=t.getParameter(t.MAX_VARYING_VECTORS),P=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),z=w>0,D=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:h,textureFormatReadable:l,textureTypeReadable:c,precision:d,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:x,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:y,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:P,vertexTextures:z,maxSamples:D}}function uA(t){const e=this;let n=null,i=0,s=!1,o=!1;const l=new ts,c=new it,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const x=g.length!==0||_||i!==0||s;return s=_,i=g.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){n=m(g,_,0)},this.setState=function(g,_,x){const w=g.clippingPlanes,T=g.clipIntersection,y=g.clipShadows,p=t.get(g);if(!s||w===null||w.length===0||o&&!y)o?m(null):d();else{const M=o?0:i,S=M*4;let P=p.clippingState||null;h.value=P,P=m(w,_,S,x);for(let z=0;z!==S;++z)P[z]=n[z];p.clippingState=P,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=M}};function d(){h.value!==n&&(h.value=n,h.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function m(g,_,x,w){const T=g!==null?g.length:0;let y=null;if(T!==0){if(y=h.value,w!==!0||y===null){const p=x+T*4,M=_.matrixWorldInverse;c.getNormalMatrix(M),(y===null||y.length<p)&&(y=new Float32Array(p));for(let S=0,P=x;S!==T;++S,P+=4)l.copy(g[S]).applyMatrix4(M,c),l.normal.toArray(y,P),y[P+3]=l.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,y}}function cA(t){let e=new WeakMap;function n(l,c){return c===Qf?l.mapping=xo:c===Jf&&(l.mapping=So),l}function i(l){if(l&&l.isTexture){const c=l.mapping;if(c===Qf||c===Jf)if(e.has(l)){const h=e.get(l).texture;return n(h,l.mapping)}else{const h=l.image;if(h&&h.height>0){const d=new Sw(h.height);return d.fromEquirectangularTexture(t,l),e.set(l,d),l.addEventListener("dispose",s),n(d.texture,l.mapping)}else return null}}return l}function s(l){const c=l.target;c.removeEventListener("dispose",s);const h=e.get(c);h!==void 0&&(e.delete(c),h.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class hA extends $u{constructor(e=-1,n=1,i=1,s=-1,o=.1,l=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=o,this.far=l,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,o,l){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=l,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,l=i+e,c=s+n,h=s-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=d*this.view.offsetX,l=o+d*this.view.width,c-=m*this.view.offsetY,h=c-m*this.view.height}this.projectionMatrix.makeOrthographic(o,l,c,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const to=4,rg=[.125,.215,.35,.446,.526,.582],rs=20,kh=new hA,sg=new St;let Bh=null,Hh=0,Vh=0,Gh=!1;const ns=(1+Math.sqrt(5))/2,Vs=1/ns,og=[new ee(-ns,Vs,0),new ee(ns,Vs,0),new ee(-Vs,0,ns),new ee(Vs,0,ns),new ee(0,ns,-Vs),new ee(0,ns,Vs),new ee(-1,1,-1),new ee(1,1,-1),new ee(-1,1,1),new ee(1,1,1)];class ag{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,s,o),n>0&&this._blur(o,0,0,n),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ug(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Bh,Hh,Vh),this._renderer.xr.enabled=Gh,e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===xo||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Vh=this._renderer.getActiveMipmapLevel(),Gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:vn,minFilter:vn,generateMipmaps:!1,type:Po,format:Qn,colorSpace:Br,depthBuffer:!1},s=lg(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lg(e,n,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fA(o)),this._blurMaterial=dA(o,e,n)}return s}_compileMaterial(e){const n=new Jn(this._lodPlanes[0],e);this._renderer.compile(n,kh)}_sceneToCubeUV(e,n,i,s){const c=new fi(90,1,n,i),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,g=m.autoClear,_=m.toneMapping;m.getClearColor(sg),m.toneMapping=Ir,m.autoClear=!1;const x=new my({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),w=new Jn(new ja,x);let T=!1;const y=e.background;y?y.isColor&&(x.color.copy(y),e.background=null,T=!0):(x.color.copy(sg),T=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(c.up.set(0,h[p],0),c.lookAt(d[p],0,0)):M===1?(c.up.set(0,0,h[p]),c.lookAt(0,d[p],0)):(c.up.set(0,h[p],0),c.lookAt(0,0,d[p]));const S=this._cubeSize;Yl(s,M*S,p>2?S:0,S,S),m.setRenderTarget(s),T&&m.render(w,c),m.render(e,c)}w.geometry.dispose(),w.material.dispose(),m.toneMapping=_,m.autoClear=g,e.background=y}_textureToCubeUV(e,n){const i=this._renderer,s=e.mapping===xo||e.mapping===So;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ug());const o=s?this._cubemapMaterial:this._equirectMaterial,l=new Jn(this._lodPlanes[0],o),c=o.uniforms;c.envMap.value=e;const h=this._cubeSize;Yl(n,0,0,3*h,2*h),i.setRenderTarget(n),i.render(l,kh)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const l=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),c=og[(s-o-1)%og.length];this._blur(e,o-1,o,l,c)}n.autoClear=i}_blur(e,n,i,s,o){const l=this._pingPongRenderTarget;this._halfBlur(e,l,n,i,s,"latitudinal",o),this._halfBlur(l,e,i,i,s,"longitudinal",o)}_halfBlur(e,n,i,s,o,l,c){const h=this._renderer,d=this._blurMaterial;l!=="latitudinal"&&l!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const m=3,g=new Jn(this._lodPlanes[s],d),_=d.uniforms,x=this._sizeLods[i]-1,w=isFinite(o)?Math.PI/(2*x):2*Math.PI/(2*rs-1),T=o/w,y=isFinite(o)?1+Math.floor(m*T):rs;y>rs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${rs}`);const p=[];let M=0;for(let I=0;I<rs;++I){const k=I/T,ae=Math.exp(-k*k/2);p.push(ae),I===0?M+=ae:I<y&&(M+=2*ae)}for(let I=0;I<p.length;I++)p[I]=p[I]/M;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=p,_.latitudinal.value=l==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:S}=this;_.dTheta.value=w,_.mipInt.value=S-i;const P=this._sizeLods[s],z=3*P*(s>S-to?s-S+to:0),D=4*(this._cubeSize-P);Yl(n,z,D,3*P,2*P),h.setRenderTarget(n),h.render(g,kh)}}function fA(t){const e=[],n=[],i=[];let s=t;const o=t-to+1+rg.length;for(let l=0;l<o;l++){const c=Math.pow(2,s);n.push(c);let h=1/c;l>t-to?h=rg[l-t+to-1]:l===0&&(h=0),i.push(h);const d=1/(c-2),m=-d,g=1+d,_=[m,m,g,m,g,g,m,m,g,g,m,g],x=6,w=6,T=3,y=2,p=1,M=new Float32Array(T*w*x),S=new Float32Array(y*w*x),P=new Float32Array(p*w*x);for(let D=0;D<x;D++){const I=D%3*2/3-1,k=D>2?0:-1,ae=[I,k,0,I+2/3,k,0,I+2/3,k+1,0,I,k,0,I+2/3,k+1,0,I,k+1,0];M.set(ae,T*w*D),S.set(_,y*w*D);const E=[D,D,D,D,D,D];P.set(E,p*w*D)}const z=new rr;z.setAttribute("position",new gi(M,T)),z.setAttribute("uv",new gi(S,y)),z.setAttribute("faceIndex",new gi(P,p)),e.push(z),s>to&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function lg(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=_c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function dA(t,e,n){const i=new Float32Array(rs),s=new ee(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function ug(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function cg(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Np(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Np(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pA(t){let e=new WeakMap,n=null;function i(c){if(c&&c.isTexture){const h=c.mapping,d=h===Qf||h===Jf,m=h===xo||h===So;if(d||m){let g=e.get(c);const _=g!==void 0?g.texture.pmremVersion:0;if(c.isRenderTargetTexture&&c.pmremVersion!==_)return n===null&&(n=new ag(t)),g=d?n.fromEquirectangular(c,g):n.fromCubemap(c,g),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),g.texture;if(g!==void 0)return g.texture;{const x=c.image;return d&&x&&x.height>0||m&&x&&s(x)?(n===null&&(n=new ag(t)),g=d?n.fromEquirectangular(c):n.fromCubemap(c),g.texture.pmremVersion=c.pmremVersion,e.set(c,g),c.addEventListener("dispose",o),g.texture):null}}}return c}function s(c){let h=0;const d=6;for(let m=0;m<d;m++)c[m]!==void 0&&h++;return h===d}function o(c){const h=c.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:l}}function mA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const s=n(i);return s===null&&vu("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _A(t,e,n,i){const s={},o=new WeakMap;function l(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);for(const w in _.morphAttributes){const T=_.morphAttributes[w];for(let y=0,p=T.length;y<p;y++)e.remove(T[y])}_.removeEventListener("dispose",l),delete s[_.id];const x=o.get(_);x&&(e.remove(x),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,n.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",l),s[_.id]=!0,n.memory.geometries++),_}function h(g){const _=g.attributes;for(const w in _)e.update(_[w],t.ARRAY_BUFFER);const x=g.morphAttributes;for(const w in x){const T=x[w];for(let y=0,p=T.length;y<p;y++)e.update(T[y],t.ARRAY_BUFFER)}}function d(g){const _=[],x=g.index,w=g.attributes.position;let T=0;if(x!==null){const M=x.array;T=x.version;for(let S=0,P=M.length;S<P;S+=3){const z=M[S+0],D=M[S+1],I=M[S+2];_.push(z,D,D,I,I,z)}}else if(w!==void 0){const M=w.array;T=w.version;for(let S=0,P=M.length/3-1;S<P;S+=3){const z=S+0,D=S+1,I=S+2;_.push(z,D,D,I,I,z)}}else return;const y=new(uy(_)?gy:_y)(_,1);y.version=T;const p=o.get(g);p&&e.remove(p),o.set(g,y)}function m(g){const _=o.get(g);if(_){const x=g.index;x!==null&&_.version<x.version&&d(g)}else d(g);return o.get(g)}return{get:c,update:h,getWireframeAttribute:m}}function gA(t,e,n){let i;function s(_){i=_}let o,l;function c(_){o=_.type,l=_.bytesPerElement}function h(_,x){t.drawElements(i,x,o,_*l),n.update(x,i,1)}function d(_,x,w){w!==0&&(t.drawElementsInstanced(i,x,o,_*l,w),n.update(x,i,w))}function m(_,x,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,o,_,0,w);let y=0;for(let p=0;p<w;p++)y+=x[p];n.update(y,i,1)}function g(_,x,w,T){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let p=0;p<_.length;p++)d(_[p]/l,x[p],T[p]);else{y.multiDrawElementsInstancedWEBGL(i,x,0,o,_,0,T,0,w);let p=0;for(let M=0;M<w;M++)p+=x[M];for(let M=0;M<T.length;M++)n.update(p,i,T[M])}}this.setMode=s,this.setIndex=c,this.render=h,this.renderInstances=d,this.renderMultiDraw=m,this.renderMultiDrawInstances=g}function vA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,l,c){switch(n.calls++,l){case t.TRIANGLES:n.triangles+=c*(o/3);break;case t.LINES:n.lines+=c*(o/2);break;case t.LINE_STRIP:n.lines+=c*(o-1);break;case t.LINE_LOOP:n.lines+=c*o;break;case t.POINTS:n.points+=c*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",l);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function yA(t,e,n){const i=new WeakMap,s=new Ft;function o(l,c,h){const d=l.morphTargetInfluences,m=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=m!==void 0?m.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let E=function(){k.dispose(),i.delete(c),c.removeEventListener("dispose",E)};var x=E;_!==void 0&&_.texture.dispose();const w=c.morphAttributes.position!==void 0,T=c.morphAttributes.normal!==void 0,y=c.morphAttributes.color!==void 0,p=c.morphAttributes.position||[],M=c.morphAttributes.normal||[],S=c.morphAttributes.color||[];let P=0;w===!0&&(P=1),T===!0&&(P=2),y===!0&&(P=3);let z=c.attributes.position.count*P,D=1;z>e.maxTextureSize&&(D=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const I=new Float32Array(z*D*4*g),k=new hy(I,z,D,g);k.type=Pi,k.needsUpdate=!0;const ae=P*4;for(let R=0;R<g;R++){const te=p[R],ie=M[R],re=S[R],_e=z*D*4*R;for(let j=0;j<te.count;j++){const ce=j*ae;w===!0&&(s.fromBufferAttribute(te,j),I[_e+ce+0]=s.x,I[_e+ce+1]=s.y,I[_e+ce+2]=s.z,I[_e+ce+3]=0),T===!0&&(s.fromBufferAttribute(ie,j),I[_e+ce+4]=s.x,I[_e+ce+5]=s.y,I[_e+ce+6]=s.z,I[_e+ce+7]=0),y===!0&&(s.fromBufferAttribute(re,j),I[_e+ce+8]=s.x,I[_e+ce+9]=s.y,I[_e+ce+10]=s.z,I[_e+ce+11]=re.itemSize===4?s.w:1)}}_={count:g,texture:k,size:new Je(z,D)},i.set(c,_),c.addEventListener("dispose",E)}if(l.isInstancedMesh===!0&&l.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",l.morphTexture,n);else{let w=0;for(let y=0;y<d.length;y++)w+=d[y];const T=c.morphTargetsRelative?1:1-w;h.getUniforms().setValue(t,"morphTargetBaseInfluence",T),h.getUniforms().setValue(t,"morphTargetInfluences",d)}h.getUniforms().setValue(t,"morphTargetsTexture",_.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",_.size)}return{update:o}}function xA(t,e,n,i){let s=new WeakMap;function o(h){const d=i.render.frame,m=h.geometry,g=e.get(h,m);if(s.get(g)!==d&&(e.update(g),s.set(g,d)),h.isInstancedMesh&&(h.hasEventListener("dispose",c)===!1&&h.addEventListener("dispose",c),s.get(h)!==d&&(n.update(h.instanceMatrix,t.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,t.ARRAY_BUFFER),s.set(h,d))),h.isSkinnedMesh){const _=h.skeleton;s.get(_)!==d&&(_.update(),s.set(_,d))}return g}function l(){s=new WeakMap}function c(h){const d=h.target;d.removeEventListener("dispose",c),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:o,dispose:l}}class My extends xn{constructor(e,n,i,s,o,l,c,h,d,m=uo){if(m!==uo&&m!==Eo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&m===uo&&(i=gs),i===void 0&&m===Eo&&(i=Mo),super(null,s,o,l,c,h,m,i,d),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=c!==void 0?c:Pn,this.minFilter=h!==void 0?h:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ey=new xn,hg=new My(1,1),wy=new hy,Ty=new sw,Ay=new yy,fg=[],dg=[],pg=new Float32Array(16),mg=new Float32Array(9),_g=new Float32Array(4);function Lo(t,e,n){const i=t[0];if(i<=0||i>0)return t;const s=e*n;let o=fg[s];if(o===void 0&&(o=new Float32Array(s),fg[s]=o),e!==0){i.toArray(o,0);for(let l=1,c=0;l!==e;++l)c+=n,t[l].toArray(o,c)}return o}function Zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function jt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function yc(t,e){let n=dg[e];n===void 0&&(n=new Int32Array(e),dg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function SA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function MA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2fv(this.addr,e),jt(n,e)}}function EA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Zt(n,e))return;t.uniform3fv(this.addr,e),jt(n,e)}}function wA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4fv(this.addr,e),jt(n,e)}}function TA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),jt(n,e)}else{if(Zt(n,i))return;_g.set(i),t.uniformMatrix2fv(this.addr,!1,_g),jt(n,i)}}function AA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),jt(n,e)}else{if(Zt(n,i))return;mg.set(i),t.uniformMatrix3fv(this.addr,!1,mg),jt(n,i)}}function CA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),jt(n,e)}else{if(Zt(n,i))return;pg.set(i),t.uniformMatrix4fv(this.addr,!1,pg),jt(n,i)}}function PA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function RA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2iv(this.addr,e),jt(n,e)}}function LA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3iv(this.addr,e),jt(n,e)}}function bA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4iv(this.addr,e),jt(n,e)}}function IA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function DA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Zt(n,e))return;t.uniform2uiv(this.addr,e),jt(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Zt(n,e))return;t.uniform3uiv(this.addr,e),jt(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Zt(n,e))return;t.uniform4uiv(this.addr,e),jt(n,e)}}function OA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let o;this.type===t.SAMPLER_2D_SHADOW?(hg.compareFunction=ly,o=hg):o=Ey,n.setTexture2D(e||o,s)}function FA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Ty,s)}function zA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||Ay,s)}function kA(t,e,n){const i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||wy,s)}function BA(t){switch(t){case 5126:return SA;case 35664:return MA;case 35665:return EA;case 35666:return wA;case 35674:return TA;case 35675:return AA;case 35676:return CA;case 5124:case 35670:return PA;case 35667:case 35671:return RA;case 35668:case 35672:return LA;case 35669:case 35673:return bA;case 5125:return IA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return FA;case 35680:case 36300:case 36308:case 36293:return zA;case 36289:case 36303:case 36311:case 36292:return kA}}function HA(t,e){t.uniform1fv(this.addr,e)}function VA(t,e){const n=Lo(e,this.size,2);t.uniform2fv(this.addr,n)}function GA(t,e){const n=Lo(e,this.size,3);t.uniform3fv(this.addr,n)}function WA(t,e){const n=Lo(e,this.size,4);t.uniform4fv(this.addr,n)}function XA(t,e){const n=Lo(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ZA(t,e){const n=Lo(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function jA(t,e){const n=Lo(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function qA(t,e){t.uniform1iv(this.addr,e)}function YA(t,e){t.uniform2iv(this.addr,e)}function KA(t,e){t.uniform3iv(this.addr,e)}function $A(t,e){t.uniform4iv(this.addr,e)}function QA(t,e){t.uniform1uiv(this.addr,e)}function JA(t,e){t.uniform2uiv(this.addr,e)}function eC(t,e){t.uniform3uiv(this.addr,e)}function tC(t,e){t.uniform4uiv(this.addr,e)}function nC(t,e,n){const i=this.cache,s=e.length,o=yc(n,s);Zt(i,o)||(t.uniform1iv(this.addr,o),jt(i,o));for(let l=0;l!==s;++l)n.setTexture2D(e[l]||Ey,o[l])}function iC(t,e,n){const i=this.cache,s=e.length,o=yc(n,s);Zt(i,o)||(t.uniform1iv(this.addr,o),jt(i,o));for(let l=0;l!==s;++l)n.setTexture3D(e[l]||Ty,o[l])}function rC(t,e,n){const i=this.cache,s=e.length,o=yc(n,s);Zt(i,o)||(t.uniform1iv(this.addr,o),jt(i,o));for(let l=0;l!==s;++l)n.setTextureCube(e[l]||Ay,o[l])}function sC(t,e,n){const i=this.cache,s=e.length,o=yc(n,s);Zt(i,o)||(t.uniform1iv(this.addr,o),jt(i,o));for(let l=0;l!==s;++l)n.setTexture2DArray(e[l]||wy,o[l])}function oC(t){switch(t){case 5126:return HA;case 35664:return VA;case 35665:return GA;case 35666:return WA;case 35674:return XA;case 35675:return ZA;case 35676:return jA;case 5124:case 35670:return qA;case 35667:case 35671:return YA;case 35668:case 35672:return KA;case 35669:case 35673:return $A;case 5125:return QA;case 36294:return JA;case 36295:return eC;case 36296:return tC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return rC;case 36289:case 36303:case 36311:case 36292:return sC}}class aC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=BA(n.type)}}class lC{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=oC(n.type)}}class uC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const s=this.seq;for(let o=0,l=s.length;o!==l;++o){const c=s[o];c.setValue(e,n[c.id],i)}}}const Wh=/(\w+)(\])?(\[|\.)?/g;function gg(t,e){t.seq.push(e),t.map[e.id]=e}function cC(t,e,n){const i=t.name,s=i.length;for(Wh.lastIndex=0;;){const o=Wh.exec(i),l=Wh.lastIndex;let c=o[1];const h=o[2]==="]",d=o[3];if(h&&(c=c|0),d===void 0||d==="["&&l+2===s){gg(n,d===void 0?new aC(c,t,e):new lC(c,t,e));break}else{let g=n.map[c];g===void 0&&(g=new uC(c),gg(n,g)),n=g}}}class yu{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=e.getActiveUniform(n,s),l=e.getUniformLocation(n,o.name);cC(o,l,this)}}setValue(e,n,i,s){const o=this.map[n];o!==void 0&&o.setValue(e,i,s)}setOptional(e,n,i){const s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let o=0,l=n.length;o!==l;++o){const c=n[o],h=i[c.id];h.needsUpdate!==!1&&c.setValue(e,h.value,s)}}static seqWithValue(e,n){const i=[];for(let s=0,o=e.length;s!==o;++s){const l=e[s];l.id in n&&i.push(l)}return i}}function vg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const hC=37297;let fC=0;function dC(t,e){const n=t.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,n.length);for(let l=s;l<o;l++){const c=l+1;i.push(`${c===e?">":" "} ${c}: ${n[l]}`)}return i.join(`
`)}function pC(t){const e=Mt.getPrimaries(Mt.workingColorSpace),n=Mt.getPrimaries(t);let i;switch(e===n?i="":e===qu&&n===ju?i="LinearDisplayP3ToLinearSRGB":e===ju&&n===qu&&(i="LinearSRGBToLinearDisplayP3"),t){case Br:case gc:return[i,"LinearTransferOETF"];case Ti:case Dp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function yg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const l=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+dC(t.getShaderSource(e),l)}else return s}function mC(t,e){const n=pC(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function _C(t,e){let n;switch(e){case LE:n="Linear";break;case bE:n="Reinhard";break;case IE:n="Cineon";break;case DE:n="ACESFilmic";break;case UE:n="AgX";break;case OE:n="Neutral";break;case NE:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Kl=new ee;function gC(){Mt.getLuminanceCoefficients(Kl);const t=Kl.x.toFixed(4),e=Kl.y.toFixed(4),n=Kl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vC(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ca).join(`
`)}function yC(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function xC(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=t.getActiveAttrib(e,s),l=o.name;let c=1;o.type===t.FLOAT_MAT2&&(c=2),o.type===t.FLOAT_MAT3&&(c=3),o.type===t.FLOAT_MAT4&&(c=4),n[l]={type:o.type,location:t.getAttribLocation(e,l),locationSize:c}}return n}function ca(t){return t!==""}function xg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sg(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const SC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rd(t){return t.replace(SC,EC)}const MC=new Map;function EC(t,e){let n=nt[e];if(n===void 0){const i=MC.get(e);if(i!==void 0)n=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Rd(n)}const wC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mg(t){return t.replace(wC,TC)}function TC(t,e,n,i){let s="";for(let o=parseInt(e);o<parseInt(n);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Eg(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function AC(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Y0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===uE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function CC(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case xo:case So:e="ENVMAP_TYPE_CUBE";break;case _c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function PC(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case So:e="ENVMAP_MODE_REFRACTION";break}return e}function RC(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case K0:e="ENVMAP_BLENDING_MULTIPLY";break;case PE:e="ENVMAP_BLENDING_MIX";break;case RE:e="ENVMAP_BLENDING_ADD";break}return e}function LC(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function bC(t,e,n,i){const s=t.getContext(),o=n.defines;let l=n.vertexShader,c=n.fragmentShader;const h=AC(n),d=CC(n),m=PC(n),g=RC(n),_=LC(n),x=vC(n),w=yC(o),T=s.createProgram();let y,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ca).join(`
`),y.length>0&&(y+=`
`),p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(ca).join(`
`),p.length>0&&(p+=`
`)):(y=[Eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ca).join(`
`),p=[Eg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+m:"",n.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ir?"#define TONE_MAPPING":"",n.toneMapping!==Ir?nt.tonemapping_pars_fragment:"",n.toneMapping!==Ir?_C("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,mC("linearToOutputTexel",n.outputColorSpace),gC(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ca).join(`
`)),l=Rd(l),l=xg(l,n),l=Sg(l,n),c=Rd(c),c=xg(c,n),c=Sg(c,n),l=Mg(l),c=Mg(c),n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,y=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,p=["#define varying in",n.glslVersion===B_?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===B_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=M+y+l,P=M+p+c,z=vg(s,s.VERTEX_SHADER,S),D=vg(s,s.FRAGMENT_SHADER,P);s.attachShader(T,z),s.attachShader(T,D),n.index0AttributeName!==void 0?s.bindAttribLocation(T,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function I(R){if(t.debug.checkShaderErrors){const te=s.getProgramInfoLog(T).trim(),ie=s.getShaderInfoLog(z).trim(),re=s.getShaderInfoLog(D).trim();let _e=!0,j=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(_e=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,T,z,D);else{const ce=yg(s,z,"vertex"),O=yg(s,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+te+`
`+ce+`
`+O)}else te!==""?console.warn("THREE.WebGLProgram: Program Info Log:",te):(ie===""||re==="")&&(j=!1);j&&(R.diagnostics={runnable:_e,programLog:te,vertexShader:{log:ie,prefix:y},fragmentShader:{log:re,prefix:p}})}s.deleteShader(z),s.deleteShader(D),k=new yu(s,T),ae=xC(s,T)}let k;this.getUniforms=function(){return k===void 0&&I(this),k};let ae;this.getAttributes=function(){return ae===void 0&&I(this),ae};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(T,hC)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=fC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=z,this.fragmentShader=D,this}let IC=0;class DC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),o=this._getShaderStage(i),l=this._getShaderCacheForMaterial(e);return l.has(s)===!1&&(l.add(s),s.usedTimes++),l.has(o)===!1&&(l.add(o),o.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new NC(e),n.set(e,i)),i}}class NC{constructor(e){this.id=IC++,this.code=e,this.usedTimes=0}}function UC(t,e,n,i,s,o,l){const c=new dy,h=new DC,d=new Set,m=[],g=s.logarithmicDepthBuffer,_=s.reverseDepthBuffer,x=s.vertexTextures;let w=s.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return d.add(E),E===0?"uv":`uv${E}`}function p(E,R,te,ie,re){const _e=ie.fog,j=re.geometry,ce=E.isMeshStandardMaterial?ie.environment:null,O=(E.isMeshStandardMaterial?n:e).get(E.envMap||ce),le=O&&O.mapping===_c?O.image.height:null,q=T[E.type];E.precision!==null&&(w=s.getMaxPrecision(E.precision),w!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",w,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Le=he!==void 0?he.length:0;let ke=0;j.morphAttributes.position!==void 0&&(ke=1),j.morphAttributes.normal!==void 0&&(ke=2),j.morphAttributes.color!==void 0&&(ke=3);let Q,oe,de,Me;if(q){const an=Ai[q];Q=an.vertexShader,oe=an.fragmentShader}else Q=E.vertexShader,oe=E.fragmentShader,h.update(E),de=h.getVertexShaderID(E),Me=h.getFragmentShaderID(E);const Fe=t.getRenderTarget(),Be=re.isInstancedMesh===!0,rt=re.isBatchedMesh===!0,pt=!!E.map,et=!!E.matcap,B=!!O,Jt=!!E.aoMap,st=!!E.lightMap,lt=!!E.bumpMap,He=!!E.normalMap,ot=!!E.displacementMap,Ge=!!E.emissiveMap,N=!!E.metalnessMap,C=!!E.roughnessMap,Z=E.anisotropy>0,ne=E.clearcoat>0,U=E.dispersion>0,H=E.iridescence>0,ue=E.sheen>0,pe=E.transmission>0,ye=Z&&!!E.anisotropyMap,qe=ne&&!!E.clearcoatMap,ve=ne&&!!E.clearcoatNormalMap,Te=ne&&!!E.clearcoatRoughnessMap,Ve=H&&!!E.iridescenceMap,Ze=H&&!!E.iridescenceThicknessMap,be=ue&&!!E.sheenColorMap,ut=ue&&!!E.sheenRoughnessMap,Ye=!!E.specularMap,yt=!!E.specularColorMap,V=!!E.specularIntensityMap,Pe=pe&&!!E.transmissionMap,se=pe&&!!E.thicknessMap,fe=!!E.gradientMap,Ae=!!E.alphaMap,Re=E.alphaTest>0,ft=!!E.alphaHash,Ut=!!E.extensions;let on=Ir;E.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(on=t.toneMapping);const _t={shaderID:q,shaderType:E.type,shaderName:E.name,vertexShader:Q,fragmentShader:oe,defines:E.defines,customVertexShaderID:de,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:w,batching:rt,batchingColor:rt&&re._colorsTexture!==null,instancing:Be,instancingColor:Be&&re.instanceColor!==null,instancingMorph:Be&&re.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Br,alphaToCoverage:!!E.alphaToCoverage,map:pt,matcap:et,envMap:B,envMapMode:B&&O.mapping,envMapCubeUVHeight:le,aoMap:Jt,lightMap:st,bumpMap:lt,normalMap:He,displacementMap:x&&ot,emissiveMap:Ge,normalMapObjectSpace:He&&E.normalMapType===HE,normalMapTangentSpace:He&&E.normalMapType===BE,metalnessMap:N,roughnessMap:C,anisotropy:Z,anisotropyMap:ye,clearcoat:ne,clearcoatMap:qe,clearcoatNormalMap:ve,clearcoatRoughnessMap:Te,dispersion:U,iridescence:H,iridescenceMap:Ve,iridescenceThicknessMap:Ze,sheen:ue,sheenColorMap:be,sheenRoughnessMap:ut,specularMap:Ye,specularColorMap:yt,specularIntensityMap:V,transmission:pe,transmissionMap:Pe,thicknessMap:se,gradientMap:fe,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Ae,alphaTest:Re,alphaHash:ft,combine:E.combine,mapUv:pt&&y(E.map.channel),aoMapUv:Jt&&y(E.aoMap.channel),lightMapUv:st&&y(E.lightMap.channel),bumpMapUv:lt&&y(E.bumpMap.channel),normalMapUv:He&&y(E.normalMap.channel),displacementMapUv:ot&&y(E.displacementMap.channel),emissiveMapUv:Ge&&y(E.emissiveMap.channel),metalnessMapUv:N&&y(E.metalnessMap.channel),roughnessMapUv:C&&y(E.roughnessMap.channel),anisotropyMapUv:ye&&y(E.anisotropyMap.channel),clearcoatMapUv:qe&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:ve&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&y(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ve&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:ut&&y(E.sheenRoughnessMap.channel),specularMapUv:Ye&&y(E.specularMap.channel),specularColorMapUv:yt&&y(E.specularColorMap.channel),specularIntensityMapUv:V&&y(E.specularIntensityMap.channel),transmissionMapUv:Pe&&y(E.transmissionMap.channel),thicknessMapUv:se&&y(E.thicknessMap.channel),alphaMapUv:Ae&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(He||Z),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!j.attributes.uv&&(pt||Ae),fog:!!_e,useFog:E.fog===!0,fogExp2:!!_e&&_e.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:_,skinning:re.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Le,morphTextureStride:ke,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:E.dithering,shadowMapEnabled:t.shadowMap.enabled&&te.length>0,shadowMapType:t.shadowMap.type,toneMapping:on,decodeVideoTexture:pt&&E.map.isVideoTexture===!0&&Mt.getTransfer(E.map.colorSpace)===Rt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Wi,flipSided:E.side===In,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Ut&&E.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&E.extensions.multiDraw===!0||rt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return _t.vertexUv1s=d.has(1),_t.vertexUv2s=d.has(2),_t.vertexUv3s=d.has(3),d.clear(),_t}function M(E){const R=[];if(E.shaderID?R.push(E.shaderID):(R.push(E.customVertexShaderID),R.push(E.customFragmentShaderID)),E.defines!==void 0)for(const te in E.defines)R.push(te),R.push(E.defines[te]);return E.isRawShaderMaterial===!1&&(S(R,E),P(R,E),R.push(t.outputColorSpace)),R.push(E.customProgramCacheKey),R.join()}function S(E,R){E.push(R.precision),E.push(R.outputColorSpace),E.push(R.envMapMode),E.push(R.envMapCubeUVHeight),E.push(R.mapUv),E.push(R.alphaMapUv),E.push(R.lightMapUv),E.push(R.aoMapUv),E.push(R.bumpMapUv),E.push(R.normalMapUv),E.push(R.displacementMapUv),E.push(R.emissiveMapUv),E.push(R.metalnessMapUv),E.push(R.roughnessMapUv),E.push(R.anisotropyMapUv),E.push(R.clearcoatMapUv),E.push(R.clearcoatNormalMapUv),E.push(R.clearcoatRoughnessMapUv),E.push(R.iridescenceMapUv),E.push(R.iridescenceThicknessMapUv),E.push(R.sheenColorMapUv),E.push(R.sheenRoughnessMapUv),E.push(R.specularMapUv),E.push(R.specularColorMapUv),E.push(R.specularIntensityMapUv),E.push(R.transmissionMapUv),E.push(R.thicknessMapUv),E.push(R.combine),E.push(R.fogExp2),E.push(R.sizeAttenuation),E.push(R.morphTargetsCount),E.push(R.morphAttributeCount),E.push(R.numDirLights),E.push(R.numPointLights),E.push(R.numSpotLights),E.push(R.numSpotLightMaps),E.push(R.numHemiLights),E.push(R.numRectAreaLights),E.push(R.numDirLightShadows),E.push(R.numPointLightShadows),E.push(R.numSpotLightShadows),E.push(R.numSpotLightShadowsWithMaps),E.push(R.numLightProbes),E.push(R.shadowMapType),E.push(R.toneMapping),E.push(R.numClippingPlanes),E.push(R.numClipIntersection),E.push(R.depthPacking)}function P(E,R){c.disableAll(),R.supportsVertexTextures&&c.enable(0),R.instancing&&c.enable(1),R.instancingColor&&c.enable(2),R.instancingMorph&&c.enable(3),R.matcap&&c.enable(4),R.envMap&&c.enable(5),R.normalMapObjectSpace&&c.enable(6),R.normalMapTangentSpace&&c.enable(7),R.clearcoat&&c.enable(8),R.iridescence&&c.enable(9),R.alphaTest&&c.enable(10),R.vertexColors&&c.enable(11),R.vertexAlphas&&c.enable(12),R.vertexUv1s&&c.enable(13),R.vertexUv2s&&c.enable(14),R.vertexUv3s&&c.enable(15),R.vertexTangents&&c.enable(16),R.anisotropy&&c.enable(17),R.alphaHash&&c.enable(18),R.batching&&c.enable(19),R.dispersion&&c.enable(20),R.batchingColor&&c.enable(21),E.push(c.mask),c.disableAll(),R.fog&&c.enable(0),R.useFog&&c.enable(1),R.flatShading&&c.enable(2),R.logarithmicDepthBuffer&&c.enable(3),R.reverseDepthBuffer&&c.enable(4),R.skinning&&c.enable(5),R.morphTargets&&c.enable(6),R.morphNormals&&c.enable(7),R.morphColors&&c.enable(8),R.premultipliedAlpha&&c.enable(9),R.shadowMapEnabled&&c.enable(10),R.doubleSided&&c.enable(11),R.flipSided&&c.enable(12),R.useDepthPacking&&c.enable(13),R.dithering&&c.enable(14),R.transmission&&c.enable(15),R.sheen&&c.enable(16),R.opaque&&c.enable(17),R.pointsUvs&&c.enable(18),R.decodeVideoTexture&&c.enable(19),R.alphaToCoverage&&c.enable(20),E.push(c.mask)}function z(E){const R=T[E.type];let te;if(R){const ie=Ai[R];te=gw.clone(ie.uniforms)}else te=E.uniforms;return te}function D(E,R){let te;for(let ie=0,re=m.length;ie<re;ie++){const _e=m[ie];if(_e.cacheKey===R){te=_e,++te.usedTimes;break}}return te===void 0&&(te=new bC(t,R,E,o),m.push(te)),te}function I(E){if(--E.usedTimes===0){const R=m.indexOf(E);m[R]=m[m.length-1],m.pop(),E.destroy()}}function k(E){h.remove(E)}function ae(){h.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:z,acquireProgram:D,releaseProgram:I,releaseShaderCache:k,programs:m,dispose:ae}}function OC(){let t=new WeakMap;function e(l){return t.has(l)}function n(l){let c=t.get(l);return c===void 0&&(c={},t.set(l,c)),c}function i(l){t.delete(l)}function s(l,c,h){t.get(l)[c]=h}function o(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:o}}function FC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function wg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Tg(){const t=[];let e=0;const n=[],i=[],s=[];function o(){e=0,n.length=0,i.length=0,s.length=0}function l(g,_,x,w,T,y){let p=t[e];return p===void 0?(p={id:g.id,object:g,geometry:_,material:x,groupOrder:w,renderOrder:g.renderOrder,z:T,group:y},t[e]=p):(p.id=g.id,p.object=g,p.geometry=_,p.material=x,p.groupOrder=w,p.renderOrder=g.renderOrder,p.z=T,p.group=y),e++,p}function c(g,_,x,w,T,y){const p=l(g,_,x,w,T,y);x.transmission>0?i.push(p):x.transparent===!0?s.push(p):n.push(p)}function h(g,_,x,w,T,y){const p=l(g,_,x,w,T,y);x.transmission>0?i.unshift(p):x.transparent===!0?s.unshift(p):n.unshift(p)}function d(g,_){n.length>1&&n.sort(g||FC),i.length>1&&i.sort(_||wg),s.length>1&&s.sort(_||wg)}function m(){for(let g=e,_=t.length;g<_;g++){const x=t[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:s,init:o,push:c,unshift:h,finish:m,sort:d}}function zC(){let t=new WeakMap;function e(i,s){const o=t.get(i);let l;return o===void 0?(l=new Tg,t.set(i,[l])):s>=o.length?(l=new Tg,o.push(l)):l=o[s],l}function n(){t=new WeakMap}return{get:e,dispose:n}}function kC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ee,color:new St};break;case"SpotLight":n={position:new ee,direction:new ee,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ee,color:new St,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ee,skyColor:new St,groundColor:new St};break;case"RectAreaLight":n={color:new St,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return t[e.id]=n,n}}}function BC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let HC=0;function VC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function GC(t){const e=new kC,n=BC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)i.probe.push(new ee);const s=new ee,o=new kt,l=new kt;function c(d){let m=0,g=0,_=0;for(let ae=0;ae<9;ae++)i.probe[ae].set(0,0,0);let x=0,w=0,T=0,y=0,p=0,M=0,S=0,P=0,z=0,D=0,I=0;d.sort(VC);for(let ae=0,E=d.length;ae<E;ae++){const R=d[ae],te=R.color,ie=R.intensity,re=R.distance,_e=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)m+=te.r*ie,g+=te.g*ie,_+=te.b*ie;else if(R.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(R.sh.coefficients[j],ie);I++}else if(R.isDirectionalLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ce=R.shadow,O=n.get(R);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,i.directionalShadow[x]=O,i.directionalShadowMap[x]=_e,i.directionalShadowMatrix[x]=R.shadow.matrix,M++}i.directional[x]=j,x++}else if(R.isSpotLight){const j=e.get(R);j.position.setFromMatrixPosition(R.matrixWorld),j.color.copy(te).multiplyScalar(ie),j.distance=re,j.coneCos=Math.cos(R.angle),j.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),j.decay=R.decay,i.spot[T]=j;const ce=R.shadow;if(R.map&&(i.spotLightMap[z]=R.map,z++,ce.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[T]=ce.matrix,R.castShadow){const O=n.get(R);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,i.spotShadow[T]=O,i.spotShadowMap[T]=_e,P++}T++}else if(R.isRectAreaLight){const j=e.get(R);j.color.copy(te).multiplyScalar(ie),j.halfWidth.set(R.width*.5,0,0),j.halfHeight.set(0,R.height*.5,0),i.rectArea[y]=j,y++}else if(R.isPointLight){const j=e.get(R);if(j.color.copy(R.color).multiplyScalar(R.intensity),j.distance=R.distance,j.decay=R.decay,R.castShadow){const ce=R.shadow,O=n.get(R);O.shadowIntensity=ce.intensity,O.shadowBias=ce.bias,O.shadowNormalBias=ce.normalBias,O.shadowRadius=ce.radius,O.shadowMapSize=ce.mapSize,O.shadowCameraNear=ce.camera.near,O.shadowCameraFar=ce.camera.far,i.pointShadow[w]=O,i.pointShadowMap[w]=_e,i.pointShadowMatrix[w]=R.shadow.matrix,S++}i.point[w]=j,w++}else if(R.isHemisphereLight){const j=e.get(R);j.skyColor.copy(R.color).multiplyScalar(ie),j.groundColor.copy(R.groundColor).multiplyScalar(ie),i.hemi[p]=j,p++}}y>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ee.LTC_FLOAT_1,i.rectAreaLTC2=Ee.LTC_FLOAT_2):(i.rectAreaLTC1=Ee.LTC_HALF_1,i.rectAreaLTC2=Ee.LTC_HALF_2)),i.ambient[0]=m,i.ambient[1]=g,i.ambient[2]=_;const k=i.hash;(k.directionalLength!==x||k.pointLength!==w||k.spotLength!==T||k.rectAreaLength!==y||k.hemiLength!==p||k.numDirectionalShadows!==M||k.numPointShadows!==S||k.numSpotShadows!==P||k.numSpotMaps!==z||k.numLightProbes!==I)&&(i.directional.length=x,i.spot.length=T,i.rectArea.length=y,i.point.length=w,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=P,i.spotShadowMap.length=P,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=P+z-D,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,k.directionalLength=x,k.pointLength=w,k.spotLength=T,k.rectAreaLength=y,k.hemiLength=p,k.numDirectionalShadows=M,k.numPointShadows=S,k.numSpotShadows=P,k.numSpotMaps=z,k.numLightProbes=I,i.version=HC++)}function h(d,m){let g=0,_=0,x=0,w=0,T=0;const y=m.matrixWorldInverse;for(let p=0,M=d.length;p<M;p++){const S=d[p];if(S.isDirectionalLight){const P=i.directional[g];P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(y),g++}else if(S.isSpotLight){const P=i.spot[x];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(y),x++}else if(S.isRectAreaLight){const P=i.rectArea[w];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(y),l.identity(),o.copy(S.matrixWorld),o.premultiply(y),l.extractRotation(o),P.halfWidth.set(S.width*.5,0,0),P.halfHeight.set(0,S.height*.5,0),P.halfWidth.applyMatrix4(l),P.halfHeight.applyMatrix4(l),w++}else if(S.isPointLight){const P=i.point[_];P.position.setFromMatrixPosition(S.matrixWorld),P.position.applyMatrix4(y),_++}else if(S.isHemisphereLight){const P=i.hemi[T];P.direction.setFromMatrixPosition(S.matrixWorld),P.direction.transformDirection(y),T++}}}return{setup:c,setupView:h,state:i}}function Ag(t){const e=new GC(t),n=[],i=[];function s(m){d.camera=m,n.length=0,i.length=0}function o(m){n.push(m)}function l(m){i.push(m)}function c(){e.setup(n)}function h(m){e.setupView(n,m)}const d={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:d,setupLights:c,setupLightsView:h,pushLight:o,pushShadow:l}}function WC(t){let e=new WeakMap;function n(s,o=0){const l=e.get(s);let c;return l===void 0?(c=new Ag(t),e.set(s,[c])):o>=l.length?(c=new Ag(t),l.push(c)):c=l[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class XC extends Za{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ZC extends Za{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const jC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function YC(t,e,n){let i=new xy;const s=new Je,o=new Je,l=new Ft,c=new XC({depthPacking:kE}),h=new ZC,d={},m=n.maxTextureSize,g={[Ur]:In,[In]:Ur,[Wi]:Wi},_=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:jC,fragmentShader:qC}),x=_.clone();x.defines.HORIZONTAL_PASS=1;const w=new rr;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Jn(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Y0;let p=this.type;this.render=function(D,I,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||D.length===0)return;const ae=t.getRenderTarget(),E=t.getActiveCubeFace(),R=t.getActiveMipmapLevel(),te=t.state;te.setBlending(br),te.buffers.color.setClear(1,1,1,1),te.buffers.depth.setTest(!0),te.setScissorTest(!1);const ie=p!==Hi&&this.type===Hi,re=p===Hi&&this.type!==Hi;for(let _e=0,j=D.length;_e<j;_e++){const ce=D[_e],O=ce.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;s.copy(O.mapSize);const le=O.getFrameExtents();if(s.multiply(le),o.copy(O.mapSize),(s.x>m||s.y>m)&&(s.x>m&&(o.x=Math.floor(m/le.x),s.x=o.x*le.x,O.mapSize.x=o.x),s.y>m&&(o.y=Math.floor(m/le.y),s.y=o.y*le.y,O.mapSize.y=o.y)),O.map===null||ie===!0||re===!0){const he=this.type!==Hi?{minFilter:Pn,magFilter:Pn}:{};O.map!==null&&O.map.dispose(),O.map=new Or(s.x,s.y,he),O.map.texture.name=ce.name+".shadowMap",O.camera.updateProjectionMatrix()}t.setRenderTarget(O.map),t.clear();const q=O.getViewportCount();for(let he=0;he<q;he++){const Le=O.getViewport(he);l.set(o.x*Le.x,o.y*Le.y,o.x*Le.z,o.y*Le.w),te.viewport(l),O.updateMatrices(ce,he),i=O.getFrustum(),P(I,k,O.camera,ce,this.type)}O.isPointLightShadow!==!0&&this.type===Hi&&M(O,k),O.needsUpdate=!1}p=this.type,y.needsUpdate=!1,t.setRenderTarget(ae,E,R)};function M(D,I){const k=e.update(T);_.defines.VSM_SAMPLES!==D.blurSamples&&(_.defines.VSM_SAMPLES=D.blurSamples,x.defines.VSM_SAMPLES=D.blurSamples,_.needsUpdate=!0,x.needsUpdate=!0),D.mapPass===null&&(D.mapPass=new Or(s.x,s.y)),_.uniforms.shadow_pass.value=D.map.texture,_.uniforms.resolution.value=D.mapSize,_.uniforms.radius.value=D.radius,t.setRenderTarget(D.mapPass),t.clear(),t.renderBufferDirect(I,null,k,_,T,null),x.uniforms.shadow_pass.value=D.mapPass.texture,x.uniforms.resolution.value=D.mapSize,x.uniforms.radius.value=D.radius,t.setRenderTarget(D.map),t.clear(),t.renderBufferDirect(I,null,k,x,T,null)}function S(D,I,k,ae){let E=null;const R=k.isPointLight===!0?D.customDistanceMaterial:D.customDepthMaterial;if(R!==void 0)E=R;else if(E=k.isPointLight===!0?h:c,t.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const te=E.uuid,ie=I.uuid;let re=d[te];re===void 0&&(re={},d[te]=re);let _e=re[ie];_e===void 0&&(_e=E.clone(),re[ie]=_e,I.addEventListener("dispose",z)),E=_e}if(E.visible=I.visible,E.wireframe=I.wireframe,ae===Hi?E.side=I.shadowSide!==null?I.shadowSide:I.side:E.side=I.shadowSide!==null?I.shadowSide:g[I.side],E.alphaMap=I.alphaMap,E.alphaTest=I.alphaTest,E.map=I.map,E.clipShadows=I.clipShadows,E.clippingPlanes=I.clippingPlanes,E.clipIntersection=I.clipIntersection,E.displacementMap=I.displacementMap,E.displacementScale=I.displacementScale,E.displacementBias=I.displacementBias,E.wireframeLinewidth=I.wireframeLinewidth,E.linewidth=I.linewidth,k.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const te=t.properties.get(E);te.light=k}return E}function P(D,I,k,ae,E){if(D.visible===!1)return;if(D.layers.test(I.layers)&&(D.isMesh||D.isLine||D.isPoints)&&(D.castShadow||D.receiveShadow&&E===Hi)&&(!D.frustumCulled||i.intersectsObject(D))){D.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,D.matrixWorld);const ie=e.update(D),re=D.material;if(Array.isArray(re)){const _e=ie.groups;for(let j=0,ce=_e.length;j<ce;j++){const O=_e[j],le=re[O.materialIndex];if(le&&le.visible){const q=S(D,le,ae,E);D.onBeforeShadow(t,D,I,k,ie,q,O),t.renderBufferDirect(k,null,ie,q,D,O),D.onAfterShadow(t,D,I,k,ie,q,O)}}}else if(re.visible){const _e=S(D,re,ae,E);D.onBeforeShadow(t,D,I,k,ie,_e,null),t.renderBufferDirect(k,null,ie,_e,D,null),D.onAfterShadow(t,D,I,k,ie,_e,null)}}const te=D.children;for(let ie=0,re=te.length;ie<re;ie++)P(te[ie],I,k,ae,E)}function z(D){D.target.removeEventListener("dispose",z);for(const k in d){const ae=d[k],E=D.target.uuid;E in ae&&(ae[E].dispose(),delete ae[E])}}}const KC={[Xf]:Zf,[jf]:Kf,[qf]:$f,[yo]:Yf,[Zf]:Xf,[Kf]:jf,[$f]:qf,[Yf]:yo};function $C(t){function e(){let V=!1;const Pe=new Ft;let se=null;const fe=new Ft(0,0,0,0);return{setMask:function(Ae){se!==Ae&&!V&&(t.colorMask(Ae,Ae,Ae,Ae),se=Ae)},setLocked:function(Ae){V=Ae},setClear:function(Ae,Re,ft,Ut,on){on===!0&&(Ae*=Ut,Re*=Ut,ft*=Ut),Pe.set(Ae,Re,ft,Ut),fe.equals(Pe)===!1&&(t.clearColor(Ae,Re,ft,Ut),fe.copy(Pe))},reset:function(){V=!1,se=null,fe.set(-1,0,0,0)}}}function n(){let V=!1,Pe=!1,se=null,fe=null,Ae=null;return{setReversed:function(Re){Pe=Re},setTest:function(Re){Re?de(t.DEPTH_TEST):Me(t.DEPTH_TEST)},setMask:function(Re){se!==Re&&!V&&(t.depthMask(Re),se=Re)},setFunc:function(Re){if(Pe&&(Re=KC[Re]),fe!==Re){switch(Re){case Xf:t.depthFunc(t.NEVER);break;case Zf:t.depthFunc(t.ALWAYS);break;case jf:t.depthFunc(t.LESS);break;case yo:t.depthFunc(t.LEQUAL);break;case qf:t.depthFunc(t.EQUAL);break;case Yf:t.depthFunc(t.GEQUAL);break;case Kf:t.depthFunc(t.GREATER);break;case $f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=Re}},setLocked:function(Re){V=Re},setClear:function(Re){Ae!==Re&&(t.clearDepth(Re),Ae=Re)},reset:function(){V=!1,se=null,fe=null,Ae=null}}}function i(){let V=!1,Pe=null,se=null,fe=null,Ae=null,Re=null,ft=null,Ut=null,on=null;return{setTest:function(_t){V||(_t?de(t.STENCIL_TEST):Me(t.STENCIL_TEST))},setMask:function(_t){Pe!==_t&&!V&&(t.stencilMask(_t),Pe=_t)},setFunc:function(_t,an,Nn){(se!==_t||fe!==an||Ae!==Nn)&&(t.stencilFunc(_t,an,Nn),se=_t,fe=an,Ae=Nn)},setOp:function(_t,an,Nn){(Re!==_t||ft!==an||Ut!==Nn)&&(t.stencilOp(_t,an,Nn),Re=_t,ft=an,Ut=Nn)},setLocked:function(_t){V=_t},setClear:function(_t){on!==_t&&(t.clearStencil(_t),on=_t)},reset:function(){V=!1,Pe=null,se=null,fe=null,Ae=null,Re=null,ft=null,Ut=null,on=null}}}const s=new e,o=new n,l=new i,c=new WeakMap,h=new WeakMap;let d={},m={},g=new WeakMap,_=[],x=null,w=!1,T=null,y=null,p=null,M=null,S=null,P=null,z=null,D=new St(0,0,0),I=0,k=!1,ae=null,E=null,R=null,te=null,ie=null;const re=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let _e=!1,j=0;const ce=t.getParameter(t.VERSION);ce.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ce)[1]),_e=j>=1):ce.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),_e=j>=2);let O=null,le={};const q=t.getParameter(t.SCISSOR_BOX),he=t.getParameter(t.VIEWPORT),Le=new Ft().fromArray(q),ke=new Ft().fromArray(he);function Q(V,Pe,se,fe){const Ae=new Uint8Array(4),Re=t.createTexture();t.bindTexture(V,Re),t.texParameteri(V,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(V,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ft=0;ft<se;ft++)V===t.TEXTURE_3D||V===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,Ae):t.texImage2D(Pe+ft,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ae);return Re}const oe={};oe[t.TEXTURE_2D]=Q(t.TEXTURE_2D,t.TEXTURE_2D,1),oe[t.TEXTURE_CUBE_MAP]=Q(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[t.TEXTURE_2D_ARRAY]=Q(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),oe[t.TEXTURE_3D]=Q(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),l.setClear(0),de(t.DEPTH_TEST),o.setFunc(yo),st(!1),lt(U_),de(t.CULL_FACE),B(br);function de(V){d[V]!==!0&&(t.enable(V),d[V]=!0)}function Me(V){d[V]!==!1&&(t.disable(V),d[V]=!1)}function Fe(V,Pe){return m[V]!==Pe?(t.bindFramebuffer(V,Pe),m[V]=Pe,V===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=Pe),V===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function Be(V,Pe){let se=_,fe=!1;if(V){se=g.get(Pe),se===void 0&&(se=[],g.set(Pe,se));const Ae=V.textures;if(se.length!==Ae.length||se[0]!==t.COLOR_ATTACHMENT0){for(let Re=0,ft=Ae.length;Re<ft;Re++)se[Re]=t.COLOR_ATTACHMENT0+Re;se.length=Ae.length,fe=!0}}else se[0]!==t.BACK&&(se[0]=t.BACK,fe=!0);fe&&t.drawBuffers(se)}function rt(V){return x!==V?(t.useProgram(V),x=V,!0):!1}const pt={[is]:t.FUNC_ADD,[hE]:t.FUNC_SUBTRACT,[fE]:t.FUNC_REVERSE_SUBTRACT};pt[dE]=t.MIN,pt[pE]=t.MAX;const et={[mE]:t.ZERO,[_E]:t.ONE,[gE]:t.SRC_COLOR,[Gf]:t.SRC_ALPHA,[EE]:t.SRC_ALPHA_SATURATE,[SE]:t.DST_COLOR,[yE]:t.DST_ALPHA,[vE]:t.ONE_MINUS_SRC_COLOR,[Wf]:t.ONE_MINUS_SRC_ALPHA,[ME]:t.ONE_MINUS_DST_COLOR,[xE]:t.ONE_MINUS_DST_ALPHA,[wE]:t.CONSTANT_COLOR,[TE]:t.ONE_MINUS_CONSTANT_COLOR,[AE]:t.CONSTANT_ALPHA,[CE]:t.ONE_MINUS_CONSTANT_ALPHA};function B(V,Pe,se,fe,Ae,Re,ft,Ut,on,_t){if(V===br){w===!0&&(Me(t.BLEND),w=!1);return}if(w===!1&&(de(t.BLEND),w=!0),V!==cE){if(V!==T||_t!==k){if((y!==is||S!==is)&&(t.blendEquation(t.FUNC_ADD),y=is,S=is),_t)switch(V){case lo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vf:t.blendFunc(t.ONE,t.ONE);break;case O_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case F_:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case lo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Vf:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case O_:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case F_:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}p=null,M=null,P=null,z=null,D.set(0,0,0),I=0,T=V,k=_t}return}Ae=Ae||Pe,Re=Re||se,ft=ft||fe,(Pe!==y||Ae!==S)&&(t.blendEquationSeparate(pt[Pe],pt[Ae]),y=Pe,S=Ae),(se!==p||fe!==M||Re!==P||ft!==z)&&(t.blendFuncSeparate(et[se],et[fe],et[Re],et[ft]),p=se,M=fe,P=Re,z=ft),(Ut.equals(D)===!1||on!==I)&&(t.blendColor(Ut.r,Ut.g,Ut.b,on),D.copy(Ut),I=on),T=V,k=!1}function Jt(V,Pe){V.side===Wi?Me(t.CULL_FACE):de(t.CULL_FACE);let se=V.side===In;Pe&&(se=!se),st(se),V.blending===lo&&V.transparent===!1?B(br):B(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const fe=V.stencilWrite;l.setTest(fe),fe&&(l.setMask(V.stencilWriteMask),l.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),l.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ot(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?de(t.SAMPLE_ALPHA_TO_COVERAGE):Me(t.SAMPLE_ALPHA_TO_COVERAGE)}function st(V){ae!==V&&(V?t.frontFace(t.CW):t.frontFace(t.CCW),ae=V)}function lt(V){V!==aE?(de(t.CULL_FACE),V!==E&&(V===U_?t.cullFace(t.BACK):V===lE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Me(t.CULL_FACE),E=V}function He(V){V!==R&&(_e&&t.lineWidth(V),R=V)}function ot(V,Pe,se){V?(de(t.POLYGON_OFFSET_FILL),(te!==Pe||ie!==se)&&(t.polygonOffset(Pe,se),te=Pe,ie=se)):Me(t.POLYGON_OFFSET_FILL)}function Ge(V){V?de(t.SCISSOR_TEST):Me(t.SCISSOR_TEST)}function N(V){V===void 0&&(V=t.TEXTURE0+re-1),O!==V&&(t.activeTexture(V),O=V)}function C(V,Pe,se){se===void 0&&(O===null?se=t.TEXTURE0+re-1:se=O);let fe=le[se];fe===void 0&&(fe={type:void 0,texture:void 0},le[se]=fe),(fe.type!==V||fe.texture!==Pe)&&(O!==se&&(t.activeTexture(se),O=se),t.bindTexture(V,Pe||oe[V]),fe.type=V,fe.texture=Pe)}function Z(){const V=le[O];V!==void 0&&V.type!==void 0&&(t.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function U(){try{t.compressedTexImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function H(){try{t.texSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ue(){try{t.texSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qe(){try{t.texStorage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{t.texStorage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Te(){try{t.texImage2D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ve(){try{t.texImage3D.apply(t,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ze(V){Le.equals(V)===!1&&(t.scissor(V.x,V.y,V.z,V.w),Le.copy(V))}function be(V){ke.equals(V)===!1&&(t.viewport(V.x,V.y,V.z,V.w),ke.copy(V))}function ut(V,Pe){let se=h.get(Pe);se===void 0&&(se=new WeakMap,h.set(Pe,se));let fe=se.get(V);fe===void 0&&(fe=t.getUniformBlockIndex(Pe,V.name),se.set(V,fe))}function Ye(V,Pe){const fe=h.get(Pe).get(V);c.get(Pe)!==fe&&(t.uniformBlockBinding(Pe,fe,V.__bindingPointIndex),c.set(Pe,fe))}function yt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},O=null,le={},m={},g=new WeakMap,_=[],x=null,w=!1,T=null,y=null,p=null,M=null,S=null,P=null,z=null,D=new St(0,0,0),I=0,k=!1,ae=null,E=null,R=null,te=null,ie=null,Le.set(0,0,t.canvas.width,t.canvas.height),ke.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),l.reset()}return{buffers:{color:s,depth:o,stencil:l},enable:de,disable:Me,bindFramebuffer:Fe,drawBuffers:Be,useProgram:rt,setBlending:B,setMaterial:Jt,setFlipSided:st,setCullFace:lt,setLineWidth:He,setPolygonOffset:ot,setScissorTest:Ge,activeTexture:N,bindTexture:C,unbindTexture:Z,compressedTexImage2D:ne,compressedTexImage3D:U,texImage2D:Te,texImage3D:Ve,updateUBOMapping:ut,uniformBlockBinding:Ye,texStorage2D:qe,texStorage3D:ve,texSubImage2D:H,texSubImage3D:ue,compressedTexSubImage2D:pe,compressedTexSubImage3D:ye,scissor:Ze,viewport:be,reset:yt}}function Cg(t,e,n,i){const s=QC(i);switch(n){case ty:return t*e;case iy:return t*e;case ry:return t*e*2;case sy:return t*e/s.components*s.byteLength;case Lp:return t*e/s.components*s.byteLength;case oy:return t*e*2/s.components*s.byteLength;case bp:return t*e*2/s.components*s.byteLength;case ny:return t*e*3/s.components*s.byteLength;case Qn:return t*e*4/s.components*s.byteLength;case Ip:return t*e*4/s.components*s.byteLength;case du:case pu:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case mu:case _u:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case id:case sd:return Math.max(t,16)*Math.max(e,8)/4;case nd:case rd:return Math.max(t,8)*Math.max(e,8)/2;case od:case ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ld:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ud:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case hd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case fd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case dd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case pd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case md:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case _d:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case gd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case vd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case yd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case xd:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Sd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Md:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case gu:case Ed:case wd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case ay:case Td:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Ad:case Cd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function QC(t){switch(t){case er:case Q0:return{byteLength:1,components:1};case Fa:case J0:case Po:return{byteLength:2,components:1};case Pp:case Rp:return{byteLength:2,components:4};case gs:case Cp:case Pi:return{byteLength:4,components:1};case ey:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function JC(t,e,n,i,s,o,l){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Je,m=new WeakMap;let g;const _=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,C){return x?new OffscreenCanvas(N,C):Ku("canvas")}function T(N,C,Z){let ne=1;const U=Ge(N);if((U.width>Z||U.height>Z)&&(ne=Z/Math.max(U.width,U.height)),ne<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const H=Math.floor(ne*U.width),ue=Math.floor(ne*U.height);g===void 0&&(g=w(H,ue));const pe=C?w(H,ue):g;return pe.width=H,pe.height=ue,pe.getContext("2d").drawImage(N,0,0,H,ue),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+U.width+"x"+U.height+") to ("+H+"x"+ue+")."),pe}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+U.width+"x"+U.height+")."),N;return N}function y(N){return N.generateMipmaps&&N.minFilter!==Pn&&N.minFilter!==vn}function p(N){t.generateMipmap(N)}function M(N,C,Z,ne,U=!1){if(N!==null){if(t[N]!==void 0)return t[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let H=C;if(C===t.RED&&(Z===t.FLOAT&&(H=t.R32F),Z===t.HALF_FLOAT&&(H=t.R16F),Z===t.UNSIGNED_BYTE&&(H=t.R8)),C===t.RED_INTEGER&&(Z===t.UNSIGNED_BYTE&&(H=t.R8UI),Z===t.UNSIGNED_SHORT&&(H=t.R16UI),Z===t.UNSIGNED_INT&&(H=t.R32UI),Z===t.BYTE&&(H=t.R8I),Z===t.SHORT&&(H=t.R16I),Z===t.INT&&(H=t.R32I)),C===t.RG&&(Z===t.FLOAT&&(H=t.RG32F),Z===t.HALF_FLOAT&&(H=t.RG16F),Z===t.UNSIGNED_BYTE&&(H=t.RG8)),C===t.RG_INTEGER&&(Z===t.UNSIGNED_BYTE&&(H=t.RG8UI),Z===t.UNSIGNED_SHORT&&(H=t.RG16UI),Z===t.UNSIGNED_INT&&(H=t.RG32UI),Z===t.BYTE&&(H=t.RG8I),Z===t.SHORT&&(H=t.RG16I),Z===t.INT&&(H=t.RG32I)),C===t.RGB_INTEGER&&(Z===t.UNSIGNED_BYTE&&(H=t.RGB8UI),Z===t.UNSIGNED_SHORT&&(H=t.RGB16UI),Z===t.UNSIGNED_INT&&(H=t.RGB32UI),Z===t.BYTE&&(H=t.RGB8I),Z===t.SHORT&&(H=t.RGB16I),Z===t.INT&&(H=t.RGB32I)),C===t.RGBA_INTEGER&&(Z===t.UNSIGNED_BYTE&&(H=t.RGBA8UI),Z===t.UNSIGNED_SHORT&&(H=t.RGBA16UI),Z===t.UNSIGNED_INT&&(H=t.RGBA32UI),Z===t.BYTE&&(H=t.RGBA8I),Z===t.SHORT&&(H=t.RGBA16I),Z===t.INT&&(H=t.RGBA32I)),C===t.RGB&&Z===t.UNSIGNED_INT_5_9_9_9_REV&&(H=t.RGB9_E5),C===t.RGBA){const ue=U?Zu:Mt.getTransfer(ne);Z===t.FLOAT&&(H=t.RGBA32F),Z===t.HALF_FLOAT&&(H=t.RGBA16F),Z===t.UNSIGNED_BYTE&&(H=ue===Rt?t.SRGB8_ALPHA8:t.RGBA8),Z===t.UNSIGNED_SHORT_4_4_4_4&&(H=t.RGBA4),Z===t.UNSIGNED_SHORT_5_5_5_1&&(H=t.RGB5_A1)}return(H===t.R16F||H===t.R32F||H===t.RG16F||H===t.RG32F||H===t.RGBA16F||H===t.RGBA32F)&&e.get("EXT_color_buffer_float"),H}function S(N,C){let Z;return N?C===null||C===gs||C===Mo?Z=t.DEPTH24_STENCIL8:C===Pi?Z=t.DEPTH32F_STENCIL8:C===Fa&&(Z=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===gs||C===Mo?Z=t.DEPTH_COMPONENT24:C===Pi?Z=t.DEPTH_COMPONENT32F:C===Fa&&(Z=t.DEPTH_COMPONENT16),Z}function P(N,C){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pn&&N.minFilter!==vn?Math.log2(Math.max(C.width,C.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?C.mipmaps.length:1}function z(N){const C=N.target;C.removeEventListener("dispose",z),I(C),C.isVideoTexture&&m.delete(C)}function D(N){const C=N.target;C.removeEventListener("dispose",D),ae(C)}function I(N){const C=i.get(N);if(C.__webglInit===void 0)return;const Z=N.source,ne=_.get(Z);if(ne){const U=ne[C.__cacheKey];U.usedTimes--,U.usedTimes===0&&k(N),Object.keys(ne).length===0&&_.delete(Z)}i.remove(N)}function k(N){const C=i.get(N);t.deleteTexture(C.__webglTexture);const Z=N.source,ne=_.get(Z);delete ne[C.__cacheKey],l.memory.textures--}function ae(N){const C=i.get(N);if(N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(C.__webglFramebuffer[ne]))for(let U=0;U<C.__webglFramebuffer[ne].length;U++)t.deleteFramebuffer(C.__webglFramebuffer[ne][U]);else t.deleteFramebuffer(C.__webglFramebuffer[ne]);C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer[ne])}else{if(Array.isArray(C.__webglFramebuffer))for(let ne=0;ne<C.__webglFramebuffer.length;ne++)t.deleteFramebuffer(C.__webglFramebuffer[ne]);else t.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&t.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&t.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let ne=0;ne<C.__webglColorRenderbuffer.length;ne++)C.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(C.__webglColorRenderbuffer[ne]);C.__webglDepthRenderbuffer&&t.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const Z=N.textures;for(let ne=0,U=Z.length;ne<U;ne++){const H=i.get(Z[ne]);H.__webglTexture&&(t.deleteTexture(H.__webglTexture),l.memory.textures--),i.remove(Z[ne])}i.remove(N)}let E=0;function R(){E=0}function te(){const N=E;return N>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+s.maxTextures),E+=1,N}function ie(N){const C=[];return C.push(N.wrapS),C.push(N.wrapT),C.push(N.wrapR||0),C.push(N.magFilter),C.push(N.minFilter),C.push(N.anisotropy),C.push(N.internalFormat),C.push(N.format),C.push(N.type),C.push(N.generateMipmaps),C.push(N.premultiplyAlpha),C.push(N.flipY),C.push(N.unpackAlignment),C.push(N.colorSpace),C.join()}function re(N,C){const Z=i.get(N);if(N.isVideoTexture&&He(N),N.isRenderTargetTexture===!1&&N.version>0&&Z.__version!==N.version){const ne=N.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Z,N,C);return}}n.bindTexture(t.TEXTURE_2D,Z.__webglTexture,t.TEXTURE0+C)}function _e(N,C){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){ke(Z,N,C);return}n.bindTexture(t.TEXTURE_2D_ARRAY,Z.__webglTexture,t.TEXTURE0+C)}function j(N,C){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){ke(Z,N,C);return}n.bindTexture(t.TEXTURE_3D,Z.__webglTexture,t.TEXTURE0+C)}function ce(N,C){const Z=i.get(N);if(N.version>0&&Z.__version!==N.version){Q(Z,N,C);return}n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture,t.TEXTURE0+C)}const O={[ed]:t.REPEAT,[pi]:t.CLAMP_TO_EDGE,[td]:t.MIRRORED_REPEAT},le={[Pn]:t.NEAREST,[FE]:t.NEAREST_MIPMAP_NEAREST,[Ll]:t.NEAREST_MIPMAP_LINEAR,[vn]:t.LINEAR,[mh]:t.LINEAR_MIPMAP_NEAREST,[ls]:t.LINEAR_MIPMAP_LINEAR},q={[VE]:t.NEVER,[qE]:t.ALWAYS,[GE]:t.LESS,[ly]:t.LEQUAL,[WE]:t.EQUAL,[jE]:t.GEQUAL,[XE]:t.GREATER,[ZE]:t.NOTEQUAL};function he(N,C){if(C.type===Pi&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===vn||C.magFilter===mh||C.magFilter===Ll||C.magFilter===ls||C.minFilter===vn||C.minFilter===mh||C.minFilter===Ll||C.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(N,t.TEXTURE_WRAP_S,O[C.wrapS]),t.texParameteri(N,t.TEXTURE_WRAP_T,O[C.wrapT]),(N===t.TEXTURE_3D||N===t.TEXTURE_2D_ARRAY)&&t.texParameteri(N,t.TEXTURE_WRAP_R,O[C.wrapR]),t.texParameteri(N,t.TEXTURE_MAG_FILTER,le[C.magFilter]),t.texParameteri(N,t.TEXTURE_MIN_FILTER,le[C.minFilter]),C.compareFunction&&(t.texParameteri(N,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(N,t.TEXTURE_COMPARE_FUNC,q[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Pn||C.minFilter!==Ll&&C.minFilter!==ls||C.type===Pi&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(N,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,s.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function Le(N,C){let Z=!1;N.__webglInit===void 0&&(N.__webglInit=!0,C.addEventListener("dispose",z));const ne=C.source;let U=_.get(ne);U===void 0&&(U={},_.set(ne,U));const H=ie(C);if(H!==N.__cacheKey){U[H]===void 0&&(U[H]={texture:t.createTexture(),usedTimes:0},l.memory.textures++,Z=!0),U[H].usedTimes++;const ue=U[N.__cacheKey];ue!==void 0&&(U[N.__cacheKey].usedTimes--,ue.usedTimes===0&&k(C)),N.__cacheKey=H,N.__webglTexture=U[H].texture}return Z}function ke(N,C,Z){let ne=t.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),C.isData3DTexture&&(ne=t.TEXTURE_3D);const U=Le(N,C),H=C.source;n.bindTexture(ne,N.__webglTexture,t.TEXTURE0+Z);const ue=i.get(H);if(H.version!==ue.__version||U===!0){n.activeTexture(t.TEXTURE0+Z);const pe=Mt.getPrimaries(Mt.workingColorSpace),ye=C.colorSpace===xr?null:Mt.getPrimaries(C.colorSpace),qe=C.colorSpace===xr||pe===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let ve=T(C.image,!1,s.maxTextureSize);ve=ot(C,ve);const Te=o.convert(C.format,C.colorSpace),Ve=o.convert(C.type);let Ze=M(C.internalFormat,Te,Ve,C.colorSpace,C.isVideoTexture);he(ne,C);let be;const ut=C.mipmaps,Ye=C.isVideoTexture!==!0,yt=ue.__version===void 0||U===!0,V=H.dataReady,Pe=P(C,ve);if(C.isDepthTexture)Ze=S(C.format===Eo,C.type),yt&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Ze,ve.width,ve.height):n.texImage2D(t.TEXTURE_2D,0,Ze,ve.width,ve.height,0,Te,Ve,null));else if(C.isDataTexture)if(ut.length>0){Ye&&yt&&n.texStorage2D(t.TEXTURE_2D,Pe,Ze,ut[0].width,ut[0].height);for(let se=0,fe=ut.length;se<fe;se++)be=ut[se],Ye?V&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Te,Ve,be.data):n.texImage2D(t.TEXTURE_2D,se,Ze,be.width,be.height,0,Te,Ve,be.data);C.generateMipmaps=!1}else Ye?(yt&&n.texStorage2D(t.TEXTURE_2D,Pe,Ze,ve.width,ve.height),V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve.width,ve.height,Te,Ve,ve.data)):n.texImage2D(t.TEXTURE_2D,0,Ze,ve.width,ve.height,0,Te,Ve,ve.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Ye&&yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ze,ut[0].width,ut[0].height,ve.depth);for(let se=0,fe=ut.length;se<fe;se++)if(be=ut[se],C.format!==Qn)if(Te!==null)if(Ye){if(V)if(C.layerUpdates.size>0){const Ae=Cg(be.width,be.height,C.format,C.type);for(const Re of C.layerUpdates){const ft=be.data.subarray(Re*Ae/be.data.BYTES_PER_ELEMENT,(Re+1)*Ae/be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,Re,be.width,be.height,1,Te,ft,0,0)}C.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ve.depth,Te,be.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,se,Ze,be.width,be.height,ve.depth,0,be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?V&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,se,0,0,0,be.width,be.height,ve.depth,Te,Ve,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,se,Ze,be.width,be.height,ve.depth,0,Te,Ve,be.data)}else{Ye&&yt&&n.texStorage2D(t.TEXTURE_2D,Pe,Ze,ut[0].width,ut[0].height);for(let se=0,fe=ut.length;se<fe;se++)be=ut[se],C.format!==Qn?Te!==null?Ye?V&&n.compressedTexSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Te,be.data):n.compressedTexImage2D(t.TEXTURE_2D,se,Ze,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?V&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,be.width,be.height,Te,Ve,be.data):n.texImage2D(t.TEXTURE_2D,se,Ze,be.width,be.height,0,Te,Ve,be.data)}else if(C.isDataArrayTexture)if(Ye){if(yt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Ze,ve.width,ve.height,ve.depth),V)if(C.layerUpdates.size>0){const se=Cg(ve.width,ve.height,C.format,C.type);for(const fe of C.layerUpdates){const Ae=ve.data.subarray(fe*se/ve.data.BYTES_PER_ELEMENT,(fe+1)*se/ve.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,ve.width,ve.height,1,Te,Ve,Ae)}C.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Te,Ve,ve.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ze,ve.width,ve.height,ve.depth,0,Te,Ve,ve.data);else if(C.isData3DTexture)Ye?(yt&&n.texStorage3D(t.TEXTURE_3D,Pe,Ze,ve.width,ve.height,ve.depth),V&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Te,Ve,ve.data)):n.texImage3D(t.TEXTURE_3D,0,Ze,ve.width,ve.height,ve.depth,0,Te,Ve,ve.data);else if(C.isFramebufferTexture){if(yt)if(Ye)n.texStorage2D(t.TEXTURE_2D,Pe,Ze,ve.width,ve.height);else{let se=ve.width,fe=ve.height;for(let Ae=0;Ae<Pe;Ae++)n.texImage2D(t.TEXTURE_2D,Ae,Ze,se,fe,0,Te,Ve,null),se>>=1,fe>>=1}}else if(ut.length>0){if(Ye&&yt){const se=Ge(ut[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Ze,se.width,se.height)}for(let se=0,fe=ut.length;se<fe;se++)be=ut[se],Ye?V&&n.texSubImage2D(t.TEXTURE_2D,se,0,0,Te,Ve,be):n.texImage2D(t.TEXTURE_2D,se,Ze,Te,Ve,be);C.generateMipmaps=!1}else if(Ye){if(yt){const se=Ge(ve);n.texStorage2D(t.TEXTURE_2D,Pe,Ze,se.width,se.height)}V&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Te,Ve,ve)}else n.texImage2D(t.TEXTURE_2D,0,Ze,Te,Ve,ve);y(C)&&p(ne),ue.__version=H.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function Q(N,C,Z){if(C.image.length!==6)return;const ne=Le(N,C),U=C.source;n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+Z);const H=i.get(U);if(U.version!==H.__version||ne===!0){n.activeTexture(t.TEXTURE0+Z);const ue=Mt.getPrimaries(Mt.workingColorSpace),pe=C.colorSpace===xr?null:Mt.getPrimaries(C.colorSpace),ye=C.colorSpace===xr||ue===pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,C.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,C.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const qe=C.isCompressedTexture||C.image[0].isCompressedTexture,ve=C.image[0]&&C.image[0].isDataTexture,Te=[];for(let fe=0;fe<6;fe++)!qe&&!ve?Te[fe]=T(C.image[fe],!0,s.maxCubemapSize):Te[fe]=ve?C.image[fe].image:C.image[fe],Te[fe]=ot(C,Te[fe]);const Ve=Te[0],Ze=o.convert(C.format,C.colorSpace),be=o.convert(C.type),ut=M(C.internalFormat,Ze,be,C.colorSpace),Ye=C.isVideoTexture!==!0,yt=H.__version===void 0||ne===!0,V=U.dataReady;let Pe=P(C,Ve);he(t.TEXTURE_CUBE_MAP,C);let se;if(qe){Ye&&yt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,ut,Ve.width,Ve.height);for(let fe=0;fe<6;fe++){se=Te[fe].mipmaps;for(let Ae=0;Ae<se.length;Ae++){const Re=se[Ae];C.format!==Qn?Ze!==null?Ye?V&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Re.width,Re.height,Ze,Re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,ut,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,0,0,Re.width,Re.height,Ze,be,Re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae,ut,Re.width,Re.height,0,Ze,be,Re.data)}}}else{if(se=C.mipmaps,Ye&&yt){se.length>0&&Pe++;const fe=Ge(Te[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,ut,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ve){Ye?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Te[fe].width,Te[fe].height,Ze,be,Te[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Te[fe].width,Te[fe].height,0,Ze,be,Te[fe].data);for(let Ae=0;Ae<se.length;Ae++){const ft=se[Ae].image[fe].image;Ye?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,ft.width,ft.height,Ze,be,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,ut,ft.width,ft.height,0,Ze,be,ft.data)}}else{Ye?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Ze,be,Te[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,ut,Ze,be,Te[fe]);for(let Ae=0;Ae<se.length;Ae++){const Re=se[Ae];Ye?V&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,0,0,Ze,be,Re.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ae+1,ut,Ze,be,Re.image[fe])}}}y(C)&&p(t.TEXTURE_CUBE_MAP),H.__version=U.version,C.onUpdate&&C.onUpdate(C)}N.__version=C.version}function oe(N,C,Z,ne,U,H){const ue=o.convert(Z.format,Z.colorSpace),pe=o.convert(Z.type),ye=M(Z.internalFormat,ue,pe,Z.colorSpace);if(!i.get(C).__hasExternalTextures){const ve=Math.max(1,C.width>>H),Te=Math.max(1,C.height>>H);U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY?n.texImage3D(U,H,ye,ve,Te,C.depth,0,ue,pe,null):n.texImage2D(U,H,ye,ve,Te,0,ue,pe,null)}n.bindFramebuffer(t.FRAMEBUFFER,N),lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,U,i.get(Z).__webglTexture,0,st(C)):(U===t.TEXTURE_2D||U>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&U<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,U,i.get(Z).__webglTexture,H),n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(N,C,Z){if(t.bindRenderbuffer(t.RENDERBUFFER,N),C.depthBuffer){const ne=C.depthTexture,U=ne&&ne.isDepthTexture?ne.type:null,H=S(C.stencilBuffer,U),ue=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,pe=st(C);lt(C)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,pe,H,C.width,C.height):Z?t.renderbufferStorageMultisample(t.RENDERBUFFER,pe,H,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,H,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,N)}else{const ne=C.textures;for(let U=0;U<ne.length;U++){const H=ne[U],ue=o.convert(H.format,H.colorSpace),pe=o.convert(H.type),ye=M(H.internalFormat,ue,pe,H.colorSpace),qe=st(C);Z&&lt(C)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,qe,ye,C.width,C.height):lt(C)?c.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,qe,ye,C.width,C.height):t.renderbufferStorage(t.RENDERBUFFER,ye,C.width,C.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(N,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,N),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),re(C.depthTexture,0);const ne=i.get(C.depthTexture).__webglTexture,U=st(C);if(C.depthTexture.format===uo)lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0,U):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ne,0);else if(C.depthTexture.format===Eo)lt(C)?c.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0,U):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Fe(N){const C=i.get(N),Z=N.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==N.depthTexture){const ne=N.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),ne){const U=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,ne.removeEventListener("dispose",U)};ne.addEventListener("dispose",U),C.__depthDisposeCallback=U}C.__boundDepthTexture=ne}if(N.depthTexture&&!C.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Me(C.__webglFramebuffer,N)}else if(Z){C.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer[ne]),C.__webglDepthbuffer[ne]===void 0)C.__webglDepthbuffer[ne]=t.createRenderbuffer(),de(C.__webglDepthbuffer[ne],N,!1);else{const U=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,H=C.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,H),t.framebufferRenderbuffer(t.FRAMEBUFFER,U,t.RENDERBUFFER,H)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=t.createRenderbuffer(),de(C.__webglDepthbuffer,N,!1);else{const ne=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,U=C.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,U),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,U)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(N,C,Z){const ne=i.get(N);C!==void 0&&oe(ne.__webglFramebuffer,N,N.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),Z!==void 0&&Fe(N)}function rt(N){const C=N.texture,Z=i.get(N),ne=i.get(C);N.addEventListener("dispose",D);const U=N.textures,H=N.isWebGLCubeRenderTarget===!0,ue=U.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=C.version,l.memory.textures++),H){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ye=0;ye<C.mipmaps.length;ye++)Z.__webglFramebuffer[pe][ye]=t.createFramebuffer()}else Z.__webglFramebuffer[pe]=t.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<C.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=t.createFramebuffer()}else Z.__webglFramebuffer=t.createFramebuffer();if(ue)for(let pe=0,ye=U.length;pe<ye;pe++){const qe=i.get(U[pe]);qe.__webglTexture===void 0&&(qe.__webglTexture=t.createTexture(),l.memory.textures++)}if(N.samples>0&&lt(N)===!1){Z.__webglMultisampledFramebuffer=t.createFramebuffer(),Z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<U.length;pe++){const ye=U[pe];Z.__webglColorRenderbuffer[pe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const qe=o.convert(ye.format,ye.colorSpace),ve=o.convert(ye.type),Te=M(ye.internalFormat,qe,ve,ye.colorSpace,N.isXRRenderTarget===!0),Ve=st(N);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ve,Te,N.width,N.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+pe,t.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}t.bindRenderbuffer(t.RENDERBUFFER,null),N.depthBuffer&&(Z.__webglDepthRenderbuffer=t.createRenderbuffer(),de(Z.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(H){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),he(t.TEXTURE_CUBE_MAP,C);for(let pe=0;pe<6;pe++)if(C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)oe(Z.__webglFramebuffer[pe][ye],N,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ye);else oe(Z.__webglFramebuffer[pe],N,C,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);y(C)&&p(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let pe=0,ye=U.length;pe<ye;pe++){const qe=U[pe],ve=i.get(qe);n.bindTexture(t.TEXTURE_2D,ve.__webglTexture),he(t.TEXTURE_2D,qe),oe(Z.__webglFramebuffer,N,qe,t.COLOR_ATTACHMENT0+pe,t.TEXTURE_2D,0),y(qe)&&p(t.TEXTURE_2D)}n.unbindTexture()}else{let pe=t.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(pe=N.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(pe,ne.__webglTexture),he(pe,C),C.mipmaps&&C.mipmaps.length>0)for(let ye=0;ye<C.mipmaps.length;ye++)oe(Z.__webglFramebuffer[ye],N,C,t.COLOR_ATTACHMENT0,pe,ye);else oe(Z.__webglFramebuffer,N,C,t.COLOR_ATTACHMENT0,pe,0);y(C)&&p(pe),n.unbindTexture()}N.depthBuffer&&Fe(N)}function pt(N){const C=N.textures;for(let Z=0,ne=C.length;Z<ne;Z++){const U=C[Z];if(y(U)){const H=N.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ue=i.get(U).__webglTexture;n.bindTexture(H,ue),p(H),n.unbindTexture()}}}const et=[],B=[];function Jt(N){if(N.samples>0){if(lt(N)===!1){const C=N.textures,Z=N.width,ne=N.height;let U=t.COLOR_BUFFER_BIT;const H=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(N),pe=C.length>1;if(pe)for(let ye=0;ye<C.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ye=0;ye<C.length;ye++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(U|=t.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(U|=t.STENCIL_BUFFER_BIT)),pe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);const qe=i.get(C[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,qe,0)}t.blitFramebuffer(0,0,Z,ne,0,0,Z,ne,U,t.NEAREST),h===!0&&(et.length=0,B.length=0,et.push(t.COLOR_ATTACHMENT0+ye),N.depthBuffer&&N.resolveDepthBuffer===!1&&(et.push(H),B.push(H),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,B)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,et))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),pe)for(let ye=0;ye<C.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ye]);const qe=i.get(C[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,qe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const C=N.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[C])}}}function st(N){return Math.min(s.maxSamples,N.samples)}function lt(N){const C=i.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function He(N){const C=l.render.frame;m.get(N)!==C&&(m.set(N,C),N.update())}function ot(N,C){const Z=N.colorSpace,ne=N.format,U=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||Z!==Br&&Z!==xr&&(Mt.getTransfer(Z)===Rt?(ne!==Qn||U!==er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),C}function Ge(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(d.width=N.naturalWidth||N.width,d.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(d.width=N.displayWidth,d.height=N.displayHeight):(d.width=N.width,d.height=N.height),d}this.allocateTextureUnit=te,this.resetTextureUnits=R,this.setTexture2D=re,this.setTexture2DArray=_e,this.setTexture3D=j,this.setTextureCube=ce,this.rebindTextures=Be,this.setupRenderTarget=rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=lt}function eP(t,e){function n(i,s=xr){let o;const l=Mt.getTransfer(s);if(i===er)return t.UNSIGNED_BYTE;if(i===Pp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rp)return t.UNSIGNED_SHORT_5_5_5_1;if(i===ey)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Q0)return t.BYTE;if(i===J0)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===Cp)return t.INT;if(i===gs)return t.UNSIGNED_INT;if(i===Pi)return t.FLOAT;if(i===Po)return t.HALF_FLOAT;if(i===ty)return t.ALPHA;if(i===ny)return t.RGB;if(i===Qn)return t.RGBA;if(i===iy)return t.LUMINANCE;if(i===ry)return t.LUMINANCE_ALPHA;if(i===uo)return t.DEPTH_COMPONENT;if(i===Eo)return t.DEPTH_STENCIL;if(i===sy)return t.RED;if(i===Lp)return t.RED_INTEGER;if(i===oy)return t.RG;if(i===bp)return t.RG_INTEGER;if(i===Ip)return t.RGBA_INTEGER;if(i===du||i===pu||i===mu||i===_u)if(l===Rt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===du)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_u)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===du)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_u)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===nd||i===id||i===rd||i===sd)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===nd)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===id)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===rd)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===sd)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===od||i===ad||i===ld)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===od||i===ad)return l===Rt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ld)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===ud||i===cd||i===hd||i===fd||i===dd||i===pd||i===md||i===_d||i===gd||i===vd||i===yd||i===xd||i===Sd||i===Md)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===ud)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===cd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===fd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===pd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===md)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===_d)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===vd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===yd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===xd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Sd)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Md)return l===Rt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gu||i===Ed||i===wd)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===gu)return l===Rt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ed)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wd)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ay||i===Td||i===Ad||i===Cd)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===gu)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Td)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ad)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Cd)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Mo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class tP extends fi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $l extends Dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nP={type:"move"};class Xh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $l,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $l,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $l,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,o=null,l=null;const c=this._targetRay,h=this._grip,d=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(d&&e.hand){l=!0;for(const T of e.hand.values()){const y=n.getJointPose(T,i),p=this._getHandJoint(d,T);y!==null&&(p.matrix.fromArray(y.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=y.radius),p.visible=y!==null}const m=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],_=m.position.distanceTo(g.position),x=.02,w=.005;d.inputState.pinching&&_>x+w?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!d.inputState.pinching&&_<=x-w&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(o=n.getPose(e.gripSpace,i),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1));c!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(nP)))}return c!==null&&(c.visible=s!==null),h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new $l;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const iP=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rP=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sP{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const s=new xn,o=e.properties.get(s);o.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nr({vertexShader:iP,fragmentShader:rP,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Jn(new hs(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oP extends Ro{constructor(e,n){super();const i=this;let s=null,o=1,l=null,c="local-floor",h=1,d=null,m=null,g=null,_=null,x=null,w=null;const T=new sP,y=n.getContextAttributes();let p=null,M=null;const S=[],P=[],z=new Je;let D=null;const I=new fi;I.layers.enable(1),I.viewport=new Ft;const k=new fi;k.layers.enable(2),k.viewport=new Ft;const ae=[I,k],E=new tP;E.layers.enable(1),E.layers.enable(2);let R=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Xh,S[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Xh,S[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=S[Q];return oe===void 0&&(oe=new Xh,S[Q]=oe),oe.getHandSpace()};function ie(Q){const oe=P.indexOf(Q.inputSource);if(oe===-1)return;const de=S[oe];de!==void 0&&(de.update(Q.inputSource,Q.frame,d||l),de.dispatchEvent({type:Q.type,data:Q.inputSource}))}function re(){s.removeEventListener("select",ie),s.removeEventListener("selectstart",ie),s.removeEventListener("selectend",ie),s.removeEventListener("squeeze",ie),s.removeEventListener("squeezestart",ie),s.removeEventListener("squeezeend",ie),s.removeEventListener("end",re),s.removeEventListener("inputsourceschange",_e);for(let Q=0;Q<S.length;Q++){const oe=P[Q];oe!==null&&(P[Q]=null,S[Q].disconnect(oe))}R=null,te=null,T.reset(),e.setRenderTarget(p),x=null,_=null,g=null,s=null,M=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){c=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||l},this.setReferenceSpace=function(Q){d=Q},this.getBaseLayer=function(){return _!==null?_:x},this.getBinding=function(){return g},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",ie),s.addEventListener("selectstart",ie),s.addEventListener("selectend",ie),s.addEventListener("squeeze",ie),s.addEventListener("squeezestart",ie),s.addEventListener("squeezeend",ie),s.addEventListener("end",re),s.addEventListener("inputsourceschange",_e),y.xrCompatible!==!0&&await n.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(z),s.renderState.layers===void 0){const oe={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(s,n,oe),s.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new Or(x.framebufferWidth,x.framebufferHeight,{format:Qn,type:er,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let oe=null,de=null,Me=null;y.depth&&(Me=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=y.stencil?Eo:uo,de=y.stencil?Mo:gs);const Fe={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:o};g=new XRWebGLBinding(s,n),_=g.createProjectionLayer(Fe),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),M=new Or(_.textureWidth,_.textureHeight,{format:Qn,type:er,depthTexture:new My(_.textureWidth,_.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(h),d=null,l=await s.requestReferenceSpace(c),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function _e(Q){for(let oe=0;oe<Q.removed.length;oe++){const de=Q.removed[oe],Me=P.indexOf(de);Me>=0&&(P[Me]=null,S[Me].disconnect(de))}for(let oe=0;oe<Q.added.length;oe++){const de=Q.added[oe];let Me=P.indexOf(de);if(Me===-1){for(let Be=0;Be<S.length;Be++)if(Be>=P.length){P.push(de),Me=Be;break}else if(P[Be]===null){P[Be]=de,Me=Be;break}if(Me===-1)break}const Fe=S[Me];Fe&&Fe.connect(de)}}const j=new ee,ce=new ee;function O(Q,oe,de){j.setFromMatrixPosition(oe.matrixWorld),ce.setFromMatrixPosition(de.matrixWorld);const Me=j.distanceTo(ce),Fe=oe.projectionMatrix.elements,Be=de.projectionMatrix.elements,rt=Fe[14]/(Fe[10]-1),pt=Fe[14]/(Fe[10]+1),et=(Fe[9]+1)/Fe[5],B=(Fe[9]-1)/Fe[5],Jt=(Fe[8]-1)/Fe[0],st=(Be[8]+1)/Be[0],lt=rt*Jt,He=rt*st,ot=Me/(-Jt+st),Ge=ot*-Jt;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ(ot),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Fe[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const N=rt+ot,C=pt+ot,Z=lt-Ge,ne=He+(Me-Ge),U=et*pt/C*N,H=B*pt/C*N;Q.projectionMatrix.makePerspective(Z,ne,U,H,N,C),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,de=Q.far;T.texture!==null&&(T.depthNear>0&&(oe=T.depthNear),T.depthFar>0&&(de=T.depthFar)),E.near=k.near=I.near=oe,E.far=k.far=I.far=de,(R!==E.near||te!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),R=E.near,te=E.far);const Me=Q.parent,Fe=E.cameras;le(E,Me);for(let Be=0;Be<Fe.length;Be++)le(Fe[Be],Me);Fe.length===2?O(E,I,k):E.projectionMatrix.copy(I.projectionMatrix),q(Q,E,Me)};function q(Q,oe,de){de===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(de.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Pd*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(_===null&&x===null))return h},this.setFoveation=function(Q){h=Q,_!==null&&(_.fixedFoveation=Q),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=Q)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(E)};let he=null;function Le(Q,oe){if(m=oe.getViewerPose(d||l),w=oe,m!==null){const de=m.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let Me=!1;de.length!==E.cameras.length&&(E.cameras.length=0,Me=!0);for(let Be=0;Be<de.length;Be++){const rt=de[Be];let pt=null;if(x!==null)pt=x.getViewport(rt);else{const B=g.getViewSubImage(_,rt);pt=B.viewport,Be===0&&(e.setRenderTargetTextures(M,B.colorTexture,_.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(M))}let et=ae[Be];et===void 0&&(et=new fi,et.layers.enable(Be),et.viewport=new Ft,ae[Be]=et),et.matrix.fromArray(rt.transform.matrix),et.matrix.decompose(et.position,et.quaternion,et.scale),et.projectionMatrix.fromArray(rt.projectionMatrix),et.projectionMatrixInverse.copy(et.projectionMatrix).invert(),et.viewport.set(pt.x,pt.y,pt.width,pt.height),Be===0&&(E.matrix.copy(et.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),Me===!0&&E.cameras.push(et)}const Fe=s.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Be=g.getDepthInformation(de[0]);Be&&Be.isValid&&Be.texture&&T.init(e,Be,s.renderState)}}for(let de=0;de<S.length;de++){const Me=P[de],Fe=S[de];Me!==null&&Fe!==void 0&&Fe.update(Me,oe,d||l)}he&&he(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),w=null}const ke=new Sy;ke.setAnimationLoop(Le),this.setAnimationLoop=function(Q){he=Q},this.dispose=function(){}}}const Qr=new tr,aP=new kt;function lP(t,e){function n(y,p){y.matrixAutoUpdate===!0&&y.updateMatrix(),p.value.copy(y.matrix)}function i(y,p){p.color.getRGB(y.fogColor.value,vy(t)),p.isFog?(y.fogNear.value=p.near,y.fogFar.value=p.far):p.isFogExp2&&(y.fogDensity.value=p.density)}function s(y,p,M,S,P){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(y,p):p.isMeshToonMaterial?(o(y,p),g(y,p)):p.isMeshPhongMaterial?(o(y,p),m(y,p)):p.isMeshStandardMaterial?(o(y,p),_(y,p),p.isMeshPhysicalMaterial&&x(y,p,P)):p.isMeshMatcapMaterial?(o(y,p),w(y,p)):p.isMeshDepthMaterial?o(y,p):p.isMeshDistanceMaterial?(o(y,p),T(y,p)):p.isMeshNormalMaterial?o(y,p):p.isLineBasicMaterial?(l(y,p),p.isLineDashedMaterial&&c(y,p)):p.isPointsMaterial?h(y,p,M,S):p.isSpriteMaterial?d(y,p):p.isShadowMaterial?(y.color.value.copy(p.color),y.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(y,p){y.opacity.value=p.opacity,p.color&&y.diffuse.value.copy(p.color),p.emissive&&y.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(y.map.value=p.map,n(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.bumpMap&&(y.bumpMap.value=p.bumpMap,n(p.bumpMap,y.bumpMapTransform),y.bumpScale.value=p.bumpScale,p.side===In&&(y.bumpScale.value*=-1)),p.normalMap&&(y.normalMap.value=p.normalMap,n(p.normalMap,y.normalMapTransform),y.normalScale.value.copy(p.normalScale),p.side===In&&y.normalScale.value.negate()),p.displacementMap&&(y.displacementMap.value=p.displacementMap,n(p.displacementMap,y.displacementMapTransform),y.displacementScale.value=p.displacementScale,y.displacementBias.value=p.displacementBias),p.emissiveMap&&(y.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,y.emissiveMapTransform)),p.specularMap&&(y.specularMap.value=p.specularMap,n(p.specularMap,y.specularMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest);const M=e.get(p),S=M.envMap,P=M.envMapRotation;S&&(y.envMap.value=S,Qr.copy(P),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),y.envMapRotation.value.setFromMatrix4(aP.makeRotationFromEuler(Qr)),y.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=p.reflectivity,y.ior.value=p.ior,y.refractionRatio.value=p.refractionRatio),p.lightMap&&(y.lightMap.value=p.lightMap,y.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,y.lightMapTransform)),p.aoMap&&(y.aoMap.value=p.aoMap,y.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,y.aoMapTransform))}function l(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,p.map&&(y.map.value=p.map,n(p.map,y.mapTransform))}function c(y,p){y.dashSize.value=p.dashSize,y.totalSize.value=p.dashSize+p.gapSize,y.scale.value=p.scale}function h(y,p,M,S){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.size.value=p.size*M,y.scale.value=S*.5,p.map&&(y.map.value=p.map,n(p.map,y.uvTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function d(y,p){y.diffuse.value.copy(p.color),y.opacity.value=p.opacity,y.rotation.value=p.rotation,p.map&&(y.map.value=p.map,n(p.map,y.mapTransform)),p.alphaMap&&(y.alphaMap.value=p.alphaMap,n(p.alphaMap,y.alphaMapTransform)),p.alphaTest>0&&(y.alphaTest.value=p.alphaTest)}function m(y,p){y.specular.value.copy(p.specular),y.shininess.value=Math.max(p.shininess,1e-4)}function g(y,p){p.gradientMap&&(y.gradientMap.value=p.gradientMap)}function _(y,p){y.metalness.value=p.metalness,p.metalnessMap&&(y.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,y.metalnessMapTransform)),y.roughness.value=p.roughness,p.roughnessMap&&(y.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,y.roughnessMapTransform)),p.envMap&&(y.envMapIntensity.value=p.envMapIntensity)}function x(y,p,M){y.ior.value=p.ior,p.sheen>0&&(y.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),y.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(y.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,y.sheenColorMapTransform)),p.sheenRoughnessMap&&(y.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,y.sheenRoughnessMapTransform))),p.clearcoat>0&&(y.clearcoat.value=p.clearcoat,y.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(y.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,y.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(y.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===In&&y.clearcoatNormalScale.value.negate())),p.dispersion>0&&(y.dispersion.value=p.dispersion),p.iridescence>0&&(y.iridescence.value=p.iridescence,y.iridescenceIOR.value=p.iridescenceIOR,y.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(y.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,y.iridescenceMapTransform)),p.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),p.transmission>0&&(y.transmission.value=p.transmission,y.transmissionSamplerMap.value=M.texture,y.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(y.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,y.transmissionMapTransform)),y.thickness.value=p.thickness,p.thicknessMap&&(y.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=p.attenuationDistance,y.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(y.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(y.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=p.specularIntensity,y.specularColor.value.copy(p.specularColor),p.specularColorMap&&(y.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,y.specularColorMapTransform)),p.specularIntensityMap&&(y.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,p){p.matcap&&(y.matcap.value=p.matcap)}function T(y,p){const M=e.get(p).light;y.referencePosition.value.setFromMatrixPosition(M.matrixWorld),y.nearDistance.value=M.shadow.camera.near,y.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function uP(t,e,n,i){let s={},o={},l=[];const c=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function h(M,S){const P=S.program;i.uniformBlockBinding(M,P)}function d(M,S){let P=s[M.id];P===void 0&&(w(M),P=m(M),s[M.id]=P,M.addEventListener("dispose",y));const z=S.program;i.updateUBOMapping(M,z);const D=e.render.frame;o[M.id]!==D&&(_(M),o[M.id]=D)}function m(M){const S=g();M.__bindingPointIndex=S;const P=t.createBuffer(),z=M.__size,D=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,P),t.bufferData(t.UNIFORM_BUFFER,z,D),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,S,P),P}function g(){for(let M=0;M<c;M++)if(l.indexOf(M)===-1)return l.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(M){const S=s[M.id],P=M.uniforms,z=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,S);for(let D=0,I=P.length;D<I;D++){const k=Array.isArray(P[D])?P[D]:[P[D]];for(let ae=0,E=k.length;ae<E;ae++){const R=k[ae];if(x(R,D,ae,z)===!0){const te=R.__offset,ie=Array.isArray(R.value)?R.value:[R.value];let re=0;for(let _e=0;_e<ie.length;_e++){const j=ie[_e],ce=T(j);typeof j=="number"||typeof j=="boolean"?(R.__data[0]=j,t.bufferSubData(t.UNIFORM_BUFFER,te+re,R.__data)):j.isMatrix3?(R.__data[0]=j.elements[0],R.__data[1]=j.elements[1],R.__data[2]=j.elements[2],R.__data[3]=0,R.__data[4]=j.elements[3],R.__data[5]=j.elements[4],R.__data[6]=j.elements[5],R.__data[7]=0,R.__data[8]=j.elements[6],R.__data[9]=j.elements[7],R.__data[10]=j.elements[8],R.__data[11]=0):(j.toArray(R.__data,re),re+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,te,R.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function x(M,S,P,z){const D=M.value,I=S+"_"+P;if(z[I]===void 0)return typeof D=="number"||typeof D=="boolean"?z[I]=D:z[I]=D.clone(),!0;{const k=z[I];if(typeof D=="number"||typeof D=="boolean"){if(k!==D)return z[I]=D,!0}else if(k.equals(D)===!1)return k.copy(D),!0}return!1}function w(M){const S=M.uniforms;let P=0;const z=16;for(let I=0,k=S.length;I<k;I++){const ae=Array.isArray(S[I])?S[I]:[S[I]];for(let E=0,R=ae.length;E<R;E++){const te=ae[E],ie=Array.isArray(te.value)?te.value:[te.value];for(let re=0,_e=ie.length;re<_e;re++){const j=ie[re],ce=T(j),O=P%z,le=O%ce.boundary,q=O+le;P+=le,q!==0&&z-q<ce.storage&&(P+=z-q),te.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),te.__offset=P,P+=ce.storage}}}const D=P%z;return D>0&&(P+=z-D),M.__size=P,M.__cache={},this}function T(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function y(M){const S=M.target;S.removeEventListener("dispose",y);const P=l.indexOf(S.__bindingPointIndex);l.splice(P,1),t.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function p(){for(const M in s)t.deleteBuffer(s[M]);l=[],s={},o={}}return{bind:h,update:d,dispose:p}}class cP{constructor(e={}){const{canvas:n=KE(),context:i=null,depth:s=!0,stencil:o=!1,alpha:l=!1,antialias:c=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:d=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=l;const x=new Uint32Array(4),w=new Int32Array(4);let T=null,y=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ti,this.toneMapping=Ir,this.toneMappingExposure=1;const S=this;let P=!1,z=0,D=0,I=null,k=-1,ae=null;const E=new Ft,R=new Ft;let te=null;const ie=new St(0);let re=0,_e=n.width,j=n.height,ce=1,O=null,le=null;const q=new Ft(0,0,_e,j),he=new Ft(0,0,_e,j);let Le=!1;const ke=new xy;let Q=!1,oe=!1;const de=new kt,Me=new kt,Fe=new ee,Be=new Ft,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function et(){return I===null?ce:1}let B=i;function Jt(b,G){return n.getContext(b,G)}try{const b={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:h,preserveDrawingBuffer:d,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Ap}`),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ae,!1),n.addEventListener("webglcontextcreationerror",Re,!1),B===null){const G="webgl2";if(B=Jt(G,b),B===null)throw Jt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let st,lt,He,ot,Ge,N,C,Z,ne,U,H,ue,pe,ye,qe,ve,Te,Ve,Ze,be,ut,Ye,yt,V;function Pe(){st=new mA(B),st.init(),Ye=new eP(B,st),lt=new lA(B,st,e,Ye),He=new $C(B),lt.reverseDepthBuffer&&He.buffers.depth.setReversed(!0),ot=new vA(B),Ge=new OC,N=new JC(B,st,He,Ge,lt,Ye,ot),C=new cA(S),Z=new pA(S),ne=new ww(B),yt=new oA(B,ne),U=new _A(B,ne,ot,yt),H=new xA(B,U,ne,ot),Ze=new yA(B,lt,N),ve=new uA(Ge),ue=new UC(S,C,Z,st,lt,yt,ve),pe=new lP(S,Ge),ye=new zC,qe=new WC(st),Ve=new sA(S,C,Z,He,H,_,h),Te=new YC(S,H,lt),V=new uP(B,ot,lt,He),be=new aA(B,st,ot),ut=new gA(B,st,ot),ot.programs=ue.programs,S.capabilities=lt,S.extensions=st,S.properties=Ge,S.renderLists=ye,S.shadowMap=Te,S.state=He,S.info=ot}Pe();const se=new oP(S,B);this.xr=se,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const b=st.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=st.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(b){b!==void 0&&(ce=b,this.setSize(_e,j,!1))},this.getSize=function(b){return b.set(_e,j)},this.setSize=function(b,G,Y=!0){if(se.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}_e=b,j=G,n.width=Math.floor(b*ce),n.height=Math.floor(G*ce),Y===!0&&(n.style.width=b+"px",n.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(_e*ce,j*ce).floor()},this.setDrawingBufferSize=function(b,G,Y){_e=b,j=G,ce=Y,n.width=Math.floor(b*Y),n.height=Math.floor(G*Y),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(E)},this.getViewport=function(b){return b.copy(q)},this.setViewport=function(b,G,Y,K){b.isVector4?q.set(b.x,b.y,b.z,b.w):q.set(b,G,Y,K),He.viewport(E.copy(q).multiplyScalar(ce).round())},this.getScissor=function(b){return b.copy(he)},this.setScissor=function(b,G,Y,K){b.isVector4?he.set(b.x,b.y,b.z,b.w):he.set(b,G,Y,K),He.scissor(R.copy(he).multiplyScalar(ce).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(b){He.setScissorTest(Le=b)},this.setOpaqueSort=function(b){O=b},this.setTransparentSort=function(b){le=b},this.getClearColor=function(b){return b.copy(Ve.getClearColor())},this.setClearColor=function(){Ve.setClearColor.apply(Ve,arguments)},this.getClearAlpha=function(){return Ve.getClearAlpha()},this.setClearAlpha=function(){Ve.setClearAlpha.apply(Ve,arguments)},this.clear=function(b=!0,G=!0,Y=!0){let K=0;if(b){let W=!1;if(I!==null){const Se=I.texture.format;W=Se===Ip||Se===bp||Se===Lp}if(W){const Se=I.texture.type,we=Se===er||Se===gs||Se===Fa||Se===Mo||Se===Pp||Se===Rp,De=Ve.getClearColor(),Ue=Ve.getClearAlpha(),We=De.r,je=De.g,ze=De.b;we?(x[0]=We,x[1]=je,x[2]=ze,x[3]=Ue,B.clearBufferuiv(B.COLOR,0,x)):(w[0]=We,w[1]=je,w[2]=ze,w[3]=Ue,B.clearBufferiv(B.COLOR,0,w))}else K|=B.COLOR_BUFFER_BIT}G&&(K|=B.DEPTH_BUFFER_BIT,B.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Y&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ae,!1),n.removeEventListener("webglcontextcreationerror",Re,!1),ye.dispose(),qe.dispose(),Ge.dispose(),C.dispose(),Z.dispose(),H.dispose(),yt.dispose(),V.dispose(),ue.dispose(),se.dispose(),se.removeEventListener("sessionstart",Ya),se.removeEventListener("sessionend",Ka),bi.stop()};function fe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const b=ot.autoReset,G=Te.enabled,Y=Te.autoUpdate,K=Te.needsUpdate,W=Te.type;Pe(),ot.autoReset=b,Te.enabled=G,Te.autoUpdate=Y,Te.needsUpdate=K,Te.type=W}function Re(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function ft(b){const G=b.target;G.removeEventListener("dispose",ft),Ut(G)}function Ut(b){on(b),Ge.remove(b)}function on(b){const G=Ge.get(b).programs;G!==void 0&&(G.forEach(function(Y){ue.releaseProgram(Y)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,Y,K,W,Se){G===null&&(G=rt);const we=W.isMesh&&W.matrixWorld.determinant()<0,De=$a(b,G,Y,K,W);He.setMaterial(K,we);let Ue=Y.index,We=1;if(K.wireframe===!0){if(Ue=U.getWireframeAttribute(Y),Ue===void 0)return;We=2}const je=Y.drawRange,ze=Y.attributes.position;let gt=je.start*We,xt=(je.start+je.count)*We;Se!==null&&(gt=Math.max(gt,Se.start*We),xt=Math.min(xt,(Se.start+Se.count)*We)),Ue!==null?(gt=Math.max(gt,0),xt=Math.min(xt,Ue.count)):ze!=null&&(gt=Math.max(gt,0),xt=Math.min(xt,ze.count));const At=xt-gt;if(At<0||At===1/0)return;yt.setup(W,K,De,Y,Ue);let ln,ht=be;if(Ue!==null&&(ln=ne.get(Ue),ht=ut,ht.setIndex(ln)),W.isMesh)K.wireframe===!0?(He.setLineWidth(K.wireframeLinewidth*et()),ht.setMode(B.LINES)):ht.setMode(B.TRIANGLES);else if(W.isLine){let xe=K.linewidth;xe===void 0&&(xe=1),He.setLineWidth(xe*et()),W.isLineSegments?ht.setMode(B.LINES):W.isLineLoop?ht.setMode(B.LINE_LOOP):ht.setMode(B.LINE_STRIP)}else W.isPoints?ht.setMode(B.POINTS):W.isSprite&&ht.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ht.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))ht.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const xe=W._multiDrawStarts,tt=W._multiDrawCounts,dt=W._multiDrawCount,qt=Ue?ne.get(Ue).bytesPerElement:1,On=Ge.get(K).currentProgram.getUniforms();for(let en=0;en<dt;en++)On.setValue(B,"_gl_DrawID",en),ht.render(xe[en]/qt,tt[en])}else if(W.isInstancedMesh)ht.renderInstances(gt,At,W.count);else if(Y.isInstancedBufferGeometry){const xe=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,tt=Math.min(Y.instanceCount,xe);ht.renderInstances(gt,At,tt)}else ht.render(gt,At)};function _t(b,G,Y){b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=In,b.needsUpdate=!0,Vr(b,G,Y),b.side=Ur,b.needsUpdate=!0,Vr(b,G,Y),b.side=Wi):Vr(b,G,Y)}this.compile=function(b,G,Y=null){Y===null&&(Y=b),y=qe.get(Y),y.init(G),M.push(y),Y.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==Y&&b.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const K=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Se=W.material;if(Se)if(Array.isArray(Se))for(let we=0;we<Se.length;we++){const De=Se[we];_t(De,Y,W),K.add(De)}else _t(Se,Y,W),K.add(Se)}),M.pop(),y=null,K},this.compileAsync=function(b,G,Y=null){const K=this.compile(b,G,Y);return new Promise(W=>{function Se(){if(K.forEach(function(we){Ge.get(we).currentProgram.isReady()&&K.delete(we)}),K.size===0){W(b);return}setTimeout(Se,10)}st.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let an=null;function Nn(b){an&&an(b)}function Ya(){bi.stop()}function Ka(){bi.start()}const bi=new Sy;bi.setAnimationLoop(Nn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){an=b,se.setAnimationLoop(b),b===null?bi.stop():bi.start()},se.addEventListener("sessionstart",Ya),se.addEventListener("sessionend",Ka),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),se.enabled===!0&&se.isPresenting===!0&&(se.cameraAutoUpdate===!0&&se.updateCamera(G),G=se.getCamera()),b.isScene===!0&&b.onBeforeRender(S,b,G,I),y=qe.get(b,M.length),y.init(G),M.push(y),Me.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ke.setFromProjectionMatrix(Me),oe=this.localClippingEnabled,Q=ve.init(this.clippingPlanes,oe),T=ye.get(b,p.length),T.init(),p.push(T),se.enabled===!0&&se.isPresenting===!0){const Se=S.xr.getDepthSensingMesh();Se!==null&&bo(Se,G,-1/0,S.sortObjects)}bo(b,G,0,S.sortObjects),T.finish(),S.sortObjects===!0&&T.sort(O,le),pt=se.enabled===!1||se.isPresenting===!1||se.hasDepthSensing()===!1,pt&&Ve.addToRenderList(T,b),this.info.render.frame++,Q===!0&&ve.beginShadows();const Y=y.state.shadowsArray;Te.render(Y,b,G),Q===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=T.opaque,W=T.transmissive;if(y.setupLights(),G.isArrayCamera){const Se=G.cameras;if(W.length>0)for(let we=0,De=Se.length;we<De;we++){const Ue=Se[we];Oe(K,W,b,Ue)}pt&&Ve.render(b);for(let we=0,De=Se.length;we<De;we++){const Ue=Se[we];Un(T,b,Ue,Ue.viewport)}}else W.length>0&&Oe(K,W,b,G),pt&&Ve.render(b),Un(T,b,G);I!==null&&(N.updateMultisampleRenderTarget(I),N.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(S,b,G),yt.resetDefaultState(),k=-1,ae=null,M.pop(),M.length>0?(y=M[M.length-1],Q===!0&&ve.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,p.pop(),p.length>0?T=p[p.length-1]:T=null};function bo(b,G,Y,K){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||ke.intersectsSprite(b)){K&&Be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Me);const we=H.update(b),De=b.material;De.visible&&T.push(b,we,De,Y,Be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||ke.intersectsObject(b))){const we=H.update(b),De=b.material;if(K&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Be.copy(b.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),Be.copy(we.boundingSphere.center)),Be.applyMatrix4(b.matrixWorld).applyMatrix4(Me)),Array.isArray(De)){const Ue=we.groups;for(let We=0,je=Ue.length;We<je;We++){const ze=Ue[We],gt=De[ze.materialIndex];gt&&gt.visible&&T.push(b,we,gt,Y,Be.z,ze)}}else De.visible&&T.push(b,we,De,Y,Be.z,null)}}const Se=b.children;for(let we=0,De=Se.length;we<De;we++)bo(Se[we],G,Y,K)}function Un(b,G,Y,K){const W=b.opaque,Se=b.transmissive,we=b.transparent;y.setupLightsView(Y),Q===!0&&ve.setGlobalState(S.clippingPlanes,Y),K&&He.viewport(E.copy(K)),W.length>0&&Hr(W,G,Y),Se.length>0&&Hr(Se,G,Y),we.length>0&&Hr(we,G,Y),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Oe(b,G,Y,K){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[K.id]===void 0&&(y.state.transmissionRenderTarget[K.id]=new Or(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?Po:er,minFilter:ls,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const Se=y.state.transmissionRenderTarget[K.id],we=K.viewport||E;Se.setSize(we.z,we.w);const De=S.getRenderTarget();S.setRenderTarget(Se),S.getClearColor(ie),re=S.getClearAlpha(),re<1&&S.setClearColor(16777215,.5),S.clear(),pt&&Ve.render(Y);const Ue=S.toneMapping;S.toneMapping=Ir;const We=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),y.setupLightsView(K),Q===!0&&ve.setGlobalState(S.clippingPlanes,K),Hr(b,Y,K),N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se),st.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ze=0,gt=G.length;ze<gt;ze++){const xt=G[ze],At=xt.object,ln=xt.geometry,ht=xt.material,xe=xt.group;if(ht.side===Wi&&At.layers.test(K.layers)){const tt=ht.side;ht.side=In,ht.needsUpdate=!0,Io(At,Y,K,ln,ht,xe),ht.side=tt,ht.needsUpdate=!0,je=!0}}je===!0&&(N.updateMultisampleRenderTarget(Se),N.updateRenderTargetMipmap(Se))}S.setRenderTarget(De),S.setClearColor(ie,re),We!==void 0&&(K.viewport=We),S.toneMapping=Ue}function Hr(b,G,Y){const K=G.isScene===!0?G.overrideMaterial:null;for(let W=0,Se=b.length;W<Se;W++){const we=b[W],De=we.object,Ue=we.geometry,We=K===null?we.material:K,je=we.group;De.layers.test(Y.layers)&&Io(De,G,Y,Ue,We,je)}}function Io(b,G,Y,K,W,Se){b.onBeforeRender(S,G,Y,K,W,Se),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(S,G,Y,K,b,Se),W.transparent===!0&&W.side===Wi&&W.forceSinglePass===!1?(W.side=In,W.needsUpdate=!0,S.renderBufferDirect(Y,G,K,W,b,Se),W.side=Ur,W.needsUpdate=!0,S.renderBufferDirect(Y,G,K,W,b,Se),W.side=Wi):S.renderBufferDirect(Y,G,K,W,b,Se),b.onAfterRender(S,G,Y,K,W,Se)}function Vr(b,G,Y){G.isScene!==!0&&(G=rt);const K=Ge.get(b),W=y.state.lights,Se=y.state.shadowsArray,we=W.state.version,De=ue.getParameters(b,W.state,Se,G,Y),Ue=ue.getProgramCacheKey(De);let We=K.programs;K.environment=b.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(b.isMeshStandardMaterial?Z:C).get(b.envMap||K.environment),K.envMapRotation=K.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,We===void 0&&(b.addEventListener("dispose",ft),We=new Map,K.programs=We);let je=We.get(Ue);if(je!==void 0){if(K.currentProgram===je&&K.lightsStateVersion===we)return xs(b,De),je}else De.uniforms=ue.getUniforms(b),b.onBeforeCompile(De,S),je=ue.acquireProgram(De,Ue),We.set(Ue,je),K.uniforms=De.uniforms;const ze=K.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ze.clippingPlanes=ve.uniform),xs(b,De),K.needsLights=Qa(b),K.lightsStateVersion=we,K.needsLights&&(ze.ambientLightColor.value=W.state.ambient,ze.lightProbe.value=W.state.probe,ze.directionalLights.value=W.state.directional,ze.directionalLightShadows.value=W.state.directionalShadow,ze.spotLights.value=W.state.spot,ze.spotLightShadows.value=W.state.spotShadow,ze.rectAreaLights.value=W.state.rectArea,ze.ltc_1.value=W.state.rectAreaLTC1,ze.ltc_2.value=W.state.rectAreaLTC2,ze.pointLights.value=W.state.point,ze.pointLightShadows.value=W.state.pointShadow,ze.hemisphereLights.value=W.state.hemi,ze.directionalShadowMap.value=W.state.directionalShadowMap,ze.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ze.spotShadowMap.value=W.state.spotShadowMap,ze.spotLightMatrix.value=W.state.spotLightMatrix,ze.spotLightMap.value=W.state.spotLightMap,ze.pointShadowMap.value=W.state.pointShadowMap,ze.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=je,K.uniformsList=null,je}function Do(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=yu.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function xs(b,G){const Y=Ge.get(b);Y.outputColorSpace=G.outputColorSpace,Y.batching=G.batching,Y.batchingColor=G.batchingColor,Y.instancing=G.instancing,Y.instancingColor=G.instancingColor,Y.instancingMorph=G.instancingMorph,Y.skinning=G.skinning,Y.morphTargets=G.morphTargets,Y.morphNormals=G.morphNormals,Y.morphColors=G.morphColors,Y.morphTargetsCount=G.morphTargetsCount,Y.numClippingPlanes=G.numClippingPlanes,Y.numIntersection=G.numClipIntersection,Y.vertexAlphas=G.vertexAlphas,Y.vertexTangents=G.vertexTangents,Y.toneMapping=G.toneMapping}function $a(b,G,Y,K,W){G.isScene!==!0&&(G=rt),N.resetTextureUnits();const Se=G.fog,we=K.isMeshStandardMaterial?G.environment:null,De=I===null?S.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Br,Ue=(K.isMeshStandardMaterial?Z:C).get(K.envMap||we),We=K.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,je=!!Y.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ze=!!Y.morphAttributes.position,gt=!!Y.morphAttributes.normal,xt=!!Y.morphAttributes.color;let At=Ir;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(At=S.toneMapping);const ln=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ht=ln!==void 0?ln.length:0,xe=Ge.get(K),tt=y.state.lights;if(Q===!0&&(oe===!0||b!==ae)){const Ct=b===ae&&K.id===k;ve.setState(K,b,Ct)}let dt=!1;K.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==tt.state.version||xe.outputColorSpace!==De||W.isBatchedMesh&&xe.batching===!1||!W.isBatchedMesh&&xe.batching===!0||W.isBatchedMesh&&xe.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&xe.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&xe.instancing===!1||!W.isInstancedMesh&&xe.instancing===!0||W.isSkinnedMesh&&xe.skinning===!1||!W.isSkinnedMesh&&xe.skinning===!0||W.isInstancedMesh&&xe.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&xe.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&xe.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&xe.instancingMorph===!1&&W.morphTexture!==null||xe.envMap!==Ue||K.fog===!0&&xe.fog!==Se||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==ve.numPlanes||xe.numIntersection!==ve.numIntersection)||xe.vertexAlphas!==We||xe.vertexTangents!==je||xe.morphTargets!==ze||xe.morphNormals!==gt||xe.morphColors!==xt||xe.toneMapping!==At||xe.morphTargetsCount!==ht)&&(dt=!0):(dt=!0,xe.__version=K.version);let qt=xe.currentProgram;dt===!0&&(qt=Vr(K,G,W));let On=!1,en=!1,Ke=!1;const $e=qt.getUniforms(),Xn=xe.uniforms;if(He.useProgram(qt.program)&&(On=!0,en=!0,Ke=!0),K.id!==k&&(k=K.id,en=!0),On||ae!==b){lt.reverseDepthBuffer?(de.copy(b.projectionMatrix),QE(de),JE(de),$e.setValue(B,"projectionMatrix",de)):$e.setValue(B,"projectionMatrix",b.projectionMatrix),$e.setValue(B,"viewMatrix",b.matrixWorldInverse);const Ct=$e.map.cameraPosition;Ct!==void 0&&Ct.setValue(B,Fe.setFromMatrixPosition(b.matrixWorld)),lt.logarithmicDepthBuffer&&$e.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&$e.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),ae!==b&&(ae=b,en=!0,Ke=!0)}if(W.isSkinnedMesh){$e.setOptional(B,W,"bindMatrix"),$e.setOptional(B,W,"bindMatrixInverse");const Ct=W.skeleton;Ct&&(Ct.boneTexture===null&&Ct.computeBoneTexture(),$e.setValue(B,"boneTexture",Ct.boneTexture,N))}W.isBatchedMesh&&($e.setOptional(B,W,"batchingTexture"),$e.setValue(B,"batchingTexture",W._matricesTexture,N),$e.setOptional(B,W,"batchingIdTexture"),$e.setValue(B,"batchingIdTexture",W._indirectTexture,N),$e.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&$e.setValue(B,"batchingColorTexture",W._colorsTexture,N));const or=Y.morphAttributes;if((or.position!==void 0||or.normal!==void 0||or.color!==void 0)&&Ze.update(W,Y,qt),(en||xe.receiveShadow!==W.receiveShadow)&&(xe.receiveShadow=W.receiveShadow,$e.setValue(B,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Xn.envMap.value=Ue,Xn.flipEnvMap.value=Ue.isCubeTexture&&Ue.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(Xn.envMapIntensity.value=G.environmentIntensity),en&&($e.setValue(B,"toneMappingExposure",S.toneMappingExposure),xe.needsLights&&sr(Xn,Ke),Se&&K.fog===!0&&pe.refreshFogUniforms(Xn,Se),pe.refreshMaterialUniforms(Xn,K,ce,j,y.state.transmissionRenderTarget[b.id]),yu.upload(B,Do(xe),Xn,N)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(yu.upload(B,Do(xe),Xn,N),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&$e.setValue(B,"center",W.center),$e.setValue(B,"modelViewMatrix",W.modelViewMatrix),$e.setValue(B,"normalMatrix",W.normalMatrix),$e.setValue(B,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ct=K.uniformsGroups;for(let No=0,Ss=Ct.length;No<Ss;No++){const yi=Ct[No];V.update(yi,qt),V.bind(yi,qt)}}return qt}function sr(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Qa(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,G,Y){Ge.get(b.texture).__webglTexture=G,Ge.get(b.depthTexture).__webglTexture=Y;const K=Ge.get(b);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=Y===void 0,K.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const Y=Ge.get(b);Y.__webglFramebuffer=G,Y.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,Y=0){I=b,z=G,D=Y;let K=!0,W=null,Se=!1,we=!1;if(b){const Ue=Ge.get(b);if(Ue.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Ue.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Ue.__hasExternalTextures)N.rebindTextures(b,Ge.get(b.texture).__webglTexture,Ge.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ze=b.depthTexture;if(Ue.__boundDepthTexture!==ze){if(ze!==null&&Ge.has(ze)&&(b.width!==ze.image.width||b.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const We=b.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(we=!0);const je=Ge.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(je[G])?W=je[G][Y]:W=je[G],Se=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?W=Ge.get(b).__webglMultisampledFramebuffer:Array.isArray(je)?W=je[Y]:W=je,E.copy(b.viewport),R.copy(b.scissor),te=b.scissorTest}else E.copy(q).multiplyScalar(ce).floor(),R.copy(he).multiplyScalar(ce).floor(),te=Le;if(He.bindFramebuffer(B.FRAMEBUFFER,W)&&K&&He.drawBuffers(b,W),He.viewport(E),He.scissor(R),He.setScissorTest(te),Se){const Ue=Ge.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+G,Ue.__webglTexture,Y)}else if(we){const Ue=Ge.get(b.texture),We=G||0;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ue.__webglTexture,Y||0,We)}k=-1},this.readRenderTargetPixels=function(b,G,Y,K,W,Se,we){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){He.bindFramebuffer(B.FRAMEBUFFER,De);try{const Ue=b.texture,We=Ue.format,je=Ue.type;if(!lt.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(je)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-K&&Y>=0&&Y<=b.height-W&&B.readPixels(G,Y,K,W,Ye.convert(We),Ye.convert(je),Se)}finally{const Ue=I!==null?Ge.get(I).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,Ue)}}},this.readRenderTargetPixelsAsync=async function(b,G,Y,K,W,Se,we){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=Ge.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&we!==void 0&&(De=De[we]),De){const Ue=b.texture,We=Ue.format,je=Ue.type;if(!lt.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-K&&Y>=0&&Y<=b.height-W){He.bindFramebuffer(B.FRAMEBUFFER,De);const ze=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.bufferData(B.PIXEL_PACK_BUFFER,Se.byteLength,B.STREAM_READ),B.readPixels(G,Y,K,W,Ye.convert(We),Ye.convert(je),0);const gt=I!==null?Ge.get(I).__webglFramebuffer:null;He.bindFramebuffer(B.FRAMEBUFFER,gt);const xt=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await $E(B,xt,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,ze),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Se),B.deleteBuffer(ze),B.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,Y=0){b.isTexture!==!0&&(vu("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const K=Math.pow(2,-Y),W=Math.floor(b.image.width*K),Se=Math.floor(b.image.height*K),we=G!==null?G.x:0,De=G!==null?G.y:0;N.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,Y,0,0,we,De,W,Se),He.unbindTexture()},this.copyTextureToTexture=function(b,G,Y=null,K=null,W=0){b.isTexture!==!0&&(vu("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,b=arguments[1],G=arguments[2],W=arguments[3]||0,Y=null);let Se,we,De,Ue,We,je;Y!==null?(Se=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,De=Y.min.x,Ue=Y.min.y):(Se=b.image.width,we=b.image.height,De=0,Ue=0),K!==null?(We=K.x,je=K.y):(We=0,je=0);const ze=Ye.convert(G.format),gt=Ye.convert(G.type);N.setTexture2D(G,0),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),At=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ln=B.getParameter(B.UNPACK_SKIP_PIXELS),ht=B.getParameter(B.UNPACK_SKIP_ROWS),xe=B.getParameter(B.UNPACK_SKIP_IMAGES),tt=b.isCompressedTexture?b.mipmaps[W]:b.image;B.pixelStorei(B.UNPACK_ROW_LENGTH,tt.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,tt.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,De),B.pixelStorei(B.UNPACK_SKIP_ROWS,Ue),b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,W,We,je,Se,we,ze,gt,tt.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,W,We,je,tt.width,tt.height,ze,tt.data):B.texSubImage2D(B.TEXTURE_2D,W,We,je,Se,we,ze,gt,tt),B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ln),B.pixelStorei(B.UNPACK_SKIP_ROWS,ht),B.pixelStorei(B.UNPACK_SKIP_IMAGES,xe),W===0&&G.generateMipmaps&&B.generateMipmap(B.TEXTURE_2D),He.unbindTexture()},this.copyTextureToTexture3D=function(b,G,Y=null,K=null,W=0){b.isTexture!==!0&&(vu("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,K=arguments[1]||null,b=arguments[2],G=arguments[3],W=arguments[4]||0);let Se,we,De,Ue,We,je,ze,gt,xt;const At=b.isCompressedTexture?b.mipmaps[W]:b.image;Y!==null?(Se=Y.max.x-Y.min.x,we=Y.max.y-Y.min.y,De=Y.max.z-Y.min.z,Ue=Y.min.x,We=Y.min.y,je=Y.min.z):(Se=At.width,we=At.height,De=At.depth,Ue=0,We=0,je=0),K!==null?(ze=K.x,gt=K.y,xt=K.z):(ze=0,gt=0,xt=0);const ln=Ye.convert(G.format),ht=Ye.convert(G.type);let xe;if(G.isData3DTexture)N.setTexture3D(G,0),xe=B.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)N.setTexture2DArray(G,0),xe=B.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,G.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,G.unpackAlignment);const tt=B.getParameter(B.UNPACK_ROW_LENGTH),dt=B.getParameter(B.UNPACK_IMAGE_HEIGHT),qt=B.getParameter(B.UNPACK_SKIP_PIXELS),On=B.getParameter(B.UNPACK_SKIP_ROWS),en=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,At.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,At.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,Ue),B.pixelStorei(B.UNPACK_SKIP_ROWS,We),B.pixelStorei(B.UNPACK_SKIP_IMAGES,je),b.isDataTexture||b.isData3DTexture?B.texSubImage3D(xe,W,ze,gt,xt,Se,we,De,ln,ht,At.data):G.isCompressedArrayTexture?B.compressedTexSubImage3D(xe,W,ze,gt,xt,Se,we,De,ln,At.data):B.texSubImage3D(xe,W,ze,gt,xt,Se,we,De,ln,ht,At),B.pixelStorei(B.UNPACK_ROW_LENGTH,tt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,dt),B.pixelStorei(B.UNPACK_SKIP_PIXELS,qt),B.pixelStorei(B.UNPACK_SKIP_ROWS,On),B.pixelStorei(B.UNPACK_SKIP_IMAGES,en),W===0&&G.generateMipmaps&&B.generateMipmap(xe),He.unbindTexture()},this.initRenderTarget=function(b){Ge.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),He.unbindTexture()},this.resetState=function(){z=0,D=0,I=null,He.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ji}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Dp?"display-p3":"srgb",n.unpackColorSpace=Mt.workingColorSpace===gc?"display-p3":"srgb"}}class Pg extends Dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class hP extends xn{constructor(e=null,n=1,i=1,s,o,l,c,h,d=Pn,m=Pn,g,_){super(null,l,c,h,d,m,s,o,g,_),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fP extends Za{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qu=new ee,Ju=new ee,Rg=new kt,sa=new fy,Ql=new vc,Zh=new ee,Lg=new ee;class dP extends Dn{constructor(e=new rr,n=new fP){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let s=1,o=n.count;s<o;s++)Qu.fromBufferAttribute(n,s-1),Ju.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=Qu.distanceTo(Ju);e.setAttribute("lineDistance",new Yi(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,s=this.matrixWorld,o=e.params.Line.threshold,l=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ql.copy(i.boundingSphere),Ql.applyMatrix4(s),Ql.radius+=o,e.ray.intersectsSphere(Ql)===!1)return;Rg.copy(s).invert(),sa.copy(e.ray).applyMatrix4(Rg);const c=o/((this.scale.x+this.scale.y+this.scale.z)/3),h=c*c,d=this.isLineSegments?2:1,m=i.index,_=i.attributes.position;if(m!==null){const x=Math.max(0,l.start),w=Math.min(m.count,l.start+l.count);for(let T=x,y=w-1;T<y;T+=d){const p=m.getX(T),M=m.getX(T+1),S=Jl(this,e,sa,h,p,M);S&&n.push(S)}if(this.isLineLoop){const T=m.getX(w-1),y=m.getX(x),p=Jl(this,e,sa,h,T,y);p&&n.push(p)}}else{const x=Math.max(0,l.start),w=Math.min(_.count,l.start+l.count);for(let T=x,y=w-1;T<y;T+=d){const p=Jl(this,e,sa,h,T,T+1);p&&n.push(p)}if(this.isLineLoop){const T=Jl(this,e,sa,h,w-1,x);T&&n.push(T)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,l=s.length;o<l;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}}function Jl(t,e,n,i,s,o){const l=t.geometry.attributes.position;if(Qu.fromBufferAttribute(l,s),Ju.fromBufferAttribute(l,o),n.distanceSqToSegment(Qu,Ju,Zh,Lg)>i)return;Zh.applyMatrix4(t.matrixWorld);const h=e.ray.origin.distanceTo(Zh);if(!(h<e.near||h>e.far))return{distance:h,point:Lg.clone().applyMatrix4(t.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:t}}const bg=new ee,Ig=new ee;class pP extends dP{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let s=0,o=n.count;s<o;s+=2)bg.fromBufferAttribute(n,s),Ig.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+bg.distanceTo(Ig);e.setAttribute("lineDistance",new Yi(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eu extends nr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mP{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Dg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Dg();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function Dg(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);function _P({mouseForce:t=20,cursorSize:e=100,isViscous:n=!1,viscous:i=30,iterationsViscous:s=32,iterationsPoisson:o=32,dt:l=.014,BFECC:c=!0,resolution:h=.5,isBounce:d=!1,colors:m=["#5227FF","#FF9FFC","#B19EEF"],style:g={},className:_="",autoDemo:x=!0,autoSpeed:w=.5,autoIntensity:T=2.2,takeoverDuration:y=.25,autoResumeDelay:p=1e3,autoRampDuration:M=.6}){const S=Ne.useRef(null),P=Ne.useRef(null),z=Ne.useRef(null),D=Ne.useRef(null),I=Ne.useRef(null),k=Ne.useRef(!0),ae=Ne.useRef(null);return Ne.useEffect(()=>{if(!S.current)return;function E(ne){let U;Array.isArray(ne)&&ne.length>0?ne.length===1?U=[ne[0],ne[0]]:U=ne:U=["#ffffff","#ffffff"];const H=U.length,ue=new Uint8Array(H*4);for(let ye=0;ye<H;ye++){const qe=new St(U[ye]);ue[ye*4+0]=Math.round(qe.r*255),ue[ye*4+1]=Math.round(qe.g*255),ue[ye*4+2]=Math.round(qe.b*255),ue[ye*4+3]=255}const pe=new hP(ue,H,1,Qn);return pe.magFilter=vn,pe.minFilter=vn,pe.wrapS=pi,pe.wrapT=pi,pe.generateMipmaps=!1,pe.needsUpdate=!0,pe}const R=E(m),te=new Ft(0,0,0,0);class ie{constructor(){this.width=0,this.height=0,this.aspect=1,this.pixelRatio=1,this.isMobile=!1,this.breakpoint=768,this.fboWidth=null,this.fboHeight=null,this.time=0,this.delta=0,this.container=null,this.renderer=null,this.clock=null}init(U){this.container=U,this.pixelRatio=Math.min(window.devicePixelRatio||1,2),this.resize(),this.renderer=new cP({antialias:!0,alpha:!0}),this.renderer.autoClear=!1,this.renderer.setClearColor(new St(0),0),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%",this.renderer.domElement.style.display="block",this.clock=new mP,this.clock.start()}resize(){if(!this.container)return;const U=this.container.getBoundingClientRect();this.width=Math.max(1,Math.floor(U.width)),this.height=Math.max(1,Math.floor(U.height)),this.aspect=this.width/this.height,this.renderer&&this.renderer.setSize(this.width,this.height,!1)}update(){this.delta=this.clock.getDelta(),this.time+=this.delta}}const re=new ie;class _e{constructor(){this.mouseMoved=!1,this.coords=new Je,this.coords_old=new Je,this.diff=new Je,this.timer=null,this.container=null,this.docTarget=null,this.listenerTarget=null,this.isHoverInside=!1,this.hasUserControl=!1,this.isAutoActive=!1,this.autoIntensity=2,this.takeoverActive=!1,this.takeoverStartTime=0,this.takeoverDuration=.25,this.takeoverFrom=new Je,this.takeoverTo=new Je,this.onInteract=null,this._onMouseMove=this.onDocumentMouseMove.bind(this),this._onTouchStart=this.onDocumentTouchStart.bind(this),this._onTouchMove=this.onDocumentTouchMove.bind(this),this._onTouchEnd=this.onTouchEnd.bind(this),this._onDocumentLeave=this.onDocumentLeave.bind(this)}init(U){this.container=U,this.docTarget=U.ownerDocument||null;const H=this.docTarget&&this.docTarget.defaultView||(typeof window<"u"?window:null);H&&(this.listenerTarget=H,this.listenerTarget.addEventListener("mousemove",this._onMouseMove),this.listenerTarget.addEventListener("touchstart",this._onTouchStart,{passive:!0}),this.listenerTarget.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.listenerTarget.addEventListener("touchend",this._onTouchEnd),this.docTarget&&this.docTarget.addEventListener("mouseleave",this._onDocumentLeave))}dispose(){this.listenerTarget&&(this.listenerTarget.removeEventListener("mousemove",this._onMouseMove),this.listenerTarget.removeEventListener("touchstart",this._onTouchStart),this.listenerTarget.removeEventListener("touchmove",this._onTouchMove),this.listenerTarget.removeEventListener("touchend",this._onTouchEnd)),this.docTarget&&this.docTarget.removeEventListener("mouseleave",this._onDocumentLeave),this.listenerTarget=null,this.docTarget=null,this.container=null}isPointInside(U,H){if(!this.container)return!1;const ue=this.container.getBoundingClientRect();return ue.width===0||ue.height===0?!1:U>=ue.left&&U<=ue.right&&H>=ue.top&&H<=ue.bottom}updateHoverState(U,H){return this.isHoverInside=this.isPointInside(U,H),this.isHoverInside}setCoords(U,H){if(!this.container)return;this.timer&&window.clearTimeout(this.timer);const ue=this.container.getBoundingClientRect();if(ue.width===0||ue.height===0)return;const pe=(U-ue.left)/ue.width,ye=(H-ue.top)/ue.height;this.coords.set(pe*2-1,-(ye*2-1)),this.mouseMoved=!0,this.timer=window.setTimeout(()=>{this.mouseMoved=!1},100)}setNormalized(U,H){this.coords.set(U,H),this.mouseMoved=!0}onDocumentMouseMove(U){if(this.updateHoverState(U.clientX,U.clientY)){if(this.onInteract&&this.onInteract(),this.isAutoActive&&!this.hasUserControl&&!this.takeoverActive){if(!this.container)return;const H=this.container.getBoundingClientRect();if(H.width===0||H.height===0)return;const ue=(U.clientX-H.left)/H.width,pe=(U.clientY-H.top)/H.height;this.takeoverFrom.copy(this.coords),this.takeoverTo.set(ue*2-1,-(pe*2-1)),this.takeoverStartTime=performance.now(),this.takeoverActive=!0,this.hasUserControl=!0,this.isAutoActive=!1;return}this.setCoords(U.clientX,U.clientY),this.hasUserControl=!0}}onDocumentTouchStart(U){if(U.touches.length!==1)return;const H=U.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY),this.hasUserControl=!0)}onDocumentTouchMove(U){if(U.touches.length!==1)return;const H=U.touches[0];this.updateHoverState(H.clientX,H.clientY)&&(this.onInteract&&this.onInteract(),this.setCoords(H.clientX,H.clientY))}onTouchEnd(){this.isHoverInside=!1}onDocumentLeave(){this.isHoverInside=!1}update(){if(this.takeoverActive){const U=(performance.now()-this.takeoverStartTime)/(this.takeoverDuration*1e3);if(U>=1)this.takeoverActive=!1,this.coords.copy(this.takeoverTo),this.coords_old.copy(this.coords),this.diff.set(0,0);else{const H=U*U*(3-2*U);this.coords.copy(this.takeoverFrom).lerp(this.takeoverTo,H)}}this.diff.subVectors(this.coords,this.coords_old),this.coords_old.copy(this.coords),this.coords_old.x===0&&this.coords_old.y===0&&this.diff.set(0,0),this.isAutoActive&&!this.takeoverActive&&this.diff.multiplyScalar(this.autoIntensity)}}const j=new _e;class ce{constructor(U,H,ue){this.mouse=U,this.manager=H,this.enabled=ue.enabled,this.speed=ue.speed,this.resumeDelay=ue.resumeDelay||3e3,this.rampDurationMs=(ue.rampDuration||0)*1e3,this.active=!1,this.current=new Je(0,0),this.target=new Je,this.lastTime=performance.now(),this.activationTime=0,this.margin=.2,this._tmpDir=new Je,this.pickNewTarget()}pickNewTarget(){const U=Math.random;this.target.set((U()*2-1)*(1-this.margin),(U()*2-1)*(1-this.margin))}forceStop(){this.active=!1,this.mouse.isAutoActive=!1}update(){if(!this.enabled)return;const U=performance.now();if(U-this.manager.lastUserInteraction<this.resumeDelay){this.active&&this.forceStop();return}if(this.mouse.isHoverInside){this.active&&this.forceStop();return}if(this.active||(this.active=!0,this.current.copy(this.mouse.coords),this.lastTime=U,this.activationTime=U),!this.active)return;this.mouse.isAutoActive=!0;let ue=(U-this.lastTime)/1e3;this.lastTime=U,ue>.2&&(ue=.016);const pe=this._tmpDir.subVectors(this.target,this.current),ye=pe.length();if(ye<.01){this.pickNewTarget();return}pe.normalize();let qe=1;if(this.rampDurationMs>0){const Ve=Math.min(1,(U-this.activationTime)/this.rampDurationMs);qe=Ve*Ve*(3-2*Ve)}const ve=this.speed*ue*qe,Te=Math.min(ve,ye);this.current.addScaledVector(pe,Te),this.mouse.setNormalized(this.current.x,this.current.y)}}const O=`
  attribute vec3 position;
  uniform vec2 px;
  uniform vec2 boundarySpace;
  varying vec2 uv;
  precision highp float;
  void main(){
  vec3 pos = position;
  vec2 scale = 1.0 - boundarySpace * 2.0;
  pos.xy = pos.xy * scale;
  uv = vec2(0.5)+(pos.xy)*0.5;
  gl_Position = vec4(pos, 1.0);
}
`,le=`
  attribute vec3 position;
  uniform vec2 px;
  precision highp float;
  varying vec2 uv;
  void main(){
  vec3 pos = position;
  uv = 0.5 + pos.xy * 0.5;
  vec2 n = sign(pos.xy);
  pos.xy = abs(pos.xy) - px * 1.0;
  pos.xy *= n;
  gl_Position = vec4(pos, 1.0);
}
`,q=`
    precision highp float;
    attribute vec3 position;
    attribute vec2 uv;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 pos = position.xy * scale * 2.0 * px + center;
    vUv = uv;
    gl_Position = vec4(pos, 0.0, 1.0);
}
`,he=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform bool isBFECC;
    uniform vec2 fboSize;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    vec2 ratio = max(fboSize.x, fboSize.y) / fboSize;
    if(isBFECC == false){
        vec2 vel = texture2D(velocity, uv).xy;
        vec2 uv2 = uv - vel * dt * ratio;
        vec2 newVel = texture2D(velocity, uv2).xy;
        gl_FragColor = vec4(newVel, 0.0, 0.0);
    } else {
        vec2 spot_new = uv;
        vec2 vel_old = texture2D(velocity, uv).xy;
        vec2 spot_old = spot_new - vel_old * dt * ratio;
        vec2 vel_new1 = texture2D(velocity, spot_old).xy;
        vec2 spot_new2 = spot_old + vel_new1 * dt * ratio;
        vec2 error = spot_new2 - spot_new;
        vec2 spot_new3 = spot_new - error / 2.0;
        vec2 vel_2 = texture2D(velocity, spot_new3).xy;
        vec2 spot_old2 = spot_new3 - vel_2 * dt * ratio;
        vec2 newVel2 = texture2D(velocity, spot_old2).xy; 
        gl_FragColor = vec4(newVel2, 0.0, 0.0);
    }
}
`,Le=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D palette;
    uniform vec4 bgColor;
    varying vec2 uv;
    void main(){
    vec2 vel = texture2D(velocity, uv).xy;
    float lenv = clamp(length(vel), 0.0, 1.0);
    vec3 c = texture2D(palette, vec2(lenv, 0.5)).rgb;
    vec3 outRGB = mix(bgColor.rgb, c, lenv);
    float outA = mix(bgColor.a, 1.0, lenv);
    gl_FragColor = vec4(outRGB, outA);
}
`,ke=`
    precision highp float;
    uniform sampler2D velocity;
    uniform float dt;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float x0 = texture2D(velocity, uv-vec2(px.x, 0.0)).x;
    float x1 = texture2D(velocity, uv+vec2(px.x, 0.0)).x;
    float y0 = texture2D(velocity, uv-vec2(0.0, px.y)).y;
    float y1 = texture2D(velocity, uv+vec2(0.0, px.y)).y;
    float divergence = (x1 - x0 + y1 - y0) / 2.0;
    gl_FragColor = vec4(divergence / dt);
}
`,Q=`
    precision highp float;
    uniform vec2 force;
    uniform vec2 center;
    uniform vec2 scale;
    uniform vec2 px;
    varying vec2 vUv;
    void main(){
    vec2 circle = (vUv - 0.5) * 2.0;
    float d = 1.0 - min(length(circle), 1.0);
    d *= d;
    gl_FragColor = vec4(force * d, 0.0, 1.0);
}
`,oe=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D divergence;
    uniform vec2 px;
    varying vec2 uv;
    void main(){
    float p0 = texture2D(pressure, uv + vec2(px.x * 2.0, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * 2.0, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * 2.0)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * 2.0)).r;
    float div = texture2D(divergence, uv).r;
    float newP = (p0 + p1 + p2 + p3) / 4.0 - div;
    gl_FragColor = vec4(newP);
}
`,de=`
    precision highp float;
    uniform sampler2D pressure;
    uniform sampler2D velocity;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    float step = 1.0;
    float p0 = texture2D(pressure, uv + vec2(px.x * step, 0.0)).r;
    float p1 = texture2D(pressure, uv - vec2(px.x * step, 0.0)).r;
    float p2 = texture2D(pressure, uv + vec2(0.0, px.y * step)).r;
    float p3 = texture2D(pressure, uv - vec2(0.0, px.y * step)).r;
    vec2 v = texture2D(velocity, uv).xy;
    vec2 gradP = vec2(p0 - p1, p2 - p3) * 0.5;
    v = v - gradP * dt;
    gl_FragColor = vec4(v, 0.0, 1.0);
}
`,Me=`
    precision highp float;
    uniform sampler2D velocity;
    uniform sampler2D velocity_new;
    uniform float v;
    uniform vec2 px;
    uniform float dt;
    varying vec2 uv;
    void main(){
    vec2 old = texture2D(velocity, uv).xy;
    vec2 new0 = texture2D(velocity_new, uv + vec2(px.x * 2.0, 0.0)).xy;
    vec2 new1 = texture2D(velocity_new, uv - vec2(px.x * 2.0, 0.0)).xy;
    vec2 new2 = texture2D(velocity_new, uv + vec2(0.0, px.y * 2.0)).xy;
    vec2 new3 = texture2D(velocity_new, uv - vec2(0.0, px.y * 2.0)).xy;
    vec2 newv = 4.0 * old + v * dt * (new0 + new1 + new2 + new3);
    newv /= 4.0 * (1.0 + v * dt);
    gl_FragColor = vec4(newv, 0.0, 0.0);
}
`;class Fe{constructor(U){var H;this.props=U||{},this.uniforms=(H=this.props.material)==null?void 0:H.uniforms,this.scene=null,this.camera=null,this.material=null,this.geometry=null,this.plane=null}init(){this.scene=new Pg,this.camera=new $u,this.uniforms&&(this.material=new eu(this.props.material),this.geometry=new hs(2,2),this.plane=new Jn(this.geometry,this.material),this.scene.add(this.plane))}update(){re.renderer.setRenderTarget(this.props.output||null),re.renderer.render(this.scene,this.camera),re.renderer.setRenderTarget(null)}}class Be extends Fe{constructor(U){super({material:{vertexShader:O,fragmentShader:he,uniforms:{boundarySpace:{value:U.cellScale},px:{value:U.cellScale},fboSize:{value:U.fboSize},velocity:{value:U.src.texture},dt:{value:U.dt},isBFECC:{value:!0}}},output:U.dst}),this.uniforms=this.props.material.uniforms,this.init()}init(){super.init(),this.createBoundary()}createBoundary(){const U=new rr,H=new Float32Array([-1,-1,0,-1,1,0,-1,1,0,1,1,0,1,1,0,1,-1,0,1,-1,0,-1,-1,0]);U.setAttribute("position",new gi(H,3));const ue=new eu({vertexShader:le,fragmentShader:he,uniforms:this.uniforms});this.line=new pP(U,ue),this.scene.add(this.line)}update({dt:U,isBounce:H,BFECC:ue}){this.uniforms.dt.value=U,this.line.visible=H,this.uniforms.isBFECC.value=ue,super.update()}}class rt extends Fe{constructor(U){super({output:U.dst}),this.init(U)}init(U){super.init();const H=new hs(1,1),ue=new eu({vertexShader:q,fragmentShader:Q,blending:Vf,depthWrite:!1,uniforms:{px:{value:U.cellScale},force:{value:new Je(0,0)},center:{value:new Je(0,0)},scale:{value:new Je(U.cursor_size,U.cursor_size)}}});this.mouse=new Jn(H,ue),this.scene.add(this.mouse)}update(U){const H=j.diff.x/2*U.mouse_force,ue=j.diff.y/2*U.mouse_force,pe=U.cursor_size*U.cellScale.x,ye=U.cursor_size*U.cellScale.y,qe=Math.min(Math.max(j.coords.x,-1+pe+U.cellScale.x*2),1-pe-U.cellScale.x*2),ve=Math.min(Math.max(j.coords.y,-1+ye+U.cellScale.y*2),1-ye-U.cellScale.y*2),Te=this.mouse.material.uniforms;Te.force.value.set(H,ue),Te.center.value.set(qe,ve),Te.scale.value.set(U.cursor_size,U.cursor_size),super.update()}}class pt extends Fe{constructor(U){super({material:{vertexShader:O,fragmentShader:Me,uniforms:{boundarySpace:{value:U.boundarySpace},velocity:{value:U.src.texture},velocity_new:{value:U.dst_.texture},v:{value:U.viscous},px:{value:U.cellScale},dt:{value:U.dt}}},output:U.dst,output0:U.dst_,output1:U.dst}),this.init()}update({viscous:U,iterations:H,dt:ue}){let pe,ye;this.uniforms.v.value=U;for(let qe=0;qe<H;qe++)qe%2===0?(pe=this.props.output0,ye=this.props.output1):(pe=this.props.output1,ye=this.props.output0),this.uniforms.velocity_new.value=pe.texture,this.props.output=ye,this.uniforms.dt.value=ue,super.update();return ye}}class et extends Fe{constructor(U){super({material:{vertexShader:O,fragmentShader:ke,uniforms:{boundarySpace:{value:U.boundarySpace},velocity:{value:U.src.texture},px:{value:U.cellScale},dt:{value:U.dt}}},output:U.dst}),this.init()}update({vel:U}){this.uniforms.velocity.value=U.texture,super.update()}}class B extends Fe{constructor(U){super({material:{vertexShader:O,fragmentShader:oe,uniforms:{boundarySpace:{value:U.boundarySpace},pressure:{value:U.dst_.texture},divergence:{value:U.src.texture},px:{value:U.cellScale}}},output:U.dst,output0:U.dst_,output1:U.dst}),this.init()}update({iterations:U}){let H,ue;for(let pe=0;pe<U;pe++)pe%2===0?(H=this.props.output0,ue=this.props.output1):(H=this.props.output1,ue=this.props.output0),this.uniforms.pressure.value=H.texture,this.props.output=ue,super.update();return ue}}class Jt extends Fe{constructor(U){super({material:{vertexShader:O,fragmentShader:de,uniforms:{boundarySpace:{value:U.boundarySpace},pressure:{value:U.src_p.texture},velocity:{value:U.src_v.texture},px:{value:U.cellScale},dt:{value:U.dt}}},output:U.dst}),this.init()}update({vel:U,pressure:H}){this.uniforms.velocity.value=U.texture,this.uniforms.pressure.value=H.texture,super.update()}}class st{constructor(U){this.options={iterations_poisson:32,iterations_viscous:32,mouse_force:20,resolution:.5,cursor_size:100,viscous:30,isBounce:!1,dt:.014,isViscous:!1,BFECC:!0,...U},this.fbos={vel_0:null,vel_1:null,vel_viscous0:null,vel_viscous1:null,div:null,pressure_0:null,pressure_1:null},this.fboSize=new Je,this.cellScale=new Je,this.boundarySpace=new Je,this.init()}init(){this.calcSize(),this.createAllFBO(),this.createShaderPass()}getFloatType(){return/(iPad|iPhone|iPod)/i.test(navigator.userAgent)?Po:Pi}createAllFBO(){const H={type:this.getFloatType(),depthBuffer:!1,stencilBuffer:!1,minFilter:vn,magFilter:vn,wrapS:pi,wrapT:pi};for(let ue in this.fbos)this.fbos[ue]=new Or(this.fboSize.x,this.fboSize.y,H)}createShaderPass(){this.advection=new Be({cellScale:this.cellScale,fboSize:this.fboSize,dt:this.options.dt,src:this.fbos.vel_0,dst:this.fbos.vel_1}),this.externalForce=new rt({cellScale:this.cellScale,cursor_size:this.options.cursor_size,dst:this.fbos.vel_1}),this.viscous=new pt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,viscous:this.options.viscous,src:this.fbos.vel_1,dst:this.fbos.vel_viscous1,dst_:this.fbos.vel_viscous0,dt:this.options.dt}),this.divergence=new et({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.vel_viscous0,dst:this.fbos.div,dt:this.options.dt}),this.poisson=new B({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src:this.fbos.div,dst:this.fbos.pressure_1,dst_:this.fbos.pressure_0}),this.pressure=new Jt({cellScale:this.cellScale,boundarySpace:this.boundarySpace,src_p:this.fbos.pressure_0,src_v:this.fbos.vel_viscous0,dst:this.fbos.vel_0,dt:this.options.dt})}calcSize(){const U=Math.max(1,Math.round(this.options.resolution*re.width)),H=Math.max(1,Math.round(this.options.resolution*re.height)),ue=1/U,pe=1/H;this.cellScale.set(ue,pe),this.fboSize.set(U,H)}resize(){this.calcSize();for(let U in this.fbos)this.fbos[U].setSize(this.fboSize.x,this.fboSize.y)}update(){this.options.isBounce?this.boundarySpace.set(0,0):this.boundarySpace.copy(this.cellScale),this.advection.update({dt:this.options.dt,isBounce:this.options.isBounce,BFECC:this.options.BFECC}),this.externalForce.update({cursor_size:this.options.cursor_size,mouse_force:this.options.mouse_force,cellScale:this.cellScale});let U=this.fbos.vel_1;this.options.isViscous&&(U=this.viscous.update({viscous:this.options.viscous,iterations:this.options.iterations_viscous,dt:this.options.dt})),this.divergence.update({vel:U});const H=this.poisson.update({iterations:this.options.iterations_poisson});this.pressure.update({vel:U,pressure:H})}}class lt{constructor(){this.init()}init(){this.simulation=new st,this.scene=new Pg,this.camera=new $u,this.output=new Jn(new hs(2,2),new eu({vertexShader:O,fragmentShader:Le,transparent:!0,depthWrite:!1,uniforms:{velocity:{value:this.simulation.fbos.vel_0.texture},boundarySpace:{value:new Je},palette:{value:R},bgColor:{value:te}}})),this.scene.add(this.output)}addScene(U){this.scene.add(U)}resize(){this.simulation.resize()}render(){re.renderer.setRenderTarget(null),re.renderer.render(this.scene,this.camera)}update(){this.simulation.update(),this.render()}}class He{constructor(U){this.props=U,re.init(U.$wrapper),j.init(U.$wrapper),j.autoIntensity=U.autoIntensity,j.takeoverDuration=U.takeoverDuration,this.lastUserInteraction=performance.now(),j.onInteract=()=>{this.lastUserInteraction=performance.now(),this.autoDriver&&this.autoDriver.forceStop()},this.autoDriver=new ce(j,this,{enabled:U.autoDemo,speed:U.autoSpeed,resumeDelay:U.autoResumeDelay,rampDuration:U.autoRampDuration}),this.init(),this._loop=this.loop.bind(this),this._resize=this.resize.bind(this),window.addEventListener("resize",this._resize),this._onVisibility=()=>{document.hidden?this.pause():k.current&&this.start()},document.addEventListener("visibilitychange",this._onVisibility),this.running=!1}init(){this.props.$wrapper.prepend(re.renderer.domElement),this.output=new lt}resize(){re.resize(),this.output.resize()}render(){this.autoDriver&&this.autoDriver.update(),j.update(),re.update(),this.output.update()}loop(){this.running&&(this.render(),D.current=requestAnimationFrame(this._loop))}start(){this.running||(this.running=!0,this._loop())}pause(){this.running=!1,D.current&&(cancelAnimationFrame(D.current),D.current=null)}dispose(){try{if(window.removeEventListener("resize",this._resize),document.removeEventListener("visibilitychange",this._onVisibility),j.dispose(),re.renderer){const U=re.renderer.domElement;U&&U.parentNode&&U.parentNode.removeChild(U),re.renderer.dispose(),re.renderer.forceContextLoss()}}catch{}}}const ot=S.current;ot.style.position=ot.style.position||"relative",ot.style.overflow=ot.style.overflow||"hidden";const Ge=new He({$wrapper:ot,autoDemo:x,autoSpeed:w,autoIntensity:T,takeoverDuration:y,autoResumeDelay:p,autoRampDuration:M});P.current=Ge,(()=>{var H;if(!P.current)return;const ne=(H=P.current.output)==null?void 0:H.simulation;if(!ne)return;const U=ne.options.resolution;Object.assign(ne.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:s,iterations_poisson:o,dt:l,BFECC:c,resolution:h,isBounce:d}),h!==U&&ne.resize()})(),Ge.start();const C=new IntersectionObserver(ne=>{const U=ne[0],H=U.isIntersecting&&U.intersectionRatio>0;k.current=H,P.current&&(H&&!document.hidden?P.current.start():P.current.pause())},{threshold:[0,.01,.1]});C.observe(ot),I.current=C;const Z=new ResizeObserver(()=>{P.current&&(ae.current&&cancelAnimationFrame(ae.current),ae.current=requestAnimationFrame(()=>{P.current&&P.current.resize()}))});return Z.observe(ot),z.current=Z,()=>{if(D.current&&cancelAnimationFrame(D.current),z.current)try{z.current.disconnect()}catch{}if(I.current)try{I.current.disconnect()}catch{}P.current&&P.current.dispose(),P.current=null}},[c,e,l,d,n,o,s,t,h,i,m,x,w,T,y,p,M]),Ne.useEffect(()=>{var ie;const E=P.current;if(!E)return;const R=(ie=E.output)==null?void 0:ie.simulation;if(!R)return;const te=R.options.resolution;Object.assign(R.options,{mouse_force:t,cursor_size:e,isViscous:n,viscous:i,iterations_viscous:s,iterations_poisson:o,dt:l,BFECC:c,resolution:h,isBounce:d}),E.autoDriver&&(E.autoDriver.enabled=x,E.autoDriver.speed=w,E.autoDriver.resumeDelay=p,E.autoDriver.rampDurationMs=M*1e3,E.autoDriver.mouse&&(E.autoDriver.mouse.autoIntensity=T,E.autoDriver.mouse.takeoverDuration=y)),h!==te&&R.resize()},[t,e,n,i,s,o,l,c,h,d,x,w,T,y,p,M]),$.jsx("div",{ref:S,className:`liquid-ether-container ${_||""}`,style:g})}const xc={en:{appName:"CivicConnect",citizen:"Citizen",admin:"Admin / NGO",logout:"Logout",settings:"Settings",language:"Language",theme:"Theme",light:"Light",dark:"Dark",system:"System",reportIssue:"Report Issue",myIssues:"My Issues",allIssues:"All Issues",useMyLocation:"Use My Location",submit:"Submit",pending:"Pending",resolved:"Resolved",totalIssues:"Total Issues",search:"Search issues...",newest:"Newest",oldest:"Oldest"},hi:{appName:"सिविककनेक्ट",citizen:"नागरिक",admin:"एडमिन / एनजीओ",logout:"लॉगआउट",settings:"सेटिंग्स",language:"भाषा",theme:"थीम",light:"लाइट",dark:"डार्क",system:"सिस्टम",reportIssue:"समस्या दर्ज करें",myIssues:"मेरी समस्याएं",allIssues:"सभी समस्याएं",useMyLocation:"मेरा स्थान उपयोग करें",submit:"सबमिट करें",pending:"लंबित",resolved:"समाधान किया गया",totalIssues:"कुल समस्याएं",search:"समस्याएं खोजें...",newest:"नवीनतम",oldest:"पुराना"}};function gP({language:t,onAuth:e}){const n=xc[t],[i,s]=Ne.useState("citizen"),[o,l]=Ne.useState("login"),[c,h]=Ne.useState({name:"",email:"",password:""}),d=i==="citizen"?n.citizen:n.admin,m=g=>{g.preventDefault(),e({role:i,mode:o,name:c.name.trim(),email:c.email.trim().toLowerCase(),password:c.password})};return $.jsx("div",{className:"page-shell",children:$.jsxs("div",{className:"auth-panel glass",children:[$.jsx("h1",{children:n.appName}),$.jsx("p",{className:"muted",children:"Civic issue reporting and resolution platform."}),$.jsxs("div",{className:"segmented",children:[$.jsx("button",{className:i==="citizen"?"active":"",onClick:()=>s("citizen"),children:n.citizen}),$.jsx("button",{className:i==="admin"?"active":"",onClick:()=>s("admin"),children:n.admin})]}),$.jsxs("div",{className:"segmented mode",children:[$.jsx("button",{className:o==="login"?"active":"",onClick:()=>l("login"),children:"Login"}),$.jsx("button",{className:o==="signup"?"active":"",onClick:()=>l("signup"),children:"Signup"})]}),$.jsxs("form",{className:"auth-form",onSubmit:m,children:[o==="signup"&&$.jsxs("label",{children:["Name",$.jsx("input",{value:c.name,onChange:g=>h(_=>({..._,name:g.target.value})),required:!0})]}),$.jsxs("label",{children:["Email",$.jsx("input",{type:"email",value:c.email,onChange:g=>h(_=>({..._,email:g.target.value})),required:!0})]}),$.jsxs("label",{children:["Password",$.jsx("input",{type:"password",minLength:6,value:c.password,onChange:g=>h(_=>({..._,password:g.target.value})),required:!0})]}),$.jsx("button",{className:"btn-primary",type:"submit",children:o==="login"?`Login as ${d}`:`Create ${d} Account`})]}),$.jsx("p",{className:"muted seed",children:"Demo admin: admin@civicconnect.local / admin123"})]})})}function Cy(t,e){const n=Ne.useRef(e);Ne.useEffect(function(){e!==n.current&&t.attributionControl!=null&&(n.current!=null&&t.attributionControl.removeAttribution(n.current),e!=null&&t.attributionControl.addAttribution(e)),n.current=e},[t,e])}const vP=1;function yP(t){return Object.freeze({__version:vP,map:t})}function xP(t,e){return Object.freeze({...t,...e})}const Py=Ne.createContext(null),Ry=Py.Provider;function Up(){const t=Ne.useContext(Py);if(t==null)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return t}function SP(t){function e(n,i){const{instance:s,context:o}=t(n).current;return Ne.useImperativeHandle(i,()=>s),n.children==null?null:Su.createElement(Ry,{value:o},n.children)}return Ne.forwardRef(e)}function MP(t){function e(n,i){const[s,o]=Ne.useState(!1),{instance:l}=t(n,o).current;Ne.useImperativeHandle(i,()=>l),Ne.useEffect(function(){s&&l.update()},[l,s,n.children]);const c=l._contentNode;return c?q0.createPortal(n.children,c):null}return Ne.forwardRef(e)}function EP(t){function e(n,i){const{instance:s}=t(n).current;return Ne.useImperativeHandle(i,()=>s),null}return Ne.forwardRef(e)}function Ly(t,e){const n=Ne.useRef();Ne.useEffect(function(){return e!=null&&t.instance.on(e),n.current=e,function(){n.current!=null&&t.instance.off(n.current),n.current=null}},[t,e])}function Op(t,e){const n=t.pane??e.pane;return n?{...t,pane:n}:t}function wP(t,e){return function(i,s){const o=Up(),l=t(Op(i,o),o);return Cy(o.map,i.attribution),Ly(l.current,i.eventHandlers),e(l.current,o,i,s),l}}var Ld={exports:{}};/* @preserve
 * Leaflet 1.9.4, a JS library for interactive maps. https://leafletjs.com
 * (c) 2010-2023 Vladimir Agafonkin, (c) 2010-2011 CloudMade
 */(function(t,e){(function(n,i){i(e)})(Ux,function(n){var i="1.9.4";function s(r){var a,u,f,v;for(u=1,f=arguments.length;u<f;u++){v=arguments[u];for(a in v)r[a]=v[a]}return r}var o=Object.create||function(){function r(){}return function(a){return r.prototype=a,new r}}();function l(r,a){var u=Array.prototype.slice;if(r.bind)return r.bind.apply(r,u.call(arguments,1));var f=u.call(arguments,2);return function(){return r.apply(a,f.length?f.concat(u.call(arguments)):arguments)}}var c=0;function h(r){return"_leaflet_id"in r||(r._leaflet_id=++c),r._leaflet_id}function d(r,a,u){var f,v,A,F;return F=function(){f=!1,v&&(A.apply(u,v),v=!1)},A=function(){f?v=arguments:(r.apply(u,arguments),setTimeout(F,a),f=!0)},A}function m(r,a,u){var f=a[1],v=a[0],A=f-v;return r===f&&u?r:((r-v)%A+A)%A+v}function g(){return!1}function _(r,a){if(a===!1)return r;var u=Math.pow(10,a===void 0?6:a);return Math.round(r*u)/u}function x(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function w(r){return x(r).split(/\s+/)}function T(r,a){Object.prototype.hasOwnProperty.call(r,"options")||(r.options=r.options?o(r.options):{});for(var u in a)r.options[u]=a[u];return r.options}function y(r,a,u){var f=[];for(var v in r)f.push(encodeURIComponent(u?v.toUpperCase():v)+"="+encodeURIComponent(r[v]));return(!a||a.indexOf("?")===-1?"?":"&")+f.join("&")}var p=/\{ *([\w_ -]+) *\}/g;function M(r,a){return r.replace(p,function(u,f){var v=a[f];if(v===void 0)throw new Error("No value provided for variable "+u);return typeof v=="function"&&(v=v(a)),v})}var S=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"};function P(r,a){for(var u=0;u<r.length;u++)if(r[u]===a)return u;return-1}var z="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";function D(r){return window["webkit"+r]||window["moz"+r]||window["ms"+r]}var I=0;function k(r){var a=+new Date,u=Math.max(0,16-(a-I));return I=a+u,window.setTimeout(r,u)}var ae=window.requestAnimationFrame||D("RequestAnimationFrame")||k,E=window.cancelAnimationFrame||D("CancelAnimationFrame")||D("CancelRequestAnimationFrame")||function(r){window.clearTimeout(r)};function R(r,a,u){if(u&&ae===k)r.call(a);else return ae.call(window,l(r,a))}function te(r){r&&E.call(window,r)}var ie={__proto__:null,extend:s,create:o,bind:l,get lastId(){return c},stamp:h,throttle:d,wrapNum:m,falseFn:g,formatNum:_,trim:x,splitWords:w,setOptions:T,getParamString:y,template:M,isArray:S,indexOf:P,emptyImageUrl:z,requestFn:ae,cancelFn:E,requestAnimFrame:R,cancelAnimFrame:te};function re(){}re.extend=function(r){var a=function(){T(this),this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},u=a.__super__=this.prototype,f=o(u);f.constructor=a,a.prototype=f;for(var v in this)Object.prototype.hasOwnProperty.call(this,v)&&v!=="prototype"&&v!=="__super__"&&(a[v]=this[v]);return r.statics&&s(a,r.statics),r.includes&&(_e(r.includes),s.apply(null,[f].concat(r.includes))),s(f,r),delete f.statics,delete f.includes,f.options&&(f.options=u.options?o(u.options):{},s(f.options,r.options)),f._initHooks=[],f.callInitHooks=function(){if(!this._initHooksCalled){u.callInitHooks&&u.callInitHooks.call(this),this._initHooksCalled=!0;for(var A=0,F=f._initHooks.length;A<F;A++)f._initHooks[A].call(this)}},a},re.include=function(r){var a=this.prototype.options;return s(this.prototype,r),r.options&&(this.prototype.options=a,this.mergeOptions(r.options)),this},re.mergeOptions=function(r){return s(this.prototype.options,r),this},re.addInitHook=function(r){var a=Array.prototype.slice.call(arguments,1),u=typeof r=="function"?r:function(){this[r].apply(this,a)};return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(u),this};function _e(r){if(!(typeof L>"u"||!L||!L.Mixin)){r=S(r)?r:[r];for(var a=0;a<r.length;a++)r[a]===L.Mixin.Events&&console.warn("Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",new Error().stack)}}var j={on:function(r,a,u){if(typeof r=="object")for(var f in r)this._on(f,r[f],a);else{r=w(r);for(var v=0,A=r.length;v<A;v++)this._on(r[v],a,u)}return this},off:function(r,a,u){if(!arguments.length)delete this._events;else if(typeof r=="object")for(var f in r)this._off(f,r[f],a);else{r=w(r);for(var v=arguments.length===1,A=0,F=r.length;A<F;A++)v?this._off(r[A]):this._off(r[A],a,u)}return this},_on:function(r,a,u,f){if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}if(this._listens(r,a,u)===!1){u===this&&(u=void 0);var v={fn:a,ctx:u};f&&(v.once=!0),this._events=this._events||{},this._events[r]=this._events[r]||[],this._events[r].push(v)}},_off:function(r,a,u){var f,v,A;if(this._events&&(f=this._events[r],!!f)){if(arguments.length===1){if(this._firingCount)for(v=0,A=f.length;v<A;v++)f[v].fn=g;delete this._events[r];return}if(typeof a!="function"){console.warn("wrong listener type: "+typeof a);return}var F=this._listens(r,a,u);if(F!==!1){var X=f[F];this._firingCount&&(X.fn=g,this._events[r]=f=f.slice()),f.splice(F,1)}}},fire:function(r,a,u){if(!this.listens(r,u))return this;var f=s({},a,{type:r,target:this,sourceTarget:a&&a.sourceTarget||this});if(this._events){var v=this._events[r];if(v){this._firingCount=this._firingCount+1||1;for(var A=0,F=v.length;A<F;A++){var X=v[A],J=X.fn;X.once&&this.off(r,J,X.ctx),J.call(X.ctx||this,f)}this._firingCount--}}return u&&this._propagateEvent(f),this},listens:function(r,a,u,f){typeof r!="string"&&console.warn('"string" type argument expected');var v=a;typeof a!="function"&&(f=!!a,v=void 0,u=void 0);var A=this._events&&this._events[r];if(A&&A.length&&this._listens(r,v,u)!==!1)return!0;if(f){for(var F in this._eventParents)if(this._eventParents[F].listens(r,a,u,f))return!0}return!1},_listens:function(r,a,u){if(!this._events)return!1;var f=this._events[r]||[];if(!a)return!!f.length;u===this&&(u=void 0);for(var v=0,A=f.length;v<A;v++)if(f[v].fn===a&&f[v].ctx===u)return v;return!1},once:function(r,a,u){if(typeof r=="object")for(var f in r)this._on(f,r[f],a,!0);else{r=w(r);for(var v=0,A=r.length;v<A;v++)this._on(r[v],a,u,!0)}return this},addEventParent:function(r){return this._eventParents=this._eventParents||{},this._eventParents[h(r)]=r,this},removeEventParent:function(r){return this._eventParents&&delete this._eventParents[h(r)],this},_propagateEvent:function(r){for(var a in this._eventParents)this._eventParents[a].fire(r.type,s({layer:r.target,propagatedFrom:r.target},r),!0)}};j.addEventListener=j.on,j.removeEventListener=j.clearAllEventListeners=j.off,j.addOneTimeEventListener=j.once,j.fireEvent=j.fire,j.hasEventListeners=j.listens;var ce=re.extend(j);function O(r,a,u){this.x=u?Math.round(r):r,this.y=u?Math.round(a):a}var le=Math.trunc||function(r){return r>0?Math.floor(r):Math.ceil(r)};O.prototype={clone:function(){return new O(this.x,this.y)},add:function(r){return this.clone()._add(q(r))},_add:function(r){return this.x+=r.x,this.y+=r.y,this},subtract:function(r){return this.clone()._subtract(q(r))},_subtract:function(r){return this.x-=r.x,this.y-=r.y,this},divideBy:function(r){return this.clone()._divideBy(r)},_divideBy:function(r){return this.x/=r,this.y/=r,this},multiplyBy:function(r){return this.clone()._multiplyBy(r)},_multiplyBy:function(r){return this.x*=r,this.y*=r,this},scaleBy:function(r){return new O(this.x*r.x,this.y*r.y)},unscaleBy:function(r){return new O(this.x/r.x,this.y/r.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},trunc:function(){return this.clone()._trunc()},_trunc:function(){return this.x=le(this.x),this.y=le(this.y),this},distanceTo:function(r){r=q(r);var a=r.x-this.x,u=r.y-this.y;return Math.sqrt(a*a+u*u)},equals:function(r){return r=q(r),r.x===this.x&&r.y===this.y},contains:function(r){return r=q(r),Math.abs(r.x)<=Math.abs(this.x)&&Math.abs(r.y)<=Math.abs(this.y)},toString:function(){return"Point("+_(this.x)+", "+_(this.y)+")"}};function q(r,a,u){return r instanceof O?r:S(r)?new O(r[0],r[1]):r==null?r:typeof r=="object"&&"x"in r&&"y"in r?new O(r.x,r.y):new O(r,a,u)}function he(r,a){if(r)for(var u=a?[r,a]:r,f=0,v=u.length;f<v;f++)this.extend(u[f])}he.prototype={extend:function(r){var a,u;if(!r)return this;if(r instanceof O||typeof r[0]=="number"||"x"in r)a=u=q(r);else if(r=Le(r),a=r.min,u=r.max,!a||!u)return this;return!this.min&&!this.max?(this.min=a.clone(),this.max=u.clone()):(this.min.x=Math.min(a.x,this.min.x),this.max.x=Math.max(u.x,this.max.x),this.min.y=Math.min(a.y,this.min.y),this.max.y=Math.max(u.y,this.max.y)),this},getCenter:function(r){return q((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,r)},getBottomLeft:function(){return q(this.min.x,this.max.y)},getTopRight:function(){return q(this.max.x,this.min.y)},getTopLeft:function(){return this.min},getBottomRight:function(){return this.max},getSize:function(){return this.max.subtract(this.min)},contains:function(r){var a,u;return typeof r[0]=="number"||r instanceof O?r=q(r):r=Le(r),r instanceof he?(a=r.min,u=r.max):a=u=r,a.x>=this.min.x&&u.x<=this.max.x&&a.y>=this.min.y&&u.y<=this.max.y},intersects:function(r){r=Le(r);var a=this.min,u=this.max,f=r.min,v=r.max,A=v.x>=a.x&&f.x<=u.x,F=v.y>=a.y&&f.y<=u.y;return A&&F},overlaps:function(r){r=Le(r);var a=this.min,u=this.max,f=r.min,v=r.max,A=v.x>a.x&&f.x<u.x,F=v.y>a.y&&f.y<u.y;return A&&F},isValid:function(){return!!(this.min&&this.max)},pad:function(r){var a=this.min,u=this.max,f=Math.abs(a.x-u.x)*r,v=Math.abs(a.y-u.y)*r;return Le(q(a.x-f,a.y-v),q(u.x+f,u.y+v))},equals:function(r){return r?(r=Le(r),this.min.equals(r.getTopLeft())&&this.max.equals(r.getBottomRight())):!1}};function Le(r,a){return!r||r instanceof he?r:new he(r,a)}function ke(r,a){if(r)for(var u=a?[r,a]:r,f=0,v=u.length;f<v;f++)this.extend(u[f])}ke.prototype={extend:function(r){var a=this._southWest,u=this._northEast,f,v;if(r instanceof oe)f=r,v=r;else if(r instanceof ke){if(f=r._southWest,v=r._northEast,!f||!v)return this}else return r?this.extend(de(r)||Q(r)):this;return!a&&!u?(this._southWest=new oe(f.lat,f.lng),this._northEast=new oe(v.lat,v.lng)):(a.lat=Math.min(f.lat,a.lat),a.lng=Math.min(f.lng,a.lng),u.lat=Math.max(v.lat,u.lat),u.lng=Math.max(v.lng,u.lng)),this},pad:function(r){var a=this._southWest,u=this._northEast,f=Math.abs(a.lat-u.lat)*r,v=Math.abs(a.lng-u.lng)*r;return new ke(new oe(a.lat-f,a.lng-v),new oe(u.lat+f,u.lng+v))},getCenter:function(){return new oe((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new oe(this.getNorth(),this.getWest())},getSouthEast:function(){return new oe(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(r){typeof r[0]=="number"||r instanceof oe||"lat"in r?r=de(r):r=Q(r);var a=this._southWest,u=this._northEast,f,v;return r instanceof ke?(f=r.getSouthWest(),v=r.getNorthEast()):f=v=r,f.lat>=a.lat&&v.lat<=u.lat&&f.lng>=a.lng&&v.lng<=u.lng},intersects:function(r){r=Q(r);var a=this._southWest,u=this._northEast,f=r.getSouthWest(),v=r.getNorthEast(),A=v.lat>=a.lat&&f.lat<=u.lat,F=v.lng>=a.lng&&f.lng<=u.lng;return A&&F},overlaps:function(r){r=Q(r);var a=this._southWest,u=this._northEast,f=r.getSouthWest(),v=r.getNorthEast(),A=v.lat>a.lat&&f.lat<u.lat,F=v.lng>a.lng&&f.lng<u.lng;return A&&F},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(r,a){return r?(r=Q(r),this._southWest.equals(r.getSouthWest(),a)&&this._northEast.equals(r.getNorthEast(),a)):!1},isValid:function(){return!!(this._southWest&&this._northEast)}};function Q(r,a){return r instanceof ke?r:new ke(r,a)}function oe(r,a,u){if(isNaN(r)||isNaN(a))throw new Error("Invalid LatLng object: ("+r+", "+a+")");this.lat=+r,this.lng=+a,u!==void 0&&(this.alt=+u)}oe.prototype={equals:function(r,a){if(!r)return!1;r=de(r);var u=Math.max(Math.abs(this.lat-r.lat),Math.abs(this.lng-r.lng));return u<=(a===void 0?1e-9:a)},toString:function(r){return"LatLng("+_(this.lat,r)+", "+_(this.lng,r)+")"},distanceTo:function(r){return Fe.distance(this,de(r))},wrap:function(){return Fe.wrapLatLng(this)},toBounds:function(r){var a=180*r/40075017,u=a/Math.cos(Math.PI/180*this.lat);return Q([this.lat-a,this.lng-u],[this.lat+a,this.lng+u])},clone:function(){return new oe(this.lat,this.lng,this.alt)}};function de(r,a,u){return r instanceof oe?r:S(r)&&typeof r[0]!="object"?r.length===3?new oe(r[0],r[1],r[2]):r.length===2?new oe(r[0],r[1]):null:r==null?r:typeof r=="object"&&"lat"in r?new oe(r.lat,"lng"in r?r.lng:r.lon,r.alt):a===void 0?null:new oe(r,a,u)}var Me={latLngToPoint:function(r,a){var u=this.projection.project(r),f=this.scale(a);return this.transformation._transform(u,f)},pointToLatLng:function(r,a){var u=this.scale(a),f=this.transformation.untransform(r,u);return this.projection.unproject(f)},project:function(r){return this.projection.project(r)},unproject:function(r){return this.projection.unproject(r)},scale:function(r){return 256*Math.pow(2,r)},zoom:function(r){return Math.log(r/256)/Math.LN2},getProjectedBounds:function(r){if(this.infinite)return null;var a=this.projection.bounds,u=this.scale(r),f=this.transformation.transform(a.min,u),v=this.transformation.transform(a.max,u);return new he(f,v)},infinite:!1,wrapLatLng:function(r){var a=this.wrapLng?m(r.lng,this.wrapLng,!0):r.lng,u=this.wrapLat?m(r.lat,this.wrapLat,!0):r.lat,f=r.alt;return new oe(u,a,f)},wrapLatLngBounds:function(r){var a=r.getCenter(),u=this.wrapLatLng(a),f=a.lat-u.lat,v=a.lng-u.lng;if(f===0&&v===0)return r;var A=r.getSouthWest(),F=r.getNorthEast(),X=new oe(A.lat-f,A.lng-v),J=new oe(F.lat-f,F.lng-v);return new ke(X,J)}},Fe=s({},Me,{wrapLng:[-180,180],R:6371e3,distance:function(r,a){var u=Math.PI/180,f=r.lat*u,v=a.lat*u,A=Math.sin((a.lat-r.lat)*u/2),F=Math.sin((a.lng-r.lng)*u/2),X=A*A+Math.cos(f)*Math.cos(v)*F*F,J=2*Math.atan2(Math.sqrt(X),Math.sqrt(1-X));return this.R*J}}),Be=6378137,rt={R:Be,MAX_LATITUDE:85.0511287798,project:function(r){var a=Math.PI/180,u=this.MAX_LATITUDE,f=Math.max(Math.min(u,r.lat),-u),v=Math.sin(f*a);return new O(this.R*r.lng*a,this.R*Math.log((1+v)/(1-v))/2)},unproject:function(r){var a=180/Math.PI;return new oe((2*Math.atan(Math.exp(r.y/this.R))-Math.PI/2)*a,r.x*a/this.R)},bounds:function(){var r=Be*Math.PI;return new he([-r,-r],[r,r])}()};function pt(r,a,u,f){if(S(r)){this._a=r[0],this._b=r[1],this._c=r[2],this._d=r[3];return}this._a=r,this._b=a,this._c=u,this._d=f}pt.prototype={transform:function(r,a){return this._transform(r.clone(),a)},_transform:function(r,a){return a=a||1,r.x=a*(this._a*r.x+this._b),r.y=a*(this._c*r.y+this._d),r},untransform:function(r,a){return a=a||1,new O((r.x/a-this._b)/this._a,(r.y/a-this._d)/this._c)}};function et(r,a,u,f){return new pt(r,a,u,f)}var B=s({},Fe,{code:"EPSG:3857",projection:rt,transformation:function(){var r=.5/(Math.PI*rt.R);return et(r,.5,-r,.5)}()}),Jt=s({},B,{code:"EPSG:900913"});function st(r){return document.createElementNS("http://www.w3.org/2000/svg",r)}function lt(r,a){var u="",f,v,A,F,X,J;for(f=0,A=r.length;f<A;f++){for(X=r[f],v=0,F=X.length;v<F;v++)J=X[v],u+=(v?"L":"M")+J.x+" "+J.y;u+=a?Oe.svg?"z":"x":""}return u||"M0 0"}var He=document.documentElement.style,ot="ActiveXObject"in window,Ge=ot&&!document.addEventListener,N="msLaunchUri"in navigator&&!("documentMode"in document),C=Un("webkit"),Z=Un("android"),ne=Un("android 2")||Un("android 3"),U=parseInt(/WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],10),H=Z&&Un("Google")&&U<537&&!("AudioNode"in window),ue=!!window.opera,pe=!N&&Un("chrome"),ye=Un("gecko")&&!C&&!ue&&!ot,qe=!pe&&Un("safari"),ve=Un("phantom"),Te="OTransition"in He,Ve=navigator.platform.indexOf("Win")===0,Ze=ot&&"transition"in He,be="WebKitCSSMatrix"in window&&"m11"in new window.WebKitCSSMatrix&&!ne,ut="MozPerspective"in He,Ye=!window.L_DISABLE_3D&&(Ze||be||ut)&&!Te&&!ve,yt=typeof orientation<"u"||Un("mobile"),V=yt&&C,Pe=yt&&be,se=!window.PointerEvent&&window.MSPointerEvent,fe=!!(window.PointerEvent||se),Ae="ontouchstart"in window||!!window.TouchEvent,Re=!window.L_NO_TOUCH&&(Ae||fe),ft=yt&&ue,Ut=yt&&ye,on=(window.devicePixelRatio||window.screen.deviceXDPI/window.screen.logicalXDPI)>1,_t=function(){var r=!1;try{var a=Object.defineProperty({},"passive",{get:function(){r=!0}});window.addEventListener("testPassiveEventSupport",g,a),window.removeEventListener("testPassiveEventSupport",g,a)}catch{}return r}(),an=function(){return!!document.createElement("canvas").getContext}(),Nn=!!(document.createElementNS&&st("svg").createSVGRect),Ya=!!Nn&&function(){var r=document.createElement("div");return r.innerHTML="<svg/>",(r.firstChild&&r.firstChild.namespaceURI)==="http://www.w3.org/2000/svg"}(),Ka=!Nn&&function(){try{var r=document.createElement("div");r.innerHTML='<v:shape adj="1"/>';var a=r.firstChild;return a.style.behavior="url(#default#VML)",a&&typeof a.adj=="object"}catch{return!1}}(),bi=navigator.platform.indexOf("Mac")===0,bo=navigator.platform.indexOf("Linux")===0;function Un(r){return navigator.userAgent.toLowerCase().indexOf(r)>=0}var Oe={ie:ot,ielt9:Ge,edge:N,webkit:C,android:Z,android23:ne,androidStock:H,opera:ue,chrome:pe,gecko:ye,safari:qe,phantom:ve,opera12:Te,win:Ve,ie3d:Ze,webkit3d:be,gecko3d:ut,any3d:Ye,mobile:yt,mobileWebkit:V,mobileWebkit3d:Pe,msPointer:se,pointer:fe,touch:Re,touchNative:Ae,mobileOpera:ft,mobileGecko:Ut,retina:on,passiveEvents:_t,canvas:an,svg:Nn,vml:Ka,inlineSvg:Ya,mac:bi,linux:bo},Hr=Oe.msPointer?"MSPointerDown":"pointerdown",Io=Oe.msPointer?"MSPointerMove":"pointermove",Vr=Oe.msPointer?"MSPointerUp":"pointerup",Do=Oe.msPointer?"MSPointerCancel":"pointercancel",xs={touchstart:Hr,touchmove:Io,touchend:Vr,touchcancel:Do},$a={touchstart:De,touchmove:we,touchend:we,touchcancel:we},sr={},Qa=!1;function b(r,a,u){return a==="touchstart"&&Se(),$a[a]?(u=$a[a].bind(this,u),r.addEventListener(xs[a],u,!1),u):(console.warn("wrong event specified:",a),g)}function G(r,a,u){if(!xs[a]){console.warn("wrong event specified:",a);return}r.removeEventListener(xs[a],u,!1)}function Y(r){sr[r.pointerId]=r}function K(r){sr[r.pointerId]&&(sr[r.pointerId]=r)}function W(r){delete sr[r.pointerId]}function Se(){Qa||(document.addEventListener(Hr,Y,!0),document.addEventListener(Io,K,!0),document.addEventListener(Vr,W,!0),document.addEventListener(Do,W,!0),Qa=!0)}function we(r,a){if(a.pointerType!==(a.MSPOINTER_TYPE_MOUSE||"mouse")){a.touches=[];for(var u in sr)a.touches.push(sr[u]);a.changedTouches=[a],r(a)}}function De(r,a){a.MSPOINTER_TYPE_TOUCH&&a.pointerType===a.MSPOINTER_TYPE_TOUCH&&tn(a),we(r,a)}function Ue(r){var a={},u,f;for(f in r)u=r[f],a[f]=u&&u.bind?u.bind(r):u;return r=a,a.type="dblclick",a.detail=2,a.isTrusted=!1,a._simulated=!0,a}var We=200;function je(r,a){r.addEventListener("dblclick",a);var u=0,f;function v(A){if(A.detail!==1){f=A.detail;return}if(!(A.pointerType==="mouse"||A.sourceCapabilities&&!A.sourceCapabilities.firesTouchEvents)){var F=Vp(A);if(!(F.some(function(J){return J instanceof HTMLLabelElement&&J.attributes.for})&&!F.some(function(J){return J instanceof HTMLInputElement||J instanceof HTMLSelectElement}))){var X=Date.now();X-u<=We?(f++,f===2&&a(Ue(A))):f=1,u=X}}}return r.addEventListener("click",v),{dblclick:a,simDblclick:v}}function ze(r,a){r.removeEventListener("dblclick",a.dblclick),r.removeEventListener("click",a.simDblclick)}var gt=Ss(["transform","webkitTransform","OTransform","MozTransform","msTransform"]),xt=Ss(["webkitTransition","transition","OTransition","MozTransition","msTransition"]),At=xt==="webkitTransition"||xt==="OTransition"?xt+"End":"transitionend";function ln(r){return typeof r=="string"?document.getElementById(r):r}function ht(r,a){var u=r.style[a]||r.currentStyle&&r.currentStyle[a];if((!u||u==="auto")&&document.defaultView){var f=document.defaultView.getComputedStyle(r,null);u=f?f[a]:null}return u==="auto"?null:u}function xe(r,a,u){var f=document.createElement(r);return f.className=a||"",u&&u.appendChild(f),f}function tt(r){var a=r.parentNode;a&&a.removeChild(r)}function dt(r){for(;r.firstChild;)r.removeChild(r.firstChild)}function qt(r){var a=r.parentNode;a&&a.lastChild!==r&&a.appendChild(r)}function On(r){var a=r.parentNode;a&&a.firstChild!==r&&a.insertBefore(r,a.firstChild)}function en(r,a){if(r.classList!==void 0)return r.classList.contains(a);var u=or(r);return u.length>0&&new RegExp("(^|\\s)"+a+"(\\s|$)").test(u)}function Ke(r,a){if(r.classList!==void 0)for(var u=w(a),f=0,v=u.length;f<v;f++)r.classList.add(u[f]);else if(!en(r,a)){var A=or(r);Xn(r,(A?A+" ":"")+a)}}function $e(r,a){r.classList!==void 0?r.classList.remove(a):Xn(r,x((" "+or(r)+" ").replace(" "+a+" "," ")))}function Xn(r,a){r.className.baseVal===void 0?r.className=a:r.className.baseVal=a}function or(r){return r.correspondingElement&&(r=r.correspondingElement),r.className.baseVal===void 0?r.className:r.className.baseVal}function Ct(r,a){"opacity"in r.style?r.style.opacity=a:"filter"in r.style&&No(r,a)}function No(r,a){var u=!1,f="DXImageTransform.Microsoft.Alpha";try{u=r.filters.item(f)}catch{if(a===1)return}a=Math.round(a*100),u?(u.Enabled=a!==100,u.Opacity=a):r.style.filter+=" progid:"+f+"(opacity="+a+")"}function Ss(r){for(var a=document.documentElement.style,u=0;u<r.length;u++)if(r[u]in a)return r[u];return!1}function yi(r,a,u){var f=a||new O(0,0);r.style[gt]=(Oe.ie3d?"translate("+f.x+"px,"+f.y+"px)":"translate3d("+f.x+"px,"+f.y+"px,0)")+(u?" scale("+u+")":"")}function Bt(r,a){r._leaflet_pos=a,Oe.any3d?yi(r,a):(r.style.left=a.x+"px",r.style.top=a.y+"px")}function Gr(r){return r._leaflet_pos||new O(0,0)}var Uo,Oo,Sc;if("onselectstart"in document)Uo=function(){Qe(window,"selectstart",tn)},Oo=function(){wt(window,"selectstart",tn)};else{var Fo=Ss(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"]);Uo=function(){if(Fo){var r=document.documentElement.style;Sc=r[Fo],r[Fo]="none"}},Oo=function(){Fo&&(document.documentElement.style[Fo]=Sc,Sc=void 0)}}function Mc(){Qe(window,"dragstart",tn)}function Ec(){wt(window,"dragstart",tn)}var Ja,wc;function Tc(r){for(;r.tabIndex===-1;)r=r.parentNode;r.style&&(el(),Ja=r,wc=r.style.outlineStyle,r.style.outlineStyle="none",Qe(window,"keydown",el))}function el(){Ja&&(Ja.style.outlineStyle=wc,Ja=void 0,wc=void 0,wt(window,"keydown",el))}function Bp(r){do r=r.parentNode;while((!r.offsetWidth||!r.offsetHeight)&&r!==document.body);return r}function Ac(r){var a=r.getBoundingClientRect();return{x:a.width/r.offsetWidth||1,y:a.height/r.offsetHeight||1,boundingClientRect:a}}var Hy={__proto__:null,TRANSFORM:gt,TRANSITION:xt,TRANSITION_END:At,get:ln,getStyle:ht,create:xe,remove:tt,empty:dt,toFront:qt,toBack:On,hasClass:en,addClass:Ke,removeClass:$e,setClass:Xn,getClass:or,setOpacity:Ct,testProp:Ss,setTransform:yi,setPosition:Bt,getPosition:Gr,get disableTextSelection(){return Uo},get enableTextSelection(){return Oo},disableImageDrag:Mc,enableImageDrag:Ec,preventOutline:Tc,restoreOutline:el,getSizedParentNode:Bp,getScale:Ac};function Qe(r,a,u,f){if(a&&typeof a=="object")for(var v in a)Pc(r,v,a[v],u);else{a=w(a);for(var A=0,F=a.length;A<F;A++)Pc(r,a[A],u,f)}return this}var xi="_leaflet_events";function wt(r,a,u,f){if(arguments.length===1)Hp(r),delete r[xi];else if(a&&typeof a=="object")for(var v in a)Rc(r,v,a[v],u);else if(a=w(a),arguments.length===2)Hp(r,function(X){return P(a,X)!==-1});else for(var A=0,F=a.length;A<F;A++)Rc(r,a[A],u,f);return this}function Hp(r,a){for(var u in r[xi]){var f=u.split(/\d/)[0];(!a||a(f))&&Rc(r,f,null,null,u)}}var Cc={mouseenter:"mouseover",mouseleave:"mouseout",wheel:!("onwheel"in window)&&"mousewheel"};function Pc(r,a,u,f){var v=a+h(u)+(f?"_"+h(f):"");if(r[xi]&&r[xi][v])return this;var A=function(X){return u.call(f||r,X||window.event)},F=A;!Oe.touchNative&&Oe.pointer&&a.indexOf("touch")===0?A=b(r,a,A):Oe.touch&&a==="dblclick"?A=je(r,A):"addEventListener"in r?a==="touchstart"||a==="touchmove"||a==="wheel"||a==="mousewheel"?r.addEventListener(Cc[a]||a,A,Oe.passiveEvents?{passive:!1}:!1):a==="mouseenter"||a==="mouseleave"?(A=function(X){X=X||window.event,bc(r,X)&&F(X)},r.addEventListener(Cc[a],A,!1)):r.addEventListener(a,F,!1):r.attachEvent("on"+a,A),r[xi]=r[xi]||{},r[xi][v]=A}function Rc(r,a,u,f,v){v=v||a+h(u)+(f?"_"+h(f):"");var A=r[xi]&&r[xi][v];if(!A)return this;!Oe.touchNative&&Oe.pointer&&a.indexOf("touch")===0?G(r,a,A):Oe.touch&&a==="dblclick"?ze(r,A):"removeEventListener"in r?r.removeEventListener(Cc[a]||a,A,!1):r.detachEvent("on"+a,A),r[xi][v]=null}function Wr(r){return r.stopPropagation?r.stopPropagation():r.originalEvent?r.originalEvent._stopped=!0:r.cancelBubble=!0,this}function Lc(r){return Pc(r,"wheel",Wr),this}function zo(r){return Qe(r,"mousedown touchstart dblclick contextmenu",Wr),r._leaflet_disable_click=!0,this}function tn(r){return r.preventDefault?r.preventDefault():r.returnValue=!1,this}function Xr(r){return tn(r),Wr(r),this}function Vp(r){if(r.composedPath)return r.composedPath();for(var a=[],u=r.target;u;)a.push(u),u=u.parentNode;return a}function Gp(r,a){if(!a)return new O(r.clientX,r.clientY);var u=Ac(a),f=u.boundingClientRect;return new O((r.clientX-f.left)/u.x-a.clientLeft,(r.clientY-f.top)/u.y-a.clientTop)}var Vy=Oe.linux&&Oe.chrome?window.devicePixelRatio:Oe.mac?window.devicePixelRatio*3:window.devicePixelRatio>0?2*window.devicePixelRatio:1;function Wp(r){return Oe.edge?r.wheelDeltaY/2:r.deltaY&&r.deltaMode===0?-r.deltaY/Vy:r.deltaY&&r.deltaMode===1?-r.deltaY*20:r.deltaY&&r.deltaMode===2?-r.deltaY*60:r.deltaX||r.deltaZ?0:r.wheelDelta?(r.wheelDeltaY||r.wheelDelta)/2:r.detail&&Math.abs(r.detail)<32765?-r.detail*20:r.detail?r.detail/-32765*60:0}function bc(r,a){var u=a.relatedTarget;if(!u)return!0;try{for(;u&&u!==r;)u=u.parentNode}catch{return!1}return u!==r}var Gy={__proto__:null,on:Qe,off:wt,stopPropagation:Wr,disableScrollPropagation:Lc,disableClickPropagation:zo,preventDefault:tn,stop:Xr,getPropagationPath:Vp,getMousePosition:Gp,getWheelDelta:Wp,isExternalTarget:bc,addListener:Qe,removeListener:wt},Xp=ce.extend({run:function(r,a,u,f){this.stop(),this._el=r,this._inProgress=!0,this._duration=u||.25,this._easeOutPower=1/Math.max(f||.5,.2),this._startPos=Gr(r),this._offset=a.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=R(this._animate,this),this._step()},_step:function(r){var a=+new Date-this._startTime,u=this._duration*1e3;a<u?this._runFrame(this._easeOut(a/u),r):(this._runFrame(1),this._complete())},_runFrame:function(r,a){var u=this._startPos.add(this._offset.multiplyBy(r));a&&u._round(),Bt(this._el,u),this.fire("step")},_complete:function(){te(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(r){return 1-Math.pow(1-r,this._easeOutPower)}}),mt=ce.extend({options:{crs:B,center:void 0,zoom:void 0,minZoom:void 0,maxZoom:void 0,layers:[],maxBounds:void 0,renderer:void 0,zoomAnimation:!0,zoomAnimationThreshold:4,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(r,a){a=T(this,a),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this._initContainer(r),this._initLayout(),this._onResize=l(this._onResize,this),this._initEvents(),a.maxBounds&&this.setMaxBounds(a.maxBounds),a.zoom!==void 0&&(this._zoom=this._limitZoom(a.zoom)),a.center&&a.zoom!==void 0&&this.setView(de(a.center),a.zoom,{reset:!0}),this.callInitHooks(),this._zoomAnimated=xt&&Oe.any3d&&!Oe.mobileOpera&&this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),Qe(this._proxy,At,this._catchTransitionEnd,this)),this._addLayers(this.options.layers)},setView:function(r,a,u){if(a=a===void 0?this._zoom:this._limitZoom(a),r=this._limitCenter(de(r),a,this.options.maxBounds),u=u||{},this._stop(),this._loaded&&!u.reset&&u!==!0){u.animate!==void 0&&(u.zoom=s({animate:u.animate},u.zoom),u.pan=s({animate:u.animate,duration:u.duration},u.pan));var f=this._zoom!==a?this._tryAnimatedZoom&&this._tryAnimatedZoom(r,a,u.zoom):this._tryAnimatedPan(r,u.pan);if(f)return clearTimeout(this._sizeTimer),this}return this._resetView(r,a,u.pan&&u.pan.noMoveStart),this},setZoom:function(r,a){return this._loaded?this.setView(this.getCenter(),r,{zoom:a}):(this._zoom=r,this)},zoomIn:function(r,a){return r=r||(Oe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+r,a)},zoomOut:function(r,a){return r=r||(Oe.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-r,a)},setZoomAround:function(r,a,u){var f=this.getZoomScale(a),v=this.getSize().divideBy(2),A=r instanceof O?r:this.latLngToContainerPoint(r),F=A.subtract(v).multiplyBy(1-1/f),X=this.containerPointToLatLng(v.add(F));return this.setView(X,a,{zoom:u})},_getBoundsCenterZoom:function(r,a){a=a||{},r=r.getBounds?r.getBounds():Q(r);var u=q(a.paddingTopLeft||a.padding||[0,0]),f=q(a.paddingBottomRight||a.padding||[0,0]),v=this.getBoundsZoom(r,!1,u.add(f));if(v=typeof a.maxZoom=="number"?Math.min(a.maxZoom,v):v,v===1/0)return{center:r.getCenter(),zoom:v};var A=f.subtract(u).divideBy(2),F=this.project(r.getSouthWest(),v),X=this.project(r.getNorthEast(),v),J=this.unproject(F.add(X).divideBy(2).add(A),v);return{center:J,zoom:v}},fitBounds:function(r,a){if(r=Q(r),!r.isValid())throw new Error("Bounds are not valid.");var u=this._getBoundsCenterZoom(r,a);return this.setView(u.center,u.zoom,a)},fitWorld:function(r){return this.fitBounds([[-90,-180],[90,180]],r)},panTo:function(r,a){return this.setView(r,this._zoom,{pan:a})},panBy:function(r,a){if(r=q(r).round(),a=a||{},!r.x&&!r.y)return this.fire("moveend");if(a.animate!==!0&&!this.getSize().contains(r))return this._resetView(this.unproject(this.project(this.getCenter()).add(r)),this.getZoom()),this;if(this._panAnim||(this._panAnim=new Xp,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),a.noMoveStart||this.fire("movestart"),a.animate!==!1){Ke(this._mapPane,"leaflet-pan-anim");var u=this._getMapPanePos().subtract(r).round();this._panAnim.run(this._mapPane,u,a.duration||.25,a.easeLinearity)}else this._rawPanBy(r),this.fire("move").fire("moveend");return this},flyTo:function(r,a,u){if(u=u||{},u.animate===!1||!Oe.any3d)return this.setView(r,a,u);this._stop();var f=this.project(this.getCenter()),v=this.project(r),A=this.getSize(),F=this._zoom;r=de(r),a=a===void 0?F:a;var X=Math.max(A.x,A.y),J=X*this.getZoomScale(F,a),me=v.distanceTo(f)||1,Ce=1.42,Xe=Ce*Ce;function at(Ht){var fl=Ht?-1:1,bx=Ht?J:X,Ix=J*J-X*X+fl*Xe*Xe*me*me,Dx=2*bx*Xe*me,Vc=Ix/Dx,Tm=Math.sqrt(Vc*Vc+1)-Vc,Nx=Tm<1e-9?-18:Math.log(Tm);return Nx}function mn(Ht){return(Math.exp(Ht)-Math.exp(-Ht))/2}function Yt(Ht){return(Math.exp(Ht)+Math.exp(-Ht))/2}function jn(Ht){return mn(Ht)/Yt(Ht)}var En=at(0);function Cs(Ht){return X*(Yt(En)/Yt(En+Ce*Ht))}function Cx(Ht){return X*(Yt(En)*jn(En+Ce*Ht)-mn(En))/Xe}function Px(Ht){return 1-Math.pow(1-Ht,1.5)}var Rx=Date.now(),Em=(at(1)-En)/Ce,Lx=u.duration?1e3*u.duration:1e3*Em*.8;function wm(){var Ht=(Date.now()-Rx)/Lx,fl=Px(Ht)*Em;Ht<=1?(this._flyToFrame=R(wm,this),this._move(this.unproject(f.add(v.subtract(f).multiplyBy(Cx(fl)/me)),F),this.getScaleZoom(X/Cs(fl),F),{flyTo:!0})):this._move(r,a)._moveEnd(!0)}return this._moveStart(!0,u.noMoveStart),wm.call(this),this},flyToBounds:function(r,a){var u=this._getBoundsCenterZoom(r,a);return this.flyTo(u.center,u.zoom,a)},setMaxBounds:function(r){return r=Q(r),this.listens("moveend",this._panInsideMaxBounds)&&this.off("moveend",this._panInsideMaxBounds),r.isValid()?(this.options.maxBounds=r,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this)},setMinZoom:function(r){var a=this.options.minZoom;return this.options.minZoom=r,this._loaded&&a!==r&&(this.fire("zoomlevelschange"),this.getZoom()<this.options.minZoom)?this.setZoom(r):this},setMaxZoom:function(r){var a=this.options.maxZoom;return this.options.maxZoom=r,this._loaded&&a!==r&&(this.fire("zoomlevelschange"),this.getZoom()>this.options.maxZoom)?this.setZoom(r):this},panInsideBounds:function(r,a){this._enforcingBounds=!0;var u=this.getCenter(),f=this._limitCenter(u,this._zoom,Q(r));return u.equals(f)||this.panTo(f,a),this._enforcingBounds=!1,this},panInside:function(r,a){a=a||{};var u=q(a.paddingTopLeft||a.padding||[0,0]),f=q(a.paddingBottomRight||a.padding||[0,0]),v=this.project(this.getCenter()),A=this.project(r),F=this.getPixelBounds(),X=Le([F.min.add(u),F.max.subtract(f)]),J=X.getSize();if(!X.contains(A)){this._enforcingBounds=!0;var me=A.subtract(X.getCenter()),Ce=X.extend(A).getSize().subtract(J);v.x+=me.x<0?-Ce.x:Ce.x,v.y+=me.y<0?-Ce.y:Ce.y,this.panTo(this.unproject(v),a),this._enforcingBounds=!1}return this},invalidateSize:function(r){if(!this._loaded)return this;r=s({animate:!1,pan:!0},r===!0?{animate:!0}:r);var a=this.getSize();this._sizeChanged=!0,this._lastCenter=null;var u=this.getSize(),f=a.divideBy(2).round(),v=u.divideBy(2).round(),A=f.subtract(v);return!A.x&&!A.y?this:(r.animate&&r.pan?this.panBy(A):(r.pan&&this._rawPanBy(A),this.fire("move"),r.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(l(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:a,newSize:u}))},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},locate:function(r){if(r=this._locateOptions=s({timeout:1e4,watch:!1},r),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this;var a=l(this._handleGeolocationResponse,this),u=l(this._handleGeolocationError,this);return r.watch?this._locationWatchId=navigator.geolocation.watchPosition(a,u,r):navigator.geolocation.getCurrentPosition(a,u,r),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(r){if(this._container._leaflet_id){var a=r.code,u=r.message||(a===1?"permission denied":a===2?"position unavailable":"timeout");this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:a,message:"Geolocation error: "+u+"."})}},_handleGeolocationResponse:function(r){if(this._container._leaflet_id){var a=r.coords.latitude,u=r.coords.longitude,f=new oe(a,u),v=f.toBounds(r.coords.accuracy*2),A=this._locateOptions;if(A.setView){var F=this.getBoundsZoom(v);this.setView(f,A.maxZoom?Math.min(F,A.maxZoom):F)}var X={latlng:f,bounds:v,timestamp:r.timestamp};for(var J in r.coords)typeof r.coords[J]=="number"&&(X[J]=r.coords[J]);this.fire("locationfound",X)}},addHandler:function(r,a){if(!a)return this;var u=this[r]=new a(this);return this._handlers.push(u),this.options[r]&&u.enable(),this},remove:function(){if(this._initEvents(!0),this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance");try{delete this._container._leaflet_id,delete this._containerId}catch{this._container._leaflet_id=void 0,this._containerId=void 0}this._locationWatchId!==void 0&&this.stopLocate(),this._stop(),tt(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._resizeRequest&&(te(this._resizeRequest),this._resizeRequest=null),this._clearHandlers(),this._loaded&&this.fire("unload");var r;for(r in this._layers)this._layers[r].remove();for(r in this._panes)tt(this._panes[r]);return this._layers=[],this._panes=[],delete this._mapPane,delete this._renderer,this},createPane:function(r,a){var u="leaflet-pane"+(r?" leaflet-"+r.replace("Pane","")+"-pane":""),f=xe("div",u,a||this._mapPane);return r&&(this._panes[r]=f),f},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter.clone():this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var r=this.getPixelBounds(),a=this.unproject(r.getBottomLeft()),u=this.unproject(r.getTopRight());return new ke(a,u)},getMinZoom:function(){return this.options.minZoom===void 0?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===void 0?this._layersMaxZoom===void 0?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(r,a,u){r=Q(r),u=q(u||[0,0]);var f=this.getZoom()||0,v=this.getMinZoom(),A=this.getMaxZoom(),F=r.getNorthWest(),X=r.getSouthEast(),J=this.getSize().subtract(u),me=Le(this.project(X,f),this.project(F,f)).getSize(),Ce=Oe.any3d?this.options.zoomSnap:1,Xe=J.x/me.x,at=J.y/me.y,mn=a?Math.max(Xe,at):Math.min(Xe,at);return f=this.getScaleZoom(mn,f),Ce&&(f=Math.round(f/(Ce/100))*(Ce/100),f=a?Math.ceil(f/Ce)*Ce:Math.floor(f/Ce)*Ce),Math.max(v,Math.min(A,f))},getSize:function(){return(!this._size||this._sizeChanged)&&(this._size=new O(this._container.clientWidth||0,this._container.clientHeight||0),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(r,a){var u=this._getTopLeftPoint(r,a);return new he(u,u.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(r){return this.options.crs.getProjectedBounds(r===void 0?this.getZoom():r)},getPane:function(r){return typeof r=="string"?this._panes[r]:r},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(r,a){var u=this.options.crs;return a=a===void 0?this._zoom:a,u.scale(r)/u.scale(a)},getScaleZoom:function(r,a){var u=this.options.crs;a=a===void 0?this._zoom:a;var f=u.zoom(r*u.scale(a));return isNaN(f)?1/0:f},project:function(r,a){return a=a===void 0?this._zoom:a,this.options.crs.latLngToPoint(de(r),a)},unproject:function(r,a){return a=a===void 0?this._zoom:a,this.options.crs.pointToLatLng(q(r),a)},layerPointToLatLng:function(r){var a=q(r).add(this.getPixelOrigin());return this.unproject(a)},latLngToLayerPoint:function(r){var a=this.project(de(r))._round();return a._subtract(this.getPixelOrigin())},wrapLatLng:function(r){return this.options.crs.wrapLatLng(de(r))},wrapLatLngBounds:function(r){return this.options.crs.wrapLatLngBounds(Q(r))},distance:function(r,a){return this.options.crs.distance(de(r),de(a))},containerPointToLayerPoint:function(r){return q(r).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(r){return q(r).add(this._getMapPanePos())},containerPointToLatLng:function(r){var a=this.containerPointToLayerPoint(q(r));return this.layerPointToLatLng(a)},latLngToContainerPoint:function(r){return this.layerPointToContainerPoint(this.latLngToLayerPoint(de(r)))},mouseEventToContainerPoint:function(r){return Gp(r,this._container)},mouseEventToLayerPoint:function(r){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(r))},mouseEventToLatLng:function(r){return this.layerPointToLatLng(this.mouseEventToLayerPoint(r))},_initContainer:function(r){var a=this._container=ln(r);if(a){if(a._leaflet_id)throw new Error("Map container is already initialized.")}else throw new Error("Map container not found.");Qe(a,"scroll",this._onScroll,this),this._containerId=h(a)},_initLayout:function(){var r=this._container;this._fadeAnimated=this.options.fadeAnimation&&Oe.any3d,Ke(r,"leaflet-container"+(Oe.touch?" leaflet-touch":"")+(Oe.retina?" leaflet-retina":"")+(Oe.ielt9?" leaflet-oldie":"")+(Oe.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""));var a=ht(r,"position");a!=="absolute"&&a!=="relative"&&a!=="fixed"&&a!=="sticky"&&(r.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var r=this._panes={};this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),Bt(this._mapPane,new O(0,0)),this.createPane("tilePane"),this.createPane("overlayPane"),this.createPane("shadowPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(Ke(r.markerPane,"leaflet-zoom-hide"),Ke(r.shadowPane,"leaflet-zoom-hide"))},_resetView:function(r,a,u){Bt(this._mapPane,new O(0,0));var f=!this._loaded;this._loaded=!0,a=this._limitZoom(a),this.fire("viewprereset");var v=this._zoom!==a;this._moveStart(v,u)._move(r,a)._moveEnd(v),this.fire("viewreset"),f&&this.fire("load")},_moveStart:function(r,a){return r&&this.fire("zoomstart"),a||this.fire("movestart"),this},_move:function(r,a,u,f){a===void 0&&(a=this._zoom);var v=this._zoom!==a;return this._zoom=a,this._lastCenter=r,this._pixelOrigin=this._getNewPixelOrigin(r),f?u&&u.pinch&&this.fire("zoom",u):((v||u&&u.pinch)&&this.fire("zoom",u),this.fire("move",u)),this},_moveEnd:function(r){return r&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return te(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(r){Bt(this._mapPane,this._getMapPanePos().subtract(r))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(r){this._targets={},this._targets[h(this._container)]=this;var a=r?wt:Qe;a(this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",this._handleDOMEvent,this),this.options.trackResize&&a(window,"resize",this._onResize,this),Oe.any3d&&this.options.transform3DLimit&&(r?this.off:this.on).call(this,"moveend",this._onMoveEnd)},_onResize:function(){te(this._resizeRequest),this._resizeRequest=R(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var r=this._getMapPanePos();Math.max(Math.abs(r.x),Math.abs(r.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(r,a){for(var u=[],f,v=a==="mouseout"||a==="mouseover",A=r.target||r.srcElement,F=!1;A;){if(f=this._targets[h(A)],f&&(a==="click"||a==="preclick")&&this._draggableMoved(f)){F=!0;break}if(f&&f.listens(a,!0)&&(v&&!bc(A,r)||(u.push(f),v))||A===this._container)break;A=A.parentNode}return!u.length&&!F&&!v&&this.listens(a,!0)&&(u=[this]),u},_isClickDisabled:function(r){for(;r&&r!==this._container;){if(r._leaflet_disable_click)return!0;r=r.parentNode}},_handleDOMEvent:function(r){var a=r.target||r.srcElement;if(!(!this._loaded||a._leaflet_disable_events||r.type==="click"&&this._isClickDisabled(a))){var u=r.type;u==="mousedown"&&Tc(a),this._fireDOMEvent(r,u)}},_mouseEvents:["click","dblclick","mouseover","mouseout","contextmenu"],_fireDOMEvent:function(r,a,u){if(r.type==="click"){var f=s({},r);f.type="preclick",this._fireDOMEvent(f,f.type,u)}var v=this._findEventTargets(r,a);if(u){for(var A=[],F=0;F<u.length;F++)u[F].listens(a,!0)&&A.push(u[F]);v=A.concat(v)}if(v.length){a==="contextmenu"&&tn(r);var X=v[0],J={originalEvent:r};if(r.type!=="keypress"&&r.type!=="keydown"&&r.type!=="keyup"){var me=X.getLatLng&&(!X._radius||X._radius<=10);J.containerPoint=me?this.latLngToContainerPoint(X.getLatLng()):this.mouseEventToContainerPoint(r),J.layerPoint=this.containerPointToLayerPoint(J.containerPoint),J.latlng=me?X.getLatLng():this.layerPointToLatLng(J.layerPoint)}for(F=0;F<v.length;F++)if(v[F].fire(a,J,!0),J.originalEvent._stopped||v[F].options.bubblingMouseEvents===!1&&P(this._mouseEvents,a)!==-1)return}},_draggableMoved:function(r){return r=r.dragging&&r.dragging.enabled()?r:this,r.dragging&&r.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var r=0,a=this._handlers.length;r<a;r++)this._handlers[r].disable()},whenReady:function(r,a){return this._loaded?r.call(a||this,{target:this}):this.on("load",r,a),this},_getMapPanePos:function(){return Gr(this._mapPane)||new O(0,0)},_moved:function(){var r=this._getMapPanePos();return r&&!r.equals([0,0])},_getTopLeftPoint:function(r,a){var u=r&&a!==void 0?this._getNewPixelOrigin(r,a):this.getPixelOrigin();return u.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(r,a){var u=this.getSize()._divideBy(2);return this.project(r,a)._subtract(u)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(r,a,u){var f=this._getNewPixelOrigin(u,a);return this.project(r,a)._subtract(f)},_latLngBoundsToNewLayerBounds:function(r,a,u){var f=this._getNewPixelOrigin(u,a);return Le([this.project(r.getSouthWest(),a)._subtract(f),this.project(r.getNorthWest(),a)._subtract(f),this.project(r.getSouthEast(),a)._subtract(f),this.project(r.getNorthEast(),a)._subtract(f)])},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(r){return this.latLngToLayerPoint(r).subtract(this._getCenterLayerPoint())},_limitCenter:function(r,a,u){if(!u)return r;var f=this.project(r,a),v=this.getSize().divideBy(2),A=new he(f.subtract(v),f.add(v)),F=this._getBoundsOffset(A,u,a);return Math.abs(F.x)<=1&&Math.abs(F.y)<=1?r:this.unproject(f.add(F),a)},_limitOffset:function(r,a){if(!a)return r;var u=this.getPixelBounds(),f=new he(u.min.add(r),u.max.add(r));return r.add(this._getBoundsOffset(f,a))},_getBoundsOffset:function(r,a,u){var f=Le(this.project(a.getNorthEast(),u),this.project(a.getSouthWest(),u)),v=f.min.subtract(r.min),A=f.max.subtract(r.max),F=this._rebound(v.x,-A.x),X=this._rebound(v.y,-A.y);return new O(F,X)},_rebound:function(r,a){return r+a>0?Math.round(r-a)/2:Math.max(0,Math.ceil(r))-Math.max(0,Math.floor(a))},_limitZoom:function(r){var a=this.getMinZoom(),u=this.getMaxZoom(),f=Oe.any3d?this.options.zoomSnap:1;return f&&(r=Math.round(r/f)*f),Math.max(a,Math.min(u,r))},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){$e(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(r,a){var u=this._getCenterOffset(r)._trunc();return(a&&a.animate)!==!0&&!this.getSize().contains(u)?!1:(this.panBy(u,a),!0)},_createAnimProxy:function(){var r=this._proxy=xe("div","leaflet-proxy leaflet-zoom-animated");this._panes.mapPane.appendChild(r),this.on("zoomanim",function(a){var u=gt,f=this._proxy.style[u];yi(this._proxy,this.project(a.center,a.zoom),this.getZoomScale(a.zoom,1)),f===this._proxy.style[u]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",this._animMoveEnd,this),this._on("unload",this._destroyAnimProxy,this)},_destroyAnimProxy:function(){tt(this._proxy),this.off("load moveend",this._animMoveEnd,this),delete this._proxy},_animMoveEnd:function(){var r=this.getCenter(),a=this.getZoom();yi(this._proxy,this.project(r,a),this.getZoomScale(a,1))},_catchTransitionEnd:function(r){this._animatingZoom&&r.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(r,a,u){if(this._animatingZoom)return!0;if(u=u||{},!this._zoomAnimated||u.animate===!1||this._nothingToAnimate()||Math.abs(a-this._zoom)>this.options.zoomAnimationThreshold)return!1;var f=this.getZoomScale(a),v=this._getCenterOffset(r)._divideBy(1-1/f);return u.animate!==!0&&!this.getSize().contains(v)?!1:(R(function(){this._moveStart(!0,u.noMoveStart||!1)._animateZoom(r,a,!0)},this),!0)},_animateZoom:function(r,a,u,f){this._mapPane&&(u&&(this._animatingZoom=!0,this._animateToCenter=r,this._animateToZoom=a,Ke(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:r,zoom:a,noUpdate:f}),this._tempFireZoomEvent||(this._tempFireZoomEvent=this._zoom!==this._animateToZoom),this._move(this._animateToCenter,this._animateToZoom,void 0,!0),setTimeout(l(this._onZoomTransitionEnd,this),250))},_onZoomTransitionEnd:function(){this._animatingZoom&&(this._mapPane&&$e(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom,void 0,!0),this._tempFireZoomEvent&&this.fire("zoom"),delete this._tempFireZoomEvent,this.fire("move"),this._moveEnd(!0))}});function Wy(r,a){return new mt(r,a)}var ii=re.extend({options:{position:"topright"},initialize:function(r){T(this,r)},getPosition:function(){return this.options.position},setPosition:function(r){var a=this._map;return a&&a.removeControl(this),this.options.position=r,a&&a.addControl(this),this},getContainer:function(){return this._container},addTo:function(r){this.remove(),this._map=r;var a=this._container=this.onAdd(r),u=this.getPosition(),f=r._controlCorners[u];return Ke(a,"leaflet-control"),u.indexOf("bottom")!==-1?f.insertBefore(a,f.firstChild):f.appendChild(a),this._map.on("unload",this.remove,this),this},remove:function(){return this._map?(tt(this._container),this.onRemove&&this.onRemove(this._map),this._map.off("unload",this.remove,this),this._map=null,this):this},_refocusOnMap:function(r){this._map&&r&&r.screenX>0&&r.screenY>0&&this._map.getContainer().focus()}}),ko=function(r){return new ii(r)};mt.include({addControl:function(r){return r.addTo(this),this},removeControl:function(r){return r.remove(),this},_initControlPos:function(){var r=this._controlCorners={},a="leaflet-",u=this._controlContainer=xe("div",a+"control-container",this._container);function f(v,A){var F=a+v+" "+a+A;r[v+A]=xe("div",F,u)}f("top","left"),f("top","right"),f("bottom","left"),f("bottom","right")},_clearControlPos:function(){for(var r in this._controlCorners)tt(this._controlCorners[r]);tt(this._controlContainer),delete this._controlCorners,delete this._controlContainer}});var Zp=ii.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1,sortLayers:!1,sortFunction:function(r,a,u,f){return u<f?-1:f<u?1:0}},initialize:function(r,a,u){T(this,u),this._layerControlInputs=[],this._layers=[],this._lastZIndex=0,this._handlingClick=!1,this._preventClick=!1;for(var f in r)this._addLayer(r[f],f);for(f in a)this._addLayer(a[f],f,!0)},onAdd:function(r){this._initLayout(),this._update(),this._map=r,r.on("zoomend",this._checkDisabledLayers,this);for(var a=0;a<this._layers.length;a++)this._layers[a].layer.on("add remove",this._onLayerChange,this);return this._container},addTo:function(r){return ii.prototype.addTo.call(this,r),this._expandIfNotCollapsed()},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this);for(var r=0;r<this._layers.length;r++)this._layers[r].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(r,a){return this._addLayer(r,a),this._map?this._update():this},addOverlay:function(r,a){return this._addLayer(r,a,!0),this._map?this._update():this},removeLayer:function(r){r.off("add remove",this._onLayerChange,this);var a=this._getLayer(h(r));return a&&this._layers.splice(this._layers.indexOf(a),1),this._map?this._update():this},expand:function(){Ke(this._container,"leaflet-control-layers-expanded"),this._section.style.height=null;var r=this._map.getSize().y-(this._container.offsetTop+50);return r<this._section.clientHeight?(Ke(this._section,"leaflet-control-layers-scrollbar"),this._section.style.height=r+"px"):$e(this._section,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return $e(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var r="leaflet-control-layers",a=this._container=xe("div",r),u=this.options.collapsed;a.setAttribute("aria-haspopup",!0),zo(a),Lc(a);var f=this._section=xe("section",r+"-list");u&&(this._map.on("click",this.collapse,this),Qe(a,{mouseenter:this._expandSafely,mouseleave:this.collapse},this));var v=this._layersLink=xe("a",r+"-toggle",a);v.href="#",v.title="Layers",v.setAttribute("role","button"),Qe(v,{keydown:function(A){A.keyCode===13&&this._expandSafely()},click:function(A){tn(A),this._expandSafely()}},this),u||this.expand(),this._baseLayersList=xe("div",r+"-base",f),this._separator=xe("div",r+"-separator",f),this._overlaysList=xe("div",r+"-overlays",f),a.appendChild(f)},_getLayer:function(r){for(var a=0;a<this._layers.length;a++)if(this._layers[a]&&h(this._layers[a].layer)===r)return this._layers[a]},_addLayer:function(r,a,u){this._map&&r.on("add remove",this._onLayerChange,this),this._layers.push({layer:r,name:a,overlay:u}),this.options.sortLayers&&this._layers.sort(l(function(f,v){return this.options.sortFunction(f.layer,v.layer,f.name,v.name)},this)),this.options.autoZIndex&&r.setZIndex&&(this._lastZIndex++,r.setZIndex(this._lastZIndex)),this._expandIfNotCollapsed()},_update:function(){if(!this._container)return this;dt(this._baseLayersList),dt(this._overlaysList),this._layerControlInputs=[];var r,a,u,f,v=0;for(u=0;u<this._layers.length;u++)f=this._layers[u],this._addItem(f),a=a||f.overlay,r=r||!f.overlay,v+=f.overlay?0:1;return this.options.hideSingleBase&&(r=r&&v>1,this._baseLayersList.style.display=r?"":"none"),this._separator.style.display=a&&r?"":"none",this},_onLayerChange:function(r){this._handlingClick||this._update();var a=this._getLayer(h(r.target)),u=a.overlay?r.type==="add"?"overlayadd":"overlayremove":r.type==="add"?"baselayerchange":null;u&&this._map.fire(u,a)},_createRadioElement:function(r,a){var u='<input type="radio" class="leaflet-control-layers-selector" name="'+r+'"'+(a?' checked="checked"':"")+"/>",f=document.createElement("div");return f.innerHTML=u,f.firstChild},_addItem:function(r){var a=document.createElement("label"),u=this._map.hasLayer(r.layer),f;r.overlay?(f=document.createElement("input"),f.type="checkbox",f.className="leaflet-control-layers-selector",f.defaultChecked=u):f=this._createRadioElement("leaflet-base-layers_"+h(this),u),this._layerControlInputs.push(f),f.layerId=h(r.layer),Qe(f,"click",this._onInputClick,this);var v=document.createElement("span");v.innerHTML=" "+r.name;var A=document.createElement("span");a.appendChild(A),A.appendChild(f),A.appendChild(v);var F=r.overlay?this._overlaysList:this._baseLayersList;return F.appendChild(a),this._checkDisabledLayers(),a},_onInputClick:function(){if(!this._preventClick){var r=this._layerControlInputs,a,u,f=[],v=[];this._handlingClick=!0;for(var A=r.length-1;A>=0;A--)a=r[A],u=this._getLayer(a.layerId).layer,a.checked?f.push(u):a.checked||v.push(u);for(A=0;A<v.length;A++)this._map.hasLayer(v[A])&&this._map.removeLayer(v[A]);for(A=0;A<f.length;A++)this._map.hasLayer(f[A])||this._map.addLayer(f[A]);this._handlingClick=!1,this._refocusOnMap()}},_checkDisabledLayers:function(){for(var r=this._layerControlInputs,a,u,f=this._map.getZoom(),v=r.length-1;v>=0;v--)a=r[v],u=this._getLayer(a.layerId).layer,a.disabled=u.options.minZoom!==void 0&&f<u.options.minZoom||u.options.maxZoom!==void 0&&f>u.options.maxZoom},_expandIfNotCollapsed:function(){return this._map&&!this.options.collapsed&&this.expand(),this},_expandSafely:function(){var r=this._section;this._preventClick=!0,Qe(r,"click",tn),this.expand();var a=this;setTimeout(function(){wt(r,"click",tn),a._preventClick=!1})}}),Xy=function(r,a,u){return new Zp(r,a,u)},Ic=ii.extend({options:{position:"topleft",zoomInText:'<span aria-hidden="true">+</span>',zoomInTitle:"Zoom in",zoomOutText:'<span aria-hidden="true">&#x2212;</span>',zoomOutTitle:"Zoom out"},onAdd:function(r){var a="leaflet-control-zoom",u=xe("div",a+" leaflet-bar"),f=this.options;return this._zoomInButton=this._createButton(f.zoomInText,f.zoomInTitle,a+"-in",u,this._zoomIn),this._zoomOutButton=this._createButton(f.zoomOutText,f.zoomOutTitle,a+"-out",u,this._zoomOut),this._updateDisabled(),r.on("zoomend zoomlevelschange",this._updateDisabled,this),u},onRemove:function(r){r.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(r){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(r.shiftKey?3:1))},_zoomOut:function(r){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(r.shiftKey?3:1))},_createButton:function(r,a,u,f,v){var A=xe("a",u,f);return A.innerHTML=r,A.href="#",A.title=a,A.setAttribute("role","button"),A.setAttribute("aria-label",a),zo(A),Qe(A,"click",Xr),Qe(A,"click",v,this),Qe(A,"click",this._refocusOnMap,this),A},_updateDisabled:function(){var r=this._map,a="leaflet-disabled";$e(this._zoomInButton,a),$e(this._zoomOutButton,a),this._zoomInButton.setAttribute("aria-disabled","false"),this._zoomOutButton.setAttribute("aria-disabled","false"),(this._disabled||r._zoom===r.getMinZoom())&&(Ke(this._zoomOutButton,a),this._zoomOutButton.setAttribute("aria-disabled","true")),(this._disabled||r._zoom===r.getMaxZoom())&&(Ke(this._zoomInButton,a),this._zoomInButton.setAttribute("aria-disabled","true"))}});mt.mergeOptions({zoomControl:!0}),mt.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new Ic,this.addControl(this.zoomControl))});var Zy=function(r){return new Ic(r)},jp=ii.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(r){var a="leaflet-control-scale",u=xe("div",a),f=this.options;return this._addScales(f,a+"-line",u),r.on(f.updateWhenIdle?"moveend":"move",this._update,this),r.whenReady(this._update,this),u},onRemove:function(r){r.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(r,a,u){r.metric&&(this._mScale=xe("div",a,u)),r.imperial&&(this._iScale=xe("div",a,u))},_update:function(){var r=this._map,a=r.getSize().y/2,u=r.distance(r.containerPointToLatLng([0,a]),r.containerPointToLatLng([this.options.maxWidth,a]));this._updateScales(u)},_updateScales:function(r){this.options.metric&&r&&this._updateMetric(r),this.options.imperial&&r&&this._updateImperial(r)},_updateMetric:function(r){var a=this._getRoundNum(r),u=a<1e3?a+" m":a/1e3+" km";this._updateScale(this._mScale,u,a/r)},_updateImperial:function(r){var a=r*3.2808399,u,f,v;a>5280?(u=a/5280,f=this._getRoundNum(u),this._updateScale(this._iScale,f+" mi",f/u)):(v=this._getRoundNum(a),this._updateScale(this._iScale,v+" ft",v/a))},_updateScale:function(r,a,u){r.style.width=Math.round(this.options.maxWidth*u)+"px",r.innerHTML=a},_getRoundNum:function(r){var a=Math.pow(10,(Math.floor(r)+"").length-1),u=r/a;return u=u>=10?10:u>=5?5:u>=3?3:u>=2?2:1,a*u}}),jy=function(r){return new jp(r)},qy='<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg>',Dc=ii.extend({options:{position:"bottomright",prefix:'<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">'+(Oe.inlineSvg?qy+" ":"")+"Leaflet</a>"},initialize:function(r){T(this,r),this._attributions={}},onAdd:function(r){r.attributionControl=this,this._container=xe("div","leaflet-control-attribution"),zo(this._container);for(var a in r._layers)r._layers[a].getAttribution&&this.addAttribution(r._layers[a].getAttribution());return this._update(),r.on("layeradd",this._addAttribution,this),this._container},onRemove:function(r){r.off("layeradd",this._addAttribution,this)},_addAttribution:function(r){r.layer.getAttribution&&(this.addAttribution(r.layer.getAttribution()),r.layer.once("remove",function(){this.removeAttribution(r.layer.getAttribution())},this))},setPrefix:function(r){return this.options.prefix=r,this._update(),this},addAttribution:function(r){return r?(this._attributions[r]||(this._attributions[r]=0),this._attributions[r]++,this._update(),this):this},removeAttribution:function(r){return r?(this._attributions[r]&&(this._attributions[r]--,this._update()),this):this},_update:function(){if(this._map){var r=[];for(var a in this._attributions)this._attributions[a]&&r.push(a);var u=[];this.options.prefix&&u.push(this.options.prefix),r.length&&u.push(r.join(", ")),this._container.innerHTML=u.join(' <span aria-hidden="true">|</span> ')}}});mt.mergeOptions({attributionControl:!0}),mt.addInitHook(function(){this.options.attributionControl&&new Dc().addTo(this)});var Yy=function(r){return new Dc(r)};ii.Layers=Zp,ii.Zoom=Ic,ii.Scale=jp,ii.Attribution=Dc,ko.layers=Xy,ko.zoom=Zy,ko.scale=jy,ko.attribution=Yy;var Si=re.extend({initialize:function(r){this._map=r},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}});Si.addTo=function(r,a){return r.addHandler(a,this),this};var Ky={Events:j},qp=Oe.touch?"touchstart mousedown":"mousedown",ar=ce.extend({options:{clickTolerance:3},initialize:function(r,a,u,f){T(this,f),this._element=r,this._dragStartTarget=a||r,this._preventOutline=u},enable:function(){this._enabled||(Qe(this._dragStartTarget,qp,this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(ar._dragging===this&&this.finishDrag(!0),wt(this._dragStartTarget,qp,this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(r){if(this._enabled&&(this._moved=!1,!en(this._element,"leaflet-zoom-anim"))){if(r.touches&&r.touches.length!==1){ar._dragging===this&&this.finishDrag();return}if(!(ar._dragging||r.shiftKey||r.which!==1&&r.button!==1&&!r.touches)&&(ar._dragging=this,this._preventOutline&&Tc(this._element),Mc(),Uo(),!this._moving)){this.fire("down");var a=r.touches?r.touches[0]:r,u=Bp(this._element);this._startPoint=new O(a.clientX,a.clientY),this._startPos=Gr(this._element),this._parentScale=Ac(u);var f=r.type==="mousedown";Qe(document,f?"mousemove":"touchmove",this._onMove,this),Qe(document,f?"mouseup":"touchend touchcancel",this._onUp,this)}}},_onMove:function(r){if(this._enabled){if(r.touches&&r.touches.length>1){this._moved=!0;return}var a=r.touches&&r.touches.length===1?r.touches[0]:r,u=new O(a.clientX,a.clientY)._subtract(this._startPoint);!u.x&&!u.y||Math.abs(u.x)+Math.abs(u.y)<this.options.clickTolerance||(u.x/=this._parentScale.x,u.y/=this._parentScale.y,tn(r),this._moved||(this.fire("dragstart"),this._moved=!0,Ke(document.body,"leaflet-dragging"),this._lastTarget=r.target||r.srcElement,window.SVGElementInstance&&this._lastTarget instanceof window.SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),Ke(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(u),this._moving=!0,this._lastEvent=r,this._updatePosition())}},_updatePosition:function(){var r={originalEvent:this._lastEvent};this.fire("predrag",r),Bt(this._element,this._newPos),this.fire("drag",r)},_onUp:function(){this._enabled&&this.finishDrag()},finishDrag:function(r){$e(document.body,"leaflet-dragging"),this._lastTarget&&($e(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null),wt(document,"mousemove touchmove",this._onMove,this),wt(document,"mouseup touchend touchcancel",this._onUp,this),Ec(),Oo();var a=this._moved&&this._moving;this._moving=!1,ar._dragging=!1,a&&this.fire("dragend",{noInertia:r,distance:this._newPos.distanceTo(this._startPos)})}});function Yp(r,a,u){var f,v=[1,4,2,8],A,F,X,J,me,Ce,Xe,at;for(A=0,Ce=r.length;A<Ce;A++)r[A]._code=Zr(r[A],a);for(X=0;X<4;X++){for(Xe=v[X],f=[],A=0,Ce=r.length,F=Ce-1;A<Ce;F=A++)J=r[A],me=r[F],J._code&Xe?me._code&Xe||(at=tl(me,J,Xe,a,u),at._code=Zr(at,a),f.push(at)):(me._code&Xe&&(at=tl(me,J,Xe,a,u),at._code=Zr(at,a),f.push(at)),f.push(J));r=f}return r}function Kp(r,a){var u,f,v,A,F,X,J,me,Ce;if(!r||r.length===0)throw new Error("latlngs not passed");Zn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Xe=de([0,0]),at=Q(r),mn=at.getNorthWest().distanceTo(at.getSouthWest())*at.getNorthEast().distanceTo(at.getNorthWest());mn<1700&&(Xe=Nc(r));var Yt=r.length,jn=[];for(u=0;u<Yt;u++){var En=de(r[u]);jn.push(a.project(de([En.lat-Xe.lat,En.lng-Xe.lng])))}for(X=J=me=0,u=0,f=Yt-1;u<Yt;f=u++)v=jn[u],A=jn[f],F=v.y*A.x-A.y*v.x,J+=(v.x+A.x)*F,me+=(v.y+A.y)*F,X+=F*3;X===0?Ce=jn[0]:Ce=[J/X,me/X];var Cs=a.unproject(q(Ce));return de([Cs.lat+Xe.lat,Cs.lng+Xe.lng])}function Nc(r){for(var a=0,u=0,f=0,v=0;v<r.length;v++){var A=de(r[v]);a+=A.lat,u+=A.lng,f++}return de([a/f,u/f])}var $y={__proto__:null,clipPolygon:Yp,polygonCenter:Kp,centroid:Nc};function $p(r,a){if(!a||!r.length)return r.slice();var u=a*a;return r=ex(r,u),r=Jy(r,u),r}function Qp(r,a,u){return Math.sqrt(Bo(r,a,u,!0))}function Qy(r,a,u){return Bo(r,a,u)}function Jy(r,a){var u=r.length,f=typeof Uint8Array<"u"?Uint8Array:Array,v=new f(u);v[0]=v[u-1]=1,Uc(r,v,a,0,u-1);var A,F=[];for(A=0;A<u;A++)v[A]&&F.push(r[A]);return F}function Uc(r,a,u,f,v){var A=0,F,X,J;for(X=f+1;X<=v-1;X++)J=Bo(r[X],r[f],r[v],!0),J>A&&(F=X,A=J);A>u&&(a[F]=1,Uc(r,a,u,f,F),Uc(r,a,u,F,v))}function ex(r,a){for(var u=[r[0]],f=1,v=0,A=r.length;f<A;f++)tx(r[f],r[v])>a&&(u.push(r[f]),v=f);return v<A-1&&u.push(r[A-1]),u}var Jp;function em(r,a,u,f,v){var A=f?Jp:Zr(r,u),F=Zr(a,u),X,J,me;for(Jp=F;;){if(!(A|F))return[r,a];if(A&F)return!1;X=A||F,J=tl(r,a,X,u,v),me=Zr(J,u),X===A?(r=J,A=me):(a=J,F=me)}}function tl(r,a,u,f,v){var A=a.x-r.x,F=a.y-r.y,X=f.min,J=f.max,me,Ce;return u&8?(me=r.x+A*(J.y-r.y)/F,Ce=J.y):u&4?(me=r.x+A*(X.y-r.y)/F,Ce=X.y):u&2?(me=J.x,Ce=r.y+F*(J.x-r.x)/A):u&1&&(me=X.x,Ce=r.y+F*(X.x-r.x)/A),new O(me,Ce,v)}function Zr(r,a){var u=0;return r.x<a.min.x?u|=1:r.x>a.max.x&&(u|=2),r.y<a.min.y?u|=4:r.y>a.max.y&&(u|=8),u}function tx(r,a){var u=a.x-r.x,f=a.y-r.y;return u*u+f*f}function Bo(r,a,u,f){var v=a.x,A=a.y,F=u.x-v,X=u.y-A,J=F*F+X*X,me;return J>0&&(me=((r.x-v)*F+(r.y-A)*X)/J,me>1?(v=u.x,A=u.y):me>0&&(v+=F*me,A+=X*me)),F=r.x-v,X=r.y-A,f?F*F+X*X:new O(v,A)}function Zn(r){return!S(r[0])||typeof r[0][0]!="object"&&typeof r[0][0]<"u"}function tm(r){return console.warn("Deprecated use of _flat, please use L.LineUtil.isFlat instead."),Zn(r)}function nm(r,a){var u,f,v,A,F,X,J,me;if(!r||r.length===0)throw new Error("latlngs not passed");Zn(r)||(console.warn("latlngs are not flat! Only the first ring will be used"),r=r[0]);var Ce=de([0,0]),Xe=Q(r),at=Xe.getNorthWest().distanceTo(Xe.getSouthWest())*Xe.getNorthEast().distanceTo(Xe.getNorthWest());at<1700&&(Ce=Nc(r));var mn=r.length,Yt=[];for(u=0;u<mn;u++){var jn=de(r[u]);Yt.push(a.project(de([jn.lat-Ce.lat,jn.lng-Ce.lng])))}for(u=0,f=0;u<mn-1;u++)f+=Yt[u].distanceTo(Yt[u+1])/2;if(f===0)me=Yt[0];else for(u=0,A=0;u<mn-1;u++)if(F=Yt[u],X=Yt[u+1],v=F.distanceTo(X),A+=v,A>f){J=(A-f)/v,me=[X.x-J*(X.x-F.x),X.y-J*(X.y-F.y)];break}var En=a.unproject(q(me));return de([En.lat+Ce.lat,En.lng+Ce.lng])}var nx={__proto__:null,simplify:$p,pointToSegmentDistance:Qp,closestPointOnSegment:Qy,clipSegment:em,_getEdgeIntersection:tl,_getBitCode:Zr,_sqClosestPointOnSegment:Bo,isFlat:Zn,_flat:tm,polylineCenter:nm},Oc={project:function(r){return new O(r.lng,r.lat)},unproject:function(r){return new oe(r.y,r.x)},bounds:new he([-180,-90],[180,90])},Fc={R:6378137,R_MINOR:6356752314245179e-9,bounds:new he([-2003750834279e-5,-1549657073972e-5],[2003750834279e-5,1876465623138e-5]),project:function(r){var a=Math.PI/180,u=this.R,f=r.lat*a,v=this.R_MINOR/u,A=Math.sqrt(1-v*v),F=A*Math.sin(f),X=Math.tan(Math.PI/4-f/2)/Math.pow((1-F)/(1+F),A/2);return f=-u*Math.log(Math.max(X,1e-10)),new O(r.lng*a*u,f)},unproject:function(r){for(var a=180/Math.PI,u=this.R,f=this.R_MINOR/u,v=Math.sqrt(1-f*f),A=Math.exp(-r.y/u),F=Math.PI/2-2*Math.atan(A),X=0,J=.1,me;X<15&&Math.abs(J)>1e-7;X++)me=v*Math.sin(F),me=Math.pow((1-me)/(1+me),v/2),J=Math.PI/2-2*Math.atan(A*me)-F,F+=J;return new oe(F*a,r.x*a/u)}},ix={__proto__:null,LonLat:Oc,Mercator:Fc,SphericalMercator:rt},rx=s({},Fe,{code:"EPSG:3395",projection:Fc,transformation:function(){var r=.5/(Math.PI*Fc.R);return et(r,.5,-r,.5)}()}),im=s({},Fe,{code:"EPSG:4326",projection:Oc,transformation:et(1/180,1,-1/180,.5)}),sx=s({},Me,{projection:Oc,transformation:et(1,0,-1,0),scale:function(r){return Math.pow(2,r)},zoom:function(r){return Math.log(r)/Math.LN2},distance:function(r,a){var u=a.lng-r.lng,f=a.lat-r.lat;return Math.sqrt(u*u+f*f)},infinite:!0});Me.Earth=Fe,Me.EPSG3395=rx,Me.EPSG3857=B,Me.EPSG900913=Jt,Me.EPSG4326=im,Me.Simple=sx;var ri=ce.extend({options:{pane:"overlayPane",attribution:null,bubblingMouseEvents:!0},addTo:function(r){return r.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(r){return r&&r.removeLayer(this),this},getPane:function(r){return this._map.getPane(r?this.options[r]||r:this.options.pane)},addInteractiveTarget:function(r){return this._map._targets[h(r)]=this,this},removeInteractiveTarget:function(r){return delete this._map._targets[h(r)],this},getAttribution:function(){return this.options.attribution},_layerAdd:function(r){var a=r.target;if(a.hasLayer(this)){if(this._map=a,this._zoomAnimated=a._zoomAnimated,this.getEvents){var u=this.getEvents();a.on(u,this),this.once("remove",function(){a.off(u,this)},this)}this.onAdd(a),this.fire("add"),a.fire("layeradd",{layer:this})}}});mt.include({addLayer:function(r){if(!r._layerAdd)throw new Error("The provided object is not a Layer.");var a=h(r);return this._layers[a]?this:(this._layers[a]=r,r._mapToAdd=this,r.beforeAdd&&r.beforeAdd(this),this.whenReady(r._layerAdd,r),this)},removeLayer:function(r){var a=h(r);return this._layers[a]?(this._loaded&&r.onRemove(this),delete this._layers[a],this._loaded&&(this.fire("layerremove",{layer:r}),r.fire("remove")),r._map=r._mapToAdd=null,this):this},hasLayer:function(r){return h(r)in this._layers},eachLayer:function(r,a){for(var u in this._layers)r.call(a,this._layers[u]);return this},_addLayers:function(r){r=r?S(r)?r:[r]:[];for(var a=0,u=r.length;a<u;a++)this.addLayer(r[a])},_addZoomLimit:function(r){(!isNaN(r.options.maxZoom)||!isNaN(r.options.minZoom))&&(this._zoomBoundLayers[h(r)]=r,this._updateZoomLevels())},_removeZoomLimit:function(r){var a=h(r);this._zoomBoundLayers[a]&&(delete this._zoomBoundLayers[a],this._updateZoomLevels())},_updateZoomLevels:function(){var r=1/0,a=-1/0,u=this._getZoomSpan();for(var f in this._zoomBoundLayers){var v=this._zoomBoundLayers[f].options;r=v.minZoom===void 0?r:Math.min(r,v.minZoom),a=v.maxZoom===void 0?a:Math.max(a,v.maxZoom)}this._layersMaxZoom=a===-1/0?void 0:a,this._layersMinZoom=r===1/0?void 0:r,u!==this._getZoomSpan()&&this.fire("zoomlevelschange"),this.options.maxZoom===void 0&&this._layersMaxZoom&&this.getZoom()>this._layersMaxZoom&&this.setZoom(this._layersMaxZoom),this.options.minZoom===void 0&&this._layersMinZoom&&this.getZoom()<this._layersMinZoom&&this.setZoom(this._layersMinZoom)}});var Ms=ri.extend({initialize:function(r,a){T(this,a),this._layers={};var u,f;if(r)for(u=0,f=r.length;u<f;u++)this.addLayer(r[u])},addLayer:function(r){var a=this.getLayerId(r);return this._layers[a]=r,this._map&&this._map.addLayer(r),this},removeLayer:function(r){var a=r in this._layers?r:this.getLayerId(r);return this._map&&this._layers[a]&&this._map.removeLayer(this._layers[a]),delete this._layers[a],this},hasLayer:function(r){var a=typeof r=="number"?r:this.getLayerId(r);return a in this._layers},clearLayers:function(){return this.eachLayer(this.removeLayer,this)},invoke:function(r){var a=Array.prototype.slice.call(arguments,1),u,f;for(u in this._layers)f=this._layers[u],f[r]&&f[r].apply(f,a);return this},onAdd:function(r){this.eachLayer(r.addLayer,r)},onRemove:function(r){this.eachLayer(r.removeLayer,r)},eachLayer:function(r,a){for(var u in this._layers)r.call(a,this._layers[u]);return this},getLayer:function(r){return this._layers[r]},getLayers:function(){var r=[];return this.eachLayer(r.push,r),r},setZIndex:function(r){return this.invoke("setZIndex",r)},getLayerId:function(r){return h(r)}}),ox=function(r,a){return new Ms(r,a)},Ii=Ms.extend({addLayer:function(r){return this.hasLayer(r)?this:(r.addEventParent(this),Ms.prototype.addLayer.call(this,r),this.fire("layeradd",{layer:r}))},removeLayer:function(r){return this.hasLayer(r)?(r in this._layers&&(r=this._layers[r]),r.removeEventParent(this),Ms.prototype.removeLayer.call(this,r),this.fire("layerremove",{layer:r})):this},setStyle:function(r){return this.invoke("setStyle",r)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var r=new ke;for(var a in this._layers){var u=this._layers[a];r.extend(u.getBounds?u.getBounds():u.getLatLng())}return r}}),ax=function(r,a){return new Ii(r,a)},Es=re.extend({options:{popupAnchor:[0,0],tooltipAnchor:[0,0],crossOrigin:!1},initialize:function(r){T(this,r)},createIcon:function(r){return this._createIcon("icon",r)},createShadow:function(r){return this._createIcon("shadow",r)},_createIcon:function(r,a){var u=this._getIconUrl(r);if(!u){if(r==="icon")throw new Error("iconUrl not set in Icon options (see the docs).");return null}var f=this._createImg(u,a&&a.tagName==="IMG"?a:null);return this._setIconStyles(f,r),(this.options.crossOrigin||this.options.crossOrigin==="")&&(f.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),f},_setIconStyles:function(r,a){var u=this.options,f=u[a+"Size"];typeof f=="number"&&(f=[f,f]);var v=q(f),A=q(a==="shadow"&&u.shadowAnchor||u.iconAnchor||v&&v.divideBy(2,!0));r.className="leaflet-marker-"+a+" "+(u.className||""),A&&(r.style.marginLeft=-A.x+"px",r.style.marginTop=-A.y+"px"),v&&(r.style.width=v.x+"px",r.style.height=v.y+"px")},_createImg:function(r,a){return a=a||document.createElement("img"),a.src=r,a},_getIconUrl:function(r){return Oe.retina&&this.options[r+"RetinaUrl"]||this.options[r+"Url"]}});function lx(r){return new Es(r)}var Ho=Es.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(r){return typeof Ho.imagePath!="string"&&(Ho.imagePath=this._detectIconPath()),(this.options.imagePath||Ho.imagePath)+Es.prototype._getIconUrl.call(this,r)},_stripUrl:function(r){var a=function(u,f,v){var A=f.exec(u);return A&&A[v]};return r=a(r,/^url\((['"])?(.+)\1\)$/,2),r&&a(r,/^(.*)marker-icon\.png$/,1)},_detectIconPath:function(){var r=xe("div","leaflet-default-icon-path",document.body),a=ht(r,"background-image")||ht(r,"backgroundImage");if(document.body.removeChild(r),a=this._stripUrl(a),a)return a;var u=document.querySelector('link[href$="leaflet.css"]');return u?u.href.substring(0,u.href.length-11-1):""}}),rm=Si.extend({initialize:function(r){this._marker=r},addHooks:function(){var r=this._marker._icon;this._draggable||(this._draggable=new ar(r,r,!0)),this._draggable.on({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),Ke(r,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,predrag:this._onPreDrag,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&$e(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_adjustPan:function(r){var a=this._marker,u=a._map,f=this._marker.options.autoPanSpeed,v=this._marker.options.autoPanPadding,A=Gr(a._icon),F=u.getPixelBounds(),X=u.getPixelOrigin(),J=Le(F.min._subtract(X).add(v),F.max._subtract(X).subtract(v));if(!J.contains(A)){var me=q((Math.max(J.max.x,A.x)-J.max.x)/(F.max.x-J.max.x)-(Math.min(J.min.x,A.x)-J.min.x)/(F.min.x-J.min.x),(Math.max(J.max.y,A.y)-J.max.y)/(F.max.y-J.max.y)-(Math.min(J.min.y,A.y)-J.min.y)/(F.min.y-J.min.y)).multiplyBy(f);u.panBy(me,{animate:!1}),this._draggable._newPos._add(me),this._draggable._startPos._add(me),Bt(a._icon,this._draggable._newPos),this._onDrag(r),this._panRequest=R(this._adjustPan.bind(this,r))}},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup&&this._marker.closePopup(),this._marker.fire("movestart").fire("dragstart")},_onPreDrag:function(r){this._marker.options.autoPan&&(te(this._panRequest),this._panRequest=R(this._adjustPan.bind(this,r)))},_onDrag:function(r){var a=this._marker,u=a._shadow,f=Gr(a._icon),v=a._map.layerPointToLatLng(f);u&&Bt(u,f),a._latlng=v,r.latlng=v,r.oldLatLng=this._oldLatLng,a.fire("move",r).fire("drag",r)},_onDragEnd:function(r){te(this._panRequest),delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",r)}}),nl=ri.extend({options:{icon:new Ho,interactive:!0,keyboard:!0,title:"",alt:"Marker",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",shadowPane:"shadowPane",bubblingMouseEvents:!1,autoPanOnFocus:!0,draggable:!1,autoPan:!1,autoPanPadding:[50,50],autoPanSpeed:10},initialize:function(r,a){T(this,a),this._latlng=de(r)},onAdd:function(r){this._zoomAnimated=this._zoomAnimated&&r.options.markerZoomAnimation,this._zoomAnimated&&r.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(r){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),delete this.dragging,this._zoomAnimated&&r.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(r){var a=this._latlng;return this._latlng=de(r),this.update(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},setZIndexOffset:function(r){return this.options.zIndexOffset=r,this.update()},getIcon:function(){return this.options.icon},setIcon:function(r){return this.options.icon=r,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon&&this._map){var r=this._map.latLngToLayerPoint(this._latlng).round();this._setPos(r)}return this},_initIcon:function(){var r=this.options,a="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),u=r.icon.createIcon(this._icon),f=!1;u!==this._icon&&(this._icon&&this._removeIcon(),f=!0,r.title&&(u.title=r.title),u.tagName==="IMG"&&(u.alt=r.alt||"")),Ke(u,a),r.keyboard&&(u.tabIndex="0",u.setAttribute("role","button")),this._icon=u,r.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&Qe(u,"focus",this._panOnFocus,this);var v=r.icon.createShadow(this._shadow),A=!1;v!==this._shadow&&(this._removeShadow(),A=!0),v&&(Ke(v,a),v.alt=""),this._shadow=v,r.opacity<1&&this._updateOpacity(),f&&this.getPane().appendChild(this._icon),this._initInteraction(),v&&A&&this.getPane(r.shadowPane).appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),this.options.autoPanOnFocus&&wt(this._icon,"focus",this._panOnFocus,this),tt(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&tt(this._shadow),this._shadow=null},_setPos:function(r){this._icon&&Bt(this._icon,r),this._shadow&&Bt(this._shadow,r),this._zIndex=r.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(r){this._icon&&(this._icon.style.zIndex=this._zIndex+r)},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center).round();this._setPos(a)},_initInteraction:function(){if(this.options.interactive&&(Ke(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),rm)){var r=this.options.draggable;this.dragging&&(r=this.dragging.enabled(),this.dragging.disable()),this.dragging=new rm(this),r&&this.dragging.enable()}},setOpacity:function(r){return this.options.opacity=r,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var r=this.options.opacity;this._icon&&Ct(this._icon,r),this._shadow&&Ct(this._shadow,r)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)},_panOnFocus:function(){var r=this._map;if(r){var a=this.options.icon.options,u=a.iconSize?q(a.iconSize):q(0,0),f=a.iconAnchor?q(a.iconAnchor):q(0,0);r.panInside(this._latlng,{paddingTopLeft:f,paddingBottomRight:u.subtract(f)})}},_getPopupAnchor:function(){return this.options.icon.options.popupAnchor},_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor}});function ux(r,a){return new nl(r,a)}var lr=ri.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0,bubblingMouseEvents:!0},beforeAdd:function(r){this._renderer=r.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this)},onRemove:function(){this._renderer._removePath(this)},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(r){return T(this,r),this._renderer&&(this._renderer._updateStyle(this),this.options.stroke&&r&&Object.prototype.hasOwnProperty.call(r,"weight")&&this._updateBounds()),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(this._renderer.options.tolerance||0)}}),il=lr.extend({options:{fill:!0,radius:10},initialize:function(r,a){T(this,a),this._latlng=de(r),this._radius=this.options.radius},setLatLng:function(r){var a=this._latlng;return this._latlng=de(r),this.redraw(),this.fire("move",{oldLatLng:a,latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(r){return this.options.radius=this._radius=r,this.redraw()},getRadius:function(){return this._radius},setStyle:function(r){var a=r&&r.radius||this._radius;return lr.prototype.setStyle.call(this,r),this.setRadius(a),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var r=this._radius,a=this._radiusY||r,u=this._clickTolerance(),f=[r+u,a+u];this._pxBounds=new he(this._point.subtract(f),this._point.add(f))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)},_containsPoint:function(r){return r.distanceTo(this._point)<=this._radius+this._clickTolerance()}});function cx(r,a){return new il(r,a)}var zc=il.extend({initialize:function(r,a,u){if(typeof a=="number"&&(a=s({},u,{radius:a})),T(this,a),this._latlng=de(r),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN");this._mRadius=this.options.radius},setRadius:function(r){return this._mRadius=r,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var r=[this._radius,this._radiusY||this._radius];return new ke(this._map.layerPointToLatLng(this._point.subtract(r)),this._map.layerPointToLatLng(this._point.add(r)))},setStyle:lr.prototype.setStyle,_project:function(){var r=this._latlng.lng,a=this._latlng.lat,u=this._map,f=u.options.crs;if(f.distance===Fe.distance){var v=Math.PI/180,A=this._mRadius/Fe.R/v,F=u.project([a+A,r]),X=u.project([a-A,r]),J=F.add(X).divideBy(2),me=u.unproject(J).lat,Ce=Math.acos((Math.cos(A*v)-Math.sin(a*v)*Math.sin(me*v))/(Math.cos(a*v)*Math.cos(me*v)))/v;(isNaN(Ce)||Ce===0)&&(Ce=A/Math.cos(Math.PI/180*a)),this._point=J.subtract(u.getPixelOrigin()),this._radius=isNaN(Ce)?0:J.x-u.project([me,r-Ce]).x,this._radiusY=J.y-F.y}else{var Xe=f.unproject(f.project(this._latlng).subtract([this._mRadius,0]));this._point=u.latLngToLayerPoint(this._latlng),this._radius=this._point.x-u.latLngToLayerPoint(Xe).x}this._updateBounds()}});function hx(r,a,u){return new zc(r,a,u)}var Di=lr.extend({options:{smoothFactor:1,noClip:!1},initialize:function(r,a){T(this,a),this._setLatLngs(r)},getLatLngs:function(){return this._latlngs},setLatLngs:function(r){return this._setLatLngs(r),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(r){for(var a=1/0,u=null,f=Bo,v,A,F=0,X=this._parts.length;F<X;F++)for(var J=this._parts[F],me=1,Ce=J.length;me<Ce;me++){v=J[me-1],A=J[me];var Xe=f(r,v,A,!0);Xe<a&&(a=Xe,u=f(r,v,A))}return u&&(u.distance=Math.sqrt(a)),u},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return nm(this._defaultShape(),this._map.options.crs)},getBounds:function(){return this._bounds},addLatLng:function(r,a){return a=a||this._defaultShape(),r=de(r),a.push(r),this._bounds.extend(r),this.redraw()},_setLatLngs:function(r){this._bounds=new ke,this._latlngs=this._convertLatLngs(r)},_defaultShape:function(){return Zn(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(r){for(var a=[],u=Zn(r),f=0,v=r.length;f<v;f++)u?(a[f]=de(r[f]),this._bounds.extend(a[f])):a[f]=this._convertLatLngs(r[f]);return a},_project:function(){var r=new he;this._rings=[],this._projectLatlngs(this._latlngs,this._rings,r),this._bounds.isValid()&&r.isValid()&&(this._rawPxBounds=r,this._updateBounds())},_updateBounds:function(){var r=this._clickTolerance(),a=new O(r,r);this._rawPxBounds&&(this._pxBounds=new he([this._rawPxBounds.min.subtract(a),this._rawPxBounds.max.add(a)]))},_projectLatlngs:function(r,a,u){var f=r[0]instanceof oe,v=r.length,A,F;if(f){for(F=[],A=0;A<v;A++)F[A]=this._map.latLngToLayerPoint(r[A]),u.extend(F[A]);a.push(F)}else for(A=0;A<v;A++)this._projectLatlngs(r[A],a,u)},_clipPoints:function(){var r=this._renderer._bounds;if(this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}var a=this._parts,u,f,v,A,F,X,J;for(u=0,v=0,A=this._rings.length;u<A;u++)for(J=this._rings[u],f=0,F=J.length;f<F-1;f++)X=em(J[f],J[f+1],r,f,!0),X&&(a[v]=a[v]||[],a[v].push(X[0]),(X[1]!==J[f+1]||f===F-2)&&(a[v].push(X[1]),v++))}},_simplifyPoints:function(){for(var r=this._parts,a=this.options.smoothFactor,u=0,f=r.length;u<f;u++)r[u]=$p(r[u],a)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)},_containsPoint:function(r,a){var u,f,v,A,F,X,J=this._clickTolerance();if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(u=0,A=this._parts.length;u<A;u++)for(X=this._parts[u],f=0,F=X.length,v=F-1;f<F;v=f++)if(!(!a&&f===0)&&Qp(r,X[v],X[f])<=J)return!0;return!1}});function fx(r,a){return new Di(r,a)}Di._flat=tm;var ws=Di.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()");return Kp(this._defaultShape(),this._map.options.crs)},_convertLatLngs:function(r){var a=Di.prototype._convertLatLngs.call(this,r),u=a.length;return u>=2&&a[0]instanceof oe&&a[0].equals(a[u-1])&&a.pop(),a},_setLatLngs:function(r){Di.prototype._setLatLngs.call(this,r),Zn(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return Zn(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var r=this._renderer._bounds,a=this.options.weight,u=new O(a,a);if(r=new he(r.min.subtract(u),r.max.add(u)),this._parts=[],!(!this._pxBounds||!this._pxBounds.intersects(r))){if(this.options.noClip){this._parts=this._rings;return}for(var f=0,v=this._rings.length,A;f<v;f++)A=Yp(this._rings[f],r,!0),A.length&&this._parts.push(A)}},_updatePath:function(){this._renderer._updatePoly(this,!0)},_containsPoint:function(r){var a=!1,u,f,v,A,F,X,J,me;if(!this._pxBounds||!this._pxBounds.contains(r))return!1;for(A=0,J=this._parts.length;A<J;A++)for(u=this._parts[A],F=0,me=u.length,X=me-1;F<me;X=F++)f=u[F],v=u[X],f.y>r.y!=v.y>r.y&&r.x<(v.x-f.x)*(r.y-f.y)/(v.y-f.y)+f.x&&(a=!a);return a||Di.prototype._containsPoint.call(this,r,!0)}});function dx(r,a){return new ws(r,a)}var Ni=Ii.extend({initialize:function(r,a){T(this,a),this._layers={},r&&this.addData(r)},addData:function(r){var a=S(r)?r:r.features,u,f,v;if(a){for(u=0,f=a.length;u<f;u++)v=a[u],(v.geometries||v.geometry||v.features||v.coordinates)&&this.addData(v);return this}var A=this.options;if(A.filter&&!A.filter(r))return this;var F=rl(r,A);return F?(F.feature=al(r),F.defaultOptions=F.options,this.resetStyle(F),A.onEachFeature&&A.onEachFeature(r,F),this.addLayer(F)):this},resetStyle:function(r){return r===void 0?this.eachLayer(this.resetStyle,this):(r.options=s({},r.defaultOptions),this._setLayerStyle(r,this.options.style),this)},setStyle:function(r){return this.eachLayer(function(a){this._setLayerStyle(a,r)},this)},_setLayerStyle:function(r,a){r.setStyle&&(typeof a=="function"&&(a=a(r.feature)),r.setStyle(a))}});function rl(r,a){var u=r.type==="Feature"?r.geometry:r,f=u?u.coordinates:null,v=[],A=a&&a.pointToLayer,F=a&&a.coordsToLatLng||kc,X,J,me,Ce;if(!f&&!u)return null;switch(u.type){case"Point":return X=F(f),sm(A,r,X,a);case"MultiPoint":for(me=0,Ce=f.length;me<Ce;me++)X=F(f[me]),v.push(sm(A,r,X,a));return new Ii(v);case"LineString":case"MultiLineString":return J=sl(f,u.type==="LineString"?0:1,F),new Di(J,a);case"Polygon":case"MultiPolygon":return J=sl(f,u.type==="Polygon"?1:2,F),new ws(J,a);case"GeometryCollection":for(me=0,Ce=u.geometries.length;me<Ce;me++){var Xe=rl({geometry:u.geometries[me],type:"Feature",properties:r.properties},a);Xe&&v.push(Xe)}return new Ii(v);case"FeatureCollection":for(me=0,Ce=u.features.length;me<Ce;me++){var at=rl(u.features[me],a);at&&v.push(at)}return new Ii(v);default:throw new Error("Invalid GeoJSON object.")}}function sm(r,a,u,f){return r?r(a,u):new nl(u,f&&f.markersInheritOptions&&f)}function kc(r){return new oe(r[1],r[0],r[2])}function sl(r,a,u){for(var f=[],v=0,A=r.length,F;v<A;v++)F=a?sl(r[v],a-1,u):(u||kc)(r[v]),f.push(F);return f}function Bc(r,a){return r=de(r),r.alt!==void 0?[_(r.lng,a),_(r.lat,a),_(r.alt,a)]:[_(r.lng,a),_(r.lat,a)]}function ol(r,a,u,f){for(var v=[],A=0,F=r.length;A<F;A++)v.push(a?ol(r[A],Zn(r[A])?0:a-1,u,f):Bc(r[A],f));return!a&&u&&v.length>0&&v.push(v[0].slice()),v}function Ts(r,a){return r.feature?s({},r.feature,{geometry:a}):al(a)}function al(r){return r.type==="Feature"||r.type==="FeatureCollection"?r:{type:"Feature",properties:{},geometry:r}}var Hc={toGeoJSON:function(r){return Ts(this,{type:"Point",coordinates:Bc(this.getLatLng(),r)})}};nl.include(Hc),zc.include(Hc),il.include(Hc),Di.include({toGeoJSON:function(r){var a=!Zn(this._latlngs),u=ol(this._latlngs,a?1:0,!1,r);return Ts(this,{type:(a?"Multi":"")+"LineString",coordinates:u})}}),ws.include({toGeoJSON:function(r){var a=!Zn(this._latlngs),u=a&&!Zn(this._latlngs[0]),f=ol(this._latlngs,u?2:a?1:0,!0,r);return a||(f=[f]),Ts(this,{type:(u?"Multi":"")+"Polygon",coordinates:f})}}),Ms.include({toMultiPoint:function(r){var a=[];return this.eachLayer(function(u){a.push(u.toGeoJSON(r).geometry.coordinates)}),Ts(this,{type:"MultiPoint",coordinates:a})},toGeoJSON:function(r){var a=this.feature&&this.feature.geometry&&this.feature.geometry.type;if(a==="MultiPoint")return this.toMultiPoint(r);var u=a==="GeometryCollection",f=[];return this.eachLayer(function(v){if(v.toGeoJSON){var A=v.toGeoJSON(r);if(u)f.push(A.geometry);else{var F=al(A);F.type==="FeatureCollection"?f.push.apply(f,F.features):f.push(F)}}}),u?Ts(this,{geometries:f,type:"GeometryCollection"}):{type:"FeatureCollection",features:f}}});function om(r,a){return new Ni(r,a)}var px=om,ll=ri.extend({options:{opacity:1,alt:"",interactive:!1,crossOrigin:!1,errorOverlayUrl:"",zIndex:1,className:""},initialize:function(r,a,u){this._url=r,this._bounds=Q(a),T(this,u)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(Ke(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){tt(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(r){return this.options.opacity=r,this._image&&this._updateOpacity(),this},setStyle:function(r){return r.opacity&&this.setOpacity(r.opacity),this},bringToFront:function(){return this._map&&qt(this._image),this},bringToBack:function(){return this._map&&On(this._image),this},setUrl:function(r){return this._url=r,this._image&&(this._image.src=r),this},setBounds:function(r){return this._bounds=Q(r),this._map&&this._reset(),this},getEvents:function(){var r={zoom:this._reset,viewreset:this._reset};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var r=this._url.tagName==="IMG",a=this._image=r?this._url:xe("img");if(Ke(a,"leaflet-image-layer"),this._zoomAnimated&&Ke(a,"leaflet-zoom-animated"),this.options.className&&Ke(a,this.options.className),a.onselectstart=g,a.onmousemove=g,a.onload=l(this.fire,this,"load"),a.onerror=l(this._overlayOnError,this,"error"),(this.options.crossOrigin||this.options.crossOrigin==="")&&(a.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),this.options.zIndex&&this._updateZIndex(),r){this._url=a.src;return}a.src=this._url,a.alt=this.options.alt},_animateZoom:function(r){var a=this._map.getZoomScale(r.zoom),u=this._map._latLngBoundsToNewLayerBounds(this._bounds,r.zoom,r.center).min;yi(this._image,u,a)},_reset:function(){var r=this._image,a=new he(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),u=a.getSize();Bt(r,a.min),r.style.width=u.x+"px",r.style.height=u.y+"px"},_updateOpacity:function(){Ct(this._image,this.options.opacity)},_updateZIndex:function(){this._image&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._image.style.zIndex=this.options.zIndex)},_overlayOnError:function(){this.fire("error");var r=this.options.errorOverlayUrl;r&&this._url!==r&&(this._url=r,this._image.src=r)},getCenter:function(){return this._bounds.getCenter()}}),mx=function(r,a,u){return new ll(r,a,u)},am=ll.extend({options:{autoplay:!0,loop:!0,keepAspectRatio:!0,muted:!1,playsInline:!0},_initImage:function(){var r=this._url.tagName==="VIDEO",a=this._image=r?this._url:xe("video");if(Ke(a,"leaflet-image-layer"),this._zoomAnimated&&Ke(a,"leaflet-zoom-animated"),this.options.className&&Ke(a,this.options.className),a.onselectstart=g,a.onmousemove=g,a.onloadeddata=l(this.fire,this,"load"),r){for(var u=a.getElementsByTagName("source"),f=[],v=0;v<u.length;v++)f.push(u[v].src);this._url=u.length>0?f:[a.src];return}S(this._url)||(this._url=[this._url]),!this.options.keepAspectRatio&&Object.prototype.hasOwnProperty.call(a.style,"objectFit")&&(a.style.objectFit="fill"),a.autoplay=!!this.options.autoplay,a.loop=!!this.options.loop,a.muted=!!this.options.muted,a.playsInline=!!this.options.playsInline;for(var A=0;A<this._url.length;A++){var F=xe("source");F.src=this._url[A],a.appendChild(F)}}});function _x(r,a,u){return new am(r,a,u)}var lm=ll.extend({_initImage:function(){var r=this._image=this._url;Ke(r,"leaflet-image-layer"),this._zoomAnimated&&Ke(r,"leaflet-zoom-animated"),this.options.className&&Ke(r,this.options.className),r.onselectstart=g,r.onmousemove=g}});function gx(r,a,u){return new lm(r,a,u)}var Mi=ri.extend({options:{interactive:!1,offset:[0,0],className:"",pane:void 0,content:""},initialize:function(r,a){r&&(r instanceof oe||S(r))?(this._latlng=de(r),T(this,a)):(T(this,r),this._source=a),this.options.content&&(this._content=this.options.content)},openOn:function(r){return r=arguments.length?r:this._source._map,r.hasLayer(this)||r.addLayer(this),this},close:function(){return this._map&&this._map.removeLayer(this),this},toggle:function(r){return this._map?this.close():(arguments.length?this._source=r:r=this._source,this._prepareOpen(),this.openOn(r._map)),this},onAdd:function(r){this._zoomAnimated=r._zoomAnimated,this._container||this._initLayout(),r._fadeAnimated&&Ct(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),r._fadeAnimated&&Ct(this._container,1),this.bringToFront(),this.options.interactive&&(Ke(this._container,"leaflet-interactive"),this.addInteractiveTarget(this._container))},onRemove:function(r){r._fadeAnimated?(Ct(this._container,0),this._removeTimeout=setTimeout(l(tt,void 0,this._container),200)):tt(this._container),this.options.interactive&&($e(this._container,"leaflet-interactive"),this.removeInteractiveTarget(this._container))},getLatLng:function(){return this._latlng},setLatLng:function(r){return this._latlng=de(r),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(r){return this._content=r,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var r={zoom:this._updatePosition,viewreset:this._updatePosition};return this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&qt(this._container),this},bringToBack:function(){return this._map&&On(this._container),this},_prepareOpen:function(r){var a=this._source;if(!a._map)return!1;if(a instanceof Ii){a=null;var u=this._source._layers;for(var f in u)if(u[f]._map){a=u[f];break}if(!a)return!1;this._source=a}if(!r)if(a.getCenter)r=a.getCenter();else if(a.getLatLng)r=a.getLatLng();else if(a.getBounds)r=a.getBounds().getCenter();else throw new Error("Unable to get source layer LatLng.");return this.setLatLng(r),this._map&&this.update(),!0},_updateContent:function(){if(this._content){var r=this._contentNode,a=typeof this._content=="function"?this._content(this._source||this):this._content;if(typeof a=="string")r.innerHTML=a;else{for(;r.hasChildNodes();)r.removeChild(r.firstChild);r.appendChild(a)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var r=this._map.latLngToLayerPoint(this._latlng),a=q(this.options.offset),u=this._getAnchor();this._zoomAnimated?Bt(this._container,r.add(u)):a=a.add(r).add(u);var f=this._containerBottom=-a.y,v=this._containerLeft=-Math.round(this._containerWidth/2)+a.x;this._container.style.bottom=f+"px",this._container.style.left=v+"px"}},_getAnchor:function(){return[0,0]}});mt.include({_initOverlay:function(r,a,u,f){var v=a;return v instanceof r||(v=new r(f).setContent(a)),u&&v.setLatLng(u),v}}),ri.include({_initOverlay:function(r,a,u,f){var v=u;return v instanceof r?(T(v,f),v._source=this):(v=a&&!f?a:new r(f,this),v.setContent(u)),v}});var ul=Mi.extend({options:{pane:"popupPane",offset:[0,7],maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,closeOnEscapeKey:!0,className:""},openOn:function(r){return r=arguments.length?r:this._source._map,!r.hasLayer(this)&&r._popup&&r._popup.options.autoClose&&r.removeLayer(r._popup),r._popup=this,Mi.prototype.openOn.call(this,r)},onAdd:function(r){Mi.prototype.onAdd.call(this,r),r.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof lr||this._source.on("preclick",Wr))},onRemove:function(r){Mi.prototype.onRemove.call(this,r),r.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof lr||this._source.off("preclick",Wr))},getEvents:function(){var r=Mi.prototype.getEvents.call(this);return(this.options.closeOnClick!==void 0?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(r.preclick=this.close),this.options.keepInView&&(r.moveend=this._adjustPan),r},_initLayout:function(){var r="leaflet-popup",a=this._container=xe("div",r+" "+(this.options.className||"")+" leaflet-zoom-animated"),u=this._wrapper=xe("div",r+"-content-wrapper",a);if(this._contentNode=xe("div",r+"-content",u),zo(a),Lc(this._contentNode),Qe(a,"contextmenu",Wr),this._tipContainer=xe("div",r+"-tip-container",a),this._tip=xe("div",r+"-tip",this._tipContainer),this.options.closeButton){var f=this._closeButton=xe("a",r+"-close-button",a);f.setAttribute("role","button"),f.setAttribute("aria-label","Close popup"),f.href="#close",f.innerHTML='<span aria-hidden="true">&#215;</span>',Qe(f,"click",function(v){tn(v),this.close()},this)}},_updateLayout:function(){var r=this._contentNode,a=r.style;a.width="",a.whiteSpace="nowrap";var u=r.offsetWidth;u=Math.min(u,this.options.maxWidth),u=Math.max(u,this.options.minWidth),a.width=u+1+"px",a.whiteSpace="",a.height="";var f=r.offsetHeight,v=this.options.maxHeight,A="leaflet-popup-scrolled";v&&f>v?(a.height=v+"px",Ke(r,A)):$e(r,A),this._containerWidth=this._container.offsetWidth},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center),u=this._getAnchor();Bt(this._container,a.add(u))},_adjustPan:function(){if(this.options.autoPan){if(this._map._panAnim&&this._map._panAnim.stop(),this._autopanning){this._autopanning=!1;return}var r=this._map,a=parseInt(ht(this._container,"marginBottom"),10)||0,u=this._container.offsetHeight+a,f=this._containerWidth,v=new O(this._containerLeft,-u-this._containerBottom);v._add(Gr(this._container));var A=r.layerPointToContainerPoint(v),F=q(this.options.autoPanPadding),X=q(this.options.autoPanPaddingTopLeft||F),J=q(this.options.autoPanPaddingBottomRight||F),me=r.getSize(),Ce=0,Xe=0;A.x+f+J.x>me.x&&(Ce=A.x+f-me.x+J.x),A.x-Ce-X.x<0&&(Ce=A.x-X.x),A.y+u+J.y>me.y&&(Xe=A.y+u-me.y+J.y),A.y-Xe-X.y<0&&(Xe=A.y-X.y),(Ce||Xe)&&(this.options.keepInView&&(this._autopanning=!0),r.fire("autopanstart").panBy([Ce,Xe]))}},_getAnchor:function(){return q(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),vx=function(r,a){return new ul(r,a)};mt.mergeOptions({closePopupOnClick:!0}),mt.include({openPopup:function(r,a,u){return this._initOverlay(ul,r,a,u).openOn(this),this},closePopup:function(r){return r=arguments.length?r:this._popup,r&&r.close(),this}}),ri.include({bindPopup:function(r,a){return this._popup=this._initOverlay(ul,this._popup,r,a),this._popupHandlersAdded||(this.on({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,keypress:this._onKeyPress,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(r){return this._popup&&(this instanceof Ii||(this._popup._source=this),this._popup._prepareOpen(r||this._latlng)&&this._popup.openOn(this._map)),this},closePopup:function(){return this._popup&&this._popup.close(),this},togglePopup:function(){return this._popup&&this._popup.toggle(this),this},isPopupOpen:function(){return this._popup?this._popup.isOpen():!1},setPopupContent:function(r){return this._popup&&this._popup.setContent(r),this},getPopup:function(){return this._popup},_openPopup:function(r){if(!(!this._popup||!this._map)){Xr(r);var a=r.layer||r.target;if(this._popup._source===a&&!(a instanceof lr)){this._map.hasLayer(this._popup)?this.closePopup():this.openPopup(r.latlng);return}this._popup._source=a,this.openPopup(r.latlng)}},_movePopup:function(r){this._popup.setLatLng(r.latlng)},_onKeyPress:function(r){r.originalEvent.keyCode===13&&this._openPopup(r)}});var cl=Mi.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,opacity:.9},onAdd:function(r){Mi.prototype.onAdd.call(this,r),this.setOpacity(this.options.opacity),r.fire("tooltipopen",{tooltip:this}),this._source&&(this.addEventParent(this._source),this._source.fire("tooltipopen",{tooltip:this},!0))},onRemove:function(r){Mi.prototype.onRemove.call(this,r),r.fire("tooltipclose",{tooltip:this}),this._source&&(this.removeEventParent(this._source),this._source.fire("tooltipclose",{tooltip:this},!0))},getEvents:function(){var r=Mi.prototype.getEvents.call(this);return this.options.permanent||(r.preclick=this.close),r},_initLayout:function(){var r="leaflet-tooltip",a=r+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide");this._contentNode=this._container=xe("div",a),this._container.setAttribute("role","tooltip"),this._container.setAttribute("id","leaflet-tooltip-"+h(this))},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(r){var a,u,f=this._map,v=this._container,A=f.latLngToContainerPoint(f.getCenter()),F=f.layerPointToContainerPoint(r),X=this.options.direction,J=v.offsetWidth,me=v.offsetHeight,Ce=q(this.options.offset),Xe=this._getAnchor();X==="top"?(a=J/2,u=me):X==="bottom"?(a=J/2,u=0):X==="center"?(a=J/2,u=me/2):X==="right"?(a=0,u=me/2):X==="left"?(a=J,u=me/2):F.x<A.x?(X="right",a=0,u=me/2):(X="left",a=J+(Ce.x+Xe.x)*2,u=me/2),r=r.subtract(q(a,u,!0)).add(Ce).add(Xe),$e(v,"leaflet-tooltip-right"),$e(v,"leaflet-tooltip-left"),$e(v,"leaflet-tooltip-top"),$e(v,"leaflet-tooltip-bottom"),Ke(v,"leaflet-tooltip-"+X),Bt(v,r)},_updatePosition:function(){var r=this._map.latLngToLayerPoint(this._latlng);this._setPosition(r)},setOpacity:function(r){this.options.opacity=r,this._container&&Ct(this._container,r)},_animateZoom:function(r){var a=this._map._latLngToNewLayerPoint(this._latlng,r.zoom,r.center);this._setPosition(a)},_getAnchor:function(){return q(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),yx=function(r,a){return new cl(r,a)};mt.include({openTooltip:function(r,a,u){return this._initOverlay(cl,r,a,u).openOn(this),this},closeTooltip:function(r){return r.close(),this}}),ri.include({bindTooltip:function(r,a){return this._tooltip&&this.isTooltipOpen()&&this.unbindTooltip(),this._tooltip=this._initOverlay(cl,this._tooltip,r,a),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(r){if(!(!r&&this._tooltipHandlersAdded)){var a=r?"off":"on",u={remove:this.closeTooltip,move:this._moveTooltip};this._tooltip.options.permanent?u.add=this._openTooltip:(u.mouseover=this._openTooltip,u.mouseout=this.closeTooltip,u.click=this._openTooltip,this._map?this._addFocusListeners():u.add=this._addFocusListeners),this._tooltip.options.sticky&&(u.mousemove=this._moveTooltip),this[a](u),this._tooltipHandlersAdded=!r}},openTooltip:function(r){return this._tooltip&&(this instanceof Ii||(this._tooltip._source=this),this._tooltip._prepareOpen(r)&&(this._tooltip.openOn(this._map),this.getElement?this._setAriaDescribedByOnLayer(this):this.eachLayer&&this.eachLayer(this._setAriaDescribedByOnLayer,this))),this},closeTooltip:function(){if(this._tooltip)return this._tooltip.close()},toggleTooltip:function(){return this._tooltip&&this._tooltip.toggle(this),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(r){return this._tooltip&&this._tooltip.setContent(r),this},getTooltip:function(){return this._tooltip},_addFocusListeners:function(){this.getElement?this._addFocusListenersOnLayer(this):this.eachLayer&&this.eachLayer(this._addFocusListenersOnLayer,this)},_addFocusListenersOnLayer:function(r){var a=typeof r.getElement=="function"&&r.getElement();a&&(Qe(a,"focus",function(){this._tooltip._source=r,this.openTooltip()},this),Qe(a,"blur",this.closeTooltip,this))},_setAriaDescribedByOnLayer:function(r){var a=typeof r.getElement=="function"&&r.getElement();a&&a.setAttribute("aria-describedby",this._tooltip._container.id)},_openTooltip:function(r){if(!(!this._tooltip||!this._map)){if(this._map.dragging&&this._map.dragging.moving()&&!this._openOnceFlag){this._openOnceFlag=!0;var a=this;this._map.once("moveend",function(){a._openOnceFlag=!1,a._openTooltip(r)});return}this._tooltip._source=r.layer||r.target,this.openTooltip(this._tooltip.options.sticky?r.latlng:void 0)}},_moveTooltip:function(r){var a=r.latlng,u,f;this._tooltip.options.sticky&&r.originalEvent&&(u=this._map.mouseEventToContainerPoint(r.originalEvent),f=this._map.containerPointToLayerPoint(u),a=this._map.layerPointToLatLng(f)),this._tooltip.setLatLng(a)}});var um=Es.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(r){var a=r&&r.tagName==="DIV"?r:document.createElement("div"),u=this.options;if(u.html instanceof Element?(dt(a),a.appendChild(u.html)):a.innerHTML=u.html!==!1?u.html:"",u.bgPos){var f=q(u.bgPos);a.style.backgroundPosition=-f.x+"px "+-f.y+"px"}return this._setIconStyles(a,"icon"),a},createShadow:function(){return null}});function xx(r){return new um(r)}Es.Default=Ho;var Vo=ri.extend({options:{tileSize:256,opacity:1,updateWhenIdle:Oe.mobile,updateWhenZooming:!0,updateInterval:200,zIndex:1,bounds:null,minZoom:0,maxZoom:void 0,maxNativeZoom:void 0,minNativeZoom:void 0,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(r){T(this,r)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView()},beforeAdd:function(r){r._addZoomLimit(this)},onRemove:function(r){this._removeAllTiles(),tt(this._container),r._removeZoomLimit(this),this._container=null,this._tileZoom=void 0},bringToFront:function(){return this._map&&(qt(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(On(this._container),this._setAutoZIndex(Math.min)),this},getContainer:function(){return this._container},setOpacity:function(r){return this.options.opacity=r,this._updateOpacity(),this},setZIndex:function(r){return this.options.zIndex=r,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){if(this._map){this._removeAllTiles();var r=this._clampZoom(this._map.getZoom());r!==this._tileZoom&&(this._tileZoom=r,this._updateLevels()),this._update()}return this},getEvents:function(){var r={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd};return this.options.updateWhenIdle||(this._onMove||(this._onMove=d(this._onMoveEnd,this.options.updateInterval,this)),r.move=this._onMove),this._zoomAnimated&&(r.zoomanim=this._animateZoom),r},createTile:function(){return document.createElement("div")},getTileSize:function(){var r=this.options.tileSize;return r instanceof O?r:new O(r,r)},_updateZIndex:function(){this._container&&this.options.zIndex!==void 0&&this.options.zIndex!==null&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(r){for(var a=this.getPane().children,u=-r(-1/0,1/0),f=0,v=a.length,A;f<v;f++)A=a[f].style.zIndex,a[f]!==this._container&&A&&(u=r(u,+A));isFinite(u)&&(this.options.zIndex=u+r(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!Oe.ielt9){Ct(this._container,this.options.opacity);var r=+new Date,a=!1,u=!1;for(var f in this._tiles){var v=this._tiles[f];if(!(!v.current||!v.loaded)){var A=Math.min(1,(r-v.loaded)/200);Ct(v.el,A),A<1?a=!0:(v.active?u=!0:this._onOpaqueTile(v),v.active=!0)}}u&&!this._noPrune&&this._pruneTiles(),a&&(te(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this))}},_onOpaqueTile:g,_initContainer:function(){this._container||(this._container=xe("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var r=this._tileZoom,a=this.options.maxZoom;if(r!==void 0){for(var u in this._levels)u=Number(u),this._levels[u].el.children.length||u===r?(this._levels[u].el.style.zIndex=a-Math.abs(r-u),this._onUpdateLevel(u)):(tt(this._levels[u].el),this._removeTilesAtZoom(u),this._onRemoveLevel(u),delete this._levels[u]);var f=this._levels[r],v=this._map;return f||(f=this._levels[r]={},f.el=xe("div","leaflet-tile-container leaflet-zoom-animated",this._container),f.el.style.zIndex=a,f.origin=v.project(v.unproject(v.getPixelOrigin()),r).round(),f.zoom=r,this._setZoomTransform(f,v.getCenter(),v.getZoom()),g(f.el.offsetWidth),this._onCreateLevel(f)),this._level=f,f}},_onUpdateLevel:g,_onRemoveLevel:g,_onCreateLevel:g,_pruneTiles:function(){if(this._map){var r,a,u=this._map.getZoom();if(u>this.options.maxZoom||u<this.options.minZoom){this._removeAllTiles();return}for(r in this._tiles)a=this._tiles[r],a.retain=a.current;for(r in this._tiles)if(a=this._tiles[r],a.current&&!a.active){var f=a.coords;this._retainParent(f.x,f.y,f.z,f.z-5)||this._retainChildren(f.x,f.y,f.z,f.z+2)}for(r in this._tiles)this._tiles[r].retain||this._removeTile(r)}},_removeTilesAtZoom:function(r){for(var a in this._tiles)this._tiles[a].coords.z===r&&this._removeTile(a)},_removeAllTiles:function(){for(var r in this._tiles)this._removeTile(r)},_invalidateAll:function(){for(var r in this._levels)tt(this._levels[r].el),this._onRemoveLevel(Number(r)),delete this._levels[r];this._removeAllTiles(),this._tileZoom=void 0},_retainParent:function(r,a,u,f){var v=Math.floor(r/2),A=Math.floor(a/2),F=u-1,X=new O(+v,+A);X.z=+F;var J=this._tileCoordsToKey(X),me=this._tiles[J];return me&&me.active?(me.retain=!0,!0):(me&&me.loaded&&(me.retain=!0),F>f?this._retainParent(v,A,F,f):!1)},_retainChildren:function(r,a,u,f){for(var v=2*r;v<2*r+2;v++)for(var A=2*a;A<2*a+2;A++){var F=new O(v,A);F.z=u+1;var X=this._tileCoordsToKey(F),J=this._tiles[X];if(J&&J.active){J.retain=!0;continue}else J&&J.loaded&&(J.retain=!0);u+1<f&&this._retainChildren(v,A,u+1,f)}},_resetView:function(r){var a=r&&(r.pinch||r.flyTo);this._setView(this._map.getCenter(),this._map.getZoom(),a,a)},_animateZoom:function(r){this._setView(r.center,r.zoom,!0,r.noUpdate)},_clampZoom:function(r){var a=this.options;return a.minNativeZoom!==void 0&&r<a.minNativeZoom?a.minNativeZoom:a.maxNativeZoom!==void 0&&a.maxNativeZoom<r?a.maxNativeZoom:r},_setView:function(r,a,u,f){var v=Math.round(a);this.options.maxZoom!==void 0&&v>this.options.maxZoom||this.options.minZoom!==void 0&&v<this.options.minZoom?v=void 0:v=this._clampZoom(v);var A=this.options.updateWhenZooming&&v!==this._tileZoom;(!f||A)&&(this._tileZoom=v,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),v!==void 0&&this._update(r),u||this._pruneTiles(),this._noPrune=!!u),this._setZoomTransforms(r,a)},_setZoomTransforms:function(r,a){for(var u in this._levels)this._setZoomTransform(this._levels[u],r,a)},_setZoomTransform:function(r,a,u){var f=this._map.getZoomScale(u,r.zoom),v=r.origin.multiplyBy(f).subtract(this._map._getNewPixelOrigin(a,u)).round();Oe.any3d?yi(r.el,v,f):Bt(r.el,v)},_resetGrid:function(){var r=this._map,a=r.options.crs,u=this._tileSize=this.getTileSize(),f=this._tileZoom,v=this._map.getPixelWorldBounds(this._tileZoom);v&&(this._globalTileRange=this._pxBoundsToTileRange(v)),this._wrapX=a.wrapLng&&!this.options.noWrap&&[Math.floor(r.project([0,a.wrapLng[0]],f).x/u.x),Math.ceil(r.project([0,a.wrapLng[1]],f).x/u.y)],this._wrapY=a.wrapLat&&!this.options.noWrap&&[Math.floor(r.project([a.wrapLat[0],0],f).y/u.x),Math.ceil(r.project([a.wrapLat[1],0],f).y/u.y)]},_onMoveEnd:function(){!this._map||this._map._animatingZoom||this._update()},_getTiledPixelBounds:function(r){var a=this._map,u=a._animatingZoom?Math.max(a._animateToZoom,a.getZoom()):a.getZoom(),f=a.getZoomScale(u,this._tileZoom),v=a.project(r,this._tileZoom).floor(),A=a.getSize().divideBy(f*2);return new he(v.subtract(A),v.add(A))},_update:function(r){var a=this._map;if(a){var u=this._clampZoom(a.getZoom());if(r===void 0&&(r=a.getCenter()),this._tileZoom!==void 0){var f=this._getTiledPixelBounds(r),v=this._pxBoundsToTileRange(f),A=v.getCenter(),F=[],X=this.options.keepBuffer,J=new he(v.getBottomLeft().subtract([X,-X]),v.getTopRight().add([X,-X]));if(!(isFinite(v.min.x)&&isFinite(v.min.y)&&isFinite(v.max.x)&&isFinite(v.max.y)))throw new Error("Attempted to load an infinite number of tiles");for(var me in this._tiles){var Ce=this._tiles[me].coords;(Ce.z!==this._tileZoom||!J.contains(new O(Ce.x,Ce.y)))&&(this._tiles[me].current=!1)}if(Math.abs(u-this._tileZoom)>1){this._setView(r,u);return}for(var Xe=v.min.y;Xe<=v.max.y;Xe++)for(var at=v.min.x;at<=v.max.x;at++){var mn=new O(at,Xe);if(mn.z=this._tileZoom,!!this._isValidTile(mn)){var Yt=this._tiles[this._tileCoordsToKey(mn)];Yt?Yt.current=!0:F.push(mn)}}if(F.sort(function(En,Cs){return En.distanceTo(A)-Cs.distanceTo(A)}),F.length!==0){this._loading||(this._loading=!0,this.fire("loading"));var jn=document.createDocumentFragment();for(at=0;at<F.length;at++)this._addTile(F[at],jn);this._level.el.appendChild(jn)}}}},_isValidTile:function(r){var a=this._map.options.crs;if(!a.infinite){var u=this._globalTileRange;if(!a.wrapLng&&(r.x<u.min.x||r.x>u.max.x)||!a.wrapLat&&(r.y<u.min.y||r.y>u.max.y))return!1}if(!this.options.bounds)return!0;var f=this._tileCoordsToBounds(r);return Q(this.options.bounds).overlaps(f)},_keyToBounds:function(r){return this._tileCoordsToBounds(this._keyToTileCoords(r))},_tileCoordsToNwSe:function(r){var a=this._map,u=this.getTileSize(),f=r.scaleBy(u),v=f.add(u),A=a.unproject(f,r.z),F=a.unproject(v,r.z);return[A,F]},_tileCoordsToBounds:function(r){var a=this._tileCoordsToNwSe(r),u=new ke(a[0],a[1]);return this.options.noWrap||(u=this._map.wrapLatLngBounds(u)),u},_tileCoordsToKey:function(r){return r.x+":"+r.y+":"+r.z},_keyToTileCoords:function(r){var a=r.split(":"),u=new O(+a[0],+a[1]);return u.z=+a[2],u},_removeTile:function(r){var a=this._tiles[r];a&&(tt(a.el),delete this._tiles[r],this.fire("tileunload",{tile:a.el,coords:this._keyToTileCoords(r)}))},_initTile:function(r){Ke(r,"leaflet-tile");var a=this.getTileSize();r.style.width=a.x+"px",r.style.height=a.y+"px",r.onselectstart=g,r.onmousemove=g,Oe.ielt9&&this.options.opacity<1&&Ct(r,this.options.opacity)},_addTile:function(r,a){var u=this._getTilePos(r),f=this._tileCoordsToKey(r),v=this.createTile(this._wrapCoords(r),l(this._tileReady,this,r));this._initTile(v),this.createTile.length<2&&R(l(this._tileReady,this,r,null,v)),Bt(v,u),this._tiles[f]={el:v,coords:r,current:!0},a.appendChild(v),this.fire("tileloadstart",{tile:v,coords:r})},_tileReady:function(r,a,u){a&&this.fire("tileerror",{error:a,tile:u,coords:r});var f=this._tileCoordsToKey(r);u=this._tiles[f],u&&(u.loaded=+new Date,this._map._fadeAnimated?(Ct(u.el,0),te(this._fadeFrame),this._fadeFrame=R(this._updateOpacity,this)):(u.active=!0,this._pruneTiles()),a||(Ke(u.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:u.el,coords:r})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),Oe.ielt9||!this._map._fadeAnimated?R(this._pruneTiles,this):setTimeout(l(this._pruneTiles,this),250)))},_getTilePos:function(r){return r.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(r){var a=new O(this._wrapX?m(r.x,this._wrapX):r.x,this._wrapY?m(r.y,this._wrapY):r.y);return a.z=r.z,a},_pxBoundsToTileRange:function(r){var a=this.getTileSize();return new he(r.min.unscaleBy(a).floor(),r.max.unscaleBy(a).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var r in this._tiles)if(!this._tiles[r].loaded)return!1;return!0}});function Sx(r){return new Vo(r)}var As=Vo.extend({options:{minZoom:0,maxZoom:18,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1,referrerPolicy:!1},initialize:function(r,a){this._url=r,a=T(this,a),a.detectRetina&&Oe.retina&&a.maxZoom>0?(a.tileSize=Math.floor(a.tileSize/2),a.zoomReverse?(a.zoomOffset--,a.minZoom=Math.min(a.maxZoom,a.minZoom+1)):(a.zoomOffset++,a.maxZoom=Math.max(a.minZoom,a.maxZoom-1)),a.minZoom=Math.max(0,a.minZoom)):a.zoomReverse?a.minZoom=Math.min(a.maxZoom,a.minZoom):a.maxZoom=Math.max(a.minZoom,a.maxZoom),typeof a.subdomains=="string"&&(a.subdomains=a.subdomains.split("")),this.on("tileunload",this._onTileRemove)},setUrl:function(r,a){return this._url===r&&a===void 0&&(a=!0),this._url=r,a||this.redraw(),this},createTile:function(r,a){var u=document.createElement("img");return Qe(u,"load",l(this._tileOnLoad,this,a,u)),Qe(u,"error",l(this._tileOnError,this,a,u)),(this.options.crossOrigin||this.options.crossOrigin==="")&&(u.crossOrigin=this.options.crossOrigin===!0?"":this.options.crossOrigin),typeof this.options.referrerPolicy=="string"&&(u.referrerPolicy=this.options.referrerPolicy),u.alt="",u.src=this.getTileUrl(r),u},getTileUrl:function(r){var a={r:Oe.retina?"@2x":"",s:this._getSubdomain(r),x:r.x,y:r.y,z:this._getZoomForUrl()};if(this._map&&!this._map.options.crs.infinite){var u=this._globalTileRange.max.y-r.y;this.options.tms&&(a.y=u),a["-y"]=u}return M(this._url,s(a,this.options))},_tileOnLoad:function(r,a){Oe.ielt9?setTimeout(l(r,this,null,a),0):r(null,a)},_tileOnError:function(r,a,u){var f=this.options.errorTileUrl;f&&a.getAttribute("src")!==f&&(a.src=f),r(u,a)},_onTileRemove:function(r){r.tile.onload=null},_getZoomForUrl:function(){var r=this._tileZoom,a=this.options.maxZoom,u=this.options.zoomReverse,f=this.options.zoomOffset;return u&&(r=a-r),r+f},_getSubdomain:function(r){var a=Math.abs(r.x+r.y)%this.options.subdomains.length;return this.options.subdomains[a]},_abortLoading:function(){var r,a;for(r in this._tiles)if(this._tiles[r].coords.z!==this._tileZoom&&(a=this._tiles[r].el,a.onload=g,a.onerror=g,!a.complete)){a.src=z;var u=this._tiles[r].coords;tt(a),delete this._tiles[r],this.fire("tileabort",{tile:a,coords:u})}},_removeTile:function(r){var a=this._tiles[r];if(a)return a.el.setAttribute("src",z),Vo.prototype._removeTile.call(this,r)},_tileReady:function(r,a,u){if(!(!this._map||u&&u.getAttribute("src")===z))return Vo.prototype._tileReady.call(this,r,a,u)}});function cm(r,a){return new As(r,a)}var hm=As.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(r,a){this._url=r;var u=s({},this.defaultWmsParams);for(var f in a)f in this.options||(u[f]=a[f]);a=T(this,a);var v=a.detectRetina&&Oe.retina?2:1,A=this.getTileSize();u.width=A.x*v,u.height=A.y*v,this.wmsParams=u},onAdd:function(r){this._crs=this.options.crs||r.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version);var a=this._wmsVersion>=1.3?"crs":"srs";this.wmsParams[a]=this._crs.code,As.prototype.onAdd.call(this,r)},getTileUrl:function(r){var a=this._tileCoordsToNwSe(r),u=this._crs,f=Le(u.project(a[0]),u.project(a[1])),v=f.min,A=f.max,F=(this._wmsVersion>=1.3&&this._crs===im?[v.y,v.x,A.y,A.x]:[v.x,v.y,A.x,A.y]).join(","),X=As.prototype.getTileUrl.call(this,r);return X+y(this.wmsParams,X,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+F},setParams:function(r,a){return s(this.wmsParams,r),a||this.redraw(),this}});function Mx(r,a){return new hm(r,a)}As.WMS=hm,cm.wms=Mx;var Ui=ri.extend({options:{padding:.1},initialize:function(r){T(this,r),h(this),this._layers=this._layers||{}},onAdd:function(){this._container||(this._initContainer(),Ke(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update(),this.on("update",this._updatePaths,this)},onRemove:function(){this.off("update",this._updatePaths,this),this._destroyContainer()},getEvents:function(){var r={viewreset:this._reset,zoom:this._onZoom,moveend:this._update,zoomend:this._onZoomEnd};return this._zoomAnimated&&(r.zoomanim=this._onAnimZoom),r},_onAnimZoom:function(r){this._updateTransform(r.center,r.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(r,a){var u=this._map.getZoomScale(a,this._zoom),f=this._map.getSize().multiplyBy(.5+this.options.padding),v=this._map.project(this._center,a),A=f.multiplyBy(-u).add(v).subtract(this._map._getNewPixelOrigin(r,a));Oe.any3d?yi(this._container,A,u):Bt(this._container,A)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom);for(var r in this._layers)this._layers[r]._reset()},_onZoomEnd:function(){for(var r in this._layers)this._layers[r]._project()},_updatePaths:function(){for(var r in this._layers)this._layers[r]._update()},_update:function(){var r=this.options.padding,a=this._map.getSize(),u=this._map.containerPointToLayerPoint(a.multiplyBy(-r)).round();this._bounds=new he(u,u.add(a.multiplyBy(1+r*2)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),fm=Ui.extend({options:{tolerance:0},getEvents:function(){var r=Ui.prototype.getEvents.call(this);return r.viewprereset=this._onViewPreReset,r},_onViewPreReset:function(){this._postponeUpdatePaths=!0},onAdd:function(){Ui.prototype.onAdd.call(this),this._draw()},_initContainer:function(){var r=this._container=document.createElement("canvas");Qe(r,"mousemove",this._onMouseMove,this),Qe(r,"click dblclick mousedown mouseup contextmenu",this._onClick,this),Qe(r,"mouseout",this._handleMouseOut,this),r._leaflet_disable_events=!0,this._ctx=r.getContext("2d")},_destroyContainer:function(){te(this._redrawRequest),delete this._ctx,tt(this._container),wt(this._container),delete this._container},_updatePaths:function(){if(!this._postponeUpdatePaths){var r;this._redrawBounds=null;for(var a in this._layers)r=this._layers[a],r._update();this._redraw()}},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ui.prototype._update.call(this);var r=this._bounds,a=this._container,u=r.getSize(),f=Oe.retina?2:1;Bt(a,r.min),a.width=f*u.x,a.height=f*u.y,a.style.width=u.x+"px",a.style.height=u.y+"px",Oe.retina&&this._ctx.scale(2,2),this._ctx.translate(-r.min.x,-r.min.y),this.fire("update")}},_reset:function(){Ui.prototype._reset.call(this),this._postponeUpdatePaths&&(this._postponeUpdatePaths=!1,this._updatePaths())},_initPath:function(r){this._updateDashArray(r),this._layers[h(r)]=r;var a=r._order={layer:r,prev:this._drawLast,next:null};this._drawLast&&(this._drawLast.next=a),this._drawLast=a,this._drawFirst=this._drawFirst||this._drawLast},_addPath:function(r){this._requestRedraw(r)},_removePath:function(r){var a=r._order,u=a.next,f=a.prev;u?u.prev=f:this._drawLast=f,f?f.next=u:this._drawFirst=u,delete r._order,delete this._layers[h(r)],this._requestRedraw(r)},_updatePath:function(r){this._extendRedrawBounds(r),r._project(),r._update(),this._requestRedraw(r)},_updateStyle:function(r){this._updateDashArray(r),this._requestRedraw(r)},_updateDashArray:function(r){if(typeof r.options.dashArray=="string"){var a=r.options.dashArray.split(/[, ]+/),u=[],f,v;for(v=0;v<a.length;v++){if(f=Number(a[v]),isNaN(f))return;u.push(f)}r.options._dashArray=u}else r.options._dashArray=r.options.dashArray},_requestRedraw:function(r){this._map&&(this._extendRedrawBounds(r),this._redrawRequest=this._redrawRequest||R(this._redraw,this))},_extendRedrawBounds:function(r){if(r._pxBounds){var a=(r.options.weight||0)+1;this._redrawBounds=this._redrawBounds||new he,this._redrawBounds.extend(r._pxBounds.min.subtract([a,a])),this._redrawBounds.extend(r._pxBounds.max.add([a,a]))}},_redraw:function(){this._redrawRequest=null,this._redrawBounds&&(this._redrawBounds.min._floor(),this._redrawBounds.max._ceil()),this._clear(),this._draw(),this._redrawBounds=null},_clear:function(){var r=this._redrawBounds;if(r){var a=r.getSize();this._ctx.clearRect(r.min.x,r.min.y,a.x,a.y)}else this._ctx.save(),this._ctx.setTransform(1,0,0,1,0,0),this._ctx.clearRect(0,0,this._container.width,this._container.height),this._ctx.restore()},_draw:function(){var r,a=this._redrawBounds;if(this._ctx.save(),a){var u=a.getSize();this._ctx.beginPath(),this._ctx.rect(a.min.x,a.min.y,u.x,u.y),this._ctx.clip()}this._drawing=!0;for(var f=this._drawFirst;f;f=f.next)r=f.layer,(!a||r._pxBounds&&r._pxBounds.intersects(a))&&r._updatePath();this._drawing=!1,this._ctx.restore()},_updatePoly:function(r,a){if(this._drawing){var u,f,v,A,F=r._parts,X=F.length,J=this._ctx;if(X){for(J.beginPath(),u=0;u<X;u++){for(f=0,v=F[u].length;f<v;f++)A=F[u][f],J[f?"lineTo":"moveTo"](A.x,A.y);a&&J.closePath()}this._fillStroke(J,r)}}},_updateCircle:function(r){if(!(!this._drawing||r._empty())){var a=r._point,u=this._ctx,f=Math.max(Math.round(r._radius),1),v=(Math.max(Math.round(r._radiusY),1)||f)/f;v!==1&&(u.save(),u.scale(1,v)),u.beginPath(),u.arc(a.x,a.y/v,f,0,Math.PI*2,!1),v!==1&&u.restore(),this._fillStroke(u,r)}},_fillStroke:function(r,a){var u=a.options;u.fill&&(r.globalAlpha=u.fillOpacity,r.fillStyle=u.fillColor||u.color,r.fill(u.fillRule||"evenodd")),u.stroke&&u.weight!==0&&(r.setLineDash&&r.setLineDash(a.options&&a.options._dashArray||[]),r.globalAlpha=u.opacity,r.lineWidth=u.weight,r.strokeStyle=u.color,r.lineCap=u.lineCap,r.lineJoin=u.lineJoin,r.stroke())},_onClick:function(r){for(var a=this._map.mouseEventToLayerPoint(r),u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(a)&&(!(r.type==="click"||r.type==="preclick")||!this._map._draggableMoved(u))&&(f=u);this._fireEvent(f?[f]:!1,r)},_onMouseMove:function(r){if(!(!this._map||this._map.dragging.moving()||this._map._animatingZoom)){var a=this._map.mouseEventToLayerPoint(r);this._handleMouseHover(r,a)}},_handleMouseOut:function(r){var a=this._hoveredLayer;a&&($e(this._container,"leaflet-interactive"),this._fireEvent([a],r,"mouseout"),this._hoveredLayer=null,this._mouseHoverThrottled=!1)},_handleMouseHover:function(r,a){if(!this._mouseHoverThrottled){for(var u,f,v=this._drawFirst;v;v=v.next)u=v.layer,u.options.interactive&&u._containsPoint(a)&&(f=u);f!==this._hoveredLayer&&(this._handleMouseOut(r),f&&(Ke(this._container,"leaflet-interactive"),this._fireEvent([f],r,"mouseover"),this._hoveredLayer=f)),this._fireEvent(this._hoveredLayer?[this._hoveredLayer]:!1,r),this._mouseHoverThrottled=!0,setTimeout(l(function(){this._mouseHoverThrottled=!1},this),32)}},_fireEvent:function(r,a,u){this._map._fireDOMEvent(a,u||a.type,r)},_bringToFront:function(r){var a=r._order;if(a){var u=a.next,f=a.prev;if(u)u.prev=f;else return;f?f.next=u:u&&(this._drawFirst=u),a.prev=this._drawLast,this._drawLast.next=a,a.next=null,this._drawLast=a,this._requestRedraw(r)}},_bringToBack:function(r){var a=r._order;if(a){var u=a.next,f=a.prev;if(f)f.next=u;else return;u?u.prev=f:f&&(this._drawLast=f),a.prev=null,a.next=this._drawFirst,this._drawFirst.prev=a,this._drawFirst=a,this._requestRedraw(r)}}});function dm(r){return Oe.canvas?new fm(r):null}var Go=function(){try{return document.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(r){return document.createElement("<lvml:"+r+' class="lvml">')}}catch{}return function(r){return document.createElement("<"+r+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}(),Ex={_initContainer:function(){this._container=xe("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(Ui.prototype._update.call(this),this.fire("update"))},_initPath:function(r){var a=r._container=Go("shape");Ke(a,"leaflet-vml-shape "+(this.options.className||"")),a.coordsize="1 1",r._path=Go("path"),a.appendChild(r._path),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){var a=r._container;this._container.appendChild(a),r.options.interactive&&r.addInteractiveTarget(a)},_removePath:function(r){var a=r._container;tt(a),r.removeInteractiveTarget(a),delete this._layers[h(r)]},_updateStyle:function(r){var a=r._stroke,u=r._fill,f=r.options,v=r._container;v.stroked=!!f.stroke,v.filled=!!f.fill,f.stroke?(a||(a=r._stroke=Go("stroke")),v.appendChild(a),a.weight=f.weight+"px",a.color=f.color,a.opacity=f.opacity,f.dashArray?a.dashStyle=S(f.dashArray)?f.dashArray.join(" "):f.dashArray.replace(/( *, *)/g," "):a.dashStyle="",a.endcap=f.lineCap.replace("butt","flat"),a.joinstyle=f.lineJoin):a&&(v.removeChild(a),r._stroke=null),f.fill?(u||(u=r._fill=Go("fill")),v.appendChild(u),u.color=f.fillColor||f.color,u.opacity=f.fillOpacity):u&&(v.removeChild(u),r._fill=null)},_updateCircle:function(r){var a=r._point.round(),u=Math.round(r._radius),f=Math.round(r._radiusY||u);this._setPath(r,r._empty()?"M0 0":"AL "+a.x+","+a.y+" "+u+","+f+" 0,"+65535*360)},_setPath:function(r,a){r._path.v=a},_bringToFront:function(r){qt(r._container)},_bringToBack:function(r){On(r._container)}},hl=Oe.vml?Go:st,Wo=Ui.extend({_initContainer:function(){this._container=hl("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=hl("g"),this._container.appendChild(this._rootGroup)},_destroyContainer:function(){tt(this._container),wt(this._container),delete this._container,delete this._rootGroup,delete this._svgSize},_update:function(){if(!(this._map._animatingZoom&&this._bounds)){Ui.prototype._update.call(this);var r=this._bounds,a=r.getSize(),u=this._container;(!this._svgSize||!this._svgSize.equals(a))&&(this._svgSize=a,u.setAttribute("width",a.x),u.setAttribute("height",a.y)),Bt(u,r.min),u.setAttribute("viewBox",[r.min.x,r.min.y,a.x,a.y].join(" ")),this.fire("update")}},_initPath:function(r){var a=r._path=hl("path");r.options.className&&Ke(a,r.options.className),r.options.interactive&&Ke(a,"leaflet-interactive"),this._updateStyle(r),this._layers[h(r)]=r},_addPath:function(r){this._rootGroup||this._initContainer(),this._rootGroup.appendChild(r._path),r.addInteractiveTarget(r._path)},_removePath:function(r){tt(r._path),r.removeInteractiveTarget(r._path),delete this._layers[h(r)]},_updatePath:function(r){r._project(),r._update()},_updateStyle:function(r){var a=r._path,u=r.options;a&&(u.stroke?(a.setAttribute("stroke",u.color),a.setAttribute("stroke-opacity",u.opacity),a.setAttribute("stroke-width",u.weight),a.setAttribute("stroke-linecap",u.lineCap),a.setAttribute("stroke-linejoin",u.lineJoin),u.dashArray?a.setAttribute("stroke-dasharray",u.dashArray):a.removeAttribute("stroke-dasharray"),u.dashOffset?a.setAttribute("stroke-dashoffset",u.dashOffset):a.removeAttribute("stroke-dashoffset")):a.setAttribute("stroke","none"),u.fill?(a.setAttribute("fill",u.fillColor||u.color),a.setAttribute("fill-opacity",u.fillOpacity),a.setAttribute("fill-rule",u.fillRule||"evenodd")):a.setAttribute("fill","none"))},_updatePoly:function(r,a){this._setPath(r,lt(r._parts,a))},_updateCircle:function(r){var a=r._point,u=Math.max(Math.round(r._radius),1),f=Math.max(Math.round(r._radiusY),1)||u,v="a"+u+","+f+" 0 1,0 ",A=r._empty()?"M0 0":"M"+(a.x-u)+","+a.y+v+u*2+",0 "+v+-u*2+",0 ";this._setPath(r,A)},_setPath:function(r,a){r._path.setAttribute("d",a)},_bringToFront:function(r){qt(r._path)},_bringToBack:function(r){On(r._path)}});Oe.vml&&Wo.include(Ex);function pm(r){return Oe.svg||Oe.vml?new Wo(r):null}mt.include({getRenderer:function(r){var a=r.options.renderer||this._getPaneRenderer(r.options.pane)||this.options.renderer||this._renderer;return a||(a=this._renderer=this._createRenderer()),this.hasLayer(a)||this.addLayer(a),a},_getPaneRenderer:function(r){if(r==="overlayPane"||r===void 0)return!1;var a=this._paneRenderers[r];return a===void 0&&(a=this._createRenderer({pane:r}),this._paneRenderers[r]=a),a},_createRenderer:function(r){return this.options.preferCanvas&&dm(r)||pm(r)}});var mm=ws.extend({initialize:function(r,a){ws.prototype.initialize.call(this,this._boundsToLatLngs(r),a)},setBounds:function(r){return this.setLatLngs(this._boundsToLatLngs(r))},_boundsToLatLngs:function(r){return r=Q(r),[r.getSouthWest(),r.getNorthWest(),r.getNorthEast(),r.getSouthEast()]}});function wx(r,a){return new mm(r,a)}Wo.create=hl,Wo.pointsToPath=lt,Ni.geometryToLayer=rl,Ni.coordsToLatLng=kc,Ni.coordsToLatLngs=sl,Ni.latLngToCoords=Bc,Ni.latLngsToCoords=ol,Ni.getFeature=Ts,Ni.asFeature=al,mt.mergeOptions({boxZoom:!0});var _m=Si.extend({initialize:function(r){this._map=r,this._container=r._container,this._pane=r._panes.overlayPane,this._resetStateTimeout=0,r.on("unload",this._destroy,this)},addHooks:function(){Qe(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){wt(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_destroy:function(){tt(this._pane),delete this._pane},_resetState:function(){this._resetStateTimeout=0,this._moved=!1},_clearDeferredResetState:function(){this._resetStateTimeout!==0&&(clearTimeout(this._resetStateTimeout),this._resetStateTimeout=0)},_onMouseDown:function(r){if(!r.shiftKey||r.which!==1&&r.button!==1)return!1;this._clearDeferredResetState(),this._resetState(),Uo(),Mc(),this._startPoint=this._map.mouseEventToContainerPoint(r),Qe(document,{contextmenu:Xr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseMove:function(r){this._moved||(this._moved=!0,this._box=xe("div","leaflet-zoom-box",this._container),Ke(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(r);var a=new he(this._point,this._startPoint),u=a.getSize();Bt(this._box,a.min),this._box.style.width=u.x+"px",this._box.style.height=u.y+"px"},_finish:function(){this._moved&&(tt(this._box),$e(this._container,"leaflet-crosshair")),Oo(),Ec(),wt(document,{contextmenu:Xr,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(r){if(!(r.which!==1&&r.button!==1)&&(this._finish(),!!this._moved)){this._clearDeferredResetState(),this._resetStateTimeout=setTimeout(l(this._resetState,this),0);var a=new ke(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point));this._map.fitBounds(a).fire("boxzoomend",{boxZoomBounds:a})}},_onKeyDown:function(r){r.keyCode===27&&(this._finish(),this._clearDeferredResetState(),this._resetState())}});mt.addInitHook("addHandler","boxZoom",_m),mt.mergeOptions({doubleClickZoom:!0});var gm=Si.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(r){var a=this._map,u=a.getZoom(),f=a.options.zoomDelta,v=r.originalEvent.shiftKey?u-f:u+f;a.options.doubleClickZoom==="center"?a.setZoom(v):a.setZoomAround(r.containerPoint,v)}});mt.addInitHook("addHandler","doubleClickZoom",gm),mt.mergeOptions({dragging:!0,inertia:!0,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0});var vm=Si.extend({addHooks:function(){if(!this._draggable){var r=this._map;this._draggable=new ar(r._mapPane,r._container),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),r.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),r.on("zoomend",this._onZoomEnd,this),r.whenReady(this._onZoomEnd,this))}Ke(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){$e(this._map._container,"leaflet-grab"),$e(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDragStart:function(){var r=this._map;if(r._stop(),this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var a=Q(this._map.options.maxBounds);this._offsetLimit=Le(this._map.latLngToContainerPoint(a.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(a.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null;r.fire("movestart").fire("dragstart"),r.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(r){if(this._map.options.inertia){var a=this._lastTime=+new Date,u=this._lastPos=this._draggable._absPos||this._draggable._newPos;this._positions.push(u),this._times.push(a),this._prunePositions(a)}this._map.fire("move",r).fire("drag",r)},_prunePositions:function(r){for(;this._positions.length>1&&r-this._times[0]>50;)this._positions.shift(),this._times.shift()},_onZoomEnd:function(){var r=this._map.getSize().divideBy(2),a=this._map.latLngToLayerPoint([0,0]);this._initialWorldOffset=a.subtract(r).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(r,a){return r-(r-a)*this._viscosity},_onPreDragLimit:function(){if(!(!this._viscosity||!this._offsetLimit)){var r=this._draggable._newPos.subtract(this._draggable._startPos),a=this._offsetLimit;r.x<a.min.x&&(r.x=this._viscousLimit(r.x,a.min.x)),r.y<a.min.y&&(r.y=this._viscousLimit(r.y,a.min.y)),r.x>a.max.x&&(r.x=this._viscousLimit(r.x,a.max.x)),r.y>a.max.y&&(r.y=this._viscousLimit(r.y,a.max.y)),this._draggable._newPos=this._draggable._startPos.add(r)}},_onPreDragWrap:function(){var r=this._worldWidth,a=Math.round(r/2),u=this._initialWorldOffset,f=this._draggable._newPos.x,v=(f-a+u)%r+a-u,A=(f+a+u)%r-a-u,F=Math.abs(v+u)<Math.abs(A+u)?v:A;this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=F},_onDragEnd:function(r){var a=this._map,u=a.options,f=!u.inertia||r.noInertia||this._times.length<2;if(a.fire("dragend",r),f)a.fire("moveend");else{this._prunePositions(+new Date);var v=this._lastPos.subtract(this._positions[0]),A=(this._lastTime-this._times[0])/1e3,F=u.easeLinearity,X=v.multiplyBy(F/A),J=X.distanceTo([0,0]),me=Math.min(u.inertiaMaxSpeed,J),Ce=X.multiplyBy(me/J),Xe=me/(u.inertiaDeceleration*F),at=Ce.multiplyBy(-Xe/2).round();!at.x&&!at.y?a.fire("moveend"):(at=a._limitOffset(at,a.options.maxBounds),R(function(){a.panBy(at,{duration:Xe,easeLinearity:F,noMoveStart:!0,animate:!0})}))}}});mt.addInitHook("addHandler","dragging",vm),mt.mergeOptions({keyboard:!0,keyboardPanDelta:80});var ym=Si.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(r){this._map=r,this._setPanDelta(r.options.keyboardPanDelta),this._setZoomDelta(r.options.zoomDelta)},addHooks:function(){var r=this._map._container;r.tabIndex<=0&&(r.tabIndex="0"),Qe(r,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),wt(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var r=document.body,a=document.documentElement,u=r.scrollTop||a.scrollTop,f=r.scrollLeft||a.scrollLeft;this._map._container.focus(),window.scrollTo(f,u)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(r){var a=this._panKeys={},u=this.keyCodes,f,v;for(f=0,v=u.left.length;f<v;f++)a[u.left[f]]=[-1*r,0];for(f=0,v=u.right.length;f<v;f++)a[u.right[f]]=[r,0];for(f=0,v=u.down.length;f<v;f++)a[u.down[f]]=[0,r];for(f=0,v=u.up.length;f<v;f++)a[u.up[f]]=[0,-1*r]},_setZoomDelta:function(r){var a=this._zoomKeys={},u=this.keyCodes,f,v;for(f=0,v=u.zoomIn.length;f<v;f++)a[u.zoomIn[f]]=r;for(f=0,v=u.zoomOut.length;f<v;f++)a[u.zoomOut[f]]=-r},_addHooks:function(){Qe(document,"keydown",this._onKeyDown,this)},_removeHooks:function(){wt(document,"keydown",this._onKeyDown,this)},_onKeyDown:function(r){if(!(r.altKey||r.ctrlKey||r.metaKey)){var a=r.keyCode,u=this._map,f;if(a in this._panKeys){if(!u._panAnim||!u._panAnim._inProgress)if(f=this._panKeys[a],r.shiftKey&&(f=q(f).multiplyBy(3)),u.options.maxBounds&&(f=u._limitOffset(q(f),u.options.maxBounds)),u.options.worldCopyJump){var v=u.wrapLatLng(u.unproject(u.project(u.getCenter()).add(f)));u.panTo(v)}else u.panBy(f)}else if(a in this._zoomKeys)u.setZoom(u.getZoom()+(r.shiftKey?3:1)*this._zoomKeys[a]);else if(a===27&&u._popup&&u._popup.options.closeOnEscapeKey)u.closePopup();else return;Xr(r)}}});mt.addInitHook("addHandler","keyboard",ym),mt.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60});var xm=Si.extend({addHooks:function(){Qe(this._map._container,"wheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){wt(this._map._container,"wheel",this._onWheelScroll,this)},_onWheelScroll:function(r){var a=Wp(r),u=this._map.options.wheelDebounceTime;this._delta+=a,this._lastMousePos=this._map.mouseEventToContainerPoint(r),this._startTime||(this._startTime=+new Date);var f=Math.max(u-(+new Date-this._startTime),0);clearTimeout(this._timer),this._timer=setTimeout(l(this._performZoom,this),f),Xr(r)},_performZoom:function(){var r=this._map,a=r.getZoom(),u=this._map.options.zoomSnap||0;r._stop();var f=this._delta/(this._map.options.wheelPxPerZoomLevel*4),v=4*Math.log(2/(1+Math.exp(-Math.abs(f))))/Math.LN2,A=u?Math.ceil(v/u)*u:v,F=r._limitZoom(a+(this._delta>0?A:-A))-a;this._delta=0,this._startTime=null,F&&(r.options.scrollWheelZoom==="center"?r.setZoom(a+F):r.setZoomAround(this._lastMousePos,a+F))}});mt.addInitHook("addHandler","scrollWheelZoom",xm);var Tx=600;mt.mergeOptions({tapHold:Oe.touchNative&&Oe.safari&&Oe.mobile,tapTolerance:15});var Sm=Si.extend({addHooks:function(){Qe(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){wt(this._map._container,"touchstart",this._onDown,this)},_onDown:function(r){if(clearTimeout(this._holdTimeout),r.touches.length===1){var a=r.touches[0];this._startPos=this._newPos=new O(a.clientX,a.clientY),this._holdTimeout=setTimeout(l(function(){this._cancel(),this._isTapValid()&&(Qe(document,"touchend",tn),Qe(document,"touchend touchcancel",this._cancelClickPrevent),this._simulateEvent("contextmenu",a))},this),Tx),Qe(document,"touchend touchcancel contextmenu",this._cancel,this),Qe(document,"touchmove",this._onMove,this)}},_cancelClickPrevent:function r(){wt(document,"touchend",tn),wt(document,"touchend touchcancel",r)},_cancel:function(){clearTimeout(this._holdTimeout),wt(document,"touchend touchcancel contextmenu",this._cancel,this),wt(document,"touchmove",this._onMove,this)},_onMove:function(r){var a=r.touches[0];this._newPos=new O(a.clientX,a.clientY)},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_simulateEvent:function(r,a){var u=new MouseEvent(r,{bubbles:!0,cancelable:!0,view:window,screenX:a.screenX,screenY:a.screenY,clientX:a.clientX,clientY:a.clientY});u._simulated=!0,a.target.dispatchEvent(u)}});mt.addInitHook("addHandler","tapHold",Sm),mt.mergeOptions({touchZoom:Oe.touch,bounceAtZoomLimits:!0});var Mm=Si.extend({addHooks:function(){Ke(this._map._container,"leaflet-touch-zoom"),Qe(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){$e(this._map._container,"leaflet-touch-zoom"),wt(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(r){var a=this._map;if(!(!r.touches||r.touches.length!==2||a._animatingZoom||this._zooming)){var u=a.mouseEventToContainerPoint(r.touches[0]),f=a.mouseEventToContainerPoint(r.touches[1]);this._centerPoint=a.getSize()._divideBy(2),this._startLatLng=a.containerPointToLatLng(this._centerPoint),a.options.touchZoom!=="center"&&(this._pinchStartLatLng=a.containerPointToLatLng(u.add(f)._divideBy(2))),this._startDist=u.distanceTo(f),this._startZoom=a.getZoom(),this._moved=!1,this._zooming=!0,a._stop(),Qe(document,"touchmove",this._onTouchMove,this),Qe(document,"touchend touchcancel",this._onTouchEnd,this),tn(r)}},_onTouchMove:function(r){if(!(!r.touches||r.touches.length!==2||!this._zooming)){var a=this._map,u=a.mouseEventToContainerPoint(r.touches[0]),f=a.mouseEventToContainerPoint(r.touches[1]),v=u.distanceTo(f)/this._startDist;if(this._zoom=a.getScaleZoom(v,this._startZoom),!a.options.bounceAtZoomLimits&&(this._zoom<a.getMinZoom()&&v<1||this._zoom>a.getMaxZoom()&&v>1)&&(this._zoom=a._limitZoom(this._zoom)),a.options.touchZoom==="center"){if(this._center=this._startLatLng,v===1)return}else{var A=u._add(f)._divideBy(2)._subtract(this._centerPoint);if(v===1&&A.x===0&&A.y===0)return;this._center=a.unproject(a.project(this._pinchStartLatLng,this._zoom).subtract(A),this._zoom)}this._moved||(a._moveStart(!0,!1),this._moved=!0),te(this._animRequest);var F=l(a._move,a,this._center,this._zoom,{pinch:!0,round:!1},void 0);this._animRequest=R(F,this,!0),tn(r)}},_onTouchEnd:function(){if(!this._moved||!this._zooming){this._zooming=!1;return}this._zooming=!1,te(this._animRequest),wt(document,"touchmove",this._onTouchMove,this),wt(document,"touchend touchcancel",this._onTouchEnd,this),this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom))}});mt.addInitHook("addHandler","touchZoom",Mm),mt.BoxZoom=_m,mt.DoubleClickZoom=gm,mt.Drag=vm,mt.Keyboard=ym,mt.ScrollWheelZoom=xm,mt.TapHold=Sm,mt.TouchZoom=Mm,n.Bounds=he,n.Browser=Oe,n.CRS=Me,n.Canvas=fm,n.Circle=zc,n.CircleMarker=il,n.Class=re,n.Control=ii,n.DivIcon=um,n.DivOverlay=Mi,n.DomEvent=Gy,n.DomUtil=Hy,n.Draggable=ar,n.Evented=ce,n.FeatureGroup=Ii,n.GeoJSON=Ni,n.GridLayer=Vo,n.Handler=Si,n.Icon=Es,n.ImageOverlay=ll,n.LatLng=oe,n.LatLngBounds=ke,n.Layer=ri,n.LayerGroup=Ms,n.LineUtil=nx,n.Map=mt,n.Marker=nl,n.Mixin=Ky,n.Path=lr,n.Point=O,n.PolyUtil=$y,n.Polygon=ws,n.Polyline=Di,n.Popup=ul,n.PosAnimation=Xp,n.Projection=ix,n.Rectangle=mm,n.Renderer=Ui,n.SVG=Wo,n.SVGOverlay=lm,n.TileLayer=As,n.Tooltip=cl,n.Transformation=pt,n.Util=ie,n.VideoOverlay=am,n.bind=l,n.bounds=Le,n.canvas=dm,n.circle=hx,n.circleMarker=cx,n.control=ko,n.divIcon=xx,n.extend=s,n.featureGroup=ax,n.geoJSON=om,n.geoJson=px,n.gridLayer=Sx,n.icon=lx,n.imageOverlay=mx,n.latLng=de,n.latLngBounds=Q,n.layerGroup=ox,n.map=Wy,n.marker=ux,n.point=q,n.polygon=dx,n.polyline=fx,n.popup=vx,n.rectangle=wx,n.setOptions=T,n.stamp=h,n.svg=pm,n.svgOverlay=gx,n.tileLayer=cm,n.tooltip=yx,n.transformation=et,n.version=i,n.videoOverlay=_x;var Ax=window.L;n.noConflict=function(){return window.L=Ax,this},window.L=n})})(Ld,Ld.exports);var qa=Ld.exports;const by=Ug(qa);function Fp(t,e,n){return Object.freeze({instance:t,context:e,container:n})}function zp(t,e){return e==null?function(i,s){const o=Ne.useRef();return o.current||(o.current=t(i,s)),o}:function(i,s){const o=Ne.useRef();o.current||(o.current=t(i,s));const l=Ne.useRef(i),{instance:c}=o.current;return Ne.useEffect(function(){l.current!==i&&(e(c,i,l.current),l.current=i)},[c,i,s]),o}}function TP(t,e){Ne.useEffect(function(){return(e.layerContainer??e.map).addLayer(t.instance),function(){var o;(o=e.layerContainer)==null||o.removeLayer(t.instance),e.map.removeLayer(t.instance)}},[e,t])}function Iy(t){return function(n){const i=Up(),s=t(Op(n,i),i);return Cy(i.map,n.attribution),Ly(s.current,n.eventHandlers),TP(s.current,i),s}}function AP(t,e){const n=zp(t,e),i=Iy(n);return SP(i)}function CP(t,e){const n=zp(t),i=wP(n,e);return MP(i)}function PP(t,e){const n=zp(t,e),i=Iy(n);return EP(i)}function RP(t,e,n){const{opacity:i,zIndex:s}=e;i!=null&&i!==n.opacity&&t.setOpacity(i),s!=null&&s!==n.zIndex&&t.setZIndex(s)}function LP(){return Up().map}function bP(t){const e=LP();return Ne.useEffect(function(){return e.on(t),function(){e.off(t)}},[e,t]),e}function bd(){return bd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},bd.apply(this,arguments)}function IP({bounds:t,boundsOptions:e,center:n,children:i,className:s,id:o,placeholder:l,style:c,whenReady:h,zoom:d,...m},g){const[_]=Ne.useState({className:s,id:o,style:c}),[x,w]=Ne.useState(null);Ne.useImperativeHandle(g,()=>(x==null?void 0:x.map)??null,[x]);const T=Ne.useCallback(p=>{if(p!==null&&x===null){const M=new qa.Map(p,m);n!=null&&d!=null?M.setView(n,d):t!=null&&M.fitBounds(t,e),h!=null&&M.whenReady(h),w(yP(M))}},[]);Ne.useEffect(()=>()=>{x==null||x.map.remove()},[x]);const y=x?Su.createElement(Ry,{value:x},i):l??null;return Su.createElement("div",bd({},_,{ref:T}),y)}const Dy=Ne.forwardRef(IP),Ny=AP(function({position:e,...n},i){const s=new qa.Marker(e,n);return Fp(s,xP(i,{overlayContainer:s}))},function(e,n,i){n.position!==i.position&&e.setLatLng(n.position),n.icon!=null&&n.icon!==i.icon&&e.setIcon(n.icon),n.zIndexOffset!=null&&n.zIndexOffset!==i.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),n.opacity!=null&&n.opacity!==i.opacity&&e.setOpacity(n.opacity),e.dragging!=null&&n.draggable!==i.draggable&&(n.draggable===!0?e.dragging.enable():e.dragging.disable())}),Uy=CP(function(e,n){const i=new qa.Popup(e,n.overlayContainer);return Fp(i,n)},function(e,n,{position:i},s){Ne.useEffect(function(){const{instance:l}=e;function c(d){d.popup===l&&(l.update(),s(!0))}function h(d){d.popup===l&&s(!1)}return n.map.on({popupopen:c,popupclose:h}),n.overlayContainer==null?(i!=null&&l.setLatLng(i),l.openOn(n.map)):n.overlayContainer.bindPopup(l),function(){var m;n.map.off({popupopen:c,popupclose:h}),(m=n.overlayContainer)==null||m.unbindPopup(),n.map.removeLayer(l)}},[e,n,s,i])}),Oy=PP(function({url:e,...n},i){const s=new qa.TileLayer(e,Op(n,i));return Fp(s,i)},function(e,n,i){RP(e,n,i);const{url:s}=n;s!=null&&s!==i.url&&e.setUrl(s)}),DP=[26.843,75.5654],NP=new by.Icon({iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41]});function UP({onPick:t}){return bP({click(e){t([e.latlng.lat,e.latlng.lng])}}),null}function OP({language:t,session:e,issues:n,addIssue:i,settings:s}){const o=xc[t],[l,c]=Ne.useState({title:"",description:"",category:"Road",locationName:"",image:""}),[h,d]=Ne.useState(DP),[m,g]=Ne.useState(""),[_,x]=Ne.useState("all"),[w,T]=Ne.useState("newest"),y=Ne.useMemo(()=>n.filter(D=>!(D.reporterId!==e.userId||_!=="all"&&D.status!==_||m&&!`${D.title} ${D.description}`.toLowerCase().includes(m.toLowerCase()))),[n,e.userId,_,m]),p=[...y].sort((D,I)=>w==="newest"?I.createdAt-D.createdAt:D.createdAt-I.createdAt),M=y.filter(D=>D.status==="pending").length,S=()=>{navigator.geolocation.getCurrentPosition(({coords:D})=>d([D.latitude,D.longitude]),()=>{},{enableHighAccuracy:!0,timeout:1e4})},P=D=>{var ae;const I=(ae=D.target.files)==null?void 0:ae[0];if(!I)return;const k=new FileReader;k.onload=()=>c(E=>({...E,image:String(k.result||"")})),k.readAsDataURL(I)},z=D=>{D.preventDefault(),i({...l,location:h}),c({title:"",description:"",category:"Road",locationName:"",image:""})};return $.jsxs("div",{className:`dashboard ${s.theme}`,children:[$.jsxs("section",{className:"stats-grid",children:[$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.totalIssues}),$.jsx("p",{children:y.length})]}),$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.pending}),$.jsx("p",{children:M})]}),$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.resolved}),$.jsx("p",{children:y.length-M})]})]}),$.jsxs("section",{className:"grid-two",children:[$.jsxs("form",{className:"glass card",onSubmit:z,children:[$.jsx("h2",{children:o.reportIssue}),$.jsx("input",{placeholder:"Issue title",value:l.title,onChange:D=>c(I=>({...I,title:D.target.value})),required:!0}),$.jsx("textarea",{placeholder:"Describe the issue",value:l.description,onChange:D=>c(I=>({...I,description:D.target.value})),required:!0}),$.jsxs("select",{value:l.category,onChange:D=>c(I=>({...I,category:D.target.value})),children:[$.jsx("option",{children:"Road"}),$.jsx("option",{children:"Water"}),$.jsx("option",{children:"Electricity"}),$.jsx("option",{children:"Sanitation"}),$.jsx("option",{children:"Other"})]}),$.jsx("input",{placeholder:"Location notes",value:l.locationName,onChange:D=>c(I=>({...I,locationName:D.target.value})),required:!0}),$.jsx("input",{type:"file",accept:"image/*",onChange:P}),l.image&&$.jsx("img",{className:"preview",src:l.image,alt:"preview"}),$.jsxs("div",{className:"actions",children:[$.jsx("button",{className:"btn-secondary",type:"button",onClick:S,children:o.useMyLocation}),$.jsx("button",{className:"btn-primary",type:"submit",children:o.submit})]})]}),$.jsxs("div",{className:"glass card map-card",children:[$.jsx("h2",{children:"Select on Map"}),$.jsxs(Dy,{center:h,zoom:14,className:"map",children:[$.jsx(Oy,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),$.jsx(UP,{onPick:d}),$.jsx(Ny,{position:h,icon:NP,children:$.jsx(Uy,{children:"Selected location"})})]})]})]}),$.jsxs("section",{className:"glass card",children:[$.jsxs("div",{className:"toolbar",children:[$.jsx("input",{placeholder:o.search,value:m,onChange:D=>g(D.target.value)}),$.jsxs("select",{value:_,onChange:D=>x(D.target.value),children:[$.jsx("option",{value:"all",children:"All"}),$.jsx("option",{value:"pending",children:o.pending}),$.jsx("option",{value:"resolved",children:o.resolved})]}),$.jsxs("select",{value:w,onChange:D=>T(D.target.value),children:[$.jsx("option",{value:"newest",children:o.newest}),$.jsx("option",{value:"oldest",children:o.oldest})]})]}),$.jsx("div",{className:"issues",children:p.map(D=>$.jsxs("article",{className:"issue-card",children:[$.jsx("h4",{children:D.title}),$.jsx("p",{children:D.description}),$.jsxs("div",{className:"meta",children:[$.jsx("span",{children:D.category}),$.jsx("span",{className:D.status,children:D.status}),$.jsx("span",{children:new Date(D.createdAt).toLocaleString()})]})]},D.id))})]})]})}const Ng=[26.843,75.5654],FP=new by.Icon({iconUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",shadowUrl:"https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41]});function zP({language:t,issues:e,updateIssue:n,deleteIssue:i,settings:s}){const o=xc[t],[l,c]=Ne.useState(""),[h,d]=Ne.useState("all"),[m,g]=Ne.useState("all"),[_,x]=Ne.useState("newest"),T=[...Ne.useMemo(()=>e.filter(S=>!(h!=="all"&&S.status!==h||m!=="all"&&S.category!==m||l&&!`${S.title} ${S.description}`.toLowerCase().includes(l.toLowerCase()))),[e,h,m,l])].sort((S,P)=>_==="newest"?P.createdAt-S.createdAt:S.createdAt-P.createdAt),y=e.filter(S=>S.status==="pending").length,p=e.length-y,M=e.length?Math.round(p/e.length*100):0;return $.jsxs("div",{className:`dashboard ${s.theme}`,children:[$.jsxs("section",{className:"stats-grid",children:[$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.totalIssues}),$.jsx("p",{children:e.length})]}),$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.pending}),$.jsx("p",{children:y})]}),$.jsxs("article",{className:"glass stat",children:[$.jsx("h3",{children:o.resolved}),$.jsx("p",{children:p})]})]}),$.jsxs("section",{className:"grid-two",children:[$.jsxs("div",{className:"glass card",children:[$.jsx("h2",{children:"Resolution Chart"}),$.jsxs("div",{className:"chart-wrap",children:[$.jsx("div",{className:"chart-track",children:$.jsx("div",{className:"chart-fill",style:{width:`${M}%`}})}),$.jsxs("p",{children:[M,"% resolved"]})]}),$.jsxs("div",{className:"toolbar",children:[$.jsx("input",{placeholder:o.search,value:l,onChange:S=>c(S.target.value)}),$.jsxs("select",{value:h,onChange:S=>d(S.target.value),children:[$.jsx("option",{value:"all",children:"All"}),$.jsx("option",{value:"pending",children:o.pending}),$.jsx("option",{value:"resolved",children:o.resolved})]}),$.jsxs("select",{value:m,onChange:S=>g(S.target.value),children:[$.jsx("option",{value:"all",children:"All Categories"}),$.jsx("option",{value:"Road",children:"Road"}),$.jsx("option",{value:"Water",children:"Water"}),$.jsx("option",{value:"Electricity",children:"Electricity"}),$.jsx("option",{value:"Sanitation",children:"Sanitation"}),$.jsx("option",{value:"Other",children:"Other"})]}),$.jsxs("select",{value:_,onChange:S=>x(S.target.value),children:[$.jsx("option",{value:"newest",children:o.newest}),$.jsx("option",{value:"oldest",children:o.oldest})]})]})]}),$.jsxs("div",{className:"glass card map-card",children:[$.jsx("h2",{children:"Issue Map"}),$.jsxs(Dy,{center:Ng,zoom:14,className:"map",children:[$.jsx(Oy,{attribution:'© <a href="https://www.openstreetmap.org/copyright">OSM</a>',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),e.map(S=>$.jsx(Ny,{position:S.location||Ng,icon:FP,children:$.jsx(Uy,{children:S.title})},S.id))]})]})]}),$.jsx("section",{className:"glass card issues",children:T.map(S=>$.jsxs("article",{className:"issue-card",children:[$.jsx("h4",{children:S.title}),$.jsx("p",{children:S.description}),$.jsxs("div",{className:"meta",children:[$.jsx("span",{children:S.category}),$.jsx("span",{className:S.status,children:S.status}),$.jsx("span",{children:new Date(S.createdAt).toLocaleString()})]}),$.jsxs("div",{className:"actions",children:[S.status!=="resolved"&&$.jsx("button",{className:"btn-secondary",onClick:()=>n(S.id,{status:"resolved"}),children:"Mark Resolved"}),$.jsx("button",{className:"danger",onClick:()=>i(S.id),children:"Delete"})]})]},S.id))})]})}const Fy="cc_users",zy="cc_issues",kp="cc_session",ky="cc_settings",xu=()=>JSON.parse(localStorage.getItem(Fy)||"[]"),By=t=>localStorage.setItem(Fy,JSON.stringify(t)),kP=()=>JSON.parse(localStorage.getItem(zy)||"[]"),jh=t=>localStorage.setItem(zy,JSON.stringify(t)),BP=()=>JSON.parse(localStorage.getItem(kp)||"null"),HP=t=>localStorage.setItem(kp,JSON.stringify(t)),VP=()=>localStorage.removeItem(kp),GP=()=>JSON.parse(localStorage.getItem(ky)||'{"language":"en","theme":"system"}'),WP=t=>localStorage.setItem(ky,JSON.stringify(t)),XP=()=>{const t=xu();t.some(n=>n.role==="admin")||(t.push({id:crypto.randomUUID(),name:"Civic Admin",email:"admin@civicconnect.local",password:"admin123",role:"admin",createdAt:Date.now()}),By(t))};function ZP(){const[t,e]=Ne.useState(()=>BP()),[n,i]=Ne.useState(()=>xu()),[s,o]=Ne.useState(()=>kP()),[l,c]=Ne.useState(()=>GP()),[h,d]=Ne.useState(""),m=l.language||"en",g=Ne.useMemo(()=>xc[m],[m]);Ne.useEffect(()=>{XP(),i(xu())},[]),Ne.useEffect(()=>{const M=document.documentElement,S=l.theme==="system"?window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light":l.theme;M.dataset.theme=S},[l.theme]),Ne.useEffect(()=>{if(!h)return;const M=setTimeout(()=>d(""),2600);return()=>clearTimeout(M)},[h]);const _=({role:M,mode:S,name:P,email:z,password:D})=>{const I=xu();if(S==="signup"){if(I.some(te=>te.email===z)){d("User already exists");return}const E={id:crypto.randomUUID(),role:M,name:P,email:z,password:D,createdAt:Date.now()},R=[...I,E];By(R),i(R),d("Account created");return}const k=I.find(E=>E.email===z&&E.password===D&&E.role===M);if(!k){d("Invalid credentials");return}const ae={userId:k.id,role:k.role,name:k.name};HP(ae),e(ae),d("Welcome back")},x=M=>{const P=[{...M,id:crypto.randomUUID(),reporterId:t.userId,status:"pending",createdAt:Date.now()},...s];jh(P),o(P),d("Issue reported")},w=(M,S)=>{const P=s.map(z=>z.id===M?{...z,...S}:z);jh(P),o(P),d("Issue updated")},T=M=>{const S=s.filter(P=>P.id!==M);jh(S),o(S),d("Issue deleted")},y=()=>{VP(),e(null)},p=M=>{const S={...l,...M};WP(S),c(S)};return $.jsxs("div",{className:"app-container",children:[$.jsx(_P,{className:"background",colors:["#5227FF","#FF9FFC","#B19EEF"],mouseForce:20,cursorSize:100,isViscous:!0,viscous:30,iterationsViscous:32,iterationsPoisson:32,resolution:.5,isBounce:!1,autoDemo:!0,autoSpeed:.5,autoIntensity:2.2,takeoverDuration:.25,autoResumeDelay:3e3,autoRampDuration:.6,color0:"#5227FF",color1:"#FF9FFC",color2:"#B19EEF"}),$.jsxs("div",{className:"content",children:[$.jsxs("header",{className:"topbar glass",children:[$.jsx("h1",{children:g.appName}),$.jsxs("div",{className:"topbar-actions",children:[$.jsxs("select",{value:l.language,"aria-label":g.language,onChange:M=>p({language:M.target.value}),children:[$.jsx("option",{value:"en",children:"English"}),$.jsx("option",{value:"hi",children:"Hindi"})]}),$.jsxs("select",{value:l.theme,"aria-label":g.theme,onChange:M=>p({theme:M.target.value}),children:[$.jsx("option",{value:"light",children:g.light}),$.jsx("option",{value:"dark",children:g.dark}),$.jsx("option",{value:"system",children:g.system})]}),t&&$.jsx("button",{className:"btn-secondary",onClick:y,children:g.logout})]})]}),t?t.role==="citizen"?$.jsx(OP,{language:m,session:t,issues:s,addIssue:x,settings:l}):$.jsx(zP,{language:m,issues:s,updateIssue:w,deleteIssue:T,settings:l}):$.jsx(gP,{language:m,onAuth:_})]}),h&&$.jsx("div",{className:"toast",children:h})]})}qh.createRoot(document.getElementById("root")).render($.jsx(Su.StrictMode,{children:$.jsx(ZP,{})}));
