var num = 10;
var resultado = num;

bucleFactorial: while(num) {
    num--;
    resultado*=num;
    if(num === 1) {
        break bucleFactorial;
    }
}

console.log(resultado);