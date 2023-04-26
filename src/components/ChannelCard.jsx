import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { demoProfilePicture } from '../utils/constants'

const ChannelCard = ({ channelDetail }) => (
  <div
    style={{
      boxShadow: 'none',
      borderRadius: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // width: '200px',
      height: '326px',
      margin: 'auto',
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        color: '#fff',
      }}
    >
      <div
        style={{
          borderRadius: '50%',
          height: '180px',
          width: '180px',
          marginBottom: '2px',
          border: '1px solid #e3e3e3',
        }}
      >
        <img
          style={{ width: '200px' }}
          src={
            channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture
          }
          alt={channelDetail?.snippet?.title}
        />
      </div>

      <h6>
        {channelDetail?.snippet?.title}{' '}
        <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} />
      </h6>
      {channelDetail?.statistics?.subscriberCount && (
        <p style={{ fontSize: '15px', fontWeight: '500', color: 'gray' }}>
          {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString(
            'en-US'
          )}
          Subscribers
        </p>
      )}
    </div>
  </div>
)

export default ChannelCard
