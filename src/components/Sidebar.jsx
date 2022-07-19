import React from "react";
import "./Sidebar.css";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import SidebarChannel from "./SidebarChannel";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import VideocamIcon from '@mui/icons-material/Videocam';
import ScreenShareIcon from '@mui/icons-material/ScreenShare';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import CallIcon from '@mui/icons-material/Call'
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h3>Kyu's Chat</h3>
        <ExpandMoreIcon />
      </div>
      <div className="sidebar__channels">
        <div className="sidebar__channels--header">
          <div className="sidebar__header">
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>
          <AddIcon className="sidebar__add-channel" />
        </div>
        <div className="sidebar__channels--list">
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
          <SidebarChannel />
        </div>
      </div>
      <div className="sidebar__voice">
        <SignalCellularAltIcon
          className="sidebar__voice--icon"
          fontSize="large"
        />
        <div className="sidebar__voice--info">
            <h3>Voice Disconnected</h3>
            <p>Kyu's Chat</p>
        </div>
        <div className="sidebar__voice--icons">
            <InfoOutlinedIcon />
            <CallIcon />
        </div>
      </div>
      <div className="sidebar__voice--buttons">
        <Button variant="contained" startIcon={<VideocamIcon />}>
            Video
        </Button>
        <Button variant="contained" startIcon={<ScreenShareIcon />}>
            Screen
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
