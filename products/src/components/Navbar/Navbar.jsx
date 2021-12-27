import React from "react";
import { ShellBar } from "@ui5/webcomponents-react/dist/ShellBar";
import { Avatar } from "@ui5/webcomponents-react/dist/Avatar";

const style = {
  shell: {
    overflow: "hidden",
    top: 0,
    width: "100%",
    zIndex: 100,
  },
  emptySpace: {
    paddingTop: "44px",
  },
};

function Navbar(props) {
  return (
    <ShellBar
      slot={props.slot}
      style={style.shell}
      primaryTitle="Shop UI5"
      showCoPilot={true}
      showProductSwitch={true}
      logo={
        <img
          src="https://www.seekpng.com/png/full/145-1457731_2-color-tracks-sap-ui-5-logo.png"
          alt="Logo"
        />
      }
      profile={
        <Avatar
          children={
            <img
              src="https://sap.github.io/ui5-webcomponents/assets/images/avatars/man_avatar_1.png"
              alt="Profile"
            />
          }
        />
      }
    />
  );
}

export default Navbar;
