interface User {
  name: string;
  age: number;
}

type ProfileProps = {
  user: User;
};

function Profile({ user }: ProfileProps) {
  const { name, age } = user;

  return (
    <div>
      <p>이름: {name}</p>
      <p>나이: {age}</p>
    </div>
  );
}

export default Profile;
