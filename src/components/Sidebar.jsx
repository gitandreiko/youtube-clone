import { categories } from '../utils/constants'
import styles from './Sidebar.module.css'

const Sidebar = () => {
  return (
    <nav className={styles.sidebar}>
      {categories.map((category) => (
        <button className={styles.categoryBtn} key={category.name}>
          <span className={styles.icon}>{category.icon}</span>
          {category.name}
        </button>
      ))}
    </nav>
  )
}

export default Sidebar
