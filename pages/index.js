import { ethers } from "ethers";
import { useEffect, useState } from "react";

import ConnectWalletButton from "../components/ConnectWalletButton";
import TodoList from "../components/TodoList";
import WrongNetworkMessage from "../components/WrongNetworkMessage";
import { TaskContractAddress } from "../config";
import TaskAbi from "../truffle/build/contracts/TaskCountract.json";
/* 
const tasks = [
  { id: 0, taskText: 'clean', isDeleted: false }, 
  { id: 1, taskText: 'food', isDeleted: false }, 
  { id: 2, taskText: 'water', isDeleted: true }
]
*/

export default function Home() {
  // Calls Metamask to connect wallet on clicking Connect Wallet button
  const [correctNetwork, setCorrectNetwork] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [, setCurrenAccount] = useState(false);
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // console.log("TaskAbit:", TaskAbiT);
    // console.log("Abi:", TaskAbi.abi);
    // connectWallet();
    getAllTasks();
  }, []);

  const connectWallet = async () => {
    const { ethereum } = window;
    if (ethereum) console.log("inside");
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    let address = await signer.getAddress();
    setCurrenAccount(address);
    setIsUserLoggedIn(true);
    setCorrectNetwork(true);
    console.log(address);
  };

  // Just gets all the tasks from the contract
  const getAllTasks = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        let allTasks = await TaskContract.getMyTasks();
        console.log(allTasks);
        setTasks(allTasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Add tasks from front-end onto the blockchain
  const addTask = async e => {
    e.preventDefault();

    let task = {
      taskText: input,
      isDeleted: false,
    };
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);

    TaskContract.addTask(task.taskText, task.isDeleted)
      .then(() => {
        setTasks([...tasks, task]);
        console.log("Added task");
      })
      .catch(error => {
        console.log("Error: " + error);
      });
    setInput("");
    console.log(tasks);
  };

  // Remove tasks from front-end by filtering it out on our "back-end" / blockchain smart contract
  const deleteTask = key => async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const TaskContract = new ethers.Contract(TaskContractAddress, TaskAbi.abi, signer);
        const deleteTaskTx = await TaskContract.deleteTask(key, true);
        console.log("successfully deleted: " + deleteTaskTx);
        let allTasks = await TaskContract.getMyTasks();
        setTasks(allTasks);
      }
    } catch (error) {
      console.log("TEST ERROR");
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-screen justify-center bg-[#97b5fe] py-6">
      {!isUserLoggedIn ? (
        <ConnectWalletButton connectWallet={connectWallet} />
      ) : correctNetwork ? (
        <TodoList tasks={tasks} input={input} setInput={setInput} addTask={addTask} deleteTask={deleteTask} />
      ) : (
        <WrongNetworkMessage />
      )}
    </div>
  );
}
