(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-94f4d7cc","chunk-61f8c9da","chunk-41bf07d3","chunk-f72b1efa","chunk-53e7c59c"],{1864:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:t.is_disabled,size:t.display_size,options:t.filteredItems},on:{change:function(e){return t.onChange(e)}},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})},o=[],s=(n("6762"),n("2fdb"),n("cadf"),n("551c"),n("f751"),n("097d"),n("bc3a")),a=n.n(s),r=n("61da"),l={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var t=this;return this.items.length>0?this.items.filter(function(e){if(!t.existing.includes(e))return e}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(t){this.$emit("dimension-select-change",t)},updateSelector:function(){var t=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var e=this.dimensionUrl;0==this.dimensionUrl.length&&(e="/api/dimensions/table/"+this.dimension,""!=this.environment&&(e+="/environment/"+this.environment));var n=this;a.a.get(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){n.items=e.data,n.items=n.items.length>0?n.items.filter(function(t){if(!n.existing.includes(t))return t}):[],1==n.items.length&&n.$emit("dimension-select-change",n.items[0]),n.includeall&&("dfd_filter"==n.dimension?n.items.unshift("None"):"persona_characteristic"==n.dimension?n.items.unshift("All"):n.items.unshift("all")),t.selected=t.initial}).catch(function(t){r["a"].$emit("operation-failure","Error updating selector:"+t)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},c=l,m=n("2877"),d=Object(m["a"])(c,i,o,!1,null,null,null);e["default"]=d.exports},"1e3b":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{ref:"dimensionDialog",attrs:{title:this.dialogTitle},on:{ok:t.onOk}},[n("b-card",[""==t.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e(),""!=t.environment?n("dimension-select",{attrs:{dimensionUrl:this.dimensionUrl,environment:this.environment,dimension:this.dimension,existing:this.existing,initial:this.initial},on:{"dimension-select-change":t.dimensionSelected}}):t._e()],1)],1)},o=[],s=n("1864"),a={name:"dimension-modal",props:{dimension:String,existing:{type:Array,default:function(){return[]}},initial:{type:String,default:function(){return""}},environment:{type:String,default:function(){return""}},dimensionUrl:{type:String,default:function(){return""}},label:{type:String,default:function(){return""}}},data:function(){return{selected:""}},components:{DimensionSelect:s["default"]},computed:{dialogTitle:function(){return"Select "+(this.label.length>0?this.label:void 0!=this.dimension?this.dimension:"Object")}},methods:{show:function(){this.$refs.dimensionDialog.show()},dimensionSelected:function(t){this.selected=t},onOk:function(t){0==this.selected.length?(t.preventDefault(),alert("Please select a value")):(this.$emit("dimension-modal-update",this.selected),this.$refs.dimensionDialog.hide())}}},r=a,l=n("2877"),c=Object(l["a"])(r,i,o,!1,null,null,null);e["default"]=c.exports},"2fdb":function(t,e,n){"use strict";var i=n("5ca1"),o=n("d2c8"),s="includes";i(i.P+i.F*n("5147")(s),"String",{includes:function(t){return!!~o(this,t,s).indexOf(t,arguments.length>1?arguments[1]:void 0)}})},"3f53":function(t,e,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");e["a"]={methods:{commitObject:function(t,e,n,i,a){var r=this;"undefined"==typeof i&&(i={post:{},put:{}}),"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=a?r.$router.push({name:n,params:{dimension:a}}):r.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt},{params:i["post"]}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=a?r.$router.push({name:n,params:{dimension:a}}):r.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)})}},postImage:function(t){var e="/api/upload/image?session_id="+this.$store.state.session;o.a.post(e,t).then(function(t){s["a"].$emit("operation-success",t.data.message)}).catch(function(t){s["a"].$emit("operation-failure",t)})}}},5147:function(t,e,n){var i=n("2b4c")("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(o){}}return!0}},6762:function(t,e,n){"use strict";var i=n("5ca1"),o=n("c366")(!0);i(i.P,"Array",{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"6a75":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dataflowview"},[n("b-breadcrumb",{attrs:{items:t.bcItems}}),n("data-flow",{attrs:{object:this.objt,label:this.commitLabel},on:{"data-flow-commit":t.commitDataFlow}})],1)},o=[],s=n("bc3a"),a=n.n(s),r=n("3f53"),l=n("b8ff"),c=n("4360"),m=n("61da"),d={props:{objectName:String,envName:String},mixins:[r["a"]],computed:{bcItems:function(){return[{text:"Home",to:{name:"home"}},{text:"Data Flows",to:{name:"objectsview",params:{dimension:"dataflow"}}},{text:this.objt.theEnvironmentName+" / "+this.objt.theName,to:{name:"dataflow"}}]}},components:{DataFlow:l["default"]},data:function(){return{objt:{theName:"",theEnvironmentName:"",theFromType:"entity",theFromName:"",theToType:"process",theToName:"",theAssets:[]},commitLabel:"Create"}},beforeRouteEnter:function(t,e,n){if("New dataflow"==t.params.objectName)n();else{var i="/api/dataflows/name/"+t.params.objectName+"/environment/"+t.params.envName;a.a.get(i,{baseURL:c["a"].state.url,params:{session_id:c["a"].state.session}}).then(function(t){n(function(e){e.commitLabel="Update",e.objt=t.data})}).catch(function(t){m["a"].$emit("operation-failure",t)})}},methods:{commitDataFlow:function(t){this.objt=t;var e=this.$store.state.url+"/api/dataflows/name/"+this.objectName+"/environment/"+this.envName+"?session_id="+this.$store.state.session,n=this.$store.state.url+"/api/dataflows";this.commitObject(e,n,"objectsview",void 0,"dataflow")}}},u=d,h=n("2877"),f=Object(h["a"])(u,i,o,!1,null,null,null);e["default"]=f.exports},"94cc":function(t,e,n){"use strict";var i=n("bc3a"),o=n.n(i),s=n("61da");e["a"]={methods:{commitObject:function(t,e,n,i){var a=this;"Update"==this.commitLabel?o.a.put(t,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=i?a.$router.push({name:n,params:{dimension:i}}):a.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)}):o.a.post(e,{session_id:this.$store.state.session,object:this.objt}).then(function(t){s["a"].$emit("operation-success",t.data.message),void 0!=i?a.$router.push({name:n,params:{dimension:i}}):a.$router.push({name:n})}).catch(function(t){s["a"].$emit("operation-failure",t)})}}}},aae3:function(t,e,n){var i=n("d3f4"),o=n("2d95"),s=n("2b4c")("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[s])?!!e:"RegExp"==o(t))}},b8ff:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dataflow"},[""!=t.objt.theEnvironmentName?n("dimension-modal",{ref:"assetDialog",attrs:{dimension:"asset",environment:t.objt.theEnvironmentName,existing:t.objt.theAssets},on:{"dimension-modal-update":t.addDataFlowAsset}}):t._e(),t.errors.length?n("p",[n("b",[t._v("Please correct the following error(s):")]),n("ul",t._l(t.errors,function(e){return n("li",{key:e},[t._v(t._s(e))])}),0)]):t._e(),n("b-form",[n("b-container",{attrs:{fluid:""}},[n("b-card",{attrs:{"bg-variant":"light",no:"",body:""}},[n("b-row",[n("b-col",{attrs:{md:"12"}},[void 0!=t.objt?n("b-container",{attrs:{fluid:""}},[n("b-row",[n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Dataflow","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theDataflowInput"}},[n("b-form-input",{attrs:{id:"theDataFlowInput",type:"text",required:""},model:{value:t.objt.theName,callback:function(e){t.$set(t.objt,"theName",e)},expression:"objt.theName"}})],1)],1),n("b-col",{attrs:{md:"6"}},[n("b-form-group",{attrs:{label:"Environment","label-class":"font-weight-bold text-md-left","label-cols":"3","label-for":"theEnvironmentSelect"}},[n("dimension-select",{attrs:{id:"theEnvironmentSelect",dimension:"environment",initial:t.objt.theEnvironmentName},on:{"dimension-select-change":t.environmentSelected}})],1)],1)],1),n("b-row",[n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"From","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theFromRadio"}},[n("b-form-radio-group",{model:{value:t.theFromType,callback:function(e){t.theFromType=e},expression:"theFromType"}},[n("b-form-radio",{attrs:{value:"entity"}},[t._v("Entity")]),n("b-form-radio",{attrs:{value:"datastore"}},[t._v("Datastore")]),n("b-form-radio",{attrs:{value:"process"}},[t._v("Process")])],1)],1)],1),n("b-col",{attrs:{md:"8"}},[n("dimension-select",{ref:"theFromSelect",attrs:{id:"theFromSelect",environment:t.objt.theEnvironmentName,dimension:t.objt.theFromType,initial:t.objt.theFromName},on:{"dimension-select-change":t.fromNameSelected}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"4"}},[n("b-form-group",{attrs:{label:"To","label-class":"font-weight-bold text-md-left","label-cols":"2","label-for":"theToRadio"}},[n("b-form-radio-group",{staticClass:"mb-3",attrs:{id:"theToRadio",options:t.toTypeOptions,required:"",name:"theToRadio"},model:{value:t.objt.theToType,callback:function(e){t.$set(t.objt,"theToType",e)},expression:"objt.theToType"}})],1)],1),n("b-col",{attrs:{md:"8"}},[n("dimension-select",{ref:"theToSelect",attrs:{id:"theToSelect",environment:t.objt.theEnvironmentName,dimension:t.objt.theToType,initial:t.objt.theToName},on:{"dimension-select-change":t.toNameSelected}})],1)],1),n("b-row",[n("b-col",{attrs:{md:"12"}},[n("b-table",{attrs:{striped:"",bordered:"",small:"",fields:t.assetTableFields,items:t.dataFlowAssets},scopedSlots:t._u([{key:"HEAD_assetactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(e){return e.stopPropagation(),t.addAsset(e)}}})]}},{key:"assetactions",fn:function(e){return[n("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(n){return n.stopPropagation(),t.deleteAsset(e.index)}}})]}}],null,!1,4070375440)})],1)],1)],1):t._e()],1)],1)],1)],1),n("b-container",{attrs:{fluid:""}},[n("b-form-row",[n("b-col",{attrs:{md:"4","offset-md":"5"}},[n("b-button",{attrs:{type:"submit",variant:"primary"},on:{click:t.onCommit}},[t._v(t._s(t.commitLabel))]),n("b-button",{attrs:{type:"submit",variant:"secondary"},on:{click:t.onCancel}},[t._v("Cancel")])],1)],1)],1)],1)],1)},o=[],s=n("94cc"),a=n("1e3b"),r=n("1864"),l={name:"data-flow",props:{object:Object,label:String,isUpdating:Boolean},watch:{object:"setObject",theFromType:"setToType"},mixins:[s["a"]],components:{DimensionModal:a["default"],DimensionSelect:r["default"]},computed:{dataFlowAssets:function(){return this.objt.theAssets.length>0?this.objt.theAssets.map(function(t){return{name:t}}):[]}},data:function(){return{errors:[],objt:this.object,commitLabel:"Create",theFromType:"entity",toTypeOptions:[{text:"Process",value:"process"}],assetTableFields:{assetactions:{label:""},name:{label:"Asset"}}}},methods:{setObject:function(){this.objt=this.object,this.theFromType=this.objt.theFromType,this.commitLabel=this.label},onCancel:function(t){t.preventDefault(),this.$router.push({name:"objectsview",params:{dimension:"dataflow"}})},checkForm:function(){return this.errors=[],0==this.objt.theEnvironmentName.length&&this.errors.push("Environment is required"),0==this.objt.theName.length&&this.errors.push("Data flow name is required"),0==this.objt.theFromType.length&&this.errors.push("From type is required"),0==this.objt.theFromName.length&&this.errors.push("From name is required"),0==this.objt.theToType.length&&this.errors.push("To type is required"),0==this.objt.theToName.length&&this.errors.push("To name is required"),0==this.objt.theAssets.length&&this.errors.push("At least one asset is required"),!this.errors.length},setToType:function(){this.objt.theFromType=this.theFromType,"entity"==this.theFromType?this.toTypeOptions=[{text:"Process",value:"process"}]:"process"==this.theFromType?this.toTypeOptions=[{text:"Entity",value:"entity"},{text:"Process",value:"process"},{text:"Datastore",value:"datastore"}]:"datastore"==this.theFromType&&(this.toTypeOptions=[{text:"Process",value:"process"}])},environmentSelected:function(t){void 0!=t&&(this.objt.theEnvironmentName=t)},goalSelected:function(t){void 0!=t&&(this.objt.theGoal=t)},fromNameSelected:function(t){void 0!=t&&(this.objt.theFromName=t)},toNameSelected:function(t){void 0!=t&&(this.objt.theToName=t)},addAsset:function(t){t.preventDefault(),this.$refs.assetDialog.show()},deleteAsset:function(t){this.objt.theAssets.splice(t,1)},addDataFlowAsset:function(t){this.objt.theAssets.push(t)},onCommit:function(t){t.preventDefault(),this.checkForm()&&this.$emit("data-flow-commit",this.objt)}}},c=l,m=n("2877"),d=Object(m["a"])(c,i,o,!1,null,null,null);e["default"]=d.exports},d2c8:function(t,e,n){var i=n("aae3"),o=n("be13");t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(t))}}}]);
//# sourceMappingURL=chunk-94f4d7cc.5ac22988.js.map