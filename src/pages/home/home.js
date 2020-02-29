import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import SearchUserGit from './components/search-user-git'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const Home = ({
  getRepos,
  getStarred,
  handleSearch,
  reposTitle,
  repos,
  userInfo
}) => {
  return (
    <Container>
      <WrapperInfo>
        <SearchUserGit handleSearch={handleSearch} />
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo &&
          <Actions
            getRepos={getRepos}
            getStarred={getStarred}
          />}

        {!!repos &&
          <Repos
            title={reposTitle}
            repos={repos}
          />}
      </WrapperInfo>
    </Container>
  )
}

Home.propTypes = {
  getRepos: t.func.isRequired,
  getStarred: t.func.isRequired,
  handleSearch: t.func.isRequired,
  repos: t.array.isRequired,
  reposTitle: t.string,
  userInfo: t.object

}

const Container = styled.div`
  background-color: #1D1D1E;
  min-height: 800px;

  padding-left: 140px;
  padding-right: 140px;
`

const WrapperInfo = styled.div``

export default Home
