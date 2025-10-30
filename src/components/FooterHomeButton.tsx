import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function FooterHomeButton() {
  const { pathname } = useLocation();
  const isHome = pathname === "/" || pathname === "/index.html";
  if (isHome) return null;

  return (
    <div className="ml-auto">
      <Link
        to="/"
        aria-label="Go to home page"
        title="Home"
        className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-white/80 backdrop-blur text-neutral-700 hover:bg-neutral-50 hover:border-neutral-400 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-400"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </Link>
    </div>
  );
}
