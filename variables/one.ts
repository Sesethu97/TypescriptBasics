var str = '1' 
var str2:number = <number> <any> str    
console.log(typeof(str2))

var num1 = 1
class numbers{
    num2 = 2;
    static num3 = 4;
    
    storenum() : void {
        var num4 : 5;
    }
}
console.log("Global num: "+num1)  
console.log(numbers.num3)   //static variable  
var obj = new numbers(); 
console.log("Global num: "+obj.num2) 



var num  = 2;
var res = num*2;
console.log(res);

var result = num>6;
console.log(result);


