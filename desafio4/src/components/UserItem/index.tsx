import React from "react";

import "./styles.css";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

interface UserItemProps {
  user: User;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  return (
    <article className="user-item">
      <header>
        <img src={user.avatar} alt={user.first_name} />
        <div>
          <strong>
            {user.first_name} {user.last_name}
          </strong>
          <span>{user.email}</span>
        </div>
      </header>
    </article>
  );
};

export default UserItem;
