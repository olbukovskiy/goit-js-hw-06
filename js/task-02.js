// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>

// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];

// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const ingredientsAddingFunction = function (ingredients) {
  return ingredients.map((ingredient) => {
    const listItem = document.createElement("li");
    listItem.textContent = ingredient;
    listItem.classList.add("item");
    return listItem;
  })
}

const newMarkup = ingredientsAddingFunction(ingredients);
ingredientsList.append(...newMarkup);
  

// const ingredientsArray = ingredients.map((ingredient) => {
//   const listItem = document.createElement("li");
//   listItem.textContent = ingredient;
//   listItem.classList.add("item");
//   return listItem;
// });

// ingredientsList.append(...ingredientsArray);