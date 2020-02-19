import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const UserInfo = ({
  avatar,
  followers,
  following,
  reposLength,
  userName
}) => (
  <Wrapper>
    <ContainerAvatar>
      <img src={avatar} alt='' />
    </ContainerAvatar>

    <ContainerData>
      <NameUser>
        <a href={`https://github.com/${userName}`}>{userName}</a>
      </NameUser>

      <ReposInfo>
        <span>{`- Repositórios: ${reposLength}`}</span>
        <span>{`- Seguidores: ${followers}`}</span>
        <span>{`- Seguindo: ${following}`}</span>
      </ReposInfo>
    </ContainerData>
  </Wrapper>
)

UserInfo.propTypes = {
  avatar: t.string.isRequired,
  followers: t.number.isRequired,
  following: t.number.isRequired,
  reposLength: t.number.isRequired,
  userName: t.string.isRequired
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
