import React from "react";
import styles from "./index.module.css";

export default function Overview() {
  return (
    <section className={styles.overview}>
      <div className="container">
        {/*  */}
        <div className="overview-row">
          <div className="col-12 col-md-5">
            <div className="overview-intro">
              <h1
                style={{
                  fontSize: "3.5em",
                  lineHeight: "1.2",
                  fontWeight: 700,
                }}
              >
                Your Ultimate Sports Betting Platform
              </h1>
              <p>
                A platform, where your passion for sports meets the excitement
                of betting. SportX is your gateway to the electrifying world of
                sports betting, offering a seamless and exhilarating experience
                like no other.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="btn btn-primary">Buy now</button>
                <a
                  href="https://sportx.garande.net"
                  target="_blank"
                  className="btn btn-primary btn-outline"
                >
                  View Demo
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div
              style={{
                height: "700px",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <img
                src="/img/mockup0.png"
                style={{ width: "100%" }}
                alt="mock"
              />
              {/*  */}
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <div className={styles.overviewDecoration}>
        <img src="/img/hero_shape_2.png" />
      </div>
    </section>
  );
}
