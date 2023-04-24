import { logo } from '../utils/constants'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="youtube icon" style={{ height: '45px' }} />
      <input
        className={styles.searchBar}
        placeholder="Search..."
        value=""
        onChange={() => {}}
      />
    </header>
  )
}

export default Header
