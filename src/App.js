import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'
import ChannelDetail from './components/ChannelDetail'
import SearchFeed from './components/SearchFeed'
import VideoDetail from './components/VideoDetail'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
