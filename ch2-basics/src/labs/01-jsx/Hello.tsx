export default function Hello() {
  const a = 5;
  const b = 3;

  function add(x: number, y: number): number {
    return x + y;
  }

  return (
    <div>
      <h1>Hello, React!</h1>

      <p>a = {a}</p>
      <p>b = {b}</p>
      <p>a + b = {a + b}</p>
      <p>add(a, b) = {add(a, b)}</p>
    </div>
  );
}
