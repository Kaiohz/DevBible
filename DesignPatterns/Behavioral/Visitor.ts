


interface Shape {
    accept(visitor: ShapeVisitor): void;
}

class Circle implements Shape {
    constructor(private radius: number) { }

    accept(visitor: ShapeVisitor): void {
        visitor.visitCircle(this);
    }

    getRadius(): number {
        return this.radius;
    }
}

class Rectangle implements Shape {
    constructor(private width: number, private height: number) { }

    accept(visitor: ShapeVisitor): void {
        visitor.visitRectangle(this);
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}
interface ShapeVisitor {
    visitCircle(circle: Circle): void;
    visitRectangle(rectangle: Rectangle): void;
}

class AreaCalculator implements ShapeVisitor {
    private totalArea: number = 0;

    visitCircle(circle: Circle): void {
        this.totalArea += Math.PI * circle.getRadius() ** 2;
    }

    visitRectangle(rectangle: Rectangle): void {
        this.totalArea += rectangle.getWidth() * rectangle.getHeight();
    }

    getTotalArea(): number {
        return this.totalArea;
    }
}


// Usage example
const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(4, 6),
    new Circle(3)
];

const areaCalculator = new AreaCalculator();

shapes.forEach(shape => shape.accept(areaCalculator));
console.log(`Total area: ${areaCalculator.getTotalArea()}`);