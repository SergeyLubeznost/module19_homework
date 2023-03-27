/*Напишите функцию, которая принимает в качестве аргумента объект 
и выводит в консоль все ключи и значения только собственных свойств.
 Данная функция не должна возвращать значение.*/
 
 const human = {
    name: 'Вася',
    surname: 'Пупкин'
};

const man = Object.create(human);

man.ownName = "Петя";
man.ownSurname = "Летов";

function returnKey () {
for (let key in man) {

    if (man.hasOwnProperty(key)) {

        console.log(key);
    }   
}
}

returnKey()

