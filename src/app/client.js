import axios from "axios";

const client = (baseURL) => {
  return axios.create({
    baseURL,
  });
};

const app = {
  adminsClient: client("http://localhost:3000/admin"),
  studentsClient: client("http://localhost:3000/students"),
  marksClient: client("http://localhost:3000/mark"),
};

export default app;
