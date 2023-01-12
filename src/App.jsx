import React from 'react'
import BtnAdd from './components/BtnAdd'
import Header from './components/Header'
import NewList from './components/NewList'
import { Container } from '@mui/system'
import BtnDelete from './components/BtnDelete'

const App = () => {
  return (
    <Container sx={{display:'flex', direction:'row', zIndex:'2'}}>
      {/* <BtnAdd/> */}
      <Header />
      <NewList />
    </Container>
  )
}

export default App
