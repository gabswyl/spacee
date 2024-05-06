import React from 'react'
import logo from '/public/images/LogoPC.png'
import styled from 'styled-components'
import SearchInput from './SearchInput'

const HeaderStyled = styled.header`
padding: 60px 25px;
display: flex;
justify-content: space-between;
img {
    max-width: 212px;
}
`

const Header = () => {
  return (
    <HeaderStyled>
        <img src={logo} alt="Logo SpaceApp"/>
        <SearchInput />
    </HeaderStyled>
  )
}

export default Header