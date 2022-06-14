import React from "react";
import SidebarItem from "./SidebarItem";
import items from "../data/sidebar.json";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="text-center py-3">
        <h2>LOGO</h2>
      </div>
      {items.map((item, index) => (
        <SidebarItem key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
