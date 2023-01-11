import fondo from "../assets/fondo.jpg"
import { CardMedia, Box, Typography } from '@mui/material'
import ImputForm from "./ImputForm"


const Header = () => {
  return (
    <>
      <Box maxWidth='1640' sx={{ position: 'absolute' }}>
        <Typography variant="h3" component="h1" fontWeight={700} color={"white"} sx={{
          position: 'absolute',
          top: '20%',
          left: '20%',
        }}
        >TO DO</Typography>
      <CardMedia
        width="100%"
        component="img"
        height="240"
        image={fondo}
        alt="fondo de pantalla"
      ></CardMedia>
      <ImputForm />
    </Box>

    </>
  )
}

export default Header