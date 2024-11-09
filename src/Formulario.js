import React, {useState} from "react";

function Formulario() {
    const [nombre, setNombre] = useState('');
    const [mostratMensaje, setMosrtrarMensaje] = useState(false);

    const handleChange = (event) => {
        setNombre(event.target.value);
    };
    const HandleSubmit =(event) => {
        event.preventDefault();
        setMosrtrarMensaje(true);
    }

    return(
        <>
        <form onSubmit={HandleSubmit}>
            <label>Nombre 
            <input type = "text" value={nombre} onChange={handleChange}></input>
            </label>
            <button type="submit">Enviar</button>
        </form>
        {mostratMensaje && <p>¡Hola, {nombre}!</p>}
        </>
    );
}

export default Formulario;