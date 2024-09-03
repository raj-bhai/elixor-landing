"use client";

import { useEffect } from "react";

export default function Schedule() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="relative md:w-full w-screen bg-black text-white py-16 px-4 flex flex-col items-center overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold uppercase tracking-wider leading-tight text-purple-500 mb-8">
        Schedule a Session
      </h2>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/elixzor-yta/discovery-call"
        style={{ minWidth: "320px", height: "700px", width: "100%" }}
      ></div>
    </section>
  );
}
