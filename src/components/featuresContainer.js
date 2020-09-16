import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import FeatureSelector from "./featureSelector"
import "../styles/features.scss"

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 400) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const imageQuery = graphql`
  query {
    realTime: file(relativePath: { eq: "01-real-time-gps.png" }) {
      ...squareImage
    }
    aiEnabled: file(relativePath: { eq: "02-AI-enabled-safety.png" }) {
      ...squareImage
    }
    routing: file(relativePath: { eq: "03-Routing-Location.png" }) {
      ...squareImage
    }
  }
`

function FeaturesContainer() {
  const data = useStaticQuery(imageQuery)

  const selectors = [
    {
      number: "01",
      heading: "Real-time GPS Tracking",
      image: data.realTime.childImageSharp.fluid,
    },
    {
      number: "02",
      heading: "AI-enabled Safety Cameras",
      image: data.aiEnabled.childImageSharp.fluid,
    },
    {
      number: "03",
      heading: "Routing and Location Sharing",
      image: data.routing.childImageSharp.fluid,
    },
  ]
  const [currentFeature, setCurrentFeature] = useState(selectors[0])

  return (
    <section className="features-container">
      <div>
        <h1>Top 3 Features</h1>
        <p className="subtitle">Here are some of our favorite features</p>
      </div>
      <div className="features-selection-container">
        <div className="features-selectors">
          {selectors.map(selector => (
            <FeatureSelector
              key={selector.number}
              number={selector.number}
              heading={selector.heading}
              subtitle={selector.subtitle}
              currentFeature={currentFeature.number === selector.number}
              handleClick={() => {
                setCurrentFeature(selector)
              }}
            />
          ))}
        </div>
        <div className="features-selection-img-container">
          <Img
            fluid={currentFeature.image}
            alt={currentFeature.heading}
            className="features-selection-img"
          />
        </div>
      </div>
    </section>
  )
}

export default FeaturesContainer
