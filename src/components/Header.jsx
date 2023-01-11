import fondo from "../assets/fondo.jpg"
<<<<<<< HEAD
import {CardActionArea,Card,CardMedia} from '@mui/material'

const Header = () => {
  return (
     
        <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={fondo}
          alt="fondo de pantalla"
        />
        {/* <CardContent>
         
        </CardContent> */}
      </CardActionArea>
    </Card>
    

=======
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
>>>>>>> inputForm
  )
}

export default Header