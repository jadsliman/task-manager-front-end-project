let entering = document.querySelector(".entering .container .enter-task");
let create = document.querySelector(".create");
let del = [];
let dtasks = document.querySelector(".tasks .container");
let a = 1, numberOfTasks = 0, n = 1;
// localStorage.clear();
if (localStorage.length >= 2) {
    numberOfTasks = localStorage.getItem(`Number of tasks`);
    a = localStorage.getItem(`Count`);
    for (let i = 1; i <= numberOfTasks; i++) {
        let x = 0;
        for (let j = n; j <= a; j++) {
            if (localStorage.getItem(`task ${j}`) != null) {
                x = j;
                n = j + 1;
                break;
            }
            else {
                del.push(null);
            }
        }
        addTask(localStorage.getItem(`task ${x}`));
    }
    a++;
}

create.addEventListener("click", () => {
    if (entering.value !== "") {
        addTask(entering.value);
        numberOfTasks++;
        localStorage.setItem(`Number of tasks`, numberOfTasks);
        localStorage.setItem(`Count`, a);
        localStorage.setItem(`task ${a++}`, entering.value);
        entering.value = null;
    }
})

function addTask(taskt) {
    let task = document.createElement("div");
    task.className = "task";
    task.innerHTML = `<p class="task-title">${taskt}</p>
      <input type="submit" value="Delete" class="delete">`;
    dtasks.append(task);
    del.push(task.lastElementChild);
    task.lastElementChild.addEventListener("click", () => {
        task.remove();
        localStorage.removeItem(`task ${del.indexOf(task.lastElementChild) + 1}`);
        numberOfTasks--;
        localStorage.setItem(`Number of tasks`, numberOfTasks);
    })
}

