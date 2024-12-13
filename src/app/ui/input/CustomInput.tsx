import React, { CSSProperties, HTMLInputTypeAttribute } from "react";
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
  return (
    <div className={styles.input_wrapper} style={style}>
      <input
        type={type}
        id={id}
        className={`${styles.input}`}
        defaultValue={defaultValue}
        required
      />
      <label htmlFor={id} className={styles.placeholder}>
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
