import axios from "axios";
import React, { useState } from "react";
import { Button } from '@mui/material'
import '../App.css'


const PostTask = ({ setUpdate, updateTasks }) => {
  const [data, setData] = useState({ taskText: "" });

  const handleChange = ({ target }) => {
    setData({
      ...data,
      [target.name]: target.value,
    });
  };

  const URL = "http://localhost:3000/tasks";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, data);
    if (response.status === 201) {
      setUpdate(!updateTasks);
    }

  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
        className="input"
          type="text"
          name="taskText"
          placeholder="Mi nueva tarea ..."
          required
          value={data.taskText}
          onChange={handleChange}
          />
        <Button variant="contained"
          sx={{
            backgroundColor: '#B4ACE7',
            width: '20%',
            ':hover': {
              bgcolor: '#9486ED'
            }
          }} type="submit">Add</Button>
      </form>
    </>
  );
}

export default PostTask;