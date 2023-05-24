import React, { useEffect, useState } from "react";
import heplerFunctions from "../components/helperFunctions";
import NavigationBar from "../components/navigation";
import Character from "../components/character";
import adminIcon from "../icons/admin.jpg";
import RegisterAdmin from "../components/registerAdmin";
import Footer from "../components/footer";

const Admins = () => {
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = async () => {
    const data = await heplerFunctions.getAdmins();
    setAdmins(data.data.admins);
  };

  useEffect(() => {
    fetchAdmins();
  }, [null]);

  return (
    <div className="container">
      <div className="row mb-5">
        <NavigationBar />
      </div>
      <div className="row" style={{ marginTop: "15vh" }}>
        {admins.map((admin) => (
          <Character
            key={admin._id}
            image={adminIcon}
            name={admin.username}
            class_={admin.email}
          />
        ))}
      </div>
      <div className="row container">
        <RegisterAdmin />
      </div>
      <div className="row">
        <Footer />
      </div>
    </div>
  );
};

export default Admins;
