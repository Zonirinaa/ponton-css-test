import CustomInput from "@/app/ui/input/CustomInput";
import React from "react";
import styles from "@/app/ui/personalInfo.module.css";

const PersonalInfoForm = () => {
  return (
    <div className={styles.form}>
      <h4>Personal Information</h4>
      <div style={{ display: "flex", gap: "24px" }}>
        <CustomInput
          id="firstName"
          label="First Name"
          defaultValue="Peter"
          style={{ flex: "1 1 0%" }}
        />
        <CustomInput
          id="lastName"
          label="Last Name"
          defaultValue="Cetera"
          style={{ flex: "1 1 0%" }}
        />
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <CustomInput
          id="city"
          label="City"
          defaultValue="London"
          style={{ flex: "1 1 0%" }}
        />
        <CustomInput
          id="postalCode"
          label="Postal Code"
          defaultValue="E2 4XF"
          style={{ flex: "1 1 0%" }}
        />
      </div>
      <CustomInput
        id="address"
        label="Address"
        defaultValue="123 Example"
        style={{ flex: "1 1 0%" }}
      />
      <div style={{ display: "flex", gap: "24px" }}>
        <CustomInput
          id="email"
          label="Email"
          defaultValue="petter@gmail.com"
          type="email"
          style={{ flex: "1 1 0%" }}
        />
        <CustomInput
          id="phone"
          label="Phone"
          defaultValue="+442223334444"
          style={{ flex: "1 1 0%" }}
        />
      </div>
      <div style={{ display: "flex", gap: "24px" }}>
        <CustomInput
          id="password"
          label="Password"
          defaultValue="Password"
          style={{ flex: "1 1 0%" }}
        />
        <div style={{ flex: "1 1 0%" }} />
      </div>
      <p>
        Use this email to log in to your <a>resumedone.io</a> account and
        receive notifications.
      </p>
      <button className={styles.button}>Save</button>
    </div>
  );
};

export default PersonalInfoForm;
