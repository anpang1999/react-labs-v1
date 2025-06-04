import { useState } from "react";
import UserItem from "./UserItem";

type User = {
  id: number;
  name: string;
};

function UserList() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "윤유저" },
    { id: 2, name: "김유저" },
  ]);

  const handleRemove = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <ul>
      {users.map((user) => (
        <UserItem key={user.id} user={user} onRemove={handleRemove} />
      ))}
    </ul>
  );
}

export default UserList;
