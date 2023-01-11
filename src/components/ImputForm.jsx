import React, { useState } from 'react'
import { TextField } from '@mui/material'
import BtnAdd from './BtnAdd';
import { Box } from '@mui/system';

const ImputForm = () => {

    const [data, setData] = useState({ text: "" });

    const handleChange = ({ target }) => {
        // console.log('Hola')
        setData({
            ...data,
            [target.name]: target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('holaaaa')
    }

    return (
        <Box
            backgroundColor='none'
            sx={{
                position: 'absolute',
                top: '50%',
                left: '20%',
                backgroundColor: 'none',
                
                width: '60%',
                display:'flex',
                justifyContent:'space-between'

            }}>

            <TextField id="outlined-basic" value={data.text} label="Mi nueva tarea para aprender" variant="outlined" onChange={handleChange}
            
            sx={{width: '100%',
        backgroundColor: '#F5F5F5',
        borderRadius: '5px',
        marginRight:'2%'
    }}
            />
            <BtnAdd onClick={handleSubmit}/>
        </Box >
    )
}

export default ImputForm
