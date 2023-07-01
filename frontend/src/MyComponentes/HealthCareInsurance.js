import React, { useState, useEffect } from "react";
import BarChart from "./BarChart";
function HealthCareInsurance(props) {
  const [foodData, setFoodData] = useState([15, 25, 35, 45, 55]);
  
  const updateFoodData = () => {
    console.log("hello")
    const newData = [2650, 0, 0, 0, 0, 0, 0]; // New data
    setFoodData(newData);
  };

  return (
    <div>
      <h1>HealthCare Component</h1>
      <BarChart graphData={foodData} />
      <button className="pill" onClick={updateFoodData}>Update Health and Insurance Data</button>
    </div>
  );
}
export default HealthCareInsurance;
