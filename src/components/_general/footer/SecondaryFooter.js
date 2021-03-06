import React from "react";

import ImageStackComponent from "./footer_helper/ImageStackComponent";
import { Link } from "react-router-dom";

import "../../../styles/_general/secondary_footer.css";

import importAll from "../helpers/import_all";
import uthaanLogo from "../../../assets/uthaan_logo/uthaan_logo.svg";
import { contactLinks } from "../../../utils/GeneralConstants";

const images = importAll(
  require.context(
    "../../../assets/_general/social_media_icons",
    false,
    /\.(png|jpe?g|svg)$/
  )
);

const SocialMediaIcons = [
  "facebook",
  "mail",
  "instagram",
  "youtube",
  "linkedin",
  "github",
];

const SocialMediaIconsList = SocialMediaIcons.map(
  (SocialMediaIconName, index) => {
    return (
      <ImageStackComponent
        key={index}
        link={contactLinks[SocialMediaIconName]}
        normalDisplay={images[`ic_${SocialMediaIconName}.svg`].default}
        hoverDisplay={images[`h_ic_${SocialMediaIconName}.svg`].default}
        iconsClass="secondary-footer-social-media-icons"
      />
    );
  }
);

function SecondaryFooter() {
  return (
    <div className="secondary-footer-wrapper">
      <div className="secondary-footer-left-wrapper">
        <Link to="/">
          <img src={uthaanLogo} alt="uthaanlogo" />
        </Link>
        <div className="secondary-footer-left-copyright-wrapper">
          Copyright (c) 2021
        </div>
      </div>
      <div className="secondary-footer-right-wrapper">
        <div className="secondary-footer-social-media-icons-wrapper">
          {SocialMediaIconsList}
        </div>
        <p>
          <Link to="/">Privacy Policy</Link>
          <span>|</span>
          <Link to="/">Terms of Use</Link>
        </p>
      </div>
    </div>
  );
}

export default SecondaryFooter;
