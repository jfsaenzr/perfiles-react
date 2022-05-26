import './App.css';
import { Perfil } from './componentes/Perfil';
import data from "./data/Data.json"

function App() {

  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Perfiles profesionales</h1>

        {data.map((data, idx) => (
          <Perfil key={idx}
            nombre={data.nombre}
            pais={data.pais}
            imagen={data.imagen}
            cargo={data.cargo}
            empresa={data.empresa}
            perfil={data.perfil}
          />
        ))}

      </div>
    </div>
  );
}

export default App;
