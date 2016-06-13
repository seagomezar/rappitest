describe('Services Unit Tests', function() {
  var newsService, APIURL, $httpBackend;
  beforeEach(function() {
    module('myApp.services');
  });
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
  beforeEach(function () {
    module('myApp.services', function ($provide) {
      $provide.constant('APIURL', 'test'); // <= mock your constant
    });
  });
  beforeEach(inject(function(_newsService_, $injector) {
    newsService = _newsService_;
    $httpBackend = $injector.get('$httpBackend');
  }));
  
  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('Should be service defined', function() {
    expect(newsService).toBe.defined;
  });
  
  it('Should be All news returned', function() {
    $httpBackend.when('GET', 'test').respond(
      mockResponse
    );
    var returnedPromise = newsService.getNews();
    var successData, errorData;
    returnedPromise.then(function(response) {
      successData = response;
    }, function(err){
      errorData = err;
    });
    $httpBackend.flush();
    expect(successData[0].id).toBe(mockResponse[0].id);
    expect(errorData).not.toBeDefined;
  });
  
  it('Should be no news returned', function() {
    $httpBackend.when('GET', 'test').respond(400,{data: {error: 'Not found'}});
    var returnedPromise = newsService.getNews();
    var successData, errorData;
    returnedPromise.then(function(response) {
      successData = response;
    }, function(err){
      errorData = err;
    });
    $httpBackend.flush();
    expect(successData).not.toBeDefined;
  });
  
});
