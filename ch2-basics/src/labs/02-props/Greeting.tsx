type GreetingProps = {
  name: string;
};

function Greeting({ name }: GreetingProps) {
  return <p>안녕하세요, {name}님!</p>;
}

export default Greeting;
