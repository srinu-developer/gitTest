class MyClass {
    constructor(){
        console.log("Automation Starts Here");
    }

    add(arg1,arg2){
        let result;
        result = arg1 + arg2;
        return result;
    }

    sub(arg1,arg2){
        let result = arg1 - arg2;
        return result;
    }

    multi(arg1,arg2){
        let result = arg1 * arg2;
        return result;
    }

    div(arg1,arg2){
        let result = arg1 / arg2;
        return result;
    }

    callAnotherFn(arg1,arg2){
        let result = this.add(arg1,arg2);
        return result;
    }

    call(callback){
        callback();
    }
}
module.exports = MyClass;