import React from "react";

const TableHeads = () => {
  const tableheads = [
    "Student Num",
    "Name",
    "Subject",
    "Class",
    "Year",
    "Term",
    "Mark",
  ];
  return (
    <tr>
      {tableheads.map((head, index) => (
        <th key={index}>{head}</th>
      ))}
    </tr>
  );
};

export default TableHeads;
