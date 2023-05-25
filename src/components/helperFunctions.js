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
      return data;
    } catch (error) {
      return {
        message: error.message,
      };
    }
  },

  getStudents: async () => {
    try {
      const data = await app.studentsClient.get();
      return data;
    } catch (error) {
      return error;
    }
  },

  getAdmins: async () => {
    try {
      return await app.adminsClient.get();
    } catch (error) {
      return error;
    }
  },

  registerStudents: async (_id, fullname, password, _class, address, house) => {
    try {
      const data = await app.studentsClient.post("", {
        _id,
        fullname,
        password,
        _class,
        address,
        house,
      });
      return data;
    } catch (error) {
      return error;
    }
  },

  getResults: async () => {
    try {
      const data = await app.marksClient.get();
      return data;
    } catch (error) {
      return error;
    }
  },

  uploadMarks: async (student, year, term, subject, mark) => {
    try {
      const data = await app.marksClient.post("", {
        student,
        year,
        term,
        subject,
        mark,
      });
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default heplerFunctions;
