var e={316:(e,t,n)=>{function o(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function r(e){return e instanceof o(e).Element||e instanceof Element}function i(e){return e instanceof o(e).HTMLElement||e instanceof HTMLElement}function s(e){return"undefined"!=typeof ShadowRoot&&(e instanceof o(e).ShadowRoot||e instanceof ShadowRoot)}n.d(t,{n4:()=>ve});var a=Math.max,l=Math.min,c=Math.round;function d(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function p(){return!/^((?!chrome|android).)*safari/i.test(d())}function f(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!1);var s=e.getBoundingClientRect(),a=1,l=1;t&&i(e)&&(a=e.offsetWidth>0&&c(s.width)/e.offsetWidth||1,l=e.offsetHeight>0&&c(s.height)/e.offsetHeight||1);var d=(r(e)?o(e):window).visualViewport,f=!p()&&n,u=(s.left+(f&&d?d.offsetLeft:0))/a,h=(s.top+(f&&d?d.offsetTop:0))/l,m=s.width/a,v=s.height/l;return{width:m,height:v,top:h,right:u+m,bottom:h+v,left:u,x:u,y:h}}function u(e){var t=o(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function h(e){return e?(e.nodeName||"").toLowerCase():null}function m(e){return((r(e)?e.ownerDocument:e.document)||window.document).documentElement}function v(e){return f(m(e)).left+u(e).scrollLeft}function g(e){return o(e).getComputedStyle(e)}function y(e){var t=g(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function w(e,t,n){void 0===n&&(n=!1);var r,s,a=i(t),l=i(t)&&function(e){var t=e.getBoundingClientRect(),n=c(t.width)/e.offsetWidth||1,o=c(t.height)/e.offsetHeight||1;return 1!==n||1!==o}(t),d=m(t),p=f(e,l,n),g={scrollLeft:0,scrollTop:0},w={x:0,y:0};return(a||!a&&!n)&&(("body"!==h(t)||y(d))&&(g=(r=t)!==o(r)&&i(r)?{scrollLeft:(s=r).scrollLeft,scrollTop:s.scrollTop}:u(r)),i(t)?((w=f(t,!0)).x+=t.clientLeft,w.y+=t.clientTop):d&&(w.x=v(d))),{x:p.left+g.scrollLeft-w.x,y:p.top+g.scrollTop-w.y,width:p.width,height:p.height}}function b(e){var t=f(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function x(e){return"html"===h(e)?e:e.assignedSlot||e.parentNode||(s(e)?e.host:null)||m(e)}function O(e){return["html","body","#document"].indexOf(h(e))>=0?e.ownerDocument.body:i(e)&&y(e)?e:O(x(e))}function E(e,t){var n;void 0===t&&(t=[]);var r=O(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),s=o(r),a=i?[s].concat(s.visualViewport||[],y(r)?r:[]):r,l=t.concat(a);return i?l:l.concat(E(x(a)))}function D(e){return["table","td","th"].indexOf(h(e))>=0}function L(e){return i(e)&&"fixed"!==g(e).position?e.offsetParent:null}function C(e){for(var t=o(e),n=L(e);n&&D(n)&&"static"===g(n).position;)n=L(n);return n&&("html"===h(n)||"body"===h(n)&&"static"===g(n).position)?t:n||function(e){var t=/firefox/i.test(d());if(/Trident/i.test(d())&&i(e)&&"fixed"===g(e).position)return null;var n=x(e);for(s(n)&&(n=n.host);i(n)&&["html","body"].indexOf(h(n))<0;){var o=g(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(e)||t}var P="top",A="bottom",S="right",j="left",M="auto",k=[P,A,S,j],H="start",I="end",q="clippingParents",T="viewport",W="popper",$="reference",V=k.reduce((function(e,t){return e.concat([t+"-"+H,t+"-"+I])}),[]),B=[].concat(k,[M]).reduce((function(e,t){return e.concat([t,t+"-"+H,t+"-"+I])}),[]),R=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function z(e){var t=new Map,n=new Set,o=[];function r(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var o=t.get(e);o&&r(o)}})),o.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||r(e)})),o}var F={placement:"bottom",modifiers:[],strategy:"absolute"};function N(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"==typeof e.getBoundingClientRect)}))}function _(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,o=void 0===n?[]:n,i=t.defaultOptions,s=void 0===i?F:i;return function(e,t,n){void 0===n&&(n=s);var i,a,l={placement:"bottom",orderedModifiers:[],options:Object.assign({},F,s),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},c=[],d=!1,p={state:l,setOptions:function(n){var i="function"==typeof n?n(l.options):n;f(),l.options=Object.assign({},s,l.options,i),l.scrollParents={reference:r(e)?E(e):e.contextElement?E(e.contextElement):[],popper:E(t)};var a,d,u=function(e){var t=z(e);return R.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}((a=[].concat(o,l.options.modifiers),d=a.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{}),Object.keys(d).map((function(e){return d[e]}))));return l.orderedModifiers=u.filter((function(e){return e.enabled})),l.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,o=void 0===n?{}:n,r=e.effect;if("function"==typeof r){var i=r({state:l,name:t,instance:p,options:o}),s=function(){};c.push(i||s)}})),p.update()},forceUpdate:function(){if(!d){var e=l.elements,t=e.reference,n=e.popper;if(N(t,n)){l.rects={reference:w(t,C(n),"fixed"===l.options.strategy),popper:b(n)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach((function(e){return l.modifiersData[e.name]=Object.assign({},e.data)}));for(var o=0;o<l.orderedModifiers.length;o++)if(!0!==l.reset){var r=l.orderedModifiers[o],i=r.fn,s=r.options,a=void 0===s?{}:s,c=r.name;"function"==typeof i&&(l=i({state:l,options:a,name:c,instance:p})||l)}else l.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(e){p.forceUpdate(),e(l)}))},function(){return a||(a=new Promise((function(e){Promise.resolve().then((function(){a=void 0,e(i())}))}))),a}),destroy:function(){f(),d=!0}};if(!N(e,t))return p;function f(){c.forEach((function(e){return e()})),c=[]}return p.setOptions(n).then((function(e){!d&&n.onFirstUpdate&&n.onFirstUpdate(e)})),p}}var U={passive:!0};function J(e){return e.split("-")[0]}function G(e){return e.split("-")[1]}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e){var t,n=e.reference,o=e.element,r=e.placement,i=r?J(r):null,s=r?G(r):null,a=n.x+n.width/2-o.width/2,l=n.y+n.height/2-o.height/2;switch(i){case P:t={x:a,y:n.y-o.height};break;case A:t={x:a,y:n.y+n.height};break;case S:t={x:n.x+n.width,y:l};break;case j:t={x:n.x-o.width,y:l};break;default:t={x:n.x,y:n.y}}var c=i?X(i):null;if(null!=c){var d="y"===c?"height":"width";switch(s){case H:t[c]=t[c]-(n[d]/2-o[d]/2);break;case I:t[c]=t[c]+(n[d]/2-o[d]/2)}}return t}var K={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Z(e){var t,n=e.popper,r=e.popperRect,i=e.placement,s=e.variation,a=e.offsets,l=e.position,d=e.gpuAcceleration,p=e.adaptive,f=e.roundOffsets,u=e.isFixed,h=a.x,v=void 0===h?0:h,y=a.y,w=void 0===y?0:y,b="function"==typeof f?f({x:v,y:w}):{x:v,y:w};v=b.x,w=b.y;var x=a.hasOwnProperty("x"),O=a.hasOwnProperty("y"),E=j,D=P,L=window;if(p){var M=C(n),k="clientHeight",H="clientWidth";if(M===o(n)&&"static"!==g(M=m(n)).position&&"absolute"===l&&(k="scrollHeight",H="scrollWidth"),i===P||(i===j||i===S)&&s===I)D=A,w-=(u&&M===L&&L.visualViewport?L.visualViewport.height:M[k])-r.height,w*=d?1:-1;if(i===j||(i===P||i===A)&&s===I)E=S,v-=(u&&M===L&&L.visualViewport?L.visualViewport.width:M[H])-r.width,v*=d?1:-1}var q,T=Object.assign({position:l},p&&K),W=!0===f?function(e,t){var n=e.x,o=e.y,r=t.devicePixelRatio||1;return{x:c(n*r)/r||0,y:c(o*r)/r||0}}({x:v,y:w},o(n)):{x:v,y:w};return v=W.x,w=W.y,d?Object.assign({},T,((q={})[D]=O?"0":"",q[E]=x?"0":"",q.transform=(L.devicePixelRatio||1)<=1?"translate("+v+"px, "+w+"px)":"translate3d("+v+"px, "+w+"px, 0)",q)):Object.assign({},T,((t={})[D]=O?w+"px":"",t[E]=x?v+"px":"",t.transform="",t))}const Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.offset,i=void 0===r?[0,0]:r,s=B.reduce((function(e,n){return e[n]=function(e,t,n){var o=J(e),r=[j,P].indexOf(o)>=0?-1:1,i="function"==typeof n?n(Object.assign({},t,{placement:e})):n,s=i[0],a=i[1];return s=s||0,a=(a||0)*r,[j,S].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,t.rects,i),e}),{}),a=s[t.placement],l=a.x,c=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=l,t.modifiersData.popperOffsets.y+=c),t.modifiersData[o]=s}};var ee={left:"right",right:"left",bottom:"top",top:"bottom"};function te(e){return e.replace(/left|right|bottom|top/g,(function(e){return ee[e]}))}var ne={start:"end",end:"start"};function oe(e){return e.replace(/start|end/g,(function(e){return ne[e]}))}function re(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&s(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function ie(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function se(e,t,n){return t===T?ie(function(e,t){var n=o(e),r=m(e),i=n.visualViewport,s=r.clientWidth,a=r.clientHeight,l=0,c=0;if(i){s=i.width,a=i.height;var d=p();(d||!d&&"fixed"===t)&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:a,x:l+v(e),y:c}}(e,n)):r(t)?function(e,t){var n=f(e,!1,"fixed"===t);return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}(t,n):ie(function(e){var t,n=m(e),o=u(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=a(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),s=a(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),l=-o.scrollLeft+v(e),c=-o.scrollTop;return"rtl"===g(r||n).direction&&(l+=a(n.clientWidth,r?r.clientWidth:0)-i),{width:i,height:s,x:l,y:c}}(m(e)))}function ae(e,t,n,o){var s="clippingParents"===t?function(e){var t=E(x(e)),n=["absolute","fixed"].indexOf(g(e).position)>=0&&i(e)?C(e):e;return r(n)?t.filter((function(e){return r(e)&&re(e,n)&&"body"!==h(e)})):[]}(e):[].concat(t),c=[].concat(s,[n]),d=c[0],p=c.reduce((function(t,n){var r=se(e,n,o);return t.top=a(r.top,t.top),t.right=l(r.right,t.right),t.bottom=l(r.bottom,t.bottom),t.left=a(r.left,t.left),t}),se(e,d,o));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function le(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function ce(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}function de(e,t){void 0===t&&(t={});var n=t,o=n.placement,i=void 0===o?e.placement:o,s=n.strategy,a=void 0===s?e.strategy:s,l=n.boundary,c=void 0===l?q:l,d=n.rootBoundary,p=void 0===d?T:d,u=n.elementContext,h=void 0===u?W:u,v=n.altBoundary,g=void 0!==v&&v,y=n.padding,w=void 0===y?0:y,b=le("number"!=typeof w?w:ce(w,k)),x=h===W?$:W,O=e.rects.popper,E=e.elements[g?x:h],D=ae(r(E)?E:E.contextElement||m(e.elements.popper),c,p,a),L=f(e.elements.reference),C=Y({reference:L,element:O,strategy:"absolute",placement:i}),j=ie(Object.assign({},O,C)),M=h===W?j:L,H={top:D.top-M.top+b.top,bottom:M.bottom-D.bottom+b.bottom,left:D.left-M.left+b.left,right:M.right-D.right+b.right},I=e.modifiersData.offset;if(h===W&&I){var V=I[i];Object.keys(H).forEach((function(e){var t=[S,A].indexOf(e)>=0?1:-1,n=[P,A].indexOf(e)>=0?"y":"x";H[e]+=V[n]*t}))}return H}function pe(e,t,n){return a(e,l(t,n))}const fe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,i=void 0===r||r,s=n.altAxis,c=void 0!==s&&s,d=n.boundary,p=n.rootBoundary,f=n.altBoundary,u=n.padding,h=n.tether,m=void 0===h||h,v=n.tetherOffset,g=void 0===v?0:v,y=de(t,{boundary:d,rootBoundary:p,padding:u,altBoundary:f}),w=J(t.placement),x=G(t.placement),O=!x,E=X(w),D="x"===E?"y":"x",L=t.modifiersData.popperOffsets,M=t.rects.reference,k=t.rects.popper,I="function"==typeof g?g(Object.assign({},t.rects,{placement:t.placement})):g,q="number"==typeof I?{mainAxis:I,altAxis:I}:Object.assign({mainAxis:0,altAxis:0},I),T=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,W={x:0,y:0};if(L){if(i){var $,V="y"===E?P:j,B="y"===E?A:S,R="y"===E?"height":"width",z=L[E],F=z+y[V],N=z-y[B],_=m?-k[R]/2:0,U=x===H?M[R]:k[R],Y=x===H?-k[R]:-M[R],K=t.elements.arrow,Z=m&&K?b(K):{width:0,height:0},Q=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},ee=Q[V],te=Q[B],ne=pe(0,M[R],Z[R]),oe=O?M[R]/2-_-ne-ee-q.mainAxis:U-ne-ee-q.mainAxis,re=O?-M[R]/2+_+ne+te+q.mainAxis:Y+ne+te+q.mainAxis,ie=t.elements.arrow&&C(t.elements.arrow),se=ie?"y"===E?ie.clientTop||0:ie.clientLeft||0:0,ae=null!=($=null==T?void 0:T[E])?$:0,le=z+re-ae,ce=pe(m?l(F,z+oe-ae-se):F,z,m?a(N,le):N);L[E]=ce,W[E]=ce-z}if(c){var fe,ue="x"===E?P:j,he="x"===E?A:S,me=L[D],ve="y"===D?"height":"width",ge=me+y[ue],ye=me-y[he],we=-1!==[P,j].indexOf(w),be=null!=(fe=null==T?void 0:T[D])?fe:0,xe=we?ge:me-M[ve]-k[ve]-be+q.altAxis,Oe=we?me+M[ve]+k[ve]-be-q.altAxis:ye,Ee=m&&we?function(e,t,n){var o=pe(e,t,n);return o>n?n:o}(xe,me,Oe):pe(m?xe:ge,me,m?Oe:ye);L[D]=Ee,W[D]=Ee-me}t.modifiersData[o]=W}},requiresIfExists:["offset"]};const ue={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,o=e.name,r=e.options,i=n.elements.arrow,s=n.modifiersData.popperOffsets,a=J(n.placement),l=X(a),c=[j,S].indexOf(a)>=0?"height":"width";if(i&&s){var d=function(e,t){return le("number"!=typeof(e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:ce(e,k))}(r.padding,n),p=b(i),f="y"===l?P:j,u="y"===l?A:S,h=n.rects.reference[c]+n.rects.reference[l]-s[l]-n.rects.popper[c],m=s[l]-n.rects.reference[l],v=C(i),g=v?"y"===l?v.clientHeight||0:v.clientWidth||0:0,y=h/2-m/2,w=d[f],x=g-p[c]-d[u],O=g/2-p[c]/2+y,E=pe(w,O,x),D=l;n.modifiersData[o]=((t={})[D]=E,t.centerOffset=E-O,t)}},effect:function(e){var t=e.state,n=e.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=t.elements.popper.querySelector(o)))&&re(t.elements.popper,o)&&(t.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function he(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function me(e){return[P,S,A,j].some((function(t){return e[t]>=0}))}var ve=_({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,s=void 0===i||i,a=r.resize,l=void 0===a||a,c=o(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&d.forEach((function(e){e.addEventListener("scroll",n.update,U)})),l&&c.addEventListener("resize",n.update,U),function(){s&&d.forEach((function(e){e.removeEventListener("scroll",n.update,U)})),l&&c.removeEventListener("resize",n.update,U)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=Y({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=void 0===o||o,i=n.adaptive,s=void 0===i||i,a=n.roundOffsets,l=void 0===a||a,c={placement:J(t.placement),variation:G(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Z(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:l})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Z(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},o=t.attributes[e]||{},r=t.elements[e];i(r)&&h(r)&&(Object.assign(r.style,n),Object.keys(o).forEach((function(e){var t=o[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var o=t.elements[e],r=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]).reduce((function(e,t){return e[t]="",e}),{});i(o)&&h(o)&&(Object.assign(o.style,s),Object.keys(r).forEach((function(e){o.removeAttribute(e)})))}))}},requires:["computeStyles"]},Q,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,i=void 0===r||r,s=n.altAxis,a=void 0===s||s,l=n.fallbackPlacements,c=n.padding,d=n.boundary,p=n.rootBoundary,f=n.altBoundary,u=n.flipVariations,h=void 0===u||u,m=n.allowedAutoPlacements,v=t.options.placement,g=J(v),y=l||(g===v||!h?[te(v)]:function(e){if(J(e)===M)return[];var t=te(e);return[oe(e),t,oe(t)]}(v)),w=[v].concat(y).reduce((function(e,n){return e.concat(J(n)===M?function(e,t){void 0===t&&(t={});var n=t,o=n.placement,r=n.boundary,i=n.rootBoundary,s=n.padding,a=n.flipVariations,l=n.allowedAutoPlacements,c=void 0===l?B:l,d=G(o),p=d?a?V:V.filter((function(e){return G(e)===d})):k,f=p.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=p);var u=f.reduce((function(t,n){return t[n]=de(e,{placement:n,boundary:r,rootBoundary:i,padding:s})[J(n)],t}),{});return Object.keys(u).sort((function(e,t){return u[e]-u[t]}))}(t,{placement:n,boundary:d,rootBoundary:p,padding:c,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),b=t.rects.reference,x=t.rects.popper,O=new Map,E=!0,D=w[0],L=0;L<w.length;L++){var C=w[L],I=J(C),q=G(C)===H,T=[P,A].indexOf(I)>=0,W=T?"width":"height",$=de(t,{placement:C,boundary:d,rootBoundary:p,altBoundary:f,padding:c}),R=T?q?S:j:q?A:P;b[W]>x[W]&&(R=te(R));var z=te(R),F=[];if(i&&F.push($[I]<=0),a&&F.push($[R]<=0,$[z]<=0),F.every((function(e){return e}))){D=C,E=!1;break}O.set(C,F)}if(E)for(var N=function(e){var t=w.find((function(t){var n=O.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return D=t,"break"},_=h?3:1;_>0;_--){if("break"===N(_))break}t.placement!==D&&(t.modifiersData[o]._skip=!0,t.placement=D,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},fe,ue,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,s=de(t,{elementContext:"reference"}),a=de(t,{altBoundary:!0}),l=he(s,o),c=he(a,r,i),d=me(l),p=me(c);t.modifiersData[n]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:d,hasPopperEscaped:p},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":d,"data-popper-escaped":p})}}]})},189:(e,t,n)=>{n.d(t,{In:()=>r,lP:()=>o});const o={auto:"auto","auto-start":"auto-start","auto-end":"auto-end",top:"top","top-left":"top-start","top-right":"top-end",bottom:"bottom","bottom-left":"bottom-start","bottom-right":"bottom-end",right:"right","right-start":"right-start","right-end":"right-end",left:"left","left-start":"left-start","left-end":"left-end"},r=["Escape","ArrowUp","ArrowDown","Home","End","Enter"]},615:(e,t,n)=>{n.d(t,{A:()=>o});class o{constructor(e,t,n){this.el=e,this.options=t,this.events=n,this.el=e,this.options=t,this.events={}}createCollection(e,t){var n;e.push({id:(null===(n=null==t?void 0:t.el)||void 0===n?void 0:n.id)||e.length+1,element:t})}fireEvent(e,t=null){if(this.events.hasOwnProperty(e))return this.events[e](t)}on(e,t){this.events[e]=t}}},926:(e,t,n)=>{n.d(t,{BF:()=>r,IM:()=>c,JD:()=>a,gj:()=>o,un:()=>i,yd:()=>l,zG:()=>s});
/*
 * @version: 2.5.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
const o=(e,t,n="")=>(window.getComputedStyle(e).getPropertyValue(t)||n).replace(" ",""),r=(e,t,n="")=>{let o="";return e.classList.forEach((e=>{e.includes(t)&&(o=e)})),o.match(/:(.*)]/)?o.match(/:(.*)]/)[1]:n};const i=()=>!!/iPad|iPhone|iPod/.test(navigator.platform)||navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform),s=()=>navigator.maxTouchPoints&&navigator.maxTouchPoints>2&&/MacIntel/.test(navigator.platform),a=(e,t,n=null)=>{const o=new CustomEvent(e,{detail:{payload:n},bubbles:!0,cancelable:!0,composed:!1});t.dispatchEvent(o)},l=(e,t)=>{const n=()=>{t(),e.removeEventListener("transitionend",n,!0)},o=window.getComputedStyle(e),r=o.getPropertyValue("transition-duration");"none"!==o.getPropertyValue("transition-property")&&parseFloat(r)>0?e.addEventListener("transitionend",n,!0):t()},c={historyIndex:-1,addHistory(e){this.historyIndex=e},existsInHistory(e){return e>this.historyIndex},clearHistory(){this.historyIndex=-1}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var o={};n.d(o,{A:()=>c});var r=n(926),i=n(316),s=n(615),a=n(189);
/*
 * HSDropdown
 * @version: 2.5.0
 * @author: Preline Labs Ltd.
 * @license: Licensed under MIT and Preline UI Fair Use License (https://preline.co/docs/license.html)
 * Copyright 2024 Preline Labs Ltd.
 */
class l extends s.A{constructor(e,t,n){super(e,t,n),this.toggle=this.el.querySelector(":scope > .hs-dropdown-toggle")||this.el.querySelector(":scope > .hs-dropdown-toggle-wrapper > .hs-dropdown-toggle")||this.el.children[0],this.closers=Array.from(this.el.querySelectorAll(":scope .hs-dropdown-close"))||null,this.menu=this.el.querySelector(":scope > .hs-dropdown-menu"),this.eventMode=(0,r.gj)(this.el,"--trigger","click"),this.closeMode=(0,r.gj)(this.el,"--auto-close","true"),this.animationInProcess=!1,this.toggle&&this.menu&&this.init()}init(){if(this.createCollection(window.$hsDropdownCollection,this),this.toggle.disabled)return!1;this.toggle&&this.buildToggle(),this.menu&&this.buildMenu(),this.closers&&this.buildClosers(),(0,r.un)()||(0,r.zG)()||(this.el.addEventListener("mouseenter",(()=>this.onMouseEnterHandler())),this.el.addEventListener("mouseleave",(()=>this.onMouseLeaveHandler())))}resizeHandler(){this.eventMode=(0,r.gj)(this.el,"--trigger","click"),this.closeMode=(0,r.gj)(this.el,"--auto-close","true")}buildToggle(){var e;(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.el.classList.contains("open")?this.toggle.ariaExpanded="true":this.toggle.ariaExpanded="false"),this.toggle.addEventListener("click",(e=>this.onClickHandler(e)))}buildMenu(){this.menu.role="menu"}buildClosers(){this.closers.forEach((e=>{e.addEventListener("click",(()=>this.close()))}))}onClickHandler(e){this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")?this.close():this.open()}onMouseEnterHandler(){if("hover"!==this.eventMode)return!1;this.el._popper&&this.forceClearState(),!this.el.classList.contains("open")&&this.menu.classList.contains("hidden")&&this.open()}onMouseLeaveHandler(){if("hover"!==this.eventMode)return!1;this.el.classList.contains("open")&&!this.menu.classList.contains("hidden")&&this.close()}destroyPopper(){this.menu.classList.remove("block"),this.menu.classList.add("hidden"),this.menu.style.inset=null,this.menu.style.position=null,this.el&&this.el._popper&&this.el._popper.destroy(),this.animationInProcess=!1}absoluteStrategyModifiers(){return[{name:"applyStyles",fn:e=>{const t=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"absolute").replace(" ",""),n=(window.getComputedStyle(this.el).getPropertyValue("--adaptive")||"adaptive").replace(" ","");e.state.elements.popper.style.position=t,e.state.elements.popper.style.transform="adaptive"===n?e.state.styles.popper.transform:null,e.state.elements.popper.style.top=null,e.state.elements.popper.style.bottom=null,e.state.elements.popper.style.left=null,e.state.elements.popper.style.right=null,e.state.elements.popper.style.margin=0}}]}open(){if(this.el.classList.contains("open"))return!1;if(this.animationInProcess)return!1;this.animationInProcess=!0;const e=(window.getComputedStyle(this.el).getPropertyValue("--placement")||"").replace(" ",""),t=(window.getComputedStyle(this.el).getPropertyValue("--flip")||"true").replace(" ",""),n=(window.getComputedStyle(this.el).getPropertyValue("--strategy")||"fixed").replace(" ",""),o=parseInt((window.getComputedStyle(this.el).getPropertyValue("--offset")||"10").replace(" ","")),s=(window.getComputedStyle(this.el).getPropertyValue("--gpu-acceleration")||"true").replace(" ","");"static"!==n&&(this.el._popper=(0,i.n4)(this.el,this.menu,{placement:a.lP[e]||"bottom-start",strategy:n,modifiers:[..."fixed"!==n?this.absoluteStrategyModifiers():[],{name:"flip",enabled:"true"===t},{name:"offset",options:{offset:[0,o]}},{name:"computeStyles",options:{adaptive:"fixed"===n,gpuAcceleration:"true"===s}}]})),this.menu.style.margin=null,this.menu.classList.remove("hidden"),this.menu.classList.add("block"),setTimeout((()=>{var e;(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.toggle.ariaExpanded="true"),this.el.classList.add("open"),this.animationInProcess=!1})),this.fireEvent("open",this.el),(0,r.JD)("open.hs.dropdown",this.el,this.el)}close(e=!0){if(this.animationInProcess||!this.el.classList.contains("open"))return!1;if(this.animationInProcess=!0,e){const e=this.el.querySelector("[data-hs-dropdown-transition]")||this.menu;(0,r.yd)(e,(()=>this.destroyPopper()))}else this.destroyPopper();(()=>{var e;this.menu.style.margin=null,(null===(e=null==this?void 0:this.toggle)||void 0===e?void 0:e.ariaExpanded)&&(this.toggle.ariaExpanded="false"),this.el.classList.remove("open"),this.fireEvent("close",this.el),(0,r.JD)("close.hs.dropdown",this.el,this.el)})()}forceClearState(){this.destroyPopper(),this.menu.style.margin=null,this.el.classList.remove("open")}static getInstance(e,t){const n=window.$hsDropdownCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)));return n?t?n:n.element.el:null}static autoInit(){if(window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),document.querySelectorAll(".hs-dropdown:not(.--prevent-on-load-init)").forEach((e=>{window.$hsDropdownCollection.find((t=>{var n;return(null===(n=null==t?void 0:t.element)||void 0===n?void 0:n.el)===e}))||new l(e)})),window.$hsDropdownCollection){document.addEventListener("keydown",(e=>l.accessibility(e))),window.addEventListener("click",(e=>{const t=e.target;l.closeCurrentlyOpened(t)}));let e=window.innerWidth;window.addEventListener("resize",(()=>{window.innerWidth!==e&&(e=innerWidth,l.closeCurrentlyOpened(null,!1))}))}}static open(e){const t=window.$hsDropdownCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)));t&&t.element.menu.classList.contains("hidden")&&t.element.open()}static close(e){const t=window.$hsDropdownCollection.find((t=>t.element.el===("string"==typeof e?document.querySelector(e):e)));t&&!t.element.menu.classList.contains("hidden")&&t.element.close()}static accessibility(e){this.history=r.IM;const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t&&(a.In.includes(e.code)||4===e.code.length&&e.code[e.code.length-1].match(/^[A-Z]*$/))&&!e.metaKey&&!t.element.menu.querySelector("input:focus")&&!t.element.menu.querySelector("textarea:focus"))switch(e.code){case"Escape":t.element.menu.querySelector(".hs-select.active")||(e.preventDefault(),this.onEscape(e));break;case"Enter":t.element.menu.querySelector(".hs-select button:focus")||t.element.menu.querySelector(".hs-collapse-toggle:focus")||this.onEnter(e);break;case"ArrowUp":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow();break;case"ArrowDown":e.preventDefault(),e.stopImmediatePropagation(),this.onArrow(!1);break;case"Home":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd();break;case"End":e.preventDefault(),e.stopImmediatePropagation(),this.onStartEnd(!1);break;default:e.preventDefault(),this.onFirstLetter(e.key)}}static onEscape(e){const t=e.target.closest(".hs-dropdown.open");if(window.$hsDropdownCollection.find((e=>e.element.el===t))){const e=window.$hsDropdownCollection.find((e=>e.element.el===t));e&&(e.element.close(),e.element.toggle.focus())}else this.closeCurrentlyOpened()}static onEnter(e){const t=e.target.parentElement;if(window.$hsDropdownCollection.find((e=>e.element.el===t))){e.preventDefault();const n=window.$hsDropdownCollection.find((e=>e.element.el===t));n&&n.element.open()}}static onArrow(e=!0){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=(e?Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])")).reverse():Array.from(n.querySelectorAll("a:not([hidden]), .hs-dropdown > button:not([hidden])"))).filter((e=>!e.classList.contains("disabled"))),r=n.querySelector("a:focus, button:focus");let i=o.findIndex((e=>e===r));i+1<o.length&&i++,o[i].focus()}}static onStartEnd(e=!0){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=(e?Array.from(n.querySelectorAll("a")):Array.from(n.querySelectorAll("a")).reverse()).filter((e=>!e.classList.contains("disabled")));o.length&&o[0].focus()}}static onFirstLetter(e){const t=window.$hsDropdownCollection.find((e=>e.element.el.classList.contains("open")));if(t){const n=t.element.menu;if(!n)return!1;const o=Array.from(n.querySelectorAll("a")),r=()=>o.findIndex(((t,n)=>t.innerText.toLowerCase().charAt(0)===e.toLowerCase()&&this.history.existsInHistory(n)));let i=r();-1===i&&(this.history.clearHistory(),i=r()),-1!==i&&(o[i].focus(),this.history.addHistory(i))}}static closeCurrentlyOpened(e=null,t=!0){const n=e&&e.closest(".hs-dropdown")&&e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")?e.closest(".hs-dropdown").parentElement.closest(".hs-dropdown"):null;let o=n?window.$hsDropdownCollection.filter((e=>e.element.el.classList.contains("open")&&e.element.menu.closest(".hs-dropdown").parentElement.closest(".hs-dropdown")===n)):window.$hsDropdownCollection.filter((e=>e.element.el.classList.contains("open")));e&&e.closest(".hs-dropdown")&&"inside"===(0,r.BF)(e.closest(".hs-dropdown"),"--auto-close")&&(o=o.filter((t=>t.element.el!==e.closest(".hs-dropdown")))),o&&o.forEach((e=>{if("false"===e.element.closeMode||"outside"===e.element.closeMode)return!1;e.element.close(t)}))}static on(e,t,n){const o=window.$hsDropdownCollection.find((e=>e.element.el===("string"==typeof t?document.querySelector(t):t)));o&&(o.element.events[e]=n)}}window.addEventListener("load",(()=>{l.autoInit()})),window.addEventListener("resize",(()=>{window.$hsDropdownCollection||(window.$hsDropdownCollection=[]),window.$hsDropdownCollection.forEach((e=>e.element.resizeHandler()))})),"undefined"!=typeof window&&(window.HSDropdown=l);const c=l;var d=o.A;export{d as default};