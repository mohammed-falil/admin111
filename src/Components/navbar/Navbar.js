import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";

function Navbar() {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon"/>
          </div>

          <div className="item">
            <FullscreenExitOutlinedIcon className="icon"/>
          </div>

          <div className="item">
            <NotificationsIcon className="icon"/>
            <div className="counter">100+</div>
          </div>

          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>

          <div className="item">
            <ListOutlinedIcon className="icon"/>
          </div>
          <div className="item">
            <img src="https://i.picsum.photos/id/1002/4312/2868.jpg?hmac=5LlLE-NY9oMnmIQp7ms6IfdvSUQOzP_O3DPMWmyNxwo"
            className="avatar"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
