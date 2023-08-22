import React from "react";
import clsx from "clsx";

const featuresList = [
  { label: "Seamless sports betting on-the-go", description: "", id: 1 },
  {
    label: "Real-time updates on fixtures, odds, and live scores",
    description: "",
    id: 2,
  },
  {
    label: "Instant notifications for important updates",
    description: "",
    id: 3,
  },
  {
    label: "Sleek and user-friendly design for effortless navigation",
    description: "",
    id: 4,
  },
  { label: "Exclusive mobile-only offers and bonuses", description: "", id: 5 },
  {
    label: "Personalized betting experience for all levels of expertise",
    description: "",
    id: 6,
  },
  {
    label: "Available for both iOS and Android devices",
    description: "",
    id: 7,
  },
  { label: "Freedom to bet anytime, anywhere", description: "", id: 8 },
];

export default function MobileIntro() {
  return (
    <section className="bg-alt" style={{ padding: "80px 0px" }}>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <img
              src="/img/mobile-mock1.png"
              style={{ maxHeight: "695px", maxWidth: "375px" }}
            />
          </div>
          <div
            className="col-md-6"
            style={{
              alignSelf: "center",
            }}
          >
            {/*  */}
            <h2 className="" style={{ fontSize: "45px" }}>
              SportX Mobile
            </h2>
            <p>
              At SportX, we believe in providing our users with the utmost
              convenience and flexibility. That's why we're thrilled to
              introduce the SportX Mobile App - your gateway to unlimited sports
              betting excitement on the go.
            </p>
            <ul>
              {featuresList.map((ft) => (
                <li key={`ft_${ft.id}`}>{ft.label}</li>
              ))}
            </ul>
            {/*  */}

            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-primary">Buy now</button>
              <a
                href="https://sportx.garande.net/downloads/app-armeabi-v7a-release.apk"
                target="_blank"
                className="btn btn-primary btn-outline"
              >
                Download Demo App
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
}
