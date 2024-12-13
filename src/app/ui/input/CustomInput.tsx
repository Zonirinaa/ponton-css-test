"use client";
import React, {
  ChangeEvent,
  CSSProperties,
  HTMLInputTypeAttribute,
  useEffect,
  useState,
} from "react";
import styles from "./customInput.module.css";

const CustomInput = ({
  id,
  label,
  type = "text",
  defaultValue,
  style,
}: {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string;
  style?: CSSProperties;
}) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(value));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (type === "email") {
      validateEmail(value);
    }
  };

  useEffect(() => {
    if (type == "email" && defaultValue) validateEmail(defaultValue);
  }, []);

  return (
    <div className={`${styles.input_wrapper}`} style={style}>
      <input
        type={type}
        id={id}
        className={`${styles.input} ${
          isValid === true
            ? styles.icon_check
            : isValid === false
            ? styles.icon_x
            : ""
        }`}
        defaultValue={defaultValue}
        required
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.placeholder}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
