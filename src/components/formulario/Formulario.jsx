import { useState } from 'react';
import Alerta from './Alerta';
import { FormControl, InputLabel, MenuItem, Select, TextField, Button  } from '@mui/material';
import useClima from '../../hooks/useClima';
import { PAISES } from '../../constants/data';
import './Formulario.css'

const Formulario = () => {

    const [ alerta, setAlerta ] = useState(false);
    const { busqueda, datosBusqueda, consultarClima } = useClima();
    const { ciudad, pais } = busqueda;

    const handleSubmit = e => {
        e.preventDefault();

        if(Object.values(busqueda).includes('')) {
            setAlerta(true)
            return;
        }
        setAlerta(false)
        consultarClima(busqueda)
    }

  return (
    <main className='main__formulario'>

        {alerta && <Alerta /> }

        <form onSubmit={handleSubmit}>
            <FormControl 
                fullWidth
            >
                <InputLabel>País</InputLabel>
                <Select
                    label="pais"
                    onChange={datosBusqueda}
                    value={pais}
                    name='pais'
                >
                    { PAISES.map( pais => (
                        <MenuItem 
                            key={pais.value}
                            value={pais.value}
                        >
                            { pais.label}
                        </MenuItem>
                    )) }
                </Select>
            </FormControl>

            <TextField 
                sx={{
                    marginY: 5
                }}
                fullWidth 
                label="Elige tu Ciudad" 
                id="fullWidth" 
                onChange={datosBusqueda}
                value={ciudad}
                name='ciudad'
            />

            <Button 
                fullWidth
                type='submit'
                sx={{
                    bgcolor: '#e0af0d',
                    color: 'black',
                    '&:hover': {
                        bgcolor: '#e0af0d',
                        opacity: 0.8, // Establece la opacidad al 80% cuando el cursor está sobre el botón
                    },
                }}
            >
                    Buscar
            </Button>
        </form>
    </main>
  )
}

export default Formulario
