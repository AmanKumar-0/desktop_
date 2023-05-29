import React from "react";
import "./FriendsEnrolled.css";

type DataTypes = {
  name: string;
  time: string;
  courses_enrolled: number;
  amount: number;
  courses: string[];
};
//  Creating FriendsEnrolled component to display the friends enrolled

const FriendsEnrolled = () => {
  /* Creating data array to store the data of each friend enrolled
    Each friend has a name, time, courses enrolled, amount and courses
    This data is mapped over to display the friends enrolled */

  const data: DataTypes[] = [
    {
      name: "Dhiraj Saxsena",
      time: "14 Sep, 2022",
      courses_enrolled: 6,
      amount: 185,
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "Java", "MERN"],
    },
    {
      name: "Subhash Mishra",
      time: "15 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "C++",
      ],
    },
    {
      name: "Prafull Kumar",
      time: "16 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
      ],
    },
  ];
  return (
    <div className="Friennds-enrolled">
      <h3>
        Friends Enrolled{" "}
        <span className="Friennds-enrolled-number">({data.length})</span>
      </h3>
      <div className="cards">
        {/* 
        Mapping over the data array to display the friends enrolled
        */}
        {data.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <h5>{item.name}</h5>
              <p>{item.time}</p>
            </div>
            <div className="card-body">
              <div className="courses">
                <p>Courses Enrolled ({item.courses_enrolled})</p>
                <div className="courses-list">
                  {/* 
                  Mapping over the courses array to display the courses enrolled by the friend
                  */}
                  {item.courses.map((course, index) => (
                    <div className="course" key={index}>
                      <p key={index}>{course}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="card-footer">
              <div className="amount">
                <p>Referral Amount</p>
                <h2>₹{item.amount}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="terms">
        <p>Terms & Conditions</p>
      </div>
    </div>
  );
};

export default FriendsEnrolled;
