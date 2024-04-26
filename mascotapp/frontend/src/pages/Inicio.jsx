import { About } from '../components/about-us/About'
import { Banner } from '../components/banner/Banner'
import { Info } from '../components/info/Info'

const Inicio = () => {
  return (
    <div>
      <Banner />
      {/*Boton acceso a usuario*/}
      <About />
      <Info />
    </div>
  )
}

export default Inicio