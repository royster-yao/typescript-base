/*
* 抽象类
*  只能被继承 不能实例化
* */
abstract class Animal {
    name: string
    constructor(name: string) {
        this.name = name
    }
    sayHello(){
        console.log("动物在叫")
    }
}

class Snake extends Animal {
    age: number
    constructor(name: string,age: number) {
        super(name);
        this.age = age
    }
    sayHello() {
        super.sayHello();
    }
}

const snake = new Snake('小黄',3)
console.log(snake)