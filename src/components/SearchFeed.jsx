import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const { searchTerm } = useParams()

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    )
  }, [searchTerm])

  return (
    <div style={{ padding: '2px', minHeight: '95vh' }}>
      <h4 style={{ fontWeight: '900', color: 'white', marginBottom: '3px' }}>
        Search Results for
        <span style={{ color: '#FC1503' }}>{searchTerm}</span> videos
      </h4>
      <div style={{ display: 'flex' }}>
        <Videos vids={videos} />
      </div>
    </div>
  )
}

export default SearchFeed
