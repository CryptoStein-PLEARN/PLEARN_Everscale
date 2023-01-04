import React from "react";
import boxicon from "../assets/Images/icon-box.svg";

export default function Header() {
  return (
    <div>
      <section className="hero wf-section">
        <div className="container container--relative">
          <div className="hero__blocks">
            <div className="hero__intro">
              <div className="block-title-inline animated-box mss">
                <img
                  src={boxicon}
                  loading="lazy"
                  alt="NFT promo"
                  className="image"
                />
                <h4>Play Learn Earn</h4>
              </div>

              <h1 className="hero__intro-title animated-box mss mt--45 mb--20">
                PLEARN
              </h1>
              <p>
                PLEARN is a virtual board game that allows players to gain
                financial literacy through investing, buying and selling real
                estate, owning and upgrading NFTs, and most importantly, having
                fun.
              </p>
              <p>
                The player's goal is to gain knowledge, make the best decisions
                by choosing the best offers, and earn a higher income.
              </p>
              <p>
                The game has various NFTs that can be purchased, along with
                things like customizable dice, different game boards, and other
                settings with different rules.
              </p>

              {/* remove extra texts and make it view more */}

              <div className="hero__intro-cta animated-box mss">
                <a href="index.html" className="btn btn--yellow">
                  Explore Around{" "}
                </a>

                <a href="index.html" className="btn">
                  Play The Game{" "}
                </a>
              </div>

              <div className="hero__intro-stats">
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">
                      <span className="text-span">$</span>
                      234{" "}
                    </div>
                    <div className="hero__intro-stats-text">
                      Trading volume{" "}
                    </div>
                  </div>
                </div>
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">63k </div>
                    <div className="hero__intro-stats-text">
                      Virtual Properties{" "}
                    </div>
                  </div>
                </div>
                <div className="hero__intro-stats-item animated-box mss">
                  <div className="hero__intro-stats-spacer"></div>
                  <div>
                    <div className="hero__intro-stats-number">1.2m </div>
                    <div className="hero__intro-stats-text">
                      Active Players{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__nft-placeholder">
              <div className="hero__nft-placeholder-img ims"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}