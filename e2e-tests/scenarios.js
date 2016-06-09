'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {




  it('should automatically redirect to / when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('index view', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    


    it('should render news/index.html when user navigates to /', function() {
      browser.waitForAngular();
      expect(element.all(by.css('p')).first().getText()).
        toMatch(/AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/);
    });

  });

});
