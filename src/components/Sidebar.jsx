import { categories } from '../utils/constants'
import styles from './Sidebar.module.scss'

const Sidebar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <nav className={styles.sidebar}>
      {categories.map((category) => (
        <button
          className={styles.categoryBtn}
          key={category.name}
          onClick={() => setSelectedCategory(category.name)}
        >
          <span className={styles.icon}>{category.icon}</span>
          {category.name}
        </button>
      ))}
      <span className={styles.categoryName}>{selectedCategory}</span>
    </nav>
  )
}

export default Sidebar
