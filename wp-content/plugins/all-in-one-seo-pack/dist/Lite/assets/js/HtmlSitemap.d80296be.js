import{m as A}from"./vuex.esm-bundler.55d3d5b3.js";import{B as O}from"./Checkbox.ec732dfe.js";import{B as V}from"./RadioToggle.cfd7da6d.js";import{C as M}from"./Card.0a3b54f8.js";import{C as x}from"./ExcludePosts.c83960a2.js";import{C as H}from"./PostTypeOptions.6d2c9b9f.js";import{C as B}from"./SettingsRow.bc3a4ca9.js";import{C as G,a as I,c as R,d as N}from"./Caret.19bf2275.js";import{C as z,c as E}from"./index.fae5bbc8.js";import{_ as D,o as r,c as _,a as n,t as d,F as P,G as F,r as a,b as m,w as o,d as i,f as c,B as W,y as b}from"./_plugin-vue_export-helper.a81c6319.js";import{C as q}from"./DisplayInfo.ddf17cd3.js";import{C as K}from"./Tooltip.c4cc47a2.js";import{S as j}from"./External.bfa99ff9.js";import"./default-i18n.0e8bc810.js";import"./_commonjsHelpers.f84db168.js";import"./helpers.51e5fd9c.js";import"./Checkmark.36fbf255.js";import"./Slide.4392623f.js";import"./WpTable.3e09f0c1.js";import"./Index.3662e61b.js";import"./Row.d42459be.js";import"./RequiresUpdate.52f5acf2.js";import"./postContent.f08c6962.js";import"./index.4dbecc01.js";import"./cleanForSlug.d16f1e3a.js";import"./constants.e56e1512.js";import"./html.a669733f.js";import"./Index.048705a6.js";import"./JsonValues.870a4901.js";import"./SaveChanges.c85e9ba4.js";import"./AddPlus.0867f208.js";import"./HighlightToggle.961b1cc4.js";import"./Radio.fcc6f949.js";import"./CheckSolid.76edafdf.js";const J={props:{description:{type:String},attributes:{type:Array,required:!0}}},Q={class:"aioseo-attributes"},X={class:"aioseo-description"},Y={class:"aioseo-attributes-list"},Z=["innerHTML"];function tt(e,s,g,k,t,p){return r(),_("div",Q,[n("div",X,d(g.description),1),n("ul",Y,[(r(!0),_(P,null,F(g.attributes,(u,h)=>(r(),_("li",{key:h},[n("div",null,[n("code",null,d(u.name),1)]),n("div",null,[n("span",{class:"aioseo-description",innerHTML:u.description},null,8,Z)])]))),128))])])}const et=D(J,[["render",tt],["__scopeId","data-v-4823ddd8"]]);const st={components:{CoreAlert:z,CoreAttributesList:et,CoreDisplayInfo:q,CoreLoader:G,CoreTooltip:K,SvgCircleCheck:I,SvgCircleClose:R,SvgExternal:j,SvgFile:E},props:{displayOptions:{type:Object,required:!0},url:{type:String}},data(){return{pageUrl:"",currentPageUrl:"",buttonLocked:!0,error:!1,isLoading:!1,showResults:!1,showAdvancedSettings:!1,strings:{label:this.$t.__("Display HTML Sitemap",this.$td),page:this.$t.__("Dedicated Page",this.$td),placeholder:this.$t.sprintf(this.$t.__("e.g. %1$s",this.$td),`${this.$aioseo.urls.home}/new-page`),pageButton:this.$t.__("Open HTML Sitemap",this.$td),errorMessage:this.$t.__("The page that you have entered is invalid or already exists. Please enter a page with a unique slug.",this.$td),errorMessageDisabled:this.$t.sprintf(this.$t.__('Dedicated HTML Sitemaps do not work while using "plain" permalinks. Please update your %1$spermalink structure%2$s to use this option.',this.$td),'<a href="'+this.$aioseo.urls.home+'/wp-admin/options-permalink.php">',"</a>"),shortcodeAttributesDescription:this.$t.__("The following shortcode attributes can be used to override the default settings:",this.$td),phpArgumentsDescription:this.$t.__("The function accepts an associative array with the following arguments that can be used to override the default settings:",this.$td),advancedSettings:this.$t.__("Advanced Settings",this.$td),editAndSaveFirst:this.$t.__("To view the sitemap, enter a URL and save changes.",this.$td),saveFirst:this.$t.__("To view the new sitemap, first save changes.",this.$td)},attributes:[{name:"post_types",description:this.$t.__("The post types (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"taxonomies",description:this.$t.__("The taxonomies (by slug, comma-separated) that are included in the sitemap.",this.$td)},{name:"label_tag",description:this.$t.sprintf(this.$t.__("The HTML tag that is used for the label of each section. Defaults to %1$s.",this.$td),"<code>h4</code>")},{name:"show_label",description:this.$t.sprintf(this.$t.__("Whether the labels should be shown or not. Defaults to %1$s.",this.$td),"<code>true</code>")},{name:"publication_date",description:this.$t.__("Whether the publication date of posts should be shown.",this.$td)},{name:"archives",description:this.$t.__("Whether the regular sitemap or compact date archive sitemap is output.",this.$td)},{name:"order",description:this.$t.sprintf(this.$t.__("The sort direction. The supported values are %1$s and %2$s.",this.$td),"<code>ASC</code>","<code>DESC</code>")},{name:"order_by",description:this.$t.sprintf(this.$t.__("The sort order. The supported values are %1$s, %2$s, %3$s and %4$s.",this.$td),"<code>publish_date</code>","<code>last_updated</code>","<code>alphabetical</code>","<code>id</code>")}]}},created(){this.pageUrl=this.dedicatedPageDisabled?"":this.options.sitemap.html.pageUrl,this.addSiteUrl(),this.pageUrl&&(this.buttonLocked=!1),this.$bus.$on("changes-saved",()=>{this.processChangesSaved()})},computed:{...A(["options"]),sitemapButtonDisabled(){return this.pageUrl?this.strings.saveFirst:this.strings.editAndSaveFirst},dedicatedPageDisabled(){return this.$aioseo.data.permalinkStructure===""}},methods:{addSiteUrl(){this.pageUrl&&!this.pageUrl.startsWith(`http://${window.aioseo.urls.domain}`)&&!this.pageUrl.startsWith(`https://${window.aioseo.urls.domain}`)&&(this.pageUrl=this.$aioseo.data.isSsl?`https://${window.aioseo.urls.domain}/${this.pageUrl}`:`http://${window.aioseo.urls.domain}/${this.pageUrl}`)},validateNewSlug(e){if(this.pageUrl=e.target.value,!this.pageUrl){this.options.sitemap.html.pageUrl="";return}if(this.currentPageUrl===this.pageUrl){this.buttonLocked=!1,this.error=!1;return}else this.buttonLocked=!0;this.isLoading=!0,N(()=>{if(/\s/.test(this.pageUrl)){this.error=!0,this.isLoading=!1;return}this.$http.post(this.$links.restUrl("sitemap/validate-html-sitemap-slug")).send({pageUrl:this.pageUrl}).then(s=>{s.body.exists?(this.error=!0,this.showResults=!0):(this.error=!1,this.options.sitemap.html.pageUrl=this.pageUrl),this.isLoading=!1}).catch(()=>{this.error=!0,this.isLoading=!1})},500)},processChangesSaved(){if(!this.pageUrl){this.buttonLocked=!0;return}this.currentPageUrl=this.pageUrl,this.buttonLocked=!1}}},it={class:"new-page"},ot={class:"aioseo-row"},nt={class:"aioseo-col col-xs-12 text-xs-left"},at=["innerHTML"],rt={class:"aioseo-col col-xs-12 col-md-7 text-xs-left"},lt={class:"append-icon"},pt={class:"aioseo-col col-xs-12 col-md-5 text-xs-left"},dt=["innerHTML"];function ct(e,s,g,k,t,p){const u=a("core-attributes-list"),h=a("svg-file"),L=a("svg-circle-close"),$=a("svg-circle-check"),v=a("core-loader"),S=a("base-input"),f=a("svg-external"),y=a("base-button"),T=a("core-tooltip"),l=a("core-alert"),C=a("core-display-info");return r(),m(C,{label:t.strings.label,options:g.displayOptions,url:g.url},{shortcodeAdvanced:o(()=>[i(u,{description:t.strings.shortcodeAttributesDescription,attributes:t.attributes},null,8,["description","attributes"])]),phpAdvanced:o(()=>[i(u,{description:t.strings.phpArgumentsDescription,attributes:t.attributes},null,8,["description","attributes"])]),extra:o(()=>[i(h),n("p",null,d(t.strings.page),1)]),extraBox:o(({item:w})=>[n("div",it,[n("div",ot,[n("div",nt,[w.desc?(r(),_("div",{key:0,class:"aioseo-description",innerHTML:w.desc},null,8,at)):c("",!0)]),n("div",rt,[i(S,{disabled:p.dedicatedPageDisabled,modelValue:t.pageUrl,"onUpdate:modelValue":s[0]||(s[0]=U=>t.pageUrl=U),onKeyup:p.validateNewSlug,onBlur:p.addSiteUrl,size:"medium",placeholder:t.strings.placeholder,onFocus:s[1]||(s[1]=U=>t.showResults=!0),class:W({"aioseo-error":t.error,"aioseo-active":!t.error&&t.pageUrl&&!p.dedicatedPageDisabled})},{"append-icon":o(()=>[n("div",lt,[t.isLoading?c("",!0):(r(),_(P,{key:0},[t.error?(r(),m(L,{key:0})):c("",!0),!t.error&&t.pageUrl&&!p.dedicatedPageDisabled?(r(),m($,{key:1})):c("",!0)],64)),t.isLoading?(r(),m(v,{key:1,dark:""})):c("",!0)])]),_:1},8,["disabled","modelValue","onKeyup","onBlur","placeholder","class"])]),n("div",pt,[!t.pageUrl||t.buttonLocked||t.error||p.dedicatedPageDisabled?(r(),m(T,{key:0,type:"action",tag:"div"},{tooltip:o(()=>[b(d(p.sitemapButtonDisabled),1)]),default:o(()=>[i(y,{disabled:p.dedicatedPageDisabled,class:"aioseo-html-sitemaps-disabled-button",size:"medium",type:"blue",tag:"button"},{default:o(()=>[i(f),b(" "+d(t.strings.pageButton),1)]),_:1},8,["disabled"])]),_:1})):c("",!0),t.pageUrl&&!t.buttonLocked&&!t.error&&!p.dedicatedPageDisabled?(r(),m(y,{key:1,size:"medium",type:"blue",tag:"a",href:t.pageUrl,target:"_blank"},{default:o(()=>[i(f),b(" "+d(t.strings.pageButton),1)]),_:1},8,["href"])):c("",!0)]),t.showResults&&t.error||p.dedicatedPageDisabled?(r(),m(l,{key:0,type:p.dedicatedPageDisabled?"yellow":"red",size:"medium"},{default:o(()=>[n("span",{innerHTML:p.dedicatedPageDisabled?t.strings.errorMessageDisabled:t.strings.errorMessage},null,8,dt)]),_:1},8,["type"])):c("",!0)])])]),_:1},8,["label","options","url"])}const ht=D(st,[["render",ct]]);const mt={components:{BaseCheckbox:O,BaseRadioToggle:V,CoreCard:M,CoreExcludePosts:x,CorePostTypeOptions:H,CoreSettingsRow:B,HtmlSitemapDisplayInfo:ht},data(){return{sortOrders:[{label:this.$t.__("Publish Date",this.$td),value:"publish_date"},{label:this.$t.__("Last Updated Date",this.$td),value:"last_updated"},{label:this.$t.__("Alphabetical",this.$td),value:"alphabetical"},{label:this.$t.__("Post/Term ID",this.$td),value:"id"}],sortDirections:[{label:this.$t.__("Ascending",this.$td),value:"asc"},{label:this.$t.__("Descending",this.$td),value:"desc"}],displayOptions:{extra:{desc:this.$t.__("Display the sitemap on a dedicated page:",this.$td)},block:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this block, edit a page or post and search for the %1$s"%2$s - HTML Sitemap"%3$s block.',this.$td),"<strong>","AIOSEO","</strong>")},shortcode:{copy:"[aioseo_html_sitemap]",desc:this.$t.sprintf(this.$t.__("Use the following shortcode to display the HTML Sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapShortcode",!0))},widget:{copy:"",desc:this.$t.sprintf(this.$t.__('To add this widget, visit the %1$swidgets page%2$s and look for the %3$s"%4$s - HTML Sitemap"%5$s widget.',this.$td),`<a href="${this.$aioseo.urls.admin.widgets}" target="_blank">`,"</a>","<strong>","AIOSEO","</strong>")},php:{copy:"<?php if( function_exists( 'aioseo_html_sitemap' ) ) aioseo_html_sitemap(); ?>",desc:this.$t.sprintf(this.$t.__("Use the following PHP code anywhere in your theme to display the sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapFunction",!0))}},strings:{title:this.$t.__("HTML Sitemap",this.$td),enableSitemap:this.$t.__("Enable Sitemap",this.$td),settings:this.$t.__("HTML Sitemap Settings",this.$td),description:this.$t.__("Using the custom-built tools below, you can add an HTML sitemap to your website and help visitors discover all your content. Adding an HTML sitemap to your website may also help search engines find your content more easily.",this.$td),displayLabel:this.$t.__("Display HTML Sitemap",this.$td),postTypes:this.$t.__("Post Types",this.$td),taxonomies:this.$t.__("Taxonomies",this.$td),includeAllPostTypes:this.$t.__("Include All Post Types",this.$td),selectPostTypes:this.$t.__("Select which Post Types appear in your sitemap.",this.$td),includeAllTaxonomies:this.$t.__("Include All Taxonomies",this.$td),selectTaxonomies:this.$t.__("Select which Taxonomies appear in your sitemap.",this.$td),sortOrder:this.$t.__("Sort Order",this.$td),sortDirection:this.$t.__("Sort Direction",this.$td),publicationDate:this.$t.__("Publication Date",this.$td),publicationDateDescription:this.$t.__("This setting only applies to posts and pages.",this.$td),compactArchives:this.$t.__("Compact Archives",this.$td),compactArchivesDescription:this.$t.sprintf(this.$t.__("This setting allows you to toggle between the regular sitemap or the compact date archive sitemap. %1$s",this.$td),this.$links.getDocLink(this.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemapCompactArchives",!0)),advancedSettings:this.$t.__("Advanced Settings",this.$td),excludePostsPages:this.$t.__("Exclude Posts / Pages",this.$td),excludeTerms:this.$t.__("Exclude Terms",this.$td)}}},computed:{...A(["options","internalOptions"])},methods:{getSortOrder(e){return this.sortOrders.find(s=>s.value===e)},getSortDirection(e){return this.sortDirections.find(s=>s.value===e)}}},ut={class:"aioseo-html-sitemap"},_t={class:"aioseo-settings-row aioseo-section-description"},gt=["innerHTML"],bt={class:"aioseo-description"},$t={class:"aioseo-description"},ft={class:"aioseo-description"},yt=["innerHTML"],vt={key:0};function St(e,s,g,k,t,p){const u=a("base-toggle"),h=a("core-settings-row"),L=a("html-sitemap-display-info"),$=a("core-card"),v=a("base-checkbox"),S=a("core-post-type-options"),f=a("base-select"),y=a("base-radio-toggle"),T=a("core-exclude-posts");return r(),_("div",ut,[i($,{slug:"htmlSitemap"},{header:o(()=>[n("span",null,d(t.strings.title),1)]),default:o(()=>[n("div",_t,[b(d(t.strings.description)+" ",1),n("span",{innerHTML:e.$links.getDocLink(e.$constants.GLOBAL_STRINGS.learnMore,"htmlSitemap",!0)},null,8,gt)]),i(h,{name:t.strings.enableSitemap},{content:o(()=>[i(u,{modelValue:e.options.sitemap.html.enable,"onUpdate:modelValue":s[0]||(s[0]=l=>e.options.sitemap.html.enable=l)},null,8,["modelValue"])]),_:1},8,["name"]),e.options.sitemap.html.enable?(r(),m(L,{key:0,label:t.strings.displayLabel,displayOptions:t.displayOptions,url:e.options.sitemap.html.pageUrl},null,8,["label","displayOptions","url"])):c("",!0)]),_:1}),e.options.sitemap.html.enable?(r(),m($,{key:0,class:"aioseo-html-sitemap-settings",slug:"htmlSitemapSettings"},{header:o(()=>[n("span",null,d(t.strings.settings),1)]),default:o(()=>[i(h,{name:t.strings.postTypes},{content:o(()=>[i(v,{size:"medium",modelValue:e.options.sitemap.html.postTypes.all,"onUpdate:modelValue":s[1]||(s[1]=l=>e.options.sitemap.html.postTypes.all=l)},{default:o(()=>[b(d(t.strings.includeAllPostTypes),1)]),_:1},8,["modelValue"]),e.options.sitemap.html.postTypes.all?c("",!0):(r(),m(S,{key:0,options:e.options.sitemap.html,type:"postTypes",excluded:["attachment"]},null,8,["options"])),n("div",bt,d(t.strings.selectPostTypes),1)]),_:1},8,["name"]),i(h,{name:t.strings.taxonomies},{content:o(()=>[i(v,{size:"medium",modelValue:e.options.sitemap.html.taxonomies.all,"onUpdate:modelValue":s[2]||(s[2]=l=>e.options.sitemap.html.taxonomies.all=l)},{default:o(()=>[b(d(t.strings.includeAllTaxonomies),1)]),_:1},8,["modelValue"]),e.options.sitemap.html.taxonomies.all?c("",!0):(r(),m(S,{key:0,options:e.options.sitemap.html,type:"taxonomies"},null,8,["options"])),n("div",$t,d(t.strings.selectTaxonomies),1)]),_:1},8,["name"]),i(h,{name:t.strings.sortOrder,class:"aioseo-sort-order",align:""},{content:o(()=>[i(f,{size:"medium",options:t.sortOrders,modelValue:p.getSortOrder(e.options.sitemap.html.sortOrder),"onUpdate:modelValue":s[3]||(s[3]=l=>e.options.sitemap.html.sortOrder=l.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),i(h,{name:t.strings.sortDirection,class:"aioseo-sort-direction",align:""},{content:o(()=>[i(f,{size:"medium",options:t.sortDirections,modelValue:p.getSortDirection(e.options.sitemap.html.sortDirection),"onUpdate:modelValue":s[4]||(s[4]=l=>e.options.sitemap.html.sortDirection=l.value)},null,8,["options","modelValue"])]),_:1},8,["name"]),i(h,{name:t.strings.publicationDate,align:""},{content:o(()=>[i(y,{modelValue:e.options.sitemap.html.publicationDate,"onUpdate:modelValue":s[5]||(s[5]=l=>e.options.sitemap.html.publicationDate=l),name:"publicationDate",options:[{label:e.$constants.GLOBAL_STRINGS.hide,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.show,value:!0}]},null,8,["modelValue","options"]),n("div",ft,d(t.strings.publicationDateDescription),1)]),_:1},8,["name"]),i(h,{name:t.strings.compactArchives,align:""},{content:o(()=>[i(y,{modelValue:e.options.sitemap.html.compactArchives,"onUpdate:modelValue":s[6]||(s[6]=l=>e.options.sitemap.html.compactArchives=l),name:"compactArchives",options:[{label:e.$constants.GLOBAL_STRINGS.disabled,value:!1,activeClass:"dark"},{label:e.$constants.GLOBAL_STRINGS.enabled,value:!0}]},null,8,["modelValue","options"]),n("div",{class:"aioseo-description",innerHTML:t.strings.compactArchivesDescription},null,8,yt)]),_:1},8,["name"])]),_:1})):c("",!0),e.options.sitemap.html.enable?(r(),m($,{key:1,slug:"htmlSitemapAdvancedSettings",toggles:e.options.sitemap.html.advancedSettings.enable},{header:o(()=>[i(u,{modelValue:e.options.sitemap.html.advancedSettings.enable,"onUpdate:modelValue":s[7]||(s[7]=l=>e.options.sitemap.html.advancedSettings.enable=l)},null,8,["modelValue"]),n("span",null,d(t.strings.advancedSettings),1)]),default:o(()=>[e.options.sitemap.html.advancedSettings.enable?(r(),_("div",vt,[i(h,{name:t.strings.excludePostsPages,class:"aioseo-exclude-pages-posts",align:""},{content:o(()=>[i(T,{options:e.options.sitemap.html.advancedSettings,type:"posts"},null,8,["options"])]),_:1},8,["name"]),i(h,{name:t.strings.excludeTerms,class:"aioseo-exclude-terms",align:""},{content:o(()=>[i(T,{options:e.options.sitemap.html.advancedSettings,type:"terms"},null,8,["options"])]),_:1},8,["name"])])):c("",!0)]),_:1},8,["toggles"])):c("",!0)])}const ie=D(mt,[["render",St]]);export{ie as default};
