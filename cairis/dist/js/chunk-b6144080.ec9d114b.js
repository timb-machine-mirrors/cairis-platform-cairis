(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b6144080","chunk-61f8c9da","chunk-41bf07d3","chunk-f72b1efa","chunk-2e85c374","chunk-24c47be9"],{1864:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],s=(n("6762"),n("2fdb"),n("cadf"),n("551c"),n("f751"),n("097d"),n("bc3a")),r=n.n(s),a=n("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var n=this;r.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){n.items=e.data,n.items=n.items.length>0?n.items.filter(function(t){if(!n.existing.includes(t))return t}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),t.selected=t.initial}).catch(function(t){a["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},l=c,u=n("2877"),m=Object(u["a"])(l,i,o,!1,null,null,null);e["default"]=m.exports},"18e9":function(t,e,n){"use strict";e["a"]={computed:{environmentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties.map(function(t){return t.theEnvironmentName}):[]},environmentName:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theEnvironmentName:""}},methods:{addEnvironmentProperty:function(t){this.objt.theEnvironmentProperties.push(t),this.envPropIndex=this.objt.theEnvironmentProperties.length-1},deleteEnvironment:function(t){this.objt.theEnvironmentProperties=this.objt.theEnvironmentProperties.filter(function(e){return e.theEnvironmentName!=t})},addEnvironment:function(t){t.preventDefault(),this.$refs.environmentDialog.show()}}}},"1e3b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:t.onOk}},[n("b-card",[""==t.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e(),""!=t.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e()],1)],1)},o=[],s=n("1864"),r={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:s["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(t){this.selected=t},onOk:function(t){0==this.selected.length?(t.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},a=r,c=n("2877"),l=Object(c["a"])(a,i,o,!1,null,null,null);e["default"]=l.exports},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),o=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(t,e,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");e["a"]={methods:{commitObject:function(t,e,n,i,r){var a=this;"undefined"==typeof i&&(i={post:{},put:{}}),"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=r?a.$router.push({name:n,params:{dimension:r}}):a.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:i["post"]}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=r?a.$router.push({name:n,params:{dimension:r}}):a.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;o.a.post(e,t).then(function(t){s["a"].$emit("operation-success",t.data.message)}).catch(function(t){s["a"].$emit("operation-failure",t)})}}},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(o){}}return!0}},"60b9":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"tbCompDialog",attrs:{title:"Add Trust Boundary Component"},on:{ok:t.onOk}},[n("b-card",[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Type","label-class":"font-weight-bold text-md-left","label-for":"theTBComponentTypeRadio"}},[n("b-form-radio-group",{attrs:{id:"theTBComponentTypeRadio"},model:{value:t.theComponentType,callback:function(e){t.theComponentType=e},expression:"theComponentType"}},[n("b-form-radio",{attrs:{value:"process"}},[t._v("Process")]),n("b-form-radio",{attrs:{value:"datastore"}},[t._v("Datastore")])],1)],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("dimension-select",{attrs:{environment:this.environment,dimension:t.theComponentType},on:{"dimension-select-change":t.dimensionSelected}})],1)],1)],1)],1)},o=[],s=n("1864"),r={name:"trust-boundary-component-modal",props:{environment:String},data:function(){return{theComponentType:"process",theName:""}},components:{DimensionSelect:s["default"]},methods:{show:function(){this.$refs.tbCompDialog.show()},dimensionSelected:function(t){this.theName=t},onOk:function(t){0==this.theName.length?(t.preventDefault(),alert("Please select a value")):(this.$emit("trust-boundary-component-modal-update",{theName:this.theName,theType:this.theComponentType}),this.$refs.tbCompDialog.hide())}}},a=r,c=n("2877"),l=Object(c["a"])(a,i,o,!1,null,null,null);e["default"]=l.exports},6762:function(t,e,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"94cc":function(t,e,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");e["a"]={methods:{commitObject:function(t,e,n,i){var r=this;"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=i?r.$router.push({name:n,params:{dimension:i}}):r.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=i?r.$router.push({name:n,params:{dimension:i}}):r.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)})}}}},aae3:function(t,e,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},cb62:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trustboundaryview"},[n("b-breadcrumb",{attrs:{items:t.bcItems}}),n("trust-boundary",{attrs:{object:this.objt,label:this.commitLabel},on:{"trust-boundary-commit":t.commitTrustBoundary}})],1)},o=[],s=n("bc3a"),r=n.n(s),a=n("3f53"),c=n("dfce"),l=n("4360"),u=n("61da"),m={props:{objectName:String},mixins:[a["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Trust boundaries",to:{name:"objectsview",params:{dimension:"trustboundary"}}},{text:this.objt.theName,to:{name:"trustboundary"}}]}},components:{TrustBoundary:c["default"]},data:function(){return{objt:{theName:"",theDescription:"",theEnvironmentProperties:[]},commitLabel:"Create"}},beforeRouteEnter:function(t,e,n){if("New trustboundary"==t.params.objectName)n();else{var i="/api/trust_boundaries/name/"+t.params.objectName;r.a.get(i,{baseURL:l["a"].state.url,params:{session_id:l["a"].state.session}}).then(function(t){n(function(e){e.commitLabel="Update",e.objt=t.data})}).catch(function(t){u["a"].$emit("operation-failure",t)})}},methods:{commitTrustBoundary:function(t){this.objt=t;var e=this.$store.state.url+"/api/trust_boundaries/name/"+this.objectName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/trust_boundaries";this.commitObject(e,n,"objectsview",void 0,"trustboundary")}}},d=m,h=n("2877"),p=Object(h["a"])(d,i,o,!1,null,null,null);e["default"]=p.exports},d2c8:function(t,e,n){var i=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}},dfce:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"trustboundary"},[n("dimension-modal",{ref:"environmentDialog",attrs:{dimension:"environment",existing:t.environmentNames},on:{"dimension-modal-update":t.addTrustBoundaryEnvironmentProperty}}),n("trust-boundary-component-modal",{ref:"compDialog",attrs:{environment:t.environmentName},on:{"trust-boundary-component-modal-update":t.addTrustBoundaryComponent}}),t.errors.length?n("p",[n("b",[t._v("Please correct the following error(s):")]),n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light"}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Trust Boundary","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theTrustBoundaryInput"}},[n("b-form-input",{attrs:{id:"theTrustBoundaryInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-form-group",{attrs:{label:"Description","label-class":"font-weight-bold text-md-left","label-for":"theDescriptionInput"}},[n("b-form-textarea",{attrs:{id:"theDescriptionInput",type:"text",rows:2,"max-rows":4,required:""},model:{value:t.objt.theDescription,callback:function(e){t.$set(t.objt,"theDescription",e)},expression:"objt.theDescription"}})],1)],1)],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-card",{staticClass:"text-left",attrs:{header:"Environments"}},[n("template",{slot:"header"},[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addEnvironment(e)}}}),t._v(" Environment\n          ")],1),n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-tabs",{attrs:{pills:""},model:{value:t.envPropIndex,callback:function(e){t.envPropIndex=e},expression:"envPropIndex"}},t._l(this.objt.theEnvironmentProperties,function(e){return n("b-tab",{key:e.theEnvironmentName,attrs:{title:e.theName}},[n("template",{slot:"title"},[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return t.deleteEnvironment(e.theEnvironmentName)}}}),t._v("  "+t._s(e.theEnvironmentName)+"\n                  ")],1)],2)}),1)],1)],1),this.objt.theEnvironmentProperties.length?n("b-row",[n("b-col",{attrs:{sm:"12"}},[n("b-form-group",{attrs:{label:"Privilege","label-class":"font-weight-bold text-md-left","label-cols":"1","label-for":"thePrivilegeSelect"}},[n("dimension-select",{attrs:{id:"thePrivilegeSelect",dimension:"privilege",initial:t.privilege},on:{"dimension-select-change":t.privilegeSelected}})],1),n("b-table",{attrs:{striped:"",bordered:"",small:"",fields:t.componentTableFields,items:t.components},scopedSlots:t._u([{key:"HEAD_componentactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addComponent(e)}}})]}},{key:"componentactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),t.deleteComponent(e.index)}}})]}}],null,!1,2949286e3)})],1)],1):t._e()],2)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},o=[],s=n("94cc"),r=n("18e9"),a=n("1e3b"),c=n("60b9"),l=n("1864"),u={props:{object:Object,label:String},watch:{object:"setObject"},mixins:[s["a"],r["a"]],computed:{componentNames:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theComponents:[]},components:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].theComponents:[]},privilege:function(){return this.objt.theEnvironmentProperties.length>0?this.objt.theEnvironmentProperties[this.envPropIndex].thePrivilege:""}},components:{DimensionModal:a["default"],TrustBoundaryComponentModal:c["default"],DimensionSelect:l["default"]},data:function(){return{objt:this.object,commitLabel:this.label,envPropIndex:0,errors:[],envFields:{envactions:{label:""},theName:{label:"Environment"}},componentTableFields:{componentactions:{label:""},theName:{label:"Component"},theType:{label:"Type"}}}},methods:{checkForm:function(){return this.errors=[],0==this.objt.theName.length&&this.errors.push("Name is required"),0==this.objt.theDescription.length&&this.errors.push("Description is required"),0==this.objt.theEnvironmentProperties.length&&this.errors.push("No environment properties have been defined"),!this.errors.length},setObject:function(){this.objt=this.object,this.commitLabel=this.label},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("trust-boundary-commit",this.objt)},onCancel:function(t){t.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"trustboundary"}})},deleteComponent:function(t){this.objt.theEnvironmentProperties[this.envPropIndex].theComponents.splice(t,1)},addEnvironment:function(t){t.preventDefault(),this.$refs.environmentDialog.show()},addComponent:function(t){t.preventDefault(),this.$refs.compDialog.show()},addTrustBoundaryEnvironmentProperty:function(t){this.addEnvironmentProperty({theEnvironmentName:t,thePrivilege:"",theComponents:[]})},addTrustBoundaryComponent:function(t){this.objt.theEnvironmentProperties[this.envPropIndex].theComponents.push(t)},privilegeSelected:function(t){this.objt.theEnvironmentProperties[this.envPropIndex].thePrivilege=t}}},m=u,d=n("2877"),h=Object(d["a"])(m,i,o,!1,null,null,null);e["default"]=h.exports}}]);
//# sourceMappingURL=chunk-b6144080.ec9d114b.js.map