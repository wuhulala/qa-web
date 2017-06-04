App.controller('LoginController',function ($scope,$state,$rootScope,UserService,$cookieStore,Restangular) {

    //登录
    $scope.login = function () {
       UserService.login($scope.loginRequest).then(function (result) {
            var data = result.data;
            if(result.meta.code == 200){
                $cookieStore.put('identity', data);
                $cookieStore.put('errorMsg', null);
                $rootScope.identity = data;
                $rootScope.errorMsg = null;
                $state.go('app.index');
            }else{
                $cookieStore.put('errorMsg', result.meta.msg);
                $rootScope.errorMsg =  result.meta.msg;
            }
        });
    };
});