import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigation";
import heplerFunctions from "../components/helperFunctions";
import DashboardComponent from "../components/dashboardComponent";
import students from "../icons/students.jpg";
import admin from "../icons/admin.jpg";
import classes from "../icons/classes.jpg";
import results from "../icons/results.jpg";
import Footer from "../components/footer";

const Dashboard = () => {
  const [state, setState] = useState({
    students: [],
    admins: [],
    marks: [],
  });
  let studentsNumber, adminsNumber, resultsNumber;

  const fetchData = async () => {
    const students = await heplerFunctions.getStudents();
    const admins = await heplerFunctions.getAdmins();
    const marks = await heplerFunctions.getMarks();
    setState({
      students: students.data.students,
      admins: admins.data.admins,
      marks: marks.data.marks,
    });
  };
  studentsNumber = state.students.length;
  adminsNumber = state.admins.length;
  resultsNumber = state.marks.length;

  const values = [
    { image: students, label: "Students", number: studentsNumber, link: "#" },
    { image: admin, label: "Adminstrators", number: adminsNumber, link: "#" },
    { image: classes, label: "Classes", number: 10, link: "#" },
    { image: results, label: "Results", number: resultsNumber, link: "#" },
  ];

  useEffect(() => {
    fetchData();
  }, [null]);

  return (
    <div className="container">
      <div className="row mb-5">
        <NavigationBar />
      </div>
      <div className="row mt-5 p-2" style={{ backgroundColor: "#fdfdfd" }}>
        {values.map((value) => (
          <DashboardComponent key={value.label} values={value} />
        ))}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
