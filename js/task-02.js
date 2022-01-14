// Напиши скрипт, который для каждого элемента массива `ingredients`:
// 1. Создаст отдельный элемент `<li>`. Обзательно используй метод `document.createElement()`.
// 2. Добавит название ингредиента как его текстовое содержимое.
// 3. Добавит элементу класс `item`.
// 4. После чего вставит все `<li>` за одну операцию в список `ul.ingredients`.

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const list = document.querySelector('#ingredients');
const fillList = ingredients => {
  return ingredients.map(ingredient => {
    const filler = document.createElement('li');
    filler.textContent = ingredient;
    filler.classList.add('item');
    return filler;
  });
};
const fillers = fillList(ingredients);
list.append(...fillers);
console.log(list);
