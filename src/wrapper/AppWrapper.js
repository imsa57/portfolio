import React from "react";
import { NavigationDots, SocialMedia } from "../components";

const AppWrapper = (Components, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames}`}>
        <SocialMedia />
        <div className="app__wrapper app__flex">
          <Components />

          <div className="copyright">
            {/* <p className="p-tex">@2022 </p> */}
            <p className="p-tex">ALL right reserved</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrapper;
