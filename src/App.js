import './App.css';
import Contador from './Componentes/Contador';
import Formulario from './Componentes/Formulario';
import ToggleVisibilidad from './ToggleVisibilidad';

function App() {
  return (
    <div className="App">
      <h1>Ejercicios</h1>
      <Formulario/>
      <br/>
      <Contador/>
      <br/><br/>
      <ToggleVisibilidad/>
     
    </div>
  );
}

export default App;
