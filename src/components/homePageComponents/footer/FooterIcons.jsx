import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const socialIcons = [
  { id: 1, icon: faTwitter },
  { id: 2, icon: faInstagram },
  { id: 3, icon: faFacebook },
  { id: 4, icon: faLinkedin },
  { id: 5, icon: faYoutube },
];

function SocialIcons() {
  return (
    <div className="flex border-2 border-solid border-red-400 w-full py-5 mt-4 gap-6 text-2xl">
      {socialIcons.map((icon) => (
        <FontAwesomeIcon
          key={icon.id}
          icon={icon.icon}
          className="hover:cursor-pointer"
        />
      ))}
    </div>
  );
}

export default SocialIcons;
