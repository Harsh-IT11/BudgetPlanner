import React from "react";
import User from "./Icons/user.png"
import inwardhistory from "./Icons/inwardHistory.png"
import dashboard from "./Icons/dashboard.png"
import group from "./Icons/group.png"
import menu from "./Icons/menu.png"
import optionlines from "./Icons/optionslines.png"
import transactionHistory from "./Icons/transactionHistory.png"
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function NavBar() {
  
  
  return (
    <div className="maincontainer montFont" style={{backgroundColor: '#0E2954'}}>
      <div className="vertical-nav k hover-nav nav-kaus" id="sidebar" style={{backgroundColor: '#0E2954'}}>
        <div className="py-4 px-3 mb-4 " style={{backgroundColor: '#0E2954'}}>
          <div className="media d-flex align-items-center">
          <img src={User} alt="User" style={{width : '90px',height : '90px',marginLeft:'60px',marginRight:'70px'}} />
            <div className="media-body"></div>
          </div>
        </div>
        <ul className="nav flex-column  mb-0 " style={{paddingLeft : '30px',backgroundColor: '#0E2954'}}>
          <li className="nav-item">
            <a href="/" className="nav-link text-light font-italic  " style={{backgroundColor: '#0E2954'}}>
              <i className="fa fa-th-large mr-3 text-primary fa-fw"></i>
              <img src={menu} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px',marginRight : '10px'}} />
              DashBoard
            </a>
          </li>
          <li className="nav-item">
            <a href="/expense" className="nav-link text-light font-italic">
              <i className="fa fa-cubes mr-3 text-primary fa-fw"></i>
              <img src={transactionHistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px',marginRight : '10px'}} />
              Add Transaction
            </a>
          </li>
          <li className="nav-item">
            <a href="/inwardhistory" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px',marginRight : '10px'}} />
              Transaction History
            </a>
          </li>
          <li className="nav-item">
            <a href="/food" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              Food
            </a>
          </li>
          <li className="nav-item">
            <a href="/transportation" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Transportation
            </a>
          </li>
          <li className="nav-item">
            <a href="/healthCare" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              HealthCare & Insurence
            </a>
          </li>
          <li className="nav-item">
            <a href="/entertainment" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Entertainment
            </a>
          </li>
          <li className="nav-item">
            <a href="/personalCareClothing" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Personal Care & Clothing
            </a>
          </li>
          <li className="nav-item">
            <a href="/educationalPersonalDevelopment" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Education&Advancement
            </a>
          </li>
          <li className="nav-item">
            <a href="/miscellaneous" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw" style={{paddingLeft : '50px'}}></i>
              {/* <img src={inwardhistory} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px'}} /> */}
              Miscellaneous
            </a>
          </li>
          <li className="nav-item">
            <a href="/about" className="nav-link text-light font-italic">
              <i className="fa fa-picture-o mr-3 text-primary fa-fw"></i>
              <img src={group} alt="User" style={{width : '24px',height : '24px',marginLeft:'10px',marginRight : '10px'}} />
              About
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
