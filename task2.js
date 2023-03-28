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
  return  keys in object;
}
console.log(nameSearch("name", human2));
console.log(nameSearch("ownName1", man2));