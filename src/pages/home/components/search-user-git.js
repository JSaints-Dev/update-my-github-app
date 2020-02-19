import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

const SearchUserGit = ({ handleSearch }) => (
  <ContainerSearch>
    <input
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}
    />
  </ContainerSearch>
)

SearchUserGit.propTypes = {
  handleSearch: t.func.isRequired
}

const ContainerSearch = styled.div`
  height: 50px;
  width: 100%;

  input {
    height: 100%;
    width: 100%;

    border: none;
    background-color: #2A6DAF;
    color: #EAE0CC;
    font-size: 20px;
    padding-left: 10px;

    ::placeholder {
      color: #EAE0CC;
    }
  }
`

export default SearchUserGit
