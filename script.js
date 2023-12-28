const inpTodo = document.querySelector('.header__newtodo-text'); // input on create todo

const todoWrapper = document.querySelector('.main__list'); // wrapper todo

const toggleAllActive = document.querySelector('.header__newtodo-label');

const wrapperApplication = document.querySelector('.todoapp');

const getStoredTodos = () => {
  try {
    const storedItem = localStorage.getItem('list');
    const parsedItem = JSON.parse(storedItem);
    return parsedItem || [];
  } catch (err) {
    return [];
  }
}

const getStoredFilter = () => {
  try {
    const storedFilterName = localStorage.getItem('filter');
    return storedFilterName || 'All';
  } catch (err) {
    return 'All';
  }
}

const getStoredId = () => {
  try {
    const storedItem = localStorage.getItem('list');
    const parsedItem = JSON.parse(storedItem);
    return parsedItem[parsedItem.length - 1].id + 1 || 0;
  } catch (err) {
    return 0;
  }
}

const todoList = getStoredTodos(); // todo list

let filterName = getStoredFilter(); // todo filter

let id = getStoredId(); // identificator todo

const memoryLocalStorage = (key, data) => localStorage.setItem(key, JSON.stringify(data));

if (filterName === 'Active') {
  renderTodo(todoList.filter(item => item.isActive));
} else if (filterName === 'Complete') {
  renderTodo(todoList.filter(item => !item.isActive));
} else {
  renderTodo(todoList);
}

function renderFooter() {

  if (document.querySelector('footer')) {
    document.querySelector('footer').remove(); // cleared
  }

  if (todoList.length) {
    const footerElem = document.createElement('footer');

    footerElem.className = 'footer';

    footerElem.innerHTML = `
				<p class="footer__count">item${todoList.filter(item => item.isActive).length > 1 ? "s" : ""} active ${todoList.filter(item => item.isActive).length}</p>
				<div class="footer__filter">
					<button class="footer__filter-all ${filterName === 'All' ? 'active' : ''} btn">All</button>
					<button class="footer__filter-active ${filterName === 'Active' ? 'active' : ''} btn">Active</button>
					<button class="footer__filter-completed ${filterName === 'Complete' ? 'active' : ''} btn">Completed</button>
				</div>
				<button class="footer__clear btn">Clear completed</button>	
		`;

    wrapperApplication.appendChild(footerElem);

    const btn = document.querySelector('.footer__clear');

    if (todoList.filter(item => !item.isActive).length > 0) {
      btn.style.opacity = '1';
    }

    return true;
  } else {
    return false;
  }
}

