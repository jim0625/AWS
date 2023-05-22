import { BsFillTrashFill } from "react-icons/bs";

const Task = ({ taskText, onClick }) => {
  return (
    <div className="flex items-center text-white">
      <div className=" mb-[10px] flex w-[70%] flex-1 rounded-[15px] bg-[#031956] text-[#b6c7db]">
        <div className="flex w-full items-center justify-between p-[20px] text-xl">{taskText}</div>
      </div>
      <BsFillTrashFill onClick={onClick} className="ml-10 cursor-pointer text-2xl" />
    </div>
  );
};

export default Task;
