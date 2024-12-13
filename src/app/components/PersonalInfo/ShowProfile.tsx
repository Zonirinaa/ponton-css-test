import React from "react";
import styles from "@/app/ui/input/checkbox.module.css";

const ShowProfile = () => {
  return (
    <div>
      <label className="checkbox">
        <input type="checkbox" className={styles.hidden_checkbox} />
        <span className={styles.custom_checkbox} />{" "}
        <p className={styles.text}>
          Show my profile to serious employers on <span>hirethesbest.io</span>{" "}
          for free
        </p>
      </label>
    </div>
  );
};

export default ShowProfile;
