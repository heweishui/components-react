import React, { ReactNode, useState } from "react";

export interface InputIProps {
  title: string;
  type: string;
  onPressEnter?: (e: any) => void;
}

const Input = (props: InputIProps) => {
  const { title, type, onPressEnter } = props;
  const [data, setData] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const rowPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onPressEnter && onPressEnter(data);
    }
  };

  const inputElement: ReactNode = (
    <div>
      <p>{title}</p>
      <input
        type={type}
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) => rowPressEnter(e)}
      />
    </div>
  );
  return <>{inputElement}</>;
};
export default Input;
