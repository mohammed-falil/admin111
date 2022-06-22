import React from "react";
import Navbar from "../../Components/navbar/Navbar";
import Sidebar from "../../Components/sidebar/Sidebar";
import Widgets from "../../Components/widgets/Widgets";
import "./home.scss";
function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="home_container">
        <Navbar />
        <div className="widgets">
          <Widgets />
          <Widgets />
          <Widgets />
          <Widgets />
        </div>
      </div>
    </div>
  );
}

export default Home;
