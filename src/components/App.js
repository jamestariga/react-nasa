import { useState, useEffect } from 'react'
import Space from './Space'
import axios from 'axios'

const App = () => {

  const API = 'IczwNhzVdgQfEPdZo1vr7rssntWqSiuSr0saxGJW'

  const start = '2022-01-01'

  const url = `https://api.nasa.gov/planetary/apod?start_date=${start}&api_key=${API}`

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = () => {
      setIsLoading(true)
      axios.get(url)
        .then((res) => {
          setData([...data, ...res.data])
          setIsLoading(false)
        })
        .catch((err) => {
          console.error(err)
          setIsError(err)
        })
    }
    getData()
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <div className='lds-dual-ring'>

        </div>
        <h1>Fetching data from NASA...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div className='container'>
        <h1>Error...</h1>
      </div>
    )
  }

  return (
    <>
      <div className="title">
        <h1>Astronomy Picture of the day 2022</h1>
        <h4>Developed by James Tariga</h4>
      </div>
      <div className='container'>
        {data.map((data, key) => {
          return (
            <div key={key} className='content-box'>
              <Space {...data} />
            </div>
          )
        })}
      </div>
    </>
  )
}

export default App