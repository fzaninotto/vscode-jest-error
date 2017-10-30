/* global expectedResult */
const add = require('./add');
describe('add', () => {
    it('should add two numbers', () => {
        expect(add(1, 2)).toBe(expectedResult);
    });
});
