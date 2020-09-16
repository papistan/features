import React from "react"
import "../styles/header.scss"

import owl from "../images/samsara_owl_white.png"

function Header() {
  return (
    <header className="features-header">
      <a href="https://www.samsara.com/">
        <img
          src={owl}
          alt="an owl"
          className="features-header-img"
        />
      </a>
    </header>
  )
}

export default Header
