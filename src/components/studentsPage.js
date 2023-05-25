import React, { useEffect, useState } from "react";
import Character from "../components/character";
import studentIcon from "../icons/students.jpg";
import NavigationBar from "../components/navigation";
import Input from "../components/input";
import Footer from "./footer";

const StudentPage = ({ students, _class }) => {
  const [studentName, setStudentName] = useState("");
  const [results, setResults] = useState([]);
  const attributes = [
    {
      type: "text",
      name: "studentName",
      value: studentName,
      placeholder: "Search students",
    },
  ];

  const handleSearch = () => {
    const searhedStudents = students.filter((student) =>
      student.fullname.includes(studentName)
    );
    setResults(searhedStudents);
  };

  const renderStudents = results.length === 0 ? students : results;

  useEffect(() => {
    handleSearch();
  }, [studentName]);

  return (
    <div className="container students-content">
      <div className="row mb-5">
        <NavigationBar />
      </div>
      <div className="row mt-5">
        <p className="fw-bold">{_class} Students</p>
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
          <Character
            key={student._id}
            image={studentIcon}
            name={student.fullname}
            class_={student._class}
            house={student.house}
          />
        ))}
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default StudentPage;
