import React from "react";
import Image from "next/image";
import styles from "@/app/ui/personalInfo.module.css";

const PremiumAccountCard = () => {
  return (
    <div className={styles.premiumCard}>
      <div className={styles.premiumCardLogo}>
        <Image
          src="/icons/personalInfo/career.png"
          alt="Career"
          width={48}
          height={48}
        />
      </div>
      <div>
        <h4>Premium Account</h4>
        <p>
          You have a premium account, granting you access to all the remarkable
          features offered by ResumeDone. With this privilege, you can indulge
          in the freedom of downloading an unlimited number of resumes and cover
          letters in both PDF and Word formats.
        </p>
      </div>
    </div>
  );
};

export default PremiumAccountCard;
