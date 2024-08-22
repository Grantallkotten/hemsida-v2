import React from "react";

import GithubLink from "../../assets/icons/GithubLink";
import LinkedinLink from "../../assets/icons/LinkedinLink";
import InstagramLinlk from "../../assets/icons/InstagramLinlk";
import MailLink from "../../assets/icons/MailLink";

import "../../styles/footer.css";

function Footer() {
  return (
    <section className="footer-wrapper">
      <div className="footer-socials-wrapper">
        <GithubLink />
        <LinkedinLink />
        <InstagramLinlk />
        <MailLink />
      </div>
      <hr />
      <p>&copy; 2024 Wilhelm Björkström</p>
    </section>
  );
}

export default Footer;