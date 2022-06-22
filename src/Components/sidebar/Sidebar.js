import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import StoreIcon from "@mui/icons-material/Store";
import ListAltIcon from "@mui/icons-material/ListAlt";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AssessmentIcon from "@mui/icons-material/Assessment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="heading">SuperShopee </span>
      </div>
      {/* <hr /> */}
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            {<DashboardIcon className="icon"/>}
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <li>
            {<GroupIcon className="icon"/>}
            <span>Users</span>
          </li>
          <li>
            {<StoreIcon className="icon"/>}
            <span>Products</span>
          </li>
          <li>
            {<ListAltIcon className="icon" />}
            <span>Orders</span>
          </li>
          <li>
            {<LocalShippingIcon className="icon"/>}
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            {<AssessmentIcon className="icon"/>}
            <span>Stats</span>
          </li>
          <li>
            {<NotificationsIcon className="icon"/>}
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            {<SettingsSystemDaydreamOutlinedIcon className="icon"/>}
            <span>System Health</span>
          </li>
          <li>
            {<PsychologyOutlinedIcon className="icon"/>}
            <span>Logs</span>
          </li>

          <li>
            {<SettingsOutlinedIcon className="icon"/>}
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            {<AccountCircleOutlinedIcon className="icon"/>}
            <span>Profile</span>
          </li>
          <li>
            {<ExitToAppOutlinedIcon className="icon"/>}
            <span>Logout</span>
          </li>
          <p className="title">THEME</p>
        </ul>
      </div>
      <div className="bottom">
        <div className="color_options"></div>
        <div className="color_options"></div>
      </div>
    </div>
  );
}

export default Sidebar;
