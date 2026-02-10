// @discord/embedded-app-sdk@2.4.0 downloaded from https://ga.jspm.io/npm:@discord/embedded-app-sdk@2.4.0/output/index.mjs

var e=typeof globalThis!=="undefined"?globalThis:typeof window!=="undefined"?window:typeof global!=="undefined"?global:typeof self!=="undefined"?self:{};function t(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n={exports:{}};var r;function o(){if(r)return n.exports;r=1;(function(e){var t=Object.prototype.hasOwnProperty,n="~";function r(){}if(Object.create){r.prototype=Object.create(null);(new r).__proto__||(n=false)}
/**
		 * Representation of a single event listener.
		 *
		 * @param {Function} fn The listener function.
		 * @param {*} context The context to invoke the listener with.
		 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
		 * @constructor
		 * @private
		 */function o(e,t,n){this.fn=e;this.context=t;this.once=n||false}
/**
		 * Add a listener for a given event.
		 *
		 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
		 * @param {(String|Symbol)} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {*} context The context to invoke the listener with.
		 * @param {Boolean} once Specify if the listener is a one-time listener.
		 * @returns {EventEmitter}
		 * @private
		 */function i(e,t,r,i,a){if(typeof r!=="function")throw new TypeError("The listener must be a function");var s=new o(r,i||e,a),l=n?n+t:t;e._events[l]?e._events[l].fn?e._events[l]=[e._events[l],s]:e._events[l].push(s):(e._events[l]=s,e._eventsCount++);return e}
/**
		 * Clear event by name.
		 *
		 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
		 * @param {(String|Symbol)} evt The Event name.
		 * @private
		 */function a(e,t){--e._eventsCount===0?e._events=new r:delete e._events[t]}function s(){this._events=new r;this._eventsCount=0}
/**
		 * Return an array listing the events for which the emitter has registered
		 * listeners.
		 *
		 * @returns {Array}
		 * @public
		 */s.prototype.eventNames=function(){var e,r,o=[];if(this._eventsCount===0)return o;for(r in e=this._events)t.call(e,r)&&o.push(n?r.slice(1):r);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(e)):o};
/**
		 * Return the listeners registered for a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @returns {Array} The registered listeners.
		 * @public
		 */s.prototype.listeners=function(e){var t=n?n+e:e,r=this._events[t];if(!r)return[];if(r.fn)return[r.fn];for(var o=0,i=r.length,a=new Array(i);o<i;o++)a[o]=r[o].fn;return a};
/**
		 * Return the number of listeners listening to a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @returns {Number} The number of listeners.
		 * @public
		 */s.prototype.listenerCount=function(e){var t=n?n+e:e,r=this._events[t];return r?r.fn?1:r.length:0};
/**
		 * Calls each of the listeners registered for a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @returns {Boolean} `true` if the event had listeners, else `false`.
		 * @public
		 */s.prototype.emit=function(e,t,r,o,i,a){var s=n?n+e:e;if(!this._events[s])return false;var l,u,c=this._events[s],d=arguments.length;if(c.fn){c.once&&this.removeListener(e,c.fn,void 0,true);switch(d){case 1:return c.fn.call(c.context),true;case 2:return c.fn.call(c.context,t),true;case 3:return c.fn.call(c.context,t,r),true;case 4:return c.fn.call(c.context,t,r,o),true;case 5:return c.fn.call(c.context,t,r,o,i),true;case 6:return c.fn.call(c.context,t,r,o,i,a),true}for(u=1,l=new Array(d-1);u<d;u++)l[u-1]=arguments[u];c.fn.apply(c.context,l)}else{var p,f=c.length;for(u=0;u<f;u++){c[u].once&&this.removeListener(e,c[u].fn,void 0,true);switch(d){case 1:c[u].fn.call(c[u].context);break;case 2:c[u].fn.call(c[u].context,t);break;case 3:c[u].fn.call(c[u].context,t,r);break;case 4:c[u].fn.call(c[u].context,t,r,o);break;default:if(!l)for(p=1,l=new Array(d-1);p<d;p++)l[p-1]=arguments[p];c[u].fn.apply(c[u].context,l)}}}return true};
/**
		 * Add a listener for a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {*} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @public
		 */s.prototype.on=function(e,t,n){return i(this,e,t,n,false)};
/**
		 * Add a one-time listener for a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @param {Function} fn The listener function.
		 * @param {*} [context=this] The context to invoke the listener with.
		 * @returns {EventEmitter} `this`.
		 * @public
		 */s.prototype.once=function(e,t,n){return i(this,e,t,n,true)};
/**
		 * Remove the listeners of a given event.
		 *
		 * @param {(String|Symbol)} event The event name.
		 * @param {Function} fn Only remove the listeners that match this function.
		 * @param {*} context Only remove the listeners that have this context.
		 * @param {Boolean} once Only remove one-time listeners.
		 * @returns {EventEmitter} `this`.
		 * @public
		 */s.prototype.removeListener=function(e,t,r,o){var i=n?n+e:e;if(!this._events[i])return this;if(!t){a(this,i);return this}var s=this._events[i];if(s.fn)s.fn!==t||o&&!s.once||r&&s.context!==r||a(this,i);else{for(var l=0,u=[],c=s.length;l<c;l++)(s[l].fn!==t||o&&!s[l].once||r&&s[l].context!==r)&&u.push(s[l]);u.length?this._events[i]=u.length===1?u[0]:u:a(this,i)}return this};
/**
		 * Remove all listeners, or those of the specified event.
		 *
		 * @param {(String|Symbol)} [event] The event name.
		 * @returns {EventEmitter} `this`.
		 * @public
		 */s.prototype.removeAllListeners=function(e){var t;if(e){t=n?n+e:e;this._events[t]&&a(this,t)}else{this._events=new r;this._eventsCount=0}return this};s.prototype.off=s.prototype.removeListener;s.prototype.addListener=s.prototype.on;s.prefixed=n;s.EventEmitter=s;e.exports=s})(n);return n.exports}var i=o();var a=t(i);var s;(function(e){e.assertEqual=e=>e;function t(e){}e.assertIs=t;function n(e){throw new Error}e.assertNever=n;e.arrayToEnum=e=>{const t={};for(const n of e)t[n]=n;return t};e.getValidEnumValues=t=>{const n=e.objectKeys(t).filter((e=>typeof t[t[e]]!=="number"));const r={};for(const e of n)r[e]=t[e];return e.objectValues(r)};e.objectValues=t=>e.objectKeys(t).map((function(e){return t[e]}));e.objectKeys=typeof Object.keys==="function"?e=>Object.keys(e):e=>{const t=[];for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t};e.find=(e,t)=>{for(const n of e)if(t(n))return n};e.isInteger=typeof Number.isInteger==="function"?e=>Number.isInteger(e):e=>typeof e==="number"&&isFinite(e)&&Math.floor(e)===e;function r(e,t=" | "){return e.map((e=>typeof e==="string"?`'${e}'`:e)).join(t)}e.joinValues=r;e.jsonStringifyReplacer=(e,t)=>typeof t==="bigint"?t.toString():t})(s||(s={}));var l;(function(e){e.mergeShapes=(e,t)=>({...e,...t})})(l||(l={}));const u=s.arrayToEnum(["string","nan","number","integer","float","boolean","date","bigint","symbol","function","undefined","null","array","object","unknown","promise","void","never","map","set"]);const c=e=>{const t=typeof e;switch(t){case"undefined":return u.undefined;case"string":return u.string;case"number":return isNaN(e)?u.nan:u.number;case"boolean":return u.boolean;case"function":return u.function;case"bigint":return u.bigint;case"symbol":return u.symbol;case"object":return Array.isArray(e)?u.array:e===null?u.null:e.then&&typeof e.then==="function"&&e.catch&&typeof e.catch==="function"?u.promise:typeof Map!=="undefined"&&e instanceof Map?u.map:typeof Set!=="undefined"&&e instanceof Set?u.set:typeof Date!=="undefined"&&e instanceof Date?u.date:u.object;default:return u.unknown}};const d=s.arrayToEnum(["invalid_type","invalid_literal","custom","invalid_union","invalid_union_discriminator","invalid_enum_value","unrecognized_keys","invalid_arguments","invalid_return_type","invalid_date","invalid_string","too_small","too_big","invalid_intersection_types","not_multiple_of","not_finite"]);const p=e=>{const t=JSON.stringify(e,null,2);return t.replace(/"([^"]+)":/g,"$1:")};class ZodError extends Error{constructor(e){super();this.issues=[];this.addIssue=e=>{this.issues=[...this.issues,e]};this.addIssues=(e=[])=>{this.issues=[...this.issues,...e]};const t=new.target.prototype;Object.setPrototypeOf?Object.setPrototypeOf(this,t):this.__proto__=t;this.name="ZodError";this.issues=e}get errors(){return this.issues}format(e){const t=e||function(e){return e.message};const n={_errors:[]};const r=e=>{for(const o of e.issues)if(o.code==="invalid_union")o.unionErrors.map(r);else if(o.code==="invalid_return_type")r(o.returnTypeError);else if(o.code==="invalid_arguments")r(o.argumentsError);else if(o.path.length===0)n._errors.push(t(o));else{let e=n;let r=0;while(r<o.path.length){const n=o.path[r];const i=r===o.path.length-1;if(i){e[n]=e[n]||{_errors:[]};e[n]._errors.push(t(o))}else e[n]=e[n]||{_errors:[]};e=e[n];r++}}};r(this);return n}static assert(e){if(!(e instanceof ZodError))throw new Error(`Not a ZodError: ${e}`)}toString(){return this.message}get message(){return JSON.stringify(this.issues,s.jsonStringifyReplacer,2)}get isEmpty(){return this.issues.length===0}flatten(e=e=>e.message){const t={};const n=[];for(const r of this.issues)if(r.path.length>0){t[r.path[0]]=t[r.path[0]]||[];t[r.path[0]].push(e(r))}else n.push(e(r));return{formErrors:n,fieldErrors:t}}get formErrors(){return this.flatten()}}ZodError.create=e=>{const t=new ZodError(e);return t};const f=(e,t)=>{let n;switch(e.code){case d.invalid_type:n=e.received===u.undefined?"Required":`Expected ${e.expected}, received ${e.received}`;break;case d.invalid_literal:n=`Invalid literal value, expected ${JSON.stringify(e.expected,s.jsonStringifyReplacer)}`;break;case d.unrecognized_keys:n=`Unrecognized key(s) in object: ${s.joinValues(e.keys,", ")}`;break;case d.invalid_union:n="Invalid input";break;case d.invalid_union_discriminator:n=`Invalid discriminator value. Expected ${s.joinValues(e.options)}`;break;case d.invalid_enum_value:n=`Invalid enum value. Expected ${s.joinValues(e.options)}, received '${e.received}'`;break;case d.invalid_arguments:n="Invalid function arguments";break;case d.invalid_return_type:n="Invalid function return type";break;case d.invalid_date:n="Invalid date";break;case d.invalid_string:if(typeof e.validation==="object")if("includes"in e.validation){n=`Invalid input: must include "${e.validation.includes}"`;typeof e.validation.position==="number"&&(n=`${n} at one or more positions greater than or equal to ${e.validation.position}`)}else"startsWith"in e.validation?n=`Invalid input: must start with "${e.validation.startsWith}"`:"endsWith"in e.validation?n=`Invalid input: must end with "${e.validation.endsWith}"`:s.assertNever(e.validation);else n=e.validation!=="regex"?`Invalid ${e.validation}`:"Invalid";break;case d.too_small:n=e.type==="array"?`Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)`:e.type==="string"?`String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)`:e.type==="number"?`Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}`:e.type==="date"?`Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}`:"Invalid input";break;case d.too_big:n=e.type==="array"?`Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)`:e.type==="string"?`String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)`:e.type==="number"?`Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="bigint"?`BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}`:e.type==="date"?`Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}`:"Invalid input";break;case d.custom:n="Invalid input";break;case d.invalid_intersection_types:n="Intersection results could not be merged";break;case d.not_multiple_of:n=`Number must be a multiple of ${e.multipleOf}`;break;case d.not_finite:n="Number must be finite";break;default:n=t.defaultError;s.assertNever(e)}return{message:n}};let h=f;function m(e){h=e}function _(){return h}const v=e=>{const{data:t,path:n,errorMaps:r,issueData:o}=e;const i=[...n,...o.path||[]];const a={...o,path:i};if(o.message!==void 0)return{...o,path:i,message:o.message};let s="";const l=r.filter((e=>!!e)).slice().reverse();for(const e of l)s=e(a,{data:t,defaultError:s}).message;return{...o,path:i,message:s}};const g=[];function y(e,t){const n=_();const r=v({issueData:t,data:e.data,path:e.path,errorMaps:[e.common.contextualErrorMap,e.schemaErrorMap,n,n===f?void 0:f].filter((e=>!!e))});e.common.issues.push(r)}class ParseStatus{constructor(){this.value="valid"}dirty(){this.value==="valid"&&(this.value="dirty")}abort(){this.value!=="aborted"&&(this.value="aborted")}static mergeArray(e,t){const n=[];for(const r of t){if(r.status==="aborted")return E;r.status==="dirty"&&e.dirty();n.push(r.value)}return{status:e.value,value:n}}static async mergeObjectAsync(e,t){const n=[];for(const e of t){const t=await e.key;const r=await e.value;n.push({key:t,value:r})}return ParseStatus.mergeObjectSync(e,n)}static mergeObjectSync(e,t){const n={};for(const r of t){const{key:t,value:o}=r;if(t.status==="aborted")return E;if(o.status==="aborted")return E;t.status==="dirty"&&e.dirty();o.status==="dirty"&&e.dirty();t.value==="__proto__"||typeof o.value==="undefined"&&!r.alwaysSet||(n[t.value]=o.value)}return{status:e.value,value:n}}}const E=Object.freeze({status:"aborted"});const b=e=>({status:"dirty",value:e});const T=e=>({status:"valid",value:e});const S=e=>e.status==="aborted";const N=e=>e.status==="dirty";const A=e=>e.status==="valid";const I=e=>typeof Promise!=="undefined"&&e instanceof Promise;function w(e,t,n,r){if(typeof t==="function"?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t.get(e)}function O(e,t,n,r,o){if(typeof t==="function"?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return t.set(e,n),n}typeof SuppressedError==="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};var R;(function(e){e.errToObj=e=>typeof e==="string"?{message:e}:e||{};e.toString=e=>typeof e==="string"?e:e===null||e===void 0?void 0:e.message})(R||(R={}));var Z,D;class ParseInputLazyPath{constructor(e,t,n,r){this._cachedPath=[];this.parent=e;this.data=t;this._path=n;this._key=r}get path(){this._cachedPath.length||(this._key instanceof Array?this._cachedPath.push(...this._path,...this._key):this._cachedPath.push(...this._path,this._key));return this._cachedPath}}const C=(e,t)=>{if(A(t))return{success:true,data:t.value};if(!e.common.issues.length)throw new Error("Validation failed but no issues detected.");return{success:false,get error(){if(this._error)return this._error;const t=new ZodError(e.common.issues);this._error=t;return this._error}}};function L(e){if(!e)return{};const{errorMap:t,invalid_type_error:n,required_error:r,description:o}=e;if(t&&(n||r))throw new Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');if(t)return{errorMap:t,description:o};const i=(t,o)=>{var i,a;const{message:s}=e;return t.code==="invalid_enum_value"?{message:s!==null&&s!==void 0?s:o.defaultError}:typeof o.data==="undefined"?{message:(i=s!==null&&s!==void 0?s:r)!==null&&i!==void 0?i:o.defaultError}:t.code!=="invalid_type"?{message:o.defaultError}:{message:(a=s!==null&&s!==void 0?s:n)!==null&&a!==void 0?a:o.defaultError}};return{errorMap:i,description:o}}class ZodType{constructor(e){this.spa=this.safeParseAsync;this._def=e;this.parse=this.parse.bind(this);this.safeParse=this.safeParse.bind(this);this.parseAsync=this.parseAsync.bind(this);this.safeParseAsync=this.safeParseAsync.bind(this);this.spa=this.spa.bind(this);this.refine=this.refine.bind(this);this.refinement=this.refinement.bind(this);this.superRefine=this.superRefine.bind(this);this.optional=this.optional.bind(this);this.nullable=this.nullable.bind(this);this.nullish=this.nullish.bind(this);this.array=this.array.bind(this);this.promise=this.promise.bind(this);this.or=this.or.bind(this);this.and=this.and.bind(this);this.transform=this.transform.bind(this);this.brand=this.brand.bind(this);this.default=this.default.bind(this);this.catch=this.catch.bind(this);this.describe=this.describe.bind(this);this.pipe=this.pipe.bind(this);this.readonly=this.readonly.bind(this);this.isNullable=this.isNullable.bind(this);this.isOptional=this.isOptional.bind(this)}get description(){return this._def.description}_getType(e){return c(e.data)}_getOrReturnCtx(e,t){return t||{common:e.parent.common,data:e.data,parsedType:c(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}_processInputParams(e){return{status:new ParseStatus,ctx:{common:e.parent.common,data:e.data,parsedType:c(e.data),schemaErrorMap:this._def.errorMap,path:e.path,parent:e.parent}}}_parseSync(e){const t=this._parse(e);if(I(t))throw new Error("Synchronous parse encountered promise.");return t}_parseAsync(e){const t=this._parse(e);return Promise.resolve(t)}parse(e,t){const n=this.safeParse(e,t);if(n.success)return n.data;throw n.error}safeParse(e,t){var n;const r={common:{issues:[],async:(n=t===null||t===void 0?void 0:t.async)!==null&&n!==void 0&&n,contextualErrorMap:t===null||t===void 0?void 0:t.errorMap},path:(t===null||t===void 0?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:c(e)};const o=this._parseSync({data:e,path:r.path,parent:r});return C(r,o)}async parseAsync(e,t){const n=await this.safeParseAsync(e,t);if(n.success)return n.data;throw n.error}async safeParseAsync(e,t){const n={common:{issues:[],contextualErrorMap:t===null||t===void 0?void 0:t.errorMap,async:true},path:(t===null||t===void 0?void 0:t.path)||[],schemaErrorMap:this._def.errorMap,parent:null,data:e,parsedType:c(e)};const r=this._parse({data:e,path:n.path,parent:n});const o=await(I(r)?r:Promise.resolve(r));return C(n,o)}refine(e,t){const n=e=>typeof t==="string"||typeof t==="undefined"?{message:t}:typeof t==="function"?t(e):t;return this._refinement(((t,r)=>{const o=e(t);const i=()=>r.addIssue({code:d.custom,...n(t)});if(typeof Promise!=="undefined"&&o instanceof Promise)return o.then((e=>{if(e)return true;i();return false}));if(o)return true;i();return false}))}refinement(e,t){return this._refinement(((n,r)=>{if(e(n))return true;r.addIssue(typeof t==="function"?t(n,r):t);return false}))}_refinement(e){return new ZodEffects({schema:this,typeName:ae.ZodEffects,effect:{type:"refinement",refinement:e}})}superRefine(e){return this._refinement(e)}optional(){return ZodOptional.create(this,this._def)}nullable(){return ZodNullable.create(this,this._def)}nullish(){return this.nullable().optional()}array(){return ZodArray.create(this,this._def)}promise(){return ZodPromise.create(this,this._def)}or(e){return ZodUnion.create([this,e],this._def)}and(e){return ZodIntersection.create(this,e,this._def)}transform(e){return new ZodEffects({...L(this._def),schema:this,typeName:ae.ZodEffects,effect:{type:"transform",transform:e}})}default(e){const t=typeof e==="function"?e:()=>e;return new ZodDefault({...L(this._def),innerType:this,defaultValue:t,typeName:ae.ZodDefault})}brand(){return new ZodBranded({typeName:ae.ZodBranded,type:this,...L(this._def)})}catch(e){const t=typeof e==="function"?e:()=>e;return new ZodCatch({...L(this._def),innerType:this,catchValue:t,typeName:ae.ZodCatch})}describe(e){const t=this.constructor;return new t({...this._def,description:e})}pipe(e){return ZodPipeline.create(this,e)}readonly(){return ZodReadonly.create(this)}isOptional(){return this.safeParse(void 0).success}isNullable(){return this.safeParse(null).success}}const P=/^c[^\s-]{8,}$/i;const k=/^[0-9a-z]+$/;const x=/^[0-9A-HJKMNP-TV-Z]{26}$/;const U=/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;const M=/^[a-z0-9_-]{21}$/i;const j=/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;const G=/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;const B="^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";let V;const H=/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;const F=/^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/;const K=/^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;const q="((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))";const $=new RegExp(`^${q}$`);function z(e){let t="([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";e.precision?t=`${t}\\.\\d{${e.precision}}`:e.precision==null&&(t=`${t}(\\.\\d+)?`);return t}function Y(e){return new RegExp(`^${z(e)}$`)}function W(e){let t=`${q}T${z(e)}`;const n=[];n.push(e.local?"Z?":"Z");e.offset&&n.push("([+-]\\d{2}:?\\d{2})");t=`${t}(${n.join("|")})`;return new RegExp(`^${t}$`)}function X(e,t){return!(t!=="v4"&&t||!H.test(e))||!(t!=="v6"&&t||!F.test(e))}class ZodString extends ZodType{_parse(e){this._def.coerce&&(e.data=String(e.data));const t=this._getType(e);if(t!==u.string){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.string,received:t.parsedType});return E}const n=new ParseStatus;let r;for(const t of this._def.checks)if(t.kind==="min"){if(e.data.length<t.value){r=this._getOrReturnCtx(e,r);y(r,{code:d.too_small,minimum:t.value,type:"string",inclusive:true,exact:false,message:t.message});n.dirty()}}else if(t.kind==="max"){if(e.data.length>t.value){r=this._getOrReturnCtx(e,r);y(r,{code:d.too_big,maximum:t.value,type:"string",inclusive:true,exact:false,message:t.message});n.dirty()}}else if(t.kind==="length"){const o=e.data.length>t.value;const i=e.data.length<t.value;if(o||i){r=this._getOrReturnCtx(e,r);o?y(r,{code:d.too_big,maximum:t.value,type:"string",inclusive:true,exact:true,message:t.message}):i&&y(r,{code:d.too_small,minimum:t.value,type:"string",inclusive:true,exact:true,message:t.message});n.dirty()}}else if(t.kind==="email"){if(!G.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"email",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="emoji"){V||(V=new RegExp(B,"u"));if(!V.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"emoji",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="uuid"){if(!U.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"uuid",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="nanoid"){if(!M.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"nanoid",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="cuid"){if(!P.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"cuid",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="cuid2"){if(!k.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"cuid2",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="ulid"){if(!x.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"ulid",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="url")try{new URL(e.data)}catch(o){r=this._getOrReturnCtx(e,r);y(r,{validation:"url",code:d.invalid_string,message:t.message});n.dirty()}else if(t.kind==="regex"){t.regex.lastIndex=0;const o=t.regex.test(e.data);if(!o){r=this._getOrReturnCtx(e,r);y(r,{validation:"regex",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="trim")e.data=e.data.trim();else if(t.kind==="includes"){if(!e.data.includes(t.value,t.position)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:{includes:t.value,position:t.position},message:t.message});n.dirty()}}else if(t.kind==="toLowerCase")e.data=e.data.toLowerCase();else if(t.kind==="toUpperCase")e.data=e.data.toUpperCase();else if(t.kind==="startsWith"){if(!e.data.startsWith(t.value)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:{startsWith:t.value},message:t.message});n.dirty()}}else if(t.kind==="endsWith"){if(!e.data.endsWith(t.value)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:{endsWith:t.value},message:t.message});n.dirty()}}else if(t.kind==="datetime"){const o=W(t);if(!o.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:"datetime",message:t.message});n.dirty()}}else if(t.kind==="date"){const o=$;if(!o.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:"date",message:t.message});n.dirty()}}else if(t.kind==="time"){const o=Y(t);if(!o.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{code:d.invalid_string,validation:"time",message:t.message});n.dirty()}}else if(t.kind==="duration"){if(!j.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"duration",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="ip"){if(!X(e.data,t.version)){r=this._getOrReturnCtx(e,r);y(r,{validation:"ip",code:d.invalid_string,message:t.message});n.dirty()}}else if(t.kind==="base64"){if(!K.test(e.data)){r=this._getOrReturnCtx(e,r);y(r,{validation:"base64",code:d.invalid_string,message:t.message});n.dirty()}}else s.assertNever(t);return{status:n.value,value:e.data}}_regex(e,t,n){return this.refinement((t=>e.test(t)),{validation:t,code:d.invalid_string,...R.errToObj(n)})}_addCheck(e){return new ZodString({...this._def,checks:[...this._def.checks,e]})}email(e){return this._addCheck({kind:"email",...R.errToObj(e)})}url(e){return this._addCheck({kind:"url",...R.errToObj(e)})}emoji(e){return this._addCheck({kind:"emoji",...R.errToObj(e)})}uuid(e){return this._addCheck({kind:"uuid",...R.errToObj(e)})}nanoid(e){return this._addCheck({kind:"nanoid",...R.errToObj(e)})}cuid(e){return this._addCheck({kind:"cuid",...R.errToObj(e)})}cuid2(e){return this._addCheck({kind:"cuid2",...R.errToObj(e)})}ulid(e){return this._addCheck({kind:"ulid",...R.errToObj(e)})}base64(e){return this._addCheck({kind:"base64",...R.errToObj(e)})}ip(e){return this._addCheck({kind:"ip",...R.errToObj(e)})}datetime(e){var t,n;return typeof e==="string"?this._addCheck({kind:"datetime",precision:null,offset:false,local:false,message:e}):this._addCheck({kind:"datetime",precision:typeof(e===null||e===void 0?void 0:e.precision)==="undefined"?null:e===null||e===void 0?void 0:e.precision,offset:(t=e===null||e===void 0?void 0:e.offset)!==null&&t!==void 0&&t,local:(n=e===null||e===void 0?void 0:e.local)!==null&&n!==void 0&&n,...R.errToObj(e===null||e===void 0?void 0:e.message)})}date(e){return this._addCheck({kind:"date",message:e})}time(e){return typeof e==="string"?this._addCheck({kind:"time",precision:null,message:e}):this._addCheck({kind:"time",precision:typeof(e===null||e===void 0?void 0:e.precision)==="undefined"?null:e===null||e===void 0?void 0:e.precision,...R.errToObj(e===null||e===void 0?void 0:e.message)})}duration(e){return this._addCheck({kind:"duration",...R.errToObj(e)})}regex(e,t){return this._addCheck({kind:"regex",regex:e,...R.errToObj(t)})}includes(e,t){return this._addCheck({kind:"includes",value:e,position:t===null||t===void 0?void 0:t.position,...R.errToObj(t===null||t===void 0?void 0:t.message)})}startsWith(e,t){return this._addCheck({kind:"startsWith",value:e,...R.errToObj(t)})}endsWith(e,t){return this._addCheck({kind:"endsWith",value:e,...R.errToObj(t)})}min(e,t){return this._addCheck({kind:"min",value:e,...R.errToObj(t)})}max(e,t){return this._addCheck({kind:"max",value:e,...R.errToObj(t)})}length(e,t){return this._addCheck({kind:"length",value:e,...R.errToObj(t)})}
/**
     * @deprecated Use z.string().min(1) instead.
     * @see {@link ZodString.min}
     */nonempty(e){return this.min(1,R.errToObj(e))}trim(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"trim"}]})}toLowerCase(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"toLowerCase"}]})}toUpperCase(){return new ZodString({...this._def,checks:[...this._def.checks,{kind:"toUpperCase"}]})}get isDatetime(){return!!this._def.checks.find((e=>e.kind==="datetime"))}get isDate(){return!!this._def.checks.find((e=>e.kind==="date"))}get isTime(){return!!this._def.checks.find((e=>e.kind==="time"))}get isDuration(){return!!this._def.checks.find((e=>e.kind==="duration"))}get isEmail(){return!!this._def.checks.find((e=>e.kind==="email"))}get isURL(){return!!this._def.checks.find((e=>e.kind==="url"))}get isEmoji(){return!!this._def.checks.find((e=>e.kind==="emoji"))}get isUUID(){return!!this._def.checks.find((e=>e.kind==="uuid"))}get isNANOID(){return!!this._def.checks.find((e=>e.kind==="nanoid"))}get isCUID(){return!!this._def.checks.find((e=>e.kind==="cuid"))}get isCUID2(){return!!this._def.checks.find((e=>e.kind==="cuid2"))}get isULID(){return!!this._def.checks.find((e=>e.kind==="ulid"))}get isIP(){return!!this._def.checks.find((e=>e.kind==="ip"))}get isBase64(){return!!this._def.checks.find((e=>e.kind==="base64"))}get minLength(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxLength(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ZodString.create=e=>{var t;return new ZodString({checks:[],typeName:ae.ZodString,coerce:(t=e===null||e===void 0?void 0:e.coerce)!==null&&t!==void 0&&t,...L(e)})};function J(e,t){const n=(e.toString().split(".")[1]||"").length;const r=(t.toString().split(".")[1]||"").length;const o=n>r?n:r;const i=parseInt(e.toFixed(o).replace(".",""));const a=parseInt(t.toFixed(o).replace(".",""));return i%a/Math.pow(10,o)}class ZodNumber extends ZodType{constructor(){super(...arguments);this.min=this.gte;this.max=this.lte;this.step=this.multipleOf}_parse(e){this._def.coerce&&(e.data=Number(e.data));const t=this._getType(e);if(t!==u.number){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.number,received:t.parsedType});return E}let n;const r=new ParseStatus;for(const t of this._def.checks)if(t.kind==="int"){if(!s.isInteger(e.data)){n=this._getOrReturnCtx(e,n);y(n,{code:d.invalid_type,expected:"integer",received:"float",message:t.message});r.dirty()}}else if(t.kind==="min"){const o=t.inclusive?e.data<t.value:e.data<=t.value;if(o){n=this._getOrReturnCtx(e,n);y(n,{code:d.too_small,minimum:t.value,type:"number",inclusive:t.inclusive,exact:false,message:t.message});r.dirty()}}else if(t.kind==="max"){const o=t.inclusive?e.data>t.value:e.data>=t.value;if(o){n=this._getOrReturnCtx(e,n);y(n,{code:d.too_big,maximum:t.value,type:"number",inclusive:t.inclusive,exact:false,message:t.message});r.dirty()}}else if(t.kind==="multipleOf"){if(J(e.data,t.value)!==0){n=this._getOrReturnCtx(e,n);y(n,{code:d.not_multiple_of,multipleOf:t.value,message:t.message});r.dirty()}}else if(t.kind==="finite"){if(!Number.isFinite(e.data)){n=this._getOrReturnCtx(e,n);y(n,{code:d.not_finite,message:t.message});r.dirty()}}else s.assertNever(t);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,true,R.toString(t))}gt(e,t){return this.setLimit("min",e,false,R.toString(t))}lte(e,t){return this.setLimit("max",e,true,R.toString(t))}lt(e,t){return this.setLimit("max",e,false,R.toString(t))}setLimit(e,t,n,r){return new ZodNumber({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:R.toString(r)}]})}_addCheck(e){return new ZodNumber({...this._def,checks:[...this._def.checks,e]})}int(e){return this._addCheck({kind:"int",message:R.toString(e)})}positive(e){return this._addCheck({kind:"min",value:0,inclusive:false,message:R.toString(e)})}negative(e){return this._addCheck({kind:"max",value:0,inclusive:false,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:0,inclusive:true,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:0,inclusive:true,message:R.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:R.toString(t)})}finite(e){return this._addCheck({kind:"finite",message:R.toString(e)})}safe(e){return this._addCheck({kind:"min",inclusive:true,value:Number.MIN_SAFE_INTEGER,message:R.toString(e)})._addCheck({kind:"max",inclusive:true,value:Number.MAX_SAFE_INTEGER,message:R.toString(e)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}get isInt(){return!!this._def.checks.find((e=>e.kind==="int"||e.kind==="multipleOf"&&s.isInteger(e.value)))}get isFinite(){let e=null,t=null;for(const n of this._def.checks){if(n.kind==="finite"||n.kind==="int"||n.kind==="multipleOf")return true;n.kind==="min"?(t===null||n.value>t)&&(t=n.value):n.kind==="max"&&(e===null||n.value<e)&&(e=n.value)}return Number.isFinite(t)&&Number.isFinite(e)}}ZodNumber.create=e=>new ZodNumber({checks:[],typeName:ae.ZodNumber,coerce:(e===null||e===void 0?void 0:e.coerce)||false,...L(e)});class ZodBigInt extends ZodType{constructor(){super(...arguments);this.min=this.gte;this.max=this.lte}_parse(e){this._def.coerce&&(e.data=BigInt(e.data));const t=this._getType(e);if(t!==u.bigint){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.bigint,received:t.parsedType});return E}let n;const r=new ParseStatus;for(const t of this._def.checks)if(t.kind==="min"){const o=t.inclusive?e.data<t.value:e.data<=t.value;if(o){n=this._getOrReturnCtx(e,n);y(n,{code:d.too_small,type:"bigint",minimum:t.value,inclusive:t.inclusive,message:t.message});r.dirty()}}else if(t.kind==="max"){const o=t.inclusive?e.data>t.value:e.data>=t.value;if(o){n=this._getOrReturnCtx(e,n);y(n,{code:d.too_big,type:"bigint",maximum:t.value,inclusive:t.inclusive,message:t.message});r.dirty()}}else if(t.kind==="multipleOf"){if(e.data%t.value!==BigInt(0)){n=this._getOrReturnCtx(e,n);y(n,{code:d.not_multiple_of,multipleOf:t.value,message:t.message});r.dirty()}}else s.assertNever(t);return{status:r.value,value:e.data}}gte(e,t){return this.setLimit("min",e,true,R.toString(t))}gt(e,t){return this.setLimit("min",e,false,R.toString(t))}lte(e,t){return this.setLimit("max",e,true,R.toString(t))}lt(e,t){return this.setLimit("max",e,false,R.toString(t))}setLimit(e,t,n,r){return new ZodBigInt({...this._def,checks:[...this._def.checks,{kind:e,value:t,inclusive:n,message:R.toString(r)}]})}_addCheck(e){return new ZodBigInt({...this._def,checks:[...this._def.checks,e]})}positive(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:false,message:R.toString(e)})}negative(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:false,message:R.toString(e)})}nonpositive(e){return this._addCheck({kind:"max",value:BigInt(0),inclusive:true,message:R.toString(e)})}nonnegative(e){return this._addCheck({kind:"min",value:BigInt(0),inclusive:true,message:R.toString(e)})}multipleOf(e,t){return this._addCheck({kind:"multipleOf",value:e,message:R.toString(t)})}get minValue(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e}get maxValue(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e}}ZodBigInt.create=e=>{var t;return new ZodBigInt({checks:[],typeName:ae.ZodBigInt,coerce:(t=e===null||e===void 0?void 0:e.coerce)!==null&&t!==void 0&&t,...L(e)})};class ZodBoolean extends ZodType{_parse(e){this._def.coerce&&(e.data=Boolean(e.data));const t=this._getType(e);if(t!==u.boolean){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.boolean,received:t.parsedType});return E}return T(e.data)}}ZodBoolean.create=e=>new ZodBoolean({typeName:ae.ZodBoolean,coerce:(e===null||e===void 0?void 0:e.coerce)||false,...L(e)});class ZodDate extends ZodType{_parse(e){this._def.coerce&&(e.data=new Date(e.data));const t=this._getType(e);if(t!==u.date){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.date,received:t.parsedType});return E}if(isNaN(e.data.getTime())){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_date});return E}const n=new ParseStatus;let r;for(const t of this._def.checks)if(t.kind==="min"){if(e.data.getTime()<t.value){r=this._getOrReturnCtx(e,r);y(r,{code:d.too_small,message:t.message,inclusive:true,exact:false,minimum:t.value,type:"date"});n.dirty()}}else if(t.kind==="max"){if(e.data.getTime()>t.value){r=this._getOrReturnCtx(e,r);y(r,{code:d.too_big,message:t.message,inclusive:true,exact:false,maximum:t.value,type:"date"});n.dirty()}}else s.assertNever(t);return{status:n.value,value:new Date(e.data.getTime())}}_addCheck(e){return new ZodDate({...this._def,checks:[...this._def.checks,e]})}min(e,t){return this._addCheck({kind:"min",value:e.getTime(),message:R.toString(t)})}max(e,t){return this._addCheck({kind:"max",value:e.getTime(),message:R.toString(t)})}get minDate(){let e=null;for(const t of this._def.checks)t.kind==="min"&&(e===null||t.value>e)&&(e=t.value);return e!=null?new Date(e):null}get maxDate(){let e=null;for(const t of this._def.checks)t.kind==="max"&&(e===null||t.value<e)&&(e=t.value);return e!=null?new Date(e):null}}ZodDate.create=e=>new ZodDate({checks:[],coerce:(e===null||e===void 0?void 0:e.coerce)||false,typeName:ae.ZodDate,...L(e)});class ZodSymbol extends ZodType{_parse(e){const t=this._getType(e);if(t!==u.symbol){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.symbol,received:t.parsedType});return E}return T(e.data)}}ZodSymbol.create=e=>new ZodSymbol({typeName:ae.ZodSymbol,...L(e)});class ZodUndefined extends ZodType{_parse(e){const t=this._getType(e);if(t!==u.undefined){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.undefined,received:t.parsedType});return E}return T(e.data)}}ZodUndefined.create=e=>new ZodUndefined({typeName:ae.ZodUndefined,...L(e)});class ZodNull extends ZodType{_parse(e){const t=this._getType(e);if(t!==u.null){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.null,received:t.parsedType});return E}return T(e.data)}}ZodNull.create=e=>new ZodNull({typeName:ae.ZodNull,...L(e)});class ZodAny extends ZodType{constructor(){super(...arguments);this._any=true}_parse(e){return T(e.data)}}ZodAny.create=e=>new ZodAny({typeName:ae.ZodAny,...L(e)});class ZodUnknown extends ZodType{constructor(){super(...arguments);this._unknown=true}_parse(e){return T(e.data)}}ZodUnknown.create=e=>new ZodUnknown({typeName:ae.ZodUnknown,...L(e)});class ZodNever extends ZodType{_parse(e){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.never,received:t.parsedType});return E}}ZodNever.create=e=>new ZodNever({typeName:ae.ZodNever,...L(e)});class ZodVoid extends ZodType{_parse(e){const t=this._getType(e);if(t!==u.undefined){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.void,received:t.parsedType});return E}return T(e.data)}}ZodVoid.create=e=>new ZodVoid({typeName:ae.ZodVoid,...L(e)});class ZodArray extends ZodType{_parse(e){const{ctx:t,status:n}=this._processInputParams(e);const r=this._def;if(t.parsedType!==u.array){y(t,{code:d.invalid_type,expected:u.array,received:t.parsedType});return E}if(r.exactLength!==null){const e=t.data.length>r.exactLength.value;const o=t.data.length<r.exactLength.value;if(e||o){y(t,{code:e?d.too_big:d.too_small,minimum:o?r.exactLength.value:void 0,maximum:e?r.exactLength.value:void 0,type:"array",inclusive:true,exact:true,message:r.exactLength.message});n.dirty()}}if(r.minLength!==null&&t.data.length<r.minLength.value){y(t,{code:d.too_small,minimum:r.minLength.value,type:"array",inclusive:true,exact:false,message:r.minLength.message});n.dirty()}if(r.maxLength!==null&&t.data.length>r.maxLength.value){y(t,{code:d.too_big,maximum:r.maxLength.value,type:"array",inclusive:true,exact:false,message:r.maxLength.message});n.dirty()}if(t.common.async)return Promise.all([...t.data].map(((e,n)=>r.type._parseAsync(new ParseInputLazyPath(t,e,t.path,n))))).then((e=>ParseStatus.mergeArray(n,e)));const o=[...t.data].map(((e,n)=>r.type._parseSync(new ParseInputLazyPath(t,e,t.path,n))));return ParseStatus.mergeArray(n,o)}get element(){return this._def.type}min(e,t){return new ZodArray({...this._def,minLength:{value:e,message:R.toString(t)}})}max(e,t){return new ZodArray({...this._def,maxLength:{value:e,message:R.toString(t)}})}length(e,t){return new ZodArray({...this._def,exactLength:{value:e,message:R.toString(t)}})}nonempty(e){return this.min(1,e)}}ZodArray.create=(e,t)=>new ZodArray({type:e,minLength:null,maxLength:null,exactLength:null,typeName:ae.ZodArray,...L(t)});function Q(e){if(e instanceof ZodObject){const t={};for(const n in e.shape){const r=e.shape[n];t[n]=ZodOptional.create(Q(r))}return new ZodObject({...e._def,shape:()=>t})}return e instanceof ZodArray?new ZodArray({...e._def,type:Q(e.element)}):e instanceof ZodOptional?ZodOptional.create(Q(e.unwrap())):e instanceof ZodNullable?ZodNullable.create(Q(e.unwrap())):e instanceof ZodTuple?ZodTuple.create(e.items.map((e=>Q(e)))):e}class ZodObject extends ZodType{constructor(){super(...arguments);this._cached=null;
/**
         * @deprecated In most cases, this is no longer needed - unknown properties are now silently stripped.
         * If you want to pass through unknown properties, use `.passthrough()` instead.
         */this.nonstrict=this.passthrough;
/**
         * @deprecated Use `.extend` instead
         *  */this.augment=this.extend}_getCached(){if(this._cached!==null)return this._cached;const e=this._def.shape();const t=s.objectKeys(e);return this._cached={shape:e,keys:t}}_parse(e){const t=this._getType(e);if(t!==u.object){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.object,received:t.parsedType});return E}const{status:n,ctx:r}=this._processInputParams(e);const{shape:o,keys:i}=this._getCached();const a=[];if(!(this._def.catchall instanceof ZodNever&&this._def.unknownKeys==="strip"))for(const e in r.data)i.includes(e)||a.push(e);const s=[];for(const e of i){const t=o[e];const n=r.data[e];s.push({key:{status:"valid",value:e},value:t._parse(new ParseInputLazyPath(r,n,r.path,e)),alwaysSet:e in r.data})}if(this._def.catchall instanceof ZodNever){const e=this._def.unknownKeys;if(e==="passthrough")for(const e of a)s.push({key:{status:"valid",value:e},value:{status:"valid",value:r.data[e]}});else if(e==="strict"){if(a.length>0){y(r,{code:d.unrecognized_keys,keys:a});n.dirty()}}else if(e!=="strip")throw new Error("Internal ZodObject error: invalid unknownKeys value.")}else{const e=this._def.catchall;for(const t of a){const n=r.data[t];s.push({key:{status:"valid",value:t},value:e._parse(new ParseInputLazyPath(r,n,r.path,t)),alwaysSet:t in r.data})}}return r.common.async?Promise.resolve().then((async()=>{const e=[];for(const t of s){const n=await t.key;const r=await t.value;e.push({key:n,value:r,alwaysSet:t.alwaysSet})}return e})).then((e=>ParseStatus.mergeObjectSync(n,e))):ParseStatus.mergeObjectSync(n,s)}get shape(){return this._def.shape()}strict(e){R.errToObj;return new ZodObject({...this._def,unknownKeys:"strict",...e!==void 0?{errorMap:(t,n)=>{var r,o,i,a;const s=(i=(o=(r=this._def).errorMap)===null||o===void 0?void 0:o.call(r,t,n).message)!==null&&i!==void 0?i:n.defaultError;return t.code==="unrecognized_keys"?{message:(a=R.errToObj(e).message)!==null&&a!==void 0?a:s}:{message:s}}}:{}})}strip(){return new ZodObject({...this._def,unknownKeys:"strip"})}passthrough(){return new ZodObject({...this._def,unknownKeys:"passthrough"})}extend(e){return new ZodObject({...this._def,shape:()=>({...this._def.shape(),...e})})}merge(e){const t=new ZodObject({unknownKeys:e._def.unknownKeys,catchall:e._def.catchall,shape:()=>({...this._def.shape(),...e._def.shape()}),typeName:ae.ZodObject});return t}setKey(e,t){return this.augment({[e]:t})}catchall(e){return new ZodObject({...this._def,catchall:e})}pick(e){const t={};s.objectKeys(e).forEach((n=>{e[n]&&this.shape[n]&&(t[n]=this.shape[n])}));return new ZodObject({...this._def,shape:()=>t})}omit(e){const t={};s.objectKeys(this.shape).forEach((n=>{e[n]||(t[n]=this.shape[n])}));return new ZodObject({...this._def,shape:()=>t})}
