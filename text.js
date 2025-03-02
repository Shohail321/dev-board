// Background color change

document.getElementById("themeButton").addEventListener("click", function () {
    document.body.style.backgroundColor = `hsl(${Math.random() * 360}, 90%, 90%)`;
});

document.getElementById("discover").addEventListener("click", function (event) {
    event.preventDefault();
    window.location.href = "./blog.html"

})

// current time showing

function updateDateTime() {
    let now = new Date();
    let formattedDateTime = now.toLocaleString();

    document.getElementById("datetime").textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);


document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".complete-btn");
    const taskCountElement = document.getElementById("taskAssigned");
    const activityLog = document.getElementById("activityLog");
    const clearLogButton = document.getElementById("clearLog");

   


    buttons.forEach(button => {
        button.addEventListener("click", function () {
            alert("Task is completed");
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");

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
                // document.getElementById("boardCount").innerText = boardCount;
            }
        

            // Get the task name and time
            let taskName = button.parentElement.parentElement.parentElement.querySelector("h2").innerText;
            let currentTime = new Date().toLocaleTimeString();

            // Create log entry
            let logEntry = document.createElement("p");
            logEntry.innerText = `${taskName} - ${currentTime}`;
            logEntry.classList.add("text-sm", "text-gray-700", "mt-1");

            // Append to Activity Log
            activityLog.appendChild(logEntry);
        });
    });

    // Clear Activity Log when button is clicked
    clearLogButton.addEventListener("click", function () {
        activityLog.innerHTML = ""; // Clears all log entries
    });
});
