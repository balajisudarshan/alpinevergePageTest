import React from "react";
import "./Courses.css"; // Import the CSS file
import CourseCard from "./CourseCard";
const Courses = () => {
  return (
    <>
      <div className="courseContainer">
        <h2 className="heading">Course Offered</h2>
        <div className="courseSection">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </>
  );
};

export default Courses;
