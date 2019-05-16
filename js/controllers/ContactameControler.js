(function(){
    'use strict';

    angular
        .module('app')
        .controller('ContactameController', controller)

    controller.$inject = ['ngDialog','$scope'];

    function controller(ngDialog,$scope) {
      var vm = this;
   
      $scope.openSendEmail = openSendEmail;
          

      function openSendEmail(){
        console.log('flag');
        ngDialog.open({
          template: 'views/popUpSendEmail.html',
          className: 'ngdialog-theme-default',
          scope: $scope
      })
      }      
  }
})();