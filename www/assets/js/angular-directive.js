App.directive('qaitems', function () {
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
            '{{item.time |date:"yyyy-MM-dd"}}',
            '</footer>',
            '</div>',
            '<div class="col-md-3 ">',
            '<div class="pull-right">',
            '<span class="label label-default"><i class="fa fa-eye"></i>&nbsp;{{item.likeNumber || 0}}</span>',
            '<span class="label label-primary"><i class="fa fa-thumbs-o-up"></i>&nbsp;{{item.readNumber || 0}}</span>',
            '<span class="label label-success"><i class="fa fa-comment-o"></i>&nbsp;{{item.replyNumber || 0}}</span>',
            '</div>',
            '</div>',
            '</div>'].join(''),
        replace: true
    }

});
