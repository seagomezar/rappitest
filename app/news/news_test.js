describe('myApp.controllers module', function () {

  var newsService, APIURL, $httpBackend, $controller;
  var mockResponse = [
    {
      'id': 1,
      'title': 'AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/CLARA ALCALDESA',
      'content': 'Ni un solo ejemplar del chaleco doble faz “Bogotá Humana-Clara alcaldesa” quedaba esta mañana en las dependencias distritales. La prenda, marca Polo, desde luego, ha sido muy apetecida por los funcionarios de la Bogotá Humana por lo práctica que les resulta.',
      'image': 'http://lorempixel.com/300/300'
    },
    {
      'id': 2,
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
      $controller = $injector.get('$controller');
    });
    $httpBackend.when('GET', 'test').respond(
      mockResponse
    );
  });

  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

    it('should be news controller defined', function() {
      //spec body
      var NewsController = $controller('NewsController');
      expect(NewsController).toBeDefined();
      $httpBackend.flush();
    });

    it('Should be ready when request finish', function(){
      var NewsController = $controller('NewsController');
      $httpBackend.flush();
      expect(NewsController.ready).toBe(true);
    });

    it('Should be ready when request finish', function(){
      var NewsController = $controller('NewsController');
      $httpBackend.flush();
      expect(NewsController.news[0].title).toBe(mockResponse[0].title);
    });

    it('Should current new should be showed', function(){
      var NewsController = $controller('NewsController');
      $httpBackend.flush();
      NewsController.showNew(NewsController.news[1]);
      expect(NewsController.news[1].show).toBe(true);
    });

    it('Should current new should be showed and the others hiden', function(){
      var NewsController = $controller('NewsController');
      $httpBackend.flush();
      NewsController.showNew(NewsController.news[1]);
      expect(NewsController.news[1].show).toBe(true);
      expect(NewsController.news[0].show).toBe(false);
    });

    it('Should no news selected when showNews is called', function(){
      var NewsController = $controller('NewsController');
      $httpBackend.flush();
      NewsController.showNews();
      expect(NewsController.news[0].show).toBe(false);
      expect(NewsController.news[1].show).toBe(false);
    });

  }); 