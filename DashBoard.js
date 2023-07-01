import React from 'react'
import ContentArea from './ContentArea'
import BudgetForm from './BudgetForm'
import Expense from './Expense'
import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route,Link } from 'react-router-dom';

export default function Dashboard(props) {
  const [income,setIncome] = useState(0);

  const setMyIncome=async(inc)=>{
    setIncome(inc)
  }

  return (
    <>
      <BudgetForm  setIncome={setMyIncome}/>
      <ContentArea  income={income}/>
      <Link to="/expense">
      <button type="button" className="btn btn-info montFont fw-bold pill " style={{marginTop : '20px',marginBottom:'10px', marginLeft:'560px' }}>Add Expense</button>
      </Link>
    </>
  )
}

