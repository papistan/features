import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeaturesContainer from "../components/FeaturesContainer"

import "./index.scss"

function IndexPage(){

  return (
    <Layout>
      <SEO title="Features" />
      <FeaturesContainer />
    </Layout>
  )
}

export default IndexPage
