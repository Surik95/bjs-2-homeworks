function parseCount(numberString) {
    let number = Number.parseInt(numberString);
    if (isNaN(number)) {
        throw new Error('Невалидное значение');
    }
    return number;
}

function validateCount(numberString) {
    try {
        return parseCount(numberString)
    } catch(error) {
        return error
    } 

}

class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideTriangle = [sideA, sideB, sideC];
            if (this.sideTriangle.some((item, index, arr) => item > arr.reduce((acc, item) => acc += item, 0) - arr[index])) {
            throw new Error('Треугольник с такими сторонами не существует');
            }
    }
    
    getPerimeter() {
        return this.sideTriangle.reduce((acc, item) => acc += item, 0)
    }

    getArea() {
        let perimeter = this.getPerimeter()/2;
        let square = perimeter * (perimeter - this.sideTriangle[0]) * (perimeter - this.sideTriangle[1]) * (perimeter - this.sideTriangle[2])
        return Math.round(Math.sqrt(square) * 1000) / 1000
    }

}

function getTriangle(sideA, sideB, sideC) {
        try {
            return new Triangle(sideA, sideB, sideC)
        } catch {
            return {
                getArea: function() {
                    return 'Ошибка! Треугольник не существует'
                },
                getPerimeter: function() {
                    return 'Ошибка! Треугольник не существует'
                }
            }
        } 
    }

