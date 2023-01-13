import fondo from "../assets/fondo.jpg"
import { CardMedia, Box, Typography } from '@mui/material'

const Header = () => {
  return (
    <>
      <Box maxWidth='1640' sx={{ position: 'fixed' }}>
        <Typography variant="h3" component="h1" fontWeight={600} color={"white"} sx={{
          position: 'absolute',
          top: '30%',
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
    </Box>

    </>
  )
}

export default Header