import React from 'react'
import styled from 'styled-components'
const ButtonStyled = styled.button`
width: 100%;
border-radius: 10px;
padding: 5px 10px;
border: 2px solid #7B78E5;
background: transparent;
color: #fff;
cursor: pointer;

`

const Button = () => {

  return (
    <ButtonStyled>
        <a>Ver mais</a>
    </ButtonStyled>
  )
}

export default Button