import { useRef, useState } from "react";
import "./styles.css";

const menuHeight = getComputedStyle(document.documentElement).getPropertyValue(
  "--menu-height"
);

const buttons = ["Details", "Metrics", "Orders", "Insights"];

export const Widget = () => {
  const [activeBlock, setActiveBlock] = useState(0);

  const toggleMenuBlock = (index) => {
    setActiveBlock(index);
  };

  return (
    <article className={`card ${isOpen ? "open" : ""}`}>
      <div className="buttons">
        {buttons.map((button, index) => (
          <button
            className={index === activeBlock ? "active" : ""}
            onClick={() => toggleMenuBlock(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <div className="wrapper">
        <div
          className="content"
          style={{ translate: `0 calc(0px - ${menuHeight} * ${activeBlock})` }}
        >
          <div className="block">
            <h2>Details</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Metrics</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Orders</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
          <div className="block">
            <h2>Insights</h2>
            <p>
              Vivamus volutpat ipsum ac ipsum feugiat, vel molestie elit
              vestibulum. Donec luctus commodo dictum. Aenean in turpis erat.
              Vestibulum imperdiet nibh. Ipsum ac ipsum feugiat, vel molestie.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
