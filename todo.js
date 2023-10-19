let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

let todos = []

button.addEventListener('click',()=>{
    todos.push(input.value)
    console.log(todos)
    addtodo(input.value)
    input.value=''
})
function addtodo(todo){
   let para = document.createElement('p')
   para.innerText = todo
   todoList.appendChild(para)
   para.addEventListener('click' ,()=>{
    todoList.removeChild(para)
    remove(todo)
   })
    
}

function remove(todo){
    let index = todos.indexOf(todo)
    if(index>-1)
      todos.splice(index,1)
}

