
(function(){
    'use strict';

    angular.module('app',['ngRoute','ngDialog']).
    config(function($routeProvider){
        $routeProvider.
            when("/",{
                templateUrl: 'views/main.html'
            }).
            when("/skill",{
                templateUrl:'views/skills.html'
            }).
            when(
                "/experiencia",{
                    templateUrl:'views/experiencia.html'
                }
            ).
            when(
                "/contactame",
                {
                    templateUrl:'views/contactame.html',
                    controller: 'ContactameController'
                }
            )
    })
})();