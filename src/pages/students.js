import React, { useEffect, useState } from "react";
import Student from "../components/student";
import studentIcon from "../icons/students.jpg";
import NavigationBar from "../components/navigation";
import Input from "../components/input";
import heplerFunctions from "../components/helperFunctions";

const Students = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [results, setResults] = useState([]);
  const attributes = [
    {
      type: "text",
      name: "studentName",
      value: studentName,
      placeholder: "Search students",
    },
  ];

  const getStudents = async () => {
    try {
      const data = await heplerFunctions.getStudents();
      setStudents(Array.isArray(data.data.students) ? data.data.students : []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = () => {
    const searhedStudents = students.filter((student) =>
      student.fullname.includes(studentName)
    );
    setResults(searhedStudents);
  };

  const renderStudents = results.length === 0 ? students : results;

  useEffect(() => {
    handleSearch();
    getStudents();
  }, [studentName]);

  return (
    <div className="container students-content">
      <div className="row mb-5">
        <NavigationBar />
      </div>
      <div className="row mt-5">
        <form>
          {attributes.map((attribute, index) => (
            <Input
              key={index}
              values={attribute}
              handleChange={(event) => setStudentName(event.target.value)}
            />
          ))}
        </form>
      </div>
      <div className="row mt-5">
        {renderStudents?.map((student) => (
          <Student
            key={student._id}
            image={studentIcon}
            name={student.fullname}
            class_={student.class}
          />
        ))}
      </div>
    </div>
  );
};

export default Students;
