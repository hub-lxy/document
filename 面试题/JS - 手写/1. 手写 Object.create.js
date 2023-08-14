// 1. 介绍： Object.create() 静态方法以一个现有对象作为原型，创建一个新对象。
// 语法：
// 使用方式一 Object.create(proto)：
// 使用方式二 Object.create(proto, propertiesObject) => proto: 新创建对象的原型对象； propertiesObject: 可选参数 如果该参数被指定且不为 undefined，则该传入对象可枚举的自有属性将为新创建的对象添加具有对应属性名称的属性描述符。这些属性对应于 Object.defineProperties() 的第二个参数。

// 2. Object.create 的使用：
let per = {
  say: function () {
    console.log(`名字： ${this.name}; 年龄： ${this.age}`);
  },
};
let person = Object.create(per);
person.name = "小明";
person.age = 18;
person.say();
console.log(person.__proto__ === per); // true

// 3. Object.create 书写简单实现（不考虑第二个参数）：
// 实现思路：
// 首先 Object.create() 返回值是一个对象
// 其次当前返回的对象的原型指向传入的第一个参数对象
console.log("\n\n");
function create(obj) {
  function NewFun() {}
  NewFun.prototype = obj;
  return new NewFun();
}
let per2 = {
  say: function () {
    console.log(`名字： ${this.name}; 年龄： ${this.age}`);
  },
};
let person2 = create(per2);
person2.name = "小明";
person2.age = 18;
person2.say();
console.log(person2.__proto__ === per2); // true
