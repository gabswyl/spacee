import React, { useState } from 'react';
import spacegallery from "../mocks/spacegallery.json";
import fav from "../assets/fav.png";
import screenModal from "../assets/screenModal.png";
import favactive from "../assets/favactive.png";
import styled from 'styled-components';
import Modal from './Modal';

const SectionGaleria = styled.div`
    h1 {
        font-weight: 400;
        color: #7B78E5;
    }
`;

const UlStyled = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 0;
`;

const LiStyled = styled.li`
    list-style-type: none;
    width: 448px;
    height: 336px;
`;

const BorderImg = styled.img`
    border-radius: 20px 20px 0px 0px;
`;

const FirstDiv = styled.div`
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    padding: 15px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2, span {
        margin: 0;
        color: #fff;
    }
`;

const ColumnDiv = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImgStyled = styled.img`
    width: 24px;
    height: 24px;
    margin-left: 10px;
`;

const Gallery = () => {
    const [favorites, setFavorites] = useState(() => {
        return new Array(spacegallery.length).fill(false);
    });
    const [selectedImg, setSelectedImg] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFavoriteClick = (index) => {
        const newFavorites = [...favorites];
        newFavorites[index] = !newFavorites[index];
        setFavorites(newFavorites);
    };

    const handleOpen = (imgUrl) => {
        setSelectedImg(imgUrl);
        setIsModalOpen(true);
    };

    const handleClose = () => {
        setIsModalOpen(false);
    };

    return (
        <SectionGaleria>
            <h1>Navegue pela galeria</h1>
            <UlStyled>
                {spacegallery.map((item, index) => (
                    <LiStyled key={item.id}>
                        <BorderImg src={`cards/${item.img}`} alt={item.alt} />
                        <FirstDiv>
                            <ColumnDiv>
                                <h2>Nome da foto</h2>
                                <span>Fonte/Fotógrafo/Satelite</span>
                            </ColumnDiv>
                            <div>
                                <ImgStyled
                                    src={favorites[index] ? favactive : fav}
                                    onClick={() => handleFavoriteClick(index)}
                                />
                                <ImgStyled
                                    src={screenModal}
                                    onClick={() => handleOpen(`cards/${item.img}`)}
                                />
                            </div>
                        </FirstDiv>
                    </LiStyled>
                ))}
            </UlStyled>
            {isModalOpen && <Modal selectedImg={selectedImg} onClose={handleClose} />}
        </SectionGaleria>
    );
};

export default Gallery;
