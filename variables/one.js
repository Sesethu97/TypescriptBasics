var str = '1';
var str2 = str;
console.log(typeof (str2));
var num1 = 1;
var numbers = /** @class */ (function () {
    function numbers() {
        this.num2 = 2;
    }
    numbers.prototype.storenum = function () {
        var num4;
    };
    numbers.num3 = 4;
    return numbers;
}());
console.log("Global num: " + num1);
console.log(numbers.num3); //static variable  
var obj = new numbers();
console.log("Global num: " + obj.num2);
