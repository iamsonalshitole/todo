var todos=[];
function addTodo() {
   let todo=document.getElementById('add-task').value;
   todos.unshift(todo);
   render(); 
}
function render()
{
    let todocontainer=document.getElementById('to-do-container');
    let htmlString="";
    todos.forEach((item)=>{
        htmlString=htmlString+`<div class='todo-list'><span>${item}</span>
        <button type="button" onclick="deletetodo('${item}')" name="button"> Delete</button></div>`;

    });
    todocontainer.innerHTML=htmlString;
}
function deletetodo(todo) {
    let newtodo=[];
    todos.forEach((item)=>{
        if(item!==todo){
            newtodo.push(item);
        }
    });
    todos=newtodo;
    render();
    
}