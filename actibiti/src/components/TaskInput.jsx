import React from "react";

const TaskInput = ({ newTask, setNewTask, handleAddTask, handleDeleteCheckedTasks }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border p-2 w-80"
      />
      <button onClick={handleAddTask} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
        Add
      </button>
      <button onClick={handleDeleteCheckedTasks} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">
        Delete
      </button>
    </div>
  );
};

export default TaskInput;