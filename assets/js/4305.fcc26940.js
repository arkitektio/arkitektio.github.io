"use strict";(self.webpackChunkdoks=self.webpackChunkdoks||[]).push([[4305],{50045:(e,n,t)=>{t.d(n,{P:()=>o,R:()=>i});var r=Object.defineProperty,a=(e,n)=>r(e,"name",{value:n,configurable:!0});class i{constructor(e,n){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=n}setStart(e,n){this.start=new o(e,n)}setEnd(e,n){this.end=new o(e,n)}}a(i,"Range");class o{constructor(e,n){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=n}setLine(e){this.line=e}setCharacter(e){this.character=e}}a(o,"Position")},44305:(e,n,t)=>{t.r(n);var r=t(97480),a=t(52877),i=t(77990),o=t(69538),s=t(93201),l=t(22618),c=t(53274),u=t(25580),d=t(84873),h=t(96300),p=t(34800),g=t(42266),m=t(92767),f=t(8783),v=t(81294),y=t(88081),w=t(5311),$=t(78758),P=t(97359),E=t(16918),k=t(10785),b=t(46364),C=t(29551),R=t(93058);function T(e){return{Field(n){const t=e.getFieldDef(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const a=e.getParentType();null!=a||(0,C.k)(!1),e.reportError(new b.__(`The field ${a.name}.${t.name} is deprecated. ${r}`,{nodes:n}))}},Argument(n){const t=e.getArgument(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const a=e.getDirective();if(null!=a)e.reportError(new b.__(`Directive "@${a.name}" argument "${t.name}" is deprecated. ${r}`,{nodes:n}));else{const a=e.getParentType(),i=e.getFieldDef();null!=a&&null!=i||(0,C.k)(!1),e.reportError(new b.__(`Field "${a.name}.${i.name}" argument "${t.name}" is deprecated. ${r}`,{nodes:n}))}}},ObjectField(n){const t=(0,R.xC)(e.getParentInputType());if((0,R.hL)(t)){const r=t.getFields()[n.name.value],a=null==r?void 0:r.deprecationReason;null!=a&&e.reportError(new b.__(`The input field ${t.name}.${r.name} is deprecated. ${a}`,{nodes:n}))}},EnumValue(n){const t=e.getEnumValue(),r=null==t?void 0:t.deprecationReason;if(t&&null!=r){const a=(0,R.xC)(e.getInputType());null!=a||(0,C.k)(!1),e.reportError(new b.__(`The enum value "${a.name}.${t.name}" is deprecated. ${r}`,{nodes:n}))}}}}var _=t(4032),L=t(50045),x=(t(67294),t(85893),t(73935),Object.defineProperty),D=(e,n)=>x(e,"name",{value:n,configurable:!0});const Q=[a.t,i.q,o.P,s.L,l.y,c.o,u.I,d.J,h.k,p.g,g.L,m.P];function G(e,n,t,r,a){const i=f.i.filter((e=>e!==v.J&&e!==y.i&&(!r||e!==w.a)));t&&Array.prototype.push.apply(i,t),a&&Array.prototype.push.apply(i,Q);return(0,$.Gu)(e,n,i).filter((e=>{if(e.message.includes("Unknown directive")&&e.nodes){const n=e.nodes[0];if(n&&n.kind===P.h.DIRECTIVE){const e=n.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}D(G,"validateWithCustomRules");const F={["Error"]:1,["Warning"]:2,["Information"]:3,["Hint"]:4},S=D(((e,n)=>{if(!e)throw new Error(n)}),"invariant");function I(e,n=null,t,r,a){var i,o;let s=null,l="";a&&(l="string"==typeof a?a:a.reduce(((e,n)=>e+(0,E.S)(n)+"\n\n"),""));const c=l?`${e}\n\n${l}`:e;try{s=(0,k.Qc)(c)}catch(u){if(u instanceof b.__){const e=O(null!==(o=null===(i=u.locations)||void 0===i?void 0:i[0])&&void 0!==o?o:{line:0,column:0},c);return[{severity:F.Error,message:u.message,source:"GraphQL: Syntax",range:e}]}throw u}return V(s,n,t,r)}function V(e,n=null,t,r){if(!n)return[];const a=G(n,e,t,r).flatMap((e=>A(e,F.Error,"Validation"))),i=(0,$.Gu)(n,e,[T]).flatMap((e=>A(e,F.Warning,"Deprecation")));return a.concat(i)}function A(e,n,t){if(!e.nodes)return[];const r=[];for(const[a,i]of e.nodes.entries()){const o="Variable"!==i.kind&&"name"in i&&void 0!==i.name?i.name:"variable"in i&&void 0!==i.variable?i.variable:i;if(o){S(e.locations,"GraphQL validation error requires locations.");const i=e.locations[a],s=q(o),l=i.column+(s.end-s.start);r.push({source:`GraphQL: ${t}`,message:e.message,severity:n,range:new L.R(new L.P(i.line-1,i.column-1),new L.P(i.line-1,l))})}}return r}function O(e,n){const t=(0,_.o)(),r=t.startState(),a=n.split("\n");S(a.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let c=0;c<e.line;c++)for(i=new _.C(a[c]);!i.eol();){if("invalidchar"===t.token(i,r))break}S(i,"Expected Parser stream to be available.");const o=e.line-1,s=i.getStartOfToken(),l=i.getCurrentPosition();return new L.R(new L.P(o,s),new L.P(o,l))}function q(e){const n=e.loc;return S(n,"Expected ASTNode to have a location."),n}D(I,"getDiagnostics"),D(V,"validateQuery"),D(A,"annotations"),D(O,"getRange"),D(q,"getLocation");const j=["error","warning","information","hint"],W={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,n)=>{const{schema:t,validationRules:a,externalFragments:i}=n;return I(e,t,a,void 0,i).map((e=>({message:e.message,severity:e.severity?j[e.severity-1]:j[0],type:e.source?W[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))}))}}]);