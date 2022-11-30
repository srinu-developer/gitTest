const { assert } = require('mocha');
const file = require('./test.js');
const { expect } = require('chai');

describe("Automation Test",()=>{
    it("should pass add testcase", ()=>{
        let result = file.c
        expect(result).to.be.eq(4);
    });

    it("should pass subtraction testcase", ()=>{
        let result = file.z
        expect(result).to.be.eq(3);
    });

    it("should pass multiplication testcase", ()=>{
        let result = file.r
        expect(result).to.be.eq(25);
    });
});