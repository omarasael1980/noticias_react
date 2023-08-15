import {FormControl, InputLabel, Select, MenuItem  } from '@mui/material'
import CATEGORIAS from '../helpers/Categorias'
import useNoticias from '../hooks/useNoticias'
const Formulario = () => {
    const {categoria, handleChangeCategoria} = useNoticias()
     
  return (
    
    <form>
      <FormControl fullWidth>
        <InputLabel> Categoría</InputLabel>
        <Select
        label='Categoría'
        onChange={handleChangeCategoria}
        value={categoria}
        >
            {CATEGORIAS.map(cat=>(
                
                <MenuItem 
                key={cat.value}
                value={cat.value}
                >
                        {cat.label}
                </MenuItem>
                 
            ))
            }
        </Select>
      
      </FormControl>
    </form>
  )
}

export default Formulario
