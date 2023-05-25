import React from "react";

const Row = ({
  values: { mark, student, studentName, subject, year, term },
}) => {
  <tr>
    <td>{student}</td>
    <td>{studentName}</td>
    <td>{subject}</td>
    <td>{year}</td>
    <td>{term}</td>
    <td>{mark}</td>
  </tr>;
};

export default Row;
