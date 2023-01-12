import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box } from "@mui/system";

const NewList = () => {
  const url = "http://localhost:3000/tasks";
  const getData = async () => {
    const response = await axios.get(url);
    return response;
  };

  const [list, setList] = useState([]);
  const [updateList, setUpdateList] = useState(false)
  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, []);
  console.log(list);
  return (
    <Box sx={{backgroundColor:'red'}}>
      {list.map((t, index) => (
        <p key={index}>{t.task}</p>
        // <div
        //   key={index}
        //   task={task}
        //   setUpdateList={setUpdateList}
        //   updateList={updateList}
        // >
          
        // </div>
      ))}
    </Box>
  );
};

export default NewList;
