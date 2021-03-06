import React from "react";
import "../../../../styles/home/upper-section/what-is-uthaan-content/WhatIsUthaanMainContent.css";
import WhatIsUthaanStyledText from "./WhatIsUthaanStyledText";

function WhatIsUthaan() {
  return (
    <div className="what-is-uthaan">
      <div className="what-is-uthaan-left-wrapper-wrapper">
        <div className="what-is-uthaan-left-wrapper">
          <span>What</span>
          <span>is</span>
        </div>
        <div className="what-is-uthaan-right-wrapper">Uthaan</div>
      </div>
      <div className="what-is-uthaan-right-wrapper-wrapper">?</div>
    </div>
  );
}

function WhatIsUthaanMainContent({ currentState = 0 }) {
  return (
    <div className="what-is-uthaan-main-wrapper">
      <WhatIsUthaan />
      <div className="what-is-uthaan-title-content-wrapper">
      <WhatIsUthaanStyledText currentState={currentState} />
      </div>
    </div>
  );
}

export default WhatIsUthaanMainContent;
