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

    it('Should menu icon placed correctly', function() {
      browser.waitForAngular();
      expect(element.all(by.css('md-icon')).first().getText()).
        toMatch(/drag_handle/);
    });

    it('Should news placed correctly when users clicks menu', function() {
      browser.waitForAngular();
      element.all(by.css('.md-icon-button')).click();
      expect(element.all(by.repeater('new in nc.news')).count()).toEqual(4);
    });

    it('Should news removed correctly when users clicks menu', function() {
      browser.waitForAngular();
      element.all(by.css('.md-icon-button')).click();
      expect(element.all(by.repeater('new in nc.news')).count()).toEqual(4);
      element.all(by.css('.md-icon-button')).click();
      expect(element.all(by.repeater('new in nc.news')).count()).toEqual(0);
    });

    it('Should open new detailed info', function() {
      browser.waitForAngular();
      element.all(by.css('.md-icon-button')).click();
      element.all(by.css('md-list-item')).first().click();
      expect(element.all(by.css('md-card md-card-title')).count()).toBe(1);
      expect(element.all(by.css('md-card md-card-title')).first().getText()).toMatch(/Agotado chaleco doble faz bogotá humana/);
    });

    it('Should open/close new detailed info', function() {
       browser.waitForAngular();
       element.all(by.css('.md-icon-button')).click();
       element.all(by.css('md-list-item')).first().click();
       expect(element.all(by.css('md-card md-card-title')).count()).toBe(1);
       element.all(by.css('.md-icon-button')).click();
       expect(element.all(by.css('md-card md-card-title')).count()).toBe(0);
    });

  });

});