function renderTodo(todoArr) {

  const onEventFilter = renderFooter();

  if (todoList.filter(item => item.isActive).length > 0) {
    toggleAllActive.style.opacity = '0.5';
  }
  else if (todoList.length === 0) {
    toggleAllActive.style.opacity = '0';
  }
  else {
    toggleAllActive.style.opacity = '1';
  }

  todoWrapper.innerHTML = ''; // clear list

  todoArr.forEach(elem => {

    const todoContent = document.createElement('li');

    todoContent.classList = "main__list-item";

    todoContent.innerHTML = `
      <div class="main__list-wrapper">
          <input class="main__list-completed" type="checkbox" id="toggle" />
 
          ${(function (activeFlag) {
        return activeFlag ? `
              <label class="main__list-off" for="toggle">
                <img class="main__icon-off" src="no_completed.svg" alt="not pressed" key=${elem.id} />
              </label>
            ` : `
              <label class="main__list-on" for="toggle">
                <img class="main__icon-on" src="completed.svg" alt="pressed" key=${elem.id} />
              </label>
            `
      }(elem.isActive))}
			
		${(function (editing) {
        return editing ? `<input class="main__list-text" value=${elem.todoText} id="main__list-text" key=${elem.id} autofocus=""/>` :
          `<label class="main__list-todo" for="main__list-text" key=${elem.id} style=${(function (active) {
            return !active ? "opacity:0.5;text-decoration:line-through" : "opacity:1;text-decoration:none"
          }(elem.isActive))} >${elem.todoText}</label>`
      }(elem.reduxion))}
          
          <button class="main__list-clear btn" key=${elem.id} >×</button>
      </div>
    `;

    todoWrapper.prepend(todoContent);

  });

  const btnClearArray = document.querySelectorAll('.main__list-clear'); // clear

  btnClearArray.forEach(item => {

    item.addEventListener('click', (e) => {

      const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

      todoList.splice(indexElem, 1);

      renderTodo(todoList);

    });
  });

  const toggleActive = document.querySelectorAll('img'); // toggle active flag

  toggleActive.forEach(item => {
    item.addEventListener('click', (e) => {

      const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

      todoList[indexElem].isActive = !todoList[indexElem].isActive;

      if (filterName === 'All') {
        renderTodo(todoList);
      }
      else if (filterName === 'Complete') {
        renderTodo(todoList.filter(item => !item.isActive));
      }
      else {
        renderTodo(todoList.filter(item => item.isActive));
      }
    });
  });

  const labelText = document.querySelectorAll('.main__list-todo'); // open reduxtion todo

  labelText.forEach(item => {
    item.addEventListener('dblclick', (e) => {
      const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

      todoList[indexElem].reduxion = true;

      renderTodo(todoList);
    });
  });

  const inputText = document.querySelectorAll('.main__list-text'); // close reduxtion todo

  inputText.forEach(item => {
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

        todoList[indexElem].reduxion = false;

        todoList[indexElem].todoText = e.target.value.trim();

        renderTodo(todoList);
      }
      if (e.key === 'Escape') {
        const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

        todoList[indexElem].reduxion = false;

        renderTodo(todoList);
      }
    });

    item.addEventListener('blur', (e) => {
      const indexElem = todoList.findIndex(item => item.id === +e.target.attributes.key.nodeValue);

      todoList[indexElem].reduxion = false;

      renderTodo(todoList);
    });
  });

  if (onEventFilter) { // button filter listen
    const btnAll = document.querySelector('.footer__filter-all');
    const btnActive = document.querySelector('.footer__filter-active');
    const btnComplete = document.querySelector('.footer__filter-completed');
    const btnClearCompleted = document.querySelector('.footer__clear');

    btnAll.addEventListener('click', () => {
      filterName = 'All';
      renderTodo(todoList);
    });

    btnActive.addEventListener('click', () => {
      filterName = 'Active';
      renderTodo(todoList.filter(item => item.isActive));
    });

    btnComplete.addEventListener('click', () => {
      filterName = 'Complete';
      renderTodo(todoList.filter(item => !item.isActive));
    });

    btnClearCompleted.addEventListener('click', () => {
      const deleteComponentArr = () => {
        const index = todoList.findIndex(item => !item.isActive);

        if (index > -1) {
          todoList.splice(index, 1);
          deleteComponentArr();
        }
      }

      deleteComponentArr();

      if(filterName === 'All') {
        renderTodo(todoList);
      }
      else if(filterName === 'Active'){
        renderTodo(todoList.filter(item => item.isActive));
      } 
      else {
        renderTodo(todoList.filter(item => !item.isActive));
      }
    });

  }

  memoryLocalStorage('list', todoList);
  localStorage.setItem('filter', filterName);
}

inpTodo.addEventListener('change', (e) => {
  if (e.target.value.trim() !== '') {
    todoList.push({
      todoText: e.target.value.trim(),
      id: id++,
      isActive: true,
      reduxion: false
    });
    e.target.value = '';
    if(filterName === 'All') {
      renderTodo(todoList);
    }
    else if(filterName === 'Active'){
      renderTodo(todoList.filter(item => item.isActive));
    } 
    else {
      renderTodo(todoList.filter(item => !item.isActive));
    }
    
  } else {
    e.target.value = '';
  }

});

toggleAllActive.addEventListener('click', () => {
  let flagActive = true;

  if (todoList.filter(item => item.isActive).length > 0) {
    flagActive = !flagActive;
  }
  todoList.forEach((item, index) => {
    todoList[index].isActive = flagActive;
  });
  renderTodo(todoList);
});

