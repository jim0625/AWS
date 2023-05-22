import { IoMdAddCircle } from "react-icons/io";

import Navbar from "./Navbar";
import Task from "./Task";

const TodoList = ({ tasks, input, setInput, addTask, deleteTask }) => (
  <div className="w-[70%] overflow-y-scroll rounded-[30px] bg-[#354ea3] px-9 py-4">
    <Navbar />
    <h2 className="border pb-8 text-4xl text-white">What&apos;s up, Kevin!</h2>
    <div className="py-3 text-[#7d99e9]">TODAY&apos;S TASKS</div>
    <form className="flex items-center justify-center">
      <input
        className="mb-[10px] w-full rounded-[10px] border-none bg-[#031956] p-[10px] text-white outline-none"
        placeholder="Add a task for today..."
        // take input from the form here
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <IoMdAddCircle
        // Add an onClick method
        onClick={addTask}
        className="mb-[10px] ml-[20px] cursor-pointer text-[50px] text-[#ea0aff]"
      />
    </form>
    <ul>
      {/* Loop through all tasks here using the Task component */}
      {tasks.map(item => (
        <Task key={item.id} taskText={item.taskText} onClick={deleteTask(item.id)} />
      ))}
    </ul>
  </div>
);

export default TodoList;
