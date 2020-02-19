import React, { useState } from 'react'
import axios from 'axios'
import { CssBaseline } from '@material-ui/core'
import HomePage from './pages/home/'

function App () {
  const [userId, setUserId] = useState(null)
  const [userLogin, setUserLogin] = useState('')
  const [userName, setUserName] = useState('')
  const [avatar, setAvatar] = useState('')
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [reposLength, setReposLength] = useState(0)
  const [reposTitle, setReposTitle] = useState('')
  const [repos, setRepos] = useState([{}])

  const handleSearch = (e) => {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      axios.get(`https://api.github.com/users/${value}`)
        .then((result) => {
          setUserId(result.data.id)
          setUserLogin(result.data.login)
          setUserName(result.data.name)
          setAvatar(result.data.avatar_url)
          setReposLength(result.data.public_repos)
          setFollowers(result.data.followers)
          setFollowing(result.data.following)
        })
    }
  }

  const getRepos = (action) => {
    action === 'repos' ? setReposTitle('Repositórios') : setReposTitle('Favoritos')
    axios.get(`https://api.github.com/users/${userLogin}/${action}`)
      .then((result) => {
        setRepos(result.data)
      })
  }

  return (
    <>
      <CssBaseline />

      <HomePage
        userId={userId}
        userName={userName}
        avatar={avatar}
        reposLength={reposLength}
        followers={followers}
        following={following}
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
