'use strict';

import {greet, invertCase} from '../js/app'; //import the functions to test!

/* tests go here */

//{Feature} should {test}
describe('Basic math', function() {
    //tests
    it('should add numbers correctly', function() {
        //JS
        let result = 1+1;
        //Assertion (that 1+1=2)
        expect(result).toEqual(2);
    })
})

describe('invertCase() function', function() {
    it('should have UpperCase', function() {
        expect(text).toMatchObject('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    })
    it('should have LowerCase', function() {
        expect(text).toMatchObject('abcdefghijklmnopqrstuvwxyz');
    }
})