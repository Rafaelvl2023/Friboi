import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Propaganda: React.FC = () => {
  // Estado para armazenar o tamanho da tela
  const [screenSize, setScreenSize] = useState<number>(window.innerWidth);

  // Atualiza o tamanho da tela quando ocorrer um redimensionamento da janela
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Estilização do componente de imagem
  const ImgStyled = styled.img`
    height: 100vh;
    width: 100%;
  `;

  // Renderização condicional da imagem com base no tamanho da tela
  const renderImage = () => {
    if (screenSize >= 768) { // md
      return <ImgStyled src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_seu_favorito_desktop_f11c813d59.png&w=1440&q=85" alt="Imagem para tela md" />;
    } else { // xs
      return <ImgStyled src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_seu_favorito_mobile_f36775be14.png&w=480&q=85" alt="Imagem para tela xs" />;
    }
  };

  return (
    <>
      {/* Renderização condicional da imagem */}
      {renderImage()}
    </>
  );
};

export default Propaganda;

