// Напиши скрипт который:
// 1. Посчитает и выведет в консоль количество категорий в `ul#categories`, то есть элементов `li.item`.
// 2. Для каждого элемента `li.item` в списке `ul#categories`, найдет и выведет в консоль текст заголовка элемента (тега `<h2>`) и количество элементов в категории (всех вложенных в него `<li>`).

const categories = document.querySelectorAll('#categories .item');
const titles = document.querySelectorAll('.item h2');
const elements = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categories.length}`);

titles.forEach((alias, index) => {
  console.log(`Category: ${alias.textContent}`);
  console.log(`Elements: ${elements[index].children.length}`);
});
