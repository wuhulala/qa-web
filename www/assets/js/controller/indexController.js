App.controller('indexController', function ($scope,$state) {

    $scope.config = {
        nowLevel:1
    };



    var level1Items = [{
        id:1,
        name: "level1_1",
        readNumber: 11,
        likeNumber: 121,
        replyNumber: 1,
        time:1489248078000
    }, {
        id:2,
        name: "level1_2",
        readNumber: 31,
        likeNumber: 1221,
        replyNumber: 1
    }, {
        id:3,
        name: "level1_3",
        clickNumber: 11
    }, {
        id:4,
        name: "level1_4",
        clickNumber: 11
    }, {
        id:5,
        name: "level1_5",
        clickNumber: 11
    }];

    var level2Items = [{
        id:6,
        name: "level2_1",
        clickNumber: 21
    }, {
        id:7,
        name: "level2_2",
        clickNumber: 12
    }, {
        id:8,
        name: "level2_3",
        clickNumber: 112
    }, {
        id:9,
        name: "level2_4",
        clickNumber: 121
    }, {
        id:10,
        name: "level2_5",
        clickNumber: 1221
    }];

    var level3Items = [{
        id:10,
        name: "level3_1",
        clickNumber: 11
    }, {
        id:10,
        name: "level3_2",
        clickNumber: 131
    }, {
        id:10,
        name: "level3_3",
        clickNumber: 311
    }, {
        id:10,
        name: "level3_4",
        clickNumber: 1331
    }, {
        id:10,
        name: "level3_5",
        clickNumber: 113
    }];

    var level4Items = [{
        id:10,
        name: "level1_1",
        clickNumber: 411
    }, {
        id:10,
        name: "level4_2",
        clickNumber: 141
    }, {
        id:10,
        name: "level1_3",
        clickNumber: 114
    }, {
        id:10,
        name: "level4_4",
        clickNumber: 1441
    }, {
        id:10,
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

    $scope.showDetail = function (id) {
        $state.go('app.qaDetail',{id:id});
    }

});