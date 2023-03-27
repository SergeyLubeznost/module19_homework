/*Напишите функцию, которая создает пустой объект, но без прототипа.*/

function emptyObj (){
    const man3 = Object.create(null);
    console.log(man3);
}

emptyObj()