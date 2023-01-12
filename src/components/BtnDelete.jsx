import React from 'react'
import { Button } from '@mui/material'
import axios from "axios";

const BtnDelete = () => {
const url = "http://localhost:3000/tasks";

    const handleDelete = async() => {
        const updateList = list.filter(item => !item.done);
        setList(updateList);
      };

    //  const response = await axios.delete(url)
    // //  .then((response)=>{setUpdateList(!updateList)}
    // //  const updateList = list.filter(item => !item.done);
    // setUpdateList(updateList);
// }

  return (
    <div>
        <Button variant="contained" sx={{backgroundColor:'#B4ACE7', ':hover':{bgcolor:"#9486ED"}}} >Delete</Button>
    </div>
  )
};

export default BtnDelete