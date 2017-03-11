App.directive('qaitem', function () {
    return {
        restrict: 'AE',
        scope: {
            qas: '='
        },
        template: ['<div ng-click="showDetail(item.id)"  class="col-md-12 qa-list-group-item" ng-repeat="item in qas">',
            '<div class="col-md-1">',
            '<span><img src="{{item.img}}" class="img-circle img-avatar"></span>',
            '</div>',
            '<div class="col-md-8">',
            '<header class="q-name">{{item.name}}</header>',
            ' <footer class="q-time">',
            '{{item.date}}',
            '</footer>',
            '</div>',
            '<div class="col-md-3 ">',
            '<div class="pull-right">',
            '<span class="label label-default">{{item.likeNumber}}</span>',
            '<span class="label label-primary">{{item.readNumber}}</span>',
            '<span class="label label-success">{{item.replyNumber}}</span>',
            '</div>',
            '</div>',
            '</div>'].join(''),
        replace: true
    }

});