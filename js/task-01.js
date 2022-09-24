// Напиши скрипт который:

// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
// Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка
// элемента(тега < h2 >) и количество элементов в категории(всех вложенных в него < li >).
// В результате, в консоли будут выведены такие сообщения.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector("#categories");
const categoriesListItems = categories.querySelectorAll(".item");
const subcategoryListHeadings = categories.querySelectorAll(".item h2");

console.log("Number of categories: ", categoriesListItems.length);


for (let i = 0; i < subcategoryListHeadings.length; i += 1) {
  const subcategoryListItems = categoriesListItems[i].querySelectorAll("ul li");

  console.log("Category: ", subcategoryListHeadings[i].textContent);
  console.log("Elements: ", subcategoryListItems.length);
}


// categoriesListItems.forEach((element) => {
//   const listElement = element.querySelector(".item h2");
//   const list = element.querySelector(".item ul");
//   const listItems = list.querySelectorAll("li");

//   console.log("Category: ", listElement.textContent);
//   console.log("Elements: ", listItems.length);
// });
