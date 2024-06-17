import React from 'react';
import './EstudoGrid.css';
import { Container, Grid } from '@material-ui/core';

const Estudo = () => {

    return (
        <>
        <div className='geral'>
        <img src="https://www.friboi.com.br/_next/image/?url=https%3A%2F%2Ffuture-brand-frib.s3.amazonaws.com%2Fhamburguer_maturatta_seu_favorito_desktop_f11c813d59.png&w=1440&q=85" alt="Imagem para tela md" />
            <Container>
                <Grid>
                    <h1 className='textoEstudo'>gestão</h1>
                </Grid>
            </Container>
        </div>
        </>
    )
}

export default Estudo;

