import React, { useState } from "react";
import axios from "axios";
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material'

const Task = ({ task, setUpdate, updateTasks }) => {

  const URL = "http://localhost:3000/tasks";
  const [editData, setEditData] = useState({ taskText: task.taskText });

  const handleDelete = async () => {
    const response = await axios.delete(`${URL}/${task.id}`);
    if (response.status === 200) {
      setUpdate(!updateTasks);
    }
  };

  const handleEdit = ({ target }) => {
    setEditData({
      ...editData,
      [target.name]: target.value,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(`${URL}/${task.id}`, editData);
    setEditData(response.data);
    setUpdate(!updateTasks);
  };
  return (
    <div className="tasklist">
      <Checkbox onClick={() => { }}
        sx={{
          color: "#CAABE9",
          '&.Mui-checked': {
            color: "#856FB0",
          },
          '& .MuiSvgIcon-root': { fontSize: 30 }
        }}
      />
      <input
        className="inputList"
        name="taskText"
        value={editData.taskText}
        type="text"
        placeholder={task.taskText}
        onChange={handleEdit}
      />
      <Button onClick={handleEditSubmit} variant="contained" size='lg'
        sx={{
          width:'10%',
          backgroundColor: '#B4ACE7',
          ':hover': {
            bgcolor: '#9486ED'
          }
        }} >Edit</Button>

      <Button onClick={handleDelete} variant="contained"
        sx={{
          width:'10%',
          backgroundColor: '#B4ACE7',
          ':hover': {
            bgcolor: '#9486ED'
          }
        }}>delete</Button>
    </div>
  );
}

export default Task;