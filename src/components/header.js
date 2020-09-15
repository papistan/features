import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "../styles/header.scss"

const imageQuery = graphql`
  query {
    owl: file(relativePath: { eq: "samsara_owl_white.png" }) {
      childImageSharp {
        fixed(width: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

function Header(){
  const data = useStaticQuery(imageQuery)

  return (
    <header className="features-header">
      <a href="https://www.samsara.com/">
        <Img
          fixed={data.owl.childImageSharp.fixed}
          alt="an owl"
          className="features-header-img"
        />
      </a>
    </header>
  )
}

export default Header
