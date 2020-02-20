import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const UserInfo = ({ userInfo }) => {
  const image = userInfo.avatar_url
  const name = userInfo.name
  const username = userInfo.login
  const repo = userInfo.public_repos
  const followers = userInfo.followers
  const following = userInfo.following

  return (
    <Wrapper>
      <ContainerAvatar>
        <img src={image} alt='' />
      </ContainerAvatar>

      <ContainerData>
        <NameUser>
          <a
            href={`https://github.com/${username}`}
          >
            {name}
          </a>
        </NameUser>

        <ReposInfo>
          <span>{`- Repositórios: ${repo}`}</span>
          <span>{`- Seguidores: ${followers}`}</span>
          <span>{`- Seguindo: ${following}`}</span>
        </ReposInfo>
      </ContainerData>
    </Wrapper>
  )
}

UserInfo.propTypes = {
  userInfo: t.object
}

const Wrapper = styled.section`
  align-items: flex-start;
  display: flex;
  height: 200px;
  margin-top: 20px;
`

const ContainerData = styled.div`
  margin-left: 20px;
`

const ContainerAvatar = styled.div`
  height: 200px;
  width: 200px;

  img {
    height: 100%;
    width: 100%;
  }
`

const NameUser = styled.span`
  a {
    color: #2A6DAF;
    font-size: 30px;
    font-weight: bold;
    text-decoration: none;
  }
`

const ReposInfo = styled.div`
  color: #EAE0CC;
  display: flex;
  font-size: 16px;
  flex-direction: column;
`

export default UserInfo
