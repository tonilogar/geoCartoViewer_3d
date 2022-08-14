import React from "react"
import "./Tools.css"
import { Projects } from './Projects/Projects'
import { AddFiles } from './AddFiles/AddFiles'
import { MapBackground } from './MapBackground/MapBackground'

const Tools = () => {
  const [stateShowHide, setStateShowHide] = React.useState(true)

  const click = () => {
    if (stateShowHide) {
      document.getElementById("toolsOpen").style.display = "none"
      document.getElementById("toolsClose").style.display = "block"
      document.getElementById("projects").style.display = "block"
      document.getElementById("addFiles").style.display = "block"
      document.getElementById("mapBackground").style.display = "block"
      document.getElementById("containerTools").style.background = "rgba(240, 248, 255, 0.513)"
      setStateShowHide(false);
    } else {
      document.getElementById("toolsOpen").style.display = "block"
      document.getElementById("toolsClose").style.display = "none"
      document.getElementById("projects").style.display = "none"
      document.getElementById("addFiles").style.display = "none"
      document.getElementById("mapBackground").style.display = "none"
      document.getElementById("containerTools").style.background = "rgba(255, 255, 255, 0)"
      setStateShowHide(true)
    }
  }
  
    

  return (
    <div className="containerTools" id="containerTools">
      <svg
        className="toolsOpen"
        id="toolsOpen"
        onClick={click}
        viewBox="0 0 92.833 92.833"
      >
        <g
          fill="#030000"
          stroke="#000"
          strokeDashoffset="300.69"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="0.9"
          strokeWidth="7.383"
          paintOrder="markers fill stroke"
        >
          <path d="M11.85 45.884H82.095V45.911H11.85z"></path>
          <path d="M11.9 18.461H82.14500000000001V18.488H11.9z"></path>
          <path d="M12.058 73.691H82.303V73.718H12.058z"></path>
        </g>
      </svg>
      <svg
        className="toolsClose"
        id="toolsClose"
        onClick={click}
        viewBox="0 0 92.833 92.833"
      >
        <path
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeLinecap="round"
          strokeWidth="10.338"
          d="M14.451 14.313l63.763 64.176"
        ></path>
        <path
          fill="#1a1a1a"
          stroke="#1a1a1a"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="10.32"
          d="M78.236 14.398L14.53 78.461"
        ></path>
      </svg>
      <Projects/>
      <AddFiles/>
      <MapBackground/>
    </div>
  )
}

export { Tools }
