import React from "react";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h2>Parshant Bhardwaj</h2>
        <p>Life is a canvas; paint it with passion and purpose.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://instagram.com/bhardwaj.prashant.07" target="_blank">
            <AiFillInstagram />
          </a>
          <a href="https://github.com/bhardwajprashant1234" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://m.facebook.com/prashant.bhardwaj.7374480l" target="_blank">
            <AiFillFacebook />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
