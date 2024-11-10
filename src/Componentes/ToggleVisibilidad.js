import React, { useState } from "react";

function ToggleVisibilidad() {
    const [visible, setVisible] = useState(false);
    const handleToggle = () => {
        setVisible(!visible);
    };

    return (
        <>
            <button onClick={handleToggle}>{visible ? 'Ocultar' : 'Púlsame!'}</button>
            {visible && <h2
                style={{color: "#fa05d9" }}
                >Sorpresa!</h2 >}
    </>
);

};

export default ToggleVisibilidad;