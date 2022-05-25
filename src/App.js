import './App.css';
import { Testimonio } from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Perfiles profesionales</h1>
        <Testimonio
          nombre="Alejandra Sesquile"
          pais="Colombia"
          imagen="psic2"
          cargo="Psicologa"
          empresa="Clinica country"
          testimonio="Ciencia que estudia los procesos mentales, las sensaciones, las percepciones y el comportamiento del ser humano, 
          en relación con el medio ambiente físico y social que lo rodea.."
        />
        <Testimonio
          nombre="Johan Saenz"
          pais="Colombia"
          imagen="ing1"
          cargo="Ingeniero de software"
          empresa="HeOn"
          testimonio="La Ingeniería de Software es una de las ramas de las ciencias de la computación que estudia 
          la creación de software confiable y de calidad, basándose en métodos y técnicas de ingeniería, y brindando soporte operacional y de mantenimiento."
        />

      </div>
    </div>
  );
}

export default App;
