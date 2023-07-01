import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
import { useState, useEffect } from "react";
import axios from "axios";
import Fluid from "./Icons/fluid.jpg";

export default function BudgetForm(props) {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [categTotal, setCategTotal] = useState(0);
  const [income, setIncome] = useState(0);
  let percent = Math.ceil((categTotal / income) * 100);
  const gradientColors = {
    0: "yellow", // Green at 0% progress
    100: "red", // Red at 100% progress
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/budget-items/get-total-income`
        );
        setIncome(response.data);
        console.log(response.data);
        console.log("total : " + response.data);
      } catch (error) {
        console.error("Error fetching total-income amount:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/budget-items/total-amount`
        );
        setCategTotal(response.data);
        // console.log('total Categ amount = '+response.data)
      } catch (error) {
        console.error("Error fetching category-wise amount:", error);
      }
    };
    fetchData();
  }, [props.handleCreateTransaction]);

  props.setIncome(income);

  const gradientStyles = buildStyles({
    pathColor: `url(#gradient)`,
    textColor: "#4F4557",
    textSize: "25px",
  });

  return (
    <>
      <div className="container card my-4 rounded shadow latoFont budgetform  ">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "20px",
            overflow: "hidden",
          }}
        >
          <ChangingProgressProvider values={[0, percent]}>
            {(percentage) => (
              <div>
                <svg style={{ width: "150px" }}>
                  <defs>
                    <linearGradient
                      id="gradient"
                      gradientTransform="rotate(90)"
                    >
                      {Object.entries(gradientColors).map(([stop, color]) => (
                        <stop
                          key={stop}
                          offset={`${stop}%`}
                          stopColor={color}
                        />
                      ))}
                    </linearGradient>
                  </defs>
                  <CircularProgressbar
                    strokeWidth={14}
                    value={percentage}
                    text={`${percentage}%`}
                    styles={gradientStyles}
                  />
                </svg>
              </div>
            )}
          </ChangingProgressProvider>
          <span style={{ marginLeft: "20px" }}>
            {/* <span style={{fontSize : '60px'}}></span> */}
            <p className="montFont" style={{ fontSize: "25px", margin: "0px" }}>
              Total remaining budget
            </p>
            <div>
              <span style={{ fontSize: "45px", color: "#4F4557" }}>
                &#8377;{categTotal}
              </span>
              <span className="text-muted" style={{ fontSize: "25px" }}>
                /&#8377;{income}
              </span>
              {/* <img src={Edit} alt="Edit" style={{padding:'0px 0px 10px 0px'}} />  */}
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
