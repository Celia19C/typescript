"use strict";
class Shape {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
}
class Triangle extends Shape {
    area() {
        return (this.width * this.height) / 2;
    }
}
class Rectangulo extends Shape {
    area() {
        return this.width * this.height;
    }
}
function printArea(shape) {
    console.log(shape.area());
}
const triangle = new Triangle(10, 10);
const rectangulo = new Rectangulo(10, 10);
printArea(triangle);
printArea(rectangulo);
