import React, { useEffect, useState } from "react";
import NavigationBar from "../components/navigation";
import heplerFunctions from "../components/helperFunctions";
import Input from "../components/input";
import TableHeads from "../components/tableHeads";
import Row from "../components/rows";

const Results = () => {
  const [results, setResults] = useState([]);
  const [searchedResults, setSearchedResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const inputAttributes = [
    {
      type: "text",
      name: "search",
      value: searchTerm,
      placeholder: "Search by Student number",
    },
  ];

  const fetchResults = async () => {
    const data = await heplerFunctions.getResults();
    setResults(data.data.marks);
  };

  const handleSearch = () => {
    try {
      const searchedResults = results.filter((result) =>
        String(result.student).includes(searchTerm)
      );
      setSearchedResults(searchedResults);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderedResults =
    searchedResults.length === 0 ? results : searchedResults;

  useEffect(() => {
    fetchResults();
    handleSearch();
  }, [searchTerm]);

  return (
    <div className="conatiner">
      <div className="row mb-5">
        <NavigationBar />
      </div>
      <div className="mx-auto container" style={{ marginTop: "15vh" }}>
        <form>
          {inputAttributes.map((attribute, index) => (
            <Input
              values={attribute}
              key={index}
              handleChange={(event) => setSearchTerm(event.target.value)}
            />
          ))}
        </form>
      </div>
      <div className="row mt-5 container table-responsive mx-auto">
        <h4>Results</h4>
        <table className="mt-1 table table-striped table-hover">
          <thead>
            <TableHeads />
          </thead>
          <tbody>
            {renderedResults.map((result) => (
              <Row result={result} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results;
