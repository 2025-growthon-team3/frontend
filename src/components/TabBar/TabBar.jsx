import React, { useState } from "react";
import * as T from "./TabBar.style";

// image
import locationIcon from "../../assets/images/locationIcon.png";
import locationIconOrange from "../../assets/images/locationIconOrange.png";
import locationIconMint from "../../assets/images/locationIconMint.png";
import homeIcon from "../../assets/images/homeIcon.png";
import homeIconOrange from "../../assets/images/homeIconOrange.png";
import homeIconMint from "../../assets/images/homeIconMint.png";
import personIcon from "../../assets/images/personIcon.png";
import personIconOrange from "../../assets/images/personIconOrange.png";
import personIconMint from "../../assets/images/personIconMint.png";

const icons = [locationIcon, homeIcon, personIcon];
const iconsOrange = [locationIconOrange, homeIconOrange, personIconOrange];
const iconsMint = [locationIconMint, homeIconMint, personIconMint];

const TabBar = ({ onTabChange, type }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
    if (onTabChange) onTabChange(index);
  };

  return (
    <T.Container>
      {icons.map((icon, index) => {
        const isActive = activeTab === index;

        const activeIcons =
          type === "ongi" ? iconsMint : type === "songil" ? iconsOrange : icons;
        const iconSrc = isActive ? activeIcons[index] : icon;

        return (
          <T.TabItem
            key={index}
            isActive={isActive}
            onClick={() => handleTabClick(index)}
          >
            <img src={iconSrc} alt={`tab-icon-${index}`} />
          </T.TabItem>
        );
      })}
    </T.Container>
  );
};

export default TabBar;
