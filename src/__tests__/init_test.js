// __tests__/init-test.js
jest.dontMock('../js/init.js');

describe('init', function() {
 it('says hello', function() {
   var init = require('../js/init.js');
   expect(init.hello('test')).toBe('Hello, test!');
 });
});