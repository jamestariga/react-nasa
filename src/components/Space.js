import { useState } from "react"

const Space = (data) => {

  const { title, date, explanation, hdurl } = data

  return (
    <>
      <div className="content-box">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
        <div className="image">
          <img src={hdurl} alt={hdurl} />
        </div>
      </div>
    </>
  )
}

export default Space