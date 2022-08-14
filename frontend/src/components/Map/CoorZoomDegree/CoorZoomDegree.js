import React from "react";
import "./CoorZoomDegree.css";

const CoorZoomDegree = ({lat, lng, zoom, degree} ) => {
  
  return (
    <div className="longLatZoomDegree">
      <div className="longLat">
      Lat: {lat} | Long: {lng} 
      </div>
      <div className="zoomDegree">
        Zoom: {zoom} | Degree: {degree} º
      </div>
    </div>
  );
};

export { CoorZoomDegree };
