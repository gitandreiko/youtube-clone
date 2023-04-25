import styles from './Videos.module.css'
import VideoCard from './VideoCard'

const Videos = ({ vids }) => {
  // if (!vids?.length) return 'Loading...'
  return (
    <div className={styles.videos}>
      {vids.map((item, idx) => {
        return (
          <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
        )
      })}
    </div>
  )
}

export default Videos
