import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "User Experience",
    Svg: require("@site/static/img/icons/experience.svg").default,
    description: (
      <>
        SportX offers a visually appealing and intuitive interface, ensuring a
        delightful betting experience for customers.
      </>
    ),
  },
  {
    title: "Real-time Live Updates",
    Svg: require("@site/static/img/icons/system-update.svg").default,
    description: (
      <>
        Customers can stay connected to live sports events with real-time
        updates on scores, match progress, and odds.
      </>
    ),
  },
  {
    title: "Seamless Payments",
    Svg: require("@site/static/img/icons/payment.svg").default,
    description: (
      <>
        SportX uses secure payment gateways like PayPal and EasyPay to ensure
        smooth and secure financial transactions for customers.
      </>
    ),
  },
  {
    title: "Robust Admin Features",
    Svg: require("@site/static/img/icons/administrator.svg").default,
    description: (
      <>
        SportX gives businesses a powerful dashboard with comprehensive
        analytics, reporting tools, and user management features.
      </>
    ),
  },
  {
    title: "Scalable Architecture",
    Svg: require("@site/static/img/icons/architecture.svg").default,
    description: (
      <>
        SportX's scalable and reliable architecture ensures stability and
        performance, even during peak periods.
      </>
    ),
  },
  {
    title: "Enhanced Security",
    Svg: require("@site/static/img/icons/security.svg").default,
    description: (
      <>
        SportX protects customers' data with robust security measures, such as
        user verification, encryption, and CSRF/XSS protection.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")} style={{ marginTop: "20px" }}>
      <div className="service-card">
        <div className="text--center">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <h1 className="section-title" style={{}}>
            Features
          </h1>
          <div className="title-divider"></div>
        </div>
        <div className="service-cards row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
