let task_name = "Buy groceries";
let task_due_date = "2023-03-24";
let task_priority = 2;
let task_notes = "Remember to buy milk, bread, and eggs";
let task_completed = false;
let task_category = "Personal";

// Function to add a new task to the to-do list
function addTask(name, due_date, priority, notes, category) {
  // Create a new object to store the task's information
  let task = {
    name: name,
    due_date: due_date,
    priority: priority,
    notes: notes,
    completed: false,
    category: category,
  };

  // Add the new task object to an array of tasks
  tasks.push(task);
}

// Function to mark a task as completed
function completeTask(task) {
  task.completed = true;
}

// Function to delete a task from the to-do list
function deleteTask(task) {
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
}

// Function to display all tasks in a certain category
function displayTasksByCategory(category) {
  let filteredTasks = tasks.filter(function (task) {
    return task.category === category;
  });

  filteredTasks.forEach(function (task) {
    console.log(task.name);
  });
}
