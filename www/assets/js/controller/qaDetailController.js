App.controller('qaDetailController', function ($scope) {
    $scope.classNames={
        wrapper:'mdeditor',
        toolbar:'mdeditor-toolbar',
        toolbarItem:'mdeditor-toolbar-item',
        separator:'mdeditor-toolbar-separator',
        textarea:'mdeditor-textarea',
        preview:'mdeditor-preview'
    };

    $scope.text='### 标题\n'+
        '```\nconsole.log(Array.every(classes, Boolean));\n```\n'+
        '```javascript\nconsole.log(Array.every(classes, Boolean));\n```\n'+
        '```xml\n<html>\n\t<head>\n\t</head>\n\t<body>\n\t</body>\n</html>\n```';
});