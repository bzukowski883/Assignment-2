import "../styles/components.css";
import { useState } from "react";

function SidebarWrapper({children, activePage, setActivePage }){
    return(
        <div className="sidebar">
            <h2 className="navHeader">Proton Navigation</h2>

            {children}
        </div>
    )
}

export default function Sidebar({ activePage, setActivePage }){
    // Overview (Compass)
    const OverviewIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <path d="M14.5 9.5L13 13L9.5 14.5L11 11L14.5 9.5Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
    );

    // Accounts (User)
    const AccountsIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 20C4 15.6 7.6 14 12 14C16.4 14 20 15.6 20 20" stroke="currentColor" strokeWidth="2"/>
    </svg>
    );

    // Alerts (Bell)
    const AlertsIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C8 2 6 6 6 9V14L4 16V17H20V16L18 14V9C18 6 16 2 12 2Z" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="19" r="1" fill="currentColor"/>
    </svg>
    );

    // Reports (Bar Chart)
    const ReportsIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 20V10" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 20V4" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 20V14" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 20H2" stroke="currentColor" strokeWidth="2"/>
    </svg>
    );

    // Team (Multiple Users)
    const TeamIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <circle cx="16" cy="8" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M2 20C2 15.6 5.6 14 10 14C14.4 14 18 15.6 18 20" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 20C22 16.5 20 14.5 17 14" stroke="currentColor" strokeWidth="2"/>
    </svg>
    );

    // Settings (Gear)
    const SettingsIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M19.4 15C19.6 14.4 19.7 13.7 19.7 13C19.7 12.3 19.6 11.6 19.4 11L21 9L19 5L16.5 6C15.9 5.6 15.2 5.3 14.5 5.1L14 3H10L9.5 5.1C8.8 5.3 8.1 5.6 7.5 6L5 5L3 9L4.6 11C4.4 11.6 4.3 12.3 4.3 13C4.3 13.7 4.4 14.4 4.6 15L3 17L5 21L7.5 20C8.1 20.4 8.8 20.7 9.5 20.9L10 23H14L14.5 20.9C15.2 20.7 15.9 20.4 16.5 20L19 21L21 17L19.4 15Z" stroke="currentColor" strokeWidth="2"/>
    </svg>
    );

    const navItems = [
    { name: "Overview", icon: OverviewIcon, page: "Overview" },
    { name: "Accounts", icon: AccountsIcon, page: "Accounts" },
    { name: "Alerts", icon: AlertsIcon, page: "Alerts" },
    { name: "Reports", icon: ReportsIcon, page: "Reports"},
    { name: "Teams", icon: TeamIcon, page: "Teams" },
    { name: "Settings", icon: SettingsIcon, page: "Settings" },
    ];

  return (
    <SidebarWrapper>
      {navItems.map(item => (
        <Navitem
          key={item.name}
          name={item.name}
          icon={item.icon}
          onSelect={() => setActivePage(item.page)}
          active={activePage === item.page}
        />
      ))}
    </SidebarWrapper>
  );
}


function Navitem({name, icon, onSelect}){
    return <button className="navButton" onClick={onSelect}> <h3>{icon} {name}</h3> </button>
}