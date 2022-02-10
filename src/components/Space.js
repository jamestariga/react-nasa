import { useState } from "react"

const Space = (data) => {

  const { title, date, explanation } = data

  return (
    <>
      <div className="content">
        <h3>{title}</h3>
        <p>{date}</p>
        <p>{explanation}</p>
      </div>
    </>
  )
}

export default Space