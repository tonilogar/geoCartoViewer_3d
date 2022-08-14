import React from "react";
import "./ReadJson.css";
import dataJson from "./projects.json";


const ReadJson = () => {

dataJson.map((item) =>
console.log(item.project + ' Name project ' + item.dataProject + ' dataProject')

)


  const listItems = dataJson.map((item) =>
    <li className={item.project}>
      <label>
        {item.project}
        <input list={item.project} name={item.project} />
      </label>
      <datalist id={item.project} >
      
      {/* <option className={item.project} value={item.dataProject}/> */}
      {item.dataProject.map((item) =>
      <option className={item.project} value={item}/>)}
      </datalist>
    </li>
  )

  return (
    <div className="readJson" >
      {/* {reactElementUl} */}
      {/* {reactElementUl01} */}

      {/* {list()} */}
      <ul>{listItems}</ul>
    </div>
  );
};

export { ReadJson };
 /* const reactElementUl =
  <ul>
    <li>
      <label>
        Subsidences:
        <input list="subsidences" name="subsidences" />
      </label>
      <datalist id="subsidences">
        <option value="CAT S1 LOS ASC 201601-201612" />
        <option value="CAT S1 LOS DESC 201601-201612" />
        <option value="CAT S1 UD 201601-201612" />
        <option value="CAT S1 EW 201601-201612" />
        <option value="pepe" />
      </datalist>
    </li>
    <li>
      <label>
        Farmstart:
        <input list="farmstart" name="farmstart" />
      </label>
      <datalist id="farmstart">
        <option value="2016" />
        <option value="2017" />
        <option value="2018" />
        <option value="2019" />
        <option value="2020" />
        <option value="2021" />
      </datalist>
    </li>
    <li>
      <label>
        NDVI:
        <input list="ndvi" name="ndvi" />
      </label>
      <datalist id="ndvi">
        <option value="2016" />
        <option value="2017" />
        <option value="2018" />
        <option value="2019" />
        <option value="2020" />
        <option value="2021" />
      </datalist>
    </li>
  </ul>; */