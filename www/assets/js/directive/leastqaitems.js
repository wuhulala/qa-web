App.directive('least-qaitems', function () {
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
            ' <footer class="q-author">',
            '{{item.author || "XueAoHui"}}',
            '</footer>',
            '</div>',
            '<div class="col-md-3 ">',
            '<div class="pull-right">',
            '<header >',
            '</header>',
            ' <footer  style="margin-top: 15px">',
            '<div  class="q-time text-right">{{item.time |date:"yyyy年MM月dd日"}}发表</div>',
            '</footer>',
            '</div>',
            '</div>',
            '</div>'].join(''),
        replace: true
    }

});