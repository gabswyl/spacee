import styled from "styled-components";
import Header from "./componentes/Header";
import SideBar from "./componentes/SideBar";
import Banner from "./componentes/Banner";
import Gallery from "./componentes/Gallery";
import Popularity from "./componentes/Popularity";
import Tags from "./componentes/Tags";
import Modal from "./componentes/Modal";
import { useState } from "react";

const BgGradient = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const GridContainer = styled.div`
width: 1440px;
margin: 0 auto;
max-width: 100%;
`

const MainContainer = styled.main`
display: flex;
gap: 24px;
`

const ColumnContainer = styled.section`
display: flex;
flex-direction: column;
flex-grow: 1;
`

const FlexContainer = styled.section`
display: flex;
`

function App() {
  return (
    <BgGradient>
      <GridContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <ColumnContainer>
            <Banner />
            <Tags />
            <FlexContainer>
              <Gallery />
              <Popularity />
            </FlexContainer>
          </ColumnContainer>
        </MainContainer>
      </GridContainer>
    </BgGradient>
  )
}

export default App;
