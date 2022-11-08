"use strict";(self["webpackChunkgiligili"]=self["webpackChunkgiligili"]||[]).push([[857],{8857:function(e,o,t){t.r(o),t.d(o,{default:function(){return f}});var r=function(){var e=this,o=e._self._c;return o("div",[o("h1",{staticStyle:{"text-align":"center"}},[e._v("快乐因分享而更快乐")]),o("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px","status-icon":"",rules:e.rules,"hide-required-asterisk":""}},[o("el-form-item",{attrs:{label:"标题",prop:"title"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:e.form.title,callback:function(o){e.$set(e.form,"title",o)},expression:"form.title"}})],1),o("el-form-item",{attrs:{label:"简介",prop:"info"}},[o("el-input",{attrs:{type:"textarea",autocomplete:"off"},model:{value:e.form.info,callback:function(o){e.$set(e.form,"info",o)},expression:"form.info"}})],1),o("el-form-item",{attrs:{label:"封面"}},[o("el-upload",{attrs:{action:"","http-request":e.uploadCover,"before-upload":e.beforeUploadCover,"on-exceed":e.onExceed,"on-remove":e.onRemoveCover,"before-remove":e.beforeRemove,limit:1,accept:".jpg,.jpeg,.png"}},[o("el-button",{attrs:{size:"mini"}},[e._v("选择封面")])],1)],1),o("el-form-item",{attrs:{label:"视频"}},[o("el-upload",{attrs:{action:"","http-request":e.uploadVideo,"before-upload":e.beforeUploadVideo,"on-exceed":e.onExceed,"on-remove":e.onRemoveVideo,"before-remove":e.beforeRemove,limit:1,accept:".mp4"}},[o("el-button",{attrs:{size:"mini"}},[e._v("选择视频")])],1)],1),o("el-form-item",[e.showProgress?o("span",{staticStyle:{color:"#606266"}},[e._v("上传中，过程可能较慢，请勿关闭页面或操作被上传的文件; 在token刷新时可能会造成进度条不动，此时属于正常现象")]):e._e(),e.showProgress?o("el-progress",{attrs:{percentage:e.progressPercentage}}):e._e(),o("el-button",{attrs:{id:"button",type:"primary"},on:{click:e.postvideo}},[e._v("投稿"),o("i",{staticClass:"el-icon-upload el-icon--right"})])],1)],1)],1)},s=[],i=(t(7658),t(2675)),l={data(){return{form:{title:"",info:"",cover:"",video:""},progressPercentage:0,showProgress:!1,rules:{title:[{required:!0,message:"请输入标题",trigger:"blur"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}],info:[{max:255,message:"长度需小于等于255个字符",trigger:"blur"}]}}},methods:{postvideo(){this.$refs["form"].validate((e=>{if(e){if(""===this.form.cover)return void this.$notify.error({title:"投稿失败",message:"未上传封面",showClose:!1});if(""===this.form.video)return void this.$notify.error({title:"投稿失败",message:"未上传视频",showClose:!1});let e=new FormData;e.append("title",this.form.title),e.append("info",this.form.info),e.append("cover",this.form.cover),e.append("video",this.form.video);let o=document.getElementById("button");o.disabled=!0;let t=o.innerHTML;o.innerHTML="投稿中...",this.$message("上传中，过程可能较慢，请勿关闭页面或操作被上传的文件");let r=this;r.showProgress=!0,i.At(e,(function(e){r.progressPercentage=parseInt(e.loaded/e.total*100)})).then((e=>{0===e.code?(this.$notify({title:"投稿成功",message:`您投稿的视频id为${e.data.id}`,type:"success",showClose:!1}),this.$router.push("/video/"+e.data.id)):(this.$notify.error({title:"投稿失败",message:e.msg,showClose:!1}),o.disabled=!1,o.innerHTML=t,this.showProgress=!1,this.progressPercentage=0)})).catch((e=>{this.$notify.error({title:"投稿失败",message:e,showClose:!1}),o.disabled=!1,o.innerHTML=t,this.showProgress=!1,this.progressPercentage=0}))}else this.$notify.error({title:"投稿失败",message:"填入信息有误",showClose:!1})}))},onExceed(){this.$message.warning("文件只能为1个")},uploadCover(e){this.form.cover=e.file},beforeUploadCover(e){return!(e.size/1024/1024>2)||(this.$message.error("封面大小不能超过2MB"),!1)},onRemoveCover(e){e.size/1024/1024<=2&&(this.form.cover="")},uploadVideo(e){this.form.video=e.file},beforeUploadVideo(e){return!(e.size/1024/1024>1024)||(this.$message.error("视频大小不能超过1GB"),!1)},onRemoveVideo(e){e.size/1024/1024<=100&&(this.form.video="")},beforeRemove(){return!this.showProgress||(this.$message({message:"上传时禁止移除文件",type:"warning"}),!1)}}},a=l,n=t(1001),m=(0,n.Z)(a,r,s,!1,null,null,null),f=m.exports}}]);
//# sourceMappingURL=857.8255a6e8.js.map