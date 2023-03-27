/*Напишите функцию,
 которая принимает в качестве аргументов строку и объект, 
а затем проверяет, 
есть ли у переданного объекта свойство с данным именем.
 Функция должна возвращать true или false.*/
const human2 = {
    name: 'Вася',
    surname: 'Пупкин'
};

const man2 = Object.create(human2);

man2.ownName = "Петя";
man2.ownSurname = "Летов";

function nameSearch(keys, object){
    console.log(keys in object);
}
nameSearch("name", human2);
nameSearch("ownName1", man2);