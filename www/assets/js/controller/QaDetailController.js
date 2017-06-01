App.controller('QaDetailController', function ($scope,$state,$stateParams,QaService) {
    $scope.classNames={
       wrapper:'mdeditor',
       toolbar:'mdeditor-toolbar',
       toolbarItem:'mdeditor-toolbar-item',
       separator:'mdeditor-toolbar-separator',
       textarea:'mdeditor-textarea',
        preview:'mdeditor-preview'
    };

    var id = $stateParams.id;
    if (id) {
        QaService.get(id).then(function (result) {
            $scope.title = result.data.title;
            $scope.text = result.data.content;
        });
    }else{
        $state.go('404');
    }

});