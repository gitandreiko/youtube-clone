import { Link } from 'react-router-dom'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from '../utils/constants'

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => (
  <>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <div>
        <img
          src={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt="qqq"
        />
        <p style={{ color: '#FFF', fontWeight: 'bold' }}>
          {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </p>
      </div>
    </Link>
    <Link
      to={
        snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl
      }
    >
      <div>
        <p style={{ color: 'gray', fontWeight: 'bold' }}>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon
            style={{ fontSize: '12px', color: 'gray', marginLeft: '5px' }}
          />
        </p>
      </div>
    </Link>
  </>
)

export default VideoCard
