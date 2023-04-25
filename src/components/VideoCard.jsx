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
}) => <img src={snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt="qqq" />

export default VideoCard

//image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
