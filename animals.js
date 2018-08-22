"use strict";
class Animal {
}
class Dog extends Animal {
    sound() {
        return 'guau guau';
    }
}
class Cat extends Animal {
    sound() {
        return 'miau miau';
    }
}
const duke = new Dog();
console.log(duke.sound());
const misifu = new Cat();
console.log(misifu.sound());
