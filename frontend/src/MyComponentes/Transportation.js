import React,{useState,useEffect} from 'react'

import BarChart from './BarChart'
function Transportation(props) {
  const [foodData, setFoodData] = useState([15, 25, 35, 45, 55]);
  
  const updateFoodData = () => {
    console.log("hello")
    const newData = [200, 0, 0, 0, 0, 0, 0]; // New data
    setFoodData(newData);
  };

  return (
    <div>
       <h1>Transportation Component</h1>
      
      <BarChart  graphData={foodData}/>
      <button className="pill" onClick={updateFoodData}>Update Transportation Data</button>
    </div>
  )
}
export default Transportation