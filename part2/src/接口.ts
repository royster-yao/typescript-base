/*
*   接口用来定义一个类的结构,用来定义一个类中应该包含那些属性和方法
*
 */
interface myInterface {
    name: string
    age: number
}
interface  myInterface {
    gender: string
}
const obj: myInterface = {
    name:'andy',
    age:18,
    gender:'男'
}
console.log(obj)