import React from "react";
import "./newUser.scss";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" className="newUserInput" placeholder="pedro" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="Pedro Rodriguez"
          />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            className="newUserInput"
            placeholder="pedro@gmail.com"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            className="newUserInput"
            placeholder="password"
          />
        </div>
        <div className="newUserItem">
          <label>Phone</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="+ 123 456 789"
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="text"
            className="newUserInput"
            placeholder="Barcelona | Spain"
          />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
