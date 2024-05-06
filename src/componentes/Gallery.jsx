import React from 'react'
import spacegallery from "../mocks/spacegallery.json";
import fav from "../assets/fav.png"
import screenModal from "../assets/screenModal.png"
import favactive from "../assets/favactive.png"
import styled from 'styled-components';

    const UlStyled = styled.ul`
    `

    const LiStyled = styled.li`
    list-style-type: none;
    width: 448px;
    height: 336px;
    .firstdiv {
        background-color: #001634;
        border-radius: 0px 20px 20px 0px;
        padding: 15px 20px;
    }
    `
const Gallery = () => {

    return (
        <div>
            <h1>Navegue pela galeria</h1>
            <UlStyled>
                {spacegallery.map((item) => (
                    <LiStyled key={item.id}>
                            <img src={item.img} alt={item.alt} />
                            <div className='firstdiv'>
                                <h1>Nome da foto</h1>
                                <span>Fonte/Fotógrafo/Satelite</span>
                                <div>
                                    <img src={fav} />
                                    <img src={screenModal} />
                                </div>
                            </div>
                    </LiStyled>
                ))}
            </UlStyled>
            <p>a</p>
        </div>
    )
}

export default Gallery