// __tests__/init-test.js
jest.dontMock('../js/init');

describe('init', function() {
 it('says hello', function() {
   var init = require('../js/init');
   expect(init.hello('test')).toBe('Hello, test!');
 });
});