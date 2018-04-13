/** layui-v2.2.4 MIT License By http://www.layui.com */
 ;var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};layui.define("layer",function(e){"use strict";var t=layui.$,i=layui.layer,o=layui.hint(),n=layui.device(),a={config:{},set:function(e){return this.config=t.extend({},this.config,e),this},on:function(e,t){return layui.onevent.call(this,l,e,t)}},l="upload",r="layui-upload-iframe",u="layui-upload-choose",c=function(e){this.config=t.extend({},this.config,a.config,e),this.render()};c.prototype.config={accept:"images",exts:"",auto:!0,bindAction:"",url:"",field:"file",method:"post",data:{},drag:!0,size:0,number:0,multiple:!1},c.prototype.render=function(){var e=this.config;e.elem=t(e.elem),e.bindAction=t(e.bindAction),this.file(),this.events()},c.prototype.file=function(){var e=this.config,i=this.elemFile=t(['<input class="layui-upload-file" type="file" name="'+e.field+'"',e.multiple?" multiple":"",">"].join("")),o=e.elem.next();(o.hasClass("layui-upload-file")||o.hasClass("layui-upload-form"))&&o.remove(),n.ie&&n.ie<10&&e.elem.wrap('<div class="layui-upload-wrap"></div>'),this.isFile()?(this.elemFile=e.elem,e.field=e.elem[0].name):e.elem.after(i),n.ie&&n.ie<10&&this.initIE()},c.prototype.initIE=function(){var e=this.config,i=t('<iframe id="'+r+'" class="'+r+'" name="'+r+'" frameborder="0"></iframe>'),o=t(['<form target="'+r+'" class="layui-form layui-upload-form" method="'+e.method,'" key="set-mine" enctype="multipart/form-data" action="'+e.url+'">',"</form>"].join(""));t("#"+r)[0]||t("body").append(i),e.elem.next().hasClass(r)||(this.elemFile.wrap(o),e.elem.next("."+r).append(function(){var t=[];return layui.each(e.data,function(e,i){t.push('<input type="hidden" name="'+e+'" value="'+i+'">')}),t.join("")}()))},c.prototype.msg=function(e){return i.msg(e,{icon:2,shift:6})},c.prototype.isFile=function(){var e=this.config.elem[0];if(e)return"input"===e.tagName.toLocaleLowerCase()&&"file"===e.type},c.prototype.preview=function(e){window.FileReader&&layui.each(this.chooseFiles,function(t,i){var o=new FileReader;o.readAsDataURL(i),o.onload=function(){e&&e(t,i,this.result)}})},c.prototype.upload=function(e,i){var o=this,a=o.config,l=o.elemFile[0],f=function(){var i=0,n=0,r=e||o.files||o.chooseFiles||l.files,u=function(){a.multiple&&i+n===o.fileLength&&"function"==typeof a.allDone&&a.allDone({total:o.fileLength,successful:i,aborted:n})};layui.each(r,function(e,l){var r=new FormData;r.append(a.field,l),layui.each(a.data,function(e,t){r.append(e,t)}),t.ajax({url:a.url,type:a.method,data:r,contentType:!1,processData:!1,dataType:"json",success:function(t){i++,s(e,t),u()},error:function(){n++,o.msg("请求上传接口出现异常"),p(e),u()}})})},s=function(e,t){if(o.elemFile.next("."+u).remove(),l.value="","object"!==(void 0===t?"undefined":_typeof(t)))try{t=JSON.parse(t)}catch(i){return t={},o.msg("请对上传接口返回有效JSON")}"function"==typeof a.done&&a.done(t,e||0,function(e){o.upload(e)})},p=function(e){a.auto&&(l.value=""),"function"==typeof a.error&&a.error(e||0,function(e){o.upload(e)})},d=a.exts,m=void 0,h=function(){var t=[];return layui.each(e||o.chooseFiles,function(e,i){t.push(i.name)}),t}(),v={preview:function(e){o.preview(e)},upload:function(e,t){var i={};i[e]=t,o.upload(i)},pushFile:function(){return o.files=o.files||{},layui.each(o.chooseFiles,function(e,t){o.files[e]=t}),o.files}};if(0!==(h=0===h.length?l.value.match(/[^/\\]+\..+/g)||[]||"":h).length){switch(a.accept){case"file":if(d&&!RegExp("\\w\\.("+d+")$","i").test(escape(h)))return o.msg("选择的文件中包含不支持的格式"),l.value="";break;case"video":if(!RegExp("\\w\\.("+(d||"avi|mp4|wma|rmvb|rm|flash|3gp|flv")+")$","i").test(escape(h)))return o.msg("选择的视频中包含不支持的格式"),l.value="";break;case"audio":if(!RegExp("\\w\\.("+(d||"mp3|wav|mid")+")$","i").test(escape(h)))return o.msg("选择的音频中包含不支持的格式"),l.value="";break;default:if(layui.each(h,function(e,t){RegExp("\\w\\.("+(d||"jpg|png|gif|bmp|jpeg$")+")","i").test(escape(t))||(m=!0)}),m)return o.msg("选择的图片中包含不支持的格式"),l.value=""}if(o.fileLength=function(){var t=0,i=e||o.files||o.chooseFiles||l.files;return layui.each(i,function(){t++}),t}(),a.number&&o.fileLength>a.number)return o.msg("同时最多只能上传的数量为："+a.number);if(a.size>0&&!(n.ie&&n.ie<10)){var y=void 0;if(layui.each(o.chooseFiles,function(e,t){if(t.size>1024*a.size){var i=a.size/1024;i=i>=1?Math.floor(i)+(i%1>0?i.toFixed(1):0)+"MB":a.size+"KB",l.value="",y=i}}),y)return o.msg("文件不能超过"+y)}"choose"===i?a.choose&&a.choose(v):(a.before&&a.before(v),n.ie?n.ie>9?f():function(){var e=t("#"+r);o.elemFile.parent().submit(),clearInterval(c.timer),c.timer=setInterval(function(){var t=void 0,i=e.contents().find("body");try{t=i.text()}catch(n){o.msg("获取上传后的响应信息出现异常"),clearInterval(c.timer),p()}t&&(clearInterval(c.timer),i.html(""),s(0,t))},30)}():f())}},c.prototype.events=function(){var e=this,i=e.config,a=function(t){e.chooseFiles={},layui.each(t,function(t,i){var o=(new Date).getTime();e.chooseFiles[o+"-"+t]=i})},l=function(t){var o=e.elemFile,n=t.length>1?t.length+"个文件":(t[0]||{}).name||o[0].value.match(/[^/\\]+\..+/g)||[]||"";o.next().hasClass(u)&&o.next().remove(),e.upload(null,"choose"),e.isFile()||i.choose||o.after('<span class="layui-inline '+u+'">'+n+"</span>")};i.elem.off("upload.start").on("upload.start",function(){var n=t(this),a=n.attr("lay-data");if(a)try{a=new Function("return "+a)(),e.config=t.extend({},i,a)}catch(l){o.error("Upload element property lay-data configuration item has a syntax error: "+a)}e.config.item=n,e.elemFile[0].click()}),n.ie&&n.ie<10||i.elem.off("upload.over").on("upload.over",function(){t(this).attr("lay-over","")}).off("upload.leave").on("upload.leave",function(){t(this).removeAttr("lay-over")}).off("upload.drop").on("upload.drop",function(o,n){var r=t(this),u=n.originalEvent.dataTransfer.files||[];r.removeAttr("lay-over"),a(u),i.auto?e.upload(u):l(u)}),e.elemFile.off("upload.change").on("upload.change",function(){var t=this.files||[];a(t),i.auto?e.upload():l(t)}),i.bindAction.off("upload.action").on("upload.action",function(){e.upload()}),i.elem.data("haveEvents")||(e.elemFile.on("change",function(){t(this).trigger("upload.change")}),i.elem.on("click",function(){e.isFile()||t(this).trigger("upload.start")}),i.drag&&i.elem.on("dragover",function(e){e.preventDefault(),t(this).trigger("upload.over")}).on("dragleave",function(){t(this).trigger("upload.leave")}).on("drop",function(e){e.preventDefault(),t(this).trigger("upload.drop",e)}),i.bindAction.on("click",function(){t(this).trigger("upload.action")}),i.elem.data("haveEvents",!0))},a.render=function(e){var t=new c(e);return function(){var e=this;return{upload:function(t){e.upload.call(e,t)},config:e.config}}.call(t)},e(l,a)});