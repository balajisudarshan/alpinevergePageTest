import React from "react";
import "./Courses.css"; // Import the CSS file

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "C++ Programming",
      description: "Learn C++ from scratch with step-by-step tutorials.",
      thumbnail: "/assets/cpplogo.png",
    },
    {
      id: 2,
      title: "Python Programming",
      description: "Learn Python from scratch with step-by-step tutorials.",
      thumbnail: "/assets/cpplogo.png",

    },
    {
      id: 3,
      title: "JavaScript Programming",
      description: "Learn JavaScript from scratch with step-by-step tutorials.",
      thumbnail: "/assets/cpplogo.png",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Learn full-stack web development with hands-on projects.",
      thumbnail: "/assets/cpplogo.png",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Learn full-stack web development with hands-on projects.",
      thumbnail: "/assets/cpplogo.png",
    },
    {
      id: 4,
      title: "Web Development",
      description: "Learn full-stack web development with hands-on projects.",
      thumbnail: "/assets/cpplogo.png",
    },
  ];

  return (
    <section className="courses-section">
      <h1 className="courses-title">Our Courses</h1>

      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            {/* Course Image */}
            <div className="course-image">
              <img src={course.thumbnail} alt={course.title} />
            </div>

            {/* Course Info */}
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-description">{course.description}</p>
            </div>

            {/* Button */}
            <button className="course-button">Start Learning</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
