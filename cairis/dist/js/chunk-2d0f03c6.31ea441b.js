(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f03c6"],{"9c06":function(e,n,o){"use strict";o.r(n);var t=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("b-modal",{ref:"objectDependencyDialog",attrs:{title:"Confirm object deletion"},on:{ok:e.onOk}},[o("b-card",[o("p",[o("b",[e._v("Removing this object will also remove the following objects.")])]),o("b-table",{attrs:{striped:"",bordered:"",small:"",items:e.dependencies,fields:e.odTableFields}}),o("p",[o("b",[e._v("Do you want to continue?")])])],1)],1)},i=[],l={name:"object-dependency-modal",props:{dependencies:Array},data:function(){return{odTableFields:{theDimensionName:{label:"Dimension"},theObjectName:{label:"Name"}}}},methods:{show:function(){this.$refs.objectDependencyDialog.show()},onOk:function(){this.$emit("object-dependency-ok"),this.$refs.objectDependencyDialog.hide()}}},c=l,s=o("2877"),a=Object(s["a"])(c,t,i,!1,null,null,null);n["default"]=a.exports}}]);
//# sourceMappingURL=chunk-2d0f03c6.31ea441b.js.map