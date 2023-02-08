function subtract(a: number, b:number): number {
    return a - b;
}
function add(a: number, b: number): number {
    return a + b;
}
// here return type is inferred by typescript
function divide(a: number, b:number) {
    return a / b;
}
function multiply(a: number, b: number) {
    return a * b;
}

function factorial(num: number): number {
    let fact: number = 1;
    for(let i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact;
}