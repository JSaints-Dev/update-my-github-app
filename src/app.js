import React, { useState } from 'react'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core'
import HomePage from './pages/home/'

function App () {
  const [userInfo, setUserInfo] = useState(null)
  const [reposTitle, setReposTitle] = useState('')
  const [repos, setRepos] = useState([{}])

  const handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${value}`)
        .then((result) => {
          setUserInfo(result.data)
        })
    }
  }

  const getRepos = (action) => {
    action === 'repos' ? setReposTitle('Repositórios') : setReposTitle('Favoritos')
    axios.get(`https://api.github.com/users/${userInfo.login}/${action}`)
      .then((result) => {
        setRepos(result.data)
      })
  }

  return (
    <>
      <CssBaseline />

      <HomePage
        userInfo={userInfo}
        repos={repos}
        reposTitle={reposTitle}
        handleSearch={(e) => handleSearch(e)}
        getRepos={() => getRepos('repos')}
        getStarred={() => getRepos('starred')}
      />
    </>
  )
}

export default App
