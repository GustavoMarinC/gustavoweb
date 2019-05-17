(function(){
    'use strict';

    angular
        .module('app')
        .controller('aboutMeController', controller)

    controller.$inject = ['$location','$scope'];

    function controller($location,$scope) {
        /* jshint validthis:true */
        var vm = this;

        activate();

        function activate() { }
    }
})();