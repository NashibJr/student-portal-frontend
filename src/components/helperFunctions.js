import app from "../app/client";

const heplerFunctions = {
  handleLogin: async (username, password) => {
    try {
      const data = await app.adminsClient.post("/login", {
        username,
        password,
      });
      const { message } = data.data.admin;
      alert(`${message}`);
    } catch (error) {
      alert(error.message);
    }
  },

  handleRegisterAdmin: async (username, email, password) => {
    try {
      const data = await app.adminsClient.post("", {
        username,
        email,
        password,
      });
      const { message } = data.data.admin;
      alert(`${message}`);
    } catch (error) {
      alert(error.message);
    }
  },

  getStudents: async () => {
    try {
      const data = await app.studentsClient.get();
      return data;
    } catch (error) {
      console.log(error);
    }
  },

  getAdmins: async () => {
    try {
      return await app.adminsClient.get();
    } catch (error) {
      console.log(error);
    }
  },

  getMarks: async () => {
    try {
      return await app.marksClient.get();
    } catch (error) {
      console.log(error);
    }
  },
};

export default heplerFunctions;
