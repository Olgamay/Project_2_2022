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
    // 1. Очистить область для вставки
  let resultElement = document.querySelector('.wrapper');
   resultElement.innerHTML = '';
     // 1. Если массив пустой, то сделать return
    if (todoList.length === 0) {
      return;
    };
    
  
 

    todoList.forEach(function(value, index) {
      // 1. Создать элемент li 
      let newElement = document.createElement('div');

      // 2. Вставить в него тест из массива, который мы перебираем 
      newElement.innerText = value;
      resultElement.append(newElement);
      // 2.1 Добавить кнопку удаления

      let newButton = document.createElement('img');
          // 2.1.1 Создать элемент крестик (удаление)
          newButton.classList.add("crest_input");
          newButton.setAttribute("src", "images/crestwhite.svg")
          // 2.1.2 Вставить крестик внутрь newElement
          newElement.append(newButton);
          newButton.addEventListener('click', function() {
            todoList =todoList.filter((item) => {
              return item !== newElement.innerText
            });
            displayTasks(todoList);
        }); 
    });
  }
