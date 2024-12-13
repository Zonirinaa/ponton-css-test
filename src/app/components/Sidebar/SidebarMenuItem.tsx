import Image, { StaticImageData } from "next/image";
import React from "react";
import styles from "@/app/ui/sidebar.module.css";

const SidebarMenuItem = ({
  icon,
  text,
  actionIcon,
  variant = "menu",
}: {
  icon: StaticImageData;
  text: string;
  actionIcon?: StaticImageData;
  variant?: "menu" | "submenu";
}) => {
  return (
    <div className={variant == "menu" ? styles.menuItem : styles.submenuItem}>
      <Image src={icon} alt="icon" style={{ marginRight: "4px" }} />
      <div className={styles.menuText}>{text}</div>
      {actionIcon && (
        <Image
          src={actionIcon}
          alt="actionIcon"
          style={{ marginRight: "4px", cursor: "pointer" }}
        />
      )}
    </div>
  );
};

export default SidebarMenuItem;
