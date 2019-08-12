import React from "react";

const Logo = () => {
  return (
    <a href="/" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">
        <b>F</b>
      </span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">
        <b>Easy Food</b>
      </span>
    </a>
  );
};
export default Logo;
