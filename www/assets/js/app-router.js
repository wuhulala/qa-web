var App = angular.module('App', [
    'harrie.mdeditor',
    'ui.router',
    'ui.bootstrap',
    'restangular',
    'ngAnimate',
    'ngCookies',
    'ngTable'
]);
App.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('404', {
            url: '/404',
            templateUrl: 'template/404.html'
        })
        .state('login', {
            url: '/login',
            data: { pageTitle: '登录' },
            templateUrl: 'views/login.html'
        })
        .state('app', {
            url: '/app',
            templateUrl: 'template/app.html',
            abstract: true
        })
        .state('app.index', {
            url: '/index',
            data: { pageTitle: '主页' },
            templateUrl: 'views/index.html'
        })
        .state('app.addQuestion', {
            url: '/qa',
            data: { pageTitle: '添加问题' },
            templateUrl: 'views/addQuestion.html'
        })
        .state('app.qaDetail', {
            url: '/qa/detail?id',
            data: { pageTitle: '问题详情' },
            templateUrl: 'views/qaDetail.html'
        })
});


App.run(function ($rootScope, $state, API_URL, Restangular, $cookieStore) {

    //跳转页面设置滑动条在顶部
    $rootScope.$on('$stateChangeStart',function () {
        $(window).scrollTop(0);
    });



    Restangular.setBaseUrl(API_URL);
    /*$rootScope.identity = $cookieStore.get('identity');
    console.log("run----------"+$rootScope.identity);
    /!*$rootScope.identity = $cookieStore.get('identity');
    var token = '';
    if ($rootScope.identity != undefined) {
        token = $rootScope.identity.token;
        Restangular.setDefaultHeaders({'Authorization': 'Bearer ' + token});
    }

    Restangular.setRequestInterceptor(function (elem, operation, what) {
        if (!$rootScope.proc) {
            $rootScope.proc = 1;
        }
        else {
            $rootScope.proc++;
        }
        $rootScope.loading = true;

        return elem;
    });*/
    Restangular.setResponseInterceptor(function (data, operation, what, url, response, deferred) {
        if (data.meta.code == '578') {
            deferred.reject(data);
            $cookieStore.put("errorMsg",data.meta.msg);
            $state.go('login');
        } else {
           // console.log("Internet data: ");
            //console.log(data);
            return data;
        }
    });
});

App.run(function ($rootScope, $state,$cookieStore) {
    $rootScope.$state = $state;
    $rootScope.identity = $cookieStore.get('identity');
    $rootScope.errorMsg = $cookieStore.get('errorMsg');
});