import React from "react";

const Row = ({ result }) => {
  return (
    <tr key={result._id}>
      <td>{result.student}</td>
      <td>{result.studentName}</td>
      <td>{result.subject}</td>
      <td>{result._class}</td>
      <td>{result.year}</td>
      <td>{result.term}</td>
      <td>{result.mark}</td>
    </tr>
  );
};

export default Row;
