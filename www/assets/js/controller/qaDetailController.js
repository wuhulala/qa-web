App.controller('qaDetailController', function ($scope,$state,$stateParams) {
    $scope.classNames={
        wrapper:'mdeditor',
        toolbar:'mdeditor-toolbar',
        toolbarItem:'mdeditor-toolbar-item',
        separator:'mdeditor-toolbar-separator',
        textarea:'mdeditor-textarea',
        preview:'mdeditor-preview'
    };
    if ($stateParams.id) {
        $scope.text='### 标题'+$stateParams.id+'\n'+
            '```\nconsole.log(Array.every(classes, Boolean));\n```\n'+
            '```javascript\nconsole.log(Array.every(classes, Boolean));\n```\n'+
            '```xml\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t</body>\n</html>\n```';
    }else{
        $state.go('404');
    }

});