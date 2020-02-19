import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const UserInfo = ({ userInfo }) => (
  <Wrapper>
    <ContainerAvatar>
      <img src={userInfo.avatar_url} alt='' />
    </ContainerAvatar>

    <ContainerData>
      <NameUser>
        <a
          href={`https://github.com/${userInfo.login}`}
        >
          {userInfo.name}
        </a>
      </NameUser>

      <ReposInfo>
        <span>{`- Repositórios: ${userInfo.public_repos}`}</span>
        <span>{`- Seguidores: ${userInfo.followers}`}</span>
        <span>{`- Seguindo: ${userInfo.following}`}</span>
      </ReposInfo>
    </ContainerData>
  </Wrapper>
)

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
