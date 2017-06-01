// JavaScript source code
App.factory('QaService', ['Restangular', function (Restangular) {
    var res = Restangular.all('qa');
    return {
        get: function (id) {
            return res.one(id).get();
        },
        add: function (Qa) {
            return res.post(Qa);
        },
        getLeast: function () {
            return res.get('least', {}).then(function (result) {
                return result;
            });
        },
    }
}]);