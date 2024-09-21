document.addEventListener("DOMContentLoaded", () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const ul = document.getElementById("toDoList");

    tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;

        // Create delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-xmark';
        deleteIcon.addEventListener('click', () => {
            li.remove();
            removeTaskFromLocalStorage(task); //Delete on LocalStorage
        });

        li.appendChild(deleteIcon); // Append icon to the list item
        ul.appendChild(li);
    });
});


const removeTaskFromLocalStorage = (taskToRemove) => {
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks = tasks.filter(task => task !== taskToRemove);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

document.getElementById("addButton").addEventListener("click", () => {
    const input = document.getElementById("input");
    const itemText = input.value.trim(); // Trim whitespace

    if (itemText) {
        const li = document.createElement('li');
        li.textContent = itemText;

        //Add localstorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(itemText);
        localStorage.setItem('tasks', JSON.stringify(tasks));


        // Create delete icon
        const deleteIcon = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-xmark';
        deleteIcon.addEventListener('click', () => {
            li.remove();
            removeTaskFromLocalStorage(li);
        });

        li.appendChild(deleteIcon); // Append icon to the list item
        const ul = document.getElementById("toDoList");
        ul.appendChild(li);
        input.value = ''; // Clear input field
    }else{
        alert("Lütfen birşeyler yazınız !");
    }
});


