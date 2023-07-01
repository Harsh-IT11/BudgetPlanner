import React from "react";
import User from "./Icons/user.png"
import inwardhistory from "./Icons/inwardHistory.png"
import dashboard from "./Icons/dashboard.png"
import group from "./Icons/group.png"
import menu from "./Icons/menu.png"
import optionlines from "./Icons/optionslines.png"
import transactionHistory from "./Icons/transactionHistory.png"
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="maincontainer montFont" style={{backgroundColor: '#0E2954'}}>
      <div className="vertical-nav k hover-nav nav-kaus" id="sidebar" style={{backgroundColor: '#0E2954'}}>
        <div className="py-4 px-3 mb-4 " style={{backgroundColor: '#0E2954'}}>
          <div className="media d-flex align-items-center">
          <img src={User} alt="User" style={{width : '90px',height : '90px',marginLeft:'60px',marginRight:'70px'}} />
            {/* <img
              src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png"
              alt="..."
              width="65"
              className="mr-3 rounded-circle img-thumbnail shadow-sm"
            /> */}
            <div className="media-body"></div>
          </div>
        </div>
        <ul className="nav flex-column  mb-0 " style={{paddingLeft : '30px',backgroundColor: '#0E2954'}}>
          <li className="nav-item">
            <a href="/" className="nav-link text-light font-italic  " style={{backgroundColor: '#0E2954'}}>
              <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
              <img src={menu} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} />
              DashBoard
            </a>
          </li>
          <li className="nav-item">
            <a href="/expense" className="nav-link text-light font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
              <img src={transactionHistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} />
              Expense
            </a>
          </li>
          <li className="nav-item">
            <a href="/inwardhistory" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} />
              Inward History
            </a>
          </li>
          {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle text-light bg-dark" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> 
            Category
        </a>
        <div className='dropdown'>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/foodDining">Food & Dining</a>
          <a className="dropdown-item" href="/healthCare">HealthCare & Insurence</a>
          <a className="dropdown-item" href="/entertainment">Entertainment</a>
          <a className="dropdown-item" href="/transportation">Transportation</a>
          <a className="dropdown-item" href="/personalCareClothing">Personal Care & Clothing</a>
          <a className="dropdown-item" href="/educationalPersonalDevelopment">Educational & Personal Development</a>
          <a className="dropdown-item" href="/miscellaneous">Miscellaneos</a>
        </div>
        </div>
    </li> */}
          <li className="nav-item ">
          <img src={optionlines} alt="User" style={{width : '24px',height : '24px',marginLeft:'17px', marginBottom:'-54px'}} />
            <select className="nav-link text-light " style={{marginLeft:'23px',backgroundColor: '#0E2954'}}>
            </select>
          </li>
          <li className="nav-item">
            <a href="/food" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={Food} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Food
            </a>
          </li>
          <li className="nav-item">
            <a href="/transportation" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Transportation
            </a>
          </li>
          <li className="nav-item">
            <a href="/healthCare" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              HealthCare & Insurence
            </a>
          </li>
          <li className="nav-item">
            <a href="/entertainment" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Entertainment
            </a>
          </li>
          <li className="nav-item">
            <a href="/personalCareClothing" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Personal Care & Clothing
            </a>
          </li>
          <li className="nav-item">
            <a href="/educationalPersonalDevelopment" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Education&Advancement
            </a>
          </li>
          <li className="nav-item">
            <a href="/miscellaneous" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Miscellaneous
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              <img src={group} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} />
              About
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="page-content p-5" id="content">         ...required contnet comonent will come here...
</div> */}
    </div>
  );
}

export default NavBar;
