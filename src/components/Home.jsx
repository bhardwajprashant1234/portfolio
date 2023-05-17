import React from "react";
import {  motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assests/logo.png";

const Home = ({ ratio }) => {
  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Parshant Bhardwaj
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer"],
              autoStart: true,
              loop: true,
              
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:bhardwajprashant449@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={me} alt="Parshant" />
      </section>
     
    </div>
  );
};

export default Home;
