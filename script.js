//IIFE
import { addTask } from "./components/addTask.js";
import { displayTasks } from "./components/readTasks.js";

const btn = document.querySelector("[data-form-btn]");
const input = document.querySelector("[data-form-input]");

btn.addEventListener("click", addTask);

displayTasks();