/**
     * @deprecated
     */deepPartial(){return Q(this)}partial(e){const t={};s.objectKeys(this.shape).forEach((n=>{const r=this.shape[n];e&&!e[n]?t[n]=r:t[n]=r.optional()}));return new ZodObject({...this._def,shape:()=>t})}required(e){const t={};s.objectKeys(this.shape).forEach((n=>{if(e&&!e[n])t[n]=this.shape[n];else{const e=this.shape[n];let r=e;while(r instanceof ZodOptional)r=r._def.innerType;t[n]=r}}));return new ZodObject({...this._def,shape:()=>t})}keyof(){return ne(s.objectKeys(this.shape))}}ZodObject.create=(e,t)=>new ZodObject({shape:()=>e,unknownKeys:"strip",catchall:ZodNever.create(),typeName:ae.ZodObject,...L(t)});ZodObject.strictCreate=(e,t)=>new ZodObject({shape:()=>e,unknownKeys:"strict",catchall:ZodNever.create(),typeName:ae.ZodObject,...L(t)});ZodObject.lazycreate=(e,t)=>new ZodObject({shape:e,unknownKeys:"strip",catchall:ZodNever.create(),typeName:ae.ZodObject,...L(t)});class ZodUnion extends ZodType{_parse(e){const{ctx:t}=this._processInputParams(e);const n=this._def.options;function r(e){for(const t of e)if(t.result.status==="valid")return t.result;for(const n of e)if(n.result.status==="dirty"){t.common.issues.push(...n.ctx.common.issues);return n.result}const n=e.map((e=>new ZodError(e.ctx.common.issues)));y(t,{code:d.invalid_union,unionErrors:n});return E}if(t.common.async)return Promise.all(n.map((async e=>{const n={...t,common:{...t.common,issues:[]},parent:null};return{result:await e._parseAsync({data:t.data,path:t.path,parent:n}),ctx:n}}))).then(r);{let e;const r=[];for(const o of n){const n={...t,common:{...t.common,issues:[]},parent:null};const i=o._parseSync({data:t.data,path:t.path,parent:n});if(i.status==="valid")return i;i.status!=="dirty"||e||(e={result:i,ctx:n});n.common.issues.length&&r.push(n.common.issues)}if(e){t.common.issues.push(...e.ctx.common.issues);return e.result}const o=r.map((e=>new ZodError(e)));y(t,{code:d.invalid_union,unionErrors:o});return E}}get options(){return this._def.options}}ZodUnion.create=(e,t)=>new ZodUnion({options:e,typeName:ae.ZodUnion,...L(t)});const ee=e=>e instanceof ZodLazy?ee(e.schema):e instanceof ZodEffects?ee(e.innerType()):e instanceof ZodLiteral?[e.value]:e instanceof ZodEnum?e.options:e instanceof ZodNativeEnum?s.objectValues(e.enum):e instanceof ZodDefault?ee(e._def.innerType):e instanceof ZodUndefined?[void 0]:e instanceof ZodNull?[null]:e instanceof ZodOptional?[void 0,...ee(e.unwrap())]:e instanceof ZodNullable?[null,...ee(e.unwrap())]:e instanceof ZodBranded||e instanceof ZodReadonly?ee(e.unwrap()):e instanceof ZodCatch?ee(e._def.innerType):[];class ZodDiscriminatedUnion extends ZodType{_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==u.object){y(t,{code:d.invalid_type,expected:u.object,received:t.parsedType});return E}const n=this.discriminator;const r=t.data[n];const o=this.optionsMap.get(r);if(!o){y(t,{code:d.invalid_union_discriminator,options:Array.from(this.optionsMap.keys()),path:[n]});return E}return t.common.async?o._parseAsync({data:t.data,path:t.path,parent:t}):o._parseSync({data:t.data,path:t.path,parent:t})}get discriminator(){return this._def.discriminator}get options(){return this._def.options}get optionsMap(){return this._def.optionsMap}
