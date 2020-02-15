import React from 'react'
import t from 'prop-types'

import styled from 'styled-components'

const Repos = ({ title, repos }) => (
  <WrapperRepos>
    <h2>{title}</h2>
    {repos.map((repo, i) => (
      <a key={i} href={repo.link}>{repo.name}</a>
    ))}
  </WrapperRepos>
)

Repos.propTypes = {
  title: t.string.isRequired,
  repos: t.array.isRequired
}

const WrapperRepos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    color: #EAE0CC;
  }

  a {
    color: #EAE0CC;
    text-decoration: none;
  }
`

export default Repos
