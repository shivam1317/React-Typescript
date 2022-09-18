import React from "react";

export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div>You are at profile page and your name is {name}</div>;
};

export default Profile;
