import React from "react";
import clsx from "clsx";

const featuresList = [
  {
    label:
      "<span class='ft-bold'>Dashboard Insights:</span> Access real-time data, analytics, and key metrics for platform performance.",
    description: "",
    id: 1,
  },
  {
    label:
      "<span class='ft-bold'>User Management:</span> Efficiently manage user accounts and support requests.",
    description: "",
    id: 2,
  },
  {
    label:
      "<span class='ft-bold'>Bet Monitoring:</span> Stay on top of bets, manage odds, and process payouts seamlessly.",
    description: "",
    id: 3,
  },
  {
    label:
      "<span class='ft-bold'>Financial Analytics:</span> Make data-driven financial decisions with comprehensive analytics.",
    description: "",
    id: 4,
  },
  {
    label:
      "<span class='ft-bold'>Role-Based Access Control:</span> Assign specific privileges to administrators, branch managers, and tellers.",
    description: "",
    id: 5,
  },
  // {
  //   label:
  //     "<span class='ft-bold'>Customer Support:</span> Deliver exceptional customer support and build trust with users.",
  //   description: "",
  //   id: 7,
  // },
  // {
  //   label:
  //     "<span class='ft-bold'>API Integration:</span> Seamlessly integrate external services and data sources for enhanced user experience.",
  //   description: "",
  //   id: 8,
  // },
  {
    label:
      "<span class='ft-bold'>Security Measures:</span> Ensure platform security and protect user data from potential threats.",
    description: "",
    id: 9,
  },
  // {
  //   label:
  //     "<span class='ft-bold'>Customization Options:</span> Personalize colors, logos, and elements to align with your brand identity.",
  //   description: "",
  //   id: 10,
  // },
];

export default function AdminIntro() {
  return (
    <section className="" style={{ padding: "80px 0px" }}>
      <div className="container">
        <div className="row">
          <div
            className="col-md-6"
            style={{
              alignSelf: "center",
            }}
          >
            {/*  */}
            <h2 className="" style={{ fontSize: "35px" }}>
              Empowering Administrators with Robust Control
            </h2>
            <p>
              The SportX platform isn't just about the thrill of sports betting
              for our users; it's also a comprehensive and powerful tool for
              administrators. With our robust admin features, managing your
              sports betting platform has never been easier. Take charge, make
              informed decisions, and ensure smooth operations with SportX.
            </p>
            <ul>
              {featuresList.map((ft) => (
                <li
                  key={`ft_${ft.id}`}
                  dangerouslySetInnerHTML={{ __html: ft.label }}
                ></li>
              ))}
            </ul>
            {/*  */}

            <div style={{ display: "flex", gap: 8 }}>
              <button className="btn btn-primary">Buy now</button>
              <a
                href="https://sportx.garande.net/#/auth/login"
                target="_blank"
                className="btn btn-primary btn-outline"
              >
                Access Admin Panel
              </a>
            </div>
          </div>
          {/*  */}
          <div
            className="col-md-6"
            style={{
              alignSelf: "center",
            }}
          >
            <img src="/img/mockuper-4.png" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      {/*  */}
    </section>
  );
}
