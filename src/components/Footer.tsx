import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-between py-10">
        <h5>StyleDee</h5>
        <div className="flex items-center space-x-5 *:size-6">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faGithub} />
        </div>
        <div className="flex items-center space-x-5 text-gray-400">
          <p>Front-end Project</p>
          <FontAwesomeIcon icon={faCircle} className="size-2" />
          <p>Puttapol Putthati</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
