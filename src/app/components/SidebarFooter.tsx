import React from "react";
import Image from "next/image";
import styles from "@/app/ui/sidebar.module.css";

const SidebarFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.profileInfo}>
        <Image
          src="/profile.png"
          alt="Profile picture"
          height={32}
          width={32}
          className={styles.profileImg}
        />
        <div className={styles.profileName}>Carla</div>
      </div>
      <div>
        <Image
          src="/icons/sidebar/setting.png"
          alt="setting"
          height={16}
          width={16}
          className={styles.settingImg}
        />
      </div>
    </div>
  );
};

export default SidebarFooter;
