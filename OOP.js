/* function Person(name) {

    this.name = name;

}

Person.prototype.sayHello = function() {

    return "Hello, " + this.name;

};

const person = new Person("Alice");

console.log(person.sayHello()); */

class A {

    sayHello() {

        return "Hello from A";

    }

}

class B extends A {

    sayHello() {

        return super.sayHello() + " and B";

    }

}

const obj = new B();

console.log(obj.sayHello()); // Hello from A and B