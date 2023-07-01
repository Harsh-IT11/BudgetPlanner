import React, { useState,useEffect } from 'react';
import Food from './Icons/food.png'
import Cloth from './Icons/cloth.png'
import Health from './Icons/health.png'
import Movie from './Icons/movie.png'
import Plane from './Icons/plane.png'
import Study from './Icons/pen.png'
import Miscellaneous from './Icons/miscel.png'
import axios from 'axios'

export default function InwardHistory() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [transactions, setTransactions] = useState([])
  const [incomes, setIncomes] = useState([])

  const renderIcon = (category) => {
    switch (category) {
      case 'Food & Dining':
        return <img style={{width : '7%',marginRight : '8px'}} src={Food} alt="Food" />;
      case 'Personal Care & Clothing':
        return <img style={{width : '7%',marginRight : '8px'}} src={Cloth} alt="Cloth" />;
      case 'Healthcare & Insurance':
        return <img style={{width : '7%',marginRight : '8px'}} src={Health} alt="Health" />;
      case 'Entertainment':
        return <img style={{width : '7%',marginRight : '8px'}} src={Movie} alt="Movie" />;
      case 'Transportation':
        return <img style={{width : '7%',marginRight : '8px'}} src={Plane} alt="Plane" />;
      case 'Education & Personal Development':
        return <img style={{width : '7%',marginRight : '8px'}} src={Study} alt="Study" />;
      case 'Miscellaneous':
        return <img style={{width : '7%',marginRight : '8px'}} src={Miscellaneous} alt="Miscellaneous"/>;
      default:
        return null;
    }
  };

  useEffect(() => {
    const fetchIncome=async()=>{
      try {
        const response = await axios.get(`${backendUrl}/budget-items/get-total-income-list`)
        setIncomes(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Error in fetching the income list',error)
      }
    }
    fetchIncome()
  }, [])

  useEffect(() => {
    const fetchTransaction=async()=>{
      try {
        const response = await axios.get(`${backendUrl}/budget-items/get-total-transaction-list`)
        setTransactions(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Error in fetching the transaction list',error)
      }
    }
    fetchTransaction()
  }, [])

  
  return (
    <>
      <div className="row">
        <div className="col-sm-5 mb-3 mb-sm-0" style={{marginRight : '30px',marginLeft : '85px',marginTop  :'50px'}}>
          <div className="card shadow-lg border-1 border-dark">
            <div className="card-header border-1 border-dark fw-bold fs-3 text-center" style={{backgroundColor : '#0E2954',color : 'white'}}>Expense</div>
            <ul className="list-group list-group-flush" >
              {transactions.map((transaction)=>(
                <li className="list-group-item" key={transaction._id} style={{backgroundColor : '#FFFAD7'}}>
                  <div style={{display : 'flex',justifyContent : 'space-between'}}>
                    {renderIcon(transaction.category)}
                    <span style={{flexGrow : '1',paddingTop : '5px',fontWeight : '500'}}>{transaction.category}</span>
                    <span style={{flexShrink : '0',paddingTop : '5px',fontWeight:'bold',color : '#CD1818'}}>-₹{transaction.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-sm-5" style={{marginLeft : '30px',marginTop  :'50px'}}>
          <div className="card shadow-lg border-1 border-dark">
            <div className="card-header border-1 border-dark fw-bold fs-3 text-center" style={{backgroundColor : '#0E2954',color : 'white'}}>Income</div>
            <ul className="list-group list-group-flush">
              {incomes.map((income)=>(
                <li className="list-group-item" key={income._id} style={{backgroundColor : '#FFFAD7'}}>
                  <div style={{display : 'flex',justifyContent : 'space-between'}}>
                    {renderIcon(income.category)}
                    <span style={{flexGrow : '1',paddingTop : '5px',fontWeight : '500'}}>{income.category}</span>
                    <span style={{flexShrink : '0',paddingTop : '5px',fontWeight:'bold',color : '#379237'}}>+₹{income.amount}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}