//调用留言板插件
var editor;
KindEditor.ready(function(K) {
    editor = K.create('textarea[name="content"]', {
        resizeType : 1,
        allowPreviewEmoticons : false,
        allowImageUpload : false,
        // 插件功能配置
        items : [
            'fontname', 'fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
            'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
            'insertunorderedlist', '|', 'emoticons', 'image', 'link']
    });
});