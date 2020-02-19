import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import SearchUserGit from './components/search-user-git'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const Home = ({
  avatar,
  followers,
  following,
  getRepos,
  getStarred,
  handleSearch,
  reposTitle,
  repos,
  reposLength,
  userId,
  userName
}) => {
  return (
    <Container>
      <WrapperInfo>
        <SearchUserGit handleSearch={handleSearch} />
        {!!userId &&
          <UserInfo
            avatar={avatar}
            userName={userName}
            reposLength={reposLength}
            followers={followers}
            following={following}
          />}
        {!!userId &&
          <Actions
            getRepos={getRepos}
            getStarred={getStarred}
          />}

        {!!repos.length &&
          <Repos
            title={reposTitle}
            repos={repos}
          />}
      </WrapperInfo>
    </Container>
  )
}

Home.propTypes = {
  userId: t.number,
  repos: t.array.isRequired,
  avatar: t.string.isRequired,
  userName: t.string,
  reposTitle: t.string,
  reposLength: t.number.isRequired,
  followers: t.number.isRequired,
  following: t.number.isRequired,
  handleSearch: t.func.isRequired,
  getRepos: t.func.isRequired,
  getStarred: t.func.isRequired
}

const Container = styled.div`
  background-color: #1D1D1E;
  min-height: 800px;

  padding-left: 140px;
  padding-right: 140px;
`

const WrapperInfo = styled.div``

export default Home
