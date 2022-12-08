const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const MyClass = require('./test2.js');
const myObj = new MyClass();

describe("Automation TestCases", ()=>{

    it("Test case for Addition", ()=>{
        expect(myObj.add(2,2)).to.be.equal(4);
    })

    it("Test case fot Subtraction", ()=>{
        expect(myObj.sub(4,2)).to.be.equal(2);
    })

    it("Test case for Multiplication",()=>{
        expect(myObj.multi(2,2)).to.be.equal(4);
    })

    it("Test case for Divison", ()=>{
        expect(myObj.div(4,2)).to.be.equal(2);
    })

    it("Test case for Sinon", ()=>{
        let spy = new sinon.spy(myObj,"add");
        let arg1=10,arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })

    it("Test case for spy", ()=>{
        let callback = new sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})    