(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"26d3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"settings"}},[s("b-container",{staticClass:"mb-3"},[s("b-row",[s("b-col",{staticClass:"p-0",attrs:{md:"6",sm:"12"}},[s("b-form-group",{staticClass:"w-100",attrs:{label:"自訂你的鈴聲時間"}},[s("b-form-radio-group",{attrs:{options:t.options,"value-field":"opItem","text-field":"name"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1)],1),s("b-col",{staticClass:"p-0",attrs:{md:"6",sm:"12"}},[s("div",{staticClass:"input-group w-75 mx-auto "},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.Newthing,expression:"Newthing"}],staticClass:"w-75 ml-3",attrs:{variant:"secondary"},domProps:{value:t.Newthing},on:{input:function(e){e.target.composing||(t.Newthing=e.target.value)}}}),s("b-btn",{attrs:{squared:"",variant:"outline-dark"},on:{click:t.savesaysomthing}},[s("font-awesome-icon",{attrs:{icon:["fas","save"]}})],1)],1)])],1)],1),t._v(" "+t._s(t.radioChange())+" "),s("b-container",{staticClass:"p-0"},[s("b-table",{attrs:{striped:"",hover:"",items:t.items,fields:t.fields},on:{"row-clicked":t.selectAlarm},scopedSlots:t._u([{key:"cell(preview)",fn:function(t){return[s("audio",{staticClass:"w-100",attrs:{controls:"",src:"./alarms/"+t.item.file}})]}},{key:"cell(select)",fn:function(e){return[e.item.file===t.alarm?s("font-awesome-icon",{attrs:{icon:["fas","check"]}}):t._e()]}}])})],1)],1)},n=[],i=(s("498a"),{data:function(){return{selected:0,Newthing:"",options:[{opItem:2,name:"2s"},{opItem:3,name:"3s"},{opItem:4,name:"4s"},{opItem:5,name:"5s"}],items:[{name:"鬧鐘1",file:"alarm1.mp3"},{name:"鬧鐘2",file:"alarm2.mp3"},{name:"鬧鐘3",file:"alarm3.mp3"},{name:"鬧鐘4",file:""}],fields:[{key:"name",label:"名稱"},{key:"preview",label:"預覽"},{key:"select",label:"選擇"}]}},computed:{alarm:function(){return this.$store.getters.alarm},alarmSec:function(){return this.$store.getters.alarmSec},saysomething:function(){return this.$store.getters.saysomething}},methods:{selectAlarm:function(t){this.$store.commit("selectAlarm",t.file)},radioChange:function(){0!==this.selected&&this.alarmSec!==this.selected&&this.$store.commit("radioChange",this.selected)},savesaysomthing:function(t){""!==this.Newthing&&this.saysomething!==this.Newthing&&this.$store.commit("savesaysomthing",this.Newthing.trim())}},mounted:function(){this.selected=this.alarmSec,this.Newthing=this.saysomething}}),r=i,o=s("2877"),l=Object(o["a"])(r,a,n,!1,null,null,null);e["default"]=l.exports},"498a":function(t,e,s){"use strict";var a=s("23e7"),n=s("58a8").trim,i=s("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return n(this)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),n=s("5899"),i="["+n+"]",r=RegExp("^"+i+i+"*"),o=RegExp(i+i+"*$"),l=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(r,"")),2&t&&(s=s.replace(o,"")),s}};t.exports={start:l(1),end:l(2),trim:l(3)}},c8d2:function(t,e,s){var a=s("d039"),n=s("5899"),i="​᠎";t.exports=function(t){return a((function(){return!!n[t]()||i[t]()!=i||n[t].name!==t}))}}}]);
//# sourceMappingURL=settings.95d00d21.js.map