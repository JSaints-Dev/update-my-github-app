import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core'
import HomePage from './pages/home/'

function App () {
  const [userInfo, setUserInfo] = useState(null)
  const [reposTitle, setReposTitle] = useState('')
  const [repos, setRepos] = useState([{}])

  const getGitHubApiUrl = useCallback((username, action) => {
    const inUserName = username ? `/${username}` : ''
    const inAction = action ? `/${action}` : ''
    return `https://api.github.com/users${inUserName}${inAction}`
  }, [])

  const clearRepos = useCallback(() => {
    setRepos([])
    setReposTitle('')
  }, [])

  const handleSearch = useCallback((e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    const target = e.target

    if (keyCode === ENTER) {
      target.disabled = true
      axios.get(getGitHubApiUrl(value))
        .then((result) => {
          setUserInfo(result.data)
          clearRepos()
        })
        .catch((error) => {
          console.log('error-han: ', error)
        })
        .finally(() => {
          target.disabled = false
        })
    }
  }, [clearRepos, getGitHubApiUrl])

  const getRepos = (action, title) => {
    const username = userInfo.login
    setReposTitle(title)

    axios.get(getGitHubApiUrl(username, action))
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
        getRepos={(action, title) => getRepos(action, title)}
        getStarred={(action, title) => getRepos(action, title)}
      />
    </>
  )
}

export default App
