import React from "react";

export default function About() {
  return (
    <div>
      <div className="row">
        <h1>Welcome to our Budget Planner website!!</h1>
        <div className="fs-4 fw-bold">
          Your ultimate financial
          companion for effective money management. Our platform is designed to
          simplify and streamline the process of budgeting, helping you achieve
          your financial goals and gain control over your expenses. With a range
          of powerful functionalities, we empower you to track your income,
          expenses, and savings with ease.
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 pb-4 pt-4">
          <div className="card" style={{ backgroundColor: "#FCAEAE" }}>
            <div className="card-body">
              <h5 className="card-title ps-2 fs-3">Add Expense:</h5>
              <p className="card-text">
                Our budget planner allows you to effortlessly add and categorize
                your expenses. By logging your expenses, you gain a
                comprehensive overview of where your money is going. Whether
                it's groceries, bills, entertainment, or any other expense, you
                can easily record and monitor your spending habits.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 pt-4">
          <div className="card" style={{ backgroundColor: "#FCAEAE" }}>
            <div className="card-body">
              <h5 className="card-title ps-2 fs-3">Add Income:</h5>
              <p className="card-text">
                In addition to tracking your expenses, our platform enables you
                to input your income sources. By keeping a record of your
                income, you can effectively balance your earnings against your
                expenses and ensure financial stability. It's easy to add and
                update your income details as your financial situation evolves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <div className="card" style={{ backgroundColor: "#FCAEAE" }}>
            <div className="card-body">
              <h5 className="card-title ps-2 fs-3">
                Tracking Category-Wise Expense:
              </h5>
              <p className="card-text">
                We understand the importance of organizing your expenses by
                categories. Our budget planner provides a user-friendly
                interface that allows you to assign expenses to specific
                categories such as groceries, transportation, housing,
                entertainment, and more. By tracking your expenses by category,
                you can identify areas where you may be overspending and make
                informed decisions to optimize your budget.
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" style={{ backgroundColor: "#FCAEAE" }}>
            <div className="card-body">
              <h5 className="card-title ps-2 fs-3">
                Weekly Category-Wise Graph:
              </h5>
              <p className="card-text">
                Visualizing your financial data is key to understanding your
                spending patterns. Our budget planner offers an insightful
                weekly category-wise graph that visually represents your
                expenses across different categories. With this graph, you can
                easily identify trends, analyze your spending habits, and make
                informed adjustments to align your expenses with your financial
                goals.
              </p>
            </div>
          </div>
        </div>
        <div className="fs-4 fw-bold">
          At our Budget Planner website, we are committed to providing you with
          a user-friendly and comprehensive platform to take control of your
          finances. We aim to empower you with the tools and insights necessary
          to make informed financial decisions and achieve financial freedom.
          Start your journey towards financial well-being with our budget
          planner today!
        </div>
      </div>
    </div>
  );
}
