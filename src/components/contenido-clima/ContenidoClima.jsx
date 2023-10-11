import Formulario from '../formulario/Formulario'
import AppClima from '../app-clima/AppClima'
import useClima from '../../hooks/useClima'
import Spinner from '../spinner/Spinner'
import { Container } from '@mui/material'
import './ContenidoClima.css'

const ContenidoClima = () => {

  const { resultado, cargando, noResultado } = useClima()
  return (
      <header>
        <h1 className='header__title'>Clima</h1>
        <Container>
          <div className='header__contenido'>
            <Formulario />

            {
              cargando
              ? <Spinner /> 
              : resultado?.name ? <AppClima /> 
              : noResultado 
              ? <p>{noResultado}</p>
              : <p>El clima se va a mostrar aqui</p>
            }
          </div>
        </Container>
      </header>
  )
}

export default ContenidoClima
