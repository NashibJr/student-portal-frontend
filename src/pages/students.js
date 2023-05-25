import React, { useEffect, useState } from "react";
import heplerFunctions from "../components/helperFunctions";
import StudentPage from "../components/studentsPage";

const Students = () => {
  const [students, setStudents] = useState([]);

  const getStudents = async () => {
    try {
      const data = await heplerFunctions.getStudents();
      setStudents(Array.isArray(data.data.students) ? data.data.students : []);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getStudents();
  }, [null]);

  return <StudentPage students={students} />;
};

export default Students;
