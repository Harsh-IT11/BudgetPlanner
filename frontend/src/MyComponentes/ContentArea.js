import React from "react";
import Cards from "./Cards";
import axios from "axios";
import { useState, useEffect } from "react";

export default function ContentArea(props) {
  const backendUrl = process.env.REACT_APP_BACKEND_URL;
  const [categSum, setCategSum] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${backendUrl}/budget-items/category-wise-amount-sum`
        );
        setCategSum(response.data); // Store the response data in the 'categ' state
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching category-wise amount:", error);
      }
    };
    fetchData(); // Call the fetchData function immediately
  }, [props.handleCreateTransaction]);

  let FoodAmount = 0;
  let TransAmount = 0;
  let HealthAmount = 0;
  let ClothAmount = 0;
  let FunAmount = 0;
  let EduAmount = 0;
  let MisAmount = 0;
  if (categSum) {
    // Add null/undefined check before using map
    categSum.map((element) => {
      if (element._id === "Food & Dining") FoodAmount = element.totalAmount;
      else if (element._id === "Transportation")
        TransAmount = element.totalAmount;
      else if (element._id === "Healthcare & Insurance")
        HealthAmount = element.totalAmount;
      else if (element._id === "Personal Care & Clothing")
        ClothAmount = element.totalAmount;
      else if (element._id === "Entertainment") FunAmount = element.totalAmount;
      else if (element._id === "Education & Personal Development")
        EduAmount = element.totalAmount;
      else if (element._id === "Miscellaneous") MisAmount = element.totalAmount;
    });
  }

  return (
    <div className="pt-3 ">
      <div className="container rounded montFont">
        <h5 style={{ padding: "12px", fontSize: "30px", marginBottom: "0px" }}>
          Expense
        </h5>
        <div
          class="container text-center"
          style={{ padding: "0px 12px 12px 12px" }}
        >
          <div class="row">
            <div class="col colpad">
              <Cards
                title="Food & Dining"
                color="#FFA41B"
                category="Food"
                currentAmount={FoodAmount}
                totalAmount={props.income}
              />
            </div>
            <div class="col colpad">
              <Cards
                title="Transportation"
                color="#CD1818"
                category="Plane"
                currentAmount={TransAmount}
                totalAmount={props.income}
              />
            </div>
          </div>
          <div class="row">
            <div class="col colpad">
              <Cards
                title="Healthcare & Insurance"
                color="#30A2FF"
                category="Health"
                currentAmount={HealthAmount}
                totalAmount={props.income}
              />
            </div>
            <div class="col colpad">
              <Cards
                title="Personal Care & Clothing"
                color="#82CD47"
                category="Cloth"
                currentAmount={ClothAmount}
                totalAmount={props.income}
              />
            </div>
          </div>
          <div class="row">
            <div class="col colpad">
              <Cards
                title="Entertainment"
                color="#F9D949"
                category="Movie"
                currentAmount={FunAmount}
                totalAmount={props.income}
              />
            </div>
            <div class="col colpad">
              <Cards
                title="Education & Personal Development"
                color="#F24C3D"
                category="Study"
                currentAmount={EduAmount}
                totalAmount={props.income}
              />
            </div>
          </div>
          <div class="row">
            <div class="col colpad">
              <Cards
                title="Miscellaneous"
                color="#64CCC5"
                category="Miscellaneous"
                currentAmount={MisAmount}
                totalAmount={props.income}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
