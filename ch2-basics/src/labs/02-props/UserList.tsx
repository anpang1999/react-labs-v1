type User = {
  id: number;
  name: string;
};

type UserListProps = {
  users: User[];
};

function UserList({ users }: UserListProps) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
