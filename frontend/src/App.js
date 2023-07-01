import './App.css';
import NavBar from './MyComponentes/NavBar';
import Expense from './MyComponentes/Expense';
import InwardHistory from './MyComponentes/InwardHistory';
import About from './MyComponentes/About';
import DashBoard from './MyComponentes/DashBoard';
import Miscellanous from './MyComponentes/Miscellanous';
import HealthCareInsurance from './MyComponentes/HealthCareInsurance';
import PersonalCareClothing from './MyComponentes/PersonalCareClothing';
import Entertainment from './MyComponentes/Entertainment';
import Transportation from './MyComponentes/Transportation';
import EducationPersonalDevelopment from './MyComponentes/EducationPersonalDevelopment';
import Food from './MyComponentes/Food.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import {useEffect,useState} from'react'


function App() {

  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [foodData, setFoodData] = useState([]);
  const [miscellaneousData, setMiscellaneousData] = useState([]);
  const [healthData, setHealthData] = useState([])
  const [entertainmentData, setEntertainmentData] = useState([])
  const [travelData, setTravelData] = useState([])
  const [clothData, setClothData] = useState([])
  const [educationData,setEducationData]=useState([]);
  const [totalTransaction, setTotalTransaction]=useState([]);


  const [myFoodData, setMyFoodData] = useState([]);

  const getCurrentWeekNumber = () => {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const startOfWeek = new Date(startOfYear.setDate(startOfYear.getDate() - startOfYear.getDay()));
    const millisecondsPerWeek = 604800000; // 7 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

    const currentWeekNumber = Math.ceil((now - startOfWeek) / millisecondsPerWeek);

    return currentWeekNumber;
};

const currentWeek = getCurrentWeekNumber();
console.log(currentWeek);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get(`${backendUrl}/budget-items/get-weekly-sumbycategory`);
          setTotalTransaction(response.data); 
          console.log(response.data);
        } catch (error) {
          console.error('Error fetching weekly-wise amount:', error);
        }
      };
      fetchData();
      getTransaction(); 
   
  }, [])

  

  const getTransaction=()=>{
    totalTransaction.map((transaction)=>{
      if(transaction.category==='Food & Dining'){setFoodData((prevFoodData) => [...prevFoodData, transaction]);} 
      else  if(transaction.category==='Educational & Personal Development'){setEducationData((prevEduData) => [...prevEduData, transaction]);} 
      else if(transaction.category==='HealthCare & Insurence'){setHealthData((prevHealthData) => [...prevHealthData, transaction]);} 
      else if(transaction.category==='Entertainment'){setEntertainmentData((prevEnterData) => [...prevEnterData, transaction]);} 
      else if(transaction.category==='Transportation'){setTravelData((prevTravelData) => [...prevTravelData, transaction]);} 
      else if(transaction.category==='Personal Care & Clothing'){setClothData((prevClothData) => [...prevClothData, transaction]);} 
      else if(transaction.category==='Miscellaneos'){setMiscellaneousData((prevMisData) => [...prevMisData, transaction]);} 
    })

    foodData.map((element) => {
      if (element.weekNumber === currentWeek) {
        setMyFoodData((prevFoodData) => [...prevFoodData, element.amount]);
      }
    });
  }






  return (
    <div className="App">
     <div className='container-fluid'>
      <div className='row'>
        <div className='col-md-3'>
        <NavBar />
        </div>
        <Router>
        <div className='col-md-9'>
        <Routes>
          <Route exact path='/' element={< DashBoard />}></Route>
          <Route exact path='/expense' element={< Expense />}></Route>
          <Route exact path='/inwardhistory' element={< InwardHistory />}></Route>
          <Route exact path='/miscellaneous' element={< Miscellanous miscellaneousData={miscellaneousData}/>}></Route>
          <Route exact path='/food' element={< Food myFoodData={myFoodData} getTransaction={getTransaction}/>}></Route>
          <Route exact path='/healthCare' element={< HealthCareInsurance healthData={healthData}/>}></Route>
          <Route exact path='/entertainment' element={< Entertainment  entertainmentData={entertainmentData}/>}></Route>
          <Route exact path='/transportation' element={< Transportation travelData={travelData}/>}></Route>
          <Route exact path='/personalCareClothing' element={< PersonalCareClothing clothData={clothData} />}></Route>
          <Route exact path='/educationalPersonalDevelopment' element={< EducationPersonalDevelopment  educationData={educationData}/>}></Route>
          <Route exact path='/about' element={< About />}></Route>
          </Routes>
        </div>
        </Router>
      </div>
      </div>    
    </div>  
  );
}

export default App;
