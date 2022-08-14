import React, { Component } from 'react'
import "../css/Fondo.css";
export default class Fondo extends Component {
    render() {
        return (
            <div className = "fondo">
                {this.props.palabra}
            </div>
        )
    }
}
