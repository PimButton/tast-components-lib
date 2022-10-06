// Components==============
import React, { useState } from "react";
import { Bars, Cog, Logout, Th } from "./icons";
import TastSpace from "./TastSpace/TastSpace";
import "./TopNav.scss";
// =========================

export function TopNav({
  setHamburgerNavOpen,
  image,
  userInfo,
  handleProfileClick,
  handleLogout,
  items,
}: {
  setHamburgerNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
  image: string;
  userInfo: React.ReactNode;
  handleProfileClick: () => void;
  handleLogout: () => void;
  items?: React.ReactNode;
}) {
  const [displayTastSpace, setDisplayTastSpace] = useState(false);

  return (
    <div className="top-nav">
      <div
        onClick={() => setHamburgerNavOpen(true)}
        className="icon right hamburger"
      >
        <Bars />
      </div>
      <div className="right">
        {/* Other items */}
        {items}
        {/* tastspace */}
        <div
          onClick={() => setDisplayTastSpace((prev) => !prev)}
          className={`icon left tast-cloud ${displayTastSpace ? "open" : ""}`}
        >
          <Th />
          {displayTastSpace && <TastSpace />}
        </div>
        {/* settings */}
        <div onClick={handleProfileClick} className="icon large left">
          <div className="user">
            <img src={image} alt="avatar" />
            <div className="user-info">{userInfo}</div>
          </div>
          <Cog />
        </div>
        {/* logout */}
        <div onClick={handleLogout} className="icon left">
          <Logout />
        </div>
      </div>
    </div>
  );
}