/**
     * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
     * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
     * have a different value for each object in the union.
     * @param discriminator the name of the discriminator property
     * @param types an array of object schemas
     * @param params
     */static create(e,t,n){const r=new Map;for(const n of t){const t=ee(n.shape[e]);if(!t.length)throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);for(const o of t){if(r.has(o))throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);r.set(o,n)}}return new ZodDiscriminatedUnion({typeName:ae.ZodDiscriminatedUnion,discriminator:e,options:t,optionsMap:r,...L(n)})}}function te(e,t){const n=c(e);const r=c(t);if(e===t)return{valid:true,data:e};if(n===u.object&&r===u.object){const n=s.objectKeys(t);const r=s.objectKeys(e).filter((e=>n.indexOf(e)!==-1));const o={...e,...t};for(const n of r){const r=te(e[n],t[n]);if(!r.valid)return{valid:false};o[n]=r.data}return{valid:true,data:o}}if(n===u.array&&r===u.array){if(e.length!==t.length)return{valid:false};const n=[];for(let r=0;r<e.length;r++){const o=e[r];const i=t[r];const a=te(o,i);if(!a.valid)return{valid:false};n.push(a.data)}return{valid:true,data:n}}return n===u.date&&r===u.date&&+e===+t?{valid:true,data:e}:{valid:false}}class ZodIntersection extends ZodType{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);const r=(e,r)=>{if(S(e)||S(r))return E;const o=te(e.value,r.value);if(!o.valid){y(n,{code:d.invalid_intersection_types});return E}(N(e)||N(r))&&t.dirty();return{status:t.value,value:o.data}};return n.common.async?Promise.all([this._def.left._parseAsync({data:n.data,path:n.path,parent:n}),this._def.right._parseAsync({data:n.data,path:n.path,parent:n})]).then((([e,t])=>r(e,t))):r(this._def.left._parseSync({data:n.data,path:n.path,parent:n}),this._def.right._parseSync({data:n.data,path:n.path,parent:n}))}}ZodIntersection.create=(e,t,n)=>new ZodIntersection({left:e,right:t,typeName:ae.ZodIntersection,...L(n)});class ZodTuple extends ZodType{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.array){y(n,{code:d.invalid_type,expected:u.array,received:n.parsedType});return E}if(n.data.length<this._def.items.length){y(n,{code:d.too_small,minimum:this._def.items.length,inclusive:true,exact:false,type:"array"});return E}const r=this._def.rest;if(!r&&n.data.length>this._def.items.length){y(n,{code:d.too_big,maximum:this._def.items.length,inclusive:true,exact:false,type:"array"});t.dirty()}const o=[...n.data].map(((e,t)=>{const r=this._def.items[t]||this._def.rest;return r?r._parse(new ParseInputLazyPath(n,e,n.path,t)):null})).filter((e=>!!e));return n.common.async?Promise.all(o).then((e=>ParseStatus.mergeArray(t,e))):ParseStatus.mergeArray(t,o)}get items(){return this._def.items}rest(e){return new ZodTuple({...this._def,rest:e})}}ZodTuple.create=(e,t)=>{if(!Array.isArray(e))throw new Error("You must pass an array of schemas to z.tuple([ ... ])");return new ZodTuple({items:e,typeName:ae.ZodTuple,rest:null,...L(t)})};class ZodRecord extends ZodType{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.object){y(n,{code:d.invalid_type,expected:u.object,received:n.parsedType});return E}const r=[];const o=this._def.keyType;const i=this._def.valueType;for(const e in n.data)r.push({key:o._parse(new ParseInputLazyPath(n,e,n.path,e)),value:i._parse(new ParseInputLazyPath(n,n.data[e],n.path,e)),alwaysSet:e in n.data});return n.common.async?ParseStatus.mergeObjectAsync(t,r):ParseStatus.mergeObjectSync(t,r)}get element(){return this._def.valueType}static create(e,t,n){return new ZodRecord(t instanceof ZodType?{keyType:e,valueType:t,typeName:ae.ZodRecord,...L(n)}:{keyType:ZodString.create(),valueType:e,typeName:ae.ZodRecord,...L(t)})}}class ZodMap extends ZodType{get keySchema(){return this._def.keyType}get valueSchema(){return this._def.valueType}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.map){y(n,{code:d.invalid_type,expected:u.map,received:n.parsedType});return E}const r=this._def.keyType;const o=this._def.valueType;const i=[...n.data.entries()].map((([e,t],i)=>({key:r._parse(new ParseInputLazyPath(n,e,n.path,[i,"key"])),value:o._parse(new ParseInputLazyPath(n,t,n.path,[i,"value"]))})));if(n.common.async){const e=new Map;return Promise.resolve().then((async()=>{for(const n of i){const r=await n.key;const o=await n.value;if(r.status==="aborted"||o.status==="aborted")return E;r.status!=="dirty"&&o.status!=="dirty"||t.dirty();e.set(r.value,o.value)}return{status:t.value,value:e}}))}{const e=new Map;for(const n of i){const r=n.key;const o=n.value;if(r.status==="aborted"||o.status==="aborted")return E;r.status!=="dirty"&&o.status!=="dirty"||t.dirty();e.set(r.value,o.value)}return{status:t.value,value:e}}}}ZodMap.create=(e,t,n)=>new ZodMap({valueType:t,keyType:e,typeName:ae.ZodMap,...L(n)});class ZodSet extends ZodType{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.parsedType!==u.set){y(n,{code:d.invalid_type,expected:u.set,received:n.parsedType});return E}const r=this._def;if(r.minSize!==null&&n.data.size<r.minSize.value){y(n,{code:d.too_small,minimum:r.minSize.value,type:"set",inclusive:true,exact:false,message:r.minSize.message});t.dirty()}if(r.maxSize!==null&&n.data.size>r.maxSize.value){y(n,{code:d.too_big,maximum:r.maxSize.value,type:"set",inclusive:true,exact:false,message:r.maxSize.message});t.dirty()}const o=this._def.valueType;function i(e){const n=new Set;for(const r of e){if(r.status==="aborted")return E;r.status==="dirty"&&t.dirty();n.add(r.value)}return{status:t.value,value:n}}const a=[...n.data.values()].map(((e,t)=>o._parse(new ParseInputLazyPath(n,e,n.path,t))));return n.common.async?Promise.all(a).then((e=>i(e))):i(a)}min(e,t){return new ZodSet({...this._def,minSize:{value:e,message:R.toString(t)}})}max(e,t){return new ZodSet({...this._def,maxSize:{value:e,message:R.toString(t)}})}size(e,t){return this.min(e,t).max(e,t)}nonempty(e){return this.min(1,e)}}ZodSet.create=(e,t)=>new ZodSet({valueType:e,minSize:null,maxSize:null,typeName:ae.ZodSet,...L(t)});class ZodFunction extends ZodType{constructor(){super(...arguments);this.validate=this.implement}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==u.function){y(t,{code:d.invalid_type,expected:u.function,received:t.parsedType});return E}function n(e,n){return v({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,_(),f].filter((e=>!!e)),issueData:{code:d.invalid_arguments,argumentsError:n}})}function r(e,n){return v({data:e,path:t.path,errorMaps:[t.common.contextualErrorMap,t.schemaErrorMap,_(),f].filter((e=>!!e)),issueData:{code:d.invalid_return_type,returnTypeError:n}})}const o={errorMap:t.common.contextualErrorMap};const i=t.data;if(this._def.returns instanceof ZodPromise){const e=this;return T((async function(...t){const a=new ZodError([]);const s=await e._def.args.parseAsync(t,o).catch((e=>{a.addIssue(n(t,e));throw a}));const l=await Reflect.apply(i,this,s);const u=await e._def.returns._def.type.parseAsync(l,o).catch((e=>{a.addIssue(r(l,e));throw a}));return u}))}{const e=this;return T((function(...t){const a=e._def.args.safeParse(t,o);if(!a.success)throw new ZodError([n(t,a.error)]);const s=Reflect.apply(i,this,a.data);const l=e._def.returns.safeParse(s,o);if(!l.success)throw new ZodError([r(s,l.error)]);return l.data}))}}parameters(){return this._def.args}returnType(){return this._def.returns}args(...e){return new ZodFunction({...this._def,args:ZodTuple.create(e).rest(ZodUnknown.create())})}returns(e){return new ZodFunction({...this._def,returns:e})}implement(e){const t=this.parse(e);return t}strictImplement(e){const t=this.parse(e);return t}static create(e,t,n){return new ZodFunction({args:e||ZodTuple.create([]).rest(ZodUnknown.create()),returns:t||ZodUnknown.create(),typeName:ae.ZodFunction,...L(n)})}}class ZodLazy extends ZodType{get schema(){return this._def.getter()}_parse(e){const{ctx:t}=this._processInputParams(e);const n=this._def.getter();return n._parse({data:t.data,path:t.path,parent:t})}}ZodLazy.create=(e,t)=>new ZodLazy({getter:e,typeName:ae.ZodLazy,...L(t)});class ZodLiteral extends ZodType{_parse(e){if(e.data!==this._def.value){const t=this._getOrReturnCtx(e);y(t,{received:t.data,code:d.invalid_literal,expected:this._def.value});return E}return{status:"valid",value:e.data}}get value(){return this._def.value}}ZodLiteral.create=(e,t)=>new ZodLiteral({value:e,typeName:ae.ZodLiteral,...L(t)});function ne(e,t){return new ZodEnum({values:e,typeName:ae.ZodEnum,...L(t)})}class ZodEnum extends ZodType{constructor(){super(...arguments);Z.set(this,void 0)}_parse(e){if(typeof e.data!=="string"){const t=this._getOrReturnCtx(e);const n=this._def.values;y(t,{expected:s.joinValues(n),received:t.parsedType,code:d.invalid_type});return E}w(this,Z)||O(this,Z,new Set(this._def.values));if(!w(this,Z).has(e.data)){const t=this._getOrReturnCtx(e);const n=this._def.values;y(t,{received:t.data,code:d.invalid_enum_value,options:n});return E}return T(e.data)}get options(){return this._def.values}get enum(){const e={};for(const t of this._def.values)e[t]=t;return e}get Values(){const e={};for(const t of this._def.values)e[t]=t;return e}get Enum(){const e={};for(const t of this._def.values)e[t]=t;return e}extract(e,t=this._def){return ZodEnum.create(e,{...this._def,...t})}exclude(e,t=this._def){return ZodEnum.create(this.options.filter((t=>!e.includes(t))),{...this._def,...t})}}Z=new WeakMap;ZodEnum.create=ne;class ZodNativeEnum extends ZodType{constructor(){super(...arguments);D.set(this,void 0)}_parse(e){const t=s.getValidEnumValues(this._def.values);const n=this._getOrReturnCtx(e);if(n.parsedType!==u.string&&n.parsedType!==u.number){const e=s.objectValues(t);y(n,{expected:s.joinValues(e),received:n.parsedType,code:d.invalid_type});return E}w(this,D)||O(this,D,new Set(s.getValidEnumValues(this._def.values)));if(!w(this,D).has(e.data)){const e=s.objectValues(t);y(n,{received:n.data,code:d.invalid_enum_value,options:e});return E}return T(e.data)}get enum(){return this._def.values}}D=new WeakMap;ZodNativeEnum.create=(e,t)=>new ZodNativeEnum({values:e,typeName:ae.ZodNativeEnum,...L(t)});class ZodPromise extends ZodType{unwrap(){return this._def.type}_parse(e){const{ctx:t}=this._processInputParams(e);if(t.parsedType!==u.promise&&t.common.async===false){y(t,{code:d.invalid_type,expected:u.promise,received:t.parsedType});return E}const n=t.parsedType===u.promise?t.data:Promise.resolve(t.data);return T(n.then((e=>this._def.type.parseAsync(e,{path:t.path,errorMap:t.common.contextualErrorMap}))))}}ZodPromise.create=(e,t)=>new ZodPromise({type:e,typeName:ae.ZodPromise,...L(t)});class ZodEffects extends ZodType{innerType(){return this._def.schema}sourceType(){return this._def.schema._def.typeName===ae.ZodEffects?this._def.schema.sourceType():this._def.schema}_parse(e){const{status:t,ctx:n}=this._processInputParams(e);const r=this._def.effect||null;const o={addIssue:e=>{y(n,e);e.fatal?t.abort():t.dirty()},get path(){return n.path}};o.addIssue=o.addIssue.bind(o);if(r.type==="preprocess"){const e=r.transform(n.data,o);if(n.common.async)return Promise.resolve(e).then((async e=>{if(t.value==="aborted")return E;const r=await this._def.schema._parseAsync({data:e,path:n.path,parent:n});return r.status==="aborted"?E:r.status==="dirty"||t.value==="dirty"?b(r.value):r}));{if(t.value==="aborted")return E;const r=this._def.schema._parseSync({data:e,path:n.path,parent:n});return r.status==="aborted"?E:r.status==="dirty"||t.value==="dirty"?b(r.value):r}}if(r.type==="refinement"){const e=e=>{const t=r.refinement(e,o);if(n.common.async)return Promise.resolve(t);if(t instanceof Promise)throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");return e};if(n.common.async===false){const r=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(r.status==="aborted")return E;r.status==="dirty"&&t.dirty();e(r.value);return{status:t.value,value:r.value}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((n=>{if(n.status==="aborted")return E;n.status==="dirty"&&t.dirty();return e(n.value).then((()=>({status:t.value,value:n.value})))}))}if(r.type==="transform"){if(n.common.async===false){const e=this._def.schema._parseSync({data:n.data,path:n.path,parent:n});if(!A(e))return e;const i=r.transform(e.value,o);if(i instanceof Promise)throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");return{status:t.value,value:i}}return this._def.schema._parseAsync({data:n.data,path:n.path,parent:n}).then((e=>A(e)?Promise.resolve(r.transform(e.value,o)).then((e=>({status:t.value,value:e}))):e))}s.assertNever(r)}}ZodEffects.create=(e,t,n)=>new ZodEffects({schema:e,typeName:ae.ZodEffects,effect:t,...L(n)});ZodEffects.createWithPreprocess=(e,t,n)=>new ZodEffects({schema:t,effect:{type:"preprocess",transform:e},typeName:ae.ZodEffects,...L(n)});class ZodOptional extends ZodType{_parse(e){const t=this._getType(e);return t===u.undefined?T(void 0):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ZodOptional.create=(e,t)=>new ZodOptional({innerType:e,typeName:ae.ZodOptional,...L(t)});class ZodNullable extends ZodType{_parse(e){const t=this._getType(e);return t===u.null?T(null):this._def.innerType._parse(e)}unwrap(){return this._def.innerType}}ZodNullable.create=(e,t)=>new ZodNullable({innerType:e,typeName:ae.ZodNullable,...L(t)});class ZodDefault extends ZodType{_parse(e){const{ctx:t}=this._processInputParams(e);let n=t.data;t.parsedType===u.undefined&&(n=this._def.defaultValue());return this._def.innerType._parse({data:n,path:t.path,parent:t})}removeDefault(){return this._def.innerType}}ZodDefault.create=(e,t)=>new ZodDefault({innerType:e,typeName:ae.ZodDefault,defaultValue:typeof t.default==="function"?t.default:()=>t.default,...L(t)});class ZodCatch extends ZodType{_parse(e){const{ctx:t}=this._processInputParams(e);const n={...t,common:{...t.common,issues:[]}};const r=this._def.innerType._parse({data:n.data,path:n.path,parent:{...n}});return I(r)?r.then((e=>({status:"valid",value:e.status==="valid"?e.value:this._def.catchValue({get error(){return new ZodError(n.common.issues)},input:n.data})}))):{status:"valid",value:r.status==="valid"?r.value:this._def.catchValue({get error(){return new ZodError(n.common.issues)},input:n.data})}}removeCatch(){return this._def.innerType}}ZodCatch.create=(e,t)=>new ZodCatch({innerType:e,typeName:ae.ZodCatch,catchValue:typeof t.catch==="function"?t.catch:()=>t.catch,...L(t)});class ZodNaN extends ZodType{_parse(e){const t=this._getType(e);if(t!==u.nan){const t=this._getOrReturnCtx(e);y(t,{code:d.invalid_type,expected:u.nan,received:t.parsedType});return E}return{status:"valid",value:e.data}}}ZodNaN.create=e=>new ZodNaN({typeName:ae.ZodNaN,...L(e)});const re=Symbol("zod_brand");class ZodBranded extends ZodType{_parse(e){const{ctx:t}=this._processInputParams(e);const n=t.data;return this._def.type._parse({data:n,path:t.path,parent:t})}unwrap(){return this._def.type}}class ZodPipeline extends ZodType{_parse(e){const{status:t,ctx:n}=this._processInputParams(e);if(n.common.async){const e=async()=>{const e=await this._def.in._parseAsync({data:n.data,path:n.path,parent:n});if(e.status==="aborted")return E;if(e.status==="dirty"){t.dirty();return b(e.value)}return this._def.out._parseAsync({data:e.value,path:n.path,parent:n})};return e()}{const e=this._def.in._parseSync({data:n.data,path:n.path,parent:n});if(e.status==="aborted")return E;if(e.status==="dirty"){t.dirty();return{status:"dirty",value:e.value}}return this._def.out._parseSync({data:e.value,path:n.path,parent:n})}}static create(e,t){return new ZodPipeline({in:e,out:t,typeName:ae.ZodPipeline})}}class ZodReadonly extends ZodType{_parse(e){const t=this._def.innerType._parse(e);const n=e=>{A(e)&&(e.value=Object.freeze(e.value));return e};return I(t)?t.then((e=>n(e))):n(t)}unwrap(){return this._def.innerType}}ZodReadonly.create=(e,t)=>new ZodReadonly({innerType:e,typeName:ae.ZodReadonly,...L(t)});function oe(e,t={}
/**
 * @deprecated
 *
 * Pass `fatal` into the params object instead:
 *
 * ```ts
 * z.string().custom((val) => val.length > 5, { fatal: false })
 * ```
 *
 */,n){return e?ZodAny.create().superRefine(((r,o)=>{var i,a;if(!e(r)){const e=typeof t==="function"?t(r):typeof t==="string"?{message:t}:t;const s=(a=(i=e.fatal)!==null&&i!==void 0?i:n)===null||a===void 0||a;const l=typeof e==="string"?{message:e}:e;o.addIssue({code:"custom",...l,fatal:s})}})):ZodAny.create()}const ie={object:ZodObject.lazycreate};var ae;(function(e){e.ZodString="ZodString";e.ZodNumber="ZodNumber";e.ZodNaN="ZodNaN";e.ZodBigInt="ZodBigInt";e.ZodBoolean="ZodBoolean";e.ZodDate="ZodDate";e.ZodSymbol="ZodSymbol";e.ZodUndefined="ZodUndefined";e.ZodNull="ZodNull";e.ZodAny="ZodAny";e.ZodUnknown="ZodUnknown";e.ZodNever="ZodNever";e.ZodVoid="ZodVoid";e.ZodArray="ZodArray";e.ZodObject="ZodObject";e.ZodUnion="ZodUnion";e.ZodDiscriminatedUnion="ZodDiscriminatedUnion";e.ZodIntersection="ZodIntersection";e.ZodTuple="ZodTuple";e.ZodRecord="ZodRecord";e.ZodMap="ZodMap";e.ZodSet="ZodSet";e.ZodFunction="ZodFunction";e.ZodLazy="ZodLazy";e.ZodLiteral="ZodLiteral";e.ZodEnum="ZodEnum";e.ZodEffects="ZodEffects";e.ZodNativeEnum="ZodNativeEnum";e.ZodOptional="ZodOptional";e.ZodNullable="ZodNullable";e.ZodDefault="ZodDefault";e.ZodCatch="ZodCatch";e.ZodPromise="ZodPromise";e.ZodBranded="ZodBranded";e.ZodPipeline="ZodPipeline";e.ZodReadonly="ZodReadonly"})(ae||(ae={}));const se=(e,t={message:`Input not instance of ${e.name}`})=>oe((t=>t instanceof e),t);const le=ZodString.create;const ue=ZodNumber.create;const ce=ZodNaN.create;const de=ZodBigInt.create;const pe=ZodBoolean.create;const fe=ZodDate.create;const he=ZodSymbol.create;const me=ZodUndefined.create;const _e=ZodNull.create;const ve=ZodAny.create;const ge=ZodUnknown.create;const ye=ZodNever.create;const Ee=ZodVoid.create;const be=ZodArray.create;const Te=ZodObject.create;const Se=ZodObject.strictCreate;const Ne=ZodUnion.create;const Ae=ZodDiscriminatedUnion.create;const Ie=ZodIntersection.create;const we=ZodTuple.create;const Oe=ZodRecord.create;const Re=ZodMap.create;const Ze=ZodSet.create;const De=ZodFunction.create;const Ce=ZodLazy.create;const Le=ZodLiteral.create;const Pe=ZodEnum.create;const ke=ZodNativeEnum.create;const xe=ZodPromise.create;const Ue=ZodEffects.create;const Me=ZodOptional.create;const je=ZodNullable.create;const Ge=ZodEffects.createWithPreprocess;const Be=ZodPipeline.create;const Ve=()=>le().optional();const He=()=>ue().optional();const Fe=()=>pe().optional();const Ke={string:e=>ZodString.create({...e,coerce:true}),number:e=>ZodNumber.create({...e,coerce:true}),boolean:e=>ZodBoolean.create({...e,coerce:true}),bigint:e=>ZodBigInt.create({...e,coerce:true}),date:e=>ZodDate.create({...e,coerce:true})};const qe=E;var $e=Object.freeze({__proto__:null,defaultErrorMap:f,setErrorMap:m,getErrorMap:_,makeIssue:v,EMPTY_PATH:g,addIssueToContext:y,ParseStatus:ParseStatus,INVALID:E,DIRTY:b,OK:T,isAborted:S,isDirty:N,isValid:A,isAsync:I,get util(){return s},get objectUtil(){return l},ZodParsedType:u,getParsedType:c,ZodType:ZodType,datetimeRegex:W,ZodString:ZodString,ZodNumber:ZodNumber,ZodBigInt:ZodBigInt,ZodBoolean:ZodBoolean,ZodDate:ZodDate,ZodSymbol:ZodSymbol,ZodUndefined:ZodUndefined,ZodNull:ZodNull,ZodAny:ZodAny,ZodUnknown:ZodUnknown,ZodNever:ZodNever,ZodVoid:ZodVoid,ZodArray:ZodArray,ZodObject:ZodObject,ZodUnion:ZodUnion,ZodDiscriminatedUnion:ZodDiscriminatedUnion,ZodIntersection:ZodIntersection,ZodTuple:ZodTuple,ZodRecord:ZodRecord,ZodMap:ZodMap,ZodSet:ZodSet,ZodFunction:ZodFunction,ZodLazy:ZodLazy,ZodLiteral:ZodLiteral,ZodEnum:ZodEnum,ZodNativeEnum:ZodNativeEnum,ZodPromise:ZodPromise,ZodEffects:ZodEffects,ZodTransformer:ZodEffects,ZodOptional:ZodOptional,ZodNullable:ZodNullable,ZodDefault:ZodDefault,ZodCatch:ZodCatch,ZodNaN:ZodNaN,BRAND:re,ZodBranded:ZodBranded,ZodPipeline:ZodPipeline,ZodReadonly:ZodReadonly,custom:oe,Schema:ZodType,ZodSchema:ZodType,late:ie,get ZodFirstPartyTypeKind(){return ae},coerce:Ke,any:ve,array:be,bigint:de,boolean:pe,date:fe,discriminatedUnion:Ae,effect:Ue,enum:Pe,function:De,instanceof:se,intersection:Ie,lazy:Ce,literal:Le,map:Re,nan:ce,nativeEnum:ke,never:ye,null:_e,nullable:je,number:ue,object:Te,oboolean:Fe,onumber:He,optional:Me,ostring:Ve,pipeline:Be,preprocess:Ge,promise:xe,record:Oe,set:Ze,strictObject:Se,string:le,symbol:he,transformer:Ue,tuple:we,undefined:me,union:Ne,unknown:ge,void:Ee,NEVER:qe,ZodIssueCode:d,quotelessJson:p,ZodError:ZodError});var ze={exports:{}};var Ye;function We(){if(Ye)return ze.exports;Ye=1;(function(e){var t=function(e){var n=1e7,r=7,o=9007199254740992,i=f(o),a="0123456789abcdefghijklmnopqrstuvwxyz";var s=typeof BigInt==="function";function l(e,t,n,r){return typeof e==="undefined"?l[0]:typeof t!=="undefined"&&(+t!==10||n)?J(e,t,n,r):ie(e)}function u(e,t){this.value=e;this.sign=t;this.isSmall=false}u.prototype=Object.create(l.prototype);function c(e){this.value=e;this.sign=e<0;this.isSmall=true}c.prototype=Object.create(l.prototype);function d(e){this.value=e}d.prototype=Object.create(l.prototype);function p(e){return-o<e&&e<o}function f(e){return e<1e7?[e]:e<1e14?[e%1e7,Math.floor(e/1e7)]:[e%1e7,Math.floor(e/1e7)%1e7,Math.floor(e/1e14)]}function h(e){m(e);var t=e.length;if(t<4&&k(e,i)<0)switch(t){case 0:return 0;case 1:return e[0];case 2:return e[0]+e[1]*n;default:return e[0]+(e[1]+e[2]*n)*n}return e}function m(e){var t=e.length;while(e[--t]===0);e.length=t+1}function _(e){var t=new Array(e);var n=-1;while(++n<e)t[n]=0;return t}function v(e){return e>0?Math.floor(e):Math.ceil(e)}function g(e,t){var r,o,i=e.length,a=t.length,s=new Array(i),l=0,u=n;for(o=0;o<a;o++){r=e[o]+t[o]+l;l=r>=u?1:0;s[o]=r-l*u}while(o<i){r=e[o]+l;l=r===u?1:0;s[o++]=r-l*u}l>0&&s.push(l);return s}function y(e,t){return e.length>=t.length?g(e,t):g(t,e)}function E(e,t){var r,o,i=e.length,a=new Array(i),s=n;for(o=0;o<i;o++){r=e[o]-s+t;t=Math.floor(r/s);a[o]=r-t*s;t+=1}while(t>0){a[o++]=t%s;t=Math.floor(t/s)}return a}u.prototype.add=function(e){var t=ie(e);if(this.sign!==t.sign)return this.subtract(t.negate());var n=this.value,r=t.value;return t.isSmall?new u(E(n,Math.abs(r)),this.sign):new u(y(n,r),this.sign)};u.prototype.plus=u.prototype.add;c.prototype.add=function(e){var t=ie(e);var n=this.value;if(n<0!==t.sign)return this.subtract(t.negate());var r=t.value;if(t.isSmall){if(p(n+r))return new c(n+r);r=f(Math.abs(r))}return new u(E(r,Math.abs(n)),n<0)};c.prototype.plus=c.prototype.add;d.prototype.add=function(e){return new d(this.value+ie(e).value)};d.prototype.plus=d.prototype.add;function b(e,t){var r,o,i=e.length,a=t.length,s=new Array(i),l=0,u=n;for(r=0;r<a;r++){o=e[r]-l-t[r];if(o<0){o+=u;l=1}else l=0;s[r]=o}for(r=a;r<i;r++){o=e[r]-l;if(!(o<0)){s[r++]=o;break}o+=u;s[r]=o}for(;r<i;r++)s[r]=e[r];m(s);return s}function T(e,t,n){var r;if(k(e,t)>=0)r=b(e,t);else{r=b(t,e);n=!n}r=h(r);if(typeof r==="number"){n&&(r=-r);return new c(r)}return new u(r,n)}function S(e,t,r){var o,i,a=e.length,s=new Array(a),l=-t,d=n;for(o=0;o<a;o++){i=e[o]+l;l=Math.floor(i/d);i%=d;s[o]=i<0?i+d:i}s=h(s);if(typeof s==="number"){r&&(s=-s);return new c(s)}return new u(s,r)}u.prototype.subtract=function(e){var t=ie(e);if(this.sign!==t.sign)return this.add(t.negate());var n=this.value,r=t.value;return t.isSmall?S(n,Math.abs(r),this.sign):T(n,r,this.sign)};u.prototype.minus=u.prototype.subtract;c.prototype.subtract=function(e){var t=ie(e);var n=this.value;if(n<0!==t.sign)return this.add(t.negate());var r=t.value;return t.isSmall?new c(n-r):S(r,Math.abs(n),n>=0)};c.prototype.minus=c.prototype.subtract;d.prototype.subtract=function(e){return new d(this.value-ie(e).value)};d.prototype.minus=d.prototype.subtract;u.prototype.negate=function(){return new u(this.value,!this.sign)};c.prototype.negate=function(){var e=this.sign;var t=new c(-this.value);t.sign=!e;return t};d.prototype.negate=function(){return new d(-this.value)};u.prototype.abs=function(){return new u(this.value,false)};c.prototype.abs=function(){return new c(Math.abs(this.value))};d.prototype.abs=function(){return new d(this.value>=0?this.value:-this.value)};function N(e,t){var r,o,i,a,s,l=e.length,u=t.length,c=l+u,d=_(c),p=n;for(i=0;i<l;++i){a=e[i];for(var f=0;f<u;++f){s=t[f];r=a*s+d[i+f];o=Math.floor(r/p);d[i+f]=r-o*p;d[i+f+1]+=o}}m(d);return d}function A(e,t){var r,o,i=e.length,a=new Array(i),s=n,l=0;for(o=0;o<i;o++){r=e[o]*t+l;l=Math.floor(r/s);a[o]=r-l*s}while(l>0){a[o++]=l%s;l=Math.floor(l/s)}return a}function I(e,t){var n=[];while(t-- >0)n.push(0);return n.concat(e)}function w(e,t){var n=Math.max(e.length,t.length);if(n<=30)return N(e,t);n=Math.ceil(n/2);var r=e.slice(n),o=e.slice(0,n),i=t.slice(n),a=t.slice(0,n);var s=w(o,a),l=w(r,i),u=w(y(o,r),y(a,i));var c=y(y(s,I(b(b(u,s),l),n)),I(l,2*n));m(c);return c}function O(e,t){return-.012*e-.012*t+15e-6*e*t>0}u.prototype.multiply=function(e){var t,r=ie(e),o=this.value,i=r.value,a=this.sign!==r.sign;if(r.isSmall){if(i===0)return l[0];if(i===1)return this;if(i===-1)return this.negate();t=Math.abs(i);if(t<n)return new u(A(o,t),a);i=f(t)}return O(o.length,i.length)?new u(w(o,i),a):new u(N(o,i),a)};u.prototype.times=u.prototype.multiply;function R(e,t,r){return new u(e<n?A(t,e):N(t,f(e)),r)}c.prototype._multiplyBySmall=function(e){return p(e.value*this.value)?new c(e.value*this.value):R(Math.abs(e.value),f(Math.abs(this.value)),this.sign!==e.sign)};u.prototype._multiplyBySmall=function(e){return e.value===0?l[0]:e.value===1?this:e.value===-1?this.negate():R(Math.abs(e.value),this.value,this.sign!==e.sign)};c.prototype.multiply=function(e){return ie(e)._multiplyBySmall(this)};c.prototype.times=c.prototype.multiply;d.prototype.multiply=function(e){return new d(this.value*ie(e).value)};d.prototype.times=d.prototype.multiply;function Z(e){var t,r,o,i,a,s=e.length,l=_(s+s),u=n;for(o=0;o<s;o++){i=e[o];r=0-i*i;for(var c=o;c<s;c++){a=e[c];t=i*a*2+l[o+c]+r;r=Math.floor(t/u);l[o+c]=t-r*u}l[o+s]=r}m(l);return l}u.prototype.square=function(){return new u(Z(this.value),false)};c.prototype.square=function(){var e=this.value*this.value;return p(e)?new c(e):new u(Z(f(Math.abs(this.value))),false)};d.prototype.square=function(e){return new d(this.value*this.value)};function D(e,t){var r,o,i,a,s,l,u,c=e.length,d=t.length,p=n,f=_(t.length),m=t[d-1],v=Math.ceil(p/(2*m)),g=A(e,v),y=A(t,v);g.length<=c&&g.push(0);y.push(0);m=y[d-1];for(o=c-d;o>=0;o--){r=p-1;g[o+d]!==m&&(r=Math.floor((g[o+d]*p+g[o+d-1])/m));i=0;a=0;l=y.length;for(s=0;s<l;s++){i+=r*y[s];u=Math.floor(i/p);a+=g[o+s]-(i-u*p);i=u;if(a<0){g[o+s]=a+p;a=-1}else{g[o+s]=a;a=0}}while(a!==0){r-=1;i=0;for(s=0;s<l;s++){i+=g[o+s]-p+y[s];if(i<0){g[o+s]=i+p;i=0}else{g[o+s]=i;i=1}}a+=i}f[o]=r}g=L(g,v)[0];return[h(f),h(g)]}function C(e,t){var r,o,i,a,s,l=e.length,u=t.length,c=[],d=[],p=n;while(l){d.unshift(e[--l]);m(d);if(k(d,t)<0)c.push(0);else{o=d.length;i=d[o-1]*p+d[o-2];a=t[u-1]*p+t[u-2];o>u&&(i=(i+1)*p);r=Math.ceil(i/a);do{s=A(t,r);if(k(s,d)<=0)break;r--}while(r);c.push(r);d=b(d,s)}}c.reverse();return[h(c),h(d)]}function L(e,t){var r,o,i,a,s=e.length,l=_(s),u=n;i=0;for(r=s-1;r>=0;--r){a=i*u+e[r];o=v(a/t);i=a-o*t;l[r]=o|0}return[l,i|0]}function P(e,t){var r,o=ie(t);if(s)return[new d(e.value/o.value),new d(e.value%o.value)];var i=e.value,a=o.value;var p;if(a===0)throw new Error("Cannot divide by zero");if(e.isSmall)return o.isSmall?[new c(v(i/a)),new c(i%a)]:[l[0],e];if(o.isSmall){if(a===1)return[e,l[0]];if(a==-1)return[e.negate(),l[0]];var m=Math.abs(a);if(m<n){r=L(i,m);p=h(r[0]);var _=r[1];e.sign&&(_=-_);if(typeof p==="number"){e.sign!==o.sign&&(p=-p);return[new c(p),new c(_)]}return[new u(p,e.sign!==o.sign),new c(_)]}a=f(m)}var g=k(i,a);if(g===-1)return[l[0],e];if(g===0)return[l[e.sign===o.sign?1:-1],l[0]];r=i.length+a.length<=200?D(i,a):C(i,a);p=r[0];var y=e.sign!==o.sign,E=r[1],b=e.sign;if(typeof p==="number"){y&&(p=-p);p=new c(p)}else p=new u(p,y);if(typeof E==="number"){b&&(E=-E);E=new c(E)}else E=new u(E,b);return[p,E]}u.prototype.divmod=function(e){var t=P(this,e);return{quotient:t[0],remainder:t[1]}};d.prototype.divmod=c.prototype.divmod=u.prototype.divmod;u.prototype.divide=function(e){return P(this,e)[0]};d.prototype.over=d.prototype.divide=function(e){return new d(this.value/ie(e).value)};c.prototype.over=c.prototype.divide=u.prototype.over=u.prototype.divide;u.prototype.mod=function(e){return P(this,e)[1]};d.prototype.mod=d.prototype.remainder=function(e){return new d(this.value%ie(e).value)};c.prototype.remainder=c.prototype.mod=u.prototype.remainder=u.prototype.mod;u.prototype.pow=function(e){var t,n,r,o=ie(e),i=this.value,a=o.value;if(a===0)return l[1];if(i===0)return l[0];if(i===1)return l[1];if(i===-1)return o.isEven()?l[1]:l[-1];if(o.sign)return l[0];if(!o.isSmall)throw new Error("The exponent "+o.toString()+" is too large.");if(this.isSmall&&p(t=Math.pow(i,a)))return new c(v(t));n=this;r=l[1];while(true){if(a&true){r=r.times(n);--a}if(a===0)break;a/=2;n=n.square()}return r};c.prototype.pow=u.prototype.pow;d.prototype.pow=function(e){var t=ie(e);var n=this.value,r=t.value;var o=BigInt(0),i=BigInt(1),a=BigInt(2);if(r===o)return l[1];if(n===o)return l[0];if(n===i)return l[1];if(n===BigInt(-1))return t.isEven()?l[1]:l[-1];if(t.isNegative())return new d(o);var s=this;var u=l[1];while(true){if((r&i)===i){u=u.times(s);--r}if(r===o)break;r/=a;s=s.square()}return u};u.prototype.modPow=function(e,t){e=ie(e);t=ie(t);if(t.isZero())throw new Error("Cannot take modPow with modulus 0");var n=l[1],r=this.mod(t);if(e.isNegative()){e=e.multiply(l[-1]);r=r.modInv(t)}while(e.isPositive()){if(r.isZero())return l[0];e.isOdd()&&(n=n.multiply(r).mod(t));e=e.divide(2);r=r.square().mod(t)}return n};d.prototype.modPow=c.prototype.modPow=u.prototype.modPow;function k(e,t){if(e.length!==t.length)return e.length>t.length?1:-1;for(var n=e.length-1;n>=0;n--)if(e[n]!==t[n])return e[n]>t[n]?1:-1;return 0}u.prototype.compareAbs=function(e){var t=ie(e),n=this.value,r=t.value;return t.isSmall?1:k(n,r)};c.prototype.compareAbs=function(e){var t=ie(e),n=Math.abs(this.value),r=t.value;if(t.isSmall){r=Math.abs(r);return n===r?0:n>r?1:-1}return-1};d.prototype.compareAbs=function(e){var t=this.value;var n=ie(e).value;t=t>=0?t:-t;n=n>=0?n:-n;return t===n?0:t>n?1:-1};u.prototype.compare=function(e){if(e===Infinity)return-1;if(e===-Infinity)return 1;var t=ie(e),n=this.value,r=t.value;return this.sign!==t.sign?t.sign?1:-1:t.isSmall?this.sign?-1:1:k(n,r)*(this.sign?-1:1)};u.prototype.compareTo=u.prototype.compare;c.prototype.compare=function(e){if(e===Infinity)return-1;if(e===-Infinity)return 1;var t=ie(e),n=this.value,r=t.value;return t.isSmall?n==r?0:n>r?1:-1:n<0!==t.sign?n<0?-1:1:n<0?1:-1};c.prototype.compareTo=c.prototype.compare;d.prototype.compare=function(e){if(e===Infinity)return-1;if(e===-Infinity)return 1;var t=this.value;var n=ie(e).value;return t===n?0:t>n?1:-1};d.prototype.compareTo=d.prototype.compare;u.prototype.equals=function(e){return this.compare(e)===0};d.prototype.eq=d.prototype.equals=c.prototype.eq=c.prototype.equals=u.prototype.eq=u.prototype.equals;u.prototype.notEquals=function(e){return this.compare(e)!==0};d.prototype.neq=d.prototype.notEquals=c.prototype.neq=c.prototype.notEquals=u.prototype.neq=u.prototype.notEquals;u.prototype.greater=function(e){return this.compare(e)>0};d.prototype.gt=d.prototype.greater=c.prototype.gt=c.prototype.greater=u.prototype.gt=u.prototype.greater;u.prototype.lesser=function(e){return this.compare(e)<0};d.prototype.lt=d.prototype.lesser=c.prototype.lt=c.prototype.lesser=u.prototype.lt=u.prototype.lesser;u.prototype.greaterOrEquals=function(e){return this.compare(e)>=0};d.prototype.geq=d.prototype.greaterOrEquals=c.prototype.geq=c.prototype.greaterOrEquals=u.prototype.geq=u.prototype.greaterOrEquals;u.prototype.lesserOrEquals=function(e){return this.compare(e)<=0};d.prototype.leq=d.prototype.lesserOrEquals=c.prototype.leq=c.prototype.lesserOrEquals=u.prototype.leq=u.prototype.lesserOrEquals;u.prototype.isEven=function(){return(this.value[0]&1)===0};c.prototype.isEven=function(){return(this.value&1)===0};d.prototype.isEven=function(){return(this.value&BigInt(1))===BigInt(0)};u.prototype.isOdd=function(){return(this.value[0]&1)===1};c.prototype.isOdd=function(){return(this.value&1)===1};d.prototype.isOdd=function(){return(this.value&BigInt(1))===BigInt(1)};u.prototype.isPositive=function(){return!this.sign};c.prototype.isPositive=function(){return this.value>0};d.prototype.isPositive=c.prototype.isPositive;u.prototype.isNegative=function(){return this.sign};c.prototype.isNegative=function(){return this.value<0};d.prototype.isNegative=c.prototype.isNegative;u.prototype.isUnit=function(){return false};c.prototype.isUnit=function(){return Math.abs(this.value)===1};d.prototype.isUnit=function(){return this.abs().value===BigInt(1)};u.prototype.isZero=function(){return false};c.prototype.isZero=function(){return this.value===0};d.prototype.isZero=function(){return this.value===BigInt(0)};u.prototype.isDivisibleBy=function(e){var t=ie(e);return!t.isZero()&&(!!t.isUnit()||(t.compareAbs(2)===0?this.isEven():this.mod(t).isZero()))};d.prototype.isDivisibleBy=c.prototype.isDivisibleBy=u.prototype.isDivisibleBy;function x(e){var t=e.abs();return!t.isUnit()&&(!!(t.equals(2)||t.equals(3)||t.equals(5))||!(t.isEven()||t.isDivisibleBy(3)||t.isDivisibleBy(5))&&(!!t.lesser(49)||void 0))}function U(e,n){var r,o,i,a=e.prev(),s=a,l=0;while(s.isEven())s=s.divide(2),l++;e:for(o=0;o<n.length;o++)if(!e.lesser(n[o])){i=t(n[o]).modPow(s,e);if(!i.isUnit()&&!i.equals(a)){for(r=l-1;r!=0;r--){i=i.square().mod(e);if(i.isUnit())return false;if(i.equals(a))continue e}return false}}return true}u.prototype.isPrime=function(n){var r=x(this);if(r!==e)return r;var o=this.abs();var i=o.bitLength();if(i<=64)return U(o,[2,3,5,7,11,13,17,19,23,29,31,37]);var a=Math.log(2)*i.toJSNumber();var s=Math.ceil(n===true?2*Math.pow(a,2):a);for(var l=[],u=0;u<s;u++)l.push(t(u+2));return U(o,l)};d.prototype.isPrime=c.prototype.isPrime=u.prototype.isPrime;u.prototype.isProbablePrime=function(n,r){var o=x(this);if(o!==e)return o;var i=this.abs();var a=n===e?5:n;for(var s=[],l=0;l<a;l++)s.push(t.randBetween(2,i.minus(2),r));return U(i,s)};d.prototype.isProbablePrime=c.prototype.isProbablePrime=u.prototype.isProbablePrime;u.prototype.modInv=function(e){var n,r,o,i=t.zero,a=t.one,s=ie(e),l=this.abs();while(!l.isZero()){n=s.divide(l);r=i;o=s;i=a;s=l;a=r.subtract(n.multiply(a));l=o.subtract(n.multiply(l))}if(!s.isUnit())throw new Error(this.toString()+" and "+e.toString()+" are not co-prime");i.compare(0)===-1&&(i=i.add(e));return this.isNegative()?i.negate():i};d.prototype.modInv=c.prototype.modInv=u.prototype.modInv;u.prototype.next=function(){var e=this.value;return this.sign?S(e,1,this.sign):new u(E(e,1),this.sign)};c.prototype.next=function(){var e=this.value;return e+1<o?new c(e+1):new u(i,false)};d.prototype.next=function(){return new d(this.value+BigInt(1))};u.prototype.prev=function(){var e=this.value;return this.sign?new u(E(e,1),true):S(e,1,this.sign)};c.prototype.prev=function(){var e=this.value;return e-1>-o?new c(e-1):new u(i,true)};d.prototype.prev=function(){return new d(this.value-BigInt(1))};var M=[1];while(2*M[M.length-1]<=n)M.push(2*M[M.length-1]);var j=M.length,G=M[j-1];function B(e){return Math.abs(e)<=n}u.prototype.shiftLeft=function(e){var t=ie(e).toJSNumber();if(!B(t))throw new Error(String(t)+" is too large for shifting.");if(t<0)return this.shiftRight(-t);var n=this;if(n.isZero())return n;while(t>=j){n=n.multiply(G);t-=j-1}return n.multiply(M[t])};d.prototype.shiftLeft=c.prototype.shiftLeft=u.prototype.shiftLeft;u.prototype.shiftRight=function(e){var t;var n=ie(e).toJSNumber();if(!B(n))throw new Error(String(n)+" is too large for shifting.");if(n<0)return this.shiftLeft(-n);var r=this;while(n>=j){if(r.isZero()||r.isNegative()&&r.isUnit())return r;t=P(r,G);r=t[1].isNegative()?t[0].prev():t[0];n-=j-1}t=P(r,M[n]);return t[1].isNegative()?t[0].prev():t[0]};d.prototype.shiftRight=c.prototype.shiftRight=u.prototype.shiftRight;function V(e,n,r){n=ie(n);var o=e.isNegative(),i=n.isNegative();var a=o?e.not():e,s=i?n.not():n;var l=0,u=0;var c=null,d=null;var p=[];while(!a.isZero()||!s.isZero()){c=P(a,G);l=c[1].toJSNumber();o&&(l=G-1-l);d=P(s,G);u=d[1].toJSNumber();i&&(u=G-1-u);a=c[0];s=d[0];p.push(r(l,u))}var f=r(o?1:0,i?1:0)!==0?t(-1):t(0);for(var h=p.length-1;h>=0;h-=1)f=f.multiply(G).add(t(p[h]));return f}u.prototype.not=function(){return this.negate().prev()};d.prototype.not=c.prototype.not=u.prototype.not;u.prototype.and=function(e){return V(this,e,(function(e,t){return e&t}))};d.prototype.and=c.prototype.and=u.prototype.and;u.prototype.or=function(e){return V(this,e,(function(e,t){return e|t}))};d.prototype.or=c.prototype.or=u.prototype.or;u.prototype.xor=function(e){return V(this,e,(function(e,t){return e^t}))};d.prototype.xor=c.prototype.xor=u.prototype.xor;var H=1<<30,F=(n&-n)*(n&-n)|H;function K(e){var t=e.value,r=typeof t==="number"?t|H:typeof t==="bigint"?t|BigInt(H):t[0]+t[1]*n|F;return r&-r}function q(e,n){if(n.compareTo(e)<=0){var r=q(e,n.square(n));var o=r.p;var i=r.e;var a=o.multiply(n);return a.compareTo(e)<=0?{p:a,e:i*2+1}:{p:o,e:i*2}}return{p:t(1),e:0}}u.prototype.bitLength=function(){var e=this;e.compareTo(t(0))<0&&(e=e.negate().subtract(t(1)));return e.compareTo(t(0))===0?t(0):t(q(e,t(2)).e).add(t(1))};d.prototype.bitLength=c.prototype.bitLength=u.prototype.bitLength;function $(e,t){e=ie(e);t=ie(t);return e.greater(t)?e:t}function z(e,t){e=ie(e);t=ie(t);return e.lesser(t)?e:t}function Y(e,t){e=ie(e).abs();t=ie(t).abs();if(e.equals(t))return e;if(e.isZero())return t;if(t.isZero())return e;var n,r,o=l[1];while(e.isEven()&&t.isEven()){n=z(K(e),K(t));e=e.divide(n);t=t.divide(n);o=o.multiply(n)}while(e.isEven())e=e.divide(K(e));do{while(t.isEven())t=t.divide(K(t));if(e.greater(t)){r=t;t=e;e=r}t=t.subtract(e)}while(!t.isZero());return o.isUnit()?e:e.multiply(o)}function W(e,t){e=ie(e).abs();t=ie(t).abs();return e.divide(Y(e,t)).multiply(t)}function X(e,t,r){e=ie(e);t=ie(t);var o=r||Math.random;var i=z(e,t),a=$(e,t);var s=a.subtract(i).add(1);if(s.isSmall)return i.add(Math.floor(o()*s));var u=te(s,n).value;var c=[],d=true;for(var p=0;p<u.length;p++){var f=d?u[p]+(p+1<u.length?u[p+1]/n:0):n;var h=v(o()*f);c.push(h);h<u[p]&&(d=false)}return i.add(l.fromArray(c,n,false))}var J=function(e,t,n,r){n=n||a;e=String(e);if(!r){e=e.toLowerCase();n=n.toLowerCase()}var o=e.length;var i;var s=Math.abs(t);var l={};for(i=0;i<n.length;i++)l[n[i]]=i;for(i=0;i<o;i++){var u=e[i];if(u!=="-"&&(u in l&&l[u]>=s)){if(u==="1"&&s===1)continue;throw new Error(u+" is not a valid digit in base "+t+".")}}t=ie(t);var c=[];var d=e[0]==="-";for(i=d?1:0;i<e.length;i++){u=e[i];if(u in l)c.push(ie(l[u]));else{if(u!=="<")throw new Error(u+" is not a valid character");var p=i;do{i++}while(e[i]!==">"&&i<e.length);c.push(ie(e.slice(p+1,i)))}}return Q(c,t,d)};function Q(e,t,n){var r,o=l[0],i=l[1];for(r=e.length-1;r>=0;r--){o=o.add(e[r].times(i));i=i.times(t)}return n?o.negate():o}function ee(e,t){t=t||a;return e<t.length?t[e]:"<"+e+">"}function te(e,n){n=t(n);if(n.isZero()){if(e.isZero())return{value:[0],isNegative:false};throw new Error("Cannot convert nonzero numbers to base 0.")}if(n.equals(-1)){if(e.isZero())return{value:[0],isNegative:false};if(e.isNegative())return{value:[].concat.apply([],Array.apply(null,Array(-e.toJSNumber())).map(Array.prototype.valueOf,[1,0])),isNegative:false};var r=Array.apply(null,Array(e.toJSNumber()-1)).map(Array.prototype.valueOf,[0,1]);r.unshift([1]);return{value:[].concat.apply([],r),isNegative:false}}var o=false;if(e.isNegative()&&n.isPositive()){o=true;e=e.abs()}if(n.isUnit())return e.isZero()?{value:[0],isNegative:false}:{value:Array.apply(null,Array(e.toJSNumber())).map(Number.prototype.valueOf,1),isNegative:o};var i=[];var a,s=e;while(s.isNegative()||s.compareAbs(n)>=0){a=s.divmod(n);s=a.quotient;var l=a.remainder;if(l.isNegative()){l=n.minus(l).abs();s=s.next()}i.push(l.toJSNumber())}i.push(s.toJSNumber());return{value:i.reverse(),isNegative:o}}function ne(e,t,n){var r=te(e,t);return(r.isNegative?"-":"")+r.value.map((function(e){return ee(e,n)})).join("")}u.prototype.toArray=function(e){return te(this,e)};c.prototype.toArray=function(e){return te(this,e)};d.prototype.toArray=function(e){return te(this,e)};u.prototype.toString=function(t,n){t===e&&(t=10);if(t!==10||n)return ne(this,t,n);var r,o=this.value,i=o.length,a=String(o[--i]),s="0000000";while(--i>=0){r=String(o[i]);a+=s.slice(r.length)+r}var l=this.sign?"-":"";return l+a};c.prototype.toString=function(t,n){t===e&&(t=10);return t!=10||n?ne(this,t,n):String(this.value)};d.prototype.toString=c.prototype.toString;d.prototype.toJSON=u.prototype.toJSON=c.prototype.toJSON=function(){return this.toString()};u.prototype.valueOf=function(){return parseInt(this.toString(),10)};u.prototype.toJSNumber=u.prototype.valueOf;c.prototype.valueOf=function(){return this.value};c.prototype.toJSNumber=c.prototype.valueOf;d.prototype.valueOf=d.prototype.toJSNumber=function(){return parseInt(this.toString(),10)};function re(e){if(p(+e)){var t=+e;if(t===v(t))return s?new d(BigInt(t)):new c(t);throw new Error("Invalid integer: "+e)}var n=e[0]==="-";n&&(e=e.slice(1));var o=e.split(/e/i);if(o.length>2)throw new Error("Invalid integer: "+o.join("e"));if(o.length===2){var i=o[1];i[0]==="+"&&(i=i.slice(1));i=+i;if(i!==v(i)||!p(i))throw new Error("Invalid integer: "+i+" is not a valid exponent.");var a=o[0];var l=a.indexOf(".");if(l>=0){i-=a.length-l-1;a=a.slice(0,l)+a.slice(l+1)}if(i<0)throw new Error("Cannot include negative exponent part for integers");a+=new Array(i+1).join("0");e=a}var f=/^([0-9][0-9]*)$/.test(e);if(!f)throw new Error("Invalid integer: "+e);if(s)return new d(BigInt(n?"-"+e:e));var h=[],_=e.length,g=r,y=_-g;while(_>0){h.push(+e.slice(y,_));y-=g;y<0&&(y=0);_-=g}m(h);return new u(h,n)}function oe(e){if(s)return new d(BigInt(e));if(p(e)){if(e!==v(e))throw new Error(e+" is not an integer.");return new c(e)}return re(e.toString())}function ie(e){return typeof e==="number"?oe(e):typeof e==="string"?re(e):typeof e==="bigint"?new d(e):e}for(var ae=0;ae<1e3;ae++){l[ae]=ie(ae);ae>0&&(l[-ae]=ie(-ae))}l.one=l[1];l.zero=l[0];l.minusOne=l[-1];l.max=$;l.min=z;l.gcd=Y;l.lcm=W;l.isInstance=function(e){return e instanceof u||e instanceof c||e instanceof d};l.randBetween=X;l.fromArray=function(e,t,n){return Q(e.map(ie),ie(t||10),n)};return l}();e.hasOwnProperty("exports")&&(e.exports=t)})(ze);return ze.exports}var Xe=We();var Je=t(Xe);const Qe=64;const et=16;const tt=Qe/et;function nt(){try{BigInt;return true}catch(e){return false}}function rt(e,t,n){let r=0;for(let o=0;o<n;o++){const n=e[t+o];if(n===void 0)break;r+=n*16**o}return r}function ot(e){const t=[];for(let n=0;n<e.length;n++){let r=Number(e[n]);for(let e=0;r||e<t.length;e++){r+=(t[e]||0)*10;t[e]=r%16;r=(r-t[e])/16}}return t}function it(e){const t=ot(e);const n=Array(tt);for(let e=0;e<tt;e++)n[tt-1-e]=rt(t,e*tt,tt);return n}class HighLow{static fromString(e){return new HighLow(it(e),e)}static fromBit(e){const t=Array(tt);const n=Math.floor(e/et);for(let r=0;r<tt;r++)t[tt-1-r]=r===n?1<<e-n*et:0;return new HighLow(t)}constructor(e,t){this.parts=e;this.str=t}and({parts:e}){return new HighLow(this.parts.map(((t,n)=>t&e[n])))}or({parts:e}){return new HighLow(this.parts.map(((t,n)=>t|e[n])))}xor({parts:e}){return new HighLow(this.parts.map(((t,n)=>t^e[n])))}not(){return new HighLow(this.parts.map((e=>~e)))}equals({parts:e}){return this.parts.every(((t,n)=>t===e[n]))}toString(){if(this.str!=null)return this.str;const e=new Array(Qe/4);this.parts.forEach(((t,n)=>{const r=ot(t.toString());for(let t=0;t<4;t++)e[t+n*4]=r[3-t]||0}));return this.str=Je.fromArray(e,16).toString()}toJSON(){return this.toString()}}const at=nt();at&&BigInt.prototype.toJSON==null&&(BigInt.prototype.toJSON=function(){return this.toString()});const st={};const lt=at?function(e){return BigInt(e)}:function(e){if(e instanceof HighLow)return e;typeof e==="number"&&(e=e.toString());if(st[e]!=null)return st[e];st[e]=HighLow.fromString(e);return st[e]};const ut=lt(0);const ct=at?function(e=ut,t=ut){return e&t}:function(e=ut,t=ut){return e.and(t)};const dt=at?function(e=ut,t=ut){return e|t}:function(e=ut,t=ut){return e.or(t)};const pt=at?function(e=ut,t=ut){return e^t}:function(e=ut,t=ut){return e.xor(t)};const ft=at?function(e=ut){return~e}:function(e=ut){return e.not()};const ht=at?function(e,t){return e===t}:function(e,t){return e==null||t==null?e==t:e.equals(t)};function mt(...e){let t=e[0];for(let n=1;n<e.length;n++)t=dt(t,e[n]);return t}function _t(e,t){return ht(ct(e,t),t)}function vt(e,t){return!ht(ct(e,t),ut)}function gt(e,t){return t===ut?e:dt(e,t)}function yt(e,t){return t===ut?e:pt(e,ct(e,t))}const Et=at?function(e){return BigInt(1)<<BigInt(e)}:function(e){return HighLow.fromBit(e)};var bt={combine:mt,add:gt,remove:yt,filter:ct,invert:ft,has:_t,hasAny:vt,equals:ht,deserialize:lt,getFlag:Et};var Tt;(function(e){e[e.CLOSE_NORMAL=1e3]="CLOSE_NORMAL";e[e.CLOSE_UNSUPPORTED=1003]="CLOSE_UNSUPPORTED";e[e.CLOSE_ABNORMAL=1006]="CLOSE_ABNORMAL";e[e.INVALID_CLIENTID=4e3]="INVALID_CLIENTID";e[e.INVALID_ORIGIN=4001]="INVALID_ORIGIN";e[e.RATELIMITED=4002]="RATELIMITED";e[e.TOKEN_REVOKED=4003]="TOKEN_REVOKED";e[e.INVALID_VERSION=4004]="INVALID_VERSION";e[e.INVALID_ENCODING=4005]="INVALID_ENCODING"})(Tt||(Tt={}));var St;(function(e){e[e.INVALID_PAYLOAD=4e3]="INVALID_PAYLOAD";e[e.INVALID_COMMAND=4002]="INVALID_COMMAND";e[e.INVALID_GUILD=4003]="INVALID_GUILD";e[e.INVALID_EVENT=4004]="INVALID_EVENT";e[e.INVALID_CHANNEL=4005]="INVALID_CHANNEL";e[e.INVALID_PERMISSIONS=4006]="INVALID_PERMISSIONS";e[e.INVALID_CLIENTID=4007]="INVALID_CLIENTID";e[e.INVALID_ORIGIN=4008]="INVALID_ORIGIN";e[e.INVALID_TOKEN=4009]="INVALID_TOKEN";e[e.INVALID_USER=4010]="INVALID_USER"})(St||(St={}));
/**
 * @deprecated use OrientationTypeObject instead
 */var Nt;(function(e){e.LANDSCAPE="landscape";e.PORTRAIT="portrait"})(Nt||(Nt={}));var At;(function(e){e.MOBILE="mobile";e.DESKTOP="desktop"})(At||(At={}));const It=Object.freeze({CREATE_INSTANT_INVITE:bt.getFlag(0),KICK_MEMBERS:bt.getFlag(1),BAN_MEMBERS:bt.getFlag(2),ADMINISTRATOR:bt.getFlag(3),MANAGE_CHANNELS:bt.getFlag(4),MANAGE_GUILD:bt.getFlag(5),ADD_REACTIONS:bt.getFlag(6),VIEW_AUDIT_LOG:bt.getFlag(7),PRIORITY_SPEAKER:bt.getFlag(8),STREAM:bt.getFlag(9),VIEW_CHANNEL:bt.getFlag(10),SEND_MESSAGES:bt.getFlag(11),SEND_TTS_MESSAGES:bt.getFlag(12),MANAGE_MESSAGES:bt.getFlag(13),EMBED_LINKS:bt.getFlag(14),ATTACH_FILES:bt.getFlag(15),READ_MESSAGE_HISTORY:bt.getFlag(16),MENTION_EVERYONE:bt.getFlag(17),USE_EXTERNAL_EMOJIS:bt.getFlag(18),VIEW_GUILD_INSIGHTS:bt.getFlag(19),CONNECT:bt.getFlag(20),SPEAK:bt.getFlag(21),MUTE_MEMBERS:bt.getFlag(22),DEAFEN_MEMBERS:bt.getFlag(23),MOVE_MEMBERS:bt.getFlag(24),USE_VAD:bt.getFlag(25),CHANGE_NICKNAME:bt.getFlag(26),MANAGE_NICKNAMES:bt.getFlag(27),MANAGE_ROLES:bt.getFlag(28),MANAGE_WEBHOOKS:bt.getFlag(29),MANAGE_GUILD_EXPRESSIONS:bt.getFlag(30),USE_APPLICATION_COMMANDS:bt.getFlag(31),REQUEST_TO_SPEAK:bt.getFlag(32),MANAGE_EVENTS:bt.getFlag(33),MANAGE_THREADS:bt.getFlag(34),CREATE_PUBLIC_THREADS:bt.getFlag(35),CREATE_PRIVATE_THREADS:bt.getFlag(36),USE_EXTERNAL_STICKERS:bt.getFlag(37),SEND_MESSAGES_IN_THREADS:bt.getFlag(38),USE_EMBEDDED_ACTIVITIES:bt.getFlag(39),MODERATE_MEMBERS:bt.getFlag(40),VIEW_CREATOR_MONETIZATION_ANALYTICS:bt.getFlag(41),USE_SOUNDBOARD:bt.getFlag(42),CREATE_GUILD_EXPRESSIONS:bt.getFlag(43),CREATE_EVENTS:bt.getFlag(44),USE_EXTERNAL_SOUNDS:bt.getFlag(45),SEND_VOICE_MESSAGES:bt.getFlag(46),SEND_POLLS:bt.getFlag(49),USE_EXTERNAL_APPS:bt.getFlag(50)});const wt=-1;const Ot=250;
/**
 * This is a helper function which coerces an unsupported arg value to the key/value UNHANDLED: -1
 * This is necessary to handle a scenario where a new enum value is added in the Discord Client,
 * so that the sdk will not throw an error when given a (newly) valid enum value.
 *
 * To remove the requirement for consumers of this sdk to import an enum when parsing data,
 * we instead use an object cast as const (readonly). This maintains parity with the previous
 * schema (which used zod.enum), and behaves more like a union type, i.e. 'foo' | 'bar' | -1
 *
 * @param inputObject This object must include the key/value pair UNHANDLED = -1
 */function Rt(e){return Ge((t=>{var n;const[r]=(n=Object.entries(e).find((([,e])=>e===t)))!==null&&n!==void 0?n:[];return t!=null&&r===void 0?e.UNHANDLED:t}),le().or(ue()))}function Zt(e){const t=oe().transform((t=>{const n=e.safeParse(t);return n.success?n.data:e._def.defaultValue()}));t.overlayType=e;return t}const Dt=$e.object({image_url:$e.string()}).describe('Response for "INITIATE_IMAGE_UPLOAD" Command');const Ct=$e.object({mediaUrl:$e.string().max(1024)}).describe('Request for "OPEN_SHARE_MOMENT_DIALOG" Command');const Lt=$e.object({access_token:$e.union([$e.string(),$e.null()]).optional()}).describe('Request for "AUTHENTICATE" Command');const Pt=$e.object({access_token:$e.string(),user:$e.object({username:$e.string(),discriminator:$e.string(),id:$e.string(),avatar:$e.union([$e.string(),$e.null()]).optional(),public_flags:$e.number(),global_name:$e.union([$e.string(),$e.null()]).optional()}),scopes:$e.array(Zt($e.enum(["identify","email","connections","guilds","guilds.join","guilds.members.read","guilds.channels.read","gdm.join","bot","rpc","rpc.notifications.read","rpc.voice.read","rpc.voice.write","rpc.video.read","rpc.video.write","rpc.screenshare.read","rpc.screenshare.write","rpc.activities.write","webhook.incoming","messages.read","applications.builds.upload","applications.builds.read","applications.commands","applications.commands.permissions.update","applications.commands.update","applications.store.update","applications.entitlements","activities.read","activities.write","activities.invites.write","relationships.read","relationships.write","voice","dm_channels.read","role_connections.write","presences.read","presences.write","openid","dm_channels.messages.read","dm_channels.messages.write","gateway.connect","account.global_name.update","payment_sources.country_code","sdk.social_layer_presence","sdk.social_layer","lobbies.write","application_identities.write"]).or($e.literal(-1)).default(-1))),expires:$e.string(),application:$e.object({description:$e.string(),icon:$e.union([$e.string(),$e.null()]).optional(),id:$e.string(),rpc_origins:$e.array($e.string()).optional(),name:$e.string()})}).describe('Response for "AUTHENTICATE" Command');const kt=$e.object({participants:$e.array($e.object({id:$e.string(),username:$e.string(),global_name:$e.union([$e.string(),$e.null()]).optional(),discriminator:$e.string(),avatar:$e.union([$e.string(),$e.null()]).optional(),flags:$e.number(),bot:$e.boolean(),avatar_decoration_data:$e.union([$e.object({asset:$e.string(),skuId:$e.string().optional(),expiresAt:$e.number().optional()}),$e.null()]).optional(),premium_type:$e.union([$e.number(),$e.null()]).optional(),nickname:$e.string().optional()}))}).describe('Response for "GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS" Command');const xt=$e.object({command:$e.string(),options:$e.array($e.object({name:$e.string(),value:$e.string()})).optional(),content:$e.string().max(2e3).optional(),require_launch_channel:$e.boolean().optional(),preview_image:$e.object({height:$e.number(),url:$e.string(),width:$e.number()}).optional(),components:$e.array($e.object({type:$e.literal(1),components:$e.array($e.object({type:$e.literal(2),style:$e.number().gte(1).lte(5),label:$e.string().max(80).optional(),custom_id:$e.string().max(100).describe("Developer-defined identifier for the button; max 100 characters").optional()})).max(5).optional()})).optional(),pid:$e.number().optional()}).describe('Request for "SHARE_INTERACTION" Command');const Ut=$e.object({success:$e.boolean()}).describe('Response for "SHARE_INTERACTION" Command');const Mt=$e.object({custom_id:$e.string().max(64).optional(),message:$e.string().max(1e3),link_id:$e.string().max(64).optional()}).describe('Request for "SHARE_LINK" Command');const jt=$e.object({success:$e.boolean(),didCopyLink:$e.boolean(),didSendMessage:$e.boolean()}).describe('Response for "SHARE_LINK" Command');const Gt=$e.object({relationships:$e.array($e.object({type:$e.number(),user:$e.object({id:$e.string(),username:$e.string(),global_name:$e.union([$e.string(),$e.null()]).optional(),discriminator:$e.string(),avatar:$e.union([$e.string(),$e.null()]).optional(),flags:$e.number(),bot:$e.boolean(),avatar_decoration_data:$e.union([$e.object({asset:$e.string(),skuId:$e.string().optional(),expiresAt:$e.number().optional()}),$e.null()]).optional(),premium_type:$e.union([$e.number(),$e.null()]).optional()}),presence:$e.object({status:$e.string(),activity:$e.union([$e.object({session_id:$e.string().optional(),type:$e.number().optional(),name:$e.string(),url:$e.union([$e.string(),$e.null()]).optional(),application_id:$e.string().optional(),status_display_type:$e.number().optional(),state:$e.string().optional(),state_url:$e.string().optional(),details:$e.string().optional(),details_url:$e.string().optional(),emoji:$e.union([$e.object({name:$e.string(),id:$e.union([$e.string(),$e.null()]).optional(),animated:$e.union([$e.boolean(),$e.null()]).optional()}),$e.null()]).optional(),assets:$e.object({large_image:$e.string().optional(),large_text:$e.string().optional(),large_url:$e.string().optional(),small_image:$e.string().optional(),small_text:$e.string().optional(),small_url:$e.string().optional()}).optional(),timestamps:$e.object({start:$e.number().optional(),end:$e.number().optional()}).optional(),party:$e.object({id:$e.string().optional(),size:$e.array($e.number()).min(2).max(2).optional(),privacy:$e.number().optional()}).optional(),secrets:$e.object({match:$e.string().optional(),join:$e.string().optional()}).optional(),sync_id:$e.string().optional(),created_at:$e.number().optional(),instance:$e.boolean().optional(),flags:$e.number().optional(),metadata:$e.object({}).optional(),platform:$e.string().optional(),supported_platforms:$e.array($e.string()).optional(),buttons:$e.array($e.string()).optional(),hangStatus:$e.string().optional()}),$e.null()]).optional()}).optional()}))}).describe('Response for "GET_RELATIONSHIPS" Command');const Bt=$e.object({user_id:$e.string(),content:$e.string().min(0).max(1024).optional()}).describe('Request for "INVITE_USER_EMBEDDED" Command');const Vt=$e.object({id:$e.string().max(64)}).describe('Request for "GET_USER" Command');const Ht=$e.union([$e.object({id:$e.string(),username:$e.string(),global_name:$e.union([$e.string(),$e.null()]).optional(),discriminator:$e.string(),avatar:$e.union([$e.string(),$e.null()]).optional(),flags:$e.number(),bot:$e.boolean(),avatar_decoration_data:$e.union([$e.object({asset:$e.string(),skuId:$e.string().optional(),expiresAt:$e.number().optional()}),$e.null()]).optional(),premium_type:$e.union([$e.number(),$e.null()]).optional()}),$e.null()]);const Ft=$e.object({quest_id:$e.string()}).describe('Request for "GET_QUEST_ENROLLMENT_STATUS" Command');const Kt=$e.object({quest_id:$e.string(),is_enrolled:$e.boolean(),enrolled_at:$e.union([$e.string(),$e.null()]).optional()}).describe('Response for "GET_QUEST_ENROLLMENT_STATUS" Command');const qt=$e.object({quest_id:$e.string()}).describe('Request for "QUEST_START_TIMER" Command');const $t=$e.object({success:$e.boolean()}).describe('Response for "QUEST_START_TIMER" Command');var zt;(function(e){e.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD";e.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG";e.AUTHENTICATE="AUTHENTICATE";e.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";e.SHARE_INTERACTION="SHARE_INTERACTION";e.SHARE_LINK="SHARE_LINK";e.GET_RELATIONSHIPS="GET_RELATIONSHIPS";e.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED";e.GET_USER="GET_USER";e.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS";e.QUEST_START_TIMER="QUEST_START_TIMER"})(zt||(zt={}));const Yt=$e.object({}).optional().nullable();const Wt=$e.void();const Xt={[zt.INITIATE_IMAGE_UPLOAD]:{request:Wt,response:Dt},[zt.OPEN_SHARE_MOMENT_DIALOG]:{request:Ct,response:Yt},[zt.AUTHENTICATE]:{request:Lt,response:Pt},[zt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS]:{request:Wt,response:kt},[zt.SHARE_INTERACTION]:{request:xt,response:Ut},[zt.SHARE_LINK]:{request:Mt,response:jt},[zt.GET_RELATIONSHIPS]:{request:Wt,response:Gt},[zt.INVITE_USER_EMBEDDED]:{request:Bt,response:Yt},[zt.GET_USER]:{request:Vt,response:Ht},[zt.GET_QUEST_ENROLLMENT_STATUS]:{request:Ft,response:Kt},[zt.QUEST_START_TIMER]:{request:qt,response:$t}};const Jt="DISPATCH";var Qt;(function(e){e.AUTHORIZE="AUTHORIZE";e.GET_GUILDS="GET_GUILDS";e.GET_GUILD="GET_GUILD";e.GET_CHANNEL="GET_CHANNEL";e.GET_CHANNELS="GET_CHANNELS";e.SELECT_VOICE_CHANNEL="SELECT_VOICE_CHANNEL";e.SELECT_TEXT_CHANNEL="SELECT_TEXT_CHANNEL";e.SUBSCRIBE="SUBSCRIBE";e.UNSUBSCRIBE="UNSUBSCRIBE";e.CAPTURE_SHORTCUT="CAPTURE_SHORTCUT";e.SET_CERTIFIED_DEVICES="SET_CERTIFIED_DEVICES";e.SET_ACTIVITY="SET_ACTIVITY";e.GET_SKUS="GET_SKUS";e.GET_ENTITLEMENTS="GET_ENTITLEMENTS";e.GET_SKUS_EMBEDDED="GET_SKUS_EMBEDDED";e.GET_ENTITLEMENTS_EMBEDDED="GET_ENTITLEMENTS_EMBEDDED";e.START_PURCHASE="START_PURCHASE";e.SET_CONFIG="SET_CONFIG";e.SEND_ANALYTICS_EVENT="SEND_ANALYTICS_EVENT";e.USER_SETTINGS_GET_LOCALE="USER_SETTINGS_GET_LOCALE";e.OPEN_EXTERNAL_LINK="OPEN_EXTERNAL_LINK";e.ENCOURAGE_HW_ACCELERATION="ENCOURAGE_HW_ACCELERATION";e.CAPTURE_LOG="CAPTURE_LOG";e.SET_ORIENTATION_LOCK_STATE="SET_ORIENTATION_LOCK_STATE";e.OPEN_INVITE_DIALOG="OPEN_INVITE_DIALOG";e.GET_PLATFORM_BEHAVIORS="GET_PLATFORM_BEHAVIORS";e.GET_CHANNEL_PERMISSIONS="GET_CHANNEL_PERMISSIONS";e.AUTHENTICATE="AUTHENTICATE";e.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS="GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS";e.GET_QUEST_ENROLLMENT_STATUS="GET_QUEST_ENROLLMENT_STATUS";e.GET_RELATIONSHIPS="GET_RELATIONSHIPS";e.GET_USER="GET_USER";e.INITIATE_IMAGE_UPLOAD="INITIATE_IMAGE_UPLOAD";e.INVITE_USER_EMBEDDED="INVITE_USER_EMBEDDED";e.OPEN_SHARE_MOMENT_DIALOG="OPEN_SHARE_MOMENT_DIALOG";e.QUEST_START_TIMER="QUEST_START_TIMER";e.SHARE_INTERACTION="SHARE_INTERACTION";e.SHARE_LINK="SHARE_LINK"})(Qt||(Qt={}));const en=Te({cmd:le(),data:ge(),evt:_e(),nonce:le()}).passthrough();const tn=Object.assign(Object.assign({},Pt.shape.scopes.element.overlayType._def.innerType.options[0].Values),{UNHANDLED:-1});const nn=Rt(tn);const rn=Gt.shape.relationships.element;const on=Te({id:le(),username:le(),discriminator:le(),global_name:le().optional().nullable(),avatar:le().optional().nullable(),avatar_decoration_data:Te({asset:le(),sku_id:le().optional()}).nullable(),bot:pe(),flags:ue().optional().nullable(),premium_type:ue().optional().nullable()});const an=Te({user:on,nick:le().optional().nullable(),roles:be(le()),joined_at:le(),deaf:pe(),mute:pe()});const sn=Te({user_id:le(),nick:le().optional().nullable(),guild_id:le(),avatar:le().optional().nullable(),avatar_decoration_data:Te({asset:le(),sku_id:le().optional().nullable()}).optional().nullable(),color_string:le().optional().nullable()});const ln=Te({id:le(),name:le().optional().nullable(),roles:be(le()).optional().nullable(),user:on.optional().nullable(),require_colons:pe().optional().nullable(),managed:pe().optional().nullable(),animated:pe().optional().nullable(),available:pe().optional().nullable()});const un=Te({mute:pe(),deaf:pe(),self_mute:pe(),self_deaf:pe(),suppress:pe()});const cn=Te({mute:pe(),nick:le(),user:on,voice_state:un,volume:ue()});const dn={UNHANDLED:-1,IDLE:"idle",DND:"dnd",ONLINE:"online",OFFLINE:"offline"};const pn=Rt(dn);const fn=Te({name:le(),type:ue(),url:le().optional().nullable(),created_at:ue().optional().nullable(),timestamps:Te({start:ue(),end:ue()}).partial().optional().nullable(),application_id:le().optional().nullable(),details:le().optional().nullable(),details_url:le().url().optional().nullable(),state:le().optional().nullable(),state_url:le().url().optional().nullable(),emoji:ln.optional().nullable(),party:Te({id:le().optional().nullable(),size:be(ue()).optional().nullable()}).optional().nullable(),assets:Te({large_image:le().nullable(),large_text:le().nullable(),large_url:le().url().optional().nullable(),small_image:le().nullable(),small_text:le().nullable(),small_url:le().url().optional().nullable()}).partial().optional().nullable(),secrets:Te({join:le(),match:le()}).partial().optional().nullable(),instance:pe().optional().nullable(),flags:ue().optional().nullable()});const hn={UNHANDLED:-1,ROLE:0,MEMBER:1};const mn=Te({id:le(),type:Rt(hn),allow:le(),deny:le()});const _n={UNHANDLED:-1,DM:1,GROUP_DM:3,GUILD_TEXT:0,GUILD_VOICE:2,GUILD_CATEGORY:4,GUILD_ANNOUNCEMENT:5,GUILD_STORE:6,ANNOUNCEMENT_THREAD:10,PUBLIC_THREAD:11,PRIVATE_THREAD:12,GUILD_STAGE_VOICE:13,GUILD_DIRECTORY:14,GUILD_FORUM:15};const vn=Te({id:le(),type:Rt(_n),guild_id:le().optional().nullable(),position:ue().optional().nullable(),permission_overwrites:be(mn).optional().nullable(),name:le().optional().nullable(),topic:le().optional().nullable(),nsfw:pe().optional().nullable(),last_message_id:le().optional().nullable(),bitrate:ue().optional().nullable(),user_limit:ue().optional().nullable(),rate_limit_per_user:ue().optional().nullable(),recipients:be(on).optional().nullable(),icon:le().optional().nullable(),owner_id:le().optional().nullable(),application_id:le().optional().nullable(),parent_id:le().optional().nullable(),last_pin_timestamp:le().optional().nullable()});const gn=Te({user:on,guild_id:le(),status:pn,activities:be(fn),client_status:Te({desktop:pn,mobile:pn,web:pn}).partial()});const yn=Te({id:le(),name:le(),color:ue(),hoist:pe(),position:ue(),permissions:le(),managed:pe(),mentionable:pe()});const En=Te({id:le(),name:le(),owner_id:le(),icon:le().nullable(),icon_hash:le().optional().nullable(),splash:le().nullable(),discovery_splash:le().nullable(),owner:pe().optional().nullable(),permissions:le().optional().nullable(),region:le(),afk_channel_id:le().nullable(),afk_timeout:ue(),widget_enabled:pe().optional().nullable(),widget_channel_id:le().optional().nullable(),verification_level:ue(),default_message_notifications:ue(),explicit_content_filter:ue(),roles:be(yn),emojis:be(ln),features:be(le()),mfa_level:ue(),application_id:le().nullable(),system_channel_id:le().nullable(),system_channel_flags:ue(),rules_channel_id:le().nullable(),joined_at:le().optional().nullable(),large:pe().optional().nullable(),unavailable:pe().optional().nullable(),member_count:ue().optional().nullable(),voice_states:be(un).optional().nullable(),members:be(an).optional().nullable(),channels:be(vn).optional().nullable(),presences:be(gn).optional().nullable(),max_presences:ue().optional().nullable(),max_members:ue().optional().nullable(),vanity_url_code:le().nullable(),description:le().nullable(),banner:le().nullable(),premium_tier:ue(),premium_subscription_count:ue().optional().nullable(),preferred_locale:le(),public_updates_channel_id:le().nullable(),max_video_channel_users:ue().optional().nullable(),approximate_member_count:ue().optional().nullable(),approximate_presence_count:ue().optional().nullable()});const bn=Te({id:le(),guild_id:le(),type:ue(),name:le()});const Tn=Te({id:le(),filename:le(),size:ue(),url:le(),proxy_url:le(),height:ue().optional().nullable(),width:ue().optional().nullable()});const Sn=Te({text:le(),icon_url:le().optional().nullable(),proxy_icon_url:le().optional().nullable()});const Nn=Te({url:le().optional().nullable(),proxy_url:le().optional().nullable(),height:ue().optional().nullable(),width:ue().optional().nullable()});const An=Nn.omit({proxy_url:true});const In=Te({name:le().optional().nullable(),url:le().optional().nullable()});const wn=Te({name:le().optional().nullable(),url:le().optional().nullable(),icon_url:le().optional().nullable(),proxy_icon_url:le().optional().nullable()});const On=Te({name:le(),value:le(),inline:pe()});const Rn=Te({title:le().optional().nullable(),type:le().optional().nullable(),description:le().optional().nullable(),url:le().optional().nullable(),timestamp:le().optional().nullable(),color:ue().optional().nullable(),footer:Sn.optional().nullable(),image:Nn.optional().nullable(),thumbnail:Nn.optional().nullable(),video:An.optional().nullable(),provider:In.optional().nullable(),author:wn.optional().nullable(),fields:be(On).optional().nullable()});const Zn=Te({count:ue(),me:pe(),emoji:ln});const Dn=Te({type:ue(),party_id:le().optional().nullable()});const Cn=Te({id:le(),cover_image:le().optional().nullable(),description:le(),icon:le().optional().nullable(),name:le()});const Ln=Te({message_id:le().optional().nullable(),channel_id:le().optional().nullable(),guild_id:le().optional().nullable()});const Pn=Te({id:le(),channel_id:le(),guild_id:le().optional().nullable(),author:on.optional().nullable(),member:an.optional().nullable(),content:le(),timestamp:le(),edited_timestamp:le().optional().nullable(),tts:pe(),mention_everyone:pe(),mentions:be(on),mention_roles:be(le()),mention_channels:be(bn),attachments:be(Tn),embeds:be(Rn),reactions:be(Zn).optional().nullable(),nonce:Ne([le(),ue()]).optional().nullable(),pinned:pe(),webhook_id:le().optional().nullable(),type:ue(),activity:Dn.optional().nullable(),application:Cn.optional().nullable(),message_reference:Ln.optional().nullable(),flags:ue().optional().nullable(),stickers:be(ge()).optional().nullable(),referenced_message:ge().optional().nullable()});const kn=Te({id:le(),name:le()});const xn={UNHANDLED:-1,KEYBOARD_KEY:0,MOUSE_BUTTON:1,KEYBOARD_MODIFIER_KEY:2,GAMEPAD_BUTTON:3};const Un=Te({type:Rt(xn),code:ue(),name:le()});const Mn={UNHANDLED:-1,PUSH_TO_TALK:"PUSH_TO_TALK",VOICE_ACTIVITY:"VOICE_ACTIVITY"};const jn=Te({type:Rt(Mn),auto_threshold:pe(),threshold:ue(),shortcut:be(Un),delay:ue()});const Gn=Te({device_id:le(),volume:ue(),available_devices:be(kn)});const Bn={UNHANDLED:-1,AUDIO_INPUT:"AUDIO_INPUT",AUDIO_OUTPUT:"AUDIO_OUTPUT",VIDEO_INPUT:"VIDEO_INPUT"};const Vn=Te({type:Rt(Bn),id:le(),vendor:Te({name:le(),url:le()}),model:Te({name:le(),url:le()}),related:be(le()),echo_cancellation:pe().optional().nullable(),noise_suppression:pe().optional().nullable(),automatic_gain_control:pe().optional().nullable(),hardware_mute:pe().optional().nullable()});const Hn={UNHANDLED:-1,APPLICATION:1,DLC:2,CONSUMABLE:3,BUNDLE:4,SUBSCRIPTION:5};const Fn=Te({id:le(),name:le(),type:Rt(Hn),price:Te({amount:ue(),currency:le()}),application_id:le(),flags:ue(),release_date:le().nullable()});const Kn={UNHANDLED:-1,PURCHASE:1,PREMIUM_SUBSCRIPTION:2,DEVELOPER_GIFT:3,TEST_MODE_PURCHASE:4,FREE_PURCHASE:5,USER_GIFT:6,PREMIUM_PURCHASE:7};const qn=Te({id:le(),sku_id:le(),application_id:le(),user_id:le(),gift_code_flags:ue(),type:Rt(Kn),gifter_user_id:le().optional().nullable(),branches:be(le()).optional().nullable(),starts_at:le().optional().nullable(),ends_at:le().optional().nullable(),parent_id:le().optional().nullable(),consumed:pe().optional().nullable(),deleted:pe().optional().nullable(),gift_code_batch_id:le().optional().nullable()});const $n={UNHANDLED:-1,UNLOCKED:1,PORTRAIT:2,LANDSCAPE:3};const zn=Rt($n);const Yn={UNHANDLED:-1,NOMINAL:0,FAIR:1,SERIOUS:2,CRITICAL:3};const Wn=Rt(Yn);const Xn={UNHANDLED:-1,PORTRAIT:0,LANDSCAPE:1};const Jn=Rt(Xn);const Qn={UNHANDLED:-1,FOCUSED:0,PIP:1,GRID:2};const er=Rt(Qn);var tr=Object.freeze(Object.defineProperty({__proto__:null,Activity:fn,Attachment:Tn,CertifiedDevice:Vn,CertifiedDeviceTypeObject:Bn,Channel:vn,ChannelMention:bn,ChannelTypesObject:_n,get Commands(){return Qt},DISPATCH:Jt,Embed:Rn,EmbedAuthor:wn,EmbedField:On,EmbedFooter:Sn,EmbedProvider:In,Emoji:ln,Entitlement:qn,EntitlementTypesObject:Kn,Guild:En,GuildMember:an,GuildMemberRPC:sn,Image:Nn,KeyTypesObject:xn,LayoutMode:er,LayoutModeTypeObject:Qn,Message:Pn,MessageActivity:Dn,MessageApplication:Cn,MessageReference:Ln,Orientation:Jn,OrientationLockState:zn,OrientationLockStateTypeObject:$n,OrientationTypeObject:Xn,PermissionOverwrite:mn,PermissionOverwriteTypeObject:hn,PresenceUpdate:gn,Reaction:Zn,ReceiveFramePayload:en,Relationship:rn,Role:yn,Scopes:nn,ScopesObject:tn,ShortcutKey:Un,Sku:Fn,SkuTypeObject:Hn,Status:pn,StatusObject:dn,ThermalState:Wn,ThermalStateTypeObject:Yn,User:on,UserVoiceState:cn,Video:An,VoiceDevice:kn,VoiceSettingModeTypeObject:Mn,VoiceSettingsIO:Gn,VoiceSettingsMode:jn,VoiceState:un},Symbol.toStringTag,{value:"Module"}));const nr="ERROR";var rr;(function(e){e.READY="READY";e.VOICE_STATE_UPDATE="VOICE_STATE_UPDATE";e.SPEAKING_START="SPEAKING_START";e.SPEAKING_STOP="SPEAKING_STOP";e.ACTIVITY_LAYOUT_MODE_UPDATE="ACTIVITY_LAYOUT_MODE_UPDATE";e.ORIENTATION_UPDATE="ORIENTATION_UPDATE";e.CURRENT_USER_UPDATE="CURRENT_USER_UPDATE";e.CURRENT_GUILD_MEMBER_UPDATE="CURRENT_GUILD_MEMBER_UPDATE";e.ENTITLEMENT_CREATE="ENTITLEMENT_CREATE";e.THERMAL_STATE_UPDATE="THERMAL_STATE_UPDATE";e.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE="ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE";e.RELATIONSHIP_UPDATE="RELATIONSHIP_UPDATE";e.ACTIVITY_JOIN="ACTIVITY_JOIN";e.QUEST_ENROLLMENT_STATUS_UPDATE="QUEST_ENROLLMENT_STATUS_UPDATE"})(rr||(rr={}));const or=en.extend({evt:ke(rr),nonce:le().nullable(),cmd:Le(Jt),data:Te({}).passthrough()});const ir=en.extend({evt:Le(nr),data:Te({code:ue(),message:le().optional()}).passthrough(),cmd:ke(Qt),nonce:le().nullable()});const ar=or.extend({evt:le()});const sr=Ne([or,ar,ir]);function lr(e){const t=e.evt;if(!(t in rr))throw new Error(`Unrecognized event type ${e.evt}`);const n=ur[t];return n.payload.parse(e)}const ur={[rr.READY]:{payload:or.extend({evt:Le(rr.READY),data:Te({v:ue(),config:Te({cdn_host:le().optional(),api_endpoint:le(),environment:le()}),user:Te({id:le(),username:le(),discriminator:le(),avatar:le().optional()}).optional()})})},[rr.VOICE_STATE_UPDATE]:{payload:or.extend({evt:Le(rr.VOICE_STATE_UPDATE),data:cn}),subscribeArgs:Te({channel_id:le()})},[rr.SPEAKING_START]:{payload:or.extend({evt:Le(rr.SPEAKING_START),data:Te({lobby_id:le().optional(),channel_id:le().optional(),user_id:le()})}),subscribeArgs:Te({lobby_id:le().nullable().optional(),channel_id:le().nullable().optional()})},[rr.SPEAKING_STOP]:{payload:or.extend({evt:Le(rr.SPEAKING_STOP),data:Te({lobby_id:le().optional(),channel_id:le().optional(),user_id:le()})}),subscribeArgs:Te({lobby_id:le().nullable().optional(),channel_id:le().nullable().optional()})},[rr.ACTIVITY_LAYOUT_MODE_UPDATE]:{payload:or.extend({evt:Le(rr.ACTIVITY_LAYOUT_MODE_UPDATE),data:Te({layout_mode:Rt(Qn)})})},[rr.ORIENTATION_UPDATE]:{payload:or.extend({evt:Le(rr.ORIENTATION_UPDATE),data:Te({screen_orientation:Rt(Xn),
/**
                 * @deprecated use screen_orientation instead
                 */
orientation:ke(Nt)})})},[rr.CURRENT_USER_UPDATE]:{payload:or.extend({evt:Le(rr.CURRENT_USER_UPDATE),data:on})},[rr.CURRENT_GUILD_MEMBER_UPDATE]:{payload:or.extend({evt:Le(rr.CURRENT_GUILD_MEMBER_UPDATE),data:sn}),subscribeArgs:Te({guild_id:le()})},[rr.ENTITLEMENT_CREATE]:{payload:or.extend({evt:Le(rr.ENTITLEMENT_CREATE),data:Te({entitlement:qn})})},[rr.THERMAL_STATE_UPDATE]:{payload:or.extend({evt:Le(rr.THERMAL_STATE_UPDATE),data:Te({thermal_state:Wn})})},[rr.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE]:{payload:or.extend({evt:Le(rr.ACTIVITY_INSTANCE_PARTICIPANTS_UPDATE),data:Te({participants:kt.shape.participants})})},[rr.RELATIONSHIP_UPDATE]:{payload:or.extend({evt:Le(rr.RELATIONSHIP_UPDATE),data:rn})},[rr.ACTIVITY_JOIN]:{payload:or.extend({evt:Le(rr.ACTIVITY_JOIN),data:Te({applicationId:le(),secret:le()})})},[rr.QUEST_ENROLLMENT_STATUS_UPDATE]:{payload:or.extend({evt:Le(rr.QUEST_ENROLLMENT_STATUS_UPDATE),data:Te({quest_id:le(),is_enrolled:pe(),enrolled_at:le().date()})})}};function cr(e,t){throw t}const dr=Te({}).nullable();const pr=Te({code:le()});const fr=Te({guilds:be(Te({id:le(),name:le()}))});const hr=Te({id:le(),name:le(),icon_url:le().optional(),members:be(an)});const mr=Te({id:le(),type:Rt(_n),guild_id:le().optional().nullable(),name:le().optional().nullable(),topic:le().optional().nullable(),bitrate:ue().optional().nullable(),user_limit:ue().optional().nullable(),position:ue().optional().nullable(),voice_states:be(cn),messages:be(Pn)});const _r=Te({channels:be(vn)});const vr=mr.nullable();const gr=mr.nullable();const yr=mr.nullable();const Er=Te({input:Gn,output:Gn,mode:jn,automatic_gain_control:pe(),echo_cancellation:pe(),noise_suppression:pe(),qos:pe(),silence_warning:pe(),deaf:pe(),mute:pe()});const br=Te({evt:le()});const Tr=Te({shortcut:Un});const Sr=fn;const Nr=Te({skus:be(Fn)});const Ar=Te({entitlements:be(qn)});const Ir=be(qn).nullable();const wr=Te({use_interactive_pip:pe()});const Or=Te({locale:le()});const Rr=Te({enabled:pe()});const Zr=Te({permissions:de().or(le())});const Dr=Zt(Te({opened:pe().or(_e())}).default({opened:null}));const Cr=Te({iosKeyboardResizesView:Me(pe())});const Lr=en.extend({cmd:ke(Qt),evt:_e()});function Pr({cmd:e,data:t}){switch(e){case Qt.AUTHORIZE:return pr.parse(t);case Qt.CAPTURE_SHORTCUT:return Tr.parse(t);case Qt.ENCOURAGE_HW_ACCELERATION:return Rr.parse(t);case Qt.GET_CHANNEL:return mr.parse(t);case Qt.GET_CHANNELS:return _r.parse(t);case Qt.GET_CHANNEL_PERMISSIONS:return Zr.parse(t);case Qt.GET_GUILD:return hr.parse(t);case Qt.GET_GUILDS:return fr.parse(t);case Qt.GET_PLATFORM_BEHAVIORS:return Cr.parse(t);case Qt.GET_CHANNEL:return mr.parse(t);case Qt.SELECT_TEXT_CHANNEL:return yr.parse(t);case Qt.SELECT_VOICE_CHANNEL:return gr.parse(t);case Qt.SET_ACTIVITY:return Sr.parse(t);case Qt.GET_SKUS_EMBEDDED:return Nr.parse(t);case Qt.GET_ENTITLEMENTS_EMBEDDED:return Ar.parse(t);case Qt.SET_CONFIG:return wr.parse(t);case Qt.START_PURCHASE:return Ir.parse(t);case Qt.SUBSCRIBE:case Qt.UNSUBSCRIBE:return br.parse(t);case Qt.USER_SETTINGS_GET_LOCALE:return Or.parse(t);case Qt.OPEN_EXTERNAL_LINK:return Dr.parse(t);case Qt.SET_ORIENTATION_LOCK_STATE:case Qt.SET_CERTIFIED_DEVICES:case Qt.SEND_ANALYTICS_EVENT:case Qt.OPEN_INVITE_DIALOG:case Qt.CAPTURE_LOG:case Qt.GET_SKUS:case Qt.GET_ENTITLEMENTS:return dr.parse(t);case Qt.AUTHENTICATE:case Qt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS:case Qt.GET_QUEST_ENROLLMENT_STATUS:case Qt.GET_RELATIONSHIPS:case Qt.GET_USER:case Qt.INITIATE_IMAGE_UPLOAD:case Qt.INVITE_USER_EMBEDDED:case Qt.OPEN_SHARE_MOMENT_DIALOG:case Qt.QUEST_START_TIMER:case Qt.SHARE_INTERACTION:case Qt.SHARE_LINK:const{response:n}=Xt[e];return n.parse(t);default:cr(e,new Error(`Unrecognized command ${e}`))}}function kr(e){return Object.assign(Object.assign({},e),{data:Pr(e)})}var xr=Object.freeze(Object.defineProperty({__proto__:null,AuthenticateResponse:Pt,AuthorizeResponse:pr,CaptureShortcutResponse:Tr,EmptyResponse:dr,EncourageHardwareAccelerationResponse:Rr,GetChannelPermissionsResponse:Zr,GetChannelResponse:mr,GetChannelsResponse:_r,GetEntitlementsResponse:Ar,GetGuildResponse:hr,GetGuildsResponse:fr,GetPlatformBehaviorsResponse:Cr,GetSkusResponse:Nr,InitiateImageUploadResponse:Dt,NullableChannelResponse:vr,OpenExternalLinkResponse:Dr,ResponseFrame:Lr,SelectTextChannelResponse:yr,SelectVoiceChannelResponse:gr,SetActivityResponse:Sr,SetConfigResponse:wr,StartPurchaseResponse:Ir,SubscribeResponse:br,UserSettingsGetLocaleResponse:Or,VoiceSettingsResponse:Er,parseResponsePayload:kr},Symbol.toStringTag,{value:"Module"}));Te({frame_id:le(),platform:ke(At).optional().nullable()});Te({v:Le(1),encoding:Le("json").optional(),client_id:le(),frame_id:le()});const Ur=Te({code:ue(),message:le().optional()});const Mr=Te({evt:le().nullable(),nonce:le().nullable(),data:ge().nullable(),cmd:le()}).passthrough();function jr(e){const t=Mr.parse(e);return t.evt!=null?t.evt===nr?ir.parse(t):lr(sr.parse(t)):kr(Lr.passthrough().parse(t))}function Gr(e,t,n,r=()=>{}){const o=en.extend({cmd:Le(t),data:n});return async n=>{const i=await e({cmd:t,args:n,transfer:r(n)});const a=o.parse(i);return a.data}}function Br(e,t=()=>{}){const n=Xt[e].response;const r=en.extend({cmd:Le(e),data:n});return n=>async o=>{const i=await n({cmd:e,args:o,transfer:t(o)});const a=r.parse(i);return a.data}}const Vr=e=>Gr(e,Qt.AUTHORIZE,pr);const Hr=e=>Gr(e,Qt.CAPTURE_LOG,dr);const Fr=e=>Gr(e,Qt.ENCOURAGE_HW_ACCELERATION,Rr);const Kr=e=>Gr(e,Qt.GET_CHANNEL,mr);const qr=e=>Gr(e,Qt.GET_ENTITLEMENTS_EMBEDDED,Ar);const $r=e=>Gr(e,Qt.GET_SKUS_EMBEDDED,Nr);const zr=e=>Gr(e,Qt.GET_CHANNEL_PERMISSIONS,Zr)
/**
 * Returns an object with information about platform behaviors
 * This command can be utilized to inform and react to a breaking change in platform behavior
 *
 * @returns {GetPlatformBehaviorsPayload} payload - The command return value
 * @returns {boolean} payload.data.iosKeyboardResizesView - If on iOS the webview is resized when the keyboard is opened
 */;const Yr=e=>Gr(e,Qt.GET_PLATFORM_BEHAVIORS,Cr);const Wr=e=>Gr(e,Qt.OPEN_EXTERNAL_LINK,Dr);const Xr=e=>Gr(e,Qt.OPEN_INVITE_DIALOG,dr);fn.pick({state:true,state_url:true,details:true,details_url:true,timestamps:true,assets:true,party:true,secrets:true,instance:true,type:true}).extend({type:fn.shape.type.optional(),instance:fn.shape.instance.optional()}).nullable();const Jr=e=>Gr(e,Qt.SET_ACTIVITY,Sr);const Qr=e=>Gr(e,Qt.SET_CONFIG,wr);function eo({sendCommand:e,cmd:t,response:n,fallbackTransform:r,transferTransform:o=()=>{}}){const i=en.extend({cmd:Le(t),data:n});return async n=>{try{const r=await e({cmd:t,args:n,transfer:o(n)});const a=i.parse(r);return a.data}catch(a){if(a.code===St.INVALID_PAYLOAD){const a=r(n);const s=await e({cmd:t,args:a,transfer:o(a)});const l=i.parse(s);return l.data}throw a}}}const to=e=>({lock_state:e.lock_state,picture_in_picture_lock_state:e.picture_in_picture_lock_state});const no=e=>eo({sendCommand:e,cmd:Qt.SET_ORIENTATION_LOCK_STATE,response:dr,fallbackTransform:to});const ro=e=>Gr(e,Qt.START_PURCHASE,Ir);const oo=e=>Gr(e,Qt.USER_SETTINGS_GET_LOCALE,Or);const io=Br(zt.AUTHENTICATE);const ao=Br(zt.GET_ACTIVITY_INSTANCE_CONNECTED_PARTICIPANTS);const so=Br(zt.GET_QUEST_ENROLLMENT_STATUS);const lo=Br(zt.GET_RELATIONSHIPS);const uo=Br(zt.GET_USER);
