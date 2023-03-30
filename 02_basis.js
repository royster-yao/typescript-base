//声明一个变量，同时指定它的类型为number
var a;
// a的类型设置为了number，再以后的使用过程当中a的值只能是数字
a = 10;
// a='hello' //此行代码会报错，因为变量a的类型是number
var b;
// b = 'hello'
/*
* 变量声明并赋值，TS自动对变量类型进行检测
*/
var c = false;
c = true;
function sum(a, b) {
    return a + b;
}
console.log(sum(123, 456));
