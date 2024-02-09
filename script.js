const tasks = [
  {title: "Comprar processador", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Configurar rede Wifi", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
];

function renderElements(tasks){
  const li = document.querySelector('ul')
  li.innerHTML = ''
  for (let i = 0; i < tasks.length; i++){
    let itemList = createTaskItem(tasks[i])
    li.appendChild(itemList)
  }
}

function createTaskItem(taskList){
  const li = document.createElement('li')
  const div = document.createElement('div')
  const span = document.createElement('span')
  const p = document.createElement('p')
  const deleteBtn = document.createElement('button')
  li.classList.add("task__item")
  div.classList.add("task-info__container")
  span.classList.add("task-type")
  if (taskList.type == 'Normal' ){
  span.classList.add('span-normal')  
  } else if (taskList.type == 'Importante'){
  span.classList.add('span-important')
  } else if (taskList.type == 'Urgente'){
    span.classList.add('span-urgent') 
  }
  p.innerText = taskList.title
  deleteBtn.classList.add("task__button--remove-task")
  li.append(div, deleteBtn)
  div.append(span, p)
  deleteBtn.addEventListener("click", function() {
  const index = tasks.indexOf(taskList);
  tasks.splice(index, 1);
  renderElements(tasks);
})

return li

}

renderElements(tasks)

const button = document.getElementsByClassName("form__button--add-task");
const newTask = document.querySelector('#input_title')
const priority = document.querySelector('select')
const btnTask = document.querySelector('.form__button--add-task');
const news = [{title: '' , type:''}];

btnTask.onclick = function(event) {
  event.preventDefault();
  title1 = newTask.value
  title2 = priority.value
  tasks.push({ title: title1, type: title2 });
  renderElements(tasks)  
};

