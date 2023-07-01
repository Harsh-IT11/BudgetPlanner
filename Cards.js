import React from 'react'
import PropTypes from 'prop-types'
import Food from './Icons/food.png'
import Cloth from './Icons/cloth.png'
import Health from './Icons/health.png'
import Movie from './Icons/movie.png'
import Plane from './Icons/plane.png'
import Study from './Icons/pen.png'
import Miscellaneous from './Icons/miscel.png'

export default function Cards(props) {  
  let percent = (props.currentAmount/props.totalAmount)*100;


  const renderIcon = () => {
    switch (props.category) {
      case 'Food':
        return <img className="categ-icon" src={Food} alt="Food" />;
      case 'Cloth':
        return <img className="categ-icon" src={Cloth} alt="Cloth" />;
      case 'Health':
        return <img className="categ-icon" src={Health} alt="Health" />;
      case 'Movie':
        return <img className="categ-icon" src={Movie} alt="Movie" />;
      case 'Plane':
        return <img className="categ-icon" src={Plane} alt="Plane" />;
      case 'Study':
        return <img className="categ-icon" src={Study} alt="Study" />;
      case 'Miscellaneous':
        return <img className="categ-icon" src={Miscellaneous} alt="Miscellaneous" style={{ marginRight: '10px' }} />;
      default:
        return null;
    }
  };

  return (
    <div>
        <div className="card container my-2" style={{padding : '15px'}}> 
            <div className="card-body" style={{padding : '0px',display : 'flex',alignItems: 'center'}}>
                {renderIcon()}
                <h5 className="card-title montFont" style={{margin :'0'}} >{props.title}</h5>
                <span className="latoFont" style={{fontSize : '30px',marginLeft: 'auto',fontSize:'20px'}}>&#8377;{props.currentAmount}</span>
                <a href="#" style={{marginLeft: '0px'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-chevron-right"
                    >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg> 
                </a>
            </div>
            {/* progress */}
            <div className="progress" style={{marginTop:'10px'}} role="progressbar" aria-label="Warning example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div className="progress-bar rounded" style={{width : `${percent}%`,backgroundColor:`${props.color}`}} ></div>
            </div>   
        </div>
    </div>
  )
}

Cards.propTypes={
  title : PropTypes.string,
  category : PropTypes.string
}