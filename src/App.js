import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Feed from './components/Feed'

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Feed />} />
        {/* <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
      </Routes>
    </div>
  </BrowserRouter>
)

export default App
