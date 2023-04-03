// javascript arraY METHODS
[4,5,6,7].at(1); //5 -- encuentra el valor del item en la posicion dada
[4,5,6,7].push(8); // [4,5,6,7,8] -- agrega al final de la lista el valor dado
[4,5,6,7].pop(); //[4,5,6] -- quita el ultimo item 
[4,5,6,7].fill(1); // [1,1,1,1] -- rellena todos los valore con el valor dado
[4,5,6,7].join('-'); // [4-5-6-7] -- genera un string nuevo con divisores con el caracter que agreguemos
[4,5,6,7].shift();//[5,6,7] --quita el primer item
[4,5,6,7].reverse(); // [7,6,5,4] -- invierte los valores de los items
[4,5,6,7].unshift(3); // [3,4,5,6,7] -- agrega un valor a la primera posición
[4,5,6,7].includes(6);// true -- devuelve un booleano si es que existe un valor que otorguemos
//javascript arraY METHODS ES6
[4,5,6,7].map( item => 2 * item); // [8,10,12,14] --  cada item lo modifica al gusto del usuario (en este caso cada item lo multiplica entre dos)
[4,5,6,7].filter(item => item > 5); // [6,7] -- encuentra cada item de la descripcion dada (en este caso TODOS los mayores a 5)
[4,5,6,7].find((item => item > 5)); // [6] -- encuentra el primer item de la descripcion dada (en este caso EL PRIMER los mayor a 5)
[4,5,6,7].every((item => item > 0)); //true - devuelve un booleano que indica que cada elemento de la matriz tiene como valor el ingresado (en este caso todos los elementos son mayor a cero)
[4,5,6,7].findIndex((item => item === 5)); // 1 -- encuentra el numero del index el valor exactamente igual al ingresado
[4,5,6,7].reduce((prev, curr) => prev + curr, 0); // 22 -- va sumando uno  a uno los items del array


// Operador REST || REST operator

// La sintaxis con parametro REST permite que una función acepte un número infinito de argumentos como una matriz


function suma(...numeros){ //parámetros rest
    let total = 0;

    for (const numero of numeros){
        total += numero;
    }

    return total;
 }

 console.log(suma (1,3)); // 4
 console.log(suma (5,10,2,1)); //18

 // Spread operator
 // nos permite copiar todo o parte de una matriz u objeto existente a otra matriz u objeto

const numeros2 = [1, 2, 3, 4];
const lista = [10, 7, ...numeros2];
console.log(lista); // [ 10, 7, 1, 2, 3, 4 ]

//Desustructuración | Destructuring assignment
// esta característica le permite extraer valores de una matriz u objeto y transformarlos en una variable o constante


const usuario = {username: 'Fabian', age: 37};
const {username, age} = usuario;
console.log(username);
console.log(age);

// NPM or YARN
// son administradores de paquetes, donde podemos crear bibliotecas, instalar y administrar bibliotecas dentro de nuestros proyectos

