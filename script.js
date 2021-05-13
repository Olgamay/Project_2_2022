let newTaskName = document.querySelector('.name');
let button = document.querySelector('.dobav');
let todo = document.querySelector('todo');
// переменная в которую сохранять значение
let todoList = [];
// указываем что введенное значение будет являться массивом

// Добавляем обработчик событий
button.addEventListener('click', function() {
  let taskName = newTaskName.value;
  // 1. Проверить на пустоту впианного в поле значения
  if(taskName !== null) {
  todoList.push(taskName);
  displayTasks(todoList);
  };
});

// вводим функцию, которая будет перебирать массив todoList
function displayTasks(todoList) {
  // 1. Если массив пустой, то сделать return
  if (taskName === null) {
    let result = "Вы ввели пустое значение";
    return result;
  };
    
  todoList.forEach(function(item, i) {
    // 1. Создать элемент li 
    let newElement = document.createElement('div');

    // 2. Вставить в него тест из массива, который мы перебираем 
    newElement.innerText = 'taskName';
    // 3. Добавить внутрь элемента li крестик для дальнейшего удаления

    // 4. вывести элемент внутрь списка .todo
    let resultElement = document.querySelector('.wrapper');
    resultElement.appendChild(newElement);
  });
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
