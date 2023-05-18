import Image from "next/image";
import React from "react";
import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsTwitter } from "react-icons/bs";

const PreLaunch = () => {
  return (
    <div>
      <main className="main__container">
        <div className="main__lineLeft"></div>
        <div className="main__lineRight"></div>
        <section className="countdown">
          <article className="countdown__content">
            <h3 className="countdown__content--header">Launch Countdown</h3>
            <p className="countdown__content--time">35:21:45</p>
            <Image
              src="/images/Logo.png"
              alt="Logo"
              width={190}
              height={27}
              className="countdown__content--logo"
            />
          </article>
        </section>

        <div className="contact__section">
          <section className="contact__section--links">
            <span className="contact__section--text">Follow us:</span>
            <div className="contact__section--socialLinks">
              <div className="social-link">
                <FaFacebookF />
              </div>
              <div className="social-link">
                <BsInstagram />
              </div>
              <div className="social-link">
                <BsTwitter />
              </div>
              <div className="social-link">
                <FaYoutube />
              </div>
              <div className="social-link">
                <FaLinkedinIn />
              </div>
            </div>
          </section>
          <div className="contact__section--button">Watch Trailer</div>
        </div>

        <div className="caution__container">
          <div className="caution__container--left"></div>
          <div className="caution__container--right"></div>
        </div>
      </main>
    </div>
  );
};

export default PreLaunch;
