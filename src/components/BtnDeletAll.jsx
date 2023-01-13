import React from 'react'
import axios from "axios";
import { Button } from '@mui/material'


const BtnDeletAll = ({ task, setUpdate, updateTasks }) => {
    const URL = "http://localhost:3000/tasks";

    const handleDeleteAll = async () => {
        const { data } = await axios.get(URL);
        for (const task of data) {
            await axios.delete(`${URL}/${task.id}`);
            // setUpdate(!updateTasks);
        }
        setUpdate(!updateTasks);
    };

    return (
        <Button
            className="btnAll"
            onClick={handleDeleteAll} variant="contained"
            sx={{
                position: 'fixed',
                bottom: '50px',
                width: '30%',
                backgroundColor: '#B4ACE7',
                ':hover': {
                    bgcolor: '#9486ED'
                }
            }}>Delete All</Button>
    )
}

export default BtnDeletAll
