const mocha = require('mocha');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const MyClass = require('./test2.js');
const myObj = new MyClass();

describe("Test cases for few operations", ()=>{

    before(function(){
        console.log("------Starts Here -------");
    })

    after(function(){
        console.log("------- Ends Here -------")
    })

    it("Test case for Addition", ()=>{
        expect(myObj.add(5,5)).to.be.equal(10);
    })

    it("Test case for Subtraction", ()=>{
        expect(myObj.sub(4,3)).to.be.equal(1);
    })

    it("Test case for Multiplication", ()=>{
        expect(myObj.multi(3,3)).to.be.equal(9);
    })

    it("Test case for Divison", ()=>{
        expect(myObj.div(4,2)).to.be.equal(2);
    })

    it("Test case for sinon", ()=>{
        var spy = sinon.spy(myObj, "add");
        var arg1 =10, arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })

    it("Test case for SPY", ()=>{
        var callback = sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})