import React from "react";
import Image from "next/image";
import styles from "@/app/ui/sidebar.module.css";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarFooter from "./SidebarFooter";
import logo from "../../../../public/icons/sidebar/Resumizeme.svg";
import template from "../../../../public/icons/sidebar/template.svg";
import search from "../../../../public/icons/sidebar/search.svg";
import star from "../../../../public/icons/sidebar/star.png";
import clock from "../../../../public/icons/sidebar/clock.svg";
import board from "../../../../public/icons/sidebar/board.svg";
import add from "../../../../public/icons/sidebar/add.png";
import documents from "../../../../public/icons/sidebar/documents.png";
import padlock from "../../../../public/icons/sidebar/padlock.png";

const Sidebar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.image}>
        <Image src={logo} alt="Resumizeme logo" />
      </div>
      <div className={styles.menu}>
        <div>
          <SidebarMenuItem icon={template} text="My templates" />
        </div>
        <div>
          <SidebarMenuItem icon={search} text="Search" />
          <SidebarMenuItem
            icon={star}
            text="Software Engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={star}
            text="Computer hardware engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={star}
            text="Network Engineer"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={star}
            text="Technical Support"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={star}
            text="Network administrator"
            variant="submenu"
          />
          <SidebarMenuItem icon={star} text="Management" variant="submenu" />
          <SidebarMenuItem icon={star} text="Data analysis" variant="submenu" />
          <SidebarMenuItem
            icon={star}
            text="Computer technician"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Past search 1"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Past search 2"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Computers and information..."
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Database Administrator"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Computer security"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={clock}
            text="Computer Systems Analyst"
            variant="submenu"
          />
        </div>
        <div>
          <SidebarMenuItem icon={board} text="My boards" actionIcon={add} />
          <SidebarMenuItem icon={board} text="Board 1" variant="submenu" />
          <SidebarMenuItem icon={documents} text="Board 2" variant="submenu" />
          <SidebarMenuItem icon={documents} text="Board 3" variant="submenu" />
          <SidebarMenuItem
            icon={padlock}
            text="Board agent 1"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={padlock}
            text="Board agent 2"
            variant="submenu"
          />
          <SidebarMenuItem
            icon={padlock}
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
