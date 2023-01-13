import React, { useEffect, useState } from "react"
import axios from "axios"
import Task from "./Task"


const ListTasks = ({ setUpdate, updateTasks }) => {
  const URL = "http://localhost:3000/tasks";

  const getData = async () => {
    const response = axios.get(URL);
    return response;
  };

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      setTasks(response.data);
    });
  }, [updateTasks]);

  return (
    <div className="lista">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          setUpdate={setUpdate}
          updateTasks={updateTasks}
        />
      ))}
    </div>
  );
}

export default ListTasks;