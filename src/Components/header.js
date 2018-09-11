import React, { Component } from 'react';
import GitHub from './Github.js';
import styled from "styled-components";
import media from "styled-media-query";

const AppHeader = styled.div`
  height: 12rem;
  width:100%;
  padding: 1rem;
  color: 00000;
  border-bottom: solid 1px black;
  ${media.lessThan("medium")`
    /* screen width is less than 768px (medium) */
    width:365px;
  `}
`;

const AppTitle = styled.h1`
  font-weight: 400;
`;

class Header extends Component {
  render() {
    return (
        <AppHeader>
          <AppTitle> Weather Application</AppTitle>
            <GitHub/>
      </AppHeader>
    )
  }
}

export default Header;
