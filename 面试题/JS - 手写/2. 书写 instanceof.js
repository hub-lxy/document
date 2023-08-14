// 1. 介绍： instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
// 语法： object instanceof constructor： object - 某个实例对象； constructor - 某个构造函数

// 2. 使用：
function Demo() {
  this.age = 10;
}
let demo = new Demo();
console.log(demo instanceof Demo);

// 3. 手写实现
// 1. 首先获取类型的原型
// 2. 然后获得对象的原型
// 3. 然后一直循环判断对象的原型是否等于类型的原型，直到对象原型为 null，因为原型链最终为 null
function myInstanceof(left, right) {
  let proto = Object.getPrototypeOf(left), // 获取对象的原型
    prototype = right.prototype; // 获取构造函数的 prototype 对象

  // 判断构造函数的 prototype 对象是否在对象的原型链上
  while (true) {
    if (!proto) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
console.log(myInstanceof(demo, Demo));
