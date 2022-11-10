import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/counter/userSlice";
import { auth } from "../../firebase";
import NavBar from "../../NavBar/NavBar";
import PlanScreen from "../Plans/PlanScreen";
import "./Profile.css";

function Profile() {

  const user = useSelector(selectUser);

  return (
    <div className="profile">
      <NavBar />
      <div className="profile_body">
        <h1>Edit Profile</h1>
        <div className="profile_img">
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            alt=""
          />
          <div className="profile_details">
            <h2>{user.email}</h2>
            <div className="profile_plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button onClick={()=>auth.signOut()} className="profile_btn">Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
