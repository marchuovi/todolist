import React from 'react'
import { Button } from '@mui/material'

const BtnAdd = () => {
  return (
    <>
        <Button variant="contained" sx={{backgroundColor:'#B4ACE7', ':hover': {
      bgcolor: '#9486ED'}}}>Add</Button>
    </>
  )
}

export default BtnAdd