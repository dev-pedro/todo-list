const formAddTodo = document.querySelector('.form-add-todo')
const inputSearchTodo = document.querySelector('.form-search input')
const todosContainer = document.querySelector('.todos-container')

const insertTodo = event => {
  const inputValue = event.target.add.value.trim()
  if (inputValue.length) {
    const templateLi = `
        <li data-todo="${inputValue}" class="list-group-item d-flex justify-content-between align-items-center">
            <span>${inputValue}</span>
            <i class="far fa-trash-alt delete"></i>
        </li>`

    todosContainer.innerHTML += templateLi
    event.target.reset()
  }
}

const searchTodoOnList = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  const todos = Array.from(todosContainer.children)

  todos.forEach(todo => {
    const shouldBeVisible = todo.textContent
      .toLowerCase()
      .trim()
      .includes(inputValue)
    todo.classList.add(shouldBeVisible ? 'd-flex' : 'hidden')
    todo.classList.remove(shouldBeVisible ? 'hidden' : 'd-flex')
  })
}

const removeTodo = event => {
  const clickedElement = event.target
  const convertedClassList = Array.from(clickedElement.classList)
  const isIconTrashClicked = convertedClassList.includes('delete')

  if (isIconTrashClicked) {
    clickedElement.parentElement.remove()
  }
}

const addTodo = event => {
  event.preventDefault()
  insertTodo(event)
}

const searchTodo = event => {
  searchTodoOnList(event)
}

formAddTodo.addEventListener('submit', addTodo)
todosContainer.addEventListener('click', removeTodo)
inputSearchTodo.addEventListener('input', searchTodo)
