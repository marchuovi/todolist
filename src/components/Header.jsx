import fondo from "../assets/fondo.jpg"
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
    

  )
}

export default Header