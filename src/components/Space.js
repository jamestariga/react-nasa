import { useState } from "react"

const Space = (data) => {

  const { title, date, explanation, url, media_type } = data

  return (
    <>
      <h3>{title}</h3>
      <p>Date of Capture: {date}</p>
      {media_type == 'image' &&
        <div className="image">
          <img src={url} alt={url} />
        </div>}
      {media_type == 'video' &&
        <div className="image">
          <iframe src={url} title={title} />
        </div>}
      <p>{explanation}</p>
    </>
  )
}

export default Space