import React from 'react'
import styled from 'styled-components'
import lupa from '../assets/search.svg'

const ContainerInput = styled.div`
position: relative;
display: inline-block;
`

const SearchedInput = styled.input`
border-radius: 10px;
border: 2px solid;
border-color: #C98CF1;
background: transparent;
color: #D9D9D9;
padding: 12px 16px;
width: 602px;
height: 56px;
box-sizing: border-box;
font-weight: 400;
font-size: 1.25rem;
`

const LupaStyled = styled.img`
position: absolute;
top: 10px;
right: 10px;
`

const SearchInput = () => {
    return (
    <ContainerInput>
        <SearchedInput placeholder='O que você quer procurar?'/>
        <LupaStyled src={lupa} alt="icone de lupa"/>
    </ContainerInput>
  )
}

export default SearchInput