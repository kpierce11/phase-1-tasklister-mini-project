document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-task-form");
    const taskList = document.getElementById("tasks");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const taskDescription = document.getElementById("new-task-description").value;
  
      if (taskDescription.trim() === "") {
        alert("Please enter a task description.");
        return;
      }
      
      const taskItem = document.createElement("li")
      taskItem.textContent = taskDescription;
  
      taskList.appendChild(taskItem);
  
      form.reset();
    });
  });
  
});
