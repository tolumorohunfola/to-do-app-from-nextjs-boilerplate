"use client";
import React, { useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState([
    "Eat breakfast",
    "Have a shower",
    "Walk the cat",
  ]);
  const [newTask, setNewTask] = useState("");
  // This function allows the user to see the text as they are typing.
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value);
  }

  function addTask() {
    // only add the new task if it isn't an empty string
    if (newTask.trim() !== "") {
      // resets tasks to include the new task at the end
      setTasks((t) => [...t, newTask]);
      //////////////////////////////////////////////////////////
      // should be reseting the new tasks to be an empty string (but this doesn't seem to be working)
      setNewTask("");
    }
  }

  function deleteTask(index: number) {
    // make a new array, the filter function gives the element and index, but element is not used so is now _ and index is already used so that is i
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // resets the tasks to only include those that aren't in the delete task index
    setTasks(updatedTasks);
  }

  function moveTaskUp(index: number) {
    // check if the index is more than 0 so it doesn't try to move the top task up
    if (index > 0) {
      // make a new array to hold the updated tasks within the function
      const updatedTasks = [...tasks];
      // saying for the task at the index and task above that swap them
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      // set the tasks to the updated tasks array
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index: number) {
    // check if the index is lower than the index of the last task so it doesn't try to move the bottom task down
    if (index < tasks.length - 1) {
      // make a new array to hold the updated tasks within the function
      const updatedTasks = [...tasks];
      // saying for the task at the index and task below that swap them
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      // set the tasks to the updated tasks array
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="to-do-list">
      <nav>
        <ul className="nav">
          <li>
            <a href="/">Home</a>
          </li>
        </ul>
      </nav>
      <h1>To Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          // this makes the value of the input set to the new task (whatever is typed in!)
          value={newTask}
          onChange={handleInputChange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              👆
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              👇
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
