import React from "react";
import styles from "./Input.module.css";

const Input = ({
  id,
  name,
  type,
  value,
  setValue,
  onBlur,
  error,
  onChange,
}: any) => {
  return (
    <>
      <label htmlFor={id}>{name}</label>
      <input
        type={type}
        id={id}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
