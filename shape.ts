abstract class Shape {
    protected width: number
    protected height: number


    constructor (width: number, height: number) {
        this.width = width
        this.height = height
    }

    abstract area ():number
}

class Triangle extends Shape {
    area() {
        return (this.width * this.height) / 2
    }
}

class Rectangulo extends Shape {
    area() {
        return this.width * this.height
    }
}

function printArea(shape: Shape){
    console.log(shape.area())
}

const triangle = new Triangle(10, 10)
const rectangulo = new Rectangulo(10, 10)

printArea(triangle)
printArea(rectangulo)