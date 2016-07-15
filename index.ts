export default class Calculator {
    add(x: number, y: number) : number {
        return x + y;
    }
}

let calc = new Calculator();
console.log(calc.add(2,3));