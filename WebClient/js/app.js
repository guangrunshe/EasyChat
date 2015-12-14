var weChat = angular.module('weChat', ['ui.router', 'ngAnimate','registerCtrls','mainCtrls','weChatDirectives']);
weChat.run(function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
});
weChat.config(['$stateProvider','$urlRouterProvider',function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: 'tpls/login.html'
        })
        .state('main',{
            url:"/main",
            views: {
                '': {
                    templateUrl: 'tpls/main.html'
                },
                'leftview@main':{
                    templateUrl:'tpls/chatlist.html'
                }
            }
        })
        .state('main.friend',{
            url:"/friend",
            views: {
                'rightview@main': {
                    templateUrl: 'tpls/friend.html'
                }
            }
        })
        .state('main.setting',{
            url:"/setting",
            views: {
                'rightview@main': {
                    templateUrl: 'tpls/setting.html'
                }
            }
        })
        .state('main.chatpage',{
            url:"",
            views: {
                'rightview@main': {
                    templateUrl: 'tpls/chatpage.html',
                    controller: function($scope, $state) {
                        $scope.chat = function(e) {
                            var name = $(e).children(".chatmessage-1").children(".chatmessage-1-info").children("h4").text();
                            alert(name);
                            $(".main-right .main-right-nav h2").text(name);
                        }
                    }
                }
            }
        })
        .state('main.chatlist',{
            url:"/chatlist",
            views:{
                'leftview@main':{
                    templateUrl:'tpls/chatlist.html'
                }
            }
        })
        .state('main.friendlist',{
            url:"/friendlist",
            views:{
                'leftview@main':{
                    templateUrl:'tpls/friendlist.html'
                }
            }
        });
}]);