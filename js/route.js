
(function(){
    'use strict';

    angular.module('app',['ngRoute']).
    config(function($routeProvider){
        $routeProvider.
            when("/",{
                templateUrl: 'views/main.html'
            }).
            when("/skill",{
                templateUrl:'views/skills.html'
            })
    })
})();