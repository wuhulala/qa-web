App.controller('sidebarController', function ($scope, $rootScope, $state,$cookieStore) {
    $scope.logout = function () {
        if (confirm('确认要退出登录吗？')) {         //退出登录
           /* userService.logout($rootScope.identity.admin.token).then(function () {
                $cookieStore.put('identity', null);
                $rootScope.identity = null;
                $state.go('login');          //挑选到登录界面（管理平台首页）
            });*/
            $state.go('login');
        }
    };
});
