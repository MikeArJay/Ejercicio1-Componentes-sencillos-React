import React, { useState } from "react";

const PRODUCTOS = ["Mini pc intel n100", "Poco x5 pro", "Mac mini", "Lapiz", "Bolígrafo"]
function Buscador() {

    const [listaFiltrada, setListaFiltrada] = useState(PRODUCTOS);

    const filtrar = (termino, lista) => {
        const resultadoBusqueda = lista.filter(producto => producto.toLocaleLowerCase().includes(termino.toLocaleLowerCase())
        );

        setListaFiltrada(resultadoBusqueda);
    }


    return (
        <>
            <div className="card">
                <h2>Lista de Productos</h2>
                <input type="text" placeholder="Buscar..." onChange={e => filtrar(e.target.value, PRODUCTOS)}></input>
                <div className="card">
                    <ul>
                        {listaFiltrada.map((element) => <li>{element}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Buscador;