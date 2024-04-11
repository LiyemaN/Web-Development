function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskValue = taskInput.value.trim();

    if (taskValue !== "") {
        var taskList = document.getElementById("taskList");
        var li = document.createElement("li");
        li.textContent = taskValue;

        var deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(deleteBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    } else {
        alert("Please enter a task!");
    }
}
