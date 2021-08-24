import React from "react";
import ElementsSlider from "./slider/ElementsSlider";
import BridgingGapBetweenJuniorsAndSeniors from "./illustration-components/BridgingGapBetweenJuniorsAndSeniors";
import CreateConnectAndTrancend from "./illustration-components/CreateConnectAndTrancend";
import PushingBoundariesOnOurIdeasAndOurCraft from "./illustration-components/PushingBoundariesOnOurIdeasAndOurCraft";
import homePageSliderOpacityController from "./helper-functions/home-page-slider-opacity-controller";
import homePageSliderScaleController from "./helper-functions/home-page-slider-scale-controller";
import WhatIsUthaanMainContent from "./what-is-uthaan-content/WhatIsUthaanMainContent";

const IllustionComponentsArray = [
  <BridgingGapBetweenJuniorsAndSeniors />,
  <CreateConnectAndTrancend />,
  <PushingBoundariesOnOurIdeasAndOurCraft />,
];

function HomeUpperSection() {
  return (
    <div>
      <WhatIsUthaanMainContent />
      <ElementsSlider
        sliderComponents={IllustionComponentsArray}
        opacityFunction={homePageSliderOpacityController}
        scaleFunction={homePageSliderScaleController}
      />
    </div>
  );
}

export default HomeUpperSection;
