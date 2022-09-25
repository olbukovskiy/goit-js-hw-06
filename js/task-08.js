// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Обработка отправки формы form.login-form должна быть по событию submit.
// При отправке формы страница не должна перезагружаться.
// Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
// что все поля должны быть заполнены.
// // Если пользователь заполнил все поля и отправил форму, собери значения полей
// в обьект, где имя поля будет именем свойства, а значение поля - значением свойства.
// Для доступа к элементам формы используй свойство elements.
// // Выведи обьект с введенными данными в консоль и очисти значения полей
// формы методом reset.

const formTargeter = document.querySelector(".login-form");

const formSubmitHandler = function (event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value && password.value) {
    console.log({
      [email.name]: email.value,
      [password.name]: password.value,
    });
  } else if (!email.value || !password.value) {
    alert("Увага! Всі поля повинні бути заповнені!");
  }

  event.currentTarget.reset();
};

formTargeter.addEventListener("submit", formSubmitHandler);
