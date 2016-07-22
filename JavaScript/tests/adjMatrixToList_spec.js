'use strict';

var utils = require('../src/Common/utils');

describe('Utils', function () {
    it('should detect lowercase char codes', function () {
        var char = 'a'.charCodeAt(0);
        expect(utils.isLowerCaseCharCode(char)).toBe(true);
    });

    it('should give accurate log2 values', function () {
        expect(utils.log2(2)).toBe(1);
    });

    it('should get the values of an object', function () {
        expect(utils.values({a: 1, b: 2, c: 3})).toEqual([1, 2, 3]);
    });

    it('should get the values of an array', function () {
        expect(utils.values([1, 2, 3])).toEqual([1, 2, 3]);
    });

    it('should get empty values for empty objects', function () {
        expect(utils.values({})).toEqual([]);
    });

    it('should return undefined for null/undefined objects', function () {
        expect(utils.values(null)).toBeUndefined();
        expect(utils.values()).toBeUndefined();
    });

    it('should return undefined for primitive values, strings and functions', function () {
        expect(utils.values(1)).toBeUndefined();
        expect(utils.values(true)).toBeUndefined();
        expect(utils.values(function() {})).toBeUndefined();
        expect(utils.values('this is one')).toBeUndefined();
    });

    it('should return the count of nonAlphabetical characters in a string', function () {
        var string = 'abcdef!@#';
        expect(utils.nonAlphabeticalCharCount(string)).toBe(3);
    });

    it('should return 0 for pure strings', function () {
        var string = 'abcdef';
        expect(utils.nonAlphabeticalCharCount(string)).toBe(0);
    });

    it('should return the count of numbers in strings', function () {
        var string = 'abcdef111';
        expect(utils.nonAlphabeticalCharCount(string)).toBe(3);
    });

    it('should return the count for non-alphabetical strings', function () {
        var string = '!@#$111';
        expect(utils.nonAlphabeticalCharCount(string)).toBe(7);
    });

    it('should return 0 for empty strings', function () {
        var string = '';
        expect(utils.nonAlphabeticalCharCount(string)).toBe(0);
    });

    it('should return undefined for non-string values', function () {
        expect(utils.nonAlphabeticalCharCount()).toBeUndefined();
        expect(utils.nonAlphabeticalCharCount(null)).toBeUndefined();
        expect(utils.nonAlphabeticalCharCount(111)).toBeUndefined();
        expect(utils.nonAlphabeticalCharCount(true)).toBeUndefined();
    });

    it('should identify valid strings', function () {
        var string = 'this is a valid string';
        expect(utils.isGibberish(string)).toBe(false);
    });

    it('should identify gibberish strings', function () {
        var string = 'th@#$@#is @#s !@#@$@#$#@$@#$ gibberish';
        expect(utils.isGibberish(string)).toBe(true);
    });

    it('should be stricter with lower tolerance value for gibberish', function () {
        var string = 'this is sti*l gibberish';
        expect(utils.isGibberish(string, 0.001)).toBe(true);
    });

    it('should be lenient with higher tolerance values for gibberish', function () {
        var string = '**** is ***** *********';
        expect(utils.isGibberish(string, 0.8)).toBe(false);
    });

    it('should return undefined for non-string values', function () {
        expect(utils.isGibberish()).toBeUndefined();
        expect(utils.isGibberish(null)).toBeUndefined();
        expect(utils.isGibberish(111)).toBeUndefined();
        expect(utils.isGibberish(true)).toBeUndefined();
    });
});
