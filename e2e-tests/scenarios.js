'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {




  it('should automatically redirect to /view1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/");
  });


  describe('view1', function() {

    beforeEach(function() {
      browser.get('index.html');
    });

    


    it('should render view1 when user navigates to /view1', function() {
      browser.waitForAngular();
      expect(element.all(by.css('p')).first().getText()).
        toMatch(/AGOTADO CHALECO DOBLE FAZ BOGOTÁ HUMANA/);
    });

  });

});
