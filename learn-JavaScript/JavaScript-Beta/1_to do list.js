document.addEventListener('DOMContentLoaded', () => {
  const todoForm = document.getElementById('todoForm');
  const todoInput = document.getElementById('todoInput');
  const todoList = document.getElementById('todoList');

  todoForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskText = todoInput.value.trim();
    if (taskText === '') {
      alert('할 일을 적어주세요');
      return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '제거';
    deleteButton.className = 'delete-btn';
    deleteButton.addEventListener('click', function () {
      todoList.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);

    todoInput.value = '';
  });
});
