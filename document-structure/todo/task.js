taskText = document.getElementById('task__input');
btnAdd = document.getElementById('tasks__add');

btnAdd.addEventListener('click', ()=>{
    event.preventDefault();
    let listParent = document.querySelector('.tasks__list');

    let divTask = document.createElement('div');
    divTask.className = "task";
    listParent.append(divTask);

    let divTaskTitle = document.createElement('div');
    divTaskTitle.className = "task__title";
    divTaskTitle.textContent = taskText.value;
    divTask.append(divTaskTitle);

    let aHr = document.createElement('a');
    aHr.href = "#";
    aHr.className = "task__remove";
    aHr.innerHTML  = `&times;`;
    divTask.append(aHr);

    document.forms[0].reset();

    aHr.addEventListener('click', ()=>{
        aHr.parentNode.remove()
    })
});