/**
 * Triggers the file upload flow in the Discord app. The user will be prompted to select a valid image file
 * and then it will be uploaded on the app side to the Discord CDN.
 *
 * NOTE: The URL provided by the API is an ephemeral attachment URL, so the image will not be permanently
 * accessible at the link provided.
 *
 * @returns {Promise<{image_url: string}>}
 */const co=Br(zt.INITIATE_IMAGE_UPLOAD);const po=Br(zt.INVITE_USER_EMBEDDED);
/**
 * Opens the Share Moment Dialog in the user's client, allowing them to share the media at mediaUrl as a message.
 *
 * @param {string} mediaUrl - a Discord CDN URL for the piece of media to be shared.
 * @returns {Promise<void>}
 */const fo=Br(zt.OPEN_SHARE_MOMENT_DIALOG);const ho=Br(zt.QUEST_START_TIMER);const mo=Br(zt.SHARE_INTERACTION);
/**
 * Opens a modal in the user's client to share the Activity link.
 *
 * @param {string} referrer_id
 * @param {string} custom_id
 * @param {string} message - message sent alongside link when shared.
 * @returns {Promise<{success: boolean>} whether or not the user shared the link to someone
 */const _o=Br(zt.SHARE_LINK);function vo(e){return{authorize:Vr(e),captureLog:Hr(e),encourageHardwareAcceleration:Fr(e),getChannel:Kr(e),getChannelPermissions:zr(e),getEntitlements:qr(e),getPlatformBehaviors:Yr(e),getSkus:$r(e),openExternalLink:Wr(e),openInviteDialog:Xr(e),setActivity:Jr(e),setConfig:Qr(e),setOrientationLockState:no(e),startPurchase:ro(e),userSettingsGetLocale:oo(e),getInstanceConnectedParticipants:ao(e),authenticate:io(e),getActivityInstanceConnectedParticipants:ao(e),getQuestEnrollmentStatus:so(e),getRelationships:lo(e),getUser:uo(e),initiateImageUpload:co(e),inviteUserEmbedded:po(e),openShareMomentDialog:fo(e),questStartTimer:ho(e),shareInteraction:mo(e),shareLink:_o(e)}}class SDKError extends Error{constructor(e,t=""){super(t);this.code=e;this.message=t;this.name="Discord SDK Error"}}function go(){return{disableConsoleLogOverride:false}}const yo=["log","warn","debug","info","error"];function Eo(e,t,n){const r=e[t];const o=e;r&&(e[t]=function(){const e=[].slice.call(arguments);const i=""+e.join(" ");n(t,i);r.apply(o,e)})}var bo="2.4.0";const To=typeof crypto!=="undefined"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto);var So={randomUUID:To};let No;const Ao=new Uint8Array(16);function Io(){if(!No){if(typeof crypto==="undefined"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");No=crypto.getRandomValues.bind(crypto)}return No(Ao)}const wo=[];for(let e=0;e<256;++e)wo.push((e+256).toString(16).slice(1));function Oo(e,t=0){return(wo[e[t+0]]+wo[e[t+1]]+wo[e[t+2]]+wo[e[t+3]]+"-"+wo[e[t+4]]+wo[e[t+5]]+"-"+wo[e[t+6]]+wo[e[t+7]]+"-"+wo[e[t+8]]+wo[e[t+9]]+"-"+wo[e[t+10]]+wo[e[t+11]]+wo[e[t+12]]+wo[e[t+13]]+wo[e[t+14]]+wo[e[t+15]]).toLowerCase()}function Ro(e,t,n){if(So.randomUUID&&!t&&!e)return So.randomUUID();e=e||{};const r=e.random??e.rng?.()??Io();if(r.length<16)throw new Error("Random bytes length must be >= 16");r[6]=r[6]&15|64;r[8]=r[8]&63|128;return Oo(r)}var Zo;(function(e){e[e.HANDSHAKE=0]="HANDSHAKE";e[e.FRAME=1]="FRAME";e[e.CLOSE=2]="CLOSE";e[e.HELLO=3]="HELLO"})(Zo||(Zo={}));const Do=new Set(Co());function Co(){return typeof window==="undefined"?[]:[window.location.origin,"https://discord.com","https://discordapp.com","https://ptb.discord.com","https://ptb.discordapp.com","https://canary.discord.com","https://canary.discordapp.com","https://staging.discord.co","http://localhost:3333","https://pax.discord.com","null"]}function Lo(){var e;return[(e=window.parent.opener)!==null&&e!==void 0?e:window.parent,!document.referrer?"*":document.referrer]}class DiscordSDK{getTransfer(e){var t;switch(e.cmd){case Qt.SUBSCRIBE:case Qt.UNSUBSCRIBE:return;default:return(t=e.transfer)!==null&&t!==void 0?t:void 0}}constructor(e,t){this.sdkVersion=bo;this.mobileAppVersion=null;this.source=null;this.sourceOrigin="";this.eventBus=new a;this.pendingCommands=new Map;this.sendCommand=e=>{var t;if(this.source==null)throw new Error("Attempting to send message before initialization");const n=Ro();(t=this.source)===null||t===void 0?void 0:t.postMessage([Zo.FRAME,Object.assign(Object.assign({},e),{nonce:n})],this.sourceOrigin,this.getTransfer(e));const r=new Promise(((e,t)=>{this.pendingCommands.set(n,{resolve:e,reject:t})}));return r};this.commands=vo(this.sendCommand);this.handleMessage=e=>{if(!Do.has(e.origin))return;const t=e.data;if(!Array.isArray(t))return;const[n,r]=t;switch(n){case Zo.HELLO:return;case Zo.CLOSE:return this.handleClose(r);case Zo.HANDSHAKE:return this.handleHandshake();case Zo.FRAME:return this.handleFrame(r);default:throw new Error("Invalid message format")}};this.isReady=false;this.clientId=e;this.configuration=t!==null&&t!==void 0?t:go();typeof window!=="undefined"&&window.addEventListener("message",this.handleMessage);if(typeof window==="undefined"){this.frameId="";this.instanceId="";this.customId=null;this.referrerId=null;this.platform=At.DESKTOP;this.guildId=null;this.channelId=null;this.locationId=null;return}const n=new URLSearchParams(this._getSearch());const r=n.get("frame_id");if(!r)throw new Error("frame_id query param is not defined");this.frameId=r;const o=n.get("instance_id");if(!o)throw new Error("instance_id query param is not defined");this.instanceId=o;const i=n.get("platform");if(!i)throw new Error("platform query param is not defined");if(i!==At.DESKTOP&&i!==At.MOBILE)throw new Error(`Invalid query param "platform" of "${i}". Valid values are "${At.DESKTOP}" or "${At.MOBILE}"`);this.platform=i;this.customId=n.get("custom_id");this.referrerId=n.get("referrer_id");this.guildId=n.get("guild_id");this.channelId=n.get("channel_id");this.locationId=n.get("location_id");this.mobileAppVersion=n.get("mobile_app_version");[this.source,this.sourceOrigin]=Lo();this.addOnReadyListener();this.handshake()}close(e,t){var n;window.removeEventListener("message",this.handleMessage);const r=Ro();(n=this.source)===null||n===void 0?void 0:n.postMessage([Zo.CLOSE,{code:e,message:t,nonce:r}],this.sourceOrigin)}async subscribe(e,t,...n){const[r]=n;const o=this.eventBus.listenerCount(e);const i=this.eventBus.on(e,t);Object.values(rr).includes(e)&&e!==rr.READY&&o===0&&await this.sendCommand({cmd:Qt.SUBSCRIBE,args:r,evt:e});return i}async unsubscribe(e,t,...n){const[r]=n;e!==rr.READY&&this.eventBus.listenerCount(e)===1&&await this.sendCommand({cmd:Qt.UNSUBSCRIBE,evt:e,args:r});return this.eventBus.off(e,t)}async ready(){this.isReady||await new Promise((e=>{this.eventBus.once(rr.READY,e)}))}parseMajorMobileVersion(){if(this.mobileAppVersion&&this.mobileAppVersion.includes("."))try{return parseInt(this.mobileAppVersion.split(".")[0])}catch(e){return wt}return wt}handshake(){var e;const t={v:1,encoding:"json",client_id:this.clientId,frame_id:this.frameId};const n=this.parseMajorMobileVersion();(this.platform===At.DESKTOP||n>=Ot)&&(t.sdk_version=this.sdkVersion);(e=this.source)===null||e===void 0?void 0:e.postMessage([Zo.HANDSHAKE,t],this.sourceOrigin)}addOnReadyListener(){this.eventBus.once(rr.READY,(()=>{this.overrideConsoleLogging();this.isReady=true}))}overrideConsoleLogging(){if(this.configuration.disableConsoleLogOverride)return;const e=(e,t)=>{this.commands.captureLog({level:e,message:t})};yo.forEach((t=>{Eo(console,t,e)}))}handleClose(e){Ur.parse(e)}handleHandshake(){}handleFrame(e){var t,n;let r;try{r=jr(e)}catch(t){console.error("Failed to parse",e);console.error(t);return}if(r.cmd==="DISPATCH")this.eventBus.emit(r.evt,r.data);else{if(r.evt===nr){if(r.nonce!=null){(t=this.pendingCommands.get(r.nonce))===null||t===void 0?void 0:t.reject(r.data);this.pendingCommands.delete(r.nonce);return}this.eventBus.emit("error",new SDKError(r.data.code,r.data.message))}if(r.nonce==null){console.error("Missing nonce",e);return}(n=this.pendingCommands.get(r.nonce))===null||n===void 0?void 0:n.resolve(r);this.pendingCommands.delete(r.nonce)}}_getSearch(){return typeof window==="undefined"?"":window.location.search}}function Po(e,t){return bt.has(bt.deserialize(t),e)}var ko={can:Po};var xo,Uo=1e9,Mo={precision:20,rounding:4,toExpNeg:-7,toExpPos:21,LN10:"2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286"},jo=true,Go="[DecimalError] ",Bo=Go+"Invalid argument: ",Vo=Go+"Exponent out of range: ",Ho=Math.floor,Fo=Math.pow,Ko=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,qo=1e7,$o=7,zo=9007199254740991,Yo=Ho(zo/$o),Wo={};Wo.absoluteValue=Wo.abs=function(){var e=new this.constructor(this);e.s&&(e.s=1);return e};Wo.comparedTo=Wo.cmp=function(e){var t,n,r,o,i=this;e=new i.constructor(e);if(i.s!==e.s)return i.s||-e.s;if(i.e!==e.e)return i.e>e.e^i.s<0?1:-1;r=i.d.length;o=e.d.length;for(t=0,n=r<o?r:o;t<n;++t)if(i.d[t]!==e.d[t])return i.d[t]>e.d[t]^i.s<0?1:-1;return r===o?0:r>o^i.s<0?1:-1};Wo.decimalPlaces=Wo.dp=function(){var e=this,t=e.d.length-1,n=(t-e.e)*$o;t=e.d[t];if(t)for(;t%10==0;t/=10)n--;return n<0?0:n};Wo.dividedBy=Wo.div=function(e){return ei(this,new this.constructor(e))};Wo.dividedToIntegerBy=Wo.idiv=function(e){var t=this,n=t.constructor;return si(ei(t,new n(e),0,1),n.precision)};Wo.equals=Wo.eq=function(e){return!this.cmp(e)};Wo.exponent=function(){return ni(this)};Wo.greaterThan=Wo.gt=function(e){return this.cmp(e)>0};Wo.greaterThanOrEqualTo=Wo.gte=function(e){return this.cmp(e)>=0};Wo.isInteger=Wo.isint=function(){return this.e>this.d.length-2};Wo.isNegative=Wo.isneg=function(){return this.s<0};Wo.isPositive=Wo.ispos=function(){return this.s>0};Wo.isZero=function(){return this.s===0};Wo.lessThan=Wo.lt=function(e){return this.cmp(e)<0};Wo.lessThanOrEqualTo=Wo.lte=function(e){return this.cmp(e)<1};Wo.logarithm=Wo.log=function(e){var t,n=this,r=n.constructor,o=r.precision,i=o+5;if(e===void 0)e=new r(10);else{e=new r(e);if(e.s<1||e.eq(xo))throw Error(Go+"NaN")}if(n.s<1)throw Error(Go+(n.s?"NaN":"-Infinity"));if(n.eq(xo))return new r(0);jo=false;t=ei(ii(n,i),ii(e,i),i);jo=true;return si(t,o)};Wo.minus=Wo.sub=function(e){var t=this;e=new t.constructor(e);return t.s==e.s?li(t,e):Xo(t,(e.s=-e.s,e))};Wo.modulo=Wo.mod=function(e){var t,n=this,r=n.constructor,o=r.precision;e=new r(e);if(!e.s)throw Error(Go+"NaN");if(!n.s)return si(new r(n),o);jo=false;t=ei(n,e,0,1).times(e);jo=true;return n.minus(t)};Wo.naturalExponential=Wo.exp=function(){return ti(this)};Wo.naturalLogarithm=Wo.ln=function(){return ii(this)};Wo.negated=Wo.neg=function(){var e=new this.constructor(this);e.s=-e.s||0;return e};Wo.plus=Wo.add=function(e){var t=this;e=new t.constructor(e);return t.s==e.s?Xo(t,e):li(t,(e.s=-e.s,e))};Wo.precision=Wo.sd=function(e){var t,n,r,o=this;if(e!==void 0&&e!==!!e&&e!==1&&e!==0)throw Error(Bo+e);t=ni(o)+1;r=o.d.length-1;n=r*$o+1;r=o.d[r];if(r){for(;r%10==0;r/=10)n--;for(r=o.d[0];r>=10;r/=10)n++}return e&&t>n?t:n};Wo.squareRoot=Wo.sqrt=function(){var e,t,n,r,o,i,a,s=this,l=s.constructor;if(s.s<1){if(!s.s)return new l(0);throw Error(Go+"NaN")}e=ni(s);jo=false;o=Math.sqrt(+s);if(o==0||o==1/0){t=Qo(s.d);(t.length+e)%2==0&&(t+="0");o=Math.sqrt(t);e=Ho((e+1)/2)-(e<0||e%2);if(o==1/0)t="5e"+e;else{t=o.toExponential();t=t.slice(0,t.indexOf("e")+1)+e}r=new l(t)}else r=new l(o.toString());n=l.precision;o=a=n+3;for(;;){i=r;r=i.plus(ei(s,i,a+2)).times(.5);if(Qo(i.d).slice(0,a)===(t=Qo(r.d)).slice(0,a)){t=t.slice(a-3,a+1);if(o==a&&t=="4999"){si(i,n+1,0);if(i.times(i).eq(s)){r=i;break}}else if(t!="9999")break;a+=4}}jo=true;return si(r,n)};Wo.times=Wo.mul=function(e){var t,n,r,o,i,a,s,l,u,c=this,d=c.constructor,p=c.d,f=(e=new d(e)).d;if(!c.s||!e.s)return new d(0);e.s*=c.s;n=c.e+e.e;l=p.length;u=f.length;if(l<u){i=p;p=f;f=i;a=l;l=u;u=a}i=[];a=l+u;for(r=a;r--;)i.push(0);for(r=u;--r>=0;){t=0;for(o=l+r;o>r;){s=i[o]+f[r]*p[o-r-1]+t;i[o--]=s%qo|0;t=s/qo|0}i[o]=(i[o]+t)%qo|0}for(;!i[--a];)i.pop();t?++n:i.shift();e.d=i;e.e=n;return jo?si(e,d.precision):e};Wo.toDecimalPlaces=Wo.todp=function(e,t){var n=this,r=n.constructor;n=new r(n);if(e===void 0)return n;Jo(e,0,Uo);t===void 0?t=r.rounding:Jo(t,0,8);return si(n,e+ni(n)+1,t)};Wo.toExponential=function(e,t){var n,r=this,o=r.constructor;if(e===void 0)n=ui(r,true);else{Jo(e,0,Uo);t===void 0?t=o.rounding:Jo(t,0,8);r=si(new o(r),e+1,t);n=ui(r,true,e+1)}return n};Wo.toFixed=function(e,t){var n,r,o=this,i=o.constructor;if(e===void 0)return ui(o);Jo(e,0,Uo);t===void 0?t=i.rounding:Jo(t,0,8);r=si(new i(o),e+ni(o)+1,t);n=ui(r.abs(),false,e+ni(r)+1);return o.isneg()&&!o.isZero()?"-"+n:n};Wo.toInteger=Wo.toint=function(){var e=this,t=e.constructor;return si(new t(e),ni(e)+1,t.rounding)};Wo.toNumber=function(){return+this};Wo.toPower=Wo.pow=function(e){var t,n,r,o,i,a,s=this,l=s.constructor,u=12,c=+(e=new l(e));if(!e.s)return new l(xo);s=new l(s);if(!s.s){if(e.s<1)throw Error(Go+"Infinity");return s}if(s.eq(xo))return s;r=l.precision;if(e.eq(xo))return si(s,r);t=e.e;n=e.d.length-1;a=t>=n;i=s.s;if(a){if((n=c<0?-c:c)<=zo){o=new l(xo);t=Math.ceil(r/$o+4);jo=false;for(;;){if(n%2){o=o.times(s);ci(o.d,t)}n=Ho(n/2);if(n===0)break;s=s.times(s);ci(s.d,t)}jo=true;return e.s<0?new l(xo).div(o):si(o,r)}}else if(i<0)throw Error(Go+"NaN");i=i<0&&e.d[Math.max(t,n)]&1?-1:1;s.s=1;jo=false;o=e.times(ii(s,r+u));jo=true;o=ti(o);o.s=i;return o};Wo.toPrecision=function(e,t){var n,r,o=this,i=o.constructor;if(e===void 0){n=ni(o);r=ui(o,n<=i.toExpNeg||n>=i.toExpPos)}else{Jo(e,1,Uo);t===void 0?t=i.rounding:Jo(t,0,8);o=si(new i(o),e,t);n=ni(o);r=ui(o,e<=n||n<=i.toExpNeg,e)}return r};Wo.toSignificantDigits=Wo.tosd=function(e,t){var n=this,r=n.constructor;if(e===void 0){e=r.precision;t=r.rounding}else{Jo(e,1,Uo);t===void 0?t=r.rounding:Jo(t,0,8)}return si(new r(n),e,t)};Wo.toString=Wo.valueOf=Wo.val=Wo.toJSON=Wo[Symbol.for("nodejs.util.inspect.custom")]=function(){var e=this,t=ni(e),n=e.constructor;return ui(e,t<=n.toExpNeg||t>=n.toExpPos)};function Xo(e,t){var n,r,o,i,a,s,l,u,c=e.constructor,d=c.precision;if(!e.s||!t.s){t.s||(t=new c(e));return jo?si(t,d):t}l=e.d;u=t.d;a=e.e;o=t.e;l=l.slice();i=a-o;if(i){if(i<0){r=l;i=-i;s=u.length}else{r=u;o=a;s=l.length}a=Math.ceil(d/$o);s=a>s?a+1:s+1;if(i>s){i=s;r.length=1}r.reverse();for(;i--;)r.push(0);r.reverse()}s=l.length;i=u.length;if(s-i<0){i=s;r=u;u=l;l=r}for(n=0;i;){n=(l[--i]=l[i]+u[i]+n)/qo|0;l[i]%=qo}if(n){l.unshift(n);++o}for(s=l.length;l[--s]==0;)l.pop();t.d=l;t.e=o;return jo?si(t,d):t}function Jo(e,t,n){if(e!==~~e||e<t||e>n)throw Error(Bo+e)}function Qo(e){var t,n,r,o=e.length-1,i="",a=e[0];if(o>0){i+=a;for(t=1;t<o;t++){r=e[t]+"";n=$o-r.length;n&&(i+=oi(n));i+=r}a=e[t];r=a+"";n=$o-r.length;n&&(i+=oi(n))}else if(a===0)return"0";for(;a%10===0;)a/=10;return i+a}var ei=function(){function e(e,t){var n,r=0,o=e.length;for(e=e.slice();o--;){n=e[o]*t+r;e[o]=n%qo|0;r=n/qo|0}r&&e.unshift(r);return e}function t(e,t,n,r){var o,i;if(n!=r)i=n>r?1:-1;else for(o=i=0;o<n;o++)if(e[o]!=t[o]){i=e[o]>t[o]?1:-1;break}return i}function n(e,t,n){var r=0;for(;n--;){e[n]-=r;r=e[n]<t[n]?1:0;e[n]=r*qo+e[n]-t[n]}for(;!e[0]&&e.length>1;)e.shift()}return function(r,o,i,a){var s,l,u,c,d,p,f,h,m,_,v,g,y,E,b,T,S,N,A=r.constructor,I=r.s==o.s?1:-1,w=r.d,O=o.d;if(!r.s)return new A(r);if(!o.s)throw Error(Go+"Division by zero");l=r.e-o.e;S=O.length;b=w.length;f=new A(I);h=f.d=[];for(u=0;O[u]==(w[u]||0);)++u;O[u]>(w[u]||0)&&--l;g=i==null?i=A.precision:a?i+(ni(r)-ni(o))+1:i;if(g<0)return new A(0);g=g/$o+2|0;u=0;if(S==1){c=0;O=O[0];g++;for(;(u<b||c)&&g--;u++){y=c*qo+(w[u]||0);h[u]=y/O|0;c=y%O|0}}else{c=qo/(O[0]+1)|0;if(c>1){O=e(O,c);w=e(w,c);S=O.length;b=w.length}E=S;m=w.slice(0,S);_=m.length;for(;_<S;)m[_++]=0;N=O.slice();N.unshift(0);T=O[0];O[1]>=qo/2&&++T;do{c=0;s=t(O,m,S,_);if(s<0){v=m[0];S!=_&&(v=v*qo+(m[1]||0));c=v/T|0;if(c>1){c>=qo&&(c=qo-1);d=e(O,c);p=d.length;_=m.length;s=t(d,m,p,_);if(s==1){c--;n(d,S<p?N:O,p)}}else{c==0&&(s=c=1);d=O.slice()}p=d.length;p<_&&d.unshift(0);n(m,d,_);if(s==-1){_=m.length;s=t(O,m,S,_);if(s<1){c++;n(m,S<_?N:O,_)}}_=m.length}else if(s===0){c++;m=[0]}h[u++]=c;if(s&&m[0])m[_++]=w[E]||0;else{m=[w[E]];_=1}}while((E++<b||m[0]!==void 0)&&g--)}h[0]||h.shift();f.e=l;return si(f,a?i+ni(f)+1:i)}}();function ti(e,t){var n,r,o,i,a,s,l=0,u=0,c=e.constructor,d=c.precision;if(ni(e)>16)throw Error(Vo+ni(e));if(!e.s)return new c(xo);if(t==null){jo=false;s=d}else s=t;a=new c(.03125);while(e.abs().gte(.1)){e=e.times(a);u+=5}r=Math.log(Fo(2,u))/Math.LN10*2+5|0;s+=r;n=o=i=new c(xo);c.precision=s;for(;;){o=si(o.times(e),s);n=n.times(++l);a=i.plus(ei(o,n,s));if(Qo(a.d).slice(0,s)===Qo(i.d).slice(0,s)){while(u--)i=si(i.times(i),s);c.precision=d;return t==null?(jo=true,si(i,d)):i}i=a}}function ni(e){var t=e.e*$o,n=e.d[0];for(;n>=10;n/=10)t++;return t}function ri(e,t,n){if(t>e.LN10.sd()){jo=true;n&&(e.precision=n);throw Error(Go+"LN10 precision limit exceeded")}return si(new e(e.LN10),t)}function oi(e){var t="";for(;e--;)t+="0";return t}function ii(e,t){var n,r,o,i,a,s,l,u,c,d=1,p=10,f=e,h=f.d,m=f.constructor,_=m.precision;if(f.s<1)throw Error(Go+(f.s?"NaN":"-Infinity"));if(f.eq(xo))return new m(0);if(t==null){jo=false;u=_}else u=t;if(f.eq(10)){t==null&&(jo=true);return ri(m,u)}u+=p;m.precision=u;n=Qo(h);r=n.charAt(0);i=ni(f);if(!(Math.abs(i)<15e14)){l=ri(m,u+2,_).times(i+"");f=ii(new m(r+"."+n.slice(1)),u-p).plus(l);m.precision=_;return t==null?(jo=true,si(f,_)):f}while(r<7&&r!=1||r==1&&n.charAt(1)>3){f=f.times(e);n=Qo(f.d);r=n.charAt(0);d++}i=ni(f);if(r>1){f=new m("0."+n);i++}else f=new m(r+"."+n.slice(1));s=a=f=ei(f.minus(xo),f.plus(xo),u);c=si(f.times(f),u);o=3;for(;;){a=si(a.times(c),u);l=s.plus(ei(a,new m(o),u));if(Qo(l.d).slice(0,u)===Qo(s.d).slice(0,u)){s=s.times(2);i!==0&&(s=s.plus(ri(m,u+2,_).times(i+"")));s=ei(s,new m(d),u);m.precision=_;return t==null?(jo=true,si(s,_)):s}s=l;o+=2}}function ai(e,t){var n,r,o;(n=t.indexOf("."))>-1&&(t=t.replace(".",""));if((r=t.search(/e/i))>0){n<0&&(n=r);n+=+t.slice(r+1);t=t.substring(0,r)}else n<0&&(n=t.length);for(r=0;t.charCodeAt(r)===48;)++r;for(o=t.length;t.charCodeAt(o-1)===48;)--o;t=t.slice(r,o);if(t){o-=r;n=n-r-1;e.e=Ho(n/$o);e.d=[];r=(n+1)%$o;n<0&&(r+=$o);if(r<o){r&&e.d.push(+t.slice(0,r));for(o-=$o;r<o;)e.d.push(+t.slice(r,r+=$o));t=t.slice(r);r=$o-t.length}else r-=o;for(;r--;)t+="0";e.d.push(+t);if(jo&&(e.e>Yo||e.e<-Yo))throw Error(Vo+n)}else{e.s=0;e.e=0;e.d=[0]}return e}function si(e,t,n){var r,o,i,a,s,l,u,c,d=e.d;for(a=1,i=d[0];i>=10;i/=10)a++;r=t-a;if(r<0){r+=$o;o=t;u=d[c=0]}else{c=Math.ceil((r+1)/$o);i=d.length;if(c>=i)return e;u=i=d[c];for(a=1;i>=10;i/=10)a++;r%=$o;o=r-$o+a}if(n!==void 0){i=Fo(10,a-o-1);s=u/i%10|0;l=t<0||d[c+1]!==void 0||u%i;l=n<4?(s||l)&&(n==0||n==(e.s<0?3:2)):s>5||s==5&&(n==4||l||n==6&&(r>0?o>0?u/Fo(10,a-o):0:d[c-1])%10&1||n==(e.s<0?8:7))}if(t<1||!d[0]){if(l){i=ni(e);d.length=1;t=t-i-1;d[0]=Fo(10,($o-t%$o)%$o);e.e=Ho(-t/$o)||0}else{d.length=1;d[0]=e.e=e.s=0}return e}if(r==0){d.length=c;i=1;c--}else{d.length=c+1;i=Fo(10,$o-r);d[c]=o>0?(u/Fo(10,a-o)%Fo(10,o)|0)*i:0}if(l)for(;;){if(c==0){if((d[0]+=i)==qo){d[0]=1;++e.e}break}d[c]+=i;if(d[c]!=qo)break;d[c--]=0;i=1}for(r=d.length;d[--r]===0;)d.pop();if(jo&&(e.e>Yo||e.e<-Yo))throw Error(Vo+ni(e));return e}function li(e,t){var n,r,o,i,a,s,l,u,c,d,p=e.constructor,f=p.precision;if(!e.s||!t.s){t.s?t.s=-t.s:t=new p(e);return jo?si(t,f):t}l=e.d;d=t.d;r=t.e;u=e.e;l=l.slice();a=u-r;if(a){c=a<0;if(c){n=l;a=-a;s=d.length}else{n=d;r=u;s=l.length}o=Math.max(Math.ceil(f/$o),s)+2;if(a>o){a=o;n.length=1}n.reverse();for(o=a;o--;)n.push(0);n.reverse()}else{o=l.length;s=d.length;c=o<s;c&&(s=o);for(o=0;o<s;o++)if(l[o]!=d[o]){c=l[o]<d[o];break}a=0}if(c){n=l;l=d;d=n;t.s=-t.s}s=l.length;for(o=d.length-s;o>0;--o)l[s++]=0;for(o=d.length;o>a;){if(l[--o]<d[o]){for(i=o;i&&l[--i]===0;)l[i]=qo-1;--l[i];l[o]+=qo}l[o]-=d[o]}for(;l[--s]===0;)l.pop();for(;l[0]===0;l.shift())--r;if(!l[0])return new p(0);t.d=l;t.e=r;return jo?si(t,f):t}function ui(e,t,n){var r,o=ni(e),i=Qo(e.d),a=i.length;if(t){n&&(r=n-a)>0?i=i.charAt(0)+"."+i.slice(1)+oi(r):a>1&&(i=i.charAt(0)+"."+i.slice(1));i=i+(o<0?"e":"e+")+o}else if(o<0){i="0."+oi(-o-1)+i;n&&(r=n-a)>0&&(i+=oi(r))}else if(o>=a){i+=oi(o+1-a);n&&(r=n-o-1)>0&&(i=i+"."+oi(r))}else{(r=o+1)<a&&(i=i.slice(0,r)+"."+i.slice(r));if(n&&(r=n-a)>0){o+1===a&&(i+=".");i+=oi(r)}}return e.s<0?"-"+i:i}function ci(e,t){if(e.length>t){e.length=t;return true}}function di(e){var t,n,r;function o(e){var t=this;if(!(t instanceof o))return new o(e);t.constructor=o;if(e instanceof o){t.s=e.s;t.e=e.e;t.d=(e=e.d)?e.slice():e}else{if(typeof e==="number"){if(e*0!==0)throw Error(Bo+e);if(e>0)t.s=1;else{if(!(e<0)){t.s=0;t.e=0;t.d=[0];return}e=-e;t.s=-1}if(e===~~e&&e<1e7){t.e=0;t.d=[e];return}return ai(t,e.toString())}if(typeof e!=="string")throw Error(Bo+e);if(e.charCodeAt(0)===45){e=e.slice(1);t.s=-1}else t.s=1;if(!Ko.test(e))throw Error(Bo+e);ai(t,e)}}o.prototype=Wo;o.ROUND_UP=0;o.ROUND_DOWN=1;o.ROUND_CEIL=2;o.ROUND_FLOOR=3;o.ROUND_HALF_UP=4;o.ROUND_HALF_DOWN=5;o.ROUND_HALF_EVEN=6;o.ROUND_HALF_CEIL=7;o.ROUND_HALF_FLOOR=8;o.clone=di;o.config=o.set=pi;e===void 0&&(e={});if(e){r=["precision","rounding","toExpNeg","toExpPos","LN10"];for(t=0;t<r.length;)e.hasOwnProperty(n=r[t++])||(e[n]=this[n])}o.config(e);return o}function pi(e){if(!e||typeof e!=="object")throw Error(Go+"Object expected");var t,n,r,o=["precision",1,Uo,"rounding",0,8,"toExpNeg",-1/0,0,"toExpPos",0,1/0];for(t=0;t<o.length;t+=3)if((r=e[n=o[t]])!==void 0){if(!(Ho(r)===r&&r>=o[t+1]&&r<=o[t+2]))throw Error(Bo+n+": "+r);this[n]=r}if((r=e[n="LN10"])!==void 0){if(r!=Math.LN10)throw Error(Bo+n+": "+r);this[n]=new this(r)}return this}var fi=di(Mo);xo=new fi(1);var hi=fi;var mi;(function(e){e.AED="aed";e.AFN="afn";e.ALL="all";e.AMD="amd";e.ANG="ang";e.AOA="aoa";e.ARS="ars";e.AUD="aud";e.AWG="awg";e.AZN="azn";e.BAM="bam";e.BBD="bbd";e.BDT="bdt";e.BGN="bgn";e.BHD="bhd";e.BIF="bif";e.BMD="bmd";e.BND="bnd";e.BOB="bob";e.BOV="bov";e.BRL="brl";e.BSD="bsd";e.BTN="btn";e.BWP="bwp";e.BYN="byn";e.BYR="byr";e.BZD="bzd";e.CAD="cad";e.CDF="cdf";e.CHE="che";e.CHF="chf";e.CHW="chw";e.CLF="clf";e.CLP="clp";e.CNY="cny";e.COP="cop";e.COU="cou";e.CRC="crc";e.CUC="cuc";e.CUP="cup";e.CVE="cve";e.CZK="czk";e.DJF="djf";e.DKK="dkk";e.DOP="dop";e.DZD="dzd";e.EGP="egp";e.ERN="ern";e.ETB="etb";e.EUR="eur";e.FJD="fjd";e.FKP="fkp";e.GBP="gbp";e.GEL="gel";e.GHS="ghs";e.GIP="gip";e.GMD="gmd";e.GNF="gnf";e.GTQ="gtq";e.GYD="gyd";e.HKD="hkd";e.HNL="hnl";e.HRK="hrk";e.HTG="htg";e.HUF="huf";e.IDR="idr";e.ILS="ils";e.INR="inr";e.IQD="iqd";e.IRR="irr";e.ISK="isk";e.JMD="jmd";e.JOD="jod";e.JPY="jpy";e.KES="kes";e.KGS="kgs";e.KHR="khr";e.KMF="kmf";e.KPW="kpw";e.KRW="krw";e.KWD="kwd";e.KYD="kyd";e.KZT="kzt";e.LAK="lak";e.LBP="lbp";e.LKR="lkr";e.LRD="lrd";e.LSL="lsl";e.LTL="ltl";e.LVL="lvl";e.LYD="lyd";e.MAD="mad";e.MDL="mdl";e.MGA="mga";e.MKD="mkd";e.MMK="mmk";e.MNT="mnt";e.MOP="mop";e.MRO="mro";e.MUR="mur";e.MVR="mvr";e.MWK="mwk";e.MXN="mxn";e.MXV="mxv";e.MYR="myr";e.MZN="mzn";e.NAD="nad";e.NGN="ngn";e.NIO="nio";e.NOK="nok";e.NPR="npr";e.NZD="nzd";e.OMR="omr";e.PAB="pab";e.PEN="pen";e.PGK="pgk";e.PHP="php";e.PKR="pkr";e.PLN="pln";e.PYG="pyg";e.QAR="qar";e.RON="ron";e.RSD="rsd";e.RUB="rub";e.RWF="rwf";e.SAR="sar";e.SBD="sbd";e.SCR="scr";e.SDG="sdg";e.SEK="sek";e.SGD="sgd";e.SHP="shp";e.SLL="sll";e.SOS="sos";e.SRD="srd";e.SSP="ssp";e.STD="std";e.SVC="svc";e.SYP="syp";e.SZL="szl";e.THB="thb";e.TJS="tjs";e.TMT="tmt";e.TND="tnd";e.TOP="top";e.TRY="try";e.TTD="ttd";e.TWD="twd";e.TZS="tzs";e.UAH="uah";e.UGX="ugx";e.USD="usd";e.USN="usn";e.USS="uss";e.UYI="uyi";e.UYU="uyu";e.UZS="uzs";e.VEF="vef";e.VND="vnd";e.VUV="vuv";e.WST="wst";e.XAF="xaf";e.XAG="xag";e.XAU="xau";e.XBA="xba";e.XBB="xbb";e.XBC="xbc";e.XBD="xbd";e.XCD="xcd";e.XDR="xdr";e.XFU="xfu";e.XOF="xof";e.XPD="xpd";e.XPF="xpf";e.XPT="xpt";e.XSU="xsu";e.XTS="xts";e.XUA="xua";e.YER="yer";e.ZAR="zar";e.ZMW="zmw";e.ZWL="zwl"})(mi||(mi={}));const _i={[mi.AED]:2,[mi.AFN]:2,[mi.ALL]:2,[mi.AMD]:2,[mi.ANG]:2,[mi.AOA]:2,[mi.ARS]:2,[mi.AUD]:2,[mi.AWG]:2,[mi.AZN]:2,[mi.BAM]:2,[mi.BBD]:2,[mi.BDT]:2,[mi.BGN]:2,[mi.BHD]:3,[mi.BIF]:0,[mi.BMD]:2,[mi.BND]:2,[mi.BOB]:2,[mi.BOV]:2,[mi.BRL]:2,[mi.BSD]:2,[mi.BTN]:2,[mi.BWP]:2,[mi.BYR]:0,[mi.BYN]:2,[mi.BZD]:2,[mi.CAD]:2,[mi.CDF]:2,[mi.CHE]:2,[mi.CHF]:2,[mi.CHW]:2,[mi.CLF]:0,[mi.CLP]:0,[mi.CNY]:2,[mi.COP]:2,[mi.COU]:2,[mi.CRC]:2,[mi.CUC]:2,[mi.CUP]:2,[mi.CVE]:2,[mi.CZK]:2,[mi.DJF]:0,[mi.DKK]:2,[mi.DOP]:2,[mi.DZD]:2,[mi.EGP]:2,[mi.ERN]:2,[mi.ETB]:2,[mi.EUR]:2,[mi.FJD]:2,[mi.FKP]:2,[mi.GBP]:2,[mi.GEL]:2,[mi.GHS]:2,[mi.GIP]:2,[mi.GMD]:2,[mi.GNF]:0,[mi.GTQ]:2,[mi.GYD]:2,[mi.HKD]:2,[mi.HNL]:2,[mi.HRK]:2,[mi.HTG]:2,[mi.HUF]:2,[mi.IDR]:2,[mi.ILS]:2,[mi.INR]:2,[mi.IQD]:3,[mi.IRR]:2,[mi.ISK]:0,[mi.JMD]:2,[mi.JOD]:3,[mi.JPY]:0,[mi.KES]:2,[mi.KGS]:2,[mi.KHR]:2,[mi.KMF]:0,[mi.KPW]:2,[mi.KRW]:0,[mi.KWD]:3,[mi.KYD]:2,[mi.KZT]:2,[mi.LAK]:2,[mi.LBP]:2,[mi.LKR]:2,[mi.LRD]:2,[mi.LSL]:2,[mi.LTL]:2,[mi.LVL]:2,[mi.LYD]:3,[mi.MAD]:2,[mi.MDL]:2,[mi.MGA]:2,[mi.MKD]:2,[mi.MMK]:2,[mi.MNT]:2,[mi.MOP]:2,[mi.MRO]:2,[mi.MUR]:2,[mi.MVR]:2,[mi.MWK]:2,[mi.MXN]:2,[mi.MXV]:2,[mi.MYR]:2,[mi.MZN]:2,[mi.NAD]:2,[mi.NGN]:2,[mi.NIO]:2,[mi.NOK]:2,[mi.NPR]:2,[mi.NZD]:2,[mi.OMR]:3,[mi.PAB]:2,[mi.PEN]:2,[mi.PGK]:2,[mi.PHP]:2,[mi.PKR]:2,[mi.PLN]:2,[mi.PYG]:0,[mi.QAR]:2,[mi.RON]:2,[mi.RSD]:2,[mi.RUB]:2,[mi.RWF]:0,[mi.SAR]:2,[mi.SBD]:2,[mi.SCR]:2,[mi.SDG]:2,[mi.SEK]:2,[mi.SGD]:2,[mi.SHP]:2,[mi.SLL]:2,[mi.SOS]:2,[mi.SRD]:2,[mi.SSP]:2,[mi.STD]:2,[mi.SVC]:2,[mi.SYP]:2,[mi.SZL]:2,[mi.THB]:2,[mi.TJS]:2,[mi.TMT]:2,[mi.TND]:3,[mi.TOP]:2,[mi.TRY]:2,[mi.TTD]:2,[mi.TWD]:2,[mi.TZS]:2,[mi.UAH]:2,[mi.UGX]:0,[mi.USD]:2,[mi.USN]:2,[mi.USS]:2,[mi.UYI]:0,[mi.UYU]:2,[mi.UZS]:2,[mi.VEF]:2,[mi.VND]:0,[mi.VUV]:0,[mi.WST]:2,[mi.XAF]:0,[mi.XAG]:0,[mi.XAU]:0,[mi.XBA]:0,[mi.XBB]:0,[mi.XBC]:0,[mi.XBD]:0,[mi.XCD]:2,[mi.XDR]:0,[mi.XFU]:0,[mi.XOF]:0,[mi.XPD]:0,[mi.XPF]:0,[mi.XPT]:0,[mi.XSU]:0,[mi.XTS]:0,[mi.XUA]:0,[mi.YER]:2,[mi.ZAR]:2,[mi.ZMW]:2,[mi.ZWL]:2};function vi(e,t="en-US"){const{amount:n,currency:r}=e;const o=Intl.NumberFormat(t,{style:"currency",currency:r});return o.format(gi(n,r))}function gi(e,t){const n=_i[t];if(n==null){console.warn(`Unexpected currency ${t}`);return e}const r=new hi(e);return r.dividedBy(10**n).toNumber()}var yi={formatPrice:vi};var Ei={exports:{}};Ei.exports;var bi;function Ti(){if(bi)return Ei.exports;bi=1;(function(t,n){var r=200;var o="Expected a function";var i="__lodash_hash_undefined__";var a=1,s=2;var l=1/0,u=9007199254740991;var c="[object Arguments]",d="[object Array]",p="[object Boolean]",f="[object Date]",h="[object Error]",m="[object Function]",_="[object GeneratorFunction]",v="[object Map]",g="[object Number]",y="[object Object]",E="[object Promise]",b="[object RegExp]",T="[object Set]",S="[object String]",N="[object Symbol]",A="[object WeakMap]";var I="[object ArrayBuffer]",w="[object DataView]",O="[object Float32Array]",R="[object Float64Array]",Z="[object Int8Array]",D="[object Int16Array]",C="[object Int32Array]",L="[object Uint8Array]",P="[object Uint8ClampedArray]",k="[object Uint16Array]",x="[object Uint32Array]";var U=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,M=/^\w*$/,j=/^\./,G=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;var B=/[\\^$.*+?()[\]{}|]/g;var V=/\\(\\)?/g;var H=/^\[object .+?Constructor\]$/;var F=/^(?:0|[1-9]\d*)$/;var K={};K[O]=K[R]=K[Z]=K[D]=K[C]=K[L]=K[P]=K[k]=K[x]=true;K[c]=K[d]=K[I]=K[p]=K[w]=K[f]=K[h]=K[m]=K[v]=K[g]=K[y]=K[b]=K[T]=K[S]=K[A]=false;var q=typeof e=="object"&&e&&e.Object===Object&&e;var $=typeof self=="object"&&self&&self.Object===Object&&self;var z=q||$||Function("return this")();var Y=n&&!n.nodeType&&n;var W=Y&&t&&!t.nodeType&&t;var X=W&&W.exports===Y;var J=X&&q.process;var Q=function(){try{return J&&J.binding("util")}catch(e){}}();var ee=Q&&Q.isTypedArray;
/**
		 * A specialized version of `_.forEach` for arrays without support for
		 * iteratee shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns `array`.
		 */function te(e,t){var n=-1,r=e?e.length:0;while(++n<r)if(t(e[n],n,e)===false)break;return e}
/**
		 * A specialized version of `_.some` for arrays without support for iteratee
		 * shorthands.
		 *
		 * @private
		 * @param {Array} [array] The array to iterate over.
		 * @param {Function} predicate The function invoked per iteration.
		 * @returns {boolean} Returns `true` if any element passes the predicate check,
		 *  else `false`.
		 */function ne(e,t){var n=-1,r=e?e.length:0;while(++n<r)if(t(e[n],n,e))return true;return false}
/**
		 * The base implementation of `_.property` without support for deep paths.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function re(e){return function(t){return t==null?void 0:t[e]}}
/**
		 * The base implementation of `_.times` without support for iteratee shorthands
		 * or max array length checks.
		 *
		 * @private
		 * @param {number} n The number of times to invoke `iteratee`.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Array} Returns the array of results.
		 */function oe(e,t){var n=-1,r=Array(e);while(++n<e)r[n]=t(n);return r}
/**
		 * The base implementation of `_.unary` without support for storing metadata.
		 *
		 * @private
		 * @param {Function} func The function to cap arguments for.
		 * @returns {Function} Returns the new capped function.
		 */function ie(e){return function(t){return e(t)}}
/**
		 * Gets the value at `key` of `object`.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {string} key The key of the property to get.
		 * @returns {*} Returns the property value.
		 */function ae(e,t){return e==null?void 0:e[t]}
/**
		 * Checks if `value` is a host object in IE < 9.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
		 */function se(e){var t=false;if(e!=null&&typeof e.toString!="function")try{t=!!(e+"")}catch(e){}return t}
/**
		 * Converts `map` to its key-value pairs.
		 *
		 * @private
		 * @param {Object} map The map to convert.
		 * @returns {Array} Returns the key-value pairs.
		 */function le(e){var t=-1,n=Array(e.size);e.forEach((function(e,r){n[++t]=[r,e]}));return n}
/**
		 * Creates a unary function that invokes `func` with its argument transformed.
		 *
		 * @private
		 * @param {Function} func The function to wrap.
		 * @param {Function} transform The argument transform.
		 * @returns {Function} Returns the new function.
		 */function ue(e,t){return function(n){return e(t(n))}}
/**
		 * Converts `set` to an array of its values.
		 *
		 * @private
		 * @param {Object} set The set to convert.
		 * @returns {Array} Returns the values.
		 */function ce(e){var t=-1,n=Array(e.size);e.forEach((function(e){n[++t]=e}));return n}var de=Array.prototype,pe=Function.prototype,fe=Object.prototype;var he=z["__core-js_shared__"];var me=function(){var e=/[^.]+$/.exec(he&&he.keys&&he.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();var _e=pe.toString;var ve=fe.hasOwnProperty;var ge=fe.toString;var ye=RegExp("^"+_e.call(ve).replace(B,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");var Ee=z.Symbol,be=z.Uint8Array,Te=ue(Object.getPrototypeOf,Object),Se=Object.create,Ne=fe.propertyIsEnumerable,Ae=de.splice;var Ie=ue(Object.keys,Object);var we=Gt(z,"DataView"),Oe=Gt(z,"Map"),Re=Gt(z,"Promise"),Ze=Gt(z,"Set"),De=Gt(z,"WeakMap"),Ce=Gt(Object,"create");var Le=Jt(we),Pe=Jt(Oe),ke=Jt(Re),xe=Jt(Ze),Ue=Jt(De);var Me=Ee?Ee.prototype:void 0,je=Me?Me.valueOf:void 0,Ge=Me?Me.toString:void 0;
/**
		 * Creates a hash object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Be(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function Ve(){this.__data__=Ce?Ce(null):{}}
/**
		 * Removes `key` and its value from the hash.
		 *
		 * @private
		 * @name delete
		 * @memberOf Hash
		 * @param {Object} hash The hash to modify.
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function He(e){return this.has(e)&&delete this.__data__[e]}
/**
		 * Gets the hash value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Hash
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function Fe(e){var t=this.__data__;if(Ce){var n=t[e];return n===i?void 0:n}return ve.call(t,e)?t[e]:void 0}
/**
		 * Checks if a hash value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Hash
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function Ke(e){var t=this.__data__;return Ce?t[e]!==void 0:ve.call(t,e)}
/**
		 * Sets the hash `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Hash
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the hash instance.
		 */function qe(e,t){var n=this.__data__;n[e]=Ce&&t===void 0?i:t;return this}Be.prototype.clear=Ve;Be.prototype.delete=He;Be.prototype.get=Fe;Be.prototype.has=Ke;Be.prototype.set=qe;
/**
		 * Creates an list cache object.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function $e(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function ze(){this.__data__=[]}
/**
		 * Removes `key` and its value from the list cache.
		 *
		 * @private
		 * @name delete
		 * @memberOf ListCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function Ye(e){var t=this.__data__,n=mt(t,e);if(n<0)return false;var r=t.length-1;n==r?t.pop():Ae.call(t,n,1);return true}
/**
		 * Gets the list cache value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf ListCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function We(e){var t=this.__data__,n=mt(t,e);return n<0?void 0:t[n][1]}
/**
		 * Checks if a list cache value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf ListCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function Xe(e){return mt(this.__data__,e)>-1}
/**
		 * Sets the list cache `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf ListCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the list cache instance.
		 */function Je(e,t){var n=this.__data__,r=mt(n,e);r<0?n.push([e,t]):n[r][1]=t;return this}$e.prototype.clear=ze;$e.prototype.delete=Ye;$e.prototype.get=We;$e.prototype.has=Xe;$e.prototype.set=Je;
/**
		 * Creates a map cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function Qe(e){var t=-1,n=e?e.length:0;this.clear();while(++t<n){var r=e[t];this.set(r[0],r[1])}}function et(){this.__data__={hash:new Be,map:new(Oe||$e),string:new Be}}
/**
		 * Removes `key` and its value from the map.
		 *
		 * @private
		 * @name delete
		 * @memberOf MapCache
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function tt(e){return Mt(this,e).delete(e)}
/**
		 * Gets the map value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf MapCache
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function nt(e){return Mt(this,e).get(e)}
/**
		 * Checks if a map value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf MapCache
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function rt(e){return Mt(this,e).has(e)}
/**
		 * Sets the map `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf MapCache
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the map cache instance.
		 */function ot(e,t){Mt(this,e).set(e,t);return this}Qe.prototype.clear=et;Qe.prototype.delete=tt;Qe.prototype.get=nt;Qe.prototype.has=rt;Qe.prototype.set=ot;
/**
		 *
		 * Creates an array cache object to store unique values.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [values] The values to cache.
		 */function it(e){var t=-1,n=e?e.length:0;this.__data__=new Qe;while(++t<n)this.add(e[t])}
/**
		 * Adds `value` to the array cache.
		 *
		 * @private
		 * @name add
		 * @memberOf SetCache
		 * @alias push
		 * @param {*} value The value to cache.
		 * @returns {Object} Returns the cache instance.
		 */function at(e){this.__data__.set(e,i);return this}
/**
		 * Checks if `value` is in the array cache.
		 *
		 * @private
		 * @name has
		 * @memberOf SetCache
		 * @param {*} value The value to search for.
		 * @returns {number} Returns `true` if `value` is found, else `false`.
		 */function st(e){return this.__data__.has(e)}it.prototype.add=it.prototype.push=at;it.prototype.has=st;
/**
		 * Creates a stack cache object to store key-value pairs.
		 *
		 * @private
		 * @constructor
		 * @param {Array} [entries] The key-value pairs to cache.
		 */function lt(e){this.__data__=new $e(e)}function ut(){this.__data__=new $e}
/**
		 * Removes `key` and its value from the stack.
		 *
		 * @private
		 * @name delete
		 * @memberOf Stack
		 * @param {string} key The key of the value to remove.
		 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
		 */function ct(e){return this.__data__.delete(e)}
/**
		 * Gets the stack value for `key`.
		 *
		 * @private
		 * @name get
		 * @memberOf Stack
		 * @param {string} key The key of the value to get.
		 * @returns {*} Returns the entry value.
		 */function dt(e){return this.__data__.get(e)}
/**
		 * Checks if a stack value for `key` exists.
		 *
		 * @private
		 * @name has
		 * @memberOf Stack
		 * @param {string} key The key of the entry to check.
		 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
		 */function pt(e){return this.__data__.has(e)}
/**
		 * Sets the stack `key` to `value`.
		 *
		 * @private
		 * @name set
		 * @memberOf Stack
		 * @param {string} key The key of the value to set.
		 * @param {*} value The value to set.
		 * @returns {Object} Returns the stack cache instance.
		 */function ft(e,t){var n=this.__data__;if(n instanceof $e){var o=n.__data__;if(!Oe||o.length<r-1){o.push([e,t]);return this}n=this.__data__=new Qe(o)}n.set(e,t);return this}lt.prototype.clear=ut;lt.prototype.delete=ct;lt.prototype.get=dt;lt.prototype.has=pt;lt.prototype.set=ft;
/**
		 * Creates an array of the enumerable property names of the array-like `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @param {boolean} inherited Specify returning inherited property names.
		 * @returns {Array} Returns the array of property names.
		 */function ht(e,t){var n=nn(e)||tn(e)?oe(e.length,String):[];var r=n.length,o=!!r;for(var i in e)!ve.call(e,i)||o&&(i=="length"||Ht(i,r))||n.push(i);return n}
/**
		 * Gets the index at which the `key` is found in `array` of key-value pairs.
		 *
		 * @private
		 * @param {Array} array The array to inspect.
		 * @param {*} key The key to search for.
		 * @returns {number} Returns the index of the matched value, else `-1`.
		 */function mt(e,t){var n=e.length;while(n--)if(en(e[n][0],t))return n;return-1}
/**
		 * The base implementation of `_.create` without support for assigning
		 * properties to the created object.
		 *
		 * @private
		 * @param {Object} prototype The object to inherit from.
		 * @returns {Object} Returns the new object.
		 */function _t(e){return ln(e)?Se(e):{}}
/**
		 * The base implementation of `baseForOwn` which iterates over `object`
		 * properties returned by `keysFunc` and invokes `iteratee` for each property.
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @param {Function} keysFunc The function to get the keys of `object`.
		 * @returns {Object} Returns `object`.
		 */var vt=Pt();
/**
		 * The base implementation of `_.forOwn` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to iterate over.
		 * @param {Function} iteratee The function invoked per iteration.
		 * @returns {Object} Returns `object`.
		 */function gt(e,t){return e&&vt(e,t,mn)}
/**
		 * The base implementation of `_.get` without support for default values.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @returns {*} Returns the resolved value.
		 */function yt(e,t){t=Ft(t,e)?[t]:Lt(t);var n=0,r=t.length;while(e!=null&&n<r)e=e[Xt(t[n++])];return n&&n==r?e:void 0}
/**
		 * The base implementation of `getTag`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */function Et(e){return ge.call(e)}
/**
		 * The base implementation of `_.hasIn` without support for deep paths.
		 *
		 * @private
		 * @param {Object} [object] The object to query.
		 * @param {Array|string} key The key to check.
		 * @returns {boolean} Returns `true` if `key` exists, else `false`.
		 */function bt(e,t){return e!=null&&t in Object(e)}
/**
		 * The base implementation of `_.isEqual` which supports partial comparisons
		 * and tracks traversed objects.
		 *
		 * @private
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {boolean} [bitmask] The bitmask of comparison flags.
		 *  The bitmask may be composed of the following flags:
		 *     1 - Unordered comparison
		 *     2 - Partial comparison
		 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 */function Tt(e,t,n,r,o){return e===t||(e==null||t==null||!ln(e)&&!un(t)?e!==e&&t!==t:St(e,t,Tt,n,r,o))}
/**
		 * A specialized version of `baseIsEqual` for arrays and objects which performs
		 * deep comparisons and tracks traversed objects enabling objects with circular
		 * references to be compared.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function St(e,t,n,r,o,i){var a=nn(e),l=nn(t),u=d,p=d;if(!a){u=Bt(e);u=u==c?y:u}if(!l){p=Bt(t);p=p==c?y:p}var f=u==y&&!se(e),h=p==y&&!se(t),m=u==p;if(m&&!f){i||(i=new lt);return a||dn(e)?kt(e,t,n,r,o,i):xt(e,t,u,n,r,o,i)}if(!(o&s)){var _=f&&ve.call(e,"__wrapped__"),v=h&&ve.call(t,"__wrapped__");if(_||v){var g=_?e.value():e,E=v?t.value():t;i||(i=new lt);return n(g,E,r,o,i)}}if(!m)return false;i||(i=new lt);return Ut(e,t,n,r,o,i)}
/**
		 * The base implementation of `_.isMatch` without support for iteratee shorthands.
		 *
		 * @private
		 * @param {Object} object The object to inspect.
		 * @param {Object} source The object of property values to match.
		 * @param {Array} matchData The property names, values, and compare flags to match.
		 * @param {Function} [customizer] The function to customize comparisons.
		 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
		 */function Nt(e,t,n,r){var o=n.length,i=o;if(e==null)return!i;e=Object(e);while(o--){var l=n[o];if(l[2]?l[1]!==e[l[0]]:!(l[0]in e))return false}while(++o<i){l=n[o];var u=l[0],c=e[u],d=l[1];if(l[2]){if(c===void 0&&!(u in e))return false}else{var p=new lt;var f;if(!(f===void 0?Tt(d,c,r,a|s,p):f))return false}}return true}
/**
		 * The base implementation of `_.isNative` without bad shim checks.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a native function,
		 *  else `false`.
		 */function At(e){if(!ln(e)||qt(e))return false;var t=an(e)||se(e)?ye:H;return t.test(Jt(e))}
/**
		 * The base implementation of `_.isTypedArray` without Node.js optimizations.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 */function It(e){return un(e)&&sn(e.length)&&!!K[ge.call(e)]}
/**
		 * The base implementation of `_.iteratee`.
		 *
		 * @private
		 * @param {*} [value=_.identity] The value to convert to an iteratee.
		 * @returns {Function} Returns the iteratee.
		 */function wt(e){return typeof e=="function"?e:e==null?vn:typeof e=="object"?nn(e)?Zt(e[0],e[1]):Rt(e):gn(e)}
/**
		 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 */function Ot(e){if(!$t(e))return Ie(e);var t=[];for(var n in Object(e))ve.call(e,n)&&n!="constructor"&&t.push(n);return t}
/**
		 * The base implementation of `_.matches` which doesn't clone `source`.
		 *
		 * @private
		 * @param {Object} source The object of property values to match.
		 * @returns {Function} Returns the new spec function.
		 */function Rt(e){var t=jt(e);return t.length==1&&t[0][2]?Yt(t[0][0],t[0][1]):function(n){return n===e||Nt(n,e,t)}}
/**
		 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
		 *
		 * @private
		 * @param {string} path The path of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function Zt(e,t){return Ft(e)&&zt(t)?Yt(Xt(e),t):function(n){var r=fn(n,e);return r===void 0&&r===t?hn(n,e):Tt(t,r,void 0,a|s)}}
/**
		 * A specialized version of `baseProperty` which supports deep paths.
		 *
		 * @private
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 */function Dt(e){return function(t){return yt(t,e)}}
/**
		 * The base implementation of `_.toString` which doesn't convert nullish
		 * values to empty strings.
		 *
		 * @private
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 */function Ct(e){if(typeof e=="string")return e;if(cn(e))return Ge?Ge.call(e):"";var t=e+"";return t=="0"&&1/e==-l?"-0":t}
/**
		 * Casts `value` to a path array if it's not one.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {Array} Returns the cast property path array.
		 */function Lt(e){return nn(e)?e:Wt(e)}
/**
		 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
		 *
		 * @private
		 * @param {boolean} [fromRight] Specify iterating from right to left.
		 * @returns {Function} Returns the new base function.
		 */function Pt(e){return function(e,t,n){var r=-1,o=Object(e),i=n(e),a=i.length;while(a--){var s=i[++r];if(t(o[s],s,o)===false)break}return e}}
/**
		 * A specialized version of `baseIsEqualDeep` for arrays with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Array} array The array to compare.
		 * @param {Array} other The other array to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `array` and `other` objects.
		 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
		 */function kt(e,t,n,r,o,i){var l=o&s,u=e.length,c=t.length;if(u!=c&&!(l&&c>u))return false;var d=i.get(e);if(d&&i.get(t))return d==t;var p=-1,f=true,h=o&a?new it:void 0;i.set(e,t);i.set(t,e);while(++p<u){var m=e[p],_=t[p];if(r)var v=l?r(_,m,p,t,e,i):r(m,_,p,e,t,i);if(v!==void 0){if(v)continue;f=false;break}if(h){if(!ne(t,(function(e,t){if(!h.has(t)&&(m===e||n(m,e,r,o,i)))return h.add(t)}))){f=false;break}}else if(!(m===_||n(m,_,r,o,i))){f=false;break}}i.delete(e);i.delete(t);return f}
/**
		 * A specialized version of `baseIsEqualDeep` for comparing objects of
		 * the same `toStringTag`.
		 *
		 * **Note:** This function only supports comparing values with tags of
		 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {string} tag The `toStringTag` of the objects to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function xt(e,t,n,r,o,i,l){switch(n){case w:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return false;e=e.buffer;t=t.buffer;case I:return!(e.byteLength!=t.byteLength||!r(new be(e),new be(t)));case p:case f:case g:return en(+e,+t);case h:return e.name==t.name&&e.message==t.message;case b:case S:return e==t+"";case v:var u=le;case T:var c=i&s;u||(u=ce);if(e.size!=t.size&&!c)return false;var d=l.get(e);if(d)return d==t;i|=a;l.set(e,t);var m=kt(u(e),u(t),r,o,i,l);l.delete(e);return m;case N:if(je)return je.call(e)==je.call(t)}return false}
/**
		 * A specialized version of `baseIsEqualDeep` for objects with support for
		 * partial deep comparisons.
		 *
		 * @private
		 * @param {Object} object The object to compare.
		 * @param {Object} other The other object to compare.
		 * @param {Function} equalFunc The function to determine equivalents of values.
		 * @param {Function} customizer The function to customize comparisons.
		 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
		 *  for more details.
		 * @param {Object} stack Tracks traversed `object` and `other` objects.
		 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
		 */function Ut(e,t,n,r,o,i){var a=o&s,l=mn(e),u=l.length,c=mn(t),d=c.length;if(u!=d&&!a)return false;var p=u;while(p--){var f=l[p];if(!(a?f in t:ve.call(t,f)))return false}var h=i.get(e);if(h&&i.get(t))return h==t;var m=true;i.set(e,t);i.set(t,e);var _=a;while(++p<u){f=l[p];var v=e[f],g=t[f];if(r)var y=a?r(g,v,f,t,e,i):r(v,g,f,e,t,i);if(!(y===void 0?v===g||n(v,g,r,o,i):y)){m=false;break}_||(_=f=="constructor")}if(m&&!_){var E=e.constructor,b=t.constructor;E==b||!("constructor"in e)||!("constructor"in t)||typeof E=="function"&&E instanceof E&&typeof b=="function"&&b instanceof b||(m=false)}i.delete(e);i.delete(t);return m}
/**
		 * Gets the data for `map`.
		 *
		 * @private
		 * @param {Object} map The map to query.
		 * @param {string} key The reference key.
		 * @returns {*} Returns the map data.
		 */function Mt(e,t){var n=e.__data__;return Kt(t)?n[typeof t=="string"?"string":"hash"]:n.map}
/**
		 * Gets the property names, values, and compare flags of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the match data of `object`.
		 */function jt(e){var t=mn(e),n=t.length;while(n--){var r=t[n],o=e[r];t[n]=[r,o,zt(o)]}return t}
/**
		 * Gets the native function at `key` of `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {string} key The key of the method to get.
		 * @returns {*} Returns the function if it's native, else `undefined`.
		 */function Gt(e,t){var n=ae(e,t);return At(n)?n:void 0}
/**
		 * Gets the `toStringTag` of `value`.
		 *
		 * @private
		 * @param {*} value The value to query.
		 * @returns {string} Returns the `toStringTag`.
		 */var Bt=Et;(we&&Bt(new we(new ArrayBuffer(1)))!=w||Oe&&Bt(new Oe)!=v||Re&&Bt(Re.resolve())!=E||Ze&&Bt(new Ze)!=T||De&&Bt(new De)!=A)&&(Bt=function(e){var t=ge.call(e),n=t==y?e.constructor:void 0,r=n?Jt(n):void 0;if(r)switch(r){case Le:return w;case Pe:return v;case ke:return E;case xe:return T;case Ue:return A}return t})
/**
		 * Checks if `path` exists on `object`.
		 *
		 * @private
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @param {Function} hasFunc The function to check properties.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 */;function Vt(e,t,n){t=Ft(t,e)?[t]:Lt(t);var r,o=-1,i=t.length;while(++o<i){var a=Xt(t[o]);if(!(r=e!=null&&n(e,a)))break;e=e[a]}if(r)return r;i=e?e.length:0;return!!i&&sn(i)&&Ht(a,i)&&(nn(e)||tn(e))}
/**
		 * Checks if `value` is a valid array-like index.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
		 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
		 */function Ht(e,t){t=t==null?u:t;return!!t&&(typeof e=="number"||F.test(e))&&e>-1&&e%1==0&&e<t}
/**
		 * Checks if `value` is a property name and not a property path.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @param {Object} [object] The object to query keys on.
		 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
		 */function Ft(e,t){if(nn(e))return false;var n=typeof e;return!(n!="number"&&n!="symbol"&&n!="boolean"&&e!=null&&!cn(e))||(M.test(e)||!U.test(e)||t!=null&&e in Object(t))}
/**
		 * Checks if `value` is suitable for use as unique object key.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
		 */function Kt(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}
/**
		 * Checks if `func` has its source masked.
		 *
		 * @private
		 * @param {Function} func The function to check.
		 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
		 */function qt(e){return!!me&&me in e}
/**
		 * Checks if `value` is likely a prototype object.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
		 */function $t(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||fe;return e===n}
/**
		 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` if suitable for strict
		 *  equality comparisons, else `false`.
		 */function zt(e){return e===e&&!ln(e)}
/**
		 * A specialized version of `matchesProperty` for source values suitable
		 * for strict equality comparisons, i.e. `===`.
		 *
		 * @private
		 * @param {string} key The key of the property to get.
		 * @param {*} srcValue The value to match.
		 * @returns {Function} Returns the new spec function.
		 */function Yt(e,t){return function(n){return n!=null&&(n[e]===t&&(t!==void 0||e in Object(n)))}}
/**
		 * Converts `string` to a property path array.
		 *
		 * @private
		 * @param {string} string The string to convert.
		 * @returns {Array} Returns the property path array.
		 */var Wt=Qt((function(e){e=pn(e);var t=[];j.test(e)&&t.push("");e.replace(G,(function(e,n,r,o){t.push(r?o.replace(V,"$1"):n||e)}));return t}));
/**
		 * Converts `value` to a string key if it's not a string or symbol.
		 *
		 * @private
		 * @param {*} value The value to inspect.
		 * @returns {string|symbol} Returns the key.
		 */function Xt(e){if(typeof e=="string"||cn(e))return e;var t=e+"";return t=="0"&&1/e==-l?"-0":t}
/**
		 * Converts `func` to its source code.
		 *
		 * @private
		 * @param {Function} func The function to process.
		 * @returns {string} Returns the source code.
		 */function Jt(e){if(e!=null){try{return _e.call(e)}catch(e){}try{return e+""}catch(e){}}return""}
/**
		 * Creates a function that memoizes the result of `func`. If `resolver` is
		 * provided, it determines the cache key for storing the result based on the
		 * arguments provided to the memoized function. By default, the first argument
		 * provided to the memoized function is used as the map cache key. The `func`
		 * is invoked with the `this` binding of the memoized function.
		 *
		 * **Note:** The cache is exposed as the `cache` property on the memoized
		 * function. Its creation may be customized by replacing the `_.memoize.Cache`
		 * constructor with one whose instances implement the
		 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
		 * method interface of `delete`, `get`, `has`, and `set`.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Function
		 * @param {Function} func The function to have its output memoized.
		 * @param {Function} [resolver] The function to resolve the cache key.
		 * @returns {Function} Returns the new memoized function.
		 * @example
		 *
		 * var object = { 'a': 1, 'b': 2 };
		 * var other = { 'c': 3, 'd': 4 };
		 *
		 * var values = _.memoize(_.values);
		 * values(object);
		 * // => [1, 2]
		 *
		 * values(other);
		 * // => [3, 4]
		 *
		 * object.a = 2;
		 * values(object);
		 * // => [1, 2]
		 *
		 * // Modify the result cache.
		 * values.cache.set(object, ['a', 'b']);
		 * values(object);
		 * // => ['a', 'b']
		 *
		 * // Replace `_.memoize.Cache`.
		 * _.memoize.Cache = WeakMap;
		 */function Qt(e,t){if(typeof e!="function"||t&&typeof t!="function")throw new TypeError(o);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],i=n.cache;if(i.has(o))return i.get(o);var a=e.apply(this,r);n.cache=i.set(o,a);return a};n.cache=new(Qt.Cache||Qe);return n}Qt.Cache=Qe;
/**
		 * Performs a
		 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
		 * comparison between two values to determine if they are equivalent.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to compare.
		 * @param {*} other The other value to compare.
		 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 * var other = { 'a': 1 };
		 *
		 * _.eq(object, object);
		 * // => true
		 *
		 * _.eq(object, other);
		 * // => false
		 *
		 * _.eq('a', 'a');
		 * // => true
		 *
		 * _.eq('a', Object('a'));
		 * // => false
		 *
		 * _.eq(NaN, NaN);
		 * // => true
		 */function en(e,t){return e===t||e!==e&&t!==t}
/**
		 * Checks if `value` is likely an `arguments` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArguments(function() { return arguments; }());
		 * // => true
		 *
		 * _.isArguments([1, 2, 3]);
		 * // => false
		 */function tn(e){return on(e)&&ve.call(e,"callee")&&(!Ne.call(e,"callee")||ge.call(e)==c)}
/**
		 * Checks if `value` is classified as an `Array` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
		 * @example
		 *
		 * _.isArray([1, 2, 3]);
		 * // => true
		 *
		 * _.isArray(document.body.children);
		 * // => false
		 *
		 * _.isArray('abc');
		 * // => false
		 *
		 * _.isArray(_.noop);
		 * // => false
		 */var nn=Array.isArray;
/**
		 * Checks if `value` is array-like. A value is considered array-like if it's
		 * not a function and has a `value.length` that's an integer greater than or
		 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
		 * @example
		 *
		 * _.isArrayLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLike(document.body.children);
		 * // => true
		 *
		 * _.isArrayLike('abc');
		 * // => true
		 *
		 * _.isArrayLike(_.noop);
		 * // => false
		 */function rn(e){return e!=null&&sn(e.length)&&!an(e)}
/**
		 * This method is like `_.isArrayLike` except that it also checks if `value`
		 * is an object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an array-like object,
		 *  else `false`.
		 * @example
		 *
		 * _.isArrayLikeObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isArrayLikeObject(document.body.children);
		 * // => true
		 *
		 * _.isArrayLikeObject('abc');
		 * // => false
		 *
		 * _.isArrayLikeObject(_.noop);
		 * // => false
		 */function on(e){return un(e)&&rn(e)}
/**
		 * Checks if `value` is classified as a `Function` object.
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
		 * @example
		 *
		 * _.isFunction(_);
		 * // => true
		 *
		 * _.isFunction(/abc/);
		 * // => false
		 */function an(e){var t=ln(e)?ge.call(e):"";return t==m||t==_}
/**
		 * Checks if `value` is a valid array-like length.
		 *
		 * **Note:** This method is loosely based on
		 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
		 * @example
		 *
		 * _.isLength(3);
		 * // => true
		 *
		 * _.isLength(Number.MIN_VALUE);
		 * // => false
		 *
		 * _.isLength(Infinity);
		 * // => false
		 *
		 * _.isLength('3');
		 * // => false
		 */function sn(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=u}
/**
		 * Checks if `value` is the
		 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
		 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
		 *
		 * @static
		 * @memberOf _
		 * @since 0.1.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
		 * @example
		 *
		 * _.isObject({});
		 * // => true
		 *
		 * _.isObject([1, 2, 3]);
		 * // => true
		 *
		 * _.isObject(_.noop);
		 * // => true
		 *
		 * _.isObject(null);
		 * // => false
		 */function ln(e){var t=typeof e;return!!e&&(t=="object"||t=="function")}
/**
		 * Checks if `value` is object-like. A value is object-like if it's not `null`
		 * and has a `typeof` result of "object".
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
		 * @example
		 *
		 * _.isObjectLike({});
		 * // => true
		 *
		 * _.isObjectLike([1, 2, 3]);
		 * // => true
		 *
		 * _.isObjectLike(_.noop);
		 * // => false
		 *
		 * _.isObjectLike(null);
		 * // => false
		 */function un(e){return!!e&&typeof e=="object"}
/**
		 * Checks if `value` is classified as a `Symbol` primitive or object.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
		 * @example
		 *
		 * _.isSymbol(Symbol.iterator);
		 * // => true
		 *
		 * _.isSymbol('abc');
		 * // => false
		 */function cn(e){return typeof e=="symbol"||un(e)&&ge.call(e)==N}
/**
		 * Checks if `value` is classified as a typed array.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.0.0
		 * @category Lang
		 * @param {*} value The value to check.
		 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
		 * @example
		 *
		 * _.isTypedArray(new Uint8Array);
		 * // => true
		 *
		 * _.isTypedArray([]);
		 * // => false
		 */var dn=ee?ie(ee):It;
/**
		 * Converts `value` to a string. An empty string is returned for `null`
		 * and `undefined` values. The sign of `-0` is preserved.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Lang
		 * @param {*} value The value to process.
		 * @returns {string} Returns the string.
		 * @example
		 *
		 * _.toString(null);
		 * // => ''
		 *
		 * _.toString(-0);
		 * // => '-0'
		 *
		 * _.toString([1, 2, 3]);
		 * // => '1,2,3'
		 */function pn(e){return e==null?"":Ct(e)}
/**
		 * Gets the value at `path` of `object`. If the resolved value is
		 * `undefined`, the `defaultValue` is returned in its place.
		 *
		 * @static
		 * @memberOf _
		 * @since 3.7.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path of the property to get.
		 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
		 * @returns {*} Returns the resolved value.
		 * @example
		 *
		 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
		 *
		 * _.get(object, 'a[0].b.c');
		 * // => 3
		 *
		 * _.get(object, ['a', '0', 'b', 'c']);
		 * // => 3
		 *
		 * _.get(object, 'a.b.c', 'default');
		 * // => 'default'
		 */function fn(e,t,n){var r=e==null?void 0:yt(e,t);return r===void 0?n:r}
/**
		 * Checks if `path` is a direct or inherited property of `object`.
		 *
		 * @static
		 * @memberOf _
		 * @since 4.0.0
		 * @category Object
		 * @param {Object} object The object to query.
		 * @param {Array|string} path The path to check.
		 * @returns {boolean} Returns `true` if `path` exists, else `false`.
		 * @example
		 *
		 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
		 *
		 * _.hasIn(object, 'a');
		 * // => true
		 *
		 * _.hasIn(object, 'a.b');
		 * // => true
		 *
		 * _.hasIn(object, ['a', 'b']);
		 * // => true
		 *
		 * _.hasIn(object, 'b');
		 * // => false
		 */function hn(e,t){return e!=null&&Vt(e,t,bt)}
/**
		 * Creates an array of the own enumerable property names of `object`.
		 *
		 * **Note:** Non-object values are coerced to objects. See the
		 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
		 * for more details.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Object
		 * @param {Object} object The object to query.
		 * @returns {Array} Returns the array of property names.
		 * @example
		 *
		 * function Foo() {
		 *   this.a = 1;
		 *   this.b = 2;
		 * }
		 *
		 * Foo.prototype.c = 3;
		 *
		 * _.keys(new Foo);
		 * // => ['a', 'b'] (iteration order is not guaranteed)
		 *
		 * _.keys('hi');
		 * // => ['0', '1']
		 */function mn(e){return rn(e)?ht(e):Ot(e)}
/**
		 * An alternative to `_.reduce`; this method transforms `object` to a new
		 * `accumulator` object which is the result of running each of its own
		 * enumerable string keyed properties thru `iteratee`, with each invocation
		 * potentially mutating the `accumulator` object. If `accumulator` is not
		 * provided, a new object with the same `[[Prototype]]` will be used. The
		 * iteratee is invoked with four arguments: (accumulator, value, key, object).
		 * Iteratee functions may exit iteration early by explicitly returning `false`.
		 *
		 * @static
		 * @memberOf _
		 * @since 1.3.0
		 * @category Object
		 * @param {Object} object The object to iterate over.
		 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
		 * @param {*} [accumulator] The custom accumulator value.
		 * @returns {*} Returns the accumulated value.
		 * @example
		 *
		 * _.transform([2, 3, 4], function(result, n) {
		 *   result.push(n *= n);
		 *   return n % 2 == 0;
		 * }, []);
		 * // => [4, 9]
		 *
		 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
		 *   (result[value] || (result[value] = [])).push(key);
		 * }, {});
		 * // => { '1': ['a', 'c'], '2': ['b'] }
		 */function _n(e,t,n){var r=nn(e)||dn(e);t=wt(t);if(n==null)if(r||ln(e)){var o=e.constructor;n=r?nn(e)?new o:[]:an(o)?_t(Te(e)):{}}else n={};(r?te:gt)(e,(function(e,r,o){return t(n,e,r,o)}));return n}
/**
		 * This method returns the first argument it receives.
		 *
		 * @static
		 * @since 0.1.0
		 * @memberOf _
		 * @category Util
		 * @param {*} value Any value.
		 * @returns {*} Returns `value`.
		 * @example
		 *
		 * var object = { 'a': 1 };
		 *
		 * console.log(_.identity(object) === object);
		 * // => true
		 */function vn(e){return e}
/**
		 * Creates a function that returns the value at `path` of a given object.
		 *
		 * @static
		 * @memberOf _
		 * @since 2.4.0
		 * @category Util
		 * @param {Array|string} path The path of the property to get.
		 * @returns {Function} Returns the new accessor function.
		 * @example
		 *
		 * var objects = [
		 *   { 'a': { 'b': 2 } },
		 *   { 'a': { 'b': 1 } }
		 * ];
		 *
		 * _.map(objects, _.property('a.b'));
		 * // => [2, 1]
		 *
		 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
		 * // => [1, 2]
		 */function gn(e){return Ft(e)?re(Xt(e)):Dt(e)}t.exports=_n})(Ei,Ei.exports);return Ei.exports}var Si=Ti();var Ni=t(Si);class DiscordSDKMock{constructor(e,t,n,r){this.platform=At.DESKTOP;this.instanceId="123456789012345678";this.configuration=go();this.source=null;this.sourceOrigin="";this.sdkVersion="mock";this.mobileAppVersion="unknown";this.frameId="aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa";this.eventBus=new a;this.clientId=e;this.commands=this._updateCommandMocks({});this.guildId=t;this.channelId=n;this.locationId=r;this.customId=null;this.referrerId=null}_updateCommandMocks(e){this.commands=Ni(Object.assign({},Ai,e),((e,t,n)=>{e[n]=async(...e)=>{console.info(`DiscordSDKMock: ${String(n)}(${JSON.stringify(e)})`);return await t(...e)}}));return this.commands}emitReady(){this.emitEvent("READY",void 0)}close(...e){console.info(`DiscordSDKMock: close(${JSON.stringify(e)})`)}ready(){return Promise.resolve()}async subscribe(e,t,...n){return await this.eventBus.on(e,t)}async unsubscribe(e,t,...n){return await this.eventBus.off(e,t)}emitEvent(e,t){this.eventBus.emit(e,t)}}const Ai={authorize:()=>Promise.resolve({code:"mock_code"}),setActivity:()=>Promise.resolve({name:"mock_activity_name",type:0}),getChannel:()=>Promise.resolve({id:"mock_channel_id",name:"mock_channel_name",type:_n.GUILD_TEXT,voice_states:[],messages:[]}),getSkus:()=>Promise.resolve({skus:[]}),getEntitlements:()=>Promise.resolve({entitlements:[]}),startPurchase:()=>Promise.resolve([]),setConfig:()=>Promise.resolve({use_interactive_pip:false}),userSettingsGetLocale:()=>Promise.resolve({locale:""}),openExternalLink:()=>Promise.resolve({opened:false}),encourageHardwareAcceleration:()=>Promise.resolve({enabled:true}),captureLog:()=>Promise.resolve(null),setOrientationLockState:()=>Promise.resolve(null),openInviteDialog:()=>Promise.resolve(null),getPlatformBehaviors:()=>Promise.resolve({iosKeyboardResizesView:true}),getChannelPermissions:()=>Promise.resolve({permissions:Je(1234567890)}),getInstanceConnectedParticipants:()=>Promise.resolve({participants:[]}),openShareMomentDialog:()=>Promise.resolve(null),authenticate:()=>Promise.resolve({access_token:"mock_token",user:{username:"mock_user_username",discriminator:"mock_user_discriminator",id:"mock_user_id",avatar:null,public_flags:1},scopes:[],expires:new Date(2121,1,1).toString(),application:{description:"mock_app_description",icon:"mock_app_icon",id:"mock_app_id",name:"mock_app_name"}}),shareLink:()=>Promise.resolve({success:false,didSendMessage:false,didCopyLink:false}),initiateImageUpload:()=>Promise.resolve({image_url:"https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0b52aa9e99b832574a53_full_logo_blurple_RGB.png"}),getRelationships:()=>Promise.resolve({relationships:[{type:1,user:{username:"mock_friend_username",flags:0,bot:false,discriminator:"mock_friend_discriminator",id:"mock_friend_id_1",avatar:null}},{type:1,user:{username:"mock_friend_username_with_nickname",flags:0,bot:false,discriminator:"mock_friend_discriminator_with_nickname",id:"mock_friend_id_2",avatar:null},nickname:"mock_friend_nickname_for_user"},{type:1,user:{username:"mock_friend_username_with_since",flags:0,bot:false,discriminator:"mock_friend_discriminator_with_since",id:"mock_friend_id_3",avatar:null},since:"2021-06-29T00:32:37.180813+00:00"}]}),inviteUserEmbedded:()=>Promise.resolve(null),getUser:()=>Promise.resolve({username:"mock_friend_username",flags:0,bot:false,discriminator:"mock_friend_discriminator",id:"mock_friend_id_1",avatar:null}),getQuestEnrollmentStatus:()=>Promise.resolve({quest_id:"mock_quest_id",is_enrolled:false,enrolled_at:null}),questStartTimer:()=>Promise.resolve({success:true}),getActivityInstanceConnectedParticipants:()=>Promise.resolve({participants:[]}),shareInteraction:()=>Promise.resolve({success:false})};function Ii(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols==="function"){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}typeof SuppressedError==="function"?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};
/**
 * Creates a regular expression from a target string. The target string
 * may contain `{name}` tokens which will end up being translated to
 * a named group match for a series of word characters with the group named `name`
 * The substitution pattern is {a-z} because the named groups must be valid JS identifiers,
 * making items like {0} invalid.
 *
 * @returns a RegExp object
 **/const wi=/\{([a-z]+)\}/g;function Oi(e){const t=e.replace(wi,((e,t)=>`(?<${t}>[\\w-]+)`));return new RegExp(`${t}(/|$)`)}
/**
 *
 * Attempts to map the actual url (i.e. google.com) to a url path, per the url
 * mappings set up in the embedded application. If the target contains `{foo}`
 * tokens, they will be replace with the values contained in the original URL,
 * via the pattern described in the prefix
 *
 * @returns  null if URL doesn't match prefix, otherwise return rewritten URL
 */function Ri({originalURL:e,prefix:t,prefixHost:n,target:r}){const o=new URL(`https://${r}`);const i=Oi(o.host.replace(/%7B/g,"{").replace(/%7D/g,"}"));const a=e.toString().match(i);if(a==null)return e;const s=new URL(e.toString());s.host=n;s.pathname=t.replace(wi,((e,t)=>{var n;const r=(n=a.groups)===null||n===void 0?void 0:n[t];if(r==null)throw new Error("Misconfigured route.");return r}));const l=e.pathname.startsWith("/")?e.pathname.slice(1):e.pathname;s.pathname+=s.pathname.endsWith("/")?l:"/"+l;s.pathname=s.pathname.replace(o.pathname,"");e.pathname.endsWith("/")&&!s.pathname.endsWith("/")&&(s.pathname+="/");return s}function Zi(e,t=window.location.protocol,n=window.location.host){return new URL(e,`${t}//${n}`)}function Di(e,{patchFetch:t=true,patchWebSocket:n=true,patchXhr:r=true,patchSrcAttributes:o=false}={}){if(typeof window!=="undefined"){if(t){const t=window.fetch;window.fetch=function(n,r){if(n instanceof Request){const o=ki({url:Zi(n.url),mappings:e});const i=r!==null&&r!==void 0?r:{},a=Ii(i,["url"]);Object.keys(Request.prototype).forEach((e=>{if(e!=="url")try{a[e]=n[e]}catch(t){console.warn(`Remapping fetch request key "${e}" failed`,t)}}));return new Promise(((e,r)=>{try{n.blob().then((r=>{n.method.toUpperCase()!=="HEAD"&&n.method.toUpperCase()!=="GET"&&r.size>0&&(a.body=r);e(t(new Request(o,a)))}))}catch(e){r(e)}}))}const o=ki({url:n instanceof URL?n:Zi(n),mappings:e});return t(o,r)}}if(n){class WebSocketProxy extends WebSocket{constructor(t,n){const r=ki({url:t instanceof URL?t:Zi(t),mappings:e});super(r,n)}}window.WebSocket=WebSocketProxy}if(r){const t=XMLHttpRequest.prototype.open;XMLHttpRequest.prototype.open=function(n,r,o,i,a){const s=ki({url:Zi(r),mappings:e});t.apply(this,[n,s,o,i,a])}}if(o){const t=function(t){for(const n of t)n.type==="attributes"&&n.attributeName==="src"?Li(n.target,e):n.type==="childList"&&n.addedNodes.forEach((t=>{Li(t,e);Ci(t,e)}))};const n=new MutationObserver(t);const r={attributeFilter:["src"],childList:true,subtree:true};n.observe(window.document,r);window.document.querySelectorAll("[src]").forEach((t=>{Li(t,e)}))}}}function Ci(e,t){e.hasChildNodes()&&e.childNodes.forEach((e=>{Li(e,t);Ci(e,t)}))}function Li(e,t){if(e instanceof HTMLElement&&e.hasAttribute("src")){const n=e.getAttribute("src");const r=Zi(n!==null&&n!==void 0?n:"");if(r.host===window.location.host)return;if(e.tagName.toLowerCase()==="script")Pi(e,{url:r,mappings:t});else{const o=ki({url:r,mappings:t}).toString();o!==n&&e.setAttribute("src",o)}}}function Pi(e,{url:t,mappings:n}){const r=ki({url:t,mappings:n});if(t.toString()!==r.toString()){const r=document.createElement(e.tagName);r.innerHTML=e.innerHTML;for(const t of e.attributes)r.setAttribute(t.name,t.value);r.setAttribute("src",ki({url:t,mappings:n}).toString());e.after(r);e.remove()}}function ki({url:e,mappings:t}){const n=new URL(e.toString());for(const r of t){const t=Ri({originalURL:n,prefix:r.prefix,target:r.target,prefixHost:window.location.host});if(t!=null&&(t===null||t===void 0?void 0:t.toString())!==e.toString())return t}return n}const{Commands:xi}=tr;export{xi as Commands,tr as Common,DiscordSDK,DiscordSDKMock,rr as Events,Nt as Orientation,ko as PermissionUtils,It as Permissions,At as Platform,yi as PriceUtils,Tt as RPCCloseCodes,St as RPCErrorCodes,xr as Responses,ki as attemptRemap,Di as patchUrlMappings};

