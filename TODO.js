//Store instance can be used to get the store data and do store related data operations
// the store can only save latest state and original state of application

var todoTasks = store.getOriginalData();
createTodolist(todoTasks);

//Todo functions

function createTodolist(todoTasksList){
    $("#toDolist").empty()
    for(let i = 0; i < todoTasksList.length; i++){
      if(todoTasksList[i].state == "open")  {
        $("#toDolist").prepend('<li>'+todoTasksList[i].taskName+'<br><span> <button onclick="markDone('+i+')">markDone</button> </span> &nbsp;&nbsp;&nbsp;<span> <button onclick="removeTask('+i+')">removeTask</button> </span><br><span>'+todoTasksList[i].state+'</span> </li><br>');
      }else{
        $("#toDolist").prepend('<li>'+todoTasksList[i].taskName+'<br><span><button onclick="markUndone('+i+')"> markUnDone</button> </span>&nbsp;&nbsp;&nbsp;<span> <button onclick="removeTask('+i+')">removeTask</button> </span><br> <span>'+todoTasksList[i].state+'</span>  </li><br>');
      }
    }
}

function addTodoTask(){
  let radioValue;
  let taskName;
  radioValue = $("input[name='state']:checked").val();
  taskName = $("#name").val();

  $("#name").val('');


  let newtask = {
      "taskName":taskName,
      "state":radioValue
  }
  todoTasks.push(newtask)
  createTodolist(todoTasks);
}

function markDone(index){
  todoTasks[index]["state"] = "closed";
  createTodolist(todoTasks);

}

function markUndone(index){
  todoTasks[index]["state"] = "open";
  createTodolist(todoTasks);
}

function removeTask(index){
  todoTasks = todoTasks.filter(obj => obj.taskName != todoTasks[index].taskName);
  createTodolist(todoTasks);
}

// Store related functions

function saveLatestState(){
  store.setLatestData(todoTasks);
  createTodolist(todoTasks);

}

function getLatestSavedState(){
  todoTasks = store.getLatestSavedData();
  createTodolist(todoTasks);

}

function renderOriginalData(){
  todoTasks = store.getOriginalData();
  createTodolist(todoTasks);

}
