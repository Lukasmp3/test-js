//
// Predefined state
//
const initialState = {
    todos: [
        { text: 'Hi', completed: true },
        { text: 'Hello', completed: false },
        { text: 'Hi there!', completed: true },
    ],
    filter: 'all'
};

//
// Class containing state
//
class State {

    constructor(initialTodos, initialFilter) {
        this._todos = initialTodos;
        this._filter = initialFilter;
    }

    addTodo(todo) {
        return this._todos.push(todo);
    }

    setFilter(filter) {
        this._filter = filter;
    }

    get todos() {
        return this._todos.filter((todo) => {
            if (this._filter === 'all') {
                return true;
            } else if (this._filter === 'completed') {
                return todo.completed === true;
            } else if (this._filter === 'active') {
                return todo.completed === false;
            }
        });
    }

    set todos(todos) {
        this._todos = todos;
    }

    removeTodoByText(text) {
        this._todos = this._todos.filter(todo => {
            return todo.text.trim() !== text.trim();
        })
    }
}

const state = new State(initialState.todos, initialState.filter);

//
// Prepare todos html
//

/*
    Template example:
    <li>
        <input class="toggle" type="checkbox" checked>
        <label>aaa</label>
        <button class="destroy"></button>
    </li>
*/

function createHtmlWithCreateElement(todos, targetEl) {
    targetEl.innerHTML = ''


    for (const todo of todos) {
        // druhy zpusob
        // zde musi byt let, proroze i++ meni tu promenou
        //for (let i = 0; i < todos.length; i++) {
        //const todo = todos[i];

        // Prepare elements
        const inputEl = document.createElement('input');
        inputEl.classList.add('toggle');
        inputEl.type = 'checkbox';
        inputEl.checked = todo.completed;

        const labelEl = document.createElement('label');
        labelEl.innerHTML = todo.text;

        const buttonEl = document.createElement('button');
        buttonEl.classList.add('destroy');

        // Append these elements to the todo wrapper element
        const todoEl = document.createElement('li');
        todoEl.appendChild(inputEl);
        todoEl.appendChild(labelEl);
        todoEl.appendChild(buttonEl);

        // Append todo to the page
        targetEl.appendChild(todoEl);
    }

    destroyButtonListeners()
}

function createHtmlWithStrings(todos, targetEl) {
    targetEl.innerHTML = '';

    const todosHtmlArray = todos.map(function (todo) {
        const html = `
                <li> 
                    <input class="toggle" type="checkbox" ${todo.completed ? 'checked' : ''} >
                    <label> ${todo.text} </label>
                    <button class="destroy"></button>
                </li>
                `;
        return html;
    })

    const todosHtml = todosHtmlArray.join('');
    targetEl.innerHTML = todosHtml;
    destroyButtonListeners();
}

//
// Append todos html into the page
//
const todoListEl = document.querySelector('.todo-list')
createHtmlWithCreateElement(state.todos, todoListEl);
//createHtmlWithStrings(state.todos, todoListEl);

//
// Handle main input
//
const inputEl = document.querySelector('.new-todo');

inputEl.addEventListener('keyup', (event) => {
    if (event.key !== "Enter") {
        return;
    }

    // Update app state
    const newTodo = {
        text: inputEl.value,
        completed: false
    };
    state.addTodo(newTodo);

    // Update html
    inputEl.value = '';
    createHtmlWithCreateElement(state.todos, todoListEl);
})

//
// Prototype expansion
//
Object.prototype.addTimestamp = function () {
    this.timestamp = Date.now();
}

//
// Handle filters
//
const filters = {
    all: document.querySelector('#filter-all'),
    active: document.querySelector('#filter-active'),
    completed: document.querySelector('#filter-completed')
};

// Tady muze byt const, protoze to filterName pokuzde deklarujeme nove, neprepisujeme
// object desctructering
//   (misto itrovani pres 'filter of Object.entries(filters)' a pak volani filterEl=filter[1])
for (const [filterName, filterEl] of Object.entries(filters)) {

    // zde staci jen volat zavorkami, bez parametru
    filterEl.addEventListener('click', () => {
        filtersClick(filterName);
    });
}


// (function (capturedFilterName) {
//     // zde staci jen volat zavorkami, bez parametru
//     filterEl.addEventListener('click', () => {
//         filtersClick(capturedFilterName);
//     });
// }(filterName));
// }

function filtersClick(newFilterType) {
    // Remove 'selected' class on all filter buttons
    // At the beggining the 'selected' one is 'filter-all' by default
    for (const filterEl of Object.values(filters)) {
        //console.log(filterEl.classList)
        filterEl.classList.remove('selected');
    }

    // Add 'selected' class to clicked filter button
    filters[newFilterType].classList.add('selected');

    // Update state
    state.setFilter(newFilterType);

    // Render todos view
    createHtmlWithCreateElement(state.todos, todoListEl);
}

// Remove todo button
function destroyButtonListeners() {
    for (const liEl of todoListEl.children) {
        //console.log(liEl);
        const destroyEl = liEl.querySelector('button[class=destroy]')
        //console.log(destroyEl)
        const todoText = liEl.querySelector('label').textContent.trim();
        //console.log(todoText)
        destroyEl.addEventListener('click', () => {
            console.log('Destroy todo: ' + todoText);
            state.removeTodoByText(todoText);
            createHtmlWithCreateElement(state.todos, todoListEl);
        })
    }
}


// Checking/unchecking of todo
// podobne jako to remove todo button asi


// Clear completed button
const clearCompletedEl = document.querySelector('button[class=clear-completed]');
clearCompletedEl.addEventListener('click', () => {
    state.todos = state.todos.filter(todo => {
        return (todo.completed === true);
    })
    // Render todos view
    createHtmlWithCreateElement(state.todos, todoListEl);
})

