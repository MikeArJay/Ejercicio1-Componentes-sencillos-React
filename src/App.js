import './App.css';
import Contador from './Componentes/Contador';
import Formulario from './Componentes/Formulario';
import ToggleVisibilidad from './Componentes/ToggleVisibilidad';
import Todo from './Componentes/Todo';
import Buscador from './Componentes/Buscador';

function App() {
  return (
    <div className="App">
      <h1>Ejercicios</h1>
      <Formulario/>
      <br/>
      <Contador/>
      <br/><br/>
      <ToggleVisibilidad/>
      <Todo/>
      <Buscador/>
      
     
    </div>
  );
}

export default App;
