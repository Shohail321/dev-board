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
            alert("Task is completed✅");
            button.disabled = true;
            button.classList.add("opacity-50", "cursor-not-allowed");


            // task assigned decrease
            let taskCount = parseInt(taskCountElement.innerText);
            if (taskCount > 0) {
                taskCount--;
                taskCountElement.innerText = taskCount;

            }
            // board increase
            let boardIncrease = document.getElementById("boardUpdate")
            let boardCount = parseInt(boardIncrease.innerText);
            if (boardCount > 0) {
                boardCount++;
                boardIncrease.innerText = boardCount;
               
            }


        //  append actitivity logs

            let taskName = button.parentElement.parentElement.querySelector("h2").innerText;
            let currentTime = new Date().toLocaleTimeString();

           
            let logEntry = document.createElement("p");
            logEntry.innerHTML = `<strong>${taskName}</strong> completed at - ${currentTime}`;
            logEntry.classList.add("text-sm", "text-black", "mt-4","mb-4", "gap-2");

            
            activityLog.appendChild(logEntry);

            if (taskCount == 0) {
                alert("Completed All Tasks✅, Congratulations❤️️");
            }

        });
    });

    // Clear Activity Log when button is clicked
    clearLogButton.addEventListener("click", function () {
        activityLog.innerHTML = ""; 
    });
});
