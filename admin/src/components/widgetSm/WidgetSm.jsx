import React from "react";
import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3306490/pexels-photo-3306490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="profile picture"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neo</span>
            <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3306490/pexels-photo-3306490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="profile picture"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neo</span>
            <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3306490/pexels-photo-3306490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="profile picture"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neo</span>
            <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3306490/pexels-photo-3306490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="profile picture"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neo</span>
            <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images.pexels.com/photos/3306490/pexels-photo-3306490.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="profile picture"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Neo</span>
            <span className="widgetSmUserTitle">Web developer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon"/>
            Display
          </button>
        </li>
      </ul>
    </div>
  );
}
