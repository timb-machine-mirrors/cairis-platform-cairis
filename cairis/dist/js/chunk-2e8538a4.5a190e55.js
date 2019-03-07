(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e8538a4","chunk-f72b1efa","chunk-7c13071c","chunk-2d0f03c6"],{"0d49":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"objects"},[i("b-breadcrumb",{attrs:{items:e.breadCrumbItems}}),i("object-dependency-modal",{ref:"depDialog",attrs:{dependencies:e.objectDependencies},on:{"object-dependency-ok":e.deleteDependencies}}),""!=e.selectedTraceabilityObject?i("add-trace-modal",{ref:"traceDialog",attrs:{dimension:e.dimension,tobject:e.selectedTraceabilityObject,isFrom:e.isPostTraceability}}):e._e(),i("b-card",{attrs:{"no-body":""}},["requirement"==e.dimension?i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",[i("b-form-group",{attrs:{label:"Asset","label-for":"reqAsset","label-cols":5}},[i("dimension-select",{ref:"assetFilter",attrs:{id:"assetEnvironment",dimension:"asset"},on:{"dimension-select-change":e.assetSelected}})],1)],1),i("b-col",[i("b-form-group",{attrs:{label:"Environment","label-for":"reqEnvironment","label-cols":5}},[i("dimension-select",{ref:"envFilter",attrs:{id:"reqEnvironment",dimension:"environment"},on:{"dimension-select-change":e.environmentSelected}})],1)],1)],1)],1):e._e(),e.environmentSpecificValueType?i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",[i("b-form-group",{attrs:{label:"Environment","label-for":"reqEnvironment","label-cols":5}},[i("dimension-select",{ref:"envFilter",attrs:{id:"vtEnvironment",dimension:"environment"},on:{"dimension-select-change":e.vtEnvironmentSelected}})],1)],1)],1)],1):e._e(),i("b-table",{attrs:{"b-table":"",striped:"",small:"",hover:"",fields:e.fieldList,items:e.items},on:{"row-clicked":e.objectClicked},scopedSlots:e._u([{key:"HEAD_objectsactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"plus"},on:{click:function(t){return t.stopPropagation(),e.addObject(t)}}})]}},{key:"objectsactions",fn:function(t){return[i("font-awesome-icon",{style:{color:"red"},attrs:{icon:"minus"},on:{click:function(i){return i.stopPropagation(),e.deleteObject(t.index)}}})]}},{key:"pretaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"arrow-left"},on:{click:function(i){return i.stopPropagation(),e.addPreTraceabilityLink(t.index)}}})]}},{key:"generategoalaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"angle-down"},on:{click:function(i){return i.stopPropagation(),e.generateGoal(t.index)}}})]}},{key:"postaction",fn:function(t){return[i("font-awesome-icon",{style:{color:"green"},attrs:{icon:"arrow-right"},on:{click:function(i){return i.stopPropagation(),e.addPostTraceabilityLink(t.index)}}})]}}])})],1)],1)},n=[],a=i("f499"),o=i.n(a),r=i("bc3a"),c=i.n(r),m=i("61da"),l=i("1864"),d=i("9c06"),h=i("afbe"),u={asset:{objectsLabel:"Assets",componentFile:"Asset",updatePath:"/api/assets/name/",createPath:"/api/assets"},domainproperty:{objectsLabel:"Domain properties",componentFile:"DomainProperty",updatePath:"/api/domainproperties/name/",createPath:"/api/domainproperties"},goal:{objectsLabel:"Goals",componentFile:"Goal",updatePath:"/api/goals/name/",createPath:"/api/goals"},obstacle:{objectsLabel:"Obstacles",componentFile:"Obstacle",updatePath:"/api/obstacles/name/",createPath:"/api/obstacles"},role:{objectsLabel:"Roles",componentFile:"Role",updatePath:"/api/roles/name/",createPath:"/api/roles"},usecase:{objectsLabel:"Use cases",componentFile:"UseCase",updatePath:"/api/usecases/name/",createPath:"/api/usecases"}},p=u,b={props:{breadCrumbItems:Array,fieldList:Object,getUrl:String,delUrl:String,dimName:String},components:{DimensionSelect:l["default"],ObjectDependencyModal:d["default"],AddTraceModal:h["default"]},data:function(){return{dimension:this.dimName,items:[],theGetUrl:this.getUrl,objectDependencies:[],selectedObject:"",selectedIndex:-1,selectedTraceabilityObject:"",isPostTraceability:1,theEnvironmentName:"all",theObjectViewParameters:void 0}},watch:{getUrl:"reloadObjects"},computed:{environmentSpecificValueType:function(){return"asset_value"==this.dimension}},methods:{objectClicked:function(e){if("asset_value"==this.dimName||"asset_type"==this.dimName||"access_right"==this.dimName||"protocol"==this.dimName||"privilege"==this.dimName||"surface_type"==this.dimName||"vulnerability_type"==this.dimName||"severity"==this.dimName||"capability"==this.dimName||"motivation"==this.dimName||"threat_type"==this.dimName||"likelihood"==this.dimName||"threat_value"==this.dimName)this.$router.push({name:"valuetype",params:{objectName:"New value type",dimName:this.dimName,envName:this.theEnvironmentName}});else switch(this.dimension){case"requirement":this.$router.push({name:this.dimName,params:{objectName:e.theName,domain:this.$refs.assetFilter.selected.length>0?{type:"asset",name:this.$refs.assetFilter.selected}:{type:"environment",name:this.$refs.envFilter.selected}}});break;case"personacharacteristic":this.$router.push({name:this.dimName,params:{objectName:e.theCharacteristic}});break;case"kaosassociation":this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,goalName:e.theGoal,subGoalName:e.theSubGoal}});break;case"assetassociation":this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,headName:e.theHeadAsset,tailName:e.theTailAsset}});break;case"dependency":this.$router.push({name:this.dimName,params:{envName:e.theEnvironmentName,depName:e.theDepender,deeName:e.theDependee,dpyName:e.theDependency}});break;case"dataflow":this.$router.push({name:this.dimName,params:{objectName:e.theName,envName:e.theEnvironmentName}});break;case"asset":case"domainproperty":case"goal":case"obstacle":case"role":case"usecase":this.$router.push({name:"objectview",params:{dimension:this.dimension,objectName:e.theName,objectsLabel:this.theObjectViewParameters.objectsLabel,componentFile:this.theObjectViewParameters.componentFile,updatePath:this.theObjectViewParameters.updatePath,createPath:this.theObjectViewParameters.createPath}});break;default:this.$router.push({name:this.dimName,params:{objectName:e.theName}});break}},addObject:function(){if("asset_value"==this.dimName||"asset_type"==this.dimName||"access_right"==this.dimName||"protocol"==this.dimName||"privilege"==this.dimName||"surface_type"==this.dimName||"vulnerability_type"==this.dimName||"severity"==this.dimName||"capability"==this.dimName||"motivation"==this.dimName||"threat_type"==this.dimName||"likelihood"==this.dimName||"threat_value"==this.dimName)this.$router.push({name:"valuetype",params:{objectName:"New value type",dimName:this.dimName,envName:this.theEnvironmentName}});else switch(this.dimension){case"kaosassociation":this.$router.push({name:this.dimName,params:{envName:"To set",goalName:"To set",subGoalName:"To set"}});break;case"assetassociation":this.$router.push({name:this.dimName,params:{envName:"To set",headName:"To set",tailName:"To set"}});break;case"dependency":this.$router.push({name:this.dimName,params:{envName:"To set",depName:"To set",deeName:"To set",dpyName:"To set"}});break;case"dataflow":this.$router.push({name:this.dimName,params:{objectName:"New "+this.dimName,envName:"To set"}});break;case"asset":case"domainproperty":case"goal":case"obstacle":case"role":case"usecase":this.$router.push({name:"objectview",params:{dimension:this.dimension,objectName:"New "+this.dimName,objectsLabel:this.theObjectViewParameters.objectsLabel,componentFile:this.theObjectViewParameters.componentFile,updatePath:this.theObjectViewParameters.updatePath,createPath:this.theObjectViewParameters.createPath}});break;default:this.$router.push({name:this.dimName,params:{objectName:"New "+this.dimName,domain:{type:"asset",name:""}}});break}},deleteObject:function(e){"kaosassociation"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,goal:this.items[e].theGoal,subGoal:this.items[e].theSubGoal}:"assetassociation"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,headName:this.items[e].theHeadAsset,tailName:this.items[e].theTailAsset}:"dependency"==this.dimName?this.selectedObject={envName:this.items[e].theEnvironmentName,theDepender:this.items[e].theDepender,theDependee:this.items[e].theDependee,theDependency:this.items[e].theDependency}:"personacharacteristic"==this.dimName?this.selectedObject=this.items[e].theCharacteristic:this.selectedObject=this.items[e].theName,this.selectedIndex=e;var t=this;if("kaosassociation"!=this.dimension&&"assetassociation"!=this.dimension&&"dependency"!=this.dimension&&"dataflow"!=this.dimension&&"valuetype"!=this.dimension){var i=this.dimension;"personacharacteristic"==i&&(i="persona_characteristic");var s="/api/object_dependency/dimension/"+i+"/object/"+this.selectedObject;c.a.get(s,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(e){e.data.theDependencies.length>0?(t.objectDependencies=e.data.theDependencies,t.$refs.depDialog.show()):t.commitDelete()}).catch(function(e){m["a"].$emit("operation-failure",e)})}else this.commitDelete()},commitDelete:function(){var e=this,t=this.delUrl;switch(this.dimension){case"kaosassociation":t+=this.selectedObject.envName+"/goal/"+this.selectedObject.goal+"/subgoal/"+this.selectedObject.subGoal;break;case"assetassociation":t+=this.selectedObject.envName+"/head/"+this.selectedObject.headName+"/tail/"+this.selectedObject.tailName;break;case"dependency":t+=this.selectedObject.envName+"/depender/"+this.selectedObject.theDepender+"/dependee/"+this.selectedObject.theDependee+"/dependency/"+this.selectedObject.theDependency;break;case"dataflow":t+=this.selectedObject.objectName+"/environment/"+this.selectedObject.envName;break;case"asset_value":case"asset_type":case"access_right":case"protocol":case"privilege":case"surface_type":case"vulnerability_type":case"severity":case"capability":case"motivation":case"threat_type":case"likelihood":case"threat_value":t+=this.theEnvironmentName+"/name/"+this.selectedObject;break;default:t+=JSON.parse(o()(this.selectedObject));break}c.a.delete(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.items.splice(e.selectedIndex,1),m["a"].$emit("operation-success",t.data.message)}).catch(function(e){m["a"].$emit("operation-failure",e)})},deleteDependencies:function(){var e="/api/object_dependency/dimension/"+this.dimension+"/object/"+this.selectedObject,t=this;c.a.delete(e,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(){t.commitDelete()}).catch(function(e){m["a"].$emit("operation-failure",e)})},reloadObjects:function(){this.theGetUrl=this.getUrl,this.dimension=this.dimName,this.theObjectViewParameters=p[this.dimension],this.loadObjects(),this.updateDimension()},loadObjects:function(){var e=this;""!=this.theGetUrl&&c.a.get(this.theGetUrl,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.items=t.data}).catch(function(e){m["a"].$emit("operation-failure",e)})},assetSelected:function(e){null!=e&&(this.theGetUrl="/api/requirements/asset/"+e,this.$refs.envFilter.selected="",this.loadObjects())},environmentSelected:function(e){null!=e&&(this.theGetUrl="/api/requirements/environment/"+e,this.$refs.assetFilter.selected="",this.loadObjects())},vtEnvironmentSelected:function(e){null!=e&&(this.theEnvironmentName=e,this.theGetUrl="/api/value_types/type/"+this.dimension+"/environment/"+this.theEnvironmentName,this.loadObjects())},generateGoal:function(e){var t=this.$store.state.url+"/api/responses/name/"+this.items[e].theName+"/generate_goal";c.a.post(t,{session_id:this.$store.state.session,object:this.objt}).then(function(e){m["a"].$emit("operation-success",e.data.message)}).catch(function(e){m["a"].$emit("operation-failure",e)})},addPreTraceabilityLink:function(e){this.selectedTraceabilityObject="vulnerability"==this.dimension?this.items[e].theVulnerabilityName:this.items[e].theName,this.isPostTraceability=0,this.$refs.traceDialog.show()},addPostTraceabilityLink:function(e){this.selectedTraceabilityObject="vulnerability"==this.dimension?this.items[e].theVulnerabilityName:this.items[e].theName,this.isPostTraceability=1,this.$refs.traceDialog.show()},updateDimension:function(){"externaldocument"==this.dimName?this.dimension="external_document":"documentreference"==this.dimName?this.dimension="document_reference":"conceptreference"==this.dimName?this.dimension="concept_reference":"trustboundary"==this.dimName?this.dimension="trust_boundary":"securitypattern"==this.dimName&&(this.dimension="security_pattern")}},mounted:function(){this.theObjectViewParameters=p[this.dimension],this.loadObjects(),this.updateDimension()}},f=b,N=i("2877"),v=Object(N["a"])(f,s,n,!1,null,null,null);t["default"]=v.exports},"11e9":function(e,t,i){var s=i("52a7"),n=i("4630"),a=i("6821"),o=i("6a99"),r=i("69a8"),c=i("c69a"),m=Object.getOwnPropertyDescriptor;t.f=i("9e1e")?m:function(e,t){if(e=a(e),t=o(t,!0),c)try{return m(e,t)}catch(i){}if(r(e,t))return n(!s.f.call(e,t),e[t])}},1864:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-form-select",{ref:"dimensionSelect",attrs:{id:"dimensionSelect",disabled:e.is_disabled,size:e.display_size,options:e.filteredItems},on:{change:function(t){return e.onChange(t)}},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})},n=[],a=(i("6762"),i("2fdb"),i("cadf"),i("551c"),i("f751"),i("097d"),i("bc3a")),o=i.n(a),r=i("61da"),c={name:"dimension-select",props:{dimension:{type:String},dimensionUrl:{type:String,default:function(){return""}},existing:{type:Array,default:function(){return[]}},environment:{type:String,default:function(){return""}},includeall:{type:Boolean,default:function(){return!1}},initial:{type:String,default:function(){return""}},display_size:{type:String,default:function(){return"md"}},is_disabled:{type:Boolean,default:function(){return!1}}},data:function(){return{items:[],selected:this.initial}},computed:{filteredItems:function(){var e=this;return this.items.length>0?this.items.filter(function(t){if(!e.existing.includes(t))return t}):[]}},watch:{dimension:"updateSelector",dimensionUrl:"updateSelector",existing:"updateSelector",environment:"updateSelector",initial:"updateSelector"},methods:{onChange:function(e){this.$emit("dimension-select-change",e)},updateSelector:function(){var e=this;if((void 0!=this.dimension||""!=this.dimensionUrl)&&""!=this.$store.state.session){var t=this.dimensionUrl;0==this.dimensionUrl.length&&(t="/api/dimensions/table/"+this.dimension,""!=this.environment&&(t+="/environment/"+this.environment));var i=this;o.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){i.items=t.data,i.items=i.items.length>0?i.items.filter(function(e){if(!i.existing.includes(e))return e}):[],1==i.items.length&&i.$emit("dimension-select-change",i.items[0]),i.includeall&&("dfd_filter"==i.dimension?i.items.unshift("None"):"persona_characteristic"==i.dimension?i.items.unshift("All"):i.items.unshift("all")),e.selected=e.initial}).catch(function(e){r["a"].$emit("operation-failure","Error updating selector:"+e)})}}},mounted:function(){void 0==this.dimension&&""==this.dimensionUrl||this.updateSelector()}},m=c,l=i("2877"),d=Object(l["a"])(m,s,n,!1,null,null,null);t["default"]=d.exports},"2fdb":function(e,t,i){"use strict";var s=i("5ca1"),n=i("d2c8"),a="includes";s(s.P+s.F*i("5147")(a),"String",{includes:function(e){return!!~n(this,e,a).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},5147:function(e,t,i){var s=i("2b4c")("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(i){try{return t[s]=!1,!"/./"[e](t)}catch(n){}}return!0}},"584a":function(e,t){var i=e.exports={version:"2.6.1"};"number"==typeof __e&&(__e=i)},"5dbc":function(e,t,i){var s=i("d3f4"),n=i("8b97").set;e.exports=function(e,t,i){var a,o=t.constructor;return o!==i&&"function"==typeof o&&(a=o.prototype)!==i.prototype&&s(a)&&n&&n(e,a),e}},6762:function(e,t,i){"use strict";var s=i("5ca1"),n=i("c366")(!0);s(s.P,"Array",{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i("9c6c")("includes")},"7f7f":function(e,t,i){var s=i("86cc").f,n=Function.prototype,a=/^\s*function ([^ (]*)/,o="name";o in n||i("9e1e")&&s(n,o,{configurable:!0,get:function(){try{return(""+this).match(a)[1]}catch(e){return""}}})},"8b97":function(e,t,i){var s=i("d3f4"),n=i("cb7c"),a=function(e,t){if(n(e),!s(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,s){try{s=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),s(e,[]),t=!(e instanceof Array)}catch(n){t=!0}return function(e,i){return a(e,i),t?e.__proto__=i:s(e,i),e}}({},!1):void 0),check:a}},9093:function(e,t,i){var s=i("ce10"),n=i("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return s(e,n)}},"9c06":function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"objectDependencyDialog",attrs:{title:"Confirm object deletion"},on:{ok:e.onOk}},[i("b-card",[i("p",[i("b",[e._v("Removing this object will also remove the following objects.")])]),i("b-table",{attrs:{striped:"",bordered:"",small:"",items:e.dependencies,fields:e.odTableFields}}),i("p",[i("b",[e._v("Do you want to continue?")])])],1)],1)},n=[],a={name:"object-dependency-modal",props:{dependencies:Array},data:function(){return{odTableFields:{theDimensionName:{label:"Dimension"},theObjectName:{label:"Name"}}}},methods:{show:function(){this.$refs.objectDependencyDialog.show()},onOk:function(){this.$emit("object-dependency-ok"),this.$refs.objectDependencyDialog.hide()}}},o=a,r=i("2877"),c=Object(r["a"])(o,s,n,!1,null,null,null);t["default"]=c.exports},a21f:function(e,t,i){var s=i("584a"),n=s.JSON||(s.JSON={stringify:JSON.stringify});e.exports=function(e){return n.stringify.apply(n,arguments)}},aa77:function(e,t,i){var s=i("5ca1"),n=i("be13"),a=i("79e5"),o=i("fdef"),r="["+o+"]",c="​",m=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),d=function(e,t,i){var n={},r=a(function(){return!!o[e]()||c[e]()!=c}),m=n[e]=r?t(h):o[e];i&&(n[i]=m),s(s.P+s.F*r,"String",n)},h=d.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(m,"")),2&t&&(e=e.replace(l,"")),e};e.exports=d},aae3:function(e,t,i){var s=i("d3f4"),n=i("2d95"),a=i("2b4c")("match");e.exports=function(e){var t;return s(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},afbe:function(e,t,i){"use strict";i.r(t);var s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{ref:"traceDialog",attrs:{title:this.dialogTitle},on:{ok:e.onOk}},[e.errors.length?i("p",[i("b",[e._v("Please correct the following error(s):")]),i("ul",e._l(e.errors,function(t){return i("li",{key:t},[e._v(e._s(t))])}),0)]):e._e(),i("b-card",[i("b-container",{attrs:{fluid:""}},[i("b-row",[i("b-col",{attrs:{md:"6"}},[e.theDimensions.length>0?i("b-table",{attrs:{striped:"",selectable:"","select-mode":"single",selectedVariant:"primary",small:"",bordered:"",fields:e.dimTableFields,items:e.dimensions},on:{"row-clicked":e.dimensionClicked}}):e._e()],1),i("b-col",{attrs:{md:"6"}},[e.theObjects.length>0?i("b-table",{attrs:{striped:"",selectable:"","select-mode":"single",selectedVariant:"primary",small:"",bordered:"",fields:e.objtTableFields,items:e.objects},on:{"row-clicked":e.objectClicked}}):e._e()],1)],1)],1)],1)],1)},n=[],a=(i("7f7f"),i("c5f6"),i("bc3a")),o=i.n(a),r=i("61da"),c={name:"add-trace-modal",props:{dimension:String,tobject:String,isFrom:Number},watch:{tobject:"updateDimensionTable"},data:function(){return{errors:[],theDimensions:[],theObjects:[],theTargetDimension:"",theTargetObject:"",dimTableFields:{name:{label:"Dimension",sortable:!0}},objtTableFields:{name:{label:"Object",sortable:!0}}}},computed:{dialogTitle:function(){return"Add "+(this.isFrom?"Contribution":"Source")+" Traceability Link"},dimensions:function(){return this.theDimensions.length>0?this.theDimensions.map(function(e){return{name:e}}):[]},objects:function(){return this.theObjects.length>0?this.theObjects.map(function(e){return{name:e}}):[]}},methods:{checkForm:function(){return this.errors=[],0==this.theTargetDimension.length&&this.errors.push("Dimension is required"),0==this.theTargetObject.length&&this.errors.push("Object is required"),!this.errors.length},show:function(){this.$refs.traceDialog.show()},onOk:function(e){this.checkForm()?this.addTraceLink():e.preventDefault()},updateDimensionTable:function(){var e=this,t="/api/traces/dimensions/"+this.dimension+"/is_from/"+this.isFrom;o.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.theDimensions=t.data}).catch(function(e){r["a"].$emit("operation-failure",e)})},updateObjectTable:function(){var e=this,t="/api/dimensions/table/"+this.theTargetDimension;o.a.get(t,{baseURL:this.$store.state.url,params:{session_id:this.$store.state.session}}).then(function(t){e.theObjects=t.data}).catch(function(e){r["a"].$emit("operation-failure",e)})},addTraceLink:function(){var e=this,t=1==this.isFrom?{theFromObject:this.dimension,theFromName:this.tobject,theToObject:this.theTargetDimension,theToName:this.theTargetObject}:{theFromObject:this.theTargetDimension,theFromName:this.theTargetObject,theToObject:this.dimension,theToName:this.tobject};o.a.post(this.$store.state.url+"/api/traces",{session_id:this.$store.state.session,object:t}).then(function(t){r["a"].$emit("operation-success",t.data.message),e.$refs.traceDialog.hide()}).catch(function(e){r["a"].$emit("operation-failure",e)})},dimensionClicked:function(e){this.theTargetDimension=e.name,this.updateObjectTable()},objectClicked:function(e){this.theTargetObject=e.name}},mounted:function(){this.updateDimensionTable()}},m=c,l=i("2877"),d=Object(l["a"])(m,s,n,!1,null,null,null);t["default"]=d.exports},c5f6:function(e,t,i){"use strict";var s=i("7726"),n=i("69a8"),a=i("2d95"),o=i("5dbc"),r=i("6a99"),c=i("79e5"),m=i("9093").f,l=i("11e9").f,d=i("86cc").f,h=i("aa77").trim,u="Number",p=s[u],b=p,f=p.prototype,N=a(i("2aeb")(f))==u,v="trim"in String.prototype,g=function(e){var t=r(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():h(t,3);var i,s,n,a=t.charCodeAt(0);if(43===a||45===a){if(i=t.charCodeAt(2),88===i||120===i)return NaN}else if(48===a){switch(t.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+t}for(var o,c=t.slice(2),m=0,l=c.length;m<l;m++)if(o=c.charCodeAt(m),o<48||o>n)return NaN;return parseInt(c,s)}}return+t};if(!p(" 0o1")||!p("0b1")||p("+0x1")){p=function(e){var t=arguments.length<1?0:e,i=this;return i instanceof p&&(N?c(function(){f.valueOf.call(i)}):a(i)!=u)?o(new b(g(t)),i,p):g(t)};for(var j,y=i("9e1e")?m(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),O=0;y.length>O;O++)n(b,j=y[O])&&!n(p,j)&&d(p,j,l(b,j));p.prototype=f,f.constructor=p,i("2aba")(s,u,p)}},d2c8:function(e,t,i){var s=i("aae3"),n=i("be13");e.exports=function(e,t,i){if(s(t))throw TypeError("String#"+i+" doesn't accept regex!");return String(n(e))}},f499:function(e,t,i){e.exports=i("a21f")},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-2e8538a4.5a190e55.js.map