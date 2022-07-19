import React from "react";
import "./SidebarChannel.css";

const SidebarChannel = ({ id, channel }) => {
  return (
    <div className="sidebar__channel">
      <h4>
        <span className="sidebar__channel--hash">#</span>Channel
      </h4>
    </div>
  );
};

export default SidebarChannel;
