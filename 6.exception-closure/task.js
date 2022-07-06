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

    const sumStep = (n, itemsPerStep, onload) => {
        const size = Math.ceil(n / itemsPerStep); // количество шагов
        let index = 0; // текущий шаг
        let sum = 0; // результат суммирования
      
        return () => {
          if(index === size){
            onload(sum);
            return;
          }
      
          const start = index * itemsPerStep;
          const end = Math.min(n+1, (index + 1) * itemsPerStep);
      
          for (let i = start; i < end; i++) {
            sum += i;
          }
          console.log(`Шаг: ${index}, ${sum}`);
          index++;
      
          sheduleStep();
        }
      }
      
      const onload = (sum) => console.log(sum);
      const step = sumStep(100000, 25000, onload);
      const sheduleStep = () => setTimeout(step, 100);
      
      sheduleStep();
      24