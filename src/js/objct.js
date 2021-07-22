var arr = ['胡将', '胡将', 'hujiang', '胡将', '胡江', 'hujiang'];
var obj = {};
arr.sort();    //先排序
for (var i = 0; i < arr.length;) {
	var con = 0;
	for (var j = i; j < arr.length; j++) {
		if (arr[i] === arr[j]) {
			con++
		}
	}
	obj[arr[i]] = con;
	i = i + con;    //跳过重复的值
}
console.log(obj);  //{ hujiang: 2, '胡将Ï


var obj = {}
arr.sort()
for (var i = 0; i < arr.length;) {
	var con = 0
	for (var j = i; j < arr.length; j++) {
		if (arr[i] == arr[j])
			con++
	}
	obj[arr[i]] = con;
	i = i + con
}
console.log(obj)



function createPerson(name) {
	var o = new Object();
	o.name = name;
	o.getName = function () {
		console.log(this.name);
	};

	return o;
}

var person1 = createPerson('kevin');



function Parent() {
	this.name = 'zhangsan';
	this.children = ['A', 'B'];
}

Parent.prototype.getChildren = function () {
	console.log(this.children);
}

function Child() {

}

Child.prototype = new Parent();

var child1 = new Child();
child1.children.push('child1')
console.log(child1.getChildren()); // Array ["A", "B", "child1"]

var child2 = new Child();
child2.children.push('child2')
console.log(child2.getChildren()); // Array ["A", "B", "child1", "child2"]
//====



function Parent(age) {
	this.names = ['lucy', 'dom'];
	this.age = age;

	this.getName = function () {
		return this.name;
	}

	this.getAge = function () {
		return this.age;
	}
}

function Child(age) {
	Parent.call(this, age);
}

var child1 = new Child(18);
child1.names.push('child1');
console.log(child1.names); // [ 'lucy', 'dom', 'child1' ]

var child2 = new Child(20);
child2.names.push('child2');
console.log(child2.names); // [ 'lucy', 'dom', 'child2' ]

//=====
function Parent(name, age) {
	this.name = name;
	this.age = age;
	this.colors = ['red', 'green']
	console.log('parent')
}

Parent.prototype.getColors = function () {
	console.log(this.colors);
}

function Child(name, age, grade) {
	Parent.call(this, name, age);// 创建子类实例时会执行一次
	this.grade = grade;
}

Child.prototype = new Parent(); // 指定子类原型会执行一次
Child.prototype.constructor = Child;// 校正构造函数
Child.prototype.getName = function () {
	console.log(this.name)
}

var c = new Child('alice', 10, 4)
console.log(c.getName())

	> "parent"
	> "parent"
	> "alice"

//====
function object(o) {
	function F() { };
	F.prototype = o;
	return new F();
}
var person = {
	name: 'alice',
	friends: ['leyla', 'court', 'van']
}

var p1 = object(person);
p1.name = 'p1';
p1.friends.push('p1');

var p2 = object(person);
p2.name = 'p2';
p2.friends.push('p2');

console.log(p1.name)
console.log(person.friends)

	> Array["leyla", "court", "van", "p1", "p2"]
//===
function Parent(name, age) {
	this.name = name;
	this.age = age;
	console.log('parent')
}

Parent.prototype.getName = function () {
	return this.name;
}

function Child(name, age, grade) {
	Parent.call(this, name, age);
	this.grade = grade;
}

// 寄生组合的方式
// 复制父类的原型对象
function create(original) {
	function F() { };
	F.prototype = original;
	return new F();
}

// 创建父类的原型副本，改变子类的原型，同时纠正构造函数
function inherit(subClass, superClass) {
	var parent = create(superClass.prototype);
	parent.constructor = subClass;
	subClass.prototype = parent;
}

inherit(Child, Parent);

var child = new Child('lucy', 12, 5);

> "parent"

//=====
function Parent(name, age) {
	this.name = name;
	this.age = age;
}

Parent.prototype.getName = function () {
	console.log(this.name)
}

function Child(name, age, grade) {
	Parent.call(this, name, age);
	this.grade = grade;
}

// Child.prototype = new Parent();

// function inherit(child, parent){
//     let obj = parent.prototype;
//     obj.constructor = child;
//     child.prototype = obj;
// }

function inherit(child, parent) {
	let obj = parent.prototype;
	obj.constructor = child;
	for (let key in child.prototype) {
		Object.defineProperty(obj, key, {
			value: child.prototype[key]
		})
	}
	child.prototype = obj;
}



function Person(name) {
	this.name = name;
}

Person.prototype = {
	constructor: Person,
	getName: function () {
		console.log(this.name);
	}
};

var person1 = new Person();