import React from 'react';
import "../css/Fondo.css";

function  Fondo(props) {
        return (
            <div className = "fondo">
                {props.children}
            </div>
        )
}

export { Fondo };
