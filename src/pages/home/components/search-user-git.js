import React from 'react'
import styled from 'styled-components'

const SearchUserGit = () => (
  <ContainerSearch>
    <input
      type='serach'
      placeholder='Digite o nome do usuário no GitHub'
    />
  </ContainerSearch>
)

const ContainerSearch = styled.div`
  height: 50px;
  width: 100%;

  input {
    height: 100%;
    width: 100%;

    border: none;
    background-color: #FF9907;
    font-size: 20px;
    padding-left: 10px;
  }
`

export default SearchUserGit
