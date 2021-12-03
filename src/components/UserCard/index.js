import React from "react";
import { formAddress, formFullName } from "utils";
import "./user-card.scss";

const UserCard = ({ user }) => {
  const fullName = formFullName(user);
  const fullAddress = formAddress(user);
  return (
    <div className="user-card">
      <div className="user-img-wrapper">
        <img src={user.picture.large} alt={"user"} />
      </div>
      <h6 className="typ-title">{fullName}</h6>
      <h6 className="typ-info">{user.email}</h6>
      <div className="seperator"></div>
      <h6 className="typ-address">{fullAddress}</h6>
    </div>
  );
};

export default UserCard;
