// Components==============
import React from "react";
import { Groow, GroowBusiness, Klik, TastCloud, Unblok } from "./Logos";
import "./TastSpace.scss";
// =========================

const items = ["groow", "groow-business", "klik", "unblok"];
const icons = [<Groow />, <GroowBusiness />, <Klik />, <Unblok />];
const links = [
  "https://learntogroow.com",
  "https://groowbusiness.tast.cloud",
  "https://klik.tast.cloud",
  "https://unblok.tast.cloud",
];

export default function TastSpace() {
  return (
    <div className="tast-space">
      <a
        className="my-tast-cloud"
        href="https://tast.cloud"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mijn <TastCloud />
      </a>
      <div className="grid">
        {items.map((item, i) => (
          <a
            key={item}
            href={links[i]}
            target="_blank"
            rel="noopener noreferrer"
            className="item"
          >
            {icons[i]}
          </a>
        ))}
      </div>
    </div>
  );
}
