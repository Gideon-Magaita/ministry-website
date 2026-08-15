import React, { useEffect, useState } from "react";

export default function SiteLoader() {
    
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="simple-site-loader"
      role="status"
      aria-label="Loading website"
    >
      <div className="simple-loader-content">

        {/* Water icon */}
        <div className="simple-loader-icon">
          <i className="bi bi-droplet-fill" aria-hidden="true"></i>
        </div>

        {/* Ministry name */}
        <h2>Ministry of Water</h2>

        <p>Content Managemnt</p>

        {/* Loading animation */}
        <div className="simple-loader-line">
          <span></span>
        </div>

      </div>
    </div>
  );
}