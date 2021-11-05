import React, { useContext } from "react";
import "./topbar.scss";
import {
  NotificationsNone,
  Language,
  Settings,
  BackspaceOutlined,
} from "@material-ui/icons";
import { signOut } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import { useHistory } from "react-router-dom";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    signOut(dispatch);
    history.push("/login");
  };

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">ADMIN</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            src="https://images.pexels.com/photos/364308/pexels-photo-364308.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt="avatar"
            className="topAvatar"
          />
          <BackspaceOutlined className="signOut" onClick={handleLogout} />
        </div>
      </div>
    </div>
  );
}
