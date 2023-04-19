import { useState } from "react";
import "./styles.css";

const buttonWidth = 64;
const tabWidth = 300;
const tabHeaders = ["home", "lock", "settings"];
const tabContent = [];

export const Widget = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <article class="widget">
      <header>
        {tabHeaders.map((tab, index) => (
          <button
            onClick={() => setActiveIndex(index)}
            key={tab}
            class={`material-symbols-outlined ${
              activeIndex === index ? "active" : ""
            }`}
          >
            {tab}
          </button>
        ))}
        <div
          class="underline"
          style={{
            translate: `${activeIndex ? activeIndex * buttonWidth : 0}px 0`,
          }}
        ></div>
      </header>
      <div class="content">
        <div
          class="content-inner"
          style={{
            translate: `-${activeIndex ? activeIndex * tabWidth : 0}px 0`,
          }}
        >
          <div>
            <h2>Home</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div>
            <h2>Account</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
          <div>
            <h2>Settings</h2>
            <p>
              This is the tab content, you can put anything you like in here.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
