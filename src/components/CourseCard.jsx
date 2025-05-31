import React from "react";
import webimg from "../assets/fullstackweb.jpeg";
import "./CourseCard.css";
const CourseCard = ({ image, title, description }) => {
  return (
    <div className="courseCard">
      <div className="thumbnail">
        <img src={webimg} alt="tumba" />
      </div>
      <div className="courseContent">
        <div className="ratingSection">
          <div className="rating">4.5/5</div>
          <div className="fouriteLogo">❤</div>
        </div>
        <div className="cardContent">
          <h2>Web Development Complete RoadMap</h2>
        </div>
        <div className="props">
            <div className="prop">
                📷 20
            </div>
            <div className="prop">
                🕐 8hr 40min
            </div>
            <div className="prop">
                🕴 1.7k
            </div>
        </div>
        <div className="buttonContainer">
            <div className="amount">
                89$
            </div>
            <div className="enrollBtn">
                <button>Enroll Now</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
