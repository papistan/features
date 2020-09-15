import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

import "./index.scss"

function IndexPage(){

  return (
    <Layout>
      <SEO title="Features" />
      <section className="hero-container">
       <h1>Header</h1>
      </section>
    </Layout>
  )
}

export default IndexPage
