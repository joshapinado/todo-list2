import React, { useState } from "react";
import ToDoList from "./components/ToDoList";
import TaskInput from "./components/TaskInput";
import MembersList from "./components/MembersList";

const App = () => {
  const [tasks, setTasks] = useState([
    "Learn React",
    "Build a To-Do List",
    "Master JavaScript",
    "Apply for Jobs"
  ]);
  const [newTask, setNewTask] = useState("");
  const [checkedTasks, setCheckedTasks] = useState({});

  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const handleCheckChange = (index) => {
    setCheckedTasks((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const handleDeleteCheckedTasks = () => {
    setTasks(tasks.filter((_, index) => !checkedTasks[index]));
    setCheckedTasks({});
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6">To-Do List</h1>
      <ToDoList tasks={tasks} checkedTasks={checkedTasks} handleCheckChange={handleCheckChange} />
      <TaskInput newTask={newTask} setNewTask={setNewTask} handleAddTask={handleAddTask} handleDeleteCheckedTasks={handleDeleteCheckedTasks} />
      <MembersList />
    </div>
  );
};

export default App;