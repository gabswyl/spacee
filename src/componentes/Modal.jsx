import React, { useState } from 'react';
import styled from 'styled-components';

const InfoSpaceModal = styled.div`
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    padding: 15px 20px;
    display: flex;
    flex-direction: column;

    h2, span {
        margin: 0;
        color: #fff;
    }
`;

const BgModal = styled.div`
    background-color: rgba(0, 0, 0, 0.70);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

const DialogStyled = styled.dialog`
    margin-top: 250px;
    border: none;
    background: transparent;
`;

const CloseContainer = styled.form`
    position: relative;
    display: inline-block;
`;

const Close = styled.button`
    position: absolute;
    font-size: 2.25rem;
    left: 400px;
bottom: 300px;
    color: #fff;
    background: transparent;
    border: none;
    cursor: pointer;
`;

const Modal = ({ selectedImg, onClose }) => {
    return (
        <>
            <BgModal>
                <DialogStyled open={true}>
                    <img src={selectedImg} />
                    <InfoSpaceModal>
                        <h2>Nome da foto</h2>
                        <span>Fonte/Fotógrafo/Satelite</span>
                    </InfoSpaceModal>
                    <CloseContainer>
                        <Close onClick={onClose}>X</Close>
                    </CloseContainer>
                </DialogStyled>
            </BgModal>
        </>
    );
};

export default Modal;
