abstract class Animal {
    public abstract sound(): string
}


class Dog extends Animal {
    public sound(){
        return 'guau guau'
    }
}

class Cat extends Animal {
    public sound(){
        return 'miau miau'
    }
}


const duke = new Dog()
console.log(duke.sound())

const misifu = new Cat()
console.log(misifu.sound())