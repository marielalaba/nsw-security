_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(a.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},a=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,a=e.hasQuery,c=void 0!==a&&a;return n||o&&c}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"20a2":function(e,t,n){e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("hUgY")}])},"8Kt/":function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}t.__esModule=!0,t.defaultHead=p,t.default=void 0;var a,c=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var a=r?Object.getOwnPropertyDescriptor(e,o):null;a&&(a.get||a.set)?Object.defineProperty(n,o,a):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(a=n("Xuae"))&&a.__esModule?a:{default:a},s=n("lwAK"),u=n("FYa8"),l=n("/0+H");function f(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function p(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[c.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(c.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===c.default.Fragment?e.concat(c.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var h=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce((function(e,t){var n=c.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(p(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var a=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var i=o.key.slice(o.key.indexOf("$")+1);e.has(i)?a=!1:e.add(i)}switch(o.type){case"title":case"base":t.has(o.type)?a=!1:t.add(o.type);break;case"meta":for(var s=0,u=h.length;s<u;s++){var l=h[s];if(o.props.hasOwnProperty(l))if("charSet"===l)n.has(l)?a=!1:n.add(l);else{var f=o.props[l],p=r[l]||new Set;"name"===l&&c||!p.has(f)?(p.add(f),r[l]=p):a=!1}}}return a}}()).reverse().map((function(e,n){var a=e.key||n;if(!t.inAmpMode&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css"].some((function(t){return e.props.href.startsWith(t)}))){var i=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.props||{});return i["data-href"]=i.href,i.href=void 0,c.default.cloneElement(e,i)}return c.default.cloneElement(e,{key:a})}))}function b(e){var t=e.children,n=(0,c.useContext)(s.AmpStateContext),r=(0,c.useContext)(u.HeadManagerContext);return c.default.createElement(i.default,{reduceComponentsToState:v,headManager:r,inAmpMode:(0,l.isInAmpMode)(n)},t)}b.rewind=function(){};var j=b;t.default=j},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},Ea3V:function(e,t,n){},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),a=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||a(e)||c()}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),a=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),i=n("a1gu"),s=n("Nsbk");function u(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var o=s(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return i(this,n)}}t.__esModule=!0,t.default=void 0;var l=n("q1tI"),f=function(e){c(n,e);var t=u(n);function n(e){var a;return o(this,n),(a=t.call(this,e))._hasHeadManager=void 0,a.emitChange=function(){a._hasHeadManager&&a.props.headManager.updateHead(a.props.reduceComponentsToState(r(a.props.headManager.mountedInstances),a.props))},a._hasHeadManager=a.props.headManager&&a.props.headManager.mountedInstances,a}return a(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(l.Component);t.default=f},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),o=n("284h");t.__esModule=!0,t.default=void 0;var a=o(n("q1tI")),c=n("elyg"),i=n("nOHt"),s=n("vNVm"),u={};function l(e,t,n,r){if(e&&(0,c.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;u[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),o=n&&n.pathname||"/",f=a.default.useMemo((function(){var t=(0,c.resolveHref)(o,e.href,!0),n=r(t,2),a=n[0],i=n[1];return{href:a,as:e.as?(0,c.resolveHref)(o,e.as):i||a}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,v=e.replace,b=e.shallow,j=e.scroll,m=e.locale;"string"===typeof h&&(h=a.default.createElement("a",null,h));var y=a.Children.only(h),O=y&&"object"===typeof y&&y.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],k=x[1],M=a.default.useCallback((function(e){w(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,w]);(0,a.useEffect)((function(){var e=k&&t&&(0,c.isLocalURL)(p),r="undefined"!==typeof m?m:n&&n.locale,o=u[p+"%"+d+(r?"%"+r:"")];e&&!o&&l(n,p,d,{locale:r})}),[d,p,k,m,t,n]);var _={ref:M,onClick:function(e){y.props&&"function"===typeof y.props.onClick&&y.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,a,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,c.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[o?"replace":"push"](n,r,{shallow:a,locale:s,scroll:i}))}(e,n,p,d,v,b,j,m)},onMouseEnter:function(e){(0,c.isLocalURL)(p)&&(y.props&&"function"===typeof y.props.onMouseEnter&&y.props.onMouseEnter(e),l(n,p,d,{priority:!0}))}};if(e.passHref||"a"===y.type&&!("href"in y.props)){var P="undefined"!==typeof m?m:n&&n.locale,S=n&&n.isLocaleDomain&&(0,c.getDomainLocale)(d,P,n&&n.locales,n&&n.domainLocales);_.href=S||(0,c.addBasePath)((0,c.addLocale)(d,P,n&&n.defaultLocale))}return a.default.cloneElement(y,_)};t.default=f},g4pe:function(e,t,n){e.exports=n("8Kt/")},hUgY:function(e,t,n){"use strict";n.r(t);var r=n("nKUr");function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=n("g4pe"),c=n.n(a),i=(n("q1tI"),n("YFqc")),s=n.n(i),u=function(e){var t=e.href,n=e.active,o=e.children;return Object(r.jsx)(s.a,{href:t,children:Object(r.jsx)("a",{className:"text-xl hover:text-gold transition-colors ".concat(n?"text-gold":"text-white"),children:o})})},l=function(){return Object(r.jsxs)("footer",{className:"w-full flex justify-between items-center bg-darkblue text-white font-light p-8",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"NSW Security Services"}),Object(r.jsx)("p",{children:"Postfach 3214"}),Object(r.jsx)("p",{children:"8404 Winterthur"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:"Tel: +41 52 242 46 59"}),Object(r.jsx)("p",{children:"Fax: +41 52 242 46 55"}),Object(r.jsx)("a",{className:"transition-colors hover:text-gold",href:"mailto:kontakt@nsw.ch",children:"kontakt@nsw.ch"})]}),Object(r.jsxs)("div",{className:"flex flex-col gap-2 text-right",children:[Object(r.jsx)(u,{href:"/impressum",children:"Impressum"}),Object(r.jsx)(u,{href:"/agb",children:"AGB"})]})]})},f=n("20a2"),p="/angebote",d="/referenzen",h="/faq",v="/kontakt",b=function(){var e=Object(f.useRouter)(),t=function(t){return e.pathname===t};return Object(r.jsxs)("div",{className:"w-full flex justify-between bg-darkblue py-6 px-8",children:[Object(r.jsx)(s.a,{href:"/",children:Object(r.jsx)("a",{children:Object(r.jsx)("span",{className:"text-5xl font-black text-gold transition-opacity hover:opacity-80",children:"NSW"})})}),Object(r.jsxs)("nav",{className:"flex items-center gap-8",children:[Object(r.jsx)(u,{active:t(p),href:p,children:"Angebote"}),Object(r.jsx)(u,{active:t(d),href:d,children:"Referenzen"}),Object(r.jsx)(u,{active:t(h),href:h,children:"FAQ"}),Object(r.jsx)(u,{active:t(v),href:v,children:"Kontakt"})]})]})};n("Ea3V");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(c.a,{children:[Object(r.jsx)("title",{children:"NSW Security"}),Object(r.jsx)("meta",{name:"description",content:"Ihre Sicherheit interessiert uns mit Sicherheit"}),Object(r.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=5.0, viewport-fit=cover"}),Object(r.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500;900&display=swap",rel:"stylesheet"}),Object(r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-touch-icon.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"}),Object(r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"}),Object(r.jsx)("link",{rel:"manifest",href:"/site.webmanifest"})]}),Object(r.jsxs)("div",{className:"min-h-screen flex flex-col",children:[Object(r.jsx)(b,{}),Object(r.jsx)("main",{className:"flex-1 p-8",children:Object(r.jsx)(t,m({},n))}),Object(r.jsx)(l,{})]})]})}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},vNVm:function(e,t,n){"use strict";var r=n("J4zp");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,s=(0,o.useRef)(),u=(0,o.useState)(!1),l=r(u,2),f=l[0],p=l[1],d=(0,o.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=i.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return i.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,a=r.observer,c=r.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!c&&!f){var e=(0,a.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,a.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n("q1tI"),a=n("0G5g"),c="undefined"!==typeof IntersectionObserver;var i=new Map}},[[0,0,1,2]]]);