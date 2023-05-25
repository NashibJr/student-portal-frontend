import React, { useState } from "react";
import heplerFunctions from "../components/helperFunctions";
import RegisterAndUpload from "../components/registerAndUpolad";

const UploadMarks = () => {
  const [state, setState] = useState({
    student: "",
    year: "",
    term: "",
    subject: "",
    mark: "",
  });

  const inputAttributes = [
    {
      type: "number",
      name: "student",
      value: state.student,
      placeholder: "Student number",
    },
    { type: "number", name: "year", value: state.year, placeholder: "Year" },
    { type: "number", name: "term", value: state.term, placeholder: "Term" },
    {
      type: "text",
      name: "subject",
      value: state.subject,
      placeholder: "Subject",
    },
    { type: "number", name: "mark", value: state.mark, placeholder: "Mark" },
  ];

  const postMarks = async () => {
    try {
      const data = await heplerFunctions.uploadMarks(
        state.student,
        state.year,
        state.term,
        state.subject,
        state.mark
      );

      alert(data.data.mark.message);
      setState({
        student: state.student,
        year: state.year,
        term: state.term,
        subject: "",
        mark: "",
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    event.preventDefault();
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const canSubmit =
    state.student && state.year && state.term && state.subject && state.mark;
  return (
    <RegisterAndUpload
      label="Upload Marks"
      attributes={inputAttributes}
      handleSubmit={postMarks}
      handleChange={handleChange}
      canSubmit={canSubmit}
    />
  );
};

export default UploadMarks;
