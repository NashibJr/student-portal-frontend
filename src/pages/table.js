import React from "react";
import Row from "../components/row";

const Table = ({ data }) => {
  return (
    <div className="mt-5 p-3">
      <thead>
        <tr>
          <th>Student Num</th>
          <th>Name</th>
          <th>Subject</th>
          <th>Year</th>
          <th>Term</th>
          <th>Mark</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((data) => (
          <Row
            key={data._id}
            studentNumber={data.student}
            name={data.studentName}
            subject={data.subject}
            year={data.year}
            term={data.term}
            mark={data.mark}
          />
        ))}
      </tbody>
    </div>
  );
};

export default Table;
