function addExercise() {
    var exerciseInput = document.getElementById("exerciseInput");
    var durationInput = document.getElementById("durationInput");

    var exercise = exerciseInput.value.trim();
    var duration = parseInt(durationInput.value.trim());

    if (exercise !== "" && !isNaN(duration) && duration > 0) {
        var exerciseList = document.getElementById("exerciseList");
        var li = document.createElement("li");
        li.textContent = `${exercise}: ${duration} mins`;
        exerciseList.appendChild(li);

        exerciseInput.value = "";
        durationInput.value = "";
    } else {
        alert("Please enter a valid exercise and duration!");
    }
}
