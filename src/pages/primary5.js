import React, { useEffect, useState } from "react";
import heplerFunctions from "../components/helperFunctions";
import Class from "../components/classes";

const PrimaryFive = () => {
  const [students, setStudents] = useState([]);
  const fetchStudents = async () => {
    const data = await heplerFunctions.getStudents();
    setStudents(data.data.students);
  };
  useEffect(() => {
    fetchStudents();
  }, [null]);
  return <Class students={students} _class="P5" />;
};

export default PrimaryFive;
