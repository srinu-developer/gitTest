const {assert} = require('mocha');
const data = require('./test1.js');
const {expect} = require('chai');

describe("Addition", ()=>{
    it("shoud pass addition testcase", ()=>{
       let result = data.c;
       expect(result).to.be.eq(4);
    });
});

describe("Subtraction",()=>{
    it("should pass subtraction testcase", ()=>{
        let result1 = data.z;
        expect(result1).to.be.eq(3);
    });
});