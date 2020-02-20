import React, { useState } from 'react'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core'
import HomePage from './pages/home/'

function App () {
  const [userInfo, setUserInfo] = useState(null)
  const [reposTitle, setReposTitle] = useState('')
  const [repos, setRepos] = useState([{}])

  const getGitHubApiUrl = (username, action) => {
    const inUserName = username ? `/${username}` : ''
    const inAction = action ? `/${action}` : ''
    return `https://api.github.com/users${inUserName}${inAction}`
  }

  const handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER) {
      target.disabled = true
      axios.get(getGitHubApiUrl(value))
        .then((result) => {
          setUserInfo(result.data)
          setRepos([])
          setReposTitle('')
        })
        .catch((error) => {
          console.log('error-han: ', error)
        })
        .finally(() => {
          target.disabled = false
        })
    }
  }

  const getRepos = (action) => {
    action === 'repos' ? setReposTitle('Repositórios') : setReposTitle('Favoritos')
    axios.get(getGitHubApiUrl(userInfo.login, action))
      .then((result) => {
        setRepos(result.data)
      })
      .catch((error) => {
        console.log('error-getRepos: ', error)
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
