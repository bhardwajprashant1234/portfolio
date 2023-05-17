import React from "react";
import {  motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assests/data.json";

const Work = () => {
  const animations = {
    workSection: {
      initial: {
        opacity: 0,
        y: 50,
      },
      animate: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
        },
      },
    },
  };
 
  return (
    <div id="work">
      <motion.h2
        variants={animations.h2}
        initial="initial"
        animate="whileInView"
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        WORK
      </motion.h2>
      <section>
        <article>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            showThumbs={false}
            interval={2000}
            infiniteLoop={true}
            autoPlay={true}
          >
            {data.projects.map((i) => (
              <div key={i.title} className="workItem">
                <img src={i.imgSrc} alt={i.title} />
                <aside>
                  <h3>{i.title}</h3>
                  <p>{i.description}</p>
                  <a target={"blank"} href={i.url}>
                    View More
                  </a>
                </aside>
              </div>
            ))}
          </Carousel>
        </article>
      </section>
      
    </div>
    
  );
};

export default Work;
