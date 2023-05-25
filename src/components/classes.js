import React from "react";
import StudentPage from "./studentsPage";

const Class = ({ students, _class }) => {
  const studentsByClass = students.filter(
    (student) => student._class === _class
  );
  return <StudentPage students={studentsByClass} _class={_class} />;
};

export default Class;
