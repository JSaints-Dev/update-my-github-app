import React from 'react'
import t from 'prop-types'
import styled from 'styled-components'

import { Button } from '@material-ui/core'

const Actions = ({ getRepos, getStarred }) => (
  <WrapperActions>
    <Button
      variant='contained'
      onClick={getRepos}
    >
      Ver Repositórios
    </Button>
    <Button
      variant='contained'
      onClick={getStarred}
    >
      Ver Favoritos
    </Button>
  </WrapperActions>
)

Actions.propTypes = {
  getRepos: t.func.isRequired,
  getStarred: t.func.isRequired
}

const WrapperActions = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;

  button {
    background-color: #2A6DAF;
    width: 500px;
  }
`

export default Actions
