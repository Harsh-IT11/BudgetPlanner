import React, { Component, useEffect, useState } from "react";
import { Routes, Route, useNavigate, BrowserRouter } from "react-router-dom";
import "./Expense.css";
import axios from 'axios';
// import { Select } from '@mui/base';

export default function Cardtrans() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const navigate = useNavigate();
  const navigateToIn = () => {
    navigate("/in");
  };
  const navigateToOut = () => {
    navigate("/out");
  };

  const [selectedCategory1, setSelectedCategory1] = useState('');
  const [selectedCategory2, setSelectedCategory2] = useState('');
  const [amount1, setAmount1] = useState('')
  const [amount2, setAmount2] = useState('')

  const handleCategoryChange1 = (event) => {
    setSelectedCategory1(event.target.value);
  };
  const handleCategoryChange2 = (event) => {
    setSelectedCategory2(event.target.value);
  }
  const handleAmountChange1=(event)=>{
    setAmount1(event.target.value);
  }
  const handleAmountChange2=(event)=>{
    setAmount2(event.target.value);  
  }

  const handleCreateTransaction=async()=>{
    if(selectedCategory1!==''){
      try {
        const response = await axios.post(`${backendUrl}/budget-items`, {
          category: selectedCategory1,
          amount: amount1
        });
        console.log(response.data); // Handle the response data
      } catch (error) {
        console.error('Error creating budget item:', error);
      }
      setSelectedCategory1('');
      setAmount1('');
    }
  }

  const handleCreateIncome=async()=>{
    if(selectedCategory2!==''){
      try {
        const response = await axios.post(`${backendUrl}/budget-items/add-income`, {
          category: selectedCategory2,
          amount: amount2
        });
        console.log(response.data); // Handle the response data
      } catch (error) {
        console.error('Error creating income item:', error);
      }
      setSelectedCategory2('');
      setAmount2('');
    }
  }

  return (
    <div >
    <div className="flex-box-space " style={{paddingTop : '120px',paddingBottom : '200px'}}>
      <div class="card text-center flex-box card-rish">
        <div class="card-body card-body-rish-out ">
          <h2 class="card-title">Expense</h2>
          <div>
            <p>Enter the amount: </p>
            <input name="Amount in rupees" value={amount1} onChange={handleAmountChange1} />
          </div>
          <div>
          <div className="flex-box">
        <p>Category: </p>
        <div class="dropdown">
          <select
            className="btn btn-secondary dropdown dropdown-toggle"
            aria-label="Default select example"
            aria-expanded="false"
            value = {selectedCategory1} 
            onChange={handleCategoryChange1}
          >
            <option className="btn btn-secondary dropdown-toggle dropdown-menu dropdown">
              Open this select menu
            </option>
            <option className="dropdown-item" value="Food & Dining" icon="src/logo.svg">
            Food & Dining
            </option>
            <option className="dropdown-item" value="Transportation">
            Transportation
            </option>
            <option className="dropdown-item" value="Healthcare & Insurance">
            Healthcare & Insurance
            </option>
            <option className="dropdown-item" value="Personal Care & Clothing">
            Personal Care & Clothing
            </option>
            <option className="dropdown-item" value="Entertainment">
            Entertainment
            </option>
            <option className="dropdown-item" value="Education & Personal Development">
            Education & Personal Development
            </option>
            <option className="dropdown-item" value="Miscellaneous">
              Miscellaneous
            </option>
          </select>
        </div>
      </div>
          </div>

          <div className="buttons buttons-rish">
            <button class="btn-hover btn-hover-rish color-7" onClick={handleCreateTransaction}>Submit</button>
          </div>
        </div>
      </div>
      <div class="card text-center flex-box card-rish">
        <div class="card-body card-body-rish-in">
          <h2 class="card-title card-title-rish">
            Income
          </h2>

          <div className="flex-bo">
            <p>Enter the amount: </p>
            <input name="Amount in rupees" value={amount2} onChange={handleAmountChange2}/>
          </div>
          <div>
          <div className="flex-box">
        <p>Category: </p>
        <div class="dropdown">
          <select
            className="btn btn-secondary dropdown dropdown-toggle"
            aria-label="Default select example"
            aria-expanded="false"
            value = {selectedCategory2} 
            onChange={handleCategoryChange2}
          >
            <option className="btn btn-secondary dropdown-toggle dropdown-menu dropdown">
              Open this select menu
            </option>
            <option className="dropdown-item" value="Food & Dining" icon="src/logo.svg">
            Food & Dining
            </option>
            <option className="dropdown-item" value="Transportation">
            Transportation
            </option>
            <option className="dropdown-item" value="Healthcare & Insurance">
            Healthcare & Insurance
            </option>
            <option className="dropdown-item" value="Personal Care & Clothing">
            Personal Care & Clothing
            </option>
            <option className="dropdown-item" value="Entertainment">
            Entertainment
            </option>
            <option className="dropdown-item" value="Education & Personal Development">
            Education & Personal Development
            </option>
            <option className="dropdown-item" value="Miscellaneous">
            Miscellaneous
            </option>
          </select>
        </div>
      </div>
          </div>

          <div className="buttons buttons-rish">
            <button class="btn-hover color-7 btn-hover-rish" onClick={handleCreateIncome}>Submit</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

// function In(){
//   return(
//     <div>
//               <div class="card-body">
//           <h2 class="card-title">Record an inward transcation</h2>

//           <div className='flex-bo'>
//               <p>Enter the amount: </p>
//               <input  name='Amount in rupees'/>
//               </div>
//               <div >
//                 <Dropdown/>
//                 {/* <Dpdn /> */}
//               </div>

//           <div className='buttons buttons-rish'>

//               <button class="btn-hover btn-hover-rish color-7">Submit</button>
//           </div>
//           </div>
//     </div>

//   )
// }

// function Out(){
//   return(
//     <div>
//               <div class="card-body">
//           <h2 class="card-title">Record an Outward transcation</h2>

//           <div className='flex-bo'>
//               <p>Enter the amount: </p>
//               <input  name='Amount in rupees'/>
//               </div>
//               <div >
//                 <Dropdown/>
//               </div>

//           <div className='buttons buttons-rish'>

//               <button class="btn-hover color-7">Submit</button>
//           </div>
//           </div>
//     </div>

//   )
// }
