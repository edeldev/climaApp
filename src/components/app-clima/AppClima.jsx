import useClima from '../../hooks/useClima'
import './AppClima.css'

const AppClima = () => {

  const { busqueda, resultado } = useClima()
  const { pais } = busqueda
  const {name, main} = resultado

    // Api arroja grados kelvin
    const kelvin = 273.15

  return (
    <section className='clima__result'>
      <h2>{name}, <span>{pais}</span></h2>
      <p>{parseInt(main.temp - kelvin)} <span>&#x2103;</span></p>

      <div className="clima__max__min">
        <p>Mín <br /> <span> {parseInt(main.temp_min - kelvin)} &#x2103;</span></p>
        <p>Máx <br /> <span>{parseInt(main.temp_max - kelvin)} &#x2103;</span></p>
      </div>
    </section>
  )
}

export default AppClima