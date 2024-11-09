import React from 'react';
import './activity.css';
import './activity.scss';

// Imported Icons ==============>
  import { BsArrowRight } from "react-icons/bs";

// Imported Images ==============>
  import img from '../../../Assets/user1.JPG';
  import img1 from '../../../Assets/user2.jpg';
  import img2 from '../../../Assets/user3.jpg';
  import img3 from '../../../Assets/user4.png';

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>Recent Activities</h1>
        <button className='btn flex'>
          See All
          <BsArrowRight className='icon' />
        </button>
      </div>

      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kaks Via</span>
            <small>Order a new plant</small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kaks Via</span>
            <small>Order a new plant</small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kaks Via</span>
            <small>Order a new plant</small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kaks Via</span>
            <small>Order a new plant</small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>

        <div className="singleCustomer flex">
          <img src={img} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kaks Via</span>
            <small>Order a new plant</small>
          </div>
          <div className="duration">
            2 min ago 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activity;