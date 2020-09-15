import React from "react"
import "normalize.css"
import "../styles/global/styles.scss"
import "./layout.scss"

const Layout = ({ children }) => (
  <>
    <main className="wrapper">{children}</main>
  </>
)

export default Layout