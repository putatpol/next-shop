import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto px-3">
      <div className="flex justify-between py-10 flex-wrap gap-y-3">
        <h5>StyleDee</h5>
        <div className="flex items-center space-x-5 [&_svg]:size-6">
          <Link
            href={"https://www.linkedin.com/in/puttapol-putthati-611048289"}
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
          <Link href={"https://github.com/putatpol"} target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </Link>
          <Link href={"mailto:puttapol.put@gmail.com"} target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
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
