import React from "react";

export default function Dira2050Floating() {
  return (
    <a
      href="/documents/DIRA-YA-TAIFA-YA-MAENDELEO-2050.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="dira-2050-floating"
      aria-label="View DIRA 2050 PDF document"
      title="Click to view DIRA 2050"
    >
      <span className="dira-2050-glow" aria-hidden="true" />
      <img src="/dira.png" alt="DIRA 2050" className="dira-2050-image" />
      <span className="dira-2050-label">Click to view DIRA 2050</span>
    </a>
  );
}
