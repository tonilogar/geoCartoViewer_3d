import React from "react";
import "./ListProjects.css";
import dataJson from "./projects.json";
import dataJson01 from "./projectsOfProducts.json";


const ListProjects = () => {
  const [stateSelectedProject, setStateSelectedProject] = React.useState('')
  let pepe;
  const listItems = dataJson.map((item) =>
    <li className='listProjectsLi'>
      <label className='listProjectsLabel'>
        {item.project}
        <input list={item.project} name={item.project} />
      </label>
      <datalist id={item.project} >
        {item.dataProject.map((item) =>
          /* pepe = item, */
          <option className={item.project} value={item} />)}
      </datalist>
    </li>
  )
  console.log(pepe + 'pepepepeep')
  const sendSelectedProject = () => {
    return stateSelectedProject;
  }
  const readJson = () => {
    console.log('qqqq')
  }
  //When user sekelct project send a signal with the select project
  return (
    <div className="listProjects" >
      <ul className="listProjectsUl">{listItems}</ul>
      <div>{readJson}</div>
      {/* <div>{stateSelectedProject}</div> */}
    </div>

  );
};

export { ListProjects };
