let newTaskName = document.querySelector('.name');
let button = document.querySelector('.dobav');
let todo = document.querySelector('todo');
let del = document.querySelector('.crest_input');
let sortFlag = true;

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
      newTaskName.value = "";
});



function addRemoveListener(newElement) {
    todoList =todoList.filter((item) => {
        return item !== newElement.innerText
    });
    displayTasks(todoList);
}

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
            addRemoveListener(newElement);
        }); 
    });
}

let sortButton = document.querySelector('.sort-button');

sortButton.addEventListener('mousedown', (event) => {
    if (event == true) {
     event.target.setAttribute("src", "images/sortdown.svg")   
    } else {
        event.target.setAttribute("src", "images/sortup.svg")
    }
});


// let downButton = document.createElement('img');
      
// downButton.classList.add("crest_input");
// downButton.setAttribute("src", "images/sortdown.svg");

// let downElement = document.createElement('div')

//         downButton.addEventListener('click', function() {
//             addRemoveListener(downElement);
//         }); 

 sortButton.addEventListener ('click', function () {
    sortTasks();
})
 

function sortTasks () {
    console.log(sortFlag, 'common');
    if (sortFlag === true) {
        todoList.sort((b, a) => {
             if(a > b) {
                 return -1
            }
        });
        sortFlag = false;
        console.log(sortFlag, 'up');
    } else {
        todoList.sort((b, a) => {
            if(a < b) {
                return -1;
            };
        });
        sortFlag = true;
        console.log(sortFlag, 'down');
    }     
    displayTasks(todoList);
}