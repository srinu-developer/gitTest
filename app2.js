const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const MyClass = require('./test2.js');
const myObj = new MyClass();

describe("Autpmation for few operations",()=>{

    before(function(){
        console.log("--------- Starts Here----------")
    })

    after(function(){
        console.log("--------Ends Here---------");
    })

    it("Test case for addition",()=>{
        expect(myObj.add(2,5)).to.be.equal(7);
    })

    it("Test case for subtraction",()=>{
        expect(myObj.sub(10,6)).to.equal(4);
    })

    it("Test case for multiplication",()=>{
        expect(myObj.multi(5,5)).to.be.equal(25);
    })

    it("Test case for divison",()=>{
        expect(myObj.div(8,2)).to.be.equal(4);
    })

    it("Test case for Sinon",()=>{
        var spy = sinon.spy(myObj,"add");
        var arg1=10,arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })

    it("Test case for spy",()=>{
        var callback = sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})