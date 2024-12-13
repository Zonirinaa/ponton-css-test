import Image from "next/image";
import React from "react";
import styles from "@/app/ui/sidebar.module.css";

const SidebarMenuItem = ({
  iconSrc,
  text,
  actionIconSrc,
  variant = "menu",
}: {
  iconSrc: string;
  text: string;
  actionIconSrc?: string;
  variant?: "menu" | "submenu";
}) => {
  return (
    <div className={variant == "menu" ? styles.menuItem : styles.submenuItem}>
      <Image
        src={iconSrc}
        alt="icon"
        height={0}
        width={0}
        style={{ marginRight: "4px", height: "auto", width: "auto" }}
      />
      <div className={styles.menuText}>{text}</div>
      {actionIconSrc && (
        <Image
          src={actionIconSrc}
          alt="actionIcon"
          height={0}
          width={0}
          style={{ marginRight: "4px", height: "auto", width: "auto" }}
        />
      )}
    </div>
  );
};

export default SidebarMenuItem;
