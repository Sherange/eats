import React from "react";

const Logo = () => {
  return (
    <a href="index2.html" className="logo">
      {/* mini logo for sidebar mini 50x50 pixels */}
      <span className="logo-mini">
        <b>E</b>
        ats
      </span>
      {/* logo for regular state and mobile devices */}
      <span className="logo-lg">
        <b>Eats</b>
      </span>
    </a>
  );
};

export default Logo;
