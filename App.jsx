import React from "react";
import { createRoot } from "react-dom/client";
import { setup, tw } from "twind";

setup({});

const App = () => {
  const aros = Array.from({ length: 15 }, (_, i) => (
    <div
      key={i}
      className={tw`
        absolute
        inset-[calc(var(--s)*10px)]
        bg-[rgba(240,248,0,0.53)]
        animate-up-and-down
        clip-[polygon(3%_3%,97%_3%,50%_97%)]
      `}
      style={{ "--s": i }}
    ></div>
  ));

  return (
    <aside
      className={tw`
        w-[300px] h-[300px] relative
        transform-style-preserve-3d
        perspective-[500px] rotate-x-[60deg]
      `}
    >
      {aros}
    </aside>
  );
};

const rootElement = document.createElement("div");
document.body.appendChild(rootElement);
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <div className={tw`flex flex-wrap place-content-center h-screen w-full overflow-hidden bg-black`}>
      <App />
    </div>
  </React.StrictMode>
);

const style = document.createElement("style");
style.textContent = `
@keyframes up-and-down {
  0%,100% { transform: translateZ(-100px) scaleX(-1); }
  50% { transform: translateZ(100px) scaleX(1); }
}
.animate-up-and-down { animation: up-and-down 3s infinite ease-in-out both; }
`;
document.head.appendChild(style);
