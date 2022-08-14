import React from 'react';
import "../css/Children.css";

function  Children(p) {
        return (
            <div className = "children">
                {p.children}
            </div>
        )
}

export { Children };
