import{_ as p,r as f,o as n,c as a,a as o,F as T,G as E,b as R,B as v,x as M,y,t as u,d as _,f as m,w as J,A as Y}from"./js/_plugin-vue_export-helper.a81c6319.js";import{u as Q,l as X}from"./js/index.251e7289.js";import{l as ee}from"./js/index.fae5bbc8.js";import{l as se}from"./js/index.0b123ab1.js";import{m as b,d as te}from"./js/vuex.esm-bundler.55d3d5b3.js";import{T as oe}from"./js/WpTable.3e09f0c1.js";import"./js/default-i18n.0e8bc810.js";import{a as O}from"./js/constants.e56e1512.js";import{a as ie,c as ne,e as re}from"./js/Caret.19bf2275.js";import{S as ae}from"./js/Exclamation.09d9f31b.js";import{a as ce}from"./js/Image.01180f39.js";import"./js/SaveChanges.c85e9ba4.js";import{S as I}from"./js/Standalone.f58ac731.js";import{C as le}from"./js/GoogleSearchPreview.170d666f.js";import{S as ue}from"./js/External.bfa99ff9.js";import{i as de,s as $}from"./js/index.4dbecc01.js";import{s as pe}from"./js/postContent.f08c6962.js";import{l as he}from"./js/loadTruSeo.e907a9e5.js";import{e as me}from"./js/elemLoaded.9a6eb745.js";import{d as _e}from"./js/cleanForSlug.d16f1e3a.js";import"./js/client.e7a26247.js";import"./js/_commonjsHelpers.f84db168.js";import"./js/helpers.51e5fd9c.js";import"./js/Index.3662e61b.js";import"./js/Row.d42459be.js";import"./js/RequiresUpdate.52f5acf2.js";import"./js/Index.048705a6.js";import"./js/html.a669733f.js";function ge(e){return Q(O(e).toLowerCase())}function fe(e,s,t,i){var r=-1,c=e==null?0:e.length;for(i&&c&&(t=e[++r]);++r<c;)t=s(t,e[r],r,e);return t}var ve=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;function be(e){return e.match(ve)||[]}var ye=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;function $e(e){return ye.test(e)}var L="\\ud800-\\udfff",Pe="\\u0300-\\u036f",we="\\ufe20-\\ufe2f",ke="\\u20d0-\\u20ff",xe=Pe+we+ke,U="\\u2700-\\u27bf",V="a-z\\xdf-\\xf6\\xf8-\\xff",Se="\\xac\\xb1\\xd7\\xf7",Ae="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",Ce="\\u2000-\\u206f",Te=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",z="A-Z\\xc0-\\xd6\\xd8-\\xde",Ee="\\ufe0e\\ufe0f",D=Se+Ae+Ce+Te,B="['’]",P="["+D+"]",Re="["+xe+"]",N="\\d+",Me="["+U+"]",F="["+V+"]",W="[^"+L+D+N+U+V+z+"]",Oe="\\ud83c[\\udffb-\\udfff]",Ie="(?:"+Re+"|"+Oe+")",Le="[^"+L+"]",Z="(?:\\ud83c[\\udde6-\\uddff]){2}",G="[\\ud800-\\udbff][\\udc00-\\udfff]",d="["+z+"]",Ue="\\u200d",w="(?:"+F+"|"+W+")",Ve="(?:"+d+"|"+W+")",k="(?:"+B+"(?:d|ll|m|re|s|t|ve))?",x="(?:"+B+"(?:D|LL|M|RE|S|T|VE))?",K=Ie+"?",j="["+Ee+"]?",ze="(?:"+Ue+"(?:"+[Le,Z,G].join("|")+")"+j+K+")*",De="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Be="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Ne=j+K+ze,Fe="(?:"+[Me,Z,G].join("|")+")"+Ne,We=RegExp([d+"?"+F+"+"+k+"(?="+[P,d,"$"].join("|")+")",Ve+"+"+x+"(?="+[P,d+w,"$"].join("|")+")",d+"?"+w+"+"+k,d+"+"+x,Be,De,N,Fe].join("|"),"g");function Ze(e){return e.match(We)||[]}function Ge(e,s,t){return e=O(e),s=t?void 0:s,s===void 0?$e(e)?Ze(e):be(e):e.match(s)||[]}var Ke="['’]",je=RegExp(Ke,"g");function He(e){return function(s){return fe(Ge(_e(s).replace(je,"")),e,"")}}var qe=He(function(e,s,t){return s=s.toLowerCase(),e+(t?ge(s):s)});const S=qe;const Je={components:{CoreGoogleSearchPreview:le,SvgCircleCheck:ie,SvgCircleClose:ne,SvgCircleExclamation:ae,SvgExternal:ue,SvgPencil:re},mixins:[I,oe,ce],data(){return{separator:void 0,socialImage:null,socialImageKey:0,strings:{snippetPreview:this.$t.__("Snippet Preview",this.$td),canonicalUrl:this.$t.__("Canonical URL",this.$td)}}},computed:{...b(["currentPost"]),...b("live-tags",["liveTags"]),tips(){let e=[{label:this.$t.__("Visibility",this.$td),name:"visibility",access:"aioseo_page_advanced_settings"},{label:this.$t.__("SEO Analysis",this.$td),name:"seoAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Readability",this.$td),name:"readabilityAnalysis",access:"aioseo_page_analysis"},{label:this.$t.__("Focus Keyphrase",this.$td),name:"focusKeyphrase",access:"aioseo_page_analysis"},{label:this.$t.__("Social",this.$td),name:"social",access:"aioseo_page_social_settings"}].filter(s=>this.$allowed(s.access)&&(s.access!=="aioseo_page_analysis"||this.options.advanced.truSeo));return!this.options.social.facebook.general.enable&&!this.options.social.twitter.general.enable&&(e=e.filter(s=>s.name!=="social")),e.forEach((s,t)=>{e[t]={...s,...this.getData(s.name)}}),e},canImprove(){return this.tips.some(e=>e.type==="error")}},methods:{...te(["changeTabSettings"]),getIcon(e){switch(e){case"error":return"svg-circle-close";case"warning":return"svg-circle-exclamation";case"success":default:return"svg-circle-check"}},getData(e){const s={};if(e==="visibility"&&(s.value=this.$t.__("Good!",this.$td),s.type="success",(this.currentPost.default?this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType]&&!this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.default&&this.dynamicOptions.searchAppearance.postTypes[this.currentPost.postType].advanced.robotsMeta.noindex:this.currentPost.noindex)&&(s.value=this.$t.__("Blocked!",this.$td),s.type="error")),e==="seoAnalysis"){s.value=this.$t.__("N/A",this.$td),s.type="error";const t=this.currentPost.seo_score;Number.isInteger(t)&&(s.value=t+"/100",s.type=80<t?"success":50<t?"warning":"error")}if(e==="readabilityAnalysis"){s.value=this.$t.__("Good!",this.$td),s.type="success";const t=this.currentPost.page_analysis.analysis.readability.errors;t&&0<t&&(s.value=this.$t.sprintf(this.$t._n("%1$s error found!","%1$s errors found!",t,this.$td),t),s.type="error")}if(e==="focusKeyphrase"){s.value=this.$t.__("No focus keyphrase!",this.$td),s.type="error";const t=this.currentPost.keyphrases.focus;t&&t.keyphrase&&(s.value=t.score+"/100",s.type=80<t.score?"success":50<t.score?"warning":"error")}if(e==="social"){s.value=this.$t.__("Good!",this.$td),s.type="success",this.socialImageKey;const t=this.parseTags(this.currentPost.og_title||this.currentPost.title||this.currentPost.tags.title).trim(),i=this.parseTags(this.currentPost.og_description||this.currentPost.description||this.currentPost.tags.description).trim(),r=this.socialImage;(!t||!i||!r)&&(s.value=this.$t.__("Missing social markup!",this.$td),s.type="error")}return{...s,icon:this.getIcon(s.type)}},openSidebar(e){const{closePublishSidebar:s,openGeneralSidebar:t}=window.wp.data.dispatch("core/edit-post");s(),t("aioseo-post-settings-sidebar/aioseo-post-settings-sidebar");const i={};switch(e){case"canonical":case"visibility":i.tab="advanced";break;case"seoAnalysis":i.tab="general",i.card="basicseo";break;case"readabilityAnalysis":i.tab="general",i.card="readability";break;case"focusKeyphrase":i.tab="general",i.card="focus";break;case"social":i.tab="social";break}this.changeTabSettings({setting:"mainSidebar",value:i})}},async mounted(){await this.setImageUrl().then(()=>{this.socialImage=this.imageUrl}),this.$bus.$on("updateSocialImagePreview",e=>{this.socialImage=e.image,this.socialImageKey++}),this.$nextTick(()=>{const e=document.querySelector(".aioseo-pre-publish .editor-post-publish-panel__link");e&&(e.innerHTML=this.canImprove?this.$t.__("Your post needs improvement!",this.$td):this.$t.__("You're good to go!",this.$td))})}},Ye={key:0,class:"seo-overview"},Qe={class:"pre-publish-checklist"},Xe={class:"icon"},es=["onClick"],ss={key:0,class:"snippet-preview"},ts={class:"title"},os=["href"],is={key:1,class:"canonical-url"},ns={class:"title"},rs=["href"];function as(e,s,t,i,r,c){const h=f("svg-pencil"),g=f("core-google-search-preview"),H=f("svg-external");return e.currentPost.id?(n(),a("div",Ye,[o("ul",Qe,[(n(!0),a(T,null,E(c.tips,(l,q)=>(n(),a("li",{key:q},[o("span",Xe,[(n(),R(M(l.icon),{class:v(l.type)},null,8,["class"]))]),o("span",null,[y(u(l.label)+": ",1),o("span",{class:v(["result",l.value.endsWith("/100")?l.type:null])},u(l.value),3)]),e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType]&&e.dynamicOptions.searchAppearance.postTypes[e.currentPost.postType].advanced.showMetaBox?(n(),a("span",{key:0,class:"edit",onClick:Zs=>c.openSidebar(l.name)},[_(h)],8,es)):m("",!0)]))),128))]),e.$allowed("aioseo_page_analysis")?(n(),a("div",ss,[o("p",ts,u(r.strings.snippetPreview)+":",1),_(g,{title:e.parseTags(e.currentPost.title||e.currentPost.tags.title||"#post_title #separator_sa #site_title"),separator:e.options.searchAppearance.global.separator,description:e.parseTags(e.currentPost.description||e.currentPost.tags.description||"#post_content"),class:v({ismobile:e.currentPost.generalMobilePrev})},{domain:J(()=>[o("a",{href:e.liveTags.permalink,target:"_blank"},u(e.liveTags.permalink),9,os)]),_:1},8,["title","separator","description","class"])])):m("",!0),e.$allowed("aioseo_page_analysis")&&e.currentPost.canonicalUrl?(n(),a("div",is,[o("p",ns,[y(u(r.strings.canonicalUrl)+": ",1),o("span",{class:"edit",onClick:s[0]||(s[0]=l=>c.openSidebar("canonical"))},[_(h)])]),o("a",{href:e.currentPost.canonicalUrl,target:"_blank",rel:"noopener noreferrer"},[o("span",null,u(e.currentPost.canonicalUrl),1),_(H)],8,rs)])):m("",!0)])):m("",!0)}const A=p(Je,[["render",as]]),cs={},ls={width:"32",height:"32",fill:"none",class:"aioseo-facebook-rounded",xmlns:"http://www.w3.org/2000/svg"},us=o("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),ds=o("path",{d:"M24 16c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 4 2.9 7.3 6.7 7.9v-5.6h-2V16h2v-1.8c0-2 1.2-3.1 3-3.1.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.2V16h2.2l-.4 2.3h-1.9V24c4-.6 6.9-4 6.9-8z",fill:"#fff"},null,-1),ps=[us,ds];function hs(e,s){return n(),a("svg",ls,ps)}const ms=p(cs,[["render",hs]]),_s={},gs={width:"32",height:"32",fill:"none",class:"aioseo-linkedin-rounded",xmlns:"http://www.w3.org/2000/svg"},fs=o("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),vs=o("path",{d:"M11.6 24H8.2V13.3h3.4V24zM9.9 11.8C8.8 11.8 8 11 8 9.9 8 8.8 8.9 8 9.9 8c1.1 0 1.9.8 1.9 1.9 0 1.1-.8 1.9-1.9 1.9zM24 24h-3.4v-5.8c0-1.7-.7-2.2-1.7-2.2s-2 .8-2 2.3V24h-3.4V13.3h3.2v1.5c.3-.7 1.5-1.8 3.2-1.8 1.9 0 3.9 1.1 3.9 4.4V24h.2z",fill:"#fff"},null,-1),bs=[fs,vs];function ys(e,s){return n(),a("svg",gs,bs)}const $s=p(_s,[["render",ys]]),Ps={},ws={width:"32",height:"32",fill:"none",class:"aioseo-pinterest-rounded",xmlns:"http://www.w3.org/2000/svg"},ks=o("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),xs=o("path",{d:"M16.056 6.583c-5.312 0-9.658 4.346-9.658 9.658a9.581 9.581 0 005.795 8.813c0-.724 0-1.448.12-2.173.242-.845 1.207-5.312 1.207-5.312s-.362-.604-.362-1.57c0-1.448.846-2.535 1.811-2.535.845 0 1.328.604 1.328 1.45 0 .844-.603 2.172-.845 3.38-.241.965.483 1.81 1.57 1.81 1.81 0 3.018-2.293 3.018-5.19 0-2.174-1.449-3.743-3.984-3.743-2.898 0-4.709 2.173-4.709 4.587 0 .845.242 1.449.604 1.932.12.241.242.241.12.483 0 .12-.12.603-.24.724-.121.242-.242.362-.483.242-1.329-.604-1.932-2.053-1.932-3.743 0-2.777 2.294-6.036 6.881-6.036 3.743 0 6.157 2.656 6.157 5.553 0 3.743-2.052 6.64-5.19 6.64-1.087 0-2.053-.603-2.415-1.207 0 0-.604 2.173-.725 2.656a10.702 10.702 0 01-.966 2.052c.846.242 1.811.363 2.777.363 5.312 0 9.658-4.347 9.658-9.659.121-4.829-4.225-9.175-9.537-9.175z",fill:"#fff"},null,-1),Ss=[ks,xs];function As(e,s){return n(),a("svg",ws,Ss)}const Cs=p(Ps,[["render",As]]),Ts={},Es={width:"32",height:"32",fill:"none",class:"aioseo-twitter-rounded",xmlns:"http://www.w3.org/2000/svg"},Rs=o("circle",{cx:"16",cy:"16",r:"16",fill:"currentColor"},null,-1),Ms=o("path",{d:"M24 11c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-2.1 0-3.7 2-3.2 4-2.7-.1-5.1-1.4-6.8-3.4-.9 1.5-.4 3.4 1 4.4-.5 0-1-.2-1.5-.4 0 1.5 1.1 2.9 2.6 3.3-.5.1-1 .2-1.5.1.4 1.3 1.6 2.3 3.1 2.3-1.2.9-3 1.4-4.7 1.2 1.5.9 3.2 1.5 5 1.5 6.1 0 9.5-5.1 9.3-9.8.7-.4 1.3-1 1.7-1.7z",fill:"#fff"},null,-1),Os=[Rs,Ms];function Is(e,s){return n(),a("svg",Es,Os)}const Ls=p(Ts,[["render",Is]]);const Us={components:{SvgFacebookRounded:ms,SvgLinkedinRounded:$s,SvgPinterestRounded:Cs,SvgTwitterRounded:Ls},mixins:[I],data(){return{strings:{title:this.$t.__("Get out the word!",this.$td),description:this.$t.__("Share your content on your favorite social media platforms to drive engagement and increase your SEO.",this.$td)}}},computed:{...b("live-tags",["liveTags"]),socialNetworks(){return[{icon:"svg-twitter-rounded",link:"https://twitter.com/share?url="},{icon:"svg-facebook-rounded",link:"https://www.facebook.com/sharer/sharer.php?u="},{icon:"svg-pinterest-rounded",link:"https://pinterest.com/pin/create/button/?url="},{icon:"svg-linkedin-rounded",link:"https://www.linkedin.com/shareArticle?url="}].map(e=>({...e,link:e.link+this.liveTags.permalink}))}}},Vs={key:0,class:"aioseo-post-publish"},zs={class:"title"},Ds={class:"description"},Bs={class:"links"},Ns=["href"];function Fs(e,s,t,i,r,c){return e.liveTags.permalink?(n(),a("div",Vs,[o("h2",zs,u(r.strings.title),1),o("p",Ds,u(r.strings.description),1),o("div",Bs,[(n(!0),a(T,null,E(c.socialNetworks,(h,g)=>(n(),a("a",{class:"link",target:"_blank",key:g,href:h.link},[(n(),R(M(h.icon)))],8,Ns))),128))])])):m("",!0)}const Ws=p(Us,[["render",Fs]]);(function(e){if(!de()||!pe()||!e.editPost.PluginDocumentSettingPanel)return;const s=e.editPost.PluginDocumentSettingPanel,t=e.editPost.PluginPrePublishPanel,i=e.editPost.PluginPostPublishPanel,r=e.plugins.registerPlugin,c=window.aioseo.user;!c.capabilities.aioseo_page_analysis&&!c.capabilities.aioseo_page_general_settings&&!c.capabilities.aioseo_page_advanced_settings||r("aioseo-publish-panel",{render:()=>e.element.createElement(e.element.Fragment,{},e.element.createElement(s,{title:"AIOSEO",className:"aioseo-document-setting aioseo-seo-overview",icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-document-setting"}))),e.element.createElement(t,{title:["AIOSEO",":",e.element.createElement("span",{key:"scoreDescription",className:"editor-post-publish-panel__link"})],className:"aioseo-pre-publish aioseo-seo-overview",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-pre-publish"}))),e.element.createElement(i,{title:"AIOSEO",initialOpen:!0,icon:e.element.Fragment},e.element.createElement("div",{},e.element.createElement("div",{id:"aioseo-post-publish"}))))})})(window.wp);const C=e=>{let s=Y(e.component);return s=X(s),s=ee(s),s=se(s),$._vm=s,s.use($),s.mount("#"+e.id),window.addEventListener("load",()=>{he(s,!1)}),s};window.aioseo.currentPost&&window.aioseo.currentPost.context==="post"&&[{id:"aioseo-pre-publish",component:A},{id:"aioseo-document-setting",component:A},{id:"aioseo-post-publish",component:Ws}].forEach(s=>{document.getElementById(s.id)?C(s):(me("#"+s.id,S(s.id)),document.addEventListener("animationstart",function(t){S(s.id)===t.animationName&&C(s)},{passive:!0}))});