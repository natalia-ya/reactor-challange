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

// Korey's Changes

let tasks = [
  {
    name: "Buy groceries",
    due_date: "2023-03-24",
    priority: 2,
    notes: "Remember to buy milk, bread, and eggs",
    completed: false,
    category: "Personal",
  },
  {
    name: "Study Javascript",
    due_date: "2023-03-24",
    priority: 2,
    notes: "Remember to buy milk, bread, and eggs",
    completed: false,
    category: "Microsoft",
  },
];

function addTask(name, due_date, priority, notes, category) {
  // Create a new object to store the task's information
  let newTask = {
    name: name,
    due_date: due_date,
    priority: priority,
    notes: notes,
    completed: false,
    category: category,
  };

  tasks.push(newTask);

  console.log("New Task " + name + "Has been Added");
}
addTask(
  "Study Javascript",
  "2023-03-24",
  2,
  "Remember to buy milk, bread, and eggs",
  "Microsoft"
);

// Statements
if (task_priority >= 3) {
  console.log("This is a high priority task.");
}
if (task_name.includes("important")) {
  task_priority = 3;
}
if (task_category === "Personal") {
  task_completed = true;
}
let now = new Date();
let task_due_date_obj = new Date(task_due_date);

if (task_due_date_obj.getTime() - now.getTime() <= 3 * 24 * 60 * 60 * 1000) {
  console.log("This task is due soon.");
}
