const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const MyClass = require('./test2.js');
const myObj = new MyClass();

describe("Test cases for automation", ()=>{
    it("Test case for Addition", ()=>{
        expect(myObj.add(2,5)).to.be.equal(7);
    })

    it("Test case for Subtraction", ()=>{
        expect(myObj.sub(4,2)).to.be.equal(2);
    })

    it("Test case for Mutliplication", ()=>{
        expect(myObj.multi(3,3)).to.be.equal(9);
    })

    it("Test case for Divison", ()=>{
        expect(myObj.div(4,2)).to.be.equal(2);
    })

    it("Test case for Sinon", ()=>{
        var spy = sinon.spy(myObj,"add");
        var arg1=10,arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })

    it("Test case for spy", ()=>{
        var callback = sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})