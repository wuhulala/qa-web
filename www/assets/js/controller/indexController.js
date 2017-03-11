App.controller('indexController', function ($scope) {

    $scope.config = {
        nowLevel:1
    };



    var level1Items = [{
        name: "level1_1",
        clickNumber: 11
    }, {
        name: "level1_2",
        clickNumber: 11
    }, {
        name: "level1_3",
        clickNumber: 11
    }, {
        name: "level1_4",
        clickNumber: 11
    }, {
        name: "level1_5",
        clickNumber: 11
    }];

    var level2Items = [{
        name: "level2_1",
        clickNumber: 21
    }, {
        name: "level2_2",
        clickNumber: 12
    }, {
        name: "level2_3",
        clickNumber: 112
    }, {
        name: "level2_4",
        clickNumber: 121
    }, {
        name: "level2_5",
        clickNumber: 1221
    }];

    var level3Items = [{
        name: "level3_1",
        clickNumber: 11
    }, {
        name: "level3_2",
        clickNumber: 131
    }, {
        name: "level3_3",
        clickNumber: 311
    }, {
        name: "level3_4",
        clickNumber: 1331
    }, {
        name: "level3_5",
        clickNumber: 113
    }];

    var level4Items = [{
        name: "level1_1",
        clickNumber: 411
    }, {
        name: "level4_2",
        clickNumber: 141
    }, {
        name: "level1_3",
        clickNumber: 114
    }, {
        name: "level4_4",
        clickNumber: 1441
    }, {
        name: "level4_5",
        clickNumber: 14441
    }];

    $scope.qas = level1Items;


    $scope.changeItems = function (type) {
        switch (type) {
            case 1:
                $scope.qas = level1Items;
                $scope.config.nowLevel = 1;
                break;
            case 2:
                $scope.qas = level2Items;
                $scope.config.nowLevel = 2;
                break;
            case 3:
                $scope.qas = level3Items;
                $scope.config.nowLevel = 3;
                break;
            case 4:
                $scope.qas = level4Items;
                $scope.config.nowLevel = 4;
                break;
        }
    }

});