import React from 'react'
import classNames from "classnames"
import "../styles/features.scss"

const FeatureSelector = ({ number, heading, currentFeature, handleClick }) => {
  return (
    <div
      className={classNames("features-selector", {
        active: currentFeature,
      })}
      onClick={handleClick}
    >
      <h2 className="selector-number">{number}</h2>
      <p className="selector-heading">{heading}</p>
    </div>
  )
}

export default FeatureSelector