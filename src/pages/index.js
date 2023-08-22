import React, { useEffect, useState } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import MobileIntro from "@site/src/components/MobileIntro";

import styles from "./index.module.css";
import "./custom.css";
import Overview from "../components/Overview";
import AdminIntro from "../components/AdminIntro";
import ViewDoc from "../components/ViewDoc";
import Layout from "@theme/Layout";
import Footer from "@theme/Footer";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

function LandingHeader() {
  const [bodyScrolled, setBodyScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    "use strict";
    // let siteHeader = document.querySelector('.main-header');
    if (
      document.body.scrollTop >= 110 ||
      document.documentElement.scrollTop >= 110
    ) {
      setBodyScrolled(true);
    } else {
      setBodyScrolled(false);
    }
    // this.calculateDeviceSize();
  };
  return (
    <header
      className={clsx(
        styles.landingHeader,
        bodyScrolled ? styles.headerFixed : ""
      )}
    >
      <div className={clsx("container", styles.landingContainer)}>
        <div className={styles.navbarBrand}>
          <img
            className="navbar-brand-sticky"
            src="/img/logo.svg"
            alt="sticky brand-logo"
          />
        </div>
        <div className="landing-right">
          <Link className={styles.landingMenuItem} to="/">
            Overview
          </Link>
          <Link className={styles.landingMenuItem} to="/">
            Features
          </Link>

          <Link className={styles.landingMenuItem} to="/docs/intro">
            Documentation
          </Link>
          {/*  */}
          <Link className={styles.landingButton} to="/docs/intro">
            Buy Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      {/* // <Layout> */}
      <div className={styles.landing}>
        <LandingHeader />

        <Overview />
        <main>
          <HomepageFeatures />

          <MobileIntro />

          <ViewDoc />

          <AdminIntro />
        </main>
      </div>
      <Footer />
    </div>
  );
}
