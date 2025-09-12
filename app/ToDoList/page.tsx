'use client';
import React, { useState } from 'react'



export default function Page() {
    const [tasks, setTasks] = useState(["Eat breakfast", "Have a shower", "Walk the cat"]);
    const [newTask, setNewTask] = useState("");
    // This function allows the user to see the text as they are typing.
    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        // only add the new task if it isn't an empty string
        if(newTask.trim() !== "") {
            // resets tasks to include the new task at the end
            setTasks(t => [...t, newTask]);
            // should be reseting the new tasks to be an empty string (but this doesn't seem to be working)
            setNewTask(""); 
        }
    }

    function deleteTask(index) {
        // make a new array, the filter function gives the element and index, but element is not used so is now _ and index is already used so that is i
        const updatedTasks = tasks.filter((_, i) => i !== index);
        // resets the tasks to only include those that aren't in the delete task index
        setTasks(updatedTasks);
    }

    function moveTaskUp(index) {
        
    }

    function moveTaskDown(index) {
        
    }

    
    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                // this makes the value of the input set to the new task (whatever is typed in!)
                values={newTask}
                onChange={handleInputChange} />
                <button className="add-button"
                onClick={addTask}>
                    Add
                </button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-up-button" onClick={() => moveTaskUp(index)}>
                            👆
                        </button>
                        <button className="move-down-button" onClick={() => moveTaskDown(index)}>
                            👇
                        </button>
                    </li>
                )}
            </ol>
            
        </div>
    );
}