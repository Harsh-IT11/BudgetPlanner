import React,{useState,useEffect} from 'react'

import BarChart from './BarChart'
function PersonalCareClthing(props) {

  const [foodData, setFoodData] = useState([15, 25, 35, 45, 55]);
  
  const updateFoodData = () => {
    console.log("hello")
    const newData = [1500, 0, 0, 0, 0,0,0]; // New data
    setFoodData(newData);
  };

  return (
    <div>
       <h1>PersonalCareClothing Component</h1>
      
      <BarChart  graphData={foodData}/>
      <button className="pill" onClick={updateFoodData}>Update Personal Care and Clothing Data</button>
    </div>
  )
}
export default PersonalCareClthing