let numero1 = prompt('Ingrese un numero');
let numero2 = prompt('ingrese un segundo numero');
let numero3 = prompt('ingrese un tercer numero');

if(numero1 > numero2 && numero1 > numero3){
    document.write('Es Mayor ', numero1);
}
else if (numero2 > numero1 && numero2 > numero3){
    document.write('Es Mayor ', numero2);
}
else{
    document.write('Es Mayor ', numero3);
}