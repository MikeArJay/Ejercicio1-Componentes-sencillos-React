import React, {useState} from "react";

const SALUDO = "¡Hola, ";

function Formulario() {
    const [mostratMensaje, setMosrtrarMensaje] = useState(false);
    const [mensaje, setMensaje] = useState();

    const HandleSubmit =(event) => {
        event.preventDefault();
        setMosrtrarMensaje(true);
        setMensaje(SALUDO + event.target[0].value +"!")
    }

    return(
        <>
        <form onSubmit={e=>HandleSubmit(e)}>
            <label htmlFor="nom">Nombre </label>
            <input id="nom" type = "text" ></input>
            <button type="submit">Enviar</button>
        </form>
        {mostratMensaje && <p>{mensaje}</p>}
        </>
    );
}

export default Formulario;