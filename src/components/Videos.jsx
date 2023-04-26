import styles from './Videos.module.css'
import VideoCard from './VideoCard'
import { demoProfilePicture } from '../utils/constants'

const Videos = ({ vids }) => {
  // if (!vids.item.id.channelId) return 'Loading...'
  return (
    <div className={styles.videos}>
      {vids.map((item, idx) => (
        <div key={idx}>{item.id.videoId && <VideoCard video={item} />}</div>
      ))}
    </div>
  )
}
export default Videos
