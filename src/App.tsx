import React from "react";

import "./App.css";
import { useMediaContext } from "./provider/MediaContext";

function App() {
  const { isDesktop, isMobile, isTablet } = useMediaContext();
  return (
    <div className="App">
      {isDesktop && <div className="Desktop_Block">ДЕСКТОП</div>}
      {isMobile && <div className="Mobile_Block">МОБИЛКА</div>}
      {isTablet && <div className="Tablet_Block">ПЛАНШЕТ</div>}
    </div>
  );
}

export default App;
