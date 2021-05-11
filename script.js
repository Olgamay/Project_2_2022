let nameDelo = document.querySelector('.name');
let button = document.querySelector('.plus');
let todo = document.querySelector('todo');
// переменная в которую сохранять значение
let todoList = [];
// указываем что введенное значение будет являться массивом

// Добавляем обработчик событий
button.addEventListener('click', function() {
  let newnameDelo = nameDelo.value;
  todoList.push(newnameDelo);
  displayDelos();

});

// вводим функцию, которая будет перебирать массив todoList
function displayDelos() {
  let displayDelos = '';
  todoList.forEach(function(item, i) {
    displayDelos += item;
  })
}






// document.getElementById('.dobav_2').click => () {
  
//   let surnameValue = getElementById('in').value;
//   let temp = {};
//     temp.todo = surnameValue;
//   var i = todoList.length;
//   todoList[i] = temp;
//   console.log('todoList');
//   };
  // let newElement = document.createElement('li');
  // newElement.innerText = nameField;
  // let result = document.querySelector('.input');
  // result.Element.appendChild(newElement);
  // const buttonDelete = document.querySelectorAll('.plus_input');
  // buttonDelete.forEach((item) => {
  
  // value=это значение введенное в поле задач;
  // записываем значение введенное в поле пользователем;
  // console.log(surnameValue);
// });

// 
