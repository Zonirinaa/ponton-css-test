import React from "react";
import styles from "@/app/ui/personalInfo.module.css";
import PremiumAccountCard from "./PremiumAccountCard";
import PersonalInfoForm from "./PersonalInfoForm";
import ShowProfile from "./ShowProfile";
import DeleteAccount from "./DeleteAccount";

const PersonalInfo = () => {
  return (
    <div className={styles.personalInfoContainer}>
      <PremiumAccountCard />
      <PersonalInfoForm />
      <ShowProfile />
      <DeleteAccount />
    </div>
  );
};

export default PersonalInfo;
