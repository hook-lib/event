!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).HookEvent=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function r(t){var e={exports:{}};return t(e,e.exports),e.exports}var n=e(r((function(t){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},t.exports.default=t.exports,t.exports.__esModule=!0}))),o=e(r((function(t){function e(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t},t.exports.default=t.exports,t.exports.__esModule=!0}))),i=r((function(t){var e=function(t){var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",u=o.asyncIterator||"@@asyncIterator",a=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),u=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var u=r.delegate;if(u){var a=S(u,r);if(a){if(a===d)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?v:h,c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=v,r.method="throw",r.arg=c.arg)}}}(t,r,u),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",v="completed",d={};function g(){}function y(){}function b(){}var m={};m[i]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(G([])));w&&w!==r&&n.call(w,i)&&(m=w);var E=b.prototype=g.prototype=Object.create(m);function O(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,i,u,a){var c=s(t[o],t,i);if("throw"!==c.type){var l=c.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,u,a)}),(function(t){r("throw",t,u,a)})):e.resolve(f).then((function(t){l.value=t,u(l)}),(function(t){return r("throw",t,u,a)}))}a(c.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function G(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,u=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return u.next=u}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=E.constructor=b,b.constructor=y,y.displayName=c(b,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},O(k.prototype),k.prototype[u]=function(){return this},t.AsyncIterator=k,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var u=new k(l(e,r,n,o),i);return t.isGeneratorFunction(r)?u:u.next().then((function(t){return t.done?t.value:u.next()}))},O(E),c(E,a,"Generator"),E[i]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=G,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return a.type="throw",a.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var u=this.tryEntries[i],a=u.completion;if("root"===u.tryLoc)return o("end");if(u.tryLoc<=this.prev){var c=n.call(u,"catchLoc"),l=n.call(u,"finallyLoc");if(c&&l){if(this.prev<u.catchLoc)return o(u.catchLoc,!0);if(this.prev<u.finallyLoc)return o(u.finallyLoc)}else if(c){if(this.prev<u.catchLoc)return o(u.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<u.finallyLoc)return o(u.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var u=i?i.completion:{};return u.type=t,u.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(u)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),I(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;I(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:G(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(t){Function("r","regeneratorRuntime = r")(e)}})),u=function(t){return t&&t.Math==Math&&t},a=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof t&&t)||function(){return this}()||Function("return this")(),c=function(t){try{return!!t()}catch(t){return!0}},l=!c((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),s={}.propertyIsEnumerable,f=Object.getOwnPropertyDescriptor,h={f:f&&!s.call({1:2},1)?function(t){var e=f(this,t);return!!e&&e.enumerable}:s},p=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},v={}.toString,d=function(t){return v.call(t).slice(8,-1)},g="".split,y=c((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==d(t)?g.call(t,""):Object(t)}:Object,b=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t},m=function(t){return y(b(t))},x=function(t){return"object"==typeof t?null!==t:"function"==typeof t},w=function(t,e){if(!x(t))return t;var r,n;if(e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;if("function"==typeof(r=t.valueOf)&&!x(n=r.call(t)))return n;if(!e&&"function"==typeof(r=t.toString)&&!x(n=r.call(t)))return n;throw TypeError("Can't convert object to primitive value")},E={}.hasOwnProperty,O=function(t,e){return E.call(t,e)},k=a.document,S=x(k)&&x(k.createElement),_=!l&&!c((function(){return 7!=Object.defineProperty((t="div",S?k.createElement(t):{}),"a",{get:function(){return 7}}).a;var t})),I=Object.getOwnPropertyDescriptor,j={f:l?I:function(t,e){if(t=m(t),e=w(e,!0),_)try{return I(t,e)}catch(t){}if(O(t,e))return p(!h.f.call(t,e),t[e])}},G=function(t){if(!x(t))throw TypeError(String(t)+" is not an object");return t},P=Object.defineProperty,A={f:l?P:function(t,e,r){if(G(t),e=w(e,!0),G(r),_)try{return P(t,e,r)}catch(t){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},L=l?function(t,e,r){return A.f(t,e,p(1,r))}:function(t,e,r){return t[e]=r,t},T=function(t,e){try{L(a,t,e)}catch(r){a[t]=e}return e},C="__core-js_shared__",R=a[C]||T(C,{}),N=Function.toString;"function"!=typeof R.inspectSource&&(R.inspectSource=function(t){return N.call(t)});var M,D,$,F,U=R.inspectSource,B=a.WeakMap,K="function"==typeof B&&/native code/.test(U(B)),Y=r((function(t){(t.exports=function(t,e){return R[t]||(R[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.9.1",mode:"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})})),z=0,X=Math.random(),q=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++z+X).toString(36)},W=Y("keys"),H={},V=a.WeakMap;if(K){var J=R.state||(R.state=new V),Q=J.get,Z=J.has,tt=J.set;M=function(t,e){return e.facade=t,tt.call(J,t,e),e},D=function(t){return Q.call(J,t)||{}},$=function(t){return Z.call(J,t)}}else{var et=W[F="state"]||(W[F]=q(F));H[et]=!0,M=function(t,e){return e.facade=t,L(t,et,e),e},D=function(t){return O(t,et)?t[et]:{}},$=function(t){return O(t,et)}}var rt={set:M,get:D,has:$,enforce:function(t){return $(t)?D(t):M(t,{})},getterFor:function(t){return function(e){var r;if(!x(e)||(r=D(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}}},nt=r((function(t){var e=rt.get,r=rt.enforce,n=String(String).split("String");(t.exports=function(t,e,o,i){var u,c=!!i&&!!i.unsafe,l=!!i&&!!i.enumerable,s=!!i&&!!i.noTargetGet;"function"==typeof o&&("string"!=typeof e||O(o,"name")||L(o,"name",e),(u=r(o)).source||(u.source=n.join("string"==typeof e?e:""))),t!==a?(c?!s&&t[e]&&(l=!0):delete t[e],l?t[e]=o:L(t,e,o)):l?t[e]=o:T(e,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&e(this).source||U(this)}))})),ot=a,it=function(t){return"function"==typeof t?t:void 0},ut=function(t,e){return arguments.length<2?it(ot[t])||it(a[t]):ot[t]&&ot[t][e]||a[t]&&a[t][e]},at=Math.ceil,ct=Math.floor,lt=function(t){return isNaN(t=+t)?0:(t>0?ct:at)(t)},st=Math.min,ft=function(t){return t>0?st(lt(t),9007199254740991):0},ht=Math.max,pt=Math.min,vt=function(t){return function(e,r,n){var o,i=m(e),u=ft(i.length),a=function(t,e){var r=lt(t);return r<0?ht(r+e,0):pt(r,e)}(n,u);if(t&&r!=r){for(;u>a;)if((o=i[a++])!=o)return!0}else for(;u>a;a++)if((t||a in i)&&i[a]===r)return t||a||0;return!t&&-1}},dt={includes:vt(!0),indexOf:vt(!1)}.indexOf,gt=function(t,e){var r,n=m(t),o=0,i=[];for(r in n)!O(H,r)&&O(n,r)&&i.push(r);for(;e.length>o;)O(n,r=e[o++])&&(~dt(i,r)||i.push(r));return i},yt=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],bt=yt.concat("length","prototype"),mt={f:Object.getOwnPropertyNames||function(t){return gt(t,bt)}},xt={f:Object.getOwnPropertySymbols},wt=ut("Reflect","ownKeys")||function(t){var e=mt.f(G(t)),r=xt.f;return r?e.concat(r(t)):e},Et=function(t,e){for(var r=wt(e),n=A.f,o=j.f,i=0;i<r.length;i++){var u=r[i];O(t,u)||n(t,u,o(e,u))}},Ot=/#|\.prototype\./,kt=function(t,e){var r=_t[St(t)];return r==jt||r!=It&&("function"==typeof e?c(e):!!e)},St=kt.normalize=function(t){return String(t).replace(Ot,".").toLowerCase()},_t=kt.data={},It=kt.NATIVE="N",jt=kt.POLYFILL="P",Gt=kt,Pt=j.f,At=function(t,e){var r,n,o,i,u,c=t.target,l=t.global,s=t.stat;if(r=l?a:s?a[c]||T(c,{}):(a[c]||{}).prototype)for(n in e){if(i=e[n],o=t.noTargetGet?(u=Pt(r,n))&&u.value:r[n],!Gt(l?n:c+(s?".":"#")+n,t.forced)&&void 0!==o){if(typeof i==typeof o)continue;Et(i,o)}(t.sham||o&&o.sham)&&L(i,"sham",!0),nt(r,n,i,t)}},Lt=Object.keys||function(t){return gt(t,yt)},Tt=function(t){return Object(b(t))},Ct=Object.assign,Rt=Object.defineProperty,Nt=!Ct||c((function(){if(l&&1!==Ct({b:1},Ct(Rt({},"a",{enumerable:!0,get:function(){Rt(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var t={},e={},r=Symbol(),n="abcdefghijklmnopqrst";return t[r]=7,n.split("").forEach((function(t){e[t]=t})),7!=Ct({},t)[r]||Lt(Ct({},e)).join("")!=n}))?function(t,e){for(var r=Tt(t),n=arguments.length,o=1,i=xt.f,u=h.f;n>o;)for(var a,c=y(arguments[o++]),s=i?Lt(c).concat(i(c)):Lt(c),f=s.length,p=0;f>p;)a=s[p++],l&&!u.call(c,a)||(r[a]=c[a]);return r}:Ct;At({target:"Object",stat:!0,forced:Object.assign!==Nt},{assign:Nt});var Mt,Dt,$t=Array.isArray||function(t){return"Array"==d(t)},Ft=function(t,e,r){var n=w(e);n in t?A.f(t,n,p(0,r)):t[n]=r},Ut="process"==d(a.process),Bt=ut("navigator","userAgent")||"",Kt=a.process,Yt=Kt&&Kt.versions,zt=Yt&&Yt.v8;zt?Dt=(Mt=zt.split("."))[0]+Mt[1]:Bt&&(!(Mt=Bt.match(/Edge\/(\d+)/))||Mt[1]>=74)&&(Mt=Bt.match(/Chrome\/(\d+)/))&&(Dt=Mt[1]);var Xt=Dt&&+Dt,qt=!!Object.getOwnPropertySymbols&&!c((function(){return!Symbol.sham&&(Ut?38===Xt:Xt>37&&Xt<41)})),Wt=qt&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Ht=Y("wks"),Vt=a.Symbol,Jt=Wt?Vt:Vt&&Vt.withoutSetter||q,Qt=function(t){return O(Ht,t)&&(qt||"string"==typeof Ht[t])||(qt&&O(Vt,t)?Ht[t]=Vt[t]:Ht[t]=Jt("Symbol."+t)),Ht[t]},Zt=Qt("species"),te=function(t,e){var r;return $t(t)&&("function"!=typeof(r=t.constructor)||r!==Array&&!$t(r.prototype)?x(r)&&null===(r=r[Zt])&&(r=void 0):r=void 0),new(void 0===r?Array:r)(0===e?0:e)},ee=Qt("species"),re=function(t){return Xt>=51||!c((function(){var e=[];return(e.constructor={})[ee]=function(){return{foo:1}},1!==e[t](Boolean).foo}))},ne=Qt("isConcatSpreadable"),oe=9007199254740991,ie="Maximum allowed index exceeded",ue=Xt>=51||!c((function(){var t=[];return t[ne]=!1,t.concat()[0]!==t})),ae=re("concat"),ce=function(t){if(!x(t))return!1;var e=t[ne];return void 0!==e?!!e:$t(t)};At({target:"Array",proto:!0,forced:!ue||!ae},{concat:function(t){var e,r,n,o,i,u=Tt(this),a=te(u,0),c=0;for(e=-1,n=arguments.length;e<n;e++)if(ce(i=-1===e?u:arguments[e])){if(c+(o=ft(i.length))>oe)throw TypeError(ie);for(r=0;r<o;r++,c++)r in i&&Ft(a,c,i[r])}else{if(c>=oe)throw TypeError(ie);Ft(a,c++,i)}return a.length=c,a}});var le=function(){var t=G(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};function se(t,e){return RegExp(t,e)}var fe,he,pe={UNSUPPORTED_Y:c((function(){var t=se("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),BROKEN_CARET:c((function(){var t=se("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},ve=RegExp.prototype.exec,de=String.prototype.replace,ge=ve,ye=(fe=/a/,he=/b*/g,ve.call(fe,"a"),ve.call(he,"a"),0!==fe.lastIndex||0!==he.lastIndex),be=pe.UNSUPPORTED_Y||pe.BROKEN_CARET,me=void 0!==/()??/.exec("")[1];(ye||me||be)&&(ge=function(t){var e,r,n,o,i=this,u=be&&i.sticky,a=le.call(i),c=i.source,l=0,s=t;return u&&(-1===(a=a.replace("y","")).indexOf("g")&&(a+="g"),s=String(t).slice(i.lastIndex),i.lastIndex>0&&(!i.multiline||i.multiline&&"\n"!==t[i.lastIndex-1])&&(c="(?: "+c+")",s=" "+s,l++),r=new RegExp("^(?:"+c+")",a)),me&&(r=new RegExp("^"+c+"$(?!\\s)",a)),ye&&(e=i.lastIndex),n=ve.call(u?r:i,s),u?n?(n.input=n.input.slice(l),n[0]=n[0].slice(l),n.index=i.lastIndex,i.lastIndex+=n[0].length):i.lastIndex=0:ye&&n&&(i.lastIndex=i.global?n.index+n[0].length:e),me&&n&&n.length>1&&de.call(n[0],r,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(n[o]=void 0)})),n});var xe=ge;At({target:"RegExp",proto:!0,forced:/./.exec!==xe},{exec:xe});var we=Qt("species"),Ee=!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),Oe="$0"==="a".replace(/./,"$0"),ke=Qt("replace"),Se=!!/./[ke]&&""===/./[ke]("a","$0"),_e=!c((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var r="ab".split(t);return 2!==r.length||"a"!==r[0]||"b"!==r[1]})),Ie=function(t,e,r,n){var o=Qt(t),i=!c((function(){var e={};return e[o]=function(){return 7},7!=""[t](e)})),u=i&&!c((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[we]=function(){return r},r.flags="",r[o]=/./[o]),r.exec=function(){return e=!0,null},r[o](""),!e}));if(!i||!u||"replace"===t&&(!Ee||!Oe||Se)||"split"===t&&!_e){var a=/./[o],l=r(o,""[t],(function(t,e,r,n,o){return e.exec===xe?i&&!o?{done:!0,value:a.call(e,r,n)}:{done:!0,value:t.call(r,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:Oe,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Se}),s=l[0],f=l[1];nt(String.prototype,t,s),nt(RegExp.prototype,o,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)})}n&&L(RegExp.prototype[o],"sham",!0)},je=Qt("match"),Ge=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t},Pe=Qt("species"),Ae=function(t){return function(e,r){var n,o,i=String(b(e)),u=lt(r),a=i.length;return u<0||u>=a?t?"":void 0:(n=i.charCodeAt(u))<55296||n>56319||u+1===a||(o=i.charCodeAt(u+1))<56320||o>57343?t?i.charAt(u):n:t?i.slice(u,u+2):o-56320+(n-55296<<10)+65536}},Le={codeAt:Ae(!1),charAt:Ae(!0)}.charAt,Te=function(t,e,r){return e+(r?Le(t,e).length:1)},Ce=function(t,e){var r=t.exec;if("function"==typeof r){var n=r.call(t,e);if("object"!=typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==d(t))throw TypeError("RegExp#exec called on incompatible receiver");return xe.call(t,e)},Re=[].push,Ne=Math.min,Me=4294967295,De=!c((function(){return!RegExp(Me,"y")}));Ie("split",2,(function(t,e,r){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,r){var n,o,i=String(b(this)),u=void 0===r?Me:r>>>0;if(0===u)return[];if(void 0===t)return[i];if(!x(n=t)||!(void 0!==(o=n[je])?o:"RegExp"==d(n)))return e.call(i,t,u);for(var a,c,l,s=[],f=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,p=new RegExp(t.source,f+"g");(a=xe.call(p,i))&&!((c=p.lastIndex)>h&&(s.push(i.slice(h,a.index)),a.length>1&&a.index<i.length&&Re.apply(s,a.slice(1)),l=a[0].length,h=c,s.length>=u));)p.lastIndex===a.index&&p.lastIndex++;return h===i.length?!l&&p.test("")||s.push(""):s.push(i.slice(h)),s.length>u?s.slice(0,u):s}:"0".split(void 0,0).length?function(t,r){return void 0===t&&0===r?[]:e.call(this,t,r)}:e,[function(e,r){var o=b(this),i=null==e?void 0:e[t];return void 0!==i?i.call(e,o,r):n.call(String(o),e,r)},function(t,o){var i=r(n,t,this,o,n!==e);if(i.done)return i.value;var u=G(t),a=String(this),c=function(t,e){var r,n=G(t).constructor;return void 0===n||null==(r=G(n)[Pe])?e:Ge(r)}(u,RegExp),l=u.unicode,s=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(De?"y":"g"),f=new c(De?u:"^(?:"+u.source+")",s),h=void 0===o?Me:o>>>0;if(0===h)return[];if(0===a.length)return null===Ce(f,a)?[a]:[];for(var p=0,v=0,d=[];v<a.length;){f.lastIndex=De?v:0;var g,y=Ce(f,De?a:a.slice(v));if(null===y||(g=Ne(ft(f.lastIndex+(De?0:v)),a.length))===p)v=Te(a,v,l);else{if(d.push(a.slice(p,v)),d.length===h)return d;for(var b=1;b<=y.length-1;b++)if(d.push(y[b]),d.length===h)return d;v=p=g}}return d.push(a.slice(p)),d}]}),!De);var $e=Math.floor,Fe="".replace,Ue=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,Be=/\$([$&'`]|\d{1,2})/g,Ke=function(t,e,r,n,o,i){var u=r+t.length,a=n.length,c=Be;return void 0!==o&&(o=Tt(o),c=Ue),Fe.call(i,c,(function(i,c){var l;switch(c.charAt(0)){case"$":return"$";case"&":return t;case"`":return e.slice(0,r);case"'":return e.slice(u);case"<":l=o[c.slice(1,-1)];break;default:var s=+c;if(0===s)return i;if(s>a){var f=$e(s/10);return 0===f?i:f<=a?void 0===n[f-1]?c.charAt(1):n[f-1]+c.charAt(1):i}l=n[s-1]}return void 0===l?"":l}))},Ye=Math.max,ze=Math.min;Ie("replace",2,(function(t,e,r,n){var o=n.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,i=n.REPLACE_KEEPS_$0,u=o?"$":"$0";return[function(r,n){var o=b(this),i=null==r?void 0:r[t];return void 0!==i?i.call(r,o,n):e.call(String(o),r,n)},function(t,n){if(!o&&i||"string"==typeof n&&-1===n.indexOf(u)){var a=r(e,t,this,n);if(a.done)return a.value}var c=G(t),l=String(this),s="function"==typeof n;s||(n=String(n));var f=c.global;if(f){var h=c.unicode;c.lastIndex=0}for(var p=[];;){var v=Ce(c,l);if(null===v)break;if(p.push(v),!f)break;""===String(v[0])&&(c.lastIndex=Te(l,ft(c.lastIndex),h))}for(var d,g="",y=0,b=0;b<p.length;b++){v=p[b];for(var m=String(v[0]),x=Ye(ze(lt(v.index),l.length),0),w=[],E=1;E<v.length;E++)w.push(void 0===(d=v[E])?d:String(d));var O=v.groups;if(s){var k=[m].concat(w,x,l);void 0!==O&&k.push(O);var S=String(n.apply(void 0,k))}else S=Ke(m,l,x,w,O,n);x>=y&&(g+=l.slice(y,x)+S,y=x+m.length)}return g+l.slice(y)}]}));var Xe="\t\n\v\f\r                　\u2028\u2029\ufeff",qe="["+Xe+"]",We=RegExp("^"+qe+qe+"*"),He=RegExp(qe+qe+"*$"),Ve=function(t){return function(e){var r=String(b(e));return 1&t&&(r=r.replace(We,"")),2&t&&(r=r.replace(He,"")),r}},Je={start:Ve(1),end:Ve(2),trim:Ve(3)}.trim,Qe=a.parseInt,Ze=/^[+-]?0[Xx]/,tr=8!==Qe(Xe+"08")||22!==Qe(Xe+"0x16")?function(t,e){var r=Je(String(t));return Qe(r,e>>>0||(Ze.test(r)?16:10))}:Qe;
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
function er(t,e,r,n){return new(r||(r=Promise))((function(o,i){function u(t){try{c(n.next(t))}catch(t){i(t)}}function a(t){try{c(n.throw(t))}catch(t){i(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(u,a)}c((n=n.apply(t,e||[])).next())}))}At({global:!0,forced:parseInt!=tr},{parseInt:tr});var rr=[].push,nr=function(t){var e=1==t,r=2==t,n=3==t,o=4==t,i=6==t,u=7==t,a=5==t||i;return function(c,l,s,f){for(var h,p,v=Tt(c),d=y(v),g=function(t,e,r){if(Ge(t),void 0===e)return t;switch(r){case 0:return function(){return t.call(e)};case 1:return function(r){return t.call(e,r)};case 2:return function(r,n){return t.call(e,r,n)};case 3:return function(r,n,o){return t.call(e,r,n,o)}}return function(){return t.apply(e,arguments)}}(l,s,3),b=ft(d.length),m=0,x=f||te,w=e?x(c,b):r||u?x(c,0):void 0;b>m;m++)if((a||m in d)&&(p=g(h=d[m],m,v),t))if(e)w[m]=p;else if(p)switch(t){case 3:return!0;case 5:return h;case 6:return m;case 2:rr.call(w,h)}else switch(t){case 4:return!1;case 7:rr.call(w,h)}return i?-1:n||o?o:w}},or={forEach:nr(0),map:nr(1),filter:nr(2),some:nr(3),every:nr(4),find:nr(5),findIndex:nr(6),filterOut:nr(7)}.filter;At({target:"Array",proto:!0,forced:!re("filter")},{filter:function(t){return or(this,t,arguments.length>1?arguments[1]:void 0)}});var ir,ur,ar=[],cr=ar.sort,lr=c((function(){ar.sort(void 0)})),sr=c((function(){ar.sort(null)})),fr=!!(ur=[]["sort"])&&c((function(){ur.call(null,ir||function(){throw 1},1)}));At({target:"Array",proto:!0,forced:lr||!sr||!fr},{sort:function(t){return void 0===t?cr.call(Tt(this)):cr.call(Tt(this),Ge(t))}});var hr=function(){function t(e){n(this,t),this.groups={},this.items=[];var r=Object.assign({defaultOrder:1e3,defaultGroup:"default",initDefaultGroup:!0},e);this.defaultOrder=r.defaultOrder,this.defaultGroup=r.defaultGroup,r.initDefaultGroup&&this.setGroup(this.defaultGroup)}return o(t,[{key:"hasGroup",value:function(t){return Object.prototype.hasOwnProperty.call(this.groups,t)}},{key:"getGroupOrder",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.hasGroup(t)?this.groups[t]:this.defaultOrder}},{key:"setGroup",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.defaultOrder;return this.groups[t]=e,this}},{key:"setGroups",value:function(t){return Object.assign(this.groups,t),this}},{key:"push",value:function(t){return this._add(t,"push")}},{key:"unshift",value:function(t){return this._add(t,"unshift")}},{key:"_add",value:function(t,e){var r=t.group,n=void 0===r?this.defaultGroup:r,o=
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
function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["group"]),i=Object.assign(Object.assign({},o),{group:n});return this.items[e](i),this}},{key:"getItems",value:function(t){return this.items.filter(t)}},{key:"getByGroup",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.sort(this.getItems((function(e){return e.group===t})))}},{key:"getAll",value:function(){return this.sort(this.items)}},{key:"removeItems",value:function(t){return this.items=this.items.filter((function(e){return!t(e)})),this}},{key:"removeByGroup",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.defaultGroup;return this.removeItems((function(e){return e.group===t}))}},{key:"removeAll",value:function(){return this.items=[],this}},{key:"sort",value:function(t){var e=this;return t.sort((function(t,r){return e.getGroupOrder(t.group)-e.getGroupOrder(r.group)}))}}]),t}();return function(){function t(e){n(this,t),this.hookCallbacks={};var r=Object.assign({defaultGroup:"default",defaultOrder:1e3,initDefaultGroup:!0},e);this.defaultGroup=r.defaultGroup,this.defaultOrder=r.defaultOrder,this.initDefaultGroup=r.initDefaultGroup}return o(t,[{key:"setEventGroups",value:function(t,e){return this.getCallbackInstance(t).setGroups(e),this}},{key:"getCallbackInstance",value:function(t){return this._hasCallbackInstance(t)||(this.hookCallbacks[t]=new hr({defaultGroup:this.defaultGroup,defaultOrder:this.defaultOrder,initDefaultGroup:this.initDefaultGroup})),this.hookCallbacks[t]}},{key:"on",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return this._bind("push",t,e,r)}},{key:"listen",value:function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this;return this._bind("unshift",t,e,r)}},{key:"off",value:function(t){var e=this._parseIdentity(t),r=e.event,n=e.group;if(!this._hasCallbackInstance(r))return this;var o=this.getCallbackInstance(r);return void 0===n?o.removeAll():o.removeByGroup(n),this}},{key:"emit",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return er(this,void 0,void 0,i.mark((function e(){var n,o,u,a,c,l;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this._parseIdentity(t),o=n.event,u=n.group,this._hasCallbackInstance(o)){e.next=3;break}return e.abrupt("return",{total:0,status:!0,errors:[]});case 3:return a=this.getCallbackInstance(o),c=void 0===u?a.getAll():a.getByGroup(u),e.next=7,this._execCallbacks.apply(this,[c].concat(r));case 7:return l=e.sent,a.removeItems((function(t){return t.times&&t.executed===t.times})),e.abrupt("return",l);case 10:case"end":return e.stop()}}),e,this)})))}},{key:"_hasCallbackInstance",value:function(t){return!!this.hookCallbacks[t]}},{key:"_bind",value:function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:this,o=this._parseIdentity(e),i=o.event,u=o.group,a=o.times,c=this.getCallbackInstance(i);return c[t]({method:r,group:u,times:a,ctx:n}),this}},{key:"_execCallbacks",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return er(this,void 0,void 0,i.mark((function e(){var n,o,u,a;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={total:0,status:!0,errors:[]},o=t.length,u=0;case 3:if(!(u<o)){e.next=19;break}return a=t[u],e.prev=5,e.next=8,this._execCallback.apply(this,[a].concat(r));case 8:e.sent&&(n.total+=1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(5),n.status=!1,n.errors.push(e.t0);case 16:u++,e.next=3;break;case 19:return e.abrupt("return",n);case 20:case"end":return e.stop()}}),e,this,[[5,12]])})))}},{key:"_execCallback",value:function(t){for(var e=arguments.length,r=new Array(e>1?e-1:0),n=1;n<e;n++)r[n-1]=arguments[n];return er(this,void 0,void 0,i.mark((function e(){var n,o,u,a,c;return i.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.method,o=t.times,u=t.ctx,a=t.executed,c=void 0===a?0:a,void 0===o){e.next=10;break}if(!(o>c)){e.next=7;break}return e.next=5,n.call.apply(n,[u].concat(r));case 5:return t.executed=c+1,e.abrupt("return",!0);case 7:return e.abrupt("return",!1);case 10:return e.next=12,n.call.apply(n,[u].concat(r));case 12:return e.abrupt("return",!0);case 13:case"end":return e.stop()}}),e)})))}},{key:"_parseIdentity",value:function(t){if("string"==typeof t){var e,r,n=t.split(/[*#]/)[0],o=t.replace(n,""),i=/#([^*]*)/.exec(o);i&&(e=i[1]||this.defaultGroup);var u=/\*([^#]*)/.exec(o);return u&&u[1]&&(r=parseInt(u[1])),{event:n,group:e,times:r}}return t}}]),t}()}));
//# sourceMappingURL=index.umd.js.map
