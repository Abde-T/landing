import React from "react";
import item1 from "../assets/item1.png";
import arrow from "../assets/arrow.png";
import item3 from "../assets/item3.png";

const Container = () => {
  return (
    <div className="container__wrapper">
      <div className="row">
        <div className="container">
          <div className="left " data-aos="fade-right" data-aos-once="true">
            <h1 className=" title_">
              <div className="space">
                <span id="hover" className="title- color">
                  S
                </span>
                <span id="hover" className="title- color">
                  t
                </span>
                <span id="hover" className="title- color">
                  y
                </span>
                <span id="hover" className="title- color">
                  l
                </span>
                <span id="hover" className="title- color">
                  e
                </span>
                <span id="hover" className="title_ color">
                  S
                </span>
                <span id="hover" className="title_ color">
                  p
                </span>
                <span id="hover" className="title_ color">
                  h
                </span>
                <span id="hover" className="title_ color">
                  e
                </span>
                <span id="hover" className="title_ color">
                  r
                </span>
                <span id="hover" className="title_ color">
                  e
                </span>
              </div>
            </h1>

            <p className="header__para">
              Elevate Your Fashion Game! Unleash Your Style, Discover{" "}
              <b className="color"> Trendy Collections. </b> Where Every Garment
              is a Statement. Dive into Fashion Bliss Today!
            </p>
            <div className="social__list">
              <a href="/" className="social__link click">
                <button className="ic__img" >Shop Now</button>
              </a>
            </div>
          </div>
          <div className="right" data-aos="fade-left" data-aos-once="true">
            <div className="bg_img"></div>
            <img src={arrow} alt="" className="item " />
            <img src={item1} alt="" className="item" />
            <img src={item3} alt="" className="item " />
            <img src={arrow} alt="" className="item " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
