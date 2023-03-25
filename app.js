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

const removeTodo = event => {
  const clickedElement = event.target
  const convertedClassList = Array.from(clickedElement.classList)
  const isIconTrashClicked = convertedClassList.includes('delete')

  if (isIconTrashClicked) {
    clickedElement.parentElement.remove()
  }
}

const searchTodoOnList = event => {
  const inputValue = event.target.value.trim().toLowerCase()
  Array.from(todosContainer.children)
    .filter(todo => !todo.textContent.toLocaleLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('d-flex')
      todo.classList.add('hidden')
    })
  Array.from(todosContainer.children)
    .filter(todo => todo.textContent.toLocaleLowerCase().includes(inputValue))
    .forEach(todo => {
      todo.classList.remove('hidden')
      todo.classList.add('d-flex')
    })
}

const eventsSubmit = event => {
  event.preventDefault()
  insertTodo(event)
}

const eventTodosContainer = event => {
  removeTodo(event)
}

const eventInputSearchTodo = event => {
  searchTodoOnList(event)
}

formAddTodo.addEventListener('submit', eventsSubmit)
todosContainer.addEventListener('click', eventTodosContainer)
inputSearchTodo.addEventListener('input', eventInputSearchTodo)
