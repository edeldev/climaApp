import { ClimaProvider } from "./context/ClimaProvider"
import ContenidoClima from "./components/contenido-clima/ContenidoClima"

function App() {

  return (
    <ClimaProvider>
      <ContenidoClima />
    </ClimaProvider>
  )
}

export default App
