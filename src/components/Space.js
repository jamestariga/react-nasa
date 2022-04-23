import React from 'react'

const Space = (data) => {
  const { title, date, explanation, url, media_type } = data

  return (
    <>
      {media_type === 'image' && (
        <div className='image'>
          <a href={url}>
            <img src={url} alt={url} />
          </a>
        </div>
      )}
      {media_type === 'video' && (
        <div className='video'>
          <iframe src={url} title={title} />
        </div>
      )}
      <div className='content-header'>
        <h3>{title}</h3>
        <p>Date of Capture: {date}</p>
      </div>
      <div className='paragraph'>
        <p>{explanation}</p>
      </div>
    </>
  )
}

export default Space
