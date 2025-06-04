type ButtonProps = {
  onClick: () => void;
};

function Button({ onClick }: ButtonProps) {
  return <button onClick={onClick}>클릭</button>;
}

export default Button;
