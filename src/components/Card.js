import { useState } from "react"
import React, { Component }  from 'react';

const Card = ({ movie }) => {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {!isShown && (
        <video className="video" controls>
          <source src={movie.thumbnail} type="video/mp4" />
        </video>
      )}

      {isShown && (
        <div>
          <video className="video" controls autoPlay={true} loop>
            <source src={movie.thumbnail} type="video/mp4" />
          </video>
          <div className="info-box">
            <p>{movie.title}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
