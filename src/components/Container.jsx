import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import StarsCanvas from "../threejs/Stars";
import EarthCanvas from "../threejs/Earth";

const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="container">
          <div className="left " data-aos="fade-right" data-aos-once="true">
            <h1 className="title- ">
              <span id="hover" className="title- white">
                H
              </span>
              <span id="hover" className="title- white">
                e
              </span>
              <span id="hover" className="title- white">
                y,
              </span>
            </h1>

            <h1 className=" title_">
              <div className="space">
                <span id="hover" className="title_ color">
                  I'
                </span>
                <span id="hover" className="title_ color">
                  m
                </span>
              </div>
              <span id="hover" className="title_ color">
                J
              </span>
              <span id="hover" className="title_ color">
                H
              </span>
              <span id="hover" className="title_ color">
                O
              </span>
              <span id="hover" className="title_ color">
                N
              </span>
            </h1>

            <p className="header__para">
              Lorem ipsum dolor sit <b className="color"> amet consectetur </b> adipisicing elit. Odit
              placeat laborum illo iure maxime, <b className="color"> id doloremque!</b> Alias et sit, aut
              aliquam eum nam ipsam adipisci similique autem quibusdam <b className="color"> molestiae
              natus.</b>
            </p>
            <div className="social__list">
              <a href="/" target={"_blank"} className="social__link click">
                <img src={github} alt="" className="ic__img" />
              </a>
              <a href="/" target={"_blank"} className="social__link click">
                <img src={linkedin} alt="" className="ic__img" />
              </a>
              <a href={"#"} target={"_blank"} className="social__link click">
                <FontAwesomeIcon icon="fa-file-pdf" className="ic__img" />
              </a>
            </div>
          </div>
          <div className="right" data-aos="fade-left" data-aos-once="true">
            <EarthCanvas />
          </div>
          {<StarsCanvas /> || ""}
        </div>
      </div>
    </div>
  );
};

export default Container;
