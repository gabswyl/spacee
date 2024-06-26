import React from 'react'
import styled from 'styled-components'
import banner from '../assets/banner.png'

const SectionStyled = styled.section`
min-height: 328px;
background-image: url(${banner});
object-fit: cover;
border-radius: 20px;
background-size: cover;

span {
    color: #fff;
    display: flex;
    font-size: 2.5rem;
    max-width: 530px;
    justify-content: flex-start;
    padding: 64px 92px;
}
`

const Banner = () => {
  return (
    <SectionStyled>
        <span>A galeria mais completa de fotos do espaço!</span>
    </SectionStyled>
  )
}

export default Banner