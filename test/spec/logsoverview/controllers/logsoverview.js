'use strict';

describe('Controller: LogsoverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('fpasUiApp'));

  var LogsoverviewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LogsoverviewCtrl = $controller('LogsoverviewCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
