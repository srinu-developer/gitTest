const mocha = require('mocha');
const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const MyClass = require('./file1.js');
const myObj = new MyClass();

describe("Automation for Arthimetic operations", ()=>{
    
    // before(function(){
    //     console.log("----automation starts here-----")
    // })

    // after(function(){
    //     console.log("-----automation ends here-----");
    // })

    before(function(){
        console.log("-----start-----");
    })

    after(function(){
        console.log("-----End-----");
    })

    it("Test case for Addition",()=>{
        expect(myObj.add(5,5)).to.be.equal(10);
    })

    it("Test case for Subtraction",()=>{
        expect(myObj.sub(10,5)).to.be.equal(5);
    })

    it("Test case for Multiplication",()=>{
        expect(myObj.multi(5,5)).to.be.equal(25);
    })

    it("Test case for Divison", ()=>{
        expect(myObj.div(10,5)).to.be.equal(2);
    })
    /*********** SPY and SINON **********************/

    // it("Test case for Sinon", ()=>{
    //     var spy = sinon.spy(myObj, "add");
    //     var arg1 =10, arg2= 20;
    //     myObj.callAnotherFn(arg1,arg2);
    //     sinon.assert.calledOnce(spy);
    //     expect(spy.calledOnce).to.be.true;
    // })

    // it("Spy for call callback function",()=>{
    //     var callback = sinon.spy();
    //     myObj.call(callback);
    //     expect(callback.calledOnce).to.be.true;
    // })

    /*********** SPY and SINON **********************/

    it("spy on method",()=>{
        var spy = sinon.spy(myObj, "add");
        var arg1=10, arg2=20;
        myObj.callAnotherFn(arg1,arg2);
        sinon.assert.calledOnce(spy);
        expect(spy.calledOnce).to.be.true;
    })

    it("spy on callback",()=>{
        var callback = sinon.spy();
        myObj.call(callback);
        expect(callback.calledOnce).to.be.true;
    })
})