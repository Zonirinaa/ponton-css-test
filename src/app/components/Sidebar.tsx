import React from "react";
import Image from "next/image";
import styles from "@/app/ui/sidebar.module.css";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarFooter from "./SidebarFooter";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <Image
          src="/icons/sidebar/Resumizeme.svg"
          alt="Resumizeme logo"
          width={114.47}
          height={24}
        />
      </div>
      <div className={styles.menu}>
        <div>
          <SidebarMenuItem
            iconSrc="/icons/sidebar/template.png"
            text="My templates"
          />
        </div>
        <div>
          <SidebarMenuItem iconSrc="/icons/sidebar/search.png" text="Search" />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Software Engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Computer hardware engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Network Engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Technical Support"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Network administrator"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Management"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Data analysis"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/star.png"
            text="Computer technician"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Past search 1"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Past search 2"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Computers and information..."
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Database Administrator"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Computer security"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/clock.png"
            text="Computer Systems Analyst"
            variant="submenu"
          />
        </div>
        <div>
          <SidebarMenuItem
            iconSrc="/icons/sidebar/board.png"
            text="My boards"
            actionIconSrc="/icons/sidebar/add.png"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/documents.png"
            text="Board 1"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/documents.png"
            text="Board 2"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/documents.png"
            text="Board 3"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/padlock.png"
            text="Board agent 1"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/padlock.png"
            text="Board agent 2"
            variant="submenu"
          />
          <SidebarMenuItem
            iconSrc="/icons/sidebar/padlock.png"
            text="Board agent 3"
            variant="submenu"
          />
        </div>
      </div>
      <SidebarFooter />
    </nav>
  );
};

export default Sidebar;
