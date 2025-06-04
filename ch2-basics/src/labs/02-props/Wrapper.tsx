import React from "react";

type WrapperProps = {
  children: React.ReactNode;
};

function Wrapper({ children }: WrapperProps) {
  return (
    <div style={{ border: "2px solid black", padding: "10px" }}>{children}</div>
  );
}

export default Wrapper;
