import React, {useState} from "react";

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [mostratMensaje, setMosrtrarMensaje] = useState(false);
    const SALUDO = "¡Hola, "
    const [mensaje, setMensaje] = useState();

    const HandleSubmit =(event) => {
        event.preventDefault();
        setMosrtrarMensaje(true);
        setMensaje(SALUDO + nombre)
    }

    return(
        <>
        <form onSubmit={HandleSubmit}>
            <label htmlFor="nom">Nombre </label>
            <input id="nom" type = "text" value={nombre} onChange={e=> setNombre(e.target.value)}></input>
            <button type="submit">Enviar</button>
        </form>
        {mostratMensaje && <p> {mensaje}!</p>}
        </>
    );
}

export default Formulario;