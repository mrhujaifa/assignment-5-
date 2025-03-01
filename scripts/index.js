let completedAllBtn = document.querySelectorAll(".completedAllBtn");

// all compeleted Button loop
for (let i = 0; i < completedAllBtn.length; i++) {
  let allBtn = completedAllBtn[i];

  // all compeleted button event
  allBtn.addEventListener("click", function () {
    let assignedTask = document.getElementById("assignedTask");
    let convartedAssignedTask = parseInt(assignedTask.innerText);

    let mainCountTaskCompleted = document.getElementById(
      "mainCountTaskCompleted"
    );
    let convartedMainCountTaskCompleted = parseInt(
      mainCountTaskCompleted.innerText
    );

    // Button Disabled code
    allBtn.setAttribute("disabled", "true");
    allBtn.classList.add("disabled:bg-gray-200");

    // count compeleted task
    convartedAssignedTask--;
    convartedMainCountTaskCompleted++;
    assignedTask.innerText = convartedAssignedTask;
    mainCountTaskCompleted.innerText = convartedMainCountTaskCompleted;
    alert("Board Updated Successfully");

    if (convartedAssignedTask === 0) {
      alert("congrates!!! You have completed all the current task");
    }

    // history activity
    let allCardTitle = document.querySelectorAll(".cardTitle");
    let cardTitle = allCardTitle[i].innerText;

    let history = document.getElementById("history");
    let div = document.createElement("div");

    div.innerHTML = `
      <div class="flex justify-center p-3 bg-[#F4F7FF] rounded-2xl mt-5">
        You have Complete The Task ${cardTitle} at 12:48:15 PM      
      </div>
    `;

    history.appendChild(div);
  });
}

let clearHistory = document.getElementById("clearHistory");

clearHistory.addEventListener("click", function () {
  document.getElementById("history").innerHTML = "";
});
