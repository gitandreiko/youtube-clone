import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SearchIcon from '@mui/icons-material/Search'
import styles from './SearchBar.module.css'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const onHandleSubmit = (e) => {
    e.preventDefault()

    if (searchTerm) {
      navigate(`/search/${searchTerm}`)

      setSearchTerm('')
    }
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <button
        type="submit"
        style={{ background: 'transparent', boxShadow: 'none' }}
      >
        <SearchIcon style={{ color: 'red', cursor: 'pointer' }} />
      </button>
      <input
        className={styles.searchBar}
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </form>
  )
}

export default SearchBar
