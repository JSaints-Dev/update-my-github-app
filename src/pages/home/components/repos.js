import React from 'react'
import t from 'prop-types'

import styled from 'styled-components'

const Repos = ({ title, repos }) => (
  <WrapperRepos>
    <h2>{title}</h2>
    {repos.map((repo, i) => (
      <a key={i} href={repo.html_url}>{repo.name}</a>
    ))}
  </WrapperRepos>
)

Repos.propTypes = {
  repos: t.array.isRequired,
  title: t.string
}

const WrapperRepos = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    color: #2A6DAF;
  }

  a {
    color: #EAE0CC;
    text-decoration: none;
  }
`

export default Repos
