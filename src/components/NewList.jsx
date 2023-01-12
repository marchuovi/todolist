import React, { useEffect, useState } from "react";
import CheckB from "./CheckB";
import axios from "axios";
import { Box } from "@mui/system";

const NewList = (props) => {
  const url = "http://localhost:3000/tasks";
  const getData = async () => {
    const response = axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState(false)
  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, [updateList]);
  console.log(list);
  return (
    <div>
      {list.map((task, index) => (
        <div
          key={index}
          task={task}
          setUpdateList={setUpdateList}
          updateList={updateList}
        >
        </div>
      ))}
    </div>
  );
};

export default NewList;
