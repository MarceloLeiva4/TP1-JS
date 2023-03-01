let numero = prompt('ingrese un numero');
let div = 2
let div2 = 3
let div3 = 5
let div4 = 7
if(numero % div===0 && numero % div2 === 0 && numero % div3 ===0 && numero % div4 ===0){
    document.write('Es divisible por todos');
}else if(numero % div===0 || numero % 3 === 0 || numero % 5 ===0 || numero % 7 ===0){
    document.write('es divisible por ',div,div2 );
}
