import React,{useState} from 'react'
import FoodChart from './FoodChart'
function Food() {

  const [foodData, setFoodData] = useState([10, 20, 30, 40, 50,60]); // Sample data

  // Function to update graph data
  const updateFoodData = () => {
    console.log("hello")
    const newData = [15, 25, 35, 45, 55]; // New data
    setFoodData(newData);
  };
 
  return (
    <div>
       <h1>Food Component</h1>
      
      <FoodChart  foodData={foodData}/>
      <button onClick={updateFoodData}>Update Food Data</button>
    </div>
  )
}
export default Food