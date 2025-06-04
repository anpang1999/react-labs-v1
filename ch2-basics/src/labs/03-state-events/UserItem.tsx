type User = {
  id: number;
  name: string;
};

type Props = {
  user: User;
  onRemove: (id: number) => void;
};

function UserItem({ user, onRemove }: Props) {
  return (
    <li>
      {user.name} <button onClick={() => onRemove(user.id)}>삭제</button>
    </li>
  );
}

export default UserItem;
