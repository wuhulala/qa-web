App.controller('loginController',function ($scope,$state,$rootScope,userService,$cookieStore,Restangular) {

    //登录
    $scope.login = function () {
        $state.go('app.home');
       /* userService.login($scope.loginUser).then(function (result) {
            var data = result.data;
            $cookieStore.put('identity', data);
            $cookieStore.put('errorMsg', null);
            $rootScope.identity = data;
            $rootScope.errorMsg = null;
            $state.go('app.map');
        });*/
    };
});