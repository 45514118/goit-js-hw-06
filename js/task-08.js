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
// 1. Обработка отправки формы `form.login-form` должна быть по событию `submit`.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи `alert` с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство `elements`.
// 5. Выведи обьект с введенными данными в консоль и очисти значения полей формы методом `reset`.

const submitButton = document.querySelector('button');
const loginForm = document.querySelector('.login-form');
let inputValues = {};
loginForm.addEventListener('submit', checkForm);
function checkForm(event) {
  event.preventDefault();
  if (
    event.currentTarget.elements[0].value === '' ||
    event.currentTarget.elements[1].value === ''
  ) {
    alert('Все поля должны быть заполнены');
  } else {
    const formData = new FormData(event.currentTarget);
    formData.forEach((value, name) => {
      inputValues[name] = value;
    });
    console.log(inputValues);
    loginForm.reset();
  }
}
