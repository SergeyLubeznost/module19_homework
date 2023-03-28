/*Напишите функцию, которая создает пустой объект, но без прототипа.*/

function emptyObj (){
    const man3 = Object.create(null);
   return man3;
}

console.log(emptyObj());