import React from 'react'
import styled from 'styled-components'

import { Button } from '@material-ui/core'

const Actions = () => (
  <WrapperActions>
    <Button variant='contained'>Ver Repositórios</Button>
    <Button variant='contained'>Ver Favoritos</Button>
  </WrapperActions>
)

const WrapperActions = styled.div`
  display: flex;
  height: 40px;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;

  button {
    background-color: #FF9907;
    width: 500px;
  }
`

export default Actions
