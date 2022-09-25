// Напиши скрипт, который реагирует на изменение значения input#font-size-control
// (событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeController = document.querySelector("#font-size-control");
const changedTextSize = document.querySelector("#text");

const sizeChangingHandler = function (event) {
  return (changedTextSize.style.fontSize = `${event.currentTarget.value}px`);
};

fontSizeController.addEventListener("input", sizeChangingHandler);
