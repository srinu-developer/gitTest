const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const MyClass = require('./test2.js');
const myObj = new MyClass();

describe("Automation for few operations", ()=>{

    before(function(){
        console.log("-------- Starts Here -----------")
    })

    after(function(){
        console.log("--------- Ends Here -----------")
    })

    it("Test case for Addition", ()=>{
        expect(myObj.add(6,6)).to.be.equal(12);
    })

    it("Test case for Subtraction", ()=>{
        expect(myObj.sub(10,8)).to.be.equal(2);
    })

    it("Test case for Multiplication", ()=>{
        expect(myObj.multi(3,3)).to.be.equal(9);
    })

    it("Test case for Division", ()=>{
        expect(myObj.div(10,5)).to.be.equal(2);
    })

    it("Test case for SPY", ()=>{
        var data = sinon.spy(myObj,"add");
        var arg1 =10, arg2=10;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(data);
        expect(data.calledOnce).to.be.true;
    })

    it("Test case for Sinon",()=>{
        var callback = sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})