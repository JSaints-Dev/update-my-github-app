import React, { useState } from 'react'

import { CssBaseline } from '@material-ui/core'

import HomePage from './pages/home/'

function App () {
  const [userInfo] = useState(true)
  const [avatar] = useState('https://avatars2.githubusercontent.com/u/57118447?v=4')
  const [userName] = useState('JSaints-Dev')
  const [reposLength] = useState(12)
  const [followers] = useState(10)
  const [following] = useState(10)
  const [repos] = useState([{
    name: 'Repo',
    link: '#'
  }, {
    name: 'Repo',
    link: '#'
  }])

  return (
    <>
      <CssBaseline />

      <HomePage
        userInfo={userInfo}
        avatar={avatar}
        userName={userName}
        reposLength={reposLength}
        followers={followers}
        following={following}
        repos={repos}
      />
    </>
  )
}

export default App
