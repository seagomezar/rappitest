'use strict';



describe('myApp.controllers module', function () {

  var newsService, APIURL, $httpBackend;
  var mockResponse = [
    {
      'id': 1,
      'title': 'AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA',
      'content': 'Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.',
      'image': 'http://lorempixel.com/300/300'
    }
  ];
  beforeEach(module('myApp.services'));
  beforeEach(module('myApp.controllers'));

  beforeEach(function () {
    module('myApp.services', function ($provide) {
      $provide.constant('APIURL', 'test'); // <= mock your constant
    });
  });

  beforeEach(function () {
    inject(function ($injector) {
      newsService = $injector.get('newsService');
      $httpBackend = $injector.get('$httpBackend');
    });
    $httpBackend.when('GET', 'test').respond(
      mockResponse
    );
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });




  describe('NewsController tests', function () {

    it('should be news controller defined', inject(function ($controller) {
      //spec body
      var NewsController = $controller('NewsController');
      expect(NewsController).toBeDefined();
      $httpBackend.flush();
      expect(NewsController.news[0].title).toBe(mockResponse[0].title);
    }));

  });
});