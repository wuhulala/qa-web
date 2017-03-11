App.controller('headerController', function ($scope, $rootScope, $state, Restangular, userService, $cookieStore) {
    $scope.logout = function () {
        if (confirm('确认要退出登录吗？')) {
            /*$cookieStore.put('identity', null);
            $rootScope.identity = null;
            Restangular.setDefaultHeaders({});*/
            $state.go('login');
        }
    };
});