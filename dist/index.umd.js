!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).HookEvent=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=e(r((function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0}))),o=e(r((function(t){function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0}))),i=r((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new G(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=S(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function g(){}function y(){}function m(){}var b={};b[i]=function(){return this};var x=Object.getPrototypeOf,O=x&&x(x(I([])));O&&O!==r&&n.call(O,i)&&(b=O);var E=m.prototype=g.prototype=Object.create(b);function w(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,a,u){var c=l(t[o],t,i);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,u)}),(function(t){r("throw",t,a,u)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,u)}))}u(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function I(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return y.prototype=E.constructor=m,m.constructor=y,y.displayName=c(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c(t,u,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},w(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new k(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(E),c(E,u,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,G.prototype={constructor:G,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:I(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})),a=function(t){return t&&t.Math==Math&&t},u=a("object"==typeof globalThis&&globalThis)||a("object"==typeof window&&window)||a("object"==typeof self&&self)||a("object"==typeof t&&t)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},s=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),l={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,h={f:f&&!l.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:l},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,d=function(t){return v.call(t).slice(8,-1)},g="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?g.call(t,""):Object(t)}:Object,m=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},b=function(t){return y(m(t))},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},O=function(t,e){if(!x(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!x(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},E={}.hasOwnProperty,w=function(t,e){return E.call(t,e)},k=u.document,S=x(k)&&x(k.createElement),_=!s&&!c((function(){return 7!=Object.defineProperty((t="div",S?k.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),L=Object.getOwnPropertyDescriptor,G={f:s?L:function(t,e){if(t=b(t),e=O(e,!0),_)try{return L(t,e)}catch(t){}if(w(t,e))return p(!h.f.call(t,e),t[e])}},I=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},j=Object.defineProperty,R={f:s?j:function(t,e,r){if(I(t),e=O(e,!0),I(r),_)try{return j(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},T=s?function(t,e,r){return R.f(t,e,p(1,r))}:function(t,e,r){return t[e]=r,t},A=function(t,e){try{T(u,t,e)}catch(r){u[t]=e}return e},P="__core-js_shared__",C=u[P]||A(P,{}),M=Function.toString;"function"!=typeof C.inspectSource&&(C.inspectSource=function(t){return M.call(t)});var N,D,$,F,H=C.inspectSource,K=u.WeakMap,U="function"==typeof K&&/native code/.test(H(K)),B=r((function(t){(t.exports=function(t,e){return C[t]||(C[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),V=0,W=Math.random(),Y=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++V+W).toString(36)},q=B("keys"),z={},X=u.WeakMap;if(U){var J=C.state||(C.state=new X),Q=J.get,Z=J.has,tt=J.set;N=function(t,e){return e.facade=t,tt.call(J,t,e),e},D=function(t){return Q.call(J,t)||{}},$=function(t){return Z.call(J,t)}}else{var et=q[F="state"]||(q[F]=Y(F));z[et]=!0,N=function(t,e){return e.facade=t,T(t,et,e),e},D=function(t){return w(t,et)?t[et]:{}},$=function(t){return w(t,et)}}var rt={set:N,get:D,has:$,enforce:function(t){return $(t)?D(t):N(t,{})},getterFor:function(t){return function(e){var r;if(!x(e)||(r=D(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},nt=r((function(t){var e=rt.get,r=rt.enforce,n=String(String).split("String");(t.exports=function(t,e,o,i){var a,c=!!i&&!!i.unsafe,s=!!i&&!!i.enumerable,l=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||w(o,"name")||T(o,"name",e),(a=r(o)).source||(a.source=n.join("string"==typeof e?e:""))),t!==u?(c?!l&&t[e]&&(s=!0):delete t[e],s?t[e]=o:T(t,e,o)):s?t[e]=o:A(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||H(this)}))})),ot=u,it=function(t){return"function"==typeof t?t:void 0},at=function(t,e){return arguments.length<2?it(ot[t])||it(u[t]):ot[t]&&ot[t][e]||u[t]&&u[t][e]},ut=Math.ceil,ct=Math.floor,st=function(t){return isNaN(t=+t)?0:(t>0?ct:ut)(t)},lt=Math.min,ft=function(t){return t>0?lt(st(t),9007199254740991):0},ht=Math.max,pt=Math.min,vt=function(t){return function(e,r,n){var o,i=b(e),a=ft(i.length),u=function(t,e){var r=st(t);return r<0?ht(r+e,0):pt(r,e)}(n,a);if(t&&r!=r){for(;a>u;)if((o=i[u++])!=o)return!0}else for(;a>u;u++)if((t||u in i)&&i[u]===r)return t||u||0;return!t&&-1}},dt={includes:vt(!0),indexOf:vt(!1)}.indexOf,gt=function(t,e){var r,n=b(t),o=0,i=[];for(r in n)!w(z,r)&&w(n,r)&&i.push(r);for(;e.length>o;)w(n,r=e[o++])&&(~dt(i,r)||i.push(r));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],mt=yt.concat("length","prototype"),bt={f:Object.getOwnPropertyNames||function(t){return gt(t,mt)}},xt={f:Object.getOwnPropertySymbols},Ot=at("Reflect","ownKeys")||function(t){var e=bt.f(I(t)),r=xt.f;return r?e.concat(r(t)):e},Et=function(t,e){for(var r=Ot(e),n=R.f,o=G.f,i=0;i<r.length;i++){var a=r[i];w(t,a)||n(t,a,o(e,a))}},wt=/#|\.prototype\./,kt=function(t,e){var r=_t[St(t)];return r==Gt||r!=Lt&&("function"==typeof e?c(e):!!e)},St=kt.normalize=function(t){return String(t).replace(wt,".").toLowerCase()},_t=kt.data={},Lt=kt.NATIVE="N",Gt=kt.POLYFILL="P",It=kt,jt=G.f,Rt=function(t,e){var r,n,o,i,a,c=t.target,s=t.global,l=t.stat;if(r=s?u:l?u[c]||A(c,{}):(u[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(a=jt(r,n))&&a.value:r[n],!It(s?n:c+(l?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Et(i,o)}(t.sham||o&&o.sham)&&T(i,"sham",!0),nt(r,n,i,t)}},Tt=Object.keys||function(t){return gt(t,yt)},At=function(t){return Object(m(t))},Pt=Object.assign,Ct=Object.defineProperty,Mt=!Pt||c((function(){if(s&&1!==Pt({b:1},Pt(Ct({},"a",{enumerable:!0,get:function(){Ct(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=Pt({},t)[r]||Tt(Pt({},e)).join("")!=n}))?function(t,e){for(var r=At(t),n=arguments.length,o=1,i=xt.f,a=h.f;n>o;)for(var u,c=y(arguments[o++]),l=i?Tt(c).concat(i(c)):Tt(c),f=l.length,p=0;f>p;)u=l[p++],s&&!a.call(c,u)||(r[u]=c[u]);return r}:Pt;Rt({target:"Object",stat:!0,forced:Object.assign!==Mt},{assign:Mt});var Nt,Dt,$t=Array.isArray||function(t){return"Array"==d(t)},Ft=function(t,e,r){var n=O(e);n in t?R.f(t,n,p(0,r)):t[n]=r},Ht="process"==d(u.process),Kt=at("navigator","userAgent")||"",Ut=u.process,Bt=Ut&&Ut.versions,Vt=Bt&&Bt.v8;Vt?Dt=(Nt=Vt.split("."))[0]+Nt[1]:Kt&&(!(Nt=Kt.match(/Edge\/(\d+)/))||Nt[1]>=74)&&(Nt=Kt.match(/Chrome\/(\d+)/))&&(Dt=Nt[1]);var Wt=Dt&&+Dt,Yt=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(Ht?38===Wt:Wt>37&&Wt<41)})),qt=Yt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,zt=B("wks"),Xt=u.Symbol,Jt=qt?Xt:Xt&&Xt.withoutSetter||Y,Qt=function(t){return w(zt,t)&&(Yt||"string"==typeof zt[t])||(Yt&&w(Xt,t)?zt[t]=Xt[t]:zt[t]=Jt("Symbol."+t)),zt[t]},Zt=Qt("species"),te=function(t,e){var r;return $t(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!$t(r.prototype)?x(r)&&null===(r=r[Zt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},ee=Qt("species"),re=function(t){return Wt>=51||!c((function(){var e=[];return(e.constructor={})[ee]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ne=Qt("isConcatSpreadable"),oe=9007199254740991,ie="Maximum allowed index exceeded",ae=Wt>=51||!c((function(){var t=[];return t[ne]=!1,t.concat()[0]!==t})),ue=re("concat"),ce=function(t){if(!x(t))return!1;var e=t[ne];return void 0!==e?!!e:$t(t)};Rt({target:"Array",proto:!0,forced:!ae||!ue},{concat:function(t){var e,r,n,o,i,a=At(this),u=te(a,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(ce(i=-1===e?a:arguments[e])){if(c+(o=ft(i.length))>oe)throw TypeError(ie);for(r=0;r<o;r++,c++)r in i&&Ft(u,c,i[r])}else{if(c>=oe)throw TypeError(ie);Ft(u,c++,i)}return u.length=c,u}});var se=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},le=[].push,fe=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,a=7==t,u=5==t||i;return function(c,s,l,f){for(var h,p,v=At(c),d=y(v),g=function(t,e,r){if(se(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}(s,l,3),m=ft(d.length),b=0,x=f||te,O=e?x(c,m):r||a?x(c,0):void 0;m>b;b++)if((u||b in d)&&(p=g(h=d[b],b,v),t))if(e)O[b]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return b;case 2:le.call(O,h)}else switch(t){case 4:return!1;case 7:le.call(O,h)}return i?-1:n||o?o:O}},he={forEach:fe(0),map:fe(1),filter:fe(2),some:fe(3),every:fe(4),find:fe(5),findIndex:fe(6),filterOut:fe(7)},pe=function(t,e){var r=[][t];return!!r&&c((function(){r.call(null,e||function(){throw 1},1)}))},ve=he.forEach,de=pe("forEach")?[].forEach:function(t){return ve(this,t,arguments.length>1?arguments[1]:void 0)};Rt({target:"Array",proto:!0,forced:[].forEach!=de},{forEach:de});for(var ge in{CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}){var ye=u[ge],me=ye&&ye.prototype;if(me&&me.forEach!==de)try{T(me,"forEach",de)}catch(t){me.forEach=de}}Rt({target:"Object",stat:!0,forced:c((function(){Tt(1)}))},{keys:function(t){return Tt(At(t))}});var be=function(){var t=I(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function xe(t,e){return RegExp(t,e)}var Oe,Ee,we={UNSUPPORTED_Y:c((function(){var t=xe("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:c((function(){var t=xe("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ke=RegExp.prototype.exec,Se=String.prototype.replace,_e=ke,Le=(Oe=/a/,Ee=/b*/g,ke.call(Oe,"a"),ke.call(Ee,"a"),0!==Oe.lastIndex||0!==Ee.lastIndex),Ge=we.UNSUPPORTED_Y||we.BROKEN_CARET,Ie=void 0!==/()??/.exec("")[1];(Le||Ie||Ge)&&(_e=function(t){var e,r,n,o,i=this,a=Ge&&i.sticky,u=be.call(i),c=i.source,s=0,l=t;return a&&(-1===(u=u.replace("y","")).indexOf("g")&&(u+="g"),l=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",l=" "+l,s++),r=new RegExp("^(?:"+c+")",u)),Ie&&(r=new RegExp("^"+c+"$(?!\\s)",u)),Le&&(e=i.lastIndex),n=ke.call(a?r:i,l),a?n?(n.input=n.input.slice(s),n[0]=n[0].slice(s),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:Le&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),Ie&&n&&n.length>1&&Se.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var je=_e;Rt({target:"RegExp",proto:!0,forced:/./.exec!==je},{exec:je});var Re=Qt("species"),Te=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Ae="$0"==="a".replace(/./,"$0"),Pe=Qt("replace"),Ce=!!/./[Pe]&&""===/./[Pe]("a","$0"),Me=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),Ne=function(t,e,r,n){var o=Qt(t),i=!c((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),a=i&&!c((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[Re]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!i||!a||"replace"===t&&(!Te||!Ae||Ce)||"split"===t&&!Me){var u=/./[o],s=r(o,""[t],(function(t,e,r,n,o){return e.exec===je?i&&!o?{done:!0,value:u.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:Ae,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ce}),l=s[0],f=s[1];nt(String.prototype,t,l),nt(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}n&&T(RegExp.prototype[o],"sham",!0)},De=Qt("match"),$e=Qt("species"),Fe=function(t){return function(e,r){var n,o,i=String(m(e)),a=st(r),u=i.length;return a<0||a>=u?t?"":void 0:(n=i.charCodeAt(a))<55296||n>56319||a+1===u||(o=i.charCodeAt(a+1))<56320||o>57343?t?i.charAt(a):n:t?i.slice(a,a+2):o-56320+(n-55296<<10)+65536}},He={codeAt:Fe(!1),charAt:Fe(!0)}.charAt,Ke=function(t,e,r){return e+(r?He(t,e).length:1)},Ue=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==d(t))throw TypeError("RegExp#exec called on incompatible receiver");return je.call(t,e)},Be=[].push,Ve=Math.min,We=4294967295,Ye=!c((function(){return!RegExp(We,"y")}));Ne("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n,o,i=String(m(this)),a=void 0===r?We:r>>>0;if(0===a)return[];if(void 0===t)return[i];if(!x(n=t)||!(void 0!==(o=n[De])?o:"RegExp"==d(n)))return e.call(i,t,a);for(var u,c,s,l=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,f+"g");(u=je.call(p,i))&&!((c=p.lastIndex)>h&&(l.push(i.slice(h,u.index)),u.length>1&&u.index<i.length&&Be.apply(l,u.slice(1)),s=u[0].length,h=c,l.length>=a));)p.lastIndex===u.index&&p.lastIndex++;return h===i.length?!s&&p.test("")||l.push(""):l.push(i.slice(h)),l.length>a?l.slice(0,a):l}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=m(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var i=r(n,t,this,o,n!==e);if(i.done)return i.value;var a=I(t),u=String(this),c=function(t,e){var r,n=I(t).constructor;return void 0===n||null==(r=I(n)[$e])?e:se(r)}(a,RegExp),s=a.unicode,l=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(Ye?"y":"g"),f=new c(Ye?a:"^(?:"+a.source+")",l),h=void 0===o?We:o>>>0;if(0===h)return[];if(0===u.length)return null===Ue(f,u)?[u]:[];for(var p=0,v=0,d=[];v<u.length;){f.lastIndex=Ye?v:0;var g,y=Ue(f,Ye?u:u.slice(v));if(null===y||(g=Ve(ft(f.lastIndex+(Ye?0:v)),u.length))===p)v=Ke(u,v,s);else{if(d.push(u.slice(p,v)),d.length===h)return d;for(var m=1;m<=y.length-1;m++)if(d.push(y[m]),d.length===h)return d;v=p=g}}return d.push(u.slice(p)),d}]}),!Ye);var qe=Math.floor,ze="".replace,Xe=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Je=/\$([$&'`]|\d{1,2})/g,Qe=function(t,e,r,n,o,i){var a=r+t.length,u=n.length,c=Je;return void 0!==o&&(o=At(o),c=Xe),ze.call(i,c,(function(i,c){var s;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(a);case"<":s=o[c.slice(1,-1)];break;default:var l=+c;if(0===l)return i;if(l>u){var f=qe(l/10);return 0===f?i:f<=u?void 0===n[f-1]?c.charAt(1):n[f-1]+c.charAt(1):i}s=n[l-1]}return void 0===s?"":s}))},Ze=Math.max,tr=Math.min;Ne("replace",2,(function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,a=o?"$":"$0";return[function(r,n){var o=m(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(a)){var u=r(e,t,this,n);if(u.done)return u.value}var c=I(t),s=String(this),l="function"==typeof n;l||(n=String(n));var f=c.global;if(f){var h=c.unicode;c.lastIndex=0}for(var p=[];;){var v=Ue(c,s);if(null===v)break;if(p.push(v),!f)break;""===String(v[0])&&(c.lastIndex=Ke(s,ft(c.lastIndex),h))}for(var d,g="",y=0,m=0;m<p.length;m++){v=p[m];for(var b=String(v[0]),x=Ze(tr(st(v.index),s.length),0),O=[],E=1;E<v.length;E++)O.push(void 0===(d=v[E])?d:String(d));var w=v.groups;if(l){var k=[b].concat(O,x,s);void 0!==w&&k.push(w);var S=String(n.apply(void 0,k))}else S=Qe(b,s,x,O,w,n);x>=y&&(g+=s.slice(y,x)+S,y=x+b.length)}return g+s.slice(y)}]}));var er="\t\n\v\f\r                　\u2028\u2029\ufeff",rr="["+er+"]",nr=RegExp("^"+rr+rr+"*"),or=RegExp(rr+rr+"*$"),ir=function(t){return function(e){var r=String(m(e));return 1&t&&(r=r.replace(nr,"")),2&t&&(r=r.replace(or,"")),r}},ar={start:ir(1),end:ir(2),trim:ir(3)}.trim,ur=u.parseInt,cr=/^[+-]?0[Xx]/,sr=8!==ur(er+"08")||22!==ur(er+"0x16")?function(t,e){var r=ar(String(t));return ur(r,e>>>0||(cr.test(r)?16:10))}:ur;
/*! *****************************************************************************
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
	***************************************************************************** */
function lr(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{c(n.next(t))}catch(t){i(t)}}function u(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,u)}c((n=n.apply(t,e||[])).next())}))}Rt({global:!0,forced:parseInt!=sr},{parseInt:sr});var fr=he.filter;Rt({target:"Array",proto:!0,forced:!re("filter")},{filter:function(t){return fr(this,t,arguments.length>1?arguments[1]:void 0)}});var hr=[],pr=hr.sort,vr=c((function(){hr.sort(void 0)})),dr=c((function(){hr.sort(null)})),gr=pe("sort");Rt({target:"Array",proto:!0,forced:vr||!dr||!gr},{sort:function(t){return void 0===t?pr.call(At(this)):pr.call(At(this),se(t))}});var yr=function(){function t(e){n(this,t),this.groups={},this.items=[];var r=Object.assign({defaultOrder:1e3,defaultGroup:"default",initDefaultGroup:!0},e);this.defaultOrder=r.defaultOrder,this.defaultGroup=r.defaultGroup,r.initDefaultGroup&&this.setGroup(this.defaultGroup)}return o(t,[{key:"hasGroup",value:function(t){return Object.prototype.hasOwnProperty.call(this.groups,t)}},{key:"getGroupOrder",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.hasGroup(t)?this.groups[t]:this.defaultOrder}},{key:"setGroup",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultOrder;return this.groups[t]=e,this}},{key:"setGroups",value:function(t){return Object.assign(this.groups,t),this}},{key:"push",value:function(t){return this._add(t,"push")}},{key:"unshift",value:function(t){return this._add(t,"unshift")}},{key:"_add",value:function(t,e){var r=t.group,n=void 0===r?this.defaultGroup:r,o=
/*! *****************************************************************************
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
	***************************************************************************** */
function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["group"]),i=Object.assign(Object.assign({},o),{group:n});return this.items[e](i),this}},{key:"getItems",value:function(t){return this.items.filter(t)}},{key:"getByGroup",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.sort(this.getItems((function(e){return e.group===t})))}},{key:"getAll",value:function(){return this.sort(this.items)}},{key:"removeItems",value:function(t){return this.items=this.items.filter((function(e){return!t(e)})),this}},{key:"removeByGroup",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.removeItems((function(e){return e.group===t}))}},{key:"removeAll",value:function(){return this.items=[],this}},{key:"sort",value:function(t){var e=this;return t.sort((function(t,r){return e.getGroupOrder(t.group)-e.getGroupOrder(r.group)}))}}]),t}();return function(){function t(e){n(this,t),this.hookCallbacks={};var r=Object.assign({defaultGroup:"default",defaultOrder:1e3,initDefaultGroup:!0,debugMode:!1},e);this.defaultGroup=r.defaultGroup,this.defaultOrder=r.defaultOrder,this.initDefaultGroup=r.initDefaultGroup,r.debugMode&&(r.debugMode.LOG&&this.traceLog(),r.debugMode.WARN&&this.traceWarn(),r.debugMode.ERROR&&this.traceError())}return o(t,[{key:"traceLog",value:function(){this.off("HOOK_LOG").on("HOOK_LOG",(function(t){console.error(t)}))}},{key:"traceWarn",value:function(){this.off("HOOK_WARN").on("HOOK_WARN",(function(t){console.error(t)}))}},{key:"traceError",value:function(){this.off("HOOK_ERROR").on("HOOK_ERROR",(function(t){console.error(t)}))}},{key:"exception",value:function(t,e){return lr(this,void 0,void 0,i.mark((function r(){return i.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.message="HOOK_".concat(t,": ").concat(e.message),r.next=3,this.emit("HOOK_".concat(t),e);case 3:return r.abrupt("return",r.sent);case 4:case"end":return r.stop()}}),r,this)})))}},{key:"setEventGroups",value:function(t,e){return this._setOrAddEventGroups(t,e,"set")}},{key:"addEventGroups",value:function(t,e){return this._setOrAddEventGroups(t,e,"add")}},{key:"getCallbackInstance",value:function(t){return this._hasCallbackInstance(t)||(this.hookCallbacks[t]=new yr({defaultGroup:this.defaultGroup,defaultOrder:this.defaultOrder,initDefaultGroup:this.initDefaultGroup})),this.hookCallbacks[t]}},{key:"on",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return this._bind("push",t,e,r)}},{key:"listen",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return this._bind("unshift",t,e,r)}},{key:"off",value:function(t){var e=this._parseIdentity(t),r=e.event,n=e.group;if(!this._hasCallbackInstance(r))return this;var o=this.getCallbackInstance(r);return void 0===n?o.removeAll():o.removeByGroup(n),this}},{key:"emit",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return lr(this,void 0,void 0,i.mark((function e(){var n,o,a,u,c,s;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._parseIdentity(t),o=n.event,a=n.group,this._hasCallbackInstance(o)){e.next=3;break}return e.abrupt("return",{total:0,status:!0,errors:[]});case 3:return u=this.getCallbackInstance(o),c=void 0===a?u.getAll():u.getByGroup(a),e.next=7,this._execCallbacks.apply(this,[c].concat(r));case 7:return s=e.sent,u.removeItems((function(t){return t.times&&t.executed===t.times})),e.abrupt("return",s);case 10:case"end":return e.stop()}}),e,this)})))}},{key:"_setOrAddEventGroups",value:function(t,e,r){var n=this,o=this.getCallbackInstance(t);return Object.keys(e).forEach((function(i){var a=o.hasGroup(i);if("set"===r||!a){var u=e[i];o.setGroup(i,u)}if(a){var c="set"===r?{level:"LOG",code:100001}:{level:"WARN",code:200001};n.exception(c.level,{code:c.code,message:"".concat(i," group of ").concat(t," already exists!"),detail:{event:t,group:i,groups:e}})}})),this}},{key:"_hasCallbackInstance",value:function(t){return!!this.hookCallbacks[t]}},{key:"_bind",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this,o=this._parseIdentity(e),i=o.event,a=o.group,u=o.times,c=this.getCallbackInstance(i);return c[t]({method:r,group:a,times:u,ctx:n}),this}},{key:"_execCallbacks",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return lr(this,void 0,void 0,i.mark((function e(){var n,o,a,u;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={total:0,status:!0,errors:[]},o=t.length,a=0;case 3:if(!(a<o)){e.next=20;break}return u=t[a],e.prev=5,e.next=8,this._execCallback.apply(this,[u].concat(r));case 8:e.sent&&(n.total+=1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(5),n.status=!1,n.errors.push(e.t0),this.exception("ERROR",{code:300001,message:"run callback error",detail:Object.assign({},u)});case 17:a++,e.next=3;break;case 20:return e.abrupt("return",n);case 21:case"end":return e.stop()}}),e,this,[[5,12]])})))}},{key:"_execCallback",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return lr(this,void 0,void 0,i.mark((function e(){var n,o,a,u,c;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.method,o=t.times,a=t.ctx,u=t.executed,c=void 0===u?0:u,void 0===o){e.next=10;break}if(!(o>c)){e.next=7;break}return e.next=5,n.call.apply(n,[a].concat(r));case 5:return t.executed=c+1,e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.next=12,n.call.apply(n,[a].concat(r));case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))}},{key:"_parseIdentity",value:function(t){if("string"==typeof t){var e,r,n=t.split(/[*#]/)[0],o=t.replace(n,""),i=/#([^*]*)/.exec(o);i&&(e=i[1]||this.defaultGroup);var a=/\*([^#]*)/.exec(o);return a&&a[1]&&(r=parseInt(a[1])),{event:n,group:e,times:r}}return t}}]),t}()}));
//# sourceMappingURL=index.umd.js.map
