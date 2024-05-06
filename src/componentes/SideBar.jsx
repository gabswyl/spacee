import React, { useState } from 'react'
import styled from 'styled-components'
import house from '../assets/house.svg'
import eyes from '../assets/eyes.svg'
import like from '../assets/like.svg'
import star from '../assets/star.svg'
import light from '../assets/light.svg'

const AsideStyled = styled.aside`
padding: 0 20px;

`

const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
  li {
    display: flex;
    gap: 5px;
    list-style-type: none;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;

    &.active {
        div {
            background: linear-gradient(180deg, rgba(201, 140, 241, 1) 0%, rgba(123, 120, 229, 1) 100%);
        }

        span {
            font-weight: 700;
        color: #7B78E5;
        }
    }

    div {
      background-color: #04244f;
      border-radius: 8px;
      padding: 5px;
    }

    span {
      color: #d9d9d9;
      font-size: 1.25rem;
    }
  }
`;


const listLi = [{
    icon: house,
    text: "Inicio"
},

{
    icon: eyes,
    text: "Mais vistas"
},

{
    icon: like,
    text: "Mais curtidas"
},

{
    icon: star,
    text: "Novas"
},

{
    icon: light,
    text: "Surpreenda-me"
},
]



const SideBar = () => {

    const [ativar, setAtivo] = useState(0);

    const handleClick = (index) => {
        setAtivo(index)
    }

    const listLiMap = listLi.map((list, index) => (
    <li
        key={index}
        className={ativar === index ? 'active' : ''}
        onClick={() => handleClick(index)}
    >
        <div>
            <img src={list.icon} />
        </div>
        <span>{list.text}</span>
    </li>))

    return (
        <AsideStyled>
            <nav>
                <UlStyled>
                    {listLiMap}
                </UlStyled>
            </nav>
        </AsideStyled>
    )
}

export default SideBar