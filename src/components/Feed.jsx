import Videos from './Videos'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import styles from './Feed.module.css'

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState('New')
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    )
  }, [selectedCategory])

  return (
    <div className={styles.feed}>
      <Sidebar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <div style={{ display: 'flex' }}>
        <span>{selectedCategory}</span>
        <Videos vids={videos} />
      </div>
    </div>
  )
}

export default Feed
