import React from "react"
import Header from './header'
import "normalize.css"
import "typeface-roboto"
import "../styles/base.scss"
import "../styles/layout.scss"

function Layout({ children }){
  return (
  <>
    <Header />
    <main className="wrapper">{children}</main>
  </>
)}

export default Layout