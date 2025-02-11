import React from "react";

const ToDoList = ({ tasks, checkedTasks, handleCheckChange }) => {
  return (
    <ul className="mb-6 w-1/2">
      {tasks.map((task, index) => (
        <li key={index} className="flex items-center justify-between p-2 border-b">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={checkedTasks[index] || false}
              onChange={() => handleCheckChange(index)}
              className="mr-3"
            />
            <span>{task}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ToDoList;