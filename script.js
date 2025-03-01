// const themeButton = document.getElementById("themeButton");
// const body = document.getElementById("pageBody");

// const colors = ["bg-gray-100", "bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100", "bg-purple-100", "bg-cyan-100", "bg-tomato-100", "bg-skyblue-100"];
// let currentIndex = 0;

// themeButton.addEventListener("click", function () {
//     body.classList.remove(...colors);
//     currentIndex = (currentIndex + 1) % colors.length;
//     body.classList.add(colors[currentIndex]);
// });

document.getElementById("themeButton").addEventListener("click", function () {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 90%)`;
});

document.getElementById("discover").addEventListener("click",function(event){
    event.preventDefault();
     window.location.href= "./blog.html"

    
})




function completeTask(button) {
    alert('Board Upadated Successfully');
    button.disabled = true;
    button.classList.add('opacity-15', 'cursor-not-allowed');

    let taskCountElement = document.getElementById("taskAssigned");
    let taskCount = parseInt(taskCountElement.innerText);

    if (taskCount > 0) {
        taskCount--;
        taskCountElement.innerText = taskCount;
        
    }
    
    let boardIncrease = document.getElementById("boardUpdate")
    let boardCount = parseInt(boardIncrease.innerText);
    if (boardCount > 0) {
        boardCount++;
        boardIncrease.innerText = boardCount;
        document.getElementById("boardCount").innerText = boardCount;
    }


    const activityLog = document.getElementById("activity-log");

      // Get the task name
      let taskName = button.parentElement.parentElement.parentElement.parentElement.querySelector("h2").innerText;
                
      // Get the current time
      let currentTime = new Date().toLocaleTimeString();

      // Create a new log entry
      let logEntry = document.createElement("p");
      logEntry.innerText = `${taskName} - ${currentTime}`;
      logEntry.classList.add("text-sm", "text-gray-700", "mt-2");

      // Add to activity log
      activityLog.appendChild(logEntry);


}