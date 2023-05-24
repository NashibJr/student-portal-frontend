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

  getMarks: async () => {
    try {
      return await app.marksClient.get();
    } catch (error) {
      return error;
    }
  },

  registerStudents: async (id, fullname, password, class_, address, house) => {
    try {
      const data = await app.studentsClient.post("", {
        id,
        fullname,
        password,
        class_,
        address,
        house,
      });
      return data;
    } catch (error) {
      return error;
    }
  },
};

export default heplerFunctions;
