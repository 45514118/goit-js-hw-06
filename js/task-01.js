const categories = document.querySelectorAll('#categories .item');
const titles = document.querySelectorAll('.item h2');
const elements = document.querySelectorAll('.item ul');

console.log(`Number of categories: ${categories.length}`);

titles.forEach((alias, index) => {
  console.log(`Category: ${alias.textContent}`);
  console.log(`Elements: ${elements[index].children.length}`);
});
