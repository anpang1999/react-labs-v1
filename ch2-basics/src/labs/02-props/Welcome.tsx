type WelcomeProps = {
  nickname?: string;
};

function Welcome({ nickname }: WelcomeProps) {
  return (
    <p>{nickname ? `환영합니다, ${nickname}님!` : "방문자님, 환영합니다!"}</p>
  );
}

export default Welcome;
