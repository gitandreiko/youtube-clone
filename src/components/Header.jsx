import { logo } from '../utils/constants'
import styles from './Header.module.css'
import { useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className={styles.header}>
      <img
        src={logo}
        alt="youtube icon"
        className={styles.img}
        onClick={() => navigate('/')}
      />
      <SearchBar />
    </header>
  )
}

export default Header
