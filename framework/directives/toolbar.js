(function(){
  'use strict';

  var directives = angular.module('onsen.directives');

  var Toolbar = Class.extend({
    leftButtons: [],
    rightButtons: [],
    title: [],
    init: function(scope, element, attrs){
      this.scope = scope;
      this.element = element;
      this.attrs = attrs;
    },

    showBackButton: function(){

    },

    hideBackButton: function(){

    },

    pushLeftContent: function(leftContent){

    },

    pushCenterContent: function(centerContent){

    },

    pushRightContent: function(rightContent){

    },

    popLeftContent: function(){

    },

    popCenterContent: function(){

    },

    popRightContent: function(){

    }
  });

  directives.directive('onsToolbar', function(ONSEN_CONSTANTS) {
    return {
      restrict: 'E',
      replace: false,
      transclude: true,
      scope: true,
      templateUrl: ONSEN_CONSTANTS.DIRECTIVE_TEMPLATE_URL + '/toolbar.tpl',
      link: function($scope, element, attrs) {
        var toolbar = new Toolbar($scope, element, attrs);
        
      }
    };
  });
})();
