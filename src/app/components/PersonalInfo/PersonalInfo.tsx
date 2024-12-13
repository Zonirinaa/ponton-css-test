import React from "react";
import styles from "@/app/ui/personalInfo.module.css";
import PremiumAccountCard from "./PremiumAccountCard";
import PersonalInfoForm from "./PersonalInfoForm";
import ShowProfile from "./ShowProfile";

const PersonalInfo = () => {
  return (
    <div className={styles.personalInfoContainer}>
      <PremiumAccountCard />
      <PersonalInfoForm />
      <ShowProfile />
    </div>
  );
};

export default PersonalInfo;
