import React, { useState } from 'react';

function Contador() {
    const [count, setCount] = useState(0);

    return(
        <>
        <p> Contador: {count}</p>
        <button onClick={() => setCount(count +1)}>Incrementar</button>
        <button onClick={() => setCount(count -1)}>Decrementar</button>
        </>
    );
}

export default Contador;