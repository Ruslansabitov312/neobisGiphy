import React from 'react'
import './SearchGiphy.sass'
import { LINK, API_KEY } from './api/api'

const GIPHY_API = `${LINK}/search?api_key=${API_KEY}&limit=$20&offset=0&q=`

const SearchGiphy = () => {
  const [search, setSearch] = React.useState('')
  const [gifs, setGifs] = React.useState([])
  const [loadingState, setLoadingState] = React.useState(false)

  const searchGif = () => {
    if (search.length > 0) {
      setLoadingState(true)
      fetch(GIPHY_API + search)
        .then((res) => {
          setLoadingState(false)
          return res.json()
        })
        .then((result) => {
          console.log(result)
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url
            })
          )
        })
        .catch(() => {
          alert('Something went wrong')
          setLoadingState(false)
        })
    }
  }
  return (
    <div>
      <div className='header'>
        <div>
          <input
            type='text'
            placeholder='Search GIF'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchGif}>Search</button>
        </div>
      </div>
      <div className='result'>
        {loadingState ? (
          <div className='loading'>
            {/* <div className='loader'></div> */}
          </div>
        ) : (
          <div className='list'>
            {gifs.map((gif) => {
              return (
                <div className='item' key={gif}>
                  <img src={gif} alt='giphy'/>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchGiphy
