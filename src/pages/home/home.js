import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import SearchUserGit from './components/search-user-git'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const Home = ({ userInfo, repos, avatar, userName, reposLength, followers, following }) => (
  <Container>
    <WrapperInfo>
      <SearchUserGit />
      {!!userInfo &&
        <UserInfo
          avatar={avatar}
          userName={userName}
          reposLength={reposLength}
          followers={followers}
          following={following}
        />}
      {!!userInfo && <Actions />}

      {!!repos.length &&
        <Repos
          title='Repositórios'
          repos={repos}
        />}
    </WrapperInfo>
  </Container>
)

Home.propTypes = {
  userInfo: t.bool,
  repos: t.array.isRequired,
  avatar: t.string.isRequired,
  userName: t.string.isRequired,
  reposLength: t.number.isRequired,
  followers: t.number.isRequired,
  following: t.number.isRequired
}

const Container = styled.div`
  background-color: #1B0B14;
  height: 800px;

  padding-left: 140px;
  padding-right: 140px;
`

const WrapperInfo = styled.div``

export default Home
