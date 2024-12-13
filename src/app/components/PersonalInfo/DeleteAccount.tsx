import React from "react";
import styles from "@/app/ui/personalInfo.module.css";

const DeleteAccount = () => {
  return (
    <div className={styles.deleteAccount}>
      <div>
        <h5 style={{ marginBottom: "8px" }}>Delete Account</h5>
        <p>
          If you delete your account you’ll be permanently removing it from our
          systems - you can’t undo it.
        </p>
      </div>
      <div className={styles.deleteBtn}>Yes, Delete my account</div>
    </div>
  );
};

export default DeleteAccount;
