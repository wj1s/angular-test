'use strict';

angular.module('myApp.controllers', []).
  controller('CoursesController', ['$scope',function($scope) {
       $scope.currentCourses = [
           {
               name:'javascript',
               online: '2013/07/30'
           }
       ];

  }]);