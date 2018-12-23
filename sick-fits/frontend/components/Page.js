import React, { Component } from 'react'
import styled from 'styled-components'

import Meta from './Meta'
import Header from './Header'

const StyledPage = styled.div`
  background: #fff;
  color: #000;
`

class Page extends Component {
  render () {
    return (
      <StyledPage>
        <Meta />
        <Header />
        { this.props.children }
      </StyledPage>
    )
  }
}

export default Page;
