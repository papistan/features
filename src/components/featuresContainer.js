import React, { useState } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import FeatureSelector from "./featureSelector"
import ModalComponent from "./modal"
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
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.realTime.childImageSharp.fluid,
    },
    {
      number: "02",
      heading: "AI-enabled Safety Cameras",
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.aiEnabled.childImageSharp.fluid,
    },
    {
      number: "03",
      heading: "Routing and Location Sharing",
      description:
        "Lorem ipsum dolor si Lorem ipsum dolor si Lorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor siLorem ipsum dolor si.",
      image: data.routing.childImageSharp.fluid,
    },
  ]
  const [currentFeature, setCurrentFeature] = useState(selectors[0])
  const [modalOpen, setModalOpen] = useState(false)

  const toggleModal = () => {
    setModalOpen(!modalOpen)
  }

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
        <div className="features-selection-img-container" onClick={toggleModal}>
          <Img
            fluid={currentFeature.image}
            alt={currentFeature.heading}
            className="features-selection-img"
          />
        </div>
        <ModalComponent toggleModal={toggleModal} isOpen={modalOpen}>
          <div className="feature-modal-card">
            <h2 className="feature-modal-card-number">
              {currentFeature.number}
            </h2>
            <p className="feature-modal-card-heading">
              {currentFeature.heading}
            </p>
            <div className="feature-description-divider"></div>
            <p className="feature-description-description">
              {currentFeature.description}
            </p>
          </div>
        </ModalComponent>
      </div>
    </section>
  )
}

export default FeaturesContainer
