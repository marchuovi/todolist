import React from 'react'
import { Button } from '@mui/material'

const BtnDelete = () => {
const url = "http://localhost:3000/tasks";
    const handleDelete = async(list) => {
     const response = await axios.delete(url)
     const updateList = list.filter(item => !item.done);
    setList(updateList);
}

  return (
    <div>
        <Button variant="contained" sx={{backgroundColor:'#B4ACE7', ':hover':{bgcolor:"#9486ED"}}} onClick={handleDelete} >Delete</Button>
    </div>

  )
}

export default BtnDelete