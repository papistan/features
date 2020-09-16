import React, { useState } from "react"
import classNames from "classnames"
import "../styles/features-container.scss"

function Selector({ number, heading, subtitle, currentFeature }) {
  return (
    <div
      className={classNames("features-selector", {
        active: currentFeature === number,
      })}
    >
      <h2>{number}</h2>
      <div className="selector-labels">
        <p className="selector-heading">{heading}</p>
        <p className="selector-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

function FeaturesContainer() {
  const [currentFeature, setCurrectFeature] = useState("01")

  const selectors = [
    { number: "01", heading: "Real-time", subtitle: "GPS Tracking" },
    { number: "02", heading: "Real-time", subtitle: "GPS Tracking" },
    { number: "03", heading: "Real-time", subtitle: "GPS Tracking" },
  ]

  return (
    <section className="features-container">
      <div>
        <h1>Top 3 Features</h1>
        <p>Here are some of our favorite features</p>
      </div>
      <div className="features-selection-container">
        <div className="features-selectors">
          {selectors.map(selector => (
            <Selector
              number={selector.number}
              heading={selector.heading}
              subtitle={selector.subtitle}
              currentFeature={currentFeature}
              onClick={() => {
                setCurrectFeature(selector.number)
              }}
            />
          ))}
        </div>

        <div className="features-selected-image"></div>
      </div>
    </section>
  )
}

export default FeaturesContainer
