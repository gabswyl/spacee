import React from 'react'
import popularitygallery from "../mocks/popularitygallery.json";
import Button from './Button';
import styled from 'styled-components';

    const SectionPopular = styled.div`
    h1 {
        font-weight: 400;
        color: #7B78E5;
        text-align: center;
    }
    `

    const GalleryPopular = styled.div`
    margin-bottom: 20px;
    img {
        border-radius: 20px;
    }
    `
const Popularity = () => {

  return (
    <SectionPopular>
        <h1>Populares</h1>
        {popularitygallery.map((item) => (
            <GalleryPopular key={item.id}>
                <img  key={item.id} src={`popularity/${item.img}`} alt={item.alt}/>
            </GalleryPopular>
        ))}
        <Button />
    </SectionPopular>
  )
}

export default Popularity