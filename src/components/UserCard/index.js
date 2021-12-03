import React from "react";
import "./user-card.scss";

const UserCard = ({ user }) => {
  const fullName = `${user.name.title} ${user.name.first} ${user.name.last}`;
  const fullAddress = `${user.location.street.number}, ${user.location.street.name},  ${user.location.city},  ${user.location.state},  ${user.location.country} `;
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
