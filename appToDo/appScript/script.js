'use strict';
//Получение элементов со страницы
const toDoText = document.querySelector('.todo__text'),
      toDoAdd = document.querySelector('.todo__add'),
      toDoOption = document.querySelector('.todo__options'),
      toDoItems = document.querySelector('.todo__items');
let listTask = null;
      
//Создание динамически появляющегося элемента списка
class ItemTask {
    constructor(nameTask){
        this.nameTask = nameTask;
        this.render();
    }
    render(){
        listTask = document.createElement('li');
        listTask.setAttribute('state', 'active')
        listTask.innerHTML = `
            <div class="wrapper" style="display: flex">
                <p>${this.nameTask}</p>
                <button class="btn completed hide">Завершить</button>
                <button class="btn delited hide">Удалить</button>
            </div>
        `;
        toDoItems.append(listTask);
    }

}

//Добавление элемента на страницу по нажатию кнопки

toDoAdd.addEventListener('click', () => {
    const toDoTextValue = toDoText.value;
    
    if(toDoTextValue != ''){
        //Содание нового экземпляра элемента списка
        new ItemTask(toDoTextValue);
       
        //Покажем кнопки удаления и завершения по наведению мыши на элемент списка
        document.addEventListener('mouseover', (e) => {
            if((e.target.className === 'wrapper') || (e.target.classList[0] === 'btn')){
                const child = e.target.children;
                for(let i = 0; i < child.length; i++){
                    if(child[i].classList[0] === 'btn'){
                        child[i].classList.remove('hide');
                        child[i].classList.add('show');
                    } 
                }
            } else {
                const child = document.querySelectorAll('.btn');
                for(let i = 0; i < child.length; i++){
                    child[i].classList.remove('show');
                    child[i].classList.add('hide');
                }
            }
           
        });

         //Получаем все элементы li на странице
            const listTaskArr = document.querySelectorAll('li');
            //перебираем массив элементов задач
            for(let i = 0; i < listTaskArr.length; i++){
                const childlistTaskArr = listTaskArr[i].children[0].children;
                //перебираем всех чилдренов дя каждого элемнта задачи и если это кнопка Удалить либо Завершить
                //назначаем на нее событие, которое будет скрывать элемент задачи, на которм она находится
                for(let key = 0; key < childlistTaskArr.length; key++){
                    if(childlistTaskArr[key].classList[1] === 'completed'){
                        childlistTaskArr[key].addEventListener('click', () => {
                            listTaskArr[i].classList.add('hide');
                            listTaskArr[i].classList.remove('show');
                            //назначим data атрибут каждому удаленному делу по которому будем осуществлять фильтр
                            listTaskArr[i].setAttribute('state', 'completed')
                        });
                    }
                    if(childlistTaskArr[key].classList[1] === 'delited'){
                        childlistTaskArr[key].addEventListener('click', () => {
                            listTaskArr[i].classList.add('hide');
                            listTaskArr[i].classList.remove('show');
                            //назначим data атрибут каждому удаленному делу по которому будем осуществлять фильтр
                            listTaskArr[i].setAttribute('state', 'deleted')
                        });
                    }
                    
                }
            }

            //Покажем скрытые элементы в во кладках завершенные и удаленные

            toDoOption.addEventListener('click', (e) => {
                console.log(e.pointerId)
                if(e.pointerId !== 1){ //проверям что нажимаем на содержимое вкладки
                        if(e.target.value === 'active'){
                            //toDoText.setAttribute('disabled', 'inabled'); // Включаем инпут
                            for(let i = 0; i < listTaskArr.length; i++){
                                if(listTaskArr[i].attributes.state.value === 'active'){
                                    listTaskArr[i].classList.remove('hide');
                                    listTaskArr[i].classList.add('show');

                                    //переименуем название кнопки и навесим на нее новый обработчик события возврата в активные
                                    listTaskArr[i].children[0].children[1].innerText = 'Завершить';

                                    listTaskArr[i].children[0].children[1].addEventListener('click', () => {
                                        listTaskArr[i].setAttribute('state', 'completed');
                                    });

                                    listTaskArr[i].children[0].children[2].addEventListener('click', () => {
                                        listTaskArr[i].setAttribute('state', 'deleted');
                                    });

                                } else {
                                    // Скрываем завершенные и удаленные
                                    listTaskArr[i].classList.remove('show');
                                    listTaskArr[i].classList.add('hide');
                                }
                            }
                        }


                        if(e.target.value === 'completed'){
                           // toDoText.setAttribute('disabled', 'disabled'); // Отключаем инпут
                            for(let i = 0; i < listTaskArr.length; i++){
                                if(listTaskArr[i].attributes.state.value === 'completed'){
                                    listTaskArr[i].classList.remove('hide');
                                    listTaskArr[i].classList.add('show');
                            
                                    //переименуем название кнопки и навесим на нее новый обработчик события возврата в активные
                                    listTaskArr[i].children[0].children[1].innerText = 'Восстановить';

                                    listTaskArr[i].children[0].children[1].addEventListener('click', () => {
                                        listTaskArr[i].setAttribute('state', 'active');
                                    });
                                        
                                } else {
                                    // Скрываем активные и удаленные
                                    listTaskArr[i].classList.remove('show');
                                    listTaskArr[i].classList.add('hide');
                                }
                            }
                        }
                        
                        if(e.target.value === 'deleted'){
                           // toDoText.setAttribute('disabled', 'disabled'); // Отключаем инпут
                            for(let i = 0; i < listTaskArr.length; i++){
                                if(listTaskArr[i].attributes.state.value === 'deleted'){
                                    listTaskArr[i].classList.remove('hide');
                                    listTaskArr[i].classList.add('show');
                                    //переименуем название кнопки и навесим на нее новый обработчик события возврата в активные
                                    listTaskArr[i].children[0].children[1].innerText = 'Восстановить';

                                    listTaskArr[i].children[0].children[1].addEventListener('click', () => {
                                        listTaskArr[i].setAttribute('state', 'active');
                                        //убираем событие которое полностью удаляет элемент со страницы
                                        listTaskArr[i].children[0].children[2].removeEventListener('click', remove)
                                    });

                                    //по нажатию кнопки удалить полностью удаляем элемент со страницы
                                    function remove(){
                                        listTaskArr[i].remove();
                                        console.log('delete');
                                    }
                                    listTaskArr[i].children[0].children[2].addEventListener('click', remove);

                                } else {
                                    // Скрываем активные и завершенные
                                    listTaskArr[i].classList.remove('show');
                                    listTaskArr[i].classList.add('hide');
                                }
                            }
                        }
                }
            })

    }

    
    
});

