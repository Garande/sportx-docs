import React from "react";
import "./index.css";
import Link from "@docusaurus/Link";
export default function ViewDoc() {
  return (
    <section
      className="w-full py-16 section-bg mb-0"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container">
        <div className=" w-full rounded-md subscribe-card relative">
          <div className="img-overlay"></div>

          <div
            className=""
            style={{
              display: "flex",
              padding: "32px",
              position: "relative",
              paddingTop: "80px",
              paddingBottom: "80px",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            {/* <!--  --> */}
            <div
              className="text-2xl uppercase text-white font-bold w-full text-center"
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: "28px",
                marginBottom: "10px",
              }}
            >
              Ready to Experience the Thrill?
            </div>

            <div
              className="mt-2 text-base text-gray-50 w-full text-center"
              style={{
                textAlign: "center",
                width: "80%",
                color: "rgba(249, 250, 251, .8)",
                fontSize: "16px",
              }}
            >
              Need assistance? Our comprehensive online documentation has got
              you covered. Access step-by-step guides, tutorials, and FAQs to
              navigate SportX effortlessly. Find answers to your questions and
              harness the full potential of our platform
            </div>

            {/* <!--  --> */}
            <div style={{ display: "flex", gap: 8, marginTop: "15px" }}>
              <a
                href="https://sportx.garande.net"
                target="_blank"
                className="btn btn-white btn-outline"
              >
                View Demo
              </a>
              <Link className="btn btn-white btn-outline" to={`/docs/intro`}>
                Online Documentation
              </Link>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </section>
  );
}
