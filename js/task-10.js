// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция.При нажатии на кнопку
// Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число.
//  Функция создает столько < div >, сколько указано в amount и добавляет их
//  в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй
// готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes,
//  тем самым удаляя все созданные элементы.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector("#boxes");
const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const valueArea = controls.querySelector('[type="number"]');

// const createBoxes = function (amount) {
//   const boxParams = {
//     width: 30,
//     height: 30,
//   };
//   let newArray = [];
//   let newMarkup = [];

//   for (let i = 0; i < amount; i += 1) {
//     newArray.push(i);
//   }

//   newMarkup = newArray.map(() => {
//     const box = document.createElement("div");
//     const boxColor = getRandomHexColor();

//     box.style.height = `${boxParams.height}px`;
//     box.style.width = `${boxParams.width}px`;
//     box.style.backgroundColor = boxColor;
//     boxParams.width += 10;
//     boxParams.height += 10;
//     return box;
//   });

//   return boxes.append(...newMarkup);
// };

const createBoxes = function (amount) {
  const boxParams = {
    width: 30,
    height: 30,
  };

  let newArray = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const boxColor = getRandomHexColor();

    box.style.height = `${boxParams.height}px`;
    box.style.width = `${boxParams.width}px`;
    box.style.backgroundColor = boxColor;
    boxParams.width += 10;
    boxParams.height += 10;

    newArray.push(box);
  }
  return boxes.append(...newArray);
};

const onCreateBoxes = function () {
  let amount = valueArea.value;
  return createBoxes(amount);
}

const onDestroyBoxes = function () {
  boxes.innerHTML = "";
  valueArea.value = "";
};

createBtn.addEventListener('click', onCreateBoxes);
destroyBtn.addEventListener("click", onDestroyBoxes);
