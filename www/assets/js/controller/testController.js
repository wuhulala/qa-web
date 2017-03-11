App.controller('testController', function ($scope, $rootScope, $state, API_URL, NgTableParams,testService) {
    var emptyEntity = {};
    var newEntity = angular.copy(emptyEntity, newEntity);

    $scope.filter = {};


    //根据总行银行id，所在省市，关键字查找分行数据
    $scope.tableParams = new NgTableParams({ sorting: { 'id': 'asc' } }, {
        getData: function (params) {
            //获取数据
            var result =  testService.getData(params);
            //设置总数据数
            params.total(result.total);
            return result.data;
        }
    })
    $scope.tableParams2 = new NgTableParams({ sorting: { 'id': 'asc' } }, {
        getData: function (params) {
            //获取数据
            var result =  testService.getData2(params);
            //设置总数据数
            //params.total(result.total);
            return result.data;
        }
    })
    //刷新
    $scope.reflash = function () {
        $scope.tableParams.reload();
    }
    //弹出新建银行信息窗口
    $scope.add = function (data) {
        $scope.model = newEntity;
        $('#modal-add').modal('show');
    };
    //弹出修改银行信息窗口
    $scope.edit = function (data) {
        $scope.model = angular.copy(data);
        $('#modal-edit').modal('show');
    };

    $scope.myVar = true;
    $scope.myToggle = function(data) {
        $scope.model = angular.copy(data);
        $scope.myVar = false;
    }

        $('.icheckbox_flat-red').iCheck({
            checkboxClass: 'icheckbox_flat-red',
            radioClass: 'iradio_flat-red'
        });
});