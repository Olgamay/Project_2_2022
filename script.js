let newTaskName = document.querySelector('.name');
let button = document.querySelector('.dobav');
let todo = document.querySelector('todo');
let del = document.querySelector('.crest_input');
// переменная в которую сохранять значение
let todoList = [];
// указываем что введенное значение будет являться массивом

// Добавляем обработчик событий
button.addEventListener('click', function() {
    let taskName = newTaskName.value;
    // 1. Проверить на пустоту впианного в поле значения
      if(taskName !== '') {
        todoList.push(taskName);
        displayTasks(todoList);
      };
});

// вводим функцию, которая будет перебирать массив todoList
function displayTasks(todoList) {
    // 1. Если массив пустой, то сделать return
    if (todoList.length === 0) {
      return;
    };
    
  // 1. Очистить область для вставки
  let resultElement = document.querySelector('.wrapper');
  resultElement.innerHTML = '';

    todoList.forEach(function(value, index) {
      // 1. Создать элемент li 
      let newElement = document.createElement('div');

      // 2. Вставить в него тест из массива, который мы перебираем 
      newElement.innerText = value;
      resultElement.append(newElement);
      // 2.1 Добавить кнопку удаления

      let newButton = document.createElement('button');
          // 2.1.1 Создать элемент крестик (удаление)
          newButton.innerText =  del;
          // 2.1.2 Вставить крестик внутрь newElement
          newButton.appendTo(newElement);
          
    });
        // 2.1.3 Добавить обработчик события на click для созданного крестика 

        del.addEventListener('click', function() {
          let taskdel = del;
          alert(taskdel);
        //   
        //   if(taskName !== '') {
        //     todoList.push(taskName);
        //     displayTasks(todoList);
        //   };
        // });
    });
  }

  
// todoList = [
//   'Купить квартиру',
//   'Почистить ботинки',
//   'Посмотреть телевизор'
// ] 

  






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
