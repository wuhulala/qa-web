App.controller('addQuestionController', function ($scope,$state,QaService) {
    $scope.toolbar=[
        {action:'bold',icon:'fa fa-bold',tip:'加粗(Ctrl+B)'},
        {action:'italic',icon:'fa fa-italic',tip:'斜体(Ctrl+I)'},
        {action:'header',icon:'fa fa-header',tip:'标题(Ctrl+H)'},
        {separator:true},
        {action:'ul',icon:'fa fa-list-ul',tip:'无序列表(Ctrl+U)'},
        {action:'ol',icon:'fa fa-list-ol',tip:'有序列表(Ctrl+O)'},
        {action:'code',icon:'fa fa-code',tip:'代码(Ctrl+K)'},
        {action:'quote',icon:'fa fa-quote-left',tip:'引用(Ctrl+Q)'},
        {separator:true},
        {action:'link',icon:'fa fa-link',tip:'连接(Ctrl+L)'},
        {action:'img',icon:'fa fa-picture-o',tip:'图片(Ctrl+G)'},
        {separator:true},
        {action:'undo',icon:'fa fa-undo',tip:'撤销'},
        {action:'redo',icon:'fa fa-repeat',tip:'重做'},
        {action:'preview',icon:'fa fa-eye',tip:'浏览'},
        {action:'fullscreen',icon:'fa fa-arrows-alt',tip:'全屏'}
    ];

    $scope.classNames={
        wrapper:'mdeditor',
        toolbar:'mdeditor-toolbar',
        toolbarItem:'mdeditor-toolbar-item',
        separator:'mdeditor-toolbar-separator',
        textarea:'mdeditor-textarea',
        preview:'mdeditor-preview'
    };

    $scope.shortcut={
        'Ctrl-B':'bold',
            'Ctrl-I':'italic',
            'Ctrl-H':'header',
            'Ctrl-U':'ul',
            'Ctrl-O':'ol',
            'Ctrl-K':'code',
            'Ctrl-Q':'quote',
            'Ctrl-L':'link',
            'Ctrl-G':'img'
    };
    $scope.text='Qa content';

    //添加一个新的Qa
    $scope.addQa = function () {
        var newQa = {
            "authorId": 1,
            "content": $scope.text,
            "img": "",
            "title": $scope.title
        };

        QaService.add(newQa).then(function (result) {
            var code = result.meta.code;
            if(code == 200){
                alert("添加成功");
                $state.go('app.index');
            }
            console.log(result);
        });
    }
});