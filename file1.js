class MyClass{
    constructor(){
        console.log("Automarion Started");
    }

    add(arg1,arg2){
        var result;
        result = arg1 + arg2;
        return result;
    }

    sub(arg1,arg2){
        var result;
        result = arg1 - arg2;
        return result;
    }

    multi(arg1,arg2){
        var result;
        result = arg1 * arg2;
        return result;
    }

    div(arg1,arg2){
        var result;
        result = arg1 / arg2;
        return result;
    }

     /*********** SPY and SINON **********************/

//     callAnotherFn(arg1,arg2){
//         var result = this.add(arg1,arg2);
//         return result;
//     }

//    call(callback){
//     callback();
//    }

    /*********** SPY and SINON **********************/

    callAnotherFn(arg1,arg2){
        var result = this.add(arg1,arg2);
        return result;
    }

    call(callback){
        callback();
    }
}

module.exports = MyClass;