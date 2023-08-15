import {Grid, Typography, Stack, Pagination} from '@mui/material'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia'
const ListadoNoticias = () => {
    const {noticias,totalNoticias,handleChangePagina,pagina  } = useNoticias()
    
    const paginas = Math.ceil(totalNoticias/20)
   
  return (
    < >
        <Typography
        textAlign={'center'}
        marginY={5}
        variant='h3'
        component={'h2'}
        >últimas noticias</Typography>
        <Grid
        container
        spacing={2}>
            
                {noticias.map(nota=>(
                    
                    <Noticia
                   key={nota.url}
                    noticia ={nota}/> 
                    
                ))}
            
        </Grid>
        <Stack 
            sx={{marginY:5}}
            spacing={2}
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
               >
           
            <Pagination 
                    count={paginas} 
                    color='primary'
                    onChange={handleChangePagina}
                    page={pagina}
                     />
           

        </Stack>


    </>
  )
}

export default ListadoNoticias
